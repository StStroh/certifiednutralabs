/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address of the submitter
      - `message` (text) - Message content from the form
      - `created_at` (timestamptz) - Timestamp when the submission was created
      
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to insert their own submissions
    - Add policy for service role to view all submissions (for admin purposes)
    
  3. Notes
    - Table stores all contact form submissions
    - Data is append-only with no update or delete policies for data integrity
    - Timestamps are automatically set to current time
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only admins can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (false);
