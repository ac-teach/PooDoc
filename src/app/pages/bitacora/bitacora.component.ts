import { Component } from '@angular/core';

interface BitacoraRow {
  field: string;
  value: string;
}

@Component({
  selector: 'app-bitacora',
  imports: [],
  templateUrl: './bitacora.component.html',
  styleUrl: './bitacora.component.scss',
})
export class BitacoraComponent {
  protected readonly rows: BitacoraRow[] = [
    { field: 'Clase / Interfaz', value: 'Nombre y paquete exacto.' },
    { field: 'Capa', value: 'Model, DAO, Controller, util, etc.' },
    { field: 'Responsabilidad', value: 'Para qué existe y qué no debe hacer.' },
    { field: 'Dependencias', value: 'Clases, interfaces o librerías JAR utilizadas.' },
    { field: 'Javadoc', value: 'Documentación con etiquetas principales.' },
    { field: 'Prueba', value: 'Cómo comprobaste el comportamiento.' },
  ];
}