import { getEvents } from "@/app/lib/data-service";
import EventButtonGroup from "../_components/EventButtonGroup";
import EventCard from "../_components/EventCard";
import EventSort from "../_components/EventSort";

export const dynamic = "force-dynamic";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const filter = params.status || "upcoming";
  const sortBy = params["sort-by"] || "latest";

  const events = await getEvents({ status: filter, sortBy });

  return (
    <div className="flex flex-col gap-10 px-2 py-8 md:p-10">
      <div className="text-center text-6xl font-bold md:m-10 md:text-7xl">
        Events
      </div>
      <div className="flex flex-col justify-end gap-5 md:flex-row">
        <EventButtonGroup />
        <EventSort />
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 xl:grid-cols-3">
        {events.length === 0 ? (
          <p className="col-span-full text-gray-500">No events found.</p>
        ) : (
          events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))
        )}
      </div>
    </div>
  );
}
