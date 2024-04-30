import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin";
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />}/>

            <Route path="/conadmin" element={<ConciertoAdmin />}/>
            <Route path="/concrear" element={<ConciertoCrear />}/>
            <Route path="/conlistar" element={<ConciertoListar />}/>
            
            <Route path="*" element={<NoEncontrado />}/>
        </Routes>
    )
}