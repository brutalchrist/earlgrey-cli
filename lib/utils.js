const shell = require('shelljs');

module.exports = {
    isEarlegrey : () => {
        shell.config.silent = true;

        if (shell.find('.earlgrey').code === 0) {
            return true;
        }

        console.log('The command must be executed in the Earlgrey project route');
        return false;
    }
}
