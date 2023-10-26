import { Grid, Typography } from "@mui/material";
import { InputMemo } from "./components/InputMemo";
import { MemoList } from "./components/MemoList";
import { Dispatch, createContext, useState } from "react";
import { memoContextType } from "./type/type";

export const memoContext = createContext<memoContextType>(
  {} as {
    memoArray: string[];
    setMemoArray: Dispatch<React.SetStateAction<string[]>>;
  }
);

export const App = () => {
  const [memoArray, setMemoArray] = useState<string[]>([]);

  const contextValue = {
    memoArray,
    setMemoArray,
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item>
          <Typography variant="h3">簡単メモアプリ</Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
        <Grid item>
          <memoContext.Provider value={contextValue}>
            <InputMemo />
          </memoContext.Provider>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: "30px" }}>
        <Grid item>
          <memoContext.Provider value={contextValue}>
            <MemoList />
          </memoContext.Provider>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
