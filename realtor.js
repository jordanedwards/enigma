const webdriver = require('selenium-webdriver');
const By = webdriver.By;
let browser = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build();
browser.get('https://www.realtor.ca/Residential/Map.aspx#CultureId=1&ApplicationId=1&RecordsPerPage=9&MaximumResults=9&PropertySearchTypeId=1&TransactionTypeId=2&StoreyRange=0-0&BedRange=0-0&BathRange=0-0&LongitudeMin=-123.32805633544876&LongitudeMax=-123.0334854125972&LatitudeMin=49.17833701606932&LatitudeMax=49.32758335632504&SortOrder=A&SortBy=1&viewState=l&Longitude=-123.180770874023&Latitude=49.2530165898479&ZoomLevel=12&PropertyTypeGroupID=1/')
    .then(res => browser.findElement(By.id('list_lst_address1')).click())
//.then(res => browser.quit());


