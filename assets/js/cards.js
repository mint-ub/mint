const cards = [
  {
    id: 1,
    imageUrl: "/assets/images/games/angry-birds.png",
    heading: "Angry Birds",
    link: "https://mint-ub.github.io/games/angry-birds"
  },
  {
    id: 2,
    imageUrl: "/assets/images/games/aquapark-io.png",
    heading: "Aquapark.io",
    link: "https://mint-ub.github.io/games/aquapark-io"
  },
  {
    id: 3,
    imageUrl: "/assets/images/games/bad-piggies.png",
    heading: "Bad Piggies",
    link: "https://mint-ub.github.io/games/bad-piggies"
  },
  {
    id: 4,
    imageUrl: "/assets/images/games/baldis-basics-in-education-and-learning.png",
    heading: "Baldi's Basics in Education and Learning",
    link: "https://mint-ub.github.io/games/baldis-basics-in-education-and-learning"
  },
  {
    id: 5,
    imageUrl: "/assets/images/games/bendy-and-the-ink-machine.png",
    heading: "Bendy and the Ink Machine",
    link: "https://mint-ub.github.io/games/bendy-and-the-ink-machine"
  },
  {
    id: 6,
    imageUrl: "/assets/images/games/cut-the-rope.png",
    heading: "Cut The Rope",
    link: "https://mint-ub.github.io/games/cut-the-rope"
  },
  {
    id: 7,
    imageUrl: "/assets/images/games/doki-doki-literature-club.png",
    heading: "Doki Doki Literature Club",
    link: "https://mint-ub.github.io/games/doki-doki-literature-club"
  },
  {
    id: 8,
    imageUrl: "/assets/images/games/geometry-dash.png",
    heading: "Geometry Dash",
    link: "https://mint-ub.github.io/games/geometry-dash"
  },
  {
    id: 9,
    imageUrl: "/assets/images/games/geometry-dash-meltdown.png",
    heading: "Geometry Dash Meltdown",
    link: "https://mint-ub.github.io/games/geometry-dash-meltdown"
  },
  {
    id: 10,
    imageUrl: "/assets/images/games/geometry-dash-subzero.png",
    heading: "Geometry Dash Subzero",
    link: "https://mint-ub.github.io/games/geometry-dash-subzero"
  },
  {
    id: 11,
    imageUrl: "/assets/images/games/geometry-dash-world.png",
    heading: "Geometry Dash World",
    link: "https://mint-ub.github.io/games/geometry-dash-world"
  },
  {
    id: 12,
    imageUrl: "/assets/images/games/granny.png",
    heading: "Granny",
    link: "https://mint-ub.github.io/games/granny"
  },
  {
    id: 13,
    imageUrl: "/assets/images/games/kindergarten.png",
    heading: "Kindergarten",
    link: "https://mint-ub.github.io/games/kindergarten"
  },
  {
    id: 14,
    imageUrl: "/assets/images/games/red-ball-4.png",
    heading: "Red Ball 4",
    link: "https://mint-ub.github.io/games/red-ball-4"
  },
  {
    id: 15,
    imageUrl: "/assets/images/games/retro-bowl.png",
    heading: "Retro Bowl",
    link: "https://mint-ub.github.io/games/retro-bowl"
  },
  {
    id: 16,
    imageUrl: "/assets/images/games/rolling-sky.png",
    heading: "Rolling Sky",
    link: "https://mint-ub.github.io/games/rolling-sky"
  },
  {
    id: 17,
    imageUrl: "/assets/images/games/sans-battle-simulator.png",
    heading: "Sans Battle Simulator",
    link: "https://mint-ub.github.io/games/sans-battle-simulator"
  },
  {
    id: 18,
    imageUrl: "/assets/images/games/subway-surfers.png",
    heading: "Subway Surfers",
    link: "https://mint-ub.github.io/games/subway-surfers"
  },
  {
    id: 19,
    imageUrl: "/assets/images/games/tag.png",
    heading: "Tag",
    link: "https://mint-ub.github.io/games/tag"
  },
  {
    id: 20,
    imageUrl: "/assets/images/games/temple-run-2.png",
    heading: "Temple Run 2",
    link: "https://mint-ub.github.io/games/temple-run-2"
  },
  {
    id: 21,
    imageUrl: "/assets/images/games/tomb-of-the-mask.png",
    heading: "Tomb of the Mask",
    link: "https://mint-ub.github.io/games/tomb-of-the-mask"
  },
  {
    id: 22,
    imageUrl: "/assets/images/games/turbo-dismounting.png",
    heading: "Turbo Dismounting",
    link: "https://mint-ub.github.io/games/turbo-dismounting"
  }
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
