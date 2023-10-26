import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { MemoEditDialogProps, memoEdit } from "../type/type";
import { memoContext } from "../context/memoContext";

export const MemoEditDialog = (props: MemoEditDialogProps) => {
  const {
    memoEditDialogOpen,
    memoEdtOnClose,
    memoIndex,
    setMemoEditDialogOpen,
  } = props;

  const { memoArray, setMemoArray } = useContext(memoContext);

  const { control, getValues, setValue } = useForm<memoEdit>({
    defaultValues: { memoEdt: memoArray[memoIndex] },
  });

  useEffect(() => {
    setValue("memoEdt", memoArray[memoIndex]);
  }, [memoArray]);

  //メモ編集ボタンのクリックイベント
  const editMemoOnClick = (memoIndex: number) => {
    const newMemos = [...memoArray];
    newMemos.splice(memoIndex, 1, getValues("memoEdt"));
    setMemoArray(newMemos);
    setMemoEditDialogOpen(false);
  };

  return (
    <>
      <Dialog open={memoEditDialogOpen} onClose={memoEdtOnClose}>
        <DialogTitle>メモ編集</DialogTitle>
        <DialogContent>
          <Grid container alignItems="center">
            <Grid item sx={{ width: "400px" }}>
              <Controller
                name="memoEdt"
                control={control}
                render={({ field }) => (
                  <TextField {...field} fullWidth variant="outlined" />
                )}
              />
            </Grid>
            <Grid item sx={{ marginLeft: "20px" }}>
              <Button
                id="editMemo"
                variant="outlined"
                onClick={() => editMemoOnClick(memoIndex)}
              >
                変更
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
