
const cart = [
  { id: 1, name: "Keyboard", price: 250000, qty: 1, category: "electronics" },
  { id: 2, name: "Notebook", price: 15000, qty: 4, category: "stationery" },
  { id: 3, name: "Mouse", price: 120000, qty: 2, category: "electronics" },
  { id: 4, name: "Pen", price: 5000, qty: 10, category: "stationery" },
  { id: 5, name: "Headset", price: 300000, qty: 1, category: "electronics" },
];

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const totalPrice = cart.reduce((total, currentPrice ) => {
  return currentPrice.price * currentPrice.qty + total
}, 0)

const sumQty = cart.reduce((total, currentPrice) => {
  return total + currentPrice.qty 
}, 0);

const mostExpensiveItem = cart.reduce((acc, item) =>{
  return item.price > acc.price ? item : acc 
})

const groupByCategory = cart.reduce((acc, item) =>{
  if(!acc[item.category]){
    acc[item.category] = [];
  }

  acc[item.category].push(item.name);
  return acc;
}, {});

const totalPerCategory = cart.reduce((acc, item) =>{

  const calc = item.price * item.qty;
  acc[item.category] = acc[item.category] || 0;


  acc[item.category] += calc ;
  return acc;
}, {})

// contoh 1
const occurences  = fruits.reduce((acc, item) =>{
  if(item === "apple") acc.apple++;
  if(item === "banana") acc.banana++;
  if(item === "orange") acc.orange++;
  return acc;
},{apple: 0, banana: 0, orange: 0})
// contoh 2
const occurences = fruits.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

// console.log(totalPrice)
// console.log(sumQty)
// console.log(mostExpensiveItem)
// console.log(groupByCategory)
// console.log(totalPerCategory);
console.log(occurences);