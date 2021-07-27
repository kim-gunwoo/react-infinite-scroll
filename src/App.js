import InfiniteScrollList from "./components/InfiniteScrollList";
import InfiniteObserverList from "./components/InfiniteObserverList";

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
      {/* <InfiniteObserverList /> */}
    </div>
  );
}

export default App;
