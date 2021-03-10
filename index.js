console.log("Welcome to csv json converter");
let csvToJson = require('convert-csv-to-json');
let fs = require('fs');

let fileInputName = 'us-countries.csv'; 
let fileOutputName = 'us-countries.json';
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

fileInputName = 'us.csv'; 
fileOutputName = 'us.json';
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

fileInputName = 'us-states.csv'; 
fileOutputName = 'us-states.json';
csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);
