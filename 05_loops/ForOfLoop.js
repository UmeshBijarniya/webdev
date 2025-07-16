// forof loop

let array = [2,3,4,5,6,4,3]
for (const key in array) {
    // console.log(arr[key]);
}

// syntax for forof loop

// for (const element of object) {
    
// }

let string ="hello world!"
for (const element of string) {
    // console.log(element)
}

//Maps:

const map = new Map()
map.set('in',"india")
map.set('us',"united states")
map.set('fr',"france")

console.log(map);

// forof loop for this
for (const key of map) {
    // console.log(key);
}
for (const [key , value] of map) {
    // console.log(key,":-",value);
}

const myobj = {
    "G1" : "FF",
    "G2" : "pubg",
    "G3" : "coc"
}

for (const [key,value] of myobj) {
    console.log(key,":-",value);
}      // TypeError: myobj is not iterable, we cannot iterate objecta like maps
