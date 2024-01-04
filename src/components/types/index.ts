import { type UserIdentity } from "@supabase/supabase-js";
import { colorsCourses } from "../constants";

export type ColorsCourses = typeof colorsCourses[number]; 

export type Course = {
    id: Number,
    created_at: Date,
    name: string,
    description: string,
    color: ColorsCourses,
    teacher: string
}