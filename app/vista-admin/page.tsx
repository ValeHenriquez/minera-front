import Card from "@/components/Card";
import FactoresCarga from "@/components/FactoresCarga";
import SolicitudAcceso from "@/components/SolicitudAcceso";

export default function VistaAdmin() {

    const data = [
        {
        flota: "CAT 797",
        fase1: "293,4",
        fase2: "326,3",
        },
        {
            flota: "KOM 930",
            fase1: "294,2",
            fase2: "320,4",
        },
    ]

    const dataSoli = [
        {
            usuarioPendiente: "juan@minerales-raros.cl",
            fechaSolicitud: "23-05-2023",
            estado: "pendiente",
        },
        {
            usuarioPendiente: "mario@minerales-raros.cl",
            fechaSolicitud: "27-05-2023",
            estado: "pendiente",
        }
    ]

    return (
        <main className="flex min-h-screen flex-grow items-center justify-between p-6 bg-blue-900">

            <div className="flex flex-col flex-grow h-screen space-y-4 mt-8 mb-8">
                <Card title="Factores de Carga">
                <div className="flex justify-between">
                    <FactoresCarga data={data}/>
                    <FactoresCarga data={data}/>
                    <FactoresCarga data={data}/>
                </div>
                    
                </Card>
                <Card title="Solicitud de acceso pendientes">
                    <SolicitudAcceso data={dataSoli} />
                </Card>
            </div>
        </main>
    );
}