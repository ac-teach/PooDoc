import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.component').then((c) => c.InicioComponent),
  },
  {
    path: 'diagnostico',
    loadComponent: () =>
      import('./pages/diagnostico/diagnostico.component').then((c) => c.DiagnosticoComponent),
  },
  {
    path: 'librerias',
    loadComponent: () =>
      import('./pages/librerias/librerias.component').then((c) => c.LibreriasComponent),
  },
  {
    path: 'arquitectura',
    loadComponent: () =>
      import('./pages/arquitectura/arquitectura.component').then((c) => c.ArquitecturaComponent),
  },
  {
    path: 'git-flow',
    loadComponent: () =>
      import('./pages/git-flow/git-flow.component').then((c) => c.GitFlowComponent),
  },
  {
    path: 'archivos-md',
    loadComponent: () =>
      import('./pages/archivos-md/archivos-md.component').then((c) => c.ArchivosMdComponent),
  },
  {
    path: 'javadoc',
    loadComponent: () =>
      import('./pages/javadoc/javadoc.component').then((c) => c.JavadocComponent),
  },
  {
    path: 'semana-1',
    loadComponent: () => import('./pages/semana-1/semana-1.component').then((c) => c.Semana1Component),
  },
  {
    path: 'semana-2',
    loadComponent: () => import('./pages/semana-2/semana-2.component').then((c) => c.Semana2Component),
  },
  {
    path: 'semana-3',
    loadComponent: () => import('./pages/semana-3/semana-3.component').then((c) => c.Semana3Component),
  },
  {
    path: 'semana-4',
    loadComponent: () => import('./pages/semana-4/semana-4.component').then((c) => c.Semana4Component),
  },
  {
    path: 'procedimiento',
    loadComponent: () =>
      import('./pages/procedimiento/procedimiento.component').then((c) => c.ProcedimientoComponent),
  },
  {
    path: 'glosario',
    loadComponent: () =>
      import('./pages/glosario/glosario.component').then((c) => c.GlosarioComponent),
  },
  {
    path: 'bitacora',
    loadComponent: () =>
      import('./pages/bitacora/bitacora.component').then((c) => c.BitacoraComponent),
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./pages/inventario/inventario.component').then((c) => c.InventarioComponent),
  },
  {
    path: 'checklist',
    loadComponent: () =>
      import('./pages/checklist/checklist.component').then((c) => c.ChecklistComponent),
  },
  {
    path: 'rubrica',
    loadComponent: () =>
      import('./pages/rubrica/rubrica.component').then((c) => c.RubricaComponent),
  },
  {
    path: 'entrega',
    loadComponent: () =>
      import('./pages/entrega/entrega.component').then((c) => c.EntregaComponent),
  },
  { path: '**', redirectTo: 'inicio' },
];