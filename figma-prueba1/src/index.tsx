import React from "react";
import ReactDOMClient from "react-dom/client";
import { Cover } from "./screens/Cover";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Cover />);
