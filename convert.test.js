const convertArabicToRoman = require('./script.js');
const convertRomanToArabic = require('./script.js');

describe('test func convertArabicToRoman()', () => {

    test('Funciotn should convert 437 to CDXXXVII', () => {
        expect(convertArabicToRoman.convertArabicToRoman(437)).toBe('CDXXXVII');
    })

    test('Funciotn should convert 1403 to MCDIII', () => {
        expect(convertArabicToRoman.convertArabicToRoman(1403)).toBe('MCDIII');
    })
})


describe('test func convertRomanToArabic()', () => {

    test('Funciotn should convert CDXXXVII to 437', () => {
        expect(convertRomanToArabic.convertRomanToArabic('CDXXXVII')).toBe(437);
    })

    test('Funciotn should convert MCDIII to 1403', () => {
        expect(convertRomanToArabic.convertRomanToArabic('MCDIII')).toBe(1403);
    })   

})






