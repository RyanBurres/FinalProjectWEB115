
//Event listener to build planner and validate email
document.getElementById("build_button").addEventListener('click', validateEmail);

function reset() {
    document.querySelectorAll("input").value = " ";
}

function build() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var goal = document.getElementById("goal").value;

    var breakfast = document.getElementById("breakfast").value;
    var snack1 = document.getElementById("snack1").value;
    var lunch = document.getElementById("lunch").value;
    var snack2 = document.getElementById("snack2").value;
    var dinner = document.getElementById("dinner").value;
    myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
    myText += ("<h1>" + name + "'s Meal Plan</h1>\n");
    myText += ("<h2>Goal: " + goal + "</h2>\n");
    // table header
    myText += ("<table bgcolor='black'>\n<thead>\n<tr bgcolor='grey'>\n<th>Meal</th>\n<th>Monday</th>\n<th>Tuesday</th>\n<th>Wednesday</th>\n<th>Thursday</th>\n<th>Friday</th>\n<th>Saturday</th>\n<th>Sunday</th>\n</tr>\n</thead>\n");
    //table data
    myText += ("<tbody bgcolor='lightgrey'>\n<tr>\n<td>Breakfast</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n<td>" + breakfast + "</td>\n</tr>\n");
    myText += ("<tr>\n<td>Snack 1</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n<td>" + snack1 + "</td>\n</tr>\n")
    myText += ("<tr>\n<td>Lunch</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n<td>" + lunch + "</td>\n</tr>\n")
    myText += ("<tr>\n<td>Snack 2</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n<td>" + snack2 + "</td>\n</tr>\n")
    myText += ("<tr>\n<td>Dinner</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n<td>" + dinner + "</td>\n</tr>\n")
    //Closing out of table
    myText += ("</tbody>\n</table>\n")
    //Print and Download button
    myText += ("<button type='button' onclick='window.print();'>Print</button>\n");
    myText += ("<button button id='downloadButton'>Download</button>\n");
    myText += ("<script>\ndocument.getElementById('downloadButton').addEventListener('click', function() {\n");
    myText += ("var htmlContent = document.documentElement.outerHTML;\n");
    myText += ("var blob = new Blob([htmlContent], { type: 'text/html' });\n");
    myText += ("var a = document.createElement('a');\n");
    myText += ("a.download = 'current_page.html';\n");
    myText += ("a.href = URL.createObjectURL(blob);\n");
    myText += ("a.click();\n});\n");

    //Closing out of html
    myText += ("</body>\n</html>");
    flyWindow = window.open('about:blank', 'myPop', 'width=400, height=200, left=200, top=200');
    flyWindow.document.write(myText);
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      build();
    } else {
      alert('Please enter a valid email address.');
    }
  }
  document.getElementById('downloadButton').addEventListener('click', download)

  function download() {
    var htmlContent = document.documentElement.outerHTML;
    var blob = new Blob([htmlContent], { type: 'text/html' });
    var a = document.createElement('a');
    a.download = 'meal_plan.html';
    a.href = URL.createObjectURL(blob);
    a.click();
  };
