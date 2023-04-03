(function () {
  const form = document.querySelector(".contact-book__forma");
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal");
  const formaContainer = document.querySelector(".forma_container");
  const contactBook = document.querySelector(".contact-book");

  const showModal = () => {
    body.classList.add("modal-open");
    form.classList.add("modal-open");
    formaContainer.classList.add("modal-open");
    contactBook.classList.add("modal-open");
    modal.style.display = "block";
  };

  const hideModal = () => {
    body.classList.remove("modal-open");
    form.classList.remove("modal-open");
    formaContainer.classList.remove("modal-open");
    contactBook.classList.remove("modal-open");
    modal.style.display = "none";
  };

  const showError = () => {
    showModal();
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { value: name } = document.querySelector(".input-name");
    const { value: tel } = document.querySelector(".input-tel");
    const { value: email } = document.querySelector(".input-email");
    const { value: date } = document.querySelector(".input-date");

    fetch("https://formspree.io/f/mwkjraqv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, tel, email, date }),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          showModal();
        } else {
          showError();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        showError();
      });
  });

  modal.querySelector(".close-btn").addEventListener("click", hideModal);
  modal.querySelector(".btn_ok").addEventListener("click", hideModal);
})();
