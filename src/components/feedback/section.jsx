import React from 'react';
import './feedback.css';

const Section = ({ title, children }) => (
  <>
    <h1 className="feedback__text">{title}</h1>
    {children}
  </>
);
export default Section;
