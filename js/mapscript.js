var map;
var marker = [];
var infoWindow = [];
var markerData = [ // マーカーを立てる場所名・緯度・経度
    {
        name: 'はこだてキッズプラザ・はこだみらい館',
        lat: 41.772925,
        lng: 140.728558,
        icon: 'images/access/marker.png' // オリジナルイメージに変更
    }, {
        name: '提携駐車場タイムズ',
        lat: 41.773533,
        lng: 140.729309
    },
];
 
function initMap() {
    // 地図の作成
    var mapLatLng = new google.maps.LatLng({lat: markerData[0]['lat'], lng: markerData[0]['lng']}); // 緯度経度のデータ作成
    map = new google.maps.Map(document.getElementById('map_canvas), { // #map_canvasに地図を埋め込む
        center: mapLatLng, // 地図の中心を指定
        zoom: 17, // 地図のズームを指定
        scrollwheel: false, // スクロールホイール無視
    });
 
    // マーカー毎の処理
    for (var i = 0; i < markerData.length; i++) {
        markerLatLng = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']}); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({ // マーカーの追加
            position: markerLatLng, // マーカーを立てる位置を指定
            map: map // マーカーを立てる地図を指定
        });
 
        infoWindow[i] = new google.maps.InfoWindow({ // 吹き出しの追加
            content: '<div class="sample">' + markerData[i]['name'] + '</div>' // 吹き出しに表示する内容
        });
 
        markerEvent(i); // マーカーにクリックイベントを追加
    }
 
    marker[0].setOptions({// マーカーのオプション設定
        icon: {
            url: markerData[0]['icon']// マーカーの画像を変更
        }
    });
}
 
// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener('click', function() { // マーカーをクリックしたとき
        infoWindow[i].open(map, marker[i]); // 吹き出しの表示
    });
}