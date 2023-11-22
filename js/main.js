//Select html element in JS
let mainBody = document.querySelector('#main-body');
let accBtn = document.querySelector('#accBtn');
let addBtn = document.querySelector('#addBtn');
let editBtn = document.querySelector('#editBtn');

let accView = document.querySelector('#accView');
let addView = document.querySelector('#addView');


DB.getAll().then((data)=>{
	createTable(data);
}, (err)=>{
	console.log(err);
})

//Change CSS value on click button
addBtn.addEventListener('click',displayAddView);
accBtn.addEventListener('click',displayAccView);

function displayAddView() {
	addView.style.display = 'block';
	accView.style.display = 'none';
}

function displayAccView() {
	addView.style.display = 'none';
	accView.style.display = 'block';
}

function createTable(data) {
	// Logic create table for accounts

	let text = ``;

	for (var i = 0; i < data.length; i++) {
		text += `
					<tr>
						<td>${data[i].id}</td>
						<td>${data[i].name}</td>
						<td>${data[i].deposit}</td>
						<td>${data[i].credit_card}</td>
					</tr>
				`;
	}
	mainBody.innerHTML = text;
}