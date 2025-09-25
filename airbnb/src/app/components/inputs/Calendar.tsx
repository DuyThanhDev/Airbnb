'use client';

import { DateRange, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
    range: Range;
    disabledDates: Date[];
    onchange: (value: RangeKeyDict) => void;
}

const Calendar: React.FC<CalendarProps> = ({
    range,
    disabledDates,
    onchange
}) => {



    return ( 
        <DateRange
            rangeColors={['#262626']}
            ranges={[range]}
            date={new Date()}
            onChange={onchange}
            direction="vertical"
            showDateDisplay={false}
            minDate={new Date()}
            disabledDates={disabledDates}
        />
     );
}
 
export default Calendar;