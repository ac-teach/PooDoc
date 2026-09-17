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
  selector: 'app-semana-2',
  imports: [],
  templateUrl: './semana-2.component.html',
  styleUrl: './semana-2.component.scss',
})
export class Semana2Component {
  /** Collapsible toggle para la sección "¿Cuántos de cada qué? (Cantidades)". */
  protected readonly showCantidades = signal(true);

  protected readonly items: PackageItem[] = [
    { name: 'Dao.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Crud.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorLibroDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'CategoriaDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'ClienteDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'DetalleVentaDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'EditorialDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'FacturaDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'LibroDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'UsuarioDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'VentaDAO.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorLibroDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'CategoriaDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'ClienteDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'DetalleVentaDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'EditorialDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'FacturaDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'LibroDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'UsuarioDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'VentaDAOImpl.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'ValidacionException.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
    { name: 'SesionContext.java', sub: 'package dao / dao.impl / exception / manager', suffix: 'terminar + Javadoc + prueba' },
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
      seg('git flow feature start dao-persistence', 'git flow feature start dao-persistence'),
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
        'git commit -m "feat(dao): definir contratos DAO"',
        'git commit -m "feat(dao): definir contratos DAO"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "feat(dao): implementar acceso MySQL y procedimientos"',
        'git commit -m "feat(dao): implementar acceso MySQL y procedimientos"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "feat(session): agregar excepcion y contexto de sesión"',
        'git commit -m "feat(session): agregar excepcion y contexto de sesión"',
      ),
      seg('.'),
    ),
    step(
      'Sube la rama:',
      seg(' '),
      seg('git push -u origin feature/dao-persistence', 'git push -u origin feature/dao-persistence'),
      seg('.'),
    ),
    step(
      'Pull Request:',
      seg(' abre un Pull Request desde '),
      seg('feature/dao-persistence', 'feature/dao-persistence'),
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