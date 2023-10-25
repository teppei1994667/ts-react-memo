import { Button, Grid, TextField } from "@mui/material";
import { Dispatch } from "react";
import { Controller, useForm } from "react-hook-form";

type memoInput = {
  memo: string;
};

export type InputMemoProps = {
  memoArray: string[];
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const InputMemo = (props: InputMemoProps) => {
  const { control, getValues, reset } = useForm<memoInput>({
    defaultValues: { memo: "" },
  });

  const { memoArray, setMemoArray } = props;

  // メモ追加ボタンのクリックイベント
  const addMemoOnClick = () => {
    setMemoArray([...memoArray, getValues("memo")]);
    reset();
  };

  return (
    <Grid container>
      <Grid item sx={{ width: "400px" }}>
        <Controller
          name="memo"
          control={control}
          render={({ field }) => (
            <TextField {...field} fullWidth label="メモ" variant="outlined" />
          )}
        />
      </Grid>
      <Grid
        item
        sx={{ marginLeft: "50px", display: "flex", alignItems: "center" }}
      >
        <Button id="addMemo" variant="outlined" onClick={addMemoOnClick}>
          追加
        </Button>
      </Grid>
    </Grid>
  );
};
