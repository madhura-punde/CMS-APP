import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ activeStep }) => {

  const progressSteps = [
    'Complaint Type',
    'Complainant Details',
    'FAE Details',
    'Complaint Details',
    'Review Complaint',
    'Submitted'
  ];

  const getStepClass = (index) => {
    if (index < activeStep) return 'completed';
    if (index === activeStep) return 'active';
    return '';
  };

  return (
    <div className="form-progress">
      {progressSteps.map((step, index) => (
        <div 
          key={index} 
          className={`progress-step ${getStepClass(index)}`}
        >
          <span>{step}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar; 