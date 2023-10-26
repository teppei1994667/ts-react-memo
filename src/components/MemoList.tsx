import { Box, Grid, Paper, Typography } from "@mui/material";
import { MemoItem } from "./MemoItem";
import { useContext } from "react";
import { memoContext } from "../context/memoContext";

export const MemoList = () => {
  const { memoArray } = useContext(memoContext);
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
            <MemoItem memoItem={memoItem} memoIndex={index} />
          </Box>
        ))}
      </Paper>
    </>
  );
};
