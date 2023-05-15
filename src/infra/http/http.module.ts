import { Module } from '@nestjs/common';
import { NotificationsController } from './controllers/notification.controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountRecipientNotificaion } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotificaion } from '@application/use-cases/get-recipient-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotificaion,
    GetRecipientNotificaion,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
