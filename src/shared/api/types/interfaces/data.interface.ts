interface IDataBase<T> {
  status: number;
  ok: boolean;
  data: T;
  errors?: Record<string, string[]>
}

export interface IPaginatedData<T> extends IDataBase<T>{
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  }
}

export type IData<T> = IDataBase<T> | IPaginatedData<T>;
