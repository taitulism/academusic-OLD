const pageContainer = document.getElementById('page');

function getComponent (componentName) {
	console.log(`/getView/${componentName}`);
	fetch(`/getView/${componentName}`).then((response) => {
		return response.text();
	})
	.then((text) => {
		if (pageContainer) {
			pageContainer.innerHTML = text;
			listenToLinksClick(pageContainer);
		}
	});
}

function listenToLinksClick (elm = document) {
	const linksCollection = elm.getElementsByTagName('a');
	const links = Array.prototype.slice.call(linksCollection, 0);

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			const href = link.getAttribute('href');

			getComponent(href);
		}, false);
	});	
}

const viewUrl = window.location.pathname;
listenToLinksClick();

if (viewUrl === '/' || viewUrl === '/home') {
	getComponent('home');
}
else if (viewUrl === '/about') {
	getComponent('about');
}

