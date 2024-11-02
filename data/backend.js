const xhr =  new XMLHttpRequest();


xhr.addEventListener('load', ()=>{
   console.log(xhr.response);
});

xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
xhr.send();
xhr.response();