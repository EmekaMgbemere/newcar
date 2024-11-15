import React, { useState } from 'react';

const FingerprintRegistration = () => {
  const [userId, setUserId] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async () => {
    if (!userId) {
      setStatus('Please enter a User ID');
      return;
    }

    try {
      // Step 1: Get registration options from the backend
      const optionsResponse = await fetch('/api/webauthn/register-options', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const options = await optionsResponse.json();

      // Step 2: Create PublicKeyCredential
      const credential = await navigator.credentials.create({ publicKey: options });

      // Step 3: Send the credential to the backend for verification
      const registerResponse = await fetch('/api/webauthn/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credential),
      });

      if (registerResponse.ok) {
        setStatus('Fingerprint registered successfully!');
      } else {
        setStatus('Registration failed.');
      }
    } catch (error) {
      setStatus('Error during registration. Make sure your device supports WebAuthn.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Register Fingerprint</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleRegister}>Register Fingerprint</button>
      <p>{status}</p>
    </div>
  );
};

export default FingerprintRegistration;