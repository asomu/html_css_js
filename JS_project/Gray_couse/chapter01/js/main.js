const getUserName = (email) => {
  return email.slice(0, email.indexOf("@"));
};

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(getUserName("mark@gmail.com"));
console.log(toProperCase("i WANNA Go Tolilet."));
