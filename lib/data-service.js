import { supabase } from "./supabase";

export async function getTeams() {
  const { data, error } = await supabase.from("teams").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getTeamMembers(name) {
  const { data, error } = await supabase
    .from("members")
    .select("name, position, id")
    .eq("team", name);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getTeamDescription(name) {
  const { data, error } = await supabase
    .from("teams")
    .select("description")
    .eq("name", name);

  if (error) {
    throw new Error(error.message);
  }
  return data[0].description;
}

export async function getMemberDetails(id) {
  const { data, error } = await supabase
    .from("members")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
}

export async function getEvents({
  status = "upcoming",
  sortBy = "latest",
} = {}) {
  let query = supabase.from("events").select("*").eq("status", status);

  // Sorting logic
  if (sortBy === "latest") {
    query = query.order("date", { ascending: false });
  } else if (sortBy === "oldest") {
    query = query.order("date", { ascending: true });
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }

  return data;
}
