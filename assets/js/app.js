/* app js  */

// selector 
const countryWrapper = document.querySelector(".country-list"),
    selectContent = document.querySelector(".select-content"),
    searchWrapper = document.querySelector(".search-wrapper input"),
    selectWrapper = document.querySelector(".select-wrapper");

/* work with search terms  */
searchWrapper.addEventListener("keyup", (event) => {
    let value = event.target.value.toLowerCase();
    let arr = [];
    arr = countryList.filter(data => {
        return data.toLowerCase().startsWith(value);
    }).map(value => `<li onclick='update(this);'  >${value}</li>`).join("");
    countryWrapper.innerHTML = arr;

})

/* get a country in country lists  */
function showCountryList(countries, currentCountry) {
    countryWrapper.innerHTML = '';
    countries.forEach(country => {
        let selected = country == currentCountry ? 'selected' : '';
        let countryTag = `<li onclick='update(this);' class="${selected}">${country}</li>`;
        countryWrapper.insertAdjacentHTML('beforeend', countryTag);
    });
};
showCountryList(countryList);

// show country list items 
selectWrapper.addEventListener("click", () => {
    selectContent.classList.toggle("active");
    // icon 
    selectWrapper.querySelector("i").classList.toggle('active');
})

/* select value update  */
function update(target) {
    searchWrapper.value = '';
    let currentCountry = selectWrapper.querySelector('.name').innerText = target.innerText;
    selectContent.classList.remove('active');
    showCountryList(countryList, currentCountry)
}