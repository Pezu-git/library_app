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
    title: "string",
    description: lorem.generateWords(10),
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
  },
  {
    id: uuid(),
    title: "string",
    description: lorem.generateWords(10),
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
  },
  {
    id: uuid(),
    title: "string",
    description: lorem.generateWords(10),
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
  },
  {
    id: uuid(),
    title: "string",
    description: lorem.generateWords(10),
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
  },
  {
    id: uuid(),
    title: "string",
    description: lorem.generateWords(10),
    authors: "string",
    favorite: "string",
    fileCover: "string",
    fileName: "string"
  },
]