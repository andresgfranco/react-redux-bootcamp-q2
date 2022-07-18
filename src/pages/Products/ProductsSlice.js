import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/products', {
        method: "GET",
        headers: {
          accept: "application/json",
          "x-api-key": 'UDrVR4Qmsr9DscF3bucak38XgiFGl46T7fAtnqFq',
        },
      });
      return await response.json();
    } catch (error) {
      return rejectWithValue(error)
    }
	}
);

const productsSlice = createSlice({
	name: "products",
	initialState: {
    products: {},
    loading: false,
    error: false,
  },
	extraReducers: (builder) => {
		builder.addCase(fetchProducts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(fetchProducts.rejected, (state, action) => {
			state.loading = false;
			state.error = true;
		});
	},
});

export default productsSlice.reducer;