'use client'
import SignUpForm from "@/components/SignUpForm";

const signUpPage = () => {
    return (
        <main className="flex flex-col flex-grow min-h-screen items-center p-24">
            <SignUpForm />
        </main>
    );
}

export default signUpPage;