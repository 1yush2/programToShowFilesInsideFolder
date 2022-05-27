const textA = "Aayush";
const folder1 = { a: "Aayush Docs" };
const folder2 = { foderA: { a: "NewText" }, c: "blank" };
const folder3 = {
  folderA: { a: "Games" },
  a: ["Drive", "Photos", "Videos", "Internet"],
};
const emptyFolder = {};

const mainDirectory = { textA, folder1, folder2, folder3 };

var totalCount = [];

function MainProgram(obj) {
  const isEmpty = Object.keys(obj).length === 0;
  if (!isEmpty) {
    stringChecker(obj);
  } else {
    console.log("empty");
  }
}

function stringChecker(chkr) {
  if (typeof chkr === "string") {
    totalCount.push(chkr);
  } else {
    objChecker(chkr);
  }
}

function objChecker(obj) {
  if (typeof obj === "object") {
    const newArry = Object.values(obj);
    checkArrayValue(newArry);
  }
}

function checkArrayValue(arr) {
  let i = 0;
  while (i < arr.length) {
    if (typeof arr[i] === "string") {
      stringChecker(arr[i]);
    } else if (typeof arr[i] === "object") {
      objChecker(arr[i]);
    }
    i++;
  }
}

MainProgram(mainDirectory);
console.log(totalCount);

// Do the job as required after understanding requirements and
// !!importatant Do not do any job that is not required for the task

// function to show files inside folder

const ourFolderNames = Object.keys(mainDirectory);

ourFolderNames.forEach((folder) => {
  const newFolder = document.createElement("h3");
  const node = document.createTextNode(folder);
  newFolder.appendChild(node);
  const newFolderList = document.getElementById("flList");
  newFolderList.appendChild(newFolder);
});

let checker = 1;

function show() {
  if (!!checker) {
    totalCount.forEach((file) => {
      const newLI = document.createElement("li");
      const node = document.createTextNode(file);
      newLI.appendChild(node);
      const List = document.getElementById("ulList");
      console.log(List);
      List.appendChild(newLI);
      // document.body.insertBefore(newLI, List); second way of inserting data
    });
    checker = checker - 1;
  } else {
    alert("button can be only pressed only once");
  }
}
