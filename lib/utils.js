const shell = require('shelljs');

module.exports = {
    earlgreyRoot : () => {
        shell.config.silent = true;
        var path = '';

        for (var i = 0; i < 10 ; i++) {
            if (shell.find(path + '.earlgrey').code === 0) {
                return path;
            } else {
                path += '../';
            }
        }

        console.log('The command must be executed in the Earlgrey project route');
        return false;
    }
}
