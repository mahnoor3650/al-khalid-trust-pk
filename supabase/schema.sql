-- Al-Khalid Trust: Admin Gallery Upload setup
-- Run this in your Supabase project's SQL Editor (Project -> SQL Editor -> New query).

-- 1. Storage bucket for uploaded images/videos (public read, so the gallery page can display them)
insert into storage.buckets (id, name, public)
values ('gallery-media', 'gallery-media', true)
on conflict (id) do nothing;

-- 2. Table storing metadata for each uploaded item
create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('image', 'video')),
  storage_path text not null,
  url text not null,
  alt text,
  created_at timestamptz not null default now(),
  created_by uuid references auth.users (id)
);

alter table public.gallery_items enable row level security;

-- Anyone (including anonymous site visitors) can read gallery items
create policy "Public can view gallery items"
  on public.gallery_items for select
  to anon, authenticated
  using (true);

-- Only logged-in users (your one admin account) can insert
create policy "Authenticated can insert gallery items"
  on public.gallery_items for insert
  to authenticated
  with check (true);

-- Only logged-in users can delete
create policy "Authenticated can delete gallery items"
  on public.gallery_items for delete
  to authenticated
  using (true);

-- 3. Storage policies for the gallery-media bucket
create policy "Public can view gallery media"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'gallery-media');

create policy "Authenticated can upload gallery media"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'gallery-media');

create policy "Authenticated can delete gallery media"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'gallery-media');
