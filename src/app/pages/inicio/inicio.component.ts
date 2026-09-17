import { Component } from '@angular/core';

interface WeekClasses {
  week: number;
  label: string;
  meta: string;
  total: number;
  classes: string[];
}

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent {
  protected readonly baseClassesByWeek: WeekClasses[] = [
    {
      week: 1,
      label: 'Semana 1 · Modelo de Dominio',
      meta: '1 system + 11 model + 2 util',
      total: 14,
      classes: [
        'Principal.java',
        'Autor.java',
        'AutorLibro.java',
        'Categoria.java',
        'Cliente.java',
        'DetalleVenta.java',
        'Editorial.java',
        'Libro.java',
        'LineaFactura.java',
        'LineaVenta.java',
        'Usuario.java',
        'Venta.java',
        'Conexion.java',
        'SecurityUtil.java',
      ],
    },
    {
      week: 2,
      label: 'Semana 2 · Persistencia con DAO',
      meta: '12 dao + 10 dao/impl + 1 exception + 1 manager',
      total: 24,
      classes: [
        'Dao.java',
        'Crud.java',
        'AutorDAO.java',
        'AutorLibroDAO.java',
        'CategoriaDAO.java',
        'ClienteDAO.java',
        'DetalleVentaDAO.java',
        'EditorialDAO.java',
        'FacturaDAO.java',
        'LibroDAO.java',
        'UsuarioDAO.java',
        'VentaDAO.java',
        'AutorDAOImpl.java',
        'AutorLibroDAOImpl.java',
        'CategoriaDAOImpl.java',
        'ClienteDAOImpl.java',
        'DetalleVentaDAOImpl.java',
        'EditorialDAOImpl.java',
        'FacturaDAOImpl.java',
        'LibroDAOImpl.java',
        'UsuarioDAOImpl.java',
        'VentaDAOImpl.java',
        'ValidacionException.java',
        'SesionContext.java',
      ],
    },
    {
      week: 3,
      label: 'Semana 3 · Controllers JavaFX',
      meta: 'package controller + vistas FXML/CSS',
      total: 17,
      classes: [
        'AdminDashboradController.java',
        'AutorController.java',
        'AutorLibroController.java',
        'CajeroController.java',
        'CategoriaController.java',
        'ClienteController.java',
        'DetalleVentaController.java',
        'EditorialController.java',
        'EmpleadoController.java',
        'FacturaController.java',
        'InicioSesionController.java',
        'InventarioController.java',
        'LibroController.java',
        'ListaVentasController.java',
        'RegistrarUsuarioController.java',
        'UsuarioController.java',
        'VentaController.java',
      ],
    },
  ];
}