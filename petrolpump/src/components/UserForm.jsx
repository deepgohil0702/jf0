import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AlertCircle, Upload, FileText } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const UserForm = () => {
  const [bills, setBills] = useState([]);
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

  const fetchBills = async () => {
    try {
      const response = await fetch('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/bills');
      const data = await response.json();
      if (data.success) {
        setBills(data.data.bills);
      }
    } catch (err) {
      setError('Failed to fetch bills');
    }
  };

  useEffect(() => {
    fetchBills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/submit-bill', {
        method: 'POST',
        body: submitData
      });
      const data = await response.json();
      
      if (data.success) {
        fetchBills();
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          date: '',
          billImage: null
        });
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to submit bill');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Submission Form */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Submit Bill</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
              />
              <Input
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
              />
            </div>
            <Input
              placeholder="Mobile Number"
              type="tel"
              value={formData.mobileNumber}
              onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
              required
            />
            <Input
              placeholder="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              required
            />
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <input
                type="file"
                id="billImage"
                className="hidden"
                onChange={(e) => setFormData({...formData, billImage: e.target.files[0]})}
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

        {/* Bills List */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Submissions</h2>
          <div className="space-y-4">
            {bills.map((bill) => (
              <Card key={bill._id} className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold">{bill.firstName} {bill.lastName}</h3>
                    <p className="text-sm text-gray-500">Bill #{bill.bill_number}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(bill.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      Amount: ${bill.amount?.toFixed(2) || '0.00'}
                    </p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      bill.status === 'submitted' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {bill.status}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UserForm;