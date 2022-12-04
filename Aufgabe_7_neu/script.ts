const germany: string = "Deutschland";
const france: string = "Frankreich";
const italy: string = "Italien";
const spain: string = "Spanien"
const EU: string = "EU";

const populationGER2021 = 83240000;
const populationGER2017 = 82790000;
const populationFRA2021 = 67500000;
const populationFRA2017 = 66920000;
const populationITA2021 = 59070000;
const populationITA2017 = 60540000;
const populationSPA2021 = 47330000;
const populationSPA2017 = 46590000;
const populationEU2021 = 447000000;
const populationEU2017 = 440000000;

let ProzentGER = (1-populationGER2017/populationGER2021)*100;
let ProzentFRA = (1-populationFRA2017/populationFRA2021)*100;
let ProzentITA = (1-populationITA2017/populationITA2021)*100;
let ProzentSPA = (1-populationSPA2017/populationSPA2021)*100;
let PorzentEU = (1-populationEU2017/populationEU2021)*100;

let ComparisonGER = (populationGER2021/populationEU2021)*100;
let ComparisonFRA = (populationFRA2021/populationEU2021)*100;
let ComparisonITA = (populationITA2021/populationEU2021)*100;
let ComparisonSPA = (populationSPA2021/populationEU2021)*100;
let ComparisonEU = (populationEU2021/populationEU2021)*100;

let wholeEU = 447000000;


window.addEventListener("load", function(){


    document.querySelector(".germany").addEventListener("click", function() {population(germany, populationGER2021, ProzentGER, populationGER2017, ComparisonGER)} )
    document.querySelector(".france").addEventListener("click", function() {population(france, populationFRA2021, ProzentFRA, populationFRA2017, ComparisonFRA)} )
    document.querySelector(".spain").addEventListener("click", function() {population(spain, populationSPA2021, ProzentSPA, populationSPA2017, ComparisonSPA)} )
    document.querySelector(".italy").addEventListener("click", function() {population(italy, populationITA2021, ProzentITA, populationITA2017, ComparisonITA)} )
    document.querySelector(".stars").addEventListener("click", function() {population(EU, populationEU2021, PorzentEU, populationEU2017, ComparisonEU)} )

    function population(_countryName: string, _countryPopulation21: number, _countryGrowth: number, _countryPopulation17: number, Comparison: number) {
        document.querySelector ("#countryName").innerHTML = _countryName;
        document.querySelector ("#countryPopulation").innerHTML = _countryPopulation21.toString();
        document.querySelector("#populationRelative").innerHTML = Math.round(_countryPopulation21/wholeEU*100*100) / 100 + "%";
        document.querySelector("#populationGrowth").innerHTML = Math.round(_countryGrowth) + "%";
        document.querySelector("#growthRate").innerHTML = Math.round((_countryPopulation21 - _countryPopulation17)) + "";
        document.querySelector(".chart").setAttribute('style', "height:" + Comparison + "%");
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

document