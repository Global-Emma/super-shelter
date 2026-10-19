'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { EnquiryFormData, validateEnquiryForm } from '@/lib/validation';

export function EnquiryForm() {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'residential',
    location: 'Awka',
    service: 'residential',
    budget: '',
    startDate: '',
    description: '',
    preferredContact: 'phone',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          projectType: 'residential',
          location: 'Awka',
          service: 'residential',
          budget: '',
          startDate: '',
          description: '',
          preferredContact: 'phone',
        });
      } else {
        setStatus('error');
        setServerMessage(result.message || 'Validation failed. Please check input values.');
      }
    } catch {
      setStatus('error');
      setServerMessage('Unable to send request right now. You can call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquire" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F3F5F7] rounded-xl p-6 sm:p-10 border border-gray-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
              Tell Us About Your Construction Project
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Share a few details about your project, and our team can contact you to discuss your requirements and next steps.
            </p>
          </div>

          {status === 'success' && (
            <div className="p-4 mb-6 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
              <p className="text-sm font-medium">
                Thank you! Your enquiry has been received. Our team will get back to you shortly.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <p className="text-sm font-medium">{serverMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm`}
                  placeholder="e.g. Chukwuma Okeke"
                />
                {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm`}
                  placeholder="e.g. 0703 118 4321"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Email Address <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm"
                  placeholder="name@example.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Project Location */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Project Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 rounded border ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm`}
                  placeholder="e.g. Awka, Anambra State"
                />
                {errors.location && <p className="text-xs text-red-500 mt-1">{errors.location}</p>}
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Project Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm bg-white"
                >
                  <option value="residential">Residential Building</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="other">Other Building Work</option>
                </select>
              </div>

              {/* Service Required */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm bg-white"
                >
                  {siteConfig.services.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Project Description <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded border ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-[#DC2626] text-sm`}
                placeholder="Please describe your planned project, key features, or questions..."
              />
              {errors.description && (
                <p className="text-xs text-red-500 mt-1">{errors.description}</p>
              )}
            </div>

            <p className="text-[11px] text-gray-500">
              By submitting this form, you agree that Super Shelter Construction Ltd may contact you regarding your enquiry using the phone number or email provided.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold rounded text-sm transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Submit Project Enquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}