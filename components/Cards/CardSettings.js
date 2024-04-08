"use client";
import CardTable from "components/Table/Table";
import React, { useEffect, useState } from "react";

// components

export default function CardSettings() {
	const [search, setSearch] = useState("");
	const [filteredCountries, setFilteredCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [tipoDesarrollo, setTipoDesarrollo] = useState("");
	const [plataforma, setPlataforma] = useState("");
	const [lenguaje, setLenguaje] = useState("");
	const [framework, setFramework] = useState("");
	const [metodoPago, setMetodoPago] = useState("");
	const [monto, setMonto] = useState("");
	const [detalles, setDetalles] = useState("");

	const [tecnologias, setTecnologias] = useState({
		headers: ["Tecnología", "Plataforma", "Framework"],
		rows: [
			["JavaScript", "Web", "React"],
			["Kotlin", "Móvil", "Flutter"],
			["Python", "Web", "Django"],
		],
	});
	const [proyects, setProyects] = useState({
		headers: [
			"Descripción del proyecto",
			"Rol desempeñado",
			"Tecnologías utilizadas",
		],
		rows: [
			[
				"Descripción del proyecto 1",
				"Rol desempeñado 1",
				"Tecnologías utilizadas 1",
			],
			[
				"Descripción del proyecto 2",
				"Rol desempeñado 2",
				"Tecnologías utilizadas 2",
			],
			[
				"Descripción del proyecto 3",
				"Rol desempeñado 3",
				"Tecnologías utilizadas 3",
			],
		],
	});

	const handleTipoDesarrolloChange = (e) => {
		setTipoDesarrollo(e.target.value);
		setPlataforma("");
		setLenguaje("");
		setFramework("");
	};
	const agregarTecnologia = () => {
		setTecnologias((prevTecnologias) => ({
			...prevTecnologias,
			rows: [...prevTecnologias.rows, [tipoDesarrollo, plataforma, framework]],
		}));
		// Limpiar los campos después de agregar
		setTipoDesarrollo("");
		setPlataforma("");
		setLenguaje("");
		setFramework("");
	};
	const handlePlataformaChange = (e) => {
		setPlataforma(e.target.value);
		setLenguaje("");
		setFramework("");
	};

	const handleLenguajeChange = (e) => {
		setLenguaje(e.target.value);
		setFramework("");
	};
	const handleFrameworkChange = (e) => {
		setFramework(e.target.value);
	};

	const handleMetodoPagoChange = (e) => {
		setMetodoPago(e.target.value);
	};

	const handleMontoChange = (e) => {
		setMonto(e.target.value);
	};

	const handleDetallesChange = (e) => {
		setDetalles(e.target.value);
	};

	const comentarios = [
		{ texto: "Excelente trabajo", calificacion: 5 },
		{ texto: "Buen rendimiento", calificacion: 4 },
		{ texto: "Necesita mejorar", calificacion: 3 },
	];
	const desarrolloYTecnologias = {
		frontend: {
			web: {
				lenguajes: ["JavaScript", "TypeScript", "Python"],
				frameworks: [
					"React",
					"Angular",
					"Vue.js",
					"Ninguno (HTML CSS JS puro)",
				],
			},
			android: {
				lenguajes: ["Kotlin", "Java"],
				frameworks: ["Flutter", "Android Studio"],
			},
			ios: {
				lenguajes: ["Swift", "Objective-C"],
				frameworks: ["SwiftUI", "UIKit"],
			},
			windows: {
				lenguajes: ["C#", "C++"],
				frameworks: [".NET", "WinUI"],
			},
		},
		backend: {
			web: {
				lenguajes: ["Java", "Python", "Ruby", "PHP", "Node.js", "C# (.NET)"],
				frameworks: [
					"Spring",
					"Django",
					"Ruby on Rails",
					"Laravel",
					"Express.js",
					"ASP.NET",
				],
			},
			api: {
				lenguajes: ["Java", "Python", "Ruby", "PHP", "Node.js", "C# (.NET)"],
				frameworks: [
					"Spring",
					"Django",
					"Ruby on Rails",
					"Laravel",
					"Express.js",
					"ASP.NET",
				],
			},
		},
		fullstack: {
			web: {
				lenguajes: [
					"JavaScript",
					"TypeScript",
					"Python",
					"Ruby",
					"PHP",
					"Java",
					"C# (.NET)",
				],
				frameworks: [
					"React",
					"Angular",
					"Vue.js",
					"Django",
					"Flask",
					"Ruby on Rails",
					"Laravel",
					"ASP.NET",
				],
			},
			android: {
				lenguajes: ["Kotlin", "Java"],
				frameworks: ["Flutter", "Android Studio"],
			},
			ios: {
				lenguajes: ["Swift", "Objective-C"],
				frameworks: ["SwiftUI", "UIKit"],
			},
			windows: {
				lenguajes: ["C#", "C++"],
				frameworks: [".NET", "WinUI"],
			},
		},
	};

	useEffect(() => {
		const countries = require("countries_esp").paises.todos;

		const results = countries.filter((country) =>
			country.nombre.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredCountries(results.slice(0, 5));
	}, [search]);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleCountrySelect = (country) => {
		setSelectedCountry(country);
		setSearch(country);
	};
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
				<div className="rounded-t bg-white mb-0 px-6 py-6">
					<div className="text-center flex justify-between">
						<h6 className="text-blueGray-700 text-xl font-bold">Mi cuenta</h6>
						<button
							className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
							type="button"
						>
							Editar
						</button>
					</div>
				</div>
				<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
					<form>
						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Información de usuario
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										nombre de usuario
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="lucky.jesse"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Correo Electrónico
									</label>
									<input
										type="email"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="jesse@example.com"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Nombre y Apellidos
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="Pedro Santana Perez"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Numero de Contacto
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										placeholder="+53 ********"
									/>
								</div>
							</div>

							<div className="flex flex-wrap w-full px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										País
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										value={search}
										onChange={handleSearchChange}
									/>
									{search.length > 0 && (
										<div className="absolute z-50 mt-2 w-full bg-white rounded shadow-lg">
											{filteredCountries.map((country, index) => (
												<div
													key={index}
													className="cursor-pointer hover:bg-blueGray-100 px-3 py-2"
													onClick={() => handleCountrySelect(country.nombre)}
												>
													{country.nombre}
												</div>
											))}
										</div>
									)}
								</div>
							</div>
						</div>
						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Sobre mi
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										About me
									</label>
									<textarea
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										rows="4"
										defaultValue="Yo soy yo"
									></textarea>
								</div>
							</div>
						</div>
						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Experiencia Laboral
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="empresaAnterior"
									>
										Empresa anterior
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="empresaAnterior"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="puesto"
									>
										Puesto
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="puesto"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="duracion"
									>
										Duración
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="duracion"
									/>
								</div>
							</div>
						</div>
						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Educación
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="gradoAcademico"
									>
										Grado académico
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="gradoAcademico"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="institucion"
									>
										Institución
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="institucion"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="campoEstudio"
									>
										Campo de estudio
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="campoEstudio"
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Proyectos Realizados
						</h6>
						<div className="flex flex-wrap">
							<CardTable color="light" data={proyects} />
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="descripcionProyecto"
									>
										Descripción del proyecto
									</label>
									<textarea
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="descripcionProyecto"
									></textarea>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="rolProyecto"
									>
										Rol desempeñado
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="rolProyecto"
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="tecnologiasProyecto"
									>
										Tecnologías utilizadas
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="tecnologiasProyecto"
									/>
								</div>
							</div>
							<div className="flex justify-end w-full items-center mt-4">
								<button
									className="bg-blueGray-700 active:bg-blueGray-600 hover:bg-blueGray-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
									type="button"
								>
									Agregar Proyecto
								</button>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Progreso de Capacitación
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="cursosCompletados"
									>
										Cursos completados
									</label>
									<ol className="border-0 px-3 py-3  text-blueGray-600  text-s   w-full  ">
										<li>-Curso 1</li>
										<li>-Curso 2</li>
										<li>-Curso 3</li>
										{/* Agrega más elementos <li> aquí para cada curso completado */}
									</ol>
								</div>

								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="progresoCapacitacion"
									>
										Progreso de capacitación{" "}
										<span className="text-red-600">: 20%</span>
									</label>
									<div className="relative pt-1">
										<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blueGray-200">
											<div
												style={{ width: "50%" }}
												className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blueGray-500"
											></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Listado de Tareas Asignadas y Completadas
						</h6>
						<div className="relative w-full mb-3">
							<label
								className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								htmlFor="tareasAsignadas"
							>
								Tareas Asignadas
							</label>
							<ol className="border-0 px-3 py-3 text-blueGray-600 text-s w-full">
								<li>- Tarea Asignada 1</li>
								<li>- Tarea Asignada 2</li>
								<li>- Tarea Asignada 3</li>
								{/* Agrega más elementos <li> aquí para cada tarea asignada */}
							</ol>
						</div>

						<div className="relative w-full mb-3">
							<label
								className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
								htmlFor="tareasCompletadas"
							>
								Tareas Completadas
							</label>
							<ol className="border-0 px-3 py-3 text-blueGray-600 text-s w-full">
								<li>- Tarea Completada 1</li>
								<li>- Tarea Completada 2</li>
								{/* Agrega más elementos <li> aquí para cada tarea completada */}
							</ol>
						</div>
						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Opiniones y Calificaciones
						</h6>

						<div>
							<div className="flex flex-wrap">
								<div className="w-full lg:w-12/12 px-4">
									{comentarios.map((comentario, index) => (
										<div
											key={index}
											className="relative w-full mb-3 p-4 bg-white rounded shadow-md"
										>
											<label
												className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
												htmlFor={`comentario-${index}`}
											>
												Comentario {index + 1}
											</label>
											<div className="flex items-center">
												<span className="text-blueGray-600">
													Calificación:{" "}
												</span>
												<div className="flex ml-2">
													{[...Array(5)].map((_, i) => (
														<span key={i} className="star text-yellow-500">
															{i < comentario.calificacion ? "★" : "☆"}
														</span>
													))}
												</div>
											</div>
											<p className="text-blueGray-600 text-sm">
												{comentario.texto}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Información de Pago
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="metodoPago"
									>
										Método de Pago
									</label>
									<select
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="metodoPago"
										value={metodoPago}
										onChange={handleMetodoPagoChange}
									>
										<option value="">Seleccione un método</option>
										<option value="tarjeta">Tarjeta de Crédito/Débito</option>
										<option value="paypal">PayPal</option>
										<option value="usdt">USDT</option>
										<option value="zona">Pago por EnZona</option>
									</select>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="monto"
									>
										Monto
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="monto"
										placeholder="Ingrese el monto a pagar"
										value={monto}
										onChange={handleMontoChange}
									/>
								</div>
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="detalles"
									>
										Detalles de Pago
									</label>
									<textarea
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="detalles"
										rows="4"
										placeholder="Ingrese detalles adicionales de pago"
										value={detalles}
										onChange={handleDetallesChange}
									></textarea>
								</div>
							</div>
						</div>
						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Tecnologías
						</h6>
						<div className="flex flex-wrap">
							<CardTable color="light" data={tecnologias} />
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="tipoDesarrollo"
									>
										Agregar
									</label>
									<select
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										name="tipoDesarrollo"
										value={tipoDesarrollo}
										onChange={handleTipoDesarrolloChange}
									>
										<option value="">Seleccione un tipo</option>
										<option value="frontend">Front-end</option>
										<option value="backend">Back-end</option>
										<option value="fullstack">Full-stack</option>
									</select>
								</div>
								{tipoDesarrollo && (
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="plataforma"
										>
											Plataforma
										</label>
										<select
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											name="plataforma"
											value={plataforma}
											onChange={handlePlataformaChange}
										>
											<option value="">Seleccione una plataforma</option>
											{Object.keys(desarrolloYTecnologias[tipoDesarrollo]).map(
												(plat, index) => (
													<option key={index} value={plat}>
														{plat}
													</option>
												)
											)}
										</select>
									</div>
								)}
								{plataforma && (
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="lenguaje"
										>
											Lenguaje
										</label>
										<select
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											name="lenguaje"
											value={lenguaje}
											onChange={handleLenguajeChange}
										>
											<option value="">Seleccione un lenguaje</option>
											{desarrolloYTecnologias[tipoDesarrollo][
												plataforma
											].lenguajes.map((lang, index) => (
												<option key={index} value={lang}>
													{lang}
												</option>
											))}
										</select>
									</div>
								)}
								{lenguaje && (
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="framework"
										>
											Framework
										</label>
										<select
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											name="framework"
											value={framework}
											onChange={handleFrameworkChange}
										>
											<option value="">Seleccione un framework</option>
											{desarrolloYTecnologias[tipoDesarrollo][
												plataforma
											].frameworks.map((fw, index) => (
												<option key={index} value={fw}>
													{fw}
												</option>
											))}
										</select>
									</div>
								)}
							</div>
							<div className="flex justify-end w-full items-center mt-4">
								<button
									className="bg-blueGray-700 active:bg-blueGray-600 hover:bg-blueGray-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
									type="button"
									onClick={agregarTecnologia}
								>
									Agregar Tecnologia
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
