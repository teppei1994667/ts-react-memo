import { Button, Grid, Typography } from "@mui/material";
import { Dispatch } from "react";

export type MemoItemProps = {
  memoItem: string;
  memoIndex: number;
  memoArray: string[];
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const MemoItem = (props: MemoItemProps) => {
  const { memoItem, memoIndex, memoArray, setMemoArray } = props;

  // 削除ボタンのIDを動的に生成
  const memoItemId = `memoDel${memoIndex}`;

  // 削除ボタンのクリックイベント
  const memoDelOnClick = (memoIndex: number) => {
    const newMemos = [...memoArray];
    newMemos.splice(memoIndex, 1);
    setMemoArray(newMemos);
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
