
const makePost = async (event) => {

    event.preventDefault();

    const user = document.querySelector(".user");
    const userId = user.getAttribute("id");
    const title = document.querySelector("#title").value.trim();
  
    const text = document.querySelector("#text").value.trim();
    
    if (title && text && userId) {
      const response = await fetch("/api/user/post", {
        method: "POST",
        body: JSON.stringify({
            title:title,
            text:text,
            user_id:userId,
        }),
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
  .querySelector(".post-form")
  .addEventListener("submit", makePost );