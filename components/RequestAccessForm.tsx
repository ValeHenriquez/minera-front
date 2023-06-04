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
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                            <div className="flex-auto p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold">
                                    Necesitas obtener acceso?
                                </h4>
                                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                    Completa tus datos y revisaremos tu solicitud.
                                </p>
                                <div className="relative w-full mb-3 mt-8">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="full-name"
                                    >
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Nombre Completo"
                                        style={{ transition: "all .15s ease" }}
                                        {...register("fullname", { required: true })}
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Coreeo"
                                        style={{ transition: "all .15s ease" }}
                                        {...register("email", { required: true })}
                                    />
                                </div>

                                <div className="relative w-full mb-3">
                                    <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="message"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        rows={4}
                                        cols={80}
                                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                        placeholder="Escribe un mensaje..."
                                        {...register("message", { required: true })}
                                    />
                                </div>
                                <div className="text-center mt-6">
                                    <button
                                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
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
            </form>

        </>
    )
}


export default RequestAccessForm;

