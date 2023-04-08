const convertArabicToRoman = require('./script');
const convertRomanToArabic = require('./script');

describe('test func convertArabicToRoman()', () => {

    test('Funciotn should convert 437 to CDXXXVII', () => {
        expect(convertArabicToRoman(437)).toBe('CDXXXVII');
    })

    test('Funciotn should convert 1403 to MCDIII', () => {
        expect(convertArabicToRoman(1403)).toBe('MCDIII');
    })
})

describe('test func convertRomanToArabic()', () => {

    test('Funciotn should convert CDXXXVII to 437', () => {
        expect(convertRomanToArabic('CDXXXVII')).toBe(437);
    })

    test('Funciotn should convert MCDIII to 1403', () => {
        expect(convertRomanToArabic('MCDIII')).toBe(1403);
    })   

})






