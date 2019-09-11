Node.js - Notes APP
=========================================

Simple notes app which runs in the console.
Written with node.js

( used npm packages: yargs, chalk)

How to start the APP
----------------------------

1. Clone this repo
2. Run `npm install`

What i learned
----------------------------

* debugging developer console for node.js
* debugging with console.logs
* customizing console.logs with chalk
* refresh the usecase of find and filter js method

* handle fs databuffer and json objects, refresh try/catch block:

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

* argv commands & builder options with yargs

yargs.command({
    command: "add",
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }
})

* app.js handler(argv) takes input and 
  puts the input into a function as an argument to the note.js file
