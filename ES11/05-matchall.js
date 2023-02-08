const regex = /\b(Apple)+\b/g


const fruit ="APlle, banana,apple,kiwi,Apple,APPLE.etc.etc.etc"

for(const match of fruit.matchAll(regex)){
    console.log(match);
}