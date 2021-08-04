let map;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 44.754286, lng: -87.466042 },
        zoom: 18,
        mapTypeId: "satellite",
    });

    const sturgeonBayCoordinates = [
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

      const sturgeonBayIncompleteCoordinates = [
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
        { lat: 44.850251, lng: -87.401532 },
        { lat: 44.850361, lng: -87.401886 },
        { lat: 44.850331, lng: -87.402009 },
        { lat: 44.849981, lng: -87.402020 },
        { lat: 44.849380, lng: -87.401666 },
        { lat: 44.849114, lng: -87.401333 },
        { lat: 44.848574, lng: -87.400936 },
        { lat: 44.847882, lng: -87.400367 },
        { lat: 44.846185, lng: -87.399777 },
        { lat: 44.845288, lng: -87.399359 },
        { lat: 44.844892, lng: -87.399037 },
        { lat: 44.843789, lng: -87.398533 },
        { lat: 44.843074, lng: -87.398072 },
        { lat: 44.842123, lng: -87.397771 },
        { lat: 44.841884, lng: -87.397562 },
        { lat: 44.841710, lng: -87.397489 },
        { lat: 44.841427, lng: -87.397277 },
        { lat: 44.835227, lng: -87.397379 },
        { lat: 44.832883, lng: -87.397304 },
        { lat: 44.832891, lng: -87.391698 },
        { lat: 44.832651, lng: -87.391360 },
        { lat: 44.830551, lng: -87.390373 },
        { lat: 44.831151, lng: -87.386535 },
        { lat: 44.831227, lng: -87.386329 },
        { lat: 44.831217, lng: -87.386160 },
        { lat: 44.831175, lng: -87.386033 },
        { lat: 44.831103, lng: -87.385945 },
        { lat: 44.831014, lng: -87.385907 },
        { lat: 44.830932, lng: -87.385779 },
        { lat: 44.830957, lng: -87.385317 },
        { lat: 44.830804, lng: -87.384966 },
        { lat: 44.830739, lng: -87.385070 },
        { lat: 44.830136, lng: -87.384934 },
        { lat: 44.830042, lng: -87.384751 },
        { lat: 44.829550, lng: -87.384559 },
        { lat: 44.829061, lng: -87.384547 },
        { lat: 44.825391, lng: -87.384523 },
        { lat: 44.825080, lng: -87.384627 },
        { lat: 44.824947, lng: -87.384692 },
        { lat: 44.824747, lng: -87.384866 },
        { lat: 44.824570, lng: -87.385097 },
        { lat: 44.824414, lng: -87.385349 },
        { lat: 44.824024, lng: -87.386620 },
        { lat: 44.823847, lng: -87.387245 },
        { lat: 44.823607, lng: -87.387344 },
        { lat: 44.822822, lng: -87.390099 },
        { lat: 44.822586, lng: -87.390724 },
        { lat: 44.822468, lng: -87.391092 },
        { lat: 44.822211, lng: -87.391644 },
        { lat: 44.821849, lng: -87.392022 },
        { lat: 44.820797, lng: -87.392561 },
        { lat: 44.820684, lng: -87.392368 },
        { lat: 44.820564, lng: -87.392271 },
        { lat: 44.820424, lng: -87.392218 },
        { lat: 44.820277, lng: -87.392296 },
        { lat: 44.817924, lng: -87.392279 },
        { lat: 44.817908, lng: -87.389399 },
        { lat: 44.817954, lng: -87.389114 },
        { lat: 44.817958, lng: -87.388825 },
        { lat: 44.817859, lng: -87.387500 },
        { lat: 44.817745, lng: -87.387307 },
        { lat: 44.816923, lng: -87.387307 },
        { lat: 44.816877, lng: -87.387221 },
        { lat: 44.816889, lng: -87.385783 },
        { lat: 44.816816, lng: -87.385751 },
        { lat: 44.816634, lng: -87.385783 },
        { lat: 44.816299, lng: -87.385762 },
        { lat: 44.815583, lng: -87.385783 },
        { lat: 44.815446, lng: -87.385756 },
        { lat: 44.815351, lng: -87.385633 },
        { lat: 44.815233, lng: -87.385231 },
        { lat: 44.815241, lng: -87.384107 },
        { lat: 44.815212, lng: -87.383926 },
        { lat: 44.815169, lng: -87.383828 },
        { lat: 44.815097, lng: -87.383764 },
        { lat: 44.814914, lng: -87.383750 },
        { lat: 44.814814, lng: -87.383772 },
        { lat: 44.814357, lng: -87.384028 },
        { lat: 44.813948, lng: -87.384142 },
        { lat: 44.813875, lng: -87.384151 },
        { lat: 44.813475, lng: -87.384110 },
        { lat: 44.813387, lng: -87.384115 },
        { lat: 44.813298, lng: -87.384180 },
        { lat: 44.813178, lng: -87.384239 },
        { lat: 44.813086, lng: -87.384232 },
        { lat: 44.813039, lng: -87.384145 },
        { lat: 44.813029, lng: -87.383886 },
        { lat: 44.813005, lng: -87.383760 },
        { lat: 44.813026, lng: -87.382428 },
        { lat: 44.813010, lng: -87.382349 },
        { lat: 44.812978, lng: -87.382301 },
        { lat: 44.812963, lng: -87.382304 },
        { lat: 44.806271, lng: -87.382274 },
        { lat: 44.806218, lng: -87.382253 },
        { lat: 44.805746, lng: -87.382261 },
        { lat: 44.805685, lng: -87.382231 },
        { lat: 44.805668, lng: -87.382081 },
        { lat: 44.803169, lng: -87.382054 },
        { lat: 44.802633, lng: -87.382057 },
        { lat: 44.802519, lng: -87.382030 },
        { lat: 44.802450, lng: -87.381966 },
        { lat: 44.802300, lng: -87.381904 },
        { lat: 44.802229, lng: -87.381901 },
        { lat: 44.802163, lng: -87.381499 },
        { lat: 44.802138, lng: -87.381215 },
        { lat: 44.802073, lng: -87.380987 },
        { lat: 44.801872, lng: -87.380914 },
        { lat: 44.801792, lng: -87.380936 },
        { lat: 44.801666, lng: -87.381065 },
        { lat: 44.801599, lng: -87.381140 },
        { lat: 44.801386, lng: -87.381201 },
        { lat: 44.800958, lng: -87.382221 },
        { lat: 44.798996, lng: -87.386831 },
        { lat: 44.798318, lng: -87.388178 },
        { lat: 44.797694, lng: -87.389256 },
        { lat: 44.796746, lng: -87.390656 },
        { lat: 44.792007, lng: -87.397426 },
        { lat: 44.791796, lng: -87.397710 },
        { lat: 44.784019, lng: -87.408858 },
        { lat: 44.783806, lng: -87.409201 },
        { lat: 44.770893, lng: -87.427606 },
        { lat: 44.770314, lng: -87.428438 },
        { lat: 44.770109, lng: -87.428727 },
        { lat: 44.769602, lng: -87.429602 },
        { lat: 44.759067, lng: -87.449520 },
        { lat: 44.758823, lng: -87.450008 },
        { lat: 44.758183, lng: -87.451135 },
        { lat: 44.758023, lng: -87.451430 },
        { lat: 44.757631, lng: -87.452385 },
        { lat: 44.757391, lng: -87.453028 },
        { lat: 44.757250, lng: -87.453495 },
        { lat: 44.756054, lng: -87.458441 },
        { lat: 44.754178, lng: -87.466423 },
        { lat: 44.754065, lng: -87.466879 },
        { lat: 44.753785, lng: -87.467748 },
        { lat: 44.753536, lng: -87.468397 },
        { lat: 44.753422, lng: -87.468655 },
        { lat: 44.753153, lng: -87.469221 },
        { lat: 44.748416, lng: -87.478697 },
        { lat: 44.747886, lng: -87.479794 },
      ];

    const sturgeonBaySegment = new google.maps.Polyline({
        path: potawatomiCoordinates,
        strokeColor: "#32CD32",
        strokeOpacity: 1.0,
        strokeWeight: 6
    });
    sturgeonBaySegment.setMap(map);

    const sturgeonBayIncompleteSegment = new google.maps.Polyline({
        path: sturgeonBayIncompleteCoordinates,
        strokeColor: "#F90B1A",
        strokeOpacity: 1.0,
        strokeWeight: 6
    });
    sturgeonBayIncompleteSegment.setMap(map);
}