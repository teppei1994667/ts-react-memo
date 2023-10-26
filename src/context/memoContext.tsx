import { Dispatch, SetStateAction, createContext } from "react";
import { memoContextType } from "../type/type";

export const memoContext = createContext<memoContextType>(
  {} as {
    memoArray: string[];
    setMemoArray: Dispatch<SetStateAction<string[]>>;
  }
);
