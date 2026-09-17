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
  selector: 'app-semana-1',
  imports: [],
  templateUrl: './semana-1.component.html',
  styleUrl: './semana-1.component.scss',
})
export class Semana1Component {
  /** Collapsible toggle para la sección "¿Cuántos de cada qué? (Cantidades)". */
  protected readonly showCantidades = signal(true);

  protected readonly items: PackageItem[] = [
    { name: 'Principal.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Autor.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'AutorLibro.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Categoria.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Cliente.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'DetalleVenta.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Editorial.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Libro.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'LineaFactura.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'LineaVenta.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Usuario.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Venta.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'Conexion.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
    { name: 'SecurityUtil.java', sub: 'package model / system / util', suffix: 'terminar + Javadoc + prueba' },
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
      seg('git flow feature start model-foundation', 'git flow feature start model-foundation'),
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
        'git commit -m "feat(setup): preparar estructura inicial de LibraryApp_NombreApellido"',
        'git commit -m "feat(setup): preparar estructura inicial de LibraryApp_NombreApellido"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "feat(model): construir entidades del paquete model"',
        'git commit -m "feat(model): construir entidades del paquete model"',
      ),
      seg('.'),
    ),
    step(
      'Commit:',
      seg(' '),
      seg('git add .', 'git add .'),
      seg(' y después '),
      seg(
        'git commit -m "docs(javadoc): documentar entidades y actualizar glosario"',
        'git commit -m "docs(javadoc): documentar entidades y actualizar glosario"',
      ),
      seg('.'),
    ),
    step(
      'Sube la rama:',
      seg(' '),
      seg('git push -u origin feature/model-foundation', 'git push -u origin feature/model-foundation'),
      seg('.'),
    ),
    step(
      'Pull Request:',
      seg(' abre un Pull Request desde '),
      seg('feature/model-foundation', 'feature/model-foundation'),
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