import {createClient} from '@supabase/supabase-js'

// creat a single supabase client for interacting with your database

const supabaseUrl = 'https://prjpgeqgilqdcqmpksni.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InByanBnZXFnaWxxZGNxbXBrc25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDEwNjEsImV4cCI6MjA0MzM3NzA2MX0.H3Ckz83TaOGoculI5-9JAz_C0fQn5CSrknsnyrUEwfY'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;