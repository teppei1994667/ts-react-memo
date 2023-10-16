import { Button, Grid, Typography } from "@mui/material";

export type MemoItemProps = {
  memoItemArray: string[];
};

export const MemoItem = (props: MemoItemProps) => {
  const { memoItemArray } = props;
  return (
    <>
      {memoItemArray.map((memoItem) => (
        <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
          <Grid item>
            <Typography variant="h6">{memoItem}</Typography>
          </Grid>
          <Grid item sx={{ marginLeft: "20px" }}>
            <Button variant="outlined">削除</Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};
