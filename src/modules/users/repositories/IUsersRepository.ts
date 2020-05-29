import User from '../infra/typeorm/entities/Users';
import ICreateUserDTO from '../dtos/ICreateUserDTO';
import IFindAllProviders from '../dtos/IFindAllProvidersDTO';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;

  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;

  findAllProviders(data: IFindAllProviders): Promise<User[]>;
}
