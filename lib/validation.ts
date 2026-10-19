// lib/validation.ts
export interface EnquiryFormData {
  fullName: string;
  phone: string;
  email?: string;
  projectType: string;
  location: string;
  service: string;
  budget?: string;
  startDate?: string;
  description: string;
  preferredContact: 'phone' | 'whatsapp';
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEnquiryForm(data: Partial<EnquiryFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.';
  }

  if (!data.phone || data.phone.trim().length < 10) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type.';
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = 'Please specify the project location.';
  }

  if (!data.service) {
    errors.service = 'Please select the required service.';
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please describe your project (minimum 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}