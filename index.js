let foodArray = ["fried rice", "yam", "beans", "jollof rice", "rice", "eba", "egusi"]
let drinkArray = ["coke", "fanta", "sprite", "water", "wine"]
let button = document.getElementById('btn')


let input1 = document.getElementById('input1').value
function getFood() {
    let input = document.getElementById('input').value


    if(foodArray.includes(input)){
        document.getElementById('demo').innerHTML = "Your order is coming"
    }else{
        document.getElementById('demo').innerHTML = "Sorry what you order is not available"
    }
}




// document.getElementById('input1').addEventListener ('change', function() {
//  if(foodArray){
//     document.getElementById('demo').innerHTML = "Your order is coming soon"
//  }else{
//      document.getElementById('demo').innerHTML = "Sorry what you just order is not available"
//  }
// })


// btn.onclick = function () {
    //     let input = document.getElementById('input').value
    //     let userFood = foodArray.includes
    
    //     if(input == userFood){
        //         document.getElementById('demo').innerHTML = "Your order is coming soon"
//     }else{
//         document.getElementById('demo').innerHTML = "Sorry what you just order is not available"
//     }
// }






// let availableMeal = input.value
// let availableDrink = input1.value
// if (availableMeal == foodArray) {
//     document.getElementById('demo').innerHTML = "Your order is coming soon"
// } else if( availableDrink == drinkArray){
//     document.getElementById('demo').innerHTML = "Your order is coming soon"
// }else{
//     document.getElementById('demo').innerHTML = "Sorry we don't have what you just order"
// }


// }else if(availableMeal){

//         console.log(availableMeal)
//     document.getElementById('demo').innerHTML = "sorry we don't have all that you orderd"
//    }else if (availableDrink){
//     console.log(availableDrink)
//     document.getElementById('demo').innerHTML = "sorry we don't have all that you orderd"


// let d = new Date();   h
// console.log(d)

// let d = new Date();
// let text = d.toLocaleString();
// console.log(text)
