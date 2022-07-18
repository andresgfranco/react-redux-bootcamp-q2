import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const checkoutProducts = createAsyncThunk(
	"checkout/checkoutProducts",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch('https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/orders', {
				method: "POST",
				headers: {
					accept: "application/json",
					"x-api-key": 'UDrVR4Qmsr9DscF3bucak38XgiFGl46T7fAtnqFq',
				},
			});

			return await response.json();
		} catch (err) {
			return rejectWithValue(err);
		}
	}
);

const checkoutSlice = createSlice({
	name: "checkout",
	initialState:  {
    result: {},
    loading: false,
    error: false,
  },
	extraReducers: (builder) => {
		builder.addCase(checkoutProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(checkoutProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.result = action.payload;
		});
		builder.addCase(checkoutProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
			state.result = action.payload;
		});
	},
});

export default checkoutSlice.reducer;