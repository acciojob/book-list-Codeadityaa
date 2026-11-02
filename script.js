//your JS code here. If required.
 function submitData() {
	let titleValue = document.getElementById('title').value.trim();
	let authorValue = document.getElementById('author').value.trim();
	let isbnValue = document.getElementById('isbn').value.trim();
	
	 if (!titleValue || !authorValue || !isbnValue) {
        alert('Please fill in all fields.');
        return;
      }
	 
	 let element = document.createElement("tr");
	 element.innerHtml = `<td>${titleValue}</td>
						<td>${authorValue}</td>
						<td>${isbnValue}</td>
						<td><button class="delete">X</button></td>`;
	 document.getElementById('book-list').appendChild(element);
 }


let mybtn = document.getElementById('submit');
mybtn.addEventListener('click',submitData);

	document.getElementById('book-list').addEventListener('click', function (e) {
      if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove(); 
      }
    });