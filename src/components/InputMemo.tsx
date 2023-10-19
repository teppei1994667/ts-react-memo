import { Button, Grid, TextField } from "@mui/material";
import { Dispatch, useState } from "react";

export type InputMemoProps = {
  memoItemArray: string[];
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const InputMemo = (props: InputMemoProps) => {
  const { memoItemArray, setMemoArray } = props;

  const [inputMemoText, setInputMemoText] = useState("");

  // メモ入力フィールドのチェンジイベント
  const inputMemoOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMemoText(event.target.value);
  };

  // メモ追加ボタンのクリックイベント
  const addMemoOnClick = () => {
    setMemoArray([...memoItemArray, inputMemoText]);
    setInputMemoText("");
  };

  return (
    <Grid container>
      <Grid item sx={{ width: "500px" }}>
        <TextField
          value={inputMemoText}
          fullWidth
          label="メモ"
          variant="outlined"
          onChange={inputMemoOnChange}
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
