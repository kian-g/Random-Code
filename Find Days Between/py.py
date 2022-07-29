# Find time between two dates in days and return result
import datetime

def time_between_dates(start, end):
# calculate the number of days between the two dates
    days_between = (end - start).days
# return the number of days
    return days_between
# Year, month, day
print(time_between_dates(datetime.date(2018, 1, 1), datetime.date(2018, 1, 3)))
