function Ticket({ ticket }) {
  return (
    <div className="bg-gray-600 p-4 rounded-xl mt-1">
      <h3 className="w-full m-0">{ticket.title}</h3>
      <p className="w-full">{ticket.body}</p>
    </div>
  );
}

export default Ticket;
