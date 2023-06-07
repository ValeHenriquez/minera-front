'use client'
import SignUpForm from "@/components/SignUpForm";

const signUpPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignUpForm />
        </main>
    );
}

export default signUpPage;