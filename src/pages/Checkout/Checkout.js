import { useSelector } from "react-redux";
import { CheckoutMessage, CheckoutReference } from "./Checkout.styles";


export const Checkout = () => {
	const checkout = useSelector((state) => state.checkout);

	return (
		<>
			{checkout.error ? (
				<CheckoutMessage>{checkout.result}</CheckoutMessage>
			) : (
				<>
					<CheckoutMessage>{checkout.result.message}</CheckoutMessage>
					<CheckoutReference>Your purchase reference is: {checkout.result.order}</CheckoutReference>
				</>
			)}
		</>
	);
};
