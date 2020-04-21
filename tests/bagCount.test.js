const assert = require('assert');
const getBagCounts = require('../bagCounts/getBagCounts');


describe("BagCounts", () => {
    it("returns the correct bag size counts for a single order", () => {
        const clientOrders = [9];
        const availableBagSizes = [1, 2, 4];

        const result = getBagCounts(clientOrders, availableBagSizes);

        assert.deepEqual(result, [
            { size: 4, count: 2 },
            { size: 2, count: 0 },
            { size: 1, count: 1 }
        ]);
    });
});