// =========================
// ARTWORKS RENDER
// =========================
function renderArtworks() {
    const digitalGrid = document.getElementById("digital-grid");
    const traditionalGrid = document.getElementById("traditional-grid");
    if (!digitalGrid || !traditionalGrid) {
        return;
    }
    // Clear existing cards
    digitalGrid.innerHTML = "";
    traditionalGrid.innerHTML = "";
    artworks.forEach(artwork => {
        const card = document.createElement("a");
        card.href = "#";
        card.className = "category-card";
        // Image
        const imageContainer = document.createElement("div");
        imageContainer.className = "category-image";
        const image = document.createElement("img");
        image.src = artwork.image;
        image.alt = artwork.title.en;
        imageContainer.appendChild(image);
        // Title
        const title = document.createElement("div");
        title.className = "category-name";
        title.setAttribute("data-en", artwork.title.en);
        title.setAttribute("data-he", artwork.title.he);
        title.textContent = artwork.title.en;
        // Description
        const description = document.createElement("div");
        description.className = "category-description";
        description.setAttribute("data-en", artwork.description.en);
        description.setAttribute("data-he", artwork.description.he);
        description.textContent = artwork.description.en;
        // Build card
        card.appendChild(imageContainer);
        card.appendChild(title);
        card.appendChild(description);
        // Add to the correct section
        if (artwork.category === "digital") {
            digitalGrid.appendChild(card);
        }
        if (artwork.category === "traditional") {
            traditionalGrid.appendChild(card);
        }
    });
}
// =========================
// START
// =========================
document.addEventListener("DOMContentLoaded", renderArtworks);
