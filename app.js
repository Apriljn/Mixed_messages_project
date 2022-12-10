function randomSentence(num) {
    return Math.floor(Math.random() * num);
}

const generatedWords = {
    year: ['2022', '2023', '2025', '2026', '2039', '054', '2055', '2058', '2059', '2061'],
    city: ['Kyiv', 'Jakarta', 'Tokyo', 'Manila', 'Beijing', 'Los Angeles', 'Buenos Aires', 'Paris', 'Tianjin', 'Bogota', 'Taipei', 'Toronto', 'Chicago'],
    lanSkills: ['greatly', 'not much', 'negatively', 'fine', 'little'],
    progLanguage: ['PHP', 'Java', 'Python', 'C++', 'C#', 'Ruby', 'Swift', 'SQL', 'JavaScript', 'Ruby On Rails']
}

let optionforFuture = [];

for (let item in generatedWords) {
    let option = randomSentence(generatedWords[item].length);

    switch (item) {
        case 'year':
            optionforFuture.push(`You will travel in ${generatedWords[item][option]}.`);
            break;
        case 'city':
            optionforFuture.push(`You will find new friends in this city: ${generatedWords[item][option]}.`);
            break;
        case 'lanSkills':
            optionforFuture.push(`You will ${generatedWords[item][option]} upgrade your language skills.`);
            break;
        case 'progLanguage':
            optionforFuture.push(`You will learn new programming language - ${generatedWords[item][option]}.`);
            break;
        default:
            optionforFuture.push('Try again...')
    }
}

const showMessage=(message)=>{
    let finalMessage = optionforFuture.join('\n');
    console.log(finalMessage);
}

showMessage(optionforFuture);
