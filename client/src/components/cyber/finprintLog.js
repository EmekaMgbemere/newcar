import React, { useState } from 'react';

const FingerprintLogin = () => {
  const [userId, setUserId] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = async () => {
    try {
      // Step 1: Get authentication options from the backend
      const optionsResponse = await fetch('/api/webauthn/login-options', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const options = await optionsResponse.json();

      // Step 2: Authenticate with WebAuthn API
      const credential = await navigator.credentials.get({ publicKey: options });

      // Step 3: Send the credential to the backend for verification
      const loginResponse = await fetch('/api/webauthn/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credential),
      });

      if (loginResponse.ok) {
        setStatus('Login successful!');
      } else {
        setStatus('Login failed.');
      }
    } catch (error) {
      setStatus('Error during login. Make sure your device supports WebAuthn.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login with Fingerprint</h2>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleLogin}>Login with Fingerprint</button>
      <p>{status}</p>
    </div>
  );
};

export default FingerprintLogin;