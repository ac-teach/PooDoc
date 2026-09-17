import { Component } from '@angular/core';

interface PackageCard {
  title: string;
  text: string;
  span?: boolean;
}

@Component({
  selector: 'app-inventario',
  imports: [],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss',
})
export class InventarioComponent {
  protected readonly packages: PackageCard[] = [
    {
      title: 'model · 11',
      text: 'Autor, AutorLibro, Categoria, Cliente, DetalleVenta, Editorial, Libro, LineaFactura, LineaVenta, Usuario, Venta.',
    },
    {
      title: 'dao · 12',
      text: 'AutorDAO, AutorLibroDAO, CategoriaDAO, ClienteDAO, Crud, Dao, DetalleVentaDAO, EditorialDAO, FacturaDAO, LibroDAO, UsuarioDAO, VentaDAO.',
    },
    {
      title: 'dao/impl · 10',
      text: 'Implementaciones concretas de los DAOs específicos del dominio.',
    },
    {
      title: 'controller · 17',
      text: 'Todos los controladores JavaFX del proyecto, desde autenticación y dashboards hasta ventas e inventario.',
    },
    { title: 'util · 2', text: 'Conexion y SecurityUtil.' },
    { title: 'manager · 1', text: 'SesionContext.' },
    { title: 'exception · 1', text: 'ValidacionException.' },
    { title: 'system · 1', text: 'Principal.' },
    {
      title: 'view · FXML/CSS',
      text: 'No son archivos Java. Debes revisar todos los archivos existentes en view/fxml y view/style, relacionándolos con sus controladores.',
      span: true,
    },
  ];
}