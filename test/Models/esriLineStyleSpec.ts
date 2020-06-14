import {
  getLineStyleCesium,
  getLineStyleLeaflet
} from "../../lib/Models/esriLineStyle";

describe("esriLineStyle", function() {
  describe("corect cesium values", function() {
    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSDot");
      expect(value).toEqual(7);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSDashDot");
      expect(value).toEqual(2017);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSDashDotDot");
      expect(value).toEqual(16273);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSLongDash");
      expect(value).toEqual(2047);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSLongDashDot");
      expect(value).toEqual(4081);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSShortDash");
      expect(value).toEqual(4095);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSShortDot");
      expect(value).toEqual(13107);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSShortDashDot");
      expect(value).toEqual(8179);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleCesium("esriSLSShortDashDotDot");
      expect(value).toEqual(16281);
    });

    it("esriSLSNull", function() {
      const value = getLineStyleCesium("esriSLSNull");
      expect(value).toBeUndefined();
    });

    it("esriSLSSolid", function() {
      const value = getLineStyleCesium("esriSLSNull");
      expect(value).toBeUndefined();
    });
  });

  describe("corect cesium values", function() {
    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(7);
      expect(value).toEqual([1, 3]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(2017);
      expect(value).toEqual([4, 3, 1, 3]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(16273);
      expect(value).toEqual([8, 3, 1, 3, 1, 3]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(2047);
      expect(value).toEqual([8, 3]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(4081);
      expect(value).toEqual([8, 3, 1, 3]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(4095);
      expect(value).toEqual([4, 1]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(13107);
      expect(value).toEqual([1, 1]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(8179);
      expect(value).toEqual([4, 1, 1, 1]);
    });

    it("esriSLSDot", function() {
      const value = getLineStyleLeaflet(16281);
      expect(value).toEqual([4, 1, 1, 1, 1, 1]);
    });

    it("return default", function() {
      const value = getLineStyleLeaflet(16547);
      expect(value).toEqual([4, 3]);
    });
  });
});
