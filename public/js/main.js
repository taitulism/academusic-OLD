const win  = window;
const doc  = document;
const head = doc.head;

const title         = head.getElementsByTagName('title')[0];
const keywords      = head.querySelectorAll('meta[name=keywords')[0];
const description   = head.querySelectorAll('meta[name=description')[0];

const pageContainer = doc.getElementById('page');

const pagesOrder = [
	'intro',
	'course',
	'sound_intro',
	'sound',
	'pitch',
	'intervals_intro',
	'melodic_vs_harmonic',
	'intervals_names',
	'half_step',
	'octave',
	'perfect_intervals',
	'octave_division',
	'guitar_frets',
	'notes_names',
	'notes_list',
	'accidentals_1',
	'accidentals_2',
	'summary_1',
	'practice',
	'intervals_exercise_1',
	'intervals_exercise_2',
	'transposition',
	'modulation',
	'tuning',
	'guitar_strings',
	'guitar_notes',
	'guitar_tuning',
	'summary_2',
	'scales_intro',
	'c_major',
	'notes_vs_intervals',
	'scale_building',
	'scales',
	'end',
];

let currentPageIndex = 0;

function getNextPage (currentIndex) {
	return pagesOrder[++currentIndex] || null;
}

function getPrevPage (currentIndex) {
	return pagesOrder[--currentIndex] || null;
}

function setPageMetaData (meta) {
	description.content = meta.description;
	keywords.content    = meta.keywords;
	title.innerHTML     = meta.title;
}

function getComponent (componentName) {
	if (componentName[0] === '/') {
		componentName = componentName.substr(1);
	}

	console.log(`/getView/${componentName}`);

	fetch(`/getView/${componentName}`).then((response) => {
		// const title       = decodeURI(response.headers.get('title'));
		// const keywords    = decodeURI(response.headers.get('keywords'));
		// const description = decodeURI(response.headers.get('description'));

		// setPageMetaData({title, keywords, description});

		return response.text();
	})
	.then((text) => {
		pageContainer.innerHTML = text;
		
		const article = pageContainer.children[0];

		const {title, keywords, description} = article.dataset;

		setPageMetaData({title, keywords, description});
	});
}

function handleComponentLinks () {
	document.addEventListener('click', (ev) => {
		if (ev.target.dataset.componentLink) {
			ev.preventDefault();

			const href = ev.target.getAttribute('href');

			const page = (href[0] === '/')
				? href.substr(1)
				: href
			;

			getComponent(page);

			window.history.pushState({page}, page, href);
		}
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
	handleComponentLinks();

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

