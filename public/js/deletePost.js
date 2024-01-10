const deletePost = async (event) => {

    event.preventDefault();
    console.log("deleting post");
    const post = document.querySelector(".post");
    const postId = post.getAttribute("id");
   
  
    
  
    if (postId) {
      const response = await fetch("/api/user/deletePost", {
        method: "DELETE",
        body: JSON.stringify({id:postId }),
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
  
const deleteBtn = document.querySelector("#deletePost")
deleteBtn.addEventListener("click",deletePost);
  