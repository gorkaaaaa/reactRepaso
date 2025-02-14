import { useEffect, useState } from "react";
import AjaxPost from "../13-AjaxPost/13-AjaxPost";
import AjaxLoader from "../13-AjaxPost/13-AjaxLoader";
import { getAllPosts } from "../../../servicios/post/getAllPosts";
import usePost from "../../../hooks/14-usePost";

const PostZa = () => {
  const posts = usePost();

  function sortAZ(p1, p2) {
    if (p1.title > p2.title) return -1;
    if (p1.title < p2.title) return 1;
    return 0;
  }

  function listarPosts(post) {
    return <AjaxPost post={post}></AjaxPost>;
  }
  return (
    <div>
      <h1>post Za</h1>
      {posts.buscando ? (
        <AjaxLoader></AjaxLoader>
      ) : (
        <div>
          <ul>{posts.listaPost.toSorted(sortAZ).map(listarPosts)}</ul>
        </div>
      )}
    </div>
  );
};
export default PostZa;
