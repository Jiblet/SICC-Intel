"use strict";
const config = require("../config.json");
const items = DatabaseServer.tables.templates.items;

const SICC = "5d235bb686f77443f4331278";
const DOCS_CASE = "590c60fc86f77412b13fddcf";
const INFO = "5448ecbe4bdc2d60728b4568"; // includes intel, secure flash drive, sliderkey etc
const KEYCARD_HOLDER_CASE = "619cbf9e0a7c3a1a2731940a";
const MAP = "567849dd4bdc2d150f8b456e";
const PROKILL = "5c1267ee86f77416ec610f72";
const GOLD_SKULL = "5d235a5986f77443f6329bc6";
const DOGTAG_BEAR = "59f32bb586f774757e1e8442";
const DOGTAG_USEC = "59f32c3b86f77472a31742f0";

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
      //Check we're enabled and add hte item IDs to the Filter array
      if(config.Change_SICC){
        items[SICC]
                ._props
                .Grids[0]
                ._props
                .filters[0]
                .Filter
                .push(INFO, KEYCARD_HOLDER_CASE, MAP);
      }
      
      //Check we're enabled and add hte item IDs to the Filter array
      if(config.Change_Docs){
        items[DOCS_CASE]
                ._props
                .Grids[0]
                ._props
                .filters[0]
                .Filter
                .push(PROKILL, GOLD_SKULL, DOGTAG_BEAR, DOGTAG_USEC);
      }
      
      //Now resise the cases using the values in config.json
      items[SICC]._props.Grids[0]._props.cellsH = config.SICC_Horizontal
      items[SICC]._props.Grids[0]._props.cellsV = config.SICC_Vertical
      items[DOCS_CASE]._props.Grids[0]._props.cellsH = config.Docs_Horizontal
      items[DOCS_CASE]._props.Grids[0]._props.cellsV = config.Docs_Vertical
	}
}

module.exports.Mod = Mod;

/*
By default the containers allow:
Docs
ID | in the other  | Description
0:string"59faff1d86f7746c51718c9c" | y | Physical bitcoin
1:string"5d235b4d86f7742e017bc88a" | y | GP coin
2:string"5f745ee30acaeb0d490d8c5b" | y | Veritas guitar pick
3:string"619cbf9e0a7c3a1a2731940a" | n | Keycard holder case
4:string"5448ecbe4bdc2d60728b4568" | n | Info parent - includes intelligence folders
5:string"543be5e94bdc2df1348b4568" | y | Keys
6:string"567849dd4bdc2d150f8b456e" | n | Map
7:string"543be5dd4bdc2deb348b4569" | y | Money

Sicc
0:string"59faff1d86f7746c51718c9c" | y | Physical bitcoin
1:string"5d235b4d86f7742e017bc88a" | y | GP coin
2:string"5f745ee30acaeb0d490d8c5b" | y | Veritas guitar pick
3:string"5c1267ee86f77416ec610f72" | n | prokill medallion
4:string"5d235a5986f77443f6329bc6" | n | gold skull ring
5:string"59f32bb586f774757e1e8442" | n | Dogtag BEAR
6:string"59f32c3b86f77472a31742f0" | n | Dogtag USEC
7:string"590c621186f774138d11ea29" | n | Secure Flash drive
8:string"543be5e94bdc2df1348b4568" | y | Keys
9:string"543be5dd4bdc2deb348b4569" | y | Money
*/