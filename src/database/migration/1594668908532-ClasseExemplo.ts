import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class ClasseExemplo1594668908532 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'Classe',
      columns: [
        {
          name: 'id',
          type: "int",
          isPrimary: true
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'duration',
          type: 'integer'
        },
        {
          name: 'created_At',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_At',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Classe')
  }

}

