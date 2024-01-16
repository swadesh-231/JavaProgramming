const DcHeroes = ["SuperMan", "Batman", "Flash", "Jocker"];
const MarvelHeroes = ["Thor", "IronMan", "CaptainAmerica", "SpiderMan"];


// DcHeroes.push(MarvelHero)
// console.log(DcHeroes);
// console.log(DcHeroes[4]);
// const combinedHeroes = DcHeroes.concat(MarvelHeroes);
// console.log(combinedHeroes);

const allcombinedHeroes =[...DcHeroes, ...MarvelHeroes];
console.log(allcombinedHeroes);

// const anotherarray = [1,2,3,[4,5,6],6,7,[8,9,10,[11,12,13]]]

// const real_another_array = anotherarray.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("swadesh"));
console.log(Array.from("swadesh"));
console.log(Array.from({name: "swadesh"}))

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));