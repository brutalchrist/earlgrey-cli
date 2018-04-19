const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const controller = require('../generators/controller');

module.exports = name => {
    const path = utils.earlgreyRoot();
    if (path !== false) {
        const file = path + 'src/controllers/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(controller(capitalize(name), config.getPackage())).to(file);

            if (shell.find(file).code === 0) {
                console.log('The ' + capitalize(camelize(name)) + ' controller was created');
            }
        } else {
            console.log('Error to write file ' + file);
        }
    }
}
