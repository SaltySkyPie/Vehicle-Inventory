import { MigrationInterface, QueryRunner } from "typeorm";

export class DatabaseInit1705505997409 implements MigrationInterface {
    name = 'DatabaseInit1705505997409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`vehicle\` (\`id\` varchar(36) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`brand\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`engineVolume\` int NOT NULL, \`color\` varchar(255) NOT NULL, \`fuel\` enum ('Petrol', 'Diesel', 'Electric', 'Hybrid', 'Hydrogen', 'Ethanol', 'Natural Gas', 'Other') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`image\` (\`id\` varchar(36) NOT NULL, \`url\` text NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`vehicleId\` varchar(36) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`image\` ADD CONSTRAINT \`FK_5f21c4268f97c67e2f05b27d427\` FOREIGN KEY (\`vehicleId\`) REFERENCES \`vehicle\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`image\` DROP FOREIGN KEY \`FK_5f21c4268f97c67e2f05b27d427\``);
        await queryRunner.query(`DROP TABLE \`image\``);
        await queryRunner.query(`DROP TABLE \`vehicle\``);
    }

}
