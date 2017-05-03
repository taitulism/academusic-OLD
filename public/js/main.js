const pageContainer = document.getElementById('page');

function getComponent (componentName) {
	if (componentName[0] === '/') {
		componentName = componentName.substr(1);
	}

	console.log(`/getView/${componentName}`);

	fetch(`/getView/${componentName}`).then((response) => {
		return response.text();
	})
	.then((text) => {
		if (pageContainer) {
			pageContainer.innerHTML = text;
			ajaxifyLinks(pageContainer);
		}
	});
}

function ajaxifyLinks (elm = document) {
	const linksCollection = elm.getElementsByTagName('a');
	const links = Array.prototype.slice.call(linksCollection, 0);

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			const href = event.target.getAttribute('href');

			const page = (href[0] === '/')
				? href.substr(1)
				: href
			;

			getComponent(page);

			window.history.pushState({page}, page, href);
		}, false);
	});	
}

window.onpopstate = function (stateObj) {
	const page = (stateObj.state)
		? stateObj.state.page
		: 'home'
	;

	getComponent(page);
};

const viewUrl = window.location.pathname;

function appStart () {
	ajaxifyLinks();

	if (viewUrl === '/') {
		getComponent('home');
		window.history.replaceState({page: '/'}, '/', '/');
	}	
	else if (viewUrl === '/home') {
		getComponent('home');
		window.history.replaceState({page: 'home'}, 'home', '/home');
	}
	else if (viewUrl === '/about') {
		getComponent('about');
		window.history.replaceState({page:'about'}, 'about', '/about');
	}
}

appStart();

