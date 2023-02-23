var products = {
    "ron": [
        {
            name: "Barceló",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 4.0
        },
        {
            name: "Cacique",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Brugal",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Pampero",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "Pálido",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        }
    ],
    "gin": [
        {
            name: "Larios",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "Beefeater",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Seagram",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Bombay",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "Puerto de Indias",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "Tanqueray",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        }
    ],
    "whiskey": [
        {
            name: "DyC",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.7
        },
        {
            name: "J.B",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "White Label",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.8
        },
        {
            name: "Ballantines",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Cutty Shark",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.9
        },
        {
            name: "Passport",
            originalPrice: 4,
            maxPrice: 4.5,
            minPrice: 3.7
        }
    ],
    "others": [
        {
            name: "Vodka",
            originalPrice: 4,
            maxPrice: 3.8,
            minPrice: 4.5
        },
        {
            name: "Franziskaner",
            originalPrice: 3.2,
            maxPrice: 3.5,
            minPrice: 2.8
        },
        {
            name: "Desperados",
            originalPrice: 2.5,
            maxPrice: 3,
            minPrice: 1.8
        },
        {
            name: "1929",
            originalPrice: 2.5,
            maxPrice: 3,
            minPrice: 1.8
        },
    ]
}

var ronUl = document.getElementById("ron");
var ginUl = document.getElementById("gin");
var wiskheyUl = document.getElementById("whiskey");
var othersUl = document.getElementById("others");

function generateRandom(min = 0, max = 100) {
    var difference = max - min;
    var rand = Math.random();
    rand =  rand * difference;
    rand = rand + min;
    return rand;
}

function computePrice(product) {
    var newPrice = generateRandom(product.minPrice, product.maxPrice).toFixed(1);
    product.price = newPrice;
    return newPrice;
}

function insertProducts(elements, ul) {
    for (var i=0; i<elements.length; i++) {
        var product = elements[i]
        var li = document.createElement("li");
        var oldPrice = product.price || product.originalPrice;
        var price = computePrice(product)
        var suffix = '';
        if (oldPrice < price) {
            suffix = '\u25B2'
            li.className = 'worse'
        } else {
            suffix = '\u25BC'
            li.className = 'better'
        }
        var text = product.name + ": " + price + "0€ " + suffix;
        li.appendChild(document.createTextNode(text));
        ul.appendChild(li);
    }
}

function insertData() {
    ronUl.innerHTML = ''
    ginUl.innerHTML = ''
    wiskheyUl.innerHTML = ''
    othersUl.innerHTML = ''
    insertProducts(products.ron, ronUl);
    insertProducts(products.gin, ginUl);
    insertProducts(products.whiskey, wiskheyUl);
    insertProducts(products.others, othersUl);
}

insertData();
