const loginFormHandler = async (event) => {

  event.preventDefault();

  const email = document.querySelector("#email").value.trim();

  const password = document.querySelector("#password").value.trim();

  console.log("LOGIN");

  if (email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    console.log(response);

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
      console.log(response);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
