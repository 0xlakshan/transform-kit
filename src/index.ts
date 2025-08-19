#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .name("Transform-kit")
  .description("Easy code transformations")
  .version("0.0.1");

// Example: hello command
program
  .command("hello [name]")
  .description("Say hello")
  .option("-u, --uppercase", "Uppercase the message")
  .action((name: string = "world", options) => {
    let msg = `Hello, ${name}!`;
    if (options.uppercase) msg = msg.toUpperCase();
    console.log(msg);
  });

// Example: math command
program
  .command("add <a> <b>")
  .description("Add two numbers")
  .action((a: string, b: string) => {
    const result = Number(a) + Number(b);
    console.log(`${a} + ${b} = ${result}`);
  });

program.parse(process.argv);
