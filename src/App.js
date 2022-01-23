import styles from "./App.module.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
      <Hello />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;
