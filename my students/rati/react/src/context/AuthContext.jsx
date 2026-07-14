import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <AuthContext.Provider value={{ name, password }}>
            {children}
        </AuthContext.Provider>
    )
}