import { useRef, useState, useEffect } from "react";
import CommentItem from "components/CommentItem";

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);

  //   const observer = useRef();

  const getFetchData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`;
    fetch(url)
      .then((res) => res.json())
      .then((item) => setItems((prev) => [...prev, ...item]));
  };

  //   const onIntersect = () => {
  //     console.log("test");
  //     setPage((p) => p + 1);
  //   };

  //   useEffect(() => {
  //     if (!observer.current) {
  //       return;
  //     }

  //     const io = new IntersectionObserver(onIntersect, { threshold: 1 });
  //     io.observe(observer.current);

  //     return () => io && io.disconnect();
  //   }, [setPage]);

  useEffect(() => getFetchData(), [page]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      {items?.map((item) => (
        <CommentItem key={item.id} item={item} />
      ))}
      {/* <div ref={observer} /> */}
    </div>
  );
};

export default InfiniteScrollList;
