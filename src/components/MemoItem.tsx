import { Button, Grid, Typography } from "@mui/material";

export const MemoItem = () => {
  return (
    <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
      <Grid item>
        <Typography variant="h6">test</Typography>
      </Grid>
      <Grid item sx={{ marginLeft: "20px" }}>
        <Button variant="outlined">削除</Button>
      </Grid>
    </Grid>
  );
};
