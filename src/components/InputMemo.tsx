import { Button, Grid, TextField } from "@mui/material";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { memoInput } from "../type/type";
import { memoContext } from "../context/memoContext";
import { ControlledTextField } from "../share/ControlledTextField";

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
        <FormProvider {...memoForm}>
          <ControlledTextField fullWidth name="memo" />
        </FormProvider>
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
