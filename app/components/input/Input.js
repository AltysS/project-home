import React, { useState, useRef } from "react";
import styles from "./input.module.scss";

const Input = ({ type, placeholder, onChange, required, name, value }) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const handleParagraphClick = () => {
    setFocused(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.container}>
      {!focused && !value && (
        <p onClick={handleParagraphClick}>
          {placeholder}
          {required && <span>*</span>}
        </p>
      )}
      <input
        ref={inputRef}
        className={styles.input}
        type={type}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
      />
    </div>
  );
};

export default Input;
