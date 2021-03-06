import "./Input.css";
import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { enterWord } from "../../state/action-creators";
import { useCallback } from "react";
import { useDebounce } from "../../utils/hooks/useDebounce";

interface InputProps {
  placeholder: string;
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, label, name }) => {
  const [input, setInput] = useState("");
  const debouncedSearchTerm: string = useDebounce<string>(input, 500);

  const dispatch = useDispatch();

  const submitWord = useCallback(
    () => dispatch(enterWord(debouncedSearchTerm)),
    [dispatch, debouncedSearchTerm]
  );

  useEffect(() => {
    submitWord();
  }, [debouncedSearchTerm, submitWord]);

  const onChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInput(event.target.value);
  };

  return (
    <div className="inputWrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        className="input"
        value={input}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
