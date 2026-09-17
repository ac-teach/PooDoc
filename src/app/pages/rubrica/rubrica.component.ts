import { Component } from '@angular/core';

interface RubricRow {
  criterion: string;
  pts: string;
  evidence: string;
}

@Component({
  selector: 'app-rubrica',
  imports: [],
  templateUrl: './rubrica.component.html',
  styleUrl: './rubrica.component.scss',
})
export class RubricaComponent {
  protected readonly rows: RubricRow[] = [
    {
      criterion: 'Comprensión de arquitectura',
      pts: '20',
      evidence: 'Explica MVC, capas y responsabilidades.',
    },
    {
      criterion: 'POO',
      pts: '15',
      evidence: 'Modelos, encapsulamiento, interfaces y relaciones.',
    },
    {
      criterion: 'MVC + DAO',
      pts: '20',
      evidence: 'Flujo funcional con responsabilidades separadas.',
    },
    {
      criterion: 'JavaFX + FXML + SceneBuilder',
      pts: '15',
      evidence: 'Vista construida y vinculada al Controller.',
    },
    {
      criterion: 'MySQL + JDBC (Librerías lib/)',
      pts: '10',
      evidence: 'Persistencia, configuración manual de JARs y explicación.',
    },
    {
      criterion: 'Javadoc con etiquetas principales',
      pts: '8',
      evidence: 'Documentación con @param, @return, @throws en todo el código.',
    },
    {
      criterion: 'Entregables Markdown (.md)',
      pts: '4',
      evidence: 'GLOSARIO.md (25+), CUESTIONARIO.md y COMPONENTES.md.',
    },
    {
      criterion: 'Setup Git y GitHub',
      pts: '5',
      evidence: 'Ramas, commits mediante Git local y vinculación de repo con gh cli.',
    },
    {
      criterion: 'Defensa individual',
      pts: '3',
      evidence: 'Explicación sin depender del código como guion.',
    },
  ];
}