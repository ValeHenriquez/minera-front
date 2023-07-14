'use client';
import LoginForm from "@/components/LoginForm";

//Esta funcion es la que se encarga de renderizar la página de login 
const LoginPage = () => {
    return (
        <main className="flex flex-col flex-grow min-h-screen items-center p-24">
            <LoginForm />
        </main>
    )
}

export default LoginPage;