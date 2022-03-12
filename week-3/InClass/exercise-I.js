const messyArray = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];
/*This function should:
Remove all non-string entries
Change the strings to upper case, and add an exclamation mark to the end
If you're using the above example, you should expect to return an array with 2x ELAMIN!, 1x SANYIA!, 2x ISMAEL! and 1x JAMES!. */

function stringCleaner(messyStrings) {
  return messyStrings
    .filter((messyString) => typeof messyString === "string")
    .map((messyString) => messyString.toUpperCase() + "!");
}

console.log(stringCleaner(messyArray));
