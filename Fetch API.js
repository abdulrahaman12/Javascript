fetch('https://api.covid19api.com/summary')
.then((apidata) => {
    // console.log(apidata);
    return apidata.json();
})
.then( (actualdata) => {
    // console.log(actualdata.Countries[101]);
    let mydata = actualdata.Countries[101];
    document.getElementById('apiindia').innerHTML = `The name of country is : ${mydata.Country} 
    slug : ${mydata.Slug} 
    The total recovered cases : ${mydata.TotalRecovered} `;
})
.catch( (error) => {
    console.log(`The Error :${error}`);
});