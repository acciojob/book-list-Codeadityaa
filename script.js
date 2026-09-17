//your JS code here. If required.
const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Form submisison par page refresh hone se rokta hai

    // Input values lena aur extra spaces trim karna
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const ISBN = document.getElementById('isbn').value.trim();

    // Agar koi bhi field khali hai toh table me add mat karo
    if (!title || !author || !ISBN) return;

    // Naya Table Row (tr) banana
    const tr = document.createElement('tr');

    // Title waala cell (td)
    const tdTitle = document.createElement('td');
    tdTitle.textContent = title; // Fix: textContext ko textContent kiya

    // Author waala cell (td)
    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = author; // Fix: Author (Capital) ko small author kiya

    // ISBN waala cell (td)
    const tdIsbn = document.createElement('td');
    tdIsbn.textContent = ISBN; // Fix: Isbn ko strict Capital ISBN kiya

    // Saare cells ko Row (tr) me daalna
    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdIsbn);

    // Delete (Clear) Button waala cell banana
    const tdDelete = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Clear'; // Fix: textContext ko textContent kiya
    deleteBtn.classList.add('delete');

    // Button click hone par us particular row (tr) ko table se hatana
    deleteBtn.addEventListener('click', function() {
        tbody.removeChild(tr);
    });

    // Delete button ko td me aur td ko row me append karna
    tdDelete.appendChild(deleteBtn);
    tr.appendChild(tdDelete);

    // Final Row ko table body (tbody) ke andar daalna
    tbody.appendChild(tr);

    // Form inputs ko wapas khali (clear) karna
    form.reset();
});
