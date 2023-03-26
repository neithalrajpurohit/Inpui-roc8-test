import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import ProducList from "./Components/ProducList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";

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
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
