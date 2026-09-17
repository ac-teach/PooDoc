import { Component } from '@angular/core';

interface TagRow {
  tag: string;
  appliesTo: string;
  description: string;
}

@Component({
  selector: 'app-javadoc',
  imports: [],
  templateUrl: './javadoc.component.html',
  styleUrl: './javadoc.component.scss',
})
export class JavadocComponent {
  protected readonly rows: TagRow[] = [
    {
      tag: '@author',
      appliesTo: 'Clase, Interfaz',
      description: 'Indica el nombre del desarrollador o autor que creó/mantiene el componente.',
    },
    {
      tag: '@version',
      appliesTo: 'Clase, Interfaz',
      description: 'Define la versión actual del módulo (ej. 1.0.0).',
    },
    {
      tag: '@param <nombre>',
      appliesTo: 'Métodos, Constructores',
      description:
        'Describe el propósito de un parámetro de entrada y sus restricciones o formato esperado.',
    },
    {
      tag: '@return',
      appliesTo: 'Métodos (non-void)',
      description: 'Explica el valor de retorno que produce el método tras su ejecución exitosa.',
    },
    {
      tag: '@throws / @exception',
      appliesTo: 'Métodos, Constructores',
      description:
        'Documenta las excepciones explícitas que el método puede lanzar bajo condiciones erróneas.',
    },
    {
      tag: '@see',
      appliesTo: 'General',
      description:
        'Añade una referencia cruzada a otra clase, método o enlace relevante.',
    },
  ];
}