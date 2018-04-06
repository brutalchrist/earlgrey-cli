#!/usr/bin/env node
const program = require('commander');
// Commands
const init = require('./commands/init')
const controller = require('./commands/controller')

program
    .version('0.1.0', '-v, --version')
    .command('init <name>')
    .option('-o, --origin <url>', 'git origin')
    .action(function(name, options) {
        init(name, options.origin);
    });

program
    .command('generate <type> <name>')
    .action(function(type, name) {
        switch(type) {
            case 'controller':
                controller(name);
                break;
            case 'model':
                break;
            case 'type':
                break;
            case 'policie':
                break;
            case 'helper':
                break;
            default:
                console.log('Generate type is undefined. Types: controller | model | type | policie | helper ');
                break;
        }
    });

program.parse(process.argv);