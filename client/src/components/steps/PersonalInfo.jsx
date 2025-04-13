import React from 'react';

const PersonalInfo = ({ data = {}, onChange, nextStep }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px' }}>Personal Information</h2>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="text"
          placeholder="Full Name"
          value={data.fullName || ''}
          onChange={(e) => onChange('fullName', e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <input
          type="email"
          placeholder="Email"
          value={data.email || ''}
          onChange={(e) => onChange('email', e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="tel"
          placeholder="Phone"
          value={data.phone || ''}
          onChange={(e) => onChange('phone', e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <button onClick={nextStep} style={{ padding: '8px 16px' }}>
        Next ➡
      </button>
    </div>
  );
};

export default PersonalInfo;
