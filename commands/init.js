const shell = require('shelljs');
const chalk = require('chalk');
const Spinner = require('cli-spinner').Spinner;
const clone = require('git-clone');

const url_seed = 'git@github.com:acalvoa/ealgrey-seed.git';

module.exports = function(name, origin) {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    var spinner = new Spinner('%s Cloning seed ' + url_seed + ' into ' + name);
    spinner.setSpinnerString(18);

    spinner.start();
    clone(url_seed, name, {}, function(error) {
        spinner.stop();
        process.stdout.write('\n');

        if (error) {
            console.log(error);
            return;
        }

        shell.cd(name);
        if (origin) {
            if (shell.exec('git remote set-url origin ' + origin).code == 0) {
                console.log('Change origin to: ', origin);
            }
        } else  {
            shell.rm('-fr', '.git');
        }

        if (shell.touch('.earlgrey').code === 0) {
            shell.ShellString('{"package": "' + name + '"}\n').to('.earlgrey');
        } else {
            console.log('Error to write .earlgrey file');
        }
    });
}
