import "./lane.css";
import Ticket from "./ticket";

function Lane({ title, tickets, error, loading }) {
  return (
    <div className="lane-wrapper">
      <h2 className="py-2 border-b-2 border-gray-500 text-center text-2xl">
        {title}
      </h2>
      {(loading || error) && (
        <div className="text-center">{loading ? "Loading..." : error}</div>
      )}
      <div className="p-2">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
}

export default Lane;
