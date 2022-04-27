export type User = {
    id: number;
    first_name: string;
    last_name: string;
    email:  string;
    gender:  gender;
}

export type gender = "Male" | "Female" | "Other"