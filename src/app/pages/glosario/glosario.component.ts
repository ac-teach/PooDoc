import { Component } from '@angular/core';

@Component({
  selector: 'app-glosario',
  imports: [],
  templateUrl: './glosario.component.html',
  styleUrl: './glosario.component.scss',
})
export class GlosarioComponent {
  protected readonly concepts: string[] = [
    'clase',
    'objeto',
    'encapsulamiento',
    'interfaz',
    'polimorfismo',
    'MVC',
    'DAO',
    'CRUD',
    'JDBC',
    'Connection',
    'ResultSet',
    'FXML',
    'SceneBuilder',
    '@FXML',
    'TableView',
    'ObservableList',
    'Singleton',
    'excepción',
  ];
}