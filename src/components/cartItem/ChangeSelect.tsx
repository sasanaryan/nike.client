import type { FC } from "react";

type EventSelect = React.ChangeEvent<HTMLSelectElement>;

interface ChangeSelectProp {
  selectedValue: string;
  handleChange: (event: EventSelect) => void;
  existedValue: number[];
}

const ChangeSelect: FC<ChangeSelectProp> = ({
  selectedValue,

  handleChange,
  existedValue,
}) => {
  return (
    <select
      placeholder={selectedValue}
      value={selectedValue}
      onChange={handleChange}
    >
      {existedValue.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default ChangeSelect;
