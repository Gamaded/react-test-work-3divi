import {getStatisticData} from "../actions/actions.js";

export default async function fetchStatistic (dispatch) {
    const resault = await fetch("https://analytics.3divi.ru/api/v2/statistics/user/2088/devices/dates/ages/?key=d3aa35bde5ef46899b91aca9c66e174e&b=2020/03/08%2012:00:00&e=2020/09/08%2012:00:00&tzo=0")
        .then(res => res.json());
    dispatch(getStatisticData(resault));
}
