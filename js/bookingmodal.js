(function () {
  const form = document.querySelector(".contact-book__forma");

  const showError = () => {
    alert("Oops, something went wrong. Please try again later.");
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { value: name } = document.querySelector(".input-name");
    const { value: tel } = document.querySelector(".input-tel");
    const { value: email } = document.querySelector(".input-email");
    const { value: date } = document.querySelector(".input-date");

    fetch("https://www.jsonkeeper.com/b/IEPV", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, tel, email, date }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Your request has been sent!");
          form.reset();
        } else {
          showError();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        showError();
      });
  });
})();
