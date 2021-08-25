console.log("main is loaded")

const createDoctor = (name, specialty, address) => {
    return {
        Name: name,
        Specialty: specialty,
        Address: address
    }
}

const doc = createDoctor("Phil", "Dentist", "100 Dentist Way")

console.log(doc)

const createPet = (name, breed) => {
    return {
        Name: name,
        Breed: breed
    }
}

let BowWowKennels = [];
const pet = createPet("Sailor", "Dog")
BowWowKennels.push(pet)

const dog = createPet("Floof", "Fluffers")
BowWowKennels.push(dog)

const cat = createPet("Tim", "Catcat")
BowWowKennels.push(cat)
console.log(BowWowKennels)

//Music Row
//--Record labels
const JumpStop = [];
const Chatten = [];
const Polar = [];
const artistRoster = [];

//genre factory functions
const createArtist = (name, genre, age) => {
    let artist = {
        Name: name,
        Genre: genre,
        Age: age
    }
    artistRoster.push(artist)
    return artist
}
const Bruce = createArtist("Bruce Atikins", "Country", 23)
const Jensen = createArtist("Jensen Brown", "Pop", 20)
const Dre = createArtist("Dre Funkz", "Funk", 25)
const Dusta = createArtist("Dusta Grimes", "Rap", 21)
const Bart = createArtist("Bartholomew Danielson", "Bluegrass", 23)
const Avilee = createArtist("Avilee Dallas", "Country", 19)
const Austin = createArtist("Austin Kinkaid", "Pop", 22)
const Loy = createArtist("Loyonce Branis", "Rap", 27)


const addToLabel = (artist) => {
    if (artist.Genre === "Country" || artist.Genre === "Bluegrass") {
        Chatten.push(artist)
    }
    if (artist.Genre === "Funk" || artist.Genre === "Rap") {
        JumpStop.push(artist)
    }
    if (artist.Genre === "Pop") {
        Polar.push(artist)
    }
}

const organizeByLabel = (arr) => {
    arr.forEach(artist => {
        addToLabel(artist)
    })
}
organizeByLabel(artistRoster);

console.log("Roster", artistRoster)
console.log("Jumpstop", JumpStop);
console.log("Chatten", Chatten);
console.log("Polar", Polar);
