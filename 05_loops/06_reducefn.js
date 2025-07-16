const mynums = [1,2,3]

// const mytotal = mynums.reduce( function(acc,curval){
//     console.log(`acc: ${acc}, curval: ${curval}`)
//     return acc+curval
// },5 )

// correct order maintaining is very important , changiing order of acc,val in function(acc,val) causes error


const mytotal = mynums.reduce( (acc,curval) =>  (acc+curval),0 )

console.log(mytotal)

const shoppingvcart = [
    {
        itemname: "jscourse",
        price: 3220
    },
    {
        itemname: "dsacourse",
        price: 6020
    },
    {
        itemname: "mobcourse",
        price: 9920
    }
]


const totalprice = shoppingvcart.reduce( (acc,item)=>(item.price+acc),0 )

console.log(totalprice)