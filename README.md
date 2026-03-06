# Ref for a Day

## Deploy in 4 steps

### 1. Set up Supabase
1. Create a free account at supabase.com
2. Create a new project
3. Go to the SQL Editor and paste the contents of `supabase-setup.sql` and run it
4. Go to Project Settings > API and copy your **Project URL** and **anon public** key

### 2. Get your Anthropic API key
1. Go to console.anthropic.com
2. Create an API key and copy it

### 3. Push to GitHub
1. Create a new repo on github.com
2. Push this folder to it

### 4. Deploy on Vercel
1. Create a free account at vercel.com
2. Click "Add New Project" and import your GitHub repo
3. Before deploying, add these environment variables:
   - `ANTHROPIC_API_KEY` — your Anthropic key
   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_ANON_KEY` — your Supabase anon key
4. Click Deploy

### Custom domain
1. In Vercel, go to your project > Settings > Domains
2. Add your domain (e.g. ref-for-a-day.com)
3. Copy the DNS records Vercel gives you
4. Add them in your domain registrar's DNS settings
5. Wait ~15 minutes

### View signups
Log into supabase.com > your project > Table Editor > signups.
You'll see every name, email, NPS score and timestamp as they come in.
