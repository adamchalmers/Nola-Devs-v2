import { EntitySchema } from "typeorm"
import type { Event } from "$lib/types/event"

export const EventsEntity = new EntitySchema<Event>({
    name: 'events',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
            unique: true
        },
        summary: {
            type: String
        },
        calLink: {
            type: String
        },
        description: {
            type: String
        },
        location: {
            type: String
        },
        lng: {
            type: "double precision"
        },
        lat: {
            type: "double precision"
        },
        start: {
            type: Date
        },
        end: {
            type: Date
        }
    },
})