const shell = require('shelljs');

module.exports = {
    getPackage : () => {
        if (shell.find('.earlgrey').code === 0) {
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
