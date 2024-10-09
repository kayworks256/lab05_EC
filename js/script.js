let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));

    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
        continue
    }

        again = prompt('Run application again? (y or n)', 'y').toLowerCase();
        while (again !== 'y' && again !== 'n') {
            alert('Invalid entry. Please enter "y" or "n".')
            again = prompt('Run application again? (y or n)', 'y').toLowerCase();
        }

} while (again === 'y');
console.log('Application has exited.');