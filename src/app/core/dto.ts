export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
}

export interface PageRequest {
  page: number;
  size: number;
}

export interface UserParams {
  email?: string;
  password?: string;
  name?: string;
}


export interface ProductParams{
   name:string;
   price: number;
   description:string;
   pieces:number;
   barcode: number;
   idSubcategory: number;
}

