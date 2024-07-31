import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const TextAreaStyled = styled.textarea`
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 1.25rem;
  border-bottom: 1px solid ${props => props.error ? 'red' : '#9E9E9E'};
  line-height: 1.5;
  padding: 0;
  :hover {
    border-bottom: 1px solid ${props => props.error ? 'red' : '#fff'};
  }
  transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out, margin-top 0.4s ease-in-out;
  color: #fff;
  resize: none;
  overflow: hidden;
  font-family: "neue-haas-grotesk-display", sans-serif;
  font-weight: 450;
  &.has-text,
  &:focus {
    margin-top: 1rem;
  }

  &:focus {
    outline: none;
  }
`;

const TextArea = React.forwardRef((props, ref) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const resizeTextarea = (textarea) => {
      textarea.style.height = 'auto'; // Reset the height
      textarea.style.height = `${textarea.scrollHeight}px`; // Set the height to the scroll height
    };

    const handleInput = () => {
      if (textareaRef.current) {
        resizeTextarea(textareaRef.current);
        if (textareaRef.current.value) {
          textareaRef.current.classList.add('has-text');
        } else {
          textareaRef.current.classList.remove('has-text');
        }
      }
    };

    const handleFocus = () => {
      if (textareaRef.current) {
        textareaRef.current.classList.add('has-text');
      }
    };

    const handleBlur = () => {
      if (textareaRef.current && !textareaRef.current.value) {
        textareaRef.current.classList.remove('has-text');
      }
    };

    if (textareaRef.current) {
      resizeTextarea(textareaRef.current); // Initial resize
      textareaRef.current.addEventListener('input', handleInput);
      textareaRef.current.addEventListener('focus', handleFocus);
      textareaRef.current.addEventListener('blur', handleBlur);
      
      // Add has-text class if textarea has initial value
      if (textareaRef.current.value) {
        textareaRef.current.classList.add('has-text');
      }
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener('input', handleInput);
        textareaRef.current.removeEventListener('focus', handleFocus);
        textareaRef.current.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return <TextAreaStyled ref={(el) => { textareaRef.current = el; if (typeof ref === 'function') ref(el); else if (ref) ref.current = el; }} {...props} />;
});

export default TextArea;
