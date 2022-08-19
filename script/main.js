const cards = {
  backCard: {
    id: 0,
    url: "/assets/img/back.png",
    state: true,
  },
  cardOfMione: {
    id: 1,
    url: "/assets/img/mion.jpg",
    state: false,
  },
  cardOfThreeTwo: {
    id: 2,
    url: "/assets/img/mion.jpg",
    state: false,
  },
  cardOfThree: {
    id: 3,
    url: "/assets/img/three.jpg",
    state: false,
  },
  cardOfThreeTwo: {
    id: 4,
    url: "/assets/img/three.jpg",
    state: false,
  },
};

const cardSection = document.querySelector(".card-section");
let quantifierClicks = 0;
let arrayOfItens = [];

const createCards = () => {
  const cardOfThreeOne = document.createElement("img");
  const cardOfThreeTwo = document.createElement("img");
  const cardOfMiOne = document.createElement("img");
  const cardOfMioneTwo = document.createElement("img");
  const backCard = document.createElement("img");

  cardOfThreeOne.setAttribute("id", `${cards.cardOfThree.id}`);
  cardOfThreeOne.setAttribute("src", `${cards.cardOfThree.url}`);
  cardOfThreeOne.classList.add("couple");
  cardSection.appendChild(cardOfThreeOne);

  cardOfThreeTwo.setAttribute("id", `${cards.cardOfThree.id}`);
  cardOfThreeTwo.setAttribute("src", `${cards.cardOfThree.url}`);
  cardOfThreeTwo.classList.add("couple");
  cardSection.appendChild(cardOfThreeTwo);

  cardOfMiOne.setAttribute("id", `${cards.cardOfMione.id}`);
  cardOfMiOne.setAttribute("src", `${cards.cardOfMione.url}`);
  cardOfMiOne.classList.add("couple");
  cardSection.appendChild(cardOfMiOne);

  cardOfMioneTwo.setAttribute("id", `${cards.cardOfMione.id}`);
  cardOfMioneTwo.setAttribute("src", `${cards.cardOfMione.url}`);
  cardOfMioneTwo.classList.add("couple");
  cardSection.appendChild(cardOfMioneTwo);

  backCard.setAttribute("id", `${cards.backCard.id}`);
  backCard.setAttribute("src", `${cards.backCard.url}`);
  backCard.classList.add("single");
  // cardSection.appendChild(backCard);

  const image = document.querySelectorAll(".couple");
  console.log("image: ", NodeList.image);
  const arrayOfCards = [...image];
  console.log("arrayOfCards", arrayOfCards);
  arrayOfCards.forEach((item) => {
    item.addEventListener("click", function () {
      quantifierClicks = quantifierClicks + 1;
      arrayOfItens.push(item);
      console.log("arrayOfItens", arrayOfItens);
      if (arrayOfItens.length === 3) {
        return (arrayOfItens = [""]);
      }
      return;

      const indice = arrayOfCards.indexOf(item);
      console.log("clicou", item, "no indice: ", indice);

      // console.log("quantifier", quantifierClicks);
      // if (quantifierClicks > 0 && quantifierClicks < 3) {
      //   if (indice === 0 && indice === 1) {
      //     console.log("par");
      //   }
    });
  });
};

createCards();
