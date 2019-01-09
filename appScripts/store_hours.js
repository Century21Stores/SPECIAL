// This constant is written in column X for rows for which an email
var EMAIL_SENT = "SENT";


function sendEmailsEvents() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 3;  // First row of data to process
  var numRows = sheet.getLastRow();   // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 13)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();

//  var ss = SpreadsheetApp.getActiveSpreadsheet();
 // var sheet2 = ss.getActiveSheets();
  var storeHours = sheet.getSheetName();
  var rowNumber = sheet.getActiveCell().getRow();
  
  


  for (var i = 0; i < data.length; ++i) {
    var row = data[i];
    var emailAddress = row[0];  // column 'B'
    var gsm = row[1];  // column 'A'
    var store = row[2];       // Column 'C'
    var sun = row[3];       // Column 'D'
    var mon = row[4];       // Column 'E'
    var tue = row[5];       // Column 'F'    
    var wed = row[6];       // column 'G'
    var thur = row[7];       // column 'H'    
    var frid = row[8];       // column 'I'
    var sat = row[9];       // column 'I'
    var notesAbout = row[10];       // column 'G'    
    var status = row[11];     // column 'N'
    var emailSent = row[12];     // column 'O'
    
    var WPSignature = '<br/><p>Best Regards,</p><p style="color:gray;">Web Production  <br/>webproduction@c21stores.com</p>';
    var WPMerch = '<br/><p>Best Regards,</p><p style="color:gray;">Store\'s hours requestor <br/>'+ emailAddress +'</p>';
    
    var htmlNewRequest = 
    '<body>'+
      '<p style="color:red"> <b>New Request For: </b>' + storeHours + '</p>' +
      '<p> <b>Store: </b> ' + store +'</p>' +
      '<p> <b>Current General Manager: </b> ' + gsm +'</p>' +
      '<p> <b>New Hours:</b>' +
      '<p> <b>Sunday   : </b>' + sun + '</p>' +
      '<p> <b>Monday   : </b>' + mon + '</p>' +
      '<p> <b>Tuesday  : </b>' + tue + '</p>' +
      '<p> <b>Wednesday: </b>' + wed + '</p>' +
      '<p> <b>Thursday : </b>' + thur + '</p>' +
      '<p> <b>Friday   : </b>' + frid + '</p>' +
      '<p> <b>Saturday : </b>' + sat + '</p>' +
      '<p> <b>Notes: </b> ' + notesAbout +'</p>' +        
      '</p>' + WPMerch +
    '</body>';
    
    var htmlLive = 
    '<body>'+
      '<p style="color:red"> <b>New Request For: </b>' + storeHours + '</p>' +
      '<p> <b>Store: </b> ' + store +'</p>' +
      '<p> <b>Current General Manager: </b> ' + gsm +'</p>' +
      '<p> <b>New Hours:</b>' +
      '<p> <b>Sunday   : </b>' + sun + '</p>' +
      '<p> <b>Monday   : </b>' + mon + '</p>' +
      '<p> <b>Tuesday  : </b>' + tue + '</p>' +
      '<p> <b>Wednesday: </b>' + wed + '</p>' +
      '<p> <b>Thursday : </b>' + thur + '</p>' +
      '<p> <b>Friday   : </b>' + frid + '</p>' +
      '<p> <b>Saturday : </b>' + sat + '</p>' +
      '<p> <b>Notes: </b> ' + notesAbout +'</p>' +        
      '</p>' + WPSignature +
    '</body>';

    var htmlSpecial = 
    '<body>'+
      '<p style="color:red"> <b>New Request For: </b>' + storeHours + '</p>' +
      '<p style="color:red"> <b>Special hours setup for:</p>' +
      '<p> <b>Store: </b> ' + store +'</p>' +
      '<p> <b>Current General Manager: </b> ' + gsm +'</p>' +
      '<p> <b>Notes: </b> ' + notesAbout +'</p>' +
      '</p>' + WPSignature +
    '</body>';
 
    
    var SubjetNew = '🕒❗ New Store Update for: ';
    var SubjetSpecialHours = '🏬🕒 Update - Navigation Request for: ';
    var SubjetDone = '👍🕒  All done - Store Hours has been Updated: ';    
    
    if (emailSent != EMAIL_SENT) {  // Prevents sending duplicates
      if (status == 'UPDATE'){
        var subject = SubjetNew + storeHours;
        MailApp.sendEmail('jrios@c21stores.com', subject, 'html Invalid message', {htmlBody: htmlNewRequest});
        //MailApp.sendEmail(emailAddress, subject, 'html Invalid message', {htmlBody: htmlNewRequest});
        sheet.getRange(startRow + i, 13).setValue(EMAIL_SENT);
        SpreadsheetApp.flush();      
      }
      else if (status == 'LIVE'){
        var subject = SubjetDone + storeHours;
        MailApp.sendEmail(emailAddress + ',jrios@c21stores.com', subject, 'html Invalid message', {htmlBody: htmlLive});
        //MailApp.sendEmail(emailAddress, subject, 'html Invalid message', {htmlBody: htmlLive});        
        sheet.getRange(startRow + i, 13).setValue(EMAIL_SENT);
        SpreadsheetApp.flush();      
      }
      else if (status == 'SEE SPECIAL HOURS'){
        var subject = SubjetSpecialHours + storeHours;
//        MailApp.sendEmail(emailAddress + ',jrios@c21stores.com', subject, 'html Invalid message', {htmlBody: htmlRemove});
        MailApp.sendEmail(emailAddress, subject, 'html Invalid message', {htmlBody: htmlSpecial});
        sheet.getRange(startRow + i, 13).setValue(EMAIL_SENT);
        SpreadsheetApp.flush();      
      };
    }
  }
}