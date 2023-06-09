import "./src/index.css";
import "./node_modules/flowbite/dist/flowbite.min.js";
import axios from "axios";
import { El } from "./src/library/el/El";
import { App } from "./src/App";
import { Router } from "./src/functions/router";
import { coockieSet } from "./src/functions/CoockieSet";
import { datalogin } from "./src/functions/datalogin";

const root = document.getElementById("app");
root.appendChild(App());
coockieSet();

// const datalist = JSON.parse(localStorage.getItem("datalist")) || [];
// const root = document.getElementById("app");
// root.appendChild(App());
// getData().then((data) => RenderUi(data));
