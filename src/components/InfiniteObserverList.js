import { useRef, useState, useEffect } from "react";
import CommentItem from "components/CommentItem";

const InfiObserverList = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const getFetchData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((item) => {
        setItems((prev) => [...prev, ...item]);
        setLoading(true);
      });
  };

  useEffect(() => getFetchData(), [page]);

  const onIntersect = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) setPage((p) => p + 1);
  };

  useEffect(() => {
    if (!observer.current) return;

    if (loading) {
      const io = new IntersectionObserver(onIntersect, { threshold: 1 });
      io.observe(observer.current);

      return () => io.disconnect();
    }
  }, [loading]);

  return (
    <div>
      {items?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
      <div ref={observer} />
    </div>
  );
};

export default InfiObserverList;
