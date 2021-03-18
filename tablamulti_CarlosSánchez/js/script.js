function generar_tabla(){
	let tabla = parseInt(document.getElementById("tabla").value);
	let resultados = parseInt(document.getElementById("multiplicador").value);

	let tabla_html = document.getElementById("tabla_html");
	if(tabla_html){
		document.getElementById("body").removeChild(tabla_html);
	}
	tabla_html=document.createElement("tabla");
	tabla_html.setAttribute("id","tabla_html");
	let fila = document.createElement("tr");
	let col1 = document.createElement("th");
	col1.innerText="TABLA";
	let col2 = document.createElement("th");
	col2.innerText="MULTIPLICADOR";
	let col3 = document.createElement("th");
	col3.innerText="RESULTADO";

	fila.appendChild(col1);
	fila.appendChild(col2);
	fila.appendChild(col3);

	tabla_html.appendChild(fila);
	//tabla_html.setAttribute("id", "tabla");

	document.getElementById("body").appendChild(tabla_html);


	for(i=0;i<resultados;i++){
		let coltabla = document.createElement("td");
		coltabla.innerText=tabla;

		let colmulti = document.createElement("td");
		colmulti.innerText=i+1;

		let colres = document.createElement("td");
		colres.innerText=tabla * (i+1);
		let filares =  document.createElement("tr");
		filares.appendChild(coltabla);
		filares.appendChild(colmulti);
		filares.appendChild(colres);

		tabla_html.appendChild(filares);


	}
}