import React from 'react';
import './QuoteSection.css';

function QuoteSection() {
  return (
    <>
      <div className="quote-container">
        <div className="quote">
          <h2 className="quote-text">
            "Hvaing placeat facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Temporibus autem quibusdam et aut officiis
            debitis aut rerum”
          </h2>
          <p className="guote-by">John Doe, Google Inc.</p>
        </div>
      </div>
    </>
  );
}

export default QuoteSection;
