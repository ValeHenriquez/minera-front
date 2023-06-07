import * as React from 'react';
import { useForm } from "react-hook-form";
import truck from './assets/img/vehiculo.png';
import Link from 'next/link';

type FormData = {
    name: string,
    email: string,
    password: string
};

const SignUpForm: React.FC = () => {

    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));

        reset();

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={"bg-white px-10 py-20 rounded-3xl border-2 border-gray-100"}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 className="text-black text-5xl font-semibold">Registrarse </h1>
                    <div className="flex items-center justify-center animate-bounce" style={{ marginLeft: '10px' }}>
                        <img src={truck.src} style={{ width: '50px' }} />
                    </div>
                </div>
                <div className={"mt-8"}>
                    <div>
                        <label className={"text-lg font-medium"}>Nombre</label>
                        <input
                            className='w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff'
                            placeholder='Ingresa tu nombre'
                            type="name"
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div>
                        <label className={"text-lg font-medium"}>Email</label>
                        <input
                            className='w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff'
                            placeholder='Ingresa tu email'
                            type="email"
                            {...register("email", { required: true })}
                        />
                    </div>
                    <label className={"text-lg font-medium"}>Contraseña</label>
                    <input
                        className='w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff'
                        placeholder='Ingresa tu contraseña'
                        type="password"
                        {...register("password", { required: true })}

                    />
                    <div className={"mt-8 flex flex-col gap-y-4"}>
                        <button
                            className={"activate:scale-[.98] activate:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-blue-600 text-white text-lg font-bold rounded-xl py-3 border-blue-600"}>
                            REGISTRARSE
                        </button>
                    </div>
                    <div className={"mt-8 flex items-center justify-center"}>
                        <Link href="/req-access"
                            className={"font-medium text-base text-blue-700"}>Solicitar Acceso invitado
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );

}

export default SignUpForm;