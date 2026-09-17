document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (!title || !author || !isbn) return;

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">X</button></td>
  `;
  document.getElementById('book-list').appendChild(row);

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
});

document.getElementById('book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});
