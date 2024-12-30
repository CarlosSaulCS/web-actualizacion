'use server'

import { supabase } from '@/utils/supabase'

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    if (!name || !email || !message) {
      return {
        error: 'All fields are required'
      }
    }

    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          message
        }
      ])

    if (error) {
      console.error('Error inserting contact:', error)
      return {
        error: 'Failed to submit form. Please try again.'
      }
    }

    return {
      success: true
    }
  } catch (error) {
    console.error('Error in submitContactForm:', error)
    return {
      error: 'An unexpected error occurred. Please try again.'
    }
  }
}

