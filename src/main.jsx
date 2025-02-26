import React from "react";
import ReactDom from "react-dom/client";
import { GiftExpertApp } from "./GiftExpertApp";

import "./style.css";

ReactDom.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GiftExpertApp />
	</React.StrictMode>
);
