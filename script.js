function calculate() {
    const riceType = document.getElementById("riceType").value;
    const baseballs = document.getElementById("riceCups").value;
    const unit = document.getElementById("unit").value;
    let riceCups = baseballs / 2.5; // Convert baseballs to rice cups
    let riceResult = 0;
    let waterResult = 0;
    let waterRatio;


    // Convert rice cups to the selected unit
    switch (unit) {
        case "ml":
            riceResult = riceCups * 180; // 180ml per rice cup
            waterRatio = getWaterRatio(riceType, 240); // 1 US cup ≈ 240 ml
            break;
        case "g":
            riceResult = riceCups * 150; // 150g per rice cup
            waterRatio = getWaterRatio(riceType, 240); // 1 ml of water ≈ 1 g
            break;
        case "cup":
            riceResult = riceCups * 0.75; // 0.75 US cups per rice cup
            waterRatio = getWaterRatio(riceType, 1);
            break;
        case "tbsp":
            riceResult = riceCups * 12; // 12 tbsp per rice cup
            waterRatio = getWaterRatio(riceType, 16); // 16 tbsp per US cup
            break;
        case "tsp":
            riceResult = riceCups * 36; // 36 tsp per rice cup
            waterRatio = getWaterRatio(riceType, 48); // 48 tsp per US cup
            break;
    }
    waterResult = waterRatio * riceCups;

    document.getElementById("result").innerText = `Rice: ${riceResult} ${unit}\nWater: ${waterResult} ${unit}`;
}

function getWaterRatio(riceType, conversionFactor) {
    switch (riceType) {
        case "white":
            return 2 * conversionFactor; // Water ratio for white rice
        case "brown":
            return 2.5 * conversionFactor; // Water ratio for brown rice
        case "basmati":
        case "jasmine":
            return 1.75 * conversionFactor; // Water ratio for basmati or jasmine rice
        case "sushi":
            return 1.25 * conversionFactor; // Water ratio for sushi rice
    }
}
