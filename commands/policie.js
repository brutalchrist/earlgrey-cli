const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const policie = require('../generators/policie');

module.exports = name => {
    if (utils.isEarlegrey()) {
        const file = 'src/policies/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(policie(capitalize(name), config.getPackage())).to(file);

            if (shell.find(file).code === 0) {
                console.log('The ' + capitalize(camelize(name)) + ' policie was created');
            }
        } else {
            console.log('Error to write file ' + file);
        }
    } else {
        console.log('The command must be excecuted in the Earlgrey project route');
    }
}
