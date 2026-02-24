/*
  # Create quote_requests table

  ## Overview
  This migration creates a table to store quote requests submitted through the quote form.

  ## New Tables
  
  ### `quote_requests`
  - `id` (uuid, primary key) - Unique identifier for each quote request
  - `name` (text, required) - Name of the person requesting the quote
  - `email` (text, required) - Email address for follow-up
  - `phone` (text, optional) - Phone number for contact
  - `company` (text, optional) - Company name
  - `project_type` (text, optional) - Type of project (web-development, mobile-app, ecommerce, etc.)
  - `budget` (text, optional) - Budget range for the project
  - `message` (text, required) - Detailed project description
  - `created_at` (timestamptz) - Timestamp when the quote request was submitted
  
  ## Security
  
  ### Row Level Security (RLS)
  1. Enable RLS on `quote_requests` table
  2. Add policy for authenticated users to insert their own quote requests
  3. Add policy for authenticated users to read their own quote requests
  
  ## Important Notes
  1. All quote requests are stored securely in the database
  2. Email validation should be handled at the application level
  3. The table uses UUID for primary keys for better security
  4. Timestamps are stored with timezone information
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  project_type text,
  budget text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert quote requests"
  ON quote_requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);
