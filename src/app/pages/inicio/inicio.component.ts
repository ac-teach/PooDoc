import { Component } from '@angular/core';

interface BaseClass {
  name: string;
}

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  protected readonly baseClasses: BaseClass[] = [
    { name: 'Principal.java' },
    { name: 'Libro.java' },
    { name: 'Autor.java' },
    { name: 'Categoria.java' },
    { name: 'Conexion.java' },
    { name: 'LibroDAO.java' },
    { name: 'LibroDAOImpl.java' },
    { name: 'LibroController.java' },
    { name: 'LibroView.fxml' },
  ];
}