import { Button, Grid, TextField } from "@mui/material";

export const InputMemo = () => {
  return (
    <Grid container>
      <Grid item sx={{ width: "500px" }}>
        <TextField fullWidth label="メモ" variant="outlined" />
      </Grid>
      <Grid
        item
        sx={{ marginLeft: "50px", display: "flex", alignItems: "center" }}
      >
        <Button variant="outlined">追加</Button>
      </Grid>
    </Grid>
  );
};
