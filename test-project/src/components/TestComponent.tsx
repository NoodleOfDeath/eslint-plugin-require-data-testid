import React from 'react';

interface TestComponentProps {
  onSubmit?: () => void;
  onCancel?: () => void;
}

const TestComponent: React.FC<TestComponentProps> = ({ onSubmit, onCancel }) => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="test-component">
      <h2>Test Component with Buttons</h2>
      
      {/* This button should trigger an ESLint error - missing data-testid */}
      <button data-testid="70cf5704-02bf-53e7-bc96-59f563e8697a" 
        type="button" 
        onClick={handleClick}
        className="primary-button"
      >
        Click Me (No Test ID)
      </button>

      {/* This button should be fine - has data-testid */}
      <button 
        data-testid="valid-button"
        type="button" 
        onClick={handleClick}
        className="secondary-button"
      >
        Valid Button
      </button>

      {/* Another button without data-testid - should trigger error */}
      <button data-testid="8cf08aa4-e31b-5209-804c-986480655672" 
        type="submit" 
        onClick={onSubmit}
        disabled={false}
      >
        Submit Form
      </button>

      {/* Composite example with conditional rendering */}
      <div className="button-group">
        {onCancel && (
          <button data-testid="35ed2fbc-4534-5f42-ac92-5e48117b0859" onClick={onCancel}>
            Cancel (Missing Test ID)
          </button>
        )}
        
        <button 
          data-testid="confirm-action-btn"
          onClick={() => console.log('Confirmed')}
          style={{ marginLeft: '10px' }}
        >
          Confirm Action
        </button>
      </div>

      {/* Button with dynamic attributes but missing data-testid */}
      <button data-testid="511db516-8b68-5986-8fbb-936dd82bf48f" 
        type="button"
        onClick={() => handleClick()}
        aria-label="Dynamic button"
        {...{ className: 'dynamic-class' }}
      >
        Dynamic Button
      </button>
    </div>
  );
};

export default TestComponent;