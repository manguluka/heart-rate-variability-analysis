var jStat = require("jStat").jStat;
var hist = require("histogramjs");
import range from "lodash/range";

/**
 * Triangular interpolation of RR intervals
 *
 * @param {Array} intervals
 * @public
 */
export const TINN = intervals => {
  let interval = 7.8125;
  let minRR = jStat.min(intervals);
  let maxRR = jStat.max(intervals);
  let medRR = (minRR + maxRR) / 2;
  let lowhist = medRR - interval * Math.ceil((medRR - minRR) / interval);
  let longhist = parseInt(Math.ceil((maxRR - lowhist) / interval) + 1);
  let vecthist = range(longhist).map(i => {
    return lowhist + interval * i;
  });
  let h = hist({ data: intervals, bins: vecthist });
  let area = intervals.length * interval;
  let histValues = h.map(hist => {
    return hist.y;
  });
  let maxhist = jStat.max(histValues);
  let TINN = area / maxhist;
  let RRTri = intervals.length / maxhist;
  return TINN;
};

/**
 * Triangular index
 *
 * @param {Array} intervals
 * @public
 */
export const RRTri = intervals => {
  let interval = 7.8125;
  let minRR = jStat.min(intervals);
  let maxRR = jStat.max(intervals);
  let medRR = (minRR + maxRR) / 2;
  let lowhist = medRR - interval * Math.ceil((medRR - minRR) / interval);
  let longhist = parseInt(Math.ceil((maxRR - lowhist) / interval) + 1);
  let vecthist = range(longhist).map(i => {
    return lowhist + interval * i;
  });
  let h = hist({ data: intervals, bins: vecthist });
  let area = intervals.length * interval;
  let histValues = h.map(hist => {
    return hist.y;
  });
  let maxhist = jStat.max(histValues);
  let TINN = area / maxhist;
  let RRTri = intervals.length / maxhist;
  return RRTri;
};
