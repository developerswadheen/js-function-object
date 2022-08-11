var shoppingCard = {
    book: 4,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// when you the specific  property name , use dot notation to get the property value
var penCount = shoppingCard.pen;

//alternative system
// when you the specific  property name , use dot notation to get the property value
var penCount2 = shoppingCard['pen'];

// different way to find the property valu
var propertName = 'book';
var propertyValue = shoppingCard[propertName];
// console.log(propertName, propertyValue);



var properties = Object.keys(shoppingCard);
var propertyvalues = Object.values(shoppingCard);
/* console.log(properties);
console.log(propertyvalues); */
console.log(shoppingCard);

// set property values

shoppingCard.mouse = 15;

shoppingCard['mouse'] = 29;
shoppingCard['mouse'] = 20;
console.log(shoppingCard);

shoppingCard[propertName] = 55;
console.log(shoppingCard);
