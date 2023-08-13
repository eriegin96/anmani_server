import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { IsUnique } from 'src/decorators/isUnique.decorator';
import { Expose } from 'class-transformer';

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Expose({ name: 'key' })
  id: string;

  @Column({ type: String })
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsUnique(Role)
  name: string;
}

export const createRoleDTO = ['name'] as const;
