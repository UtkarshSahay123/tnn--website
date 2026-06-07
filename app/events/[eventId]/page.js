import { getEventDetails } from "@/app/lib/data-service";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Page({ params }) {
  const { eventId } = await params;
  const event = await getEventDetails(eventId);

  if (!event) {
    notFound();
  }

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12">
      <Link href="/events?status=past" className="btn btn-outline w-fit">
        Back to events
      </Link>

      <article className="overflow-hidden bg-base-300">
        <div className="flex min-h-[280px] items-center justify-center bg-black">
          {event.image ? (
            <img
              src={event.image}
              alt={event.name}
              className="max-h-[720px] w-full object-contain"
            />
          ) : (
            <span className="px-6 text-center text-sm text-gray-500">
              Event poster
            </span>
          )}
        </div>

        <div className="flex flex-col gap-5 p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              {event.name}
            </h1>
            {event.isNew && <div className="badge badge-secondary">NEW</div>}
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-gray-400">
            <span>{event.date}</span>
            <span className="capitalize">{event.status}</span>
          </div>

          <p className="max-w-3xl text-lg leading-relaxed">
            {event.description}
          </p>

          {event.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag, idx) => (
                <span key={idx} className="badge badge-outline">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </main>
  );
}
