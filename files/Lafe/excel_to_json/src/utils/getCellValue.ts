import { Cell, CellValue } from 'exceljs';

export default function getCellValue(cell: Cell): CellValue {
  const { value } = cell;

  if (!value) {
    return null;
  }

  if (typeof value === 'string') {
    return value.trim();
  }

  return value;
}
