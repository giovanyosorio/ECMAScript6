const string = "js es un lenguaje de programacion"

const replacedString = string.replace("js", "typescript")
console.log(replacedString);

const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
    let emojized = ""
    emojized = text.replaceAll(':)', '😀')
    emojized = emojized.replaceAll(':clap', '👏🏻')

    return emojized
}

console.log(emojiReplace(inputText))