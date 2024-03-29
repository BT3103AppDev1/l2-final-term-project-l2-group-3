import axios from 'axios';

export async function RetrieveJobs(title, emptype, jobportals) {

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
        query: `${title} in Singapore`,
        num_pages: '20',
        employment_types: emptype,
        },
    headers: {
        'X-RapidAPI-Key': '21fc1a264dmsh107991b3ba3b41ep1916e5jsnf7bd91d50a7d',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
};

try {
    const dic = {}
    let counter = 0
	const response = await axios.request(options);
	response.data['data'].forEach(job => { 
        if (job["job_employment_type"] == emptype && jobportals.includes(job["job_publisher"])) {
            console.log(job["job_employment_type"] + job["job_publisher"]);
            counter ++
        }
    })
    console.log(counter)

} catch (error) {
	console.error(error);
    console.error("may have ran out of credits")
}
}
RetrieveJobs("Data analyst", "INTERN", ["LinkedIn", "Glassdoor"])