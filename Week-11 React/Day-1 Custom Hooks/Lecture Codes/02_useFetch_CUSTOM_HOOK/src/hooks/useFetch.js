import { useEffect, useState } from "react";

export function usePostTitle() {
  const [post, setPost] = useState({});

  async function getPost() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const json = await response.json();
    setPost(json);
  }

  useEffect(() => {
    getPost();
  }, []);

  return post.title;
}

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});

  async function getDetails() {
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
  }

  useEffect(() => {
    getDetails();
  }, []);

  return finalData;
}
