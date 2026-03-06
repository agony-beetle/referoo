import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { scenario_id, scenario_title, episode, user_response, total_score, verdict } = req.body;

  const { error } = await supabase
    .from("responses")
    .insert([{ scenario_id, scenario_title, episode, user_response, total_score, verdict }]);

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error: "Failed to save" });
  }

  return res.status(200).json({ success: true });
}
