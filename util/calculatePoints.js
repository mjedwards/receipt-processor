
export const calculatePoints = (receipt) => {
    
    const {retailer, purchaseDate, purchaseTime, total, items} = receipt;

    let points = 0;

    // using regex to replace all non alpha numeric characters with empty string
    points+= retailer.replace(/[^a-z0-9]/gi, '').length;

    
    // check if dollar amount is round
    const dollarAmount = parseFloat(total)
    const isRound = Number.isInteger(dollarAmount)

    if (isRound) {
        points+=50;
    }
    
    // check if the dollar amount is a multiple of 0.25
    const isMultipleOfQuarter = (dollarAmount % 0.25) === 0;
    if (isMultipleOfQuarter) {
        points+=25;
    }
    
    // calculate pairs of items 
    const pairsOfItems = Math.floor(items.length / 2);

    const amountToAdd = pairsOfItems * 5;

    points+=amountToAdd;
    
    // add points if the trimmed item is a multiple of 3
    items.forEach(({ shortDescription, price }) => {
        const trimmedItem = shortDescription.trim();
        const trimmedItemLen = trimmedItem.length;
        const isMultipleOfThree = trimmedItemLen % 3 === 0;

        if (isMultipleOfThree) {
            const itemPrice = parseFloat(price);
            const pointsToAdd = Math.ceil(itemPrice * 0.2);

            points+=pointsToAdd;
        }

    });
    
    //check if the purchase day is odd

    // placing the day in the front
    const day = parseInt(purchaseDate.split('-')[2], 10);
    const isDayOdd = (day % 2) !== 0;
 
    if (isDayOdd) {
        points+=6;
    }
    
    // will check if the purchase time falls between allowed range
    const parsedTime = purchaseTime.split(':').join('');
    const numericTime = parseFloat(parsedTime);
    
    const timeIsInRange = 1400 < numericTime && numericTime < 1600

    if (timeIsInRange) {
        points+=10
    }


    return points;

};
