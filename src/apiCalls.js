const myHeaders = new Headers(); myHeaders.append("X-eBirdApiToken", "cbf0pmjd3n1t");
const requestOptions = { method: 'GET', headers: myHeaders, redirect: 'follow' };

export const getBirds = (currentState) => {
  return fetch(`https://api.ebird.org/v2/data/obs/US-${currentState}/recent`, requestOptions)
  .then(response => response.text())
}