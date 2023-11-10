import React from 'react';

const Input = ({ value, onChange }) => {
    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter text..."
            // You can add additional attributes as needed
        />
    );
};

export default Input;