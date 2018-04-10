const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');
const config = require('../lib/config');

const model = require('../generators/model');

module.exports = (name, tablename = '') => {
    if (shell.find('.', '.earlgrey').code === 0) {
        const file = 'src/models/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(model(capitalize(name), config.getPackage(), tablename)).to(file);
        } else {
            console.log('Error to write file ' + file);
        }
    } else {
        console.log('The command must be excecuted in the Earlgrey project route');
    }
}
