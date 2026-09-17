import { Component, signal } from '@angular/core';

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

@Component({
  selector: 'app-semana-3',
  imports: [],
  templateUrl: './semana-3.component.html',
  styleUrl: './semana-3.component.scss',
})
export class Semana3Component {
  /** Collapsible toggle para la sección "¿Cuántos de cada qué? (Cantidades)". */
  protected readonly showCantidades = signal(true);

  protected readonly items: PackageItem[] = [
    { name: 'AdminDashboradController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorLibroController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'CajeroController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'CategoriaController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'ClienteController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'DetalleVentaController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'EditorialController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'EmpleadoController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'FacturaController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'InicioSesionController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'InventarioController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'LibroController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'ListaVentasController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'RegistrarUsuarioController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'UsuarioController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
    { name: 'VentaController.java', sub: 'package controller', suffix: 'terminar + Javadoc + prueba' },
  ];

  /** Vistas FXML/CSS de Semana 3 (el documento solo nombra LibroView.fxml;
   *  el resto son "todos los archivos existentes en view/fxml y view/style"). */
  protected readonly viewItems: PackageItem[] = [
    { name: 'LibroView.fxml', sub: 'package view/fxml', suffix: 'SceneBuilder + vincular con LibroController' },
    { name: 'Vistas FXML restantes', sub: 'package view/fxml', suffix: 'todas las existentes, relacionadas con sus controllers' },
    { name: 'Hojas de estilo CSS', sub: 'package view/style', suffix: 'estilos de las vistas' },
  ];

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
      seg('git flow feature start javafx-mvc', 'git flow feature start javafx-mvc'),
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
        'git commit -m "feat(controller): construir controladores JavaFX"',
        'git commit -m "feat(controller): construir controladores JavaFX"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "feat(view): completar vistas FXML y CSS"',
        'git commit -m "feat(view): completar vistas FXML y CSS"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "feat(mvc): conectar vista, controller, dao y model"',
        'git commit -m "feat(mvc): conectar vista, controller, dao y model"',
      ),
      seg('.'),
    ),
    step(
      'Sube la rama:',
      seg(' '),
      seg('git push -u origin feature/javafx-mvc', 'git push -u origin feature/javafx-mvc'),
      seg('.'),
    ),
    step(
      'Pull Request:',
      seg(' abre un Pull Request desde '),
      seg('feature/javafx-mvc', 'feature/javafx-mvc'),
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