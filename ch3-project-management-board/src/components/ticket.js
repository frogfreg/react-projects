function Ticket({ ticketId, title, body, setMovingTicket }) {
  return (
    <div
      className="bg-gray-600 text-white flex flex-col rounded mx-1 p-2 mt-4 md:mt-1"
      draggable="true"
      onDragStart={(event) => {
        setMovingTicket(event, ticketId);
      }}
    >
      <p className="text-xl">{title}</p>
      <p className="mt-2">{body}</p>
    </div>
  );
}

export default Ticket;
