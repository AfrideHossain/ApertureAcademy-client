import { useLocation } from "react-router-dom";
import useContextHook from "../../hooks/useContextHook";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function Payment() {
  const { user } = useContextHook();
  const location = useLocation();
  const totalAmount = location.state.totalAmount;
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleSuccessfullPayment = async (paymentResult) => {
    try {
      console.log(paymentResult);
      setPaymentCompleted(true);
      alert(`Transaction successfully completed by ${paymentResult.payerID}.`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="space-y-2">
          <p className="text-3xl font-semibold text-center">
            Hello, {user.displayName}
          </p>
          <p className="text-lg font-medium text-center">
            You have total{" "}
            <span className="text-blue-600">{totalAmount} USD</span> to pay.
          </p>
        </div>
        {/* payment  */}
        <div className="mt-5 mx-auto max-w-md">
          <PayPalScriptProvider
            options={{
              clientId: import.meta.env.VITE_PAYPALCLIENT,
              currency: "USD",
            }}
          >
            <div>
              {!paymentCompleted ? (
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: totalAmount,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order
                      .capture()
                      .then((details) => handleSuccessfullPayment(details));
                  }}
                ></PayPalButtons>
              ) : (
                <p className="text-center p-4 w-full bg-slate-300 rounded-md font-medium text-blue-600">
                  Payment completed successfully!
                </p>
              )}
            </div>
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}

export default Payment;
