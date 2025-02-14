
        
import React, { useEffect, useState } from 'react';

        // Status configuration
        const statusOrder = [
          'STEP1_QUEUED',
          'STEP1_PROCESSING',
          'STEP1_COMPLETED',
          'STEP2_PROCESSING',
          'STEP2_COMPLETED',
          'STEP3_PROCESSING',
          'STEP4_PROCESSING',
          'COMPLETED',
        ];
        
        const visualSteps = [
          { title: 'Extracting Emails', milestone: 'STEP1_COMPLETED' },
          { title: 'Generating Content', milestone: 'STEP2_COMPLETED' },
          { title: 'Processing Templates', milestone: 'STEP3_PROCESSING' },
          { title: 'Sending Emails', milestone: 'STEP4_PROCESSING' },
          { title: 'Completed', milestone: 'COMPLETED' },
        ];
        
        // Initialize milestone indices
        visualSteps.forEach(step => {
          step.milestoneIndex = statusOrder.indexOf(step.milestone);
        });
        
        const getStatusMessage = (status) => {
          const statusMessages = {
            "STEP1_QUEUED": "Job is waiting in queue for Step 1 processing",
            "STEP1_PROCESSING": "Processing CSV file and extracting emails",
            "STEP1_COMPLETED": "Email extraction completed successfully",
            "STEP2_PROCESSING": "Generating email content with AI",
            "STEP2_COMPLETED": "Email content generation completed",
            "STEP3_PROCESSING": "Processing email templates",
            "STEP4_PROCESSING": "Sending emails to recipients",
            "COMPLETED": "All steps completed successfully",
          };
          return statusMessages[status] || "Current job status";
        };
        
        const StatusDisplay = ({ jobId, onReset }) => {
          const [status, setStatus] = useState(null);
          const [loading, setLoading] = useState(true);
          const [error, setError] = useState(null);
        
          useEffect(() => {
            const fetchStatus = async () => {
              try {
                const response = await fetch(`https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/status/${jobId}`);
                if (!response.ok) throw new Error(response.status === 404 ? 
                  "Job ID not found or expired" : "Failed to fetch status");
                
                const data = await response.json();
                setStatus(data.status);
              } catch (err) {
                setError(err.message);
              } finally {
                setLoading(false);
              }
            };
        
            fetchStatus();
          }, [jobId]);
        
          if (loading) return (
            <div className="text-center p-8" style={{ background: '#fdfaf4' }}>
              <p className="text-[#c96442]">Loading job status...</p>
            </div>
          );
        
          if (error) return (
            <div className="text-center p-8" style={{ background: '#fdfaf4' }}>
              <p className="text-red-500 mb-4">Error: {error}</p>
              <button
                onClick={onReset}
                className="px-4 py-2 rounded-lg font-medium text-[#c96442] hover:bg-[#f0eee6]"
              >
                Try Another Job ID
              </button>
            </div>
          );
        
          const currentStatusIndex = statusOrder.indexOf(status);
          if (currentStatusIndex === -1) return (
            <div className="text-center p-8" style={{ background: '#fdfaf4' }}>
              <p className="text-red-500">Invalid status: {status}</p>
              <button
                onClick={onReset}
                className="mt-4 px-4 py-2 rounded-lg font-medium text-[#c96442] hover:bg-[#f0eee6]"
              >
                Check Another Job
              </button>
            </div>
          );
        
          const stepsWithCompletion = visualSteps.map(step => ({
            ...step,
            completed: currentStatusIndex >= step.milestoneIndex,
          }));
        
          const activeStepIndex = stepsWithCompletion.findIndex(step => !step.completed);
        
          return (
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold" style={{ color: '#c96442' }}>
                  Job Status: {jobId}
                </h1>
                <button
                  onClick={onReset}
                  className="px-4 py-2 rounded-lg font-medium text-[#c96442] hover:bg-[#f0eee6]"
                >
                  Check Another Job
                </button>
              </div>
        
              {/* Progress Bar */}
              <div className="flex items-center justify-between mb-8">
                {stepsWithCompletion.map((step, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center z-10">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                        ${step.completed ? 'bg-[#c96442]' : 
                          (activeStepIndex === index ? 'bg-[#c96442]' : 'bg-[#f0eee6]')}`}>
                        {step.completed ? (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" 
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className={`text-sm ${activeStepIndex === index ? 
                            'text-white' : 'text-gray-600'}`}>
                            {index + 1}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm text-center text-gray-600">{step.title}</p>
                    </div>
                    
                    {index < stepsWithCompletion.length - 1 && (
                      <div className={`flex-1 h-1 ${stepsWithCompletion[index].completed ? 
                        'bg-[#c96442]' : 'bg-[#f0eee6]'}`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
        
              {/* Status Message */}
              <div className="p-4 rounded-lg" style={{ background: '#f0eee6' }}>
                <p className="text-center font-semibold" style={{ color: '#c96442' }}>
                  {getStatusMessage(status)}
                </p>
              </div>
            </div>
          );
        };
        
        const JobStatusTracker = () => {
          const [inputJobId, setInputJobId] = useState('');
          const [submittedJobId, setSubmittedJobId] = useState(null);
        
          const handleSubmit = (e) => {
            e.preventDefault();
            if (inputJobId.trim()) {
              setSubmittedJobId(inputJobId.trim());
            }
          };
        
          return (
            <div className="min-h-screen p-4" style={{ background: '#fdfaf4' }}>
              <div className="max-w-4xl mx-auto">
                {!submittedJobId ? (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: '#c96442' }}>
                      Track Job Status
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="jobId" className="block text-sm font-medium text-gray-700 mb-2">
                          Enter Job ID
                        </label>
                        <input
                          type="text"
                          id="jobId"
                          value={inputJobId}
                          onChange={(e) => setInputJobId(e.target.value)}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c96442] focus:border-[#c96442]"
                          placeholder="Enter your Job ID here"
                          autoComplete="off"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-lg font-medium text-white hover:opacity-90 transition-opacity"
                        style={{ background: '#c96442' }}
                      >
                        Track Now
                      </button>
                    </form>
                  </div>
                ) : (
                  <StatusDisplay 
                    jobId={submittedJobId} 
                    onReset={() => {
                      setSubmittedJobId(null);
                      setInputJobId('');
                    }}
                  />
                )}
              </div>
            </div>
          );
        };
        
        export default JobStatusTracker;