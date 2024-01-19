# date-string-ist Utility

**Introduction**

This JavaScript library is designed to simplify date-related operations, such as getting today's date, calculating tomorrow's date, shifting dates by a specified number of days, and more. The library is especially useful for scenarios where date manipulation is required for Indian Stock Market.

## Installation

```bash
npm i @zero65tech/date-string-ist
```

## Functions

### 1. `from(date)`

This function takes a `Date` object or a timestamp and returns the date in the format "YYYY-MM-DD". It adjusts the input date by adding 5.5 hours to it.

**Example:**
```javascript
const formattedDate = from(new Date()); // Returns a string representing today's date
```
### 2. `tomorrow()`

Returns the date string for the next day in the format "YYYY-MM-DD".

**Example:**
```javascript
const nextDay = tomorrow(); // Returns a string representing tomorrow's date
```
### 3. `today()`

Returns the date string for the current day in the format "YYYY-MM-DD".

**Example:**
```javascript
const currentDate = today(); // Returns a string representing today's date
```

### 4. `yesterday()`

Returns the date string for the previous day in the format "YYYY-MM-DD".

**Example:**
```javascript
const previousDay = yesterday(); // Returns a string representing yesterday's date
```

### 5. `lastWeek()`

Returns the date string for seven days ago in the format "YYYY-MM-DD".

**Example:**
```javascript
const lastWeekDate = lastWeek(); // Returns a string representing the date seven days ago
```

### 6. `shift(dateStr, days)`

Shifts a given date string by a specified number of days. If no days are provided, the original date string is returned.

**Example:**
```javascript
const shiftedDate = shift('2023-01-15', 3); // Shifts the date three days ahead
```

### 7. `getDuration(startDate, endDate)`

Calculates the duration in days between two dates. If no start date is provided, it defaults to the current date.

**Example:**
```javascript
const duration = getDuration('2023-01-01', '2023-01-10'); // Returns the duration between the two dates
```

### 8. `getWeekStart(dateStr)`

Returns the date string for the start of the week (Monday) for a given date.

**Example:**
```javascript
const weekStartDate = getWeekStart('2023-01-15'); // Returns the date of the Monday of the week
```

### 9. `getWeekEnd(dateStr)`

Returns the date string for the end of the week (Sunday) for a given date.

**Example:**
```javascript
const weekEndDate = getWeekEnd('2023-01-15'); // Returns the date of the Sunday of the week
```

### 10. `getFyStart(dateStr)`

Returns the start date string of the fiscal year for a given date. If no date is provided, it defaults to the current date.

**Example:**
```javascript
const fyStartDate = getFyStart('2023-06-01'); // Returns the start date of the fiscal year
```

### 11. `getFyEnd(dateStr)`

Returns the end date string of the fiscal year for a given date. If no date is provided, it defaults to the current date.

**Example:**
```javascript
const fyEndDate = getFyEnd('2023-06-01'); // Returns the end date of the fiscal year
```

### 12. `getQtr(dateStr)`

Returns the fiscal quarter for a given date in the format "q1", "q2", "q3", or "q4".

**Example:**
```javascript
const quarter = getQtr('2023-06-01'); // Returns the fiscal quarter for the date
```

### 13. `getTaxQtr(dateStr)`

Returns the tax quarter for a given date in the format "q1", "q2", "q3", "q4", or "q5".

**Example:**
```javascript
const taxQuarter = getTaxQtr('2023-06-01'); // Returns the tax quarter for the date
```

### 14. `getFy(dateStr)`

Returns the fiscal year for a given date in the format "fyYYYY".

**Example:**
```javascript
const fiscalYear = getFy('2023-06-01'); // Returns the fiscal year for the date
```

### 15. `getFyDuration(dateStr)`

Calculates the duration in days of the fiscal year for a given date. If no date is provided, it defaults to the current date.

**Example:**
```javascript
const fyDuration = getFyDuration('2023-06-01'); // Returns the duration of the fiscal year
```

