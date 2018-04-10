const shell = require('shelljs');
const utils = require('./utils');

module.exports = {
    getPackage : () => {
        if (utils.isEarlegrey()) {
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
