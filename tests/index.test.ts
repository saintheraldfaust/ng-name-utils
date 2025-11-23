import { NgNameUtils } from '../src/index';

describe('NgNameUtils', () => {
    
    describe('sanitize', () => {
        test('should handle basic casing', () => {
            expect(NgNameUtils.sanitize('oluwaseun')).toBe('Oluwaseun');
            expect(NgNameUtils.sanitize('CHIDINMA')).toBe('Chidinma');
        });

        test('should handle hyphens', () => {
            expect(NgNameUtils.sanitize('oluwa-seun')).toBe('Oluwa-Seun');
            expect(NgNameUtils.sanitize('jean-pierre')).toBe('Jean-Pierre');
        });

        test('should remove unwanted characters', () => {
            expect(NgNameUtils.sanitize('Emeka123!')).toBe('Emeka');
            expect(NgNameUtils.sanitize('  Musa  ')).toBe('Musa');
        });
    });

    describe('predictGender', () => {
        test('should identify Male names from dictionary', () => {
            const result = NgNameUtils.predictGender('Tunde');
            expect(result.gender).toBe('Male');
            expect(result.matchType).toBe('Dictionary');
        });

        test('should identify Female names from dictionary', () => {
            const result = NgNameUtils.predictGender('Amaka');
            expect(result.gender).toBe('Female');
        });

        test('should identify Unisex names', () => {
            const result = NgNameUtils.predictGender('Biodun'); // Not in my small dict, let's use one that is
            // 'Abiodun' is in dict
            const result2 = NgNameUtils.predictGender('Abiodun');
            expect(result2.gender).toBe('Unisex');
        });

        test('should use context to resolve Unisex names', () => {
            // Abiodun (Unisex) + Mary (Female Context) -> Female
            const result = NgNameUtils.predictGender('Abiodun', 'Mary');
            expect(result.gender).toBe('Female');
            expect(result.matchType).toBe('Rule');
        });

        test('should use heuristics for unknown names', () => {
            // 'Zuwaira' ends in 'a' -> Female (Heuristic)
            // Note: Zuwaira is not in my small dict, so it hits heuristic
            const result = NgNameUtils.predictGender('Zuwaira');
            expect(result.gender).toBe('Female');
            expect(result.matchType).toBe('Rule');
        });

        test('should handle exceptions in heuristics', () => {
            // 'Emeka' ends in 'a' but is Male exception
            // Emeka is in dict, so let's use a fake name 'Bameka' to test heuristic exception if I added it?
            // Actually Emeka is in dict, so it returns Male Dictionary.
            // Let's test 'Musa' (in dict) -> Male.
            // Let's test a made up name 'Zuka' -> Ends in 'a' -> Female?
            // Let's test 'Chibueka' -> Ends in 'eka' -> Male rule?
            const result = NgNameUtils.predictGender('Chibueka');
            expect(result.gender).toBe('Male');
        });
    });

    describe('predictEthnicity', () => {
        test('should identify Yoruba names', () => {
            expect(NgNameUtils.predictEthnicity('Ade').likelyEthnicities).toContain('Yoruba');
        });

        test('should identify Igbo names', () => {
            expect(NgNameUtils.predictEthnicity('Chidinma').likelyEthnicities).toContain('Igbo');
        });

        test('should identify Hausa names', () => {
            expect(NgNameUtils.predictEthnicity('Musa').likelyEthnicities).toContain('Hausa');
        });

        test('should use regex for unknown names', () => {
            // 'Olanrewaju' (starts with Ola) -> Yoruba
            const result = NgNameUtils.predictEthnicity('Olanrewaju');
            expect(result.likelyEthnicities).toContain('Yoruba');
        });
    });

    describe('suggestHonorific', () => {
        test('should return Mr. for Male', () => {
            expect(NgNameUtils.suggestHonorific('Male')).toBe('Mr.');
        });
        test('should return Ms. for Female', () => {
            expect(NgNameUtils.suggestHonorific('Female')).toBe('Ms.');
        });
        test('should return Mx. for Unisex', () => {
            expect(NgNameUtils.suggestHonorific('Unisex')).toBe('Mx.');
        });
    });
});
