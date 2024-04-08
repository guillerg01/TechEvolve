import React from "react";

// components

export default function CardProfile() {
	return (
		<>
			<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
				<div className="px-2">
					<div className="flex flex-wrap justify-center">
						<div className="w-full px-4 flex justify-center">
							<div className="relative">
								<img
									alt="..."
									src="/img/team-2-800x800.jpg"
									className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
								/>
							</div>
						</div>
						<div className="w-full px-2 text-center mt-20">
							<div className="flex justify-center py-4 lg:pt-4 pt-8">
								<div className=" p-1 text-center">
									<span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
										22
									</span>
									<span className="text-sm text-blueGray-400">Amigos</span>
								</div>
								<div className=" p-1 text-center">
									<span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
										10
									</span>
									<span className="text-sm text-blueGray-400">Tareas</span>
								</div>
								<div className=" p-1 text-center">
									<span className="text-lg font-bold block uppercase tracking-wide text-blueGray-600">
										89
									</span>
									<span className="text-sm text-blueGray-400">Puntuación</span>
								</div>
							</div>
						</div>
					</div>
					<div className="text-center mt-12">
						<h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
							Jenna Stones
						</h3>
						<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
							<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
							La UCI, Habana
						</div>
						<div className="mb-2 text-blueGray-600 mt-10">
							<i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
							Sin Trabajo
						</div>
						<div className="mb-2 text-blueGray-600">
							<i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
							Universidad de Ciencias Informáticas
						</div>
					</div>
					<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
						<div className="flex flex-wrap justify-center">
							<div className="w-full lg:w-9/12 ">
								<p className="mb-4 text-lg leading-relaxed text-blueGray-700">
									An artist of considerable range, Jenna the name taken by
									Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
									and records all of his own music, giving it a warm, intimate
									feel with a solid groove structure. An artist of considerable
									range.
								</p>
								<a
									href="#pablo"
									className="font-normal text-lightBlue-500"
									onClick={(e) => e.preventDefault()}
								>
									Ver más
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
