

const APIKEY_APINEWS = 'aaa51825c78e45e09e1610bf432e6998'
const CURRENT_DATE = `${new Date().getFullYear()}-${new Date().getMonth}-${new Date().getDay()}`

const api = {


    SUMMARY_ALL_COUNTRY: 'https://disease.sh/v3/covid-19/countries',
    TIMELINE_ALL: 'https://disease.sh/v3/covid-19/historical/all?lastdays=all',
    TIMELINE_COUNTRY: 'https://disease.sh/v3/covid-19/historical/',
    GET_ALL: 'https://disease.sh/v3/covid-19/all',
    GET_COUNTRY: 'https://disease.sh/v3/covid-19/countries/',
    GET_CONTINENTS: 'https://disease.sh/v3/covid-19/continents',
    //TODAY_WORLD : 'https://disease.sh/v3/covid-19/jhucsse',
    GET_HISTORICAL_COUNTRIES: 'https://disease.sh/v3/covid-19/historical?lastdays=all',

}

export default api
