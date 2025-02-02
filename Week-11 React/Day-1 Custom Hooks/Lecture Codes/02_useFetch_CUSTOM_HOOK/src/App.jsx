// // Method 1: Handling everything (including fetching data) within the App function itself

// import { useEffect, useState } from "react";

// function App() {
//   const [post, setPost] = useState({});

//   async function getPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     const json = await response.json();
//     setPost(json);
//   }

//   useEffect(() => {
//     getPost();
//   }, []);

//   return (
//     <>
//       <h2>{post.title}</h2>
//     </>
//   );
// }

// export default App;




// // Method - 2: Using a custom Hook in a separate file to handle data fetching

// import { usePostTitle } from "./hooks/useFetch";

// function App() {
//   const postTitle = usePostTitle();

//   return (
//     <>
//       <h2>{postTitle} </h2>
//     </>
//   );
// }

// export default App;



// Method - 3: Creating a custom Hook in a separate file and passing the URL to the hook.
// The URL is provided in the App component and used in the custom hook.

import { useFetch } from "./hooks/useFetch";

function App() {
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return (
    <>
      <h1>{JSON.stringify(finalData)}</h1>
    </>
  );
}

export default App;
