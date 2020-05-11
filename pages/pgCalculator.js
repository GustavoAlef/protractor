
let homepage = function () {
  let firstInput = element(by.model("first"));
  let secondInput = element(by.model("second"));
  let btnGo = element(by.id("gobutton"));

  this.get = function (url) {
    browser.get(url);
  };

  this.setNumbers = function (numA, numB) {
    firstInput.sendKeys(numA);
    secondInput.sendKeys(numB);
  };

  this.clickGo = function () {
    btnGo.click();
  };
};

module.exports = new homepage();
