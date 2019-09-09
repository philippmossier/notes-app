const yargs = require('yargs')
const note = require('./notes.js')

// Customize yargs version
yargs.version('1.1.0')

// Create add command
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

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: "Title to remove",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: "list",
    describe: "List all notes",
    handler() {
        note.listNotes()
    }
})
// Create find command
yargs.command({
    command: "find",
    describe: "Reading a note",
    builder: {
        title: {
            describe: "Title to look for",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        note.findNote(argv.title)
    }
})






// add, remove, read, list

// console.log(process.argv)
// console.log(yargs.argv)

yargs.parse()