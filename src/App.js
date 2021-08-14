import InfiniteObserverList from "components/InfiniteObserverList";
import InfiniteScrollList from "components/InfiniteScrollList";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

function App() {
  return (
    <div style={styles.container}>
      <InfiniteScrollList />
    </div>
  );
}

export default App;
