var starbucks = {
    tea: {
        black: {
            name: '"Черный чай"',
            description: 'Обычный черный чай, можно пить с сахаром',
            cost: 5,
            inStock: true,
            productTime: 2,
        },
        green: {
            name: '"Зеленый чай"',
            description: 'Обычно пьют зеленый чай для охлаждения летом',
            cost: 5,
            inStock: true,
            productTime: 2,
        },
        chinese: {
            name: '"Китайский чай"',
            description: 'Чай из каких нибудь редких трав, уникальный вкус',
            cost: 10,
            inStock: true,
            productTime: 5,
        },
        best: {
            name: '"Лучший чай"',
            description: 'Лучший чай, который существует на свете',
            cost: 200,
            inStock: false,
            productTime: 30,
        }
    },
    coffee: {
        americano: {
            name: '"Американо"',
            description: 'Американо, вроде самое дешевое кофе в кофейнях',
            cost: 5,
            inStock: true,
            productTime: 2,
        },
        latte: {
            name: '"Латте"',
            description: 'Кофе из 3 слоев: Эспрессо(кофе), молоко, молочное пено',
            cost: 15,
            inStock: true,
            productTime: 5,
        },
        espresso: {
            name: '"Эспрессо"',
            description: 'Считается просто крепким кофе',
            cost: 5,
            inStock: true,
            productTime: 2,
        },
        cappuccino: {
            name: '"Капучино"',
            description: 'Это кофе с молоком',
            cost: 10,
            inStock: true,
            productTime: 5,
        }
    }
}

var answer
var menu = 'У нас есть чай и кофе\nЧай: черный, зеленый, китайский, лучший\nКофе: американо, латте, эспрессо, капучино'
answer = prompt('Доброго времени суток, Starbucks готов принять ваш заказ\nЧто вы желаете заказать?\nДля получения меню, напишите "menu" или "меню"')
if (answer.toLowerCase() === 'menu' || answer.toLowerCase() === 'меню') {
    answer = prompt(menu)
}

var helpData

switch (answer.toLowerCase()) {
    case 'black':
    case 'черный':
        helpData = starbucks.tea.black

        break
    case 'green':
    case 'зеленый':
        helpData = starbucks.tea.green
        break
    case 'chinese':
    case 'китайский':
        helpData = starbucks.tea.chinese
        break
    case 'best':
    case 'лучший':
        helpData = starbucks.tea.best
        break
    case 'americano':
    case 'американо':
        helpData = starbucks.coffee.americano
        break
    case 'latte':
    case 'латте':
        helpData = starbucks.coffee.latte
        break
    case 'espresso':
    case 'эспрессо':
        helpData = starbucks.coffee.espresso
        break
    case 'cappucino':
    case 'капучино':
        helpData = starbucks.coffee.cappuccino
        break
    default:
        alert('К сожаленью этого у нас нету в меню, может быть появится как нибудь позже.')
}
try{
    if(helpData.inStock){
        alert('Ваш заказ: ' + helpData.name + '\nС вас ' + helpData.cost + ' сомов' + '\nЗаказ приготовиться через ' + helpData.productTime + ' минут')
    } else {
        alert('К сожалению у нас не осталось ' + helpData.name)
    }
} catch (error) {
}