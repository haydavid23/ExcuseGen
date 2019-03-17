let article = ["the", "a", "an", "of", "for"];

let subject = ["jose", "david", "house", "smith", "car"];

let action = ["walk", "punch", "eat", "run", "fight"];

let what = ["teacher", "school", "test", "homework","coding"];

let predicate = ["bright", "big", "smelly", "nice", "brown"];

let excuse = article[Math.floor(Math.random()* article.length)] + " " + subject[Math.floor(Math.random()* article.length )] + " " + action[Math.floor(Math.random()* article.length)] + " " + what[Math.floor(Math.random()* article.length)] + " " + predicate[Math.floor(Math.random()* article.length)]

console.log(excuse)

document.querySelector('p').innerHTML = excuse;
   
    
    
    

