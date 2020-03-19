// Import stylesheets
import "./style.css";

const acctData = [
  {
    acctNum: "AAA - 1234",
    user: "Alice"
  },
  {
    acctNum: "AAA - 5231",
    user: "Bob"
  },
  {
    acctNum: "AAA - 9921",
    user: "Alice"
  },
  {
    acctNum: "AAA - 8191",
    user: "Alice"
  }
];
const balance = {
  "AAA - 1234": 4593.22,
  "AAA - 9921": 0,
  "AAA - 5231": 232142.5,
  "AAA - 8191": 4344
};

const getAccounts = (user, sortBy, sortDirection = "asc") => {
  if (
    (user === "acctNum" || user === "balance") &&
    (sortBy === "asc" || sortBy === "desc")
  ) {
    sortDirection = sortBy;
    sortBy = "";
    if (user === "acctNum" || user === "balance") {
      sortBy = user;
      user = "";
    }
  }
  if (user === "acctNum" || user === "balance" && !sortBy) {
    sortBy = user;
    user = "";
  }
  const accounts = acctData;
  let result = [];
  if (user) {
    accounts = accounts.filter(account => account.user === user);
  }
  if (sortDirection === "asc") {
    if (sortBy && sortBy === "acctNum") {
      accounts.sort((a, b) => {
        if (a.acctNum.toLocaleLowerCase() < b.acctNum.toLocaleLowerCase()) {
          return -1;
        }
        if (a.acctNum.toLocaleLowerCase() > b.acctNum.toLocaleLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    if (sortBy && sortBy === "balance") {
      accounts.sort((a, b) => {
        if (balance[a.acctNum] < balance[b.acctNum]) {
          return -1;
        }
        if (balance[a.acctNum] < balance[b.acctNum]) {
          return 1;
        }
        return 0;
      });
    }
  }
  if (sortDirection === "desc") {
    if (sortBy && sortBy === "acctNum") {
      accounts.sort((a, b) => {
        if (a.acctNum.toLocaleLowerCase() < b.acctNum.toLocaleLowerCase()) {
          return 1;
        }
        if (a.acctNum.toLocaleLowerCase() > b.acctNum.toLocaleLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    if (sortBy && sortBy === "balance") {
      accounts.sort((a, b) => {
        if (balance[a.acctNum] < balance[b.acctNum]) {
          return 1;
        }
        if (balance[a.acctNum] > balance[b.acctNum]) {
          return -1;
        }
        return 0;
      });
    }
  }

  accounts.reduce((list, account) => {
    list.push(account.acctNum);
    return list;
  }, result);
  return result;
};
console.log(getAccounts("Bob"));
console.log(getAccounts("Charlie"));
console.log(getAccounts("acctNum"));
console.log(getAccounts("Alice", "balance" , "asc"));
