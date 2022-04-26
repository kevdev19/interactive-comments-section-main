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

const main = () => {
  getUserImage();
  getComments();
};

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

const getComments = () => {
  getLocalJson().then((data) => {
    let commentsContainer = document.getElementById("comments-container");
    let comments = document.getElementById("comment");

    let str = `<ul>`;
    data.comments.forEach((comment) => {
      let commentImg = document.createElement("img");
      str += `
      <img src=${comment.user.image.png} />
      ${comment.user.username}
      ${comment.createdAt}
      <li>${commentImg.src}${comment.content}</li>
      `;
      comments.innerHTML = str;
      commentsContainer.appendChild(comments);
    });
  });
};

main();

/* 
QUESTIONS GOOGLED
How to loop through local json data returned from an object
How to fetch object in local json file
How to put a fetch request inside a function and wait for the return value when I call the function
*/
