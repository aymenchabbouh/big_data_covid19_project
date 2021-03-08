console.log("SinopeSof Maile Sending Test");
let csvToJson = require('convert-csv-to-json');

let fileInputName = 'us-counties.csv'; 
let fileOutputName = 'us-counties.json';
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

fileInputName = 'us.csv'; 
fileOutputName = 'us.json';
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

fileInputName = 'us-states.csv'; 
fileOutputName = 'us-states.json';
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);