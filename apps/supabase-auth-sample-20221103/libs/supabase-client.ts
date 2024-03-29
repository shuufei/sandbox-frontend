import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NX_NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NX_NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getServiceSupabase = () =>
  createClient(
    process.env.NX_NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  );
