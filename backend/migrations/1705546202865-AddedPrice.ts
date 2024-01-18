import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedPrice1705546202865 implements MigrationInterface {
    name = 'AddedPrice1705546202865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicle\` ADD \`price\` double NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicle\` DROP COLUMN \`price\``);
    }

}
