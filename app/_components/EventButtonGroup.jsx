"use client";
import { useRouter, useSearchParams } from "next/navigation";

function EventButtonGroup() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get("status") || "upcoming";

  const setFilter = (status) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("status", status);
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-row">
      <button
        className={`btn w-25 ${
          filter === "upcoming" ? "btn-success" : "btn-outline btn-success"
        }`}
        onClick={() => setFilter("upcoming")}
      >
        Upcoming
      </button>
      <button
        className={`btn w-25 ${
          filter === "past" ? "btn-success" : "btn-outline btn-success"
        }`}
        onClick={() => setFilter("past")}
      >
        Past
      </button>
    </div>
  );
}

export default EventButtonGroup;
