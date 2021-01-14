import Ticket from "./ticket";

function Lane({ title, tickets, laneId, setMovingTicket, moveTicket }) {
  return (
    <div
      className="flex flex-col w-1/4 h-full text-center bg-gray-300 rounded-xl m-2"
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        moveTicket(event, laneId);
      }}
    >
      <h2 className="text-2xl border-b-4 border-black">{title}</h2>
      <div className="p-4">
        {tickets
          .filter((ticket) => ticket.lane === laneId)
          .map((ticket) => {
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

export default Lane;
