import { Button, Grid, Typography } from "@mui/material";
import { Dispatch, useState } from "react";
import { MemoEditDialog } from "./MemoEditDialog";

export type MemoItemProps = {
  memoItem: string;
  memoIndex: number;
  memoArray: string[];
  setMemoArray: Dispatch<React.SetStateAction<string[]>>;
};

export const MemoItem = (props: MemoItemProps) => {
  const { memoItem, memoIndex, memoArray, setMemoArray } = props;

  const [memoEditDialogOpen, setMemoEditDialogOpen] = useState(false);

  // 削除ボタンのIDを動的に生成
  const DelBtnId = `memoDel${memoIndex}`;
  const EdtBtnId = `memoEdt${memoIndex}`;

  //編集ボタンのクリックイベント
  const memoEdtOnClick = () => {
    setMemoEditDialogOpen(true);
  };

  //MemoEditDialogクローズイベント
  const memoEdtOnClose = () => {
    setMemoEditDialogOpen(false);
  };

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
          <Button id={EdtBtnId} variant="outlined" onClick={memoEdtOnClick}>
            編集
          </Button>
        </Grid>
        <Grid item sx={{ marginLeft: "20px" }}>
          <Button
            id={DelBtnId}
            variant="outlined"
            onClick={() => memoDelOnClick(memoIndex)}
          >
            削除
          </Button>
        </Grid>
      </Grid>
      <MemoEditDialog
        memoEditDialogOpen={memoEditDialogOpen}
        memoEdtOnClose={memoEdtOnClose}
        memoArray={memoArray}
        setMemoArray={setMemoArray}
        memoIndex={memoIndex}
        setMemoEditDialogOpen={setMemoEditDialogOpen}
      />
    </>
  );
};
