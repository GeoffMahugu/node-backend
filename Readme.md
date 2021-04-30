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
