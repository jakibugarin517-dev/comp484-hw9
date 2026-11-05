# Pound Industries - JavaScript Mini Demo https://jakibugarin517-dev.github.io/comp484-hw9/

This is my COMP 484 Homework 9 project. I used my Pound Industries Gumroad page as the theme, so the demo has a dark cyber look with cyan and gold details.

## Files

- `index.html` - the page and the three required sections
- `script.js` - all the JavaScript for the date, number checks, math, and if/else statements
- `style.css` - the styling for the page
- `screenshot.png` - add a screenshot of the finished page here after opening it in your browser

## Built-in objects and methods used

- `Date()` - gets the current date
- `getMonth()` - gets the month (JavaScript starts counting months at 0)
- `getDate()` - gets the day
- `getFullYear()` - gets the year
- `String()` - turns the month and day into strings
- `padStart()` - adds a zero when the month or day only has one digit
- `Number()` - converts the example strings into numbers
- `Number.isNaN()` - checks if a converted value is NaN
- `Number.isInteger()` - checks if a converted value is a whole number
- `toFixed()` - formats the prices to two decimal places


## Reflection

The easiest part was setting up the HTML sections because I already knew how to organize a page. The number conversion part took a little more checking because I had to make sure each value showed the original string and the converted result. I learned that the Date object gives back different parts of the current date, and that the month needs an adjustment because JavaScript starts months at zero. I also learned that Number() can convert number strings but gives NaN when the text is not a number. Putting the results into the page with JavaScript helped me understand how the script can update the HTML instead of only showing things in the console.

## Outside source

- Pound Industries storefront: https://poundindustries.gumroad.com/
