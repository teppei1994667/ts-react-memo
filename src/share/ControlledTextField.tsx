import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export type ControlledTextFieldProps = Omit<TextFieldProps, "name"> & {
  name: string;
};

export const ControlledTextField = (props: ControlledTextFieldProps) => {
  const { fullWidth, label, variant, name } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: "入力必須項目です",
      }}
      render={({ field, formState: { errors } }) => (
        <TextField
          {...field}
          fullWidth={fullWidth}
          label={label}
          variant={variant}
          error={!!errors.memo}
          helperText={errors.memo?.message as string}
        />
      )}
    />
  );
};
