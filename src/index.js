import React from "react"
import ReactDOM from "react-dom/client"
//component file 
import TodoContainer from "./components/TodoContainer"
import "./Apps.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
<TodoContainer />
</React.StrictMode>
)
