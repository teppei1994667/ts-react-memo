import { Box, Grid, Paper, Typography } from "@mui/material";
import { MemoItem } from "./MemoItem";
import { Dispatch } from "react";

export type MemoListfProps = {
  memoArray: string[];
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const MemoList = (props: MemoListfProps) => {
  const { memoArray, setMemoArray } = props;
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
        {memoArray.map((memoItem, index) => (
          <Box key={index}>
            <MemoItem
              memoItem={memoItem}
              memoArray={memoArray}
              setMemoArray={setMemoArray}
              memoIndex={index}
            />
          </Box>
        ))}
      </Paper>
    </>
  );
};
