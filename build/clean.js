const pathJoin = require('path').join;

const rimraf = require('rimraf');

const ROOT = pathJoin(__dirname, '../');

const targets = [
	'public/html/static-pages/**',
	'master.js'
];

let tasksCounter = targets.length;

function clean (cb) {
	targets.forEach((target) => {
		const targetPath = pathJoin(ROOT, target);

		rimraf(targetPath, (err) => {
			if (err) {
				console.log('BUILD ERROR: task:clean');

				return cb(err);
			}

			tasksCounter -= 1;

			if (tasksCounter === 0) {
				return cb(null);
			}
		});
	});
}

module.exports = clean;
