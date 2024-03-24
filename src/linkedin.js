import axios from 'axios';

// Define the URL and parameters


export async function RetrieveJobsFromLinkedIn(title) {
    const url = "https://api.scrapingdog.com/linkedinjobs/";
    const params = {
        api_key: "65ee9b9b17a1b774efc6602a",
        field: title,
        geoid: "102454443",
        page: 1
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
            //console.log(dic)
            return dic;
            
        } else {
            console.log("Request failed with status code:", response.status);
        }
    }
    catch (error){
        console.error("An error occurred:", error);
    }
}

//RetrieveJobsFromLinkedIn("data")