const ejs = require('ejs');

const fs = require('fs');
const pageData = {
	title: 'אקדמיוזיק',
	description: 'לה לה לה',
	keywords: ['a','b','c']
};

const masterLayoutPath = './master-layout/layout.ejs';
const masterIndexPath = './master.ejs';
const publicIndexPath = './public/html/index.html';

console.log('Creating master layout...');

function copyToPublic () {
	console.log('Copying to public...');

	fs.readFile(masterIndexPath, (readErr, content) => {
		if (readErr) {
			throw readErr;
		}

		fs.writeFile(publicIndexPath, content, (writeErr) => {
			if (writeErr) {
				throw writeErr;
			}

			console.log('  - Done - OK');
		});
	});
}

function buildMaster () {
	ejs.renderFile(masterLayoutPath, pageData, (renderErr, template) => {
		if (renderErr) {
			throw renderErr;
		}

		fs.writeFile(masterIndexPath, template, function (writeErr) {
			if (writeErr) {
				throw writeErr;
			}

			console.log('  - Done - OK');
			copyToPublic()
		});
	});
}

buildMaster();


