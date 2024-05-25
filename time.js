// SCHEDULED POST
// crm ScheduledPost PublishAfter (ANY TIME)
'May 1, 2023 11:59 PM'
// api ScheduledPost PublishAfter
'2023-05-01 23:59:59.0000000 +03:00'
// ui requirement
'May 01, 2023 11:59 PM EEST'

// crm  ScheduledPost PublishAfter (NOT ANY TIME)
'May 1, 2023 10:00 AM'
// api ScheduledPost PublishAfter
'2023-05-01 07:00:00.0000000 +00:00'
// ui requirement
'May 01, 2023 10:00 AM EEST'

// '2023-05-01 07:00:00.0000000 +00:00'
export function parseDate(dateStr){
    if (!dateStr) {
        return null;
    }
    const ISO = dateToISO(dateStr)
    // 2023-05-01T07:00:00.000Z dateToISO(dateStr)
    const parsed = new Date(ISO);
    // Mon May 01 2023 10:00:00 GMT+0300 (Eastern European Summer Time)
    // 
    if (!parsed || isNaN(parsed)) {
        return null;
    }
    return parsed;
}
// 'Mon May 01 2023 10:00:00 GMT+0300 (Eastern European Summer Time)'
export function formatDate(date, {formatString = MONTH_DAY_YEAR_TIME_FORMAT} = {}){
    const newDate = new Date(date);

    if (isNaN(newDate)) {
        return '';
    }

    return format(newDate, formatString);
}
// 'May 01, 202310:00 AM EEST'



// DON'T FOUND
// api publisher PublishAfter
''

//  api publisher StartDate
''


// CAMPAIGN START DATE
// api publisher CampaignStartDate
'2023-04-01'
// ui requirement
'Apr 01, 2023 12:00 AM EEST'

'2023-04-01'
export const dateToUTC = date => {
    if (date) {
        const result = new Date(date);
        result.setTime(result.getTime() + (result.getTimezoneOffset() * MINUTE));
        return result;
    }
};
'Tue May 30 2023 21:00:00 GMT+0300 (Eastern European Summer Time)'
export function formatDate(date, {formatString = MONTH_DAY_YEAR_TIME_FORMAT} = {}){
    const newDate = new Date(date);

    if (isNaN(newDate)) {
        return '';
    }

    return format(newDate, formatString);
}
'Apr 01, 2023 12:00 AM EEST'
