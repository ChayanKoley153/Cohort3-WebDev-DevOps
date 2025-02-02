import { useState, useEffect } from "react";

function useFetch(url, retryTime) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails() {
    try {
      let response = await fetch(url);
      let json = await response.json();
      setFinalData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetails();

    if (retryTime) {
      const fetchRetryTime = setInterval(() => {
        getDetails();
      }, retryTime);

      return () => clearInterval(fetchRetryTime);
    }
  }, [url, retryTime]);

  return { finalData, loading };
}

export default useFetch;
