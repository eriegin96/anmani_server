import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { RolesSeedModule } from './roles/roles.seed.module';
import { ValidatedConfigModule } from 'src/config/config.module';
import { UsersSeedModule } from './users/users.seed.module';

@Module({
  imports: [
    RolesSeedModule,
    UsersSeedModule,
    ValidatedConfigModule,
    DatabaseModule,
  ],
})
export class SeedModule {}
