import { loadHeaderFooter } from "./utils.mjs";
import eventList from "./eventList.mjs";


loadHeaderFooter();


const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  eventList(".event-list", searchTerm);
});
