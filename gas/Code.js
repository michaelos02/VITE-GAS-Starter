function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index");
}

function openSpreadsheetAndGetTab(spreadsheetId, tabName) {
  let ss = SpreadsheetApp.openById(spreadsheetId);
  let tab = ss.getSheetByName(tabName);
  if (!tab) {
    tab = ss.insertSheet(tabName);
  }

  return { ss: ss, tab: tab };
}

function getRangeFromTab() {
  const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your actual spreadsheet ID
  const tabName = 'all data'; // Replace with your actual tab name
  const { tab } = openSpreadsheetAndGetTab(spreadsheetId, tabName);
  const range = tab.getRange('A1:B3');
  Logger.log(range.getValues());
}

const test =()=>{
  const doc = DocumentApp.openById("1bbquWawUGWA6j08jHpUyzj3ZmTxbZBi4xsf7_0uI2FY")
  let body = doc.getBody()
  let text = body.getText()
  Logger.log(text)
}

const presentation = ()=>{
  const slideApp = SlidesApp.openById('YOUR_PRESENTATION_ID')
  let slides = slideApp.getSlides()
  let firstSlide = slides[0]
  let title = firstSlide.getTitle()
  Logger.log(title)
}

const showMessage = ()=>{
  return "We got here!"
}
