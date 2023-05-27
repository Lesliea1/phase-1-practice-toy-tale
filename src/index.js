let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyCollection = document.querySelector("#toy-collection");

fetch("/toys", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  })
})

  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach((toy) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const div = document.createElement("div");
      div.className = "card";

      const h2 = document.createElement("h2");
      h2.textContent = "Woody";

      const img = document.createElement("img");
      img.className = "toy-avatar";
      img.src = "[toy_image_url]";

      const p = document.createElement("p");
      p.textContent = "4 Likes";

      const button = document.createElement("button");
      button.className = "like-btn";
      button.id = "[toy_id]";
      button.textContent = "Like ❤️";

      div.appendChild(h2);
      div.appendChild(img);
      div.appendChild(p);
      div.appendChild(button);

      document.body.appendChild(div);

      toyCollection.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
