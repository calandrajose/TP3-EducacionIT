
const operation = ({ num1, num2, operacion }) => {
    const validOps = ['suma', 'resta', 'multiplicacion', 'division'].indexOf(operacion.toLowerCase()) > -1;
    const parsed1 = parseFloat(num1);
    const parsed2 = parseFloat(num2);
    const isNotValid = isNaN(parsed1) || isNaN(parsed2) || !validOps || (operacion === 'division' && parsed2 === 0)
    
    if (isNotValid) {
        console.log('entro');
        
        return {error: {
            num1: { valor: parsed1 , tipo: typeof parsed1 },
            num2: { valor: parsed2 , tipo: typeof parsed2 },
            operacion: { valor: operacion || null, tipo: typeof operacion }
        }}
    }

    let result;
    switch (operacion) {
        case 'suma': result = parsed1 + parsed2; break;
        case 'resta': result = parsed1 - parsed2; break;
        case 'multiplicacion': result = parsed1 * parsed2; break;
        case 'division': result = parsed1 / parsed2; break;
    }
    return {
        num1: parsed1,
        num2: parsed2,
        operacion,
        resultado: result === undefined ? 0 : result
    };
}

export default operation