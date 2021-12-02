const btnPlay = document.querySelector(".btn-play");
const select = document.getElementById("level");

let numMin = 1;
let numMax = 100;


select.addEventListener("change", function () {
    start(select, numMin, numMax);
});

btnPlay.addEventListener("click", function () {
    start(select, numMin, numMax);
});

function start(selectHtml, minNum, maxNum) {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    let rowsCells = 10;
    let level = selectHtml.value;

    switch (level) {

        case "easy":
            maxNum = 100;
            rowsCells = 10;
            break;

        case "medium":
            maxNum = 81;
            rowsCells = 9;
            break;

        case "hard":
            maxNum = 49;
            rowsCells = 7;
            break;
    }

    document.documentElement.style.setProperty('--square-size', rowsCells)

    generateCells(minNum, maxNum);

};

function generateCells(numMin, numMax) {

    for (let i = numMin; i <= numMax; i++) {
        let square = document.createElement("div");

        square.classList.add("square");
        square.innerHTML = i;


        square.addEventListener("click", function () {
            this.style.backgroundColor = "rgb(57, 188, 240)";

        });

        grid.appendChild(square);
    }
};