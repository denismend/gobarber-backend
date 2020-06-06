export default interface ICacheProvider {
  save(key: string, value: string): Promise<void>;
  recover<T>(key: string): Promise<T | null>;
  invalidate(key: string): Promise<void>;
}
