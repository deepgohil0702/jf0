import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, Upload } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { submitBill } from '../services/api';

const UserForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    billImage: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitFormData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          submitFormData.append(key, formData[key]);
        }
      });

      const response = await submitBill(submitFormData);
      
      if (response.success) {
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          date: '',
          billImage: null
        });
        // Show success message or redirect
      } else {
        setError(response.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit bill. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        billImage: file
      }));
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Submit Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
            required
          />
          <Input
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
            required
          />
        </div>
        
        <Input
          placeholder="Mobile Number"
          type="tel"
          value={formData.mobileNumber}
          onChange={(e) => setFormData(prev => ({...prev, mobileNumber: e.target.value}))}
          required
        />
        
        <Input
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
          required
        />
        
        <Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
          required
        />
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
          <input
            type="file"
            id="billImage"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
          <label
            htmlFor="billImage"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <Upload className="w-8 h-8 text-gray-400" />
            <span className="mt-2 text-sm text-gray-500">
              {formData.billImage ? formData.billImage.name : 'Upload bill image'}
            </span>
          </label>
        </div>
        
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Bill'}
        </Button>
      </form>
    </Card>
  );
};

export default UserForm;