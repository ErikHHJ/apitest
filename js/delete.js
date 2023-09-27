import { url } from './api.js';

const deleteButton = document.querySelector('.form-button__delete');

export async function deleteFetch() {
  let id = document.querySelector('#form-input__id');
  let idInput = id.value;

  const messageContainer = document.querySelector('.message-container');

  if (idInput === '') {
    console.log(idInput);
    messageContainer.innerHTML = `
      <p>Nothing to delete..</p>
    `;
  } else {
    const res = await fetch(url + idInput, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();

    messageContainer.innerHTML = `
      <p>${data.status} & ${data.message}</p>
    `;
  }
}

deleteButton.addEventListener('click', (e) => {
  e.preventDefault();
  deleteFetch();
});
