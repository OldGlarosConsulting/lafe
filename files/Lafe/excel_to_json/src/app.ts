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

async function physicals_analysis_detailed() {
  /* {
    description: 'Projeto de Contenção',
    un: 'vb',
    budget: {
      amount: 1,
      values: {
        unit: 10000,
        total: 10000,
        readjusted: {
          month: 10000,
          today: 10000,
        },
      },
    },
    accumulated: {
      expected: {
        until_previous_month: 1,
        until_current_month: 1,
        amount: 1,
        value: 10000,
      },
      executed: {
        until_previous_month: 1,
        until_current_month: 1,
        amount: 1,
        value: 10000,
      },
      readjusted_budget: {
        value_until_previous_month: 10000,
        expected_value: 10000,
        readjusted_value: undefined,
        value_until_current_month: 10000,
        expected_value_readjusted: 10000,
      },
    },
  } */

  const START_ROW = 13;
  const END_ROW = 100;

  const rows = await getRowsInWorksheet({
    fileName: 'obra-35.xlsx',
    worksheetName: 'Análise Física Detalhada',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item_id = getCellValue(row.getCell('E'));
    const description = getCellValue(row.getCell('F'));
    const un = getCellValue(row.getCell('G'));

    if (!un) {
      continue;
    }

    const budget_amount = getCellValue(row.getCell('H'));
    const budget_values_unit = getCellValue(row.getCell('I'));
    const budget_values_total = getCellValue(row.getCell('J'));

    const budget_values_readjusted_month = null;
    const budget_values_readjusted_today = null;

    /* budget_values_readjusted_month = getCellValue(row.getCell('K'));
    budget_values_readjusted_today = getCellValue(row.getCell('L'));

    const accumulated_expected_until_previous_month = getCellValue(
      row.getCell('M'),
    );
    const accumulated_expected_until_current_month = getCellValue(
      row.getCell('N'),
    );
    const accumulated_expected_amount = getCellValue(row.getCell('O'));
    const accumulated_expected_value = getCellValue(row.getCell('P'));

    const accumulated_executed_until_previous_month = getCellValue(
      row.getCell('Q'),
    );
    const accumulated_executed_until_current_month = getCellValue(
      row.getCell('R'),
    );
    const accumulated_executed_amount = getCellValue(row.getCell('S'));
    const accumulated_executed_value = getCellValue(row.getCell('T'));

    const accumulated_readjusted_budget_value_until_previous_month = getCellValue(
      row.getCell('U'),
    );
    const accumulated_readjusted_budget_expected_value = getCellValue(
      row.getCell('V'),
    );
    const accumulated_readjusted_budget_readjusted_value = getCellValue(
      row.getCell('W'),
    );
    const accumulated_readjusted_budget_value_until_current_month = getCellValue(
      row.getCell('X'),
    );
    const accumulated_readjusted_budget_expected_value_readjusted = getCellValue(
      row.getCell('Y'),
    ); */

    const accumulated_expected_until_previous_month = getCellValue(
      row.getCell('K'),
    );
    const accumulated_expected_until_current_month = getCellValue(
      row.getCell('L'),
    );
    const accumulated_expected_amount = getCellValue(row.getCell('M'));
    const accumulated_expected_value = getCellValue(row.getCell('N'));

    const accumulated_executed_until_previous_month = getCellValue(
      row.getCell('O'),
    );
    const accumulated_executed_until_current_month = getCellValue(
      row.getCell('P'),
    );
    const accumulated_executed_amount = getCellValue(row.getCell('Q'));
    const accumulated_executed_value = getCellValue(row.getCell('R'));

    const accumulated_readjusted_budget_value_until_previous_month = getCellValue(
      row.getCell('S'),
    );
    const accumulated_readjusted_budget_expected_value = getCellValue(
      row.getCell('T'),
    );
    const accumulated_readjusted_budget_readjusted_value = getCellValue(
      row.getCell('U'),
    );
    const accumulated_readjusted_budget_value_until_current_month = getCellValue(
      row.getCell('V'),
    );
    const accumulated_readjusted_budget_expected_value_readjusted = getCellValue(
      row.getCell('W'),
    );

    const rowData = {
      item_id,
      description,
      un,
      budget: {
        amount: budget_amount,
        values: {
          unit: budget_values_unit,
          total: budget_values_total,
          readjusted: {
            month: budget_values_readjusted_month,
            today: budget_values_readjusted_today,
          },
        },
      },
      accumulated: {
        expected: {
          until_previous_month: accumulated_expected_until_previous_month,
          until_current_month: accumulated_expected_until_current_month,
          amount: accumulated_expected_amount,
          value: accumulated_expected_value,
        },
        executed: {
          until_previous_month: accumulated_executed_until_previous_month,
          until_current_month: accumulated_executed_until_current_month,
          amount: accumulated_executed_amount,
          value: accumulated_executed_value,
        },
        readjusted_budget: {
          value_until_previous_month: accumulated_readjusted_budget_value_until_previous_month,
          expected_value: accumulated_readjusted_budget_expected_value,
          readjusted_value: accumulated_readjusted_budget_readjusted_value,
          value_until_current_month: accumulated_readjusted_budget_value_until_current_month,
          expected_value_readjusted: accumulated_readjusted_budget_expected_value_readjusted,
        },
      },
    };

    data.push(rowData);
  }

  writeOutput(data);
}

async function main_month_impacts_main() {
  /* {
    item_id: '16.000.000.014',
    description:
      'Infra estrutura dos sistemas de climatização e ventilação',
    expected: {
      percentage_until_month: 0.5833,
      amount: 0.58,
    },
    executed: {
      percentage_until_month: 0.1949,
      amount: 0.19,
    },
    month: {
      percentage_until_month: 0.1667,
      accumulated_percentage: 0.75,
    },
    observations: '',
  } */

  const START_ROW = 11;
  const END_ROW = 17;

  const rows = await getRowsInWorksheet({
    fileName: 'obra-35.xlsx',
    worksheetName: 'Principais Impactos do Mês',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item_id = getCellValue(row.getCell('B'));
    const description = getCellValue(row.getCell('C'));

    const expected_percentage_until_month = getCellValue(row.getCell('I'));
    const expected_amount = getCellValue(row.getCell('J'));
    const executed_percentage_until_month = getCellValue(row.getCell('K'));
    const executed_amount = getCellValue(row.getCell('L'));
    const month_percentage_until_month = getCellValue(row.getCell('M'));
    const month_accumulated_percentage = getCellValue(row.getCell('N'));

    const observations = getCellValue(row.getCell('M')) || '';

    const rowData = {
      item_id,
      description,
      expected: {
        percentage_until_month: expected_percentage_until_month,
        amount: expected_amount,
      },
      executed: {
        percentage_until_month: executed_percentage_until_month,
        amount: executed_amount,
      },
      month: {
        percentage_until_month: month_percentage_until_month,
        accumulated_percentage: month_accumulated_percentage,
      },
      observations,
    };

    data.push(rowData);
  }

  writeOutput(data);
}

async function main_month_impacts_main_early_activities() {
  /* {
    item_id: '16.000.000.014',
    description:
      'Infra estrutura dos sistemas de climatização e ventilação',
    expected: {
      percentage_until_month: 0.5833,
      amount: 0.58,
    },
    executed: {
      percentage_until_month: 0.1949,
      amount: 0.19,
    },
    month: {
      percentage_until_month: 0.1667,
      accumulated_percentage: 0.75,
    },
    observations: '',
  } */

  const START_ROW = 39;
  const END_ROW = 46;

  const rows = await getRowsInWorksheet({
    fileName: 'obra-35.xlsx',
    worksheetName: 'Principais Impactos do Mês',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item_id = getCellValue(row.getCell('B'));
    const description = getCellValue(row.getCell('C'));

    const expected_percentage_until_month = getCellValue(row.getCell('I'));
    const expected_amount = getCellValue(row.getCell('J'));
    const executed_percentage_until_month = getCellValue(row.getCell('K'));
    const executed_amount = getCellValue(row.getCell('L'));
    const month_percentage_until_month = getCellValue(row.getCell('M'));
    const month_accumulated_percentage = getCellValue(row.getCell('N'));

    const observations = getCellValue(row.getCell('M')) || '';

    const rowData = {
      item_id,
      description,
      expected: {
        percentage_until_month: expected_percentage_until_month,
        amount: expected_amount,
      },
      executed: {
        percentage_until_month: executed_percentage_until_month,
        amount: executed_amount,
      },
      month: {
        percentage_until_month: month_percentage_until_month,
        accumulated_percentage: month_accumulated_percentage,
      },
      observations,
    };

    data.push(rowData);
  }

  writeOutput(data);
}

async function main_month_impacts_main_activities_to_start() {
  /* {
    item_id: '11.001.000.001',
    description: 'Forro em gesso',
    accumulated_schedule: {
      0: {
        label: 'Out-20',
        value: 0.885,
      },
      1: {
        label: 'Nov-20',
        value: 0.4644,
      },
      2: {
        label: 'Dez-20',
        value: 0.8675,
      },
      3: {
        label: 'Jan-21',
        value: 0.9537,
      },
    },
    observations: '',
  } */

  const START_ROW = 67;
  const END_ROW = 88;

  const rows = await getRowsInWorksheet({
    fileName: 'obra-35.xlsx',
    worksheetName: 'Principais Impactos do Mês',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item_id = getCellValue(row.getCell('B'));
    const description = getCellValue(row.getCell('C'));

    const accumulated_schedule_0_value = getCellValue(row.getCell('I'));
    const accumulated_schedule_1_value = getCellValue(row.getCell('J'));
    const accumulated_schedule_2_value = getCellValue(row.getCell('K'));
    const accumulated_schedule_3_value = getCellValue(row.getCell('L'));

    const observations = getCellValue(row.getCell('M')) || '';

    const rowData = {
      item_id,
      description,
      accumulated_schedule: {
        0: {
          label: 'Out-20',
          value: accumulated_schedule_0_value,
        },
        1: {
          label: 'Nov-20',
          value: accumulated_schedule_1_value,
        },
        2: {
          label: 'Dez-20',
          value: accumulated_schedule_2_value,
        },
        3: {
          label: 'Jan-21',
          value: accumulated_schedule_3_value,
        },
      },
      observations,
    };

    data.push(rowData);
  }

  writeOutput(data);
}

async function management_report_table_direct_expenses() {
  /* {
    item_id: 1,
    description: 'PROJETOS',
    measured_percentage: 0.9955,
    budget_value: 292608.87,
    weight_percentage: 0.292,
    accumulated_values: {
      measured: 291302.89,
      payments: 310798.7,
      budget: -18189.83,
      projection: 309836.92,
    },
  } */

  const START_ROW = 31;
  const END_ROW = 36;

  const rows = await getRowsInWorksheet({
    fileName: 'obra-35.xlsx',
    worksheetName: 'Relatório Gerencial',
    startRow: START_ROW,
    endRow: END_ROW,
  });

  const data = [];

  for (const row of rows) {
    const item_id = getCellValue(row.getCell('C'));
    const description = getCellValue(row.getCell('D'));
    const measured_percentage = getCellValue(row.getCell('F'));
    const budget_value = getCellValue(row.getCell('G'));
    const weight_percentage = getCellValue(row.getCell('H'));

    const accumulated_values_measured = getCellValue(row.getCell('I'));
    const accumulated_values_payments = getCellValue(row.getCell('J'));
    const accumulated_values_budget = getCellValue(row.getCell('K'));
    const accumulated_values_projection = getCellValue(row.getCell('L'));

    const rowData = {
      item_id: Number(item_id),
      description,
      measured_percentage,
      budget_value,
      weight_percentage,
      accumulated_values: {
        measured: accumulated_values_measured,
        payments: accumulated_values_payments,
        budget: accumulated_values_budget,
        projection: accumulated_values_projection,
      },
    };

    data.push(rowData);
  }

  writeOutput(data);
}

physicals_analysis_detailed();
