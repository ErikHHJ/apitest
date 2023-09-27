import { url } from './api.js';

const getButton = document.querySelector('.form-button__fetch');

// fetch before button is clicked..

async function getFetch() {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  getButton.addEventListener('click', (e) => {
    e.preventDefault();
    renderList(data);
  });
}

const renderList = (arr) => {
  const list = document.querySelector('#form-list');
  list.innerHTML = '';

  arr.forEach((e) => {
    list.innerHTML += `
    <div class="result-container">
      <h2>${e.name}</h2>
      <p>${e.content}</p>
    </div>
    `;
  });
};

const renderSpecific = (obj) => {
  let data = obj;
  const list = document.querySelector('#form-list');
  list.innerHTML = '';

  list.innerHTML += `
    <div class="result-container">
      <h2>${data.name}</h2>
      <p>${data.content}</p>
    </div>
    `;
};

getFetch();
