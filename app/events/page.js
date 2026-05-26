import { getEvents } from "@/app/lib/data-service";
import EventButtonGroup from "../_components/EventButtonGroup";
import EventCard from "../_components/EventCard";
import EventSort from "../_components/EventSort";

export default async function Page({ searchParams }) {
  const filter = searchParams.status || "upcoming";
  const sortBy = searchParams["sort-by"] || "latest";

  const events = await getEvents({ status: filter, sortBy });

  return (
    <div className="flex flex-col gap-10 p-10">
      <div className="text-7xl text-center m-10 font-bold">Events</div>
      <div className="flex flex-row justify-end gap-5">
        <EventButtonGroup />
        <EventSort />
      </div>
      <div className="flex flex-row mt-10 gap-10 flex-wrap flex-3 justify-center">
        {events.length === 0 ? (
          <p className="text-gray-500">No events found.</p>
        ) : (
          events.map((event) => <EventCard key={event.id} event={event} />)
        )}
      </div>
    </div>
  );
}
