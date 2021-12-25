//Logic for bringing up the Resume page.

const resume_link = document.getElementById("resume_link");

resume_link.addEventListener("click", function (event) {
    event.preventDefault();
    screen_title.textContent = "";
    sub_title.textContent = "";
    overlay.style.opacity = 0.6
    overlay.style.backgroundColor = "#babab8";

    screen_content.innerHTML = '\
    <h1 id = "contentStyle">Résumé</h1>\
    <br>\
    <div class="container" style = "height: 300px; width: 600px; overflow-y: scroll; ">\
    <div style = "text-align: center;"><button id="download" class="btn btn-outline-dark">Download Résumé</button></div>\
    <br>\
    <h2 style = "color: #000066; font-weight: bold;">Dr. Danny Chung</h2>\
    <h5 style = "font-weight: bold;">B.S. Computer Science (9/2022), B.S. Biology, <br>\
    Doctor of Dental Medicine</h5><br>\
    \
    <h4 style = "color: #000066; font-weight: bold;">EDUCATION</h4>\
    <h5><b>Oregon State University</b>, <em>Corvallis — B.S. Computer Science</em><h5>\
    <p><small>Current GPA: 4.0, Expected Graduation Date: September 2022</small><br>\
    <small>Post-baccalaureate<br> <u>Relevant Coursework Completed:</u></small><br>\
    <small>Data Structures & Algorithms, Web Development & Databases,<br>\
    Software Engineering, Computer Architecture & Assembly Language</small><br></p>\
    <h5><b>University of Nevada, <em>Las Vegas — Doctor of Dental Medicine</em><h5>\
    <p>\
    <small>September 2010 - June 2014</small><br></p>\
    <h5><b>University of Nevada, <em>Reno — B.S. Biology, minor in Music</em><h5>\
    <p>\
    <small><em>with distinction</em></small><br>\
    <small>September 2005 - May  2009</small></p>\
    <br>\
    <h4 style = "color: #000066; font-weight: bold;">SKILLS</h4>\
    <p><small>Python, Java, C</small><br>\
    <small>JavaScript, HTML, CSS, NodeJS, Express, MySQL</small></p>\
    <br>\
    <h4 style = "color: #000066; font-weight: bold;">WORK EXPERIENCE</h4>\
    <h5><b>General Dentist</b> — <em>Pacific Dental Services, Boston Dental</em><h5>\
    <p><small>2014-2021</small><br>\
    <small>Responsibilities of a general dentist. Leadership skills  as a dental practitioner overseeing\
    an office team of five to ten staff members.</small></p>\
    <h5><b>Computing Helpdesk</b> — <em>University of Nevada, Reno</em><h5>\
    <p><small>2006-2009</small><br>\
    <small>Troubleshooting and IT assistance for students and faculty on campus.</small></p>\
    <br>\
    <h4 style = "color: #000066; font-weight: bold;">RELEVANT AWARDS</h4>\
    <p><small><b>Future Business Leaders of America 2005</b> – Java Programming,<br>2nd Place</small><br>\
    <br>\
    <h4 style = "color: #000066; font-weight: bold;">LANGUAGES</h4>\
    <p><small>Native proficiency in English.<br> Professional working proficiency in Mandarin Chinese and Spanish. </small><br>\
    </div > '

    const download = document.getElementById("download");
    download.addEventListener("click", function () {
        window.open("./DannyChungResume_public.pdf")
    });

});