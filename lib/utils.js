const shell = require('shelljs');

module.exports = {
    isEarlegrey : () => {
        shell.config.silent = true;

        if (shell.find('.earlgrey').code === 0) {
            return true;
        }
        return false;
    }
}
