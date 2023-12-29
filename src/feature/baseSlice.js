import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const namespace = "baseSlice";

const initialState = {
  data: {},
};

// export const someThing = createAsyncThunk(
//   `${namespace}/something`,
//   async (obj, { rejectWithValue }) => {
//     return await cashierService
//       .someThing(obj)
//       .then((response) => {
//         return response.data;
//       })
//       .catch((error) => {
//         return rejectWithValue(error);
//       });
//   },
// );

const baseSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {},
  extraReducers(builder) {
    // builder
    //   .addCase(someThing.pending, (state) => {
    //     state.status = HTTP_STATUS.PENDING;
    //   })
    //   .addCase(someThing.fulfilled, (state) => {
    //     state.status = HTTP_STATUS.FULFILLED;
    //   })
    //   .addCase(someThing.rejected, (state, { payload }) => {
    //     state.status = HTTP_STATUS.REJECTED;
    //     if (payload.response) {
    //       state.errorMessage = payload.response.statusText;
    //       state.errorStatus = payload.response.status;
    //     }
    //   });
  },
});

const { reducer, actions } = baseSlice;

export const {} = actions;

export default reducer;
