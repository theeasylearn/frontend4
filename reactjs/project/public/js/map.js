// ------------------------------------------------------- //
//  Styled Leaflet Map
// ------------------------------------------------------ //

"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const mapElem = document.getElementById("contactMap");

    if (mapElem) {
        var map = L.map("contactMap", {
            center: [53.14, 8.22],
            zoom: 13,
            scrollWheelZoom: false,
        });

        var tiles = new L.tileLayer("https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}", {
            attribution:
                'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            subdomains: "abcd",
            minZoom: 0,
            maxZoom: 20,
            ext: "png",
        }).addTo(map);

        var dragging = false,
            tapping = false;

        if (window.innerWidth > 700) {
            dragging = true;
            tapping = true;
        }

        var customIcon = L.icon({
            iconUrl: "img/marker.png",
            iconSize: [25, 40],
        });

        var marker = L.marker([53.14, 8.22], {
            draggable: dragging,
            tap: tapping,
            icon: customIcon,
            opacity: 1,
        });

        marker
            .addTo(map)
            .bindPopup(
                "<div class='p-4'><h5 class='mb-3'>Info Window Content</h5><p class='mb-0'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>",
                {
                    className: "map-custom-popup",
                    minwidth: 200,
                    maxWidth: 600,
                }
            );
    }
});
