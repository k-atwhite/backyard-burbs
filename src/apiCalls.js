const myHeaders = new Headers(); myHeaders.append("X-eBirdApiToken", "cbf0pmjd3n1t");
const requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow' };
export const getBirdfetch('https://api.ebird.org/v2/data/obs/{{regionCode}}/recent')
  .then(response => response.json())
  .then(data => console.log(data))