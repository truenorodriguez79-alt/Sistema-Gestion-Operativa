const SUPABASE_URL = "https://ydbmxtwixzhesaeyqeqb.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_uSqZAWIniuwzaw69UODDpQ_cSHmcdqT";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);