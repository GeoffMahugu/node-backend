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

Examples at [3_std.js](3_std.js)

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

Examples at [4_readlines.js](4_readlines.js)

### Modules Export

Functions and Classes can be accessed in other files and reused using `modules.export`

``
let counter = 0;
const inc = () => ++counter;

module.exports = {inc}
``

To import module:

``const { inc } = require('./func_file');``

Examples at [4_module_func.js](4_module_func.js)

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

Examples at [4_event_emitter.js](4_event_emitter.js)

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

Examples at [5_list_files.js](5_list_files.js)

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

Examples at [5_read_files.js](5_read_files.js)

**To write files**

We use `fs.writeFile('file_name', text, err =>{})`

```

fs.writeFile('./assets/random_read_chapter_2.txt', chapter_2.trim(), err => {
    if (err) {
        throw err;
        process.exit();
    };
    console.log("Done: Chapter 2 Write.");
});

```

Examples at [5_write_files.js](5_write_files.js)

**To make directories**

We use `fs.mkdir("directory-name", err =>{})`

To check if file exists: `fs.existsSync("directory-name")`

```

if (fs.existsSync("storage")) {
    console.log("Directory Exists already.")
} else {
    fs.mkdir("storage", err => {
        if (err) {
            throw err;
            process.exit();
        };
        console.log("Done: Created Directory");
    })
}

```

Examples at [5_mkdir.js](5_mkdir.js)


**To Append files**

We use `fs.appendFile('file_path_name', text_to_append, "encoding", err =>{})`

```
fs.appendFile('./storage/mapped_currency.json', txtToWrite, "utf8", err => {
        if (err) {
            throw err;
        }
    });

```

Examples at [5_append_file.js](5_append_file.js)


**To Rename & Remove files**

To rename Files & Directories `fs.renameSync("file_path_name", "new_file_path_name");`

To move a file `fs.rename("file_path_name","new_file_path_name", err=>{});`

To delete a file `fs.unlinkSync("file_path_name");`

**To Remove Directories**

You need to check if directory exists and throw error if inexistent;

If directory has files it will throw error thus need to loop throught directory and delete every file before deleting directory.

To delete a directory `fs.rmdir("directory")`

To delete a directory with files

```
fs.readdirSync("./storage/").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
    console.log("Deleted all files in Storage")
});

fs.rmdir("./storage/", err => {
    if (err) {
        throw err;
    }
    console.log("Deleted Storage Directory")
});

```

Examples at [5_delete_directory.js](5_delete_directory.js)


### Files and Streams
These are operations that can be done on reading files or streaming data from an endpoint constantly emmiting data.

Uses less memory as you are reading files chunk by chunk as opposed to loading the whole data in-memory.

**Read Stream**

To read a stream of data from a file: `fs.createReadStream("file_path_name", "encoding");`

```

const readStream = fs.createReadStream("./assets/reandom_read.txt", "utf8");

readStream.on("data", data => {
    console.log(data);
});

readStream.on("end", data => {
    console.log("Finished reading file");
});


```

Examples at [6_readstream.js](6_readstream.js)


**Write Stream**

To write files usin write stream (Taking data from a stream and writing to a file.)

To write a stream `fs.createWriteStream("file_path_name","encoding");`

```
const writeStream = fs.createWriteStream("./assets/writestream.txt", "utf8");


process.stdin.on("data", data => {
    writeStream.write(data);
})

```

You can also combine readStream and WriteStream.

```
const writeStream = fs.createWriteStream("./assets/writestream.txt", "utf8");

const readStream = fs.createReadStream("./assets/random_read_chapter_2.txt", "utf8");

readStream.on("data", data => {
    writeStream.write(data);
});

```

Examples at [6_writestream.js](6_writestream.js)

#### Child-Process => Exec
Used to spawn child-processess and runs asynchronously.

To run a child process:

```

const cp = require("child_process");

cp.exec("open https://example.com/");

```
