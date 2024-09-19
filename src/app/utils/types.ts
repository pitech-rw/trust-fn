// Add user type
interface User {
    id: number,
    email: string,
    phone: string,
    role: string,
    created_at: string,
    updated_at: string,
    status: string
    isActivated: boolean
}


export type { User }
