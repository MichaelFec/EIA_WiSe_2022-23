const germany = "Deutschland";
const france = "Frankreich";
const italy = "Italien";
const spain = "Spanien";
const populationGER2021 = 83240000;
const populationGER2017 = 82790000;
const populationFRA2021 = 67500000;
const populationFRA2017 = 66920000;
const populationITA2021 = 59070000;
const populationITA2017 = 60540000;
const populationSPA2021 = 47330000;
const populationSPA2017 = 46590000;
let ProzentGER = (1 - populationGER2017 / populationGER2021) * 100;
let ProzentFRA = (1 - populationFRA2017 / populationFRA2021) * 100;
let ProzentITA = (1 - populationITA2017 / populationITA2021) * 100;
let ProzentSPA = (1 - populationSPA2017 / populationSPA2021) * 100;
let wholeEU = 447000000;
window.addEventListener("load", function () {
    document.querySelector(".germany").addEventListener("click", function () { population(germany, populationGER2021, ProzentGER, populationGER2017); });
    document.querySelector(".france").addEventListener("click", function () { population(france, populationFRA2021, ProzentFRA, populationFRA2017); });
    document.querySelector(".spain").addEventListener("click", function () { population(spain, populationSPA2021, ProzentSPA, populationSPA2017); });
    document.querySelector(".italy").addEventListener("click", function () { population(italy, populationITA2021, ProzentITA, populationITA2017); });
    function population(_countryName, _countryPopulation21, _countryGrowth, _countryPopulation17) {
        document.querySelector("#countryName").innerHTML = _countryName;
        document.querySelector("#countryPopulation").innerHTML = _countryPopulation21.toString();
        document.querySelector("#populationRelative").innerHTML = Math.round(_countryPopulation21 / wholeEU * 100 * 100) / 100 + "%";
        document.querySelector("#populationGrowth").innerHTML = Math.round(_countryGrowth) + "%";
        document.querySelector("#growthRate").innerHTML = Math.round((_countryPopulation21 - _countryPopulation17)) + "";
    }
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
});
//# sourceMappingURL=script.js.map