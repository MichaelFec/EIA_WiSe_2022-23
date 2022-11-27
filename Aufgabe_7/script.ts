const germany = "Deutschland";
const france = "Frankreich";
const italy = "Italien";
const spain = "Spanien"

const populationGER2021 = 83240000;
const populationGER2017 = 82790000;
const populationFRA2021 = 67500000;
const populationFRA2017 = 66920000;
const populationITA2021 = 59070000;
const populationITA2017 = 60540000;
const populationSPA2021 = 47330000;
const populationSPA2017 = 46590000;

let ProzentGER = (1-populationGER2017/populationGER2021)*100;
let ProzentFRA = (1-populationFRA2017/populationFRA2021)*100;
let ProzentITA = (1-populationITA2017/populationITA2021)*100;
let ProzentSPA = (1-populationSPA2017/populationSPA2021)*100;

console.log("Im Jahre 2021 betrug die Einwohnerzahl in " + germany + " " + populationGER2021 + ".");
console.log("Im Jahre 2017 betrug die Einwohnerzahl in " + germany + " " + populationGER2017 + ".");
console.log("In den vier Jahren ist die Einwohnerzahl in " + germany + " um " + ProzentGER + " % gestiegen.");

console.log("Im Jahre 2021 betrug die Einwohnerzahl in " + france + " " + populationFRA2021 + ".");
console.log("Im Jahre 2017 betrug die Einwohnerzahl in " + france + "" + populationFRA2017 + ".");
console.log("In den vier Jahren ist die Einwohnerzahl in " + france + " um " + ProzentFRA + " % gestiegen.");

console.log("Im Jahre 2021 betrug die Einwohnerzahl in " + italy + " " + populationITA2021 + ".");
console.log("Im Jahre 2017 betrug die Einwohnerzahl in " + italy + " " + populationITA2017 + ".");
console.log("In den vier Jahren ist die Einwohnerzahl in " + italy + " um " + ProzentITA + " % gesunken.");

console.log("Im Jahre 2021 betrug die Einwohnerzahl in " + spain + " " + populationSPA2021 + ".");
console.log("Im Jahre 2017 betrug die Einwohnerzahl in " + spain + " " + populationSPA2017 + ".");
console.log("In den vier Jahren ist die Einwohnerzahl in " + spain + " um " + ProzentSPA + " % gestiegen.");


