// fdbb311b

// 6e537db6
const elInput = document.querySelector('.js-input');
const elForm = document.querySelector('.js-form');
const elList = document.querySelector('.js-list');
const elFoundedTitle = document.querySelector('.js-found')

const createItem = (array, node) => {
	node.innerHTML = '';
	array.Search.forEach((item) => {
		var newItem = document.createElement('li');
		var nameItem = document.createElement('h3');
		var idItem = document.createElement('span');
		var time = document.createElement('time');
		var img = document.createElement('img');
		var box = document.createElement('div');
		var type = document.createElement('p');

		newItem.setAttribute('class', 'js-item');
		idItem.setAttribute('class', 'js-id');
		nameItem.setAttribute('class', 'js-item-name');
		box.setAttribute('class', 'js-box');
		time.setAttribute('class', 'js-time');
		img.setAttribute('class', 'js-img');
		type.setAttribute('class', 'js-type');

		img.src = `${item.Poster}`;
		time.textContent = `Year: ${item.Year}`;

		nameItem.textContent = `${item.Title}`;
		idItem.textContent = `id: ${item.imdbID}`;
		type.textContent = `Type: ${item.Type}`;
		newItem.appendChild(img);
		box.appendChild(idItem);
		box.appendChild(nameItem);
		box.appendChild(time);
		box.appendChild(type);

		newItem.appendChild(box);

		node.appendChild(newItem);
	});

};

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	console.log(elInput.value);

	async function func() {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=6e537db6&s=${elInput.value.trim()}`,
		);
		const data = await response.json();
		console.log(data);

        if (data.Response == 'False'){
            elFoundedTitle.textContent = "Movie not found!"
            elFoundedTitle.classList.add("js-error");
            elFoundedTitle.classList.remove("js-true");
            elInput.classList.add("is-invalid");
            elInput.classList.remove("is-valid")
        }

        else{
            elFoundedTitle.textContent = "Founded movies";
            elFoundedTitle.classList.add("js-true");
            elFoundedTitle.classList.remove("js-error");
            elInput.classList.add("is-valid");
            elInput.classList.remove("is-invalid");
        }
		createItem(data, elList);
	}

	func();


});
