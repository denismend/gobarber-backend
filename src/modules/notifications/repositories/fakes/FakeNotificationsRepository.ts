import { ObjectID } from 'mongodb';

import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import ICreateNotification from '@modules/notifications/dtos/ICreateNotificationDTO';

class NotificationsRepository implements INotificationsRepository {
  private notications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotification): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, recipient_id });

    this.notications.push(notification);

    return notification;
  }
}

export default NotificationsRepository;
