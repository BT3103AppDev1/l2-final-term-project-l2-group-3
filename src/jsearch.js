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
    let counter = 1
	const response = await axios.request(options);
	response.data['data'].forEach(job => { 
        if (emptype.includes(job["job_employment_type"])) {
            const id = job["job_id"] 

            if ((jobportals.includes("Others")) && !["Indeed", "LinkedIn", "Glassdoor"].includes(job["job_publisher"])) {

                dic[id] = {job_title: job["job_title"], job_publisher: job["job_publisher"], company: job["employer_name"],
                    employer_logo: job["employer_logo"], job_description: job["job_description"], job_apply_link: job["job_apply_link"],
                    job_google_link: job["job_google_link"], job_posted_date: job["job_posted_at_datetime_utc"], job_city: job["job_city"],
                    job_industry: job["employer_company_type"], job_emptype: job["job_employment_type"], job_expiry: job["job_posted_at_datetime_utc"], job_id: job["job_id"]
                }
            }

            else {
                if (jobportals.includes(job["job_publisher"])) {
                    dic[id] = {job_title: job["job_title"], job_publisher: job["job_publisher"], company: job["employer_name"],
                        employer_logo: job["employer_logo"], job_description: job["job_description"], job_apply_link: job["job_apply_link"],
                        job_google_link: job["job_google_link"], job_posted_date: job["job_posted_at_datetime_utc"], job_city: job["job_city"],
                        job_industry: job["employer_company_type"], job_emptype: job["job_employment_type"], job_expiry: job["job_offer_expiration_datetime_utc"], job_id: job["job_id"]
                    }
                    counter ++
                }
            }
        }
    })
    return dic


} catch (error) {
	console.error(error);
    console.error("may have ran out of credits")
}
}
//RetrieveJobs("Data analyst", "INTERN", ["LinkedIn", "Glassdoor"])