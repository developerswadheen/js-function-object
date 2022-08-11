
//  array vs object

/* var shoppngItems = ['book', 'sunglass', 'mouse', 'pen'];
var friendsAge = [17, 22, 37, 23, 27];
var friendsAge = {
    kader: 24,
    smad: 32,
    rohim: 22,
    josim: 20,
    robi: 25,
    kazi: 27
} */

var shoppingCard = {
    book: 4,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 5
}

const keys = Object.keys(shoppingCard);
console.log(keys);

const values = Object.values(shoppingCard);
console.log(values);

//  var keys = [ 'book', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' ]
for (i = 0; i < keys.length; i++) {
    // console.log(keys[i]);
    var propertName = keys[i];
    var propertyvalues = shoppingCard[propertName];
    // console.log(propertName, propertyvalues);
}

// same work easy method use for in loop

for (var propertName in shoppingCard) {
    const value = shoppingCard[propertName];
    console.log(propertName, value);
}