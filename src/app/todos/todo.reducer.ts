import { createReducer, on } from '@ngrx/store';
import { borrar, crear, editar, limpiarTodos, toggle, toggleAll } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo("Salvar el mundo", 1234),
    new Todo("Destruir la TVA", 123),
    new Todo("Robar el  martillo de thor", 123456),
];

export const todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }
            return todo;

        })
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            }
            return todo;

        })
    }),
    on(borrar, (state, { id }) => state.filter(todo => todo.id !== id)),
    on(toggleAll, (state, { completado }) => state.map(todo => {
        return {
            ...todo,
            completado: completado
        }
    })),
    on(limpiarTodos, state => state.filter(todo => !todo.completado)),

);


