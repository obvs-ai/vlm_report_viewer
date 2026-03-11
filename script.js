let data = [];
let index = 0;

async function loadData() {
    const response = await fetch("data.json");
    data = await response.json();
    show();
}

function show() {

    const item = data[index];

    const container = document.getElementById("imageContainer");
    container.innerHTML = "";

    const images = item.image.split(";");

    images.forEach(img => {

        const imageElement = document.createElement("img");
        imageElement.src = "images/" + img.trim();
        imageElement.className = "report-image";

        container.appendChild(imageElement);

    });

    document.getElementById("generated").innerText = item.generated;
    document.getElementById("gptgenerated").innerText = item.gptgenerated;
    document.getElementById("groundTruth").innerText = item.ground_truth;

    document.getElementById("counter").innerText =
        (index + 1) + " / " + data.length;
}

function next() {
    if (index < data.length - 1) {
        index++;
        show();
    }
}

function prev() {
    if (index > 0) {
        index--;
        show();
    }
}

loadData();