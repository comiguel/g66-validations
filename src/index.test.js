import mixin from '.';

describe("it should verify if a date is 18 years younger than today", () => {
    it("should be true", () => {
        expect(mixin.methods.isAdultUser(new Date('1992', '12', '08'))).toBeTruthy();
    });

    it("should be false", () => {
        expect(typeof mixin.methods.isAdultUser(new Date('2005', '12', '08'))).toBe('string');
        expect(mixin.methods.isAdultUser(new Date('2005', '12', '08'))).toBe('Debes tener al menos 18 años para registrarte');
    });
});

describe("it should verify chilean rut numbers", () => {
    it("should be true", () => {
        expect(mixin.methods.chileRut('26090787-5')).toBeTruthy();
    });

    it("should be false", () => {
        expect(mixin.methods.chileRut('26090787-6')).toBeFalsy();
    });
});


describe("it should verify peruan dni numbers", () => {
    it("should be true", () => {
        expect(mixin.methods.chileRut('99877611-2')).toBeTruthy();
    });

    it("should be false", () => {
        expect(mixin.methods.chileRut('99877611-4')).toBeFalsy();
    });
});