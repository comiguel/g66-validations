export default {
    methods: {
        isAdultUser(date) {
            const currentDate = new Date();
            const eighteenYearsBeforeDate = (new Date()).setFullYear(currentDate.getFullYear() - 18);
            return date <= eighteenYearsBeforeDate ? true
                : date > currentDate ? 'Ingresa una fecha válida'
                : 'Debes tener al menos 18 años para registrarte';
        },
        chileRut: (rut) => {
            let numberRut = rut.replace(/[^0-9kK]+/g,'').toLowerCase().slice(0, -1);
            if (numberRut.length > 6) {
                let auxArray = [3,2,7,6,5,4,3,2];
                let sum = 0;
                if(numberRut.length === 7 && numberRut[0] !== '0') {
                    numberRut = '0' + numberRut;
                }
                for (let i = numberRut.length - 1; i >= 0; i--) {
                    sum += parseInt(numberRut[i])*auxArray[i];
                }
                switch(11 - sum%11){
                    case 11:
                        return rut.slice(-1) == 0;
                    case 10:
                        return rut.slice(-1) == 'k' || rut.slice(-1) == 'K';
                    default:
                        return rut.slice(-1) == (11 - sum%11);
                }
            }
            return false;
        },
        peruDni: (dni) => {
            dni = dni.replace('-', '').trim().toUpperCase();
            if (!dni || dni.length < 9) return false;
            const multiples = [3, 2, 7, 6, 5, 4, 3, 2];
            const dcontrols = {
                numbers: [6, 7, 8, 9, 0, 1, 1, 2, 3, 4, 5],
                letters: ['K', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
            }
            const numdni = dni.substring(0, dni.length - 1).split('');
            const dcontrol = dni.substring(dni.length - 1);
            const dsum = numdni.reduce((acc, digit, index) => {
                acc += digit * multiples[index];
                return acc;
            }, 0)
            const key = 11 - (dsum % 11);
            const index = (key === 11) ? 0 : key;
            if (/^\d+$/.test(dni)) {
                return dcontrols.numbers[index] === parseInt(dcontrol, 10);
            }
            return dcontrols.letters[index] === dcontrol;
        }
    }
}