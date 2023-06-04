import { useState } from "react";
import {userServiceFactory} from "../clientServices/userServices";
import useUser from "../lib/useUser";
import truck from './assets/img/vehiculo.png';

const userService = userServiceFactory();
export default function Login() : any {
    const {user, mutateUser} = useUser({
        redirectTo: "/",
        redirectIfFound: true,
    });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const MyComponent: React.FC = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            try {
                await userService.login(username, password);
                // Aquí debes usar la función mutateUser para actualizar el estado del usuario
            } catch (error: any) {
                const responseError = error.response?.data?.error;
                alert(responseError || 'An error occurred.');
            }
        };

        const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(e.target.value);
        };

        const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
        };

        return (
            <div className={"bg-white px-10 py-20 rounded-3xl border-2 border-gray-100"}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <h1 className="text-5xl font-semibold">Iniciar sesión</h1>
                    <div className="flex items-center justify-center animate-bounce" style={{marginLeft: '10px'}}>
                        <img src={truck.src} style={{width: '50px'}}/>
                    </div>
                </div>
                <div className={"mt-8"}>
                    <div>
                        <label className={"text-lg font-medium"}>Email</label>
                        <form>
                            <input
                                name='email'
                                className='w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff'
                                placeholder='Ingresa tu email'
                                type="email"


                            />
                        </form>
                    </div>
                    <div className={"mt-8"}>
                        <label className={"text-lg font-medium"}>Contraseña</label>
                        <form>
                            <input
                                name='password'
                                className='w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff'
                                placeholder='Ingresa tu contraseña'
                                type="password"

                            />
                        </form>
                    </div>
                    <div className={"mt-8 flex flex-col gap-y-4"}>
                        <button
                            className={"activate:scale-[.98] activate:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-blue-600 text-white text-lg font-bold rounded-xl py-3 border-blue-600"}>LOGIN
                        </button>
                    </div>
                    <div className={"mt-8 flex items-center justify-center"}>
                        <button className={"font-medium text-base text-blue-700"}>Acceso invitado</button>
                    </div>
                </div>
            </div>
        );
    }
}