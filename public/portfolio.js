//Logic for bringing up the Portfolio page.

const portfolio_link = document.getElementById("portfolio_link");

portfolio_link.addEventListener("click", function (event) {
    event.preventDefault();
    screen_title.textContent = "";
    sub_title.textContent = "";
    overlay.style.opacity = 1;
    overlay.style.backgroundColor = "#babab8";
    screen_content.innerHTML = "";

    screen_content.innerHTML = '\
    <h1 id = "contentStyle">Portfolio</h1><br>\
    <div class = "container" style = "overflow-x: auto; min-width: 900px;">\
        <div class = "row flex-nowrap" style="min-height: 400px; max-height: 800px; min-width: 900px; overflow-x: auto;">\
            <div class="col-4">\
                <div class="card card-block" style = "margin: 5px; background-color: #f2f2f2;  height: 700px; overflow-y: auto;">\
                    <a target="_blank" href="https://drive.google.com/file/d/1sv7JQSEfy014Vgq-lzecUOyAFoTxk5Ry/view?usp=sharing">\
                        <img style = "width: 100%; max-height: 155px;" class="card-img-top" src="./public/project1.png" alt="Card image cap"></a>\
                    <div class="card-body">\
                        <h5 class="card-title" style = "font-weight: bold;">D&D Character Sheet App</h5><br>\
                        <p class="card-text">Windows app made for streamlining the in person D&D player experience. Writes and loads data from .json and .csv into the User Interface made with tkinter.\
                        Simple local database interaction with SQLite for random fantasy name generation.</p><br>\
                        <i id ="stackP" class="devicon-python-plain-wordmark colored"></i>\
                        <img src="./icons/csv.png" height = "30" style = "margin-top: -35px; margin-left: 5px;">\
                        <img src="./icons/json.png" height = "28" style = "margin-top: -35px; margin-left: 5px;">\
                    </div>\
                    <div class="card-footer">\
                        <a target="_blank" href="https://github.com/chungd87/Dungeons-and-Dragons-Character-Sheet-Tracker">\
                        <small class="text-muted"><i id = "Gicon" class="devicon-github-original-wordmark colored"></i></small></a>\
                    </div>\
                </div>\
            </div >\
            <div class="col-4">\
                <div class="card card-block" style = "margin: 5px; background-color: #f2f2f2; height: 700px;  overflow-y: auto;">\
                    <a target="_blank" href="https://drive.google.com/file/d/1lIGzzoGfqIDN1CeZrr2dtdhMqAuaD8T0/view?usp=sharing">\
                        <img style = "width: 100%; max-height: 155px;" class="card-img-top" src="./public/project2.png" alt="Card image cap"></a>\
                    <div class="card-body">\
                        <h5 class="card-title" style = "font-weight: bold;">Movie Studio Database WebApp</h5><br>\
                        <p style = "font-size: 13.5px" class="card-text">Designed for a fictional movie studio, this back-end focused web app tracks their budget and entities.\
                        Database interaction with MySQL, display of data with Express. Javascript and Node. Collaborative partner project (Danny Chung and Hailee Hibray).</p><br><br>\
                        <i id ="stackH" class="devicon-html5-plain-wordmark colored"></i>\
                        <i id ="stackCSS" class="devicon-css3-plain-wordmark colored"></i>\
                        <i id ="stackJS" class="devicon-javascript-plain colored"></i>\
                        <i id ="stackN" class="devicon-nodejs-plain-wordmark colored"></i>\
                        <i id ="stackE" class="devicon-express-original-wordmark colored"></i>\
                        <i id ="stackMSQ" class="devicon-mysql-plain-wordmark colored"></i>\
                    </div>\
                    <div class="card-footer">\
                        <a target="_blank" href="https://github.com/chungd87/Movie-Studio-Database">\
                        <small class="text-muted"><i id = "Gicon" class="devicon-github-original-wordmark colored"></i></small></a>\
                        <a title = "Link to Live Version" target="_blank" href="https://moviedatabasedb.herokuapp.com/"><img src="./icons/livelink.png" height = "30" style = "margin-top: -45px; margin-left: 15px;"></a>\
                    </div>\
                </div>\
            </div >\
            <div class="col-4">\
            <div class="card card-block" style = "margin: 5px; background-color: #f2f2f2; height: 700px; overflow-y: auto;">\
                    <img style = "width: 100%; max-height: 155px;" class="card-img-top" src="./public/portfvidstillsmall.bmp" alt="Card image cap">\
                <div class="card-body">\
                    <h5 class="card-title" style = "font-weight: bold;">Portfolio Website Code Repository</h5><br>\
                    <p class="card-text">Responsive front-end web development with BootStrap. DOM manipulation with JavaScript and styling of HTML markup with CSS.</p><br><br><br><br>\
                    <i id ="stackH" class="devicon-html5-plain-wordmark colored"></i>\
                    <i id ="stackCSS" class="devicon-css3-plain-wordmark colored"></i>\
                    <i id ="stackJS" class="devicon-javascript-plain colored"></i>\
                    <i id ="stackBS" class="devicon-bootstrap-plain-wordmark colored"></i>\
                </div>\
                <div class="card-footer">\
                <a target="_blank" href="https://github.com/chungd87/portfolio-website">\
                <small class="text-muted"><i id = "Gicon" class="devicon-github-original-wordmark colored"></i></small></a>\
                </div>\
            </div>\
        </div >\
            <div class="col-4">\
                <div class="card card-block" style = "margin: 5px; background-color: #f2f2f2; height: 700px; overflow-y: auto;">\
                        <img style = "width: 100%; max-height: 155px;" class="card-img-top" src="./public/soon.png" alt="Card image cap">\
                    <div class="card-body">\
                        <h5 class="card-title"></h5>\
                        <p class="card-text"></p>\
                        <i id = "stackC" class="devicon-c-plain-wordmark colored"></i>\
                    </div>\
                    <div class="card-footer">\
                        <small class="text-muted"></small>\
                    </div>\
                </div>\
            </div >\
        </div>\
    </div>\
    '
});