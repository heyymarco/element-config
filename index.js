"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class ElementConfig{constructor(className=null,varPrefix=null,deconfigure=null,configure=null,configFirst=!1){this._class="",this._varPrefix="",this._class=className||"",this._varPrefix=varPrefix||"",this.deconfigure=deconfigure||(()=>{}),this.configure=configure||(()=>{}),configFirst&&setTimeout(()=>{this.configure()},10)}get class(){return this._class}set class(name){this.set(name,null)}get varPrefix(){return this._varPrefix}set varPrefix(name){this.set(null,name)}set(className=null,varPrefix=null){const modifClass=null!=className&&this._class!=className,modifVarPrefix=null!=varPrefix&&this._varPrefix!=varPrefix;(modifClass||modifVarPrefix)&&(this.deconfigure(),modifClass&&(this._class=className),modifVarPrefix&&(this._varPrefix=varPrefix),this.configure())}}exports.default=ElementConfig;
