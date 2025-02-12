'use server'

export async function createProfile(prevState, formData: FormData) {
  const rawFormData = {
    firstName: formData.get('first_name'),
    lastName: formData.get('last_name'),
    age: formData.get('age'),
    terms: formData.getAll('terms'),
  }

  if (!rawFormData.firstName) {
    return {
      success: false,
      data: {
        field: 'first_name',
        message: 'A first name is required to submit the form.',
      },
    }
  }

  if (!rawFormData.lastName) {
    return {
      success: false,
      data: {
        field: 'last_name',
        message: 'A last name is required to submit the form.',
      },
    }
  }

  if (!rawFormData.age) {
    return {
      success: false,
      data: {
        field: 'age',
        message: 'An age is required to submit the form.',
      },
    }
  }

  if (!rawFormData.terms.includes('1')) {
    return {
      success: false,
      data: {
        field: 'terms',
        message:
          'You must agree to the terms and conditions to submit the form.',
      },
    }
  }

  // 1. Update user profile
  // 2. Revalidate cache

  // Since this is a demo, we'll just return the form data
  return {
    success: true,
    data: rawFormData,
  }
}
