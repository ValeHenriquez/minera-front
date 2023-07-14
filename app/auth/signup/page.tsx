'use client'
import SignUpForm from "@/components/SignUpForm";

//Esta funcion es la que se encarga de renderizar la página de registro
const signUpPage = () => {
    return (
        <main className="flex flex-col flex-grow min-h-screen items-center p-24">
            <SignUpForm />
        </main>
    );
}

export default signUpPage;