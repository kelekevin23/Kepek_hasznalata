window.addEventListener("load", init);

function id(nev){
    return document.getElementById(nev);
}
function $(nev){
    return document.querySelectorAll(nev);
}


/*objektumok*/
var kepObj1 = {
    kep: "kepek/agymenok.jpg", 
    cim: "Kép címe1", 
    leiras:"1 kép leírása hosszabban"
};
var kepObj2 = {
    kep: "kepek/agymenok.jpg", 
    cim: "Kép címe2", 
    leiras:"2 kép leírása hosszabban"
};
var kepObj3 = {
    kep: "kepek/agymenok.jpg", 
    cim: "Kép címe3", 
    leiras:"3 kép leírása hosszabban"
};

var kepObjTomb = [kepObj1,kepObj2,kepObj3];
function init(){
    feltolt(0);
    
    var elem = '<div id="1" class="kepTarolo"> <img src="" alt=""/> <h2></h2> <p></p> </div>';
    for (var i = 0; i < kepObjTomb.length; i++) {
        $('article')[0].innerHTML += elem; 
    }
    
 
    var kepElemCim = $(".kepTarolo h2");
    var kepElem = $(".kepTarolo");
    var kepElemTartalom = $(".kepTarolo p");
    var kep = $(".kepTarolo img");
    

    
    for (var i = 0; i <  kep.length; i++) {
        $("article div")[i].id = i;
        kep[i].src = kepObjTomb[i].kep;
        kepElemCim[i].innerHTML = kepObjTomb[i].cim;
        kepElemTartalom[i].innerHTML = kepObjTomb[i].leiras;
        
    }
    for (var i = 0; i < kepElem.length; i++) {
        kepElem[i].addEventListener("mouseover", formazfel);
        kepElem[i].addEventListener("mouseout", formazle);
        
        kepElem[i].addEventListener("click", nagykepBetolt);
    }
    
    $("#balra")[0].addEventListener("click", balralep);
    $("#jobbra")[0].addEventListener("click", jobbralep);
    
    
   
}

function formazfel(){
    this.classList.add("kepTaroloAktiv");
}
function formazle(){
    this.classList.remove("kepTaroloAktiv");
}

function nagykepBetolt(){
    var azon = this.id;
    feltolt(azon);
}


function feltolt(index){
    $("#nagyKep img")[0].src = kepObjTomb[index].kep;
    $("#nagyKep h2")[0].innerHTML = kepObjTomb[index].cim;
    $("#nagyKep p")[0].innerHTML = kepObjTomb[index].leiras;
}

function jobbralep(){
    
}
function balralep(){
    
}
