
import {
    TimesSeries,
  } from './TimeSeries';
describe('tests of TimeSeries', () => {

    describe('TimesSeries Init', () => {
      let values = [11, 21, 34];
      let labels = [12347, 11041769879868, 229, "a"];
      let timesSeries = new TimesSeries(values, labels);

      test('TimesSeries values', () => {
        expect(timesSeries.getvalues).toEqual(values);
      });
      test('longueur du label', () => {
        expect(timesSeries.longuestLabel(labels));
      });
      test('TimesSeries labels', () => {
        expect(timesSeries.getlabels).toEqual(labels);
      });
     
      test('TimesSeries setValues', () => {
        timesSeries.setValues=[1,2,2];
        expect(timesSeries.getvalues).toEqual([1, 2, 2]);
      });
      test('TimesSeries setLabels', () => {
        timesSeries.setLabels=[1,"a",2];
        expect(timesSeries.getlabels).toEqual([1, "a", 2]);
      });

    });

  });
