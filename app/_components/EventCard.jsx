import Link from "next/link";

function EventCard({ event }) {
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={event.image} alt={event.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {event.name}
          {event.isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{event.description}</p>

        <div className="card-actions justify-end">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 flex-wrap">
              {event.tags?.map((tag, idx) => (
                <div
                  key={idx}
                  className={`badge badge-outline ${
                    tag === "Monetized" ? "badge-success" : ""
                  }`}
                >
                  {tag}
                </div>
              ))}
            </div>
            <Link className="btn btn-primary" href={`/events/${event.id}`}>
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
