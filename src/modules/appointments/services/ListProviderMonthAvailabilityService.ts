import { inject, injectable } from 'tsyringe';
import { getDate } from 'date-fns';

import IAppointmentRepository from '../repositories/IAppointmentsRepository';

interface IRequestDTO {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  available: boolean;
}>;

/**
 * [ { day: 2, avaliable: false }]
 */

@injectable()
class ListProviderMonthAvaliability {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
  }: IRequestDTO): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInMonthFromProvider(
      {
        provider_id,
        month,
        year,
      },
    );

    return appointments.map(appointment => {
      return {
        day: getDate(appointment.date),
        available: false,
      };
    });
  }
}

export default ListProviderMonthAvaliability;
