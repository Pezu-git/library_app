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

module.exports.book = [
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: lorem.generateWords(5),
    fileName: lorem.generateWords(10)
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: lorem.generateWords(5),
    fileName: lorem.generateWords(10)
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: lorem.generateWords(5),
    fileName: lorem.generateWords(10)
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: lorem.generateWords(5),
    fileName: lorem.generateWords(10)
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: lorem.generateWords(5),
    fileName: lorem.generateWords(10)
  },
]