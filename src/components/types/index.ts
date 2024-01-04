import { type UUID } from "crypto";
import { colorsCourses } from "../constants";

export type ColorsCourses = typeof colorsCourses[number]; 

export type Course = {
    id: Number,
    created_at: Date,
    name: string,
    description: string,
    color: ColorsCourses,
    teacher: string | Profile
}

export type Profile = {
    id: UUID,
    type: "teacher" | "student",
    last_name: string,
    created_at: Date,
    first_name: string
}