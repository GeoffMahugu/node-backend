"use strict";
const fs = require("fs");

const chapter_2 = `

CHAPTER II

The Pool of Tears


Curiouser and curiouser!' cried Alice (she was so much
surprised, that for the moment she quite forgot how to speak good
English); now I'm opening out like the largest telescope that
ever was!  Good-bye, feet!' (for when she looked down at her
feet, they seemed to be almost out of sight, they were getting so
far off).  Oh, my poor little feet, I wonder who will put on
your shoes and stockings for you now, dears?  I'm sure _I_ shan't
be able!  I shall be a great deal too far off to trouble myself
about you:  you must manage the best way you can; --but I must be
kind to them,' thought Alice, or perhaps they won't walk the
way I want to go!  Let me see:  I'll give them a new pair of
boots every Christmas.'


`

fs.writeFile('./assets/random_read_chapter_2.txt', chapter_2.trim(), err => {
    if (err) {
        throw err;
        process.exit();
    };
    console.log("Done: Chapter 2 Write.");
});