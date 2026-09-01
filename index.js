const galleryItems = [
    { "image": "https://cdn.britannica.com/34/240534-050-B8C4B11E/Porcupine-fish-Diodon-hystox.jpg", "caption": "Happy fish" },
    { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HDpw_rDfDUud52ByD492BssZWUYF61hSIeMgtQSTWMWDYXXfCqHWcsU&s=10", "caption": "Surprised fish" },
    { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlGWbrtgl3ICs51VAd0FFO-PqWMSTAGUgsRbZCpEhtF2EGt8GPL7JBfXX&s=10", "caption": "Flying fish" },
    { "image": "https://www.timeforkids.com/wp-content/uploads/2022/04/news_04_15_.jpg?w=1024", "caption": "Rainbow fish" },
    { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcQTjCNT9kxothxlIpt2nR8BWTtO2qFeI1ST6Q1hTfA&s=10", "caption": "i found him!!", "link": "https://en.wikipedia.org/wiki/Finding_Nemo" },
    { "image": "https://www.treehugger.com/thmb/hR_9sTzj9L_WTdrdKH_rZRCmSs4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/blue-dragon--glaucus-atlanticus--blue-sea-slug-986491702-f0cb140dd639453e8a2d8c56637dce73.jpg", "caption": "Sea slug" },
    { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzO6mXrel1j9EOnPveaRhQy5m3dn9L2y48G1nFe8n9wjaEt1tCXfbmfHQ&s=10", "caption": "Sea bnuuy", "link": "https://en.wikipedia.org/wiki/Jorunna_parva" },
    { "image": "https://a-z-animals.com/media/sea-slug-2.jpg", "caption": "goober" },
    { "image": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Strongylocentrotus_franciscanus.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original", "caption": "he's red for an amazing reason", "link": "https://www.youtube.com/shorts/GiJppp1I_xU" },
    { "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGFntDwcYIiQiLoH1pbBIsvrSMLnno2RCUP01w1GfOEonONPTvVmvG3yRg&s=10", "caption": "Land slug" },
    { "image": "https://www.sciencing.com/sciencing/snails-adaptation-habitat-5497296/87f55a6e501145cc91353d8ff2c28aef.jpg", "caption": "snail", "link": "https://en.wikipedia.org/wiki/Snail" },
];

const galleryGrid = document.getElementById("gallery-grid");

for (const item of galleryItems) {
    const newItem = document.createElement("div");
    newItem.classList.add("gallery-item");

    const newImageContainer = document.createElement("div");
    newItem.append(newImageContainer);

    let finalImageContainer = newImageContainer;
    if (item.link) {
        const newImageLink = document.createElement("a");
        newImageLink.href = item.link;
        newImageLink.target = "_blank";
        newImageLink.rel = "noopener noreferrer";
        newImageContainer.append(newImageLink);
        finalImageContainer = newImageLink;
    }

    const newImage = document.createElement("img");
    newImage.src = item.image;
    finalImageContainer.append(newImage);

    const newCaption = document.createElement("p");
    newCaption.innerText = item.caption;
    newItem.append(newCaption);

    galleryGrid.append(newItem);

}