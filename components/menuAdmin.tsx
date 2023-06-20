import * as React from 'react';
import '../components/assets/styles/styles.css'
import 'react-datepicker/dist/react-datepicker.css';
import MyDatepicker from "@/components/assets/datepicker/datepicker";


const MenuAdmin: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-blue-200">

            <div className="h-1/2 flex justify-center p-1">
                <div className="custom-box bg-sky-400 rounded-2xl p-3">
                    <div className="grid grid-cols-2">
                        <div className="p-4">
                            <h1 className="text-xl text-black font-bold">FACTORES DE CARGA</h1>
                        </div>
                        <div >
                            <div className={"flex justify-end"}>
                                <label className="text-lg text-black font-bold mr-2 p-1">MES</label>
                                <MyDatepicker />
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-3 divide-x mt-5">
                        <div className="flex justify-center items-center text-2xl font-bold font-roboto bg-blue-200 bg-opacity-80 border border-blue-300 rounded-lg px-4 py-2">
                            Esperanza
                        </div>
                        <div className="flex justify-center items-center text-2xl font-bold font-roboto bg-blue-200 bg-opacity-80 border border-blue-300 rounded-lg px-4 py-2">
                            Llano
                        </div>
                        <div className="flex justify-center items-center text-2xl font-bold font-roboto bg-blue-200 bg-opacity-80 border border-blue-300 rounded-lg px-4 py-2">
                            Tesoro
                        </div>
                    </div>

                </div>
            </div>

            <div className="h-1/2 flex justify-center p-1">
                <div className="custom-box bg-sky-400 flex justify-start rounded-2xl p-3">
                    <h1 className="text-xl text-black font-bold">SOLICITUDES DE ACCESO PENDIENTES</h1>
                </div>
            </div>
        </div>
    );
}
export default MenuAdmin;