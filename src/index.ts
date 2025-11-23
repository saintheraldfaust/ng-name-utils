import { NAME_DICTIONARY, ETHNICITY_PATTERNS } from './data';
import { Gender, GenderPrediction, EthnicityPrediction, Ethnicity, MatchType } from './types';

export class NgNameUtils {
    
    /**
     * Sanitizes a name string.
     * - Removes non-alphabetical characters (except hyphens and apostrophes).
     * - Converts to Title Case (handling hyphens).
     * 
     * @param name The raw name string.
     * @returns The sanitized name.
     */
    static sanitize(name: string): string {
        if (!name) return '';
        
        // 1. Remove unwanted characters (keep letters, hyphens, apostrophes, spaces)
        let clean = name.replace(/[^a-zA-Z\-\'\s]/g, '');
        
        // 2. Collapse multiple spaces/hyphens
        clean = clean.replace(/\s+/g, ' ').replace(/\-+/g, '-').trim();

        // 3. Title Case logic
        return clean.split(/(\s+|-)/).map(part => {
            if (part.match(/^[\s\-]+$/)) return part; // Preserve separators
            if (part.length === 0) return '';
            return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
        }).join('');
    }

    /**
     * Predicts the gender of a name.
     * Uses a 3-layer approach: Dictionary -> Contextual -> Heuristics.
     * 
     * @param firstName The first name.
     * @param middleName Optional middle name for context.
     * @returns GenderPrediction object.
     */
    static predictGender(firstName: string, middleName?: string): GenderPrediction {
        const cleanFirst = this.sanitize(firstName);
        const cleanMiddle = middleName ? this.sanitize(middleName) : undefined;
        const lowerFirst = cleanFirst.toLowerCase();

        // LAYER 1: Dictionary Lookup
        const profile = NAME_DICTIONARY[lowerFirst];
        if (profile) {
            // LAYER 2: Contextual (If Unisex)
            if (profile.gender === 'Unisex' && cleanMiddle) {
                const lowerMiddle = cleanMiddle.toLowerCase();
                const middleProfile = NAME_DICTIONARY[lowerMiddle];
                
                if (middleProfile) {
                    if (middleProfile.gender === 'Male') {
                        return { gender: 'Male', confidence: 0.85, matchType: 'Rule' };
                    }
                    if (middleProfile.gender === 'Female') {
                        return { gender: 'Female', confidence: 0.85, matchType: 'Rule' };
                    }
                }
                // Common English names context (Simple check)
                if (['Mary', 'Elizabeth', 'Grace', 'Rose'].includes(cleanMiddle)) return { gender: 'Female', confidence: 0.9, matchType: 'Rule' };
                if (['John', 'Peter', 'Paul', 'James'].includes(cleanMiddle)) return { gender: 'Male', confidence: 0.9, matchType: 'Rule' };
            }

            return { gender: profile.gender, confidence: 0.95, matchType: 'Dictionary' };
        }

        // LAYER 3: Heuristics (Regex)
        // Very basic heuristics for demo purposes. Real-world needs ML or massive lists.
        
        // Ends in 'a' is often female, BUT NOT ALWAYS (e.g. Emeka, Musa).
        // We need to be careful.
        
        if (lowerFirst.endsWith('a')) {
            // Exceptions check
            if (lowerFirst.endsWith('eka') || lowerFirst === 'musa' || lowerFirst === 'isa') {
                 return { gender: 'Male', confidence: 0.6, matchType: 'Rule' };
            }
            return { gender: 'Female', confidence: 0.5, matchType: 'Rule' };
        }

        if (lowerFirst.startsWith('olu') || lowerFirst.startsWith('ade')) {
            return { gender: 'Unisex', confidence: 0.7, matchType: 'Rule' };
        }

        return { gender: 'Unknown', confidence: 0, matchType: 'None' };
    }

    /**
     * Predicts the ethnicity of a name.
     * 
     * @param name The name to analyze.
     * @returns EthnicityPrediction object.
     */
    static predictEthnicity(name: string): EthnicityPrediction {
        const cleanName = this.sanitize(name);
        const lowerName = cleanName.toLowerCase();
        
        // 1. Dictionary Lookup
        const profile = NAME_DICTIONARY[lowerName];
        if (profile && profile.ethnicity.length > 0) {
            return { likelyEthnicities: profile.ethnicity, confidence: 0.95 };
        }

        // 2. Regex Patterns
        const matches: Ethnicity[] = [];
        for (const pattern of ETHNICITY_PATTERNS) {
            if (pattern.regex.test(lowerName)) {
                if (!matches.includes(pattern.ethnicity)) {
                    matches.push(pattern.ethnicity);
                }
            }
        }

        if (matches.length > 0) {
            return { likelyEthnicities: matches, confidence: 0.6 };
        }

        return { likelyEthnicities: [], confidence: 0 };
    }

    /**
     * Suggests an honorific based on gender.
     * 
     * @param gender The gender string.
     * @returns 'Mr.', 'Ms.', or 'Mx.'
     */
    static suggestHonorific(gender: Gender): string {
        switch (gender) {
            case 'Male': return 'Mr.';
            case 'Female': return 'Ms.'; // Modern default over Mrs./Miss
            case 'Unisex': return 'Mx.';
            default: return 'Mx.';
        }
    }
}

export * from './types';
