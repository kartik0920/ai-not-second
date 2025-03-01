import { createClient } from "@supabase/supabase-js";

let supabase_url = import.meta.env.VITE_SUPABASE_URL;
let anon_key = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabase_url, anon_key);
