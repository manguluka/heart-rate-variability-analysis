# @avihimsa/heart-rate-variability-analysis

> Heart rate variability analysis


[![NPM](https://img.shields.io/npm/v/@avihimsa/heart-rate-variability-analysis.svg)](https://www.npmjs.com/package/@avihimsa/heart-rate-variability-analysis)

## Install
```bash
npm install --save @avihimsa/heart-rate-variability-analysis
```

## Usage
[Editable usage example at Repl.it](https://repl.it/@lilonga/avihimsaheart-rate-variability-analysis)

```javascript
import { Time } from "@avihimsa/heart-rate-variability-analysis"

// Array of RR intervals in milliseconds
const intervals = [	1100,1268,1184,1136,952,868,880,1032,1156,1308,]

const meanHeartRate = Time.MHR(intervals)
const pNN50 = Time.PNN50(intervals)
```

## Documentation
[View Documentation](https://heart-rate-variability-analysis-docs.lilo.now.sh/)

## Tests
```bash
yarn run test-unit
```

## License

MIT © [Luka Kakia](https://github.com/manguluka)
