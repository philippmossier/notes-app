const fs = require("fs")
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(note => note.title === title) is slower as find
    const duplicateNote = notes.find(note => note.title === title)

    debugger // pass to terminal (with windows):  node --inspect-brk app.js add --title="listsa" --body="ssdsdsd"
    // pass to terminal :  node inspect app.js add --title="listsa" --body="ssdsdsd"
    // 

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse("New note added!"))
    } else {
        console.log(chalk.red.inverse("Note title taken!"))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse("Your notes : "))
    notes.forEach(note => console.log(note.title));
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (rmTitle) => {
    // console.log(`I'm gonna remove: ${rmtitle}`)
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== rmTitle)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.inverse("No note found!"))
    } else {
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const findNote = (lfTitle) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === lfTitle)
    if (duplicateNote) {
        console.log(chalk.inverse(duplicateNote.title))
        console.log(duplicateNote.body)
    } else {
        console.log(chalk.red.inverse("Not found!"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    findNote: findNote
}