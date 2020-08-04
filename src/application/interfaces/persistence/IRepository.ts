export default interface IRepository<T> {
  getAll(): Promise<Array<T>>;
  get(id: number): Promise<T>;
  add(entity: T): Promise<void>;
  remove(entity: T): Promise<void>;
}
