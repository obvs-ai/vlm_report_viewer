let data = [];
let index = 0;

async function loadData() {
    const response = await fetch("data.json");
    data = await response.json();
    show();
}

function show() {

    const item = data[index];

    document.getElementById("imageDisplay").src =
        "images/" + item.image;

    document.getElementById("generated").innerText =
        item.generated;

    document.getElementById("groundTruth").innerText =
        item.ground_truth;

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