const fs = require('fs');

const pathJoin = require('path').join;

const {readdir, readFile, writeFile} = fs;

const ejs = require('ejs');

const pagesPartialsPath  = '../public/html/pages-partials';
const publicStaticPath   = '../public/html/static-pages';
const masterTemplatePath = '../master.ejs';

function buildPage (page = 'home') {
	console.log(`Creating page ${page} layout...`);

	const partialPath = pathJoin(pagesPartialsPath, page);

	readFile(partialPath, (readFileErr, pageContent) => {
		if (readFileErr) {
			throw readFileErr;
		}

		const pageData = {page: pageContent};

		ejs.renderFile(masterTemplatePath, pageData, (renderErr, template) => {
			if (renderErr) {
				throw renderErr;
			}

			const staticPagePath = pathJoin(publicStaticPath, page);

			writeFile(staticPagePath, template, function (writeErr) {
				if (writeErr) {
					throw writeErr;
				}

				console.log('  - Done - OK');
			});
		});
	});
}

function buildPages () {
	readdir(pagesPartialsPath, (readDirErr, files) => {
		if (readDirErr) {
			throw readDirErr;
		}

		files.forEach((fileName) => {
			buildPage(fileName);
		});
	});
}

buildPages();
