// 1. Import the all three objects (Song, Musician, Playlist) that you created in the MusicData.js module file
import { Song, Musician, Playlist } from "/MusicData.js";

// 2. declare a new constant and assign to it a new musician object to describe the musician for the first song.
const Musician1 = new Musician("Charli xcx", "Synthesizer", "Hyperpop");
// 3. declare a new constant and assign to it a new musician object to describe the musician for the second song.
const Musician2 = new Musician("Foster the People", "Synthesizer, Drums, Guitar", "Indie Pop");
// 4. declare a new constant and assign to it a new musician object to describe the musician for the third song.
const Musician3 = new Musician("Death Cab for Cutie", "Guitar, Drums", "Indie Pop");
// 5. declare a new constant and assign to it a new Song object to describe the first song
// (make sure to use the Musician object from step 2 in creating this Song object
const Song1 = new Song("c2.0", `${Musician1.name}`, "how i'm feeling now");
// 6. declare a new constant and assign to it a new Song object to describe the second song
// (make sure to use the Musician object from step 3 in creating this Song object
const Song2 = new Song("Helena Beat", `${Musician2.name}`, "Torches");
// 7. declare a new constant and assign to it a new Song object to describe the third song
// (make sure to use the Musician object from step 4 in creating this Song object
const Song3 = new Song("Soul Meets Body", `${Musician3.name}`, "Plans");
// 8. declare a new constant called myPlaylist and assign to it a new Playlist object and make sure to use the three Song objects
//from steps 5, 6, & 7 when creating it.
//It must be called myPlaylist
//It must be called myPlaylist
const myPlaylist = new Playlist("my partner's playlist :D", Song1, Song2, Song3);

//9. call the .getInfo() method on myPlaylist
myPlaylist.getInfo();


//DO NOT EDIT BELOW THIS LINE
//the code below here will insert the Playlist data into the webpage.
const bodyHTML = document.querySelector("body");

bodyHTML.innerHTML += `
    <ol>
        <li><em>${myPlaylist.song1.title}</em> by ${myPlaylist.song1.artist.name}</li>
        <li><em>${myPlaylist.song2.title}</em> by ${myPlaylist.song2.artist.name}</li>
        <li><em>${myPlaylist.song3.title}</em> by ${myPlaylist.song3.artist.name}</li>
    </ol>

`;
