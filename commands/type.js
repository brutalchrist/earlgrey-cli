const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const types = require('../generators/type');

module.exports = name => {
    const path = utils.earlgreyRoot();
    if (path !== false) {
        const file = path + 'src/types/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(types(capitalize(name), config.getPackage())).to(file);

            if (shell.find(file).code === 0) {
                console.log('The ' + capitalize(camelize(name)) + ' type was created');
            }
        } else {
            console.log('Error to write file ' + file);
        }
    }
}