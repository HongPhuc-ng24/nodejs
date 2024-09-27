//const http = require('node:http');

import http from "node:http";
import path from "node:path";
import os from 'node:os';


const notes = "/users/joe/notes.txt";
let name = "abc";
let file ="xyz.txt";

//let a = name + "/" + file;

path.basename(notes); // notes.txt

let a = path.join(name, file); // '/users/joe/notes.txt'

console.log(os.arch());

import { hello } from "./demo_module.mjs";

//const hello = require("./demo_module");

hello();


http
 .createServer((request, response) =>{
    response.write("<h1> hello, Phuc</h1>");
    response.end();
 })
 .listen(8080);
