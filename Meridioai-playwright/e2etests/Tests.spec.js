import{test, expect} from '@playwright/test';

test('ShamrocksAllItems', async ({ page }) => {
  
  await page.goto('https://order.toasttab.com/online/shamrocks-pub-n-grill-4177-veterans-memorial-pkwy')
  let kidBurger = await page.locator("(//div[@class='itemHeader'][normalize-space()='Kid Burger'])[1]")
  kidBurger.click()
  await page.waitForTimeout(3000)
  
  let sideOptions = await page.$$("//div[@role='list']//div[@role='listitem']//div[@role='radiogroup']//div[contains(@class,'toggles')]//div[contains(@class,'row')]//div[contains(@class,'toggleContents')]//div[contains(@class,'modifierText')]//div[contains(@class,'name')]")
  let sideItem = undefined

  for (let option of sideOptions){

    sideItem = await option.textContent()
    await page.waitForTimeout(1000)
    console.log("Side Items are " + sideItem)

  }

});


