const fetch = require('node-fetch');

const getPeoplePromise = fetch => {
    return fetch('https://swapi.py4e.com/api/people')
        .then(response => response.json())
        .then(data => {
            // console.log('promise version')
            // console.log(data);
            return {
                count: data.count,
                results: data.results
            }
        })
}

// async await version of above code

const getPeopleAsync = async (fetch) => {
    const getRequest = await fetch('https://swapi.py4e.com/api/people')
    const data = await getRequest.json()
    // console.log('async version')
    // console.log(data);
    return {
        count: data.count,
        results: data.results
    }
}

// getPeoplePromise(fetch);
// getPeopleAsync(fetch);

module.exports = {
    getPeopleAsync,
    getPeoplePromise
}