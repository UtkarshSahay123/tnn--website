"use client";
import { useRouter, useSearchParams } from "next/navigation";

function EventSort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortBy = searchParams.get("sort-by") || "latest";

  function handleChange(e) {
    const newSortBy = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort-by", newSortBy);
    router.push(`?${params.toString()}`);
  }

  return (
    <select
      className="bg-accent p-2 rounded-xl"
      value={sortBy}
      onChange={handleChange}
    >
      <option value="latest">Latest First</option>
      <option value="oldest">Oldest First</option>
    </select>
  );
}

export default EventSort;
