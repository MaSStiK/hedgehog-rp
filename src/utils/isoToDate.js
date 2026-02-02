import moment from "moment-timezone";
import "moment/locale/ru";

moment.updateLocale("ru", {
    monthsShort: [
        "янв", "фев", "мар", "апр",
        "май", "июн", "июл", "авг",
        "сен", "окт", "ноя", "дек",
    ]
})

// Преобразовать timestamp/ISO-строку в разные представления даты
export default function isoToDate(input=0) {
    moment.locale("ru")

    // input может быть: number (timestamp ms), string (ISO), undefined/null
    const date = moment(input || 0).tz("Europe/Moscow")
    const now = moment()

    return {
        stringTime: date.format("HH:mm"),
        stringDate: date.format("DD.MM.YYYY"),
        dateWithMonth: date.format("DD MMM YYYY"),
        dateWithFullMonth: date.format("DD MMMM YYYY"),
        isReleased: date.valueOf() < now.valueOf()
    }
}
