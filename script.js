/*document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (!name || !email || !message) {
        formMsg.textContent = "Please fill all fields.";
        formMsg.style.color = "red";
        return;
    }

    // mailto fallback (for no backend use)
    const mailtoLink = `mailto:info@lvgroups.com?subject=Contact from ${name}&body=${message}%0AFrom: ${email}`;
    window.location.href = mailtoLink;

    formMsg.textContent = "Message opened in email app.";
    formMsg.style.color = "green";
});
*/
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
