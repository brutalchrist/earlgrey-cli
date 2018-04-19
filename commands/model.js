const shell = require('shelljs');
const camelize = require('camelize');
const capitalize = require('capitalize');

const config = require('../lib/config');
const utils = require('../lib/utils');

const model = require('../generators/model');

module.exports = (name, tablename = '') => {
    const path = utils.earlgreyRoot();
    if (path !== false) {
        const file = path + 'src/models/' + capitalize(camelize(name)) + '.java';

        if (shell.touch(file).code === 0) {
            shell.ShellString(model(capitalize(name), config.getPackage(), tablename)).to(file);

            if (shell.find(file).code === 0) {
                console.log('The ' + capitalize(camelize(name)) + ' model was created');
            }
        } else {
            console.log('Error to write file ' + file);
        }
    }
}
