import {useState, useEffect} from 'react';

export function Product(){
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://demoproyectobackendvercel.vercel.app/products/')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setProductos(data);
        })
    },[]);

    const mostrarDetalle = (p)=>{
        console.log(p.id, p.nombre, p.color, p.precio);
    }

    return(
        <>
            <h1>Productos</h1>
            <ul>
                {productos.map((p,i)=>(
                    <div key={i}>
                        <img src={p.imagen} 
                        style={{width:'100px'}} 
                        onClick={()=>mostrarDetalle(p)} />
                        {p.nombre}
                    </div>
                ))}
            </ul>
        </>
    )
}