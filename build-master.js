const ejs = require('ejs');

const fs = require('fs');
const pageData = {
	title: 'אקדמיוזיק',
	description: 'לה לה לה',
	keywords: ['a','b','c']
};

const masterTemplatePath = './master.ejs';
const masterLayoutPath   = './master-layout/layout.ejs';

function buildMaster () {
	console.log('Creating master layout...');

	ejs.renderFile(masterLayoutPath, pageData, (renderErr, template) => {
		if (renderErr) {
			throw renderErr;
		}

		fs.writeFile(masterTemplatePath, template, function (writeErr) {
			if (writeErr) {
				throw writeErr;
			}

			console.log('  - Done - OK');
		});
	});
}

buildMaster();


