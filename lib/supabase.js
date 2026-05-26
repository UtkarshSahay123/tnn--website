import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qpbxxltdhjojgqiwweex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwYnh4bHRkaGpvamdxaXd3ZWV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYzOTU1ODgsImV4cCI6MjA3MTk3MTU4OH0.6oXrB5mf45ZZz8BkGB29B9rLBLRD44-vRcmnCWQiIZE";
export const supabase = createClient(supabaseUrl, supabaseKey);
