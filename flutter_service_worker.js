'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3e6a8d137275ddba92b4163c9850a2d3",
"assets/assets/africa.json": "12417da15bcdb19e7b6d317397be398c",
"assets/assets/australia.json": "44a78deabd95d71e77e92b831084ea91",
"assets/assets/chart_data.json": "04e7199ad841fba81e37771a4a435c2c",
"assets/assets/europe.json": "a336a091c0758b69506ea6a4fa21086b",
"assets/assets/fonts/Heebo-Bold.ttf": "ede6fdf4ecf8c32c21701823004343f4",
"assets/assets/fonts/Heebo-Medium.ttf": "6c57263dbdee325394e471a12499e64c",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/india.json": "3b2ced7cbf6e78d43fcb5782a37e75c1",
"assets/assets/london_to_british.json": "acf88d90433d44a6aaa54ec574ee9b1f",
"assets/assets/london_to_chessington.json": "9b13f2b03f369d21084ca034a789b605",
"assets/assets/london_to_hampton_court_palace.json": "7bacef17a41bddedc0c7f3e5a33453f9",
"assets/assets/london_to_twickenham_stadium.json": "d6c4960ae2b30dd936d460c14a759e84",
"assets/assets/london_to_windsor_castle.json": "852eb2d8e3a192c1f137df6564b06dbe",
"assets/assets/maps_brazil_boundary.json": "60d58b946c3e19f94570bee88aedfb22",
"assets/assets/maps_france_boundary.json": "23b5fb1f421fe1bd04eb513ff6c94a23",
"assets/assets/maps_uk_boundary.json": "94431ddef9bb3e08b20fdf4ba422fe6f",
"assets/assets/pdf/annotation_template.pdf": "970b07d25cadd56670b7f1fd08e57a65",
"assets/assets/pdf/certificate.pfx": "eb61b66a9d32bc4d083612cc30b12d61",
"assets/assets/pdf/corrupted_document.pdf": "ac79c08cae75141f1424709ef014ed4e",
"assets/assets/pdf/credit_card_statement.pdf": "bb9cfaf941284cb2e5abcf4da541ca8e",
"assets/assets/pdf/digital_signature_template.pdf": "a87951b49296547517e23a6ab3d40455",
"assets/assets/pdf/flutter_succinctly.pdf": "4a675628446952ed78a3742e5dc5d3c4",
"assets/assets/pdf/form_template.pdf": "7ce7d2d5ab454ccd0fbe222cc9e9e2ad",
"assets/assets/pdf/gis_succinctly.pdf": "6b8bdc356b5f1c64a73d1cf4ce0d47d5",
"assets/assets/pdf/http_succinctly.pdf": "6ccde0de5495c17da73c7f5409ee9c60",
"assets/assets/pdf/javascript_succinctly.pdf": "8ebe6264a07f496add5368aa32832dcf",
"assets/assets/pdf/pdf_succinctly_template.pdf": "0726cfeb09dece2718ef1a19079c0ac1",
"assets/assets/pdf/single_page_document.pdf": "42ed8898cb8cbb042580ae2fbabaef18",
"assets/assets/product_data.json": "f6fe86cfdf75d9b975d50f94c7543091",
"assets/assets/river.json": "885bd34e8960baf403d282d0b903de17",
"assets/assets/south_america.json": "73bdf48ce9f7487b0e1dda5968cc7190",
"assets/assets/usa.json": "a50aca5dd3dafa2fca014f6461a14dab",
"assets/assets/world_map.json": "80bdf06bacdd991fc5ba67cff2cf0216",
"assets/FontManifest.json": "7f5c0e81f6c8f9e1f08cc6d47b3029ff",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/images/apple.png": "bfcd63c9ff7573a34b0e74d79edcf0bb",
"assets/images/April.png": "e60ecf32eab25d284614ae438bb97177",
"assets/images/August.png": "0612b4a3c29f306df8016c2926d9a9d4",
"assets/images/ball.png": "6a389420c8cde5b9e2e01c3441410cbe",
"assets/images/ball_progressbar.png": "d29cb732af2a432c69d58e415ae2c5b4",
"assets/images/barcode.png": "770b27de2695fdf9f56f6ca88835a479",
"assets/images/bike_legend.png": "b323d01ce28cd347d5fb8bfbcad61ec8",
"assets/images/bmi_dark.png": "481b6201b285583118a7a643e452dea8",
"assets/images/bmi_light.png": "42c103457140edfa57bbd289425b5642",
"assets/images/book.png": "f4ca58847383a3378b55ef121220ec4b",
"assets/images/calendar.png": "e7da9c17d1ee344423042099dfc8c827",
"assets/images/cancer_day.png": "05afd48971420f31cdfa6d7513fb1c25",
"assets/images/cart.png": "cea43aed016d738d5541233eba68f9c1",
"assets/images/cartesian.svg": "976dccbc17c278839a40b42059687299",
"assets/images/cartesian_types.png": "e5d22ace312b92e03996b5caa73f7164",
"assets/images/car_legend.png": "c053e460ca6466b76bf2810ae081203e",
"assets/images/Cavaliers.png": "f7b79a955a58bb2c257bd519f3984804",
"assets/images/Check.png": "fc19de9164b56afda87f8983e379e2b1",
"assets/images/circle_gauge.png": "56444ed86c91672c6c63822d24f95b33",
"assets/images/circle_gauge.svg": "a4768fab5634a2f188b1976d2dc537f7",
"assets/images/circle_series.png": "bbff3b81fdfb74b410f0bc686d76268a",
"assets/images/circle_series.svg": "12a8fe27b0688e3464878270ec4ae69d",
"assets/images/circular_progress_bar.png": "3c8c38b686ed81fd0201eb66724a9d54",
"assets/images/Clippers.png": "7587a56a10ab1dea4cdec3c3bc75b2d4",
"assets/images/cloud.png": "329e2e388d3a4720def43d28d4757576",
"assets/images/cloudy.png": "91518e4afa69a12a83fc6acb8ac3183c",
"assets/images/code.png": "1b9c82930460d4a666f2db9feb49d6af",
"assets/images/code.svg": "dbe429c91c6bb26aca877efa89cc27a1",
"assets/images/cycle_legend.png": "ce3bc98993ed3f1fa1cb9cf9e8f5549a",
"assets/images/dark_theme_gauge.png": "cb350bec49d622f92cb77c680486e328",
"assets/images/dashline.png": "07855a68e7fb8ec5f07c0b025b75d22b",
"assets/images/Datagrid.png": "9cfd47f3acd5bd7fa32106cdae5653e6",
"assets/images/Date_range_picker.png": "3f09aecac805fd6f66aec6b6d9e85b00",
"assets/images/December.png": "d87ac679cd2f3d1c6562dd494aa8c0b5",
"assets/images/DenverNuggets.png": "7a81e8bff16d3ba24753039c1c24ab50",
"assets/images/DetroitPistons.png": "745a3415d5b13602b25d7bf49b9c4fc9",
"assets/images/documentation.png": "66dd8986f40c729bae5c79c3377144dd",
"assets/images/Downarrow.png": "e09187add2ad675c7b0bd8008f3812ff",
"assets/images/download.png": "e2a8aec81e5349c08d8dfb80a45fd296",
"assets/images/environment_day.png": "ea12570e3d0d4a2d19e19eb63bb6d03b",
"assets/images/February.png": "b4aee4982498ef54b3ea7c5d9a5ffd02",
"assets/images/fullscreen.png": "e3c4c422d6b10eba388749fe454cb11f",
"assets/images/funnel.png": "5d3d0b84d0446a2f71bf3c75ba41aee4",
"assets/images/funnel.svg": "37ddb0f18383c3d8717d02915e477f48",
"assets/images/git_hub.png": "74b3a1ec9666b665db448dc5cdf75864",
"assets/images/git_hub_dark.png": "fdd3b61c0650dfa10f4a2130174df3e8",
"assets/images/GoldenState.png": "e81419e21668d5f5babab61c61e7ff14",
"assets/images/grouping_dark.png": "f777d6a47eee54796bf362bcda89abff",
"assets/images/grouping_light.png": "497e7f8feb6849125618fb1f4ca83504",
"assets/images/happiness_day.png": "18e7117e29841dea4112f9e960babccc",
"assets/images/health_day.png": "556837286f4e8c17eca121a76d8c6534",
"assets/images/home.png": "582e4349238d6518d43f4b29f469bde6",
"assets/images/Hornets.png": "d51deaf9edf9a3fa461f9ba40f9cc96b",
"assets/images/image_nav_banner.png": "03f48db27424d51b033c2d59a092fff0",
"assets/images/image_nav_banner_darktheme.png": "ce6aa4634f35ce5db96dead06c958b6b",
"assets/images/img_JS.png": "68beac803bd5a87ee1b502afc3809a79",
"assets/images/img_xamarin.png": "4ca17d98df6db44c339acc6681432876",
"assets/images/img_xamarin_ui.png": "d7753f3efb7863182d9576bffd916201",
"assets/images/Insufficient%2520.png": "a8b666c4a3b7970c5bc98b16e9786160",
"assets/images/January.png": "76e18dff458025942cbd2563dea64092",
"assets/images/July.png": "e40699a82cfceeff60b5b33db1d8d0bb",
"assets/images/June.png": "eb23c78fb63e09cb37b55af5bc004521",
"assets/images/linear_gauge.png": "dc296d17d99b6862ee50124ab94a5288",
"assets/images/LosAngeles.png": "ab0cab0878ef326a58ce7fbe75620d92",
"assets/images/map.png": "e3bc699306888febd6d5629bdfbeb85e",
"assets/images/map.svg": "27e3b5306669a715d961faf53627d384",
"assets/images/maps-chichen-itza.jpg": "f3166ede409cd632c32ff0c4353851de",
"assets/images/maps-christ-the-redeemer.jpg": "e54cd2c9646f39520d7f228fa746487e",
"assets/images/maps-colosseum.jpg": "37fb0ca6d9b35f2da3c5340a569fcfdd",
"assets/images/maps-great-wall-of-china.png": "d78fe439a22d46f248c46d369d2a9c66",
"assets/images/maps-machu-picchu.jpg": "9a5fa6a84f6ce36646e5617d91841197",
"assets/images/maps-petra.jpg": "74889be7c38660c6d92fb8e38cb565e3",
"assets/images/maps-tajmahal.jpg": "d42e917915645c47e9d8e809feefc58d",
"assets/images/maps_brazil.png": "056ef5b9837c9526a0f49e0e9f9689c4",
"assets/images/maps_chichen_itza.jpg": "d49ebd172916a1875d5b803b0f9c4bd6",
"assets/images/maps_christ_redeemer.jpg": "e97af8e75c6a954b0edc050a27942994",
"assets/images/maps_colosseum.jpg": "615bbae12741d44d27b885b34b86ab2c",
"assets/images/maps_default_polygon_dark.png": "0bc99f70e1f7bd61cf13aceab1930eed",
"assets/images/maps_default_polygon_light.png": "53fe9887da9fa2af521e018d29fb341c",
"assets/images/maps_facebook.png": "f220eaf64e59611e5255093f34cba743",
"assets/images/maps_forest_1.jpg": "452207b9562553cb648e14707a7dca90",
"assets/images/maps_forest_2.jpg": "b496384a95699843d8243c0c23e56468",
"assets/images/maps_forest_3.jpg": "65bc2cb6c241905ec6b7fc4d27d98083",
"assets/images/maps_france.png": "85a98cd27dbd1dc5d3b1b4300cdda7ba",
"assets/images/maps_great_wall_of_china.jpg": "910a365e5451093c164ca26c290d8aae",
"assets/images/maps_grid.png": "8a1f3c842119e4aee648e0c47ecc2516",
"assets/images/maps_instagram.png": "3a88d4b0664c71f64d1dfcefe3e93905",
"assets/images/maps_inverted_polygon_dark.png": "7c529275d168096eb4f90c0f0fad1340",
"assets/images/maps_inverted_polygon_light.png": "d8367d106668ec613ecd895b0e808963",
"assets/images/maps_machu_pichu.jpg": "3b9852229a52eb9040d6449c359727a7",
"assets/images/maps_petra.jpg": "ac6f980a9010312581187a39d8efccdb",
"assets/images/maps_rainfall_1.jpg": "46f6ec56272fd01ede004da8516f7a28",
"assets/images/maps_rainfall_2.jpg": "1569d9a5de84d7c225afca8fcb898c0a",
"assets/images/maps_rainfall_3.jpg": "6acd6c9c4e450dca0d109f2cf494a9c0",
"assets/images/maps_river_1.jpg": "af8c77f9f223138ec88a2b07c9c55f4e",
"assets/images/maps_river_2.jpg": "b9a9543e5c2a283ba2d7594caa459f23",
"assets/images/maps_river_3.jpg": "e11ca7ef610eeb50dc55941a9d9bc803",
"assets/images/maps_snapchat.png": "79b650cd32c68c4fa8aa6d262adaea76",
"assets/images/maps_taj_mahal.jpg": "5ac3d7c0781103a9d1384a9c4e3c0ce1",
"assets/images/maps_tiktok.png": "e47f4b2661b1365522ca957b03b22fd4",
"assets/images/maps_twitter.png": "84202db5b290ba209ee8f9cf5b15b42e",
"assets/images/maps_UK.png": "fbfb3af68494a1766638c9ecc7250a9f",
"assets/images/March.png": "efa957d1bf735079d573c8e8733cf1cb",
"assets/images/Mavericks.png": "051c3da14bdb04638467e81eb1885e3c",
"assets/images/May.png": "e9a14fe43782d90f7c8e244316b4db49",
"assets/images/Memphis.png": "7a3fb76e4b100194abc4d5bdb944535e",
"assets/images/Miami.png": "83618b19510d1b158ab49f6c848de764",
"assets/images/Milwakke.png": "0a60a2c166948ab5184fb7035fe7a974",
"assets/images/NewYork.png": "3febf28791407e6628f9a13b830129ae",
"assets/images/November.png": "4f987f6f3d69adac975df5a9a11a4e6a",
"assets/images/October.png": "c2c2d3bcab5d5fce18c36304c2ab065a",
"assets/images/orange.png": "fe755e28ebec6b64b268ad41df7102df",
"assets/images/Orlando.png": "f315175d6b4d3b7578839224f2b913fb",
"assets/images/other_fruits.png": "866afa110822cd028c2439169cac43c9",
"assets/images/partly_cloudy.png": "632330d8119228cc12e014dc22acc861",
"assets/images/pause.png": "6963fa3535a5a5171c6b44e3157d7842",
"assets/images/pdf/certificate.jpg": "a615006599cc6e253111f9d8cb250eb5",
"assets/images/pdf/Pdf_Succinctly_img_1.jpg": "c1fcd3c589ea855adc1fc8c4ae06706b",
"assets/images/pdf/Pdf_Succinctly_img_2.jpg": "988cc8d0d6b41729dabf504b9ded2deb",
"assets/images/pdf/Pdf_Succinctly_img_3.jpg": "0adce59365166e26012c6e9c704c41a5",
"assets/images/pdf/Pdf_Succinctly_img_4.jpg": "2dc8691a2c1b2b9ec3e16e04903e131c",
"assets/images/pdf/Pdf_Succinctly_img_5.jpg": "edcd911d0a250290a244a2f810e72159",
"assets/images/pdf/signature.png": "c58e8770cee92077c67ffaab3e57ab11",
"assets/images/pdf.png": "26e7f142089d6e1598fa2ef3feb2bae9",
"assets/images/pdf_viewer.png": "ef560b942a5d30772b1fb14ce7041e62",
"assets/images/pears.png": "c2dfab85707d935d0ee2f01d41ff9ac6",
"assets/images/People_Circle10.png": "6a6358ac3491ef5a79f521065d7e654e",
"assets/images/People_Circle11.png": "1b3d36d168f8f27a027b3d5fe54354b2",
"assets/images/People_Circle12.png": "fee6b31985beb35b69c3506e2af15088",
"assets/images/People_Circle13.png": "73da9fb063f6307b928808b8b49a7c71",
"assets/images/People_Circle14.png": "b77f934a97bae7b1b2fdcf265fd77f0b",
"assets/images/People_Circle15.png": "e8d60d3a29c062b0213e0c433353c37b",
"assets/images/People_Circle16.png": "95472f9d51c951d7643b957b20bd1ff3",
"assets/images/People_Circle17.png": "a62eb728f3af3248dd6404393718a094",
"assets/images/People_Circle18.png": "9cc9674b42891b1757db7b73e593c1de",
"assets/images/People_Circle19.png": "f7af5b3dc5835b7975a959a96ecd3e88",
"assets/images/People_Circle2.png": "4cd96ce198230e008742848f5df47b05",
"assets/images/People_Circle20.png": "52cdbc89f084428e9df1fdaf75bcf918",
"assets/images/People_Circle21.png": "4390309be3e04c885528e9a4f9c081ec",
"assets/images/People_Circle22.png": "ac4bb783f5b3532dc57ce66db960ffa6",
"assets/images/People_Circle23.png": "05985cfc1de3cc32355ae56fe6652b1f",
"assets/images/People_Circle24.png": "0a33516701ea509f461e87a1771f9c8c",
"assets/images/People_Circle25.png": "a92b2550be278d8dcfa183d680b61ecb",
"assets/images/People_Circle26.png": "084a7485156f49757e53c3910e532cc9",
"assets/images/People_Circle27.png": "8df8e8574e1e33751beced5cae1035b3",
"assets/images/People_Circle3.png": "b2a6372eb6deb9a0ffa69466f961242c",
"assets/images/People_Circle4.png": "8d2af5d841d1337cb808d544194202d7",
"assets/images/People_Circle5.png": "3cb632d1b2e967a456122f28d4770a01",
"assets/images/People_Circle6.png": "d57009fb6ed5b4cbbafcd8e230a20086",
"assets/images/People_Circle7.png": "b8ab4808268e19c02f62b17e27b90b04",
"assets/images/People_Circle8.png": "2b837eca4b31646cfdcea21211cf66d9",
"assets/images/People_Circle9.png": "924f7a5e23d99815ac4e8ed961848017",
"assets/images/Perfect.png": "80375a775accd5e6d4ee663ad512d4fe",
"assets/images/person.png": "c7ed75c0fc451352ade741e05ad72bc8",
"assets/images/personal_loan.png": "510d52fff7f5d8695805251e9fa2cca6",
"assets/images/person_walking.gif": "07ac4788f4f59610b480acd500b124a4",
"assets/images/person_walking.png": "a7bd9af0ab18374a8533dbbed21d8223",
"assets/images/play.png": "b91cd5fa240095244a378e891f9c8850",
"assets/images/product.png": "ff5e97be025410ea087ea42ba51ccacd",
"assets/images/pub_logo.png": "6eb97330276e0b73b6aa3aff2d0a6b69",
"assets/images/pyramid.png": "d2a194468a6303550e97b65cc2feaa26",
"assets/images/pyramid.svg": "68c2be39c6afa017bb2ca9f21772dacb",
"assets/images/radial_range_slider.png": "ff58c1e625928d48fca3404901406c39",
"assets/images/radial_slider.png": "cf2584be409a42159a5768610c8d7e2c",
"assets/images/rainy.png": "a23c52c80c129bded57ba9ea0b504901",
"assets/images/rain_cloudy.png": "9debd6c6b94570edd30d1377c0d1fa09",
"assets/images/rain_light.png": "680c222dc3800a6e58036a2b4321b860",
"assets/images/range_selector.png": "8808b2b933871fa5c39de6e62613f496",
"assets/images/range_slider.png": "883635b167755502bfba7893b12c8bdd",
"assets/images/rectangle_pointer.png": "3040bbaa5c6969a9047beded32863265",
"assets/images/scroll_arrow.png": "4f78325a26c365f3b3fdd0b8105c8534",
"assets/images/September.png": "d9621b5a374fffffb7da28104d265bab",
"assets/images/shotput.png": "60ced46648353b7dad9377da6b525288",
"assets/images/SignaturePad.png": "05df6dfbb6fb451d3899b4027506e860",
"assets/images/slider.png": "9a79fa29ee75287af0ff391306050469",
"assets/images/sparkline_winloss.png": "28535e6333f9aeba8d797066110a93ac",
"assets/images/Sufficient.png": "52d8a445c98489cc90307b020d275d61",
"assets/images/sun.png": "526fb20eca521243a35c378de356c629",
"assets/images/sunny_image.png": "66ba3c442da37d53b67686f3fc6ebcbc",
"assets/images/syncfusion.png": "9636837ed6d3558c53ca89d2f8370778",
"assets/images/syncfusion_dark.png": "f675093578cced80eab33cad19cbf590",
"assets/images/temperature_indicator_dark.png": "6252d898617278b4ba1b50f39aa4491e",
"assets/images/temperature_indicator_light.png": "cf65d37988378f421dfb9855f335284a",
"assets/images/thunderstorms.png": "0de49c4e3f7ce91dadef64f98fdb2e11",
"assets/images/Thunder_Logo.png": "4a83e1f4cb4a03d80abd1f57287a9b7a",
"assets/images/tourism_day.png": "ecafb257823727ae8ebdd2b79f757fbd",
"assets/images/treemap.png": "6964e261c7355aa2ffb82d3d733888ec",
"assets/images/treemap_medal.png": "516d639d61507403fad69de62fe49c66",
"assets/images/triangle_pointer.png": "5f09578263d265144881b47deaacaf24",
"assets/images/truck.png": "35ca7393daf4abf9591ddf2267e61f5e",
"assets/images/truck_legend.png": "1394a8aad840267c7307ffe28b16871f",
"assets/images/Uparrow.png": "c05f1607992cde72582b61f52e9e8432",
"assets/images/vertical_range_slider.png": "9028ff8d8fd211b31ee46efb13744ee0",
"assets/images/vertical_slider.png": "bfe86d64453928903edd59ab35e11136",
"assets/images/xlsio/assets.png": "640d357acb58064cca909e2338146452",
"assets/images/xlsio/categories.png": "cbf59d7c9aa100c6cc3cf2ea9693d507",
"assets/images/xlsio/invoice.jpeg": "e27e36086888ca91e0718967f847393f",
"assets/images/xlsio/liabilities.png": "284b091ce4bf5117779c32e43587c480",
"assets/images/xlsio.png": "35299393c94bdbcbfa7de8be67b5eaa9",
"assets/images/youtube.png": "0c781d861a8df15b16ed1ddde3d49535",
"assets/lib/sample_details.json": "19ecf3383dae65d46185f9564ea5c213",
"assets/NOTICES": "acae816e5b4a6939bacda02d112d857c",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"BingSiteAuth.xml": "5a55635fd2a391bdcad8d0ef1af1a17b",
"favicon.png": "0ff0e0cdd689c586ae5c1aa7ac7c9dcb",
"googlec03dd4bc003151bc.html": "d8ee63ac530b376c19042286c0935849",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "8a0a0ce5d6ab897f8d1831264412782b",
"/": "8a0a0ce5d6ab897f8d1831264412782b",
"main.dart.js": "0cdcdba1059a4ef2cb0e20d29603ea83",
"manifest.json": "e0ce32893358312172b53c3721868c70",
"naver335c61fba11bdb4a502b86bfe2e8db08.html": "85f86c5a9f9bac1ffe7952c2c28fc294",
"robots.txt": "5634545ff7f473a66679177c67cdfe40",
"sitemap.xml": "3a92faedb633adb43266a6617a5c2e8f",
"version.json": "ef585f204e62a3e2284741194cc773aa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
