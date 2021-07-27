import { useState, useEffect } from "react";
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

  const optimizeAnimation = (callback) => {
    let ticking = false;

    return () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          callback();
          ticking = false;
        });
      }
    };
  };

  const toFitScroll = (cb) => {
    let tick = false;

    return function trigger() {
      if (tick) {
        return;
      }
      tick = true;
      return requestAnimationFrame(function task() {
        tick = false;
        return cb();
      });
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", toFitScroll(onScroll));
    // window.addEventListener("scroll", onScroll);
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

  return (
    <div>
      {items?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default InfiniteScrollList;
