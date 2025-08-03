/// async callbacks

function fetchData(callback) {
  const data = [
    {
      name: "deepanshu",
      age: 21,
    },
    {
      name: "chirag",
      age: 21,
    },
    {
      name: "abhay",
      age: 21,
    },
  ];
  setTimeout(() => {
    if (data.length === 0) {
      callback(new Error("No data found internal server error"), null);
    } else {
      callback(null, data);
    }
  }, 1000);
}

function fetchPosts(callback) {
  setTimeout(() => {
    const posts = [
      {
        id: 1,
        caption: "Learning about async callbacks",
        name: "deepanshu",
      },
      {
        id: 2,
        caption: "Learning about devops",
        name: "chirag",
      },
      {
        id: 3,
        caption: "Learning about websockets",
        name: "abhay",
      },
    ];
    if (posts.length === 0) {
      callback(new Error("No Posts found "), null);
    } else {
      callback(null, posts);
    }
  }, 1000);
}

function fetchLikes(callback) {
  setTimeout(() => {
    const likes = [
      {
        id: 1,
        likesCount: 10,
      },
      {
        id: 2,
        likesCount: 12,
      },
      {
        id: 3,
        likesCount: 14,
      },
    ];
    if (likes.length === 0) {
      callback(new Error("no likes found"), null);
    } else {
      callback(null, likes);
    }
  }, 1000);
}

fetchData((err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log(result);
  }
  fetchPosts((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    fetchLikes((err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    });
  });
});
