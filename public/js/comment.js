const makeComment = async (event) => {

    event.preventDefault();
    const post = document.querySelector(".post");
    const postId = post.getAttribute("id")
    const user = document.querySelector(".user");
    const userId = user.getAttribute("id");
    const text = document.querySelector("#text").value.trim();
    
    if (text && userId) {
      const response = await fetch("/api/user/comment", {
        method: "POST",
        body: JSON.stringify({
            comment_text:text,
            user_id:userId,
            post_id:postId
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      console.log(response);
  
      if (response.ok) {
        location.reload()
      } else {
        alert(response.statusText);
        console.log(response);
      }
    }
  };

document
  .querySelector(".comment-form")
  .addEventListener("submit", makeComment );