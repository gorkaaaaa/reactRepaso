export function newPost(Post_) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(Post_),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => {
    const data = response.json();
    return data;
  });
}
