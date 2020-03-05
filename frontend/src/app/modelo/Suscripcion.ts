export interface Suscripcion {
    id?: number;
    fechaAlta?: Date;
    precio?: number;
    expira?: string;
    prueba?: boolean;
    idServicio?: number;
    usuario_id?: number;
    periodo?: string;
    estado?: string;
}
