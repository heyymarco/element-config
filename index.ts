export default class ElementConfig {
    private deconfigure       : () => void;
    private configure         : () => void;



    constructor(
        className   : string | null = null,
        varPrefix   : string | null = null,

        deconfigure : (() => void) | null = null,
        configure   : (() => void) | null = null
    ) {
        this._class         = className || "";
        this._varPrefix     = varPrefix || "";

        this.deconfigure   = deconfigure || (() => {});
        this.configure     = configure || (() => {});
    }
    
    

    // a variable for remembering current ".your-class-name" class name.
    _class = "";

    /**
     * @returns default returning ".your-class-name" class name.
     */
    get class() : string {
        return this._class;
    }

    /**
     * Customize the ".your-class-name" class name.
     */
    set class(name : string) {
        this.set(/*className = */name, /*varPrefix = */null);
    }



    // a variable for remembering current "yr-c-n" css variable prefix name.
    _varPrefix = "";

    /**
     * @returns default returning "yr-c-n" css variable prefix name.
     */
    get varPrefix() : string {
        return this._varPrefix;
    }

    /**
     * Customize the "yr-c-n" css variable prefix name.
     */
    set varPrefix(name : string) {
        this.set(/*className = */null, /*varPrefix = */name);
    }



    /**
     * Customize the ".your-class-name" class name and the "yr-c-n" css variable prefix name.
     * @className Customize the ".your-class-name" class name.
     * @varPrefix Customize the "yr-c-n" css variable prefix name.
     */
    set(className : string | null = null, varPrefix : string | null = null) {
        const modifClass      = (className != null) && (this._class != className);
        const modifVarPrefix  = (varPrefix != null) && (this._varPrefix != varPrefix);

        if (modifClass || modifVarPrefix) {
            this.deconfigure();

            if (modifClass) this._class = className!;
            if (modifVarPrefix) this._varPrefix = varPrefix!;

            this.configure();
        }
    }
}