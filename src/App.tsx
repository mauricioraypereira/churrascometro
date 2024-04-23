import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculator from "./pages/calculator/Calculator";
import Results from "./pages/results/Results";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Calculator />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
