const screen_title = document.getElementById("page_title");
const sub_title = document.getElementById("page_subtitle");
const screen_content = document.getElementById("screen_content");
const overlay = document.getElementById("overlay");
const video = document.getElementById("video");
const video_source = document.getElementById("video_source");

//Logic for bringing up the Contact page.
const contact_link = document.getElementById("contact_link");

contact_link.addEventListener("click", function (event) {
    event.preventDefault();
    screen_title.textContent = "";
    sub_title.textContent = "";
    overlay.style.opacity = 0.6;
    overlay.style.backgroundColor = "#babab8";

    screen_content.innerHTML = '\
        <h1 id = "contentStyle">Contact</h1>\
        <br>\
        <div class="container">\
        <div class="row">\
            <div class="col">\
            <form action="fa9f59963c58460c9090ac7de0e761df" method="POST">\
            <input type="hidden" name="_next" value="">\
            <input type="hidden" name="_subject" value="Portfolio Email">\
            <label for = "email">Email: </label><br>\
            <input type="email" size ="57" placeholder = "Your Email Address" name="email" required><br>\
            <label for = "subject">Subject: </label><br>\
            <input type="textarea" size ="57" placeholder = "Your Subject" name="subject" required><br>\
            <textarea style = "resize: none" rows = "5" cols = "60" name = "body" placeholder = "Your message here."></textarea><br>\
            <button class="btn btn-outline-dark" type="submit">Send</button>\
        </form>\
        </div>'

});
