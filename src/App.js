import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ProducList from "./Components/ProducList";
import ProductDetails from "./Components/ProductDetails";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<ProducList />} />
                <Route
                    path="/productdetails/:id"
                    element={<ProductDetails />}
                />
            </Routes>
        </div>
    );
}

export default App;
