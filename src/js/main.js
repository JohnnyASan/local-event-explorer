import { loadHeaderFooter } from "./utils.mjs";
import eventList from "./eventList.mjs";

loadHeaderFooter();

// Get the search term from the input

// Render the event list
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  eventList(".event-list", searchTerm);
});
