const cards = [
  {
    id: 1,
    imageUrl: "/assets/images/na.png",
    heading: "AppName",
    link: "#"
  },
  {
    id: 2,
    imageUrl: "/assets/images/na.png",
    heading: "AppName2",
    link: "#"
  },
  {
    id: 3,
    imageUrl: "/assets/images/na.png",
    heading: "AppName3",
    link: "#"
  },

  {
    id: 4,
    imageUrl: "/assets/images/na.png",
    heading: "AppName4",
    link: "#"
  },

 
];

const cardContainer = document.querySelector(".cards");
const overlay = document.getElementById("iframe-overlay");
const iframe = document.getElementById("card-iframe");
const closeBtn = document.getElementById("close-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

function renderCards() {
  cardContainer.innerHTML = "";

  cards.forEach(card => {
    const cardEl = document.createElement("div");
    cardEl.className = "card";
    cardEl.innerHTML = `
      <a href="${card.link}">
        <img src="${card.imageUrl}" alt="${card.heading}">
        <h3>${card.heading}</h3>
      </a>
    `;

    
    const link = cardEl.querySelector("a");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      iframe.src = card.link; 
      overlay.style.display = "flex"; 
    });

    cardContainer.appendChild(cardEl);
  });
}

renderCards();


closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  iframe.src = ""; 
});


fullscreenBtn.addEventListener("click", () => {
  if (iframe.requestFullscreen) iframe.requestFullscreen();
  else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
  else if (iframe.msRequestFullscreen) iframe.msRequestFullscreen();
});
