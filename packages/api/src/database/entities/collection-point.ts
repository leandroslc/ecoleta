import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CollectionPoint } from '@ecoleta/core';

@Entity('collection-points')
export class CollectionPointEntity implements CollectionPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name?: string;

  @Column()
  image?: string;

  @Column()
  email?: string;

  @Column()
  whatsapp?: string;

  @Column()
  city?: string;

  @Column({ length: 2 })
  state?: string;

  @Column({ type: 'decimal' })
  latitude?: number;

  @Column({ type: 'decimal' })
  longitude?: number;

  constructor() {
    this.id = 0;
  }
}
