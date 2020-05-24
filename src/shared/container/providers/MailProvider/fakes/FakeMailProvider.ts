import IMailProvider from '../models/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export default class FakeMailProvide implements IMailProvider {
  private messages: IMessage[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({ to, body });
  }
}