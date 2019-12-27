// object literal

const salon = {
    name:"The Fashion Pets",
    phone:"(555)321-6789",
    address:{
        street:"Brigden Road",
        number:"1680"
    },
    workingHours:{
        days:"Monday-Friday",
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[],
    count : function(){
        alert("We have : " + salon.pets.length + " pets left.")
    }
}

var petc=0;
class Pet{
    constructor(name,age,breed,gender,service,ownerName,ownerPhone){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.ownerPhonw=ownerPhone;
        this.id="pet"+petc;
        petc+=1
    }
}

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;

//const pet1 = new pet1("shaggy",2,"Boxer","Male","Full Service","Samantha","938365097");
//const pet2 = new Pet2("Janis", 2, "boxer", "female", "Hair Cut", "Sabrina", "3499378039");
//const pet3 = new Pet3("Bindi", 3, "pit bull", "female", "hair cut", "gabe", "7778883333");

//salon.push=pet1;

document.querySelector(".info").innerHTML=`<p>${name}<br> ${street}, ${number} <br> ${days} from ${open} to ${close} <br> ${phone}</p>`;

/* document.getElementById("footer-in").innerHTML=`<p>${name} <br> ${street}, ${number} <br> ${days} from ${open} to ${close} <br> ${phone} </p>`; */


var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textownername = document.getElementById('ownerName');
var textownerphone = document.getElementById('ownerPhone');

function register(){
    const thePet = new Pet(textname.value, textage.value, textbreed.value, textgender.value, textservice.value, textownername.value, textownerphone.value);
    salon.pets.push(thePet);
    alert("You have registered your pet!");
    clean();
    displayPet(thePet);
}

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textownername.value="";
    textownerphone.value="";
}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}"> 
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.ownername}</td>
                <td>${aPet.ownerphone}</td>
                <td>
                    <button onclick='remove("${aPet.id}");'> Delete </button>
                </td>`;
    tBody.innerHTML+=row;
}

function remove(petId){
    console.log("delete" + petId);

    var tr = document.getElementById(petId);
    var indexDelete;

    // searching the pet using the id
    for(var i=0;i<salon.pets.length;i++){
        var selectedPet = salon.pets[i];
        if(selectedPet.id ==petId){
            indexDelete=i;
        }
    }

    // deleting in the array
    salon.pets.splice(indexDelete,1);

    // deleting in the HTML
    tr.remove();

}


/* function Search(petId){

    for(var j=0;i<salon.pets.length;j++){
        document.getElementById('pet'+j).setAttribute('')
        }
    }

    var ss=document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();

    console.log(searchString);
    var flag=false;

    for(var i=0;i<salon.pets.length;i++){
        var foundPet = salon.pets[i];
        if((foundPet.id.toLowerCase() ==searchString) || 
            (foundPet.name.toLowerCase() == searchString))
            flag=true;
            index=i
            document.getElementById('pet' +index).setAttribute('class','found');
            //console.log("Pet Found!:" + salon.pets[i]);
            //document.getElementById("result").innerHTML="I found the Pet" + salon.pets[i].name;
            }
        
    }

    if(flag==false){
        document.getElementByIt('result').innerHTML="It doesn't exist"
    }

    document.getElementById("petSearch").value="";
}  */