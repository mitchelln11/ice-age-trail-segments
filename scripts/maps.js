let map;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat:44.280, lng: -89.495 },
        zoom: 8,
        mapTypeId: "terrain",
    });

    const potawatomiCoordinates = [
        { lat: 44.876235, lng: -87.428203 },
        { lat: 44.875940, lng: -87.427940 },
        { lat: 44.875539, lng: -87.428184 },
        { lat: 44.875437, lng: -87.428203 },
        { lat: 44.875385, lng: -87.428168 },
        { lat: 44.875222, lng: -87.427843 },
        { lat: 44.875228, lng: -87.427849 },
        { lat: 44.874796, lng: -87.427184 },
        { lat: 44.874441, lng: -87.426706 },
        { lat: 44.873025, lng: -87.424297 },
        { lat: 44.872960, lng: -87.423917 },
        { lat: 44.872994, lng: -87.423509 },
        { lat: 44.872504, lng: -87.422796 },
        { lat: 44.872192, lng: -87.420763 },
        { lat: 44.872295, lng: -87.420403 },
        { lat: 44.873028, lng: -87.419770 },
        { lat: 44.873336, lng: -87.419223 },
        { lat: 44.873526, lng: -87.418386 },
        { lat: 44.873374, lng: -87.418000 },
        { lat: 44.870819, lng: -87.416090 },
        { lat: 44.869793, lng: -87.415200 },
        { lat: 44.867489, lng: -87.414052 },
        { lat: 44.866280, lng: -87.413043 },
        { lat: 44.865884, lng: -87.412431 },
        { lat: 44.863420, lng: -87.411187 },
        { lat: 44.862896, lng: -87.411155 },
        { lat: 44.862417, lng: -87.410876 },
        { lat: 44.862143, lng: -87.410640 },
        { lat: 44.861808, lng: -87.410640 },
        { lat: 44.861633, lng: -87.410490 },
        { lat: 44.861109, lng: -87.410822 },
      ];

      const potawatomiIncompleteCoordinates = [
        { lat: 44.861109, lng: -87.410822 },
        { lat: 44.861048, lng: -87.410361 },
        { lat: 44.861093, lng: -87.409857 },
        { lat: 44.860948, lng: -87.409685 },
        { lat: 44.860576, lng: -87.408677 },
        { lat: 44.860667, lng: -87.408409 },
        { lat: 44.860667, lng: -87.408194 },
        { lat: 44.860021, lng: -87.407497 },
        { lat: 44.860028, lng: -87.405856 },
        { lat: 44.859663, lng: -87.405405 },
        { lat: 44.859214, lng: -87.405212 },
        { lat: 44.858761, lng: -87.404917 },
        { lat: 44.858336, lng: -87.404836 },
        { lat: 44.857701, lng: -87.404804 },
        { lat: 44.856948, lng: -87.404482 },
        { lat: 44.855582, lng: -87.404112 },
        { lat: 44.855408, lng: -87.404139 },
        { lat: 44.855408, lng: -87.404139 },
        { lat: 44.855179, lng: -87.404134 },
        { lat: 44.854605, lng: -87.403946 },
        { lat: 44.854499, lng: -87.403849 },
        { lat: 44.854347, lng: -87.403807 },
        { lat: 44.854058, lng: -87.403801 },
        { lat: 44.853936, lng: -87.403742 },
        { lat: 44.853818, lng: -87.403495 },
        { lat: 44.853095, lng: -87.403175 },
        { lat: 44.852072, lng: -87.402541 },
        { lat: 44.851840, lng: -87.402530 },
        { lat: 44.850912, lng: -87.401704 },
        { lat: 44.850734, lng: -87.401210 },
        { lat: 44.850757, lng: -87.401006 },
        { lat: 44.850730, lng: -87.400947 },
        { lat: 44.850563, lng: -87.400861 },
        { lat: 44.850479, lng: -87.400883 },
        { lat: 44.850274, lng: -87.401334 },
      ];

    const potawatomiSegment = new google.maps.Polyline({
        path: potawatomiCoordinates,
        strokeColor: "#32CD32",
        strokeOpacity: 1.0,
        strokeWeight: 6
    });
    potawatomiSegment.setMap(map);

    const potawatomiIncompleteSegment = new google.maps.Polyline({
        path: potawatomiIncompleteCoordinates,
        strokeColor: "#F90B1A",
        strokeOpacity: 1.0,
        strokeWeight: 6
    });
    potawatomiIncompleteSegment.setMap(map);
}