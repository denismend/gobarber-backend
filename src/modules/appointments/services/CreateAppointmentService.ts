import { startOfHour } from 'date-fns';
import { inject, injectable } from 'tsyringe';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';
import AppError from '../../../shared/errors/AppError';

import IAppointmentsRepository from '../repositories/IAppointmentsRepository';

/**
 * [x] Recebimentos das informações
 * [] Tratativa de erros/excessoes
 * [x] Acesso ao repositorio
 */

interface IRequestDTO {
  provider_id: string;
  user_id: string;
  date: Date;
}
/**
 * return response
        .status(400)
        .json({ message: '' });
 */

/**
 * SOLID
 * Single responsibility principle
 * dependency invertion
 */
@injectable()
class CreateAppointmentService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    user_id,
    date,
  }: IRequestDTO): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw new AppError('This appointment is already booked!');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      user_id,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
