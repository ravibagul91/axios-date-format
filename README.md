# moment-date-format

Simple & lightweight JavaScript library to do the operations on date.

# Installation

```
npm i moment-date-format --save

```

# Usage

## Create Date Range

```
//Import
import { getDateRange } from "moment-date-format";

//Usage
let period = getDateRange({
    rawDate: "202305", //format required -> monthly (YYYYMM), yearly (YYYY), quarterly (YYYY[Q]Q), financialYear (YYYYApril), financialYearJuly (YYYYJuly)
    periodType: "monthly", // options -> monthly, yearly, quarterly, financialYear, financialYearJuly
    periodLength: 12, //Optional Period Length, default = 1
    lastYear: 2000, //Optional Year limit, default = 1900 
});

//Output
["202305","202304","202303","202302","202301","202212","202211","202210","202209","202208","202207","202206"]
```

## Subtract `N` Date
```
//Import
import { subtractNDate } from "moment-date-format";

//Usage
let period = subtractNDate({
    rawDate: "202305", //format required -> monthly (YYYYMM), yearly (YYYY), quarterly (YYYY[Q]Q), financialYear (YYYYApril), financialYearJuly (YYYYJuly)
    periodType: "monthly", // options -> monthly, yearly, quarterly, financialYear, financialYearJuly
    n: 1, //Optional, default = 1
});

//Output
202304
```

# Dependencies
moment