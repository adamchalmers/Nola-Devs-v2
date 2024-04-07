import { EntitySchema, LegacyOracleNamingStrategy } from "typeorm"
import type { Group } from "$lib/types/group"
import { EventsEntity } from "./events.model"

export const GroupsEntity = new EntitySchema<Group>({
    name: 'groups',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
            unique: true,
            nullable: false
        },
        group: {
            type: String,
            length: 50,
            nullable: false,
        },
        about: {
            type: String,
            length: 200,
            nullable: false
        },
        calID: {
            type: String,
            length: 100,
            nullable: false
        },
        links: {
            type: String,
            length: 100,
            nullable: false
        },
        icon: {
            type: String,
            length: 20,
            nullable: false
        }
    },
    relations: {

    },
})