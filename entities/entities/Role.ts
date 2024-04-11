import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("role", { schema: "db" })
export class Role {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "group", nullable: true, length: 20 })
  group: string | null;
}
