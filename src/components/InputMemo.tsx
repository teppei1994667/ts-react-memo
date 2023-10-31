import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { memoInput } from "../type/type";
import { memoContext } from "../context/memoContext";

export const InputMemo = () => {
  const memoForm = useForm<memoInput>({
    defaultValues: { memo: "" },
  });

  const { memoArray, setMemoArray } = useContext(memoContext);

  // メモ追加ボタンのクリックイベント
  const addMemoOnClick = () => {
    setMemoArray([...memoArray, memoForm.getValues("memo")]);
    memoForm.reset();
  };

  console.log("エラー", memoForm.formState.errors.memo?.message);

  return (
    <Grid container>
      <Grid item sx={{ width: "400px" }}>
        <Controller
          name="memo"
          control={memoForm.control}
          rules={{
            required: "入力必須項目です",
          }}
          render={({ field, formState: { errors } }) => (
            <TextField
              {...field}
              fullWidth
              label="メモ"
              variant="outlined"
              error={!!errors.memo}
              helperText={errors.memo && errors.memo.message}
            />
          )}
        />
      </Grid>
      <Grid
        item
        sx={{ marginLeft: "50px", display: "flex", alignItems: "center" }}
      >
        <Button
          id="addMemo"
          variant="outlined"
          onClick={memoForm.handleSubmit(addMemoOnClick)}
        >
          追加
        </Button>
      </Grid>
    </Grid>
  );
};
