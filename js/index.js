document.querySelector("#input").onchange = function () {
  document.querySelector("#acceptable").textContent = StringChallenge(
    this.value
  )
    ? "true"
    : "false";
  document.querySelector("pre>code").textContent = JSON.stringify(
    SimplePasswordChecker(this.value),
    null,
    2
  );
};
const StringChallenge = (str) => {
  let charCheck = str.length > 7 && str.length < 31;
  let capitalCheck = /[A-Z]/g.test(str);
  let numberCheck = /[0-9]/g.test(str);
  let passwordCheck = !/password/gi.test(str);
  let punctuationCheck = /[.?!:,;]/g.test(str);
  return (
    charCheck &&
    punctuationCheck &&
    capitalCheck &&
    numberCheck &&
    passwordCheck
  );
};

function SimplePasswordChecker(str) {
  let charCheck = str.length > 7 && str.length < 31;
  let capitalCheck = /[A-Z]/g.test(str);
  let numberCheck = /[0-9]/g.test(str);
  let passwordCheck = !/password/gi.test(str);
  let punctuationCheck = /[.?!:,;]/g.test(str);
  return {
    charCheck,
    punctuationCheck,
    capitalCheck,
    numberCheck,
    passwordCheck,
  };
}
