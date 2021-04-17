import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useMemo } from "react";
import useResponsiveFontSize from "./useResponsiveFontSize";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({ setPaymentStatus }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      setPaymentStatus({
        status: false,
        message: error.message,
      });
      console.error(error.message);
    } else {
      setPaymentStatus({
        status: true,
        message: "Payment successfully",
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Card number</label>
        <CardNumberElement className="form-control" options={options} />
      </div>
      <div className="mb-3">
        <label className="form-label">Expiration date</label>
        <CardExpiryElement className="form-control" options={options} />
      </div>

      <div className="mb-3">
        <label className="form-label">CVC</label>
        <CardCvcElement className="form-control" options={options} />
      </div>

      <button className="btn btn-danger" type="submit" disabled={!stripe}>
        Confirm Payment
      </button>
    </form>
  );
};

export default SplitForm;
