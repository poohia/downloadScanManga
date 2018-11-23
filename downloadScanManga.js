#!/usr/bin/env node
/**
 * @author AZOULAY Jordan <jazoulay@greenflex.com>
 * @description Program for sync local translation and localise.biz
 */

let program = require("commander");
let main    = require("./modules/main");
let version = "1.0.7-stable";
let cmdValue = null;

program
  .version(version)
  .option("-v, --verbose", "display verbose")
  .option("-f, --from [language]", "language from extract")
  .option(
    "-d, --direction [direction]",
    "use 'down' if local changes should be overwritten [default: 'down'] ( use for sync cmd )"
  )
  .usage("[options] <cmd>")
  .arguments("<cmd>")
  .action(function(cmd, env) {
    cmdValue = cmd;
  });

init();

function init() {
  program.on("--help", function() {
    console.log("  Infos:");
    console.log("\tHello world");

  });
  program.parse(process.argv);
  main.start();
}
