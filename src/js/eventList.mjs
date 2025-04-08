import { getEventsBySearchTerm } from "./externalServices.mjs";
import { renderListWithTemplate, appendToLocalStorage, removeFromLocalStorage } from "./utils.mjs";

function eventCardTemplate(event) {
  return `
  <li class="event-card">
    <div class="card-wrapper">
      <svg class="heart-icon" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" onclick="handleHeartClick(this, '${event.id}')">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
      <img
        src="/images/event-placeholder.jpg"
        alt="Image of ${event.name.text}"
      />
      <h2 class="card__name">${event.name.text}</h2>
      <h3 class="card__description">${event.description.text}</h3>
      <p class="card__location">${event.venue.name} in ${event.venue.city}, ${event.venue.region}</p>
      <p class="card__start">${event.start.local}</p>
      <p class="card__end">${event.end.local}</p>
    </div>
  </li>`;
}

// Add this function to your JavaScript file
window.handleHeartClick = function (element, eventId) {
  element.classList.toggle('clicked');
  
  if (element.classList.contains('clicked')) {
    onHeartClicked(eventId);
  } else {
    onHeartUnclicked(eventId);
  }
}

function onHeartClicked(eventId) {
  console.log(`Heart clicked for event ${eventId}`);
  appendToLocalStorage("favoriteEvents", eventId);
}

function onHeartUnclicked(eventId) {
  console.log(`Heart unclicked for event ${eventId}`);
  removeFromLocalStorage("favoriteEvents", eventId);
}

export default async function eventList(selector, searchTerm) {
  const el = document.querySelector(selector);

  const events = await getEventsBySearchTerm(searchTerm);
  
  renderListWithTemplate(eventCardTemplate, el, events);
}
