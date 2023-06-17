import { useEffect, useState } from "react";
import StudentsClasses from "../StudentsClasses";
import useContextHook from "../../../hooks/useContextHook";
import Swal from "sweetalert2";
import { HiCreditCard } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const SelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContextHook();
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(true);
  const [total, setTotal] = useState(0);
  const token = localStorage.getItem("aperture-token");

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_BACKEND}/users/selectedclasses/${user?.email}`,
      {
        method: "get",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        let ids = data.selectedClasses;
        fetch(`${import.meta.env.VITE_BACKEND}/classesbyid`, {
          method: "post",
          headers: {
            authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
          body: JSON.stringify({ ids }),
        })
          .then((res) => res.json())
          .then((resp_data) => {
            setClasses(resp_data);
            setLoading(false);
            setRefetch(false);
            const countTotal = resp_data
              ?.reduce((acc, current) => {
                return acc + parseFloat(current.price);
              }, 0)
              .toFixed(2);
            setTotal(countTotal);
          });
      });
  }, [token, user, refetch]);

  const deleteHandler = (id) => {
    const newClasses = [];
    let filteredClasses = classes.filter((classInfo) => classInfo._id !== id);
    filteredClasses.map((classInfo) => {
      newClasses.push(classInfo._id);
    });
    let bodyData = { newClasses };
    fetch(
      `${import.meta.env.VITE_BACKEND}/users/selectedclasses/${user?.email}`,
      {
        method: "put",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(bodyData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Class removed",
          showConfirmButton: false,
          timer: 1500,
        });
        setRefetch(true);
      });
  };
  if (loading) {
    return <progress className="progress w-56 progress-primary"></progress>;
  }
  return (
    <>
      <div className="w-full">
        <StudentsClasses
          classes={classes}
          deleteHandler={deleteHandler}
          showDelete={true}
        />
        <div className=" w-full mt-5 flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Total: ${total}</p>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              navigate("/dashboard/payment", {
                state: { totalAmount: total, classes },
              });
            }}
          >
            <HiCreditCard className="w-6 h-6" /> Proceed payment
          </button>
        </div>
      </div>
    </>
  );
};

export default SelectedClasses;
