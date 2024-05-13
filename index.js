document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/games");

    if (!res.ok) {
      throw new Error(`http error status ${res.status}`);
    }

    const data = await res.json();

    const title = data.map((game) => game.title).join("\n");
    const thumbnail = data.map((game) => game.thumbnail).join("\n");
    const short_description = data.map((game) => game.short_description).join("\n");

    const arrTitle = title.split("\n");
    const arrThumbnail = thumbnail.split("\n");
    const arrShort_description = short_description.split("\n");

    const arrGame = [];

    for (let i = 0; i < arrGame.length; i++) {
      arrGame.push(new gameClass(arrTitle[i], arrThumbnail[i], arrShort_description[i]));
    }
    arrGame.forEach((url) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");

      cardContainer.style.margin = "10%";

      const imgElement = document.createElement("img");
      imgElement.src = url.thumbnail;
      imgElement.alt = "svg image";
      imgElement.width = 100;
      imgElement.height = 100;

      const h3Title = document.createElement("h3");
      h3Title.innerText = url.title;

      const h3Des = document.createElement("h3");
      h3Des.innerText = url.short_description;

      cardContainer.appendChild(imgElement);
      cardContainer.appendChild(h3Title);
      cardContainer.appendChild(h3Des);

     document.getElementById("svgcontainer").appendChild(cardContainer)
    });
  } catch (error) {
    console.log("fetch error2");
  }
});
