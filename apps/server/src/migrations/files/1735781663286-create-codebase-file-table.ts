import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCodebaseFileTable1735781663286 implements MigrationInterface {
    name = 'CreateCodebaseFileTable1735781663286'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "codebase_files" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "filepath" varchar NOT NULL, "status" varchar CHECK( "status" IN ('UNPROCESSED') ) NOT NULL DEFAULT ('UNPROCESSED'), "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "codebase_files"`);
    }

}
