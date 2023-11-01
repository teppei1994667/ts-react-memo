import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { MemoEditDialogProps, memoEdit } from "../type/type";
import { memoContext } from "../context/memoContext";
import { ControlledTextField } from "../share/ControlledTextField";

export const MemoEditDialog = (props: MemoEditDialogProps) => {
  const {
    memoEditDialogOpen,
    memoEdtOnClose,
    memoIndex,
    setMemoEditDialogOpen,
  } = props;

  const { memoArray, setMemoArray } = useContext(memoContext);

  const memoEdtForm = useForm<memoEdit>({
    defaultValues: { memoEdt: memoArray[memoIndex] },
  });

  //memoArrayの変更をformに適用
  useEffect(() => {
    memoEdtForm.setValue("memoEdt", memoArray[memoIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoArray]);

  //メモ編集ボタンのクリックイベント
  const editMemoOnClick = (memoIndex: number) => {
    const newMemos = [...memoArray];
    newMemos.splice(memoIndex, 1, memoEdtForm.getValues("memoEdt"));
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
              <FormProvider {...memoEdtForm}>
                <ControlledTextField fullWidth name="memoEdt" />
              </FormProvider>
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
