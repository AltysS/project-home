import React, { useState, useRef } from "react";
import styles from "./textArea.module.scss";

const TextArea = ({ placeholder, height, onChange, required, name, value }) => {
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
      {!value && !focused && (
        <p onClick={handleParagraphClick}>
          {placeholder}
          {required && <span>*</span>}
        </p>
      )}
      <textarea
        ref={inputRef}
        style={{ height: height }}
        className={styles.input}
        onChange={(e) => onChange(name, e.target.value)}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
      />
    </div>
  );
};

export default TextArea;
