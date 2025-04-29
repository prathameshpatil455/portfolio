/* eslint-disable react/prop-types */
import React, { useState, ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface TextAreaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows: number;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  className?: string;
  disabled?: boolean;
  isDarkMode: boolean;
}

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  rows,
  placeholder,
  required = false,
  maxLength = 400,
  className = "",
  disabled = false,
  isDarkMode,
}: TextAreaInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative flex flex-col flex-wrap w-full">
      <TextField
        label={
          <>
            {label} {required ? <span className="text-red-500">*</span> : null}
          </>
        }
        name={name}
        value={value}
        onChange={onChange}
        onBlur={(e) => {
          onBlur(e);
          setIsFocused(false);
        }}
        placeholder={placeholder}
        multiline
        rows={rows}
        variant="outlined"
        fullWidth
        onFocus={() => setIsFocused(true)}
        InputLabelProps={{
          shrink: value ? true : undefined,
          style: {
            color: disabled
              ? isDarkMode
                ? "rgba(255, 255, 255, 0.5)"
                : "rgba(0, 0, 0, 0.5)"
              : isDarkMode
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(0, 0, 0, 0.7)",
          },
        }}
        InputProps={{
          style: {
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode
              ? "rgba(31, 41, 55, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          },
          className: `${disabled ? "bg-gray-100" : ""} ${
            isFocused
              ? isDarkMode
                ? "border-blue-400"
                : "border-blue-500"
              : ""
          }`,
        }}
        className={`w-full ${className} ${
          isDarkMode
            ? "text-white border border-gray-700"
            : "text-gray-900 border-2 border-gray-300"
        }`}
        disabled={disabled}
        inputProps={{
          maxLength: maxLength,
        }}
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: isDarkMode
                ? "rgba(255, 255, 255, 0.2)"
                : "rgba(0, 0, 0, 0.3)",
              borderWidth: isDarkMode ? "1px" : "2px",
            },
            "&:hover fieldset": {
              borderColor: isDarkMode
                ? "rgba(59, 130, 246, 0.5)"
                : "rgba(59, 130, 246, 0.7)",
              borderWidth: isDarkMode ? "1px" : "2px",
            },
            "&.Mui-focused fieldset": {
              borderColor: isDarkMode
                ? "rgb(59, 130, 246)"
                : "rgb(59, 130, 246)",
              borderWidth: isDarkMode ? "1px" : "2px",
            },
          },
        }}
      />
    </div>
  );
};

export default TextAreaInput;
