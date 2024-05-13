document.getElementById("fetchButton").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:3000/games");

    if (!res.ok) {
      throw new Error(`http error status ${res.status}`);
    }

    const data = await res.json();

    const names = data.map((country) => country.name).join("\n");
    const flags = data.map((country) => country.flag).join("\n");
    const natives = data.map((country) => country.nativeName).join("\n");

    const arrNames = names.split("\n");
    const arrFlags = flags.split("\n");
    const arrNative = natives.split("\n");

    const arrCauntry = [];

    for (let i = 0; i < arrCauntry.length; i++) {
      arrCauntry.push(new countryClass(arrNames[i], arrFlags[i], arrNative[i]));
    }
    arrCauntry.forEach((url) => {
      const cardContainer = document.createElement("div");
      cardContainer.classList.add("card");

      cardContainer.style.margin = "10%";

      const imgElement = document.createElement("img");
      imgElement.src = url.flag;
      imgElement.alt = "svg image";
      imgElement.width = 100;
      imgElement.height = 100;

      const h3Names = document.createElement("h3");
      h3Names.innerText = url.name;

      const h3Native = document.createElement("h3");
      h3Native.innerText = url.native;

      cardContainer.appendChild(imgElement);
      cardContainer.appendChild(h3Names);
      cardContainer.appendChild(h3Native);
    });
  } catch (error) {
    console.log("fetch error2");
  }
});
