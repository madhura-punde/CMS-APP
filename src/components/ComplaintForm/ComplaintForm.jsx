import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
import './ComplaintForm.css';

const ComplaintForm = () => {
  const navigate = useNavigate();
  const [selectedComplaintType, setSelectedComplaintType] = useState('');


  const complaintTypes = [
    {
      id: 'transactions',
      label: 'Transactions',
      description: 'Select if a covered entity is in violation of the following transactions: claims and encounter information, payment and remittance advice, claims status, eligibility, enrollment and disenrollment, referrals and authorizations, coordination of benefits and premium payment.'
    },
    {
      id: 'codeSets',
      label: 'Code Sets',
      description: 'Select if a covered entity is in violation of the following Code Sets: HCPCS (Ancillary Services/Procedures), CPT-4 (Physicians Procedures), CDT (Dental Terminology), ICD-9 (Diagnosis and Hospital Inpatient Procedures), ICD-10 (As of October 1, 2015) and NDC (National Drug Codes) codes with which providers and health plan are familiar, are the adopted code sets for procedures, diagnoses, and drugs.'
    },
    {
      id: 'uniqueIdentifiers',
      label: 'Unique Identifiers',
      description: 'Select if a covered entity is in violation of the following Unique Identifiers: National Provider Identifier (NPI), Employer Identification Number (EIN).'
    },
    {
      id: 'operatingRules',
      label: 'Operating Rules',
      description: 'Select if a covered entity is suspected of being in violation of any of the adopted Operating Rules: Electronic Funds Transfer/Electronic Remittance Advice (EFT/ERA), Health Care Claim Status, and Eligibility for a Health Plan.'
    }
  ];

  const handleComplainantInfo = () => {
    if (selectedComplaintType) {
      navigate('/complainant-details');
    } else {
      alert('Please select a complaint type before proceeding.');
    }
  };

  return (
    <div className="complaint-form-container">
      <Header />
      <ProgressBar activeStep={0} />
      <main className="form-content">
      
        <section className="complaint-type-section">
          <h1>Complaint Type</h1>
          <h1>Make a selection below</h1>

          <form className="complaint-options">
            {complaintTypes.map((type) => (
              <div key={type.id} className="complaint-option">
                <input
                  type="radio"
                  id={type.id}
                  name="complaintType"
                  value={type.id}
                  checked={selectedComplaintType === type.id}
                  onChange={(e) => setSelectedComplaintType(e.target.value)}
                />
                <div className="option-content">
                  <label htmlFor={type.id}>{type.label}</label>
                  <p>{type.description}</p>
                </div>
              </div>
            ))}
          </form>

          <div className="form-actions">
            <button className="btn-primary">{'<Welcome'}</button>
            <button className="btn-primary">Cancel</button>
            <button className="btn-primary" onClick={handleComplainantInfo}>Complainant Information{'>'}</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ComplaintForm; 