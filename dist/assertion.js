"use strict";
let donotKnow;
donotKnow = 85;
donotKnow;
const kgToGram = (wight) => {
    if (typeof wight === "string") {
        const gram = parseFloat(wight) * 1000;
        return gram;
    }
    else {
        return wight * 1000;
    }
};
const resultAsNum = kgToGram(5);
