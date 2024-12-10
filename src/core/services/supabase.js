import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://cqnfvxbenycwcqtuajza.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxbmZ2eGJlbnljd2NxdHVhanphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM4NjA1OTgsImV4cCI6MjA0OTQzNjU5OH0.bsi_6cSdBvWnbsQSk4GLHd7Gvf6WtiXP2ywNYNA_JqA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
