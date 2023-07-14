import { useForm } from "react-hook-form";

type FormData = {
    fullname: string,
    email: string,
    message: string
};


const RequestAccessForm: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>(); //formState: { errors }, no estamos haciendo validaciones por ahora

    const onSubmit = (data: FormData) => {
        alert(JSON.stringify(data));
        //Mandar request a la API
        //Alertar de que se esta procesando la solicitud y reedireccionar al main
        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-5/6 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-3xl bg-white">
                            <div className="flex-auto p-5 lg:p-10">
                                <h1 className="text-5xl font-semibold mb-2">
                                    Necesitas obtener acceso?
                                </h1>
                                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                    Completa tus datos y revisaremos tu solicitud.
                                </p>
                                <div className="relative w-full mb-3 mt-8">
                                    <label
                                        className="text-lg font-medium mb-2"
                                        htmlFor="full-name"
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff"
                                        placeholder="Nombre Completo"
                                        style={{ transition: "all .15s ease" }}
                                        {...register("fullname", { required: true })}
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="text-lg font-medium mb-2"
                                        htmlFor="email"
                                    >
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff"
                                        placeholder="Correo"
                                        style={{ transition: "all .15s ease" }}
                                        {...register("email", { required: true })}
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="text-lg font-medium mb-2"
                                        htmlFor="message"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        rows={4}
                                        cols={80}
                                        className="w-full rounded-3xl border-2 border-blue-400 rounder-xl p-4 mt-1 bg-ffff"
                                        placeholder="Escribe un mensaje..."
                                        {...register("message", { required: true })}
                                    />
                                </div>
                                <div className="mt-8 flex flex-col gap-y-4">
                                    <button
                                        className="activate:scale-[.98] activate:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-blue-600 text-white text-lg font-bold rounded-xl py-3 border-blue-600"
                                        type="submit"
                                        style={{ transition: "all .15s ease" }}
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form >

        </>
    )
}


export default RequestAccessForm;

