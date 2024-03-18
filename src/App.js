import styles from "./styles/app.module.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<MainPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
