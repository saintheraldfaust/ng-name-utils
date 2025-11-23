export type Gender = 'Male' | 'Female' | 'Unisex' | 'Unknown';
export type MatchType = 'Dictionary' | 'Rule' | 'None';
export type Ethnicity = 'Yoruba' | 'Igbo' | 'Hausa' | 'Edo' | 'Efik' | 'Ibibio' | 'Urhobo' | 'Other';

export interface NameProfile {
    name: string;
    gender: Gender;
    ethnicity: Ethnicity[];
}

export interface GenderPrediction {
    gender: Gender;
    confidence: number;
    matchType: MatchType;
}

export interface EthnicityPrediction {
    likelyEthnicities: Ethnicity[];
    confidence: number;
}
