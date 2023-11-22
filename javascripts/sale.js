const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");

let purchases = [];
const items = [
  {
    nombre:"Original MIX 200G",
    price:500,
    quantity:0
  },
  {
    nombre:"Original MIX 500G",
    price:900,
    quantity:0
  },
  {
    nombre:"Special MIX 200G",
    price:700,
    quantity:0
  },
  {
    nombre:"Special MIX 500G",
    price:1200,
    quantity:0 
  }
]
function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let nameElement, id;
switch (price) {
  case 500:
    nameElement="Original Mix 200g"
    id=0
    break;
    case 900:
    nameElement="Original Mix 500g"
    id=1
    break;
    case 700:
    nameElement="Special Mix 200g"
    id=2
    break;
    case 1200:
    nameElement="Special mix 500g"
    id=3
    break;      
  default:
    break;
}
  
  let purchase = {
    price: price,
    number: number, 
    name: nameElement,         
  }
  ;
  
 purchases.push(purchase);
 items[id].quantity+=number
  window.alert(`${display()}
 Subtotal: ${subtotal()} yenes`);
  

}

function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += ` ${purchases[i].price} yenes por ${purchases[i].number} de ${purchases[i].name} 
`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${xd()}
Subtotal por productos :${sum}yenes
Los gastos de envío son: ${postage} yenes. 
Total: ${sum + postage} yenes`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = ""; 
  items.forEach( object => {
     object.quantity=0;
  });
}
function xd(){ 
  let result=""
  for (let x= 0; x < items.length; x++) { 
  if(items[x].quantity!=0){
   result += `${items[x].nombre} x${items[x].quantity}
`;
  } 
}  
return result;
}
function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000){
   return 500;
  } else {
    return 250;
  }
}
