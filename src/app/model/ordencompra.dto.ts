export interface OrdenCompradto {
  id: number;
  fecha: Date;
  total: number;
  estado: string;
  idproveedor: number;
  usuario: string;
}
export interface OrdenCompraNuevodto {
  fecha: Date;
  total: number;
  estado: string;
  idproveedor: number;
  usuario: string;
}
export interface OrdenCompraActualizadodto {
  id: number;
  fecha: Date;
  total: number;
  estado: string;
  idproveedor: number;
  usuario: string;
}
