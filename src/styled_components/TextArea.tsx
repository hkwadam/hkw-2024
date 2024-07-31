import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const TextAreaStyled = styled.textarea`
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.25rem;
  border-bottom: 1px solid ${props => props.error ? 'red' : '#9E9E9E'};
  line-height: 1.5;  /* Consistent line height */
  height: 1.5rem;  /* Initial height to match one line of text */
  padding: 0;
  :hover {
    border-bottom: 1px solid ${props => props.error ? 'red' : '#fff'};
  }
  transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out, margin-top 0.4s ease-in-out;
  color: #fff;
  &:focus {
    outline: none;
    margin-top: 1rem; /* Add top margin when textarea is focused */
  }
  resize: none;
  overflow: hidden;
`;

const TextArea = ({ error, ...props }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const resizeTextarea = (textarea) => {
      textarea.style.height = 'auto'; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    };

    const handleInput = () => {
      if (textareaRef.current) {
        resizeTextarea(textareaRef.current);
      }
    };

    if (textareaRef.current) {
      resizeTextarea(textareaRef.current); // Initial resize
      textareaRef.current.addEventListener('input', handleInput);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('input', handleInput);
      }
    };
  }, []);

  return <TextAreaStyled ref={textareaRef} error={error} {...props} />;
};

export default TextArea;
