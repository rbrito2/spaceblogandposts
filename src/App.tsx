import ListGroup from "./components/ListGroup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SoftwareAndComputers from "./components/SoftwareAndComputers";
import ArticlesAndResearch from "./components/ArticlesAndResearch";
import MachineLearning from "./components/MachineLearning";
import NoPage from "./components/NoPage";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="software" element={<SoftwareAndComputers />} />
            <Route path="Research" element={<ArticlesAndResearch />} />
            <Route path="ML" element={<MachineLearning />}></Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
