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