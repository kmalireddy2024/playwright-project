import{test, expect} from '@playwright/test';
import { NULL } from 'wd/lib/special-keys';
const fs = require('fs');

const myArray = []

test.skip('ShamrocksSideItems', async ({ page }) => {
  
  await page.goto('https://order.toasttab.com/online/shamrocks-pub-n-grill-4177-veterans-memorial-pkwy') 
  let allOptions = await page.$$("//li[contains(@class, 'clickable')]//a[contains(@data-testid, 'add-to-cart')]")
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/shamrocks_side_items.csv"
  for (let option of allOptions)
  {
    await option.click()
    await page.waitForTimeout(3000)
   
  let sideItems = await page.$$("//div[@role='list']//div[@role='listitem']//div[@role='radiogroup']//div[contains(@class,'toggles')]//div[contains(@class,'row')]")
  let sideItem = undefined
  let itemName = await (await option.$$('.itemHeader')).at(0).textContent()
  let itemID = await option.getAttribute("data-testid")
  let extractedItemId = itemID.replace("add-to-cart-", "")
  
  for (let item of sideItems){
    let sideItemID = await item.getAttribute("data-testid")
    let extractedsideItemId = sideItemID.replace("mod-", "")
    let sideOptions = await item.$$("//div[contains(@class,'toggleContents')]//div[contains(@class,'modifierText')]//div[contains(@class,'name')]")
    sideItem = await item.textContent()
    let data = (extractedItemId + '|' + extractedsideItemId + '|' + sideItem + '|' )
    myArray.push(data)
    console.log(extractedItemId + '|' + extractedsideItemId + '|' + sideItem + '|' )
  }
  await page.keyboard.press('Enter')
}
fs.writeFileSync(outputFilePath, myArray.join("\n"))
});

test('OldeCityASideItems', async ({ page }) => {
  
  await page.goto('https://order.toasttab.com/online/olde-city-201-8th-ave') 
  let allOptions = await page.$$("//li[contains(@class, 'clickable')]//a[contains(@data-testid, 'add-to-cart')]")
  let outputFilePath = "/Users/kmalireddy/playwright-extracts/oldecity_side_items.csv"
  for (let option of allOptions)
  {
    await option.click()
    await page.waitForTimeout(3000)
   
  let sideItems = await page.$$("//div[@role='list']//div[@role='listitem']//div[@role='radiogroup']//div[contains(@class,'toggles')]//div[contains(@class,'row')]")
  let sideItem = undefined
  let itemName = await (await option.$$('.itemHeader')).at(0).textContent()
  let itemID = await option.getAttribute("data-testid")
  let extractedItemId = itemID.replace("add-to-cart-", "")
  
  for (let item of sideItems){
    let sideItemID = await item.getAttribute("data-testid")
    let extractedsideItemId = sideItemID.replace("mod-", "")
    let sideOptions = await item.$$("//div[contains(@class,'toggleContents')]//div[contains(@class,'modifierText')]//div[contains(@class,'name')]")
    sideItem = await item.textContent()
    let data = (extractedItemId + '|' + extractedsideItemId + '|' + sideItem + '|' )
    myArray.push(data)
    console.log(extractedItemId + '|' + extractedsideItemId + '|' + sideItem + '|' )
  }
  await page.keyboard.press('Enter')
}
fs.writeFileSync(outputFilePath, myArray.join("\n"))
});

