import styles from "./styles/app.module.css";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter basename="/Swift-sign">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/generate" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
