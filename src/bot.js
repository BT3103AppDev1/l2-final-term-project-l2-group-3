import TelegramBot from 'node-telegram-bot-api';
import firebaseApp from '/Users/Shawn/Desktop/y2s2/bt3103/l2-final-term-project-l2-group-3/src/firebase.js';
import { getFirestore, query, where, collection, getDocs, Timestamp, setDoc, doc } from 'firebase/firestore';


import cron from 'node-cron';
const token = '6821540414:AAGh-RVIIo6GHBWauWAgth90dKaf_uZSU74';
const bot = new TelegramBot(token, {polling: true});
var reminded = new Array()

let chatId = null


console.log("started bot")

const db = getFirestore(firebaseApp);
const usersRef = collection(db, "Users")

bot.onText(/\/start (.+)/, async (msg, match) => {
    const chatId = msg.chat.id;
    const token = match[1]; // The unique token from the deep link
    console.log(token)

    const q = query(usersRef, where("credentials.userid", "==", String(token)));

    try {
        const querySnapshot = await getDocs(q);
        const name = querySnapshot.docs[0].data()["credentials"]["firstname"]

        const userid = querySnapshot.docs[0].id
        await setDoc(doc(db, "Users", userid), { credentials: {teleChatId: chatId}}, { merge: true})
        
        bot.sendMessage(chatId, `Welcome ${name}, you are now signed in! There are 3 features to given explore in this chatbot.\
                        \n\n<b><u>View upcoming events</u></b> allows you to view the upcoming key events for the month, including application deadlines, job offer acceptance deadlines and interview dates etc.\
                        \n\n<b><u>Add new event</u></b> allows you to add a job event, this event will be synced to the calendar on the website.\n\n<b><u>Visit website</u></b> redirects you to our official website.\
                        \n\nYou can also use our command handlers by starting your message with a \"\/\", thank you for using KiasuCareersBot!"`, 
                        {reply_markup: { keyboard: [['View upcoming events'], ['Add new event'], ['Visit website']], one_time_keyboard: true }, parse_mode: 'HTML'  
        });
    }
    catch (error) {
        bot.sendMessage(chatId, 'Authentication failed. Please go back to our website and click on telegram to be redirected here again.', {reply_markup: { keyboard: [['Visit website']], one_time_keyboard: true }, parse_mode: 'HTML'  })
    }
})


bot.onText(/\/start/, async (msg) => {
    chatId = msg.chat.id;
    const q = query(usersRef, where("credentials.teleChatId", "==", chatId));

    try {
        const querySnapshot = await getDocs(q);
        const name = querySnapshot.docs[0].data()["credentials"]["firstname"]
        
        bot.sendMessage(chatId, `Welcome ${name}, you are now signed in! There are 3 features to given explore in this chatbot.\
                        \n\n<b><u>View upcoming events</u></b> allows you to view the upcoming key events for the month, including application deadlines, job offer acceptance deadlines and interview dates etc.\
                        \n\n<b><u>Add new event</u></b> allows you to add a job event, this event will be synced to the calendar on the website.\n\n<b><u>Visit website</u></b> redirects you to our official website.\
                        \n\nYou can also use our command handlers by starting your message with a \"\/\", thank you for using KiasuCareersBot!"`, 
                        {reply_markup: { keyboard: [['View upcoming events'], ['Add new event'], ['Visit website']], one_time_keyboard: true }, parse_mode: 'HTML'  
        });
    }
    catch (error) {
        bot.sendMessage(chatId, 'Authentication failed. Do you have an account with us? If not, register for an account on our website.', {reply_markup: { keyboard: [['Visit website']], one_time_keyboard: true }, parse_mode: 'HTML'  });
    }
});


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
  
    if (msg.text == "View upcoming events" || msg.text == "/viewevents"){ 
        const q = query(usersRef, where("credentials.teleChatId", "==", chatId));
        try {
            let output = "The following are your scheduled events \n\n";
            const querySnapshot = await getDocs(q)
            const eventsdata = querySnapshot.docs[0].data()["events"]

            let counter = 1
            for (const e in eventsdata) {
                const formatter = new Intl.DateTimeFormat('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })

                const ename = eventsdata[e].eventname
                const edatestamp = "<b><u>" + formatter.format(eventsdata[e].eventstartdatetime.toDate()) + "</u></b>"
                output += counter++ + ") " + ename + " " + edatestamp+ "\n\n"
            }
            
            bot.sendMessage(chatId, output, {parse_mode: "HTML"})
        } catch (error) {
            bot.sendMessage(chatId, "You do not have any upcoming key events in your KiasuCareers calendar")
        }
    }

    else if (msg.text == "Add new event" || msg.text == "/addevent") {
        bot.sendMessage(chatId, "Enter your event details in this format (event, start, end). \n\n{event name/description}, {yyyy-mm-dd HH:MM}, {yyyy-mm-dd HH:MM}");
    }
    else if (msg.text.includes(",")) {
        const eventdetails = msg.text.split(",")
        const q = query(usersRef, where("credentials.teleChatId", "==", chatId));
        try {
            const querySnapshot = await getDocs(q)
            let index = null;
            if (querySnapshot.docs[0].data()["events"] != null) {
                index = Object.keys(querySnapshot.docs[0].data()["events"]).length + 1
            } else {
                index = 1
            }
            
            const start = Timestamp.fromDate(new Date(eventdetails[1]))
            const end = Timestamp.fromDate(new Date(eventdetails[2]))

            const userid = querySnapshot.docs[0].id

            const key = eventdetails[0] + start
            
            await setDoc(doc(db, "Users", userid), { events: {[key]: {eventname: eventdetails[0], eventstartdatetime: start, eventenddatetime: end}}}, { merge: true})
            bot.sendMessage(chatId, "Your event has been captured into our database, you can check all of your events by clicking \"View upcoming events\" using our command \/viewevents.");

        }
        catch (error) {
            console.error(error);
            bot.sendMessage(chatId, "Failed to add event, please try again.");
        }
    }
})

async function checkAndSendReminders() {
    const now = new Date();
    const twentyFourHoursLater = new Date(now.getTime() + (24 * 60 * 60 * 1000));
    const target = Timestamp.fromDate(twentyFourHoursLater);
    const q = query(usersRef, where("credentials.teleChatId", "==", chatId));
    try {
        const querySnapshot = await getDocs(q)
        Object.entries(querySnapshot.docs[0].data()["events"]).forEach(([key, val]) => {
            if (val.eventstartdatetime <= target && !reminded.includes(val.eventname)) {
                const formatter = new Intl.DateTimeFormat('en-US', {
                    day: '2-digit',
                    month: '2-digit',
                    year: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })
                const finaldatetime = "<b><u>" + formatter.format(val.eventstartdatetime.toDate()) + "</u></b>"
                const msg = "Reminder: "+ val.eventname + " is happening in less than 24 hours at " + "(" + finaldatetime + ")";
                reminded.push(val.eventname)
                bot.sendMessage("307219207", msg, {parse_mode: 'HTML'})
            }
        })
    } catch(error) {
        console.log(error)
        bot.sendMessage("307219207","error occurred")
    }
}


// Replace this with your actual cron schedule
cron.schedule('* * * * *', async () => {
    console.log('Checking for events happening in the next 24 hours...');
    checkAndSendReminders();
});
