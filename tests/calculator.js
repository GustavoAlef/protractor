let pgobj = require('../pages/pgCalculator')

describe("Protractor Demo App", function () {
  it("should add one and two", function () {
    // browser.get("http://juliemr.github.io/protractor-demo/");
    pgobj.get("http://juliemr.github.io/protractor-demo/");

    // element(by.model("first")).sendKeys(1);
    // element(by.model("second")).sendKeys(2);
    pgobj.setNumbers(1, 2);

    pgobj.clickGo();

    expect(element(by.binding("latest")).getText()).toEqual("3");
  });

  it("should sub one and two", function () {
    // browser.get("http://juliemr.github.io/protractor-demo/");
    pgobj.get("http://juliemr.github.io/protractor-demo/");

    // element(by.model("first")).sendKeys(1);
    // element(by.model("second")).sendKeys(2);
    pgobj.setNumbers(1, 2);

    pgobj.clickGo1();

    expect(element(by.binding("latest")).getText()).toEqual("5");
  });
});
