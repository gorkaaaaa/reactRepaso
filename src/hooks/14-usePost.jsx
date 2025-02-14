import { useEffect, useState } from "react";
import { getAllPosts } from "../servicios/post/getAllPosts.jsx";

const usePost = () => {
  const [listaPost, setListaPost] = useState([]);

  const [buscando, setBuscando] = useState(false);

  function obtenerPosts() {
    setBuscando(true);
    getAllPosts().then((posts) => {
      setListaPost(posts);
      setBuscando(false);
    });
  }

  useEffect(obtenerPosts, []);

  return { buscando, listaPost };
};
export default usePost;
