// Функція відправки даних з HTML-форми до гугл-форми 
function sendData() {
  var url =
    "https://script.google.com/macros/s/AKfycbxiFJZa-c4tQX2CGonPi-k_0UrXzT4L1ABYCo-M1YuGi7jaOO0wwnXmP0kvn5Lbj06y/exec";
  var formData = new FormData(document.getElementById("booking"));
  formData.append("authToken", "abcdefghijklmnopqrstuvwxyz1234567890");
  fetch(url, { method: "POST", body: formData })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.text();
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (error) {
      console.error("There was a problem with the fetch operation:", error);
    });
}


// Обробник події для відправки даних з HTML-форми до гугл-форми при натисканні кнопки "Request a quote"
document
  .getElementById("launch-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    sendData();
  });

// Обробник події для відображення модального вікна з підтвердженням успішної відправки даних після відправлення AJAX-запиту
const modal = document.querySelector(".modal");
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    modal.style.display = "block";
  }
};

// Обробник події для закриття модального вікна при натисканні кнопки "ok"
document.querySelector(".btn_ok").addEventListener("click", function () {
  modal.style.display = "none";
});
