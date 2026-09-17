import { Component } from '@angular/core';

interface Segment {
  t?: string;
  c?: string;
}

interface EntregaItem {
  name: string;
  items: Segment[][];
  span?: boolean;
}

function seg(text: string, code?: string): Segment {
  return code !== undefined ? { t: text, c: code } : { t: text };
}

@Component({
  selector: 'app-entrega',
  imports: [],
  templateUrl: './entrega.component.html',
  styleUrl: './entrega.component.scss',
})
export class EntregaComponent {
  protected readonly cards: EntregaItem[] = [
    {
      name: 'Proyecto y Librerías',
      items: [
        [seg('Código organizado por paquetes.')],
        [seg('Carpeta '), seg('lib/', 'lib/'), seg(' con archivos JAR configurados.')],
        [seg('Flujo funcional mínimo.')],
        [seg('Base de datos operativa.')],
        [seg('Vistas FXML construidas en SceneBuilder.')],
      ],
    },
    {
      name: 'Documentación en Markdown',
      items: [
        [seg('Javadoc completo en código.')],
        [seg(''), seg('GLOSARIO.md', 'GLOSARIO.md'), seg(' (Mínimo 25 conceptos).')],
        [seg(''), seg('CUESTIONARIO.md', 'CUESTIONARIO.md'), seg(' (28 respuestas).')],
        [seg(''), seg('COMPONENTES.md', 'COMPONENTES.md'), seg(' (Bitácora completa).')],
      ],
    },
    {
      name: 'Repositorio Git local e Integración GitHub',
      span: true,
      items: [
        [seg('Proyecto inicializado y vinculado usando GitHub CLI ('), seg('gh', 'gh'), seg(').')],
        [
          seg(''),
          seg('main', 'main'),
          seg(' representa la versión estable con Tag '),
          seg('v1.0.0', 'v1.0.0'),
          seg('.'),
        ],
        [
          seg(''),
          seg('develop', 'develop'),
          seg(' contiene la integración del trabajo.'),
        ],
        [
          seg('Las tareas se desarrollan en ramas '),
          seg('feature/*', 'feature/*'),
          seg('.'),
        ],
      ],
    },
  ];
}