import { loadNavbar, loadStart } from "./start.js";

export default function firstLoad() {
    loadNavbar();
    loadStart();
}