const navbarItems = [
    { "link": "https://www.minecraft.net/", "caption": "Minecraft" },
    { "link": "https://www.curseforge.com/minecraft", "caption": "CurseForge" },
    { "link": "https://modrinth.com/", "caption": "Modrinth" },
]

const navbarContainer = document.getElementById("navbar-items");

for (const item of navbarItems) {
    const newItem = document.createElement("li");

    const newLink = document.createElement("a");
    newLink.href = item.link;
    newLink.innerText = item.caption;
    newLink.target = "_blank";
    newLink.rel = "noopener noreferrer";

    newItem.append(newLink);
    navbarContainer.append(newItem);
}

const galleryItems = [
    { "image": "images/stuck_stone_talus.png", "caption": "Stone Talus stuck inside of a tree" },
    { "image": "images/rambler.png", "caption": "Rambler spotted" },
    { "image": "images/morsel.png", "caption": "This fish looks so stupid I love it" },
    { "image": "images/wise_skeleton.png", "caption": "Skeleton with a book???" },
    { "image": "images/tntriangle.png", "caption": "This TNT triangle's hitbox causes my FPS to drop by 90% (ignore my hotbar)" },
    { "image": "images/great_spawn.png", "caption": "i love spawning 200 blocks in the air" },
    { "image": "images/portals.png", "caption": "portals" },
    { "image": "images/shipbreaker.png", "caption": "close enough, welcome back Sandworm from Modular Bosses" },
    { "image": "images/enderminy.png", "caption": "Enderminy" },
    { "image": "images/cult.png", "caption": "Scary cult" },
    { "image": "images/ghost.png", "caption": "AHH" },
    { "image": "images/king_crimson.png", "caption": "King Crimson" },
    { "image": "images/brain_damage.png", "caption": "Owch" },
    { "image": "images/tunnel_gore.png", "caption": "Uh oh" },
    { "image": "images/netherite_monstrosity.png", "caption": "Gun!!" }
]

const galleryGrid = document.getElementById("gallery-grid");

const content = document.getElementById("content");
const lightboxContainer = document.getElementById("lightbox-container");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

let saved_scroll = window.scrollY;

for (const item of galleryItems) {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery-item");

    const newImageContainer = document.createElement("div");
    newItem.append(newImageContainer);

    let finalImageContainer = newImageContainer;
    // if (item.link) {
    //     const newImageLink = document.createElement("a");
    //     newImageLink.href = item.link;
    //     newImageLink.target = "_blank";
    //     newImageLink.rel = "noopener noreferrer";
    //     newImageContainer.append(newImageLink);
    //     finalImageContainer = newImageLink;
    // }

    const newImage = document.createElement("img");
    newImage.src = item.image;

    newImage.addEventListener("click", function (e) {
        saved_scroll = window.scrollY;
        content.style.display = "none";
        lightboxContainer.style.display = "block";
        lightboxImage.src = item.image;
        lightboxCaption.innerText = item.caption;
    })

    finalImageContainer.append(newImage);

    const newCaption = document.createElement("p");
    newCaption.innerText = item.caption;
    newItem.append(newCaption);

    galleryGrid.append(newItem);
}

function hideLightbox(e = null) {
    if (e && e.type == "keydown" && e.key != "Escape") {
        return
    }
    content.style.display = "block";
    lightboxContainer.style.display = "none";
    lightboxImage.src = "";
    lightboxCaption.innerText = "";
    window.scrollTo(0, saved_scroll);
}

lightboxImage.addEventListener("click", hideLightbox);

document.addEventListener("keydown", hideLightbox);