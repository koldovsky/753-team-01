(function () {
  
const cityNames = ["oslo", "trondheim", "bodo", "lofoten", "tromso"];

function handleCityButtonClick(event) {
  // Stop automatic scrolling
  event.preventDefault();
  // Call the function -showCity  for the city using the link
  const cityIndex = parseInt(event.target.dataset.city, 10);
  showCity(cityIndex);
}

function showCity(city) {
  let cityContainers = document.querySelectorAll(".places__city_container");
  let cityButtons = document.querySelectorAll(".places__btn-city");

  cityContainers.forEach(function (cityContainer) {
    if (cityContainer !== null) {
      cityContainer.style.display = "none";
    }
  });

  cityButtons.forEach(function (cityButton) {
    if (cityButton !== null) {
      cityButton.classList.remove("active");
      cityButton.addEventListener("click", handleCityButtonClick);
    }
  });

  let activeCityContainer = document.getElementById(cityNames[city - 1]);
  let activeCityButton = document.querySelector(`[data-city="${city}"]`);
  //check  variable - city
  if (city < 1 || city > cityNames.length) {
    console.error(`Invalid city index: ${city}`);
    return;
  }

  if (activeCityContainer !== null) {
    activeCityContainer.style.display = "grid";
    activeCityContainer.style.gridAutoColumns;
  }

  if (activeCityButton !== null) {
    activeCityButton.classList.add("active");
  }
}

// Hide all cities
let cityContainers = document.querySelectorAll(".places__city_container");
cityContainers.forEach(function (cityContainer) {
  if (cityContainer !== null) {
    cityContainer.style.display = "none";
  }
});

// Show the first city by default
showCity(1);
})()