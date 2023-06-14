const AddClass = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-md shadow-xl bg-base-100 rounded-xl border">
          <div className="p-6">
            <h1 className="text-center text-3xl font-semibold">
              Add new class
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class name</span>
              </label>
              <input
                type="text"
                placeholder="instructor"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Class image</span>
              </label>
              <input
                type="file"
                placeholder="instructor"
                className="file-input file-input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Seats</span>
              </label>
              <input
                type="number"
                placeholder="Available Seats"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-accent">Add class</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddClass;
