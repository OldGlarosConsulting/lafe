import { Row, Workbook } from 'exceljs';
import path from 'path';

import getCellValue from './utils/getCellValue';
import writeOutput from './utils/writeOutput';

interface IGetRowsInWorksheetDTO {
  fileName: string;
  worksheetName: string;
  startRow: number;
  endRow: number;
}

async function getRowsInWorksheet({
  fileName,
  worksheetName,
  startRow,
  endRow,
}: IGetRowsInWorksheetDTO): Promise<Row[]> {
  const filePath = path.join(__dirname, 'data', fileName);

  const workbook = new Workbook();
  const readWorkbook = await workbook.xlsx.readFile(filePath);

  const worksheet = readWorkbook.worksheets.find(
    findWorksheet => findWorksheet.name === worksheetName,
  );

  if (!worksheet) {
    return [];
  }

  const rows: Row[] = [];

  for (let i = startRow; i <= endRow; i++) {
    const row = worksheet.getRow(i);

    rows.push(row);
  }

  return rows;
}


async function management_direct_expenses_report() {
  /*  {
    id: '01',
    description: 'PROJETOS',
    percent_measured: '99,55%',
    budget: '292.608,87',
    weight: '2,92',
    measured: '291.302,89',
    payments: '310.789,70',
    money_available: '-18.189,83',
    projection: '309.836,92',
  }, */

  const START_ROW = 10;
  const END_ROW = 30;

  const rows = await getRowsInWorksheet({
    fileName: 'ControleBESet20.xlsx',
    worksheetName: 'Relatório Gerencial',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const id = getCellValue(row.getCell('C'));
    const description = getCellValue(row.getCell('D'));
    const percent_measured = getCellValue(row.getCell('F'));
    const budget = getCellValue(row.getCell('G'));
    const weight = getCellValue(row.getCell('H'));
    const measured = getCellValue(row.getCell('I'));
    const payments = getCellValue(row.getCell('J'));
    const money_available = getCellValue(row.getCell('K'));
    const projection = getCellValue(row.getCell('L'));

    const rowData = {
      id,
      description,
      percent_measured,
      budget,
      weight,
      measured,
      payments,
      money_available,
      projection
    };

    data.push(rowData);
  }

  writeOutput(data);
}

async function management_indirect_expenses_report() {
  /*  {
    id: '01',
    description: 'PROJETOS',
    percent_measured: '99,55%',
    budget: '292.608,87',
    weight: '2,92',
    measured: '291.302,89',
    payments: '310.789,70',
    money_available: '-18.189,83',
    projection: '309.836,92',
  }, */

  const START_ROW = 31;
  const END_ROW = 37;

  const rows = await getRowsInWorksheet({
    fileName: 'ControleBESet20.xlsx',
    worksheetName: 'Relatório Gerencial',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const id = getCellValue(row.getCell('C'));
    const description = getCellValue(row.getCell('D'));
    const percent_measured = getCellValue(row.getCell('F'));
    const budget = getCellValue(row.getCell('G'));
    const weight = getCellValue(row.getCell('H'));
    const measured = getCellValue(row.getCell('I'));
    const payments = getCellValue(row.getCell('J'));
    const money_available = getCellValue(row.getCell('K'));
    const projection = getCellValue(row.getCell('L'));

    const rowData = {
      id,
      description,
      percent_measured,
      budget,
      weight,
      measured,
      payments,
      money_available,
      projection
    };

    data.push(rowData);
  }

  writeOutput(data);
}


async function management_summary_of_projections_budget() {
  /*  {
    month: 'set-20',
    estimated_cumultative_financial: 0.5365,
    estimated_executed_financial: 0.6053,
    expected_cost_to_date: 21,
    cost_measured_to_date: 1,
    real_cost_to_date: 1,
    budget: 1,
    projected_cost: 1,
    financial_trend: 1,
    projected_cost_per_meter: 1,
    equivalent_area: 1,
  }, */

  const START_ROW = 39;
  const END_ROW = 52;

  const rows = await getRowsInWorksheet({
    fileName: 'ControleBESet20.xlsx',
    worksheetName: 'Relatório Gerencial',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const month = getCellValue(row.getCell('E'));
    const estimated_cumultative_financial = getCellValue(row.getCell('F'));


    const rowData = {
      month,
    estimated_cumultative_financial
  };

    data.push(rowData);
  }

  writeOutput(data);
}

async function macro_late_activities() {
  /*    {
    item: '08',
    activity: 'IPERMEABILIZAÇÃO / ISOLAMENTO',
    prev: '54,02%',
    real: '31,48%',
    physical_deviation: '-22,54%',
  },, */

  const START_ROW = 8;
  const END_ROW = 11;

  const rows = await getRowsInWorksheet({
    fileName: 'ControleBESet20.xlsx',
    worksheetName: 'Análise Física Macro',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item = getCellValue(row.getCell('F'));
    const activity = getCellValue(row.getCell('G'));
    const prev = getCellValue(row.getCell('M'));
    const real = getCellValue(row.getCell('N'));
    const physical_deviation = getCellValue(row.getCell('O'));


    const rowData = {
      item,
      activity,
      prev,
      real,
      physical_deviation,
    };

    data.push(rowData);
  }

  writeOutput(data);
}
async function macro_ahead_activities() {
  /*    {
    item: '08',
    activity: 'IPERMEABILIZAÇÃO / ISOLAMENTO',
    prev: '54,02%',
    real: '31,48%',
    physical_deviation: '-22,54%',
  },, */

  const START_ROW = 19;
  const END_ROW = 25;

  const rows = await getRowsInWorksheet({
    fileName: 'ControleBESet20.xlsx',
    worksheetName: 'Análise Física Macro',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item = getCellValue(row.getCell('F'));
    const activity = getCellValue(row.getCell('G'));
    const prev = getCellValue(row.getCell('M'));
    const real = getCellValue(row.getCell('N'));
    const physical_deviation = getCellValue(row.getCell('O'));


    const rowData = {
      item,
      activity,
      prev,
      real,
      physical_deviation,
    };

    data.push(rowData);
  }

  writeOutput(data);
}

macro_ahead_activities();
