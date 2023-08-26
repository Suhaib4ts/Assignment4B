type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = ({ options, label, value, onChange }) => {
  return (
    <div>
      <label>
        <b>{label}</b>
      </label>
      <select value={value} onChange={onChange} className="selectBox">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
