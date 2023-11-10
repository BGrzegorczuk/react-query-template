import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onChangePage }) => {
  const [inputPage, setInputPage] = useState('');

  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      onChangePage(pageNumber);
      setInputPage('');
    }
  };

  return (
    <div className="pagination-container">
      <button onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1} className="page-btn">
        Prev
      </button>
      <span className="page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={() => onChangePage(currentPage + 1)} disabled={currentPage === totalPages} className="page-btn">
        Next
      </button>
      <input
        type="number"
        value={inputPage}
        onChange={handleInputChange}
        placeholder="Go to page"
        className="page-input"
      />
      <button onClick={handleGoToPage} className="go-btn">
        Go
      </button>
    </div>
  );
};

export default Pagination;
