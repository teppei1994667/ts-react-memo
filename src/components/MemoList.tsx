import { Grid, Paper, Typography } from "@mui/material";
import { MemoItem } from "./MemoItem";

export type MemoListfProps = {
  memoItemArray: string[];
};

export const MemoList = (props: MemoListfProps) => {
  return (
    <>
      <Paper
        elevation={0}
        sx={{
          border: 1,
          borderColor: "gray",
          width: "90vw",
          height: "50vh",
        }}
      >
        <Grid container justifyContent="center" sx={{ paddingTop: "20px" }}>
          <Grid item>
            <Typography variant="h5">メモ一覧</Typography>
          </Grid>
        </Grid>
        <MemoItem memoItemArray={props.memoItemArray} />
      </Paper>
    </>
  );
};
