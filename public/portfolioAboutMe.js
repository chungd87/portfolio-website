const about_me = document.getElementById("about_me");

//Logic for bringing up the About Me page.

about_me.addEventListener("click", function (event) {
    event.preventDefault();
    screen_title.textContent = "";
    sub_title.textContent = "";
    overlay.style.opacity = 0.6;
    overlay.style.backgroundColor = "#babab8";

    screen_content.innerHTML = '\
    <h1 id = "contentStyle">About Me</h1>\
    <br>\
    <div class="container" style = "max-width: 70%; min-width: 600px;">\
    <div class="row">\
    <div class = "col">\
    <i class="devicon-html5-plain-wordmark colored"></i>\
        <i class="devicon-css3-plain-wordmark colored"></i>\
        <i class="devicon-javascript-plain colored" style = "font-size: 45px;"></i></i>\
        <i class="devicon-express-original-wordmark"></i>\
        <i class="devicon-nodejs-plain-wordmark"></i>\
        <i class="devicon-mysql-plain-wordmark colored"></i>\
        <br>\
        <br>\
        <i class="devicon-python-plain-wordmark"></i>\
        <i class="devicon-java-plain-wordmark"></i>\
        <i class="devicon-c-line-wordmark"></i>\
    </div>\
        <div class = "col">\
        <p>As of June 2022, I obtained my B.S. in Computer Science from Oregon State University.\
        Currently, I am looking for an entry level role in a remote position, or in Las Vegas or Socal. After having practiced dentistry for\
        seven years, I have developed great intepersonal, communication, and leadership skills. I am now pursuing my true lifelong passion of computer programming! </p>\
        </div>\
    </div>\
    </div>\
    </div>'
});
