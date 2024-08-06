let char = `["gandalf","frodo","aragorn","sauron","saruman"]`;


let fantasyLands = [{
    "landd": "the shire",
    "population":120500,
    "language_spoken":["english","hobbish"],
    "specie":"hobbits"
    
},
{
    "land":"gondor",
    "population":200000,
    "species":"men"
}

]

let charstring = JSON.stringify(char);
let fanString = JSON.stringify(fantasyLands);

let parse1 = JSON.parse(char)
let parse2 = JSON.parse(fantasyLands)

console.log(parse2)
let h = document.getElementById("bktitle")
fetch("character.json")
    .then((response)=> response.json())
    .then((a)=> h.innerText = a[0])
    .catch((err)=> console.error("the error message is",err));

fetch("population.json")
.then((resp) => resp.json())
.then((val) => ValidityState.foreach(vale=> console.log(vale)))