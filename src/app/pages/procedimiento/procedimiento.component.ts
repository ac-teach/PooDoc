import { Component } from '@angular/core';

interface ProcedureStep {
  num: string;
  label: string;
  desc: string;
}

@Component({
  selector: 'app-procedimiento',
  imports: [],
  templateUrl: './procedimiento.component.html',
  styleUrl: './procedimiento.component.scss',
})
export class ProcedimientoComponent {
  protected readonly steps: ProcedureStep[] = [
    {
      num: '01',
      label: 'Identificar responsabilidad',
      desc: 'Define qué hace la clase y, sobre todo, qué NO debe hacer. Una sola responsabilidad por clase.',
    },
    {
      num: '02',
      label: 'Identificar capa/package',
      desc: 'Señala la capa del flujo a la que pertenece la clase (model, dao, controller, util/manager, system). En este proyecto NO se utiliza el concepto de package para definir la capa: identifícala por el rol que cumple la clase dentro del recorrido del dato.',
    },
    {
      num: '03',
      label: 'Identificar dependencias',
      desc: 'Lista las clases, interfaces o librerías JAR que la clase necesita para funcionar.',
    },
    {
      num: '04',
      label: 'Definir atributos',
      desc: 'Elige los atributos private que representan el estado real de la entidad, con su tipo correcto.',
    },
    {
      num: '05',
      label: 'Definir métodos',
      desc: 'Declara getters/setters y los métodos de comportamiento con sus firmas y visibilidad.',
    },
    {
      num: '06',
      label: 'Construir estructura',
      desc: 'Escribe la clase completa y ordenada: imports, atributos y métodos siguiendo la convención del proyecto.',
    },
    {
      num: '07',
      label: 'Agregar Javadoc',
      desc: 'Documenta clase y métodos con etiquetas @param, @return y @throws donde corresponda.',
    },
    {
      num: '08',
      label: 'Implementar',
      desc: 'Escribe la lógica real de cada método: reglas de negocio, validaciones y acceso a datos.',
    },
    {
      num: '09',
      label: 'Compilar y probar',
      desc: 'Compila y prueba el comportamiento desde la consola o una clase de prueba, y corrige los errores.',
    },
  ];
}