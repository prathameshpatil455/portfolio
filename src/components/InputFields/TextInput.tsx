/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, ChangeEvent, KeyboardEvent, WheelEvent } from "react";
import { TextField } from "@mui/material";

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
  maxLength?: number;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  max?: number;
  isDarkMode: boolean;
}

const TextInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  type = "text",
  maxLength = 50,
  checked = false,
  className = "",
  disabled = false,
  max,
  isDarkMode,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length <= maxLength) {
      onChange(event);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    onBlur(e);
    setIsFocused(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (type === "number") {
      const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight"];
      const key = e.key;

      if (!allowedKeys.includes(e.code) && isNaN(Number(key)) && key !== " ") {
        e.preventDefault();
      }
    }
  };

  const handleWheel = (event: WheelEvent<HTMLInputElement>) => {
    if (event.currentTarget.type === "number") {
      event.currentTarget.blur();
      setTimeout(() => event.currentTarget.focus(), 0);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative flex flex-col flex-wrap w-full">
      <TextField
        label={
          <>
            {label} {required ? <span className="text-red-500">*</span> : null}
          </>
        }
        type={type === "password" && showPassword ? "text" : type}
        value={value || ""}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        placeholder={type === "date" && !isFocused ? "" : placeholder}
        InputLabelProps={{
          shrink: type === "date" || value ? true : undefined,
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
          inputProps: {
            max,
            checked,
            pattern: type === "number" ? "[0-9]*" : undefined,
            style: type === "number" ? { MozAppearance: "textfield" } : {},
            inputMode: type === "number" ? "numeric" : undefined,
            onWheel: handleWheel,
          },
          className: `${disabled ? "bg-gray-100" : ""} ${
            isFocused
              ? isDarkMode
                ? "border-blue-400"
                : "border-blue-500"
              : ""
          }`,
          style: {
            color: isDarkMode ? "white" : "black",
            backgroundColor: isDarkMode
              ? "rgba(31, 41, 55, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
          },
        }}
        className={`w-full ${className} ${
          isDarkMode
            ? "text-white border border-gray-700"
            : "text-gray-900 border-2 border-gray-300"
        }`}
        disabled={disabled}
        variant="outlined"
        size="medium"
        fullWidth
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
      {type === "password" && (
        <span
          className="absolute right-3 top-7 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <span
            className={`material-symbols-outlined h-6 w-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        </span>
      )}
    </div>
  );
};

export default TextInput;
