import type { SelectOption } from "@core/ui/Select/model/types";

export const YEARS: SelectOption[] = (() => {
    const years: SelectOption[] = [];
    const maxYear = new Date().getFullYear();

    for (let currentYear = maxYear; currentYear > maxYear - 100; currentYear--) {
        years.push({ title: String(currentYear), value: currentYear })
    }

    return years;
})()

export const MONTHS: SelectOption[] = [
    { title: "январь", value: 1 },
    { title: "февраль", value: 2 },
    { title: "март", value: 3 },
    { title: "апрель", value: 4 },
    { title: "май", value: 5 },
    { title: "июнь", value: 6 },
    { title: "июль", value: 7 },
    { title: "август", value: 8 },
    { title: "сентябрь", value: 9 },
    { title: "октябрь", value: 10 },
    { title: "ноябрь", value: 11 },
    { title: "декабрь", value: 12 },
]

export const getDaysArrayInMonth = (month: number, year: number): SelectOption[] => {
    const daysInMonth = new Date(year, month, 0).getDate();
    return Array.from(
        { length: daysInMonth },
        (_, i) => ({ title: String(i), value: i })
    );
}