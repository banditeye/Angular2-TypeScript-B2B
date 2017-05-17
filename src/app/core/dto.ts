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

export interface Basket{
  id:number;pieces:number;
  user:{id:number;name:string;email:string};
  product:{id:number;name:string;price:number;description:string;pieces:number;barcode:number;sold:number;
  user:{id:number;name:string;email:string};
  subcategory:{id:number;name:string;
  category:{id:number;name:string}}}
}

