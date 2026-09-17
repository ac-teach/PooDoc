import { Component } from '@angular/core';

interface ProcedureStep {
  num: string;
  label: string;
}

@Component({
  selector: 'app-procedimiento',
  imports: [],
  templateUrl: './procedimiento.component.html',
  styleUrl: './procedimiento.component.scss',
})
export class ProcedimientoComponent {
  protected readonly steps: ProcedureStep[] = [
    { num: '01', label: 'Identificar responsabilidad' },
    { num: '02', label: 'Identificar capa' },
    { num: '03', label: 'Identificar dependencias' },
    { num: '04', label: 'Definir atributos' },
    { num: '05', label: 'Definir métodos' },
    { num: '06', label: 'Construir estructura' },
    { num: '07', label: 'Agregar Javadoc' },
    { num: '08', label: 'Implementar' },
    { num: '09', label: 'Compilar y probar' },
  ];
}