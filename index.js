#!/usr/bin/env node
const program = require('commander');
// Commands
const init = require('./commands/init')
const controller = require('./commands/controller')
const model = require('./commands/model')
const policie = require('./commands/policie')

program
    .version('0.1.0', '-v, --version')
    .command('init <name>')
    .option('-o, --origin <url>', 'git origin')
    .action((name, options) => {
        init(name, options.origin);
    });

program
    .command('generate <type> <name>')
    .option('-t, --tablename <tablename>', 'only model type')
    .action((type, name, options) => {
        switch(type) {
            case 'controller':
                controller(name);
                break;
            case 'model':
                model(name, options.tablename)
                break;
            case 'type':
                break;
            case 'policie':
                policie(name);
                break;
            case 'helper':
                break;
            default:
                console.log('Generate type is undefined. Types: controller | model | type | policie | helper ');
                break;
        }
    });

program.parse(process.argv);