const shell = require('shelljs');
const utils = require('./utils');

module.exports = {
    getPackage : () => {
        if (utils.earlgreyRoot()) {
            try {
                const configs = JSON.parse(shell.cat('.earlgrey').toString());
                if (typeof configs.package !== 'undefined') {
                    return configs.package;
                }
                return '';
            } catch (e) {
                return '';
            }
        }
        return '';
    }
}
