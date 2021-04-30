### NODE.js Backend
This doc will contain references to Node process and modules.

#### Process.argv
Used to send arguments to the node runtime.

``node index.js Fristname Lastname``

code to handle the script:

```
const [, , firstname, lastname] = process.argv;
console.log(`FirstName: ${firstname} and LastName ${lastname}`)

```

You can use flags to grab the index of the values thus able to reorder the inputs

```
const grab = flag => {
    const indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag]
}

const firstName = grab('--firstName');
const lastName = grab('--lastName');

console.log(`FirstName: ${firstName} and LastName ${lastName}`);

```

and on the terminal run:

``node index --firstName MyFirstName --lastName MyLastName``


#### Process.stdin & Process.stdout
These are used to read user input and output results from the programm.


 ```

process.stdout.write(`\n\n Hello, what's your name 😊\n\n`);

process.stdin.on('data', data => {
    process.stdout.write(`\n\n Hi ${data.toString().trim()} 😊, i'm Robbo X 🤖\n\n`);
    process.exit();
});


```

Examples at (3_std.js)[3_std.js]


#### Readlines
This is a core module that makes interacting with user input much easier: 

```
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What\'s your favourite 🍦 flavour?", answer => {
    console.log(`Favourite 🍦: ${answer}`);
    process.exit();
});

```

Examples at (4_readlines.js)[4_readlines.js]


### Modules Export
Functions and Classes can be accessed in other files and reused using `modules.export`

``
let counter = 0;
const inc = () => ++counter;

module.exports = {inc}
``

To import module:

``const { inc } = require('./func_file');``

Examples at (4_module_func.js)[4_module_func.js]


### EventEmitter
Event Emitters are asynchronous and fired on receipt of the event trigger.

```
const { EventEmitter } = require("events");
const emitter = new EventEmitter();

emitter.on("customEvent", (p1, p2) => {
    console.log(`Param_1: ${p1}  => Param_2: ${p2}\n`);
});

emitter.emit("customEvent", "NAME", "My User Name");

```

Examples at (4_event_emitter.js)[4_event_emitter.js]

#### File Stystem (Fs) module

The `fs` module is used to:

 - Read files & Directories.
 - Create Files and Directories.
 - Watch files & directories.
 - Modify file permisions.

**To read directories:**

```
const fs = require("fs");

const files = fs.readdirSync("./");
```

The above code is blocking. Reading the files in the directory is Synchronous and has to be completed before executing next code.

While the async code uses `fs.readdir("directory", (error,files)={})`

```
fs.readdir("./", (err, files) => {
    console.log("Async File read start.");
    console.log(files);
});

```

Examples at (5_list_files.js)[5_list_files.js]


**To read files:**

Synchronous/Blocking: We use `fs.readFileSync("file_path", "encoding")`

`const text = fs.readFileSync("./assets/reandom_read.txt", "utf8")`

We use `fs.readFile("file_path","encoding",(error,text)={})` 

```

fs.readFile("./assets/reandom_read.txt", "utf8", (err, text) => {
    if (err) throw err;
    console.log(text);
});

```

To read **Binary Files** remove the encoding `fs.readFile("file_path", (error,text)={})`:

```
fs.readFile("./assets/random_img.jpg", (err, text) => {
    if (err) throw err;
    console.log(text);
});

```
