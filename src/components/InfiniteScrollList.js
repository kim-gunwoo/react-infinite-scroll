import { useState, useEffect } from "react";
import { throttle } from "utils/delay";
import CommentItem from "components/CommentItem";

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  const getFetchData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((item) => setItems((prev) => [...prev, ...item]));
  };

  useEffect(() => getFetchData(), [page]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  const onThrottleScroll = throttle(() => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((prev) => prev + 1);
    }
  }, 300);

  return (
    <div>
      {items?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InfiniteScrollList;
