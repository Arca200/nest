import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity("profile", { schema: "db" })
export class Profile {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "gender", length: 255 })
  gender: string;

  @Column("varchar", { name: "photo", length: 255 })
  photo: string;

  @Column("varchar", { name: "address", length: 255 })
  address: string;

  @OneToOne(() => User, (user) => user.profile, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "id" }])
  user: User;
}
