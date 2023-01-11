const { v4: uuid } = require('uuid');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

module.exports.bookConstructor = (title, authors, favorite, fileCover, fileName) => {
  return {
    id: uuid(),
    title: title,
    description: lorem.generateWords(10),
    authors: authors,
    favorite: favorite,
    fileCover: fileCover,
    fileName: fileName
  }
}