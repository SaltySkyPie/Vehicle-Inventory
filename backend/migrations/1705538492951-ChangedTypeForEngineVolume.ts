import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangedTypeForEngineVolume1705538492951 implements MigrationInterface {
    name = 'ChangedTypeForEngineVolume1705538492951'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicle\` DROP COLUMN \`engineVolume\``);
        await queryRunner.query(`ALTER TABLE \`vehicle\` ADD \`engineVolume\` double NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`vehicle\` DROP COLUMN \`engineVolume\``);
        await queryRunner.query(`ALTER TABLE \`vehicle\` ADD \`engineVolume\` int NOT NULL`);
    }

}
