(function () {
  function sendData() {
    const url =
      "https://script.google.com/macros/s/AKfycbz_R_teVCn78nLzeSsUPw2QfElPyzD4DxQiA_fIzocO0Dq90Dzj671BIbEakXhT2vw6/exec";
    const formData = new FormData(document.getElementById("booking"));
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
        showModal();
      })
      .catch(function (error) {
        console.error("There was a problem with the fetch operation:", error);
      });
  }

  function showModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
  }

  document
    .getElementById("launch-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      sendData();
    });

  document.querySelector(".btn_ok").addEventListener("click", function () {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
  });

  document
    .getElementById("launch-btn")
    .addEventListener("click", function (event) {
      event.preventDefault();
      sendData();
    });

  const modal = document.querySelector(".modal");

  document.querySelector(".btn_ok").addEventListener("click", function () {
    modal.style.display = "none";
  });
})();