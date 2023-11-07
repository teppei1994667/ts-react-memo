import { TextField, TextFieldProps } from "@mui/material";
import { forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type ControlledTextFieldProps = Omit<TextFieldProps, "name"> & {
  name: string;
};

export const ControlledTextField = forwardRef(
  (props: ControlledTextFieldProps, ref: any) => {
    const { name, ...restProps } = props;
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
            error={!!errors.memo}
            helperText={errors.memo?.message as string}
            {...restProps}
          />
        )}
      />
    );
  }
);
