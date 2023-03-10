import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  DeleteDateColumn,
  BeforeRemove,
  OneToMany,
} from 'typeorm';
import { hash } from 'bcryptjs';
import Activities from './activities.entity';

@Entity('users')
class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('varchar')
  name: string;
  @Column('varchar')
  email: string;
  @Column('varchar')
  password: string;
  @Column('varchar', { nullable: true })
  imgUrl: string;
  @Column('boolean', { default: true })
  isActive: boolean = true;
  @CreateDateColumn()
  createdAt: Date;
  @DeleteDateColumn()
  deletedAt: Date;
  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @BeforeRemove()
  deactivate() {
    this.isActive = false;
  }
  @OneToMany(() => Activities, (activities) => activities.user)
  activities: Activities[];
}

export default Users;
