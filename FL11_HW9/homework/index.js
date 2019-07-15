const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        ' birthday ': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        ' birthday ': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        ' birthday ': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        ' birthday ': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

function getNumbers(str) {
    let arr = [];
    arr += str.replace(/(\D)/gi, '');
    return arr.split('');
}

function findTypes(...item) {
    let types = {};
    for (let i = 0; i < item.length; i++) {
        if (types.hasOwnProperty(typeof item[i])) {
            types[typeof item[i]] += 1;
        } else {
            types[typeof item[i]] = 1;
        }
    }
    return types;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let array = [];
    executeforEach(arr, el => {
        array.push(func(el));
    });
    return array;
}

function filterArray(arr, func) {
    let array = [];
    executeforEach(arr, el => {
        if (func(el)) {
            array.push(el);
        }
    });
    return array;
}

function showFormattedDate(date) {
    let day = date.toLocaleDateString('en-GB', { month: 'short', day: 'numeric' }),
        year = date.toLocaleDateString('en-GB', { year: 'numeric' }),
        dateFormat = 'Date: ' + day + ' ' + year;
    return dateFormat;
}

function canConvertToDate(date) {
    let time = new Date(date);
    return !isNaN(time);
}

function daysBetween(firstDate, secondDate) {
    let day2 = new Date(secondDate),
        day1 = new Date(firstDate),
        msOnDay = 86400000;
    return Math.round((day2 - day1) / msOnDay);
}

function getAmountOfAdultPeople(data) {
    let yearOld = 6574;
    let adults = [];
    filterArray(data, el => {
        if (daysBetween(el[' birthday '], new Date()) > yearOld) {
            adults.push(daysBetween(el[' birthday '], new Date()));
        }
    });
    return adults.length;
}

function keys(obj) {
    let arrKey = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrKey.push(key);
        }
    }
    return arrKey;
}

function values(obj) {
    let arrVal = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrVal.push(obj[key]);
        }
    }
    return arrVal;
}
