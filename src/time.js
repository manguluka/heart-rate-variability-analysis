var jStat = require("jStat").jStat;
var hist = require("histogramjs");

/**
 * Interquartile range of RR
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const IRRR = intervals => {
  let diffs = jStat.diff(intervals);
  let quartiles = jStat.quartiles(diffs);
  return quartiles[2] - quartiles[0];
};

/**
 * M of the absolute differences of RR intervals
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const MADRR = intervals => {
  let diffs = jStat.diff(intervals);
  return jStat.median(jStat.abs(diffs));
};

export const NN = (intervals, diff) => {
  var nn = 0;
  intervals.forEach(function(val, i, intervals) {
    //Nothing to do on first RR Interval
    if (i === 0) return;
    var pointDiff = Math.abs(intervals[i] - intervals[i - 1]);
    if (pointDiff > diff) {
      nn += 1;
    }
  });
  return nn;
};

export const PNN = (intervals, diff) => {
  var nn = NN(intervals, diff);
  var pNN = (nn / (intervals.length - 1)) * 100;
  return pNN;
};



/**
 * Percentage of successive RR intervals that differ by more than 50 ms
 * unit : %
 *
 * @param {Array} intervals
 * @public
 */
export const PNN50 = (intervals, diff) => {
  return PNN(intervals, 50);
};


/**
 * mean RR interval
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const MRR = intervals => {
  return jStat.mean(intervals);
};

/**
 * mean heart rate
 * unit : bpm
 *
 * @param {Array} intervals
 * @public
 */
export const MHR = intervals => {
  let mRR = MRR(intervals);
  let MHR = 60000 / mRR;
  return MHR;
};

/**
 * Standard deviation of NN intervals
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const SDNN = intervals => {
  return jStat.stdev(intervals);
};

/**
 * Standard deviation of successive RR intervals
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const SDSD = intervals => {
  let diffs = jStat.diff(intervals);
  return jStat.stdev(diffs);
};

/**
 * Root mean square of successive RR interval differences
 * unit : ms
 *
 * @param {Array} intervals
 * @public
 */
export const RMSSD = intervals => {
  let diffs = jStat.diff(intervals);
  let diffsSquared = jStat.pow(diffs, 2);
  let rmssd = Math.sqrt(jStat.mean(diffsSquared));
  return rmssd;
};

export const LogRMSSD10x2 = intervals => {
  return 10 * 2 * Math.log(RMSSD(intervals));
};
