let searchInputEl = document.getElementById("searchInput");
let resultCountriesContEl = document.getElementById("resultCountries");
let countryList;
let spinnerEl = document.getElementById("spinner");

spinnerEl.classList.remove("d-none");

let createAndAppendCountry = function(each) {
    let name = each.name;
    let flag = each.flag;
    let population = each.population;


    let countryContEl = document.createElement("div");
    countryContEl.classList.add("country-card", "m-2", "d-flex", "flex-row", "col-11", "col-md-5");
    resultCountriesContEl.appendChild(countryContEl);

    let flagEl = document.createElement("img");
    flagEl.src = flag;
    flagEl.classList.add("country-flag");
    countryContEl.appendChild(flagEl);

    let dataCont = document.createElement("div");
    countryContEl.appendChild(dataCont);
    dataCont.classList.add("d-flex", "flex-column", "ml-3");

    let countryTitleEl = document.createElement("h1");
    countryTitleEl.textContent = name;
    dataCont.appendChild(countryTitleEl);
    countryTitleEl.classList.add("country-name");

    let populationEl = document.createElement("p");
    populationEl.textContent = population;
    dataCont.appendChild(populationEl);
    populationEl.classList.add("country-population");

};

let options = {
    method: "GET"
}

fetch("https://apis.ccbp.in/countries-data", options)
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        countryList = data;
        spinnerEl.classList.add("d-none");

        for (let each of data) {


            createAndAppendCountry(each);
        }

    });

let searchCountries = function(event) {
    resultCountriesContEl.textContent = "";
    let searchInput = event.target.value;


    for (let each_country of countryList) {
        let countryName = each_country.name;
        if (countryName.includes(searchInput)) {

            createAndAppendCountry(each_country);
        }
    }
}

searchInputEl.addEventListener("keyup", searchCountries);