import moment from "moment";
export const getDateRange = ({
  rawDate,
  periodType,
  periodLength = 1,
  lastYear = 1900,
}) => {
  let period = [];
  if (periodType === "yearly") {
    let periodValue = moment(rawDate, "YYYY").format("YYYY");
    period = [periodValue];
    for (let i = 1; i < periodLength * 1; i++) {
      if (periodValue - i < lastYear) {
        break;
      }
      period.push(periodValue - i);
    }
  } else if (
    periodType === "financialYear" ||
    periodType === "financialYearJuly"
  ) {
    let pText = periodType === "financialYear" ? "April" : "July";
    let currentYear =
      periodType === "financialYear" ? rawDate : rawDate.split("July")[0];
    period = [`${currentYear}${pText}`];
    for (let i = 1; i < periodLength * 1; i++) {
      currentYear = currentYear - 1;
      if (currentYear < lastYear) {
        break;
      }
      period.push(`${currentYear}${pText}`);
    }
  } else if (periodType === "quarterly") {
    period = [rawDate];
    for (let i = 1; i < periodLength * 1; i++) {
      let currentYear = moment(rawDate, "YYYY[Q]Q")
        .subtract(i, "Q")
        .format("YYYY[Q]Q");
      let cYear = currentYear.split("Q")[0];
      if (cYear < lastYear) {
        break;
      }
      period.push(currentYear);
    }
  } else {
    let periodValue = moment(rawDate, "YYYYMM").format("YYYYMM");
    period = [periodValue];
    for (let i = 1; i < periodLength * 1; i++) {
      period.push(
        moment(periodValue, "YYYYMM").subtract(i, "months").format("YYYYMM")
      );
    }
  }
  return period;
};

export const subtractNDate = ({ rawDate, periodType, n = 1 }) => {
  let prevPeriod = null;
  if (periodType === "monthly") {
    prevPeriod = moment(rawDate, "YYYYMM")
      .subtract(n, "months")
      .format("YYYYMM");
  }
  if (periodType === "yearly") {
    prevPeriod = moment(rawDate, "YYYY").subtract(n, "year").format("YYYY");
  }
  if (periodType === "quarterly") {
    prevPeriod = moment(rawDate, "YYYY[Q]Q")
      .subtract(n, "Q")
      .format("YYYY[Q]Q");
  }
  if (periodType === "financialYear") {
    let pYear = rawDate.substring(0, 4);
    prevPeriod = `${pYear - n}April`;
  }
  if (periodType === "financialYearJuly") {
    let pYear = rawDate.substring(0, 4);
    prevPeriod = `${pYear - n}July`;
  }
  return prevPeriod;
};
