-- Run this in the Supabase SQL editor to create the signups table

create table signups (
  id uuid default gen_random_uuid() primary key,
  name text,
  email text not null,
  nps_score integer,
  created_at timestamptz default now()
);
