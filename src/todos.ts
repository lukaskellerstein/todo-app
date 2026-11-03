export interface Todo {
  id: number
  text: string
  completed: boolean
}

export const sampleTodos: Todo[] = [
  { id: 1, text: 'Buy groceries for the week', completed: false },
  { id: 2, text: 'Finish quarterly report', completed: true },
  { id: 3, text: 'Schedule dentist appointment', completed: false },
  { id: 4, text: 'Read "Designing Data-Intensive Applications"', completed: false },
  { id: 5, text: 'Update project dependencies', completed: true },
  { id: 6, text: 'Go for a 30-minute run', completed: false },
]

// Fast Refresh keeps component state, so an edit here would not reach the list.
// Reload the page instead, so useState starts again from the new data.
if (import.meta.hot) {
  import.meta.hot.accept(() => window.location.reload())
}
