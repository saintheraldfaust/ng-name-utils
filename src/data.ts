import { NameProfile, Ethnicity } from './types';

export const NAME_DICTIONARY: Record<string, NameProfile> = {
    // --- YORUBA ---
    'ade': { name: 'Ade', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'adebayo': { name: 'Adebayo', gender: 'Male', ethnicity: ['Yoruba'] },
    'adebola': { name: 'Adebola', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'adedoyin': { name: 'Adedoyin', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'adewale': { name: 'Adewale', gender: 'Male', ethnicity: ['Yoruba'] },
    'abiodun': { name: 'Abiodun', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'ayomide': { name: 'Ayomide', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'boluwatife': { name: 'Boluwatife', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'damilola': { name: 'Damilola', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'enitan': { name: 'Enitan', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'femi': { name: 'Femi', gender: 'Male', ethnicity: ['Yoruba'] },
    'funke': { name: 'Funke', gender: 'Female', ethnicity: ['Yoruba'] },
    'gbenga': { name: 'Gbenga', gender: 'Male', ethnicity: ['Yoruba'] },
    'ibukun': { name: 'Ibukun', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'ifunanya': { name: 'Ifunanya', gender: 'Female', ethnicity: ['Igbo'] }, // Mixed list, but categorized
    'kehind': { name: 'Kehinde', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'kemi': { name: 'Kemi', gender: 'Female', ethnicity: ['Yoruba'] },
    'kunle': { name: 'Kunle', gender: 'Male', ethnicity: ['Yoruba'] },
    'layomi': { name: 'Layomi', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'mayowa': { name: 'Mayowa', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'nike': { name: 'Nike', gender: 'Female', ethnicity: ['Yoruba'] },
    'oluwaseun': { name: 'Oluwaseun', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'opeyemi': { name: 'Opeyemi', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'seun': { name: 'Seun', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'temitope': { name: 'Temitope', gender: 'Unisex', ethnicity: ['Yoruba'] },
    'tunde': { name: 'Tunde', gender: 'Male', ethnicity: ['Yoruba'] },
    'yemi': { name: 'Yemi', gender: 'Unisex', ethnicity: ['Yoruba'] },

    // --- IGBO ---
    'ada': { name: 'Ada', gender: 'Female', ethnicity: ['Igbo'] },
    'amaka': { name: 'Amaka', gender: 'Female', ethnicity: ['Igbo'] },
    'chibuike': { name: 'Chibuike', gender: 'Male', ethnicity: ['Igbo'] },
    'chidiebere': { name: 'Chidiebere', gender: 'Unisex', ethnicity: ['Igbo'] },
    'chidinma': { name: 'Chidinma', gender: 'Female', ethnicity: ['Igbo'] },
    'chigozie': { name: 'Chigozie', gender: 'Unisex', ethnicity: ['Igbo'] },
    'chika': { name: 'Chika', gender: 'Unisex', ethnicity: ['Igbo'] },
    'chinedu': { name: 'Chinedu', gender: 'Male', ethnicity: ['Igbo'] },
    'chinonso': { name: 'Chinonso', gender: 'Unisex', ethnicity: ['Igbo'] },
    'chisom': { name: 'Chisom', gender: 'Unisex', ethnicity: ['Igbo'] },
    'chukwudi': { name: 'Chukwudi', gender: 'Male', ethnicity: ['Igbo'] },
    'ebuka': { name: 'Ebuka', gender: 'Male', ethnicity: ['Igbo'] },
    'emeka': { name: 'Emeka', gender: 'Male', ethnicity: ['Igbo'] },
    'ifeanyi': { name: 'Ifeanyi', gender: 'Male', ethnicity: ['Igbo'] },
    'keju': { name: 'Keju', gender: 'Female', ethnicity: ['Igbo'] }, // Rare but exists
    'ngozi': { name: 'Ngozi', gender: 'Female', ethnicity: ['Igbo'] },
    'nkechi': { name: 'Nkechi', gender: 'Female', ethnicity: ['Igbo'] },
    'obi': { name: 'Obi', gender: 'Male', ethnicity: ['Igbo'] },
    'okey': { name: 'Okey', gender: 'Male', ethnicity: ['Igbo'] },
    'onyeka': { name: 'Onyeka', gender: 'Unisex', ethnicity: ['Igbo'] },
    'uche': { name: 'Uche', gender: 'Unisex', ethnicity: ['Igbo'] },

    // --- HAUSA ---
    'abdul': { name: 'Abdul', gender: 'Male', ethnicity: ['Hausa'] },
    'aisha': { name: 'Aisha', gender: 'Female', ethnicity: ['Hausa'] },
    'aliyu': { name: 'Aliyu', gender: 'Male', ethnicity: ['Hausa'] },
    'aminu': { name: 'Aminu', gender: 'Male', ethnicity: ['Hausa'] },
    'bello': { name: 'Bello', gender: 'Male', ethnicity: ['Hausa'] },
    'fatima': { name: 'Fatima', gender: 'Female', ethnicity: ['Hausa'] },
    'hassan': { name: 'Hassan', gender: 'Male', ethnicity: ['Hausa'] },
    'hussaini': { name: 'Hussaini', gender: 'Male', ethnicity: ['Hausa'] },
    'ibrahim': { name: 'Ibrahim', gender: 'Male', ethnicity: ['Hausa'] },
    'maryam': { name: 'Maryam', gender: 'Female', ethnicity: ['Hausa'] }, // Also common in others, but very Hausa
    'mohammed': { name: 'Mohammed', gender: 'Male', ethnicity: ['Hausa'] },
    'musa': { name: 'Musa', gender: 'Male', ethnicity: ['Hausa'] },
    'sani': { name: 'Sani', gender: 'Male', ethnicity: ['Hausa'] },
    'umar': { name: 'Umar', gender: 'Male', ethnicity: ['Hausa'] },
    'usman': { name: 'Usman', gender: 'Male', ethnicity: ['Hausa'] },
    'zainab': { name: 'Zainab', gender: 'Female', ethnicity: ['Hausa'] },

    // --- EDO ---
    'adesuwa': { name: 'Adesuwa', gender: 'Female', ethnicity: ['Edo'] },
    'efosa': { name: 'Efosa', gender: 'Male', ethnicity: ['Edo'] },
    'ehis': { name: 'Ehis', gender: 'Male', ethnicity: ['Edo'] },
    'nosa': { name: 'Nosa', gender: 'Male', ethnicity: ['Edo'] },
    'osas': { name: 'Osas', gender: 'Unisex', ethnicity: ['Edo'] },
    'osaze': { name: 'Osaze', gender: 'Male', ethnicity: ['Edo'] },

    // --- EFIK/IBIBIO ---
    'edidiong': { name: 'Edidiong', gender: 'Unisex', ethnicity: ['Efik', 'Ibibio'] },
    'emem': { name: 'Emem', gender: 'Unisex', ethnicity: ['Efik', 'Ibibio'] },
    'idara': { name: 'Idara', gender: 'Female', ethnicity: ['Efik', 'Ibibio'] },
    'ini': { name: 'Ini', gender: 'Unisex', ethnicity: ['Efik', 'Ibibio'] },
    'mfom': { name: 'Mfon', gender: 'Unisex', ethnicity: ['Efik', 'Ibibio'] },
    'ubong': { name: 'Ubong', gender: 'Male', ethnicity: ['Efik', 'Ibibio'] },
};

export const ETHNICITY_PATTERNS: { regex: RegExp; ethnicity: Ethnicity }[] = [
    { regex: /^(olu|ade|omi|ola|oye|ife|ibo)/i, ethnicity: 'Yoruba' },
    { regex: /^(chi|chuk|nwa|eke|obi|eze|okw|ugo)/i, ethnicity: 'Igbo' },
    { regex: /^(osa|ehi|omo)/i, ethnicity: 'Edo' },
    { regex: /^(abdul|moham|dan|mai|shehu|alhaji)/i, ethnicity: 'Hausa' },
    { regex: /^(edi|eti|obong|nsi|abasi)/i, ethnicity: 'Efik' } // Simplified
];

export const GENDER_HEURISTICS = {
    femaleSuffixes: [/a$/, /ye$/, /mi$/], // Very weak, need to be careful. 'Emeka' ends in 'a' but is male.
    malePrefixes: [/^olu/], // 'Olu' is often unisex but leans male in some compounds? No, Olu is God, very unisex.
    // Better heuristics:
    // Igbo: 'Chi' is unisex. 'Amaka' (Female).
    // Yoruba: 'Ade' is unisex.
};
