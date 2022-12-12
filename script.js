"use strict";

const inputPounds = document.getElementById("inputPounds");

const inputKilograms = document.getElementById("inputKilograms");
const inputGrams = document.getElementById("inputGrams");
const inputOunces = document.getElementById("inputOunces");
const inputStones = document.getElementById("inputStones");


function poundConverter(value) {
inputKilograms.value = (value/ 2.2046).toFixed(2);
inputGrams.value = (value / 0.0022046).toFixed(0);
inputOunces.value = (value * 16).toFixed(2);
inputStones.value = (value * 0.071429).toFixed(3);


}

function kilogramConverter(value) {
inputPounds.value = (value * 2.2046).toFixed(2);
inputGrams.value = (value * 1000).toFixed(0);
inputOunces.value = (value * 35.274).toFixed(2);
inputStones.value = (value * 1574).toFixed(3);
}


function ounceConverter(value) {
  inputPounds.value = (value * 0.0625).toFixed(4);
  inputGrams.value = (value / 0.35274).toFixed(1);
  inputKilograms.value = (value / 35.274).toFixed(4);
  inputStones.value = (value * 0.0044643).toFixed(4);
}


function gramConverter(value) {
  inputPounds.value = (value * 0.0022046).toFixed(4);
  inputOunces.value = (value * 0.035274).toFixed(3);
  inputKilograms.value = (value / 1000).toFixed(4);
  inputStones.value = (value * 0.00015747).toFixed(5);
}

function stoneConverter(value) {
  inputPounds.value = (value * 14).toFixed(1);
  inputOunces.value = (value * 224).toFixed(0);
  inputKilograms.value = (value / 0.15747).toFixed(1);
  inputGrams.value = (value / 0.0001547).toFixed(0);
}

const inputFahrenheit = document.getElementById("inputFahrenheit");
const inputCelsius = document.getElementById("inputCelsius");
const inputKelvin = document.getElementById("inputKelvin");


function fahrenheitConverter(value) {
  inputCelsius.value = ((value - 32) / 1.8).toFixed(2);
  inputKelvin.value = ((value - 32) / 1.8 + 273.15).toFixed(2);
}

function celsiusConverter(value) {
  inputFahrenheit.value = (value * 1.8 + 32 ).toFixed(2);
  inputKelvin.value = (Number(value) + 273.15 ).toFixed(2);
}

function kelvinConverter(value) {
  inputFahrenheit.value = ((value - 273.15) * 1.8 + 32).toFixed(2);
  inputCelsius.value = (value - 273.15).toFixed(2);
}

const inputFeet = document.getElementById("inputFeet");
const inputMeters = document.getElementById("inputMeters");
const inputInches = document.getElementById("inputInches");
const inputCm = document.getElementById("inputCm");
const inputYards = document.getElementById("inputYards");
const inputKilometers = document.getElementById("inputKilometers");
const inputMiles = document.getElementById("inputMiles");


function feetConverter (value) {
  inputMeters.value = (value / 3.2808).toFixed(2);
  inputInches.value = (value * 12).toFixed(2);
  inputCm.value = (value / 0.032808).toFixed(0);
  inputYards.value = (value * 0.33333).toFixed(2);
  inputKilometers.value = (value / 3280.8).toFixed(5);
  inputMiles.value = (value * 0.000189339).toFixed(5);
}

function metersConverter (value) {
  inputFeet.value = (value * 3.2808).toFixed(2);
  inputInches.value = (value * 39.37).toFixed(2);
  inputCm.value = (value / 0.01).toFixed(0);
  inputYards.value = (value * 10936 ).toFixed(2);
  inputKilometers.value = (value / 1000).toFixed(5);
  inputMiles.value = (value * 0.00062137).toFixed(5);

}


