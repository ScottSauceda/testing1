const fetch = require('node-fetch');
const swapi = require('./script2');

// it('calls swapi to get people with async', (done) => {
//     expect.assertions(1)
//     swapi.getPeopleAsync(fetch).then(data => {
//         expect(data.count).toEqual(87)
//         done();
//     })
// })

it('calls swapi to get people with async', () => {
    expect.assertions(1)
    return swapi.getPeopleAsync(fetch).then(data => {
        expect(data.count).toEqual(87)
    })
})

// it('calls swapi to get people with a promise', () => {
//     swapi.getPeoplePromise(fetch).then(data => {
//         expect(data.count).toEqual(87)
//     })
// })

it('calls swapi to get people with a promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})