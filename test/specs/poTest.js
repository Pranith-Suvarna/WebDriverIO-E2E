const expectchai = require('chai').expect
const loginPage = require('../pageObjects/loginPage')
const afterLoginPage = require('../pageObjects/afterLoginPage')
const reviewPage = require('../pageObjects/reviewPage')
const successfulPage = require('../pageObjects/successfulPage')
const fs = require('fs')  //library to convert parsed json file & into string byte format

let credentials = JSON.parse(fs.readFileSync('test/testdata/LoginData.json'))  //parses and extracts all the values from json file and stores in the declared array

describe('Ecommerce Application',()=>
{

   credentials.forEach(({username,password,products})=>     //to iterate through every element in credentials array and perform the action on it block
  {
   it('End to End Test',()=>

   {
    //var products = ["Blackberry","Nokia Edge"]

    browser.maximizeWindow()
    browser.url("/loginpagePractise/")

    loginPage.Login(username,password)
    loginPage.signIn.click()

    afterLoginPage.checkout.waitForExist()
    afterLoginPage.addProductToCart(products)
    afterLoginPage.checkout.click()

    const sumOfProducts = reviewPage.sumOfProducts()
    const totalIntValue = reviewPage.totalFormattedPrice()
    expectchai(sumOfProducts).to.equal(totalIntValue)

    successfulPage.proceed.click()
    successfulPage.enterCountry("ind")
    successfulPage.loading.waitForExist({reverse:true}) 
    successfulPage.selectCountry.click()
    successfulPage.submit.click()
    browser.saveScreenshot("screenshot.png")
    expect(successfulPage.success).toHaveTextContaining("Success")
   })

 })

})
    
 /*  
    var products = ["Blackberry","Nokia Edge"]

    browser.maximizeWindow()
    browser.url("https://www.rahulshettyacademy.com/loginpagePractise/")
    $("input[name='username']").setValue("rahulshettyacademy")
    const password = $("//input[@type='password']")
    password.setValue("learning")
    $("#signInBtn").click()

    const link = $("*=Checkout")
    link.waitForExist()
    cards = $$("div[class='card h-100']")
    cards.filter(card=>products.includes(card.$("div h4 a").getText())) //it returns an array of 2 elements
    .map(productCard=>productCard.$(".card-footer button").click() )
    link.click()

    productPrices = $$("//tr/td[4]/strong")
    //getText()  
    //format it  and convert into Integer  ₹. 65000=> ₹,  65000
    // and apply sum on all the values
    const sumOfProducts = productPrices.map(productPrice=>parseInt(productPrice.getText().split(".")[1].trim()))//it returns an array of 2 elements
    .reduce((acc,price)=> acc + price,0) //1st argument , 2nd argument 
    //0+65000 = 65000
    //50,000 + 65000 =115000
    console.log(sumOfProducts)
    const TotalValue =$("h3 strong").getText()
    const totalIntValue = parseInt(TotalValue.split(".")[1].trim())
    expectchai(sumOfProducts).to.equal(totalIntValue)


    $(".btn-success").click()
    $("#country").setValue("ind")
    $(".lds-ellipsis").waitForExist({reverse:true})    // to wait till an element disappears
    $("=India").click()
    $("[type='submit']").click()
    browser.saveScreenshot("screenshot.png")
    expect($(".alert-success")).toHaveTextContaining("Success")
 */

   