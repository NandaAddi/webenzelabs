-- Create Table Portfolios
CREATE TABLE portfolios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  content TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  project_url TEXT,
  gallery_images TEXT[] -- Optional: Array of image URLs
);

-- Enable RLS (Row Level Security)
ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read portfolios
CREATE POLICY "Public read access" ON portfolios
  FOR SELECT USING (true);

-- Policy: Only authenticated users can manage portfolios (if using Supabase Auth)
-- For simple dashboard, we might want to check for admin access.
-- If you just want it publicly editable for now:
CREATE POLICY "Public full access" ON portfolios
  FOR ALL USING (true);
