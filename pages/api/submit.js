import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, nps } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const { error } = await supabase
    .from("signups")
    .insert([{ name: name || null, email, nps_score: nps ?? null }]);

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).json({ error: "Failed to save" });
  }

  return res.status(200).json({ success: true });
}
