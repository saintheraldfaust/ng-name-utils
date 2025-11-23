# ng-name-utils

A lightweight, zero-dependency TypeScript library for parsing names, sanitizing inputs, and predicting gender/ethnicity for the Nigerian market.

## Features

- **Advanced Sanitization**: Handles compound names (e.g., "Oluwa-Seun"), fixes casing, and strips unwanted characters.
- **Gender Prediction**: Uses a 3-layer approach (Dictionary -> Contextual -> Heuristic) to predict gender with confidence scores.
- **Ethnicity Prediction**: Identifies major Nigerian ethnic groups (Yoruba, Igbo, Hausa, Edo, Efik/Ibibio) based on name patterns.
- **Honorifics**: Auto-suggests 'Mr.', 'Ms.', or 'Mx.'.
- **TypeScript Support**: Built with strict TypeScript for full type safety.

## Installation

```bash
npm install ng-name-utils
```

## Usage

### 1. Sanitization

```typescript
import { NgNameUtils } from 'ng-name-utils';

const clean = NgNameUtils.sanitize("OLUWA-SEUN");
console.log(clean); // "Oluwa-Seun"
```

### 2. Gender Prediction

```typescript
// Basic Lookup
const result1 = NgNameUtils.predictGender("Tunde");
console.log(result1);
// { gender: 'Male', confidence: 0.95, matchType: 'Dictionary' }

// Contextual (Unisex Resolution)
const result2 = NgNameUtils.predictGender("Abiodun", "Mary");
console.log(result2);
// { gender: 'Female', confidence: 0.85, matchType: 'Rule' }
```

### 3. Ethnicity Prediction

```typescript
const eth = NgNameUtils.predictEthnicity("Chidinma");
console.log(eth);
// { likelyEthnicities: ['Igbo'], confidence: 0.95 }
```

## Disclaimer

This library is designed for **analytics and demographic estimation purposes only**. It is **not** 100% accurate and should not be used as the sole source of truth for identity verification or critical legal documentation. Nigeria is a diverse country with significant cultural overlap; names can be shared across tribes, and gender norms can vary.

## License

ISC
