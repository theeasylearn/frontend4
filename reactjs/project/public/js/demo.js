// ------------------------------------------------------ //
// For demo purposes, can be deleted
// ------------------------------------------------------ //

// Asigning Alternative stylesheet & insert it in its place
var stylesheet = document.getElementById("theme-stylesheet");
var alternateStylesheet = document.createElement("link");
alternateStylesheet.setAttribute("id", "new-stylesheet");
alternateStylesheet.setAttribute("rel", "stylesheet");
stylesheet.parentNode.insertBefore(alternateStylesheet, stylesheet.nextSibling);

// Style Switcher [stylesheet color]
var styleSwitcher = document.getElementById("colour");
styleSwitcher.addEventListener("change", function () {
    var alternateColor = styleSwitcher.value;
    alternateStylesheet.setAttribute("href", alternateColor);
    Cookies.set("switcherColor", alternateColor, { expires: 365, path: "/" });
});

var alternateStylesheetCookie = Cookies.get("switcherColor");
if (alternateStylesheetCookie) {
    alternateStylesheet.setAttribute("href", alternateStylesheetCookie);
}

// Asigning Alternative themelayout
var styleThemeLayout = document.getElementById("layout");
var pageHolder = document.getElementById("all");

styleThemeLayout.addEventListener("change", function () {
    var themeLayout = this.value;
    pageHolder.classList = themeLayout;
    document.body.classList = themeLayout;
    Cookies.set("layoutStyle", themeLayout, { expires: 365, path: "/" });
});

window.onload = function () {
    layoutStyleCookie = Cookies.get("layoutStyle");
    if (layoutStyleCookie) {
        pageHolder.classList = layoutStyleCookie;
        document.body.classList = layoutStyleCookie;
    }
};
