const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const policie = require('../generators/policy');

module.exports = name => {
    const path = utils.earlgreyRoot();
    if (path) {
        const file = path + 'src/policies/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(policie(capitalize(name), config.getPackage())).to(file);

            if (shell.find(file).code === 0) {
                console.log('The ' + capitalize(camelize(name)) + ' policy was created');
            }
        } else {
            console.log('Error to write file ' + file);
        }
    }
}
