const grid = new Muuri('.grid', {
	layout: {
		rounding: false,
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.querySelector('.grid').classList.add('img-charged');

	const links = document.querySelectorAll('#category a');

	// Filter categories
	links.forEach(element => {
		element.addEventListener('click', event => {
			event.preventDefault();
			links.forEach(link => link.classList.remove('active'));
			
			event.target.classList.add('active');

			const category = event.target.innerHTML.toLowerCase();
			category === 'todos'
				? grid.filter(`[data-category]`)
				: grid.filter(`[data-category="${category}"]`);
		});
	});

	document.querySelector('#search-bar').addEventListener('input', event => {
		const searched = event.target.value;
		grid.filter(item => item.getElement().dataset.tag.includes(searched));
	});
});