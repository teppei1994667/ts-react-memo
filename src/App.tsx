import { Grid, Typography } from "@mui/material";
import { InputMemo } from "./components/InputMemo";
import { MemoList } from "./components/MemoList";
import { useState } from "react";

export const App = () => {
  const [memoArray, setMemoArray] = useState<string[]>([]);
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h3">簡単メモアプリ</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
        <Grid item>
          <InputMemo memoArray={memoArray} setMemoArray={setMemoArray} />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "30px" }}>
        <Grid item>
          <MemoList memoArray={memoArray} setMemoArray={setMemoArray} />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
