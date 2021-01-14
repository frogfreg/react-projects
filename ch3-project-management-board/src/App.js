import "./tailwind.css";
import data from "./assets/data.json";
import Ticket from "./components/ticket";
import { useState } from "react";
import Lane from "./components/lane";

function App() {
  const [tickets, setTickets] = useState(data);

  function setMovingTicket(event, id) {
    event.dataTransfer.setData("id", id);
  }

  function moveTicket(event, laneId) {
    const ticketId = event.dataTransfer.getData("id");
    console.log(laneId);
    const ticketsCopy = [...tickets];
    for (const ticket of ticketsCopy) {
      if (ticket.id === +ticketId) {
        ticket.lane = laneId;
      }
    }

    setTickets(ticketsCopy);
  }

  return (
    <div className="h-screen">
      <h1 className="text-center text-5xl mb-4">Management Board</h1>
      <div className="flex w-full p-6">
        <Lane
          title="To do"
          tickets={tickets}
          laneId={1}
          setMovingTicket={setMovingTicket}
          moveTicket={moveTicket}
        />
        <Lane
          title="Working on it"
          tickets={tickets}
          laneId={2}
          setMovingTicket={setMovingTicket}
          moveTicket={moveTicket}
        />
        <Lane
          title="On review"
          tickets={tickets}
          laneId={3}
          setMovingTicket={setMovingTicket}
          moveTicket={moveTicket}
        />
        <Lane
          title="Done"
          tickets={tickets}
          laneId={4}
          setMovingTicket={setMovingTicket}
          moveTicket={moveTicket}
        />
      </div>
      <div className="flex flex-col md:flex-row mt-4">
        {tickets.map((ticket) => {
          return (
            <Ticket
              ticketId={ticket.id}
              key={ticket.id}
              title={ticket.title}
              body={ticket.body}
              setMovingTicket={setMovingTicket}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
