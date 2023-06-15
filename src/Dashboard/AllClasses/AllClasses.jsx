import {
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
} from "react-icons/hi2";

const AllClasses = () => {
  // TODO: make it conditional
  const Tag = (
    <>
      <p className="badge badge-info py-3 px-3 text-sm items-center gap-1">
        <HiOutlineClock className="w-4 h-4" /> Pending
      </p>
      <p className="badge badge-success py-3 px-3 text-sm items-center gap-1">
        <HiOutlineCheckCircle className="w-4 h-4" /> Approved
      </p>
      <p className="badge badge-error py-3 px-3 text-sm items-center gap-1">
        <HiOutlineXCircle className="w-4 h-4" /> Denied
      </p>
    </>
  );
  return (
    <>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-accent text-gray-800">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Available Seats</th>
              <th>Students</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>$150</td>
              <td>100</td>
              <td>0</td>
              <td>
                <p className="badge badge-info py-3 px-3 text-sm items-center gap-1">
                  <HiOutlineClock className="w-4 h-4" /> Pending
                </p>
                <p className="badge badge-success py-3 px-3 text-sm items-center gap-1">
                  <HiOutlineCheckCircle className="w-4 h-4" /> Approved
                </p>
                <p className="badge badge-error py-3 px-3 text-sm items-center gap-1">
                  <HiOutlineXCircle className="w-4 h-4" /> Denied
                </p>
              </td>
              <td>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At ad
                nihil enim dolor, officiis fuga totam numquam illo quaerat
                consectetur obcaecati odio distinctio rerum! Quasi cumque sequi
                debitis doloremque dolores!
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllClasses;
