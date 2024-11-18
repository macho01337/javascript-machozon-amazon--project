export const orders = localStorage.getItem('orders') || [];

export function AddOrder(order){
    orders.unshift(order);
   saveToStorage();
}

function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}