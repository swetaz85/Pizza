const osnova1 = document.getElementById('osnova1').innerText;
const osnova2 = document.getElementById('osnova2').innerText;
const osnova3 = document.getElementById('osnova3').innerText;
const osnova4 = document.getElementById('osnova4').innerText;
const arrOsnov = [osnova1, osnova2, osnova3, osnova4];

const ingredient1 = document.getElementById('ingredient1').innerText;
const ingredient2 = document.getElementById('ingredient2').innerText;
const ingredient3 = document.getElementById('ingredient3').innerText;
const ingredient4 = document.getElementById('ingredient4').innerText;
const arrIngredints1= [ingredient1, ingredient2, ingredient3, ingredient4];

const ingredient5 = document.getElementById('ingredient5').innerText;
const ingredient6 = document.getElementById('ingredient6').innerText;
const ingredient7 = document.getElementById('ingredient7').innerText;
const ingredient8 = document.getElementById('ingredient8').innerText;
const arrIngredints2= [ingredient1, ingredient2, ingredient3, ingredient4];

const sauce1 = document.getElementById('sauce1').innerText;
const sauce2 = document.getElementById('sauce2').innerText;
const sauce3 = document.getElementById('sauce3').innerText;
const sauce4 = document.getElementById('sauce4').innerText;
const arrSauce = [sauce1, sauce2, sauce3, sauce4];

const ingredientsOsnova = document.querySelectorAll('.osnova');
const ingredients1 = document.querySelectorAll('.ingredient1');
const ingredients2 = document.querySelectorAll('.ingredient2');
const ingredientsSause= document.querySelectorAll('.sauce');

let image1 = document.getElementById('img1');
let image2 = document.getElementById('img2');
let image3 = document.getElementById('img3');
let image4 = document.getElementById('img4');

const arrViewing = [];
function addIngredientInViewing(event, price) {    
    const userIngredient = document.createElement('li');
    userIngredient.innerText = event;
    userIngredient.dataset.price = price;
    const userIngredients = document.getElementById('userIngredients');
    userIngredients.append(userIngredient);
    // arrViewing.push(userIngredient.innerText);
    // console.log(arrViewing);
}
function addPriceInnerText(event) {    
    const price = document.createElement('text');
    price.innerText = event;
    const userPrice = document.getElementById('price');
    let prices = +price.innerText + +userPrice.innerText;
    userPrice.innerText = prices;
}
function disableTruedBlock(ingredientsArray) {
    for (let i = 0; i < ingredientsArray.length; i++) {
        ingredientsArray[i].disabled = true;
        // ingredientsArray[i].style.color = 'gray';
    }
}
function disableOffdBlock(ingredientsArray) {
    for (let i = 0; i < ingredientsArray.length; i++) {
        ingredientsArray[i].disabled = false;
        // ingredientsArray[i].style.color = 'black';
    }
}

function addOneIngredient(ingredients, img) {    
    // let count = 0;
    const ingredientsArray = Array.from(ingredients);
    for (let node of ingredients) {
        node.addEventListener('click', event => {
            // count++;
            img.style.display = 'block';
            addIngredientInViewing(event.target.innerText, node.dataset.price);
            addPriceInnerText(node.dataset.price);
            node.style.color = 'red';
            node.disabled = true;  
            // if (count >= 1) {
            //     disableTruedBlock(ingredientsArray);
            // }  
            arrViewing.push(node.innerText);
            console.log(arrViewing);
            if (arrViewing.includes(node.innerText)) {
                disableTruedBlock(ingredientsArray);
            } 
        })    
    }
}
addOneIngredient(ingredientsOsnova, image1);
addOneIngredient(ingredientsSause, image4);


function addTwoIngredient(ingredients, img) {    
    let count = 0;
    const ingredientsArray = Array.from(ingredients);
    for (let node of ingredients) {
        node.addEventListener('click', event => {
            count++;
            img.style.display = 'block';
            addIngredientInViewing(event.target.innerText, node.dataset.price);
            addPriceInnerText(node.dataset.price);
            // colors(node);
            node.style.color = 'red';
            node.disabled = true;  
            arrViewing.push(node.innerText);
            console.log(arrViewing);
            console.log(count);
            if (count === 2) {
                disableTruedBlock(ingredientsArray);
                count--;
            } 
        })    
    }
}
addTwoIngredient(ingredients1, image2);
addTwoIngredient(ingredients2, image3);


function deletePriceInnerText(event) {    
    const price = document.createElement('text');
    price.innerText = event;
    const userPrice = document.getElementById('price');
    let prices =  +userPrice.innerText - +price.innerText;
    userPrice.innerText = prices;
}

function resetParameters(arr, img, index) {
    arr[index].style.color = 'black';
    disableOffdBlock(arr);
    img.style.display = 'none';
}

const orderList = document.getElementById('userIngredients');
function removeIngridient(event) {
   let ingredientToRemove = event.target;
   if (ingredientToRemove !== this) {  
        arrViewing.pop();
        console.log(arrViewing);   
        ingredientToRemove.remove();
        deletePriceInnerText(ingredientToRemove.dataset.price);
        if (arrOsnov.includes(ingredientToRemove.innerText)) {
            let index = arrOsnov.indexOf(ingredientToRemove.innerText);
            resetParameters(ingredientsOsnova, image1, index);            
        }
        if (arrIngredints1.includes(ingredientToRemove.innerText)) {
            let index = arrIngredints1.indexOf(ingredientToRemove.innerText);
            resetParameters(ingredients1, image2, index);          
        }
        if (arrIngredints2.includes(ingredientToRemove.innerText)) {
            let index = arrIngredints2.indexOf(ingredientToRemove.innerText);
            resetParameters(ingredients2, image3, index);          
        }
        if (arrSauce.includes(ingredientToRemove.innerText)) {
            let index = arrSauce.indexOf(ingredientToRemove.innerText);
            resetParameters(ingredientsSause, image4, index);            
        }
   }
}
orderList.addEventListener('click', removeIngridient);
