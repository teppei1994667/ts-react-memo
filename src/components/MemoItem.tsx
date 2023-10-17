import { Button, Grid, Typography } from "@mui/material";
import { Dispatch } from "react";

export type MemoItemProps = {
  memoItem: string;
  memoIndex: number;
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const MemoItem = (props: MemoItemProps) => {
  const { memoItem, memoIndex, setMemoArray } = props;
  const memoItemId = `memoDel${memoIndex}`;
  const memoDelOnClick = (memoIndex: number) => {
    console.log("memoIndex", memoIndex);
    setMemoArray((prev) => prev.splice(memoIndex, 1));
  };
  return (
    <>
      <Grid container justifyContent="center" sx={{ marginTop: "20px" }}>
        <Grid item>
          <Typography variant="h6">{memoItem}</Typography>
        </Grid>
        <Grid item sx={{ marginLeft: "20px" }}>
          <Button
            id={memoItemId}
            variant="outlined"
            onClick={() => memoDelOnClick(memoIndex)}
          >
            削除
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
