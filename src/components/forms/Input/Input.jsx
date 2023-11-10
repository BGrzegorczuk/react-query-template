import React, {useEffect, useRef} from 'react';

const Input = ({ value, onChange }) => {

    const ref = useRef(null);

    const handleInputChange = (e) => {
        onChange(e.target.value);
    };

    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <input
          ref={ref}
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="Enter text..."
            // You can add additional attributes as needed
        />
    );
};

export default Input;