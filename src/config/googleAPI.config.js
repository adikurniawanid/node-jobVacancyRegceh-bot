require("dotenv").config();

const GOOGLE_APIS_KEYFILE = process.env.GOOGLE_APIS_KEYFILE;
const GOOGLE_APIS_SPREADSHEET_ID = process.env.GOOGLE_APIS_SPREADSHEET_ID;
const GOOGLE_APIS_SPREADSHEET_TAB_NAME =
  process.env.GOOGLE_APIS_SPREADSHEET_TAB_NAME;

module.exports = {
  GOOGLE_APIS_KEYFILE,
  GOOGLE_APIS_SPREADSHEET_ID,
  GOOGLE_APIS_SPREADSHEET_TAB_NAME,
};
