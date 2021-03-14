const Filter = ({ onChange }) => {
  const handleSerchInput = e => {
    const serchInput = e.target.value.toLowerCase();
    onChange(serchInput);
  };
  return (
    <label htmlFor="id-1">
      Я помню имя <input type="text" id="id-1" onChange={handleSerchInput} />
    </label>
  );
};

export default Filter;
