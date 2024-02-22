import{test, expect} from '@playwright/test';
const fs = require('fs');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() +1;
const day = date.getDate();
const hours = date.getHours();
const mins = date.getMinutes();
const seconds = date.getSeconds();
const datetimestamp = year.toString() + "-" + month.toString() + "-" + day.toString() + "-" + hours.toString() + "-" + mins.toString() + "-" + seconds.toString()

test('Shamrocks', async ({ page }) => {
  await page.goto('https://order.toasttab.com/online/shamrocks-pub-n-grill-4177-veterans-memorial-pkwy')
  const outOfStockOptions = await page.$$("//li[contains(@class, 'outOfStock')]//a[contains(@data-testid, 'add-to-cart')]")
  console.log("NumberofOutofstock:" + outOfStockOptions.length)
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/shamrocks_out_of_stock_items.csv"

  var links = fs.createWriteStream(outputFilePath + "-" + datetimestamp);
  for (let outOfStock of outOfStockOptions) {
  let itemID = await outOfStock.getAttribute("data-testid");
  let extractedItemId = itemID.replace("add-to-cart-", "")
  await links.write(extractedItemId + '|' + '\n')
  console.log("Item ID: " + extractedItemId +"\n");
  }
  links.close()
});

test('OldeCity', async ({ page }) => {
  await page.goto('https://order.toasttab.com/online/olde-city-201-8th-ave')
  const outOfStockOptions = await page.$$("//li[contains(@class, 'outOfStock')]//a[contains(@data-testid, 'add-to-cart')]")
  console.log("NumberofOutofstock:" + outOfStockOptions.length)
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/oldecity_out_of_stock_items.csv"

  var links = fs.createWriteStream(outputFilePath + "-" + datetimestamp);
  for (let outOfStock of outOfStockOptions) {
  let itemID = await outOfStock.getAttribute("data-testid");
  let extractedItemId = itemID.replace("add-to-cart-", "")
  await links.write(extractedItemId + '|' + '\n')
  console.log("Item ID: " + extractedItemId +"\n");
  }
  links.close()
});

test.skip('Desi Chowrastha', async ({ page }) => {
  await page.goto('https://order.toasttab.com/online/desi-chowrastha-frisco-15851-rolater-road')
  let outOfStockOptions = await page.$$("//li[contains(@class, 'outOfStock')]//a[contains(@data-testid, 'add-to-cart')]")
  console.log("NumberofOutofstock:" + outOfStockOptions.length)
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/chowrastha_out_of_stock_items.csv" 

  var links = fs.createWriteStream(outputFilePath + "-" + datetimestamp);
  for (let outOfStock of outOfStockOptions) {
  let itemID = await outOfStock.getAttribute("data-testid");
  let extractedItemId = itemID.replace("add-to-cart-", "")
  await links.write(extractedItemId + '|' + '\n')
  console.log("Item ID: " + extractedItemId +"\n");
  }
  links.close()
});


