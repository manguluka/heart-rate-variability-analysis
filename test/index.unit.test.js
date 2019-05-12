import * as Time from "../src/time";
import * as Geometric from "../src/geometric";
import { intervalArray } from "./data";

describe('Geometric Measures:', function () {
  it('should return a correct TINN value', () => {
    expect(Geometric.TINN(intervalArray)).toBe(319.2708333333333)
  });
  it('should return a correct RRTri value', () => {
    expect(Geometric.RRTri(intervalArray)).toBe(40.86666666666667)
  });
});

describe("Time Domain Measures:", function() {
	it("should return a correct MHR value", () => {
		expect(Time.MHR(intervalArray)).toBe(64.05656762687659);
	});
	it("should return a correct MRR value", () => {
		expect(Time.MRR(intervalArray)).toBe(936.6721044045677);
	});
	it("should return a correct pNN50 value", () => {
		expect(Time.PNN50(intervalArray)).toBe(52.94117647058824);
	});
	it("should return a correct SDNN value", () => {
		expect(Time.SDNN(intervalArray)).toBe(195.72192501053422);
	});
	it("should return a correct RMSSD value", () => {
		expect(Time.RMSSD(intervalArray)).toBe(121.22900060726103);
	});
	it("should return a correct LogRMSSD10x2 value", () => {
		expect(Time.LogRMSSD10x2(intervalArray)).toBe(95.95362647900744);
	});
	it("should return a correct SDSD value", () => {
		expect(Time.SDSD(intervalArray)).toBe(121.22818590315995);
	});
	it("should return a correct MADRR value", () => {
		expect(Time.MADRR(intervalArray)).toBe(56);
	});
	it("should return a correct IRRR value", () => {
		expect(Time.IRRR(intervalArray)).toBe(100);
	});
});
