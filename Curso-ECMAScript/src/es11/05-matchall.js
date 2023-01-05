const regex = /\b(Apple)+\b/g

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

for(const match of fruit.matchAll()){
    console.log(match);
}