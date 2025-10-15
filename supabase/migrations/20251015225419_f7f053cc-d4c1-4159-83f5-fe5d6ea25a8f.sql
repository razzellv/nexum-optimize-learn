-- Add course_id column to user_progress table
ALTER TABLE public.user_progress 
ADD COLUMN IF NOT EXISTS course_id TEXT NOT NULL DEFAULT 'facility-optimization';

-- Update unique constraint to include course_id
ALTER TABLE public.user_progress 
DROP CONSTRAINT IF EXISTS user_progress_user_id_module_id_key;

ALTER TABLE public.user_progress 
ADD CONSTRAINT user_progress_user_id_course_id_module_id_key 
UNIQUE (user_id, course_id, module_id);

-- Create index for efficient lookups
CREATE INDEX IF NOT EXISTS idx_user_progress_course 
ON public.user_progress(user_id, course_id);