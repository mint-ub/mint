// search.js

function searchCards() {
    if (!window.cardContainer) return;

    let query = document.getElementById("searchInput").value.toLowerCase();
    const cardElements = window.cardContainer.querySelectorAll(".card");

    cardElements.forEach(cardEl => {
        const heading = cardEl.querySelector("h3");
        const link = cardEl.querySelector("a");
        const text = heading.textContent.toLowerCase();
        const href = link.getAttribute("href").toLowerCase();

        if (text.includes(query) || href.includes(query)) {
            cardEl.style.display = "";
        } else {
            cardEl.style.display = "none";
        }
    });
}

function clearSearch() {
    if (!window.cardContainer) return;
    const cardElements = window.cardContainer.querySelectorAll(".card");
    cardElements.forEach(cardEl => cardEl.style.display = "");
}

window.addEventListener("load", () => {
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("search-btn");

    if (searchInput) searchInput.addEventListener("input", searchCards);
    if (searchBtn) searchBtn.addEventListener("click", searchCards);
});
