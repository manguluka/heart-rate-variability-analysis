# @avihimsa/heart-rate-variability-analysis

> Common Heart rate variability (HRV) analysis metrics


[![NPM](https://img.shields.io/npm/v/@avihimsa/heart-rate-variability-analysis.svg)](https://www.npmjs.com/package/@avihimsa/heart-rate-variability-analysis)

## Install
```bash
npm install --save @avihimsa/heart-rate-variability-analysis
```

## Usage
[Editable usage example at Repl.it](https://repl.it/@lilonga/avihimsaheart-rate-variability-analysis)

```javascript
import { Time, Geometric } from "@avihimsa/heart-rate-variability-analysis"

// Array of RR intervals in milliseconds
const intervals = [	1100,1268,1184,1136,952,868,880,1032,1156,1308,]
/*
Time Domain:
Time.MHR - Mean Heart Rate
Time.MRR - Mean RR interval
Time.SDNN - Standard deviation of NN intervals
Time.PNN50 - Percentage of successive RR intervals that differ by more than 50 ms
Time.IRRR - Interquartile range of RR
Time.MADRR - Median of the absolute differences of RR intervals
Time.SDSD - Standard deviation of successive RR intervals
Time.RMsSD - Root mean square of successive RR interval differences
*/
const meanHeartRate = Time.MHR(intervals)
const pNN50 = Time.PNN50(intervals)
// ...

/*
Geometric Measures:
Geometric.TINN - Triangular interpolation of RR intervals
Geometric.RRtri - Triangular index of RR intervals
*/
const tinn = Geometric.TINN(intervals)
// ...
```

## Documentation
[View Documentation](https://heart-rate-variability-analysis-docs.lilo.now.sh/)

## Tests
```bash
yarn run test-unit
```

## License

MIT © [Luka Kakia](https://github.com/manguluka)
