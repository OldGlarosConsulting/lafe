import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateBricklayerExpenseItems1601915267419
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'bricklayer_expense_items',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'spreadsheet_name',
            type: 'varchar',
          },
          {
            name: 'appropriation',
            type: 'varchar',
          },
          {
            name: 'month_value',
            type: 'decimal',
          },
          {
            name: 'accumulated',
            type: 'decimal',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bricklayer_expense_items');
  }
}
