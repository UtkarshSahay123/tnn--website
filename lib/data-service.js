import { supabase } from "./supabase";

export async function getTeams() {
  try {
    const { data, error } = await supabase.from("teams").select("*");
    if (error) {
      console.error("Supabase getTeams error:", error);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error("Supabase getTeams fetch failed:", err);
    return [];
  }
}

export async function getTeamMembers(name) {
  try {
    const { data, error } = await supabase
      .from("members")
      .select("name, position, id")
      .eq("team", name);
    if (error) {
      console.error("Supabase getTeamMembers error:", error);
      return [];
    }
    return data ?? [];
  } catch (err) {
    console.error("Supabase getTeamMembers fetch failed:", err);
    return [];
  }
}

export async function getTeamDescription(name) {
  try {
    const { data, error } = await supabase
      .from("teams")
      .select("description")
      .eq("name", name);
    if (error) {
      console.error("Supabase getTeamDescription error:", error);
      return "";
    }
    return data?.[0]?.description ?? "";
  } catch (err) {
    console.error("Supabase getTeamDescription fetch failed:", err);
    return "";
  }
}

export async function getMemberDetails(id) {
  try {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .eq("id", id);
    if (error) {
      console.error("Supabase getMemberDetails error:", error);
      return null;
    }
    return data?.[0] ?? null;
  } catch (err) {
    console.error("Supabase getMemberDetails fetch failed:", err);
    return null;
  }
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
