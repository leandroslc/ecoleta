import { PrimaryColumn, Column, Entity } from 'typeorm';
import { WasteItem } from '@ecoleta/core';

@Entity('waste-items')
export class WasteItemEntity implements WasteItem {
  @PrimaryColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  image!: string;
}
