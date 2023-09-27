import { url } from './api.js';

const postButton = document.querySelector('.form-button__post');

export async function postFetch() {
  const nameInput = document.querySelector('#form-input__name').value;
  const contentInput = document.querySelector('#form-input__content').value;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: nameInput,
      content: contentInput,
    }),
  });
  const data = await res.json();

  const messageContainer = document.querySelector('.message-container');
  messageContainer.innerHTML = `
      <p>${data.status} & ${data.message}</p>
    `;
}

postButton.addEventListener('click', (e) => {
  e.preventDefault();
  postFetch();
});
