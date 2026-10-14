// HIDEOUT CARTER 珍味図鑑データ
// 味わいは一般的に語られる傾向をもとにした目安です。price：100gあたりのおおよその目安（円）。
// p：[塩気, 旨み, 甘み, 酸味, 辛み, 発酵・クセ, 香ばしさ・燻香, 歯ごたえ]（0〜5） pairs：お酒のタイプごとの相性 0〜3
const CHINMI_ITEMS = [
{
"id": "cm-ikura",
"name": "いくら・筋子",
"en": "Ikura & Sujiko",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.06,
"lon": 141.35,
"desc": "鮭やますの卵を、ほぐして漬けたのがいくら、卵巣の膜ごと塩漬けにしたのが筋子。",
"ex": [
{
"id": "cm-ikura-shoyu",
"label": "いくら醤油漬け",
"name": "いくら醤油漬け",
"en": "Ikura (soy-marinated salmon roe)",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "鮭の卵",
"grapes": [
"roe"
],
"color": "roe_orange",
"price": 2000,
"p": [
3,
5,
2,
0,
0,
1,
0,
2
],
"tags": [
"ぷちぷち",
"旨み",
"醤油"
],
"pairs": {
"s_dry": 3,
"s_aroma": 2,
"spark": 3,
"wh_crisp": 1
},
"desc": "口の中でぷちっとはじけ、濃厚な旨みがあふれる。そのままで日本酒やシャンパーニュと。秋の生筋子を自分でほぐして漬けるのも楽しい。",
"recipes": [],
"howto": "そのまま、大根おろしと",
"pref": "北海道"
},
{
"id": "cm-sujiko",
"label": "筋子",
"name": "筋子",
"en": "Sujiko (salted salmon roe sac)",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "鮭・ますの卵巣",
"grapes": [
"roe"
],
"color": "roe_red",
"price": 1500,
"p": [
5,
5,
1,
0,
0,
2,
0,
2
],
"tags": [
"塩気",
"旨み",
"ねっとり"
],
"pairs": {
"s_dry": 3,
"s_rich": 2,
"w_smoky": 1
},
"desc": "いくらより塩気が強く、ねっとりと濃厚。少しずつ切り分けて、熱いご飯や日本酒と。",
"recipes": [],
"howto": "そのまま、ご飯と",
"pref": "北海道"
}
]
},
{
"id": "cm-kazunoko",
"name": "数の子",
"en": "Kazunoko",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.2,
"lon": 141.0,
"desc": "にしんの卵巣。正月料理でおなじみで、コリコリとした独特の歯ごたえが身上。",
"ex": [
{
"id": "cm-kazunoko-ajitsuke",
"label": "味付け数の子",
"name": "味付け数の子",
"en": "Seasoned Herring Roe",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "にしんの卵",
"grapes": [
"roe"
],
"color": "yellow",
"price": 1500,
"p": [
3,
3,
2,
0,
0,
0,
0,
5
],
"tags": [
"コリコリ",
"だし",
"さっぱり"
],
"pairs": {
"s_dry": 3,
"s_aroma": 2,
"wh_crisp": 2
},
"desc": "だしと醤油に漬けた、そのまま食べられる数の子。コリコリとした歯ごたえが楽しく、キリッとした日本酒によく合う。",
"recipes": [],
"howto": "そのまま、かつお節をかけて",
"pref": "北海道"
}
]
},
{
"id": "cm-saketoba",
"name": "鮭とば",
"en": "Sake Toba",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.0,
"lon": 144.38,
"desc": "秋鮭を細長く切って海風で干した、北海道東部の保存食。",
"ex": [
{
"id": "cm-saketoba-std",
"label": "鮭とば",
"name": "鮭とば",
"en": "Dried Salmon Strips",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "秋鮭",
"grapes": [
"himono"
],
"color": "amber",
"price": 1000,
"p": [
4,
4,
1,
0,
0,
1,
3,
5
],
"tags": [
"かむほどに",
"香ばしい",
"塩気"
],
"pairs": {
"w_smoky": 3,
"w_light": 2,
"s_dry": 2,
"s_rich": 2
},
"desc": "かめばかむほど鮭の旨みがにじみ出る。軽く炙ると脂が溶けて香ばしい。ハイボールやスモーキーなウイスキーに。",
"recipes": [],
"howto": "そのまま、軽く炙って",
"pref": "北海道"
}
]
},
{
"id": "cm-matsumae",
"name": "松前漬け",
"en": "Matsumae-zuke",
"region": "hokkaido",
"pref": "北海道",
"lat": 41.43,
"lon": 140.11,
"desc": "するめと昆布を細切りにし、醤油やみりんで漬けた北海道の郷土料理。数の子を加えることも。",
"ex": [
{
"id": "cm-matsumae-std",
"label": "松前漬け",
"name": "松前漬け",
"en": "Matsumae-zuke",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "するめ・昆布・数の子",
"grapes": [
"fruit"
],
"color": "amber",
"price": 800,
"p": [
3,
4,
3,
0,
1,
1,
0,
3
],
"tags": [
"とろみ",
"甘辛",
"昆布"
],
"pairs": {
"s_dry": 2,
"s_rich": 2,
"w_light": 1
},
"desc": "昆布のとろみとするめの旨み、数の子のコリコリ感。熱燗と合わせたい。",
"recipes": [],
"howto": "そのまま",
"pref": "北海道"
}
]
},
{
"id": "cm-ikashiokara",
"name": "いかの塩辛",
"en": "Ika no Shiokara",
"region": "hokkaido",
"pref": "北海道（函館など）",
"lat": 41.77,
"lon": 140.73,
"desc": "いかの身を、肝（内臓）と塩で和えて熟成させた、塩辛の代表格。",
"ex": [
{
"id": "cm-ikashiokara-std",
"label": "赤造り",
"name": "いかの塩辛",
"en": "Squid Shiokara",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "するめいか・肝",
"grapes": [
"shiokara"
],
"color": "brownc",
"price": 800,
"p": [
5,
5,
1,
0,
0,
4,
0,
3
],
"tags": [
"旨み",
"肝のコク",
"塩気"
],
"pairs": {
"s_dry": 3,
"s_rich": 3,
"w_smoky": 2,
"w_light": 1
},
"desc": "肝のねっとりとしたコクと旨み。そのままでも、じゃがバターにのせても。",
"recipes": [
"r-shiokara-jagabutter"
],
"howto": "そのまま、じゃがバターにのせて",
"pref": "北海道（函館など）"
}
]
},
{
"id": "cm-kaibashira",
"name": "ほたての干し貝柱",
"en": "Dried Scallop",
"region": "hokkaido",
"pref": "北海道",
"lat": 44.3,
"lon": 143.33,
"desc": "ほたての貝柱をゆでてから乾燥させたもの。中華料理の高級食材としても使われる。",
"ex": [
{
"id": "cm-kaibashira-std",
"label": "干し貝柱",
"name": "ほたての干し貝柱",
"en": "Dried Scallop",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "ほたて",
"grapes": [
"himono"
],
"color": "amber",
"price": 4000,
"p": [
3,
5,
3,
0,
0,
1,
2,
4
],
"tags": [
"旨み",
"甘み",
"かむほどに"
],
"pairs": {
"s_dry": 2,
"s_rich": 2,
"w_light": 2,
"wh_crisp": 1
},
"desc": "小さな一粒に凝縮した、ほたての甘みと旨み。少しずつほぐしながら。",
"recipes": [],
"howto": "そのまま",
"pref": "北海道"
}
]
},
{
"id": "cm-iburigakko",
"name": "いぶりがっこ",
"en": "Iburi-gakko",
"region": "tohoku",
"pref": "秋田",
"lat": 39.32,
"lon": 140.57,
"desc": "秋田の、大根を囲炉裏の煙でいぶしてから米ぬかで漬けたたくあん。「がっこ」は秋田の言葉で漬物のこと。",
"ex": [
{
"id": "cm-iburigakko-std",
"label": "いぶりがっこ",
"name": "いぶりがっこ",
"en": "Smoked Pickled Daikon",
"type": "漬物",
"age": "",
"abv": "",
"cask": "大根・米ぬか",
"grapes": [
"tsukemono"
],
"color": "amber",
"price": 600,
"p": [
3,
2,
3,
1,
0,
2,
5,
5
],
"tags": [
"燻香",
"パリパリ",
"ぬか"
],
"pairs": {
"w_smoky": 3,
"s_rich": 2,
"s_dry": 2,
"wh_rich": 1
},
"desc": "燻した香りとパリパリの歯ごたえ。スモーキーなウイスキーとは驚くほど相性がよい。クリームチーズとの組み合わせも定番。",
"recipes": [
"r-iburigakko-cream"
],
"howto": "そのまま、クリームチーズと",
"pref": "秋田"
}
]
},
{
"id": "cm-hoya",
"name": "ほやの塩辛",
"en": "Hoya Shiokara",
"region": "tohoku",
"pref": "宮城",
"lat": 38.43,
"lon": 141.3,
"desc": "「海のパイナップル」とも呼ばれるほやの身を、塩で漬けたもの。",
"ex": [
{
"id": "cm-hoya-std",
"label": "ほやの塩辛",
"name": "ほやの塩辛",
"en": "Sea Squirt Shiokara",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "ほや",
"grapes": [
"shiokara"
],
"color": "orange2",
"price": 1200,
"p": [
4,
4,
3,
2,
0,
4,
0,
3
],
"tags": [
"磯の香り",
"甘み・苦み",
"独特"
],
"pairs": {
"s_dry": 3,
"s_rich": 2,
"w_smoky": 1
},
"desc": "甘み、塩気、酸味、苦み、旨みの五味がそろうといわれる独特の味わい。三陸の辛口の日本酒と。",
"recipes": [],
"howto": "そのまま",
"pref": "宮城"
},
{
"id": "cm-bakurai",
"label": "ばくらい",
"name": "ばくらい",
"en": "Bakurai (sea squirt & konowata)",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "ほや・このわた",
"grapes": [
"shiokara"
],
"color": "orange2",
"price": 2500,
"p": [
4,
5,
2,
1,
0,
5,
0,
3
],
"tags": [
"磯の香り",
"濃厚",
"発酵"
],
"pairs": {
"s_dry": 3,
"s_rich": 3,
"s_aged": 1
},
"desc": "ほやの塩辛に、なまこの腸（このわた）を合わせた珍味中の珍味。名は「爆雷」に由来するとも。",
"recipes": [],
"howto": "そのまま",
"pref": "宮城"
}
]
},
{
"id": "cm-sasakama",
"name": "笹かまぼこ",
"en": "Sasa-kamaboko",
"region": "tohoku",
"pref": "宮城",
"lat": 38.27,
"lon": 140.87,
"desc": "仙台名物の、笹の葉の形に焼いたかまぼこ。",
"ex": [
{
"id": "cm-sasakama-std",
"label": "笹かまぼこ",
"name": "笹かまぼこ",
"en": "Sasa-kamaboko",
"type": "練り物・佃煮",
"age": "",
"abv": "",
"cask": "白身魚のすり身",
"grapes": [
"neri"
],
"color": "cream",
"price": 800,
"p": [
2,
4,
3,
0,
0,
0,
2,
3
],
"tags": [
"ぷりぷり",
"甘み",
"香ばしい"
],
"pairs": {
"s_dry": 2,
"s_aroma": 1,
"w_light": 2,
"wh_crisp": 1
},
"desc": "ぷりっとした弾力と、魚のやさしい甘み。軽く炙ると香ばしく、わさび醤油で。",
"recipes": [],
"howto": "そのまま、軽く炙って",
"pref": "宮城"
}
]
},
{
"id": "cm-nishin-sansho",
"name": "にしんの山椒漬け",
"en": "Nishin Sansho-zuke",
"region": "tohoku",
"pref": "福島（会津）",
"lat": 37.49,
"lon": 139.93,
"desc": "海から遠い会津で、身欠きにしんを山椒の葉と酢醤油で漬けた保存食。",
"ex": [
{
"id": "cm-nishin-sansho-std",
"label": "にしんの山椒漬け",
"name": "にしんの山椒漬け",
"en": "Herring Pickled with Sansho",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "身欠きにしん・山椒",
"grapes": [
"himono"
],
"color": "brownc",
"price": 800,
"p": [
3,
4,
2,
3,
1,
2,
1,
3
],
"tags": [
"山椒",
"酸味",
"旨み"
],
"pairs": {
"s_dry": 3,
"s_rich": 2
},
"desc": "山椒のさわやかな香りと、にしんの旨み。会津の日本酒の肴の定番。",
"recipes": [],
"howto": "そのまま",
"pref": "福島（会津）"
}
]
},
{
"id": "cm-kusaya",
"name": "くさや",
"en": "Kusaya",
"region": "kanto",
"pref": "東京（伊豆諸島）",
"lat": 34.08,
"lon": 139.53,
"desc": "伊豆諸島の、魚を「くさや液」という発酵した漬け汁に漬けてから干したもの。江戸時代から作られている。",
"ex": [
{
"id": "cm-kusaya-std",
"label": "くさや（ムロアジ）",
"name": "くさや",
"en": "Kusaya",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "むろあじ・くさや液",
"grapes": [
"himono"
],
"color": "brownc",
"price": 2000,
"p": [
4,
5,
1,
0,
0,
5,
3,
4
],
"tags": [
"強烈な香り",
"旨み",
"発酵"
],
"pairs": {
"s_dry": 3,
"s_rich": 3,
"w_smoky": 2,
"s_aged": 1
},
"desc": "焼くと強烈なにおいを放つが、身は旨みが濃く、やみつきになる人も多い。瓶詰めや真空パックの焼きくさやなら手軽。",
"recipes": [],
"howto": "焼いてほぐす、瓶詰めはそのまま",
"pref": "東京（伊豆諸島）"
}
]
},
{
"id": "cm-bettara",
"name": "べったら漬",
"en": "Bettara-zuke",
"region": "kanto",
"pref": "東京",
"lat": 35.68,
"lon": 139.78,
"desc": "大根を米麹と砂糖で甘く漬けた、東京・日本橋の名物。秋には「べったら市」が開かれる。",
"ex": [
{
"id": "cm-bettara-std",
"label": "べったら漬",
"name": "べったら漬",
"en": "Bettara-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "大根・米麹",
"grapes": [
"tsukemono"
],
"color": "cream",
"price": 500,
"p": [
2,
2,
4,
1,
0,
1,
0,
4
],
"tags": [
"甘い",
"麹",
"パリパリ"
],
"pairs": {
"s_dry": 2,
"s_aroma": 1,
"wh_crisp": 1
},
"desc": "麹のやさしい甘さと、大根のパリッとした歯ごたえ。",
"recipes": [],
"howto": "そのまま",
"pref": "東京"
}
]
},
{
"id": "cm-tsukudani",
"name": "佃煮",
"en": "Tsukudani",
"region": "kanto",
"pref": "東京（佃島）",
"lat": 35.67,
"lon": 139.78,
"desc": "江戸の佃島で、小魚などを甘辛く煮詰めて保存食にしたのが始まりとされる。",
"ex": [
{
"id": "cm-tsukudani-std",
"label": "佃煮（あさり・小女子など）",
"name": "佃煮",
"en": "Tsukudani",
"type": "練り物・佃煮",
"age": "",
"abv": "",
"cask": "小魚・あさり・昆布など",
"grapes": [
"neri"
],
"color": "brownc",
"price": 800,
"p": [
4,
4,
4,
0,
0,
0,
1,
2
],
"tags": [
"甘辛",
"醤油",
"旨み"
],
"pairs": {
"s_rich": 3,
"s_dry": 1,
"w_rich": 1
},
"desc": "醤油と砂糖でじっくり煮詰めた濃い甘辛味。少量で熱燗が進む。",
"recipes": [],
"howto": "そのまま、ご飯と",
"pref": "東京（佃島）"
}
]
},
{
"id": "cm-sakabitashi",
"name": "鮭の酒びたし",
"en": "Sake no Sakabitashi",
"region": "hokuriku",
"pref": "新潟（村上）",
"lat": 38.22,
"lon": 139.48,
"desc": "鮭の町・村上で、塩引き鮭を1年近く寒風で干し、薄く切って酒にひたして食べる。",
"ex": [
{
"id": "cm-sakabitashi-std",
"label": "鮭の酒びたし",
"name": "鮭の酒びたし",
"en": "Salmon Soaked in Sake",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "塩引き鮭",
"grapes": [
"himono"
],
"color": "amber",
"price": 3000,
"p": [
4,
5,
1,
0,
0,
2,
2,
4
],
"tags": [
"熟成",
"旨み",
"酒の香り"
],
"pairs": {
"s_dry": 3,
"s_rich": 2,
"s_aged": 2
},
"desc": "熟成した鮭の濃い旨みが、日本酒でふっくらと戻る。新潟の淡麗辛口と。",
"recipes": [],
"howto": "日本酒をかけて少しおく",
"pref": "新潟（村上）"
}
]
},
{
"id": "cm-okizuke",
"name": "ほたるいかの沖漬け",
"en": "Hotaruika Okizuke",
"region": "hokuriku",
"pref": "富山",
"lat": 36.75,
"lon": 137.3,
"desc": "春の富山湾で獲れるほたるいかを、生きたまま醤油だれに漬けたもの。",
"ex": [
{
"id": "cm-okizuke-std",
"label": "沖漬け",
"name": "ほたるいかの沖漬け",
"en": "Firefly Squid Okizuke",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "ほたるいか",
"grapes": [
"shiokara"
],
"color": "brownc",
"price": 1500,
"p": [
4,
5,
2,
0,
0,
2,
0,
2
],
"tags": [
"ワタのコク",
"醤油",
"とろり"
],
"pairs": {
"s_dry": 3,
"s_aroma": 2,
"s_rich": 2
},
"desc": "ワタ（内臓）ごと漬けるので、とろりと濃厚。冷凍品が多く、半解凍のシャリッとした状態で食べるのもおいしい。",
"recipes": [],
"howto": "半解凍でそのまま",
"pref": "富山"
}
]
},
{
"id": "cm-kurozukuri",
"name": "いかの黒作り",
"en": "Ika no Kurozukuri",
"region": "hokuriku",
"pref": "富山",
"lat": 36.7,
"lon": 137.21,
"desc": "いかの墨を加えた、真っ黒な塩辛。富山の名物。",
"ex": [
{
"id": "cm-kurozukuri-std",
"label": "黒作り",
"name": "いかの黒作り",
"en": "Squid Ink Shiokara",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "するめいか・墨・肝",
"grapes": [
"shiokara"
],
"color": "black",
"price": 1000,
"p": [
5,
5,
1,
0,
0,
4,
0,
3
],
"tags": [
"墨のコク",
"旨み",
"塩気"
],
"pairs": {
"s_dry": 3,
"s_rich": 2,
"w_smoky": 1
},
"desc": "いか墨のまろやかなコクが加わり、普通の塩辛より味わい深い。",
"recipes": [],
"howto": "そのまま",
"pref": "富山"
}
]
},
{
"id": "cm-konowata",
"name": "このわた",
"en": "Konowata",
"region": "hokuriku",
"pref": "石川（能登）・愛知（三河）",
"lat": 37.2,
"lon": 136.8,
"desc": "なまこの腸を塩辛にしたもの。からすみ、うにと並ぶ日本三大珍味のひとつ。",
"ex": [
{
"id": "cm-konowata-std",
"label": "このわた",
"name": "このわた",
"en": "Salted Sea Cucumber Entrails",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "なまこの腸",
"grapes": [
"shiokara"
],
"color": "amber",
"price": 8000,
"p": [
5,
5,
1,
0,
0,
4,
0,
1
],
"tags": [
"磯の香り",
"とろり",
"旨み"
],
"pairs": {
"s_dry": 3,
"s_rich": 3,
"s_aged": 2
},
"desc": "磯の香りが凝縮した、とろりとした珍味。ほんの少量を熱燗に落とした「このわた酒」も通の楽しみ方。",
"recipes": [],
"howto": "そのまま、熱燗に落として",
"pref": "石川（能登）・愛知（三河）"
}
]
},
{
"id": "cm-fugunoko",
"name": "ふぐの子糠漬け",
"en": "Fugu no Ko Nukazuke",
"region": "hokuriku",
"pref": "石川（白山・金沢）",
"lat": 36.55,
"lon": 136.55,
"desc": "猛毒を持つふぐの卵巣を、塩漬けとぬか漬けで2年以上かけて毒を抜いた、石川だけで作られる奇跡の珍味。",
"ex": [
{
"id": "cm-fugunoko-std",
"label": "ふぐの子糠漬け",
"name": "ふぐの子糠漬け",
"en": "Fermented Pufferfish Roe",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "ふぐの卵巣・米ぬか",
"grapes": [
"roe"
],
"color": "brownc",
"price": 2500,
"p": [
5,
5,
1,
1,
1,
4,
2,
2
],
"tags": [
"発酵",
"塩気",
"ぬか"
],
"pairs": {
"s_rich": 3,
"s_dry": 2,
"s_aged": 3,
"w_smoky": 1
},
"desc": "からすみのような濃い旨みと強い塩気。軽く炙ってほぐし、熱燗やお茶漬けで。",
"recipes": [],
"howto": "軽く炙って少しずつ",
"pref": "石川（白山・金沢）"
}
]
},
{
"id": "cm-kaburazushi",
"name": "かぶら寿し",
"en": "Kabura-zushi",
"region": "hokuriku",
"pref": "石川（金沢）",
"lat": 36.56,
"lon": 136.65,
"desc": "塩漬けのかぶで塩ぶりをはさみ、米麹で漬け込んだ金沢の冬の名物。",
"ex": [
{
"id": "cm-kaburazushi-std",
"label": "かぶら寿し",
"name": "かぶら寿し",
"en": "Kabura-zushi",
"type": "漬物",
"age": "",
"abv": "",
"cask": "かぶ・ぶり・米麹",
"grapes": [
"tsukemono"
],
"color": "white",
"price": 1500,
"p": [
2,
4,
3,
2,
0,
3,
0,
3
],
"tags": [
"麹の甘み",
"ぶりの旨み",
"発酵"
],
"pairs": {
"s_dry": 2,
"s_aroma": 2,
"s_rich": 2,
"wh_crisp": 1
},
"desc": "かぶのシャキシャキ感、麹の甘み、ぶりの旨みが重なる、なれずしの一種。",
"recipes": [],
"howto": "そのまま",
"pref": "石川（金沢）"
}
]
},
{
"id": "cm-heshiko",
"name": "へしこ",
"en": "Heshiko",
"region": "hokuriku",
"pref": "福井",
"lat": 35.7,
"lon": 135.9,
"desc": "鯖を塩漬けにしたあと、米ぬかに1年ほど漬け込んだ、若狭地方の保存食。",
"ex": [
{
"id": "cm-heshiko-std",
"label": "鯖のへしこ",
"name": "へしこ",
"en": "Heshiko (fermented mackerel)",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "鯖・米ぬか",
"grapes": [
"himono"
],
"color": "brownc",
"price": 1500,
"p": [
5,
5,
1,
1,
0,
4,
2,
3
],
"tags": [
"発酵",
"塩気",
"ぬか"
],
"pairs": {
"s_rich": 3,
"s_aged": 3,
"s_dry": 2,
"w_smoky": 2
},
"desc": "塩気が強く、発酵による深い旨み。薄く切って軽く炙り、少しずつ。お茶漬けにも。",
"recipes": [
"r-heshiko-chazuke"
],
"howto": "薄く切って軽く炙る",
"pref": "福井"
}
]
},
{
"id": "cm-shiouni",
"name": "塩うに",
"en": "Shio-uni",
"region": "hokuriku",
"pref": "福井（越前）",
"lat": 35.97,
"lon": 136.0,
"desc": "越前で江戸時代から作られる、うにを塩漬けにした珍味。日本三大珍味のひとつ。",
"ex": [
{
"id": "cm-shiouni-std",
"label": "塩うに",
"name": "塩うに",
"en": "Salted Sea Urchin",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "ばふんうに",
"grapes": [
"roe"
],
"color": "orange2",
"price": 15000,
"p": [
5,
5,
2,
0,
0,
3,
0,
1
],
"tags": [
"濃厚",
"塩気",
"旨み"
],
"pairs": {
"s_dry": 3,
"s_rich": 2,
"s_aged": 2,
"spark": 1
},
"desc": "ねっとりとした濃い旨み。ほんの少量で日本酒が進む。",
"recipes": [],
"howto": "少量ずつそのまま",
"pref": "福井（越前）"
}
]
},
{
"id": "cm-nozawana",
"name": "野沢菜漬",
"en": "Nozawana-zuke",
"region": "koshin",
"pref": "長野",
"lat": 36.92,
"lon": 138.45,
"desc": "長野・野沢温泉村発祥の、野沢菜を漬けた信州の代表的な漬物。",
"ex": [
{
"id": "cm-nozawana-std",
"label": "野沢菜漬",
"name": "野沢菜漬",
"en": "Nozawana Pickles",
"type": "漬物",
"age": "",
"abv": "",
"cask": "野沢菜",
"grapes": [
"tsukemono"
],
"color": "green",
"price": 400,
"p": [
3,
2,
1,
2,
1,
2,
0,
4
],
"tags": [
"シャキシャキ",
"さっぱり",
"乳酸発酵"
],
"pairs": {
"s_dry": 3,
"w_light": 1,
"wh_crisp": 1
},
"desc": "シャキシャキとした歯ごたえ。浅漬けは青々と、古漬けになると黄色くなり酸味が増す。",
"recipes": [],
"howto": "そのまま",
"pref": "長野"
}
]
},
{
"id": "cm-wasabizuke",
"name": "わさび漬",
"en": "Wasabi-zuke",
"region": "koshin",
"pref": "静岡",
"lat": 34.98,
"lon": 138.38,
"desc": "刻んだわさびの茎や根を酒かすで漬けた、静岡の名産。",
"ex": [
{
"id": "cm-wasabizuke-std",
"label": "わさび漬",
"name": "わさび漬",
"en": "Wasabi-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "わさび・酒かす",
"grapes": [
"tsukemono"
],
"color": "cream",
"price": 800,
"p": [
2,
2,
3,
0,
4,
2,
0,
2
],
"tags": [
"ツンとした辛み",
"酒かす",
"甘み"
],
"pairs": {
"s_dry": 3,
"s_aroma": 1
},
"desc": "酒かすの甘みと、鼻に抜けるわさびの辛み。かまぼこにのせても。",
"recipes": [],
"howto": "そのまま、かまぼこにのせて",
"pref": "静岡"
}
]
},
{
"id": "cm-sakuraebi",
"name": "桜えび（素干し）",
"en": "Sakura Ebi",
"region": "koshin",
"pref": "静岡（駿河湾）",
"lat": 35.1,
"lon": 138.65,
"desc": "日本では駿河湾でしか水揚げされない小さなえび。天日で干した素干しは、淡いピンク色。",
"ex": [
{
"id": "cm-sakuraebi-std",
"label": "素干し",
"name": "桜えび 素干し",
"en": "Dried Sakura Shrimp",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "桜えび",
"grapes": [
"himono"
],
"color": "pink",
"price": 3500,
"p": [
2,
5,
3,
0,
0,
0,
4,
3
],
"tags": [
"香ばしい",
"甘み",
"えびの香り"
],
"pairs": {
"w_light": 3,
"s_dry": 2,
"wh_crisp": 1,
"spark": 1
},
"desc": "から煎りすると香ばしさが増す。かき揚げやご飯にも使える。",
"recipes": [],
"howto": "そのまま、から煎りして",
"pref": "静岡（駿河湾）"
}
]
},
{
"id": "cm-moriguchi",
"name": "守口漬",
"en": "Moriguchi-zuke",
"region": "koshin",
"pref": "愛知",
"lat": 35.17,
"lon": 136.9,
"desc": "1m以上にもなる細長い守口大根を、酒かすで何度も漬け替えた尾張の名産。",
"ex": [
{
"id": "cm-moriguchi-std",
"label": "守口漬",
"name": "守口漬",
"en": "Moriguchi-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "守口大根・酒かす",
"grapes": [
"tsukemono"
],
"color": "amber",
"price": 1000,
"p": [
3,
3,
4,
0,
0,
3,
0,
4
],
"tags": [
"酒かす",
"甘み",
"パリパリ"
],
"pairs": {
"s_rich": 2,
"s_aged": 2,
"s_dry": 1
},
"desc": "酒かすの芳醇な香りと甘み。奈良漬に近い味わい。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "愛知"
}
]
},
{
"id": "cm-suguki",
"name": "すぐき漬",
"en": "Suguki-zuke",
"region": "kinki",
"pref": "京都",
"lat": 35.06,
"lon": 135.76,
"desc": "京都・上賀茂のすぐき菜（かぶの一種）を、塩だけで漬けて乳酸発酵させた漬物。",
"ex": [
{
"id": "cm-suguki-std",
"label": "すぐき漬",
"name": "すぐき漬",
"en": "Suguki Pickles",
"type": "漬物",
"age": "",
"abv": "",
"cask": "すぐき菜",
"grapes": [
"tsukemono"
],
"color": "yellow",
"price": 1000,
"p": [
3,
2,
1,
4,
0,
3,
0,
3
],
"tags": [
"酸味",
"乳酸発酵",
"すっきり"
],
"pairs": {
"s_dry": 3,
"wh_crisp": 2
},
"desc": "乳酸菌によるさわやかな酸味。京都の三大漬物のひとつ。",
"recipes": [],
"howto": "刻んでそのまま",
"pref": "京都"
}
]
},
{
"id": "cm-senmai",
"name": "千枚漬",
"en": "Senmai-zuke",
"region": "kinki",
"pref": "京都",
"lat": 35.01,
"lon": 135.77,
"desc": "聖護院かぶを薄切りにし、昆布と甘酢で漬けた京都の冬の漬物。",
"ex": [
{
"id": "cm-senmai-std",
"label": "千枚漬",
"name": "千枚漬",
"en": "Senmai-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "聖護院かぶ・昆布",
"grapes": [
"tsukemono"
],
"color": "white",
"price": 800,
"p": [
2,
3,
3,
3,
0,
0,
0,
3
],
"tags": [
"甘酢",
"昆布",
"上品"
],
"pairs": {
"s_aroma": 2,
"s_dry": 2,
"wh_crisp": 2
},
"desc": "昆布の旨みと甘酢の上品な味わい。香りの華やかな日本酒や白ワインとも。",
"recipes": [],
"howto": "そのまま",
"pref": "京都"
}
]
},
{
"id": "cm-shibazuke",
"name": "しば漬",
"en": "Shiba-zuke",
"region": "kinki",
"pref": "京都（大原）",
"lat": 35.12,
"lon": 135.83,
"desc": "京都・大原で、なすやきゅうりを赤じそと塩で漬けて乳酸発酵させた漬物。",
"ex": [
{
"id": "cm-shibazuke-std",
"label": "しば漬",
"name": "しば漬",
"en": "Shiba-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "なす・赤じそ",
"grapes": [
"tsukemono"
],
"color": "purple",
"price": 600,
"p": [
3,
1,
1,
4,
0,
2,
0,
3
],
"tags": [
"しその香り",
"酸味",
"シャキシャキ"
],
"pairs": {
"s_dry": 2,
"w_light": 1
},
"desc": "赤じその鮮やかな色と香り、乳酸発酵の酸味。",
"recipes": [],
"howto": "そのまま",
"pref": "京都（大原）"
}
]
},
{
"id": "cm-narazuke",
"name": "奈良漬",
"en": "Nara-zuke",
"region": "kinki",
"pref": "奈良",
"lat": 34.68,
"lon": 135.8,
"desc": "白うりなどを酒かすに何度も漬け替えて、長期間熟成させた漬物。",
"ex": [
{
"id": "cm-narazuke-std",
"label": "奈良漬（白うり）",
"name": "奈良漬",
"en": "Nara-zuke",
"type": "漬物",
"age": "",
"abv": "",
"cask": "白うり・酒かす",
"grapes": [
"tsukemono"
],
"color": "amber",
"price": 800,
"p": [
3,
3,
4,
0,
0,
3,
0,
3
],
"tags": [
"酒かす",
"甘み",
"熟成"
],
"pairs": {
"s_rich": 3,
"s_aged": 2,
"w_sherry": 1
},
"desc": "酒かすの芳醇な香りと、べっこう色の深い甘み。熟成した日本酒と合わせたい。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "奈良"
}
]
},
{
"id": "cm-funazushi",
"name": "鮒寿司",
"en": "Funa-zushi",
"region": "kinki",
"pref": "滋賀",
"lat": 35.28,
"lon": 136.1,
"desc": "琵琶湖のニゴロブナを塩漬けにしてから、ご飯に漬けて1年以上発酵させた、なれずしの原形。",
"ex": [
{
"id": "cm-funazushi-std",
"label": "鮒寿司",
"name": "鮒寿司",
"en": "Funa-zushi",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "ニゴロブナ・ご飯",
"grapes": [
"shiokara"
],
"color": "amber",
"price": 5000,
"p": [
4,
5,
1,
4,
0,
5,
0,
2
],
"tags": [
"発酵",
"酸味",
"チーズのよう"
],
"pairs": {
"s_aged": 3,
"s_rich": 3,
"wh_rich": 1,
"w_sherry": 1
},
"desc": "チーズのような発酵の香りと酸味。薄く切ってそのまま、またはお茶漬けに。熟成酒や、意外にもワインと合わせる人も。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "滋賀"
}
]
},
{
"id": "cm-umeboshi",
"name": "梅干し（南高梅）",
"en": "Umeboshi",
"region": "kinki",
"pref": "和歌山",
"lat": 33.82,
"lon": 135.4,
"desc": "和歌山・みなべ町で生まれた南高梅を、塩漬けして天日で干したもの。",
"ex": [
{
"id": "cm-umeboshi-shiso",
"label": "しそ漬け",
"name": "梅干し（しそ漬け）",
"en": "Umeboshi (shiso)",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "梅・赤じそ",
"grapes": [
"fruit"
],
"color": "red",
"price": 600,
"p": [
5,
0,
0,
5,
0,
1,
0,
1
],
"tags": [
"酸味",
"塩気",
"しそ"
],
"pairs": {
"s_dry": 2,
"s_aroma": 1
},
"desc": "昔ながらの塩としそだけの梅干し。強い酸味と塩気で、少しずつかじりながら。",
"recipes": [],
"howto": "そのまま、お湯割りに",
"pref": "和歌山"
},
{
"id": "cm-umeboshi-honey",
"label": "はちみつ梅",
"name": "梅干し（はちみつ）",
"en": "Umeboshi (honey)",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "梅・はちみつ",
"grapes": [
"fruit"
],
"color": "orange2",
"price": 700,
"p": [
3,
0,
3,
4,
0,
0,
0,
1
],
"tags": [
"甘酸っぱい",
"やわらか"
],
"pairs": {
"s_dry": 1,
"s_aroma": 1,
"w_light": 1
},
"desc": "塩分を控え、はちみつで甘く仕上げた食べやすい梅干し。",
"recipes": [],
"howto": "そのまま",
"pref": "和歌山"
}
]
},
{
"id": "cm-shiokombu",
"name": "塩昆布",
"en": "Shio-kombu",
"region": "kinki",
"pref": "大阪",
"lat": 34.68,
"lon": 135.5,
"desc": "昆布を細かく切って醤油で煮詰め、乾かした大阪の名産。",
"ex": [
{
"id": "cm-shiokombu-std",
"label": "塩昆布",
"name": "塩昆布",
"en": "Shio-kombu",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "昆布",
"grapes": [
"fruit"
],
"color": "black",
"price": 1200,
"p": [
4,
5,
2,
0,
0,
0,
0,
2
],
"tags": [
"旨み",
"塩気",
"昆布"
],
"pairs": {
"s_dry": 2,
"s_rich": 1,
"w_light": 1
},
"desc": "昆布の旨みが凝縮。そのままつまむほか、きゅうりやキャベツと和えるだけで一品になる。",
"recipes": [
"r-hiyashi-tomato"
],
"howto": "そのまま、野菜と和えて",
"pref": "大阪"
}
]
},
{
"id": "cm-kaki-smoke",
"name": "牡蠣の燻製オイル漬け",
"en": "Smoked Oysters",
"region": "chugoku",
"pref": "広島",
"lat": 34.39,
"lon": 132.45,
"desc": "日本一の牡蠣の産地・広島の牡蠣を燻製にして、オイルに漬けたもの。",
"ex": [
{
"id": "cm-kaki-smoke-std",
"label": "燻製オイル漬け",
"name": "牡蠣の燻製オイル漬け",
"en": "Smoked Oysters in Oil",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "牡蠣",
"grapes": [
"himono"
],
"color": "brownc",
"price": 2500,
"p": [
3,
5,
1,
0,
0,
2,
4,
2
],
"tags": [
"スモーク",
"旨み",
"オイル"
],
"pairs": {
"w_smoky": 3,
"wh_crisp": 2,
"spark": 2,
"s_dry": 1
},
"desc": "燻製の香りと牡蠣の濃い旨み。アイラのウイスキーとの組み合わせは定番中の定番。",
"recipes": [],
"howto": "そのまま、クラッカーにのせて",
"pref": "広島"
}
]
},
{
"id": "cm-shuto",
"name": "酒盗",
"en": "Shuto",
"region": "shikoku",
"pref": "高知",
"lat": 33.56,
"lon": 133.53,
"desc": "かつおの内臓を塩漬けにして熟成させた塩辛。「酒を盗んでまで飲みたくなる」ことからの名。",
"ex": [
{
"id": "cm-shuto-std",
"label": "かつおの酒盗",
"name": "酒盗",
"en": "Shuto (bonito entrails)",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "かつおの内臓",
"grapes": [
"shiokara"
],
"color": "brownc",
"price": 1500,
"p": [
5,
5,
1,
0,
0,
5,
0,
1
],
"tags": [
"発酵",
"旨み",
"塩気"
],
"pairs": {
"s_dry": 3,
"s_rich": 3,
"s_aged": 2,
"w_smoky": 1
},
"desc": "強い塩気と発酵の旨み。少量をちびちびと。クリームチーズにのせるのも人気。",
"recipes": [],
"howto": "少量ずつ、クリームチーズにのせて",
"pref": "高知"
}
]
},
{
"id": "cm-jakoten",
"name": "じゃこ天",
"en": "Jakoten",
"region": "shikoku",
"pref": "愛媛",
"lat": 33.22,
"lon": 132.56,
"desc": "宇和島周辺で、小魚を骨や皮ごとすり身にして揚げた練り物。",
"ex": [
{
"id": "cm-jakoten-std",
"label": "じゃこ天",
"name": "じゃこ天",
"en": "Jakoten",
"type": "練り物・佃煮",
"age": "",
"abv": "",
"cask": "小魚（ほたるじゃこなど）",
"grapes": [
"neri"
],
"color": "brownc",
"price": 800,
"p": [
3,
4,
2,
0,
0,
0,
3,
3
],
"tags": [
"香ばしい",
"魚の旨み",
"弾力"
],
"pairs": {
"s_dry": 2,
"w_light": 2,
"s_rich": 1
},
"desc": "骨ごとすりつぶすので、魚の旨みが濃く、少しざらっとした食感。軽く炙ってしょうが醤油で。",
"recipes": [],
"howto": "そのまま、軽く炙って",
"pref": "愛媛"
}
]
},
{
"id": "cm-mentaiko",
"name": "辛子明太子",
"en": "Karashi Mentaiko",
"region": "kyushu",
"pref": "福岡",
"lat": 33.59,
"lon": 130.4,
"desc": "すけとうだらの卵（たらこ）を、唐辛子入りの調味液に漬けた博多名物。戦後、博多の食品店が韓国の味をもとに作ったのが始まりとされる。",
"ex": [
{
"id": "cm-mentaiko-std",
"label": "辛子明太子",
"name": "辛子明太子",
"en": "Karashi Mentaiko",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "すけとうだらの卵",
"grapes": [
"roe"
],
"color": "red",
"price": 1500,
"p": [
4,
5,
1,
0,
3,
1,
0,
2
],
"tags": [
"辛み",
"旨み",
"ぷちぷち"
],
"pairs": {
"s_dry": 3,
"w_light": 2,
"spark": 1,
"s_rich": 1
},
"desc": "唐辛子の辛みと、たらこの旨み。そのままでも、軽く炙っても。パスタにも。",
"recipes": [
"r-mentai-pasta"
],
"howto": "そのまま、軽く炙って",
"pref": "福岡"
}
]
},
{
"id": "cm-karasumi",
"name": "からすみ",
"en": "Karasumi",
"region": "kyushu",
"pref": "長崎",
"lat": 32.75,
"lon": 129.87,
"desc": "ぼらの卵巣を塩漬けにして干したもの。形が中国の墨（唐墨）に似ていることからの名。日本三大珍味のひとつ。",
"ex": [
{
"id": "cm-karasumi-std",
"label": "からすみ",
"name": "からすみ",
"en": "Karasumi (bottarga)",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "ぼらの卵巣",
"grapes": [
"roe"
],
"color": "amber",
"price": 15000,
"p": [
4,
5,
2,
0,
0,
2,
1,
3
],
"tags": [
"濃厚",
"ねっとり",
"旨み"
],
"pairs": {
"s_dry": 3,
"s_aged": 3,
"s_rich": 2,
"w_sherry": 1,
"wh_crisp": 2
},
"desc": "薄く切ると、ねっとりとした食感と濃厚な旨み。大根の薄切りではさむのが定番。軽く炙ると香ばしい。",
"recipes": [
"r-karasumi-pasta"
],
"howto": "薄切りにして大根と",
"pref": "長崎"
}
]
},
{
"id": "cm-tofu-misozuke",
"name": "豆腐の味噌漬け",
"en": "Tofu Miso-zuke",
"region": "kyushu",
"pref": "熊本（五木村）",
"lat": 32.4,
"lon": 130.83,
"desc": "熊本の山村で、平家の落人が伝えたともいわれる保存食。豆腐を味噌に半年ほど漬け込む。",
"ex": [
{
"id": "cm-tofu-misozuke-std",
"label": "豆腐の味噌漬け",
"name": "豆腐の味噌漬け",
"en": "Miso-cured Tofu",
"type": "大豆・豆腐の加工品",
"age": "",
"abv": "",
"cask": "豆腐・味噌",
"grapes": [
"soy"
],
"color": "amber",
"price": 1500,
"p": [
4,
5,
2,
0,
0,
3,
0,
1
],
"tags": [
"チーズのよう",
"味噌",
"濃厚"
],
"pairs": {
"s_rich": 3,
"wh_rich": 2,
"r_light": 1,
"w_sherry": 1
},
"desc": "ウニやチーズに例えられるねっとりとした濃厚な味わい。「山うに豆腐」とも呼ばれる。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "熊本（五木村）"
}
]
},
{
"id": "cm-satsumaage",
"name": "さつま揚げ",
"en": "Satsuma-age",
"region": "kyushu",
"pref": "鹿児島",
"lat": 31.6,
"lon": 130.56,
"desc": "魚のすり身を揚げた鹿児島の郷土料理。地元では「つけあげ」と呼ぶ。",
"ex": [
{
"id": "cm-satsumaage-std",
"label": "さつま揚げ",
"name": "さつま揚げ",
"en": "Satsuma-age",
"type": "練り物・佃煮",
"age": "",
"abv": "",
"cask": "魚のすり身",
"grapes": [
"neri"
],
"color": "amber",
"price": 600,
"p": [
2,
4,
3,
0,
0,
0,
2,
3
],
"tags": [
"甘み",
"ふんわり",
"魚の旨み"
],
"pairs": {
"s_dry": 2,
"w_light": 2,
"s_rich": 1
},
"desc": "鹿児島のものは地酒（灰持酒）を使い、ほんのり甘い。焼酎のお湯割りとも。",
"recipes": [],
"howto": "そのまま、軽く炙って",
"pref": "鹿児島"
}
]
},
{
"id": "cm-tofuyo",
"name": "豆腐よう",
"en": "Tofuyo",
"region": "kyushu",
"pref": "沖縄",
"lat": 26.21,
"lon": 127.68,
"desc": "島豆腐を紅麹と泡盛のもろみに漬けて、数か月熟成させた琉球王朝時代からの珍味。",
"ex": [
{
"id": "cm-tofuyo-std",
"label": "豆腐よう",
"name": "豆腐よう",
"en": "Tofuyo",
"type": "大豆・豆腐の加工品",
"age": "",
"abv": "",
"cask": "島豆腐・紅麹・泡盛",
"grapes": [
"soy"
],
"color": "red",
"price": 2500,
"p": [
3,
5,
3,
1,
0,
4,
0,
0
],
"tags": [
"チーズのよう",
"泡盛の香り",
"濃厚"
],
"pairs": {
"s_aged": 3,
"w_sherry": 2,
"dessert": 2,
"s_rich": 2
},
"desc": "ウニやチーズのようななめらかで濃厚な味わい。つまようじの先で少しずつ削って、泡盛や熟成した酒と。",
"recipes": [],
"howto": "少しずつ削って",
"pref": "沖縄"
}
]
},
{
"id": "cm-sukugarasu",
"name": "スクガラス豆腐",
"en": "Sukugarasu Tofu",
"region": "kyushu",
"pref": "沖縄",
"lat": 26.33,
"lon": 127.8,
"desc": "アイゴの稚魚（スク）の塩辛「スクガラス」を、島豆腐にのせた沖縄の居酒屋の定番。",
"ex": [
{
"id": "cm-sukugarasu-std",
"label": "スクガラス",
"name": "スクガラス",
"en": "Sukugarasu (salted fish fry)",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "アイゴの稚魚",
"grapes": [
"shiokara"
],
"color": "cream",
"price": 3000,
"p": [
5,
4,
0,
0,
0,
4,
0,
1
],
"tags": [
"塩気",
"旨み",
"発酵"
],
"pairs": {
"s_dry": 2,
"s_rich": 2,
"w_light": 1
},
"desc": "強い塩気と旨み。瓶から数匹出して、冷たい島豆腐にのせるだけ。",
"recipes": [],
"howto": "島豆腐にのせて",
"pref": "沖縄"
}
]
},
{
"id": "cm-mimiga",
"name": "ミミガー",
"en": "Mimiga",
"region": "kyushu",
"pref": "沖縄",
"lat": 26.25,
"lon": 127.72,
"desc": "豚の耳の皮をゆでて細切りにした、沖縄の定番の肴。",
"ex": [
{
"id": "cm-mimiga-std",
"label": "ミミガー（味付け）",
"name": "ミミガー",
"en": "Mimiga (pig ear)",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "豚の耳",
"grapes": [
"meat"
],
"color": "cream",
"price": 800,
"p": [
3,
3,
1,
2,
0,
0,
0,
5
],
"tags": [
"コリコリ",
"ポン酢",
"さっぱり"
],
"pairs": {
"w_light": 2,
"s_dry": 2,
"spark": 1
},
"desc": "コリコリとした軟骨の食感。ポン酢やピーナッツだれで、ビールや泡盛と。",
"recipes": [],
"howto": "そのまま",
"pref": "沖縄"
}
]
},
{
"id": "cm-pidan",
"name": "ピータン",
"en": "Pidan",
"region": "china",
"pref": "中国",
"lat": 30.3,
"lon": 120.16,
"desc": "あひるの卵を、灰や石灰などに漬けて熟成させた中国の珍味。",
"ex": [
{
"id": "cm-pidan-std",
"label": "ピータン",
"name": "ピータン",
"en": "Century Egg",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "あひるの卵",
"grapes": [
"fruit"
],
"color": "black",
"price": 1000,
"p": [
3,
4,
1,
0,
0,
4,
0,
1
],
"tags": [
"とろり",
"独特の香り",
"濃厚"
],
"pairs": {
"s_rich": 2,
"s_aged": 2,
"w_rich": 1
},
"desc": "白身は琥珀色のゼリー状、黄身はとろりと濃厚。豆腐と合わせたピータン豆腐が定番。紹興酒と合わせたい。",
"recipes": [
"r-hiyayakko"
],
"howto": "切って生姜醤油で",
"pref": "中国"
}
]
},
{
"id": "cm-zasai",
"name": "ザーサイ",
"en": "Zha Cai",
"region": "china",
"pref": "中国（四川）",
"lat": 29.7,
"lon": 107.4,
"desc": "四川省で、からし菜の茎のこぶを唐辛子などで漬けた漬物。",
"ex": [
{
"id": "cm-zasai-std",
"label": "味付けザーサイ",
"name": "ザーサイ",
"en": "Zha Cai",
"type": "漬物",
"age": "",
"abv": "",
"cask": "からし菜の茎",
"grapes": [
"tsukemono"
],
"color": "green",
"price": 600,
"p": [
4,
3,
1,
1,
2,
2,
0,
5
],
"tags": [
"コリコリ",
"ごま油",
"ピリ辛"
],
"pairs": {
"w_light": 2,
"s_dry": 2,
"wh_crisp": 1
},
"desc": "コリコリとした歯ごたえと、ごま油の香り。きゅうりや豆腐と和えても。",
"recipes": [
"r-zasai-kyuri"
],
"howto": "そのまま、和え物に",
"pref": "中国（四川）"
}
]
},
{
"id": "cm-furu",
"name": "腐乳",
"en": "Furu",
"region": "china",
"pref": "中国",
"lat": 31.23,
"lon": 121.47,
"desc": "豆腐を麹で発酵させ、塩水や酒に漬けた中国の調味料・珍味。豆腐ようの源流ともいわれる。",
"ex": [
{
"id": "cm-furu-std",
"label": "白腐乳",
"name": "腐乳",
"en": "Fermented Bean Curd",
"type": "大豆・豆腐の加工品",
"age": "",
"abv": "",
"cask": "豆腐",
"grapes": [
"soy"
],
"color": "cream",
"price": 1000,
"p": [
5,
5,
1,
1,
1,
4,
0,
0
],
"tags": [
"チーズのよう",
"塩気",
"発酵"
],
"pairs": {
"s_aged": 2,
"s_rich": 2,
"w_sherry": 1
},
"desc": "ねっとりとしたチーズのような質感。塩気が強いので、おかゆやご飯にほんの少し。",
"recipes": [],
"howto": "少量ずつ",
"pref": "中国"
}
]
},
{
"id": "cm-kimchi",
"name": "キムチ",
"en": "Kimchi",
"region": "korea",
"pref": "韓国",
"lat": 37.57,
"lon": 126.98,
"desc": "白菜などを唐辛子、にんにく、塩辛などで漬けて発酵させた、韓国を代表する漬物。",
"ex": [
{
"id": "cm-kimchi-std",
"label": "白菜キムチ",
"name": "白菜キムチ",
"en": "Baechu Kimchi",
"type": "漬物",
"age": "",
"abv": "",
"cask": "白菜・唐辛子・塩辛",
"grapes": [
"tsukemono"
],
"color": "red",
"price": 300,
"p": [
3,
4,
2,
3,
4,
3,
0,
4
],
"tags": [
"辛み",
"発酵",
"酸味"
],
"pairs": {
"w_light": 2,
"spark": 2,
"s_dry": 1,
"rose": 1
},
"desc": "漬けたては辛みとフレッシュさ、発酵が進むと酸味と旨みが増す。古漬けは炒め物や鍋にも。",
"recipes": [
"r-kimchi-chahan"
],
"howto": "そのまま、炒め物に",
"pref": "韓国"
}
]
},
{
"id": "cm-changja",
"name": "チャンジャ",
"en": "Changran-jeot",
"region": "korea",
"pref": "韓国",
"lat": 35.18,
"lon": 129.08,
"desc": "たらの胃袋を、唐辛子やにんにくと漬けた韓国の塩辛。",
"ex": [
{
"id": "cm-changja-std",
"label": "チャンジャ",
"name": "チャンジャ",
"en": "Changran-jeot",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "たらの胃袋",
"grapes": [
"shiokara"
],
"color": "red",
"price": 1500,
"p": [
4,
4,
2,
0,
4,
3,
0,
5
],
"tags": [
"コリコリ",
"辛み",
"ごま油"
],
"pairs": {
"s_dry": 2,
"w_light": 2,
"spark": 1
},
"desc": "コリコリとした歯ごたえと、ピリッとした辛み。焼酎やマッコリ、ハイボールに。",
"recipes": [],
"howto": "そのまま",
"pref": "韓国"
}
]
},
{
"id": "cm-koreanori",
"name": "韓国のり",
"en": "Gim",
"region": "korea",
"pref": "韓国",
"lat": 34.8,
"lon": 126.4,
"desc": "のりにごま油と塩をぬって焼いた、香ばしい味付けのり。",
"ex": [
{
"id": "cm-koreanori-std",
"label": "韓国のり",
"name": "韓国のり",
"en": "Korean Seasoned Seaweed",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "のり・ごま油",
"grapes": [
"fruit"
],
"color": "green",
"price": 1500,
"p": [
3,
3,
0,
0,
0,
0,
4,
1
],
"tags": [
"ごま油",
"香ばしい",
"パリパリ"
],
"pairs": {
"w_light": 2,
"s_dry": 1,
"spark": 1
},
"desc": "パリッとした食感とごま油の香り。そのままつまむだけで、ビールやハイボールのお供に。",
"recipes": [],
"howto": "そのまま",
"pref": "韓国"
}
]
},
{
"id": "cm-taiwan-karasumi",
"name": "烏魚子（台湾からすみ）",
"en": "Wuyuzi",
"region": "taiwan",
"pref": "台湾",
"lat": 22.63,
"lon": 120.3,
"desc": "冬に台湾海峡を南下するぼらの卵巣で作る、台湾のからすみ。",
"ex": [
{
"id": "cm-taiwan-karasumi-std",
"label": "烏魚子",
"name": "烏魚子",
"en": "Taiwanese Mullet Roe",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "ぼらの卵巣",
"grapes": [
"roe"
],
"color": "amber",
"price": 6000,
"p": [
4,
5,
2,
0,
0,
2,
1,
3
],
"tags": [
"ねっとり",
"旨み",
"香ばしい"
],
"pairs": {
"s_dry": 2,
"s_aged": 2,
"w_sherry": 2,
"w_light": 1
},
"desc": "日本のからすみより手頃なことが多い。台湾では高粱酒で表面をあぶり、にんにくの葉や大根と食べる。",
"recipes": [
"r-karasumi-pasta"
],
"howto": "軽く炙って薄切り",
"pref": "台湾"
}
]
},
{
"id": "cm-prosciutto",
"name": "プロシュット・ディ・パルマ",
"en": "Prosciutto di Parma",
"region": "italy",
"pref": "イタリア（パルマ）",
"lat": 44.8,
"lon": 10.33,
"desc": "パルマ周辺の丘陵で、豚のもも肉を塩だけで漬けて1年以上乾燥・熟成させた生ハム。",
"ex": [
{
"id": "cm-prosciutto-std",
"label": "プロシュット・ディ・パルマ",
"name": "プロシュット・ディ・パルマ",
"en": "Prosciutto di Parma DOP",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "豚もも肉・塩",
"grapes": [
"meat"
],
"color": "pink",
"price": 1500,
"p": [
3,
5,
3,
0,
0,
2,
0,
2
],
"tags": [
"熟成",
"脂の甘み",
"とろける"
],
"pairs": {
"spark": 3,
"r_light": 2,
"wh_crisp": 2,
"rose": 2,
"s_dry": 1
},
"desc": "塩だけで仕上げる、しっとりやわらかで甘みのある生ハム。メロンやいちじくと合わせるのが定番。",
"recipes": [
"r-fig-prosciutto"
],
"howto": "そのまま、果物と",
"pref": "イタリア（パルマ）"
}
]
},
{
"id": "cm-salami",
"name": "ミラノサラミ",
"en": "Salame Milano",
"region": "italy",
"pref": "イタリア（ミラノ）",
"lat": 45.46,
"lon": 9.19,
"desc": "豚肉と脂を細かくひいて腸に詰め、乾燥・熟成させたサラミ。",
"ex": [
{
"id": "cm-salami-std",
"label": "ミラノサラミ",
"name": "ミラノサラミ",
"en": "Salame Milano",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "豚肉",
"grapes": [
"meat"
],
"color": "red",
"price": 900,
"p": [
4,
5,
1,
1,
1,
2,
1,
3
],
"tags": [
"熟成",
"塩気",
"脂のコク"
],
"pairs": {
"r_light": 3,
"r_full": 2,
"w_light": 2,
"spark": 1
},
"desc": "きめ細かく、まろやかな味わい。薄くスライスして赤ワインと。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "イタリア（ミラノ）"
}
]
},
{
"id": "cm-anchovy",
"name": "アンチョビ",
"en": "Acciughe",
"region": "italy",
"pref": "イタリア・スペインなど",
"lat": 43.7,
"lon": 10.4,
"desc": "かたくちいわしを塩漬けにして熟成させ、オイルに漬けたもの。",
"ex": [
{
"id": "cm-anchovy-std",
"label": "フィレ（オイル漬け）",
"name": "アンチョビ（オイル漬け）",
"en": "Anchovy Fillets in Oil",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "かたくちいわし",
"grapes": [
"himono"
],
"color": "brownc",
"price": 1500,
"p": [
5,
5,
0,
0,
0,
3,
0,
1
],
"tags": [
"旨み",
"塩気",
"発酵"
],
"pairs": {
"wh_crisp": 3,
"rose": 2,
"spark": 2,
"s_dry": 1
},
"desc": "強い塩気と発酵の旨み。そのままパンにのせてバターと。料理の隠し味にも。",
"recipes": [
"r-spring-cabbage"
],
"howto": "バター・パンと",
"pref": "イタリア・スペインなど"
}
]
},
{
"id": "cm-bottarga",
"name": "ボッタルガ",
"en": "Bottarga",
"region": "italy",
"pref": "イタリア（サルデーニャ）",
"lat": 39.9,
"lon": 8.6,
"desc": "イタリア・サルデーニャ島などで作られる、ぼらの卵巣のからすみ。",
"ex": [
{
"id": "cm-bottarga-std",
"label": "ボッタルガ（ぼら）",
"name": "ボッタルガ",
"en": "Bottarga di Muggine",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "ぼらの卵巣",
"grapes": [
"roe"
],
"color": "amber",
"price": 5000,
"p": [
5,
5,
1,
0,
0,
2,
1,
3
],
"tags": [
"ねっとり",
"塩気",
"旨み"
],
"pairs": {
"wh_crisp": 3,
"s_dry": 2,
"spark": 2
},
"desc": "日本のからすみより塩気がしっかりとして、パスタにすりおろして使うのが定番。薄く切ってレモンとオリーブオイルで。",
"recipes": [
"r-karasumi-pasta"
],
"howto": "薄く切って、すりおろして",
"pref": "イタリア（サルデーニャ）"
}
]
},
{
"id": "cm-jamon",
"name": "ハモン（スペインの生ハム）",
"en": "Jamón",
"region": "spain",
"pref": "スペイン",
"lat": 40.2,
"lon": -3.7,
"desc": "スペインの生ハム。白豚のハモン・セラーノと、イベリコ豚のハモン・イベリコがある。",
"ex": [
{
"id": "cm-jamon-serrano",
"label": "ハモン・セラーノ",
"name": "ハモン・セラーノ",
"en": "Jamón Serrano",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "白豚もも肉・塩",
"grapes": [
"meat"
],
"color": "red",
"price": 1200,
"p": [
4,
5,
2,
0,
0,
2,
1,
3
],
"tags": [
"熟成",
"塩気",
"旨み"
],
"pairs": {
"r_light": 2,
"wh_crisp": 2,
"spark": 2,
"w_sherry": 2
},
"desc": "白豚で造る、しっかりした塩気と熟成の旨み。スペインのバルの定番。",
"recipes": [
"r-fig-prosciutto"
],
"howto": "そのまま",
"pref": "スペイン"
},
{
"id": "cm-jamon-iberico",
"label": "ハモン・イベリコ（ベジョータ）",
"name": "ハモン・イベリコ",
"en": "Jamón Ibérico de Bellota",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "イベリコ豚もも肉・塩",
"grapes": [
"meat"
],
"color": "red",
"price": 4000,
"p": [
3,
5,
3,
0,
0,
3,
1,
2
],
"tags": [
"どんぐりの香り",
"とろける脂",
"熟成"
],
"pairs": {
"w_sherry": 3,
"r_full": 2,
"spark": 2,
"wh_rich": 1
},
"desc": "どんぐりを食べて育ったイベリコ豚で造る最上級品。脂が口の中でとろけ、ナッツのような香り。辛口のフィノ・シェリーと。",
"recipes": [],
"howto": "そのまま",
"pref": "スペイン"
}
]
},
{
"id": "cm-chorizo",
"name": "チョリソー",
"en": "Chorizo",
"region": "spain",
"pref": "スペイン",
"lat": 43.0,
"lon": -5.8,
"desc": "パプリカで味付けした、スペインの乾燥ソーセージ。",
"ex": [
{
"id": "cm-chorizo-std",
"label": "チョリソー（乾燥）",
"name": "チョリソー",
"en": "Chorizo",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "豚肉・パプリカ",
"grapes": [
"meat"
],
"color": "red",
"price": 1000,
"p": [
4,
4,
1,
1,
2,
2,
3,
3
],
"tags": [
"パプリカ",
"燻香",
"脂のコク"
],
"pairs": {
"r_light": 2,
"r_full": 2,
"rose": 2,
"w_rich": 1
},
"desc": "スモークパプリカの香りと豚の脂のコク。薄く切ってそのまま。",
"recipes": [],
"howto": "薄く切ってそのまま",
"pref": "スペイン"
}
]
},
{
"id": "cm-manzanilla",
"name": "オリーブ（マンサニーリャ）",
"en": "Manzanilla Olives",
"region": "spain",
"pref": "スペイン（アンダルシア）",
"lat": 37.38,
"lon": -5.98,
"desc": "スペイン南部アンダルシアの代表的な緑のオリーブ。",
"ex": [
{
"id": "cm-manzanilla-std",
"label": "グリーンオリーブ",
"name": "オリーブ（マンサニーリャ）",
"en": "Manzanilla Olives",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "オリーブ",
"grapes": [
"fruit"
],
"color": "green",
"price": 500,
"p": [
4,
2,
0,
2,
0,
1,
0,
3
],
"tags": [
"さっぱり",
"塩気",
"ハーブ"
],
"pairs": {
"w_sherry": 2,
"wh_crisp": 3,
"spark": 2,
"rose": 1
},
"desc": "すっきりとした塩気と、ほのかな苦み。アンチョビ詰めも人気。辛口のシェリーやジンに。",
"recipes": [],
"howto": "そのまま",
"pref": "スペイン（アンダルシア）"
}
]
},
{
"id": "cm-rillettes",
"name": "リエット",
"en": "Rillettes",
"region": "france",
"pref": "フランス（ロワール）",
"lat": 47.39,
"lon": 0.69,
"desc": "豚肉を脂で長時間煮込み、ほぐしてペースト状にしたもの。",
"ex": [
{
"id": "cm-rillettes-std",
"label": "豚のリエット",
"name": "リエット",
"en": "Rillettes de Porc",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "豚肉・豚脂",
"grapes": [
"meat"
],
"color": "cream",
"price": 1000,
"p": [
3,
4,
1,
0,
0,
1,
0,
0
],
"tags": [
"なめらか",
"脂のコク",
"旨み"
],
"pairs": {
"r_light": 3,
"wh_crisp": 2,
"spark": 1
},
"desc": "バゲットにたっぷりぬって。コルニッションを添えると味が締まる。",
"recipes": [],
"howto": "パンにぬって",
"pref": "フランス（ロワール）"
}
]
},
{
"id": "cm-cornichon",
"name": "コルニッション",
"en": "Cornichons",
"region": "france",
"pref": "フランス",
"lat": 48.86,
"lon": 2.35,
"desc": "小さなきゅうりを酢漬けにしたフランスのピクルス。",
"ex": [
{
"id": "cm-cornichon-std",
"label": "コルニッション",
"name": "コルニッション",
"en": "Cornichons",
"type": "漬物",
"age": "",
"abv": "",
"cask": "小きゅうり",
"grapes": [
"tsukemono"
],
"color": "green",
"price": 600,
"p": [
3,
1,
1,
5,
1,
0,
0,
4
],
"tags": [
"酸味",
"カリカリ",
"ハーブ"
],
"pairs": {
"wh_crisp": 2,
"spark": 2,
"w_light": 1
},
"desc": "キリッとした酸味とカリカリの食感。リエットやパテ、ラクレットのお供に。",
"recipes": [
"r-raclette"
],
"howto": "そのまま",
"pref": "フランス"
}
]
},
{
"id": "cm-foiegras",
"name": "フォアグラ（ブロック）",
"en": "Foie Gras",
"region": "france",
"pref": "フランス（南西部）",
"lat": 43.6,
"lon": 1.44,
"desc": "がちょうやかもに餌を多く与えて肥大させた肝臓。加熱して型に詰めたブロックは、そのまま食べられる。",
"ex": [
{
"id": "cm-foiegras-std",
"label": "ブロック・ド・フォアグラ",
"name": "ブロック・ド・フォアグラ",
"en": "Bloc de Foie Gras",
"type": "肉の加工品",
"age": "",
"abv": "",
"cask": "かもの肝臓",
"grapes": [
"meat"
],
"color": "cream",
"price": 6000,
"p": [
2,
5,
3,
0,
0,
1,
0,
0
],
"tags": [
"濃厚",
"なめらか",
"脂のコク"
],
"pairs": {
"dessert": 3,
"spark": 2,
"w_sherry": 2,
"wh_rich": 1
},
"desc": "とろけるような濃厚さ。ソーテルヌなどの甘口ワインと合わせるのが伝統。",
"recipes": [],
"howto": "薄く切ってパンと",
"pref": "フランス（南西部）"
}
]
},
{
"id": "cm-smokedsalmon",
"name": "スモークサーモン",
"en": "Smoked Salmon",
"region": "norway",
"pref": "ノルウェー",
"lat": 60.39,
"lon": 5.32,
"desc": "塩漬けにしたサーモンを低温で燻製にしたもの。",
"ex": [
{
"id": "cm-smokedsalmon-std",
"label": "スモークサーモン",
"name": "スモークサーモン",
"en": "Smoked Salmon",
"type": "干物・燻製（魚介）",
"age": "",
"abv": "",
"cask": "アトランティックサーモン",
"grapes": [
"himono"
],
"color": "pink",
"price": 1200,
"p": [
3,
4,
1,
0,
0,
1,
3,
1
],
"tags": [
"スモーク",
"脂のコク",
"なめらか"
],
"pairs": {
"spark": 3,
"wh_crisp": 3,
"w_smoky": 2,
"s_dry": 1
},
"desc": "しっとりとした脂と、穏やかな燻製の香り。レモンやケイパー、クリームチーズと。",
"recipes": [
"r-smoked-salmon"
],
"howto": "そのまま、レモンと",
"pref": "ノルウェー"
}
]
},
{
"id": "cm-surstromming",
"name": "シュールストレミング",
"en": "Surströmming",
"region": "sweden",
"pref": "スウェーデン",
"lat": 62.6,
"lon": 17.9,
"desc": "バルト海のニシンを塩漬けにして、缶の中で発酵させ続ける。世界一くさい食べ物ともいわれる。",
"ex": [
{
"id": "cm-surstromming-std",
"label": "シュールストレミング",
"name": "シュールストレミング",
"en": "Surströmming",
"type": "塩辛・発酵した魚介",
"age": "",
"abv": "",
"cask": "ニシン",
"grapes": [
"shiokara"
],
"color": "cream",
"price": 2000,
"p": [
5,
4,
0,
3,
0,
5,
0,
1
],
"tags": [
"強烈な香り",
"発酵",
"塩気"
],
"pairs": {
"w_light": 1,
"s_dry": 1
},
"desc": "缶の中で発酵が進んでガスが溜まるため、開けるときは屋外で。地元では薄いパン（トゥンブロード）にじゃがいもや玉ねぎとはさみ、ビールやアクアビットで。",
"recipes": [],
"howto": "屋外で開けて、パンにはさんで",
"pref": "スウェーデン"
}
]
},
{
"id": "cm-kalamata",
"name": "カラマタオリーブ",
"en": "Kalamata Olives",
"region": "greece",
"pref": "ギリシャ",
"lat": 37.04,
"lon": 22.11,
"desc": "ギリシャ南部カラマタ周辺の、黒紫色のアーモンド形のオリーブ。",
"ex": [
{
"id": "cm-kalamata-std",
"label": "カラマタオリーブ",
"name": "カラマタオリーブ",
"en": "Kalamata Olives",
"type": "果実・野菜・海藻の加工品",
"age": "",
"abv": "",
"cask": "オリーブ",
"grapes": [
"fruit"
],
"color": "purple",
"price": 600,
"p": [
4,
3,
1,
3,
0,
2,
0,
3
],
"tags": [
"果実味",
"塩気",
"ワインビネガー"
],
"pairs": {
"r_light": 2,
"rose": 3,
"wh_crisp": 2
},
"desc": "ワインビネガーに漬けた、果実味豊かで濃厚な味わい。",
"recipes": [],
"howto": "そのまま",
"pref": "ギリシャ"
}
]
},
{
"id": "cm-caviar",
"name": "キャビア",
"en": "Caviar",
"region": "caspian",
"pref": "カスピ海沿岸ほか",
"lat": 42.0,
"lon": 50.5,
"desc": "チョウザメの卵の塩漬け。世界三大珍味のひとつ。現在は世界各地の養殖ものが中心。",
"ex": [
{
"id": "cm-caviar-std",
"label": "キャビア（養殖）",
"name": "キャビア",
"en": "Caviar",
"type": "魚卵",
"age": "",
"abv": "",
"cask": "チョウザメの卵",
"grapes": [
"roe"
],
"color": "roe_black",
"price": 30000,
"p": [
4,
5,
1,
0,
0,
2,
0,
2
],
"tags": [
"ぷちぷち",
"ナッツ",
"磯の香り"
],
"pairs": {
"spark": 3,
"s_dry": 2,
"wh_crisp": 2
},
"desc": "ナッツのようなコクと、上品な磯の香り。金属のスプーンは味を損なうといわれ、貝や角のスプーンで。シャンパーニュやウォッカと。",
"recipes": [],
"howto": "そのまま、ブリニにのせて",
"pref": "カスピ海沿岸ほか"
}
]
}
];
const CHINMI_ENTRIES = CHINMI_ITEMS.flatMap(d => d.ex.map(x => ({ ...x, distilleryId:d.id, distillery:d.name, region:d.region, lat:d.lat, lon:d.lon })));
const CHINMI_REGIONS = {"hokkaido": {"jp": "北海道", "en": "HOKKAIDO", "label": [142.6, 43.5], "desc": "鮭やいくら、数の子、いかなど北の海の幸の加工品が豊富。冬の寒さを生かした干物も多い。", "pick": "北海道"}, "tohoku": {"jp": "東北", "en": "TOHOKU", "label": [140.7, 39.4], "desc": "長い冬に備える保存食の文化が根づく地方。いぶりがっこや、三陸のほやの塩辛、笹かまぼこなど。", "pick": "東北"}, "kanto": {"jp": "関東", "en": "KANTO", "label": [139.6, 36.1], "desc": "江戸の食文化から生まれた佃煮やべったら漬、伊豆諸島のくさやなど。", "pick": "関東"}, "hokuriku": {"jp": "北陸", "en": "HOKURIKU", "label": [138.2, 37.35], "desc": "日本海の魚介と、雪国の発酵文化が出会う珍味の宝庫。へしこ、このわた、ふぐの子糠漬け、ほたるいかの沖漬けなど、日本酒によく合うものが多い。", "pick": "北陸"}, "koshin": {"jp": "甲信・東海", "en": "KOSHIN & TOKAI", "label": [137.6, 35.4], "desc": "信州の野沢菜漬、静岡のわさび漬や桜えび、尾張の守口漬など、山と海の幸の加工品。", "short": "甲信・東海", "pick": "甲信・東海"}, "kinki": {"jp": "近畿", "en": "KINKI", "label": [135.6, 34.75], "desc": "京都の漬物、滋賀の鮒寿司、和歌山の梅干し、大阪の塩昆布など、古くからの食文化を伝える品が多い。", "pick": "近畿"}, "chugoku": {"jp": "中国", "en": "CHUGOKU", "label": [132.6, 34.85], "desc": "瀬戸内の牡蠣などの海の幸の加工品。", "pick": "中国"}, "shikoku": {"jp": "四国", "en": "SHIKOKU", "label": [133.3, 33.75], "desc": "高知の酒盗、愛媛のじゃこ天など、酒どころ・土佐の豪快な肴も。", "pick": "四国"}, "kyushu": {"jp": "九州・沖縄", "en": "KYUSHU & OKINAWA", "label": [130.9, 32.75], "desc": "博多の辛子明太子、長崎のからすみ、沖縄の豆腐ようやスクガラス豆腐など、個性豊か。", "short": "九州", "pick": "九州・沖縄"}, "china": {"jp": "中国", "en": "CHINA", "label": [113.0, 31.0], "desc": "ピータンや腐乳、ザーサイなど、発酵や塩漬けの技術を生かした保存食が多い。紹興酒と合わせたい。", "pick": "中国（大陸）"}, "korea": {"jp": "韓国", "en": "KOREA", "label": [127.8, 36.4], "desc": "キムチやチャンジャなど、唐辛子と発酵の国。マッコリや焼酎とよく合う。", "pick": "韓国"}, "taiwan": {"jp": "台湾", "en": "TAIWAN", "label": [121.0, 23.7], "desc": "冬に獲れるボラの卵で造るからすみ（烏魚子）が名産。", "pick": "台湾"}, "italy": {"jp": "イタリア", "en": "ITALY", "label": [12.5, 42.6], "desc": "生ハムやサラミ、アンチョビ、ボッタルガ（からすみ）など、ワインのおつまみの宝庫。", "pick": "イタリア"}, "spain": {"jp": "スペイン", "en": "SPAIN", "label": [-3.7, 40.2], "desc": "ハモン・セラーノやイベリコ豚の生ハム、チョリソー、オリーブなど、バルのつまみの国。", "pick": "スペイン"}, "france": {"jp": "フランス", "en": "FRANCE", "label": [2.4, 46.8], "desc": "リエットやパテなどのシャルキュトリー、フォアグラ、小さなピクルスのコルニッションなど。", "pick": "フランス"}, "norway": {"jp": "ノルウェー", "en": "NORWAY", "label": [9.5, 61.0], "desc": "養殖サーモンの一大産地。スモークサーモンは日本でも身近。", "pick": "ノルウェー"}, "sweden": {"jp": "スウェーデン", "en": "SWEDEN", "label": [16.0, 62.5], "desc": "ニシンの酢漬けや、世界一くさいともいわれる発酵ニシンの缶詰シュールストレミングの国。", "pick": "スウェーデン"}, "greece": {"jp": "ギリシャ", "en": "GREECE", "label": [22.2, 39.3], "desc": "オリーブの国。黒紫色のカラマタオリーブが有名。", "pick": "ギリシャ"}, "caspian": {"jp": "カスピ海沿岸", "en": "CASPIAN SEA", "label": [50.5, 42.0], "short": "カスピ海", "desc": "チョウザメの卵、キャビアの本場。野生のチョウザメは保護されており、現在流通するキャビアは世界各地の養殖ものがほとんど。", "pick": "そのほかの国"}};
const CHINMI_COUNTRIES = {"japan": {"jp": "日本", "style": "日本", "en": "JAPAN", "mark": [138.0, 36.2], "map": "japan", "regions": ["hokkaido", "tohoku", "kanto", "hokuriku", "koshin", "kinki", "chugoku", "shikoku", "kyushu"], "desc": "全国各地に、その土地の魚介や野菜を保存するための珍味が伝わる。地図の地方をタップすると、その土地の珍味が表示される。"}, "asia": {"jp": "アジア", "style": "アジア", "en": "ASIA", "mark": [113.0, 32.0], "map": "chinmi_asia", "regions": ["china", "korea", "taiwan"], "desc": "発酵や塩漬けの技術を生かした保存食が多い地域。日本でも手に入りやすいものを中心に紹介している。"}, "europe": {"jp": "ヨーロッパ", "style": "ヨーロッパ", "en": "EUROPE", "mark": [8.0, 46.0], "map": "chinmi_europe", "regions": ["norway", "sweden", "france", "spain", "italy", "greece", "caspian"], "desc": "生ハムやサラミ、魚の塩漬けや燻製など、ワインやビールに合わせる加工品が豊富。"}};
const CHINMI_MAIN = ["japan","asia","europe"];
const CHINMI_TYPES = [
{
"id": "tsukemono",
"name": "漬物",
"en": "Pickles",
"kind": "珍味",
"home": "日本、韓国、中国、ヨーロッパ",
"p": [
3,
2,
2,
3,
1,
3,
1,
4
],
"tags": [
"発酵",
"塩気",
"歯ごたえ"
],
"desc": "野菜を塩やぬか、麹、酒かすなどに漬けて保存性と旨みを高めたもの。乳酸発酵による酸味や、漬け床の香りが味わいを決める。ご飯にもお酒にも合う、日本の食卓の名脇役。"
},
{
"id": "roe",
"name": "魚卵",
"en": "Roe",
"kind": "珍味",
"home": "日本、ロシア・イラン（カスピ海）、イタリア",
"p": [
4,
5,
1,
0,
1,
1,
0,
2
],
"tags": [
"旨み",
"塩気",
"ぷちぷち"
],
"desc": "魚の卵を塩や醤油に漬けたり、干したりしたもの。いくら、たらこ、数の子、からすみ、キャビアなど。濃い旨みと塩気で、少量でお酒が進む。"
},
{
"id": "shiokara",
"name": "塩辛・発酵した魚介",
"en": "Fermented Seafood",
"kind": "珍味",
"home": "日本、韓国、スウェーデン",
"p": [
5,
5,
1,
1,
1,
5,
0,
2
],
"tags": [
"発酵",
"旨み",
"塩気"
],
"desc": "魚介の身や内臓を塩で漬けて発酵させたもの。いかの塩辛、酒盗、このわた、鮒寿司など。強い旨みと独特の香りで、「酒を盗む」ほどお酒が進むといわれる。"
},
{
"id": "himono",
"name": "干物・燻製（魚介）",
"en": "Dried & Smoked Seafood",
"kind": "珍味",
"home": "日本、ノルウェー",
"p": [
4,
4,
1,
0,
0,
2,
4,
4
],
"tags": [
"香ばしい",
"旨み",
"かむほどに"
],
"desc": "魚介を干したり燻したりして旨みを凝縮させたもの。鮭とば、くさや、干し貝柱、スモークサーモンなど。軽く炙ると香りが立つ。"
},
{
"id": "neri",
"name": "練り物・佃煮",
"en": "Fish Cakes & Tsukudani",
"kind": "珍味",
"home": "日本",
"p": [
3,
4,
3,
0,
0,
0,
2,
2
],
"tags": [
"甘辛",
"旨み",
"やわらか"
],
"desc": "魚のすり身を焼いたり揚げたりした練り物や、小魚や昆布を甘辛く煮詰めた佃煮。そのままで気軽につまめる。"
},
{
"id": "soy",
"name": "大豆・豆腐の加工品",
"en": "Fermented Tofu & Soy",
"kind": "珍味",
"home": "日本（沖縄・九州）、中国",
"p": [
4,
5,
2,
1,
1,
4,
0,
1
],
"tags": [
"発酵",
"チーズのよう",
"濃厚"
],
"desc": "豆腐を麹や泡盛、もろみ、味噌に漬けて発酵・熟成させたもの。チーズのようになめらかで濃厚な味わいになる。豆腐よう、腐乳、豆腐の味噌漬けなど。"
},
{
"id": "meat",
"name": "肉の加工品",
"en": "Cured Meats",
"kind": "珍味",
"home": "イタリア、スペイン、フランス、沖縄",
"p": [
4,
5,
2,
0,
1,
2,
1,
3
],
"tags": [
"熟成",
"塩気",
"脂の甘み"
],
"desc": "豚などの肉を塩漬けにして乾燥・熟成させた生ハムやサラミ、ペースト状のリエットなど。ワインと合わせる定番のおつまみ。"
},
{
"id": "fruit",
"name": "果実・野菜・海藻の加工品",
"en": "Fruits, Olives & Seaweed",
"kind": "珍味",
"home": "日本、スペイン、ギリシャ、中国、韓国",
"p": [
3,
2,
1,
3,
1,
1,
1,
2
],
"tags": [
"酸味",
"塩気",
"さっぱり"
],
"desc": "梅干しやオリーブ、塩昆布、ピータン、のりなど、果実や野菜、海藻、卵を加工したもの。口直しやお酒の合間に。"
}
];
const CHINMI_MAPS = {"world": {"w": 168.5, "h": 88.4, "proj": {"lon0": -12, "lat1": 66, "c": 0.8, "k": 1.3}, "base": "M199.7,106.7L199.7,107.3L198.4,107.9L198.2,107.4ZM197.7,108.6L198.3,108.7L198.2,109.4L197.5,109.6L197.0,109.4L196.9,108.8ZM47.7,87.0L51.7,89.8L51.8,90.6L53.3,91.9L52.8,93.5L52.8,94.2L53.5,94.7L53.2,96.8L54.4,99.2L53.6,100.0L50.5,101.0L48.4,100.8L47.8,98.4L44.4,96.6L43.3,94.3L43.0,91.6L44.5,90.2L44.2,88.9L44.5,88.0L44.1,87.3ZM3.5,49.8L3.4,52.2L0.0,52.1L0.1,55.4L-0.9,55.5L-1.0,58.1L-5.0,58.1L-5.3,58.5L-5.2,58.0L-2.9,57.8L-2.0,55.0L-0.5,53.6L0.6,50.9L3.3,50.5ZM103.3,21.8L102.5,22.7L101.7,22.8L101.6,24.1L101.1,24.7L99.0,24.3L98.2,26.6L95.6,27.4L96.6,29.7L95.9,30.0L96.0,30.7L94.8,30.1L91.1,30.1L89.7,29.5L89.1,29.8L88.9,30.5L86.5,30.3L86.3,30.9L84.3,32.0L83.9,32.9L83.2,32.3L81.9,32.3L81.7,31.2L81.1,31.2L81.2,29.9L80.0,29.0L77.0,29.2L76.0,28.1L73.3,26.5L70.6,27.3L70.7,32.1L70.2,32.2L68.7,30.8L67.1,31.5L67.1,30.2L65.9,29.7L64.8,27.8L65.8,27.9L65.8,27.0L66.7,26.8L67.6,27.0L67.6,24.9L65.7,24.6L63.5,25.5L63.0,25.3L63.1,24.6L62.5,23.7L61.7,23.8L60.8,22.9L61.9,20.2L63.0,21.0L63.1,20.0L65.3,18.6L66.9,18.6L70.4,20.0L71.5,19.4L73.2,19.4L74.5,20.1L74.8,19.7L76.3,19.8L76.5,19.1L74.8,18.3L75.8,17.6L75.6,17.3L76.6,16.9L75.9,16.0L76.4,15.6L80.3,15.1L84.3,13.8L86.2,14.1L86.5,15.4L87.6,15.1L88.9,15.6L88.8,16.3L92.4,15.0L92.1,15.4L93.4,16.4L95.7,19.7L96.3,19.0L97.7,19.7L99.2,19.4L101.4,21.2L102.8,21.0ZM70.7,32.1L70.6,27.3L73.3,26.5L76.0,28.1L77.0,29.2L80.0,29.0L81.2,29.9L81.1,31.2L81.7,31.2L81.9,32.3L83.2,32.3L83.5,32.9L85.7,31.1L86.6,31.0L85.7,31.8L88.5,32.7L87.1,33.6L85.9,33.5L86.0,32.6L84.6,32.9L83.8,34.4L82.9,34.3L82.6,34.9L83.4,35.2L83.6,36.2L83.0,37.5L81.7,37.2L81.7,36.4L79.2,35.2L77.3,33.7L76.8,32.4L75.4,32.2L74.9,30.9L73.5,30.2L71.7,31.4L71.9,32.1ZM159.1,89.2L162.8,90.8L164.1,92.1L164.3,92.9L166.0,93.7L166.3,94.4L165.3,94.5L165.6,95.4L167.2,97.6L167.8,97.6L167.7,98.2L169.3,99.2L168.5,99.6L166.3,99.0L164.4,96.3L163.0,95.7L161.5,96.5L161.6,97.5L160.8,97.9L159.2,97.7ZM171.2,90.6L171.7,91.6L171.4,92.0L170.5,90.3L169.2,89.4L169.5,89.1ZM169.8,93.4L168.2,94.0L166.7,93.3L166.8,92.9L168.3,93.0L168.6,92.3L168.7,93.0L169.3,92.9L170.2,92.0L170.1,91.2L170.7,91.2L170.9,92.1ZM173.4,92.7L174.7,94.3L174.3,94.8L173.4,93.5ZM159.1,89.2L159.2,97.7L158.2,96.6L157.2,96.3L155.6,96.7L156.7,95.3L155.9,92.8L153.1,91.6L151.5,90.4L150.8,91.1L150.5,90.1L149.7,89.5L151.6,89.0L151.5,88.7L150.0,88.7L148.2,87.0L150.2,86.3L151.8,86.8L152.3,89.4L153.4,90.2L154.2,88.8L155.4,88.0ZM142.4,97.4L142.6,98.0L141.9,99.0L141.0,99.3L141.4,97.9ZM152.1,94.8L152.4,92.9L152.6,93.9ZM135.1,80.4L134.5,81.6L135.3,82.8L135.1,83.4L136.2,84.6L135.0,84.8L134.7,86.8L133.7,87.7L133.3,91.0L133.1,90.6L131.9,91.1L131.5,90.3L130.3,89.9L129.0,90.3L128.7,89.7L127.1,89.6L127.0,87.9L125.9,86.4L125.8,85.3L126.5,83.2L127.4,84.8L128.7,84.6L129.9,83.9L130.8,84.2L131.7,83.9L133.0,80.2ZM147.0,89.4L148.2,89.8L148.5,90.8L146.8,90.2L145.5,90.2L145.7,89.5ZM144.4,90.7L143.5,89.9L144.6,89.9L144.8,90.3ZM145.5,83.0L146.3,84.3L146.3,85.5L145.7,85.3L145.6,86.1L145.0,84.5ZM140.3,84.7L141.5,84.6L142.5,83.7L141.9,85.2L137.5,85.5L137.3,86.5L138.3,87.6L138.8,87.0L140.8,86.6L140.7,87.2L140.2,87.0L138.8,88.3L140.6,91.9L140.6,92.7L140.0,93.1L139.6,92.7L140.1,91.6L139.1,92.1L138.2,90.5L138.3,89.2L137.6,89.6L137.7,93.0L136.6,92.8L136.8,90.3L136.3,90.3L136.0,89.4L137.3,85.1L138.2,84.1ZM137.6,99.1L136.2,98.2L137.2,98.0L137.7,98.4L138.1,98.8ZM138.7,96.9L140.3,96.3L140.1,97.0L138.6,97.4L137.2,97.3L137.2,96.8L138.0,96.5ZM135.5,96.7L136.1,96.6L136.4,97.1L134.4,97.6L133.9,97.5L134.2,96.8L135.1,96.3ZM125.3,94.1L125.4,94.6L127.4,94.7L127.7,94.2L129.6,94.8L130.0,95.7L132.8,96.7L131.6,97.2L130.5,96.7L128.5,96.6L123.2,95.4L123.0,94.8L122.1,94.7L122.8,93.5ZM121.0,87.2L121.6,88.8L122.3,89.0L122.8,89.8L122.5,93.4L121.4,93.4L119.2,91.3L115.7,85.6L115.0,83.4L114.1,82.6L111.6,78.7L113.9,79.0L117.1,83.1L118.2,83.1L119.1,84.0L120.5,85.7L120.1,86.7ZM43.0,91.6L43.3,94.3L44.4,96.6L42.4,96.9L42.0,101.1L43.0,101.9L43.3,101.6L43.4,103.0L42.6,103.0L40.7,100.9L40.1,101.3L39.3,101.1L38.9,100.5L37.8,100.4L37.7,100.0L35.5,100.2L35.1,95.3L33.8,95.3L33.9,94.8L33.4,94.8L32.7,95.1L32.3,96.2L30.7,96.3L29.5,93.4L25.3,93.7L25.6,92.3L26.6,91.7L27.6,92.3L29.1,90.4L29.5,88.1L30.8,86.4L32.2,79.7L32.7,79.3L35.8,80.6L36.2,79.7L39.2,79.0L40.9,79.0L42.0,80.2L43.4,79.8L44.5,81.2L44.5,82.8L44.9,82.9L43.8,84.4L42.8,88.8ZM55.7,88.0L55.1,86.9L55.1,82.2L56.3,80.3L57.0,80.3L57.9,79.4L59.2,79.3L63.4,73.5L63.4,71.0L64.7,70.6L65.6,70.2L65.6,72.0L63.0,78.9L60.9,82.1L57.3,85.4ZM53.3,91.9L51.8,90.6L51.7,89.8L47.7,87.0L47.7,85.7L48.9,83.3L47.8,80.3L49.2,78.6L49.7,78.9L50.1,80.0L50.8,80.0L52.1,81.1L53.6,81.4L54.9,80.3L56.0,80.7L55.1,82.2L55.1,86.9L55.7,88.0L54.4,89.1ZM38.0,75.1L36.9,74.2L37.0,72.7L35.7,69.4L35.3,69.4L36.4,65.4L37.3,65.5L37.3,59.8L38.5,59.8L38.5,57.2L50.8,57.2L51.5,61.6L52.4,62.4L50.8,63.8L50.2,68.2L48.1,72.0L47.8,74.5L47.6,72.4L47.0,71.9L47.0,70.0L46.5,69.9L45.8,70.2L46.2,71.4L45.1,73.0L44.6,73.2L43.7,72.4L42.6,73.6L40.3,73.5L39.3,72.3L38.6,72.4L38.0,74.2L37.3,74.6ZM37.3,60.3L37.3,65.5L36.4,65.4L35.3,69.4L35.7,69.4L36.3,71.3L35.1,72.1L34.3,73.5L33.3,74.1L32.0,74.1L32.1,74.6L31.2,75.5L28.4,76.2L28.1,74.4L27.0,73.4L27.2,72.8L28.6,72.8L28.0,71.6L27.7,68.5L27.0,68.4L26.6,67.1L27.0,65.4L28.3,64.2L29.0,59.3L28.2,58.1L27.9,56.1L29.0,55.4ZM198.4,-6.6L199.7,-7.2L199.7,-6.3L198.5,-6.2ZM63.5,25.5L61.0,27.8L63.0,31.4L62.2,32.3L59.8,30.5L54.0,29.3L50.6,27.0L51.4,26.8L52.2,25.7L51.7,25.2L53.2,24.6L52.2,24.6L52.3,24.0L53.8,23.5L54.2,21.3L49.3,20.0L48.9,19.2L48.1,19.2L48.2,18.5L47.6,17.8L45.5,18.1L45.0,16.8L46.5,16.4L44.5,14.5L44.6,13.6L41.8,12.8L40.9,11.1L41.3,10.7L41.0,9.5L41.6,8.5L42.8,7.8L41.7,7.1L45.3,4.1L43.7,3.2L44.1,2.3L43.2,1.4L43.9,0.3L42.7,-1.2L43.7,-2.2L42.1,-3.1L42.2,-4.0L45.9,-5.1L47.6,-4.3L50.5,-4.0L55.2,-1.9L55.3,-1.0L52.4,0.0L47.0,-0.8L48.7,0.1L48.8,2.1L51.0,2.8L51.1,2.2L50.5,1.6L51.1,1.1L53.7,1.9L54.5,1.6L53.8,0.7L56.3,-0.6L58.2,-0.1L58.8,-1.0L57.9,-1.8L58.4,-2.5L57.7,-3.3L60.6,-2.9L61.2,-2.2L59.9,-2.0L59.9,-1.3L60.7,-0.9L62.3,-1.1L62.5,-2.0L68.3,-3.7L69.1,-3.7L68.1,-2.9L69.4,-2.7L73.6,-3.7L74.8,-3.0L76.0,-3.8L74.9,-4.6L75.5,-5.0L78.5,-4.6L83.7,-2.7L84.4,-3.4L83.3,-4.4L82.1,-4.5L82.4,-5.1L81.8,-6.5L85.2,-9.2L88.0,-8.8L88.2,-8.1L87.2,-7.0L88.2,-5.7L87.9,-3.9L89.1,-3.1L86.6,-0.4L87.8,-0.2L90.5,-2.3L89.9,-3.0L90.4,-3.9L89.3,-4.0L89.0,-4.7L89.9,-6.0L88.5,-7.1L90.4,-8.0L90.1,-8.9L90.6,-8.9L91.2,-8.2L90.8,-6.9L91.9,-6.7L91.4,-7.6L93.2,-8.1L95.3,-8.2L97.2,-7.5L96.3,-8.6L96.2,-9.9L102.8,-10.3L101.9,-11.0L103.1,-11.9L109.4,-13.1L113.0,-12.9L115.4,-13.6L117.3,-13.6L118.6,-14.7L121.0,-15.2L122.8,-14.8L121.4,-14.5L123.7,-14.3L124.0,-13.6L128.0,-13.9L131.2,-12.8L130.9,-12.1L126.3,-10.6L129.1,-10.1L130.0,-10.4L130.6,-9.5L132.7,-10.1L136.0,-9.9L136.3,-9.3L140.6,-9.1L140.7,-10.1L144.5,-9.8L146.2,-9.2L146.7,-8.3L146.1,-7.8L149.0,-6.2L150.0,-7.6L151.7,-7.0L153.5,-7.4L155.5,-7.0L156.2,-7.3L157.9,-7.1L157.2,-8.3L158.6,-8.9L168.0,-8.1L168.8,-7.3L171.6,-6.3L177.8,-6.3L178.7,-5.8L178.6,-4.8L179.9,-4.5L187.0,-4.7L188.8,-3.5L190.1,-3.9L189.3,-4.7L189.8,-5.3L195.2,-5.0L199.7,-3.9L199.7,1.3L198.3,1.9L197.0,1.8L199.0,3.9L198.9,4.8L196.9,4.5L193.1,5.7L189.6,8.0L188.1,7.1L185.4,8.1L185.0,7.6L184.0,8.1L182.6,8.0L181.0,10.1L181.0,10.6L182.2,10.9L182.1,12.8L181.1,12.8L180.6,13.9L181.1,14.5L179.3,15.2L178.9,16.6L177.4,17.0L177.0,18.3L175.5,19.5L174.1,13.8L174.6,12.0L175.6,10.6L177.2,10.3L182.7,6.3L183.5,4.5L182.3,4.6L181.6,5.7L179.0,7.1L178.2,5.5L175.5,5.9L172.9,8.1L173.7,8.9L169.8,9.4L169.9,8.4L168.3,8.2L167.0,8.9L163.8,8.7L160.4,9.0L153.0,14.7L154.6,14.8L155.2,15.6L156.2,15.9L156.8,15.3L158.0,15.4L159.5,16.8L159.5,17.9L158.7,19.2L158.1,22.8L152.7,29.4L151.4,30.1L150.0,29.5L148.5,30.9L148.3,30.0L148.9,30.0L149.0,28.5L148.7,27.3L149.6,26.9L150.9,27.1L152.9,22.8L150.3,23.7L148.7,23.7L148.3,22.5L147.1,21.5L145.2,21.1L143.5,17.2L141.0,16.3L138.3,16.6L137.5,17.2L138.0,17.5L138.0,18.2L136.5,20.0L136.5,20.6L135.1,21.4L131.4,20.5L129.9,21.4L127.6,21.9L125.3,21.7L123.6,20.4L120.3,20.7L118.8,20.1L118.6,19.2L115.3,18.1L114.2,19.5L114.6,20.3L113.6,21.2L108.4,19.8L103.3,21.8L102.8,21.0L101.4,21.2L99.2,19.4L97.7,19.7L96.3,19.0L95.7,19.7L93.4,16.4L92.1,15.4L92.4,15.0L88.8,16.3L88.9,15.6L87.6,15.1L86.5,15.4L86.2,14.1L84.3,13.8L80.3,15.1L76.4,15.6L75.9,16.0L76.6,16.9L75.6,17.3L75.8,17.6L74.8,18.3L76.5,19.1L76.3,19.8L74.8,19.7L74.5,20.1L73.2,19.4L71.5,19.4L70.4,20.0L66.9,18.6L65.3,18.6L63.1,20.0L63.0,21.0L61.9,20.2L60.8,22.9L61.7,23.8L62.5,23.7L63.1,24.6L63.0,25.3ZM110.0,-19.5L112.3,-19.8L116.7,-17.9L116.4,-16.7L114.1,-16.6L109.5,-17.5L108.7,-18.4L107.3,-18.6ZM119.4,-17.3L122.1,-16.5L121.8,-16.0L115.9,-15.5L117.8,-17.2ZM156.9,-13.2L163.4,-12.4L162.6,-11.5L158.7,-11.5L157.0,-11.2L154.9,-12.0L155.5,-12.9ZM166.6,-12.1L169.2,-11.8L168.0,-11.3L166.4,-11.4L164.4,-11.9L164.7,-12.3ZM157.9,-9.6L160.2,-10.2L161.7,-9.7L161.8,-9.4ZM59.1,-19.0L62.7,-19.2L62.9,-18.9L64.5,-19.4L66.1,-19.1L65.7,-18.9L62.0,-18.2L60.8,-18.5L61.4,-18.9ZM36.1,15.2L32.9,15.0L33.2,14.5L34.6,14.1L36.1,14.5ZM68.1,-10.1L70.6,-11.2L70.3,-11.8L76.1,-13.3L83.4,-14.2L84.1,-13.7L76.5,-12.0L73.3,-10.8L70.1,-8.3L70.3,-7.2L72.3,-6.1L71.7,-6.0L68.3,-6.2L68.0,-6.8L66.1,-7.1L66.0,-7.8L67.1,-8.1L67.0,-8.8L69.1,-9.9ZM161.1,16.0L161.4,18.5L162.9,22.1L161.4,21.7L160.7,23.6L161.8,24.9L161.7,25.8L160.9,25.0L160.3,26.0L160.3,19.6L159.7,18.3L159.8,16.5L160.8,15.9L160.4,15.3L160.8,15.1ZM47.3,26.0L47.5,25.7L49.4,26.8L50.5,26.7L50.3,27.2L47.7,28.1L47.1,27.9L47.4,27.3L46.2,26.9ZM28.2,-17.8L28.6,-18.2L30.2,-18.3L34.9,-16.8L32.3,-16.3L31.7,-15.4L30.8,-15.1L30.3,-14.1L29.0,-14.0L26.8,-14.8L27.7,-15.3L24.2,-16.7L23.3,-17.7L26.2,-18.2L26.7,-17.8ZM44.8,-4.6L42.2,-4.0L42.7,-4.9L41.3,-5.4L39.7,-5.0L39.2,-4.0L38.2,-3.4L35.7,-3.7L34.6,-4.4L33.3,-4.0L33.2,-3.1L31.2,-3.3L30.9,-2.6L29.9,-2.6L26.6,1.6L27.0,2.0L26.6,2.5L25.6,2.5L24.9,3.7L25.0,5.5L25.6,6.1L25.3,7.6L23.9,9.3L23.3,8.5L21.2,10.0L19.8,10.3L18.4,9.6L17.7,5.2L23.4,2.0L27.8,-2.4L32.4,-5.0L36.4,-5.5L38.0,-6.5L41.8,-6.7L45.0,-5.8L43.7,-5.4ZM41.0,-18.3L39.4,-17.6L36.4,-17.4L31.7,-18.0L30.5,-18.6L33.8,-19.0L35.3,-18.7L36.3,-19.1ZM38.2,-15.4L35.9,-14.9L34.0,-15.2L34.8,-15.5L34.1,-15.9L36.3,-16.2ZM-36.2,-21.6L-27.7,-22.8L-15.7,-22.8L-9.2,-21.7L-11.1,-21.2L-20.2,-20.8L-16.5,-21.0L-13.4,-20.5L-11.3,-20.9L-10.5,-20.5L-11.6,-19.7L-3.9,-20.7L-0.8,-20.4L-0.2,-19.9L-5.0,-18.7L-8.4,-18.4L-6.0,-18.4L-8.0,-16.6L-8.0,-15.1L-6.7,-14.3L-10.1,-13.8L-8.1,-13.1L-7.9,-12.0L-9.0,-11.9L-7.7,-10.8L-10.0,-10.7L-8.8,-10.2L-9.1,-9.7L-12.0,-9.5L-10.7,-8.6L-10.7,-8.0L-12.8,-8.6L-13.3,-8.2L-10.5,-7.1L-10.1,-6.1L-12.0,-5.8L-14.1,-7.1L-13.7,-6.2L-14.9,-5.5L-10.8,-5.4L-16.4,-3.2L-20.6,-2.8L-23.1,-0.9L-28.9,0.7L-29.8,1.5L-30.4,3.3L-32.1,4.3L-31.6,5.3L-32.6,7.7L-34.1,7.8L-35.6,6.7L-37.7,6.7L-41.2,3.1L-41.9,1.1L-43.3,-0.1L-43.0,-1.1L-43.6,-1.5L-42.6,-3.1L-41.1,-3.5L-40.4,-5.1L-43.1,-4.3L-44.4,-4.7L-44.1,-6.3L-41.0,-5.9L-43.7,-7.2L-45.6,-7.4L-44.4,-8.6L-47.1,-11.3L-48.5,-11.8L-48.4,-12.4L-51.2,-13.1L-58.8,-13.1L-61.8,-14.3L-57.0,-14.8L-63.7,-15.7L-63.6,-16.2L-55.9,-17.4L-55.5,-17.9L-58.3,-18.4L-52.2,-19.9L-52.7,-20.5L-47.0,-21.0L-43.8,-21.1L-42.7,-20.7L-39.9,-21.4L-33.8,-20.4L-36.3,-21.1ZM142.4,97.4L143.5,96.8L144.9,96.7L142.6,98.0ZM29.5,122.9L30.0,122.3L30.6,123.2L31.7,123.6L33.2,122.8L33.2,118.0L34.1,119.4L34.2,120.7L35.0,120.5L36.7,118.6L37.7,119.2L39.2,118.9L40.7,116.4L43.1,114.5L44.9,114.7L45.7,117.5L45.6,119.4L44.8,119.3L44.4,120.1L45.0,121.3L45.8,120.6L46.6,120.6L46.0,123.2L41.8,128.4L39.3,129.9L36.0,129.8L33.4,131.0L32.1,130.6L31.6,130.2L31.1,128.2L31.4,127.0ZM42.6,123.4L43.0,123.8L41.7,125.5L41.3,125.6L40.6,124.6L41.7,123.3L42.2,123.0ZM-43.0,129.7L-43.3,129.0L-42.9,128.3L-43.5,127.5L-46.8,124.9L-47.5,125.1L-43.3,120.8L-43.3,119.8L-43.8,119.0L-44.3,119.3L-44.0,117.0L-45.1,116.9L-45.5,114.9L-47.8,114.5L-48.0,112.0L-47.3,109.4L-48.1,108.3L-48.1,107.0L-50.1,106.9L-50.4,103.7L-54.4,102.0L-55.5,100.8L-55.5,98.5L-56.8,98.7L-58.5,100.1L-60.9,100.1L-60.8,98.1L-61.7,98.9L-62.6,98.9L-63.0,98.2L-63.7,98.1L-63.5,97.5L-64.5,95.6L-63.6,94.4L-63.3,92.7L-61.1,91.3L-60.2,91.4L-59.7,87.3L-60.3,85.1L-59.5,85.0L-59.5,84.5L-60.1,84.4L-60.1,83.6L-58.1,83.6L-57.8,83.2L-57.3,84.3L-56.5,84.9L-55.7,84.8L-53.4,82.9L-54.4,82.6L-54.5,80.9L-54.9,80.5L-53.1,80.9L-50.9,79.9L-50.7,79.0L-49.9,79.3L-50.0,79.9L-49.4,80.7L-49.9,82.2L-48.9,84.1L-47.1,83.3L-45.8,83.4L-45.7,82.5L-42.6,83.0L-40.9,80.3L-40.0,83.3L-39.5,83.5L-39.5,84.4L-40.2,85.5L-38.1,86.1L-38.0,87.4L-37.3,86.6L-34.2,87.8L-33.7,88.6L-33.9,89.3L-32.7,88.9L-30.7,89.6L-29.1,89.5L-26.2,92.1L-24.2,92.9L-23.6,95.3L-24.1,97.5L-27.7,102.8L-28.4,109.0L-30.1,114.3L-30.9,114.9L-31.2,115.7L-34.0,116.2L-37.1,118.2L-38.0,119.4L-38.4,123.1ZM18.9,21.5L20.9,22.1L20.2,23.9L19.5,24.0L18.8,25.1L18.7,25.6L19.2,25.4L19.6,26.0L19.9,26.9L19.5,27.3L19.8,28.3L20.3,28.4L20.2,29.0L19.3,29.7L17.2,29.4L15.7,29.8L15.6,30.6L14.4,30.8L13.2,30.2L12.8,30.4L10.5,29.4L11.0,28.6L11.2,26.0L9.4,24.0L7.8,23.5L7.7,22.5L9.1,22.2L10.8,22.6L10.5,21.1L11.5,21.6L13.9,20.6L14.2,19.6L15.1,19.3L16.9,20.9ZM21.6,30.4L22.2,29.9L22.1,32.0L21.6,31.7ZM44.9,114.7L43.1,114.5L41.6,113.7L41.3,112.4L39.7,110.9L38.8,108.9L40.6,109.1L42.1,107.2L44.0,106.0L44.0,106.4L44.9,106.4L46.6,107.5L46.4,112.2ZM43.1,114.5L41.6,115.5L40.0,117.8L39.5,117.9L39.2,118.9L38.5,119.2L36.7,118.6L35.0,120.5L34.2,120.7L33.5,118.2L33.2,114.2L34.2,114.2L34.2,109.5L36.6,109.0L37.0,109.6L38.8,108.9L39.7,110.9L41.3,112.4L41.6,113.7ZM33.2,118.0L33.2,122.8L31.7,123.6L30.6,123.2L30.0,122.3L29.5,122.9L28.3,121.0L27.3,114.5L24.7,109.3L24.7,108.3L26.5,107.9L27.1,108.5L31.5,108.3L32.2,108.9L34.7,109.1L37.5,108.3L38.6,108.7L37.0,109.6L36.6,109.0L34.2,109.5L34.2,114.2L33.2,114.2ZM-4.9,68.1L-5.9,66.7L-4.3,64.4L-2.7,64.2L-1.5,64.9L-0.2,66.8L0.6,69.2L0.5,69.6L-0.3,69.7L-3.7,69.4L-4.9,69.7L-5.0,68.7L-1.9,68.2L-3.2,67.8ZM0.5,69.6L-0.2,66.8L0.3,65.8L1.4,66.1L2.5,65.7L6.7,65.6L7.0,64.7L5.8,53.4L7.4,53.3L15.8,60.2L15.8,61.0L16.9,60.9L16.9,63.9L16.3,65.6L13.9,65.9L13.5,66.3L11.9,66.1L10.2,67.3L8.0,68.6L7.1,70.6L6.9,72.3L6.2,72.7L6.0,72.1L5.4,72.6L4.1,72.5L3.0,69.8L1.9,70.4L0.6,70.1ZM-5.3,58.5L-5.0,58.1L-1.0,58.1L-0.9,55.5L0.1,55.4L0.0,52.1L3.4,52.2L3.4,50.2L7.4,53.3L5.8,53.4L7.0,64.7L6.7,65.6L2.5,65.7L1.4,66.1L0.7,65.8L-0.2,66.8L-1.5,64.9L-2.7,64.2L-4.6,64.8L-4.4,59.7ZM15.3,77.7L14.4,77.8L14.2,73.9L13.3,72.2L13.4,71.5L14.7,70.3L15.4,69.9L16.2,70.6L16.4,71.8L15.3,74.7ZM27.9,56.1L28.2,58.1L29.0,59.3L28.3,64.2L27.0,65.4L26.6,67.1L27.0,68.4L27.7,68.5L27.6,69.1L27.0,69.6L26.1,68.1L25.3,68.9L23.9,68.4L22.4,69.1L20.6,68.5L19.6,68.8L18.1,67.8L17.0,67.9L16.2,70.6L15.4,69.9L14.7,70.3L14.7,69.4L13.5,69.1L12.9,66.4L16.3,65.6L16.9,63.9L16.9,60.9L18.4,60.3L25.0,55.3L26.6,55.8L27.2,56.6ZM15.3,77.7L15.3,74.7L16.3,72.7L16.3,69.5L17.0,67.9L18.1,67.8L19.6,68.8L20.6,68.5L21.9,69.1L23.9,68.4L25.3,68.9L26.1,68.1L27.0,69.6L27.6,70.1L27.5,70.8L26.6,71.8L24.7,76.7L24.0,77.2L23.0,76.6L22.1,77.4L21.3,79.6L18.6,80.3L17.0,77.6ZM27.6,69.1L28.6,72.8L27.2,72.8L27.0,73.4L28.1,74.4L28.5,75.8L27.6,77.7L27.5,79.6L29.0,81.9L29.1,83.6L27.4,82.9L25.3,82.9L22.5,82.8L22.7,81.8L21.3,79.6L22.1,77.4L23.0,76.6L24.0,77.2L24.7,76.7L26.6,71.8L27.5,70.8L27.2,69.6ZM13.4,71.5L13.3,72.2L14.2,73.9L14.4,77.8L13.6,78.1L13.4,77.6L12.9,72.6L12.4,71.9L12.5,71.5ZM12.5,71.5L13.6,78.1L10.4,79.7L9.5,79.3L9.1,77.7L9.8,75.1L9.4,71.5ZM4.1,72.5L5.4,72.6L6.0,72.1L6.2,72.7L6.9,72.3L8.0,73.3L8.8,72.9L9.5,73.3L9.8,75.1L9.1,77.7L9.5,79.3L8.3,79.1L4.5,80.1L4.6,78.4L3.5,77.4L3.8,75.0L4.3,74.7L3.8,73.1ZM-1.8,69.4L0.5,69.6L0.6,70.1L1.9,70.4L3.0,69.8L4.1,72.5L3.8,73.1L4.3,74.7L3.7,75.8L2.9,76.3L2.3,74.7L1.6,74.9L0.9,72.7L-0.4,73.0L-1.3,74.2L-3.3,71.4L-1.8,70.4ZM-4.9,69.7L-1.8,69.4L-1.8,70.4L-2.2,70.6L-3.3,71.4L-4.2,70.8ZM3.7,75.8L3.5,77.4L4.6,78.4L4.5,80.1L1.3,77.8L0.6,77.0L1.8,74.9L2.3,74.7L2.9,76.3ZM-1.3,74.2L-0.4,73.0L0.9,72.7L1.6,74.5L1.8,74.9L0.6,77.0L-1.0,75.7ZM6.9,72.3L7.1,70.6L8.0,68.6L9.3,68.2L11.4,66.3L12.9,66.4L13.5,69.1L14.7,69.4L14.7,70.3L13.8,71.4L9.4,71.5L9.5,73.3L8.8,72.9L8.0,73.3ZM40.9,79.0L37.9,79.2L36.2,79.7L35.8,80.6L32.7,79.3L31.8,80.3L31.7,81.2L30.3,81.0L29.1,82.9L27.5,79.6L27.5,78.7L28.4,76.2L31.2,75.5L32.1,74.6L32.0,74.1L33.3,74.1L34.3,73.5L35.1,72.1L36.3,71.3L37.0,72.7L36.9,74.2L38.6,75.6ZM31.7,81.2L30.7,86.8L29.5,88.1L28.9,90.8L27.6,92.3L27.2,91.7L26.3,92.1L25.6,91.6L24.9,92.3L24.0,91.0L24.8,90.3L24.4,89.4L25.5,88.9L25.6,88.3L26.1,89.0L27.0,89.0L27.4,88.4L27.4,86.5L26.9,85.7L27.3,84.2L26.3,84.1L26.1,82.9L29.1,83.6L30.3,81.0ZM24.2,82.9L25.9,82.8L26.3,84.1L27.3,84.2L26.9,85.7L27.4,86.5L27.4,88.4L27.0,89.0L26.1,89.0L25.6,88.3L25.5,88.9L24.4,89.4L24.8,90.3L24.0,91.0L21.6,87.2L22.4,84.5L24.2,84.4ZM22.5,82.8L24.2,82.9L24.2,84.4L22.7,84.4L22.2,84.3ZM44.4,96.6L47.0,98.4L47.1,102.0L46.5,103.6L47.0,104.0L43.9,105.0L44.0,106.0L42.6,106.7L40.6,109.1L38.1,108.4L36.6,108.6L35.2,106.7L35.3,102.6L37.5,102.6L37.3,100.0L38.9,100.5L39.3,101.1L40.1,101.3L40.7,100.9L42.6,103.0L43.4,103.0L43.3,101.6L43.0,101.9L42.0,101.1L42.1,97.7L42.6,96.7ZM46.5,97.8L47.6,98.0L48.1,99.0L48.4,103.5L49.6,104.8L49.7,106.5L48.9,107.6L48.2,106.8L48.3,104.8L46.5,103.6L47.1,102.0L47.3,99.5ZM48.4,100.8L51.5,100.8L54.4,99.2L54.9,104.9L53.5,107.5L51.4,108.7L48.7,111.5L48.6,112.4L49.5,114.5L49.5,116.6L48.9,117.6L46.4,119.2L46.7,119.9L46.6,120.6L45.8,120.6L45.7,117.5L44.9,114.7L46.4,112.2L46.6,107.5L44.9,106.4L44.0,106.4L43.9,105.0L47.0,104.0L48.3,104.8L48.2,106.8L48.9,107.6L49.7,106.5L49.6,104.8L48.4,103.5ZM45.8,120.6L45.0,121.3L44.4,120.6L44.7,119.6L45.1,119.2L45.6,119.4ZM26.0,92.0L25.1,93.3L24.9,92.3L25.6,91.6ZM25.3,93.7L29.5,93.4L30.7,96.3L32.3,96.2L32.7,95.1L33.4,94.8L33.9,94.8L33.8,95.3L35.1,95.3L35.5,100.2L37.3,100.0L37.4,102.1L37.5,102.6L35.3,102.6L35.2,106.7L36.6,108.6L34.7,109.1L32.2,108.9L31.5,108.3L27.1,108.5L26.5,107.9L24.7,108.3L25.1,104.6L26.8,100.5ZM44.2,88.9L44.5,90.2L43.4,91.6L43.0,91.6L42.7,89.5L43.3,89.6L43.6,88.9ZM49.6,43.3L49.4,43.7L49.1,43.5L48.9,44.4L48.8,45.0L49.3,44.9L49.3,45.4L48.8,47.4L48.1,45.2L49.0,42.8L49.7,42.5ZM49.7,42.5L49.0,42.8L49.9,40.8L50.6,41.3ZM64.0,102.0L65.0,105.6L64.7,106.6L64.3,105.8L64.1,106.2L64.2,107.7L61.5,118.2L59.7,119.1L58.3,118.3L57.6,115.4L57.7,113.5L58.6,111.9L58.2,108.4L58.7,106.9L60.6,106.3L62.1,104.8L62.3,103.6L62.7,103.7L63.6,101.5ZM49.3,44.9L48.8,45.0L48.9,44.4L49.1,43.5L49.4,43.7ZM-4.9,68.1L-3.2,67.8L-1.9,68.2L-5.0,68.7ZM22.3,46.4L21.9,44.1L20.4,42.5L20.3,41.5L20.9,40.7L21.2,37.8L22.4,37.2L23.1,37.4L23.1,38.1L24.0,37.6L23.5,38.5L23.7,40.5L23.0,41.2L23.2,41.9L24.4,42.7L24.4,43.7L22.8,45.0L22.8,46.1ZM3.4,50.2L3.5,48.3L7.0,46.8L8.6,45.6L8.7,44.7L11.1,43.9L11.3,43.4L10.2,40.1L11.2,39.4L14.0,38.2L20.1,37.5L21.2,37.8L21.2,39.7L20.3,41.5L20.4,42.5L21.9,44.1L22.7,47.5L22.6,51.3L22.2,51.9L23.2,54.1L23.7,53.9L25.0,55.3L18.4,60.3L15.8,61.0L15.8,60.2ZM49.4,43.7L49.6,43.3L50.8,43.8L52.8,42.4L53.2,44.0L51.0,44.8L52.0,46.1L51.5,46.8L50.7,47.0L50.0,47.8L48.8,47.6ZM66.1,54.3L68.6,54.4L70.8,51.9L71.1,53.4L70.6,53.4L70.7,54.4L70.2,54.7L69.7,56.6L66.6,55.9ZM65.3,53.6L65.5,52.0L66.1,52.3L65.9,53.8ZM62.4,46.8L62.8,48.7L62.1,48.7L61.8,48.1L60.9,48.0L61.7,46.7ZM53.2,44.0L52.8,42.4L55.1,41.1L55.4,38.5L56.5,37.4L59.0,37.5L59.7,39.0L60.4,39.4L60.5,40.2L60.0,40.6L59.7,41.6L60.4,42.9L61.7,43.6L62.2,44.6L62.1,45.5L63.0,46.9L61.7,46.7L60.9,48.0L59.0,47.9L56.0,45.3ZM69.9,56.3L70.2,54.7L70.7,54.4L70.6,53.4L71.1,53.4L72.2,54.8L73.6,55.2L74.7,56.8L73.3,59.2L72.8,59.2L72.5,61.2L71.4,61.7L71.0,62.6L70.4,62.6L69.5,63.8L67.7,64.2L66.6,61.1L69.7,59.8L70.4,57.2ZM186.4,106.5L187.0,107.2L186.7,107.4ZM185.9,106.2L185.8,104.8L186.3,105.2L186.4,106.3ZM119.2,70.0L118.9,68.4L119.6,67.3L120.9,67.1L122.8,67.8L123.2,66.9L124.2,67.3L124.4,68.2L124.3,69.8L122.5,70.8L123.0,71.5L121.0,72.2L120.1,72.0ZM121.9,67.2L119.6,67.3L118.9,68.4L119.2,70.0L117.3,69.4L117.5,68.4L116.6,68.4L115.7,73.8L116.3,73.8L117.0,76.1L118.7,77.7L118.4,78.2L117.7,78.4L117.6,77.7L116.6,77.4L114.9,74.9L114.8,75.7L115.0,72.9L116.1,70.3L115.5,67.8L114.6,66.1L115.3,64.8L113.8,61.8L114.7,60.2L116.6,59.3L117.1,59.7L117.1,60.4L117.8,60.5L117.6,63.0L118.7,62.3L120.6,62.1L122.3,65.6ZM124.2,67.3L123.2,66.9L122.8,67.8L121.9,67.2L122.3,65.6L120.6,62.1L118.7,62.3L117.6,63.0L117.8,60.5L117.1,60.4L116.6,59.3L117.7,57.9L118.4,58.3L118.2,56.8L118.7,56.6L119.8,58.8L121.1,58.8L121.5,59.9L120.5,60.8L121.8,61.5L124.1,65.1ZM116.6,59.3L114.7,60.2L113.8,61.8L115.3,64.8L114.6,66.1L115.5,67.8L116.1,70.3L115.0,72.9L114.9,68.7L113.5,63.8L111.7,65.4L110.4,65.0L110.6,62.1L109.9,60.2L109.3,60.0L108.5,58.9L108.5,57.9L108.8,58.1L108.9,57.1L109.4,56.8L109.5,54.5L110.4,54.8L111.4,51.3L112.8,50.4L113.5,50.6L113.7,49.1L114.3,49.0L115.1,50.0L115.1,52.1L114.1,53.2L114.0,54.7L115.1,54.5L115.3,55.7L116.0,56.0L115.7,57.0L116.9,57.8L117.7,57.4ZM121.0,72.2L123.0,71.5L122.5,70.8L124.3,69.8L124.4,68.2L124.1,65.1L121.8,61.5L120.5,60.8L121.5,59.9L121.1,58.8L119.8,58.8L118.7,56.6L121.1,56.1L122.0,55.4L123.5,56.2L123.3,56.9L123.8,57.4L124.9,57.8L123.5,58.9L122.4,61.0L125.7,65.9L126.2,68.3L126.0,70.6L121.8,74.6L121.5,73.8L121.8,72.9ZM148.3,30.7L147.3,31.7L147.4,32.7L145.1,34.1L145.0,34.8L146.0,35.6L145.8,35.9L143.7,36.7L143.2,36.5L142.8,36.8L142.2,36.3L142.9,34.6L141.7,33.9L144.4,31.4L145.8,31.9L145.7,31.2L147.3,30.6L147.7,29.9ZM143.7,36.7L146.0,35.6L147.1,38.0L147.1,39.5L146.7,40.2L144.0,41.1L143.6,38.1L144.4,37.8ZM103.7,21.7L108.4,19.8L113.6,21.2L114.6,20.3L114.2,19.5L115.3,18.1L118.6,19.2L118.8,20.1L120.3,20.7L123.6,20.4L125.3,21.7L127.6,21.9L129.9,21.4L131.4,20.5L132.6,21.1L133.8,20.9L132.6,23.2L132.9,23.8L134.5,23.8L135.3,23.3L137.0,24.6L136.9,25.1L134.6,25.1L133.1,26.4L130.5,27.5L128.8,27.2L128.3,28.0L128.8,28.9L127.3,30.1L122.9,31.0L121.6,31.7L117.4,30.3L112.7,30.3L111.6,28.3L109.7,27.3L107.1,26.9L106.7,26.4L107.1,24.8L106.4,23.8L104.0,22.6ZM113.7,49.1L113.5,50.6L112.8,50.4L111.4,51.3L110.4,54.8L109.5,54.5L109.4,56.8L108.9,57.1L108.3,55.1L107.9,55.9L107.3,55.2L108.6,53.3L106.0,52.9L105.9,52.0L104.6,51.4L104.2,52.3L105.0,53.0L104.1,53.9L104.7,54.3L104.9,57.6L102.9,57.9L103.0,58.8L102.4,59.6L100.9,60.5L98.0,63.7L98.0,64.3L96.0,65.1L95.5,72.3L95.0,72.4L94.5,73.4L94.8,73.8L93.9,74.2L93.1,75.4L92.1,74.2L89.9,66.8L89.0,65.0L88.0,58.0L86.5,58.8L85.8,58.7L84.4,57.1L84.9,56.6L84.6,56.1L83.4,55.0L84.1,54.1L86.4,54.1L85.5,51.4L84.8,50.8L85.9,49.4L87.1,49.5L89.9,45.5L89.9,44.6L90.7,43.8L89.5,42.3L89.2,41.2L89.7,40.6L92.4,40.8L93.4,39.7L94.5,41.2L94.9,42.9L94.8,43.6L94.1,43.4L94.4,44.8L96.8,46.6L95.8,48.4L99.1,50.2L100.5,50.4L101.1,51.1L104.1,51.5L104.1,49.6L104.8,49.3L104.9,50.6L105.8,51.1L108.2,50.9L107.8,49.7L108.7,49.5L110.8,47.7L111.7,48.1L112.4,47.5L112.9,48.3L112.6,48.9ZM108.9,57.1L108.5,58.9L107.6,56.2L106.6,56.2L106.4,57.4L105.1,57.1L104.7,54.3L104.1,53.9L105.0,53.0L104.2,52.3L104.6,51.4L105.9,52.0L106.0,52.9L108.6,53.3L107.3,55.2L107.9,55.9L108.3,55.1ZM107.8,49.7L108.2,50.9L105.8,51.1L104.9,50.6L106.1,49.0ZM104.1,49.6L104.1,51.5L103.2,51.5L99.1,50.2L95.8,48.4L96.2,47.2L97.3,46.3L101.7,49.1ZM93.4,39.7L92.4,40.8L89.7,40.6L89.2,41.2L89.9,43.2L90.7,43.8L89.9,44.6L89.9,45.5L87.1,49.5L85.9,49.4L84.8,50.8L85.5,51.4L86.4,54.1L84.1,54.1L83.4,55.0L82.6,54.7L81.5,52.7L76.4,53.2L76.8,51.7L78.3,51.0L77.7,50.2L77.7,49.1L76.7,48.5L75.8,47.0L77.5,47.7L80.1,47.5L81.5,46.9L81.5,45.8L82.1,45.1L84.6,44.3L84.5,43.5L85.6,42.4L85.2,41.6L86.2,41.6L87.0,40.1L86.6,38.9L87.2,38.3L90.6,37.5L91.4,38.1L91.7,39.1ZM81.7,37.2L84.4,37.5L86.1,35.8L86.7,36.1L87.2,38.0L88.7,37.1L90.5,37.2L90.6,37.5L87.2,38.3L86.6,38.9L87.0,40.1L86.2,41.6L85.2,41.6L85.6,42.4L85.0,42.8L84.6,44.3L82.1,45.1L81.5,45.8L81.5,46.9L77.5,47.7L75.8,47.0L76.7,45.8L76.6,45.0L75.9,44.8L75.4,42.9L76.1,39.5L77.2,39.9L78.0,39.8L78.2,39.2L79.6,38.6L79.8,37.6L80.9,36.8ZM83.0,37.5L83.6,36.2L83.4,35.2L82.6,34.9L82.9,34.3L83.8,34.4L84.6,32.9L86.0,32.6L85.8,33.2L86.3,33.5L86.0,33.9L84.8,33.7L84.7,34.4L89.1,34.5L89.4,35.7L90.3,35.9L90.5,37.2L88.7,37.1L87.2,38.0L86.7,36.1L86.1,35.8L84.4,37.5ZM86.3,30.9L87.2,30.1L88.9,30.5L89.1,29.8L89.7,29.5L91.1,30.1L94.8,30.1L96.0,30.7L95.8,31.0L93.8,32.3L92.5,32.4L92.1,33.2L91.0,33.1L89.3,33.9L89.1,34.5L84.7,34.4L84.8,33.7L87.1,33.6L88.5,32.7L85.7,31.8L86.6,31.0ZM67.1,31.5L68.7,30.8L70.2,32.2L71.9,32.1L71.7,31.4L73.5,30.2L74.9,30.9L75.0,31.9L76.5,32.2L77.3,33.7L81.7,36.4L81.7,37.2L80.9,36.8L79.8,37.6L79.6,38.6L79.0,39.0L77.2,39.9L76.1,39.5L76.0,38.4L71.4,36.2L68.6,37.4L68.5,35.2L67.7,34.7L68.0,33.8L67.3,33.8L67.5,32.7L68.5,33.0L69.4,32.6L68.4,31.0L67.5,31.4L67.4,32.3ZM63.0,46.9L62.1,45.5L62.2,44.6L61.7,43.6L60.4,42.9L59.7,41.6L60.4,39.4L59.7,39.0L58.5,36.4L58.4,34.5L59.1,34.2L59.8,35.3L60.5,35.4L62.5,34.3L62.8,34.7L62.4,35.4L63.3,36.0L63.6,36.9L66.8,38.1L71.4,36.2L76.0,38.4L75.4,42.0L75.9,42.2L75.4,42.9L75.9,44.8L76.6,45.0L76.7,45.8L75.8,47.0L76.7,48.5L77.7,49.1L77.7,50.2L78.3,51.0L76.8,51.7L76.4,53.2L72.2,52.3L71.7,50.7L71.2,50.5L69.4,51.4L68.1,50.9L66.1,49.6L64.6,46.6L64.0,46.8L63.4,46.4ZM49.6,43.3L50.0,41.8L50.6,41.3L49.9,40.8L49.8,39.8L50.7,37.9L51.0,38.2L56.5,37.4L55.4,38.5L55.1,41.1L50.8,43.8ZM60.8,35.4L60.5,35.4L60.0,34.5L57.9,33.5L58.0,32.8L57.8,32.4L59.3,32.2L60.2,33.5L59.9,33.9L60.8,34.5ZM23.9,9.3L25.3,7.6L25.6,6.1L25.0,5.5L24.9,3.7L25.6,2.5L26.6,2.5L27.0,2.0L26.6,1.6L29.9,-2.6L30.9,-2.6L31.2,-3.3L33.2,-3.1L33.3,-4.0L34.0,-4.0L37.0,-2.5L37.3,-0.0L35.6,0.4L34.5,1.3L34.7,2.1L31.0,4.2L30.3,6.1L32.0,7.7L31.1,9.2L30.0,9.5L29.0,12.9L27.7,12.7L27.1,13.8L25.9,13.8ZM41.8,12.8L44.6,13.6L44.5,14.5L46.5,16.4L45.0,16.8L45.5,18.1L44.6,18.1L44.3,19.1L42.9,19.0L38.8,18.3L36.9,18.7L36.6,17.6L37.2,17.3L36.9,15.7L39.0,15.2L39.3,14.5L40.1,14.1L40.0,13.5ZM45.5,18.1L47.6,17.8L48.2,18.5L48.1,19.2L48.9,19.2L49.3,20.0L54.2,21.3L53.8,23.5L52.8,23.6L52.2,24.6L48.8,25.6L48.9,26.3L47.5,25.7L47.3,26.0L45.5,25.6L45.4,25.1L44.5,25.2L43.3,26.9L42.3,26.9L41.8,26.7L42.7,25.3L43.7,25.4L42.8,23.6L41.1,22.8L38.3,23.7L36.5,23.3L36.1,23.6L35.4,22.9L36.2,22.1L35.9,21.5L37.4,20.2L36.9,18.7L38.8,18.3L44.3,19.1L44.6,18.1ZM36.9,15.7L37.2,17.3L36.6,17.6L37.5,19.9L35.9,21.5L36.2,22.1L35.0,21.5L32.1,21.5L30.7,20.3L29.9,20.5L28.1,19.4L27.1,16.9L27.2,15.9L30.8,14.5L31.9,15.0L36.1,15.2ZM30.1,23.2L30.1,23.8L29.5,23.8L29.1,25.1L27.7,25.4L25.4,25.0L25.1,24.5L24.0,25.0L22.8,24.8L22.3,24.6L22.8,23.9L23.3,24.3L25.1,23.8L25.9,24.1L25.9,23.0L26.6,22.3L27.4,22.7L28.3,22.0L30.1,22.6ZM35.4,22.9L36.1,23.6L35.5,23.8L34.3,25.6L31.7,26.3L29.3,24.9L29.5,23.8L30.1,23.8L30.1,23.2L31.1,23.7L34.1,22.6ZM40.2,23.1L41.1,22.8L42.8,23.6L43.7,25.4L42.8,25.5L41.8,26.7L41.7,24.9ZM41.8,26.7L43.3,26.9L42.5,27.4L42.2,29.0L40.8,28.4L39.1,29.0L36.3,28.8L36.1,27.8L35.5,28.0L34.8,27.1L33.5,25.8L34.3,25.6L35.5,23.8L36.5,23.3L38.3,23.7L40.5,23.2L41.7,24.9ZM40.0,13.5L40.1,14.1L39.3,14.5L39.0,15.2L37.9,15.7L36.1,15.2L36.1,14.5L34.6,14.1L34.4,13.0L35.6,12.6L38.3,12.5ZM40.9,11.1L41.8,12.8L40.0,13.5L38.3,12.5L35.6,12.6L34.4,13.0L34.4,12.0L35.9,10.7L36.7,11.7L37.6,11.7L37.8,10.7L38.7,10.4ZM41.6,8.5L41.0,9.5L41.3,10.7L40.9,11.1L38.7,10.4L37.8,10.7L37.9,9.9L36.8,9.6L36.8,8.9L39.4,8.3ZM27.2,15.9L27.1,16.9L28.1,19.4L25.2,20.5L25.5,21.4L26.6,22.3L25.9,23.0L25.9,24.1L25.1,23.8L23.3,24.3L21.3,23.6L20.2,23.9L20.9,22.1L18.9,21.5L18.7,18.4L19.3,18.4L19.6,17.9L19.9,16.0L20.9,16.2L21.6,15.6L21.3,14.3L22.8,14.3L22.8,14.8L23.9,15.1L23.9,15.6L25.5,15.0ZM36.0,28.3L36.3,28.8L39.1,29.0L40.8,28.4L42.2,29.0L41.3,30.4L41.6,31.2L39.6,31.4L39.6,32.1L38.7,32.2L38.0,31.7L36.4,32.1L35.8,30.8L36.4,29.6L35.9,29.1ZM39.8,39.9L39.7,40.3L38.2,40.4L36.9,39.9L37.1,39.4L37.7,39.8ZM36.4,32.1L38.0,31.7L38.7,32.2L39.6,32.1L39.6,31.4L40.1,31.8L39.6,32.7L37.1,32.9L37.9,33.6L36.8,33.9L36.2,33.2L36.0,33.5L36.8,34.9L36.4,35.1L37.5,36.1L37.5,36.8L36.5,36.5L36.8,37.2L36.2,37.3L36.6,38.5L35.9,38.5L35.0,37.9L33.5,34.7L34.3,32.7ZM59.0,37.5L57.0,37.2L53.6,38.1L50.7,37.9L50.1,39.2L49.7,38.6L50.1,38.2L48.6,38.0L47.9,38.7L46.3,38.9L45.4,38.2L44.3,38.1L43.4,38.8L42.4,38.1L41.2,38.1L39.9,36.1L40.4,35.1L39.7,34.5L40.9,33.3L42.5,33.2L42.9,32.2L44.9,32.4L47.3,31.2L49.1,31.1L52.4,32.6L54.5,32.5L56.8,31.7L57.8,32.4L57.9,33.5L59.1,34.2L58.4,34.5L58.5,36.4ZM39.6,31.4L41.6,31.2L42.6,32.1L41.2,32.5L39.9,33.6L39.6,32.7L40.1,31.8ZM34.3,32.7L33.3,34.2L32.7,33.5L32.6,31.4L33.0,30.3L33.4,30.4ZM29.7,25.3L30.8,26.1L32.1,26.1L32.6,27.0L32.2,27.5L29.1,27.0L28.9,27.5L31.7,30.6L29.1,29.2L28.0,27.2L27.3,27.0L27.0,27.6L26.7,27.1L26.7,26.6L28.4,26.7L28.9,25.7ZM22.5,24.0L22.3,24.6L23.3,24.8L23.3,25.4L22.0,25.4L21.8,26.0L21.1,25.8L20.5,26.2L20.0,26.3L19.2,25.4L18.7,25.6L19.5,24.0L21.3,23.6ZM18.9,19.8L18.4,21.4L15.2,19.8L15.1,19.3L17.7,18.9ZM19.7,16.3L19.6,17.9L19.3,18.4L18.7,18.4L18.9,19.8L17.7,18.9L15.9,19.1L17.4,16.8ZM3.1,31.4L3.9,30.8L4.1,31.5L5.5,31.4L5.8,32.0L5.4,32.4L5.1,34.2L4.7,34.3L5.1,35.1L5.0,36.7L4.3,37.9L3.2,37.9L3.3,36.1L2.6,35.4L3.4,32.8ZM4.7,37.6L5.2,36.3L4.7,34.3L5.1,34.2L5.4,32.4L5.8,32.0L5.5,31.4L4.1,31.5L3.9,30.8L3.1,31.4L2.7,29.9L4.2,28.9L8.8,29.3L10.5,29.4L10.9,29.9L14.4,30.8L15.6,30.6L15.6,31.3L14.7,32.2L13.3,32.5L12.2,34.7L12.6,35.4L11.8,36.9L11.0,37.1L10.2,38.1L7.9,38.1L6.9,39.1L6.4,39.0L5.7,37.8ZM6.0,15.8L6.2,16.7L5.4,17.9L3.6,18.6L2.1,18.4L2.9,17.1L2.4,15.8L4.6,14.1L4.6,15.5ZM184.9,113.2L186.3,114.6L185.9,114.9L183.9,113.3L183.1,111.9ZM181.1,99.4L181.4,99.9L180.6,99.9L180.3,99.1ZM179.8,98.6L178.5,98.3L178.6,97.8ZM178.5,96.2L178.8,96.9L177.4,95.9L177.2,95.3ZM175.9,94.9L176.3,95.4L175.7,95.1L175.3,94.4ZM143.7,127.7L141.7,128.6L141.1,129.9L137.2,130.0L135.2,131.4L133.8,131.3L132.1,130.3L132.1,129.5L132.8,129.0L132.8,126.9L130.4,119.8L130.8,120.3L130.5,119.1L131.3,120.0L130.4,117.5L131.2,114.1L131.3,115.1L131.7,114.2L133.9,112.7L138.2,111.4L139.6,109.5L139.7,108.2L140.4,107.1L140.9,108.2L141.3,108.0L140.9,107.4L141.2,106.7L141.7,107.0L141.8,106.0L143.2,104.3L143.7,104.5L144.6,103.8L146.0,105.1L147.3,105.3L147.1,104.5L148.3,102.1L150.4,101.5L150.3,100.9L149.6,100.5L150.1,100.3L153.2,101.7L154.4,101.2L154.9,101.9L153.9,103.1L153.3,104.9L155.0,106.4L157.3,108.4L158.3,108.8L159.0,108.4L159.9,105.4L159.8,101.9L160.7,99.7L162.2,104.7L162.8,104.2L163.7,105.3L164.7,110.4L167.3,112.3L168.1,114.8L168.6,114.6L169.2,114.9L169.4,116.3L171.4,118.6L172.2,122.3L171.7,126.0L168.8,132.2L168.5,134.5L166.7,135.0L164.7,136.5L163.2,135.7L163.3,135.1L161.8,136.3L158.7,135.2L157.6,132.8L156.1,132.1L156.5,131.5L156.2,130.5L155.7,131.4L154.8,131.6L155.9,129.5L155.8,128.6L153.9,131.2L153.1,130.6L152.1,128.2L149.1,126.7ZM97.5,76.0L96.9,77.7L96.0,78.0L95.5,77.0L95.4,75.1L95.8,73.0ZM126.3,62.1L125.5,61.7L125.5,60.6L127.1,59.7L127.9,60.2ZM96.0,30.7L95.9,30.0L96.6,29.7L95.6,27.4L98.2,26.6L99.0,24.3L101.1,24.7L101.6,24.1L101.7,22.8L103.7,21.7L104.0,22.6L106.4,23.8L107.1,24.8L106.7,26.4L107.1,26.9L109.7,27.3L111.6,28.3L112.7,30.3L117.4,30.3L121.6,31.7L122.9,31.0L126.1,30.5L128.8,28.9L128.3,28.0L128.8,27.2L130.5,27.5L133.1,26.4L134.6,25.1L136.9,25.1L137.0,24.6L135.3,23.3L134.5,23.8L132.9,23.8L132.6,23.2L133.8,20.9L135.1,21.4L136.5,20.6L136.5,20.0L138.0,18.2L138.0,17.5L137.5,17.2L138.3,16.6L141.0,16.3L143.5,17.2L145.2,21.1L147.1,21.5L148.3,22.5L148.7,23.7L150.3,23.7L152.9,22.8L150.9,27.1L149.6,26.9L148.7,27.3L148.9,30.0L148.3,30.0L148.3,30.7L147.7,29.9L147.3,30.6L145.7,31.2L145.8,31.9L144.4,31.4L141.7,33.9L138.4,35.2L139.5,33.3L139.0,32.6L136.3,34.8L135.2,34.8L134.7,35.4L135.3,36.3L136.1,36.5L136.1,37.1L137.0,37.5L138.1,36.6L139.7,37.1L139.9,37.8L138.4,38.2L136.4,40.4L137.5,41.1L139.3,44.6L139.2,45.6L138.6,45.9L139.5,47.0L139.0,49.1L138.5,49.2L135.9,53.9L133.0,56.2L131.2,56.9L130.8,56.5L130.3,57.1L127.7,58.0L127.3,59.4L126.8,59.4L126.7,58.0L123.8,57.4L123.3,56.9L123.5,56.2L122.0,55.4L121.1,56.1L118.2,56.8L118.4,58.3L117.8,58.2L117.7,57.4L116.9,57.8L115.7,57.0L116.0,56.0L115.3,55.7L115.1,54.5L114.0,54.7L114.1,53.2L115.1,52.1L115.1,50.0L114.3,49.0L112.6,48.9L112.9,48.3L112.4,47.5L111.7,48.1L110.8,47.7L108.7,49.5L107.8,49.7L106.1,49.0L104.8,50.3L104.8,49.3L104.1,49.6L101.7,49.1L98.1,46.7L97.3,46.3L96.8,46.6L94.4,44.8L94.1,43.4L94.8,43.6L94.9,42.9L94.5,41.2L93.4,39.7L91.7,39.1L90.5,37.2L90.3,35.9L89.4,35.7L89.1,34.5L89.3,33.9L90.2,33.3L92.1,33.2L92.5,32.4L93.8,32.3ZM139.1,54.1L138.1,57.2L137.4,55.2L138.8,52.9L139.3,53.3ZM23.3,24.8L25.1,24.5L25.4,25.0L26.8,25.3L27.0,26.5L26.1,26.3L25.3,26.8L25.6,28.5L28.2,31.3L29.0,31.3L29.0,31.8L31.6,33.3L31.5,34.0L30.0,33.2L29.6,34.1L30.3,34.5L30.2,35.2L29.2,36.4L28.8,36.5L28.8,36.1L29.2,35.1L28.5,33.7L24.1,30.7L23.1,28.7L21.7,28.1L20.2,29.0L20.3,28.4L19.8,28.3L19.6,26.0L21.8,26.0L22.0,25.4L23.3,25.4ZM27.8,36.2L28.6,36.1L28.4,37.5L28.2,38.2L27.4,37.7L25.4,36.9L25.6,36.2ZM21.5,32.6L22.1,32.2L22.7,33.1L22.5,34.9L22.1,34.8L21.6,35.2L21.2,34.9L21.0,32.6ZM22.8,14.3L21.3,14.3L20.9,13.6L21.1,11.9L22.6,11.1L23.5,10.8L23.1,11.8L23.8,12.4L22.5,13.7ZM25.3,12.9L25.7,13.5L25.1,14.6L23.8,13.3ZM6.0,15.8L4.6,15.5L4.8,14.8L4.6,14.1L5.5,14.1L6.6,14.9ZM9.3,16.4L9.4,15.6L8.7,14.8L7.2,14.2L7.6,13.6L7.2,13.3L6.7,13.9L6.6,12.6L6.1,12.0L7.3,9.6L9.4,9.6L8.2,11.0L10.4,10.8L9.2,13.0L10.3,13.1L11.3,14.8L12.0,15.0L13.0,17.0L14.2,17.2L13.6,18.5L14.0,19.1L13.1,19.8L9.4,19.9L8.7,20.5L6.5,20.6L8.9,18.9L7.3,18.7L7.0,18.2L8.1,17.8L7.5,17.1L7.7,16.3ZM-2.6,-0.6L-2.8,0.2L-1.7,1.1L-3.0,2.1L-6.9,3.3L-11.2,2.7L-10.2,2.1L-12.4,1.4L-10.6,1.2L-10.6,0.8L-12.8,0.5L-12.1,-0.3L-10.5,-0.5L-8.9,0.3L-7.3,-0.4L-6.0,0.0L-4.3,-0.7ZM60.7,31.4L62.2,32.3L63.0,31.4L64.1,33.1L64.9,33.5L64.0,33.6L63.3,36.0L62.4,35.4L62.8,34.7L62.1,34.4L60.8,35.4L60.8,34.5L59.9,33.9L60.2,33.5L59.3,32.2L60.8,32.4ZM60.5,35.4L59.8,35.3L59.3,34.1L60.0,34.5ZM54.0,29.3L59.8,30.5L60.7,31.4L60.5,31.6L61.0,32.3L59.5,32.0L57.8,32.4L56.8,31.7L55.7,31.8L55.6,30.4ZM138.1,69.3L137.6,68.3L138.5,68.3L138.9,68.8L138.6,69.9ZM140.0,72.8L140.3,71.7L140.9,71.6L140.8,72.5L141.5,71.2L141.4,72.4L140.4,74.1L139.8,73.2ZM143.9,74.9L144.1,76.5L143.7,77.6L143.3,76.3L142.9,77.0L143.2,77.9L142.9,78.5L141.7,77.8L141.4,76.8L141.7,76.2L141.0,75.6L140.2,76.1L139.4,76.8L139.7,75.4L140.9,74.5L141.3,75.1L142.2,74.2L143.0,74.1L142.9,73.1L143.8,73.7ZM135.7,73.7L134.3,74.9L136.2,72.3L136.8,71.0L137.0,72.1ZM139.7,62.1L139.9,63.6L139.6,64.7L139.0,65.1L139.1,67.2L140.1,67.2L141.4,67.9L141.6,68.9L141.5,69.5L140.3,68.2L140.1,68.7L139.4,67.9L137.9,67.8L138.3,66.9L138.0,66.6L137.9,67.1L137.4,66.3L137.2,64.5L137.6,65.0L138.0,61.7L139.3,62.1L139.6,61.8ZM139.4,71.0L139.2,70.3L140.5,70.7L140.5,71.3L139.4,72.2ZM143.0,70.0L143.3,71.4L142.5,71.1L142.8,72.3L142.3,72.6L142.2,71.7L141.8,70.9L142.4,71.0L142.4,70.5L141.7,69.5L142.7,69.5ZM116.6,77.4L117.6,77.7L117.7,78.4L118.7,77.7L119.6,78.6L120.1,82.2L120.9,83.7L120.9,84.1L120.1,84.2L117.9,82.2ZM135.1,80.4L133.0,80.2L131.7,83.9L130.8,84.2L129.9,83.9L128.7,84.6L127.4,84.8L126.7,84.1L126.5,83.2L127.3,83.6L128.1,83.4L128.3,82.3L130.0,81.8L131.3,79.9L131.7,80.6L132.4,80.2L132.5,78.7L133.9,76.8L134.3,76.8L134.9,78.0L136.4,78.8L136.4,79.3L135.7,79.3L135.8,80.0ZM132.5,78.7L132.4,80.2L131.9,80.1L131.7,80.6L131.3,79.9ZM26.8,25.3L29.5,24.9L29.7,25.3L28.9,25.7L28.8,26.2L28.4,26.7L26.7,26.6ZM42.2,-4.0L42.1,-3.1L43.7,-2.2L42.7,-1.2L43.9,0.3L43.2,1.4L44.1,2.3L43.7,3.2L45.3,4.1L44.9,4.7L41.7,7.1L36.3,8.0L34.7,6.9L34.9,5.6L34.4,4.4L34.9,3.7L38.9,1.2L38.8,0.6L37.0,-0.5L37.0,-2.5L34.0,-4.0L34.6,-4.4L35.7,-3.7L38.2,-3.4L39.2,-4.0L39.7,-5.0L41.3,-5.4L42.7,-4.9ZM35.9,22.0L35.2,23.0L34.1,22.6L31.1,23.7L30.1,23.2L30.1,22.6L32.6,21.4L33.1,21.8L35.0,21.5ZM28.1,19.4L29.9,20.5L30.7,20.3L32.1,21.5L30.3,22.3L30.1,22.6L28.3,22.0L27.4,22.7L25.5,21.4L25.2,20.5ZM50.4,67.1L50.8,63.8L52.4,62.4L53.3,65.1L56.8,68.9L57.3,69.3L56.5,69.5L55.0,67.4L53.1,66.6L52.5,66.9L51.9,66.4L51.6,67.3ZM160.0,34.9L159.1,36.2L158.9,39.2L158.3,40.1L157.0,40.7L155.2,40.8L153.7,42.3L153.0,41.8L153.0,40.8L148.7,41.7L149.8,42.7L149.1,44.9L148.4,45.5L147.9,45.0L148.1,43.8L147.1,42.5L148.0,42.1L150.4,39.7L152.5,39.3L153.6,39.6L154.7,37.3L155.4,37.9L157.5,36.1L158.4,32.2L159.5,32.0ZM162.9,28.7L163.6,28.1L163.8,29.6L162.3,29.9L161.4,31.2L159.8,30.3L159.2,31.7L158.0,31.8L157.9,30.5L158.4,29.5L159.5,29.4L160.1,26.6L161.3,27.9ZM150.1,42.3L151.7,41.1L152.6,41.9L152.1,42.6L151.6,42.2L151.1,42.5L150.8,43.3L150.1,42.9ZM66.6,61.1L67.7,64.2L67.0,64.5L66.7,65.5L64.0,66.7L63.1,67.6L59.9,68.5L59.3,69.3L57.7,69.4L57.4,68.6L56.8,66.0L57.6,62.9L61.1,63.3L61.4,63.8L63.6,61.6ZM48.8,47.6L50.0,47.8L50.7,47.0L51.5,46.8L52.0,46.1L51.0,44.8L53.2,44.0L56.0,45.3L59.0,47.9L61.8,48.1L62.1,48.7L62.8,48.7L63.2,49.8L64.6,51.1L64.7,52.5L65.3,53.6L65.9,53.8L66.6,55.9L69.9,56.3L70.4,57.2L69.7,59.8L66.6,61.1L63.6,61.6L61.4,63.8L61.1,63.3L57.6,62.9L57.0,64.5L55.1,60.5L53.2,58.1L52.5,55.0L51.5,54.2L49.0,49.3L48.5,49.3ZM46.5,40.1L48.4,39.4L47.7,40.2ZM46.5,40.1L47.5,40.3L46.8,40.9L46.0,40.2ZM10.2,40.1L11.3,43.4L11.1,43.9L8.7,44.7L8.6,45.6L7.0,46.8L3.5,48.3L3.3,50.5L0.6,50.9L-0.5,53.6L-2.0,55.0L-2.9,57.8L-5.2,58.0L-2.5,51.7L-0.6,49.4L0.3,49.2L2.5,46.9L2.3,45.3L3.5,42.6L5.3,41.5L6.3,39.3ZM50.8,57.2L38.5,57.2L38.2,46.7L38.7,44.8L40.0,44.7L42.6,45.7L44.7,44.8L45.4,44.9L45.7,45.6L46.0,45.2L47.6,45.5L48.1,45.2L48.8,47.4L48.0,49.6L47.8,49.9L46.9,48.9L46.1,47.1L49.6,54.7L49.4,55.8ZM38.5,57.2L38.5,59.8L37.3,59.8L37.3,60.3L29.0,55.4L27.2,56.6L26.6,55.8L25.0,55.3L23.7,53.9L23.2,54.1L22.2,51.9L22.6,51.3L22.7,48.2L22.3,46.4L22.8,46.1L22.8,45.0L23.9,44.1L24.4,43.7L24.4,42.7L27.0,43.3L28.3,43.9L28.8,45.0L32.3,46.5L33.3,45.5L33.1,44.5L34.2,43.3L36.3,43.4L36.6,44.0L38.4,44.3ZM62.2,75.4L59.2,79.3L57.9,79.4L56.0,80.7L54.9,80.3L53.6,81.4L52.1,81.1L50.8,80.0L50.1,80.0L48.6,77.2L47.4,75.8L46.8,75.7L47.1,74.9L47.7,74.9L48.1,72.0L48.6,71.6L49.8,69.4L50.4,67.1L51.6,67.3L51.9,66.4L52.5,66.9L53.1,66.6L55.0,67.4L56.5,69.5L55.8,70.7L55.9,71.4L57.0,71.6L56.7,72.1L57.9,73.9L61.3,75.4ZM56.5,69.5L57.3,69.3L57.5,69.7L56.9,70.5L57.4,70.9L57.0,71.6L55.9,71.4L55.8,70.7ZM63.4,71.0L63.4,73.5L62.2,75.4L61.3,75.4L57.9,73.9L56.7,72.1L57.4,70.9L58.4,72.2ZM47.7,87.0L43.2,87.5L43.6,85.0L44.9,82.9L44.5,82.8L44.5,81.2L45.0,80.9L47.2,80.9L47.8,80.3L48.9,83.3L47.7,85.7ZM44.1,87.3L44.5,88.8L43.6,88.9L43.3,89.6L42.7,89.5L42.9,87.9ZM31.8,30.4L28.9,27.5L29.1,27.0L31.1,27.2L32.6,27.5L32.7,29.2L31.9,29.6ZM35.8,30.8L36.4,32.1L34.3,32.7L33.9,32.4L34.1,31.1ZM32.1,26.1L33.5,25.8L34.9,27.6L36.1,27.8L35.8,28.6L36.4,29.6L35.8,30.8L35.0,30.6L34.1,29.5L33.5,30.1L32.5,29.2L32.9,28.5L32.4,28.1L32.6,27.0ZM33.4,30.4L33.0,30.3L32.6,31.4L31.8,30.4L32.5,29.2L33.6,30.0ZM33.9,31.4L33.4,30.4L34.1,29.5L34.6,30.0L35.1,30.3L34.9,30.9ZM44.5,81.2L43.4,79.8L41.6,80.1L38.6,75.6L37.3,74.6L38.0,74.2L38.6,72.4L39.3,72.3L40.3,73.5L42.6,73.6L43.7,72.4L44.6,73.2L45.1,73.0L46.2,71.4L45.8,70.2L47.0,70.0L47.0,71.9L47.6,72.4L47.8,74.5L46.8,75.7L47.9,76.4L49.2,78.6L47.2,80.9Z", "hi": {"japan": "M160.0,34.9L159.1,36.2L158.9,39.2L158.3,40.1L157.0,40.7L155.2,40.8L153.7,42.3L153.0,41.8L153.0,40.8L148.7,41.7L149.8,42.7L149.1,44.9L148.4,45.5L147.9,45.0L148.1,43.8L147.5,43.4L147.1,42.5L148.0,42.1L150.4,39.7L152.5,39.3L153.6,39.6L154.7,37.3L155.4,37.9L157.5,36.1L158.1,34.5L158.0,33.1L158.4,32.2L159.5,32.0ZM162.9,28.7L163.6,28.1L163.8,29.6L162.3,29.9L161.4,31.2L159.8,30.3L159.2,31.7L158.0,31.8L157.9,30.5L158.4,29.5L159.5,29.4L160.1,26.6L161.3,27.9ZM150.1,42.3L150.7,41.5L151.3,41.7L151.7,41.1L152.5,41.4L152.6,41.9L152.1,42.6L151.6,42.2L151.1,42.5L150.8,43.3L150.1,42.9Z", "asia": "M148.3,30.7L148.5,30.9L148.1,30.8L147.3,31.7L147.4,32.7L145.1,34.1L145.0,34.8L146.0,35.6L145.8,35.9L144.6,36.1L143.7,36.7L143.2,36.5L142.8,36.8L142.2,36.3L142.9,34.6L141.7,33.9L144.4,31.4L145.8,31.9L145.7,31.2L147.3,30.6L147.7,29.9ZM143.7,36.7L146.0,35.6L147.1,38.0L147.1,39.5L146.7,40.2L144.0,41.1L144.1,39.4L143.6,38.1L144.4,37.8ZM126.3,62.1L125.5,61.7L125.5,60.6L126.0,60.0L127.1,59.7L127.7,59.7L127.9,60.2L127.2,61.5ZM96.0,30.7L95.9,30.0L96.6,29.7L95.6,27.4L98.2,26.6L99.0,24.3L101.1,24.7L101.6,24.1L101.7,22.8L102.5,22.7L103.7,21.7L104.0,22.6L106.4,23.8L107.1,24.8L106.7,26.4L107.1,26.9L109.7,27.3L111.6,28.3L112.7,30.3L117.4,30.3L121.6,31.7L122.9,31.0L126.1,30.5L128.8,28.9L128.3,28.0L128.8,27.2L130.5,27.5L133.1,26.4L134.6,25.1L136.9,25.1L137.0,24.6L135.3,23.3L134.5,23.8L132.9,23.8L132.6,23.2L133.8,20.9L135.1,21.4L136.5,20.6L136.5,20.0L138.0,18.2L138.0,17.5L137.5,17.2L138.3,16.6L141.0,16.3L143.5,17.2L145.2,21.1L147.1,21.5L148.3,22.5L148.7,23.7L150.3,23.7L152.9,22.8L150.9,27.1L149.6,26.9L148.7,27.3L148.9,30.0L148.3,30.0L148.3,30.7L147.7,29.9L147.3,30.6L145.7,31.2L145.8,31.9L144.4,31.4L141.7,33.9L138.4,35.2L138.9,34.6L138.7,34.1L139.5,33.3L139.0,32.6L136.3,34.8L135.2,34.8L134.7,35.4L135.3,36.3L136.1,36.5L136.1,37.1L137.0,37.5L138.1,36.6L139.7,37.1L139.9,37.8L138.4,38.2L136.4,40.4L137.5,41.1L139.3,44.6L139.2,45.6L138.6,45.9L139.5,47.0L139.0,49.1L138.5,49.2L135.9,53.9L133.0,56.2L131.8,56.3L131.2,56.9L130.8,56.5L130.3,57.1L127.7,58.0L127.3,59.4L126.8,59.4L126.5,58.5L126.7,58.0L123.8,57.4L123.3,56.9L123.5,56.2L122.0,55.4L121.1,56.1L119.3,56.3L118.2,56.8L118.4,58.3L117.8,58.2L117.7,57.4L116.9,57.8L115.7,57.0L116.0,56.0L115.3,55.7L115.1,54.5L114.0,54.7L114.1,53.2L115.1,52.1L115.1,50.0L114.3,49.0L112.6,48.9L112.9,48.3L112.4,47.5L111.7,48.1L110.8,47.7L108.7,49.5L107.8,49.7L106.1,49.0L104.8,50.3L104.8,49.3L104.1,49.6L101.7,49.1L98.1,46.7L97.3,46.3L96.8,46.6L94.4,44.8L94.1,43.4L94.8,43.6L94.9,42.9L94.4,42.2L94.5,41.2L93.4,39.7L91.7,39.1L91.4,38.1L90.5,37.2L90.3,35.9L89.4,35.7L89.1,34.5L89.3,33.9L90.2,33.3L92.1,33.2L92.5,32.4L93.8,32.3ZM139.1,54.1L138.1,57.2L137.4,55.2L138.8,52.9L139.3,53.3Z", "europe": "M22.3,30.2L22.0,32.0L21.5,31.1L21.5,30.5L22.1,30.3L22.2,29.9ZM20.4,23.9L19.7,24.1L18.7,25.7L19.5,25.5L19.9,26.8L19.4,27.1L19.8,27.7L19.6,28.1L20.5,28.5L19.2,29.7L16.5,29.2L15.7,30.0L15.8,30.6L15.2,30.8L13.3,30.1L11.9,30.2L10.6,29.4L11.4,27.7L11.4,26.6L11.8,27.2L11.2,26.4L11.3,25.6L10.3,24.9L10.2,24.4L10.7,24.4L8.0,23.6L7.6,23.3L8.1,23.0L7.5,22.8L9.1,22.3L9.7,22.7L11.0,22.6L10.5,21.2L11.2,21.2L11.3,21.6L12.9,21.5L12.7,21.2L13.9,20.7L14.5,19.5L15.1,19.4L16.8,20.5L16.8,20.9L17.5,20.6L17.5,21.1L18.2,21.4L20.9,22.1ZM44.8,-4.6L42.2,-4.0L42.7,-4.9L41.3,-5.4L39.7,-5.0L39.2,-4.0L38.2,-3.4L35.7,-3.7L34.6,-4.4L33.3,-4.0L33.2,-3.1L31.2,-3.3L30.9,-2.6L29.9,-2.6L26.6,1.6L27.0,2.0L26.6,2.5L25.6,2.5L24.9,3.7L25.0,5.5L25.6,6.1L25.3,7.6L23.9,9.3L23.3,8.5L21.2,10.0L19.8,10.3L18.4,9.6L17.7,5.2L18.6,4.4L21.4,3.3L23.4,2.0L27.8,-2.4L32.4,-5.0L34.7,-5.5L36.4,-5.5L38.0,-6.5L41.8,-6.7L45.0,-5.8L43.7,-5.4ZM23.9,9.3L25.3,7.6L25.6,6.1L25.0,5.5L24.9,3.7L25.6,2.5L26.6,2.5L27.0,2.0L26.6,1.6L29.9,-2.6L30.9,-2.6L31.2,-3.3L33.2,-3.1L33.3,-4.0L34.0,-4.0L37.0,-2.5L37.0,-0.5L37.3,-0.0L35.6,0.4L34.5,1.3L34.7,2.1L31.0,4.2L30.3,6.1L32.0,7.7L31.1,9.2L30.0,9.5L29.0,12.9L27.7,12.7L27.1,13.8L25.9,13.8ZM39.8,39.9L39.7,40.3L38.2,40.4L36.9,39.9L37.1,39.4L37.7,39.8ZM36.4,32.1L38.0,31.7L38.7,32.2L39.6,32.1L39.6,31.4L40.1,31.8L39.6,32.7L37.1,32.9L37.9,33.6L36.8,33.9L36.2,33.2L36.0,33.5L36.8,34.9L36.4,35.1L37.5,36.1L37.5,36.8L36.5,36.5L36.8,37.2L36.2,37.3L36.6,38.5L35.9,38.5L35.0,37.9L34.4,36.0L33.5,34.7L34.3,32.7ZM4.7,37.6L5.2,36.3L4.8,35.9L5.1,35.1L4.7,34.3L5.1,34.2L5.4,32.4L5.8,32.0L5.5,31.4L4.1,31.5L3.9,30.8L3.1,31.4L3.1,30.4L2.7,29.9L4.2,28.9L8.8,29.3L10.5,29.4L10.9,29.9L12.8,30.4L13.2,30.2L14.4,30.8L15.6,30.6L15.6,31.3L14.7,32.2L13.3,32.5L12.2,34.7L12.6,35.4L11.8,36.9L11.0,37.1L10.2,38.1L7.9,38.1L6.9,39.1L6.4,39.0L5.7,37.8ZM23.3,24.8L24.0,25.0L25.1,24.5L25.4,25.0L26.8,25.3L27.0,26.5L26.1,26.3L25.3,26.8L25.6,28.5L26.5,29.1L27.1,30.2L28.2,31.3L29.0,31.3L29.3,31.5L29.0,31.8L31.6,33.3L31.5,34.0L30.9,33.4L30.0,33.2L29.6,34.1L30.3,34.5L30.2,35.2L29.8,35.3L29.2,36.4L28.8,36.5L28.8,36.1L29.2,35.1L28.5,33.7L24.1,30.7L23.4,30.0L23.1,28.7L21.7,28.1L20.2,29.0L20.3,28.4L19.8,28.3L19.6,26.0L20.0,26.3L21.1,25.8L21.8,26.0L22.0,25.4L23.3,25.4ZM27.8,36.2L28.6,36.1L28.4,37.5L28.2,38.2L27.4,37.7L25.4,36.9L25.6,36.2ZM21.5,32.6L22.1,32.2L22.7,33.1L22.5,34.9L22.1,34.8L21.6,35.2L21.2,34.9L21.0,32.6Z"}}, "chinmi_asia": {"w": 275.0, "h": 306.0, "proj": {"lon0": 96, "lat1": 44, "c": 0.898794, "k": 8.5}, "base": "M61.6,285.7L61.5,288.5L60.8,286.9L60.0,285.8L61.0,285.4ZM91.5,191.2L90.2,191.3L87.2,193.1L86.7,195.0L85.3,195.9L81.6,195.5L82.2,197.8L80.6,199.5L80.4,201.5L77.7,204.1L76.3,204.5L73.5,212.8L75.5,216.7L80.2,221.5L80.1,223.4L79.2,223.2L90.4,235.3L91.9,235.2L93.7,237.2L96.1,241.5L98.0,243.3L100.0,248.9L101.6,256.2L101.5,257.0L101.2,256.2L101.4,261.1L102.6,263.9L102.7,266.9L101.9,265.6L101.0,266.5L101.6,268.7L100.9,268.5L101.3,272.4L101.0,271.9L100.6,272.7L100.8,274.3L100.3,275.4L99.6,275.5L99.2,277.6L97.9,277.8L93.8,281.1L92.4,281.4L91.7,282.9L90.5,283.0L86.0,285.6L84.7,284.8L84.1,283.4L83.6,285.6L82.0,284.4L81.0,285.0L82.1,285.2L82.2,286.5L79.9,286.5L82.4,288.0L80.9,290.2L77.4,287.1L80.7,291.4L80.1,292.7L79.3,292.8L75.1,289.0L77.6,292.4L77.7,294.1L72.6,296.7L71.2,299.2L69.6,300.7L67.0,300.9L68.0,299.7L67.4,299.2L67.6,292.3L68.0,290.6L69.5,289.8L69.4,289.0L67.2,287.3L66.2,287.6L64.4,285.5L65.4,284.6L67.6,284.5L69.1,283.0L69.1,281.3L71.2,281.8L71.9,280.9L74.5,280.6L75.3,281.7L77.7,282.2L77.6,280.2L75.3,278.0L75.3,275.1L76.4,274.1L79.4,274.7L79.6,272.4L81.7,272.2L85.7,269.4L86.6,269.3L87.0,269.8L87.9,268.9L88.3,267.4L87.7,263.2L88.7,259.8L86.6,253.9L86.8,251.9L88.1,249.5L87.7,246.7L89.0,244.3L85.3,239.7L87.0,238.4L87.1,237.6L83.5,235.0L82.9,233.6L82.0,234.2L81.4,233.8L80.6,232.5L80.2,229.9L74.0,223.2L72.3,219.7L71.3,219.4L69.6,217.6L69.9,215.5L66.6,214.2L60.3,209.9L61.6,208.4L61.4,206.8L65.6,207.2L68.2,203.8L67.6,202.3L66.5,202.3L65.8,200.8L63.9,200.2L65.6,198.5L61.9,196.0L58.3,198.1L54.3,196.4L52.3,193.2L53.1,189.7L52.1,188.6L51.5,189.7L50.9,189.8L50.3,187.8L46.8,183.8L49.4,180.6L53.3,183.2L56.0,180.5L57.2,182.0L58.2,180.4L60.7,182.4L62.2,180.2L64.0,181.0L66.4,180.0L67.2,179.3L67.7,177.3L70.9,175.6L72.9,177.9L75.2,179.2L77.5,178.8L78.5,179.7L80.5,179.3L82.4,180.4L80.6,182.7L80.6,184.1L81.4,184.9L81.5,187.2L83.8,187.6L86.7,190.3L89.8,189.9ZM81.1,300.2L80.7,300.0L81.4,299.5ZM85.3,285.6L84.7,286.1L85.2,285.4L85.5,285.2ZM83.0,197.1L82.3,196.7L82.5,196.1ZM88.6,193.7L87.1,194.7L87.5,193.5ZM88.0,196.1L87.1,196.3L87.7,195.9L88.2,195.2ZM84.3,197.7L83.4,197.0L84.4,196.9ZM322.0,293.2L321.4,293.9L321.8,292.8L322.3,292.5L322.5,292.8ZM50.5,274.7L50.3,275.6L49.9,275.3ZM49.1,272.1L48.1,272.2L47.9,271.0L48.3,270.8ZM18.4,306.8L17.5,307.9L17.3,306.6L17.7,304.6L18.6,305.3ZM31.5,201.3L31.6,201.9L33.0,200.7L34.5,202.5L34.7,203.2L33.6,206.1L34.5,207.8L36.2,208.1L37.9,207.3L39.8,207.8L40.4,212.7L38.6,217.2L39.3,219.8L37.5,224.5L37.9,224.9L39.5,225.3L43.5,221.9L44.1,220.7L46.6,219.2L50.1,221.3L50.9,222.5L52.0,221.5L53.9,220.8L54.6,219.1L55.5,218.6L55.7,217.5L60.7,218.3L64.4,223.6L66.8,225.6L67.4,226.9L66.8,230.5L67.4,234.0L69.1,236.6L71.9,238.1L71.8,239.4L73.7,240.9L72.5,244.3L72.9,247.1L72.4,250.5L69.3,253.1L68.5,251.9L67.1,251.4L61.0,252.0L58.1,251.4L55.0,252.2L52.8,253.8L50.0,258.5L48.3,258.9L49.7,266.3L51.6,268.4L51.5,271.2L53.0,274.5L50.4,270.3L50.0,271.1L47.8,268.6L47.6,269.2L44.6,266.6L43.7,266.1L41.6,266.7L37.4,266.4L37.9,259.8L35.2,258.7L32.4,259.4L30.7,260.5L30.5,261.4L31.2,263.1L30.3,266.1L30.5,270.5L27.7,276.6L26.6,281.4L24.2,286.3L24.1,291.3L25.1,294.0L24.9,295.2L25.9,295.7L28.4,294.8L29.3,295.0L30.5,301.0L31.7,302.2L31.8,301.7L32.3,302.4L32.7,303.7L34.7,312.6L33.9,312.1L33.5,309.9L32.7,309.8L33.0,308.4L32.5,307.9L31.8,308.3L31.8,309.4L33.8,312.9L35.0,313.0L38.3,315.7L40.5,315.3L42.0,315.6L44.3,319.0L46.6,320.9L44.9,324.5L43.4,324.9L42.4,323.8L40.2,324.8L39.1,326.1L38.1,324.9L38.8,323.4L38.6,320.9L37.2,320.9L36.3,319.1L33.2,318.3L32.6,317.2L31.9,317.3L31.5,319.2L28.2,315.5L28.4,313.6L27.1,312.6L27.5,311.5L25.7,311.3L24.9,309.2L24.3,308.4L23.5,308.4L23.3,307.0L21.3,305.5L20.7,303.8L19.7,303.1L18.0,304.4L17.1,302.4L17.1,299.5L21.0,286.0L21.1,283.4L24.4,279.6L27.6,273.9L26.0,267.3L24.6,265.7L23.9,263.2L24.3,261.5L24.0,257.4L22.4,254.6L19.6,251.9L17.2,248.1L16.8,246.7L16.7,244.8L19.5,243.4L19.8,237.6L21.5,236.5L22.1,235.0L21.7,234.5L20.3,235.2L18.6,229.7L13.0,222.7L13.3,221.5L12.5,218.5L11.1,217.9L10.5,216.6L11.6,216.8L13.3,216.0L13.0,213.1L13.8,211.4L13.9,208.6L15.4,206.1L18.1,206.6L22.3,205.9L23.5,203.2L25.5,203.3L26.6,202.7L26.4,200.9L28.4,201.2L29.7,200.4ZM31.1,291.6L30.5,291.1L30.9,290.8ZM31.1,292.5L31.0,293.6L30.3,293.9L30.0,293.5L30.2,292.6ZM28.0,318.6L27.6,317.9L27.9,316.9ZM19.8,306.6L19.3,305.1L19.9,305.5ZM17.6,297.1L17.2,297.2L17.4,296.4ZM23.5,309.5L23.7,310.5L23.2,309.8L23.3,309.1ZM60.9,362.7L59.7,363.2L58.4,362.7L58.9,361.9L59.7,361.7L61.1,362.4ZM265.0,14.4L263.8,12.4L264.2,11.7L263.0,10.8L264.2,10.1L267.9,9.3L269.4,5.3L268.7,2.5L269.3,-0.6L267.3,-7.2L270.8,-8.4L273.9,-11.3L274.9,-10.6L282.2,-8.8L283.5,-9.6L284.1,-12.7L286.0,-13.6L286.6,-16.0L287.6,-16.6L288.0,-18.2L289.3,-19.1L289.3,-21.2L291.9,-26.6L291.6,-28.1L292.5,-29.0L294.5,-29.6L296.1,-31.6L294.6,-34.2L295.4,-36.2L292.6,-37.2L289.1,-36.3L286.2,-34.8L283.8,-34.9L280.4,-33.6L278.7,-31.6L267.1,-31.5L265.3,-34.2L265.9,-36.9L264.0,-39.1L264.5,-40.6L264.0,-41.3L261.2,-41.6L255.9,-45.8L252.6,-45.7L250.7,-46.4L249.9,-47.6L244.5,-47.3L241.0,-49.3L240.6,-50.8L241.3,-52.8L239.4,-54.0L239.2,-57.0L236.3,-60.4L235.3,-63.8L233.1,-67.4L231.8,-71.1L229.3,-73.2L229.6,-74.3L228.2,-75.4L227.1,-75.6L226.5,-76.9L222.1,-78.2L220.1,-77.6L210.9,-81.1L201.2,-80.6L190.9,-78.9L184.1,-74.7L183.9,-73.4L188.4,-72.8L189.1,-68.8L188.6,-67.8L183.9,-64.6L179.1,-57.0L177.0,-54.5L178.4,-53.4L177.7,-51.6L171.5,-49.7L167.1,-46.9L162.3,-47.8L154.5,-51.1L150.6,-50.0L148.4,-50.1L143.2,-53.0L139.8,-53.3L134.3,-51.1L131.1,-49.3L130.3,-47.7L128.4,-47.0L126.0,-47.0L122.8,-46.1L117.2,-45.5L112.4,-43.7L101.1,-45.3L96.4,-45.2L91.4,-48.1L91.0,-50.6L85.8,-50.9L81.8,-53.7L78.1,-53.6L71.7,-55.0L64.7,-53.6L61.7,-52.3L58.3,-52.2L55.8,-52.7L54.7,-53.5L51.1,-54.3L48.0,-56.0L48.3,-57.1L47.5,-58.1L46.7,-62.5L41.1,-63.3L34.1,-65.7L30.0,-65.9L28.4,-66.9L22.1,-69.0L20.2,-66.3L18.0,-65.6L17.0,-63.8L15.6,-63.3L14.0,-59.9L15.5,-56.5L17.4,-55.5L17.2,-53.6L15.3,-51.1L12.1,-50.2L10.4,-48.8L9.2,-48.7L7.5,-50.0L2.4,-50.2L0.5,-51.0L-0.5,-50.7L-1.6,-51.1L-3.6,-50.2L-6.8,-50.5L-8.2,-51.4L-10.6,-51.2L-12.6,-52.9L-13.4,-55.7L-22.1,-56.1L-23.4,-57.6L-24.6,-57.6L-25.8,-56.9L-27.8,-58.3L-29.1,-57.0L-32.1,-56.9L-35.0,-55.0L-38.0,-54.5L-40.8,-52.9L-45.4,-51.8L-46.0,-50.9L-48.6,-50.2L-48.5,-48.6L-50.5,-47.7L-51.6,-47.8L-52.6,-46.8L-53.4,-46.5L-54.2,-47.1L-54.8,-46.3L-59.6,-46.3L-60.2,-44.7L-61.2,-44.1L-65.6,-43.2L-68.8,-44.9L-70.9,-47.2L-71.6,-47.3L-70.8,-48.4L-71.2,-49.1L-75.0,-46.7L-82.3,-47.7L-84.0,-50.1L-84.1,-51.5L-89.2,-53.0L-92.1,-57.6L-96.6,-59.5L-101.1,-58.6L-103.2,-57.2L-111.0,-57.3L-111.6,-59.1L-114.1,-59.2L-113.6,-61.1L-114.9,-61.1L-115.5,-61.9L-116.6,-62.0L-118.8,-61.1L-119.0,-59.0L-120.6,-58.8L-121.6,-58.1L-121.7,-57.4L-122.3,-57.6L-126.3,-63.7L-138.6,-78.8L-149.1,-85.2L-149.6,-86.3L-147.8,-86.2L-146.4,-88.8L-157.1,-85.8L-157.6,-84.7L-158.8,-84.1L-161.7,-83.5L-164.6,-82.0L-165.4,-80.6L-166.5,-81.4L-169.2,-81.8L-172.6,-80.3L-173.5,-81.6L-173.4,-82.5L-170.5,-84.4L-170.6,-85.5L-174.0,-84.6L-176.4,-85.9L-178.6,-86.1L-178.9,-85.0L-179.9,-84.5L-180.4,-86.0L-181.9,-87.8L-183.3,-86.7L-188.4,-86.3L-190.3,-86.8L-190.6,-87.2L-189.8,-88.1L-189.6,-90.1L-191.7,-94.6L-193.0,-96.1L-197.2,-94.9L-202.5,-96.5L-206.4,-96.8L-209.9,-95.2L-212.3,-94.9L-212.0,-93.9L-212.7,-93.3L-227.5,-90.7L-229.8,-90.9L-233.2,-90.3L-235.0,-89.4L-236.2,-87.9L-237.4,-88.4L-240.9,-88.3L-260.3,-84.5L-265.6,-85.2L-267.5,-81.8L-265.5,-81.2L-263.8,-81.4L-263.3,-80.9L-265.6,-80.3L-265.9,-78.9L-262.4,-78.4L-259.6,-77.4L-259.1,-76.5L-259.9,-76.0L-267.0,-76.3L-269.1,-73.7L-267.4,-70.9L-269.9,-69.3L-271.8,-69.1L-274.8,-67.4L-272.1,-66.1L-271.5,-65.0L-264.6,-63.3L-263.2,-62.3L-262.9,-61.5L-264.4,-58.3L-267.8,-56.9L-271.8,-56.8L-274.6,-58.2L-276.5,-55.9L-278.7,-55.2L-279.2,-56.3L-283.6,-56.9L-287.6,-60.0L-291.5,-60.3L-293.0,-58.9L-294.6,-58.6L-297.9,-60.1L-300.9,-59.3L-301.8,-59.7L-304.5,-58.2L-305.2,-57.1L-308.0,-56.0L-310.5,-56.7L-316.0,-59.6L-316.7,-59.0L-315.9,-56.6L-316.6,-55.6L-317.3,-56.0L-317.6,-57.6L-319.8,-59.8L-325.9,-63.6L-331.8,-63.6L-334.5,-65.5L-339.1,-63.6L-341.2,-63.5L-342.5,-65.0L-345.4,-65.7L-349.1,-62.2L-352.8,-60.6L-355.3,-60.2L-356.6,-58.2L-360.5,-56.1L-361.9,-56.2L-360.3,-51.1L-360.9,-50.4L-363.4,-49.5L-364.1,-49.8L-369.0,-54.2L-369.8,-54.5L-371.1,-54.0L-372.1,-52.8L-372.5,-51.0L-374.4,-49.7L-375.2,-48.4L-375.9,-45.6L-374.1,-43.8L-376.6,-40.8L-377.3,-38.9L-376.9,-37.5L-373.9,-36.0L-373.6,-33.6L-372.1,-31.8L-370.7,-32.3L-365.4,-31.5L-359.4,-23.6L-360.0,-23.0L-362.4,-23.4L-362.9,-22.9L-362.6,-22.1L-357.2,-19.5L-361.5,-17.7L-361.1,-16.1L-363.0,-16.4L-365.5,-14.8L-369.0,-14.3L-369.5,-13.5L-370.8,-14.3L-370.4,-12.7L-371.2,-12.1L-373.7,-6.9L-374.3,-7.4L-376.5,-4.8L-376.2,-3.6L-374.2,-2.9L-372.0,-0.9L-370.8,3.8L-370.0,1.4L-369.4,1.0L-370.5,4.2L-370.8,8.2L-369.5,9.3L-368.8,11.2L-363.8,17.4L-362.3,18.3L-363.7,20.4L-366.3,21.6L-367.8,23.7L-371.9,23.1L-373.3,21.1L-376.3,18.6L-377.6,18.7L-377.9,18.1L-382.3,16.7L-384.7,15.3L-384.1,13.0L-384.6,12.6L-387.0,12.5L-388.4,11.3L-390.6,10.6L-391.4,11.8L-392.3,10.8L-393.4,10.6L-398.6,12.1L-399.3,11.8L-398.9,10.7L-406.7,7.1L-415.8,6.6L-422.9,4.0L-426.7,3.7L-428.0,4.9L-437.6,-2.4L-441.7,-3.6L-444.2,-5.9L-447.0,-5.9L-449.2,-8.3L-453.4,-9.6L-453.7,-10.1L-451.2,-11.0L-452.9,-11.7L-452.3,-12.0L-449.1,-10.8L-445.8,-11.7L-446.1,-13.3L-444.3,-15.3L-443.6,-17.0L-443.0,-17.4L-442.5,-16.4L-441.7,-17.8L-439.3,-17.8L-442.5,-20.4L-443.8,-20.5L-444.9,-22.4L-443.4,-22.3L-441.3,-23.0L-439.3,-22.6L-439.8,-23.9L-433.4,-25.9L-434.0,-27.8L-435.3,-27.8L-436.0,-27.0L-438.0,-26.7L-438.9,-26.8L-437.3,-27.7L-438.7,-27.5L-441.5,-26.3L-441.0,-27.9L-441.6,-28.2L-440.9,-30.3L-438.2,-31.2L-436.8,-32.6L-429.5,-33.0L-428.1,-36.3L-429.0,-36.6L-429.1,-38.6L-430.5,-39.0L-429.4,-40.9L-427.8,-41.0L-429.7,-41.8L-430.2,-42.6L-428.7,-43.0L-427.0,-44.6L-427.2,-47.4L-429.5,-47.4L-433.2,-48.8L-434.1,-49.8L-436.1,-49.5L-441.1,-51.4L-442.7,-50.3L-445.4,-51.9L-447.5,-54.5L-452.6,-53.5L-453.7,-52.8L-454.6,-53.4L-456.0,-53.4L-457.5,-54.5L-459.2,-54.7L-461.5,-54.1L-462.9,-55.6L-462.7,-57.2L-463.6,-59.9L-464.8,-60.0L-465.5,-61.2L-468.2,-61.0L-472.0,-61.7L-471.6,-62.4L-472.7,-65.3L-470.8,-65.6L-470.6,-66.1L-472.8,-67.8L-474.3,-70.1L-475.7,-70.9L-480.2,-70.9L-482.8,-70.1L-485.6,-70.6L-486.8,-69.0L-488.0,-68.4L-490.8,-68.9L-492.2,-70.7L-491.9,-72.6L-492.6,-73.9L-492.3,-74.5L-494.6,-76.6L-493.4,-78.2L-487.9,-77.3L-483.6,-79.4L-483.7,-80.3L-485.4,-81.1L-485.5,-82.4L-487.4,-83.1L-490.8,-83.4L-490.3,-85.3L-493.5,-86.7L-495.2,-88.9L-496.0,-89.2L-495.4,-90.3L-498.1,-91.7L-497.9,-92.8L-496.8,-93.9L-498.0,-95.9L-497.3,-96.9L-497.5,-98.6L-502.4,-100.7L-504.7,-100.7L-508.2,-99.3L-509.2,-100.2L-509.0,-101.5L-511.6,-102.2L-513.4,-101.5L-515.2,-102.8L-517.3,-102.5L-518.4,-103.2L-518.0,-104.2L-518.7,-106.6L-520.7,-109.3L-522.3,-109.2L-520.8,-113.0L-523.0,-114.2L-523.2,-114.8L-524.5,-115.0L-523.0,-117.3L-521.2,-117.8L-523.3,-120.9L-523.1,-122.7L-523.8,-125.7L-521.4,-127.9L-520.3,-129.9L-518.3,-130.7L-519.4,-131.6L-519.1,-134.1L-516.9,-133.4L-515.5,-134.7L-512.3,-134.5L-510.7,-136.0L-503.3,-134.9L-502.9,-135.6L-506.4,-137.7L-511.3,-137.6L-514.6,-139.2L-515.7,-140.6L-514.7,-140.2L-514.5,-141.2L-515.6,-141.8L-521.0,-140.6L-509.9,-146.9L-495.2,-157.1L-492.5,-160.5L-495.2,-163.3L-504.3,-167.7L-502.6,-168.3L-500.2,-170.7L-500.5,-172.0L-503.4,-173.1L-504.3,-174.5L-503.3,-175.5L-503.4,-176.2L-505.9,-176.8L-507.2,-178.2L-507.1,-178.8L-505.5,-179.7L-505.7,-180.2L-507.2,-180.6L-505.6,-183.3L-506.4,-183.8L-503.5,-184.3L-503.6,-185.2L-505.0,-187.8L-511.4,-194.6L-510.0,-196.3L-504.7,-200.2L-504.3,-201.2L-509.2,-204.5L-514.3,-205.6L-515.9,-208.2L-513.6,-211.1L-516.3,-211.7L-511.0,-212.9L-508.9,-215.0L-504.3,-215.8L-503.0,-216.8L-503.0,-217.9L-497.6,-217.1L-497.2,-217.6L-497.6,-219.2L-492.4,-218.4L-490.6,-219.4L-489.0,-219.4L-489.1,-220.6L-481.2,-218.6L-481.3,-217.8L-482.0,-217.6L-487.6,-218.2L-488.2,-217.9L-486.4,-217.2L-486.1,-216.6L-481.3,-216.5L-481.5,-215.6L-477.8,-216.1L-478.8,-213.8L-480.2,-213.1L-478.0,-213.6L-476.1,-215.1L-466.0,-214.4L-463.8,-214.8L-459.5,-214.1L-445.2,-209.9L-439.8,-207.0L-436.8,-206.8L-431.1,-204.6L-429.2,-204.5L-429.8,-205.4L-429.3,-205.3L-424.9,-202.6L-420.4,-201.6L-419.2,-197.8L-417.4,-197.3L-418.7,-194.0L-423.8,-190.8L-427.0,-189.5L-438.1,-187.6L-443.9,-187.8L-450.9,-189.3L-462.1,-190.4L-467.4,-192.2L-470.0,-191.7L-470.6,-192.2L-470.2,-192.5L-480.2,-194.2L-482.5,-195.7L-481.8,-196.2L-489.7,-196.9L-485.1,-195.5L-485.4,-194.8L-482.4,-193.1L-479.9,-192.8L-479.6,-191.5L-476.3,-190.8L-478.5,-189.8L-472.8,-188.9L-468.4,-186.6L-467.7,-185.8L-467.7,-185.0L-469.0,-182.8L-470.6,-181.9L-467.5,-178.4L-467.3,-176.8L-466.4,-176.4L-467.1,-176.0L-467.0,-174.8L-465.8,-173.7L-462.7,-172.9L-461.1,-173.2L-457.3,-171.6L-455.6,-170.0L-447.9,-168.4L-443.4,-169.6L-442.6,-170.8L-443.5,-172.7L-445.1,-173.4L-449.3,-173.5L-454.0,-176.7L-454.3,-178.0L-452.4,-178.4L-451.6,-180.0L-449.7,-180.2L-446.7,-179.4L-443.0,-177.5L-440.0,-177.3L-431.1,-174.8L-429.7,-174.9L-429.0,-175.9L-427.4,-176.6L-424.4,-176.6L-425.7,-178.5L-429.4,-181.5L-429.7,-182.3L-429.2,-183.6L-425.3,-184.9L-422.5,-186.7L-416.6,-188.0L-410.9,-191.4L-407.9,-190.6L-403.1,-190.5L-399.9,-189.1L-400.8,-188.0L-398.5,-188.2L-396.5,-187.1L-396.5,-189.0L-393.5,-192.7L-394.0,-195.0L-395.0,-196.3L-398.4,-197.1L-398.9,-197.7L-395.5,-204.0L-395.7,-206.2L-396.0,-206.8L-401.8,-209.2L-402.4,-209.7L-401.7,-209.8L-396.9,-208.7L-389.0,-208.9L-382.8,-208.1L-376.8,-203.7L-376.7,-202.7L-385.6,-201.9L-390.4,-199.0L-390.1,-198.5L-385.3,-197.1L-382.9,-194.6L-378.2,-193.8L-369.3,-195.3L-367.4,-199.4L-367.7,-200.5L-360.3,-201.3L-360.0,-201.7L-361.4,-202.9L-360.9,-203.1L-357.9,-202.9L-346.1,-206.7L-336.2,-208.6L-334.0,-207.9L-334.7,-207.2L-333.1,-207.0L-330.6,-208.1L-331.9,-209.0L-333.5,-209.2L-322.4,-212.5L-317.1,-212.4L-322.4,-211.7L-321.1,-211.2L-322.7,-209.4L-321.5,-208.6L-321.4,-207.7L-325.9,-206.9L-326.5,-206.3L-321.1,-205.9L-317.2,-206.5L-315.4,-205.6L-314.3,-205.7L-313.8,-207.2L-310.0,-208.8L-305.3,-209.5L-297.0,-208.7L-289.0,-211.6L-288.5,-211.1L-287.6,-211.8L-282.2,-212.6L-281.8,-211.6L-279.8,-210.3L-281.8,-209.2L-281.9,-207.8L-277.1,-207.0L-275.6,-208.0L-275.8,-210.0L-271.3,-210.2L-267.9,-212.4L-268.5,-213.7L-270.0,-213.4L-273.7,-217.5L-268.1,-219.7L-249.4,-218.2L-243.0,-217.0L-237.4,-215.3L-237.6,-214.6L-236.6,-214.8L-226.0,-212.1L-221.5,-211.4L-220.4,-210.4L-216.0,-208.4L-211.1,-206.7L-210.1,-207.0L-207.6,-208.8L-205.2,-212.1L-208.1,-211.8L-209.8,-212.2L-213.0,-214.5L-213.9,-216.6L-216.8,-217.5L-221.1,-218.4L-222.3,-217.2L-223.1,-218.8L-222.1,-221.1L-221.0,-221.0L-219.7,-221.9L-220.4,-222.9L-219.4,-227.3L-220.5,-228.1L-223.8,-228.0L-224.1,-228.7L-222.7,-230.0L-224.3,-230.2L-222.2,-231.9L-217.4,-233.0L-211.9,-235.3L-209.3,-238.1L-206.0,-243.7L-203.3,-246.1L-201.6,-246.3L-201.0,-246.3L-201.3,-245.6L-200.6,-245.5L-187.2,-245.8L-177.1,-243.9L-177.6,-240.9L-179.0,-238.1L-181.2,-235.4L-184.0,-234.2L-184.4,-233.4L-182.7,-232.1L-178.9,-230.8L-178.0,-229.2L-178.0,-224.9L-179.8,-223.3L-178.8,-219.2L-178.7,-216.6L-179.3,-213.8L-178.9,-212.2L-177.2,-210.9L-171.5,-208.9L-171.2,-208.1L-174.6,-205.5L-174.4,-203.8L-175.2,-202.0L-178.8,-200.5L-184.5,-195.6L-185.9,-195.0L-188.2,-195.2L-186.8,-193.5L-186.9,-192.8L-188.4,-192.8L-193.1,-191.4L-195.7,-192.1L-193.4,-193.3L-196.5,-192.8L-199.6,-194.2L-204.6,-194.0L-206.2,-193.7L-204.8,-191.9L-196.0,-189.9L-188.3,-190.1L-184.0,-189.1L-180.9,-189.8L-180.2,-191.8L-171.8,-194.3L-169.7,-195.5L-167.5,-199.0L-162.2,-202.0L-162.4,-204.6L-165.1,-207.6L-163.6,-210.4L-152.0,-212.3L-149.3,-212.3L-143.3,-208.0L-143.3,-203.5L-143.8,-202.1L-139.3,-200.3L-130.5,-200.5L-140.7,-201.9L-141.1,-204.1L-140.1,-205.6L-137.6,-206.2L-140.2,-211.7L-152.8,-214.5L-157.2,-214.5L-161.8,-213.3L-168.2,-213.5L-169.8,-214.2L-168.9,-216.1L-171.4,-218.5L-171.3,-219.3L-169.4,-222.5L-165.5,-225.9L-171.3,-231.3L-175.1,-233.3L-170.6,-236.7L-160.5,-239.2L-159.7,-240.2L-160.0,-242.7L-162.1,-244.9L-159.3,-245.2L-157.6,-244.8L-155.8,-242.9L-155.9,-241.9L-154.8,-240.5L-157.4,-237.9L-158.3,-237.7L-158.5,-236.4L-156.6,-235.1L-156.9,-234.0L-158.3,-233.2L-157.9,-232.4L-154.8,-231.8L-147.1,-231.2L-145.7,-230.6L-145.2,-231.0L-140.7,-230.9L-135.1,-228.9L-129.8,-229.1L-129.2,-229.5L-133.8,-229.7L-135.9,-231.8L-141.5,-232.1L-149.5,-234.2L-150.4,-234.6L-152.5,-237.2L-146.1,-238.3L-140.9,-236.7L-136.1,-237.2L-135.7,-237.6L-137.4,-238.8L-141.4,-238.6L-142.0,-238.9L-141.8,-239.3L-137.8,-240.8L-133.8,-241.4L-126.7,-241.2L-116.4,-238.8L-115.7,-237.7L-109.5,-235.6L-101.2,-236.0L-98.5,-235.6L-97.5,-235.2L-99.5,-233.3L-104.5,-231.7L-105.1,-229.5L-104.4,-227.9L-105.7,-226.1L-105.3,-224.4L-105.0,-225.6L-102.4,-228.6L-100.3,-229.1L-99.2,-228.6L-99.1,-225.9L-101.7,-222.9L-100.4,-221.9L-98.7,-221.8L-98.3,-222.3L-98.8,-223.4L-95.5,-223.9L-94.3,-224.6L-93.7,-225.6L-94.9,-227.5L-98.2,-230.4L-95.1,-234.1L-95.2,-235.3L-97.8,-236.9L-102.0,-237.4L-104.5,-238.6L-106.2,-240.3L-113.8,-241.3L-115.9,-242.2L-117.2,-244.1L-115.8,-246.1L-118.3,-247.2L-119.0,-248.5L-119.2,-249.5L-117.7,-250.5L-117.8,-251.3L-86.0,-253.0L-82.5,-252.6L-80.6,-252.7L-79.4,-253.5L-69.6,-254.0L-68.5,-253.5L-75.7,-251.4L-78.0,-250.2L-77.8,-249.3L-71.2,-247.4L-76.6,-249.5L-77.1,-249.8L-76.9,-250.4L-73.5,-251.3L-67.8,-251.7L-64.4,-253.4L-67.2,-254.0L-72.0,-257.1L-76.4,-257.7L-75.0,-258.6L-73.4,-258.8L-69.5,-257.8L-67.0,-258.1L-73.1,-260.0L-78.0,-260.5L-77.3,-261.3L-75.9,-261.2L-74.9,-261.9L-71.4,-260.8L-69.8,-261.1L-65.6,-263.0L-65.2,-263.6L-69.2,-264.1L-68.7,-264.9L-63.6,-264.6L-55.5,-266.6L-48.9,-267.4L-44.4,-268.5L-34.5,-269.0L-14.7,-271.3L-14.1,-271.7L-18.5,-271.6L-19.8,-271.2L-21.6,-271.7L-23.8,-271.2L-24.0,-271.8L-23.1,-272.6L-22.1,-272.2L-20.9,-272.8L-18.0,-272.5L-10.9,-273.3L-3.2,-273.2L0.6,-272.7L-2.6,-271.1L3.9,-272.0L4.6,-271.9L3.8,-271.1L10.3,-272.3L11.5,-271.8L12.8,-272.7L20.3,-274.1L28.8,-272.2L27.5,-270.7L26.3,-270.3L27.1,-270.3L29.4,-271.4L29.2,-273.2L21.4,-276.1L21.9,-276.3L27.3,-276.0L37.0,-276.5L42.8,-275.7L43.4,-276.1L37.6,-276.7L39.0,-278.0L37.6,-279.0L38.1,-280.4L50.5,-284.8L61.2,-286.7L74.2,-285.0L76.9,-283.8L71.7,-282.5L62.7,-281.4L73.7,-281.4L74.2,-280.5L75.0,-280.5L83.6,-280.8L87.3,-279.9L81.3,-276.9L79.3,-277.0L79.6,-276.4L89.6,-276.4L90.9,-276.8L91.9,-278.1L93.1,-278.3L115.5,-278.1L121.8,-276.7L123.0,-276.1L121.8,-275.2L124.5,-275.7L127.0,-275.3L128.3,-273.1L127.2,-272.5L130.6,-273.1L131.0,-273.5L129.8,-274.0L132.0,-274.1L134.2,-271.1L136.4,-271.3L135.6,-269.5L134.2,-268.3L133.6,-268.3L133.8,-268.8L132.9,-269.3L125.8,-270.7L129.5,-268.4L131.7,-268.7L135.4,-267.3L134.6,-266.0L129.3,-263.6L105.7,-257.7L106.3,-257.2L105.5,-256.4L99.9,-255.3L93.2,-252.4L86.1,-251.8L81.6,-249.3L77.8,-249.1L73.9,-246.2L69.9,-244.6L74.2,-245.1L80.0,-247.7L89.8,-248.0L94.4,-249.1L100.0,-249.7L101.8,-250.6L105.9,-250.5L112.9,-252.4L113.6,-252.7L112.5,-253.1L107.7,-252.5L104.7,-252.8L104.4,-253.3L106.0,-254.4L109.0,-255.1L115.0,-254.5L115.6,-255.4L118.8,-255.2L116.3,-254.7L117.7,-253.5L123.4,-252.5L128.3,-252.8L129.4,-253.6L128.6,-254.7L130.1,-254.3L133.1,-252.0L131.1,-250.4L133.6,-249.4L133.5,-246.9L130.9,-245.1L132.3,-243.6L135.0,-243.4L131.5,-244.8L134.0,-247.0L134.1,-248.5L136.6,-249.4L134.0,-250.2L133.8,-250.8L138.0,-251.5L143.7,-251.7L147.7,-252.5L171.5,-251.5L175.2,-250.6L171.6,-250.4L171.0,-249.6L171.4,-248.6L181.4,-246.3L196.7,-246.2L202.7,-245.5L204.4,-245.7L202.5,-246.3L202.7,-246.6L207.5,-246.1L211.0,-248.1L208.7,-250.2L208.6,-251.0L209.5,-251.9L212.4,-251.8L214.1,-252.6L218.0,-252.9L226.3,-250.9L226.1,-250.3L231.1,-251.2L231.8,-250.8L231.4,-249.9L233.4,-249.3L237.1,-251.2L242.5,-250.6L246.6,-249.3L246.4,-248.8L249.0,-248.7L251.3,-248.1L251.4,-247.4L252.9,-247.5L252.5,-246.9L249.0,-245.6L252.2,-245.4L253.9,-244.6L254.0,-244.0L247.7,-242.5L254.3,-241.7L255.3,-240.7L255.2,-239.4L254.3,-238.8L251.6,-238.7L242.4,-241.5L251.4,-235.9L253.0,-236.5L253.0,-237.6L253.7,-237.3L255.6,-235.8L250.9,-235.1L253.1,-234.5L257.9,-230.5L263.9,-228.6L264.9,-228.6L265.5,-229.2L267.6,-227.3L269.4,-227.5L271.7,-228.7L275.3,-231.6L275.1,-232.5L276.8,-235.0L280.0,-237.4L281.2,-236.0L283.7,-234.7L287.9,-233.2L295.7,-232.8L298.1,-233.9L302.2,-234.7L306.3,-234.8L314.1,-233.0L320.4,-230.6L320.7,-230.9L319.7,-231.4L323.3,-232.3L320.2,-232.8L321.2,-234.0L322.7,-234.6L324.9,-234.3L326.8,-234.8L330.1,-233.3L336.0,-233.7L333.8,-235.5L334.0,-237.0L331.3,-237.6L333.4,-238.0L335.0,-239.3L337.6,-239.6L333.2,-239.9L329.9,-239.4L329.6,-240.8L333.1,-242.2L339.6,-242.2L344.4,-243.0L343.7,-243.4L343.6,-244.1L341.1,-245.2L342.3,-245.6L351.9,-244.1L363.0,-243.9L383.9,-241.8L383.8,-241.0L372.6,-241.2L368.0,-240.2L370.3,-239.5L374.6,-240.2L388.3,-240.5L386.6,-239.1L382.9,-237.5L382.0,-237.5L383.7,-239.2L380.1,-239.9L379.4,-238.6L380.1,-238.2L380.1,-237.5L377.5,-237.1L374.8,-237.4L374.9,-236.6L374.3,-235.9L375.8,-235.4L382.5,-236.4L391.6,-240.8L400.3,-240.7L408.7,-239.4L412.3,-237.9L412.7,-237.1L405.3,-236.3L404.3,-235.6L404.7,-235.4L408.7,-235.1L413.0,-233.8L417.1,-233.9L417.6,-233.4L413.3,-231.4L419.9,-232.7L424.6,-231.9L428.5,-229.7L426.0,-229.4L431.7,-228.1L441.5,-228.5L457.6,-230.3L469.4,-230.1L479.0,-228.9L484.0,-227.7L486.9,-226.5L488.3,-225.3L489.0,-223.6L486.9,-219.9L487.7,-219.2L495.9,-217.7L496.9,-213.3L499.0,-212.3L499.2,-211.7L497.6,-209.6L495.5,-208.6L497.4,-208.8L499.4,-211.0L500.9,-211.7L500.3,-214.2L500.7,-215.7L505.5,-217.7L513.4,-218.6L519.1,-218.7L523.4,-217.7L541.0,-216.7L547.2,-218.8L549.0,-218.7L551.2,-217.4L552.4,-214.8L560.1,-213.2L562.4,-210.7L569.4,-211.0L572.9,-212.9L573.0,-213.6L569.8,-217.5L566.6,-217.8L569.2,-219.8L569.1,-221.9L584.9,-220.7L590.4,-219.5L591.6,-220.5L601.9,-219.8L610.6,-220.1L618.2,-218.0L632.9,-215.8L633.7,-215.0L636.2,-214.7L641.7,-212.4L641.7,-179.1L637.5,-177.0L630.4,-175.1L624.5,-176.1L620.2,-178.6L617.9,-179.2L613.8,-178.9L619.1,-178.5L620.5,-177.3L619.3,-176.7L614.5,-177.3L611.6,-178.2L609.5,-177.2L600.1,-175.8L608.7,-176.7L611.6,-177.7L613.1,-177.2L613.9,-176.0L612.3,-175.0L615.1,-175.8L617.6,-175.4L622.1,-176.5L622.1,-173.8L624.1,-172.6L626.8,-171.9L628.2,-173.1L629.4,-172.2L630.1,-171.1L629.9,-170.1L631.4,-169.7L632.0,-167.2L629.8,-166.6L631.9,-165.9L631.6,-164.9L632.5,-165.3L632.5,-166.1L633.5,-164.4L637.1,-162.8L637.2,-162.2L636.1,-161.6L637.0,-160.5L638.0,-160.3L638.5,-158.8L635.5,-157.0L635.0,-155.7L626.6,-157.6L621.1,-158.1L621.4,-159.6L619.0,-159.6L618.6,-158.6L620.0,-157.8L616.5,-157.3L613.7,-155.9L601.4,-152.6L599.8,-151.5L597.0,-151.3L594.5,-150.3L593.0,-150.6L589.3,-148.0L587.2,-148.5L586.8,-148.2L587.6,-147.1L586.2,-147.2L585.1,-146.1L583.6,-145.9L583.6,-145.0L570.0,-139.7L568.0,-135.7L565.2,-136.6L562.4,-139.7L559.4,-141.1L551.1,-140.9L544.2,-139.5L542.1,-138.6L536.9,-134.8L536.2,-134.7L535.8,-135.8L537.5,-140.1L536.2,-140.1L527.8,-136.8L527.7,-135.5L526.8,-134.7L525.5,-134.9L523.5,-136.5L522.4,-136.5L520.4,-135.1L520.5,-135.9L517.5,-136.2L514.7,-134.1L513.9,-130.1L512.5,-128.6L511.4,-128.5L511.6,-127.4L507.7,-125.0L505.3,-122.8L503.9,-119.7L504.5,-118.3L507.4,-117.1L507.2,-116.6L508.2,-118.2L509.2,-118.6L513.6,-117.2L513.3,-115.9L510.2,-113.5L510.0,-112.6L510.4,-108.9L511.3,-108.1L513.8,-107.8L514.4,-104.0L512.2,-102.4L510.6,-102.6L509.0,-104.0L512.2,-106.4L509.4,-106.2L508.0,-105.4L508.3,-104.2L504.9,-102.8L502.1,-97.7L502.6,-95.2L504.8,-92.5L505.0,-91.4L501.4,-89.4L498.8,-89.4L497.6,-90.1L494.8,-89.6L489.5,-86.6L487.8,-83.2L488.6,-81.2L488.2,-79.7L489.0,-78.8L489.1,-77.6L485.8,-78.5L480.9,-76.9L479.4,-75.7L478.0,-76.9L477.3,-76.8L477.0,-76.1L478.3,-75.4L477.3,-73.3L477.4,-71.3L474.5,-66.4L464.1,-59.2L463.5,-61.4L462.4,-62.7L461.2,-72.3L459.2,-75.4L455.1,-95.2L456.2,-102.6L458.3,-107.9L463.9,-111.8L464.9,-113.0L465.8,-114.5L465.6,-115.7L464.4,-116.9L464.7,-117.1L465.9,-117.6L469.5,-117.3L471.1,-119.2L475.8,-119.1L477.1,-120.4L482.9,-123.4L485.8,-125.8L487.8,-128.6L502.3,-137.3L504.7,-140.0L511.7,-142.7L514.6,-142.8L517.3,-143.8L516.1,-144.7L519.5,-147.4L519.3,-148.1L518.0,-148.4L518.6,-149.9L519.7,-150.5L520.1,-153.4L521.1,-155.5L524.1,-157.0L528.7,-156.2L528.8,-156.8L530.3,-156.8L530.2,-157.2L525.6,-157.9L522.7,-159.0L514.4,-157.7L513.7,-156.9L514.2,-156.2L513.1,-155.2L512.9,-153.4L512.0,-152.1L511.9,-151.2L513.8,-150.4L512.5,-149.3L511.8,-149.1L510.8,-150.5L507.2,-150.1L496.9,-144.2L494.8,-142.4L490.3,-141.4L491.8,-144.7L490.4,-144.9L487.3,-144.1L488.6,-145.6L488.1,-147.0L490.8,-150.0L491.3,-152.1L485.5,-150.6L482.8,-152.4L474.2,-150.9L469.6,-151.3L466.7,-150.2L463.6,-148.6L463.2,-146.8L458.8,-144.5L456.2,-141.8L450.5,-139.2L447.5,-136.8L446.5,-135.0L445.3,-134.6L445.2,-133.1L444.2,-132.0L445.2,-131.5L447.6,-132.1L450.5,-131.3L452.0,-130.6L452.0,-129.1L448.5,-128.7L446.6,-129.3L443.2,-128.1L440.8,-129.4L438.2,-129.3L437.6,-128.3L436.1,-128.2L434.1,-126.9L430.3,-127.8L428.5,-126.7L422.7,-126.4L421.1,-128.2L424.0,-128.9L427.7,-128.9L429.8,-129.4L429.1,-129.9L426.3,-130.2L422.8,-132.3L420.4,-132.5L418.8,-131.4L416.2,-131.7L417.6,-132.2L409.8,-134.0L408.1,-134.0L405.4,-132.9L406.5,-131.6L404.3,-131.5L403.4,-132.0L402.7,-131.3L403.0,-130.7L404.6,-130.6L404.3,-129.9L402.8,-129.7L401.0,-129.7L399.2,-131.0L396.3,-130.8L393.6,-129.8L386.1,-131.4L384.1,-129.4L382.4,-128.9L381.5,-129.2L380.1,-130.7L378.6,-131.0L360.5,-130.6L354.0,-128.8L351.6,-127.5L348.4,-124.5L343.7,-122.5L341.4,-120.8L339.6,-117.4L336.2,-116.3L332.4,-113.5L329.9,-112.7L328.2,-111.2L325.9,-110.2L318.5,-103.2L309.1,-98.4L306.9,-96.5L302.1,-94.5L300.0,-93.0L299.6,-92.1L299.9,-91.2L304.5,-90.0L311.7,-90.3L311.9,-88.8L310.8,-84.4L311.1,-83.3L311.7,-83.1L312.4,-83.6L314.4,-83.5L315.2,-85.2L314.0,-86.1L314.3,-86.5L316.1,-87.4L318.3,-87.4L315.8,-85.9L319.6,-84.5L314.9,-81.4L315.2,-81.1L320.5,-81.6L322.8,-82.7L323.8,-84.2L324.9,-84.7L325.2,-83.5L322.8,-81.0L324.3,-81.1L326.2,-83.9L326.3,-86.9L325.9,-87.5L331.0,-86.6L333.9,-87.4L337.5,-85.4L338.8,-83.4L341.4,-81.6L346.6,-79.0L346.9,-78.1L345.2,-76.6L342.6,-77.2L345.7,-75.1L345.7,-72.7L344.8,-71.7L347.5,-69.5L346.6,-67.3L343.3,-64.8L340.1,-57.8L339.8,-55.6L340.2,-52.1L340.9,-51.7L339.7,-50.2L340.1,-47.6L338.5,-43.0L339.0,-42.2L337.9,-40.6L337.0,-37.6L331.4,-33.0L328.5,-28.8L325.4,-26.0L323.4,-21.6L318.5,-15.5L311.7,-10.0L307.5,-5.7L306.7,-4.2L304.6,-3.2L301.6,1.4L299.0,4.0L290.4,8.9L283.9,11.1L282.6,10.1L281.6,10.3L280.4,9.6L277.4,9.5L277.4,5.8L275.3,7.5L274.0,7.7L275.1,6.1L274.6,5.9L272.9,6.8L268.6,11.7L265.2,11.4L266.1,12.6ZM357.2,-88.3L358.9,-86.2L358.4,-83.3L360.8,-79.0L361.5,-76.2L361.5,-73.2L360.6,-71.8L360.3,-68.7L361.4,-64.9L362.5,-63.5L365.3,-53.4L367.1,-50.1L368.8,-45.1L370.0,-42.9L372.1,-41.0L372.2,-39.4L371.5,-40.9L367.7,-44.3L365.3,-45.1L360.9,-44.7L359.3,-43.4L355.8,-34.6L355.7,-31.8L357.1,-29.3L358.6,-28.2L360.7,-23.8L362.8,-23.4L363.5,-20.1L362.4,-17.2L361.2,-21.8L357.8,-22.1L356.7,-23.0L355.8,-23.0L354.5,-21.7L352.0,-16.3L351.1,-17.1L350.1,-20.8L351.7,-26.7L351.2,-30.5L352.8,-34.1L352.5,-36.5L350.4,-40.4L352.5,-47.3L352.6,-52.8L351.9,-56.4L353.0,-59.5L353.0,-61.4L351.5,-63.9L349.3,-65.8L350.0,-66.2L348.9,-67.4L348.8,-70.3L350.3,-74.7L350.1,-79.4L351.2,-80.4L352.5,-80.7L353.9,-79.9L355.4,-80.3L355.9,-81.1L355.3,-81.5L356.6,-82.2L356.8,-84.1L354.0,-87.4L355.6,-87.4L356.7,-88.5ZM191.8,215.8L197.5,218.5L198.9,218.2L199.8,216.9L200.7,217.1L201.0,218.3L200.0,220.5L199.8,223.9L201.7,228.0L202.6,228.4L199.7,236.4L197.0,237.3L195.5,238.6L195.6,240.8L194.0,243.7L196.3,248.7L195.8,250.1L196.9,253.6L198.0,254.8L200.3,255.6L200.8,255.0L200.2,253.7L202.4,252.3L203.4,252.3L205.8,253.4L206.8,255.3L207.1,257.1L208.0,257.1L208.5,256.4L208.3,255.2L208.7,254.5L212.5,256.4L212.4,257.4L210.5,258.0L212.5,261.2L212.3,262.6L215.0,263.2L214.4,267.2L213.0,266.1L213.5,264.2L212.4,264.3L211.1,264.2L208.6,263.1L207.5,259.7L205.2,258.3L202.8,255.6L202.2,256.0L202.5,257.9L203.7,260.1L203.8,261.3L203.2,261.8L201.5,259.1L199.2,256.8L196.9,255.5L194.8,256.3L193.6,258.0L191.7,257.7L189.8,256.0L188.9,255.8L188.2,256.7L188.1,253.4L190.4,250.8L190.5,249.5L187.8,247.5L187.9,250.9L186.7,251.1L185.3,248.3L184.0,247.8L182.5,239.4L181.6,237.9L181.6,235.8L182.1,235.2L184.6,237.6L186.2,237.1L185.7,232.5L186.5,229.9L186.6,226.3L186.1,224.1L187.9,216.7L189.6,215.9ZM162.8,302.3L162.1,302.9L162.2,302.1L163.1,299.9L167.2,295.5L169.0,294.6L175.9,286.0L177.4,284.9L178.1,283.2L177.7,281.8L179.5,277.6L180.0,278.2L179.8,279.6L181.0,284.7L178.5,286.2L177.2,288.5L174.0,289.7L174.0,291.0L171.4,295.3L169.1,296.6L168.0,298.5ZM202.4,275.3L203.3,275.7L205.0,275.4L205.7,276.0L205.5,276.7L207.5,275.9L207.2,278.1L206.4,279.5L204.8,280.6L204.5,282.0L199.5,284.1L198.5,285.1L198.1,284.8L199.4,274.7L197.8,273.8L198.9,272.9ZM207.3,297.0L206.2,297.0L205.3,294.8L203.3,293.7L201.8,291.6L202.2,289.3L204.1,289.1L205.2,288.3L204.9,284.7L206.0,283.1L206.0,281.9L208.2,280.6L210.2,281.2L210.6,282.4L207.5,290.2L207.4,292.3L208.7,295.2ZM218.3,277.6L221.0,277.3L221.8,278.7L221.7,282.3L222.8,283.6L223.6,286.4L222.7,286.7L222.6,287.4L221.5,285.9L221.6,287.3L221.8,288.7L219.9,287.6L219.5,285.3L220.0,282.8L219.6,281.5L219.0,280.8L217.3,281.1L216.3,276.4L216.8,276.1ZM223.4,267.5L224.0,269.3L225.6,270.4L225.0,272.4L225.3,275.4L226.2,277.8L225.9,278.5L227.3,279.9L226.4,279.4L224.9,279.5L223.3,279.3L221.8,277.6L220.9,275.8L221.5,274.0L220.7,273.9L219.1,271.8L217.3,270.7L216.2,267.2ZM188.7,259.4L190.8,259.4L191.9,260.3L192.5,259.8L195.1,262.7L194.6,264.1L195.1,266.6L194.0,269.4L192.2,270.0L189.4,265.6L188.6,262.4L187.2,261.3L186.8,260.2L185.9,260.0L186.4,259.1ZM229.2,294.8L230.7,295.1L230.7,296.4L231.5,297.9L231.6,298.8L230.3,300.9L232.0,301.9L232.7,304.3L232.5,307.4L233.5,308.7L233.6,312.4L232.5,314.4L230.7,315.8L231.0,316.8L230.6,320.4L227.9,311.7L226.8,312.3L224.5,317.1L226.0,319.0L226.7,321.1L226.7,323.2L225.0,325.9L224.2,326.4L223.8,326.1L223.3,322.4L221.4,324.1L215.5,321.0L214.5,319.6L213.8,315.1L215.5,311.1L213.7,308.9L211.4,307.5L210.5,307.4L209.9,308.1L209.3,311.0L207.6,310.0L207.0,308.5L206.2,309.9L205.1,310.0L204.7,308.4L203.3,308.0L202.3,309.1L199.7,314.9L198.8,315.1L197.9,313.9L198.1,312.8L199.0,311.4L199.6,307.6L201.2,305.8L205.6,304.7L206.2,304.1L206.7,302.3L208.9,301.2L209.6,300.0L211.5,300.7L212.8,302.3L213.0,304.4L212.0,305.5L215.1,304.3L217.0,300.9L218.7,301.6L219.5,301.2L219.9,298.6L220.6,297.7L222.6,298.6L223.2,297.3L225.4,297.4L225.6,296.3L224.7,291.8L225.2,291.1L228.3,293.1ZM209.1,293.7L208.8,293.9L208.7,293.3L209.2,289.3L211.7,285.0L214.2,278.2L214.0,285.6L211.6,287.9L210.0,292.5ZM198.0,213.4L197.3,213.8L197.6,213.0L198.2,212.4L198.5,212.9ZM195.0,209.4L195.1,210.2L193.9,209.7L194.0,209.1ZM198.3,200.9L198.0,200.9L198.2,200.1L198.9,200.0ZM197.7,197.4L197.3,198.0L197.1,197.7L197.5,196.8ZM192.2,322.4L192.6,323.0L194.2,323.3L193.2,324.1L192.7,323.5L190.5,323.9L190.0,323.4L191.3,322.2ZM161.0,307.0L160.7,307.6L160.2,305.9L161.0,305.4ZM182.7,284.9L181.8,285.1L181.6,284.3L182.2,283.6L183.4,284.2ZM184.1,270.6L185.1,270.1L186.0,271.3L185.8,271.9L184.1,272.1L183.0,271.4L182.3,270.3L182.6,269.3ZM183.7,274.5L182.9,274.6L182.3,272.4L182.7,272.2L183.9,273.2ZM203.6,285.0L202.7,285.4L202.6,284.8L203.4,283.1L204.0,282.7L204.3,283.4ZM218.4,290.8L216.7,292.1L213.4,292.2L212.5,290.6L213.2,289.7L215.2,287.9L216.5,287.6L218.3,288.8ZM185.3,329.3L184.8,330.1L184.3,329.7L182.4,331.0L182.0,330.4L184.6,328.7ZM199.3,319.4L198.3,319.5L197.4,317.4L199.1,316.7L200.8,317.6L201.1,317.9ZM229.6,291.0L229.2,289.6L229.8,288.5L230.2,289.5L230.5,290.7ZM226.8,289.7L225.3,288.0L226.0,285.9L226.5,285.3L226.8,285.7ZM185.4,257.1L185.4,257.7L184.1,256.6L184.3,256.2ZM198.0,258.9L199.5,259.6L199.1,261.2L198.7,261.8L197.3,260.7L197.6,258.7ZM199.4,269.0L198.7,271.1L198.2,268.7L198.6,266.9L199.7,266.5ZM203.6,269.4L203.2,269.6L201.9,268.1L203.2,267.8L203.8,268.4ZM208.4,264.7L209.1,266.0L206.1,263.2L205.9,262.6L206.6,262.5ZM212.2,268.1L212.2,268.9L211.0,267.2L211.0,266.3L211.7,266.8ZM211.7,269.6L213.2,270.6L214.2,272.3L214.3,274.1L211.8,272.4L209.9,270.2L207.5,272.6L208.3,268.6L208.1,267.0L210.5,268.2ZM216.6,258.1L216.4,258.7L215.3,259.0L214.3,258.4L214.9,255.2L215.6,254.3L217.1,256.1ZM200.0,254.6L198.2,253.5L198.3,253.1ZM198.9,246.5L198.4,247.4L198.6,249.4L198.0,249.3L197.4,246.2ZM223.7,289.2L222.6,287.7L223.3,288.0ZM205.8,311.0L205.8,311.4L204.8,311.8L204.9,310.9ZM227.5,314.8L227.4,315.3L226.8,313.9L227.0,312.9L227.5,313.4ZM218.6,276.3L217.2,276.0L216.7,274.8L217.3,274.6L218.2,275.1ZM220.1,296.3L219.9,296.8L219.0,296.4L218.9,295.6L219.5,295.4ZM192.9,211.8L192.9,212.4L192.4,211.6L192.6,210.9ZM182.3,276.0L182.2,277.2L181.8,277.0L181.3,276.5ZM212.1,278.1L212.5,279.2L211.9,279.2ZM201.0,267.5L200.6,267.7L200.5,267.3L200.8,267.0ZM220.4,275.4L220.1,275.8L219.6,274.9L219.5,274.4L219.9,274.7ZM163.1,304.2L162.6,304.4L162.6,303.3ZM211.6,295.5L211.7,296.4L211.0,296.6L210.0,295.9L211.3,295.1ZM294.9,311.3L294.4,311.4L294.2,310.8L294.9,309.3L295.3,308.4L295.3,308.9ZM-60.3,137.1L-60.0,138.1L-61.2,143.4L-59.9,146.1L-60.7,149.3L-61.2,149.7L-62.3,149.3L-65.6,149.4L-66.6,149.9L-68.1,149.3L-68.6,148.3L-71.0,149.3L-76.3,147.5L-78.0,147.9L-79.1,146.0L-82.6,146.5L-83.1,145.7L-86.4,144.2L-87.0,142.0L-91.0,140.3L-93.0,141.3L-95.9,140.5L-97.1,141.3L-101.4,140.1L-101.8,138.8L-103.5,138.8L-107.1,136.7L-108.1,137.1L-117.8,130.5L-118.6,130.9L-119.8,130.3L-121.8,128.6L-120.5,125.8L-120.3,123.9L-119.2,121.3L-115.3,117.5L-113.2,118.7L-111.4,116.1L-109.7,115.7L-106.6,116.2L-105.3,118.5L-100.4,121.7L-98.1,122.3L-94.9,125.9L-92.2,125.1L-90.9,125.6L-89.9,128.2L-85.6,131.2L-82.8,131.0L-83.1,133.3L-78.9,133.6L-76.4,136.8L-75.4,135.0L-73.3,136.6L-72.4,136.3L-71.7,135.1L-67.7,137.4ZM-62.5,-43.9L-60.2,-44.7L-59.6,-46.3L-54.8,-46.3L-54.2,-47.1L-53.4,-46.5L-52.6,-46.8L-51.6,-47.8L-50.5,-47.7L-48.5,-48.6L-48.6,-50.2L-46.0,-50.9L-45.4,-51.8L-40.8,-52.9L-38.0,-54.5L-35.0,-55.0L-32.1,-56.9L-29.1,-57.0L-27.8,-58.3L-25.8,-56.9L-24.6,-57.6L-23.4,-57.6L-22.1,-56.1L-13.4,-55.7L-12.6,-52.9L-10.6,-51.2L-8.2,-51.4L-6.8,-50.5L-3.6,-50.2L-1.6,-51.1L-0.5,-50.7L0.5,-51.0L2.4,-50.2L7.5,-50.0L9.2,-48.7L10.4,-48.8L12.1,-50.2L15.3,-51.1L17.2,-53.6L17.4,-55.5L15.5,-56.5L14.0,-59.9L15.6,-63.3L17.0,-63.8L18.0,-65.6L20.2,-66.3L22.1,-69.0L28.4,-66.9L30.0,-65.9L34.1,-65.7L41.1,-63.3L46.7,-62.5L47.5,-58.1L48.3,-57.1L48.0,-56.0L51.1,-54.3L54.7,-53.5L55.8,-52.7L58.3,-52.2L61.7,-52.3L64.7,-53.6L71.7,-55.0L78.1,-53.6L81.8,-53.7L85.8,-50.9L91.0,-50.6L91.4,-48.1L96.4,-45.2L101.1,-45.3L112.4,-43.7L117.2,-45.5L122.8,-46.1L126.0,-47.0L128.4,-47.0L130.3,-47.7L131.1,-49.3L134.3,-51.1L139.8,-53.3L143.2,-53.0L148.4,-50.1L150.6,-50.0L153.8,-51.1L155.5,-50.8L158.0,-49.5L153.0,-40.6L151.4,-38.9L151.2,-36.1L149.2,-35.1L149.9,-32.9L152.0,-31.3L154.6,-32.8L155.7,-32.7L159.7,-32.8L163.1,-31.0L166.3,-33.9L169.2,-34.2L171.9,-33.9L173.9,-31.9L176.3,-31.1L177.0,-30.0L181.1,-26.8L182.6,-24.3L182.3,-22.7L181.1,-22.2L178.2,-22.2L174.5,-23.5L173.6,-22.9L170.4,-23.1L168.6,-22.7L166.1,-21.4L163.8,-22.0L163.0,-20.1L159.4,-20.3L157.1,-19.5L154.4,-16.0L154.3,-14.8L150.4,-12.4L141.8,-11.8L140.7,-10.2L138.1,-8.3L134.4,-6.3L127.6,-7.5L125.4,-9.0L121.5,-9.0L119.3,-7.0L117.7,-3.1L121.0,0.6L121.7,2.5L118.8,4.3L114.7,5.6L110.0,10.4L101.9,13.3L93.0,13.2L82.3,14.5L70.3,19.2L68.6,20.4L64.9,19.9L64.9,18.0L58.9,19.1L54.0,16.9L47.0,15.7L45.6,15.2L43.2,12.7L42.0,12.4L30.4,11.2L26.5,12.2L9.2,10.3L2.9,10.9L2.3,9.1L-1.1,6.2L-3.6,0.4L-5.2,-0.3L-5.0,-2.4L-7.3,-2.2L-9.8,-3.0L-13.8,-5.5L-15.6,-5.7L-19.0,-8.0L-24.5,-8.8L-33.7,-9.2L-37.8,-10.3L-39.1,-10.2L-40.8,-13.0L-40.4,-14.7L-38.2,-17.3L-38.9,-19.3L-38.0,-21.8L-39.2,-25.1L-40.4,-25.5L-42.0,-27.9L-43.3,-31.1L-45.0,-31.8L-45.6,-33.0L-47.5,-32.5L-49.8,-34.2L-53.1,-34.0L-56.7,-35.9L-57.2,-37.3L-61.3,-38.7L-60.7,-40.0L-63.1,-41.5L-62.1,-42.5ZM31.5,319.2L31.9,317.3L32.6,317.2L33.2,318.3L36.3,319.1L37.2,320.9L38.6,320.9L38.8,323.4L38.1,324.9L39.1,326.1L40.2,324.8L42.4,323.8L43.4,324.9L44.9,324.5L46.6,320.9L48.4,321.5L49.9,324.2L54.2,328.0L56.7,332.8L57.1,336.7L56.2,342.0L56.9,344.1L56.8,345.3L57.2,349.9L59.7,352.1L62.8,359.4L63.3,361.4L62.5,362.4L61.0,360.2L61.1,361.6L58.8,361.7L57.1,362.7L56.2,360.9L51.4,358.2L50.0,356.6L47.0,354.9L40.5,349.5L40.9,348.4L40.5,346.3L36.0,340.3L36.6,339.8L35.3,336.8L35.3,334.5L33.3,326.5L33.2,323.1ZM164.8,338.5L161.2,337.1L156.7,336.8L156.0,337.4L154.6,336.9L153.0,337.5L151.5,337.2L150.3,338.4L149.5,340.5L149.5,344.7L148.6,348.2L147.0,348.3L145.8,349.9L145.8,351.6L146.5,352.6L143.5,354.9L143.9,357.2L142.9,358.3L141.7,361.5L136.8,361.8L134.6,363.5L129.9,361.8L129.4,360.7L125.9,360.7L123.7,361.8L122.8,364.3L120.5,365.5L115.4,365.1L110.8,366.7L109.4,365.5L104.3,360.3L103.4,357.9L104.1,356.8L104.8,358.2L105.9,359.0L107.8,359.6L109.6,359.4L112.1,360.8L113.8,361.0L115.3,362.1L116.3,362.1L114.8,360.8L115.8,359.2L116.6,355.8L116.2,353.8L116.4,353.3L118.0,353.8L118.0,351.6L119.4,350.0L129.8,347.1L136.9,337.9L137.4,335.4L137.9,335.0L139.2,335.9L140.0,337.8L140.7,337.8L141.9,339.6L142.5,339.7L143.4,338.6L143.9,336.7L143.2,333.9L145.4,332.4L146.0,336.7L147.6,336.9L146.2,332.4L148.0,332.1L149.4,330.7L149.6,329.8L148.7,329.3L148.4,328.0L149.8,326.4L150.8,327.0L151.9,326.3L153.9,321.9L156.6,318.6L158.7,314.6L159.3,316.0L158.8,317.8L159.8,317.4L161.4,314.8L162.4,315.2L162.7,317.2L165.4,319.0L165.7,320.7L165.1,321.3L165.4,323.0L164.3,324.0L166.7,323.5L168.1,322.5L169.0,324.2L167.6,324.8L167.9,325.5L170.8,324.6L172.0,325.3L172.6,326.5L177.7,328.4L177.6,329.8L176.7,330.6L173.2,331.8L170.1,331.6L169.5,333.0L172.4,335.7L172.3,336.8L168.1,337.9L165.8,337.1ZM62.8,350.8L62.1,350.5L62.5,349.6ZM32.8,329.0L32.0,329.1L32.1,327.7L33.1,328.0ZM29.4,319.0L29.9,320.0L28.6,320.8L27.9,319.4ZM161.5,313.1L161.1,313.5L160.9,313.0L161.6,311.6L162.5,311.5L162.6,312.0L162.3,312.9ZM40.6,348.6L40.2,348.8L40.3,348.2L40.6,347.9ZM117.6,353.5L117.0,353.3L117.1,350.5ZM167.2,338.4L165.5,338.3L165.8,337.8ZM46.8,183.8L50.3,187.8L50.9,189.8L51.5,189.7L52.1,188.6L53.1,189.7L52.3,193.2L54.3,196.4L58.3,198.1L61.9,196.0L65.6,198.5L63.9,200.2L65.8,200.8L66.5,202.3L67.6,202.3L68.2,203.8L65.6,207.2L61.4,206.8L61.6,208.4L60.3,209.9L66.6,214.2L69.9,215.5L69.6,217.6L71.3,219.4L72.3,219.7L74.0,223.2L80.2,229.9L80.6,232.5L81.4,233.8L82.0,234.2L82.9,233.6L83.5,235.0L87.1,237.6L87.0,238.4L85.3,239.7L89.0,244.3L87.7,246.7L88.0,249.0L87.2,250.2L86.3,250.0L84.9,251.5L82.7,252.3L80.2,250.1L79.1,251.1L78.1,251.0L77.7,251.8L76.2,252.1L77.4,254.6L76.9,255.7L75.7,255.6L74.4,254.3L72.8,253.7L71.4,254.1L70.3,252.8L70.2,252.1L70.6,251.9L72.6,250.0L72.9,247.1L72.5,244.3L73.7,240.9L71.8,239.4L71.9,238.1L69.1,236.6L67.4,234.0L66.8,230.5L67.4,226.9L66.8,225.6L64.4,223.6L60.7,218.3L55.7,217.5L55.5,218.6L54.6,219.1L53.9,220.8L52.0,221.5L50.9,222.5L50.1,221.3L46.6,219.2L44.1,220.7L43.5,221.9L39.5,225.3L37.5,224.5L39.3,219.8L38.6,217.2L40.4,212.7L39.8,207.8L37.9,207.3L35.3,208.3L33.8,207.0L33.6,206.1L34.7,202.9L33.0,200.7L31.4,201.8L32.0,199.0L33.1,197.2L35.3,196.7L34.5,196.2L34.7,195.6L35.9,193.4L38.8,191.5L39.3,190.7L40.1,193.8L42.3,193.5L43.6,194.2L44.3,193.7L43.7,192.8L43.8,188.5L42.8,187.1L42.2,184.8L43.8,182.8L44.6,183.7L46.0,183.3ZM-191.4,14.9L-193.2,15.6L-194.2,16.7L-195.5,16.3L-197.9,18.5L-205.1,21.9L-209.5,26.6L-209.5,28.7L-210.7,28.7L-213.5,27.1L-213.0,25.3L-214.4,23.8L-223.8,24.0L-225.4,17.0L-229.1,17.0L-228.4,8.6L-230.7,9.5L-233.0,5.9L-237.6,2.4L-241.1,3.8L-250.5,3.2L-259.8,4.3L-266.2,-1.4L-267.3,-3.3L-286.1,-13.2L-305.8,-8.5L-305.8,22.8L-309.9,23.0L-314.3,17.3L-319.9,14.2L-328.1,15.7L-332.4,18.9L-332.6,16.1L-331.4,13.4L-331.6,10.5L-332.4,10.0L-336.9,9.6L-339.1,7.2L-341.5,7.0L-341.5,4.4L-343.3,2.1L-345.1,-1.6L-348.9,-2.8L-349.5,-3.9L-349.2,-4.9L-348.3,-5.3L-344.9,-5.3L-342.4,-4.3L-339.6,-4.5L-341.4,-5.3L-343.7,-7.8L-340.6,-11.5L-332.9,-11.9L-327.0,-11.3L-330.2,-13.4L-327.5,-18.6L-328.0,-21.0L-327.2,-22.7L-328.0,-24.3L-329.2,-25.1L-332.5,-25.4L-335.1,-24.0L-338.1,-24.9L-339.1,-25.8L-342.4,-26.4L-347.0,-24.5L-348.2,-24.5L-352.3,-22.1L-356.4,-21.4L-356.3,-20.5L-356.9,-20.7L-357.5,-20.3L-357.3,-19.9L-362.2,-21.9L-362.8,-22.5L-362.4,-23.4L-360.0,-23.0L-359.4,-23.6L-365.4,-31.5L-370.7,-32.3L-372.1,-31.8L-373.6,-33.6L-373.9,-36.0L-376.9,-37.5L-377.3,-38.9L-376.6,-40.8L-374.1,-43.8L-375.9,-45.6L-374.4,-49.7L-372.1,-51.5L-371.9,-53.3L-369.8,-54.5L-367.9,-53.4L-364.1,-49.8L-363.4,-49.5L-360.9,-50.4L-360.3,-51.1L-361.9,-56.2L-360.5,-56.1L-356.6,-58.2L-355.3,-60.2L-352.8,-60.6L-349.1,-62.2L-345.4,-65.7L-342.5,-65.0L-341.2,-63.5L-339.1,-63.6L-334.5,-65.5L-331.8,-63.6L-325.9,-63.6L-319.8,-59.8L-317.6,-57.6L-317.3,-56.0L-316.6,-55.6L-315.9,-56.6L-316.7,-59.0L-316.0,-59.6L-310.5,-56.7L-308.0,-56.0L-305.2,-57.1L-304.5,-58.2L-301.8,-59.7L-300.9,-59.3L-297.9,-60.1L-294.6,-58.6L-293.0,-58.9L-291.5,-60.3L-287.6,-60.0L-283.6,-56.9L-279.2,-56.3L-278.7,-55.2L-276.5,-55.9L-274.6,-58.2L-271.8,-56.8L-267.8,-56.9L-264.4,-58.3L-262.9,-61.5L-263.2,-62.3L-264.6,-63.3L-271.5,-65.0L-272.1,-66.1L-274.8,-67.4L-267.9,-70.4L-267.5,-71.4L-268.8,-72.8L-268.9,-74.3L-267.0,-76.3L-259.9,-76.0L-259.1,-76.5L-259.6,-77.4L-266.1,-79.4L-265.6,-80.3L-263.3,-80.9L-263.8,-81.4L-265.5,-81.2L-267.5,-81.8L-266.5,-82.9L-266.3,-84.7L-264.8,-85.4L-260.3,-84.5L-240.9,-88.3L-237.4,-88.4L-236.2,-87.9L-235.0,-89.4L-233.2,-90.3L-229.8,-90.9L-227.5,-90.7L-212.7,-93.3L-212.0,-93.9L-212.3,-94.9L-209.9,-95.2L-206.4,-96.8L-202.5,-96.5L-197.2,-94.9L-193.0,-96.1L-191.7,-94.6L-189.6,-90.1L-189.8,-88.1L-190.6,-87.2L-190.3,-86.8L-188.4,-86.3L-183.3,-86.7L-181.9,-87.8L-180.4,-86.0L-179.9,-84.5L-178.9,-85.0L-178.6,-86.1L-176.4,-85.9L-174.0,-84.6L-170.6,-85.5L-170.5,-84.4L-173.4,-82.5L-173.5,-81.6L-172.6,-80.3L-169.2,-81.8L-166.5,-81.4L-165.4,-80.6L-164.6,-82.0L-161.7,-83.5L-158.8,-84.1L-157.6,-84.7L-157.1,-85.8L-146.4,-88.8L-147.8,-86.2L-149.6,-86.3L-149.1,-85.2L-138.6,-78.8L-126.3,-63.7L-122.3,-57.6L-121.7,-57.4L-121.6,-58.1L-120.6,-58.8L-119.0,-59.0L-118.8,-61.1L-116.6,-62.0L-115.5,-61.9L-114.9,-61.1L-113.6,-61.1L-114.1,-59.2L-111.6,-59.1L-111.0,-57.3L-103.2,-57.2L-101.1,-58.6L-96.6,-59.5L-92.1,-57.6L-89.2,-53.0L-84.1,-51.5L-84.0,-50.1L-82.3,-47.7L-75.0,-46.7L-71.7,-49.0L-70.8,-48.9L-71.6,-47.3L-70.2,-46.6L-68.8,-44.9L-67.0,-44.3L-66.3,-43.2L-68.4,-43.4L-70.2,-42.9L-70.8,-42.0L-70.9,-39.9L-72.2,-38.5L-78.3,-37.3L-80.0,-33.3L-79.0,-27.7L-80.3,-26.0L-82.3,-25.8L-85.7,-24.1L-86.6,-25.3L-91.6,-25.2L-99.1,-27.1L-104.5,-13.6L-104.5,-12.9L-102.3,-12.1L-102.2,-11.0L-103.0,-9.6L-104.9,-10.4L-107.4,-9.9L-109.3,-11.5L-115.7,-9.6L-121.8,-8.6L-123.2,-7.5L-122.3,-6.8L-120.3,-6.9L-118.6,-6.1L-119.5,-4.7L-119.5,-0.8L-117.3,3.7L-117.1,5.9L-116.2,7.1L-116.5,7.6L-117.5,7.4L-119.3,8.1L-119.3,8.7L-118.1,9.6L-120.7,10.8L-121.0,11.7L-120.3,15.0L-120.6,15.4L-122.8,13.5L-126.6,12.9L-128.9,10.4L-145.2,8.7L-154.0,9.0L-155.6,10.1L-157.6,9.9L-161.8,8.7L-166.5,6.5L-168.5,6.8L-171.5,8.5L-172.5,12.0L-171.9,13.5L-181.2,10.6L-185.2,10.0L-189.0,10.8L-191.8,14.1ZM285.5,66.3L284.5,66.5L284.1,66.0L284.9,65.1ZM323.5,52.5L322.6,52.5L323.3,51.3L322.8,51.0L322.8,50.3L324.7,48.3L324.3,50.4L325.3,50.4L324.7,51.8ZM297.4,82.6L295.9,83.2L295.4,82.5L296.1,81.9L298.0,80.4L297.2,81.6ZM264.5,116.8L263.2,116.8L262.7,115.7L263.5,115.0L264.7,115.7ZM267.1,115.6L266.4,115.7L266.4,115.2L267.5,112.3L268.0,112.3ZM260.4,100.0L259.8,100.4L259.6,99.1L259.8,97.6L261.0,97.4L261.3,99.1ZM254.2,84.0L253.8,84.3L253.5,83.8L253.8,82.3L254.7,82.6ZM255.1,82.0L254.9,82.4L254.1,81.9L254.6,79.8L255.6,79.2L255.8,79.5ZM249.6,95.3L250.9,95.5L251.3,96.5L249.8,96.9ZM262.7,98.4L261.6,98.1L263.3,97.6ZM344.3,-11.3L344.0,-10.8L343.6,-12.5L344.2,-12.3ZM346.0,-9.5L344.9,-9.8L345.3,-10.6L346.2,-10.0ZM332.2,16.3L331.8,15.3L332.8,15.0ZM293.0,80.9L292.2,81.4L292.1,81.0L291.7,80.6L292.8,80.5ZM332.0,78.8L331.9,79.2L331.3,78.9L331.3,78.4ZM252.7,94.9L252.1,93.9L253.0,92.4L253.5,93.6ZM255.9,91.6L254.9,92.0L255.3,91.3L256.5,90.4ZM258.2,87.1L257.3,87.2L257.5,86.5L258.0,86.5ZM279.4,84.0L279.2,84.4L278.6,84.3L278.8,84.0L279.2,83.5ZM277.1,85.5L278.4,85.7L277.8,86.3L276.6,86.1L276.6,85.4ZM257.6,104.9L257.5,104.4L258.1,103.8ZM365.4,-1.0L367.5,-0.9L370.4,0.4L372.2,0.6L377.2,-2.8L375.3,1.1L375.4,2.9L377.0,5.9L378.1,6.1L379.5,5.2L380.7,5.2L378.2,7.0L377.0,7.0L373.7,8.5L371.5,9.0L368.2,8.7L366.5,9.5L362.3,13.4L360.9,17.0L355.3,14.8L350.3,12.1L346.9,12.4L343.7,14.1L341.6,12.3L339.8,12.2L338.8,13.3L338.6,14.5L340.2,15.9L341.8,16.0L344.9,18.7L343.8,19.2L341.2,18.6L339.1,21.1L336.8,21.8L336.1,20.6L337.0,17.7L336.6,16.4L334.9,14.6L334.8,13.2L335.3,11.5L339.5,8.9L339.9,8.1L339.1,5.9L339.9,5.6L342.4,6.8L344.8,7.0L346.1,6.8L346.6,6.1L346.8,3.0L348.7,-0.2L349.6,-4.1L349.8,-6.1L348.2,-9.8L348.9,-11.9L351.0,-12.8L358.2,-5.7ZM268.7,88.4L270.2,88.6L271.8,88.0L272.7,88.4L272.8,89.2L271.5,91.2L274.2,91.3L273.9,92.5L275.1,94.2L272.4,98.0L270.0,107.1L267.9,106.8L268.1,108.3L265.0,110.4L265.8,108.2L265.1,105.6L265.8,104.8L264.8,104.4L264.0,105.7L263.9,107.1L264.7,108.2L264.2,109.0L261.7,108.2L260.9,107.0L262.1,106.4L261.4,103.3L261.2,101.2L262.8,100.1L264.6,96.7L263.6,96.4L264.1,95.8L263.9,94.9L262.7,92.7L261.6,92.0L260.7,92.6L261.1,94.8L262.2,94.8L262.4,96.0L261.6,96.2L260.2,95.4L258.0,97.1L258.4,95.8L257.4,94.6L257.3,93.0L258.4,94.4L259.7,94.8L259.0,93.3L256.5,91.5L256.8,90.6L258.6,90.8L258.4,89.8L262.5,88.1L263.4,86.4L265.2,85.6L267.0,86.1L267.8,87.8ZM293.0,82.8L295.2,83.1L295.5,86.3L296.0,86.5L293.2,88.3L291.7,91.4L290.0,89.7L287.5,89.2L284.9,90.4L282.5,94.8L281.2,95.6L279.9,95.5L280.4,94.3L278.8,94.2L278.3,93.0L278.9,91.7L278.9,91.0L278.1,90.7L278.2,89.8L275.3,90.6L279.9,87.6L281.0,85.1L282.2,84.2L284.1,85.6L287.1,84.9L287.6,83.9L287.3,82.9L289.9,82.0ZM345.5,22.3L347.3,22.1L347.1,27.9L347.3,28.8L349.9,31.5L351.4,35.8L351.3,38.9L350.7,41.6L348.8,42.7L348.0,44.5L347.4,47.6L344.6,48.1L343.5,49.7L343.2,51.4L344.1,55.5L343.8,58.5L341.7,61.8L340.5,66.0L340.9,67.5L342.8,70.3L341.0,70.9L339.6,72.2L338.9,75.0L335.5,77.4L335.0,77.2L334.8,74.0L336.9,71.5L336.1,70.8L334.9,70.9L333.5,73.0L334.2,74.4L333.7,75.2L332.1,74.0L330.4,74.1L329.5,75.2L329.2,77.9L327.3,79.7L326.7,79.1L327.0,76.7L327.8,76.3L326.4,75.4L325.3,75.8L322.3,79.9L317.4,79.4L313.7,80.0L315.4,79.0L315.3,78.4L313.5,78.5L312.9,77.9L312.8,78.9L312.2,78.8L312.4,76.2L311.7,76.1L310.9,76.6L309.7,79.2L312.3,81.3L312.1,82.2L308.1,83.5L304.9,88.7L303.3,89.4L301.4,88.8L298.9,84.9L298.7,82.5L300.9,80.7L301.1,79.8L300.7,79.4L298.3,79.6L294.8,78.4L292.2,78.9L290.1,80.5L280.9,82.8L278.2,82.0L277.4,82.2L276.2,86.4L273.0,84.6L269.2,85.4L267.9,84.8L266.8,85.2L266.5,82.8L267.0,82.0L270.1,81.5L277.0,76.3L280.4,72.9L282.1,72.2L284.7,71.8L285.5,72.6L290.2,72.2L299.3,70.1L300.0,70.4L299.7,71.5L300.4,72.0L304.0,71.8L306.3,70.0L305.6,68.1L306.1,67.0L310.9,61.7L311.1,57.8L312.0,56.3L315.7,55.1L315.8,55.8L312.5,58.5L313.2,59.3L313.4,60.9L315.1,61.6L315.8,61.5L317.2,59.9L323.3,57.6L325.7,55.5L327.6,52.3L331.3,50.2L332.5,46.7L334.6,43.5L336.6,37.2L336.1,35.2L334.2,34.7L335.4,33.8L336.2,31.8L335.6,29.5L335.9,28.3L338.3,26.8L338.6,24.1L339.1,23.5L340.9,23.8L341.3,26.4L341.9,26.9L343.3,26.0L344.7,26.5L345.5,25.6L345.7,23.8L345.3,23.4L342.3,24.3L342.3,23.3L343.3,21.2ZM216.2,165.6L215.3,167.2L214.6,166.3L214.8,166.0L215.5,166.1L216.2,165.0ZM213.1,167.6L211.5,167.6L212.0,167.0L212.2,166.5L213.4,166.9ZM224.9,163.7L223.6,163.8L223.7,162.6ZM246.4,147.5L243.5,149.2L243.7,150.2L242.9,150.8L243.0,151.7L242.4,152.2L241.8,152.2L241.8,151.7L242.4,150.4L242.4,149.3L244.1,148.0L243.8,147.1L245.2,147.3L246.4,145.5L247.0,146.1ZM252.1,138.4L251.3,138.3L251.4,136.9ZM255.6,134.2L254.9,134.9L253.4,133.9L256.4,132.3L257.4,131.6L257.5,132.3L255.6,133.7ZM254.6,135.1L253.9,135.1L253.6,134.4ZM334.9,93.0L334.4,92.6L335.2,92.7ZM11.3,361.5L14.8,365.7L13.9,369.2L12.9,368.9L12.3,366.9L10.7,366.0L9.9,363.9L8.2,361.9L9.5,361.9L10.4,360.9ZM24.2,389.1L22.0,388.1L19.9,384.2L20.4,382.2L21.9,381.8L22.4,382.1L25.0,387.8L25.0,388.8ZM76.7,388.2L79.2,395.0L82.7,395.9L81.8,396.6L81.1,398.6L81.5,400.1L76.4,398.0L75.7,396.5L75.9,395.2L74.9,393.6L74.8,392.5L74.1,392.1L73.0,391.7L71.0,392.0L69.8,391.4L69.8,390.8L71.6,389.4L71.9,387.7L73.2,387.0L74.1,388.7L74.5,388.1L74.3,387.0L75.0,386.8L76.3,387.1ZM94.1,342.6L93.0,342.9L92.4,342.5L93.5,341.6L92.0,340.9L91.7,339.6L93.6,338.2L94.7,340.1ZM300.9,379.5L304.8,380.2L308.5,383.3L307.9,384.0L306.4,384.3L304.4,383.5L303.7,381.0L302.9,381.5L301.2,380.5ZM301.6,387.5L311.8,388.9L312.4,389.3L310.3,389.9L307.3,390.1L301.7,388.2ZM266.0,374.0L269.5,375.3L270.0,376.5L269.1,377.2L267.4,377.1L265.0,374.7L264.5,374.7L264.6,375.2L265.9,376.6L266.6,376.9L266.6,377.5L265.5,377.8L265.0,376.5L264.0,377.1L263.5,376.3L261.6,375.8L262.5,374.6ZM247.9,356.6L246.7,356.7L246.1,354.5L248.1,352.2L249.1,351.9L249.7,353.0L249.2,355.1ZM245.6,388.1L241.1,388.7L239.8,388.0L239.9,387.5L240.3,386.4L241.8,385.3L243.7,386.2ZM229.6,394.8L229.0,394.5L228.2,391.3L228.6,390.8L229.1,391.1ZM229.4,389.2L231.7,389.5L231.4,389.8L224.9,390.5L224.5,389.7L225.0,389.4ZM221.3,388.5L222.3,388.8L222.7,388.4L223.1,389.1L224.0,389.4L224.0,390.0L222.6,390.1L221.6,390.5L220.3,390.1L217.1,391.0L216.4,389.8L217.1,388.1L219.0,387.9ZM267.4,385.2L266.2,385.2L265.7,384.7L264.9,382.4L266.6,381.6L267.6,381.8ZM3.8,329.6L6.4,329.2L11.8,329.8L14.6,332.5L15.3,334.4L17.2,336.5L17.1,338.3L17.6,339.2L20.3,340.6L21.2,342.0L28.5,346.9L34.6,355.4L37.3,357.4L36.9,354.9L37.7,354.5L38.6,354.8L40.5,356.9L41.8,359.6L44.2,360.2L46.0,361.7L47.7,365.6L48.8,366.8L53.1,368.4L54.0,369.8L53.5,370.5L50.0,372.2L52.7,371.6L56.1,369.6L57.1,369.9L58.6,371.5L59.5,373.6L56.8,375.6L56.6,377.1L57.4,378.0L56.8,378.9L57.5,380.4L59.0,381.5L62.6,383.0L63.9,382.8L65.1,389.5L65.5,390.3L67.6,391.8L67.4,393.0L66.1,394.7L66.1,396.1L69.0,394.0L71.8,394.2L73.2,395.2L76.8,400.9L75.2,404.7L75.9,406.6L75.1,409.4L75.5,416.6L75.0,422.3L74.5,423.5L73.9,423.4L71.4,421.2L69.4,422.8L66.0,420.9L66.3,424.1L65.7,424.2L64.8,423.3L59.8,417.2L49.9,409.3L46.8,404.6L42.6,400.9L41.0,397.9L39.1,396.0L37.4,393.1L37.1,390.4L34.3,385.0L32.9,381.0L29.5,376.7L28.0,373.6L24.1,371.0L21.4,361.3L19.8,358.2L15.9,355.3L13.0,354.0L12.2,349.8L10.6,348.7L7.4,343.6L6.1,342.5L3.4,341.6L-3.9,333.5L-6.1,329.1L-5.5,326.5L-2.0,326.6L1.0,329.0ZM220.7,365.5L217.2,370.0L212.0,371.4L208.3,371.2L206.2,369.8L197.4,370.3L194.9,369.8L191.1,370.2L187.8,369.5L185.7,370.5L184.0,373.7L183.6,377.7L185.2,381.4L187.3,382.8L188.5,385.6L191.3,386.0L192.1,385.4L195.4,381.0L196.6,381.9L198.4,381.9L200.8,380.4L205.4,380.4L205.0,379.6L207.6,378.9L209.2,379.5L209.6,380.6L209.2,382.5L208.0,382.5L206.7,381.4L205.5,381.7L200.5,387.2L197.6,388.4L196.0,390.1L194.0,389.6L193.7,390.0L193.7,390.5L195.4,392.3L196.9,393.0L199.3,397.4L200.9,398.7L201.7,401.2L201.1,401.8L200.6,404.8L203.1,407.0L203.9,408.7L205.1,408.5L205.3,411.3L204.1,410.9L204.1,411.5L199.5,412.6L198.9,415.1L195.9,414.7L194.7,412.9L195.7,408.8L193.4,407.3L190.3,404.2L190.3,402.9L191.4,400.9L191.5,399.6L190.9,396.7L188.3,396.7L185.3,399.1L186.7,405.5L186.1,408.7L186.6,413.2L185.5,417.7L186.6,421.5L185.7,421.1L183.0,421.4L181.2,422.4L179.3,420.9L178.5,419.2L180.4,411.6L180.5,408.3L179.4,405.7L179.5,404.2L178.5,403.4L175.7,404.1L174.7,402.9L174.3,400.8L174.6,398.9L174.1,397.1L176.4,395.1L177.0,392.2L178.2,390.4L178.1,386.0L179.6,381.7L181.1,379.8L182.2,381.3L181.2,374.8L182.3,373.7L181.9,372.0L182.7,370.2L185.4,365.7L185.8,365.6L186.5,366.8L188.0,366.7L190.0,363.4L191.6,362.7L194.1,363.4L195.5,364.9L202.0,365.3L205.0,366.8L206.8,366.0L213.4,366.8L218.0,363.5L218.5,362.2L219.9,361.5L221.5,359.5L222.8,360.0L223.3,361.2ZM104.1,356.8L103.4,357.9L104.3,360.3L110.8,366.7L115.4,365.1L120.8,365.4L122.8,364.3L123.7,361.8L125.9,360.7L129.4,360.7L129.9,361.8L134.6,363.5L136.8,361.8L140.5,361.2L141.4,361.7L143.9,357.2L143.5,354.9L146.5,352.6L145.8,351.6L146.1,349.4L147.0,348.3L148.6,348.2L149.5,344.7L149.5,340.5L150.3,338.4L151.7,337.0L153.0,337.5L154.6,336.9L156.0,337.4L156.7,336.8L161.2,337.1L164.8,338.5L164.0,339.4L166.4,342.6L165.2,343.1L164.3,342.3L163.9,343.2L160.9,343.2L163.1,344.9L163.1,346.9L165.1,348.0L165.3,348.9L164.8,349.1L165.8,349.5L165.3,350.0L166.4,350.7L168.6,354.3L168.4,355.2L166.5,356.8L168.7,359.5L173.0,362.8L175.6,365.7L174.9,366.5L172.2,367.1L169.6,366.6L167.4,364.7L167.8,366.4L166.1,367.8L164.4,372.0L164.0,376.8L164.7,380.6L162.3,381.9L159.8,384.4L158.9,384.1L158.4,382.9L158.6,385.3L154.9,389.2L156.0,389.2L156.0,391.4L155.2,392.2L156.8,392.8L157.0,394.5L156.8,395.3L155.2,395.7L155.1,396.1L155.7,395.9L155.3,398.7L154.0,399.4L154.8,400.6L153.2,402.5L152.5,404.6L142.8,409.4L142.3,408.9L141.5,402.7L140.9,403.6L140.1,403.3L140.1,401.5L139.3,402.6L138.1,401.9L137.2,402.9L135.3,403.4L134.7,403.1L134.5,401.2L132.5,401.6L130.1,398.9L129.7,401.1L128.0,402.2L126.8,402.9L124.4,402.2L121.2,404.2L120.9,400.0L119.9,398.6L119.4,399.3L117.4,398.9L114.1,400.1L113.3,399.5L113.8,398.7L112.3,399.7L111.3,398.6L108.9,399.2L107.7,391.0L106.6,389.8L107.2,387.0L106.8,384.8L105.3,382.6L101.3,380.9L102.2,379.4L100.5,378.2L100.2,377.3L100.8,374.1L101.3,373.7L98.9,371.0L98.7,366.2L99.0,364.4L100.3,363.3L99.4,363.5L99.9,361.3L102.2,357.7ZM242.4,366.8L243.6,366.9L244.2,365.1L245.7,364.2L246.2,362.1L249.7,360.6L249.8,364.6L246.8,366.5L246.5,367.8L249.1,369.3L249.8,370.9L251.3,372.2L247.9,370.7L244.3,370.0L243.6,371.5L244.3,376.1L246.4,380.2L247.7,381.6L246.6,381.4L244.8,380.0L243.6,377.6L242.1,376.1L242.2,371.6L240.9,368.8L241.5,366.8L240.1,364.3L241.7,358.3L243.7,355.8L244.8,355.3L243.6,358.4L244.6,359.5L244.6,362.7L241.8,365.4L241.7,366.0ZM343.6,396.2L343.6,427.9L342.7,431.3L343.6,432.7L343.6,451.5L336.2,443.7L337.0,441.4L335.7,442.9L331.5,443.6L330.4,441.9L330.0,442.7L327.7,444.0L327.4,443.2L329.2,438.5L326.6,435.6L329.9,435.1L327.3,434.7L325.5,433.0L327.5,432.3L324.2,427.9L323.1,424.6L323.7,423.7L322.4,423.4L323.5,422.2L321.5,422.5L321.3,420.5L315.4,416.0L314.7,416.4L310.3,415.0L305.4,412.5L299.4,411.8L296.1,409.7L295.5,408.7L295.7,407.6L297.1,407.5L292.3,407.5L291.4,406.3L290.1,406.5L287.9,403.6L288.0,401.6L289.1,400.0L288.0,400.2L287.7,402.6L286.6,403.0L286.8,403.9L285.9,406.7L284.6,408.5L282.0,408.5L280.8,405.5L281.7,404.2L280.8,402.0L277.7,399.3L275.4,398.8L274.8,397.7L276.8,396.8L280.6,397.7L282.9,395.1L284.1,394.7L288.0,396.3L288.4,394.8L289.6,394.3L289.5,393.6L288.7,393.5L289.7,391.9L288.1,392.6L282.4,393.3L277.4,393.1L275.2,390.9L274.5,387.3L269.6,385.8L268.3,386.4L267.4,386.1L267.7,384.9L268.8,383.9L269.4,381.3L273.5,380.0L276.0,377.9L278.0,377.0L281.6,377.5L286.3,380.2L290.1,380.3L291.2,381.2L290.9,382.5L292.3,385.6L291.1,388.6L291.8,393.6L293.8,398.1L294.0,396.0L294.6,395.3L295.1,395.6L295.7,398.9L296.8,398.7L297.1,401.3L298.7,402.5L301.7,402.4L304.5,399.5L305.7,397.2L307.4,396.0L308.6,393.3L313.8,391.9L314.5,391.2L314.2,389.6L319.4,386.6L325.8,389.2L327.1,390.3L334.5,394.0L340.9,394.8L341.9,396.2ZM43.6,356.3L44.1,357.5L43.7,358.8L42.8,359.4L42.0,359.3L41.3,356.8L43.1,355.9ZM49.1,365.6L48.7,365.8L48.0,364.9L47.8,362.1L49.2,363.5ZM49.6,361.6L49.7,362.7L46.4,361.3L46.2,360.2ZM53.7,367.7L50.0,366.9L49.4,365.9L50.0,364.4L53.5,366.7ZM54.7,366.6L54.1,366.8L51.9,365.2L51.2,365.0L51.4,364.1L51.9,364.1L54.0,365.4ZM55.7,369.4L54.5,369.3L54.6,368.5L55.3,368.1ZM56.9,368.4L56.1,367.4L56.4,366.6L57.3,367.9ZM61.3,364.0L62.2,364.1L62.1,364.7L61.6,365.6L60.8,365.4L60.8,364.3ZM65.6,363.7L66.1,365.8L65.5,366.9L64.8,366.1L64.5,365.1L63.0,365.4L63.0,364.6ZM67.1,375.5L67.6,375.2L68.8,376.4L68.1,376.7L66.5,375.8L65.4,376.1L64.5,375.6L65.3,373.8ZM64.7,376.8L65.6,378.0L65.0,379.1L64.3,379.0L63.9,379.6L63.1,377.9L63.4,377.3ZM59.1,377.0L57.0,377.0L57.7,375.9L59.0,376.4ZM104.7,384.0L102.9,384.9L103.0,382.4L105.0,382.8ZM297.7,383.5L296.9,383.5L296.6,382.3L297.1,382.0L297.9,382.8ZM238.7,378.2L237.7,378.4L237.8,376.4L239.0,376.4ZM241.2,376.7L242.0,378.0L241.5,379.2L241.9,379.9L243.0,379.9L243.6,380.9L242.6,381.5L241.6,380.5L240.6,380.8L240.2,380.3L240.4,379.5L239.1,377.9L239.3,376.9L240.3,377.5ZM235.4,339.7L234.6,339.8L235.4,337.8L234.7,337.1L235.0,335.3L235.8,335.9L236.2,337.5ZM226.6,344.8L225.5,344.6L225.1,343.1L225.1,342.3L225.7,342.8ZM262.5,388.4L263.0,390.8L261.6,391.4L258.9,390.9L257.7,389.9ZM18.8,378.5L18.3,378.9L17.6,378.5L18.5,375.9L17.7,374.0L18.1,373.9L19.4,376.2ZM3.5,353.9L-1.5,351.4L-2.2,350.0L-1.7,349.7L-1.5,349.2L-0.8,349.4L3.2,352.6ZM207.9,384.0L208.1,385.8L208.9,384.7L209.6,384.5L210.5,385.4L209.7,386.7L208.4,386.2L208.0,387.6L207.2,387.2L207.7,386.7L207.4,385.1L205.4,387.5L204.8,386.2L205.6,384.0ZM197.6,377.5L197.7,378.3L196.5,378.2L196.0,378.5L196.7,377.5ZM56.7,365.1L56.8,365.6L56.3,365.4L55.9,364.9L56.4,364.4ZM62.9,366.9L62.5,367.2L61.9,366.1ZM66.4,373.5L65.7,373.2L65.3,372.1ZM78.6,347.2L78.6,347.8L77.9,346.8L78.5,346.7ZM74.6,349.7L74.0,348.0L75.2,348.7ZM98.5,349.3L98.1,349.7L97.7,349.5L98.4,348.5ZM99.0,387.8L98.1,388.1L97.8,387.3L99.0,387.3ZM10.2,356.4L8.5,355.2L8.8,355.0L9.9,355.3ZM-4.9,324.6L-5.5,324.7L-5.8,323.8L-4.9,324.0ZM210.8,388.5L210.0,388.3L210.3,386.8ZM212.8,390.6L212.4,391.0L212.3,390.0ZM207.4,389.4L206.9,390.1L206.9,389.4L207.3,389.1ZM165.4,338.6L167.2,338.4L167.4,339.2L166.1,340.0ZM165.5,346.1L164.5,345.2L164.6,344.8L165.6,345.0ZM239.7,367.3L239.0,367.1L239.3,366.7ZM266.7,380.6L266.1,381.3L262.8,381.9L263.8,381.1ZM264.5,378.5L263.3,378.1L264.1,377.7L265.0,378.0ZM256.3,375.6L254.9,374.6L254.5,373.6ZM240.3,374.0L239.9,373.9L240.1,372.8ZM240.0,368.5L239.7,368.6L239.8,367.7L240.2,367.8ZM239.1,380.6L238.0,380.5L238.8,379.3ZM224.7,351.5L224.5,350.2L225.0,350.5ZM-212.7,171.2L-211.0,170.4L-208.4,170.3L-207.9,167.3L-207.6,167.8L-202.0,167.7L-200.1,168.6L-198.5,168.4L-197.9,167.6L-194.9,166.5L-194.5,166.4L-194.2,167.6L-193.2,168.0L-190.7,166.6L-191.2,165.1L-190.6,164.2L-193.7,157.9L-193.7,155.8L-196.6,155.5L-197.9,153.8L-197.5,148.7L-202.4,146.7L-202.2,143.5L-199.4,140.5L-197.5,137.3L-195.5,135.8L-193.8,136.5L-193.3,138.0L-192.5,138.5L-184.3,136.3L-180.7,129.6L-176.5,127.3L-173.9,122.8L-172.8,119.6L-169.5,118.2L-168.6,117.1L-168.8,115.3L-165.5,111.4L-163.2,110.2L-164.1,108.9L-163.5,106.5L-164.2,104.4L-163.8,103.5L-158.0,100.2L-158.6,98.8L-162.8,97.8L-163.0,95.6L-165.4,95.5L-165.8,93.6L-168.0,91.9L-166.9,89.2L-168.3,87.4L-166.2,85.5L-168.8,84.4L-168.3,83.0L-169.6,81.8L-168.4,79.4L-165.8,78.5L-155.0,80.7L-152.5,79.3L-148.3,78.7L-145.1,76.6L-144.8,75.6L-139.0,72.3L-137.2,72.4L-137.4,74.4L-135.0,79.8L-132.4,80.6L-130.1,82.4L-130.1,83.1L-132.0,84.9L-131.4,89.3L-128.8,92.0L-129.1,93.1L-128.3,94.0L-128.2,97.7L-130.5,99.0L-132.2,96.9L-134.5,97.6L-133.7,100.2L-131.9,102.4L-132.2,104.2L-131.4,105.2L-132.0,106.5L-131.8,107.7L-130.1,107.7L-129.8,107.0L-129.1,107.1L-126.1,110.6L-123.8,110.8L-121.1,112.3L-120.8,114.2L-117.6,115.2L-114.7,117.0L-114.5,117.6L-115.8,117.8L-119.2,121.3L-120.3,123.9L-120.5,125.8L-121.8,128.6L-119.0,130.8L-117.8,130.5L-113.3,133.2L-112.2,134.5L-108.1,137.1L-106.7,136.8L-103.5,138.8L-101.8,138.8L-101.4,140.1L-97.1,141.3L-95.9,140.5L-93.0,141.3L-91.0,140.3L-87.0,142.0L-86.4,144.2L-83.1,145.7L-82.6,146.5L-79.1,146.0L-78.0,147.9L-76.3,147.5L-71.0,149.3L-68.6,148.3L-68.1,149.3L-66.6,149.9L-65.6,149.4L-62.3,149.3L-61.2,149.7L-59.9,146.8L-61.2,143.4L-60.0,136.4L-56.7,135.2L-55.0,135.9L-54.6,137.1L-55.4,140.1L-54.3,141.8L-55.5,143.0L-54.6,144.8L-52.3,146.1L-50.9,145.8L-47.6,147.0L-44.9,146.6L-43.2,145.4L-40.2,146.4L-36.0,146.3L-34.9,145.6L-33.1,146.2L-30.6,145.7L-30.0,145.2L-30.6,143.7L-29.9,142.0L-30.6,140.7L-32.5,140.7L-33.7,139.8L-33.4,138.0L-30.7,138.3L-29.8,137.6L-26.4,137.0L-25.3,136.1L-25.6,135.5L-25.2,134.7L-22.7,133.2L-21.0,130.6L-17.1,129.8L-15.5,128.7L-15.1,127.8L-10.5,124.8L-9.4,126.0L-4.7,127.2L-3.7,125.7L0.3,123.7L1.8,125.4L2.7,125.4L0.9,126.8L1.0,128.2L3.3,127.1L4.4,129.5L2.2,132.5L3.0,132.9L4.6,132.1L5.9,132.9L8.2,132.9L10.1,134.1L10.3,136.2L6.7,139.5L8.4,143.5L7.3,143.4L5.1,141.6L0.5,142.7L-0.7,144.1L-6.7,147.9L-7.3,150.0L-6.6,152.6L-8.1,155.5L-10.8,158.8L-11.1,159.7L-9.9,161.1L-13.0,167.3L-14.3,171.1L-17.7,169.9L-19.1,170.2L-20.4,169.5L-19.7,172.7L-20.1,177.4L-20.6,178.2L-21.7,178.2L-22.3,180.9L-21.8,185.0L-23.6,187.1L-25.1,185.9L-26.2,187.2L-26.8,181.2L-27.8,179.1L-28.7,172.7L-31.1,172.7L-31.0,174.2L-32.4,176.1L-32.5,178.0L-33.5,178.7L-34.3,178.2L-34.9,176.8L-35.4,176.8L-35.4,177.9L-35.8,177.6L-36.9,173.6L-36.4,170.7L-35.4,169.2L-31.5,168.3L-30.9,167.0L-29.8,166.5L-28.8,162.5L-27.2,162.8L-27.0,162.0L-30.2,160.1L-42.5,160.2L-47.1,159.0L-47.2,153.5L-48.4,151.2L-49.0,151.4L-49.3,153.0L-50.7,152.9L-52.1,152.1L-53.3,149.5L-54.1,149.8L-53.7,150.9L-54.8,150.9L-55.9,150.5L-56.4,149.3L-58.3,148.2L-57.8,149.9L-60.0,152.3L-60.5,154.0L-57.3,156.9L-55.2,157.3L-53.8,159.3L-54.9,160.0L-57.6,159.9L-58.7,162.5L-60.0,162.2L-60.9,164.7L-60.0,165.9L-58.9,165.9L-55.6,167.7L-55.8,170.0L-56.8,172.8L-55.5,174.8L-55.6,176.3L-54.0,176.9L-54.6,178.2L-53.1,184.7L-53.3,187.5L-53.9,187.5L-53.1,189.9L-54.2,189.9L-54.6,189.2L-55.4,190.5L-55.8,189.3L-55.5,187.0L-56.2,186.0L-56.7,189.9L-57.7,190.3L-58.9,189.1L-59.2,190.2L-60.2,190.1L-60.7,189.6L-59.6,185.8L-61.2,184.7L-61.6,183.8L-61.4,184.8L-59.9,186.0L-61.5,188.5L-63.6,189.9L-68.0,191.2L-69.8,193.5L-68.9,198.0L-70.7,201.3L-72.6,202.5L-73.5,203.9L-74.5,203.5L-74.0,204.1L-74.7,204.9L-79.6,206.6L-80.2,206.6L-79.8,206.1L-80.2,205.0L-82.1,206.1L-82.7,207.4L-81.2,206.7L-80.7,207.2L-85.8,211.4L-90.9,218.5L-94.3,220.4L-97.8,224.3L-104.2,228.7L-104.8,230.0L-104.2,231.3L-105.0,233.2L-108.8,235.2L-112.4,235.1L-114.8,240.1L-115.9,240.0L-116.3,239.1L-117.3,238.9L-120.0,240.5L-121.8,245.9L-120.9,250.9L-121.4,253.2L-119.9,259.4L-121.0,257.4L-121.8,258.3L-119.6,260.4L-120.5,266.1L-123.3,272.1L-124.1,275.6L-123.8,276.7L-124.6,277.8L-123.8,277.6L-123.4,278.8L-123.5,286.3L-125.8,286.2L-127.5,286.8L-127.9,288.7L-130.3,292.7L-130.5,293.7L-129.7,294.7L-126.7,295.9L-130.0,295.2L-134.3,296.6L-136.0,298.4L-137.1,302.7L-141.2,305.3L-144.7,303.3L-148.6,298.3L-150.3,293.7L-150.9,289.6L-150.2,290.5L-149.9,292.9L-149.3,292.9L-150.1,289.7L-151.3,288.3L-154.9,277.4L-156.4,274.5L-158.9,271.5L-160.9,267.2L-165.2,250.8L-168.5,245.9L-169.6,243.1L-168.6,243.1L-169.8,241.6L-169.4,240.9L-170.5,240.5L-173.1,234.1L-174.5,224.2L-176.7,215.5L-175.7,212.3L-175.9,211.2L-177.0,212.7L-177.2,211.8L-177.2,210.0L-175.8,210.1L-177.3,209.4L-177.2,208.1L-178.3,205.4L-176.5,198.3L-177.1,194.5L-178.1,194.0L-178.6,192.3L-177.7,191.5L-178.7,191.6L-174.9,189.1L-179.2,189.6L-178.8,188.0L-178.0,187.2L-179.4,187.2L-179.1,185.6L-177.2,185.0L-182.0,184.7L-181.0,185.4L-181.3,186.2L-183.1,188.5L-181.7,189.3L-181.4,191.0L-183.2,194.2L-190.8,197.7L-193.1,197.7L-194.9,196.9L-198.4,194.0L-204.8,187.1L-206.5,184.5L-205.9,183.3L-204.2,184.6L-197.3,182.1L-194.7,178.5L-194.9,177.7L-196.0,179.0L-197.7,179.0L-201.2,180.5L-204.5,179.8L-209.0,176.9L-210.7,173.6L-208.0,171.3L-212.1,173.4ZM-16.1,315.9L-16.6,316.6L-17.9,314.4L-17.9,313.3L-16.4,312.7L-15.8,314.7ZM-17.3,311.5L-18.0,312.3L-18.2,311.5L-17.6,311.0ZM-21.8,303.9L-22.4,303.7L-22.2,303.0ZM-19.5,307.0L-20.1,307.0L-20.4,305.9ZM-18.8,305.5L-19.3,305.8L-19.4,305.1L-18.9,304.2ZM-24.5,296.3L-25.1,296.1L-24.9,295.5L-24.6,295.5ZM-26.7,284.3L-27.7,284.3L-27.7,282.3L-26.7,281.4L-26.2,283.0ZM-25.3,277.3L-26.0,277.2L-25.7,276.9L-25.7,276.2ZM-25.0,275.9L-25.5,275.9L-26.5,273.1L-25.4,270.4L-24.5,270.1L-25.1,269.0L-24.9,265.4L-23.5,259.4L-22.4,258.9L-22.8,260.6L-22.4,261.4L-23.8,264.0L-23.2,264.8L-23.0,267.4L-24.0,268.3L-23.8,270.1L-24.8,272.1L-24.5,273.1ZM-22.8,271.7L-22.4,272.9L-23.1,272.3ZM-25.1,264.6L-25.3,265.2L-25.3,263.9ZM137.6,182.6L139.0,182.2L140.0,183.3L139.6,184.5L137.0,183.9L136.7,183.4ZM139.3,185.2L138.5,184.5L139.4,184.8ZM137.5,185.2L136.3,184.9L137.9,184.2ZM53.8,278.1L53.4,278.0L53.8,277.2ZM55.9,282.9L55.6,283.2L55.2,282.5ZM88.0,249.0L86.6,253.9L88.7,259.8L87.7,263.2L88.1,268.3L87.0,269.8L86.6,269.3L85.7,269.4L83.5,271.3L79.6,272.4L79.4,274.7L76.4,274.1L75.3,275.1L75.3,278.0L77.6,280.2L77.7,282.2L75.3,281.7L74.5,280.6L71.9,280.9L71.2,281.8L69.1,281.3L69.1,283.0L67.6,284.5L65.4,284.6L64.4,285.5L63.1,284.4L60.6,284.0L60.1,283.4L59.9,284.1L58.5,284.7L57.5,283.9L59.0,281.4L58.5,280.0L57.5,279.3L56.6,280.7L54.6,281.2L54.2,278.7L54.4,276.6L51.5,271.2L51.6,268.4L49.7,266.3L49.4,263.4L48.4,261.1L48.3,258.9L50.0,258.5L50.0,257.9L53.7,252.9L57.7,251.5L61.0,252.0L67.1,251.4L68.5,251.9L69.0,253.1L70.2,252.1L71.4,254.1L72.8,253.7L74.4,254.3L75.7,255.6L76.9,255.7L77.4,254.6L76.2,252.1L77.7,251.8L78.1,251.0L79.1,251.1L80.2,250.1L82.4,252.2L83.6,252.2L86.3,250.0L87.2,250.2ZM31.5,201.3L29.7,200.4L28.4,201.2L26.4,200.9L26.6,202.7L25.5,203.3L23.5,203.2L22.3,205.9L18.1,206.6L15.4,206.1L13.9,208.6L13.8,211.4L13.0,213.1L13.3,216.0L11.6,216.8L10.5,216.6L11.1,217.9L12.5,218.5L13.3,221.5L13.0,222.7L18.6,229.7L20.3,235.2L21.7,234.5L22.1,235.0L21.5,236.5L19.8,237.6L19.5,243.4L16.7,244.8L16.8,246.7L17.2,248.1L19.6,251.9L22.4,254.6L24.0,257.4L24.3,261.5L23.9,263.2L24.6,265.7L26.0,267.3L27.6,273.9L24.4,279.6L21.1,283.4L20.6,287.4L19.6,288.7L18.8,283.3L20.4,280.6L20.9,275.5L22.0,274.4L21.4,273.9L20.1,274.2L20.6,270.1L19.9,269.9L20.5,269.0L19.7,262.1L17.2,257.3L16.8,255.2L16.4,258.0L16.1,257.4L16.0,253.6L14.6,249.5L14.7,249.1L15.4,249.5L14.8,248.5L14.3,248.7L13.8,247.7L13.1,239.1L12.1,237.8L12.5,234.1L13.2,233.2L10.5,233.6L9.3,230.4L9.2,228.7L6.5,226.1L6.9,229.2L5.8,232.0L4.8,233.2L3.3,233.7L2.2,232.9L1.9,231.5L1.4,231.5L2.5,234.2L-1.8,236.6L-2.4,238.2L-4.7,240.4L-5.3,240.1L-5.0,237.2L-6.3,239.5L-8.1,239.5L-8.5,236.4L-9.2,238.2L-10.2,238.8L-9.9,233.6L-10.2,235.1L-11.9,237.2L-13.6,237.9L-13.2,233.6L-11.0,226.9L-10.8,224.7L-12.0,219.3L-14.0,214.8L-13.4,214.7L-14.7,213.4L-14.9,210.1L-15.7,211.3L-15.8,213.4L-17.5,212.3L-19.2,209.4L-18.5,209.1L-16.6,210.5L-15.6,209.7L-15.3,208.8L-18.2,205.9L-17.5,204.7L-18.5,204.8L-21.0,203.4L-21.7,203.7L-21.4,204.9L-21.9,205.2L-22.9,203.4L-22.2,202.5L-22.8,202.4L-22.4,200.8L-23.8,202.7L-24.5,202.2L-23.8,201.1L-24.1,200.5L-25.1,199.2L-25.0,201.5L-27.7,197.9L-29.2,193.0L-28.0,191.8L-26.0,193.2L-26.2,187.2L-25.3,185.9L-23.2,187.0L-22.6,185.4L-21.8,185.0L-22.3,180.9L-21.7,178.2L-20.2,177.8L-19.9,175.6L-19.7,172.7L-20.4,169.5L-19.1,170.2L-17.7,169.9L-14.3,171.1L-13.0,167.3L-9.9,161.1L-11.1,159.7L-10.8,158.8L-8.1,155.5L-6.6,152.6L-7.3,150.0L-6.7,147.9L-4.1,146.6L1.5,142.3L5.6,141.7L7.3,143.4L8.4,143.5L6.7,139.5L10.2,136.5L10.1,134.1L12.2,131.6L13.5,133.0L14.4,133.0L16.0,134.8L17.6,139.8L18.7,138.9L20.3,139.6L20.9,147.1L20.5,151.4L19.6,152.4L20.3,154.2L18.8,154.8L17.8,156.5L16.4,156.6L15.4,159.0L13.9,159.4L13.1,161.2L13.3,162.6L12.1,163.4L11.7,165.8L12.7,166.8L13.1,168.1L12.0,170.8L12.9,170.9L16.9,169.1L19.7,169.4L21.7,169.0L20.4,170.8L21.6,173.2L21.9,176.9L26.1,177.9L26.8,178.8L25.9,180.0L24.4,185.9L29.9,186.8L30.1,189.1L31.3,189.9L31.5,191.2L32.2,191.6L35.2,191.5L36.9,189.9L39.2,189.2L38.8,191.5L36.3,192.8L34.7,195.6L34.5,196.2L35.3,196.7L32.5,197.8ZM16.9,280.9L17.5,282.4L17.2,282.7L16.9,281.9L15.9,281.5L16.6,280.7ZM16.7,289.6L16.2,290.0L16.4,289.2L17.0,288.6L17.4,288.9ZM17.0,276.4L17.1,275.0L17.6,273.8L17.6,274.4ZM19.2,272.8L18.8,271.3L19.9,272.4ZM19.5,274.2L19.3,275.9L18.6,275.7L18.3,274.7L18.2,273.8L19.3,273.7ZM18.4,266.9L18.8,268.0L17.8,269.1L17.7,266.2ZM16.3,270.7L15.6,270.0L15.8,269.5ZM-11.6,238.5L-12.1,239.3L-12.3,238.0L-11.1,236.7L-10.7,236.3L-10.6,236.8ZM12.0,235.8L11.3,235.4L11.2,234.1L11.8,233.7L12.2,234.3ZM-17.6,215.2L-19.2,213.6L-18.2,213.4L-17.2,213.6ZM-19.2,204.9L-19.0,206.1L-19.5,205.6L-19.8,204.4ZM-17.5,207.8L-15.7,208.9L-16.0,209.7L-17.1,209.7L-18.0,208.3ZM19.4,280.8L19.1,280.8L19.3,279.8ZM15.9,274.6L15.9,275.1L15.4,274.6L15.4,273.2ZM15.8,268.7L15.3,269.6L14.8,269.1ZM17.7,262.7L17.6,264.1L17.2,261.9ZM-9.1,239.5L-9.7,239.5L-9.0,238.6ZM-22.8,204.6L-22.7,205.5L-23.6,204.0L-23.6,203.3ZM146.2,332.4L147.2,334.6L147.4,337.0L146.0,336.7L145.5,335.0L145.4,332.4ZM145.4,332.4L143.2,333.9L143.9,336.7L143.1,339.2L142.2,339.8L140.9,338.3L140.0,337.8L139.2,335.9L138.0,335.0L140.8,334.4L145.1,331.3L145.5,331.4ZM-33.4,138.0L-33.7,139.8L-32.5,140.7L-30.6,140.7L-29.9,142.0L-30.6,143.7L-30.2,145.6L-33.1,146.2L-34.9,145.6L-36.0,146.3L-40.2,146.4L-43.2,145.4L-44.9,146.6L-47.6,147.0L-50.5,146.0L-52.3,146.1L-54.6,144.8L-55.5,143.0L-49.8,135.5L-46.6,133.5L-43.2,133.9L-43.1,135.3L-40.4,135.4L-38.0,136.3L-36.1,135.3L-33.3,136.7ZM-53.1,186.2L-54.6,178.2L-54.0,176.9L-55.6,176.3L-55.5,174.8L-56.8,172.8L-55.8,170.0L-55.6,167.7L-58.9,165.9L-60.0,165.9L-60.9,164.7L-60.0,162.2L-58.7,162.5L-57.6,159.9L-54.9,160.0L-53.8,159.3L-55.2,157.3L-57.3,156.9L-60.5,154.0L-60.0,152.3L-57.8,149.9L-58.3,148.2L-56.4,149.3L-55.9,150.5L-54.8,150.9L-53.7,150.9L-54.1,149.8L-53.3,149.5L-52.1,152.1L-50.7,152.9L-49.3,153.0L-49.0,151.4L-48.4,151.2L-47.2,153.5L-47.1,159.0L-42.5,160.2L-30.2,160.1L-27.0,162.0L-27.2,162.8L-28.8,162.5L-29.8,166.5L-30.9,167.0L-31.5,168.3L-35.4,169.2L-36.4,170.7L-36.9,173.6L-35.8,177.6L-35.4,177.9L-35.4,176.8L-34.9,176.8L-34.0,178.6L-32.5,178.0L-32.4,176.1L-31.0,174.2L-31.1,172.7L-28.7,172.7L-27.8,179.1L-26.8,181.2L-25.7,192.9L-26.2,193.3L-28.0,191.8L-29.0,192.5L-29.1,193.8L-28.1,197.3L-30.1,194.0L-30.5,189.7L-31.9,185.1L-31.6,184.0L-32.1,184.5L-34.5,179.5L-36.5,181.5L-38.6,181.9L-40.8,178.3L-41.2,173.5L-41.6,174.9L-43.8,174.6L-41.3,176.2L-41.3,177.4L-42.3,178.0L-41.6,179.3L-42.3,179.5L-42.5,180.6L-41.1,183.9L-44.1,188.4L-45.3,188.0L-44.2,185.7L-46.2,186.8L-46.5,186.0L-46.6,184.4L-46.0,183.0L-46.7,183.7L-47.3,187.1L-49.1,189.0L-49.8,184.7L-49.7,187.7L-50.8,189.4L-51.7,189.4L-52.8,188.1ZM-37.0,185.5L-37.9,186.1L-37.6,182.6L-36.8,184.6ZM-33.9,183.8L-34.6,183.8L-35.1,183.0L-34.8,181.9ZM-39.9,186.2L-41.9,186.4L-40.6,184.2L-42.0,179.9L-40.7,180.1L-39.2,182.9ZM-31.5,188.4L-31.8,189.1L-31.8,188.0L-31.6,187.6ZM-30.9,191.2L-31.6,191.0L-31.7,189.5L-31.1,189.4ZM-40.9,178.8L-41.5,178.7L-41.4,178.2Z", "land": "M191.1,181.7L190.2,183.8L189.8,187.6L189.0,187.4L187.8,184.0L185.8,182.3L183.9,177.2L184.6,172.5L189.7,163.9L191.3,161.2L194.9,159.1L197.5,160.6L198.1,161.7L197.3,163.0L197.3,165.5L195.7,169.6L194.0,177.0ZM171.2,165.6L171.4,166.5L170.3,166.3ZM234.0,52.9L234.3,51.7L237.5,48.6L244.8,48.4L245.8,47.9L247.3,45.7L249.2,49.5L254.7,57.2L255.3,59.0L255.7,61.7L255.2,67.6L255.6,67.9L256.5,67.6L256.4,68.4L255.3,72.3L253.7,75.0L252.0,75.6L248.4,75.6L247.7,76.4L247.9,77.6L245.2,77.1L244.7,76.3L242.3,76.9L241.7,77.4L242.5,78.3L242.3,78.9L241.7,79.1L240.8,77.9L239.9,78.0L239.8,78.7L240.5,79.7L239.3,81.1L238.2,80.4L238.8,79.4L238.7,78.6L236.0,81.3L235.0,80.6L233.7,82.3L233.1,82.0L232.9,80.8L231.2,79.3L231.5,78.9L233.2,79.1L232.8,78.6L233.7,78.0L232.4,78.0L231.4,75.2L233.0,72.2L233.9,71.6L232.9,71.0L234.7,70.0L234.9,69.1L234.1,68.7L234.5,67.9L233.3,66.6L232.9,62.1L232.2,62.5L230.6,62.1L230.4,61.4L230.9,60.6L232.9,59.4L235.2,59.9L235.9,61.0L236.7,60.0L235.8,59.7L234.9,57.9L235.2,57.0L234.2,55.7L233.5,53.4ZM250.1,78.2L249.4,78.7L248.2,77.6L250.0,76.4ZM245.0,78.2L244.9,79.0L244.3,79.0L244.0,78.5L243.5,78.8L243.2,77.6L243.8,77.2L244.8,77.5ZM231.0,81.9L230.0,81.6L230.9,80.5L231.8,80.4L232.1,80.8ZM233.2,53.2L233.1,54.4L232.3,54.0L232.0,52.9L232.3,52.5ZM234.9,82.1L235.1,82.5L234.1,82.0L234.5,81.6ZM242.9,79.8L242.5,79.6L242.8,79.2ZM232.4,63.8L232.3,64.4L231.8,64.0L231.6,62.8ZM230.5,78.8L230.1,78.9L229.6,77.9L229.2,77.6L229.8,77.2L230.5,77.9ZM266.7,55.4L266.4,55.7L265.9,55.2L266.7,54.8ZM231.7,91.6L230.9,91.6L230.5,90.8L230.7,90.4L231.8,89.6L234.5,88.8L236.1,89.1L236.3,89.7L235.9,90.6L233.6,91.5ZM247.3,45.7L245.8,47.9L244.8,48.4L237.5,48.6L234.3,51.7L234.0,52.9L232.0,52.0L230.1,53.2L229.6,52.1L228.7,52.1L227.4,51.1L225.0,53.3L224.3,53.3L223.9,52.3L221.5,51.6L223.4,50.5L223.1,50.3L219.2,49.9L220.6,49.0L220.6,48.1L222.1,46.3L223.9,45.3L225.8,45.2L222.8,44.2L222.8,43.6L224.7,40.0L224.3,38.0L222.3,37.5L219.8,36.1L219.5,37.0L218.8,37.3L218.2,35.8L216.6,34.8L216.9,33.1L220.7,30.1L224.7,28.4L227.1,26.6L229.1,26.3L232.9,22.5L233.8,20.1L234.7,19.4L236.1,18.9L237.3,19.7L238.2,21.0L242.1,21.8L244.6,21.7L245.6,22.2L246.7,20.3L244.7,17.9L244.8,17.1L251.5,16.7L253.6,15.1L254.5,13.5L255.3,13.3L256.1,13.7L257.4,13.2L259.0,8.5L261.6,9.4L261.6,10.7L263.6,12.2L265.0,14.4L263.2,14.4L261.6,15.4L257.9,19.4L257.4,20.4L258.0,22.9L257.5,26.7L254.7,27.8L253.0,29.8L249.8,31.3L248.4,32.9L246.8,33.7L244.2,34.0L243.5,34.9L241.2,35.9L241.0,38.6L240.8,39.3L240.1,39.3L239.8,40.7L242.8,41.8ZM220.8,37.9L220.4,38.2L220.4,37.7L221.1,37.3ZM169.5,165.8L169.2,166.3L168.7,165.7L168.9,165.3ZM197.6,106.3L197.0,106.6L193.6,105.0L192.6,103.7L193.6,103.7ZM200.9,119.3L198.5,118.5L198.4,117.8L199.5,117.8L200.8,118.4ZM200.0,121.7L199.0,121.2L199.5,120.9ZM201.7,119.9L201.4,120.3L201.2,119.6L201.7,119.4ZM182.0,157.6L181.1,157.8L181.0,156.5L181.7,155.9L182.1,156.5ZM109.9,194.7L110.9,194.8L110.8,195.8L109.1,195.5ZM192.9,135.3L192.0,135.5L192.0,134.9L192.6,134.3ZM134.1,180.2L134.2,180.6L133.1,179.7L133.0,179.3L133.4,179.3ZM128.3,190.4L127.7,189.6L128.0,189.3L128.8,189.1ZM127.2,190.1L126.2,190.2L127.2,189.5ZM91.5,191.2L89.8,189.9L86.7,190.3L86.1,189.5L84.5,188.7L83.8,187.6L81.5,187.2L81.4,184.9L80.6,184.1L80.6,182.7L82.4,180.4L80.5,179.3L78.5,179.7L77.5,178.8L75.2,179.2L72.9,177.9L72.1,176.5L70.9,175.6L67.7,177.3L67.2,179.3L66.4,180.0L65.1,180.2L64.0,181.0L62.2,180.2L61.5,180.6L60.7,182.4L58.2,180.4L57.2,182.0L55.8,180.5L54.5,182.4L53.3,183.2L52.2,182.0L49.4,180.6L46.8,183.8L46.0,183.3L44.6,183.7L43.6,182.9L42.2,184.8L42.8,187.1L43.8,188.5L43.7,192.8L44.3,193.5L43.8,194.2L42.3,193.5L40.1,193.8L39.7,191.1L38.8,189.1L36.9,189.9L35.2,191.5L31.7,191.4L31.3,189.9L30.1,189.1L29.9,186.8L24.2,185.7L25.5,182.8L25.9,180.0L26.8,178.8L26.1,177.9L21.9,176.9L22.0,175.3L21.4,174.1L21.6,173.2L20.4,170.8L21.7,169.0L19.7,169.4L19.1,169.0L16.9,169.1L12.9,170.9L12.0,170.8L13.1,168.1L12.7,166.8L11.7,165.8L11.7,164.6L12.1,163.4L13.3,162.6L13.1,161.2L13.9,159.4L14.7,159.5L15.4,159.0L16.4,156.6L17.8,156.5L18.8,154.8L20.3,154.2L19.6,152.4L20.5,151.4L20.9,147.1L20.3,139.6L18.7,138.9L18.0,139.9L17.6,139.8L16.0,134.8L14.4,133.0L13.5,133.0L12.7,131.8L11.7,131.7L10.1,134.1L8.2,132.9L5.9,132.9L4.6,132.1L3.0,132.9L2.2,132.5L3.0,130.8L4.4,129.5L3.3,127.1L1.0,128.2L0.9,126.8L2.7,125.4L1.8,125.4L0.3,123.7L-3.7,125.7L-4.7,127.2L-9.4,126.0L-10.5,124.8L-15.1,127.8L-15.5,128.7L-17.1,129.8L-21.0,130.6L-22.0,132.6L-25.6,135.2L-25.5,136.4L-27.4,137.5L-28.6,137.3L-30.7,138.3L-33.4,138.0L-33.3,136.7L-36.1,135.3L-38.0,136.3L-40.4,135.4L-43.1,135.3L-43.2,133.9L-46.6,133.5L-49.8,135.5L-53.9,140.6L-54.3,141.8L-55.3,140.8L-55.4,140.1L-54.6,137.1L-55.0,135.9L-56.4,135.2L-60.0,136.4L-60.3,137.1L-62.2,137.0L-64.0,137.6L-67.7,137.4L-71.7,135.1L-72.2,135.3L-72.4,136.3L-73.3,136.6L-75.4,135.0L-75.8,135.3L-75.9,136.6L-76.4,136.8L-78.9,133.6L-83.1,133.3L-83.4,132.8L-82.8,131.0L-85.6,131.2L-89.9,128.2L-90.9,125.6L-92.2,125.1L-94.9,125.9L-98.1,122.3L-100.4,121.7L-105.3,118.5L-106.6,116.2L-109.7,115.7L-111.4,116.1L-112.6,118.2L-113.8,118.7L-114.7,117.0L-117.0,115.5L-120.8,114.2L-121.1,112.3L-121.6,112.4L-123.8,110.8L-125.6,110.9L-126.9,110.0L-129.1,107.1L-129.5,106.9L-130.1,107.7L-131.7,107.9L-132.0,106.5L-131.4,105.2L-132.2,104.2L-131.9,102.4L-133.7,100.2L-134.5,97.6L-132.2,96.9L-130.5,99.0L-129.4,98.7L-128.2,97.7L-128.3,94.0L-129.1,93.1L-128.8,92.0L-131.4,89.3L-132.0,84.9L-131.8,84.3L-130.1,83.1L-130.1,82.4L-132.4,80.6L-135.4,79.4L-137.4,74.4L-137.2,72.4L-141.7,72.5L-144.5,71.8L-148.0,70.3L-148.5,69.9L-148.6,69.0L-151.4,69.6L-152.3,68.1L-153.5,67.6L-153.0,64.7L-154.0,62.5L-155.3,61.7L-157.2,61.7L-157.8,60.2L-163.9,59.3L-165.2,58.3L-162.5,57.0L-161.3,57.5L-159.5,56.2L-161.2,54.4L-160.9,52.9L-162.2,49.4L-161.7,47.6L-162.4,46.7L-166.0,45.4L-167.1,45.4L-167.9,46.4L-169.6,45.8L-170.4,43.7L-169.6,42.8L-171.1,40.6L-170.9,38.7L-169.4,38.3L-168.8,37.6L-169.3,35.7L-168.1,33.6L-164.9,32.8L-162.9,31.4L-161.7,31.2L-161.7,29.9L-159.6,30.1L-156.2,28.7L-155.3,31.4L-153.8,31.4L-150.8,30.3L-150.4,31.0L-149.1,30.2L-147.7,27.4L-145.9,25.3L-140.7,25.6L-136.6,24.9L-134.9,23.1L-134.7,22.3L-131.8,20.7L-127.6,18.8L-124.0,17.9L-123.5,17.0L-120.4,16.6L-120.3,14.7L-121.0,11.3L-120.3,10.2L-118.1,9.6L-119.3,8.7L-119.3,8.1L-117.5,7.4L-116.5,7.6L-116.2,7.1L-117.1,5.9L-116.9,4.9L-117.3,3.7L-119.5,-0.8L-119.5,-4.7L-119.3,-5.6L-118.6,-6.1L-120.3,-6.9L-122.3,-6.8L-123.2,-7.5L-121.8,-8.6L-115.7,-9.6L-109.3,-11.5L-108.6,-10.4L-107.4,-9.9L-104.9,-10.4L-103.0,-9.6L-102.2,-11.0L-102.3,-12.1L-104.5,-12.9L-104.5,-13.6L-99.5,-25.2L-99.1,-27.1L-98.6,-27.3L-91.6,-25.2L-86.6,-25.3L-85.7,-24.1L-82.3,-25.8L-80.3,-26.0L-79.0,-27.7L-80.0,-33.3L-78.7,-36.7L-77.7,-37.5L-72.2,-38.5L-70.9,-39.9L-70.6,-42.6L-69.6,-43.3L-65.6,-43.2L-62.5,-43.9L-62.1,-42.5L-63.1,-41.5L-60.7,-40.0L-61.3,-38.7L-57.2,-37.3L-56.7,-35.9L-53.1,-34.0L-49.8,-34.2L-47.5,-32.5L-45.6,-33.0L-45.0,-31.8L-43.4,-31.2L-42.0,-27.9L-40.4,-25.5L-39.2,-25.1L-38.0,-21.8L-38.9,-19.3L-38.2,-17.3L-40.4,-14.7L-40.8,-13.0L-39.1,-10.2L-37.8,-10.3L-33.7,-9.2L-27.3,-8.6L-24.5,-8.8L-19.0,-8.0L-15.6,-5.7L-13.8,-5.5L-9.8,-3.0L-7.3,-2.2L-5.0,-2.4L-5.2,-0.3L-3.6,0.4L-1.1,6.2L2.3,9.1L2.9,10.9L9.2,10.3L26.5,12.2L30.4,11.2L42.0,12.4L43.2,12.7L45.6,15.2L47.0,15.7L54.0,16.9L58.9,19.1L64.9,18.0L64.9,19.9L68.6,20.4L70.3,19.2L82.3,14.5L93.0,13.2L101.9,13.3L110.0,10.4L114.7,5.6L118.8,4.3L120.5,2.9L121.7,2.5L121.7,1.6L121.0,0.6L119.2,-0.9L117.7,-3.1L119.3,-7.0L121.5,-9.0L125.4,-9.0L127.6,-7.5L134.4,-6.3L137.7,-8.0L140.7,-10.2L141.8,-11.8L146.4,-11.8L150.4,-12.4L154.3,-14.8L154.4,-16.0L157.1,-19.5L159.4,-20.3L163.0,-20.1L163.8,-22.0L166.1,-21.4L168.6,-22.7L170.4,-23.1L173.6,-22.9L174.5,-23.5L178.2,-22.2L181.1,-22.2L182.3,-22.7L182.6,-24.3L181.1,-26.8L177.0,-30.0L176.3,-31.1L173.9,-31.9L171.9,-33.9L169.2,-34.2L166.3,-33.9L163.1,-31.0L161.0,-32.4L158.6,-32.9L154.6,-32.8L152.0,-31.3L149.9,-32.9L149.2,-35.1L151.2,-36.1L151.4,-38.9L153.0,-40.6L158.0,-49.5L162.3,-47.8L167.1,-46.9L171.5,-49.7L177.7,-51.6L178.4,-53.4L177.0,-54.5L179.1,-57.0L183.9,-64.6L187.3,-66.7L189.1,-68.8L188.4,-70.5L188.7,-72.2L188.4,-72.8L183.9,-73.4L184.1,-74.7L188.7,-78.0L190.9,-78.9L201.2,-80.6L202.6,-80.4L210.9,-81.1L220.1,-77.6L222.1,-78.2L226.5,-76.9L227.1,-75.6L228.2,-75.4L229.6,-74.3L229.3,-73.2L231.8,-71.1L233.1,-67.4L234.5,-65.5L234.6,-64.3L235.3,-63.8L236.3,-60.4L239.2,-57.0L239.4,-54.0L241.3,-52.8L240.6,-50.8L241.0,-49.3L242.3,-48.2L244.5,-47.3L249.9,-47.6L250.7,-46.4L252.6,-45.7L255.9,-45.8L261.2,-41.6L264.0,-41.3L264.5,-40.6L264.0,-39.1L265.9,-36.9L265.2,-35.1L265.3,-34.2L266.7,-32.7L267.1,-31.5L278.7,-31.6L280.4,-33.6L282.8,-34.5L286.2,-34.8L289.1,-36.3L292.6,-37.2L295.4,-36.2L295.4,-35.3L294.6,-34.2L296.1,-31.6L294.5,-29.6L292.5,-29.0L291.6,-28.1L291.9,-26.6L289.3,-21.2L289.3,-19.1L288.0,-18.2L287.6,-16.6L286.6,-16.0L286.0,-13.6L284.1,-12.7L283.5,-9.6L282.2,-8.8L274.9,-10.6L273.9,-11.3L270.8,-8.4L267.3,-7.2L269.3,-0.6L268.7,2.5L268.8,4.2L269.4,5.3L267.9,9.3L264.2,10.1L263.0,10.8L264.2,11.7L263.8,12.4L261.6,10.7L261.6,9.4L259.0,8.5L257.4,13.2L256.1,13.7L255.3,13.3L254.5,13.5L253.6,15.1L251.5,16.7L244.8,17.1L244.7,17.9L246.7,20.3L245.6,22.2L244.6,21.7L242.1,21.8L238.2,21.0L236.5,19.0L234.7,19.4L233.8,20.1L232.9,22.5L229.1,26.3L227.1,26.6L224.7,28.4L220.7,30.1L216.9,33.1L216.0,34.6L214.7,35.4L212.1,35.5L211.2,35.0L210.7,35.8L205.1,37.4L201.2,39.4L198.5,42.0L197.6,42.5L196.2,42.5L196.0,43.6L192.2,44.8L191.8,43.2L196.2,41.6L195.8,40.6L197.2,39.2L193.1,39.2L193.0,37.9L194.9,37.1L194.6,36.1L194.9,35.3L197.1,34.4L200.6,29.7L199.7,28.2L197.6,26.8L197.4,25.7L196.6,26.8L192.3,26.3L189.2,29.0L187.0,32.0L180.2,34.8L178.7,36.1L177.4,39.0L175.5,40.9L172.9,41.0L170.4,41.9L168.4,40.6L166.4,41.4L164.7,45.1L165.4,47.4L168.2,49.4L172.2,50.2L174.2,49.9L175.3,50.6L176.4,53.5L175.6,54.0L175.4,56.7L177.9,58.3L181.5,58.2L182.5,57.3L182.5,56.5L185.7,54.2L185.3,53.7L189.1,52.4L195.9,55.6L198.4,55.7L199.1,55.0L201.2,56.1L203.7,56.1L203.0,56.8L203.1,58.0L202.0,58.9L202.6,60.0L201.2,60.9L200.5,60.8L199.9,59.9L198.1,59.8L191.4,62.8L189.5,62.6L190.2,64.2L188.8,64.5L188.2,66.9L186.4,67.5L185.9,67.1L185.9,66.1L184.8,66.3L184.1,67.0L185.5,68.1L183.8,69.2L183.2,70.2L181.2,71.5L179.0,73.9L178.4,75.5L177.4,76.4L177.0,77.8L177.2,78.6L178.4,78.6L180.2,80.1L185.4,82.7L187.2,88.1L190.0,93.4L189.9,96.4L193.6,98.4L194.4,100.7L196.1,101.6L197.4,102.9L197.6,104.5L196.8,104.6L193.7,103.2L190.8,103.1L189.4,101.7L187.3,101.1L183.6,102.5L184.8,102.8L187.2,101.8L188.8,102.1L189.4,103.5L191.4,104.4L196.0,107.8L197.4,110.0L197.7,111.2L194.2,112.3L191.0,114.3L190.2,115.7L189.6,116.0L186.8,115.7L184.8,116.9L187.1,116.4L188.2,117.9L190.3,117.6L193.0,116.4L194.3,117.1L196.2,119.2L199.3,120.1L194.9,123.4L196.3,123.2L197.8,122.2L198.4,123.3L198.0,126.4L197.5,126.4L196.5,125.3L195.1,125.5L194.4,126.4L196.2,127.9L195.1,128.1L196.1,128.8L194.6,130.5L195.7,133.5L194.9,133.2L193.1,134.1L192.7,133.1L192.1,133.2L190.7,135.7L189.1,135.9L189.7,136.9L187.8,139.6L188.0,141.0L185.5,143.7L183.7,147.6L183.1,148.0L182.5,147.8L182.0,145.8L181.1,146.8L180.2,146.3L180.6,147.7L181.7,148.4L182.4,150.2L179.3,152.5L176.8,152.0L178.3,153.4L180.4,153.0L180.7,153.7L179.8,156.5L180.5,158.2L178.9,157.6L177.1,157.7L177.0,158.5L177.9,159.5L175.5,159.7L175.1,160.4L175.4,161.5L175.0,162.1L172.9,162.9L173.6,163.7L173.1,164.7L170.3,165.1L168.7,164.7L168.1,165.9L166.9,166.0L167.2,166.6L168.3,166.8L168.5,167.9L166.8,169.9L166.1,169.9L165.2,171.4L164.0,171.4L163.2,173.5L162.7,172.4L161.1,173.6L159.8,173.0L159.4,174.6L157.6,175.5L158.1,176.1L156.9,177.0L156.4,179.0L154.7,178.7L154.0,179.5L151.7,180.2L150.0,179.7L149.0,180.9L148.1,180.9L146.7,180.1L144.0,181.8L143.2,181.7L142.5,180.6L141.7,181.7L141.7,182.5L140.1,182.0L137.6,182.6L136.2,181.8L134.6,179.7L134.6,177.4L133.8,177.6L133.3,178.0L133.3,179.0L132.4,179.2L134.1,182.0L134.1,185.1L131.0,186.4L130.6,185.2L129.5,187.8L129.1,188.0L128.4,187.5L126.7,188.9L125.0,187.2L125.2,188.7L124.6,189.2L121.8,188.3L121.3,189.4L120.5,189.4L119.2,190.7L117.0,191.4L114.7,191.2L114.6,191.8L112.8,192.2L111.3,193.7L110.5,193.5L110.1,192.6L109.8,194.0L108.1,196.0L108.3,196.7L109.7,196.9L109.3,198.3L110.9,199.6L110.4,201.0L109.6,201.5L107.9,201.8L106.5,201.5L106.1,200.9L106.1,200.5L106.8,200.6L106.7,200.2L105.9,199.6L104.4,196.2L104.5,194.4L105.3,192.6L106.4,192.3L106.4,191.4L105.7,191.4L105.1,190.7L104.6,191.0L103.6,189.6L103.3,189.6L103.5,190.9L100.5,191.9L99.9,191.8L100.1,190.5L97.6,190.1L96.4,189.0L96.2,187.8L95.3,187.8L95.5,190.1L95.1,190.3L94.2,189.6L93.6,190.8ZM113.7,204.1L114.4,205.0L114.7,206.9L113.2,207.8L111.9,210.0L110.4,214.6L107.3,216.7L107.5,217.2L105.5,217.6L104.7,218.8L103.3,219.1L99.5,217.9L97.0,216.5L96.5,213.3L96.8,209.9L101.4,206.0L100.7,206.0L101.3,205.0L103.2,204.8L104.3,204.1L107.6,204.1L108.3,203.5L109.6,203.7L110.0,204.2L110.0,203.5L111.5,204.2L111.9,202.8Z"}, "chinmi_europe": {"w": 199.5, "h": 139.2, "proj": {"lon0": -11, "lat1": 64, "c": 0.649448, "k": 4.8}, "base": "M255.5,104.4L256.3,104.8L255.2,105.5L253.1,107.9L254.7,108.2L255.2,109.3L256.8,109.8L257.7,107.8L258.4,109.5L259.3,109.6L259.3,110.3L262.3,111.3L260.6,112.7L260.0,112.4L259.9,113.3L259.1,113.1L257.8,114.5L256.6,113.8L254.5,114.2L253.7,113.2L254.8,111.6L253.8,110.2L251.6,112.0L250.5,111.5L250.0,112.5L250.2,114.2L248.2,114.4L249.3,114.8L248.8,115.0L249.0,115.6L248.3,116.0L247.7,117.4L244.8,117.3L244.3,119.0L245.2,119.4L245.3,120.0L246.6,120.2L246.5,122.5L247.4,124.0L245.8,126.9L245.5,128.8L241.7,127.9L241.8,124.7L239.9,123.6L238.8,123.7L233.1,119.2L228.9,115.0L227.3,110.0L226.0,109.1L225.2,109.5L222.8,109.3L221.6,108.5L222.0,106.5L221.2,105.7L221.3,104.6L219.3,104.0L216.9,101.9L215.6,102.6L216.6,104.2L215.2,103.3L214.5,104.7L212.9,105.0L211.9,106.3L212.0,109.1L208.8,108.9L208.8,91.2L216.8,88.5L224.5,94.1L227.5,98.4L231.3,97.8L235.2,98.2L236.6,97.4L238.5,99.3L239.4,101.4L240.3,100.8L240.1,105.6L241.6,105.6L242.2,109.5L246.1,109.5L246.6,110.3L246.4,111.3L247.6,112.2L248.1,112.2L248.1,111.0L249.9,108.4ZM28.0,70.9L27.5,71.1L27.4,70.7ZM20.5,47.1L19.4,47.6L19.9,46.7L20.6,46.1ZM26.0,59.4L24.0,60.5L23.2,60.4L22.2,59.6L21.1,59.7L21.5,59.2L20.6,58.8L19.0,59.4L17.9,58.2L21.4,56.0L21.9,55.0L21.5,53.2L19.7,53.7L21.0,52.1L22.6,51.3L24.6,51.6L24.7,50.8L25.7,51.3L24.7,50.3L25.4,47.1L24.4,47.4L23.1,45.3L23.5,44.3L24.8,43.4L23.2,43.5L22.0,44.3L19.3,43.9L19.0,44.7L18.3,43.9L18.2,43.3L19.7,40.8L19.0,39.8L19.2,38.7L20.0,38.7L19.2,38.2L19.3,37.6L18.0,38.9L18.7,37.3L17.5,38.3L17.0,41.3L16.3,41.5L17.1,39.3L16.8,39.3L17.0,37.2L18.1,34.8L16.7,35.8L15.2,35.0L16.4,34.3L16.0,34.1L16.9,33.1L16.2,31.5L16.9,31.0L16.5,29.9L16.8,29.4L18.2,29.4L17.4,28.5L17.6,27.7L18.7,27.5L18.7,26.1L21.2,26.1L24.8,25.8L24.3,27.3L21.9,29.0L21.7,29.5L22.3,29.7L21.4,30.8L23.7,30.2L27.8,30.2L28.7,31.2L26.2,35.7L24.0,36.7L25.3,36.5L26.0,37.2L23.8,38.3L22.5,37.9L27.6,38.9L29.1,40.5L30.4,44.6L34.0,47.4L33.7,47.9L34.7,49.9L32.2,49.3L33.4,49.5L35.1,51.2L35.4,52.0L34.4,53.3L35.2,53.7L36.0,53.0L38.3,53.2L39.5,54.0L39.7,54.8L39.3,57.0L38.1,57.7L38.3,58.3L36.6,58.9L37.1,59.7L35.6,60.2L38.7,60.7L38.6,61.5L37.3,62.8L35.2,63.5L31.8,63.5L29.9,62.9L30.1,63.3L29.6,63.6L28.0,63.7L27.9,64.3L24.9,63.8L23.7,64.2L22.8,66.0L21.2,65.3L19.6,65.8L18.3,67.0L16.8,67.0L21.2,61.5L24.5,61.4ZM21.2,51.3L21.6,51.5L20.7,52.2L20.1,50.9ZM31.0,16.7L30.7,16.3L31.2,15.9ZM30.2,16.6L31.0,17.4L30.3,19.7L29.9,18.3L29.1,17.8L30.0,17.6L29.4,16.8L30.0,16.3ZM31.9,15.3L31.7,15.9L31.4,15.6ZM24.8,23.9L25.6,24.4L24.2,24.2L24.0,23.4ZM18.4,41.0L17.7,40.9L17.6,39.9L18.2,40.0ZM16.3,36.7L14.6,37.0L15.2,36.0L14.6,35.5L15.3,35.3L16.3,36.0ZM15.2,38.7L15.3,40.0L14.6,40.3L14.5,39.5L14.1,39.9L14.2,39.2ZM15.7,39.3L15.4,38.9L15.9,38.5L16.4,37.8ZM15.0,27.1L13.9,28.4L14.3,28.7L12.6,30.0L12.2,29.7L12.9,29.2L12.3,28.7L12.4,27.7L13.3,27.9L13.2,27.4L14.8,26.4ZM15.1,31.2L15.2,32.1L16.6,32.5L15.7,33.4L15.5,32.6L14.8,32.7L13.2,31.5L14.5,30.4ZM11.8,30.3L11.9,31.0L10.9,30.5ZM11.7,33.0L11.2,32.5L11.2,31.8L11.6,31.8ZM14.9,47.6L13.6,47.7L12.4,46.0L11.4,47.4L9.8,47.0L8.9,45.8L10.1,45.1L9.6,44.6L10.8,44.3L11.3,43.1L12.6,42.3L15.2,42.2L16.5,44.1L16.0,44.9L16.9,44.8L17.2,45.6L16.6,45.4L16.8,46.7L15.5,47.8ZM31.0,63.9L30.4,64.4L29.6,64.0L30.2,63.5ZM209.8,184.1L210.1,187.3L209.1,188.5L208.9,187.4L208.2,187.8L208.1,190.8L208.8,191.7L207.2,192.3L206.1,198.6L198.7,197.2L198.1,197.1L195.1,191.6L195.2,190.4L196.1,192.1L198.4,191.3L202.3,191.6L203.9,190.7L205.0,188.1L208.7,183.4L209.1,182.1L209.3,183.9ZM153.4,81.2L151.3,81.2L149.0,83.0L146.0,83.4L143.6,85.9L144.3,85.1L144.1,84.3L142.9,85.5L143.2,87.7L142.4,86.5L139.7,85.4L138.5,86.1L137.8,85.6L135.5,86.0L133.5,85.0L134.1,84.3L132.7,83.7L135.2,84.1L135.8,83.4L134.2,83.3L133.3,80.6L133.6,83.3L132.6,83.2L132.7,82.7L132.2,83.4L130.3,83.8L128.5,87.0L126.7,87.7L126.9,90.0L126.0,89.2L123.9,90.1L122.2,89.0L123.1,88.7L123.1,88.0L124.5,86.2L124.6,84.2L125.3,83.9L125.3,84.6L126.9,84.2L127.3,84.7L128.2,84.4L127.6,83.8L127.4,82.4L126.5,81.8L126.4,80.3L125.1,79.2L125.1,77.0L124.5,77.0L124.0,76.2L123.0,76.4L120.2,74.5L118.0,74.9L116.3,75.8L115.8,76.8L112.2,78.1L110.9,77.1L106.6,76.4L105.6,77.1L103.3,74.9L104.6,71.7L105.4,71.9L105.2,71.3L105.1,69.1L109.4,64.7L109.0,63.4L109.4,63.0L108.1,60.9L107.9,59.5L109.0,59.6L110.2,58.2L115.1,58.0L118.9,58.8L120.6,60.1L122.1,59.5L123.9,60.3L125.0,59.4L125.8,60.6L128.3,60.1L129.5,61.1L129.6,59.1L130.9,57.4L134.4,57.4L135.4,56.1L139.5,55.9L141.5,58.7L140.7,59.1L140.9,61.2L143.6,61.4L144.4,62.2L145.2,65.4L146.9,65.2L148.4,66.2L151.0,65.2L152.9,67.6L153.6,66.9L155.6,68.0L156.4,67.9L158.3,69.3L159.2,69.2L159.3,70.8L158.0,72.0L159.0,72.9L158.3,72.9L157.9,74.0L158.5,74.2L158.9,75.5L158.3,77.3L155.6,77.5L153.9,78.7ZM134.1,85.4L132.7,85.2L132.5,84.6ZM208.8,108.9L212.0,109.1L211.9,106.3L212.9,105.0L214.5,104.7L215.2,103.3L216.6,104.2L215.6,102.6L216.9,101.9L219.3,104.0L221.3,104.6L221.2,105.7L222.0,106.5L221.6,108.5L222.8,109.3L225.2,109.5L226.0,109.1L227.3,110.0L229.1,115.3L233.1,119.2L238.8,123.7L239.9,123.6L241.9,124.9L241.7,127.9L239.3,126.9L238.6,128.4L236.3,129.0L235.4,132.8L233.8,134.3L231.1,135.1L230.9,137.1L229.7,138.0L228.5,138.4L227.5,137.1L226.1,137.0L225.2,135.8L224.8,131.3L222.4,131.3L221.5,129.8L219.6,128.4L219.2,127.1L217.6,126.3L215.9,126.4L213.1,124.9L212.6,123.8L210.2,123.6L209.7,124.4L206.9,124.6L205.4,125.9L204.8,127.3L202.4,128.0L202.2,120.2L201.7,119.0L200.6,118.4L200.0,118.7L200.2,117.1L201.4,117.4L201.0,115.6L199.5,115.3L199.6,116.3L198.7,113.3L199.3,110.2L200.0,111.2L201.4,111.3L202.2,112.1L203.8,111.9L203.6,111.2L204.8,111.0L204.8,110.1L202.9,107.9L202.0,105.0L200.0,105.1L199.4,105.7L198.9,107.0L199.0,109.4L197.9,106.7L199.7,104.9L203.0,104.0L205.3,105.8L207.1,109.0ZM115.2,114.5L114.5,114.7L114.5,114.3L115.1,114.1ZM163.7,107.9L166.7,108.3L167.1,107.6L167.7,107.7L170.3,110.7L170.4,114.6L172.7,115.2L174.0,116.9L173.3,116.3L172.7,118.0L171.5,118.2L172.4,122.9L172.9,123.2L172.1,125.2L173.3,126.2L173.8,128.9L173.3,128.8L172.3,129.7L171.8,128.2L170.4,128.5L167.6,127.8L166.3,129.1L165.9,128.2L163.7,129.2L161.2,129.1L157.0,131.1L155.1,131.1L153.3,130.1L151.0,131.3L148.6,130.5L148.5,133.3L147.7,133.6L146.9,135.2L146.2,134.8L145.9,132.9L147.1,131.2L146.7,130.0L144.6,131.6L142.5,130.5L140.1,133.0L136.5,134.2L132.0,130.6L129.8,130.2L129.2,133.1L126.8,133.6L125.4,132.8L124.6,131.0L122.5,130.5L121.6,131.4L121.8,130.8L119.9,131.0L121.6,130.4L122.3,129.5L119.3,129.7L119.4,129.0L120.1,128.8L118.7,126.4L119.2,126.1L119.2,124.9L116.2,123.5L116.7,121.7L117.4,123.2L118.9,122.6L118.2,122.5L117.7,121.4L118.5,120.5L117.9,120.2L117.5,118.6L118.1,117.4L115.6,117.5L115.9,115.2L117.6,113.3L119.3,113.0L119.9,113.7L120.7,113.6L121.2,112.7L121.5,113.4L124.7,113.3L124.0,112.6L124.6,112.2L127.3,111.6L125.0,110.7L125.2,109.3L131.7,109.9L135.0,106.9L138.4,105.5L142.6,105.8L143.4,105.3L144.3,106.9L145.1,107.4L146.7,107.1L147.8,109.1L148.9,108.7L149.8,109.5L153.9,110.8L157.2,109.9L159.8,110.6ZM121.6,105.7L122.2,107.7L124.9,109.3L124.6,110.4L122.1,110.0L120.0,110.5L119.3,111.9L116.0,114.8L116.1,113.7L117.8,112.2L115.7,112.3L115.5,111.7L116.1,111.0L116.4,109.3L117.3,108.5L117.2,107.5L116.3,106.8L117.1,105.8L119.2,105.2L120.1,106.0ZM70.2,147.9L70.2,151.6L66.3,155.1L65.8,156.2L66.1,159.4L65.1,161.3L64.0,162.1L62.5,153.3L60.3,151.0L59.6,148.5L58.4,147.5L57.7,144.8L57.7,143.6L60.0,140.5L60.5,138.2L60.2,133.5L59.9,131.9L61.0,129.9L62.8,128.7L64.5,128.0L65.0,128.1L64.9,129.0L65.1,128.4L65.7,128.4L66.7,130.9L68.7,129.3L69.0,130.2L66.9,133.6L67.3,134.9L68.6,136.2L69.0,138.0L67.6,140.7L65.8,142.7L65.6,143.7L66.4,145.3L67.7,145.5L67.7,146.3L68.5,145.8L69.2,147.6ZM68.4,145.3L67.8,145.4L67.8,144.7L68.3,144.5ZM146.2,134.8L147.0,135.2L147.7,133.6L148.5,133.3L148.6,130.5L151.0,131.3L153.3,130.1L155.1,131.1L157.0,131.1L161.2,129.1L163.7,129.2L166.1,128.3L166.3,129.3L164.6,131.5L163.0,132.6L162.7,140.3L161.9,142.1L160.3,143.1L149.1,152.1L147.7,151.7L145.9,150.1L146.4,145.3L147.7,144.8L147.4,144.4L148.3,142.9L147.5,141.6L147.7,140.8L146.4,141.0L145.8,136.5ZM64.0,79.1L63.9,81.3L65.9,82.3L66.6,81.7L66.9,82.1L66.8,83.8L65.7,83.5L65.9,85.3L65.3,84.7L64.0,84.9L63.3,84.0L62.2,87.2L60.4,84.3L58.8,86.7L56.5,87.0L55.4,85.6L55.4,84.4L54.3,84.3L52.9,85.7L53.5,83.5L56.0,80.3L56.0,79.4L57.2,79.5L58.0,78.8L60.6,78.7L61.0,77.9ZM104.6,71.7L103.2,74.9L102.0,75.1L101.2,74.1L98.2,74.3L97.7,75.4L96.5,76.1L95.3,75.8L92.9,76.8L92.7,77.8L90.9,77.9L89.7,77.9L87.7,76.8L86.9,74.9L87.7,72.8L89.7,72.5L92.3,69.6L94.0,70.1L94.9,69.1L95.9,70.2L96.0,71.1L96.8,71.1L97.8,70.2L99.6,70.5L100.8,69.9ZM85.8,84.0L85.2,83.8L84.9,84.6L83.0,85.4L83.1,87.1L81.9,87.7L82.1,89.0L80.4,88.9L79.7,88.0L79.1,88.9L77.6,89.1L76.6,88.7L77.5,88.2L77.1,87.5L76.3,86.4L76.8,85.6L76.0,85.1L77.0,83.9L79.6,84.5L80.7,83.5L84.0,83.1L84.5,82.3L85.1,82.3ZM100.9,92.0L103.2,93.4L104.4,92.6L105.1,93.1L104.4,93.6L105.1,94.9L104.0,97.0L104.6,98.6L105.9,99.9L105.1,101.4L104.3,101.6L104.2,104.0L101.5,104.4L102.1,102.4L101.0,102.0L99.1,99.5L97.7,101.6L94.2,98.6L94.3,98.0L94.9,98.1L94.3,96.2L95.3,95.8L93.9,94.3L94.6,91.9L93.5,91.7L93.9,90.3L94.8,90.2L93.5,89.3L93.2,86.7L95.4,85.6L97.3,85.8L99.1,87.6L99.1,89.0L101.3,90.5L100.9,91.2L101.4,91.7ZM196.3,216.0L187.2,218.0L184.5,220.0L182.2,225.1L181.3,225.9L180.7,225.8L180.0,224.3L176.2,224.2L175.0,223.5L171.2,224.0L169.6,223.1L168.9,223.9L168.9,227.1L167.7,228.6L166.1,223.5L164.4,221.3L162.8,217.5L161.4,212.4L158.1,209.3L156.7,206.5L155.8,202.2L156.1,198.8L154.2,193.4L152.5,191.1L151.3,190.6L150.2,188.1L150.1,185.8L144.0,172.6L142.2,172.5L143.2,166.3L146.7,167.0L148.7,164.0L151.1,163.2L151.7,161.6L152.7,160.8L151.7,159.2L149.5,156.0L156.3,153.0L160.1,153.9L165.5,158.0L173.6,167.0L182.2,168.1L182.9,170.2L185.3,170.2L186.4,174.1L190.6,179.2L190.2,179.1L190.8,180.9L190.4,182.6L192.8,188.7L193.2,189.2L194.6,189.3L194.2,190.4L195.0,190.6L195.1,191.6L198.1,197.1L206.1,198.6L206.3,198.2L207.7,201.6L205.7,211.2ZM441.7,104.1L440.9,102.1L442.9,101.3L443.5,99.0L443.5,95.7L442.6,91.9L444.1,91.3L445.3,89.6L448.7,91.1L449.3,90.6L449.5,88.8L450.3,88.3L451.6,85.2L452.5,80.1L454.4,78.2L453.8,76.7L454.1,75.6L452.9,75.0L450.4,76.3L449.3,76.3L447.3,78.2L442.5,78.2L441.8,76.7L442.1,75.2L441.3,73.9L441.3,72.7L440.2,72.5L438.0,70.1L436.6,70.2L435.5,69.1L433.3,69.3L431.9,68.2L432.0,66.2L431.2,65.5L431.2,63.8L430.0,61.9L427.2,54.1L426.0,52.6L424.2,51.8L423.4,52.2L419.6,50.2L411.4,51.4L408.7,53.8L408.6,54.6L410.4,54.9L410.5,57.7L408.6,59.5L405.8,65.3L406.3,65.9L406.1,66.9L403.5,67.9L401.7,69.5L396.6,67.2L394.1,67.7L392.0,66.1L390.6,65.9L388.3,67.2L385.9,69.5L381.4,70.3L379.4,71.3L372.9,70.5L370.9,68.9L370.7,67.5L368.6,67.3L366.9,65.7L362.8,64.9L358.7,66.5L356.3,66.2L353.2,64.4L352.6,60.7L345.8,58.8L342.6,57.0L341.8,58.6L339.9,60.2L339.3,62.2L339.9,64.1L340.7,64.6L340.6,65.7L339.8,67.1L337.8,68.4L333.8,67.2L332.1,67.6L329.2,67.1L328.4,66.1L328.1,64.5L324.5,64.3L324.0,63.5L323.0,63.9L322.2,63.1L321.7,63.8L320.5,63.9L319.3,65.0L315.0,66.8L313.7,67.7L313.8,68.6L312.1,69.6L309.2,69.8L308.6,71.1L306.8,71.6L304.3,69.3L304.5,68.3L302.9,69.6L300.0,69.0L299.2,66.9L297.2,66.1L296.0,63.5L294.1,62.4L292.3,62.9L291.5,63.7L288.2,63.6L288.0,62.6L287.0,62.5L287.2,61.5L286.0,61.0L285.1,61.5L285.0,62.7L283.6,63.5L277.0,51.5L272.7,47.9L272.5,47.3L273.3,47.3L273.8,45.9L269.5,47.6L268.8,48.5L266.4,49.7L266.1,50.5L264.5,49.8L263.1,50.7L262.8,49.4L264.0,48.3L263.9,47.7L262.6,48.2L260.7,47.4L260.1,48.3L259.3,46.4L258.8,47.0L255.9,47.0L256.2,45.1L254.8,41.7L253.1,42.4L249.3,41.3L246.9,42.4L246.8,43.3L238.4,45.0L237.2,46.4L235.2,46.2L227.3,48.3L225.2,47.9L224.4,49.8L226.1,50.3L225.2,50.7L225.1,51.4L226.5,51.7L227.8,52.8L224.6,52.9L223.7,54.4L224.4,56.0L221.4,57.9L222.8,59.3L226.2,60.8L225.7,63.1L224.3,63.9L222.7,63.9L221.5,63.1L219.8,64.8L219.6,64.2L217.9,63.9L216.2,62.1L214.6,62.0L213.4,62.9L212.0,62.1L210.4,62.3L207.9,64.4L204.6,62.3L204.4,64.6L203.1,62.2L200.6,60.1L198.2,60.1L197.1,59.0L194.3,60.1L192.6,58.9L191.1,60.9L188.6,62.0L188.0,63.1L185.9,64.3L186.3,67.5L185.0,67.9L183.0,65.4L182.1,65.5L180.5,68.7L180.2,70.2L180.9,71.3L179.9,72.9L179.7,74.8L181.0,75.7L181.7,78.0L184.4,78.2L186.9,82.7L185.7,82.8L185.6,83.5L187.8,85.0L186.1,86.0L186.2,86.9L185.4,86.7L182.8,88.4L182.3,87.9L182.4,88.8L181.1,92.1L180.8,91.8L179.9,93.3L181.8,95.5L182.2,98.1L182.8,96.6L182.3,100.6L185.7,106.3L183.5,109.4L181.8,109.0L180.0,106.5L176.6,104.6L176.6,103.1L175.6,103.1L174.2,102.0L173.9,102.6L173.0,102.0L170.9,102.9L170.8,102.0L167.6,100.0L163.9,99.7L161.0,98.2L159.5,98.1L158.9,98.8L155.0,94.6L153.3,94.0L152.3,92.6L151.2,92.7L150.3,91.3L148.5,90.6L149.4,89.8L149.0,89.2L150.3,89.9L151.7,89.4L151.5,88.5L152.5,86.4L153.0,86.7L153.3,85.9L154.3,86.0L152.5,84.4L152.0,83.3L154.3,83.2L154.1,82.5L156.7,81.4L156.5,80.3L154.8,80.9L155.1,80.3L154.5,80.5L153.4,81.2L153.4,80.1L153.6,78.9L155.3,77.6L158.3,77.3L158.9,75.5L158.5,74.2L157.9,74.0L158.3,72.9L159.0,72.9L158.0,72.0L159.3,70.8L159.2,69.2L158.3,69.3L156.4,67.9L155.6,68.0L153.6,66.9L152.9,67.6L151.0,65.2L148.4,66.2L146.9,65.2L145.2,65.4L144.4,62.2L143.6,61.4L140.9,61.2L140.7,59.1L141.5,58.7L139.5,55.9L135.4,56.1L134.4,57.4L133.3,57.1L132.7,56.1L132.7,54.0L131.7,52.7L132.2,51.9L134.5,52.4L136.2,51.2L136.2,50.6L135.4,49.5L133.3,48.9L133.5,47.9L132.2,47.1L131.2,45.6L131.4,45.0L130.3,44.2L130.9,43.0L130.4,41.9L130.6,40.3L128.5,39.1L126.2,39.9L125.9,38.7L124.8,38.3L124.1,38.7L122.0,37.7L121.9,35.8L121.1,34.3L120.5,34.3L121.0,32.2L119.6,31.1L120.1,29.8L120.9,29.5L120.0,27.7L119.8,25.0L122.0,22.2L121.8,20.2L122.6,20.7L123.2,19.9L124.5,20.0L125.2,19.2L128.2,19.8L128.3,19.4L126.9,18.3L124.9,18.3L123.6,17.4L123.2,15.9L120.9,16.6L131.5,7.3L132.6,5.4L131.5,3.8L127.8,1.3L129.5,-0.4L129.3,-1.1L127.8,-2.5L128.2,-3.5L126.6,-4.6L127.3,-5.5L126.6,-6.0L127.2,-7.5L126.9,-7.8L128.1,-8.1L128.1,-8.6L124.9,-13.9L127.8,-17.6L125.8,-19.5L123.7,-20.1L123.0,-21.5L124.0,-23.2L122.9,-23.5L125.1,-24.2L125.9,-25.4L127.8,-25.9L128.3,-27.0L130.5,-26.6L130.5,-27.8L132.6,-27.3L134.0,-27.9L134.0,-28.6L137.2,-27.5L136.9,-26.9L134.6,-27.2L135.2,-26.3L137.2,-26.3L137.1,-25.8L138.6,-26.1L137.6,-24.3L139.3,-25.5L146.1,-24.9L151.9,-22.5L154.1,-20.9L157.6,-19.5L158.4,-19.5L158.4,-19.9L160.2,-18.4L162.0,-17.8L162.5,-15.7L163.2,-15.4L162.7,-13.6L159.3,-11.0L154.8,-9.9L145.0,-11.5L142.9,-12.5L141.8,-12.2L141.7,-12.7L137.6,-13.7L136.7,-14.5L136.9,-14.8L133.7,-15.2L135.6,-14.4L135.5,-14.0L136.7,-13.1L137.7,-12.9L137.8,-12.2L139.2,-11.7L138.3,-11.2L140.6,-10.7L142.4,-9.4L142.7,-8.5L141.5,-6.7L142.8,-4.7L143.5,-2.1L145.4,-1.8L147.7,-0.0L150.8,0.9L152.7,0.2L152.9,-0.4L152.6,-1.5L150.2,-2.0L148.3,-3.8L148.2,-4.5L149.0,-4.7L149.3,-5.6L158.2,-2.8L159.2,-3.7L160.4,-3.7L158.4,-6.5L158.4,-7.7L161.1,-9.4L163.6,-10.2L165.9,-12.1L169.1,-11.6L170.4,-10.8L170.0,-10.2L171.0,-10.3L171.8,-9.6L171.8,-10.7L173.0,-12.8L172.8,-14.1L172.4,-14.9L170.8,-15.6L172.2,-19.2L172.1,-20.4L169.6,-22.5L171.6,-21.8L177.4,-21.5L179.8,-19.1L179.8,-18.5L176.2,-18.0L174.3,-16.4L176.3,-15.3L177.3,-13.9L179.2,-13.4L182.9,-14.3L183.5,-17.2L186.5,-17.7L186.3,-18.7L187.5,-18.6L192.3,-20.7L196.4,-21.8L197.6,-20.9L198.6,-21.5L197.5,-22.1L202.0,-24.0L204.2,-24.0L202.0,-23.6L202.5,-23.3L201.9,-22.2L202.4,-21.3L200.3,-20.5L204.1,-20.6L205.3,-20.2L205.5,-21.0L207.0,-21.9L209.0,-22.3L212.4,-21.9L215.6,-23.5L218.4,-24.0L219.4,-22.7L218.6,-22.2L218.5,-21.3L220.5,-20.9L221.1,-21.5L221.0,-22.6L222.9,-22.7L224.2,-23.9L221.9,-26.8L224.2,-28.1L234.4,-26.6L236.7,-25.6L236.6,-25.2L243.2,-23.4L245.4,-21.7L247.8,-20.9L249.8,-23.8L248.0,-23.8L246.6,-25.1L246.3,-26.3L245.1,-26.8L243.4,-27.3L242.8,-26.7L242.9,-28.9L243.9,-29.3L244.0,-32.3L243.6,-32.8L242.2,-32.7L242.7,-33.9L242.0,-34.0L242.9,-35.0L247.1,-36.9L249.5,-41.6L251.3,-43.1L251.7,-42.6L257.2,-42.8L261.3,-41.7L260.5,-38.5L258.3,-35.8L260.6,-34.3L260.9,-33.4L260.9,-31.0L260.2,-30.1L260.5,-23.8L263.7,-21.5L262.3,-20.1L262.1,-18.1L260.6,-17.2L258.3,-14.4L256.8,-14.2L257.3,-12.9L254.8,-12.1L253.7,-12.5L254.7,-13.2L253.4,-12.9L252.1,-13.7L250.1,-13.6L249.4,-13.4L250.0,-12.4L253.6,-11.2L256.7,-11.3L258.5,-10.8L259.7,-11.2L260.0,-12.3L264.3,-14.4L265.2,-16.4L267.4,-18.1L267.3,-19.6L266.2,-21.2L266.8,-22.8L271.5,-23.9L272.6,-23.9L275.1,-21.5L274.9,-18.1L276.7,-17.1L280.3,-17.2L276.2,-18.0L276.4,-20.1L277.4,-20.4L276.4,-23.5L271.2,-25.1L269.4,-25.1L267.5,-24.4L264.3,-25.0L264.6,-26.0L263.7,-27.9L266.0,-31.6L263.7,-34.6L262.1,-35.7L264.0,-37.7L268.1,-39.1L268.3,-41.0L267.4,-42.3L269.2,-42.2L270.0,-41.2L270.4,-39.8L268.9,-38.2L268.9,-37.5L269.7,-36.7L269.0,-35.7L270.4,-34.9L274.1,-34.2L276.2,-34.4L278.4,-33.3L280.6,-33.4L279.0,-33.7L278.1,-34.9L272.6,-36.3L271.3,-38.0L273.9,-38.6L276.0,-37.6L278.0,-38.0L277.5,-38.8L275.9,-38.7L275.7,-39.2L278.9,-40.3L281.9,-40.2L286.1,-38.8L288.9,-37.0L293.4,-37.1L293.8,-36.8L293.0,-35.8L290.9,-34.8L291.0,-32.7L290.4,-31.7L290.6,-30.7L291.8,-33.1L293.1,-33.1L293.1,-31.6L292.0,-29.8L293.3,-29.2L293.3,-30.1L294.6,-30.5L295.3,-31.4L293.5,-34.1L294.7,-36.9L293.7,-37.8L291.9,-38.0L290.2,-39.7L286.3,-40.7L285.7,-41.8L286.3,-43.0L285.0,-44.3L285.5,-45.9L299.9,-46.7L305.2,-47.5L305.6,-47.2L301.7,-45.3L301.8,-44.8L304.5,-43.7L302.3,-44.9L302.2,-45.4L305.9,-46.2L307.3,-47.1L306.2,-47.4L304.2,-49.2L302.4,-49.5L303.6,-50.2L306.2,-49.7L301.7,-51.1L303.0,-51.9L305.1,-51.4L306.8,-52.5L307.0,-52.9L305.3,-53.1L305.5,-53.6L307.6,-53.4L315.4,-55.6L327.6,-57.2L323.9,-57.2L324.1,-58.0L325.0,-58.1L332.2,-58.3L333.8,-58.0L332.5,-57.1L335.1,-57.6L335.1,-57.1L341.9,-58.8L345.3,-57.7L344.6,-56.6L345.6,-57.3L345.5,-58.3L342.5,-60.0L351.0,-59.7L348.9,-60.3L349.5,-61.0L348.9,-61.5L349.1,-62.4L354.2,-64.8L358.5,-65.9L363.8,-64.9L364.9,-64.3L359.1,-62.9L367.7,-62.6L369.2,-62.0L366.7,-60.4L365.9,-60.4L366.0,-60.1L370.1,-60.1L371.5,-61.1L380.7,-61.1L383.2,-60.3L383.7,-59.9L383.3,-59.4L385.4,-59.4L385.9,-58.2L385.5,-57.9L387.4,-58.8L388.3,-57.1L389.2,-57.2L388.3,-55.5L384.9,-56.8L386.4,-55.5L387.3,-55.7L388.8,-55.0L388.5,-54.2L386.3,-52.9L376.7,-49.5L376.6,-48.8L371.6,-46.5L368.7,-46.2L366.8,-44.8L365.3,-44.7L362.1,-42.1L363.8,-42.4L366.2,-43.9L370.2,-44.0L379.6,-46.5L379.5,-46.9L376.3,-46.8L376.8,-47.7L378.0,-48.1L380.5,-47.7L380.7,-48.3L382.0,-48.1L381.0,-47.8L381.6,-47.2L383.9,-46.6L385.9,-46.8L386.4,-47.2L386.0,-47.8L386.7,-47.6L387.8,-46.3L387.0,-45.4L388.1,-44.9L388.0,-43.4L386.9,-42.4L387.5,-41.6L388.6,-41.4L387.2,-42.3L388.2,-43.5L388.3,-44.3L389.3,-44.9L388.1,-45.6L389.9,-46.0L393.8,-46.6L403.5,-46.0L405.1,-45.5L403.6,-45.4L403.5,-44.4L407.6,-43.1L416.3,-42.6L417.0,-42.8L416.2,-43.3L418.2,-43.0L419.7,-44.1L418.7,-45.3L419.0,-46.3L422.5,-46.8L425.8,-45.3L427.9,-45.8L428.0,-45.1L428.8,-44.8L430.3,-45.8L432.5,-45.5L436.7,-43.7L435.2,-42.7L436.5,-42.6L437.2,-41.8L434.6,-41.0L437.3,-40.5L437.7,-39.9L437.3,-38.8L436.2,-38.8L432.5,-40.4L436.2,-37.2L437.1,-38.0L437.9,-37.1L435.9,-36.8L436.8,-36.4L438.8,-34.2L441.2,-33.1L441.9,-33.4L442.7,-32.4L444.4,-33.1L447.8,-38.0L449.3,-36.5L451.0,-35.7L454.2,-35.5L456.9,-36.5L458.5,-36.6L464.3,-34.2L464.0,-34.7L465.5,-35.2L464.2,-35.4L465.2,-36.5L466.9,-36.6L468.3,-35.7L470.7,-36.0L469.8,-37.0L469.9,-37.8L468.7,-38.2L471.3,-39.3L468.2,-39.2L468.0,-40.0L469.5,-40.8L474.1,-41.2L472.8,-42.4L473.2,-42.7L490.2,-40.5L490.2,-40.1L485.6,-40.2L483.7,-39.6L484.7,-39.2L492.0,-39.8L489.8,-38.1L490.1,-39.1L488.7,-39.5L488.7,-38.1L486.5,-38.0L486.3,-37.2L486.9,-36.9L489.7,-37.5L493.4,-40.0L500.3,-39.2L501.9,-37.9L498.9,-37.4L498.7,-36.9L503.8,-36.1L504.0,-35.8L502.2,-34.7L504.9,-35.4L506.8,-35.0L508.4,-33.7L507.4,-33.5L509.7,-32.8L520.3,-34.1L529.0,-33.3L531.0,-32.6L532.8,-31.2L533.1,-30.3L532.2,-28.2L532.5,-27.8L535.9,-26.9L536.3,-24.5L537.2,-23.5L535.7,-21.8L536.5,-21.9L537.9,-23.5L537.9,-25.8L539.8,-26.9L543.0,-27.4L554.3,-26.4L557.6,-27.5L558.5,-26.8L559.0,-25.3L562.1,-24.4L563.0,-23.0L565.9,-23.2L567.3,-24.6L566.1,-26.8L564.7,-27.0L565.8,-28.1L565.8,-29.3L574.5,-28.0L575.0,-28.5L582.7,-28.3L591.8,-25.9L595.4,-23.9L595.4,-5.1L590.8,-2.9L588.4,-3.4L585.7,-5.2L584.0,-5.0L586.2,-4.8L586.8,-4.1L586.3,-3.8L583.1,-4.6L578.4,-3.3L583.1,-4.3L584.0,-3.4L583.4,-2.8L587.4,-3.7L587.4,-2.1L588.2,-1.5L589.3,-1.1L589.9,-1.7L590.4,-1.3L591.5,1.6L590.6,1.9L591.4,2.3L591.3,2.9L591.7,2.2L592.1,3.1L593.5,4.1L593.1,4.8L594.1,6.3L592.7,8.1L587.0,6.7L587.1,5.8L586.1,5.9L586.0,6.4L586.6,6.9L578.3,10.4L575.5,11.0L574.0,12.4L573.1,12.1L573.3,12.9L571.7,13.6L571.7,14.1L566.1,17.1L565.3,19.4L564.2,18.9L563.1,17.1L561.8,16.3L558.4,16.4L555.6,17.2L552.6,19.9L552.2,19.3L552.9,16.9L548.9,18.7L548.5,20.0L547.2,18.9L545.9,19.7L546.0,19.3L544.7,19.1L543.6,20.2L543.3,22.5L539.7,26.7L539.2,28.4L540.5,30.2L541.3,29.0L543.1,29.8L541.7,32.4L541.8,34.5L543.2,35.1L543.5,37.3L542.6,38.2L541.9,38.1L541.3,37.3L542.5,35.9L541.4,36.0L540.8,36.5L540.9,37.1L539.6,38.0L538.4,40.8L539.6,44.4L538.1,45.5L535.5,45.4L533.3,47.1L532.6,49.0L533.1,52.2L531.8,51.7L529.2,53.2L528.3,52.6L528.7,53.4L528.4,55.8L527.2,58.5L522.9,62.5L519.2,42.2L520.5,35.1L523.2,32.2L523.6,31.4L523.2,29.9L525.1,29.8L525.8,28.7L527.7,28.8L530.6,26.3L532.6,23.4L538.5,18.5L539.5,17.0L544.6,14.8L544.1,14.3L545.6,12.7L544.9,12.2L546.2,8.2L547.4,7.3L549.3,7.8L549.9,7.2L546.8,6.2L543.5,7.0L542.5,10.1L543.2,11.0L542.7,11.7L542.0,11.0L540.5,11.2L535.5,15.6L533.6,16.1L534.2,14.3L532.4,14.6L534.0,10.1L531.7,10.9L530.5,9.9L527.1,10.8L525.2,10.6L524.0,11.2L515.3,20.0L514.8,21.5L517.4,21.8L518.0,22.3L518.0,23.1L515.8,23.0L514.4,23.6L513.4,22.9L512.4,23.0L510.7,24.4L509.1,23.9L508.4,24.4L506.0,24.6L505.4,23.6L508.1,23.2L508.9,22.9L508.7,22.7L507.5,22.4L506.1,21.3L503.4,21.6L504.0,21.3L500.1,20.3L499.0,21.0L499.4,21.7L498.1,21.4L498.0,22.2L498.7,22.2L497.9,22.8L496.5,22.0L494.1,22.7L491.1,21.8L489.6,23.2L488.0,22.0L480.7,22.2L478.0,23.3L475.7,25.7L473.8,26.8L472.1,29.7L468.2,32.3L463.5,37.7L456.8,42.7L455.8,44.0L455.9,44.5L457.8,45.2L460.7,45.0L460.4,48.3L460.8,49.0L461.9,48.9L461.8,47.1L463.4,46.6L462.4,47.5L464.0,48.3L462.2,50.2L464.3,49.9L466.1,48.2L466.3,48.9L465.3,50.3L465.9,50.2L466.7,48.6L466.5,46.6L468.6,47.1L469.8,46.7L472.9,49.9L475.0,51.4L474.4,52.7L473.3,52.4L474.6,53.6L474.3,55.5L475.4,56.7L475.0,58.0L473.6,59.4L472.3,63.4L472.7,66.8L471.1,74.8L468.8,77.3L466.3,81.3L463.5,87.3L457.9,94.2L455.5,98.3L452.0,101.1L449.4,102.3L448.0,101.4L446.7,101.4L446.7,99.3L445.4,100.3L445.6,99.4L443.2,102.6L441.8,102.4L442.1,103.1ZM245.5,-58.7L225.6,-54.3L222.2,-52.8L222.9,-52.3L220.5,-51.6L220.3,-50.9L219.0,-51.3L218.3,-50.3L216.8,-50.4L217.0,-49.1L214.4,-48.1L214.7,-47.3L214.3,-46.9L213.0,-47.2L213.7,-46.4L210.8,-44.7L205.8,-45.4L203.6,-44.9L203.3,-45.8L202.1,-46.5L202.2,-47.0L204.6,-47.8L206.8,-50.0L209.3,-50.4L207.6,-51.0L210.4,-52.6L208.9,-52.8L208.3,-53.2L208.6,-53.6L210.6,-53.3L211.6,-54.0L211.5,-54.5L213.9,-54.4L215.3,-56.0L222.2,-58.1L224.3,-57.9L225.1,-59.0L230.6,-58.7L235.2,-59.4L245.2,-62.5L247.8,-62.1L249.2,-61.0L249.1,-60.4ZM206.7,-44.7L210.2,-44.2L209.2,-42.3L208.0,-42.1L207.0,-41.0L207.4,-39.5L206.7,-38.1L210.3,-34.1L213.9,-32.3L212.4,-31.6L210.1,-32.3L209.7,-32.2L210.6,-31.6L210.2,-31.5L207.9,-32.1L204.5,-32.1L200.7,-33.0L201.4,-33.4L201.6,-34.0L203.1,-34.2L200.8,-35.2L200.8,-36.1L195.8,-36.0L194.9,-36.7L194.7,-38.1L195.3,-38.9L197.2,-39.0L198.3,-39.8L199.3,-41.6L198.1,-42.1L200.7,-42.8L200.1,-43.7L200.6,-44.3L205.1,-45.1ZM145.9,-5.7L146.0,-4.8L145.5,-5.1L145.0,-5.5ZM199.2,-35.4L200.2,-34.4L199.6,-33.4L198.9,-34.2L197.1,-35.2ZM191.0,-24.9L190.8,-24.2L190.5,-24.6L189.0,-23.3L186.8,-22.8L185.3,-23.1L184.9,-23.7L184.9,-25.3L186.9,-26.4ZM222.7,-28.5L222.7,-27.5L222.0,-27.3L218.1,-28.3L216.6,-30.1L218.2,-31.0ZM99.6,41.9L98.5,43.3L100.3,43.5L100.5,41.9L101.0,41.9L103.1,42.9L104.6,42.9L105.4,43.8L105.1,45.0L105.2,46.3L95.4,45.8L96.6,43.6L98.3,43.2ZM139.0,85.9L139.7,85.4L142.4,86.5L144.8,89.7L147.0,89.0L148.3,89.3L147.7,90.9L145.8,90.9L144.9,90.7L143.7,92.1L141.7,92.5L140.5,94.0L139.2,93.9L138.6,93.3L138.9,90.7L135.6,89.3L139.2,86.7ZM122.2,89.0L123.9,90.1L126.0,89.2L126.9,90.0L126.4,92.0L124.8,92.4L125.0,91.3L124.4,91.6L123.4,97.2L118.7,95.2L116.0,96.0L113.8,97.6L105.7,96.8L106.1,95.6L104.4,93.9L105.1,93.1L104.4,92.6L103.2,93.4L100.9,92.0L101.4,91.7L100.9,91.2L101.3,90.5L99.1,88.6L99.1,87.6L97.4,85.9L100.2,84.9L103.8,78.1L104.8,77.9L106.4,76.4L110.9,77.1L112.2,78.1L115.8,76.8L116.3,75.8L117.6,75.5L118.4,76.1L121.8,81.7L122.3,83.3L121.8,88.3ZM194.1,189.1L193.2,189.2L192.7,188.2L192.5,185.3L193.3,182.5L194.1,181.7L195.1,183.5L195.1,187.4ZM-19.3,149.4L-18.0,150.2L-18.8,150.4ZM6.9,105.9L8.5,104.9L8.9,106.5L11.2,106.4L12.0,105.7L13.7,105.9L13.9,107.2L14.9,107.7L12.7,110.4L13.1,113.6L12.4,114.4L12.8,115.1L12.5,116.2L12.1,116.7L10.8,116.8L12.5,119.7L11.8,121.1L11.4,122.6L12.1,123.9L12.6,123.9L11.1,126.1L11.2,128.7L9.9,129.6L7.5,129.0L6.2,129.4L6.8,127.5L6.6,122.7L7.3,122.8L6.9,122.3L5.6,122.6L5.5,121.6L6.9,119.6L5.8,121.2L5.1,121.5L4.7,121.0L7.2,111.6L7.0,107.0L6.6,106.7ZM107.9,59.9L109.4,63.0L109.0,63.4L109.4,64.7L105.1,69.1L105.4,71.9L101.7,70.0L100.0,70.0L99.3,70.5L97.8,70.2L96.8,71.1L95.9,71.0L95.9,70.2L94.9,69.1L93.4,70.1L92.2,67.8L90.5,67.0L89.9,67.3L89.2,66.6L89.5,65.7L88.6,66.0L86.9,65.2L87.3,66.1L86.2,66.7L84.8,65.2L85.5,64.4L82.3,63.4L81.4,62.4L80.5,63.1L81.1,61.2L79.8,58.4L80.3,57.2L79.7,55.9L79.9,55.1L78.3,53.4L79.2,51.8L78.7,49.3L79.8,49.7L79.7,48.8L78.6,48.4L84.7,46.6L85.9,45.3L89.9,44.1L91.4,44.0L92.8,44.7L91.8,44.4L92.5,45.9L93.4,46.3L95.4,45.8L105.4,46.1L107.1,47.0L108.8,53.3L108.8,54.2L106.5,56.2L108.0,57.4ZM273.6,136.0L274.5,138.7L273.1,140.5L271.3,140.8L270.3,141.6L265.9,140.3L264.9,140.9L264.3,142.2L264.9,142.9L264.7,143.6L265.8,144.3L264.9,145.3L265.4,146.4L265.0,147.9L265.9,148.8L266.1,149.9L267.0,150.0L267.1,151.2L269.1,152.3L266.7,154.5L266.9,158.2L264.7,161.1L264.4,162.8L263.0,163.5L261.6,167.9L259.8,169.2L258.3,173.0L255.0,174.2L253.8,172.7L251.1,177.0L251.0,178.8L253.0,180.0L252.8,182.8L253.3,183.8L254.5,184.0L255.8,190.1L254.7,190.9L254.0,190.0L251.9,191.2L248.7,190.5L248.5,192.2L247.2,192.3L246.6,193.2L244.7,192.3L243.7,188.4L242.2,187.9L242.2,186.1L241.4,184.4L240.4,184.8L241.5,185.1L236.2,185.7L235.7,186.2L234.0,185.3L232.4,185.5L232.2,186.2L226.2,186.3L227.1,181.3L228.9,179.7L231.2,179.3L231.6,176.9L231.2,176.4L229.9,176.4L229.9,171.6L227.2,170.2L224.0,163.9L229.1,166.0L232.5,165.6L234.1,166.1L235.0,165.4L237.2,165.3L240.8,163.8L241.1,159.3L242.6,157.1L244.6,157.3L245.5,156.7L245.0,156.0L246.8,154.5L248.1,154.5L249.0,155.4L250.3,153.9L250.1,151.5L251.0,148.7L253.3,147.4L252.2,144.0L254.5,144.2L255.8,143.8L255.5,141.5L257.6,138.3L257.0,135.2L256.2,134.2L259.2,131.0L262.2,130.2L265.1,130.4L266.8,129.4L268.5,129.7L269.4,130.9L270.9,131.5L270.9,134.2L271.7,135.2L272.9,134.9ZM209.8,184.1L209.3,183.9L209.5,181.3L210.2,180.8ZM53.0,63.6L51.9,63.2L52.4,61.7L50.5,61.1L50.0,60.1L48.3,60.1L47.9,60.7L45.0,59.8L46.0,59.5L47.6,60.1L46.8,59.5L47.3,59.5L46.6,58.5L48.3,56.1L49.2,53.1L49.5,53.2L53.2,50.8L55.5,50.7L56.7,51.4L56.2,54.5L55.2,54.6L55.3,55.4L56.2,55.8L55.3,57.2L55.5,57.8L52.8,58.5L53.6,60.2L53.4,61.7L52.6,62.3L53.1,62.9ZM47.5,60.5L46.5,61.4L45.1,61.2L45.0,60.5ZM49.5,52.5L49.0,52.6L49.5,51.9ZM46.6,58.9L47.0,59.3L46.2,59.1ZM27.4,138.7L28.7,140.4L29.1,147.3L29.8,149.8L31.0,151.4L30.5,153.1L25.4,153.2L24.9,154.4L22.4,155.2L22.9,158.6L18.8,161.0L17.3,163.4L14.1,164.1L13.6,165.3L12.0,165.1L7.3,169.4L6.9,177.0L4.9,177.2L3.7,178.3L0.8,177.5L-1.2,178.2L-1.1,179.4L-2.2,181.9L-3.4,182.8L-4.5,188.0L-6.2,189.7L-7.2,192.1L-9.0,193.5L-10.0,200.1L-11.7,204.0L-18.7,204.4L-18.5,202.1L-16.7,198.7L-14.9,193.0L-15.5,193.6L-15.3,192.7L-12.2,188.5L-10.8,181.6L-8.0,178.9L-6.1,173.2L-1.7,171.3L2.5,166.2L4.2,162.7L4.2,161.1L3.5,159.8L3.7,156.4L5.2,153.2L5.5,150.9L7.8,147.6L12.8,144.1L15.8,135.4L17.8,134.9L17.9,136.2L19.9,138.2L23.7,138.2L25.0,137.2L25.4,138.6ZM6.8,174.5L7.2,174.4L7.2,182.4L-3.2,182.4L-3.2,194.6L-5.1,195.5L-6.7,197.7L-6.3,204.8L-18.6,204.8L-18.9,207.3L-18.7,204.4L-12.0,204.2L-11.3,202.8L-10.0,200.1L-9.0,193.5L-7.2,192.1L-6.2,189.7L-4.5,188.0L-3.3,182.4L-2.2,181.9L-1.1,179.4L-1.2,178.2L0.8,177.5L3.7,178.3L4.9,177.2L6.9,177.0ZM94.1,98.2L95.4,100.0L97.7,101.5L96.8,102.0L96.4,103.2L96.0,103.3L95.6,102.6L94.4,104.8L94.6,105.6L94.6,106.2L94.1,105.8L91.8,103.1L91.8,100.8L93.1,99.1L93.6,99.4L93.4,98.3ZM117.3,75.6L120.2,74.5L123.0,76.4L124.0,76.2L124.5,77.0L125.1,77.0L125.1,79.2L126.4,80.3L126.5,81.8L127.4,82.4L127.6,83.8L128.2,84.4L126.4,84.4L125.6,84.2L125.3,84.6L125.3,83.9L124.6,84.2L124.5,86.2L123.1,88.0L123.1,88.7L122.2,89.0L121.8,88.3L122.3,83.3L121.8,81.7L118.4,76.1ZM-4.0,236.1L-6.9,232.2L-7.5,230.1L-8.9,229.7L-11.0,227.3L-12.4,227.2L-14.9,228.1L-16.3,227.8L-17.3,231.2L-17.0,227.5L-15.7,221.3L-16.3,216.0L-17.2,214.3L-16.5,213.5L-17.0,213.7L-16.2,210.1L-18.3,206.0L-18.9,206.9L-18.6,204.8L-6.3,204.8L-6.7,197.7L-5.1,195.5L-3.2,194.6L-3.2,188.9L-3.2,182.4L7.2,182.4L7.2,176.2L19.3,187.2L13.7,187.2L16.7,227.7L17.6,229.0L17.1,232.8L5.7,232.8L5.1,231.9L4.8,233.0L0.9,233.2L0.2,234.5L-1.6,232.1L-2.4,233.2L-2.9,235.7L-3.4,236.4ZM79.7,135.1L79.0,135.0L79.0,134.5ZM101.5,104.4L103.7,103.9L105.5,105.6L106.0,107.0L105.1,109.5L102.9,109.8L101.6,111.0L98.9,110.9L98.0,107.9L99.1,105.3L99.9,104.8L100.6,105.1ZM53.4,66.6L54.5,68.6L54.1,69.8L52.9,69.8L52.3,69.4L52.2,67.6L52.9,66.4ZM105.3,46.3L105.4,43.8L104.6,42.9L100.5,41.9L99.9,38.1L101.8,36.9L105.6,36.5L109.5,37.1L111.7,36.4L112.4,37.4L114.3,37.9L117.2,40.0L116.8,41.6L117.7,41.8L117.2,42.6L116.3,42.5L114.9,43.6L113.9,46.4L114.6,46.8L114.3,47.3L113.7,46.6L111.8,47.3L111.5,48.1L107.7,48.4L107.1,47.0ZM64.0,162.1L65.1,161.3L66.1,159.4L65.8,156.2L66.3,155.1L70.2,151.6L70.2,147.9L72.6,149.5L74.0,149.8L75.7,149.2L81.6,151.7L83.3,156.4L89.9,158.7L93.9,161.9L95.7,160.9L97.0,158.6L96.4,154.5L97.0,152.5L98.6,150.8L102.0,149.1L103.5,149.2L106.3,150.6L106.3,152.0L106.9,152.6L112.3,154.2L112.7,155.3L111.8,156.8L112.1,159.5L111.3,162.2L111.6,164.1L112.2,167.1L112.2,211.2L109.0,211.2L109.0,213.6L84.1,194.7L78.6,198.6L76.3,195.9L71.6,194.3L70.2,190.5L67.6,189.4L66.5,189.5L65.5,185.6L63.7,181.7L65.0,179.8L65.1,178.3L64.7,176.0L65.2,173.8L64.9,167.4L63.3,162.6ZM146.4,141.0L147.7,140.8L147.5,141.6L148.3,142.9L147.4,144.4L147.7,144.8L146.8,144.8L146.3,145.6L146.6,146.1L144.9,148.2L143.7,148.4ZM117.2,40.0L114.3,37.9L112.4,37.4L111.7,36.4L109.5,37.1L103.1,36.4L99.9,38.1L100.0,34.4L102.0,30.9L104.6,30.1L106.9,33.2L108.9,33.6L110.3,32.4L110.1,29.4L111.9,28.8L113.3,28.6L117.0,31.1L118.4,30.7L119.9,31.1L121.0,32.2L120.5,34.3L121.1,34.3L121.9,35.8L122.0,37.7L120.3,39.4L118.6,39.2ZM184.8,165.0L184.3,163.7L184.5,163.3L185.0,164.2ZM185.3,170.2L182.9,170.2L182.2,168.1L179.3,167.5L181.3,163.2L182.9,162.7L183.9,163.3L184.4,165.3L183.8,165.0L183.1,166.1L184.1,166.3ZM97.7,101.6L99.1,99.5L101.0,102.0L102.1,102.4L101.4,104.3L100.6,105.1L99.9,104.8L99.1,105.3L98.9,106.2L98.4,106.2L98.2,104.5L96.8,103.0L96.8,102.0ZM190.7,91.9L190.1,91.5L190.3,90.9ZM255.5,104.4L249.9,108.4L248.1,111.0L248.1,112.2L247.6,112.2L246.4,111.3L246.6,110.3L246.1,109.5L242.2,109.5L241.6,105.6L240.1,105.6L240.3,100.8L239.4,101.4L238.5,99.3L236.6,97.4L235.2,98.2L231.3,97.8L227.5,98.4L224.5,94.1L216.8,88.5L208.8,91.2L208.8,108.9L207.1,109.0L205.3,105.8L203.0,104.0L199.7,104.9L197.9,106.7L198.3,102.0L196.1,101.4L195.2,100.0L194.2,100.0L194.2,98.5L192.7,95.1L191.2,94.4L190.9,93.8L191.4,93.0L195.0,93.5L193.3,91.6L194.6,89.5L200.1,89.6L198.8,88.5L199.9,85.5L199.7,82.3L197.9,81.6L196.8,82.4L193.8,81.1L189.8,83.5L188.1,83.9L187.8,84.8L185.8,83.6L185.7,82.8L186.9,82.7L184.4,78.2L181.7,78.0L181.0,75.7L179.7,74.8L179.9,72.9L180.9,71.3L180.2,70.2L180.8,67.9L182.7,65.2L185.0,67.9L186.3,67.5L185.9,64.3L188.0,63.1L188.6,62.0L191.1,60.9L192.6,58.9L194.3,60.1L197.1,59.0L198.2,60.1L200.6,60.1L203.1,62.2L204.4,64.6L204.6,62.3L207.9,64.4L210.4,62.3L212.0,62.1L213.4,62.9L214.6,62.0L216.2,62.1L217.9,63.9L219.6,64.2L219.8,64.8L221.5,63.1L222.7,63.9L224.3,63.9L225.7,63.1L226.2,60.8L222.8,59.3L221.4,57.9L224.3,56.3L223.9,54.9L224.6,52.9L227.8,52.8L225.0,51.2L226.1,50.3L224.4,49.8L225.5,47.8L227.3,48.3L235.2,46.2L237.2,46.4L238.4,45.0L246.8,43.3L246.9,42.4L249.3,41.3L253.1,42.4L254.8,41.7L256.2,45.1L255.9,47.0L258.8,47.0L259.3,46.4L260.1,48.3L260.7,47.4L262.6,48.2L263.9,47.7L264.0,48.3L262.8,49.4L263.1,50.7L264.5,49.8L266.1,50.5L266.4,49.7L268.8,48.5L269.5,47.6L273.8,45.9L273.3,47.3L272.5,47.3L272.7,47.9L277.0,51.5L283.6,63.5L285.0,62.7L285.1,61.5L286.0,61.0L287.2,61.5L287.0,62.5L288.0,62.6L288.2,63.6L291.5,63.7L292.3,62.9L294.1,62.4L296.0,63.5L297.2,66.1L299.2,66.9L300.0,69.0L302.9,69.6L304.7,68.4L304.3,69.3L306.5,71.6L304.9,71.8L304.1,74.3L301.6,75.0L300.9,77.2L301.3,80.4L300.8,81.3L298.6,82.4L298.2,81.7L296.2,81.7L293.1,80.7L290.9,88.3L291.8,89.2L291.5,90.6L290.7,90.1L289.7,90.4L289.0,89.5L283.3,91.8L285.2,92.6L284.8,95.5L286.1,100.0L284.9,100.6L285.4,101.4L284.3,102.1L284.3,104.7L283.4,103.6L281.9,103.3L281.0,101.9L274.3,100.9L269.2,101.6L265.6,99.6L263.6,100.8L263.4,103.6L258.0,101.7L256.4,102.1ZM145.9,150.1L147.7,151.7L149.1,152.1L155.2,147.0L156.0,152.1L156.6,151.9L156.8,152.4L155.8,153.6L149.5,156.0L152.7,160.8L151.7,161.6L151.2,163.1L148.9,163.8L146.7,167.0L143.2,166.3L144.8,157.8L145.2,150.5ZM146.0,146.8L146.2,149.1L145.2,150.5L145.1,151.7L144.0,151.0L143.3,152.8L143.3,154.4L144.0,154.8L143.0,156.6L144.7,156.1L144.8,157.8L143.1,165.7L141.0,157.4L141.9,155.9L143.7,148.4L144.7,148.4ZM141.8,155.6L141.4,157.0L141.0,157.4L140.9,156.9ZM145.1,151.7L144.8,156.1L143.0,156.6L144.0,154.7L143.3,154.4L143.6,151.4L144.0,151.0ZM3.3,48.4L2.3,48.1L3.1,48.0ZM11.8,42.8L10.8,44.3L9.6,44.6L10.1,45.1L8.9,45.8L10.6,47.3L11.5,47.4L12.4,46.0L13.6,47.7L15.0,47.7L14.5,48.3L15.5,53.1L14.1,55.9L14.6,56.4L12.8,56.8L12.6,56.4L9.2,58.4L8.1,58.1L8.3,58.9L6.8,59.6L3.9,60.1L4.6,59.1L2.7,59.5L4.4,58.2L2.1,58.6L3.4,57.0L1.9,56.8L2.5,56.3L3.8,56.4L3.4,55.7L4.3,55.0L6.9,54.3L6.3,54.0L5.7,54.6L3.4,54.9L4.8,53.6L5.3,52.3L6.5,51.8L2.8,50.8L2.8,50.2L4.0,49.9L3.4,49.3L4.4,48.9L3.4,48.7L3.6,47.5L2.8,47.3L2.9,46.8L7.7,46.8L7.4,46.3L8.9,44.9L7.0,44.7L8.2,43.7L8.5,42.5L10.4,42.0L10.4,43.3L11.5,41.4L12.6,42.1ZM166.3,129.1L167.6,127.8L170.4,128.5L171.8,128.2L172.3,129.7L173.7,128.8L175.7,134.3L177.0,135.3L178.5,135.5L177.7,136.3L178.1,138.6L176.7,140.2L176.6,141.2L176.1,141.2L175.8,144.1L177.8,146.8L178.0,149.0L181.8,151.4L182.4,152.9L183.4,154.6L182.9,158.4L184.0,158.4L184.0,161.0L185.6,163.4L182.9,162.7L181.5,163.0L179.9,166.8L178.8,167.7L173.6,167.0L165.5,158.0L160.1,153.9L156.3,153.0L156.8,152.4L156.6,151.9L156.0,152.1L155.2,147.0L162.1,141.9L163.2,136.1L163.0,132.6L164.6,131.5ZM209.4,178.0L208.7,179.0L206.7,179.3L208.1,178.5L208.1,177.9L209.5,177.6ZM202.4,128.0L204.8,127.3L205.4,125.9L206.9,124.6L209.7,124.4L210.2,123.6L212.6,123.8L213.1,124.9L215.9,126.4L217.6,126.3L219.2,127.1L219.6,128.4L221.5,129.8L222.4,131.3L224.8,131.3L225.3,136.7L224.7,139.9L223.6,141.5L224.1,142.5L223.3,142.5L222.8,143.5L222.9,145.7L224.2,146.4L223.1,148.5L223.9,152.4L223.9,156.0L226.5,156.6L227.0,158.8L224.0,163.9L227.2,170.2L229.9,171.6L229.9,176.3L231.6,176.9L231.2,179.2L228.9,179.7L227.1,181.3L226.3,186.2L225.7,186.7L223.4,185.8L222.9,185.1L222.6,185.7L219.6,184.9L218.4,185.2L217.6,184.5L214.5,184.1L213.0,183.4L211.4,177.2L209.7,176.7L205.0,180.0L203.4,179.1L201.7,178.9L198.5,176.0L197.9,174.6L194.9,173.2L192.9,167.7L192.3,167.3L192.2,166.0L190.4,162.2L188.8,163.1L187.1,161.6L187.7,160.9L187.0,160.8L186.6,162.9L185.6,163.4L185.3,163.0L185.0,161.8L184.0,161.0L184.0,158.4L182.9,158.4L183.4,154.6L182.0,151.6L178.0,149.0L177.8,146.8L175.8,144.1L176.1,141.2L176.6,141.2L176.7,140.2L178.1,138.6L177.7,136.3L178.5,135.5L177.0,135.3L175.7,134.3L174.7,132.1L173.9,128.2L173.2,127.5L173.3,126.2L172.1,125.2L172.9,123.2L172.4,122.9L171.5,118.2L172.7,118.0L173.3,116.3L176.1,120.0L178.2,120.6L179.4,120.5L181.9,118.0L183.9,116.7L184.9,118.1L184.2,118.8L184.8,119.9L183.9,120.7L185.8,122.8L186.6,122.7L187.3,126.4L190.6,127.6L191.8,129.5L193.6,130.8L197.0,131.4L201.9,129.9L202.4,129.9L201.6,130.3L202.5,130.5ZM-14.2,-10.7L-11.2,-11.4L-12.8,-10.1L-11.5,-9.7L-11.9,-8.5L-10.6,-8.6L-10.8,-7.6L-9.9,-7.9L-8.2,-7.3L-8.7,-6.5L-8.1,-5.0L-8.9,-4.8L-9.5,-3.6L-10.6,-3.6L-11.3,-2.0L-15.1,-0.8L-17.6,0.6L-21.2,1.4L-21.7,2.2L-22.8,2.6L-28.7,2.1L-29.6,1.5L-29.3,0.9L-30.1,1.3L-31.6,0.3L-36.3,0.8L-36.5,-0.4L-35.9,0.0L-34.9,-0.2L-32.6,-1.8L-34.5,-1.5L-34.1,-2.5L-33.0,-3.0L-34.6,-2.6L-35.7,-3.8L-40.0,-3.5L-40.6,-4.1L-36.7,-5.0L-34.0,-5.0L-33.6,-5.7L-35.5,-5.6L-35.8,-5.9L-33.8,-6.8L-34.3,-7.2L-37.1,-7.6L-40.2,-6.8L-42.0,-7.3L-41.3,-7.8L-40.1,-7.4L-40.8,-8.5L-39.3,-8.1L-38.3,-8.4L-40.0,-8.9L-39.0,-9.0L-39.8,-9.7L-38.8,-9.7L-39.3,-10.1L-38.8,-10.5L-37.5,-9.5L-36.3,-9.7L-36.2,-9.0L-35.7,-9.2L-35.7,-9.9L-37.2,-10.6L-35.8,-10.9L-37.8,-11.2L-37.1,-11.7L-35.6,-11.7L-32.4,-9.7L-32.8,-9.4L-32.1,-9.1L-32.3,-8.4L-33.2,-8.3L-31.6,-6.1L-30.6,-7.9L-29.5,-7.5L-29.2,-9.8L-28.7,-10.1L-26.5,-8.5L-26.1,-10.0L-24.5,-10.5L-22.3,-8.3L-22.7,-10.4L-21.5,-10.3L-20.4,-9.4L-19.2,-10.6L-18.2,-10.2L-17.1,-10.5L-17.3,-11.7L-16.4,-12.1L-15.5,-12.1ZM103.3,74.9L105.6,77.1L102.9,79.2L100.1,85.0L98.6,85.8L95.2,85.7L91.5,87.6L89.8,87.4L88.6,86.6L85.8,84.0L85.1,82.3L84.5,82.3L85.6,81.6L85.5,79.7L86.3,79.0L85.5,78.4L85.9,78.0L87.5,78.2L87.8,76.7L89.7,77.9L92.7,77.8L93.3,76.6L95.5,75.7L96.3,76.2L98.6,74.2L101.2,74.1L102.1,75.2ZM64.0,79.1L61.0,77.9L60.6,78.8L57.9,78.7L58.0,76.0L59.7,72.1L57.5,71.3L55.3,71.2L54.1,69.8L54.5,68.2L53.3,66.7L54.1,65.0L52.6,62.3L53.4,61.7L53.6,60.2L52.8,58.5L55.3,58.0L55.3,57.2L56.2,56.3L56.1,55.6L55.2,55.1L55.3,54.6L56.2,54.6L56.7,53.0L56.7,51.4L56.3,51.0L56.8,49.7L59.3,49.5L59.6,50.6L60.0,50.7L60.3,49.9L60.8,50.9L61.2,48.6L63.0,48.7L64.8,50.1L62.3,48.4L62.1,46.7L61.2,46.6L62.2,45.4L61.3,43.7L64.3,43.9L65.5,44.8L65.1,45.7L67.7,46.5L68.6,46.2L68.1,48.0L69.8,48.3L72.0,47.2L73.5,45.8L74.9,46.0L76.2,47.3L77.1,47.3L77.5,48.7L78.7,49.3L79.2,51.8L78.3,53.4L79.9,55.1L79.7,55.9L80.3,57.2L79.8,58.4L81.1,61.2L80.3,63.3L78.9,62.2L79.1,62.9L76.6,63.8L74.6,65.2L73.4,65.3L72.6,66.3L72.0,65.8L73.3,67.7L72.9,68.4L73.8,70.0L77.4,73.1L77.1,74.2L76.3,74.0L76.0,75.1L74.1,76.3L74.9,79.3L73.8,78.4L72.4,78.2L72.3,78.6L68.7,79.7L68.2,79.1L66.8,79.0L66.0,80.3L65.4,79.2ZM77.0,46.2L77.0,46.7L76.3,46.4L76.0,46.8L75.3,46.3L75.5,45.2L76.1,44.6ZM78.6,48.2L78.1,48.7L77.6,48.3L77.4,47.4ZM60.2,44.2L60.4,43.3L60.4,43.7L61.2,43.7ZM169.7,109.9L167.6,107.6L166.7,108.3L163.7,107.9L164.5,105.7L163.6,102.4L158.9,98.8L159.5,98.1L161.0,98.2L163.9,99.7L167.6,100.0L170.8,102.0L170.7,102.7L171.3,102.9L173.0,102.0L173.9,102.6L174.2,102.0L176.8,103.2L176.6,104.6L179.0,106.1L178.3,107.4L179.8,109.2L179.1,110.1L175.4,108.2L174.1,109.4ZM96.6,17.5L97.4,17.9L96.0,18.8L95.7,17.9L96.2,18.1L96.1,17.3ZM109.6,-8.7L108.2,-10.8L109.1,-13.5L108.0,-15.0L108.3,-16.4L107.4,-16.6L108.0,-19.0L105.5,-21.0L102.9,-21.7L98.6,-24.2L100.0,-24.2L100.0,-25.0L101.6,-25.3L104.2,-22.7L107.0,-22.3L108.7,-23.1L112.0,-22.0L114.6,-24.0L115.6,-27.3L117.0,-28.4L121.2,-29.1L125.1,-27.2L125.7,-26.3L124.2,-24.8L124.6,-24.1L122.9,-23.5L124.0,-23.1L123.0,-21.5L123.7,-20.1L125.8,-19.5L127.8,-17.6L124.9,-13.9L128.1,-8.6L128.1,-8.1L126.9,-7.8L127.2,-7.5L126.6,-6.0L127.3,-5.5L126.6,-4.6L128.2,-3.5L127.8,-2.5L129.3,-1.1L129.1,0.3L127.8,1.3L131.5,3.8L132.6,5.4L131.5,7.3L125.5,13.0L120.5,16.8L119.1,16.6L117.0,17.2L117.1,16.2L116.5,17.2L115.2,16.9L115.5,17.6L114.6,17.9L114.3,17.6L110.5,19.1L107.4,19.3L105.9,20.0L106.6,19.1L105.6,18.2L105.3,18.8L104.3,19.1L104.7,17.4L101.1,16.3L100.9,14.6L101.6,11.6L100.6,9.6L100.8,8.3L100.1,6.6L101.2,4.6L101.8,4.6L101.5,3.8L103.9,3.3L103.6,2.7L104.5,1.7L107.9,-0.2L110.8,-3.8L113.1,-4.1L113.3,-7.1L111.2,-8.0L111.1,-8.9ZM100.4,3.6L100.9,3.8L100.5,4.1L100.0,3.5ZM103.4,17.4L104.2,17.7L104.0,18.4L103.1,17.8ZM101.2,16.7L100.5,16.7L100.6,16.1ZM111.8,-4.8L110.9,-4.7L111.1,-5.2L112.1,-5.1ZM119.6,31.1L118.4,30.7L116.8,31.0L115.3,29.6L113.1,28.6L110.1,29.4L110.8,27.1L109.5,27.5L108.4,27.1L107.6,25.6L108.1,25.0L107.6,25.0L107.5,23.7L107.5,23.1L109.4,22.6L110.3,21.7L113.6,21.5L113.8,20.9L118.4,21.8L121.6,21.7L122.0,22.2L119.8,25.0L120.0,27.7L120.9,29.4L120.1,29.8ZM104.8,25.8L107.0,26.6L104.0,27.8L103.3,29.0L102.8,29.0L103.5,28.1L102.5,27.5L102.8,26.9L102.4,26.4ZM105.8,24.8L104.6,25.5L104.2,24.7L103.0,24.3L104.9,23.6L105.7,24.0ZM107.1,26.2L106.3,25.6L107.0,25.7ZM149.2,201.6L132.3,201.6L132.2,200.6L131.6,201.6L112.2,201.6L112.2,167.1L111.3,162.2L112.1,159.9L111.8,156.8L112.7,155.3L113.4,155.9L115.0,155.4L119.2,156.6L124.9,159.2L128.5,157.2L129.0,156.2L130.7,155.7L129.6,156.4L130.4,156.3L131.2,155.5L132.6,156.2L133.7,155.8L134.5,156.8L133.7,156.1L133.3,157.0L134.4,158.0L134.8,157.0L135.9,158.1L139.2,157.8L140.9,156.9L143.1,165.7L141.0,173.9L137.9,170.1L135.8,163.3L135.2,165.0L136.8,170.1L138.9,173.3L140.2,179.3L144.0,189.7L145.8,192.3L145.1,192.4L145.0,193.1L145.6,197.1ZM-59.1,-93.9L-46.1,-92.5L-65.4,-91.6L-65.6,-91.1L-59.1,-91.7L-49.9,-91.5L-44.0,-92.0L-42.0,-90.6L-33.3,-89.7L-32.8,-89.3L-33.1,-89.0L-37.8,-88.0L-57.9,-87.2L-58.9,-86.7L-57.8,-86.1L-52.5,-86.6L-44.1,-86.4L-41.4,-85.0L-39.0,-85.3L-37.7,-86.5L-32.2,-86.7L-31.6,-86.1L-31.9,-84.5L-37.6,-81.2L-37.8,-80.5L-26.9,-84.7L-25.6,-84.7L-25.4,-84.1L-20.1,-83.5L-16.0,-85.3L-10.1,-85.5L-4.5,-84.9L-1.3,-83.8L-6.6,-82.0L-10.8,-81.6L-10.1,-81.0L-10.9,-80.5L-18.0,-79.6L-15.4,-78.9L-17.1,-78.0L-22.0,-77.6L-26.3,-78.0L-28.5,-76.9L-28.3,-75.7L-26.0,-75.5L-26.2,-73.7L-24.9,-72.9L-27.2,-72.3L-28.2,-71.2L-31.6,-70.4L-31.0,-69.9L-33.4,-65.8L-32.4,-65.7L-30.7,-66.8L-26.5,-65.9L-25.9,-65.4L-26.4,-65.1L-28.6,-65.7L-30.2,-65.4L-29.5,-64.5L-25.9,-63.5L-23.2,-63.6L-22.9,-62.0L-23.7,-61.3L-28.3,-62.1L-31.0,-61.9L-33.1,-60.9L-34.9,-61.4L-36.2,-61.0L-33.9,-60.4L-32.7,-58.9L-28.4,-58.7L-26.5,-56.4L-26.1,-54.7L-26.6,-53.7L-29.6,-54.3L-33.2,-52.9L-35.0,-53.4L-33.3,-52.6L-31.1,-53.2L-30.5,-51.9L-31.3,-51.1L-30.7,-51.1L-29.4,-52.7L-28.0,-52.7L-25.8,-50.6L-26.1,-49.4L-28.9,-49.4L-28.8,-49.0L-30.1,-48.7L-34.2,-49.2L-33.5,-50.3L-34.1,-50.7L-34.2,-49.9L-35.3,-49.5L-34.9,-49.0L-35.3,-48.3L-34.7,-48.0L-29.2,-47.3L-29.6,-45.6L-35.4,-44.5L-38.1,-45.1L-41.0,-46.9L-42.6,-46.1L-45.3,-47.3L-43.0,-45.7L-47.0,-44.4L-50.7,-45.3L-48.4,-44.4L-51.6,-43.9L-51.0,-43.5L-43.8,-45.1L-40.9,-45.2L-34.4,-42.8L-34.5,-40.3L-35.2,-40.1L-35.2,-39.0L-40.7,-40.8L-42.5,-43.4L-48.8,-41.8L-43.1,-42.7L-42.6,-41.2L-44.0,-40.1L-42.3,-40.4L-35.8,-38.0L-35.4,-37.3L-34.2,-37.2L-35.9,-36.0L-35.8,-35.4L-35.6,-34.8L-35.2,-35.7L-33.5,-35.9L-32.8,-31.3L-35.5,-31.0L-35.7,-32.9L-36.4,-30.9L-38.4,-31.0L-40.4,-31.9L-42.3,-34.7L-46.4,-36.3L-49.9,-36.6L-50.2,-36.2L-46.3,-35.9L-46.0,-34.5L-49.0,-33.4L-54.2,-33.6L-53.0,-33.1L-53.2,-32.2L-56.3,-30.9L-48.7,-31.0L-48.6,-30.5L-51.6,-29.4L-51.8,-28.9L-51.1,-28.8L-50.0,-29.8L-45.3,-30.5L-39.5,-29.5L-35.2,-29.4L-35.2,-29.0L-37.5,-28.3L-37.6,-27.8L-40.1,-27.5L-39.7,-26.8L-41.5,-26.8L-41.4,-26.1L-44.2,-25.3L-43.9,-24.8L-45.8,-23.5L-48.3,-22.4L-59.8,-20.2L-61.5,-20.4L-61.1,-19.8L-62.3,-19.5L-66.5,-21.3L-66.0,-20.4L-66.6,-20.2L-66.0,-19.2L-68.9,-17.6L-72.0,-13.1L-73.7,-11.7L-75.4,-10.8L-77.5,-11.7L-76.8,-10.3L-79.1,-8.8L-79.6,-9.6L-80.0,-8.6L-81.2,-9.0L-83.4,-7.6L-84.2,-8.2L-81.9,-11.1L-84.7,-11.5L-83.4,-10.9L-84.6,-9.1L-85.8,-9.6L-84.8,-8.2L-90.9,-7.5L-89.3,-6.2L-91.2,-5.0L-93.8,-5.0L-93.4,-4.2L-92.4,-4.4L-91.0,-2.3L-92.8,-1.1L-95.3,-1.4L-93.6,-0.6L-92.3,-0.6L-92.1,1.3L-92.8,2.2L-93.7,2.3L-94.7,4.5L-96.2,4.5L-97.2,3.8L-95.5,4.9L-96.4,6.1L-99.6,6.1L-97.1,6.9L-97.6,8.9L-97.0,10.3L-98.5,11.0L-97.7,11.4L-98.9,15.5L-99.9,16.7L-102.6,16.3L-100.2,17.6L-100.1,18.9L-100.8,19.5L-102.7,19.1L-101.8,19.9L-104.1,19.7L-104.3,19.1L-103.6,17.9L-104.8,19.1L-107.2,18.2L-107.1,17.4L-105.9,17.0L-105.2,16.1L-107.2,17.1L-109.3,16.2L-109.5,15.5L-108.7,13.4L-111.8,15.3L-114.7,15.2L-114.8,15.7L-116.1,15.3L-114.6,14.4L-116.5,14.4L-116.5,13.7L-118.2,13.1L-118.6,11.9L-119.4,11.6L-119.1,11.1L-119.6,10.1L-117.9,9.2L-120.4,9.6L-120.2,8.5L-122.6,7.3L-122.5,6.1L-120.9,4.6L-122.8,5.7L-126.4,1.2L-126.4,-0.0L-122.4,-1.0L-123.1,-1.0L-122.9,-1.5L-126.5,-0.5L-126.9,-1.0L-126.0,-2.2L-123.1,-3.3L-121.6,-2.1L-122.0,-3.4L-123.2,-3.7L-124.6,-5.8L-124.0,-3.6L-125.4,-3.0L-125.1,-3.8L-125.5,-3.6L-127.3,-1.1L-128.0,-1.7L-128.6,-5.5L-129.5,-6.4L-126.6,-8.2L-125.0,-8.5L-126.9,-8.3L-128.9,-7.0L-131.5,-7.7L-131.3,-9.5L-132.0,-10.0L-125.4,-13.8L-131.0,-10.6L-132.8,-10.3L-132.9,-11.6L-132.2,-12.7L-131.0,-13.6L-129.0,-13.8L-133.1,-14.3L-133.7,-15.1L-133.4,-16.4L-129.4,-18.1L-123.5,-16.9L-125.2,-17.7L-124.6,-18.3L-127.1,-17.9L-128.9,-18.4L-133.2,-17.0L-131.4,-20.2L-126.6,-19.5L-125.3,-20.8L-125.3,-21.2L-128.4,-20.3L-132.1,-20.6L-131.1,-22.1L-129.7,-22.6L-126.6,-21.8L-125.1,-22.1L-124.1,-23.0L-125.5,-22.8L-125.0,-24.6L-122.5,-24.8L-124.9,-25.0L-124.1,-27.2L-122.7,-27.8L-123.1,-28.5L-122.6,-28.9L-128.6,-29.1L-131.0,-30.2L-134.1,-30.8L-135.7,-32.2L-134.6,-32.7L-130.3,-32.4L-126.3,-30.9L-123.7,-30.7L-125.7,-31.6L-125.5,-32.9L-127.1,-33.7L-124.8,-33.6L-125.9,-34.2L-131.0,-34.5L-131.3,-35.1L-130.6,-35.8L-127.1,-36.9L-132.3,-36.4L-131.4,-37.5L-132.0,-37.4L-133.1,-39.2L-133.5,-39.8L-133.0,-40.1L-133.8,-39.9L-132.4,-37.9L-134.1,-36.8L-133.9,-35.8L-136.2,-35.4L-139.0,-36.3L-139.2,-36.9L-138.1,-38.9L-136.7,-40.1L-139.0,-39.3L-139.1,-39.8L-138.1,-40.1L-139.0,-40.6L-136.9,-41.1L-136.3,-42.6L-137.4,-43.3L-138.1,-42.9L-139.2,-43.2L-139.3,-43.7L-138.1,-44.8L-138.6,-45.4L-139.5,-45.0L-140.6,-45.9L-139.8,-46.8L-141.0,-48.6L-144.1,-48.6L-142.5,-49.1L-142.5,-50.1L-141.1,-50.5L-148.3,-54.5L-147.3,-55.2L-148.1,-56.1L-156.5,-58.4L-163.0,-59.3L-164.7,-58.6L-166.2,-59.1L-169.5,-58.2L-171.1,-58.7L-172.9,-58.3L-174.5,-58.6L-173.6,-57.5L-174.0,-57.5L-178.7,-58.0L-182.3,-59.5L-178.0,-60.7L-182.9,-61.1L-183.6,-61.6L-183.0,-62.3L-185.8,-61.5L-187.5,-62.8L-185.8,-63.3L-180.7,-63.3L-178.1,-64.2L-172.7,-63.7L-172.4,-65.1L-174.0,-65.7L-176.7,-64.9L-179.6,-65.3L-181.9,-64.6L-185.6,-65.8L-184.3,-66.4L-187.0,-66.2L-190.7,-67.0L-192.6,-67.9L-191.9,-68.6L-192.4,-68.9L-189.1,-70.2L-180.8,-71.3L-180.9,-71.7L-178.9,-72.2L-171.4,-72.6L-169.2,-74.1L-167.7,-76.8L-165.8,-77.3L-174.1,-77.2L-175.2,-77.9L-174.6,-78.8L-166.8,-81.6L-164.4,-81.9L-162.2,-81.1L-162.8,-82.0L-162.1,-82.6L-157.2,-82.2L-156.2,-83.5L-156.5,-85.2L-154.1,-86.0L-150.5,-85.8L-142.2,-83.3L-150.4,-86.4L-135.8,-88.1L-133.0,-87.2L-132.7,-84.7L-131.1,-85.8L-131.0,-87.9L-124.4,-85.9L-120.1,-86.0L-124.5,-88.2L-124.7,-88.6L-121.7,-88.7L-118.0,-88.3L-105.1,-85.3L-104.5,-85.7L-104.9,-86.9L-103.6,-88.2L-103.9,-88.7L-107.7,-90.0L-94.7,-90.0L-109.5,-90.5L-110.6,-91.0L-109.6,-91.5L-107.3,-91.3L-99.8,-92.5L-94.5,-91.7L-91.5,-92.8L-84.7,-91.2L-84.0,-92.0L-86.5,-93.0L-83.3,-93.6ZM11.9,8.9L12.3,9.2L11.7,9.4L11.2,8.9ZM13.6,8.5L13.5,9.2L13.0,9.0L13.3,9.6L11.9,8.2ZM14.3,8.4L13.8,8.5L13.9,7.9ZM73.5,39.4L72.4,41.0L73.0,41.8L72.0,42.3L71.9,44.1L71.3,44.3L70.6,42.3L69.5,42.2L69.1,41.6L69.0,40.3L68.5,39.7L69.6,39.6L70.1,38.7L70.5,38.6L71.1,39.9L71.3,38.6L72.4,37.8L73.5,38.1ZM64.7,44.0L61.3,43.7L61.1,41.2L59.6,40.3L59.7,35.5L61.3,36.0L62.0,34.9L62.6,34.6L63.0,35.0L63.1,33.5L62.3,33.5L61.6,34.9L60.7,35.2L60.1,34.3L61.2,33.1L63.7,32.8L65.3,30.8L67.4,30.1L66.3,35.4L68.4,36.3L67.8,37.2L66.5,37.4L66.0,39.0L65.2,39.2L65.5,39.5L64.2,40.8L64.4,41.9L63.8,43.0L64.6,43.4ZM67.5,40.3L67.9,42.6L66.8,43.0L65.4,42.4L65.0,40.7ZM69.7,43.7L70.9,44.1L70.7,44.9L68.7,44.3L68.8,43.5ZM67.8,44.4L67.4,43.9L67.8,43.4L68.4,42.5ZM73.4,43.4L72.3,43.7L72.4,43.2L72.6,42.9ZM65.7,43.7L64.9,43.7L64.8,42.9ZM68.7,32.4L68.4,32.1L69.1,32.1ZM81.3,43.1L80.1,42.7L80.2,42.1L81.5,42.5ZM93.0,69.5L90.9,70.8L89.7,72.5L87.7,72.8L87.1,73.9L85.9,73.0L84.3,73.2L81.0,72.0L80.1,73.9L78.5,74.0L74.0,70.2L72.9,68.4L73.3,67.7L72.0,65.8L72.6,66.3L73.4,65.3L74.7,65.2L76.6,63.8L79.1,62.9L78.8,62.3L79.6,62.4L80.2,63.3L81.0,62.9L81.0,62.3L84.2,64.3L85.3,64.2L84.8,65.2L86.2,66.7L87.3,66.1L86.9,65.2L88.6,66.0L89.5,65.7L89.2,66.6L89.9,67.3L90.5,67.0L92.2,67.8ZM140.3,138.9L138.6,139.2L138.5,138.5L137.8,138.4L136.9,138.8L136.3,138.4L136.8,138.3L137.0,137.3L139.1,137.5L142.0,136.0L140.1,137.8ZM136.3,138.4L136.9,138.8L138.4,138.4L138.6,139.2L139.9,138.8L140.4,139.3L139.3,139.3L137.0,141.2L135.4,140.5L135.0,139.4L135.0,138.8ZM76.6,88.7L77.6,89.1L79.1,88.9L79.7,88.0L80.4,88.9L82.1,89.0L81.9,87.7L83.1,87.1L83.0,85.4L85.5,83.9L89.8,87.4L91.5,87.6L93.2,86.7L93.5,89.3L94.8,90.2L93.9,90.3L93.6,91.6L93.0,91.8L92.5,90.8L89.8,90.8L87.0,89.9L85.8,90.2L85.1,91.2L84.3,90.3L83.5,90.3L83.3,92.3L84.5,93.5L85.1,95.4L88.1,98.7L89.1,101.1L87.0,98.9L85.4,98.2L84.1,98.3L81.6,95.2L81.4,94.8L82.5,94.7L81.0,93.1L80.6,90.8L79.6,89.8L78.9,89.6L77.5,92.0L76.8,90.7ZM86.6,99.5L85.7,99.4L85.6,98.9L86.8,99.1ZM80.5,91.3L79.3,90.7L79.7,90.1ZM81.6,96.4L81.5,96.4L80.6,95.2ZM91.8,102.9L92.0,103.5L89.9,101.8L87.4,100.7L88.0,100.7L89.8,101.3ZM121.6,105.7L120.1,106.0L119.2,105.2L117.3,105.8L116.3,107.0L115.7,106.9L115.8,108.5L115.1,108.9L113.0,109.2L110.6,107.7L105.7,108.8L106.0,106.8L103.9,104.1L104.3,103.0L104.3,101.6L105.1,101.4L105.9,99.9L104.6,98.6L104.0,97.0L105.1,94.9L106.1,95.6L105.7,96.8L113.8,97.6L116.0,96.0L118.7,95.2L123.4,97.2L123.0,98.9L122.0,98.9L121.4,99.9L121.2,102.0L120.0,103.4ZM94.6,91.8L93.9,94.3L95.3,95.8L94.3,96.2L95.0,97.9L93.4,98.3L93.6,99.4L93.1,99.1L91.8,101.0L91.8,102.9L89.6,101.2L83.3,92.3L83.5,90.3L84.3,90.3L85.1,91.2L85.8,90.2L87.0,89.9L89.8,90.8L92.5,90.8L93.0,91.8ZM47.5,60.5L50.0,60.1L50.5,61.1L52.4,61.7L51.9,63.2L53.0,63.6L54.1,65.0L54.1,65.7L52.2,67.6L52.5,69.2L51.6,69.5L49.5,68.2L49.4,66.5L48.5,67.4L47.3,67.4L47.3,66.0L45.8,65.7L44.0,63.5L43.1,63.8L42.4,63.0L42.2,61.9L44.3,60.7L46.5,61.4ZM133.3,57.1L131.2,57.2L130.2,58.1L129.5,59.5L129.5,61.1L128.3,60.1L125.8,60.6L125.0,59.4L123.9,60.3L122.1,59.5L120.6,60.1L118.9,58.8L114.7,58.0L110.2,58.2L109.0,59.6L108.2,59.3L107.9,59.9L108.0,57.4L106.5,56.2L108.8,53.9L107.5,48.3L110.1,48.5L113.7,46.6L113.8,47.2L114.6,47.2L113.9,46.4L114.2,45.8L114.9,43.6L117.8,41.9L116.8,41.6L117.2,40.0L118.6,39.2L120.3,39.4L121.7,37.8L123.3,38.0L124.1,38.7L125.6,38.6L126.2,39.9L127.6,39.1L129.2,39.4L130.6,40.5L130.3,41.7L130.9,43.0L130.3,44.1L131.4,45.0L131.2,45.6L133.5,47.9L133.3,48.9L135.4,49.5L136.2,50.8L134.5,52.4L132.2,51.9L131.7,52.7L132.7,54.0L132.7,56.1ZM192.1,183.0L191.6,181.3L192.0,181.2ZM174.0,116.9L174.7,116.3L175.1,117.3L176.9,117.3L177.0,118.2L178.0,120.6L176.4,120.1ZM186.6,122.7L185.8,122.8L183.9,120.7L184.8,119.9L184.2,118.8L184.9,118.1L183.9,116.7L179.2,120.4L178.9,119.1L179.5,118.9L178.8,118.1L179.2,117.3L178.3,117.1L176.4,115.3L177.3,115.1L177.6,114.1L176.0,112.6L175.8,112.0L176.4,111.1L174.8,110.0L175.2,109.7L174.6,109.0L175.4,108.2L179.4,110.0L179.8,109.0L178.3,107.2L179.0,106.1L180.0,106.5L181.8,109.0L183.3,109.4L185.7,106.3L186.0,106.6L188.5,111.4L189.5,112.4L190.7,112.8L191.3,113.9L189.9,113.7L188.8,114.3L188.2,118.3L187.6,119.9L187.1,119.4L186.6,120.8ZM64.0,80.3L64.0,79.1L64.7,78.8L66.0,80.3L66.8,79.0L68.2,79.1L68.7,79.7L72.3,78.6L72.4,78.2L73.8,78.4L74.9,79.3L74.2,76.0L76.0,75.1L76.3,74.0L77.1,74.2L77.4,73.1L78.1,73.9L80.1,73.9L81.0,72.0L84.3,73.2L85.9,73.0L87.1,73.9L86.9,74.9L87.7,76.8L87.5,78.2L85.5,78.4L86.3,79.0L85.5,79.7L85.6,81.6L84.3,82.3L84.0,83.1L80.7,83.5L79.6,84.5L73.2,83.2L72.2,81.9L72.2,81.2L69.3,81.7L68.4,82.7L66.6,81.7L65.9,82.3L64.2,81.3ZM173.8,116.6L172.4,115.0L170.4,114.6L170.1,112.9L170.6,111.7L169.7,109.9L174.6,109.0L175.2,109.7L174.8,110.0L176.4,111.1L175.8,112.0L176.0,112.6L177.6,114.1L177.3,115.1L176.4,115.3L178.3,117.1L179.2,117.3L178.8,118.1L179.5,118.9L178.9,119.1L179.2,120.4L178.0,120.6L176.9,117.3L176.0,117.6L175.0,117.2L174.7,116.3ZM39.6,103.2L38.8,103.5L38.7,103.0L39.2,102.6ZM61.0,129.9L59.9,131.9L60.3,132.6L60.0,135.4L60.5,138.2L60.0,140.5L57.7,143.6L57.7,144.8L58.4,147.5L59.6,148.5L60.3,151.0L62.5,153.3L64.0,162.1L63.3,162.6L64.9,167.2L65.2,173.8L64.7,176.0L65.1,179.4L63.7,181.7L65.5,185.6L66.3,189.2L70.2,190.5L71.6,194.3L57.6,207.0L52.5,213.7L44.7,216.1L44.0,215.3L44.4,214.0L44.0,211.9L39.8,209.6L37.9,207.3L37.9,205.9L18.5,186.5L7.2,176.2L7.2,169.5L12.0,165.1L13.6,165.3L14.1,164.1L17.3,163.4L18.8,161.0L22.9,158.6L22.3,157.5L22.5,155.1L24.9,154.4L25.4,153.2L30.5,153.1L31.0,151.4L29.8,149.8L29.1,147.3L28.7,140.4L27.4,138.7L29.1,138.3L33.0,135.1L34.1,135.2L35.3,133.6L38.2,131.9L42.4,131.5L43.6,130.6L46.1,130.1L49.1,130.1L50.8,131.3L54.5,129.2L55.9,130.0L56.9,129.8L56.7,129.2L59.0,130.3ZM94.6,106.2L94.4,104.8L95.7,102.5L96.0,103.3L96.8,103.0L98.2,104.5L98.2,109.1L98.8,110.7L99.6,111.0L99.6,112.8L98.7,114.6L97.6,115.3L97.4,116.7L96.6,116.6L96.2,115.0L94.5,113.2L95.0,113.3L94.6,112.0L95.3,107.3L95.3,106.6ZM241.7,127.9L245.3,128.5L246.5,129.8L249.1,128.0L250.3,129.0L250.9,126.9L253.1,126.8L253.2,125.2L255.2,122.6L256.4,123.3L256.5,125.2L257.4,125.2L257.0,129.0L257.7,131.1L260.8,129.5L263.1,127.4L264.1,127.6L263.9,128.5L266.1,127.6L267.0,127.7L267.8,128.5L267.2,128.2L266.1,128.8L266.7,129.5L265.1,130.4L260.7,130.4L257.3,132.6L256.2,134.2L257.0,135.2L257.6,138.3L255.5,141.5L255.8,143.8L254.5,144.2L252.2,144.0L253.3,147.4L251.2,148.5L250.8,149.6L250.1,151.5L250.3,153.9L249.3,155.2L246.8,154.5L245.0,156.0L245.5,156.7L244.0,157.4L242.9,156.9L241.3,158.8L240.6,164.0L237.2,165.3L235.0,165.4L234.1,166.1L232.5,165.6L229.1,166.0L224.0,163.9L227.0,158.8L226.5,156.6L223.9,156.0L223.9,152.4L223.1,148.5L224.2,146.4L222.9,145.7L222.8,143.5L223.3,142.5L224.1,142.5L223.6,141.5L224.7,139.9L225.3,136.2L226.4,137.1L227.5,137.1L228.5,138.4L229.7,138.0L230.9,137.1L231.1,135.1L233.8,134.3L235.4,132.8L236.3,129.0L238.6,128.4L239.3,126.9Z", "land": "M63.8,101.7L64.1,105.0L62.9,108.6L61.7,107.6L62.0,107.0L61.1,105.8L61.4,105.4L61.0,103.9L61.5,103.0L62.8,102.1L63.2,102.3L63.5,100.7ZM58.0,78.8L57.2,79.5L56.0,79.4L56.1,80.1L54.4,81.8L52.9,85.4L53.0,85.7L53.6,85.5L54.3,84.3L55.4,84.4L55.4,85.6L56.2,86.8L55.5,87.6L56.6,89.3L56.4,90.0L55.0,90.6L56.2,92.6L55.7,94.1L56.6,95.0L58.1,95.2L58.2,95.6L57.6,97.1L54.5,100.0L52.4,100.3L50.1,98.7L49.0,99.0L46.5,98.1L44.4,99.9L43.8,101.2L44.3,103.5L43.3,103.4L42.6,104.0L41.2,103.6L40.5,103.9L39.6,102.7L38.7,102.7L36.7,101.6L35.9,102.3L32.5,101.8L30.2,100.3L29.7,100.6L29.9,99.6L28.7,98.8L29.7,98.1L30.4,93.3L30.9,92.7L30.7,92.3L30.4,92.8L30.9,88.6L32.3,90.8L31.8,89.0L30.6,87.8L31.1,87.6L30.7,84.9L28.7,83.9L27.8,82.2L28.0,81.4L27.6,80.5L28.9,80.6L28.1,80.1L26.5,80.1L26.7,79.3L25.7,79.1L25.6,78.6L22.1,77.6L20.8,77.7L19.7,76.6L20.8,76.0L20.0,75.4L21.1,75.3L19.6,75.1L19.4,74.6L20.2,73.8L24.2,72.8L25.9,74.2L26.7,73.7L28.0,74.0L28.4,73.5L30.0,73.7L29.4,72.9L29.4,71.0L28.5,68.7L30.4,68.7L30.7,70.1L33.8,70.6L35.6,69.8L34.7,69.6L34.9,68.6L38.7,66.8L39.3,66.0L39.3,63.3L40.3,62.4L42.2,61.9L42.9,63.6L44.0,63.5L44.5,64.6L45.5,64.9L45.8,65.7L47.3,66.0L47.3,67.4L48.5,67.4L49.3,66.5L49.5,68.2L51.5,69.5L53.7,69.6L54.7,70.1L55.3,71.2L57.5,71.3L59.7,72.1L58.0,76.0ZM30.6,86.9L30.5,87.3L30.0,86.6L30.0,86.2ZM93.8,29.6L92.9,30.2L93.2,31.7L91.5,33.7L90.9,34.0L91.0,33.6L90.8,30.9L92.1,29.6L93.2,29.2ZM85.8,37.0L85.4,36.9L85.5,35.7L87.2,32.4L87.7,32.1ZM69.8,23.8L70.0,24.4L70.6,24.4L71.1,22.6L70.7,21.2L71.5,19.9L73.2,18.7L73.5,17.0L72.6,14.4L73.9,14.1L74.4,12.7L72.2,10.9L72.6,8.2L72.1,6.8L72.4,4.8L71.7,3.4L72.2,1.9L74.2,0.0L75.5,-0.4L77.8,-0.1L78.1,-0.5L78.2,-2.2L76.8,-2.8L79.4,-6.2L79.9,-8.6L79.6,-10.2L82.6,-11.1L82.4,-12.0L85.4,-14.7L84.6,-16.4L86.0,-17.4L86.6,-18.7L88.3,-19.7L90.1,-19.0L91.0,-20.2L90.9,-21.7L91.3,-21.9L96.5,-20.9L97.4,-21.5L96.5,-21.8L97.7,-23.3L97.0,-24.1L98.6,-24.2L102.9,-21.7L105.5,-21.0L108.0,-19.0L107.6,-18.6L107.4,-16.6L108.3,-16.4L108.0,-15.0L109.1,-13.5L108.2,-11.9L108.2,-10.8L109.6,-8.7L106.3,-8.3L105.2,-9.0L104.6,-8.6L104.1,-8.9L103.7,-7.7L103.1,-7.7L103.3,-7.5L102.6,-7.4L102.5,-6.8L101.5,-6.8L101.7,-6.1L101.0,-6.3L101.5,-5.4L100.2,-3.9L100.8,-3.0L101.3,-2.0L99.8,-0.9L99.0,0.6L95.8,2.6L94.6,2.5L93.6,3.7L92.3,3.9L91.4,4.8L92.0,4.9L91.8,5.3L90.9,5.8L90.0,5.4L90.5,6.7L89.3,7.4L88.5,7.4L89.3,8.5L88.5,10.2L88.7,11.1L87.9,10.9L87.7,11.6L88.1,15.8L89.3,16.6L90.3,16.4L92.1,18.0L92.1,18.5L92.9,18.8L93.5,20.0L90.3,22.3L92.1,22.1L92.3,22.4L91.7,22.6L91.3,23.5L87.2,25.7L84.8,25.7L87.0,26.4L86.2,26.7L86.6,27.8L85.9,29.7L86.2,31.2L85.7,32.3L85.8,33.3L83.9,37.6L80.2,37.8L80.3,38.2L79.7,38.2L78.6,39.2L79.0,40.7L78.5,41.3L74.5,41.2L74.7,39.6L73.2,37.0L74.2,37.1L73.7,36.3L74.4,36.2L74.5,35.4L73.0,34.0L71.3,30.3L70.9,30.2L70.8,28.9L70.0,28.2L69.9,27.2L69.4,27.0L69.0,24.1L69.2,23.6ZM44.1,116.2L45.1,116.7L44.1,118.4L43.0,118.2L42.7,117.4L42.1,117.7L41.7,117.1L43.0,115.9L44.1,115.3ZM47.7,116.0L46.3,115.0L47.5,115.0ZM38.8,120.4L38.1,120.5L38.4,119.9L39.3,119.6ZM28.7,98.8L29.9,99.6L29.8,100.6L30.2,100.3L34.2,102.3L36.3,102.3L36.5,101.5L38.5,102.3L38.8,103.5L39.6,103.2L40.5,103.9L41.2,103.6L42.6,104.0L43.3,103.4L44.3,103.5L44.4,105.9L40.8,109.0L37.5,110.1L36.5,111.3L37.1,111.7L36.1,112.3L33.3,117.5L33.7,119.7L34.9,121.2L32.7,123.3L31.8,125.9L32.0,126.6L30.2,126.9L29.2,127.7L27.7,130.7L26.6,130.4L25.6,131.0L20.7,131.0L19.7,132.0L18.2,132.4L17.6,133.8L16.8,134.3L15.5,133.5L14.4,131.3L14.9,130.0L14.4,130.4L12.9,128.3L11.2,128.7L11.1,126.1L12.6,123.9L12.1,123.9L11.4,122.6L12.5,119.7L10.8,116.8L12.1,116.7L12.5,116.2L12.8,115.1L12.4,114.4L13.1,113.6L12.7,110.4L14.9,107.7L13.9,107.2L13.7,105.9L12.0,105.7L11.2,106.4L9.6,106.2L8.9,106.5L8.5,104.9L6.7,106.0L6.6,105.1L7.2,104.3L6.8,104.2L6.8,102.5L6.1,102.7L6.5,101.8L5.5,100.9L5.7,100.0L6.6,99.2L8.2,98.9L8.6,98.0L10.3,97.1L12.3,98.1L16.1,97.7L20.2,98.8L23.1,98.3L24.8,99.0L25.3,98.6L27.0,99.2ZM-16.6,171.0L-16.9,172.1L-17.6,172.8L-18.4,171.2L-16.0,170.0ZM-8.5,168.4L-8.9,168.6L-8.8,167.9L-7.9,167.3L-7.6,167.1L-7.7,168.0ZM-10.0,172.0L-10.4,172.5L-10.9,172.3L-10.1,171.8L-9.4,169.4L-8.8,169.5L-8.9,170.8L-9.1,171.6ZM-13.7,172.1L-13.8,173.7L-14.7,173.8L-15.0,172.8L-14.6,172.1ZM-19.3,172.7L-19.7,172.2L-19.5,171.8L-19.0,172.3ZM-21.5,173.7L-21.8,174.5L-22.2,174.1ZM-21.3,170.4L-21.8,169.2L-21.2,168.7ZM98.6,-24.2L97.0,-24.1L97.7,-23.3L96.5,-21.8L97.4,-21.5L96.5,-20.9L91.3,-21.9L90.9,-21.7L91.0,-20.2L90.1,-19.0L88.3,-19.7L86.6,-18.7L86.0,-17.4L84.6,-16.4L85.4,-14.7L82.4,-12.0L82.6,-11.1L79.6,-10.2L79.9,-8.6L79.4,-6.2L76.8,-2.8L78.2,-2.2L78.1,-0.5L77.8,-0.1L75.5,-0.4L74.2,0.0L72.2,1.9L71.7,3.4L72.4,4.8L72.1,6.8L72.6,8.2L72.2,10.9L74.4,12.7L73.9,14.1L72.6,14.4L73.5,17.0L73.2,18.7L71.5,19.9L70.7,21.2L71.1,22.6L70.6,24.4L70.0,24.4L69.7,23.5L68.1,23.1L67.5,22.1L67.3,20.3L67.2,21.2L66.7,21.5L66.8,22.7L66.0,24.0L65.0,24.2L64.1,23.5L64.4,24.1L59.7,28.1L56.1,28.7L55.7,28.1L54.8,28.3L55.1,27.5L53.2,27.0L51.5,25.3L51.8,23.9L53.3,24.6L54.1,24.0L53.3,24.2L52.6,23.5L52.8,22.6L54.3,21.3L51.0,23.2L50.3,22.9L50.8,20.9L51.4,20.6L52.3,20.8L53.7,20.1L52.2,19.9L53.4,18.1L54.6,17.2L54.6,18.5L55.2,17.2L56.1,16.7L53.5,17.5L50.3,20.9L50.5,18.8L52.0,18.6L50.8,18.2L50.3,17.1L51.9,15.9L50.6,16.5L50.2,16.1L49.9,14.2L55.4,13.7L56.2,14.6L56.2,14.0L58.0,13.4L57.2,13.0L57.5,12.3L56.7,13.6L55.0,13.4L54.9,13.0L54.2,13.8L51.3,13.9L50.2,13.5L49.9,12.3L50.9,12.1L49.7,11.0L49.7,10.2L51.3,10.1L53.0,10.6L55.3,10.2L50.7,9.9L50.2,9.5L50.3,8.8L51.0,8.9L52.7,7.6L53.3,7.9L54.8,7.6L53.4,7.6L54.1,6.7L57.9,7.0L58.3,6.8L57.8,6.4L59.5,6.1L55.3,6.1L55.9,5.1L57.9,4.3L59.5,4.4L61.2,5.5L59.7,4.0L60.1,3.4L61.2,3.2L60.4,2.4L61.0,1.9L62.8,2.0L62.8,2.6L64.5,1.8L65.5,2.9L67.8,2.6L67.7,1.8L69.7,0.9L69.2,0.6L70.0,-0.0L68.8,0.1L68.3,0.4L68.7,0.7L68.4,1.1L65.6,2.3L64.7,1.4L64.2,1.5L64.3,1.0L67.2,-2.0L70.2,-3.6L70.3,-3.9L69.5,-3.6L70.1,-4.7L72.2,-5.7L73.3,-5.3L74.6,-6.4L73.0,-5.7L72.1,-6.5L73.8,-9.1L74.9,-9.4L74.1,-10.1L78.0,-11.0L75.2,-10.7L75.5,-12.7L76.8,-13.4L77.8,-13.4L76.8,-14.0L79.0,-15.2L82.3,-15.4L79.3,-15.7L80.9,-17.2L82.9,-16.1L83.2,-16.9L81.8,-17.3L82.0,-18.1L80.6,-17.6L80.4,-18.3L81.5,-19.1L83.0,-19.0L82.0,-19.5L84.2,-20.3L85.1,-18.6L85.0,-19.2L85.4,-19.6L84.8,-20.7L89.0,-21.2L86.0,-21.4L86.0,-22.0L87.7,-22.5L89.5,-24.5L90.7,-24.8L90.6,-25.6L91.2,-26.3L92.4,-25.5L93.3,-25.6L92.3,-26.4L93.5,-26.7L94.1,-27.6L95.8,-27.8L95.5,-26.0L96.5,-28.0L97.6,-28.5L97.7,-27.0L96.8,-25.6L98.2,-26.6L98.9,-26.5L98.3,-27.3L98.6,-28.4L100.3,-28.3L101.1,-28.9L102.8,-28.0L102.3,-29.1L100.9,-29.9L103.9,-30.1L105.0,-30.6L107.1,-28.7L107.2,-30.0L109.2,-31.1L110.4,-32.2L109.9,-32.8L111.5,-33.6L113.0,-32.8L113.6,-33.2L114.7,-32.7L113.1,-31.5L112.2,-29.8L112.4,-29.3L116.9,-33.2L117.6,-32.9L117.1,-32.0L117.2,-30.8L118.4,-31.3L119.0,-32.4L120.2,-32.7L119.2,-33.3L120.3,-34.0L122.8,-33.5L122.6,-32.8L121.3,-32.1L122.4,-32.0L122.2,-30.0L124.2,-32.9L127.0,-31.9L128.0,-32.2L128.5,-31.4L130.7,-30.7L130.8,-30.1L128.6,-29.4L124.0,-29.5L126.6,-28.7L126.9,-27.6L128.1,-27.4L128.6,-28.1L129.1,-27.5L129.3,-27.8L130.5,-27.8L130.5,-26.6L128.4,-27.1L128.1,-26.1L125.9,-25.4L124.6,-24.1L124.2,-24.8L125.7,-26.3L125.1,-27.2L120.8,-29.1L118.9,-28.4L117.0,-28.4L115.6,-27.3L114.6,-25.4L114.6,-24.0L112.0,-22.0L108.7,-23.1L107.0,-22.3L104.2,-22.7L101.6,-25.3L100.0,-25.0L100.0,-24.2ZM49.7,14.0L49.3,14.0L49.3,13.5ZM50.1,17.7L49.9,18.3L49.7,17.6L49.8,17.0ZM127.7,-27.8L127.1,-27.7L127.3,-28.3L128.0,-28.0ZM71.6,-7.8L71.0,-7.7L71.1,-8.1L71.6,-8.2ZM60.7,1.6L60.1,1.5L61.5,1.0L61.7,1.4ZM59.5,3.2L58.6,2.8L59.5,2.5ZM107.4,-32.7L105.5,-31.4L103.4,-31.5L102.9,-32.0ZM114.1,-34.3L115.8,-33.8L114.7,-33.4L113.2,-33.8ZM107.9,-31.4L108.0,-31.0L107.1,-30.3L106.3,-30.2L106.3,-30.6L105.7,-30.6L106.1,-31.1L107.7,-31.8ZM109.2,-31.5L108.2,-31.5L108.1,-32.3L109.4,-31.9ZM77.5,-20.5L78.3,-20.4L78.0,-20.1L76.1,-19.6L75.5,-19.2L75.8,-20.0ZM74.7,-18.6L74.3,-18.3L75.0,-19.5ZM81.7,-23.7L82.3,-23.0L81.7,-22.2L79.1,-22.6L79.7,-23.1L80.4,-23.0L80.7,-23.6L81.2,-23.5L81.2,-24.0ZM95.9,-29.8L96.9,-29.4L96.7,-29.2L96.0,-29.2L95.4,-30.1ZM99.1,-29.2L97.9,-29.4L98.7,-29.9L99.2,-29.8ZM94.3,-29.1L95.4,-28.7L92.8,-26.8L90.8,-26.7L91.1,-27.2L92.5,-27.8L92.5,-28.3L93.7,-29.0L93.9,-30.0ZM73.3,-9.1L73.4,-9.6L74.1,-9.6ZM73.0,-9.8L73.1,-10.5L73.6,-10.2ZM69.3,-4.2L67.8,-4.2L68.6,-4.7ZM88.9,-26.9L90.4,-26.4L90.2,-25.0L88.8,-24.9L87.5,-24.2L86.7,-24.3L87.2,-24.7L87.3,-25.7L88.4,-25.8L88.0,-26.3ZM83.4,-21.9L84.4,-22.5L84.6,-23.2L85.7,-23.1L85.8,-22.2L84.1,-21.1L81.2,-20.6L79.0,-20.1L78.7,-20.4L79.8,-21.1L81.3,-21.3L82.3,-22.2L82.8,-23.4L82.6,-24.2L83.8,-25.3L84.6,-25.3L83.6,-24.1L83.9,-22.7ZM6.4,-32.8L5.9,-32.9L8.3,-34.3L9.3,-34.5L9.3,-33.8ZM56.2,86.8L58.6,86.8L60.5,84.3L60.7,85.2L62.4,87.1L63.3,84.0L64.0,84.9L65.3,84.7L65.7,85.3L65.7,83.5L66.8,83.8L66.9,82.2L68.6,82.7L69.3,81.7L72.2,81.2L72.9,83.0L77.0,83.9L76.0,85.1L76.8,85.6L76.3,86.5L77.5,88.2L77.1,88.4L76.8,87.5L75.5,87.5L74.9,88.1L72.6,89.1L72.4,90.0L73.3,91.4L72.9,92.2L72.6,92.0L72.6,93.9L73.9,96.0L76.6,98.1L78.0,102.3L79.6,104.4L81.6,105.9L84.7,106.1L83.9,107.9L90.3,112.1L91.9,114.7L91.5,116.1L90.6,115.5L90.0,113.9L88.5,113.6L87.8,112.8L87.1,113.0L85.8,116.4L87.6,118.2L87.8,120.0L86.1,121.0L85.9,122.8L84.3,125.1L83.3,125.1L83.1,124.0L83.6,123.3L83.9,121.6L84.8,121.2L84.8,120.3L83.2,115.2L80.9,114.1L80.3,112.0L79.0,112.3L79.4,111.7L78.1,111.3L77.1,109.3L75.1,109.2L73.7,108.1L70.6,104.2L68.9,103.6L69.1,103.0L67.7,101.1L67.1,101.0L66.2,96.7L65.6,95.9L61.6,94.0L59.2,96.6L57.6,97.1L58.1,95.2L57.1,95.3L55.8,94.4L56.1,92.0L55.0,90.9L56.4,90.0L56.6,89.4L55.5,87.6ZM66.7,101.5L66.8,102.2L66.1,102.1L65.9,101.7ZM82.8,123.7L81.4,127.4L82.0,129.3L81.4,131.1L79.7,130.7L78.4,129.1L77.3,128.9L74.4,126.8L73.7,126.7L73.1,125.7L74.0,123.9L74.5,124.6L75.7,123.9L77.3,124.9L81.4,124.1L82.6,123.4ZM64.3,111.0L64.9,112.8L64.4,113.9L64.1,119.2L62.5,118.9L62.2,120.2L61.3,120.4L60.5,119.0L60.9,116.3L60.5,115.3L60.7,113.8L59.8,112.1L59.9,110.8L61.0,111.1L63.1,109.2L64.3,110.3ZM60.7,119.7L60.5,120.2L60.3,119.5ZM98.5,123.0L99.1,124.4L98.3,124.3L98.1,123.7L97.7,123.9L97.9,123.2L98.4,122.5ZM99.4,125.7L99.7,126.2L99.2,126.4L98.6,125.6L98.8,125.1ZM98.8,121.9L98.4,122.0L98.4,121.6L98.8,120.7ZM96.9,117.9L96.3,117.8L95.5,116.5L96.3,116.2L96.4,117.6ZM107.3,120.2L107.6,120.9L109.5,121.7L110.0,123.7L110.9,124.2L110.7,124.9L109.8,124.2L109.2,122.9L108.0,122.7L106.4,120.7L105.6,120.7L106.8,119.8ZM108.4,119.5L108.1,119.5L107.8,119.0ZM111.2,120.9L110.5,120.5L110.6,120.1ZM111.5,112.2L110.7,112.1L111.1,111.4ZM106.2,133.5L105.8,133.6L105.7,132.9ZM119.0,137.0L118.7,136.3L119.0,135.4ZM118.5,129.8L118.2,129.9L118.4,129.3ZM118.3,130.9L119.3,130.1L119.6,130.2ZM113.9,129.8L113.6,129.9L113.4,129.3L113.9,128.7ZM113.1,129.3L112.6,129.6L112.7,129.1ZM117.9,125.7L118.6,126.2L118.0,126.5L117.2,126.1ZM114.9,130.6L114.5,130.6L114.9,130.3L115.5,130.1ZM116.8,131.6L116.4,131.9L116.2,131.5ZM110.8,130.7L110.8,131.1L110.1,131.3L110.2,130.9ZM112.2,126.0L111.3,125.0L112.1,125.3ZM113.0,126.7L112.7,127.0L112.3,126.5ZM115.6,123.8L115.3,124.0L115.0,123.6L115.3,123.1L114.9,122.0L115.8,122.2ZM116.6,118.4L117.0,120.0L115.7,119.6L116.2,119.1L115.6,119.5L114.9,119.1L115.1,118.6L115.9,118.2ZM114.4,113.2L113.6,112.9L114.0,112.7ZM113.6,115.3L113.3,116.1L113.0,115.7L112.8,116.0L112.4,115.2ZM121.1,134.7L120.7,134.6L121.0,133.1L122.3,132.3L121.9,134.1ZM108.6,136.6L109.6,136.3L109.4,136.8L110.2,137.5L111.4,137.2L114.5,137.5L114.7,138.6L116.2,137.7L115.9,139.1L111.6,139.5L111.3,138.8L110.6,138.4L107.8,138.0L107.8,136.6L108.1,136.7L108.3,136.1ZM116.3,107.0L117.2,107.5L117.3,108.5L116.4,109.3L116.4,110.4L115.7,111.6L112.6,110.4L111.6,111.1L110.6,110.7L109.4,111.7L108.4,111.6L108.7,113.2L109.8,113.6L110.2,114.5L108.8,113.5L108.3,113.6L109.0,114.7L108.9,115.4L108.1,114.1L107.3,113.9L107.3,114.6L108.1,115.4L107.2,115.2L107.0,114.2L105.7,113.3L105.7,112.4L104.8,112.8L104.7,115.0L107.0,119.2L106.5,119.5L106.5,118.8L105.7,118.5L105.6,119.2L106.2,119.8L104.6,120.6L106.8,121.6L109.0,123.5L109.3,126.2L107.6,124.6L106.1,125.4L107.5,127.5L106.5,128.0L106.0,127.3L105.1,127.0L106.5,132.2L105.1,130.6L104.4,132.3L103.6,130.2L103.1,129.5L102.7,129.6L102.5,130.9L102.1,130.3L101.6,129.2L101.9,127.7L100.2,125.5L101.0,123.9L101.8,124.0L102.7,123.3L105.7,125.0L105.7,124.6L106.6,124.2L104.2,122.7L103.9,123.1L102.8,122.8L101.2,123.3L100.8,122.5L100.3,123.1L99.0,120.6L100.1,120.5L100.1,119.9L99.1,120.0L97.6,118.4L96.6,116.6L97.4,116.7L97.8,116.1L97.6,115.3L98.7,114.6L99.9,112.2L99.6,111.1L101.6,111.0L102.9,109.8L104.4,109.8L105.1,109.5L105.3,108.8L108.0,108.5L109.3,107.9L110.7,107.7L111.5,108.7L113.0,109.2L115.1,108.9L115.8,108.5L115.6,107.0Z"}};
