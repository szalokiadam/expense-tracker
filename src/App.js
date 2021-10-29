import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Home, Error404 } from "./components/pages";
import { Header, Footer } from "./components/HeaderFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
