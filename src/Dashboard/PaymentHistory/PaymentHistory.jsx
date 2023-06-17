import { useEffect, useState } from "react";
import useContextHook from "../../hooks/useContextHook";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContextHook();
  useEffect(() => {
    const token = localStorage.getItem("aperture-token");
    fetch(`${import.meta.env.VITE_BACKEND}/payments/${user.email}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPayments(data);
        setLoading(false);
      });
  }, [user]);
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      {!payments.length > 0 && (
        <h1 className="text-center text-3xl font-semibold">
          You don{"'"}t have any payments yet.
        </h1>
      )}
      <div
        className={`${
          !payments.length > 0 ? "hidden" : "overflow-x-auto"
        } border rounded-lg`}
      >
        <table className={`table table-zebra`}>
          {/* head */}
          <thead className="bg-accent text-gray-800">
            <tr>
              <th>#</th>
              <th>Payment Id</th>
              <th>Paid By</th>
              <th>Total amount</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((paymentInfo, indx) => (
              <tr key={paymentInfo._id}>
                <th>{indx + 1}</th>
                <td>{paymentInfo.paymentID}</td>
                <td>${paymentInfo.paidBy}</td>
                <td>{paymentInfo.totalAmount}</td>
                <td>{paymentInfo.createTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentHistory;
