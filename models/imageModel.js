import { supabase } from '../utils/supabaseClient';

// Upload image to Supabase Storage and save metadata to DB
export async function uploadImageToSupabase(file) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
  const filePath = `${fileName}`;

  // Upload to storage
  let { data: storageData, error: storageError } = await supabase.storage
    .from('brain-images')
    .upload(filePath, file);

  if (storageError) {
    throw storageError;
  }

  // Get public URL
  const { data: publicUrlData } = supabase.storage
    .from('brain-images')
    .getPublicUrl(filePath);
  const publicUrl = publicUrlData.publicUrl;

  // Insert metadata to DB
  const { data: dbData, error: dbError } = await supabase
    .from('images')
    .insert([{ name: file.name, url: publicUrl }])
    .select()
    .single();

  if (dbError) {
    throw dbError;
  }

  return dbData;
}

// Fetch all images from DB
export async function fetchAllImages() {
  const { data, error } = await supabase
    .from('images')
    .select('*')
    .order('uploaded_at', { ascending: false });
  if (error) throw error;
  return data;
}

// Fetch single image by id
export async function fetchImageById(id) {
  const { data, error } = await supabase
    .from('images')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
} 