#!/usr/bin/env node
const program = require('commander');
// Commands
const init = require('./commands/init')
const controller = require('./commands/controller')
const model = require('./commands/model')
const policy = require('./commands/policy')
const types = require('./commands/type');
const helper = require('./commands/helper');

program
    .version('1.0.0', '-v, --version')
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
                types(name);
                break;
            case 'policy':
                policy(name);
                break;
            case 'helper':
                helper(name);
                break;
            default:
                console.log('Generate type is undefined. Types: controller | model | type | policy | helper ');
                break;
        }
    });

program.parse(process.argv);