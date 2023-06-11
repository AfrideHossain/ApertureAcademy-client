const Instructor = () => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl rounded-2xl overflow-hidden">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          className="w-full object-cover"
          alt="top instructor"
        />
      </figure>
      <div className="card-body w-full absolute bottom-0 glass text-white">
        <h2 className="card-title">John Smith</h2>
        <p className="w-full">johnsmith@gmail.com</p>
      </div>
    </div>
  );
};

export default Instructor;
