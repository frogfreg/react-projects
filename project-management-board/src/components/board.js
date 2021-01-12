import { useState, useEffect } from "react";
import Lane from "./lane";

function Board() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const tickets = await fetch("/assets/data.json");
        const ticketsJSON = await tickets.json();
        if (ticketsJSON) {
          setData(ticketsJSON);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    })();
  }, []);

  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  return (
    <div className="flex justify-between m-1 flex-col md:flex-row">
      {lanes.map((lane) => {
        return (
          <Lane
            key={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tickets={data.filter((ticket) => ticket.lane === lane.id)}
          />
        );
      })}
    </div>
  );
}

export default Board;
