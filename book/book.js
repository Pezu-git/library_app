const { v4: uuid } = require('uuid');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const path = require('path');

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

const dirFile = path.join(__dirname, '..', 'public', 'files');
const dirImg = path.join(__dirname, '..', 'public', 'img');

module.exports.book = [
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: '',
    fileName: lorem.generateWords(10),
    fileBook: ''
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: '',
    fileName: lorem.generateWords(10),
    fileBook: ''
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: '',
    fileName: lorem.generateWords(10),
    fileBook: ''
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: '',
    fileName: lorem.generateWords(10),
    fileBook: ''
  },
  {
    id: uuid(),
    title: lorem.generateWords(8),
    description: lorem.generateWords(20),
    authors: lorem.generateWords(10),
    favorite: lorem.generateWords(5),
    fileCover: '',
    fileName: lorem.generateWords(10),
    fileBook: ''
  },
]