//Logic for bringing up the Resume page.

const resume_link = document.getElementById("resume_link");

resume_link.addEventListener("click", function (event) {
    event.preventDefault();
    screen_title.textContent = "";
    sub_title.textContent = "";
    overlay.style.opacity = 0.6
    overlay.style.backgroundColor = "#babab8";

    screen_content.innerHTML = '\
    <br>\
    <h1 id = "contentStyle">Résumé</h1>\
    <br>\
    <div class="container" style = "height: 300px; width: 600px;">\
    <br>\
    <div style = "text-align: center;"><button id="download" class="btn btn-outline-dark">Download Résumé</button></div>\
    </div > '

    const download = document.getElementById("download");
    download.addEventListener("click", function () {
        window.open("./DannyChungResume_public.pdf")
    });

});