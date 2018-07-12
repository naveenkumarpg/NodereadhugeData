const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream("./public/csv/Crimes.csv"),
  crlfDelay: Infinity
});


//Example headdig field data 
//ID,Case Number,Date,Block,IUCR,Primary Type,Description,Location Description,Arrest,Domestic,Beat,District,Ward,Community Area,FBI Code,X Coordinate,Y Coordinate,Year,Updated On,Latitude,Longitude,Location,Historical Wards 2003-2015,Zip Codes,Community Areas,Census Tracts,Wards,Boundaries - ZIP Codes,Police Districts,Police Beats

let header =  true;
let firstLine = [];
let year, description;
let finalObject = {};

rl.on('line', (line) => {
  if(header){
    console.log("if");
    //console.log(line);
    firstLine =  line.split(",");
    //console.log(firstLine);
    year = firstLine.indexOf("Year");
    primatyType = firstLine.indexOf("Primary Type");
    description = firstLine.indexOf("Description");
    header = false;
    // console.log(year);
    // console.log(primatyType);
    // console.log(description);
  }else{
    data =  line.split(',');

    if((data[year] >=2003) && (data[year] <=2019)){
      cyear = data[year];
      if(!finalObject[cyear]){
        finalObject[cyear] = {};
        finalObject[cyear].un500 = 0;
        finalObject[cyear].ov500 = 0;
      }

      if(data[description] == "$500 AND UNDER"){
        finalObject[cyear].un500 = finalObject[cyear].un500 +1;
        //finalObject[year["under500"]] = finalObject[year["under500"]]+ 1 || 0; 
      }
      if(data[description] == "OVER $500"){
        finalObject[cyear].ov500 = finalObject[cyear].ov500 +1;
        //finalObject[year["over500"]] = finalObject[year["over500"]] + 1 || 0; 
      }
    }
  }
}).on('close', () => {

  fs.writeFile("./public/json/data.json", JSON.stringify(finalObject), function(err) {
    if(err){
      return console.log(err);
    }
    console.log("The file was saved!");
  }); 

});;


