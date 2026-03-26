-- CREATE TABLE if not exists
CREATE TABLE IF NOT EXISTS public.portfolios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  project_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  header_image_url TEXT,
  stats JSONB DEFAULT '[]',
  tech_stack TEXT[] DEFAULT '{}',
  key_insights TEXT[] DEFAULT '{}',
  services_rendered TEXT[] DEFAULT '{}'
);

-- ADD COLUMNS if table already exists but columns are missing
-- This ensures all features work even if the table was created previously without these columns
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'portfolios' AND column_name = 'header_image_url') THEN
        ALTER TABLE public.portfolios ADD COLUMN header_image_url TEXT;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'portfolios' AND column_name = 'stats') THEN
        ALTER TABLE public.portfolios ADD COLUMN stats JSONB DEFAULT '[]';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'portfolios' AND column_name = 'tech_stack') THEN
        ALTER TABLE public.portfolios ADD COLUMN tech_stack TEXT[] DEFAULT '{}';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'portfolios' AND column_name = 'key_insights') THEN
        ALTER TABLE public.portfolios ADD COLUMN key_insights TEXT[] DEFAULT '{}';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'portfolios' AND column_name = 'services_rendered') THEN
        ALTER TABLE public.portfolios ADD COLUMN services_rendered TEXT[] DEFAULT '{}';
    END IF;
END $$;

-- Enable RLS (Row Level Security)
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read portfolios
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public read access') THEN
        CREATE POLICY "Public read access" ON public.portfolios FOR SELECT USING (true);
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Public full access') THEN
        CREATE POLICY "Public full access" ON public.portfolios FOR ALL USING (true);
    END IF;
END $$;
