const products = [
  { id: 1, name: "Laptop", price: 8000000, stock: 5, category: "electronics" },
  { id: 2, name: "Mouse", price: 120000, stock: 0, category: "electronics" },
  { id: 3, name: "Notebook", price: 15000, stock: 40, category: "stationery" },
  { id: 4, name: "Headset", price: 300000, stock: 8, category: "electronics" },
  { id: 5, name: "Pen", price: 5000, stock: 0, category: "stationery" },
];

const findId = products.find((item, index, array) =>{
  return item.id === 3;
})

const findHeadset = products.find((item, index, array) => {
  return item.name === "Headset"
})

const findTwoCondition = products.find((item, index, array) =>{
  return item.category === "electronics" && item.price < 200000
})

const name4 = products.find((item, index, array) => item.id === 99)?.name;


const findSafeAccess = products.find((item, index, array) => item?.id === 4)?.name;

const findVersion = products.find((item, index, array) =>{
  return item.stock === 0;
})

const filterVersion = products.filter((item, index, array) =>{
  return item.stock === 0;
})
// console.log(findId)
// console.log(findHeadset)
// console.log(findTwoCondition)
// console.log(findSafeAccess)
console.log(name4)
// console.log(findVersion)
// console.log(filterVersion)

