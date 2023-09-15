enum NAMES {
    DERP ='derp',
    DERPETTE ='derpette',
    DERPINA = 'derpina'

}
const ifDerp = (name: string): boolean =>{
    return name === NAMES.DERP;
};

const ifDerpetter = (name: string): boolean =>{
    return name === NAMES.DERPETTE;
};

const ifDerpina = (name: string): boolean =>{
    return name === NAMES.DERPINA;
};

function checkNames(msg: string): boolean{
    return ifDerp(msg) || ifDerpetter(msg) || ifDerpina(msg);
}