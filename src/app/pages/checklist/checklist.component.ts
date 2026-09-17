import { Component, computed, signal } from '@angular/core';

interface ChecklistItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-checklist',
  imports: [],
  templateUrl: './checklist.component.html',
  styleUrl: './checklist.component.scss',
})
export class ChecklistComponent {
  private readonly STORAGE_KEY = 'libraryapp-checklist';

  protected readonly items: ChecklistItem[] = [
    {
      title: 'Configuré las librerías .jar manualmente en `lib/`.',
      description: 'El proyecto compila sin gestores de dependencias Maven/Gradle.',
    },
    {
      title: 'Configuré el repositorio con gh cli y Git Flow local.',
      description: 'El repositorio está vinculado en la nube y manejo bien mis ramas de trabajo.',
    },
    {
      title: 'Completé CUESTIONARIO.md con las 28 preguntas.',
      description: 'Incluye explicaciones en mis propias palabras y ejemplos de LibraryApp.',
    },
    {
      title: 'Completé GLOSARIO.md con al menos 25 conceptos.',
      description: 'Sigue el formato de fichas con ubicación en el código y ejemplos.',
    },
    {
      title: 'Completé COMPONENTES.md para todas las clases reconstruidas.',
      description: 'Analiza capa, responsabilidades y dependencias.',
    },
    {
      title: 'Puedo explicar MVC con mis palabras.',
      description: 'Identifico modelo, vista y controller y conozco su responsabilidad.',
    },
    {
      title: 'Puedo explicar por qué existe DAO.',
      description: 'Sé diferenciar contrato DAO e implementación.',
    },
    {
      title: 'Puedo seguir un dato desde FXML hasta MySQL.',
      description: 'Puedo explicar cada capa del recorrido.',
    },
    {
      title: 'Construí un DAO y su implementación con JDBC.',
      description: 'Comprendo CRUD y su relación con CallableStatement.',
    },
    {
      title: 'Construí la vista en SceneBuilder vinculando el Controller.',
      description: 'Comprendo FXML, fx:id y eventos de usuario.',
    },
    {
      title: 'Agregué Javadoc formal usando @author, @param, @return y @throws.',
      description: 'Documentación completa en el 100% de clases y métodos.',
    },
    {
      title: 'Puedo demostrar el flujo Git Flow con el tag v1.0.0.',
      description:
        'Mi repositorio conserva ramas, commits significativos y versión etiquetada.',
    },
  ];

  protected readonly checked = signal<boolean[]>(this.items.map(() => false));

  protected readonly doneCount = computed(() => this.checked().filter(Boolean).length);

  protected readonly progress = computed(() =>
    this.items.length ? Math.round((this.doneCount() / this.items.length) * 100) : 0,
  );

  constructor() {
    this.loadState();
  }

  protected toggle(index: number): void {
    this.checked.update((state) => state.map((value, i) => (i === index ? !value : value)));
    this.saveState();
  }

  private loadState(): void {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        const stored = JSON.parse(raw) as boolean[];
        this.checked.set(this.items.map((_, i) => stored[i] === true));
      }
    } catch {
      this.checked.set(this.items.map(() => false));
    }
  }

  private saveState(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.checked()));
    } catch {
      // La persistencia no está disponible; el estado se mantiene en memoria.
    }
  }
}