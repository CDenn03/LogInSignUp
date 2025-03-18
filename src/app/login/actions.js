'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '../../../utils/supabase/server';
import { message } from "antd";

export async function login(formData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  const {error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return { error: error.message }; // Return the error to the frontend
  }

  // message.success("Login Successful");
  // revalidatePath('/', 'layout');
  // redirect('/');

}

export async function signup(formData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
    options: {
      data: {
        display_name: formData.get("username"), 
      },
    }
  };

  const { data: signupData, error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}