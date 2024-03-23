import axios from 'axios';

// Define the URL and parameters
const url = "https://api.scrapingdog.com/scrape?api_key=65fef29c3452ba2128e9b0a5&url=https://www.glassdoor.sg/Job/index.htm&dynamic=false";

export async function RetrieveJobs(title) {
    const params = {
        api_key: "65fef29c3452ba2128e9b0a5"
    };

    try {
        let dic = {}
        const response = await axios.get(url, { params })

        if (response.status === 200) {
            // Access the response data
            const data = response.data;

            let counter = 1;
            data.forEach(element => {                
                dic[counter++] = element
            })
            console.log(dic)
            return dic;
            
        } else {
            console.log("Request failed with status code:", response.status);
        }
    }
    catch (error){
        console.error("An error occurred:", error);
    }
}

RetrieveJobs("data")