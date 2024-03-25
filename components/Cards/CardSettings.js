import React from "react";

// components

export default function CardSettings() {
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
							Ajustes
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
										Primer Nombre
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="Lucky"
									/>
								</div>
							</div>
							<div className="w-full lg:w-6/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Apellidos
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="Jesse"
									/>
								</div>
							</div>
						</div>

						<hr className="mt-6 border-b-1 border-blueGray-300" />

						<h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
							Información de contacto
						</h6>
						<div className="flex flex-wrap">
							<div className="w-full lg:w-12/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Dirección
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Ciudad
									</label>
									<input
										type="email"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="New York"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4">
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
										defaultValue="United States"
									/>
								</div>
							</div>
							<div className="w-full lg:w-4/12 px-4">
								<div className="relative w-full mb-3">
									<label
										className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
										htmlFor="grid-password"
									>
										Código Postal
									</label>
									<input
										type="text"
										className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
										defaultValue="Postal Code"
									/>
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
					</form>
				</div>
			</div>
		</>
	);
}
