export const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY
export const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE
export const BASE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`
export const BASE_URL_2 = `https://api.airtable.com/v0/appXNlhVJ6AfbKMdN/news`
export const headers = { Authorization: `Bearer ${AIRTABLE_KEY}` }