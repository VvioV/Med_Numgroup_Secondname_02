var person = {
    "SNILS 1" : ["Vasileva", "Vasilisa", "Vasilevna", 21,"May", 2000, "W","ispolnino"],
    "SNILS 2" : ["Ivanov", "Ivan", "Ivanovic", 33, "May", 1888, "M", "medotvod"],
    "SNILS 3" : ["Petrov", "Petr", "Petrovic", 69, "May", 4831, "M", "naznacheno"],
    "SNILS 4" : ["v", "gy", "f", 78, "du", 6, "j", "ispolnino"],
    "SNILS 5" : ["bdf", "x", "Petrcfovic", 9, "Mdsay", "fgw", "M", "naznacheno"],
    "SNILS 6" : ["wfg", "vgdPetr", "gdg", 0, "br", 2, "M", "ispolnino"],
    "SNILS 7" : ["fws", "Pevdtr", "koui", 4, "fg", 464, "M", "medotvod"],
};
console.log(person);

let SNILS;
var FirstFunction = function (person,SNILS)  {
SNILS=prompt("Vediti SNILS pacienta", SNILS);
infoname=person[SNILS];
// console.log(infoname);
alert("Invormaciya o paciente" + infoname);
statusPriv=person[SNILS][7];
console.log(statusPriv);
}
//Uzvlekaem informachui o tecywem statyse privivki
var SecondFunction = function (statusPriv,infoname){

    // statusPriv=person[SNILS][7];
    
    
    //Proveryaem vozmoznost izmenenuya statysa
    if (statusPriv==="ispolnino") {
        alert("Otkazano v privivki pachienty" + infoname);
    } else if (statusPriv === "medotvod") {
        alert ("Otkazano v privivki pachienty" + infoname);
    } else {
        alert ("Uspolnit privivky pachienty"+ infoname);
    }
    }
    
    ForSecond = FirstFunction(person,SNILS);
    SecondFunction(statusPriv,infoname);

//Predlogaeam zakonchut ili prodolzit raboty v etom okne
while (confirm ("Prodolzit proverky priv.statysa?")){
    ForSecond = FirstFunction(person,SNILS);
    SecondFunction(statusPriv,infoname);
}     