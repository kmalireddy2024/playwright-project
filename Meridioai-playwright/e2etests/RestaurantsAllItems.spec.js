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

test('ShamrocksAllItems', async ({ page }) => {
  
  await page.goto('https://order.toasttab.com/online/shamrocks-pub-n-grill-4177-veterans-memorial-pkwy')
  let categories = await page.$$("//section[@role='tabpanel']")
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/shamrocks_all_items_categories.csv"
  const myArray = []

  for (let category of categories){
    let catName = await category.$$("div>h3")
    let categoryName = await catName.at(0).textContent()
    let allOptions = await category.$$("//li[contains(@class, 'clickable')]//a[contains(@data-testid, 'add-to-cart')]")
    for (let options of allOptions) {
      let itemID = await options.getAttribute("data-testid")
      let extractedItemId = itemID.replace("add-to-cart-", "")
      let itemName = await (await options.$$('.itemHeader')).at(0).textContent()
      let itemPrice = await (await options.$$('.priceAvailability')).at(0).textContent()
      const Description = await (await options.$$('.itemContent'))
      let itemDescription = undefined
      let data = undefined
        if (Description.at(0) !== undefined)
        {
          itemDescription = await Description.at(0).textContent()
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription + '|')
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription + '|' + "\n")
        }
        else {
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|')
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + "\n")
        }
        myArray.push(data)
        fs.writeFileSync(outputFilePath + "-" + datetimestamp, myArray.join("\n"))
      }
  }

});

test('OldeCityAllItems', async ({ page }) => {
  
  await page.goto('https://order.toasttab.com/online/olde-city-201-8th-ave')
  let categories = await page.$$("//section[@role='tabpanel']")
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/oldecity_all_items_categories.csv"
  const myArray = []

  for (let category of categories){
    let catName = await category.$$("div>h3")
    let categoryName = await catName.at(0).textContent()
    let allOptions = await category.$$("//li[contains(@class, 'clickable')]//a[contains(@data-testid, 'add-to-cart')]")
    for (let options of allOptions) {
      let itemID = await options.getAttribute("data-testid")
      let extractedItemId = itemID.replace("add-to-cart-", "")
      let itemName = await (await options.$$('.itemHeader')).at(0).textContent()
      let itemPrice = await (await options.$$('.priceAvailability')).at(0).textContent()
      const Description = await (await options.$$('.itemContent'))
      let itemDescription = undefined
      let data = undefined
        if (Description.at(0) !== undefined)
        {
          itemDescription = await Description.at(0).textContent()
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription + '|')
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription + '|' + "\n")
        }
        else {
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|')
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + "\n")
        }
        myArray.push(data)
        
      }
      fs.writeFileSync(outputFilePath + "-" + datetimestamp, myArray.join("\n"))
  }
  
});

test.skip('DesiChowrasthaAllItems', async ({ page }) => {
  await page.goto('https://order.toasttab.com/online/desi-chowrastha-frisco-15851-rolater-road')
  let categories = await page.$$("//section[@role='tabpanel']")
  const outputFilePath = "/Users/kmalireddy/playwright-extracts/chowrastha_all_items_categories.csv"
  const myArray = []

  for (let category of categories){
    let catName = await category.$$("div>h3")
    let categoryName = await catName.at(0).textContent()
    let allOptions = await category.$$("//li[contains(@class, 'clickable')]//a[contains(@data-testid, 'add-to-cart')]")
    
    for (let options of allOptions) {
      let itemID = await options.getAttribute("data-testid")
      let extractedItemId = itemID.replace("add-to-cart-", "")
      let itemName = await (await options.$$('.itemHeader')).at(0).textContent()
      let itemPrice = await (await options.$$('.priceAvailability')).at(0).textContent()
      const Description = await (await options.$$('.itemContent'))
      let itemDescription = undefined
      let data = undefined
        if (Description.at(0) !== undefined)
        {
          itemDescription = await Description.at(0).textContent()
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription)
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + '|' + itemDescription + "\n")
        }
        else {
          data = (categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice)
          console.log(categoryName + "|" + extractedItemId + '|' + itemName + '|' + itemPrice + "\n")
        }
        myArray.push(data)
        fs.writeFileSync(outputFilePath + "-" + datetimestamp, myArray.join("\n"))
      }
  }
});


