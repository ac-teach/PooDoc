import { Component } from '@angular/core';

interface Segment {
  t?: string;
  c?: string;
}

interface PackageItem {
  name: string;
  sub: string;
  suffix: string;
}

interface GitStep {
  label: string;
  segments: Segment[];
}

function seg(text: string, code?: string): Segment {
  return code !== undefined ? { t: text, c: code } : { t: text };
}

function step(label: string, ...segments: Segment[]): GitStep {
  return { label, segments };
}

const MODEL_NAMES = [
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
];

const DAO_NAMES = [
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
];

const CONTROLLER_NAMES = [
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
];

@Component({
  selector: 'app-semana-4',
  imports: [],
  templateUrl: './semana-4.component.html',
  styleUrl: './semana-4.component.scss',
})
export class Semana4Component {
  protected readonly items: PackageItem[] = [
    ...MODEL_NAMES,
    ...DAO_NAMES,
    ...CONTROLLER_NAMES,
  ].map((name) => ({
    name,
    sub: 'inventario total de packages',
    suffix: 'terminar + Javadoc + prueba',
  }));

  protected readonly gitSteps: GitStep[] = [
    step(
      'Antes de comenzar:',
      seg('vuelve a '),
      seg('develop', 'develop'),
      seg(' y actualiza tu copia local.'),
    ),
    step(
      'Crea la rama:',
      seg(' '),
      seg(
        'git flow feature start documentation-release',
        'git flow feature start documentation-release',
      ),
      seg('. Una rama es una copia de trabajo donde haces cambios sin poner en riesgo '),
      seg('develop', 'develop'),
      seg('.'),
    ),
    step('Trabaja:', seg(' crea los archivos de esta semana, agrega Javadoc, prueba y corrige.')),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "docs(javadoc): completar documentación de todos los paquetes"',
        'git commit -m "docs(javadoc): completar documentación de todos los paquetes"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "docs(md): finalizar CUESTIONARIO, GLOSARIO y COMPONENTES"',
        'git commit -m "docs(md): finalizar CUESTIONARIO, GLOSARIO y COMPONENTES"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "release: preparar version 1.0.0"',
        'git commit -m "release: preparar version 1.0.0"',
      ),
      seg('.'),
    ),
    step(
      'Sube la rama:',
      seg(' '),
      seg(
        'git push -u origin feature/documentation-release',
        'git push -u origin feature/documentation-release',
      ),
      seg('.'),
    ),
    step(
      'Pull Request:',
      seg(' abre un Pull Request desde '),
      seg('feature/documentation-release', 'feature/documentation-release'),
      seg(' hacia '),
      seg('develop', 'develop'),
      seg('. Un Pull Request es una solicitud para revisar y unir tus cambios.'),
    ),
    step(
      'No cierres la semana en local solamente:',
      seg(' el docente debe poder revisar tus commits y el Pull Request.'),
    ),
  ];
}