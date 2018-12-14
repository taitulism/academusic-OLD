'use strict';

const path = require('path');
const fs   = require('fs');

const readDir = fs.readdirSync;

const pagesData = module.exports = {};

// master pages data
const masterPagesPath = './pages-data/master-pages';

readDir(masterPagesPath).forEach((pageFileName) => {
	const pageName = removeExtension(pageFileName);
	const pagePath = path.resolve(masterPagesPath, pageName);
	const pageData = require(pagePath);

	pageData.title = `אקדמיוזיק | ${pageData.title}`;
	pageData.url   = '/pageName';

	pagesData[pageName] = pageData;
});

// sections/chapters data
const sections = [
	'section-1',
	'section-2',
	'section-3',
	'section-4',
];

sections.forEach((section, i) => {
	const sectionPath = `./pages-data/sections/${section}`;
	const sectionID   = i + 1;

	readDir(sectionPath).forEach((pageFileName) => {
		const pageName = removeExtension(pageFileName);
		const pagePath = path.resolve(sectionPath, pageName);
		const pageData = require(pagePath);

		pageData.sectionID = sectionID;
		pageData.title = `אקדמיוזיק | ${pageData.title}`;
		pageData.url   = `/${section}/pageName`;

		pagesData[sectionID + pageName] = pageData;
	});
});

console.log(pagesData);

function removeExtension (pageFileName) {
	const lastDotIndex = pageFileName.lastIndexOf('.');

	return pageFileName.substr(0, lastDotIndex);
}
