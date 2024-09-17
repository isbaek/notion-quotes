import { QUOTE_API_URL } from './constants';

// Load randome quotes from Zen API. Cache the results and refetch if necessary.
async function getZenQuotes () {
    const response = await fetch(`${QUOTE_API_URL}/today`);
    const jsonData = await response.json();
    return jsonData
}

export {
    getZenQuotes
}
