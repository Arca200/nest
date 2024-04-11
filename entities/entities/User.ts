import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Log } from "./Log";
import { Profile } from "./Profile";

@Entity("user", { schema: "db" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
