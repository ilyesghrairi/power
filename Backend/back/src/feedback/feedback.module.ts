import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback.entity';
import { JwtModule } from '@nestjs/jwt';
import {User} from '../user/user.entity';
import {Car} from '../car/car.entity'
@Module({
    imports: [TypeOrmModule.forFeature([Feedback,User,Car]),JwtModule.register({ secret: 'secretKey' })],
    controllers: [FeedbackController],
    providers: [FeedbackService],
    exports: [TypeOrmModule],
})
export class FeedbackModule {}
