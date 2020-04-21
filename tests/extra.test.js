const assert = require('assert');
const getBagCounts = require('../bagCounts/getBagCounts');


describe("BagCounts Extra", () => {
    it("Should assign larger bag sizes first.", () => {
        const clientOrders = [9];
        const availableBagSizes = [1, 2, 4];
        const resultBags = [];

        const result = getBagCounts(clientOrders, availableBagSizes);
        // sort in descending order
        availableBagSizes.sort((a, b) => b - a);
        for(let item of result){
            // console.log(item);
            resultBags.push(item.size);
        }
        assert.deepEqual(availableBagSizes, resultBags);
    });

    it("Should have size and count properties.", () => {
        const clientOrders = [9];
        const availableBagSizes = [1, 2, 4];
        const resultBags = [];

        const result = getBagCounts(clientOrders, availableBagSizes);
        // sort in descending order
        availableBagSizes.sort((a, b) => b - a);
        for(let item of result){
            // console.log(item);
            assert(item.hasOwnProperty('size'));
            assert(item.hasOwnProperty('count'));
        }
    });

    it("Test for half bags", () => {
        const clientOrders = [4.5];
        const availableBagSizes = [1, 2, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 1 },
            { size: 2, count: 0 },
            { size: 1, count: 0.5 }
        ]);
    });

    it("Throw Error when order cannot be fulfilled", () => {
        const clientOrders = [1.25];
        const availableBagSizes = [1, 2, 4];

        // const result = getBagCounts(clientOrders, availableBagSizes);

        assert.throws(() => {
            return getBagCounts(clientOrders, availableBagSizes); // throw new Error();
        }, Error );
    });

    it("Should minimize the number of bags per client", () => {
        const clientOrders = [6];
        const availableBagSizes = [1, 3, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 0 },
            { size: 3, count: 2 },
            { size: 1, count: 0 }
        ]);
    });
});