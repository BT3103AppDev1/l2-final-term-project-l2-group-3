import axios from 'axios'

const options = {
    method: 'GET',
    url: 'https://jsearch.p.rapidapi.com/search',
    params: {
        query: 'Data analyst in Singapore',
        page: '1',
        num_pages: '1'
    },
    headers: {
        'X-RapidAPI-Key': '2fe0ed2490mshb0f9443b9aff94dp1e2bb5jsn412671b0c982',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}