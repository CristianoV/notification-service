import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@application/entities/notification';

interface GetRecipientNotificaionRequest {
  recipientId: string;
}

interface GetRecipientNotificaionResponse {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotificaion {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: GetRecipientNotificaionRequest,
  ): Promise<GetRecipientNotificaionResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
