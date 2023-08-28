import React from "react";


import "./index.css";
import { Recherche } from "../Recherche";

export function Header() {
    return (
			<div className="header-container__clz">
				<h5 className="text-header-container__clz" >
					Weather-App
					ygyugiu
					<Recherche />
				</h5>
			</div>
		);
}
