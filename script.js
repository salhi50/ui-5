const iconsToggleTheme = [...document.querySelectorAll('[data-type]')];
let houseNameElements = [...document.querySelectorAll(".house--title .heading")];
let houseLocationsElements = [...document.querySelectorAll(".house--location p")];
const arrHouseNames = [
    '1024 Somma Way',
    '1901 Thornridge Cir',
    '6391 Elgin St. Celina',
    '4140 Parker Rd Allentown',
    '2462 Royal Ln. Messa',
    '2715 Ash Dr. San Hose'
]
const arrHouseLocations = [
    'FES, Morocco',
    'Tanger, Morocco',
    'Rabat, Morocco',
    'Casablanca, Morocco',
    'Al Jadida, Morocco',
    'Settat, Morocco',
]




iconsToggleTheme.forEach((ic,indx,arr) => {
    ic.addEventListener("click", (e) => {
        document.body.classList = "";
        document.body.classList.add(`${arr[indx].dataset.type}--theme`);
        arr.forEach((item) => item.classList.remove("d-none"));
        arr[indx].classList.add("d-none");
    })    
})


houseNameElements.forEach((name,indx) => {
    name.innerHTML = arrHouseNames[indx];
})
houseLocationsElements.forEach((location,indx) => {
    location.innerHTML = arrHouseLocations[indx];
})