import React from "react";
import PropTypes from "prop-types";

// components
import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable({ color, data }) {
	return (
		<>
			<div
				className={
					"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
					(color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
				}
			>
				<div className="rounded-t mb-0 px-4 py-3 border-0">
					<div className="flex flex-wrap items-center">
						<div className="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3
								className={
									"font-semibold text-lg " +
									(color === "light" ? "text-blueGray-700" : "text-white")
								}
							>
								Card Tables
							</h3>
						</div>
					</div>
				</div>
				<div className="block w-full overflow-x-auto">
					{/* Projects table */}
					<table className="items-center w-full bg-transparent border-collapse">
						<thead>
							<tr>
								{/* Aquí puedes generar las cabeceras de la tabla dinámicamente */}
								{data.headers.map((header, index) => (
									<th
										key={index}
										className={
											"px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
											(color === "light"
												? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
												: "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
										}
									>
										{header}
									</th>
								))}
								<th></th>
							</tr>
						</thead>
						<tbody>
							{data.rows.map((row, index) => (
								<tr key={index}>
									{row.map((cell, cellIndex) => (
										<td
											key={cellIndex}
											className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
										>
											{cell}
										</td>
									))}
									<td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
										<TableDropdown />
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

CardTable.defaultProps = {
	color: "light",
};

CardTable.propTypes = {
	color: PropTypes.oneOf(["light", "dark"]),
	data: PropTypes.shape({
		headers: PropTypes.arrayOf(PropTypes.string).isRequired,
		rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
	}).isRequired,
};
