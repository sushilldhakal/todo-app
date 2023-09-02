import PageTitle from "./components/PageTitle";
import AppHeader from "./components/AppHeader";

import AppContent from "./components/AppContent";

import styles from "./styles/modules/app.module.scss";

function App() {
  return (
    <div className="App">
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader></AppHeader>
        <AppContent></AppContent>
      </div>
    </div>
  );
}

export default App;
