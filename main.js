function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Make a request to the JSON file using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var users = JSON.parse(xhr.responseText);
        if (username in users && users[username] == password) {
            window.location.href = 'saraksts.html?username=' + username;
        } else {
          alert("Invalid username or password.");
        }
      }
    };
    xhr.send();
  }