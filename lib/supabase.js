import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://epebyqsottpqdwnzhuso.supabase.co";
const supabaseKey = "sb_publishable_3pYu-Wp9ht8FNdtOgMgpTA_y1vnZtvn";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
});
