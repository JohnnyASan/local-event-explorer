import { getEventsBySearchTerm } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function eventCardTemplate(event) {
  return `
  <li class="event-card">
      <img
        src="/images/event-placeholder.png"
        alt="Image of ${event.name.text}"
      />
      <h2 class="card__name">${event.name.text}</h2>
      <h3 class="card__description">${event.description.text}</h3>
      <p class="card__location">${event.venue.name} in ${event.venue.city}, ${event.venue.region}</p>
      <p class="card__start">${event.start.local}</p>
      <p class="card__end">${event.end.local}</p>
  </li>`;
}

export default async function eventList(selector, searchTerm) {
  const el = document.querySelector(selector);

  const events = await getEventsBySearchTerm(searchTerm);
  
  renderListWithTemplate(eventCardTemplate, el, events);
}
