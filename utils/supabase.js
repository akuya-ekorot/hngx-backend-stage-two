require("dotenv").config();
const createClient = require("@supabase/supabase-js").createClient;

const supabase = createClient(process.env.SB_URL, process.env.SB_KEY);

module.exports = supabase;
