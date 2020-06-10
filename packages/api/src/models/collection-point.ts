import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CollectionPoint } from '@ecoleta/core';

@Entity('collection-points')
export class CollectionPointEntity implements CollectionPoint {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ type: 'decimal' })
  latitude: number;

  @Column({ type: 'decimal' })
  longitude: number;

  constructor(point?: Omit<CollectionPoint, 'id'>) {
    this.name = point?.name || '';
    this.image = point?.image || '';
    this.email = point?.email || '';
    this.whatsapp = point?.whatsapp || '';
    this.city = point?.city || '';
    this.state = point?.state || '';
    this.latitude = point?.latitude || 0;
    this.longitude = point?.longitude || 0;
  }
}
