import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export function createAppThunk<TResult, TPayload>(opts: {
  name: string;
  asyncFn: AsyncThunkPayloadCreator<TResult, TPayload, { state: RootState }>;
}) {
  return createAsyncThunk<TResult, TPayload, { state: RootState }>(
    opts.name,
    async (payload, thunkApi) => {
      try {
        return (await opts.asyncFn(payload, thunkApi)) as any;
      } catch (err) {
        return thunkApi.rejectWithValue(err);
      }
    }
  );
}
