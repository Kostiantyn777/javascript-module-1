function checkInfo(userName, userType) {
  if (
    userName.charAt(0) === userName.charAt(0).toUpperCase() &&
    userName.length <= 10 &&
    userName.length >= 5
  ) {
    return "Username valid";
  } else if (userType === "admin" || userType === "manager") {
    return "Username valid";
  } else {
    return "Username invalid";
  }
}
console.log(checkInfo("Bob", "admin"));
