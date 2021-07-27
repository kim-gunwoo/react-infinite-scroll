import { useRef, useState, useEffect } from "react";
import CommentItem from "components/CommentItem";

const InfiniteObserverList = () => {
  const [page, setPage] = useState(0);
  const [items, setItems] = useState([]);

  const observer = useRef();

  const getFetchData = () => {
    if (page === 0) return;

    const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((item) => setItems((prev) => [...prev, ...item]));
  };

  useEffect(() => getFetchData(), [page]);

  const onIntersect = (entries, observer) => {
    const target = entries[0];
    console.log(target, observer);
    if (target.isIntersecting) setPage((p) => p + 1);
  };

  useEffect(() => {
    if (!observer.current) {
      return;
    }

    const io = new IntersectionObserver(onIntersect, { threshold: 1 });
    io.observe(observer.current);

    return () => io && io.disconnect();
  }, [observer]);

  return (
    <div>
      {items?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
      <div ref={observer} />
    </div>
  );
};

export default InfiniteObserverList;
