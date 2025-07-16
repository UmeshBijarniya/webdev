// fro each loop
const marks = [3,55,6,3,43,43,66]

// basic syntax
// marks.forEach( function (val){
//     console.log(val);
// } )

// marks.forEach( (val) => {
//     console.log(val)
// })

function print (item){
   // console.log(item)
}

// marks.forEach(print); 
/// do not pass the function as print()->this means to execute the function ,
//  but here we are only giving reference

marks.forEach((item,index,arr) => {
    // console.log(index,item,arr);
});

// array of objects  :-  [{} {} {} {}]

const mycoding = [

    {
        langname:"javascript",
        langcode:"js"
    },
    {
        langname:"java",
        langcode:"java"
    },
    {
        langname:"python",
        langcode:"py"
    }
]

mycoding.forEach((item)=> {
    // here item is object
    // so to access the values of object use '.' operator
    console.log(item.langcode , item.langname);
} )