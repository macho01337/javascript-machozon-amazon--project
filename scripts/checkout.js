import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary}from './checkout/paymentSummary.js';
import {loadproducts , loadproductsFetch}from '../data/products.js';
import {loadCart} from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/backend.js';

async function loadPage(){


 await loadproductsFetch();

 const value = await new Promise((resolve)=> {
  loadCart(() => {
   resolve();
  });
});

renderOrderSummary();
renderPaymentSummary();


}
loadPage();


Promise.all([
  loadproductsFetch(),
new Promise((resolve)=>{
  loadCart(()=>{
    resolve('value1');
  });
 }),
 new Promise((resolve)=> {
  loadCart(() => {
   resolve();
  });
 })
]).then((values) => {
  console.log(values); 
  renderOrderSummary();
  renderPaymentSummary();
});



/* new Promise((resolve)=>{


  loadproducts(()=>{
    resolve('value1');
   
  });
}).then((value)=>{

  console.log(value);

  return new Promise((resolve)=> {
  loadCart(() => {
   resolve();
  });
 });
}).then(()=> {
  renderOrderSummary();
  renderPaymentSummary();
})




/*
loadproducts(()=>{
   loadCart (()=>{
    renderOrderSummary();
    renderPaymentSummary();
    });
  });

*/