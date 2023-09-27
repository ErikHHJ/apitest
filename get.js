const list = document.querySelector(".list");
const btn = document.querySelector(".btn");
const form =document.querySelector("form");
const input = document.querySelector(".input")
const body = document.querySelector("body");
const sameName = document.querySelector(".sameName");
var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://crud-examples.onrender.com/", requestOptions)
  .then(response => response.json())
  .then(result => show(result))
  .catch(error => console.log('error', error));

  function show(result){
    console.log(result)
    result.forEach((elem) => {
       const listItem = document.createElement("li");
      listItem.innerHTML = `Name: ${elem.name} <br> Content: ${elem.content}`;
      list.appendChild(listItem) 
      return result
    });
  }
    function show2 (result2){
      console.log(result2)
      console.log(Object.values(result2))
      
      
        const listItem2 = document.createElement("ul");
        
          listItem2.innerHTML = `Name: ${result2.name} <br> Content: ${result2.content}`;
          list.appendChild(listItem2)
          
      }
    
    
    btn.addEventListener ("click", (e) =>  {
      list.replaceChildren()
      e.stopPropagation()
      fetch(`https://crud-examples.onrender.com/${Number(input.value)}`, requestOptions)
      .then(response2 => response2.json())
      .then(result2 => show2(result2))
      .catch(error => console.log('error', error));
    });  
sameName.addEventListener ("click", (e) => {
list.replaceChildren()
e.stopPropagation()
fetch(`https://crud-examples.onrender.com/?name=${input.value}`, requestOptions)
      .then(response => response.json())
      .then(result => show(result))
      .catch(error => console.log('error', error));

});



  


  

  

  