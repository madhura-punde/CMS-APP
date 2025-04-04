import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ComplainantDetails.css';
import ProgressBar from '../ProgressBar/ProgressBar';
import Header from '../Header/Header';
const ComplainantDetails = () => {
  const navigate = useNavigate();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [formData, setFormData] = useState({
    organizationName: '',
    organizationType: '',
    organizationRole: '',
    title: '',
    firstName: '',
    middleInitial: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    zipExt: '',
    email: '',
    phone: '',
    phoneExt: '',
    cellPhone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="complainant-details-section">
      <Header />  
      <ProgressBar activeStep={1} />
      
      <h1 className="section-title">Complainant Details</h1>
      
      <div className="anonymous-section">
        <div className="anonymous-content">
          <h6 className="anonymous-question">Do you want to remain anonymous during this process?*</h6>
          <h4 className='disclaimer-title'>Disclaimer:</h4>
          <div className="disclaimer">
            
            If you select yes, CMS will not share your information with the Filed Against Entity (FAE) during the investigation process. However, information provided in the complaint is subject to rules and policies under the Freedom of Information Act (FOIA).
          </div>
        </div>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="anonymous"
              value="yes"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(true)}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="anonymous"
              value="no"
              checked={!isAnonymous}
              onChange={() => setIsAnonymous(false)}
            />
            No
          </label>
        </div>
      </div>

      {!isAnonymous && (
        <div className="form-content">
          <div className="form-group">
            <label className="required">Complainant Organization Name</label>
            <div className="input-container">
              <input
                type="text"
                name="organizationName"
                value={formData.organizationName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Complainant Organization Type</label>
            <div className="input-container">
              <select
                name="organizationType"
                value={formData.organizationType}
                onChange={handleInputChange}
              >
                <option value="">--None--</option>
                <option value="healthcare">Healthcare Provider</option>
                <option value="insurance">Insurance Company</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Complainant Organization Role</label>
            <div className="input-container">
              <input
                type="text"
                name="organizationRole"
                value={formData.organizationRole}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Complainant Title</label>
            <div className="input-container">
              <select
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              >
                <option value="">--None--</option>
                <option value="mr">Mr.</option>
                <option value="mrs">Mrs.</option>
                <option value="ms">Ms.</option>
                <option value="dr">Dr.</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant First Name</label>
            <div className="input-container">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Complainant MI</label>
            <div className="input-container">
              <input
                type="text"
                name="middleInitial"
                maxLength="1"
                value={formData.middleInitial}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant Last Name</label>
            <div className="input-container">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant Address Line 1</label>
            <div className="input-container">
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Complainant Address Line 2</label>
            <div className="input-container">
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant City/Town</label>
            <div className="input-container">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant State/Territory</label>
            <div className="input-container">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
              >
                <option value="">--None--</option>
                {/* Add state options here */}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant Zip Code</label>
            <div className="input-container">
              <div className="zip-group">
                <input
                  type="text"
                  name="zipCode"
                  placeholder="55555"
                  maxLength="5"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="zipExt"
                  placeholder="Ext."
                  maxLength="4"
                  value={formData.zipExt}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant Email Address</label>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder="example@demo.com"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="required">Complainant Contact Phone Number</label>
            <div className="input-container">
              <div className="phone-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="(xxx) xxx-xxxx"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phoneExt"
                  placeholder="Ext."
                  value={formData.phoneExt}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Complainant Cell Phone Number</label>
            <div className="input-container">
              <input
                type="text"
                name="cellPhone"
                placeholder="(xxx) xxx-xxxx"
                value={formData.cellPhone}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}

      <div className="form-actions">
        <button className="btn-primary" onClick={() => navigate('/')}>
          &lt; Specify Complaint Type
        </button>
        <button className="btn-primary" onClick={() => navigate('/')}>
          Cancel
        </button>
        <button className="btn-primary" onClick={() => navigate('/fae-details')}>
          Filed Against Entity Information &gt;
        </button>
      </div>
    </div>
  );
};

export default ComplainantDetails; 