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
    {
        "image": "images/stuck_stone_talus.png", "caption": "Stone Talus stuck inside of a tree", "mods": [
            { "title": "Craft of the Wild", "link": "https://www.curseforge.com/minecraft/mc-mods/craft-of-the-wild-cotw" }
        ]
    },
    {
        "image": "images/rambler.png", "caption": "Rambler spotted", "mods": [
            { "title": "Opposing Force", "link": "https://www.curseforge.com/minecraft/mc-mods/opposing-force" }
        ]
    },
    {
        "image": "images/morsel.png", "caption": "This fish looks so stupid I love it", "mods": [
            { "title": "Fantastic Fishery", "link": "https://www.curseforge.com/minecraft/mc-mods/fantastic-fishery" }
        ]
    },
    { "image": "images/wise_skeleton.png", "caption": "Skeleton with a book???" },
    {
        "image": "images/tntriangle.png", "caption": "This TNT triangle's hitbox causes my FPS to drop by 90% (ignore my hotbar)", "mods": [
            { "title": "Cursed items", "link": "https://www.curseforge.com/minecraft/mc-mods/cursed-items" }
        ]
    },
    {
        "image": "images/great_spawn.png", "caption": "i love spawning 200 blocks in the air", "mods": [
            { "title": "Sky Villages", "link": "https://www.curseforge.com/minecraft/mc-mods/sky-villages-forge" }
        ]
    },
    {
        "image": "images/portals.png", "caption": "portals", "mods": [
            { "title": "The Aether", "link": "https://www.curseforge.com/minecraft/mc-mods/aether" },
            { "title": "The Undergarden", "link": "https://www.curseforge.com/minecraft/mc-mods/the-undergarden" },
            { "title": "The Twilight Forest", "link": "https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest" },
            { "title": "Rats", "link": "https://www.curseforge.com/minecraft/mc-mods/rats" }
        ]
    },
    {
        "image": "images/shipbreaker.png", "caption": "close enough, welcome back Sandworm from Modular Bosses", "mods": [
            { "title": "Aquamirae", "link": "https://www.curseforge.com/minecraft/mc-mods/aquamirae" }
        ]
    },
    {
        "image": "images/enderminy.png", "caption": "Enderminy", "mods": [
            { "title": "Ender Zoology", "link": "https://www.curseforge.com/minecraft/mc-mods/ender-zoology" }
        ]
    },
    {
        "image": "images/cult.png", "caption": "Scary cult", "mods": [
            { "title": "Cult of Azazel", "link": "https://www.curseforge.com/minecraft/mc-mods/cult-of-azazel" }
        ]
    },
    {
        "image": "images/ghost.png", "caption": "AHH", "mods": [
            { "title": "Fangs 'n Claws", "link": "https://www.curseforge.com/minecraft/mc-mods/fangs-n-claws" }
        ]
    },
    {
        "image": "images/king_crimson.png", "caption": "King Crimson", "mods": [
            { "title": "Roundabout", "link": "https://www.curseforge.com/minecraft/mc-mods/roundabout-the-jojo-mod" }
        ]
    },
    {
        "image": "images/brain_damage.png", "caption": "Owch", "mods": [
            { "title": "Oreganized", "link": "https://www.curseforge.com/minecraft/mc-mods/oreganized" }
        ]
    },
    {
        "image": "images/tunnel_gore.png", "caption": "Uh oh", "mods": [
            { "title": "Skarrier Mobs", "link": "https://www.curseforge.com/minecraft/mc-mods/skarrier-mobs" }
        ]
    },
    {
        "image": "images/netherite_monstrosity.png", "caption": "Gun!!", "mods": [
            { "title": "Scorched Guns", "link": "https://www.curseforge.com/minecraft/mc-mods/scorched-guns" },
            { "title": "L_Ender's Cataclysm", "link": "https://www.curseforge.com/minecraft/mc-mods/lendercataclysm" }
        ]
    }
]

const galleryGrid = document.getElementById("gallery-grid");

const content = document.getElementById("content");
const lightboxContainer = document.getElementById("lightbox-container");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxModsFeatured = document.getElementById("lightbox-mods-featured");

let saved_scroll = window.scrollY;

for (const item of galleryItems) {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery-item");

    const newImageContainer = document.createElement("div");
    newItem.append(newImageContainer);

    let finalImageContainer = newImageContainer;

    const newImage = document.createElement("img");
    newImage.src = item.image;

    newImage.addEventListener("click", function (e) {
        saved_scroll = window.scrollY;
        content.style.display = "none";
        lightboxContainer.style.display = "block";
        lightboxImage.src = item.image;
        lightboxCaption.innerText = item.caption;
        lightboxModsFeatured.innerHTML = "Mods featured: N/A";
        if (item.mods) {
            let modsFeatured = "Mods featured: "
            for (const [index, mod] of item.mods.entries()) {
                let modLink = mod.link || "";
                let modTitle = mod.title || "Unknown";
                let modFeatured = " <a target=\"_blank\" rel=\"noopener noreferrer\" class=\"featured-mod\" href=\"" + modLink + "\">" + modTitle + "</a>";
                if (index < item.mods.length - 1) {
                    modFeatured += ","
                }
                modsFeatured += modFeatured;
            }
            lightboxModsFeatured.innerHTML = modsFeatured;
        }
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
    lightboxModsFeatured.innerHTML = "";
    window.scrollTo(0, saved_scroll);
}

lightboxImage.addEventListener("click", hideLightbox);

document.addEventListener("keydown", hideLightbox);