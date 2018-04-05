#!/usr/bin/env node
const program = require('commander');
const init = require('./commands/init')

program
    .version('0.1.0', '-v, --version')
    .command('init <name>')
    .option('-o, --origin <url>', 'git origin')
    .action(function(name, cmd) {
        init(name, cmd.origin);
    });

program.parse(process.argv);