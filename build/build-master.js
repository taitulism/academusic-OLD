const ejs = require('ejs');

const fs = require('fs');
const pageData = {
	title: 'אקדמיוזיק',
	description: 'לה לה לה',
	keywords: ['a','b','c']
};

const clean = require('./build/clean');

const masterLayoutPath = '../master-layout/layout.ejs';
const masterOutputPath = '../public/html/master.html';


function buildMaster () {
	console.log('Cleaning lefovers...');

	clean(() => {
		console.log('  - done');
		console.log('Creating master layout...');

		ejs.renderFile(masterLayoutPath, pageData, (renderErr, template) => {
			if (renderErr) {
				throw renderErr;
			}

			fs.writeFile(masterOutputPath, template, function (writeErr) {
				if (writeErr) {
					throw writeErr;
				}

				console.log('  - done');
			});
		});
	});
}

buildMaster();


