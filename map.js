const orders = [
  { id: 1, customer: "Rina", items: 3, pricePerItem: 25000 },
  { id: 2, customer: "Budi", items: 1, pricePerItem: 120000 },
  { id: 3, customer: "Sari", items: 5, pricePerItem: 15000 },
  { id: 4, customer: "Andi", items: 2, pricePerItem: 50000 },
];


const listOfOrder = orders.map((order, i) => {
  return `Order #${order.id}: ${order.customer} - Rp${order.pricePerItem * order.items}`
})

const ordersWithTotal = orders.map((order) =>{
  return {
    ...order,
    total: order.items * order.pricePerItem
  }
})

const orderDiscount = orders.map((order) =>{
  const total = order.items * order.pricePerItem; 
  return {
    ...order, finalTotal: total > 100000 ? total * 0.9 : total
  };
  
})

const orderOver = orders.filter((order) => order.items * order.pricePerItem >= 100000).map((order) => order.customer);
  


console.log(listOfOrder);
console.log(ordersWithTotal);
console.log(orderDiscount);
console.log(orderOver);