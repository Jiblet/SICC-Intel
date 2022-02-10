"use strict";

const items = DatabaseServer.tables.templates.items;
const SICC = "5d235bb686f77443f4331278";
const INTEL = "5c12613b86f7743bbe2c3f76";
const KEYCARD_HOLDER_CASE = "619cbf9e0a7c3a1a2731940a";

class Mod
{
	constructor()
    {
		this.mod = "SICC_Intel";
        Logger.info(`Loading: ${this.mod}`)
		ModLoader.onLoad[this.mod] = this.load.bind(this);
    }

    load()
    {	
		items[SICC]
                    ._props
                    .Grids[0]
                    ._props
                    .filters[0]
                    .Filter
                    .push(INTEL, KEYCARD_HOLDER_CASE)
	}
}

module.exports.Mod = Mod;