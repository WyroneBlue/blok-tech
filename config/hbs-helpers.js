const moment = require('moment'); // require

const multiply = (a, b) => {
	return a * b; 
}

const add = (a, b) => {
	return a + b; 
}

const divide = (a, b) => {
	return a / b; 
}

const bool = (check, val) => {
	return check === true ? val : ''; 
}

const stars = (rating, stars, starsWidth) => {
    const width = stars * starsWidth;
    return multiply(divide(rating, stars), width);
}

// https://stackoverflow.com/questions/11924452/iterating-over-basic-for-loop-using-handlebars-js
const times = (n, block) => {
    var accum = '';
    for(var i = 0; i < n; ++i)
        accum += block.fn(i);
    return accum;
};

// https://stackoverflow.com/questions/32260117/handlebars-date-format-issue
const date = (date, format) => {
    var mmnt = moment(date);
    return mmnt.format(format);
};

module.exports = {
    multiply: multiply,
    add: add,
    divide: divide,
    bool: bool,
    stars: stars,
    times: times,
    date: date,
}