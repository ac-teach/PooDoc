import { Component } from '@angular/core';

interface Segment {
  t?: string;
  c?: string;
}

interface Question {
  segments: Segment[];
}

interface QuestionGroup {
  summary: string;
  questions: Question[];
}

function seg(text: string, code?: string): Segment {
  return code !== undefined ? { t: text, c: code } : { t: text };
}

function question(...segments: Segment[]): Question {
  return { segments };
}

@Component({
  selector: 'app-diagnostico',
  imports: [],
  templateUrl: './diagnostico.component.html',
  styleUrl: './diagnostico.component.scss',
})
export class DiagnosticoComponent {
  protected readonly groups: QuestionGroup[] = [
    {
      summary: 'Java y POO',
      questions: [
        question(seg('Diferencia entre clase y objeto.')),
        question(seg('¿Qué es un atributo?')),
        question(seg('¿Qué es un método?')),
        question(seg('¿Para qué sirve un constructor?')),
        question(
          seg('Diferencia entre '),
          seg('private', 'private'),
          seg(', '),
          seg('public', 'public'),
          seg(' y '),
          seg('protected', 'protected'),
          seg('.'),
        ),
        question(
          seg('¿Para qué sirven '),
          seg('get', 'get'),
          seg(' y '),
          seg('set', 'set'),
          seg('?'),
        ),
        question(seg('¿Qué significa encapsulamiento?')),
        question(seg('Diferencia entre clase e interfaz.')),
        question(seg('¿Qué significa '), seg('implements', 'implements'), seg('?')),
        question(
          seg('¿Qué significan '),
          seg('static', 'static'),
          seg(' y '),
          seg('final', 'final'),
          seg('?'),
        ),
      ],
    },
    {
      summary: 'Base de datos y persistencia',
      questions: [
        question(seg('¿Qué es una tabla relacional?')),
        question(seg('¿Qué es una clave primaria?')),
        question(seg('¿Qué es una clave foránea?')),
        question(seg('¿Qué significa CRUD?')),
        question(seg('¿Qué es JDBC?')),
        question(seg('¿Qué es un procedimiento almacenado?')),
        question(seg('¿Qué es DAO?')),
        question(seg('¿Por qué separar SQL del Controller?')),
      ],
    },
    {
      summary: 'JavaFX y arquitectura',
      questions: [
        question(seg('¿Qué es JavaFX?')),
        question(seg('¿Qué es FXML?')),
        question(seg('¿Qué función cumple SceneBuilder?')),
        question(seg('¿Qué es un Controller?')),
        question(seg('¿Qué significa '), seg('@FXML', '@FXML'), seg('?')),
        question(seg('¿Qué significa MVC?')),
        question(seg('¿Qué responsabilidad tiene el modelo?')),
        question(seg('¿Qué responsabilidad tiene la vista?')),
        question(seg('¿Qué responsabilidad tiene el controlador?')),
        question(seg('Dibuja el recorrido de un dato hasta MySQL.')),
      ],
    },
  ];
}