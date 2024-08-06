var text = "today was very RaINY in the morning";
var new_entry = "it was rainy cat and dog in gwarimpa . but gwarimpa looks fine, i live in gwarimpa";

let n = text.search(/rainy/i);
n;

var text2 = text.replace(/rainy/i,"sunny");
console.log(text2)

let n2 = (/gwarimpa/g)
console.log(new_entry.match(n2))

let entry3 = "\nat the beginning . \nIn time . \iIn the moment";
let search3 = /In/mg

console.log(entry3.match(search3))