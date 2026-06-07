"use client";

import Link from "next/link";

function EventCard({ event, index = 0 }) {
  return (
    <article
      className="event-tech-card group w-full max-w-[480px]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <figure className="event-tech-poster">
        {event.image ? (
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-contain transition duration-700 group-hover:scale-[1.035]"
          />
        ) : (
          <span className="px-6 text-center text-sm text-gray-500">
            Event poster
          </span>
        )}
        <div className="event-tech-scan" />
      </figure>
      <div className="relative z-10 flex flex-col gap-5 p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold leading-snug text-white">
            {event.name}
          </h2>
          {event.isNew && <div className="badge badge-secondary">NEW</div>}
        </div>
        <p className="line-clamp-5 text-lg leading-relaxed text-gray-100">
          {event.description}
        </p>

        <div className="flex flex-col gap-4">
          {event.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag, idx) => (
                <span key={idx} className="event-tech-chip">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className="flex justify-end">
            <Link className="event-tech-link" href={`/events/${event.id}`}>
              See Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default EventCard;
