const { v4: uuid } = require("uuid");
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const path = require("path");

module.exports.book = [
  {
    id: uuid(),
    title: "Триумфальная арка",
    description:
      '"Триумфальная арка" – пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость.\nМесто действия – Париж накануне Второй мировой войны.Герой – беженец из Германии, без документов, скрывающийся и от французов, и от нацистов, хирург, спасающий человеческие жизни.Героиня – итальянская актриса, окруженная поклонниками, вспыльчивая, как все артисты, прекрасная и неотразимая.\nИ время, когда влюбленным довелось встретиться, и город, пронизанный ощущением надвигающейся катастрофы, становятся героями этого романа.\n"Триумфальная арка" была дважды экранизирована и по- прежнему покоряет читателей всего мира.',
    author: "Э.М. Ремарк",
    publishing: "Эксмо",
    count: "380",
    favorite: "true",
    fileCover: "/img/2022-04-10_004983.jpg",
    fileName: "1.txt", //Ремарк-Триумфальная арка.txt
    fileBook: "./public/files/1.txt",
  },
  {
    id: uuid(),
    title: "Три товарища",
    description:
      "Самый красивый в двадцатом столетии роман о любви... \nСамый увлекательный в двадцатом столетии роман о дружбе... \nСамый трагический и пронзительный роман о человеческих отношениях за всю историю двадцатого столетия.",
    author: "Э.М. Ремарк",
    publishing: "Эксмо",
    count: "420",
    favorite: "true",
    fileCover: "/img/2022-04-10_005106.jpg",
    fileName: "2.txt", //Ремарк-Три товарища.txt
    fileBook: "./public/files/2.txt",
  },
  {
    id: uuid(),
    title: "Ночь в Лиссабоне",
    description:
      '"Ночь в Лиссабоне" (1962) — трагический, проникновенный роман Эриха Марии Ремарка о Второй мировой войне.\nЭто не только одна ночь в Лиссабоне, в которую и уместился весь этот рассказ.Это не просто случайная встреча двух отчаявшихся людей, один из которых тщетно пытается найти два билета на пароход до Америки, а другой — ищет собеседника, чтобы излить ему душу.Это настоящая исповедь отважного, смелого человека, на долю которого выпали немыслимые по тяжести испытания.Это история целого поколения людей, столкнувшихся с войной, попавших в тиски фашизма.Это еще и история любви, перед которой отступает даже смерть.',
    author: "Э.М. Ремарк",
    publishing: "Эксмо",
    count: "450",
    favorite: "false",
    fileCover: "/img/2022-04-10_005261.jpg",
    fileName: "3.txt", //Ремарк-Ночь в Лиссабоне.txt
    fileBook: "./public/files/3.txt",
  },
  {
    id: uuid(),
    title: "Чёрный обелиск",
    description:
      '"Черный обелиск" (1956 г.) – знаменитый роман Ремарка, во многом автобиографичный.\nСложные годы после Первой мировой войны, провинциальный немецкий городок, герой работает в фирме по продаже надгробий… Но денег не хватает, в стране чудовищная инфляция, и он подрабатывает игрой на органе в часовне при больнице.Свою любовь он встречает именно там, в психиатрическом отделени...\br"Черный обелиск" - с одной стороны, роман о великой силе любви, способной вылечить даже душевнобольного, с другой стороны – философские размышления о Боге, религии, смысле жизни, и наконец, с третьей – яркая историческая картина эпохи, где все заметнее заявляет о себе приближающийся фашизм.',
    author: "Э.М. Ремарк",
    publishing: "Эксмо",
    count: "310",
    favorite: "true",
    fileCover: "/img/2022-04-10_005630.jpg",
    fileName: "4.txt", //Ремарк-Чёрный обелиск.txt
    fileBook: "./public/files/4.txt",
  },
  {
    id: uuid(),
    title: "Возлюби ближнего своего",
    description:
      '"Возлюби ближнего своего" (1939) — роман о немецких эмигрантах, вынужденных скитаться по предвоенной Европе. Они скрываются, голодают, тайком пересекают границы, многие из их родных и близких в концлагерях. Потеряв родину и привычный уклад жизни, подвергаясь смертельной опасности, герои Ремарка все же находят в себе силы для сострадания и любви. Впервые роман был издан лишь в 1941 году, сразу после его экранизации.',
    author: "Э.М. Ремарк",
    publishing: "Эксмо",
    count: "300",
    favorite: "false",
    fileCover: "/img/2022-04-10_005781.jpg",
    fileName: "5.txt", //Возлюби ближнего своего.txt
    fileBook: "./public/files/5.txt",
  },
];
