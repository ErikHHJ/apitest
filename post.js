const nameInput = document.querySelector(".name");
const contentInput = document.querySelector(".content");
const btn = document.querySelector(".btn")


btn.addEventListener("click", (e) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", `${nameInput.value}`);
    urlencoded.append("content", `${contentInput.value}`);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://crud-examples.onrender.com/?", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
});
