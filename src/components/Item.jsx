import React from "react";
import "../hojas-de-estilo/Item.css";
import { Link } from "react-router-dom";

function Item({ travels }) {         

  return (
    <Link to={`/item/${travels.id}`} className="li_per contenedor-Item">
      <div className="anyTravel">
        <img
          className="imagen-Item"
          src={travels.imagen}
          alt={travels.imagen}
        />
      </div>
      <div className="contenedor-texto-Item">
        <p className="nombre-Item">
          <strong>
            {travels.titulo} en {travels.pais}
          </strong> 
        </p>
        <p className="incluye-Item">{travels.incluye}</p>
        <p className="precio-Item">US$ {travels.precio}.-</p>
         <div className='agregarACarrito'> Mas detalles</div> 
      </div>
    </Link>
  );
}

export default Item;
