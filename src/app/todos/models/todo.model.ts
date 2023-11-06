export class Todo {
    public id: number;
    public texto: string;
    public completado: boolean;

    constructor(texto: string, id?: number) {
        this.texto = texto;
        id ? this.id = id : this.id = new Date().getTime();
        this.completado = false;
    }
}