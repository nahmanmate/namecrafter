// Copyright © 2025 James Johns - All Rights Reserved
// Random Name Generator

function randomName() {
    const firstNameList = require('./first-names.json');
    const middleNameList = require('./middle-names.json');
    const lastNameList = require('./last-names.json');

    const randomFirst = firstNameList[Math.floor(Math.random() * firstNameList.length)];
    const randomMiddle = middleNameList[Math.floor(Math.random() * middleNameList.length)];
    const randomLast = lastNameList[Math.floor(Math.random() * lastNameList.length)];

    return `${randomFirst} ${randomMiddle} ${randomLast}`;
}

module.exports = randomName;
