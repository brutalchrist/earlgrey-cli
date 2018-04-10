const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const controller = require('../generators/controller');

module.exports = name => {
    if (utils.isEarlegrey()) {
        const file = 'src/controllers/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(controller(capitalize(name), config.getPackage())).to(file);
        } else {
            console.log('Error to write file ' + file);
        }
    } else {
        console.log('The command must be excecuted in the Earlgrey project route');
    }
}
