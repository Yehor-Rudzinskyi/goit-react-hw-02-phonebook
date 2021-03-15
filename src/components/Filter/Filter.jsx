import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  const handleSerchInput = e => {
    const serchInput = e.target.value.toLowerCase();
    onChange(serchInput);
  };
  return (
    <label htmlFor="id-1" className="find-label">
      <input
        type="text"
        id="id-1"
        onChange={handleSerchInput}
        className="find-input"
        placeholder="Find by name..."
        autoсomplete="off"
      />
    </label>
  );
};

Filter.propeTypes = {
  onChange: PropTypes.func,
};

export default Filter;
