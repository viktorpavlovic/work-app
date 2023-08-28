import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ofuzuizyukxrpdseknry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mdXp1aXp5dWt4cnBkc2VrbnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyMTU4NjEsImV4cCI6MjAwODc5MTg2MX0.rFlG6iUzZzDaVAeHDFRqSkUD_ffJv9s4-qzGG3uQ2TY";
export const supabase = createClient(supabaseUrl, supabaseKey);
