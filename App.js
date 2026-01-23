
import React from "react";
import "./css/styles.css";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./src/components/HeaderComponent";
import BodyComponent from "./src/components/BodyComponent";
import FooterComponent from "./src/components/FooterComponent";

const App = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <BodyComponent />
            <FooterComponent />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;




