import React, { useState } from "react";
import { useField } from "formik";
import {
  IconButton,
  InputAdornment,
  InputBaseComponentProps,
  TextField as MaterialTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

type TextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: string;
  type?: MuiTextFieldProps["type"];
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  autoFocus?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  inputRef?: React.Ref<any>;
  inputProps?: InputBaseComponentProps | undefined;
};

const TextField: React.FC<TextFieldProps> = ({
  name,
  label,
  placeholder,
  multiline,
  rows,
  type,
  startAdornment,
  endAdornment,
  autoFocus,
  disabled,
  autoComplete,
  inputRef,
  inputProps,
}) => {
  const [field, meta] = useField(name);

  return (
    <MaterialTextField
      inputProps={inputProps}
      inputRef={inputRef}
      fullWidth={true}
      id={name}
      name={name}
      label={label}
      value={field.value}
      onChange={field.onChange}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
      // for textarea
      multiline={multiline}
      rows={rows}
      type={type}
      InputProps={{
        inputProps: {
          sx: endAdornment
            ? {
                borderTopRightRadius: "0 !important",
                borderBottomRightRadius: "0 !important",
              }
            : undefined,
        },
        startAdornment: startAdornment ? (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ) : undefined,
        endAdornment: endAdornment ? (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ) : undefined,
      }}
      variant="outlined"
      autoFocus={autoFocus}
      disabled={disabled}
      autoComplete={autoComplete}
      placeholder={placeholder}
    />
  );
};

const PasswordField: React.FC<Omit<TextFieldProps, "type" | "endAdornment">> = (
  props
) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prevState) => !prevState);

  const endAdornment = (
    <IconButton onClick={toggleShowPassword}>
      {showPassword ? (
        <VisibilityOffIcon fontSize="small" />
      ) : (
        <VisibilityIcon fontSize="small" />
      )}
    </IconButton>
  );

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      endAdornment={endAdornment}
    />
  );
};

const HiddenField: React.FC<TextFieldProps> = (props) => {
  return (
    <div style={{ display: "none" }}>
      <TextField {...props} />
    </div>
  );
};
export { PasswordField, HiddenField };
export type { TextFieldProps };
export default TextField;
