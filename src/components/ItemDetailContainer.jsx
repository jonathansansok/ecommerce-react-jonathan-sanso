import React, { useState, useEffect } from 'react';
import '../hojas-de-estilo/ItemListContainer.css';
import {getProductById} from './data.js';
import ItemDetail from './ItemDetail.jsx';   

const ItemDetailContainer = () => {
	const [item, setItem] = useState([]);	
	const [loading, setLoading] = useState([]);
	const id = 4;	
	useEffect(() => {
		getProductById(id)
		setItem(() => {
		setLoading(id)}, 2000);
	},  []);
	return (
		<>
		<h1>ITEM DETAIL</h1>
		{loading ? <div>Cargando...</div>
		:<ItemDetail productos={item}	/>
		}
		</>
	);
};

 export default ItemDetailContainer; 

