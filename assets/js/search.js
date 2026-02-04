// search.js

function searchCards() {
    const query = document.getElementById("searchInput")?.value.toLowerCase() || "";
    if (!window.cardContainer) return;

    const cardElements = window.cardContainer.querySelectorAll(".card, a");

    cardElements.forEach(cardEl => {
        // If it's a direct <a> with <h3> inside (your placeholder), handle both
        const heading = cardEl.querySelector("h3");
        const link = cardEl.tagName === "A" ? cardEl : cardEl.querySelector("a");
        const text = heading ? heading.textContent.toLowerCase() : "";
        const href = link ? (link.getAttribute("href") || "").toLowerCase() : "";

        if (!query || text.includes(query) || href.includes(query)) {
            cardEl.style.display = "";
        } else {
            cardEl.style.display = "none";
        }
    });
}

function clearSearch() {
    if (!window.cardContainer) return;
    const cardElements = window.cardContainer.querySelectorAll(".card, a");
    cardElements.forEach(cardEl => cardEl.style.display = "");
}

function initSearch() {
    const searchInput = document.querySelector("input[placeholder='search']");
    const searchBtn = document.querySelector("button");

    if (searchInput) searchInput.addEventListener("input", searchCards);
    if (searchBtn) searchBtn.addEventListener("click", searchCards);
}

// Wait until the DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    initSearch();
});
