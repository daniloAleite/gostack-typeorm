import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class Transactions1598915526375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'transactions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',

                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'value',
                        type: 'varchar',
                    },
                    {
                        name: 'type',
                        type: 'varchar',
                    },
                    {
                        name: 'category_id',
                        type:'uuid',
                        isNullable: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'Now()',
                    },                    
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'Now()',
                    },
                ]
            })
        );

        await queryRunner.createForeignKey('transactions', new TableForeignKey({
            name: 'CategoriesProvider',
            columnNames: ['category_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'

        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('transactions');
    }

}
