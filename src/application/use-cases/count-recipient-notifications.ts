import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNotificaionRequest {
  recipientId: string;
}

interface CountRecipientNotificaionResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotificaion {
  constructor(private notificationsRepository: NotificationsRepository) {}
  async execute(
    request: CountRecipientNotificaionRequest,
  ): Promise<CountRecipientNotificaionResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );

    return { count };
  }
}
