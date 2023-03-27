const cityNames = ["oslo", "trondheim", "bodo", "lofoten", "tromso"];

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
    }
  });

  let activeCityContainer = document.getElementById(cityNames[city - 1]);
  let activeCityButton = document.querySelector(`[data-city="${city}"]`);
  //перевірити змінну city
  if (city < 1 || city > cityNames.length) {
    console.error(`Invalid city index: ${city}`);
    return;
  }
//
  if (activeCityContainer !== null) {
    activeCityContainer.style.display = "grid";
    activeCityContainer.style.gridAutoColumns;
  }

  if (activeCityButton !== null) {
    activeCityButton.classList.add("active");
  }
}

// Приховати всі міста
let cityContainers = document.querySelectorAll(".places__city_container");
cityContainers.forEach(function (cityContainer) {
  if (cityContainer !== null) {
    cityContainer.style.display = "none";
  }
});

// Показати перше місто за замовчуванням
let firstCityButton = document.querySelector(
  '.places__btn-city[data-city="1"]'
);
if (firstCityButton !== null) {
  firstCityButton.click();  
}

console.log("JavaScript файл підключено");
