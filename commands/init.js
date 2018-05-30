const shell = require('shelljs');
const Spinner = require('cli-spinner').Spinner;
const clone = require('git-clone');
var fs = require('fs');

const config = require('../lib/config');

const url_seed = 'https://github.com/acalvoa/earlgrey-seed.git';

module.exports = (name, origin, eclipse) => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    var spinner = new Spinner('%s Cloning seed ' + url_seed + ' into ' + name);
    spinner.setSpinnerString(18);

    spinner.start();
    clone(url_seed, name, {}, error => {
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

        spinner = new Spinner('%s Deleting files');
        spinner.setSpinnerString(18);
        spinner.start();
        shell.rm(
            'src/controllers/.controllers',
            'src/helpers/.helpers',
            'src/models/.models',
            'src/policies/.policies',
            'src/types/.types'
        );
        spinner.stop();
        process.stdout.write('\n');

        spinner = new Spinner('%s Patching Kernel');
        spinner.setSpinnerString(18);
        spinner.start();
        shell.sed('-i', 'package test', 'package ' + config.getPackage(), 'src/core/Kernel.java');
        spinner.stop();
        process.stdout.write('\n');

        if(eclipse) {
            fs.writeFile(".project", `
            <?xml version="1.0" encoding="UTF-8"?>
            <projectDescription>
                <name>`+name+`</name>
                <comment></comment>
                <projects>
                </projects>
                <buildSpec>
                    <buildCommand>
                        <name>org.eclipse.jdt.core.javabuilder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                    <buildCommand>
                        <name>org.eclipse.wst.common.project.facet.core.builder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                    <buildCommand>
                        <name>org.jboss.tools.ws.jaxrs.metamodelBuilder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                    <buildCommand>
                        <name>org.jboss.tools.jst.web.kb.kbbuilder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                    <buildCommand>
                        <name>org.eclipse.wst.validation.validationbuilder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                    <buildCommand>
                        <name>org.eclipse.m2e.core.maven2Builder</name>
                        <arguments>
                        </arguments>
                    </buildCommand>
                </buildSpec>
                <natures>
                    <nature>org.eclipse.m2e.core.maven2Nature</nature>
                    <nature>org.eclipse.jem.workbench.JavaEMFNature</nature>
                    <nature>org.eclipse.wst.common.modulecore.ModuleCoreNature</nature>
                    <nature>org.eclipse.wst.common.project.facet.core.nature</nature>
                    <nature>org.eclipse.jdt.core.javanature</nature>
                    <nature>org.eclipse.wst.jsdt.core.jsNature</nature>
                    <nature>org.jboss.tools.ws.jaxrs.nature</nature>
                    <nature>org.jboss.tools.jst.web.kb.kbnature</nature>
                    <nature>org.jboss.tools.jsf.jsfnature</nature>
                </natures>
            </projectDescription>`, function(err) {
                if(err) {
                    return console.log(err);
                }
            
                console.log("Eclipse project generated.");
            }); 
        }
    });
}
