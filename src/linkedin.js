import axios from 'axios';

// Define the URL and parameters
const url = "https://api.scrapingdog.com/linkedinjobs/";
const params = {
    api_key: "65ee9b9b17a1b774efc6602a",
    field: "python",
    geoid: "102454443",
    page: 1
};

// Send a GET request with the parameters
axios.get(url, { params })
    .then(response => {
        // Check if the request was successful (status code 200)
        if (response.status === 200) {
            // Access the response data
            const data = response.data;
            console.log(data);
        } else {
            console.log("Request failed with status code:", response.status);
        }
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
