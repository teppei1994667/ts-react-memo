import { Grid, Typography } from "@mui/material";
import { InputMemo } from "./components/InputMemo";
import { MemoList } from "./components/MemoList";

export const App = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h3">簡単メモアプリ</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
        <Grid item>
          <InputMemo />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "30px" }}>
        <Grid item>
          <MemoList />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
