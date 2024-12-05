import PropTypes from "prop-types";

const Filter = ({ filter, setFilter }) => {
  const filters = ["All", "Active", "Completed"];

  return (
    <div className="flex justify-center mb-4">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 mx-1 rounded ${
            filter === f ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
};


Filter.propTypes = {
  filter: PropTypes.string.isRequired, 
  setFilter: PropTypes.func.isRequired, 
};

export default Filter;
