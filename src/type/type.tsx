import { Dispatch, SetStateAction } from "react";

export type memoContextType = {
  memoArray: string[];
  setMemoArray: Dispatch<SetStateAction<string[]>>;
};

export type memoInput = {
  memo: string;
};

export type MemoItemProps = {
  memoItem: string;
  memoIndex: number;
};

export type MemoEditDialogProps = {
  memoEditDialogOpen: boolean;
  memoEdtOnClose: () => void;
  memoIndex: number;
  setMemoEditDialogOpen: Dispatch<SetStateAction<boolean>>;
};

export type memoEdit = {
  memoEdt: string;
};
