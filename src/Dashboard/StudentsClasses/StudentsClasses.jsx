const StudentsClasses = ({ classes, deleteHandler, showDelete }) => {
  return (
    <>
      {!classes.length > 0 && (
        <h1 className="text-center text-3xl font-semibold">
          You don{"'"}t have any class yet.
        </h1>
      )}
      <div
        className={`${
          !classes.length > 0 ? "hidden" : "overflow-x-auto"
        } border rounded-lg`}
      >
        <table className={`table table-zebra`}>
          {/* head */}
          <thead className="bg-accent text-gray-800">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Price</th>
              {showDelete && <th>Action</th>}
            </tr>
          </thead>
          <tbody>
            {classes?.map((classInfo, indx) => (
              <tr key={classInfo._id}>
                <th>{indx + 1}</th>
                <td>{classInfo.className}</td>
                <td>{classInfo.instructor}</td>
                <td>{classInfo.instructorEmail}</td>
                <td>${classInfo.price}</td>
                {showDelete && (
                  <td>
                    <button
                      className="btn btn-md btn-error normal-case"
                      onClick={() => deleteHandler(classInfo._id)}
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentsClasses;
