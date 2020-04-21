# One Acre Fund Code Test

## Problem 1

### Setup

Uncompress the provided `geographySummarySql/import.sql.zip` file and use the included script to set up a database using [sqlite](https://www.sqlite.org/download.html).

### Introduction

We'd like you to create a summary report for Long Rains Season 2011. This report should show for the Long Rains Season of 2011 how many clients and groups there are, together with their combined land sizes in each district, sector, and site. A district has several sectors, made up out of sites, with each site made up out of several groups of farmers.The land size of a client for an input is recorded together with their input choice (e.g. WS 505 Maize seed).

### Notes

* There is only one district in the provided data
* Some clients are dropped, i.e. no longer active. These clients should be excluded from your calculations
* We also have 'add-on' products like solar lights. The lands for these add-ons is recorded as -1 but this should not be included in land size calculations

### Task

Write a `SELECT` statement in the provided `geographySummarySql/SiteSummary.sql` to generate the report by site for Long Rains 2011. Include District, Season, Sector, Site, GroupCount, ClientCount, and TotalLandSize. You should order alphabetically by Sector and then by Site.

## Problem 2

### Setup

* The file `bagCounts/getBagCounts.js` includes a skeleton of the function you will need to implement.
* The file `tests/bagCount.test.js` includes a few unit tests for the above function, which you can run in Node.js with the [Mocha](https://mochajs.org/) framework. You can run the tests by executing from the root folder of this repository:

```shell
npm install mocha
mocha tests
```

### Introduction

Clients can order between 1 and 20 kg of seed, in increments of 0.5kg. We stock seed in bags of 1kg, 2kg, 4kg. On distribution day, we need to load the truck with the correct amount of each bag size for our clients.

### Task

Implement a function which, given a list of client seed orders, calculates the required bag count for each individual bag size. Your function should try to assign larger bag sizes first. Write this logic in the provided `getBagCounts` function in `bagCounts/getBagCounts.js`.

#### Parameters

* `clientOrders`: Array of integers, each representing a client seed order. For example, `[5, 12, 12]` means three clients are receiving seed. One client ordered 5kg and two clients ordered 12kg.
* `availableBagSizes`: Array of integers, each representing an available bag size. You can assume that this will always be `[1, 2, 4]`

#### Return value

Your return value should be an array of objects, each object representing one of the available bag sizes.

* Each object should have a `size` property (number of kg in the bag) and `count` property (the number of bags needed)
* The objects should be sorted in descending order by `size`
* You should include all available bag sizes, even when the count is zero. In our example, we've included `{ size: 2, count: 0 }`
* Clients can receive half bags. A client who has ordered 4.5kg of seed should receive one 4kg bag and half of a 1kg bag, i.e. `{ size: 1, count: 0.5 }`
* If the client order cannot be fulfilled with whole and half bags (e.g. an order of 1.25kg), your function should throw an error.

#### Bonus

If you are applying for the Senior Software Developer role, you __must__ complete the bonus section

1. Implement more test cases **in one or more separate .test.js files** in the `tests` folder (such as `tests/extra.test.js`) to cover more scenarios. Please do **NOT** modify the existing tests file.
2. In different countries, we stock different bag sizes. Update your function so that it takes any assortment of bag sizes provided in the `availableBagSizes` parameter
    * Your function should avoid splitting bags when possible
    * Your function should also try to minimize the number of bags per client. What should the bag counts be if the bag sizes are 1, 3, and 4 and a client orders 6kg of seed?

## Submission

Simply commit and push your updates using regular Git commands. We expect updates to the following files:

* `geographySummarySql/SiteSummary.sql`
* `bagCounts/getBagCounts.js`
* (optional) `tests/XXXX.test.js`

You may install external NodeJS libraries if you wish, in that case:

* Please make sure these dependencies are added to the repo's `package.json`
* But please do __NOT__ remove any of the dependencies already declared

## Submitting your solution

Please push your changes to the `master branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.dev/#/codescreentest6ca32a1d-1dde-483f-9eb2-542409a7caa2" target="_blank">this screen</a>.