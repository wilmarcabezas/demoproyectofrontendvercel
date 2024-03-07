import {useState, useEffect} from 'react';

export function Product(){
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState({});

    useEffect(()=>{
        fetch('https://demoproyectobackendvercel.vercel.app/products/')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setProductos(data);
        })
    },[]);

    const mostrarDetalle = (p)=>{
        setProductoSeleccionado(p); 
        console.log(productoSeleccionado);
    }

    return(
        <>
            <h1>Productos</h1>
            <ul>
                {productos.map((p,i)=>(
                    <div key={i}>
                        
                        <b>{p.nombre}</b><br/>
                        <img src={p.imagen} 
                        style={{width:'100px'}} 
                        onClick={()=>mostrarDetalle(p)} />
                        ${p.precio}
                    </div>
                ))}
            </ul>
            <hr/>
            <h2>Detalle del producto</h2>
            {productoSeleccionado && 
                <div>
                    Id: {productoSeleccionado.id}<br/>
                    Nombre: {productoSeleccionado.nombre}<br/>
                    Descripcion: {productoSeleccionado.descripcion}<br/>
                    Color: {productoSeleccionado.color}<br/>
                    Precio: {productoSeleccionado.precio}<br/>
                    Imagen: <img src={productoSeleccionado.imagen} style={{width:'100px'}} />
                </div>}
        </>
    )
}