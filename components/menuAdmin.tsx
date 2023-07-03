import * as React from 'react';
import '../components/assets/styles/styles.css'
import 'react-datepicker/dist/react-datepicker.css';
import MyDatepicker from "@/components/assets/datepicker/datepicker";
import PhaseTable from "@/components/assets/phaseTable/PhaseTable";


const MenuAdmin: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col bg-blue-200">
            <div className="h-1/2 flex justify-center p-1">
                <div className="custom-box bg-sky-400 rounded-2xl p-3">
                    <div className="grid grid-cols-2 items-center">
                        <div className="p-4">
                            <h1 className="text-xl text-black font-bold">FACTORES DE CARGA</h1>
                        </div>
                        <div className="flex items-center justify-end">
                            <label className="text-lg text-black font-bold">MES</label>
                            <MyDatepicker />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
                        <button className="flex justify-center items-center text-base font-bold font-roboto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1 hover:underline">
                            Esperanza
                        </button>
                        <button className="flex justify-center items-center text-base font-bold font-roboto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1 hover:underline">
                            Llano
                        </button>
                        <button className="flex justify-center items-center text-base font-bold font-roboto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1 hover:underline">
                            Tesoro
                        </button>
                    </div>
                    <div className="flex justify-center mt-2">
                        <div className="w-full">
                            <PhaseTable />
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
};


export default MenuAdmin;
