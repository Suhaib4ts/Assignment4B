type TableColumn = {
  key: string;
  label: string;
};

type TableProps = {
  columns: TableColumn[];
  data: any[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
