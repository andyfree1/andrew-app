import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { contactInfo } from '../config/contact';
import { sendEmail } from '../services/email';

// ... existing interfaces ...

export default function Contact() {
  // ... existing state ...

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });
    
    try {
      const response = await sendEmail(formData);
      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({
        type: 'error',
        message: `Oops! Something went wrong. Please try again or contact me directly at ${contactInfo.email}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of the component remains the same ...
}