function inchesConverter(value) {
  inputFeet.value = (value * 0.083333).toFixed(3);
  inputMeters.value = (value / 39.37).toFixed(3);
  inputCm.value = (value / 0.3937).toFixed(2);
  inputYards.value = (value * 0.027778 ).toFixed(3);
  inputKilometers.value = (value / 39370).toFixed(6);
  inputMiles.value = (value * 0.000015783 ).toFixed(6);
}


function cmConverter(value) {
  inputFeet.value = (value * 0.032808).toFixed(3);
  inputMeters.value = (value / 1000).toFixed(3);
  inputInches.value = (value * 0.3937 ).toFixed(2);
  inputYards.value = (value * 0.010936).toFixed(3);
  inputKilometers.value = (value / 100000).toFixed(6);
  inputMiles.value = (value * 0.0000062137).toFixed(6);

}

function yardsConverter(value) {
  inputFeet.value = (value * 3).toFixed(0);
  inputMeters.value = (value / 1.0936).toFixed(2);
  inputInches.value = (value * 36).toFixed(0);
  inputCm.value = (value / 0.010936).toFixed(0);
  inputKilometers.value = (value / 1036.6).toFixed(5);
  inputMiles.value = (value * 0.00056818).toFixed(5);
}

function kilometersConverter(value) {
  inputFeet.value = (value * 3280.8).toFixed(0); // ft=km*3280.8
  inputMeters.value = (value * 1000).toFixed(0); // m=km*1000
  inputInches.value = (value * 39370).toFixed(0); // in=km*39370
  inputCm.value = (value * 100000).toFixed(0); // cm=km*100000
  inputYards.value = (value * 1093.6).toFixed(0); // yd=km*1093.6
  inputMiles.value = (value * 0.62137).toFixed(2); // mi=km*0.62137
}

function milesConverter(value) {
  inputFeet.value = (value * 5280).toFixed(0); // ft=mi*5280
  inputMeters.value = (value / 0.00062137).toFixed(0); // m=mi/0.00062137
  inputInches.value = (value * 63360).toFixed(0); // in=mi*63360
  inputCm.value = (value / 0.0000062137).toFixed(0); // cm=mi/0.0000062137
  inputYards.value = (value * 1760).toFixed(0); // yd=mi*1760
  inputKilometers.value = (value / 0.62137).toFixed(2); // km=mi/0.62137
}

// speed converter
const inputMPH = document.getElementById("inputMPH");
const inputKPH = document.getElementById("inputKPH");
const inputKnots = document.getElementById("inputKnots");
const inputMach = document.getElementById("inputMach");

function MPHConverter(value) {
  inputKPH.value = (value * 1.609344).toFixed(2); // KPH=MPH*1.609344
  inputKnots.value = (value / 1.150779).toFixed(2); // knots=MPH/1.150779
  inputMach.value = (value / 761.207).toFixed(4); // Mach=MPH/761.207
}

function KPHConverter(value) {
  inputMPH.value = (value / 1.609344).toFixed(2); // MPH=KPH/1.609344
  inputKnots.value = (value / 1.852).toFixed(2); // knots=KPH/1.852
  inputMach.value = (value / 1225.044).toFixed(5); // Mach=KPH/1225.044
}

function knotsConverter(value) {
  inputMPH.value = (value * 1.150779).toFixed(2); // MPH=knots*1.150779
  inputKPH.value = (value * 1.852).toFixed(2); // KPH=knots*1.852
  inputMach.value = (value / 661.4708).toFixed(4); // Mach=knots/661.4708
}

function machConverter(value) {
  inputMPH.value = (value * 761.207).toFixed(0); // MPH=Mach*761.207
  inputKPH.value = (value * 1225.044).toFixed(0); // KPH=Mach*1225.044
  inputKnots.value = (value * 661.4708).toFixed(0); // knots=Mach*661.4708
}


$(window).on("load", () => {
  $("body").css(
    "overflow",
    "hidden",
    setTimeout(() => {
      $("body").css("overflow-y", "visible");

    }, 1800)


  );
  setTimeout(removeLoader, 1700)
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}



