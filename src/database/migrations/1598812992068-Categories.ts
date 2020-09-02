import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Categories1598812992068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
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
    }


    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('categories');
    }

}
