export function getAllPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      const data = response.json();
      return data;
    }
  );
}
