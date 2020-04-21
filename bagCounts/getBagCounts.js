const bubbleSort = array => {
    let swapped;
    do {
        swapped = false;
        array.forEach((number, index) => {
            if (number > array[index + 1]) {
                [array[index], array[index + 1]] = [array[index + 1], array[index]];
                swapped = true;
            }
        });
    } while (swapped);
    return array;
};

function getBagCounts(clientOrders, availableBagSizes) {
    // TODO: remove this hard-coded solution for test scenario
    // clientOrders === [9]
    let seedOrder, bagSize = 0, count = 0, remainder = 0, result = [], optimise = [];
    for(let i = 0; i < clientOrders.length; i++){
        seedOrder = clientOrders[i];
        // start with the one that leaves the smallest remainder
        for(let x = availableBagSizes.length - 1; x > -1; x--){
            bagSize = availableBagSizes[x];
            // console.log('initial: ', seedOrder/bagSize);
            count = Math.floor(seedOrder/bagSize);
            // console.log('converted: ', count);
            remainder = seedOrder - (count * bagSize);
            seedOrder = remainder;
            if(seedOrder && seedOrder < bagSize && x === 0){
                if (seedOrder % 0.5 === 0) { count += seedOrder; }
                else {
                    throw new Error();
                }
            }

            result.push({size: bagSize, count })
        }
    }

    return result;
    // return [
    //     { size: 4, count: 2 },
    //     { size: 2, count: 0 },
    //     { size: 1, count: 1 }
    // ]
}

console.log("solution: ",getBagCounts([6], [1, 3, 4]));

module.exports = getBagCounts;