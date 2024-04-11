import { Module } from '@nestjs/common'
import { UserModule } from './user/user.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User, Profile, Log, Role } from '../entities'

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '1q8e9t6WU!',
            database: 'db',
            synchronize: true,
            entities: [User, Profile, Log, Role],
        }),
    ],
})
export class AppModule {}
