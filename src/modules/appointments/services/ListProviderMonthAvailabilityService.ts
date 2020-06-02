import { inject, injectable } from 'tsyringe';
import { getDaysInMonth, getDate } from 'date-fns';

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

    const numberOfDaysInMonth = getDaysInMonth(new Date(year, month - 1));

    const eachDayArray = Array.from(
      { length: numberOfDaysInMonth },
      (_, index) => index + 1,
    );

    const availability = eachDayArray.map(day => {
      const appoitmentsInDay = appointments.filter(appointment => {
        return getDate(appointment.date) === day;
      });

      return {
        day,
        available: appoitmentsInDay.length < 10,
      };
    });

    return availability;
  }
}

export default ListProviderMonthAvaliability;
