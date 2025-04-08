

export async function getEventsBySearchTerm(searchTerm) {
  // get events from events.json
  const response = await fetch("/json/events.json");
  const data = await response.json();
  const events = data.filter((event) => {
    return event.name.text.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return events;
}

export async function getEventById(id) {
  const response = await fetch("/json/events.json");
  const data = await response.json();
  const event = data.find((event) => event.id === id);
  return event;
}