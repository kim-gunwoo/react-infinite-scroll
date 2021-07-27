import InfiniteObserverList from "components/InfiniteObserverList";

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
      <InfiniteObserverList />
    </div>
  );
}

export default App;
