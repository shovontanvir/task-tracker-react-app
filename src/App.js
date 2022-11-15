import TaskPage from "./pages/TaskPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
