const validation = document.getElementById("validation");
const input = document.getElementById("input");
const StringChallenge = (str) => {
  if (
    str.length > 7 &&
    str.length < 31 &&
    /[A-Z]/g.test(str) &&
    /[0-9]/g.test(str) &&
    /[.?!:,;]/g.test(str)
  ) {
    validation.innerText = "Its Ok";
  } else {
    validation.innerText = "all checks failed";
  }
  return true;
};
