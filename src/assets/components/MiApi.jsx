import { useEffect, useState } from "react";


const MiApi = () => {

    const [datos, setDatos] = useState([]);
    const [busqueda, setNuevaBusqueda] = useState("");

    useEffect (() => {
        obtenerData();
    }, []);

    console.log(datos)
    const searchQuotes = datos.filter((info) => {
        if (
            info.text.toLowerCase().includes(busqueda.toLowerCase()) ||
            (info.author && info.author.toLowerCase().includes(busqueda.toLowerCase()))
          ) {
            return true;
        }
        return false
    
      });

    const obtenerData = async () => {
        const url = "https://type.fit/api/quotes"
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        const mapear = data.map((infoQuotes) => {
            return {
                text: infoQuotes.text,
                author: infoQuotes.author,
            };
        
        });
    let ordenar = mapear.sort((function(a, b) {
        const nameA = a.text.toUpperCase(); 
        const nameB = b.text.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        };
        return 0;
      }));
    setDatos(ordenar);
    }

    

    return (
        <>
            <div >
                <nav>
                    <input 
                     className="form-control me-0 my-5"
                     placeholder="Find your favorite author or quote"
                     onChange={(e) => setNuevaBusqueda(e.target.value)}
                     value={busqueda}
                     />
                </nav>
                <div className="Lista">
                    <ul className="list-group">
                    {searchQuotes.map( ({text, author}) => <li className="list-group-item">{text} | <strong>{author}</strong></li>)}
                    </ul>
                    
                </div>
            </div>
        </>

    );
};

export default MiApi