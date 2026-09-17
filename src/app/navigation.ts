export interface NavItem {
  path: string;
  label: string;
  icon: string;
  badge?: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

/** Página de inicio (a la que apunta el logo y /). */
export const HOME_PATH = 'inicio';

/** Menú lateral izquierdo — cada punto del documento es una página enlazada. */
export const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Etapas',
    items: [
      { path: 'diagnostico', label: 'Diagnóstico', icon: 'quiz', badge: '01' },
      { path: 'librerias', label: 'Setup Librerías', icon: 'folder_zip', badge: '02' },
      { path: 'git-flow', label: 'Git Flow local y GitHub', icon: 'account_tree', badge: '03' },
      { path: 'archivos-md', label: 'Archivos .md', icon: 'description', badge: '04' },
      { path: 'semana-1', label: 'Semana 1 · Modelo', icon: 'view_module', badge: '05' },
      { path: 'semana-2', label: 'Semana 2 · DAO', icon: 'storage', badge: '06' },
      { path: 'semana-3', label: 'Semana 3 · MVC', icon: 'dashboard_customize', badge: '07' },
      { path: 'semana-4', label: 'Semana 4 · Integración', icon: 'integration_instructions', badge: '08' },
    ],
  },
  {
    title: 'Referencia',
    items: [
      { path: 'arquitectura', label: 'Mapa de arquitectura', icon: 'account_tree' },
      { path: 'procedimiento', label: 'Procedimiento por clase', icon: 'route' },
      { path: 'javadoc', label: 'Guía Javadoc', icon: 'menu_book' },
      { path: 'inventario', label: 'Inventario de paquetes', icon: 'inventory_2' },
    ],
  },
  {
    title: 'Recursos',
    items: [
      { path: 'glosario', label: 'Glosario paralelo', icon: 'menu_book' },
      { path: 'bitacora', label: 'Análisis de componentes', icon: 'edit_note' },
      { path: 'checklist', label: 'Checklist final', icon: 'task_alt' },
      { path: 'rubrica', label: 'Rúbrica', icon: 'fact_check' },
      { path: 'entrega', label: 'Entrega final', icon: 'rocket_launch' },
    ],
  },
];

/** Enlaces cortos de la barra superior. */
export const TOP_NAV: NavItem[] = [
  { path: 'inicio', label: 'Inicio', icon: 'home' },
  { path: 'diagnostico', label: 'Diagnóstico', icon: 'quiz' },
  { path: 'librerias', label: 'Librerías', icon: 'folder_zip' },
  { path: 'git-flow', label: 'Git Flow', icon: 'account_tree' },
  { path: 'archivos-md', label: 'Documentos .md', icon: 'description' },
  { path: 'arquitectura', label: 'Ruta', icon: 'account_tree' },
  { path: 'rubrica', label: 'Rúbrica', icon: 'fact_check' },
];