// FETCHING DATA FROM LOCAL JSON AND APPENDING TO WEBPAGE
// fetching our people.json file
// we run the then function with the response as a parameter
// To get the JSON data from the response, we execute the json() function
// the json() function also returns a promise.
// this is why we just return it and chain another then function
// n the second then function we get the actual JSON data as a parameter
// This data looks just like the data in our JSON file
// Now we can take this data and display it on our HTML page.
// Notice that we are calling a function called appendData.
// This is where we create the code which will append the data to our page.
// Source: https://howtocreateapps.com/fetch-and-display-json-html-javascript/

// let response = fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     console.log(data.currentUser.username);
//     var str = `<ul>`;
//     data.comments.forEach((comment) => {
//       str += `Comment: <li>${comment.content}</li>`;
//     });

//     let userContainer = document.getElementById("userHeader");
//     let commentContainer = document.getElementById("commentContainer");

//     let userDiv = document.createElement("div");
//     userDiv.innerHTML = "Current User: " + data.currentUser.username;
//     userContainer.appendChild(userDiv);

//     let userImg = document.createElement("img");
//     userImg.src = data.currentUser.image.webp;
//     userContainer.appendChild(userImg);

//     let commentsDiv = document.createElement("div");
//     commentsDiv.innerHTML = str;
//     commentContainer.appendChild(commentsDiv);
//   });

// How to put a fetch request inside a function and wait for the return value when I call the function
// https://stackoverflow.com/questions/62880991/how-to-put-a-fetch-request-inside-a-function-and-wait-for-the-return-value-when

const getLocalJson = () => {
  return fetch("data.json", {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

const allData = getLocalJson().then((data) => console.log(data));
const currentUserData = getLocalJson().then((data) =>
  console.log(data.currentUser.username)
);

const commentsData = getLocalJson().then((data) => console.log(data.comments));

const getUserImage = () => {
  getLocalJson().then((data) => {
    let userImgContainer = document.getElementById("user-img-container");
    let userImg = document.createElement("img");
    userImg.src = data.currentUser.image.png;
    userImgContainer.appendChild(userImg);
  });
};
getUserImage();

/* 
QUESTIONS GOOGLED
How to loop through local json data returned from an object
How to fetch object in local json file
How to put a fetch request inside a function and wait for the return value when I call the function
*/
