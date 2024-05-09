function validate() {
    var email = document.forms.myform.email.value.trim();
    var name = document.forms.myform.name.value.trim();
    var message = document.forms.myform.message.value.trim();
    var destination = document.forms.myform.destination.value;
    var date = document.forms.myform.datetime.value.trim();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name == "" || !/^[a-zA-Z]+$/.test(name)) {
        alert("Please enter a valid name (only alphabets allowed)");
        return false;
    }

    if (email == "" || !emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (message == "") {
        alert("Please enter a message");
        return false;
    }

    if (destination == "1") {
        alert("Please select a destination");
        return false;
    }

    if (date == "") {
        alert("Please select a date");
        return false;
    }

    // Prepare data for Excel file
    var data = [
        ["Name", "Email", "Message", "Destination", "Date"],
        [name, email, message, destination, date]
    ];

    // Convert data to Excel workbook
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Form Data");

    // Save Excel file
    XLSX.writeFile(wb, "form_data.xlsx");

    // Display success message
    alert("Thank you for contacting! Your message has been submitted successfully.");
    return true;
}
