import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELCTED, DELETED, TOGGLED } from "./actionTypes";

export const added = (todoText) => ({
    type: ADDED,
    payload: todoText
})

export const toggled = (id) => ({
    type: TOGGLED,
    payload: id
})

export const colorSelected = (id, color) => ({
    type: COLORSELCTED,
    payload: { id, color }
})

export const deleted = (id) => ({
    type: DELETED,
    payload: id
})

export const allCompleted = () => ({
    type: ALLCOMPLETED
})

export const clearcompleted = () => ({
    type: CLEARCOMPLETED
})

