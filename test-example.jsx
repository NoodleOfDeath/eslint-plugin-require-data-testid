// Test file to verify the ESLint plugin works
import React from 'react';

function TestComponent() {
  return (
    <div>
      {/* This should trigger an error */}
      <button data-testid="78b7ddfa-f92d-53d6-8edc-967cf00a1722" onClick={() => console.log('clicked')}>
        Bad Button
      </button>
      
      {/* This should be fine */}
      <button data-testid="good-button" onClick={() => console.log('clicked')}>
        Good Button
      </button>
      
      {/* This should also trigger an error */}
      <button data-testid="6ff26fee-bc52-5ae1-ba6a-b433a22b36b1" type="submit">Submit</button>
      
      {/* This should be fine */}
      <button data-testid="submit-btn" type="submit">Submit</button>
    </div>
  );
}