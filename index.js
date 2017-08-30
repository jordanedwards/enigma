const webdriver = require('selenium-webdriver');
const By = webdriver.By;
let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
browser.get('https://www.google.ca/')
    .then(res =>  browser.findElement(By.name('q')).sendKeys('real estate'))
.then(res =>  browser.findElement(By.name('btnK')).click())
//.then(res => browser.quit());
