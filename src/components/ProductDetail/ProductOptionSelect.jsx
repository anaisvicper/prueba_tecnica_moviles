import '../App.css';

const ProductOptionSelect = ({
  label,
  list,
  name,
  selectedValue,
  onChange,
}) => (
  <select
    className="row"
    name={name}
    placeholder={label}
    onChange={(e) => onChange(e.target.value)}
    value={selectedValue}
  >
    <option value="">Selecciona uno</option>
    {list?.map(({ code, name }) => (
      <option key={code} value={code}>
        {name}
      </option>
    ))}
  </select>
);

export default ProductOptionSelect;
