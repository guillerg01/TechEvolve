import React, { useEffect, useState } from "react";
import Link from "next/link";

// layout for page

import Auth from "layouts/Auth.js";
import axios from "axios";
import router from "next/router";

export default function Login() {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	useEffect(() => {
		localStorage.getItem("x-token") && router.push("/");
	}, []);
	const handleSubmitLogin = (event) => {
		event.preventDefault();
		axios
			.post(
				`https://cronometro.onrender.com/api/auth/`,
				{
					name: event.target[0].value,
					password: event.target[1].value,
				},
				{
					headers: { "Content-Type": "application/json" },
				}
			)
			.then((response) => {
				if (response.data.ok) {
					// Guardar el token en localStorage
					localStorage.setItem("x-token", response.data.token);
					console.log(localStorage.getItem("x-token"));
					console.log(response);
					setUser("");
					setPassword("");
					localStorage.getItem("x-token") && router.push("/admin/dashboard");
				} else {
					console.error(response.data.msg);
				}
			})
			.catch(() => console.error());
	};

	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="rounded-t mb-0 px-6 py-6">
								<div className="text-center mb-3">
									<h6 className="text-blueGray-500 text-sm font-bold">
										Inicia sesión con
									</h6>
								</div>
								<div className="btn-wrapper text-center">
									<button
										className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
										type="button"
									>
										<img alt="..." className="w-5 mr-1" src="/img/github.svg" />
										Github
									</button>
									<button
										className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
										type="button"
									>
										<img alt="..." className="w-5 mr-1" src="/img/google.svg" />
										Google
									</button>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<div className="text-blueGray-400 text-center mb-3 font-bold">
									<small>O inicia sesión con tu correo</small>
								</div>
								<form onSubmit={handleSubmitLogin}>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Correo
										</label>
										<input
											type="email"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Correo"
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Password"
										/>
									</div>
									<div>
										<label className="inline-flex items-center cursor-pointer">
											<input
												id="customCheckLogin"
												type="checkbox"
												className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
											/>
											<span className="ml-2 text-sm font-semibold text-blueGray-600">
												Recuerdame
											</span>
										</label>
									</div>

									<div className="text-center mt-6">
										<button
											className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
											type="submit"
										>
											Inicia sesión
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<a
									href="#pablo"
									onClick={(e) => e.preventDefault()}
									className="text-blueGray-200"
								>
									<small>Forgot password?</small>
								</a>
							</div>
							<div className="w-1/2 text-right">
								<Link href="/auth/register">
									<a href="#pablo" className="text-blueGray-200">
										<small>Create new account</small>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

Login.layout = Auth;
