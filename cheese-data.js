// HIDEOUT CARTER チーズ図鑑データ
// 味わいは一般的に語られる傾向をもとにした目安です。price：国内の店頭価格100gあたりのおおよその目安（円）。
// p：[ミルク感, 塩気, 旨み, 酸味, 甘み・ナッツ, 香りの強さ, 刺激, かたさ]（0〜5） pairs：お酒のタイプごとの相性 0〜3
const CHEESE_ITEMS = [
{
"id": "ch-camembert",
"name": "カマンベール・ド・ノルマンディー",
"en": "Camembert de Normandie",
"region": "normandie",
"lat": 48.92,
"lon": 0.2,
"desc": "ノルマンディーのカマンベール村で18世紀末に生まれたといわれる白カビチーズ。無殺菌乳で造り、伝統的な製法を守ったものだけがこの名を名乗れる（AOP）。",
"ex": [
{
"id": "ch-camembert-aop",
"label": "AOP",
"name": "カマンベール・ド・ノルマンディー",
"en": "Camembert de Normandie AOP",
"type": "白カビ",
"age": "3週間以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"bloom"
],
"color": "bloom",
"price": 1000,
"p": [
5,
2,
4,
1,
2,
3,
0,
1
],
"tags": [
"マッシュルーム",
"バター",
"クリーミー",
"ナッツ"
],
"pairs": {
"r_light": 3,
"wh_rich": 2,
"spark": 2,
"s_rich": 1,
"w_light": 1
},
"desc": "熟成が進むと中心までとろりとやわらかくなり、きのこやバターの香りが濃くなる。食べる1時間ほど前に冷蔵庫から出して、常温に戻すと香りが開く。",
"recipes": [
"r-camembert"
]
}
]
},
{
"id": "ch-pontleveque",
"name": "ポン・レヴェック",
"en": "Pont-l'Évêque",
"region": "normandie",
"lat": 49.28,
"lon": 0.18,
"desc": "ノルマンディーで12世紀ごろから造られてきたとされる、四角いウォッシュチーズ。フランスで最も古いチーズのひとつ。",
"ex": [
{
"id": "ch-pontleveque-aop",
"label": "AOP",
"name": "ポン・レヴェック",
"en": "Pont-l'Évêque AOP",
"type": "ウォッシュ",
"age": "2週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1300,
"p": [
4,
3,
4,
1,
3,
3,
0,
1
],
"tags": [
"バター",
"ナッツ",
"干し草",
"旨み"
],
"pairs": {
"wh_rich": 3,
"r_light": 2,
"s_rich": 2,
"spark": 1
},
"desc": "ウォッシュタイプとしては香りがおだやかで、中はねっとりとして甘い。ウォッシュの入門にも。",
"recipes": []
}
]
},
{
"id": "ch-brie",
"name": "ブリー・ド・モー",
"en": "Brie de Meaux",
"region": "iledefrance",
"lat": 48.96,
"lon": 2.88,
"desc": "パリ東部のモー周辺で造られる、直径35cmほどの大きな白カビチーズ。「チーズの王」と呼ばれる。",
"ex": [
{
"id": "ch-brie-aop",
"label": "AOP",
"name": "ブリー・ド・モー",
"en": "Brie de Meaux AOP",
"type": "白カビ",
"age": "4週間以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"bloom"
],
"color": "bloom",
"price": 1400,
"p": [
5,
2,
4,
1,
3,
3,
0,
1
],
"tags": [
"マッシュルーム",
"ナッツ",
"バター",
"クリーミー"
],
"pairs": {
"r_light": 3,
"spark": 3,
"wh_rich": 2,
"s_rich": 1
},
"desc": "カマンベールより大きく平たいため熟成がゆるやかで、上品なナッツの風味とコクがある。",
"recipes": []
},
{
"id": "ch-brie-std",
"label": "ブリー（一般）",
"name": "ブリー",
"en": "Brie",
"type": "白カビ",
"age": "数週間",
"abv": "",
"cask": "牛",
"grapes": [
"bloom"
],
"color": "bloom",
"price": 700,
"p": [
5,
2,
3,
1,
2,
1,
0,
1
],
"tags": [
"ミルク",
"バター",
"マッシュルーム"
],
"pairs": {
"r_light": 2,
"spark": 2,
"wh_rich": 2,
"s_rich": 1
},
"desc": "スーパーでも手に入る、殺菌乳で造る一般的なブリー。マイルドで食べやすい。",
"recipes": []
}
]
},
{
"id": "ch-mimolette",
"name": "ミモレット",
"en": "Mimolette",
"region": "nord",
"lat": 50.63,
"lon": 3.06,
"desc": "フランス北部リール周辺で造られる、オレンジ色の球形のチーズ。表面のでこぼこは、熟成中にダニ（シロン）が皮を食べることで生まれる。",
"ex": [
{
"id": "ch-mimolette-6",
"label": "ジューヌ（6か月）",
"name": "ミモレット ジューヌ（6か月）",
"en": "Mimolette Jeune",
"type": "セミハード",
"age": "6か月前後",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "orange",
"price": 600,
"p": [
3,
3,
3,
1,
3,
1,
0,
3
],
"tags": [
"ナッツ",
"バター",
"からすみ風"
],
"pairs": {
"w_light": 2,
"w_rich": 2,
"r_light": 2,
"s_dry": 1,
"spark": 1
},
"desc": "若いミモレット。しっとりとしてマイルド。色はベニノキの種（アナトー）で付けたもの。",
"recipes": []
},
{
"id": "ch-mimolette-18",
"label": "ヴィエイユ（18か月）",
"name": "ミモレット ヴィエイユ（18か月）",
"en": "Mimolette Vieille",
"type": "ハード",
"age": "18か月前後",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "orange",
"price": 1100,
"p": [
2,
3,
5,
1,
4,
3,
0,
5
],
"tags": [
"からすみ",
"ナッツ",
"キャラメル",
"旨み"
],
"pairs": {
"w_rich": 3,
"w_sherry": 3,
"s_aged": 2,
"r_full": 1,
"dessert": 1
},
"desc": "長く熟成させてかたくなったミモレット。からすみに似た濃い旨みと、キャラメルのような甘さ。薄く削ってウイスキーと合わせたい。",
"recipes": []
}
]
},
{
"id": "ch-maroilles",
"name": "マロワール",
"en": "Maroilles",
"region": "nord",
"lat": 50.13,
"lon": 3.76,
"desc": "フランス北部ティエラシュ地方の修道院で生まれたとされる、四角いウォッシュチーズ。",
"ex": [
{
"id": "ch-maroilles-aop",
"label": "AOP",
"name": "マロワール",
"en": "Maroilles AOP",
"type": "ウォッシュ",
"age": "5週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1300,
"p": [
4,
3,
5,
1,
2,
5,
1,
1
],
"tags": [
"香り強め",
"旨み",
"ナッツ"
],
"pairs": {
"s_rich": 3,
"w_smoky": 2,
"r_light": 2,
"wh_rich": 1
},
"desc": "強烈な香りの皮の下に、ねっとりと甘い中身。地元ではビールと合わせる。",
"recipes": []
}
]
},
{
"id": "ch-langres",
"name": "ラングル",
"en": "Langres",
"region": "champagne",
"lat": 47.86,
"lon": 5.33,
"desc": "シャンパーニュ地方の高原の町ラングルで造られる、上面がくぼんだ円筒形のウォッシュチーズ。",
"ex": [
{
"id": "ch-langres-aop",
"label": "AOP",
"name": "ラングル",
"en": "Langres AOP",
"type": "ウォッシュ",
"age": "15日以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1500,
"p": [
4,
3,
4,
2,
2,
4,
1,
1
],
"tags": [
"旨み",
"レモン",
"香り強め"
],
"pairs": {
"spark": 3,
"s_rich": 2,
"wh_rich": 2
},
"desc": "上面のくぼみ（フォンテーヌ）にシャンパーニュやマールを注いで食べる楽しみ方がある。",
"recipes": []
}
]
},
{
"id": "ch-epoisses",
"name": "エポワス",
"en": "Époisses",
"region": "bourgogne",
"lat": 47.51,
"lon": 4.17,
"desc": "ブルゴーニュのエポワス村で、16世紀に修道士が造り始めたとされるウォッシュチーズ。ブドウの搾りかすの蒸留酒マール・ド・ブルゴーニュで表面を洗う。",
"ex": [
{
"id": "ch-epoisses-aop",
"label": "AOP",
"name": "エポワス",
"en": "Époisses AOP",
"type": "ウォッシュ",
"age": "4週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 2000,
"p": [
4,
3,
5,
1,
2,
5,
2,
1
],
"tags": [
"香り強め",
"旨み",
"とろとろ",
"マール"
],
"pairs": {
"r_light": 3,
"s_rich": 3,
"w_smoky": 2,
"dessert": 1
},
"desc": "「チーズの王様」とナポレオンが愛したと伝えられる。強烈な香りに反して、中はとろりと濃厚で甘い。スプーンですくって。",
"recipes": []
}
]
},
{
"id": "ch-brillat",
"name": "ブリア・サヴァラン",
"en": "Brillat-Savarin",
"region": "bourgogne",
"lat": 47.8,
"lon": 3.57,
"desc": "美食家ブリア＝サヴァランの名を冠した、生クリームを加えて造る白カビチーズ。",
"ex": [
{
"id": "ch-brillat-std",
"label": "フレ／アフィネ",
"name": "ブリア・サヴァラン",
"en": "Brillat-Savarin",
"type": "白カビ",
"age": "1〜4週間",
"abv": "",
"cask": "牛（生クリーム入り）",
"grapes": [
"bloom"
],
"color": "bloom",
"price": 1300,
"p": [
5,
2,
3,
3,
4,
1,
0,
1
],
"tags": [
"クリーム",
"バター",
"ヨーグルト"
],
"pairs": {
"spark": 3,
"dessert": 2,
"wh_rich": 2,
"r_light": 1
},
"desc": "乳脂肪分が非常に高く、レアチーズケーキのようなまろやかな酸味とクリーム感。若いフレッシュタイプと、白カビの熟成タイプがある。いちごやはちみつとも。",
"recipes": []
}
]
},
{
"id": "ch-comte",
"name": "コンテ",
"en": "Comté",
"region": "jura",
"lat": 46.9,
"lon": 6.35,
"desc": "フランスで最も多く造られているAOPチーズ。ジュラ山脈の放牧地の牛乳で造る、直径70cmほどの大きなハードチーズ。",
"ex": [
{
"id": "ch-comte-12",
"label": "12か月熟成",
"name": "コンテ 12か月熟成",
"en": "Comté 12 months",
"type": "ハード",
"age": "12か月前後",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1100,
"p": [
3,
3,
4,
1,
4,
2,
0,
4
],
"tags": [
"ナッツ",
"バター",
"ミルク",
"ヘーゼルナッツ"
],
"pairs": {
"wh_rich": 3,
"w_light": 2,
"r_light": 2,
"s_dry": 1,
"w_sherry": 1
},
"desc": "ナッツやバターの香りがやさしく広がる、食べやすい熟成度。ジュラの白ワインと定番の組み合わせ。",
"recipes": []
},
{
"id": "ch-comte-24",
"label": "24か月熟成",
"name": "コンテ 24か月熟成",
"en": "Comté 24 months",
"type": "ハード",
"age": "24か月前後",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1700,
"p": [
2,
3,
5,
1,
5,
3,
0,
5
],
"tags": [
"ナッツ",
"キャラメル",
"アミノ酸の結晶",
"旨み"
],
"pairs": {
"w_sherry": 3,
"w_rich": 2,
"wh_rich": 2,
"dessert": 2,
"s_aged": 2
},
"desc": "長期熟成で旨みと甘さが凝縮し、アミノ酸の結晶がシャリッと感じられる。シェリー樽のウイスキーや黄ワインと。",
"recipes": []
}
]
},
{
"id": "ch-morbier",
"name": "モルビエ",
"en": "Morbier",
"region": "jura",
"lat": 46.54,
"lon": 6.02,
"desc": "ジュラ地方の、中央に黒い灰の線が入ったセミハード。朝と夕方の乳を重ねて造った名残といわれる。",
"ex": [
{
"id": "ch-morbier-aop",
"label": "AOP",
"name": "モルビエ",
"en": "Morbier AOP",
"type": "セミハード",
"age": "45日以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "ash",
"price": 1000,
"p": [
4,
2,
3,
1,
3,
3,
0,
3
],
"tags": [
"ナッツ",
"ミルク",
"干し草"
],
"pairs": {
"wh_rich": 2,
"r_light": 2,
"s_rich": 1,
"w_light": 1
},
"desc": "断面の黒い線は植物の炭。弾力があり、穏やかな香りとミルクの甘さ。",
"recipes": []
}
]
},
{
"id": "ch-montdor",
"name": "モン・ドール",
"en": "Mont d'Or",
"region": "jura",
"lat": 46.75,
"lon": 6.35,
"desc": "ジュラ地方で秋から春だけ造られる季節限定のウォッシュチーズ。モミの木の樹皮の帯で巻かれる。",
"ex": [
{
"id": "ch-montdor-aop",
"label": "AOP",
"name": "モン・ドール（ヴァシュラン・オー・ドゥー）",
"en": "Mont d'Or AOP",
"type": "ウォッシュ",
"age": "3週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 2000,
"p": [
5,
2,
4,
1,
3,
3,
0,
0
],
"tags": [
"樹脂",
"とろとろ",
"クリーミー",
"きのこ"
],
"pairs": {
"wh_rich": 3,
"r_light": 2,
"spark": 2,
"s_rich": 1
},
"desc": "とろとろの中身をスプーンですくって食べる。白ワインを注いでオーブンで焼き、パンやじゃがいもにつけるのも定番。",
"recipes": []
}
]
},
{
"id": "ch-reblochon",
"name": "ルブロション",
"en": "Reblochon",
"region": "savoie",
"lat": 45.9,
"lon": 6.43,
"desc": "サヴォワ地方の山で造られる、ウォッシュタイプのやわらかいチーズ。",
"ex": [
{
"id": "ch-reblochon-aop",
"label": "AOP",
"name": "ルブロション",
"en": "Reblochon de Savoie AOP",
"type": "ウォッシュ",
"age": "15日以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1300,
"p": [
5,
2,
4,
1,
3,
3,
0,
1
],
"tags": [
"ナッツ",
"バター",
"クリーミー"
],
"pairs": {
"wh_crisp": 2,
"wh_rich": 2,
"r_light": 2,
"s_rich": 1
},
"desc": "香りはおだやかで、ナッツのような甘さとクリーミーな口当たり。じゃがいもと焼くタルティフレットにも使われる。",
"recipes": []
}
]
},
{
"id": "ch-beaufort",
"name": "ボーフォール",
"en": "Beaufort",
"region": "savoie",
"lat": 45.72,
"lon": 6.57,
"desc": "サヴォワ地方の高地の牧草だけで育った牛の乳で造る、側面がくぼんだ大きなハードチーズ。",
"ex": [
{
"id": "ch-beaufort-aop",
"label": "AOP",
"name": "ボーフォール",
"en": "Beaufort AOP",
"type": "ハード",
"age": "5か月以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1600,
"p": [
3,
3,
5,
1,
4,
2,
0,
5
],
"tags": [
"ナッツ",
"花",
"バター",
"旨み"
],
"pairs": {
"wh_rich": 3,
"wh_crisp": 2,
"w_light": 2,
"s_dry": 1
},
"desc": "「チーズのプリンス」とも呼ばれる。夏の高地の牧草（アルパージュ）の乳で造ったものは、花やバターの香りが格別。",
"recipes": []
}
]
},
{
"id": "ch-tomme",
"name": "トム・ド・サヴォワ",
"en": "Tomme de Savoie",
"region": "savoie",
"lat": 45.65,
"lon": 6.4,
"desc": "サヴォワ地方の農家で古くから造られてきた、素朴なセミハード。",
"ex": [
{
"id": "ch-tomme-igp",
"label": "IGP",
"name": "トム・ド・サヴォワ",
"en": "Tomme de Savoie IGP",
"type": "セミハード",
"age": "10週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "semi",
"price": 900,
"p": [
4,
2,
3,
2,
3,
2,
0,
3
],
"tags": [
"土",
"きのこ",
"ミルク"
],
"pairs": {
"wh_crisp": 2,
"r_light": 2,
"s_dry": 1
},
"desc": "灰色の皮に、ほどよい弾力の中身。土やきのこを思わせる素朴な香り。",
"recipes": []
}
]
},
{
"id": "ch-raclettefr",
"name": "ラクレット",
"en": "Raclette",
"region": "savoie",
"lat": 45.7,
"lon": 6.3,
"desc": "加熱して溶かし、削ぎ取って食べる料理「ラクレット」に使うチーズ。フランスのサヴォワ地方とスイスで造られる。",
"ex": [
{
"id": "ch-raclette-fr",
"label": "ラクレット・ド・サヴォワ",
"name": "ラクレット・ド・サヴォワ",
"en": "Raclette de Savoie IGP",
"type": "セミハード",
"age": "8週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "semi",
"price": 900,
"p": [
4,
3,
3,
1,
3,
3,
0,
3
],
"tags": [
"ミルク",
"ナッツ",
"香ばしい"
],
"pairs": {
"wh_crisp": 3,
"r_light": 2,
"w_light": 1
},
"desc": "そのままでも食べられるが、断面を溶かすと香りが一気に立ち、とろりと伸びる。",
"recipes": [
"r-raclette"
]
}
]
},
{
"id": "ch-cantal",
"name": "カンタル",
"en": "Cantal",
"region": "auvergne",
"lat": 45.03,
"lon": 2.65,
"desc": "オーヴェルニュ地方の、フランス最古ともいわれるチーズのひとつ。",
"ex": [
{
"id": "ch-cantal-vieux",
"label": "ヴュー（熟成）",
"name": "カンタル ヴュー",
"en": "Cantal Vieux AOP",
"type": "ハード",
"age": "8か月以上",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "hard",
"price": 1200,
"p": [
2,
4,
4,
2,
3,
3,
1,
4
],
"tags": [
"ナッツ",
"土",
"旨み"
],
"pairs": {
"r_full": 2,
"r_light": 2,
"w_rich": 1,
"s_rich": 1
},
"desc": "熟成期間により若い順にジュヌ、アントル・ドゥー、ヴューと呼び分ける。ヴューは力強い旨みと酸味。",
"recipes": []
}
]
},
{
"id": "ch-stnectaire",
"name": "サン・ネクテール",
"en": "Saint-Nectaire",
"region": "auvergne",
"lat": 45.58,
"lon": 2.99,
"desc": "オーヴェルニュの火山地帯で造られるセミハード。湿った洞窟で熟成させる。",
"ex": [
{
"id": "ch-stnectaire-aop",
"label": "AOP",
"name": "サン・ネクテール",
"en": "Saint-Nectaire AOP",
"type": "セミハード",
"age": "4週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1300,
"p": [
4,
2,
4,
1,
3,
3,
0,
2
],
"tags": [
"きのこ",
"ナッツ",
"土"
],
"pairs": {
"r_light": 3,
"wh_rich": 1,
"s_rich": 2
},
"desc": "しっとりとした中身に、きのこや土を思わせる香り。軽い赤ワインとよく合う。",
"recipes": []
}
]
},
{
"id": "ch-fourme",
"name": "フルム・ダンベール",
"en": "Fourme d'Ambert",
"region": "auvergne",
"lat": 45.55,
"lon": 3.74,
"desc": "オーヴェルニュの円筒形の青カビチーズ。フランスでもっとも穏やかな青カビといわれる。",
"ex": [
{
"id": "ch-fourme-aop",
"label": "AOP",
"name": "フルム・ダンベール",
"en": "Fourme d'Ambert AOP",
"type": "青カビ",
"age": "28日以上",
"abv": "",
"cask": "牛",
"grapes": [
"blue"
],
"color": "blue",
"price": 1100,
"p": [
4,
3,
3,
1,
3,
3,
2,
1
],
"tags": [
"青カビ",
"ナッツ",
"クリーミー"
],
"pairs": {
"dessert": 3,
"r_light": 1,
"w_sherry": 2,
"s_aged": 1
},
"desc": "青カビの刺激はやさしく、塩気も控えめ。青カビチーズの入門に。",
"recipes": []
}
]
},
{
"id": "ch-roquefort",
"name": "ロックフォール",
"en": "Roquefort",
"region": "roquefort",
"lat": 43.97,
"lon": 2.99,
"desc": "ロックフォール村の石灰岩の洞窟で熟成させる、羊乳の青カビチーズ。フランスで最初に原産地呼称で保護されたチーズ。",
"ex": [
{
"id": "ch-roquefort-aop",
"label": "AOP",
"name": "ロックフォール",
"en": "Roquefort AOP",
"type": "青カビ",
"age": "90日以上",
"abv": "",
"cask": "羊（無殺菌乳）",
"grapes": [
"blue"
],
"color": "blue",
"price": 1400,
"p": [
3,
5,
5,
1,
2,
5,
5,
2
],
"tags": [
"青カビ",
"塩気",
"ピリッと",
"羊乳"
],
"pairs": {
"dessert": 3,
"w_sherry": 2,
"w_smoky": 1,
"s_aged": 2
},
"desc": "世界三大ブルーチーズのひとつ。強い塩気とピリッとした刺激、羊乳のコク。甘口のソーテルヌと合わせるのが古典的な組み合わせ。",
"recipes": [
"r-blue-honey"
]
}
]
},
{
"id": "ch-stmaure",
"name": "サント・モール・ド・トゥーレーヌ",
"en": "Sainte-Maure de Touraine",
"region": "loire",
"lat": 47.11,
"lon": 0.62,
"desc": "ロワール地方の細長い山羊乳チーズ。中心に麦わらが1本通っている。",
"ex": [
{
"id": "ch-stmaure-aop",
"label": "AOP",
"name": "サント・モール・ド・トゥーレーヌ",
"en": "Sainte-Maure de Touraine AOP",
"type": "シェーヴル",
"age": "10日以上",
"abv": "",
"cask": "山羊",
"grapes": [
"chevre"
],
"color": "chevre",
"price": 1500,
"p": [
3,
2,
2,
4,
1,
3,
1,
2
],
"tags": [
"山羊乳",
"レモン",
"ナッツ",
"木炭"
],
"pairs": {
"wh_crisp": 3,
"rose": 1,
"s_dry": 1
},
"desc": "表面に木炭の粉をまぶした灰色の皮。さわやかな酸味とナッツの風味。ロワールのソーヴィニヨン・ブランと定番の組み合わせ。",
"recipes": []
}
]
},
{
"id": "ch-valencay",
"name": "ヴァランセ",
"en": "Valençay",
"region": "loire",
"lat": 47.16,
"lon": 1.57,
"desc": "ロワール地方の、頂上が切り取られたピラミッド形の山羊乳チーズ。",
"ex": [
{
"id": "ch-valencay-aop",
"label": "AOP",
"name": "ヴァランセ",
"en": "Valençay AOP",
"type": "シェーヴル",
"age": "11日以上",
"abv": "",
"cask": "山羊",
"grapes": [
"chevre"
],
"color": "chevre",
"price": 1500,
"p": [
3,
2,
2,
4,
2,
2,
1,
2
],
"tags": [
"山羊乳",
"レモン",
"ヘーゼルナッツ"
],
"pairs": {
"wh_crisp": 3,
"s_dry": 1
},
"desc": "ナポレオンがエジプト遠征の失敗に怒って頂上を切り落としたという逸話がある形。若いうちはムースのように軽い。",
"recipes": []
}
]
},
{
"id": "ch-crottin",
"name": "クロタン・ド・シャヴィニョル",
"en": "Crottin de Chavignol",
"region": "loire",
"lat": 47.4,
"lon": 2.85,
"desc": "サンセールの近くシャヴィニョル村の、小さな円筒形の山羊乳チーズ。",
"ex": [
{
"id": "ch-crottin-aop",
"label": "AOP",
"name": "クロタン・ド・シャヴィニョル",
"en": "Crottin de Chavignol AOP",
"type": "シェーヴル",
"age": "10日以上",
"abv": "",
"cask": "山羊",
"grapes": [
"chevre"
],
"color": "chevre",
"price": 800,
"p": [
3,
2,
3,
3,
2,
3,
1,
3
],
"tags": [
"山羊乳",
"ナッツ",
"キノコ"
],
"pairs": {
"wh_crisp": 3,
"r_light": 1,
"s_dry": 1
},
"desc": "熟成するほど締まってナッツのような風味が増す。軽く焼いてサラダにのせるのも定番。",
"recipes": []
}
]
},
{
"id": "ch-munster",
"name": "マンステール",
"en": "Munster",
"region": "alsace",
"lat": 48.04,
"lon": 7.13,
"desc": "アルザス地方の谷で修道士が造り始めたとされるウォッシュチーズ。",
"ex": [
{
"id": "ch-munster-aop",
"label": "AOP",
"name": "マンステール",
"en": "Munster AOP",
"type": "ウォッシュ",
"age": "21日以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1200,
"p": [
4,
3,
5,
1,
2,
5,
1,
1
],
"tags": [
"香り強め",
"旨み",
"クミン"
],
"pairs": {
"wh_rich": 2,
"wh_crisp": 2,
"s_rich": 2,
"w_smoky": 1
},
"desc": "強烈な香りながら中はやわらか。地元ではクミンシードを添え、アルザスのゲヴュルツトラミネールと合わせる。",
"recipes": []
}
]
},
{
"id": "ch-ossau",
"name": "オッソー・イラティ",
"en": "Ossau-Iraty",
"region": "basque",
"lat": 43.1,
"lon": -0.8,
"desc": "ピレネー山脈のバスク地方とベアルン地方で造られる、羊乳のハードチーズ。",
"ex": [
{
"id": "ch-ossau-aop",
"label": "AOP",
"name": "オッソー・イラティ",
"en": "Ossau-Iraty AOP",
"type": "ハード",
"age": "80日以上",
"abv": "",
"cask": "羊",
"grapes": [
"hard"
],
"color": "hard",
"price": 1500,
"p": [
3,
3,
4,
1,
4,
2,
0,
4
],
"tags": [
"ナッツ",
"羊乳",
"バター"
],
"pairs": {
"r_light": 2,
"wh_rich": 2,
"w_sherry": 1,
"s_dry": 1
},
"desc": "ナッツのような甘さと羊乳のコク。地元ではさくらんぼのジャムを添える。",
"recipes": []
}
]
},
{
"id": "ch-parmigiano",
"name": "パルミジャーノ・レッジャーノ",
"en": "Parmigiano Reggiano",
"region": "emilia",
"lat": 44.7,
"lon": 10.5,
"desc": "パルマやレッジョ・エミリア周辺で造られる「チーズの王様」。直径40cmを超える大きな塊で、最低12か月熟成させる。",
"ex": [
{
"id": "ch-parmigiano-24",
"label": "24か月熟成",
"name": "パルミジャーノ・レッジャーノ 24か月",
"en": "Parmigiano Reggiano 24 months",
"type": "ハード",
"age": "24か月",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1200,
"p": [
2,
4,
5,
1,
4,
3,
1,
5
],
"tags": [
"旨み",
"ナッツ",
"アミノ酸の結晶",
"バター"
],
"pairs": {
"spark": 3,
"r_light": 2,
"w_sherry": 2,
"s_aged": 2,
"wh_rich": 1
},
"desc": "最もよく流通する熟成度。旨みと塩気、ほろりとくずれる食感。手で割ってそのまま、またはバルサミコ酢を数滴。",
"recipes": [
"r-carbonara",
"r-caesar"
]
},
{
"id": "ch-parmigiano-36",
"label": "36か月熟成",
"name": "パルミジャーノ・レッジャーノ 36か月",
"en": "Parmigiano Reggiano 36 months",
"type": "ハード",
"age": "36か月",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1700,
"p": [
1,
4,
5,
1,
5,
4,
2,
5
],
"tags": [
"旨み",
"スパイス",
"アミノ酸の結晶",
"ナッツ"
],
"pairs": {
"w_sherry": 3,
"r_full": 2,
"s_aged": 3,
"dessert": 2
},
"desc": "長期熟成でアミノ酸の結晶が増え、スパイシーで深い旨み。シェリー樽のウイスキーや熟成酒と。",
"recipes": []
}
]
},
{
"id": "ch-grana",
"name": "グラナ・パダーノ",
"en": "Grana Padano",
"region": "lombardia",
"lat": 45.15,
"lon": 9.7,
"desc": "ポー川流域の広い地域で造られるハードチーズ。パルミジャーノより規定がゆるやかで、手頃な価格。",
"ex": [
{
"id": "ch-grana-dop",
"label": "DOP",
"name": "グラナ・パダーノ",
"en": "Grana Padano DOP",
"type": "ハード",
"age": "9か月以上",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "hard",
"price": 700,
"p": [
3,
4,
4,
1,
3,
2,
0,
5
],
"tags": [
"旨み",
"ナッツ",
"ミルク"
],
"pairs": {
"spark": 2,
"r_light": 2,
"wh_crisp": 1,
"s_dry": 1
},
"desc": "パルミジャーノよりマイルドで、ミルクの甘さが残る。削って料理に使っても。",
"recipes": [
"r-caesar"
]
}
]
},
{
"id": "ch-gorgonzola",
"name": "ゴルゴンゾーラ",
"en": "Gorgonzola",
"region": "lombardia",
"lat": 45.53,
"lon": 9.4,
"desc": "ミラノ近郊のゴルゴンゾーラ村で生まれた青カビチーズ。世界三大ブルーチーズのひとつ。",
"ex": [
{
"id": "ch-gorgonzola-dolce",
"label": "ドルチェ",
"name": "ゴルゴンゾーラ ドルチェ",
"en": "Gorgonzola Dolce DOP",
"type": "青カビ",
"age": "50日以上",
"abv": "",
"cask": "牛",
"grapes": [
"blue"
],
"color": "blue",
"price": 900,
"p": [
5,
3,
4,
1,
3,
3,
2,
0
],
"tags": [
"青カビ",
"クリーミー",
"ミルク"
],
"pairs": {
"dessert": 3,
"spark": 2,
"r_light": 1,
"w_sherry": 1
},
"desc": "「甘い」という名のとおり、クリーミーで刺激がやさしい。はちみつをかけたり、パスタのソースにしたり。",
"recipes": [
"r-blue-honey"
]
},
{
"id": "ch-gorgonzola-piccante",
"label": "ピカンテ",
"name": "ゴルゴンゾーラ ピカンテ",
"en": "Gorgonzola Piccante DOP",
"type": "青カビ",
"age": "80日以上",
"abv": "",
"cask": "牛",
"grapes": [
"blue"
],
"color": "blue",
"price": 1000,
"p": [
3,
4,
5,
1,
2,
5,
4,
2
],
"tags": [
"青カビ",
"ピリッと",
"塩気"
],
"pairs": {
"dessert": 3,
"w_sherry": 2,
"r_full": 2,
"w_smoky": 1,
"s_aged": 1
},
"desc": "長く熟成させた辛口タイプ。青カビが多く、ピリッとした刺激と濃い旨み。",
"recipes": [
"r-blue-honey"
]
}
]
},
{
"id": "ch-taleggio",
"name": "タレッジョ",
"en": "Taleggio",
"region": "lombardia",
"lat": 45.89,
"lon": 9.57,
"desc": "ロンバルディアの山あいのタレッジョ谷で生まれた、四角いウォッシュチーズ。",
"ex": [
{
"id": "ch-taleggio-dop",
"label": "DOP",
"name": "タレッジョ",
"en": "Taleggio DOP",
"type": "ウォッシュ",
"age": "35日以上",
"abv": "",
"cask": "牛",
"grapes": [
"washed"
],
"color": "washed",
"price": 1000,
"p": [
5,
3,
4,
1,
3,
3,
0,
1
],
"tags": [
"ミルク",
"きのこ",
"バター"
],
"pairs": {
"r_light": 2,
"wh_rich": 2,
"spark": 2,
"s_rich": 1
},
"desc": "ウォッシュのなかでは香りがおだやかで、中はミルキーでやわらか。",
"recipes": []
}
]
},
{
"id": "ch-mascarpone",
"name": "マスカルポーネ",
"en": "Mascarpone",
"region": "lombardia",
"lat": 45.45,
"lon": 9.2,
"desc": "ロンバルディア生まれの、生クリームから造るフレッシュチーズ。ティラミスの材料として有名。",
"ex": [
{
"id": "ch-mascarpone-std",
"label": "マスカルポーネ",
"name": "マスカルポーネ",
"en": "Mascarpone",
"type": "フレッシュ",
"age": "なし",
"abv": "",
"cask": "牛（生クリーム）",
"grapes": [
"fresh"
],
"color": "fresh",
"price": 500,
"p": [
5,
0,
1,
1,
5,
0,
0,
0
],
"tags": [
"クリーム",
"ミルク",
"甘み"
],
"pairs": {
"dessert": 3,
"spark": 2
},
"desc": "乳脂肪分が高く、ほんのり甘いクリームのよう。はちみつやフルーツ、コーヒーと合わせてデザートに。",
"recipes": []
}
]
},
{
"id": "ch-fontina",
"name": "フォンティーナ",
"en": "Fontina",
"region": "aosta",
"lat": 45.74,
"lon": 7.32,
"desc": "アオスタ谷の高地の牛乳で造るセミハード。イタリア版チーズフォンデュ「フォンドゥータ」に使われる。",
"ex": [
{
"id": "ch-fontina-dop",
"label": "DOP",
"name": "フォンティーナ",
"en": "Fontina DOP",
"type": "セミハード",
"age": "80日以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1200,
"p": [
4,
2,
3,
1,
3,
3,
0,
3
],
"tags": [
"ナッツ",
"はちみつ",
"バター"
],
"pairs": {
"wh_rich": 2,
"r_light": 2,
"s_rich": 1
},
"desc": "ほんのり甘くナッツのような風味。溶かすとなめらかに伸びる。",
"recipes": [
"r-fondue"
]
}
]
},
{
"id": "ch-robiola",
"name": "ロビオラ",
"en": "Robiola",
"region": "piemonte",
"lat": 44.6,
"lon": 8.25,
"desc": "ピエモンテ州ランゲ地方の、やわらかいチーズ。牛・山羊・羊の乳を合わせて造るものもある。",
"ex": [
{
"id": "ch-robiola-std",
"label": "ロビオラ",
"name": "ロビオラ",
"en": "Robiola",
"type": "フレッシュ",
"age": "数日〜2週間",
"abv": "",
"cask": "牛・山羊・羊",
"grapes": [
"fresh"
],
"color": "bloom",
"price": 1300,
"p": [
5,
2,
2,
3,
2,
1,
0,
0
],
"tags": [
"ミルク",
"クリーミー",
"酸味"
],
"pairs": {
"wh_crisp": 2,
"spark": 2,
"r_light": 1
},
"desc": "しっとりとクリーミーで、ほどよい酸味。若いうちはフレッシュに、熟成すると表面にうっすらとカビが生えてコクが出る。",
"recipes": []
}
]
},
{
"id": "ch-asiago",
"name": "アジアーゴ",
"en": "Asiago",
"region": "veneto",
"lat": 45.87,
"lon": 11.51,
"desc": "ヴェネト州アジアーゴ高原のチーズ。若いプレッサートと熟成したダッレーヴォがある。",
"ex": [
{
"id": "ch-asiago-dop",
"label": "ダッレーヴォ（熟成）",
"name": "アジアーゴ ダッレーヴォ",
"en": "Asiago d'Allevo DOP",
"type": "ハード",
"age": "4か月以上",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "hard",
"price": 1100,
"p": [
3,
3,
4,
1,
3,
2,
0,
4
],
"tags": [
"ナッツ",
"ミルク",
"旨み"
],
"pairs": {
"wh_crisp": 2,
"r_light": 2,
"w_light": 1
},
"desc": "熟成するとナッツの風味と旨みが増し、削ってパスタにかけても。",
"recipes": []
}
]
},
{
"id": "ch-mozzarella",
"name": "モッツァレラ・ディ・ブーファラ",
"en": "Mozzarella di Bufala Campana",
"region": "campania",
"lat": 41.2,
"lon": 14.1,
"desc": "カンパーニア地方の水牛の乳で造るモッツァレラ。生地を手で引きちぎって丸める（モッツァーレ）ことが名前の由来。",
"ex": [
{
"id": "ch-mozz-bufala",
"label": "ブーファラ（水牛）",
"name": "モッツァレラ・ディ・ブーファラ・カンパーナ",
"en": "Mozzarella di Bufala Campana DOP",
"type": "パスタフィラータ",
"age": "なし",
"abv": "",
"cask": "水牛",
"grapes": [
"pastafilata"
],
"color": "mozz",
"price": 1200,
"p": [
5,
1,
2,
2,
2,
1,
0,
1
],
"tags": [
"ミルク",
"爽やか",
"弾力"
],
"pairs": {
"wh_crisp": 3,
"spark": 2,
"rose": 2,
"s_aroma": 1
},
"desc": "牛乳のモッツァレラより濃厚で、かむとミルクがあふれる。冷やしすぎず、できるだけ新鮮なうちに。",
"recipes": [
"r-caprese"
]
},
{
"id": "ch-mozz-vacca",
"label": "牛乳（フィオール・ディ・ラッテ）",
"name": "モッツァレラ（牛乳）",
"en": "Fior di Latte",
"type": "パスタフィラータ",
"age": "なし",
"abv": "",
"cask": "牛",
"grapes": [
"pastafilata"
],
"color": "mozz",
"price": 500,
"p": [
5,
1,
1,
2,
2,
0,
0,
1
],
"tags": [
"ミルク",
"爽やか",
"弾力"
],
"pairs": {
"wh_crisp": 3,
"spark": 2,
"rose": 2
},
"desc": "スーパーでも手に入る牛乳のモッツァレラ。あっさりとしたミルクの風味で、ピザやカプレーゼに。",
"recipes": [
"r-caprese"
]
}
]
},
{
"id": "ch-scamorza",
"name": "スカモルツァ・アフミカータ",
"en": "Scamorza Affumicata",
"region": "campania",
"lat": 41.0,
"lon": 14.55,
"desc": "モッツァレラと同じ製法の生地を、ひょうたん形にして乾かしたチーズ。燻製したものが人気。",
"ex": [
{
"id": "ch-scamorza-smoke",
"label": "燻製",
"name": "スカモルツァ・アフミカータ",
"en": "Scamorza Affumicata",
"type": "パスタフィラータ",
"age": "数日〜2週間",
"abv": "",
"cask": "牛",
"grapes": [
"pastafilata"
],
"color": "smoke",
"price": 700,
"p": [
4,
2,
3,
1,
2,
3,
0,
2
],
"tags": [
"スモーク",
"ミルク",
"弾力"
],
"pairs": {
"w_smoky": 3,
"w_light": 2,
"r_light": 2,
"s_rich": 1
},
"desc": "ほのかな燻製の香り。厚めに切ってフライパンで焼くと、表面は香ばしく中はとろりと伸びる。",
"recipes": []
}
]
},
{
"id": "ch-burrata",
"name": "ブッラータ",
"en": "Burrata",
"region": "puglia",
"lat": 41.05,
"lon": 16.95,
"desc": "プーリア州アンドリアで生まれた、モッツァレラの袋の中に生クリームと裂いた生地を詰めたチーズ。",
"ex": [
{
"id": "ch-burrata-std",
"label": "ブッラータ",
"name": "ブッラータ",
"en": "Burrata",
"type": "パスタフィラータ",
"age": "なし",
"abv": "",
"cask": "牛",
"grapes": [
"pastafilata"
],
"color": "mozz",
"price": 1400,
"p": [
5,
1,
2,
2,
3,
0,
0,
0
],
"tags": [
"クリーム",
"ミルク",
"とろとろ"
],
"pairs": {
"wh_crisp": 3,
"spark": 3,
"rose": 2
},
"desc": "ナイフを入れると中からクリームがとろりと流れ出る。オリーブオイルと塩、トマトや果物と。",
"recipes": [
"r-caprese"
]
}
]
},
{
"id": "ch-pecorinoromano",
"name": "ペコリーノ・ロマーノ",
"en": "Pecorino Romano",
"region": "lazio",
"lat": 41.8,
"lon": 12.8,
"desc": "古代ローマ時代から造られてきた、羊乳の塩気の強いハードチーズ。現在はおもにサルデーニャ島で造られる。",
"ex": [
{
"id": "ch-pecorinoromano-dop",
"label": "DOP",
"name": "ペコリーノ・ロマーノ",
"en": "Pecorino Romano DOP",
"type": "ハード",
"age": "5か月以上",
"abv": "",
"cask": "羊",
"grapes": [
"hard"
],
"color": "hard",
"price": 900,
"p": [
2,
5,
4,
1,
2,
3,
2,
5
],
"tags": [
"塩気",
"羊乳",
"旨み"
],
"pairs": {
"r_light": 2,
"r_full": 2,
"wh_crisp": 1,
"s_dry": 2
},
"desc": "強い塩気と羊乳のコク。本場ローマのカルボナーラやカチョ・エ・ペペには欠かせない。そら豆と合わせるのはローマの春の定番。",
"recipes": [
"r-carbonara"
]
}
]
},
{
"id": "ch-ricotta",
"name": "リコッタ・ロマーナ",
"en": "Ricotta Romana",
"region": "lazio",
"lat": 41.9,
"lon": 12.5,
"desc": "ローマ周辺の羊乳のホエイから造るリコッタ。「二度煮た」という意味の名前。",
"ex": [
{
"id": "ch-ricotta-std",
"label": "リコッタ",
"name": "リコッタ",
"en": "Ricotta",
"type": "ホエイ",
"age": "なし",
"abv": "",
"cask": "羊・牛（ホエイ）",
"grapes": [
"whey"
],
"color": "fresh",
"price": 600,
"p": [
5,
0,
1,
1,
4,
0,
0,
0
],
"tags": [
"ミルク",
"甘み",
"ふわふわ"
],
"pairs": {
"dessert": 2,
"spark": 2,
"wh_crisp": 1
},
"desc": "軽くふわふわとして、ほんのり甘い。はちみつとくるみ、ジャムを添えてデザートに。",
"recipes": []
}
]
},
{
"id": "ch-pecorinotoscano",
"name": "ペコリーノ・トスカーノ",
"en": "Pecorino Toscano",
"region": "toscana",
"lat": 43.2,
"lon": 11.3,
"desc": "トスカーナの羊乳チーズ。ロマーノより塩気が穏やかで、まろやか。",
"ex": [
{
"id": "ch-pecorinotoscano-dop",
"label": "DOP",
"name": "ペコリーノ・トスカーノ",
"en": "Pecorino Toscano DOP",
"type": "セミハード",
"age": "20日〜4か月以上",
"abv": "",
"cask": "羊",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1200,
"p": [
3,
3,
4,
1,
3,
2,
0,
3
],
"tags": [
"羊乳",
"ナッツ",
"ミルク"
],
"pairs": {
"r_light": 3,
"r_full": 1,
"wh_crisp": 1
},
"desc": "まろやかな羊乳のコクとナッツの風味。トスカーナのキャンティと合わせたい。",
"recipes": []
}
]
},
{
"id": "ch-pecorinosardo",
"name": "ペコリーノ・サルド",
"en": "Pecorino Sardo",
"region": "sardegna",
"lat": 40.1,
"lon": 9.0,
"desc": "サルデーニャ島の羊乳チーズ。島は羊乳チーズの一大産地。",
"ex": [
{
"id": "ch-pecorinosardo-dop",
"label": "DOP",
"name": "ペコリーノ・サルド（マトゥーロ）",
"en": "Pecorino Sardo Maturo DOP",
"type": "ハード",
"age": "2か月以上",
"abv": "",
"cask": "羊",
"grapes": [
"hard"
],
"color": "hard",
"price": 1100,
"p": [
3,
4,
4,
1,
3,
3,
1,
4
],
"tags": [
"羊乳",
"ハーブ",
"スモーク"
],
"pairs": {
"r_full": 2,
"r_light": 2,
"s_dry": 1
},
"desc": "軽く燻製をかけることもあり、ハーブや煙の香りがほのかに漂う。",
"recipes": []
}
]
},
{
"id": "ch-manchego",
"name": "マンチェゴ",
"en": "Manchego",
"region": "lamancha",
"lat": 39.3,
"lon": -3.0,
"desc": "ラ・マンチャ地方のマンチェゴ種の羊の乳だけで造る、スペインを代表するチーズ。側面の編み目模様は、昔エスパルト草のかごで型をとった名残。",
"ex": [
{
"id": "ch-manchego-semi",
"label": "セミクラード（3か月）",
"name": "マンチェゴ セミクラード",
"en": "Manchego Semicurado DOP",
"type": "セミハード",
"age": "2〜4か月",
"abv": "",
"cask": "羊",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1000,
"p": [
4,
3,
3,
1,
3,
2,
0,
3
],
"tags": [
"羊乳",
"ミルク",
"ナッツ"
],
"pairs": {
"r_light": 2,
"wh_crisp": 2,
"w_sherry": 1,
"s_dry": 1
},
"desc": "若めのマンチェゴ。しっとりとして羊乳の甘さが前に出る。",
"recipes": []
},
{
"id": "ch-manchego-curado",
"label": "クラード（12か月）",
"name": "マンチェゴ クラード",
"en": "Manchego Curado DOP",
"type": "ハード",
"age": "6〜12か月以上",
"abv": "",
"cask": "羊",
"grapes": [
"hard"
],
"color": "hard",
"price": 1400,
"p": [
2,
4,
5,
1,
4,
3,
1,
5
],
"tags": [
"ナッツ",
"羊乳",
"キャラメル",
"旨み"
],
"pairs": {
"w_sherry": 3,
"r_full": 2,
"dessert": 2,
"s_aged": 1
},
"desc": "熟成が進んで、ナッツやキャラメルのような濃い旨み。マルメロのペースト（メンブリージョ）や、オロロソ・シェリーと合わせるのがスペイン流。",
"recipes": []
}
]
},
{
"id": "ch-cabrales",
"name": "カブラレス",
"en": "Cabrales",
"region": "asturias",
"lat": 43.3,
"lon": -4.82,
"desc": "ピコス・デ・エウロパ山地の天然の洞窟で熟成させる、強烈な青カビチーズ。",
"ex": [
{
"id": "ch-cabrales-dop",
"label": "DOP",
"name": "カブラレス",
"en": "Cabrales DOP",
"type": "青カビ",
"age": "2か月以上",
"abv": "",
"cask": "牛・山羊・羊",
"grapes": [
"blue"
],
"color": "blue",
"price": 1600,
"p": [
2,
5,
5,
1,
1,
5,
5,
1
],
"tags": [
"青カビ",
"ピリッと",
"塩気",
"土"
],
"pairs": {
"dessert": 3,
"w_sherry": 2,
"w_smoky": 2,
"s_aged": 1
},
"desc": "青カビが中まで回り、刺激は青カビチーズのなかでも最強クラス。少量をパンにのせ、甘口シェリーのペドロ・ヒメネスやシードルと。",
"recipes": []
}
]
},
{
"id": "ch-tetilla",
"name": "テティージャ",
"en": "Tetilla",
"region": "galicia",
"lat": 42.8,
"lon": -8.0,
"desc": "ガリシア地方の円すい形のチーズ。名前は形にちなむ。",
"ex": [
{
"id": "ch-tetilla-dop",
"label": "DOP",
"name": "テティージャ",
"en": "Tetilla DOP",
"type": "セミハード",
"age": "7日以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "semi",
"price": 900,
"p": [
5,
2,
2,
2,
2,
0,
0,
2
],
"tags": [
"ミルク",
"バター",
"やわらか"
],
"pairs": {
"wh_crisp": 3,
"spark": 2,
"s_dry": 1
},
"desc": "クリーミーでやさしいミルクの風味。ガリシアのアルバリーニョと。",
"recipes": []
}
]
},
{
"id": "ch-tortacasar",
"name": "トルタ・デル・カサール",
"en": "Torta del Casar",
"region": "extremadura",
"lat": 39.56,
"lon": -6.42,
"desc": "エストレマドゥーラ地方の羊乳チーズ。植物（アザミ）の凝乳酵素で固める。",
"ex": [
{
"id": "ch-tortacasar-dop",
"label": "DOP",
"name": "トルタ・デル・カサール",
"en": "Torta del Casar DOP",
"type": "セミハード",
"age": "60日以上",
"abv": "",
"cask": "羊（無殺菌乳）",
"grapes": [
"semihard"
],
"color": "semi",
"price": 2200,
"p": [
4,
3,
5,
2,
2,
4,
1,
0
],
"tags": [
"羊乳",
"ほろ苦さ",
"とろとろ"
],
"pairs": {
"r_light": 2,
"w_sherry": 2,
"s_rich": 1
},
"desc": "上面を切り取り、中のとろとろの部分をスプーンですくって食べる。アザミ由来のほのかな苦みが特徴。",
"recipes": []
}
]
},
{
"id": "ch-idiazabal",
"name": "イディアサバル",
"en": "Idiazabal",
"region": "paisvasco",
"lat": 42.97,
"lon": -2.24,
"desc": "バスク地方とナバラ地方の羊乳チーズ。燻製をかけたものもある。",
"ex": [
{
"id": "ch-idiazabal-dop",
"label": "DOP（燻製）",
"name": "イディアサバル",
"en": "Idiazabal DOP",
"type": "ハード",
"age": "2か月以上",
"abv": "",
"cask": "羊（無殺菌乳）",
"grapes": [
"hard"
],
"color": "smoke",
"price": 1600,
"p": [
3,
3,
4,
1,
3,
3,
0,
4
],
"tags": [
"スモーク",
"羊乳",
"ナッツ"
],
"pairs": {
"w_smoky": 3,
"w_sherry": 1,
"r_light": 2,
"s_rich": 1
},
"desc": "羊乳のコクに、ブナやサンザシの木でいぶした燻製の香り。スモーキーなウイスキーとよく合う。",
"recipes": []
}
]
},
{
"id": "ch-emmental",
"name": "エメンタール",
"en": "Emmentaler",
"region": "switzerland",
"lat": 46.95,
"lon": 7.7,
"desc": "ベルン州エメンタール地方の、大きな穴（チーズアイ）があいた巨大なハードチーズ。",
"ex": [
{
"id": "ch-emmental-aop",
"label": "AOP",
"name": "エメンタール",
"en": "Emmentaler AOP",
"type": "ハード",
"age": "4か月以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "swiss",
"price": 800,
"p": [
4,
2,
3,
1,
4,
1,
0,
4
],
"tags": [
"ナッツ",
"ミルク",
"甘み"
],
"pairs": {
"wh_crisp": 3,
"w_light": 1,
"r_light": 1
},
"desc": "穴は熟成中に発生する炭酸ガスでできる。ナッツのような甘さで、チーズフォンデュの主役。",
"recipes": [
"r-fondue"
]
}
]
},
{
"id": "ch-gruyere",
"name": "グリュイエール",
"en": "Le Gruyère",
"region": "switzerland",
"lat": 46.58,
"lon": 7.08,
"desc": "スイス西部グリュイエール地方のハードチーズ。エメンタールと並ぶスイスの代表格。",
"ex": [
{
"id": "ch-gruyere-aop",
"label": "AOP",
"name": "グリュイエール",
"en": "Le Gruyère AOP",
"type": "ハード",
"age": "5か月以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"hard"
],
"color": "hard",
"price": 1200,
"p": [
3,
3,
5,
1,
4,
3,
0,
5
],
"tags": [
"ナッツ",
"旨み",
"スパイス"
],
"pairs": {
"wh_crisp": 3,
"wh_rich": 2,
"w_light": 2,
"r_light": 1
},
"desc": "穴はほとんどなく、ナッツの甘さと力強い旨み。フォンデュには欠かせない。",
"recipes": [
"r-fondue"
]
}
]
},
{
"id": "ch-tetedemoine",
"name": "テット・ド・モワンヌ",
"en": "Tête de Moine",
"region": "switzerland",
"lat": 47.25,
"lon": 7.2,
"desc": "ジュラ山脈スイス側の修道院発祥のチーズ。「修道士の頭」という名前。",
"ex": [
{
"id": "ch-tetedemoine-aop",
"label": "AOP",
"name": "テット・ド・モワンヌ",
"en": "Tête de Moine AOP",
"type": "セミハード",
"age": "75日以上",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1500,
"p": [
3,
3,
4,
1,
3,
4,
1,
4
],
"tags": [
"ナッツ",
"スパイス",
"香り強め"
],
"pairs": {
"wh_crisp": 2,
"r_light": 2,
"w_light": 2
},
"desc": "ジロールという専用の器具で薄く花びら状に削ると、空気に触れて香りが立つ。",
"recipes": []
}
]
},
{
"id": "ch-raclettech",
"name": "ラクレット（スイス）",
"en": "Raclette du Valais",
"region": "switzerland",
"lat": 46.2,
"lon": 7.5,
"desc": "ヴァレー州のラクレット。フランスのラクレットと並ぶ本場。",
"ex": [
{
"id": "ch-raclette-ch",
"label": "ヴァレー",
"name": "ラクレット・デュ・ヴァレー",
"en": "Raclette du Valais AOP",
"type": "セミハード",
"age": "3か月以上",
"abv": "",
"cask": "牛（無殺菌乳）",
"grapes": [
"semihard"
],
"color": "semi",
"price": 1200,
"p": [
4,
3,
4,
1,
3,
3,
0,
3
],
"tags": [
"ミルク",
"ナッツ",
"香ばしい"
],
"pairs": {
"wh_crisp": 3,
"r_light": 2
},
"desc": "断面を火で溶かし、削ってじゃがいもにかけるのが本場の食べ方。",
"recipes": [
"r-raclette"
]
}
]
},
{
"id": "ch-gouda",
"name": "ゴーダ",
"en": "Gouda",
"region": "netherlands",
"lat": 52.01,
"lon": 4.71,
"desc": "ゴーダの町の市場で取引されたことから名がついた、オランダを代表するチーズ。世界で最も多く食べられているチーズのひとつ。",
"ex": [
{
"id": "ch-gouda-young",
"label": "ヤング（4週間〜）",
"name": "ゴーダ ヤング",
"en": "Gouda Young",
"type": "セミハード",
"age": "4週間〜",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "gouda",
"price": 500,
"p": [
5,
2,
2,
1,
3,
0,
0,
3
],
"tags": [
"ミルク",
"バター",
"マイルド"
],
"pairs": {
"w_light": 2,
"wh_crisp": 2,
"r_light": 1,
"s_dry": 1
},
"desc": "やわらかくマイルドなミルクの風味。クセがなく、子どもにも食べやすい。",
"recipes": []
},
{
"id": "ch-gouda-old",
"label": "オールド（1年以上）",
"name": "ゴーダ オールド",
"en": "Gouda Old",
"type": "ハード",
"age": "1年以上",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "gouda",
"price": 900,
"p": [
2,
3,
5,
1,
5,
2,
0,
5
],
"tags": [
"キャラメル",
"ナッツ",
"アミノ酸の結晶",
"旨み"
],
"pairs": {
"w_rich": 3,
"w_sherry": 3,
"dessert": 2,
"r_full": 1
},
"desc": "長く熟成させたゴーダは、キャラメルのような甘さとアミノ酸のシャリッとした結晶が魅力。バーボンやシェリー樽のウイスキーと好相性。",
"recipes": []
}
]
},
{
"id": "ch-edam",
"name": "エダム",
"en": "Edam",
"region": "netherlands",
"lat": 52.51,
"lon": 5.05,
"desc": "エダムの港から輸出された、赤いワックスで覆われた球形のチーズ。",
"ex": [
{
"id": "ch-edam-std",
"label": "エダム",
"name": "エダム",
"en": "Edam",
"type": "セミハード",
"age": "4週間〜",
"abv": "",
"cask": "牛",
"grapes": [
"semihard"
],
"color": "edam",
"price": 500,
"p": [
4,
2,
2,
1,
2,
0,
0,
3
],
"tags": [
"ミルク",
"ナッツ",
"マイルド"
],
"pairs": {
"w_light": 2,
"wh_crisp": 2,
"s_dry": 1
},
"desc": "ゴーダより脂肪分が少なく、あっさり。熟成させると締まって旨みが増す。",
"recipes": []
}
]
},
{
"id": "ch-cheddar",
"name": "チェダー",
"en": "Cheddar",
"region": "uk",
"lat": 51.28,
"lon": -2.78,
"desc": "イングランド南西部のチェダー村で生まれたハードチーズ。世界中で造られ、最も多く食べられるチーズのひとつ。",
"ex": [
{
"id": "ch-cheddar-mature",
"label": "マチュア（ホワイト）",
"name": "チェダー マチュア",
"en": "Mature Cheddar",
"type": "ハード",
"age": "9〜12か月",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "hard",
"price": 700,
"p": [
3,
4,
4,
2,
3,
2,
1,
4
],
"tags": [
"ナッツ",
"酸味",
"旨み"
],
"pairs": {
"w_light": 3,
"w_rich": 2,
"r_light": 1,
"spark": 1
},
"desc": "伝統的な白いチェダー。キリッとした酸味と旨み、ほろりとした食感。",
"recipes": []
},
{
"id": "ch-cheddar-red",
"label": "レッドチェダー",
"name": "レッドチェダー",
"en": "Red Cheddar",
"type": "ハード",
"age": "3〜9か月",
"abv": "",
"cask": "牛",
"grapes": [
"hard"
],
"color": "orange",
"price": 600,
"p": [
4,
3,
3,
1,
3,
1,
0,
4
],
"tags": [
"ミルク",
"ナッツ",
"マイルド"
],
"pairs": {
"w_light": 2,
"w_rich": 2,
"r_light": 1
},
"desc": "アナトー（ベニノキの種）で色を付けたチェダー。マイルドで、ハンバーガーやサンドイッチにも。",
"recipes": []
}
]
},
{
"id": "ch-stilton",
"name": "スティルトン",
"en": "Stilton",
"region": "uk",
"lat": 52.8,
"lon": -0.85,
"desc": "イングランド中部の、決められた3つの州だけで造られる青カビチーズ。世界三大ブルーチーズのひとつ。",
"ex": [
{
"id": "ch-stilton-pdo",
"label": "ブルー・スティルトン",
"name": "ブルー・スティルトン",
"en": "Blue Stilton PDO",
"type": "青カビ",
"age": "9週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"blue"
],
"color": "blue",
"price": 1200,
"p": [
3,
4,
5,
1,
3,
4,
3,
2
],
"tags": [
"青カビ",
"ナッツ",
"クリーミー"
],
"pairs": {
"dessert": 3,
"w_sherry": 3,
"w_rich": 1,
"s_aged": 1
},
"desc": "ほろりと崩れる中身に、濃厚なコクとナッツの風味。イギリスではポートワインと合わせるのが伝統。",
"recipes": [
"r-blue-honey"
]
}
]
},
{
"id": "ch-feta",
"name": "フェタ",
"en": "Feta",
"region": "greece",
"lat": 39.5,
"lon": 22.0,
"desc": "羊乳（山羊乳を加えることも）を塩水に漬けて熟成させる、ギリシャのフレッシュチーズ。",
"ex": [
{
"id": "ch-feta-pdo",
"label": "PDO",
"name": "フェタ",
"en": "Feta PDO",
"type": "フレッシュ",
"age": "2か月以上",
"abv": "",
"cask": "羊・山羊",
"grapes": [
"fresh"
],
"color": "fresh",
"price": 600,
"p": [
3,
5,
2,
4,
1,
2,
1,
2
],
"tags": [
"塩気",
"酸味",
"羊乳"
],
"pairs": {
"wh_crisp": 3,
"rose": 2,
"s_dry": 1
},
"desc": "強い塩気とさわやかな酸味、ほろほろ崩れる食感。トマトやオリーブとサラダに。",
"recipes": []
}
]
},
{
"id": "ch-cambozola",
"name": "カンボゾラ",
"en": "Cambozola",
"region": "germany",
"lat": 47.75,
"lon": 10.3,
"desc": "カマンベールとゴルゴンゾーラを組み合わせたドイツ生まれのチーズ。白カビの皮の中に青カビが入る。",
"ex": [
{
"id": "ch-cambozola-std",
"label": "カンボゾラ",
"name": "カンボゾラ",
"en": "Cambozola",
"type": "青カビ",
"age": "数週間",
"abv": "",
"cask": "牛（生クリーム入り）",
"grapes": [
"blue"
],
"color": "blue",
"price": 900,
"p": [
5,
3,
3,
1,
3,
2,
1,
1
],
"tags": [
"クリーミー",
"青カビ",
"マイルド"
],
"pairs": {
"dessert": 2,
"spark": 2,
"r_light": 1,
"wh_rich": 1
},
"desc": "青カビの刺激はやさしく、クリーミー。ブルーチーズが苦手な人の入門にも。",
"recipes": []
}
]
},
{
"id": "ch-danablu",
"name": "ダナブルー",
"en": "Danablu",
"region": "denmark",
"lat": 56.0,
"lon": 9.3,
"desc": "ロックフォールを手本に20世紀初めにデンマークで生まれた青カビチーズ。",
"ex": [
{
"id": "ch-danablu-pgi",
"label": "PGI",
"name": "ダナブルー",
"en": "Danablu PGI",
"type": "青カビ",
"age": "8週間以上",
"abv": "",
"cask": "牛",
"grapes": [
"blue"
],
"color": "blue",
"price": 700,
"p": [
4,
5,
4,
1,
2,
4,
4,
1
],
"tags": [
"青カビ",
"塩気",
"クリーミー"
],
"pairs": {
"dessert": 2,
"w_sherry": 2,
"s_aged": 1
},
"desc": "塩気と刺激がはっきりとしていて、比較的手頃な青カビチーズ。",
"recipes": []
}
]
},
{
"id": "ch-brunost",
"name": "ブルーノスト",
"en": "Brunost",
"region": "norway",
"lat": 61.0,
"lon": 9.5,
"desc": "ホエイを長時間煮詰めて造る、キャラメル色のノルウェーのチーズ。山羊乳入りはイェトオストとも呼ばれる。",
"ex": [
{
"id": "ch-brunost-std",
"label": "ブルーノスト",
"name": "ブルーノスト",
"en": "Brunost",
"type": "ホエイ",
"age": "なし",
"abv": "",
"cask": "牛・山羊（ホエイ）",
"grapes": [
"whey"
],
"color": "brown",
"price": 1000,
"p": [
3,
2,
2,
1,
5,
1,
0,
3
],
"tags": [
"キャラメル",
"甘み",
"ミルク"
],
"pairs": {
"w_rich": 3,
"w_sherry": 2,
"dessert": 2
},
"desc": "キャラメルや生キャラメルのような甘さ。専用のスライサーで薄く削り、パンやワッフルにのせる。",
"recipes": []
}
]
},
{
"id": "ch-halloumi",
"name": "ハルーミ",
"en": "Halloumi",
"region": "cyprus",
"lat": 35.0,
"lon": 33.2,
"desc": "キプロスの、焼いても溶けないチーズ。ミントの葉を加えて造ることもある。",
"ex": [
{
"id": "ch-halloumi-pdo",
"label": "ハルーミ",
"name": "ハルーミ",
"en": "Halloumi",
"type": "パスタフィラータ",
"age": "数日〜",
"abv": "",
"cask": "羊・山羊・牛",
"grapes": [
"pastafilata"
],
"color": "fresh",
"price": 700,
"p": [
4,
4,
2,
1,
1,
1,
0,
3
],
"tags": [
"塩気",
"ミルク",
"きゅっとした食感"
],
"pairs": {
"wh_crisp": 3,
"rose": 2,
"spark": 1,
"w_light": 2
},
"desc": "そのままでは塩気が強めだが、焼くと香ばしく、かむとキュッキュッと鳴る独特の食感。",
"recipes": [
"r-halloumi-grill"
]
}
]
},
{
"id": "ch-japan-sakura",
"name": "さくら（共働学舎新得農場）",
"en": "Sakura (Kyodogakusha Shintoku)",
"region": "japan",
"lat": 43.08,
"lon": 142.84,
"desc": "北海道十勝・新得町の共働学舎新得農場のチーズ。2004年にスイスの山のチーズのオリンピックで金メダルを受賞した。",
"ex": [
{
"id": "ch-sakura",
"label": "さくら",
"name": "さくら",
"en": "Sakura",
"type": "フレッシュ",
"age": "数日〜",
"abv": "",
"cask": "牛",
"grapes": [
"fresh"
],
"color": "fresh",
"price": 3000,
"p": [
5,
1,
2,
2,
3,
1,
0,
1
],
"tags": [
"ミルク",
"桜の香り",
"爽やか"
],
"pairs": {
"spark": 3,
"s_aroma": 3,
"wh_crisp": 2
},
"desc": "桜の花の塩漬けをのせた、香り高い小さなチーズ。ミルクのやさしい甘さに、ほのかな桜の香り。",
"recipes": []
}
]
},
{
"id": "ch-japan-process",
"name": "プロセスチーズ（国産）",
"en": "Processed Cheese",
"region": "japan",
"lat": 35.68,
"lon": 139.77,
"desc": "日本で最も身近なチーズ。ナチュラルチーズを加熱して溶かし、固め直したもの。",
"ex": [
{
"id": "ch-process-6p",
"label": "6P・ベビーチーズ",
"name": "プロセスチーズ（6P・ベビーチーズ）",
"en": "Processed Cheese",
"type": "プロセス",
"age": "—",
"abv": "",
"cask": "牛",
"grapes": [
"process"
],
"color": "gouda",
"price": 300,
"p": [
4,
3,
2,
1,
2,
0,
0,
3
],
"tags": [
"マイルド",
"ミルク",
"塩気"
],
"pairs": {
"w_light": 3,
"s_dry": 2,
"r_light": 1,
"spark": 1
},
"desc": "食べやすくて日持ちがよく、晩酌のおつまみにぴったり。ハイボールやビールとの相性は抜群。",
"recipes": []
}
]
}
];
const CHEESE_ENTRIES = CHEESE_ITEMS.flatMap(d => d.ex.map(x => ({ ...x, distilleryId:d.id, distillery:d.name, region:d.region, lat:d.lat, lon:d.lon })));
const CHEESE_REGIONS = {"normandie": {"jp": "ノルマンディー", "en": "NORMANDIE", "label": [0.0, 49.1], "desc": "イギリス海峡に面した、緑の牧草地が広がる酪農地帯。カマンベールやポン・レヴェックなど、やわらかいチーズの故郷。", "pick": "フランス"}, "iledefrance": {"jp": "イル・ド・フランス", "en": "ÎLE-DE-FRANCE", "label": [2.8, 48.7], "short": "パリ周辺", "desc": "パリを中心とした地方。「チーズの王」と呼ばれる白カビのブリー・ド・モーの産地。", "pick": "フランス"}, "nord": {"jp": "ノール（フランドル）", "en": "NORD", "label": [3.0, 50.5], "short": "ノール", "desc": "ベルギーと接するフランス北部。オレンジ色のミモレットや、香りの強いマロワールの産地。", "pick": "フランス"}, "champagne": {"jp": "シャンパーニュ", "en": "CHAMPAGNE", "label": [4.4, 48.1], "desc": "シャンパンの産地。ラングルやシャウルスなど、やわらかいチーズも造られる。", "pick": "フランス"}, "bourgogne": {"jp": "ブルゴーニュ", "en": "BOURGOGNE", "label": [4.6, 47.3], "desc": "赤ワインの銘醸地。マール酒で洗うエポワスや、クリームたっぷりのブリア・サヴァランの産地。", "pick": "フランス"}, "jura": {"jp": "ジュラ（フランシュ・コンテ）", "en": "JURA", "label": [6.2, 46.9], "short": "ジュラ", "desc": "スイスと接する山岳地帯。フランスで最も多く造られるコンテや、灰の線が入ったモルビエ、冬季限定のモン・ドールの故郷。", "pick": "フランス"}, "savoie": {"jp": "サヴォワ", "en": "SAVOIE", "label": [6.5, 45.6], "desc": "アルプスの山岳地帯。ルブロションやボーフォール、トム・ド・サヴォワなど山のチーズが多い。", "pick": "フランス"}, "auvergne": {"jp": "オーヴェルニュ", "en": "AUVERGNE", "label": [2.9, 45.3], "desc": "フランス中部の火山地帯。カンタル、サン・ネクテール、フルム・ダンベールなど伝統的なチーズが多い。", "pick": "フランス"}, "roquefort": {"jp": "ロックフォール（オクシタニー）", "en": "ROQUEFORT", "label": [3.0, 43.9], "short": "ロックフォール", "desc": "南フランスの羊の放牧地帯。石灰岩の洞窟で熟成させる羊乳の青カビチーズ、ロックフォールの産地。", "pick": "フランス"}, "loire": {"jp": "ロワール", "en": "LOIRE", "label": [1.3, 47.3], "desc": "ロワール川流域。山羊乳のシェーヴルの一大産地で、サントモールやヴァランセなど個性的な形のチーズが多い。", "pick": "フランス"}, "alsace": {"jp": "アルザス", "en": "ALSACE", "label": [7.3, 48.0], "desc": "ドイツと接する地方。香りの強いウォッシュのマンステールの産地。", "pick": "フランス"}, "basque": {"jp": "バスク（ピレネー）", "en": "PAYS BASQUE", "label": [-0.9, 43.1], "short": "バスク", "desc": "スペイン国境のピレネー山麓。羊乳のハードチーズ、オッソー・イラティの産地。", "pick": "フランス"}, "lombardia": {"jp": "ロンバルディア", "en": "LOMBARDIA", "label": [9.7, 45.6], "desc": "ミラノを中心とする酪農の中心地。ゴルゴンゾーラ、タレッジョ、グラナ・パダーノ、マスカルポーネなどの産地。", "pick": "イタリア"}, "emilia": {"jp": "エミリア・ロマーニャ", "en": "EMILIA-ROMAGNA", "label": [10.9, 44.6], "short": "エミリア", "desc": "パルマやモデナのある美食の地方。「チーズの王様」パルミジャーノ・レッジャーノの産地。", "pick": "イタリア"}, "piemonte": {"jp": "ピエモンテ", "en": "PIEMONTE", "label": [7.9, 44.7], "desc": "アルプスのふもと。牛・山羊・羊の乳を合わせたロビオラなどが造られる。", "pick": "イタリア"}, "aosta": {"jp": "ヴァッレ・ダオスタ", "en": "VALLE D'AOSTA", "label": [7.4, 45.75], "short": "アオスタ", "desc": "アルプスの谷あい。フォンドゥータ（イタリアのチーズフォンデュ）に使われるフォンティーナの産地。", "pick": "イタリア"}, "veneto": {"jp": "ヴェネト・フリウリ", "en": "VENETO", "label": [12.0, 45.9], "short": "ヴェネト", "desc": "イタリア北東部。アジアーゴやモンタジオなど、山のチーズが造られる。", "pick": "イタリア"}, "campania": {"jp": "カンパーニア", "en": "CAMPANIA", "label": [14.6, 40.9], "desc": "ナポリを中心とする南イタリア。水牛の乳で造るモッツァレラ・ディ・ブーファラの本場。", "pick": "イタリア"}, "puglia": {"jp": "プーリア", "en": "PUGLIA", "label": [16.8, 40.9], "desc": "イタリアのかかとにあたる地方。中にクリームを包んだブッラータの故郷。", "pick": "イタリア"}, "lazio": {"jp": "ラツィオ", "en": "LAZIO", "label": [12.6, 41.9], "desc": "ローマを中心とする地方。羊乳のペコリーノ・ロマーノや、リコッタ・ロマーナの産地。", "pick": "イタリア"}, "toscana": {"jp": "トスカーナ", "en": "TOSCANA", "label": [11.2, 43.3], "desc": "丘陵の続く地方。マイルドな羊乳のペコリーノ・トスカーノの産地。", "pick": "イタリア"}, "sardegna": {"jp": "サルデーニャ", "en": "SARDEGNA", "label": [9.0, 40.1], "desc": "地中海の島。羊の放牧が盛んで、ペコリーノ・サルドなど羊乳チーズの一大産地。", "pick": "イタリア"}, "lamancha": {"jp": "ラ・マンチャ", "en": "LA MANCHA", "label": [-3.0, 39.3], "desc": "ドン・キホーテの舞台となった中央部の乾いた高原。マンチェゴ種の羊の乳で造るマンチェゴの産地。", "pick": "スペイン"}, "asturias": {"jp": "アストゥリアス", "en": "ASTURIAS", "label": [-5.4, 43.25], "desc": "北部の山岳地帯。洞窟で熟成させる強烈な青カビチーズ、カブラレスの産地。", "pick": "スペイン"}, "galicia": {"jp": "ガリシア", "en": "GALICIA", "label": [-8.0, 42.8], "desc": "北西部の雨の多い緑の地方。円すい形のテティージャや、燻製のサン・シモンの産地。", "pick": "スペイン"}, "extremadura": {"jp": "エストレマドゥーラ", "en": "EXTREMADURA", "label": [-6.2, 39.4], "desc": "ポルトガルと接する地方。とろとろの羊乳チーズ、トルタ・デル・カサールの産地。", "pick": "スペイン"}, "paisvasco": {"jp": "バスク（スペイン）", "en": "PAÍS VASCO", "label": [-2.4, 43.0], "short": "バスク", "desc": "スペイン北部のバスク地方。燻製の香りをつけることもある羊乳のイディアサバルの産地。", "pick": "スペイン"}, "switzerland": {"jp": "スイス", "en": "SWITZERLAND", "desc": "アルプスの山の酪農が育んだ、大きな車輪形のハードチーズの国。エメンタール、グリュイエール、ラクレットなど、フォンデュやラクレット料理でもおなじみ。", "pick": "スイス"}, "netherlands": {"jp": "オランダ", "en": "NETHERLANDS", "desc": "世界有数のチーズ輸出国。ゴーダやエダムなど、ワックスで覆われたマイルドなセミハードが代表。熟成させるとキャラメルのような甘さが出る。", "pick": "オランダ"}, "uk": {"jp": "イギリス", "en": "UNITED KINGDOM", "desc": "チェダー村生まれのチェダーは世界で最も多く造られるチーズのひとつ。青カビの王様と呼ばれるスティルトンも有名。", "pick": "イギリス"}, "greece": {"jp": "ギリシャ", "en": "GREECE", "desc": "羊や山羊の乳を塩水に漬けて保存する、フェタの国。", "pick": "ギリシャ"}, "germany": {"jp": "ドイツ", "en": "GERMANY", "desc": "白カビと青カビを両方使ったカンボゾラなど、食べやすいチーズが多い。", "pick": "ドイツ"}, "denmark": {"jp": "デンマーク", "en": "DENMARK", "desc": "酪農の国。デンマーク生まれの青カビチーズ、ダナブルーや、マイルドなハバティの産地。", "pick": "デンマーク"}, "norway": {"jp": "ノルウェー", "en": "NORWAY", "desc": "ホエイを煮詰めて造る、キャラメル色のブルーノストが国民的なチーズ。", "pick": "ノルウェー"}, "cyprus": {"jp": "キプロス", "en": "CYPRUS", "desc": "地中海東部の島。焼いても溶けないハルーミの故郷。", "pick": "キプロス"}, "japan": {"jp": "日本", "en": "JAPAN", "desc": "北海道を中心に、各地の小さな工房で個性的なナチュラルチーズが造られている。食卓では、6Pチーズなどのプロセスチーズが最も身近。", "pick": "日本"}};
const CHEESE_COUNTRIES = {"france": {"jp": "フランス", "style": "フランス", "en": "FRANCE", "mark": [2.4, 46.6], "map": "france", "callout": true, "regions": ["nord", "normandie", "iledefrance", "champagne", "alsace", "loire", "bourgogne", "jura", "savoie", "auvergne", "roquefort", "basque"], "desc": "「1年365日、毎日違うチーズが食べられる」といわれるチーズ大国。地方ごとに気候と家畜が違い、白カビ、ウォッシュ、シェーヴル、青カビ、ハードとあらゆるタイプがそろう。地図の地方をタップすると、その土地のチーズが表示される。"}, "italy": {"jp": "イタリア", "style": "イタリア", "en": "ITALY", "mark": [12.5, 42.5], "map": "italy", "regions": ["aosta", "piemonte", "lombardia", "veneto", "emilia", "toscana", "lazio", "sardegna", "campania", "puglia"], "desc": "北部の牛乳のハードチーズや青カビ、南部の水牛や羊の乳のチーズまで、土地の家畜の個性がはっきり出る国。"}, "spain": {"jp": "スペイン", "style": "スペイン", "en": "SPAIN", "mark": [-3.7, 40.2], "map": "spain", "regions": ["galicia", "asturias", "paisvasco", "lamancha", "extremadura"], "desc": "羊や山羊の乳のチーズが多い国。中央部のマンチェゴ、北部の青カビや燻製のチーズなど、地方ごとに個性がある。"}, "switzerland": {"jp": "スイス", "style": "スイス", "en": "SWITZERLAND", "mark": [8.2, 46.8], "regions": ["switzerland"]}, "netherlands": {"jp": "オランダ", "style": "オランダ", "en": "NETHERLANDS", "mark": [5.3, 52.2], "regions": ["netherlands"]}, "uk": {"jp": "イギリス", "style": "イギリス", "en": "UNITED KINGDOM", "mark": [-1.5, 52.5], "regions": ["uk"]}, "germany": {"jp": "ドイツ", "style": "ドイツ", "en": "GERMANY", "mark": [10.0, 51.0], "regions": ["germany"]}, "denmark": {"jp": "デンマーク", "style": "デンマーク", "en": "DENMARK", "mark": [9.3, 56.0], "regions": ["denmark"]}, "norway": {"jp": "ノルウェー", "style": "ノルウェー", "en": "NORWAY", "mark": [9.5, 61.0], "regions": ["norway"]}, "greece": {"jp": "ギリシャ", "style": "ギリシャ", "en": "GREECE", "mark": [22.0, 39.5], "regions": ["greece"]}, "cyprus": {"jp": "キプロス", "style": "キプロス", "en": "CYPRUS", "mark": [33.0, 35.0], "regions": ["cyprus"]}, "japan": {"jp": "日本", "style": "日本", "en": "JAPAN", "regions": ["japan"], "minor": true}};
const CHEESE_MAIN = ["france", "italy", "spain", "switzerland", "netherlands", "uk", "germany", "denmark", "norway", "greece", "cyprus"];
const CHEESE_TYPES = [
{
"id": "fresh",
"name": "フレッシュ",
"en": "Fresh",
"kind": "ナチュラルチーズ",
"home": "イタリア、フランス、ギリシャ",
"p": [
5,
1,
1,
3,
2,
0,
0,
0
],
"tags": [
"ミルク",
"爽やか",
"やわらか"
],
"desc": "熟成させずに食べる、できたてのチーズ。ミルクの甘さとさわやかな酸味が持ち味で、クセがなく、サラダやデザートにも使いやすい。日持ちしないので早めに。"
},
{
"id": "pastafilata",
"name": "パスタフィラータ",
"en": "Pasta Filata",
"kind": "ナチュラルチーズ",
"home": "イタリア",
"p": [
5,
2,
2,
2,
2,
0,
0,
1
],
"tags": [
"ミルク",
"弾力",
"やわらか"
],
"desc": "凝固させた生地をお湯の中で練って伸ばし、弾力のある繊維状の食感に仕上げるタイプ。モッツァレラやブッラータ、焼いて食べるハルーミの仲間。"
},
{
"id": "bloom",
"name": "白カビ",
"en": "Bloomy Rind",
"kind": "ナチュラルチーズ",
"home": "フランス",
"p": [
5,
2,
3,
1,
2,
2,
0,
1
],
"tags": [
"マッシュルーム",
"クリーミー",
"バター"
],
"desc": "表面を白いカビで覆って熟成させるタイプ。中はとろりとクリーミーで、マッシュルームのような香り。カマンベールやブリーが代表。熟成が進むほど中心までやわらかくなる。"
},
{
"id": "washed",
"name": "ウォッシュ",
"en": "Washed Rind",
"kind": "ナチュラルチーズ",
"home": "フランス、イタリア、ベルギー",
"p": [
4,
3,
4,
1,
2,
5,
1,
1
],
"tags": [
"香り強め",
"旨み",
"オレンジ色の皮"
],
"desc": "熟成中に表面を塩水やお酒で洗いながら育てるタイプ。皮はオレンジ色でべたつき、強烈な香りを放つが、中身はねっとりと甘く旨みが濃い。"
},
{
"id": "chevre",
"name": "シェーヴル",
"en": "Chèvre (Goat)",
"kind": "ナチュラルチーズ",
"home": "フランス（ロワール地方）",
"p": [
3,
2,
2,
4,
1,
3,
1,
2
],
"tags": [
"山羊乳",
"酸味",
"木炭"
],
"desc": "山羊の乳で造るチーズ。さわやかな酸味と独特の風味があり、表面に木炭の粉をまぶしたものも多い。若いうちはしっとり、熟成すると締まって味が凝縮する。"
},
{
"id": "blue",
"name": "青カビ",
"en": "Blue",
"kind": "ナチュラルチーズ",
"home": "フランス、イタリア、イギリス、デンマーク",
"p": [
3,
5,
4,
1,
2,
5,
4,
1
],
"tags": [
"青カビ",
"塩気",
"ピリッと"
],
"desc": "中に青カビを繁殖させて熟成させるタイプ。強い塩気とピリッとした刺激、濃厚なコク。はちみつや甘口ワインと合わせると甘さとしょっぱさが引き立て合う。"
},
{
"id": "semihard",
"name": "セミハード",
"en": "Semi-hard",
"kind": "ナチュラルチーズ",
"home": "オランダ、フランス、スイス",
"p": [
4,
3,
3,
1,
3,
2,
0,
3
],
"tags": [
"マイルド",
"ナッツ",
"バター"
],
"desc": "水分を抜いて圧をかけ、ほどよい弾力に仕上げるタイプ。ゴーダやラクレットなど、マイルドで食べやすいものが多い。加熱するとよく溶ける。"
},
{
"id": "hard",
"name": "ハード",
"en": "Hard",
"kind": "ナチュラルチーズ",
"home": "イタリア、スイス、フランス、イギリス",
"p": [
2,
4,
5,
1,
4,
3,
1,
5
],
"tags": [
"ナッツ",
"旨み",
"アミノ酸の結晶"
],
"desc": "水分をしっかり抜いて長く熟成させる、かたいタイプ。旨みが凝縮し、熟成が進むとアミノ酸の白い結晶がシャリッと感じられる。パルミジャーノやコンテが代表。"
},
{
"id": "whey",
"name": "ホエイ",
"en": "Whey",
"kind": "ナチュラルチーズ",
"home": "イタリア、ノルウェー",
"p": [
4,
1,
1,
1,
5,
1,
0,
2
],
"tags": [
"ミルク",
"甘み",
"キャラメル"
],
"desc": "チーズを造ったあとに残る乳清（ホエイ）から造るチーズ。リコッタや、煮詰めてキャラメル色にしたノルウェーのブルーノストなど。"
},
{
"id": "process",
"name": "プロセス",
"en": "Processed",
"kind": "プロセスチーズ",
"home": "日本など",
"p": [
4,
3,
2,
1,
2,
1,
0,
3
],
"tags": [
"マイルド",
"食べやすい"
],
"desc": "ナチュラルチーズを加熱して溶かし、固め直したもの。熟成が止まるので品質が安定し、日持ちがよい。日本で最も身近なチーズ。"
}
];
const CHEESE_MAPS = {"world": {"w": 178.9, "h": 174.0, "proj": {"lon0": -11, "lat1": 63, "c": 0.66262, "k": 6.0}, "base": "M35.7,82.6L35.1,82.9L34.9,82.4ZM33.7,81.0L33.6,81.4L33.2,81.2ZM26.2,52.9L25.4,53.6L24.7,53.6L25.4,52.4L26.3,51.6ZM33.1,68.3L30.6,69.7L29.6,69.5L28.3,68.5L26.9,68.6L27.5,68.0L26.3,67.6L24.2,68.2L23.4,67.8L22.8,66.7L27.2,64.0L27.9,62.7L27.4,60.5L25.1,61.2L26.8,59.1L28.8,58.2L30.5,57.9L31.4,58.4L31.1,57.6L31.5,57.4L32.1,58.2L32.8,58.1L31.5,56.9L32.1,55.6L31.6,54.9L32.2,54.2L32.3,52.9L31.1,53.2L29.5,50.6L30.0,49.4L31.7,48.3L29.6,48.3L28.0,49.3L26.8,48.9L25.8,49.4L24.6,48.9L24.2,49.9L23.3,48.9L23.2,48.1L23.6,48.1L25.1,45.0L24.3,43.8L24.5,42.4L25.5,42.4L24.5,41.7L24.6,41.0L23.0,42.7L23.0,41.6L23.9,40.6L22.3,41.9L21.6,45.7L21.3,46.0L20.8,45.8L21.8,43.2L21.4,43.1L21.7,40.5L23.1,37.5L21.3,38.8L19.3,37.8L20.9,36.9L20.4,36.6L21.5,35.4L21.6,34.6L20.6,33.4L21.5,32.7L20.9,32.1L21.1,31.3L21.4,30.7L23.2,30.7L22.2,29.6L22.5,28.6L23.8,28.4L23.5,27.7L23.8,26.6L25.0,26.9L27.1,26.7L31.6,26.3L31.0,28.1L27.9,30.2L27.7,30.9L28.4,31.1L27.3,32.5L30.2,31.8L35.5,31.8L36.7,33.0L33.4,38.6L30.6,39.8L32.3,39.6L33.2,40.1L33.1,40.5L30.4,41.8L28.7,41.4L31.6,42.3L33.4,41.8L35.2,42.6L37.2,44.6L38.8,49.8L41.1,51.0L43.4,53.3L42.9,53.9L44.2,56.3L42.7,55.6L41.1,55.7L42.6,55.8L44.8,58.0L45.1,59.0L43.9,60.6L44.8,61.1L46.0,60.2L48.8,60.5L50.3,61.5L50.7,62.5L50.1,65.3L48.6,66.2L48.8,66.9L46.7,67.6L47.3,67.9L47.3,68.6L45.4,69.2L47.3,69.8L49.4,69.8L49.3,70.9L47.9,71.7L47.6,72.4L44.9,73.3L40.6,73.4L38.1,72.6L38.4,73.1L37.7,73.5L35.7,73.6L35.6,74.4L31.8,73.7L30.2,74.2L29.1,76.6L27.1,75.6L24.9,76.3L23.4,77.8L22.1,77.4L21.4,77.7L21.2,77.2L24.3,74.8L25.5,73.3L25.8,72.1L26.7,71.8L27.1,70.9L31.3,70.8L34.1,67.6ZM27.0,58.1L27.5,58.4L26.3,59.2L25.6,57.7L26.6,57.5ZM33.6,22.6L33.1,22.6L33.7,22.2L34.2,22.2ZM39.6,14.9L39.1,14.4L39.4,13.7L39.8,13.9ZM38.5,14.8L39.1,15.5L39.5,15.3L39.5,15.7L38.6,18.7L38.6,17.1L38.1,16.9L37.1,16.3L38.3,16.0L37.5,15.0L38.3,14.3ZM40.7,13.1L40.5,13.9L40.0,13.5ZM31.2,25.2L30.7,25.3L30.4,24.5ZM32.1,25.6L31.7,25.1L32.2,25.0ZM31.6,23.8L32.5,24.1L32.6,24.6L30.9,24.3L30.4,24.1L30.6,23.2L31.6,23.4ZM32.9,22.9L32.5,23.0L31.6,22.1ZM17.5,38.5L17.6,38.0L18.0,38.0ZM23.4,45.3L22.5,45.1L22.5,43.9L23.2,44.0ZM20.8,39.9L18.6,40.2L19.3,39.1L18.7,38.4L19.5,38.1L20.8,39.1ZM19.4,42.4L19.5,44.1L18.7,44.4L18.6,43.4L17.9,43.8L18.1,43.0ZM20.0,43.1L19.6,42.6L20.2,42.2L20.1,41.7L21.0,41.3ZM19.1,27.8L18.6,28.9L17.7,29.4L18.3,29.5L18.2,29.9L16.1,31.5L15.6,31.1L16.5,30.5L15.7,29.9L15.8,28.7L17.0,28.9L16.8,28.2L18.9,27.0ZM18.8,36.2L18.2,35.9L18.6,35.7ZM19.3,33.0L19.3,34.1L21.2,34.6L20.1,35.7L19.7,34.8L18.8,34.9L16.9,33.3L18.5,32.0ZM15.1,31.9L15.5,32.2L15.2,32.8L13.9,32.2ZM14.9,35.3L14.4,35.2L14.2,34.6L14.3,33.7L14.8,33.8ZM19.0,53.5L17.3,53.6L17.3,53.0L15.9,51.6L14.5,53.3L12.5,52.7L11.4,51.3L12.9,50.4L12.3,49.8L13.7,49.4L14.4,47.8L15.0,47.4L15.5,47.7L16.1,46.9L19.4,46.7L21.0,49.1L20.4,50.2L21.5,50.0L22.0,51.0L21.9,51.4L21.2,50.7L21.4,52.4L20.6,52.6L19.8,53.7ZM39.5,73.9L38.8,74.5L37.7,74.0L38.5,73.4ZM195.7,95.5L193.0,95.6L190.0,97.7L189.1,97.4L186.2,98.3L183.1,101.4L184.0,100.3L183.8,99.4L182.3,100.9L182.7,103.6L181.6,102.1L180.7,102.2L180.3,101.6L178.1,100.8L177.6,100.7L177.3,101.4L176.6,101.7L175.7,100.9L172.9,101.5L170.3,100.3L170.1,100.1L171.0,99.4L169.2,98.7L172.4,99.2L173.3,98.3L172.4,98.6L171.1,98.1L170.0,94.7L170.6,96.4L170.5,98.1L169.1,98.0L169.2,97.3L168.6,98.2L166.2,98.7L165.6,100.4L163.9,102.8L161.5,103.7L161.8,106.4L160.6,105.5L158.2,106.1L158.1,106.6L156.8,106.2L155.9,105.3L157.0,104.9L157.0,104.0L158.8,101.7L158.9,99.2L159.8,98.9L159.8,99.7L160.2,99.2L161.5,99.6L161.8,99.3L162.4,99.9L163.5,99.5L162.7,98.8L162.5,97.0L161.3,96.2L161.2,94.4L159.6,93.1L159.9,91.4L159.5,90.2L158.7,90.3L158.1,89.3L157.2,89.1L156.9,89.5L156.2,88.6L153.3,87.1L152.0,87.8L150.5,87.7L148.3,88.8L147.7,90.0L145.0,90.5L143.0,91.7L141.5,90.4L136.8,90.1L136.0,89.5L134.7,90.3L134.3,89.3L133.5,89.2L132.2,87.6L131.7,87.6L131.8,86.6L133.3,83.6L134.4,83.9L134.2,83.2L134.0,80.4L138.0,75.7L139.0,75.5L139.5,74.8L139.1,73.3L139.5,72.8L137.8,70.1L137.6,68.3L139.1,68.5L140.6,66.8L146.8,66.5L151.6,67.5L152.3,68.4L153.8,68.6L153.9,69.1L154.5,68.4L155.8,68.4L157.4,68.7L158.0,69.4L159.4,68.2L160.4,69.7L163.6,69.1L165.2,70.4L165.5,69.9L165.3,67.9L166.9,65.7L169.3,65.4L171.4,65.7L172.7,64.2L174.2,64.5L175.5,64.0L177.9,63.9L180.5,67.3L180.4,67.7L179.4,67.9L180.0,70.0L179.8,70.5L181.7,71.0L183.1,70.8L183.5,71.6L184.1,71.7L184.5,74.8L185.2,75.8L187.3,75.5L189.3,76.7L192.5,75.5L193.6,77.3L195.0,78.5L195.8,77.7L198.5,79.1L199.5,78.9L201.9,80.6L203.1,80.5L203.2,82.5L201.5,84.0L202.8,85.1L201.9,85.2L201.3,86.5L202.1,86.7L202.2,88.2L202.6,88.4L201.9,90.7L198.4,90.9L197.4,92.0L196.3,92.3L195.6,94.1L195.9,94.3ZM171.0,100.8L169.2,100.5L169.0,99.8L169.5,100.4ZM147.0,137.2L146.1,137.4L146.1,136.8L146.8,136.6ZM208.8,128.9L210.0,129.4L210.4,129.0L212.6,129.4L213.1,128.5L213.8,128.6L215.5,130.8L216.4,131.1L217.2,132.4L217.6,133.7L217.0,135.1L217.3,137.2L218.4,137.9L220.3,138.0L221.9,140.1L221.0,139.4L220.2,141.5L218.8,141.7L219.7,145.0L219.9,147.7L220.5,148.0L219.5,150.6L221.0,151.7L220.9,153.4L221.8,154.3L221.7,155.1L221.1,154.9L219.8,156.1L219.1,154.2L217.4,154.6L213.8,153.8L212.1,155.3L211.5,154.2L208.8,155.5L205.6,155.4L202.8,157.0L200.2,157.9L197.9,157.8L195.6,156.6L192.6,158.1L191.1,158.1L190.6,157.4L189.5,157.2L189.0,159.3L189.4,160.6L188.4,161.0L188.2,162.0L187.4,163.0L186.4,162.5L186.7,162.0L186.1,160.1L187.6,158.0L187.1,156.5L184.4,158.5L181.7,157.1L178.7,160.2L177.7,160.9L174.1,161.8L172.5,160.9L171.0,158.8L168.4,157.2L165.6,156.8L164.8,160.4L163.9,160.2L161.8,161.1L159.9,160.1L158.9,157.7L158.3,157.9L156.3,157.1L155.1,158.2L155.4,157.5L152.9,157.7L155.1,157.0L156.0,155.8L152.1,156.1L152.3,155.2L153.2,155.0L153.1,154.5L151.9,153.7L151.3,152.1L152.0,151.6L152.0,150.1L148.3,148.3L148.8,147.8L148.9,146.2L149.8,148.0L150.0,147.5L150.5,147.8L151.7,147.3L150.7,147.1L150.1,145.7L151.1,144.7L150.3,144.2L150.5,143.3L149.8,142.2L150.7,140.7L147.6,141.2L147.5,140.9L147.8,138.1L150.0,135.6L152.2,135.3L153.0,136.1L154.0,136.0L154.5,135.7L154.0,135.1L154.6,134.9L155.0,135.1L154.9,135.8L159.1,135.7L158.2,134.8L158.9,134.2L162.4,133.4L160.5,133.1L159.5,132.4L159.2,132.0L159.6,130.7L168.0,131.4L168.8,130.1L172.2,127.6L176.4,125.9L181.9,126.3L182.9,125.6L183.5,125.8L183.4,126.7L184.1,127.6L185.1,128.2L187.1,127.9L187.6,129.4L188.5,130.4L190.0,129.8L191.1,130.9L196.3,132.5L200.5,131.4L202.0,132.1L203.8,132.2L207.1,130.4ZM155.1,126.2L155.8,128.7L159.3,130.6L158.9,132.0L155.7,131.5L153.1,132.2L152.1,133.9L150.2,135.0L147.9,137.5L148.1,136.1L150.3,134.2L147.5,134.3L147.3,133.6L148.1,132.7L148.5,132.0L148.4,130.6L149.6,129.6L149.4,128.4L148.4,127.5L149.4,126.3L152.0,125.4L153.2,126.5ZM89.5,178.9L89.5,183.5L86.8,185.5L85.4,187.6L84.6,187.9L83.9,189.2L84.4,193.3L83.1,195.7L81.6,196.6L79.7,185.6L76.9,182.7L76.0,179.7L74.5,178.4L73.6,175.0L73.6,173.5L76.5,169.6L77.1,166.8L76.5,163.2L76.8,160.9L76.9,159.5L76.4,158.9L77.9,157.0L77.8,156.4L80.1,154.8L82.2,154.0L82.8,154.1L82.8,155.2L83.0,154.5L83.8,154.5L84.3,154.8L84.7,157.3L85.1,157.6L87.7,155.6L88.0,156.8L85.6,160.1L85.4,160.9L85.8,162.7L87.5,164.2L87.9,166.6L86.2,169.9L84.0,172.3L83.7,173.7L84.7,175.6L85.3,176.0L86.3,175.9L86.4,176.9L87.1,176.8L87.3,176.2L88.5,178.1L88.3,178.5ZM88.6,169.5L88.0,169.9L88.1,169.5L88.5,169.1ZM87.3,175.7L86.5,175.7L86.4,174.9L87.2,174.6L87.6,175.2ZM186.4,162.5L187.5,163.0L188.2,162.0L188.4,161.0L189.4,160.6L189.0,159.3L189.5,157.2L190.6,157.4L191.1,158.1L192.6,158.1L195.6,156.6L197.9,157.8L200.2,157.9L202.8,157.0L205.6,155.4L208.8,155.5L211.8,154.3L212.1,155.6L209.9,158.4L208.4,158.9L207.9,159.7L208.1,164.2L207.5,169.4L206.5,171.7L204.4,172.8L190.1,184.1L188.3,183.7L186.0,181.6L186.4,180.3L186.0,178.0L187.0,176.5L186.7,175.6L187.2,175.0L188.3,175.0L188.0,174.4L189.2,172.7L188.9,171.4L188.2,171.0L188.4,170.1L186.8,170.2L186.5,165.5L185.9,164.6ZM81.6,92.9L82.0,93.2L81.5,95.6L82.9,96.0L84.0,96.9L84.9,96.1L85.3,96.6L85.2,98.7L83.8,98.4L84.0,100.6L83.2,99.8L81.6,100.2L81.2,99.1L80.7,99.0L79.3,103.0L78.6,102.0L78.8,101.5L77.4,100.5L77.0,99.3L75.9,100.4L76.0,101.0L75.0,102.3L73.7,102.1L72.1,102.7L70.7,101.0L70.6,99.5L69.3,99.4L68.5,100.0L68.4,100.8L67.5,101.1L68.2,98.3L69.2,97.5L69.4,96.3L71.4,94.4L71.4,93.3L72.9,93.4L74.0,92.4L77.3,92.4L77.8,92.1L77.1,91.9L77.8,91.3L79.0,92.1L80.2,92.0ZM119.6,31.0L118.5,31.8L118.4,33.1L118.9,33.6L117.2,35.0L116.6,36.1L115.9,36.5L116.1,35.9L116.4,35.5L115.7,34.4L115.8,32.7L117.4,31.0L118.5,31.0L118.9,30.5ZM109.4,40.3L109.1,40.5L108.9,40.1L109.0,38.6L111.2,34.5L111.4,33.9L111.8,34.1ZM89.0,23.8L89.3,24.5L90.0,24.4L90.6,22.3L90.2,20.4L91.2,18.8L93.4,17.4L93.8,15.3L92.6,12.0L94.2,11.6L94.9,9.9L92.1,7.7L92.6,4.3L91.9,2.4L91.9,0.5L92.3,-0.0L91.4,-1.8L92.3,-3.0L92.1,-3.6L94.6,-6.0L96.2,-6.5L99.2,-6.1L99.6,-6.6L100.0,-7.6L99.7,-8.8L98.0,-9.5L101.3,-13.8L101.9,-16.8L101.6,-18.8L103.5,-19.0L105.3,-19.8L105.1,-20.9L108.9,-24.3L109.1,-24.9L107.9,-26.6L109.6,-27.7L110.5,-29.4L112.6,-30.6L115.0,-29.8L116.0,-31.2L115.9,-33.2L116.5,-33.3L123.1,-32.1L124.2,-32.9L123.1,-33.3L124.2,-34.0L124.6,-35.1L123.7,-36.1L125.7,-36.2L131.2,-33.1L134.6,-32.2L137.7,-29.7L137.2,-29.3L137.0,-26.8L138.1,-26.5L137.7,-24.8L139.1,-22.9L138.0,-20.9L138.0,-19.5L138.8,-18.9L139.8,-16.8L137.9,-17.0L135.6,-16.4L134.2,-17.2L133.3,-16.8L132.8,-17.2L132.2,-15.6L131.5,-15.7L131.8,-15.3L130.9,-15.2L130.7,-14.5L129.5,-14.4L129.6,-13.6L128.9,-13.9L129.5,-12.8L127.8,-10.9L128.5,-9.8L129.2,-8.5L127.3,-7.1L126.3,-5.2L122.9,-3.7L122.1,-2.8L120.7,-2.9L119.4,-1.4L117.7,-1.1L116.5,0.0L117.3,0.1L117.1,0.6L116.0,1.3L114.8,0.8L115.2,1.7L114.9,2.0L115.4,2.4L113.9,3.3L112.8,3.2L113.8,4.6L112.8,6.8L113.2,7.9L112.1,7.7L111.8,8.5L112.3,13.8L113.7,14.2L113.9,14.8L115.1,14.5L115.9,15.6L117.5,16.5L117.4,17.1L118.4,17.5L119.2,19.0L117.6,20.6L115.2,21.8L115.8,22.1L117.5,21.6L117.8,22.0L116.9,22.3L116.4,23.3L111.2,26.1L108.2,26.2L110.5,26.5L111.0,27.0L109.9,27.4L110.4,28.7L110.1,30.5L109.6,31.1L109.9,33.0L109.2,34.4L109.4,35.6L107.0,41.0L102.2,41.2L102.4,41.8L101.6,41.7L100.2,43.0L100.8,44.8L100.1,45.6L98.6,45.4L96.7,45.9L95.0,45.5L95.3,43.5L93.3,40.3L94.6,40.4L94.1,39.4L94.9,39.3L95.0,38.3L93.1,36.6L91.7,33.3L91.3,33.4L91.0,31.9L90.4,31.7L90.3,30.2L89.3,29.3L89.2,28.0L88.5,27.8L88.1,24.1L88.2,23.5ZM119.9,30.5L119.8,30.8L119.4,30.5L119.8,30.1L120.6,30.2ZM117.0,23.8L116.8,23.6L117.2,23.4ZM117.7,21.2L117.6,20.8L118.1,20.8ZM50.1,146.0L49.3,145.7L49.4,145.4ZM56.2,139.3L57.2,139.3L57.5,139.8L56.3,142.0L54.9,141.7L54.5,140.7L53.7,141.1L53.2,140.3L54.8,138.9L56.3,138.2ZM60.8,138.9L59.1,138.2L59.0,137.8L60.5,137.8ZM49.5,144.5L49.3,144.9L48.6,144.6L48.9,143.8L50.1,143.5ZM36.6,117.6L36.9,118.2L38.1,118.6L38.1,119.8L38.6,119.4L40.7,120.4L41.4,121.2L42.5,121.0L43.6,121.9L46.2,121.9L46.5,120.9L49.1,121.9L49.5,123.4L50.5,123.0L51.6,123.8L52.5,123.5L54.3,124.0L55.2,123.3L56.5,123.4L56.9,124.3L56.3,124.5L56.3,125.0L56.6,126.3L52.0,130.3L47.8,131.6L46.6,133.1L47.3,133.7L46.1,134.3L42.4,140.9L42.9,143.6L44.5,145.4L41.7,148.1L40.5,151.4L40.9,152.2L38.5,152.6L37.2,153.7L35.3,157.3L34.0,157.0L32.7,157.7L26.4,157.7L25.1,159.0L23.2,159.5L22.4,161.2L21.4,161.8L19.7,160.9L18.4,158.2L18.2,157.6L19.0,156.5L18.3,157.0L16.4,154.8L16.4,154.3L16.0,154.8L14.3,154.9L14.1,151.6L16.1,148.9L15.5,148.9L14.5,147.3L14.8,145.7L15.9,143.7L15.2,143.2L13.8,140.0L15.4,139.9L16.0,139.2L16.3,137.9L15.8,137.0L16.7,135.9L16.2,131.9L19.0,128.6L17.7,128.0L17.4,126.3L15.3,126.1L14.3,127.0L12.2,126.7L11.3,127.1L11.0,126.6L11.4,125.9L10.9,125.2L8.5,126.4L8.4,125.4L9.2,124.4L8.7,124.3L9.0,123.5L8.7,122.2L7.8,122.4L8.2,121.2L7.0,120.1L7.2,119.0L8.5,118.0L10.5,117.6L10.9,117.4L10.9,116.5L13.1,115.4L15.7,116.7L20.5,116.1L25.8,117.5L29.4,116.9L31.6,117.8L32.3,117.3L34.4,118.0ZM-21.2,207.7L-21.5,209.1L-22.5,210.0L-23.5,208.0L-20.4,206.5ZM-10.8,204.5L-11.4,204.8L-11.2,203.9L-10.1,203.1L-9.6,202.8L-9.9,204.0ZM-12.7,209.0L-13.2,209.7L-13.9,209.4L-12.8,208.7L-11.9,205.8L-11.2,205.9L-11.4,207.5L-11.6,208.5ZM-17.5,209.1L-17.6,211.1L-18.1,211.5L-18.7,211.3L-19.1,210.0L-18.6,209.1ZM-24.6,209.9L-25.1,209.3L-24.9,208.8L-24.3,209.3ZM-27.4,211.1L-27.8,212.1L-28.4,211.6ZM-27.2,207.0L-27.8,205.5L-27.0,204.9L-26.7,205.7ZM133.3,83.6L131.6,87.6L130.1,87.9L129.0,86.7L125.2,86.8L124.6,88.2L123.1,89.1L121.5,88.7L121.1,89.3L118.4,90.0L118.2,91.3L115.9,91.4L114.3,91.4L111.9,90.0L110.8,87.7L111.9,85.0L114.3,84.7L115.6,83.6L115.9,82.5L117.7,81.1L119.0,81.0L119.1,81.6L119.9,81.6L121.0,80.4L122.3,81.8L122.5,82.8L123.5,82.9L124.7,81.7L127.0,82.1L127.5,81.5L128.6,81.4L130.8,81.9L131.3,82.7ZM109.4,99.0L108.6,98.8L108.2,99.8L105.9,100.8L106.0,102.8L104.5,103.6L104.7,105.2L102.5,105.1L101.7,104.1L100.9,105.1L99.4,104.9L98.9,105.4L97.7,104.9L98.9,104.3L98.3,103.4L97.7,103.0L97.8,102.1L97.3,101.9L97.9,100.9L96.9,100.4L98.2,98.9L101.6,99.6L102.9,98.4L107.2,97.9L107.7,96.8L108.5,96.9ZM128.7,109.0L131.6,110.7L133.2,109.8L134.1,110.4L133.2,111.1L134.0,112.6L132.9,114.0L132.7,115.3L133.4,117.3L135.1,118.9L134.0,120.7L133.1,120.9L133.3,123.1L132.9,124.0L129.5,124.5L129.3,124.0L130.2,122.0L128.8,121.5L128.8,121.0L126.4,118.4L125.7,118.8L125.7,119.8L124.6,121.0L124.3,120.4L121.7,119.0L120.1,117.3L120.3,116.5L121.1,116.6L121.2,115.8L120.2,114.2L121.6,113.7L119.7,111.8L120.7,108.8L119.3,108.6L119.8,106.8L120.9,106.7L119.3,105.6L119.5,104.9L118.9,104.4L118.6,103.0L118.9,102.4L121.7,101.0L124.1,101.2L126.3,103.5L126.4,105.2L129.2,107.1L128.6,107.9L129.3,108.6ZM190.4,225.7L188.9,224.1L189.8,224.6ZM250.4,264.0L238.7,266.5L235.3,269.1L232.9,273.3L232.3,275.3L231.2,276.3L230.5,276.3L229.5,274.4L224.8,274.2L223.2,273.4L219.3,273.6L218.3,274.1L216.4,272.9L215.4,273.8L215.3,277.9L213.9,279.8L211.9,273.4L209.7,270.7L207.6,265.9L205.8,259.5L203.1,256.4L201.7,255.7L199.9,252.2L198.7,246.7L199.0,242.4L196.7,235.7L194.5,232.9L193.0,232.3L191.6,229.1L191.9,228.2L191.4,226.3L183.6,209.8L181.8,209.2L181.4,209.6L182.7,201.9L187.1,202.8L188.8,201.0L189.7,199.0L192.7,198.0L193.4,196.0L194.7,195.0L193.4,193.0L190.7,189.1L198.6,186.0L199.4,185.3L204.2,186.4L211.0,191.5L221.4,202.8L232.3,204.1L233.3,206.8L236.3,206.7L237.8,210.6L237.7,211.7L239.5,213.0L239.2,213.4L240.2,214.9L243.1,218.0L242.6,217.9L243.4,220.1L243.1,221.4L242.6,221.3L242.8,222.2L245.9,229.9L246.4,230.6L248.1,230.6L247.7,232.0L248.8,232.3L248.9,233.5L252.7,240.4L262.8,242.3L263.1,241.8L264.9,246.0L262.3,258.0ZM563.3,124.2L562.7,122.8L562.9,122.3L562.3,121.6L564.8,120.6L565.6,117.7L565.2,115.8L565.6,113.6L564.5,108.9L566.3,108.1L567.9,106.0L572.2,107.8L573.0,107.2L573.2,105.0L574.2,104.4L574.5,102.7L575.9,100.5L575.9,99.0L577.3,95.2L577.1,94.2L578.6,93.1L579.5,91.7L578.7,89.9L579.1,88.5L577.6,87.8L574.4,89.4L573.1,89.4L571.3,90.3L570.4,91.7L564.4,91.7L563.5,89.9L563.8,88.0L562.8,86.4L562.8,84.8L561.4,84.7L558.6,81.7L556.9,81.8L555.4,80.4L552.6,80.6L550.8,79.2L550.6,78.1L551.0,76.7L550.0,75.9L549.9,73.8L548.4,71.4L546.0,63.8L544.7,62.3L544.9,61.6L543.6,60.7L543.3,59.7L541.0,58.8L540.0,59.2L535.2,56.7L530.1,57.1L524.7,58.3L521.2,61.3L521.1,62.2L523.4,62.6L523.5,66.2L521.1,68.4L517.5,75.6L518.2,76.3L517.9,77.6L514.7,78.9L512.4,80.9L509.9,80.3L505.8,77.9L503.8,78.7L502.6,78.6L499.9,76.6L498.1,76.4L495.3,78.0L492.2,80.9L486.4,81.9L483.9,83.1L478.0,82.0L475.6,82.1L473.0,80.1L472.8,78.3L470.1,78.1L468.0,76.1L466.0,76.2L462.7,75.2L459.1,76.2L457.5,77.1L454.4,76.8L450.4,74.5L449.7,69.9L446.8,69.3L443.2,67.6L441.0,67.5L436.9,65.3L435.9,67.2L434.8,67.7L434.2,69.0L433.5,69.3L432.7,71.7L433.5,74.1L434.5,74.8L434.3,76.2L433.4,77.9L431.7,78.5L430.8,79.6L430.2,79.6L429.3,78.7L426.7,78.6L425.7,78.0L424.6,77.9L423.5,78.5L421.9,78.4L421.1,77.7L419.9,77.9L418.9,76.7L418.4,74.7L413.9,74.4L413.2,73.3L412.0,73.9L410.9,72.8L410.3,73.8L408.7,73.8L407.2,75.2L405.6,75.5L404.2,76.7L401.8,77.4L401.5,78.1L400.1,78.6L400.2,79.7L398.5,80.2L398.0,81.0L394.4,81.3L393.5,82.9L391.3,83.5L388.1,80.6L388.3,79.3L386.4,81.0L382.6,80.3L381.6,77.6L379.0,76.6L377.5,73.4L375.1,72.0L372.8,72.6L371.7,73.6L367.6,73.6L367.3,72.3L366.1,72.2L366.3,70.9L364.7,70.2L363.6,70.9L363.5,72.3L361.7,73.4L359.7,69.0L353.3,58.4L347.8,53.9L347.6,53.1L348.5,53.1L349.2,51.3L343.7,53.5L342.8,54.6L341.3,55.0L339.7,56.1L339.3,57.1L337.4,56.3L335.6,57.3L335.2,55.8L336.7,54.4L336.6,53.6L334.9,54.3L333.6,53.4L332.5,53.2L332.3,54.0L331.8,54.3L330.7,52.0L330.0,52.8L327.3,53.0L326.4,52.7L326.7,50.4L325.0,46.2L322.8,47.0L320.0,45.9L318.0,45.7L314.9,47.0L314.7,48.1L307.0,50.0L304.1,50.3L302.5,52.0L300.0,51.7L289.9,54.3L287.2,53.9L286.2,56.3L288.4,56.9L287.2,57.3L287.0,58.3L288.9,58.6L290.3,59.4L290.6,60.0L290.1,60.3L286.4,60.2L285.4,61.9L286.2,64.0L282.4,66.4L283.8,67.4L284.1,68.1L287.7,69.3L288.5,70.1L287.8,72.8L286.0,73.8L284.0,73.9L282.5,72.9L281.5,74.5L280.4,75.0L280.1,74.3L277.8,73.8L275.8,71.6L273.7,71.5L272.9,72.4L272.1,72.7L270.4,71.6L268.3,71.9L266.6,73.7L265.1,74.5L261.0,71.9L260.6,72.3L261.0,74.0L260.6,74.8L259.0,71.8L255.8,69.1L252.7,69.1L251.3,67.7L248.9,69.1L247.9,69.1L247.1,68.1L245.7,67.6L243.7,70.1L240.5,71.5L239.8,72.9L237.8,74.4L237.1,74.3L237.9,77.9L237.6,78.4L235.9,78.9L233.4,75.7L232.3,75.9L231.6,78.0L230.2,79.8L229.8,81.8L230.7,83.1L229.4,85.2L229.2,87.5L230.8,88.6L231.0,90.3L231.8,91.6L232.5,91.2L235.2,91.7L238.4,97.4L238.1,97.8L236.8,97.5L236.7,98.4L239.5,100.3L237.3,101.5L237.5,102.6L236.5,102.4L235.2,103.6L233.4,103.9L233.1,104.5L232.4,103.9L232.6,105.1L230.9,109.1L230.6,108.7L229.5,110.6L229.6,111.5L230.7,111.9L231.8,113.4L232.4,116.7L233.2,114.7L232.4,119.8L236.8,126.9L234.0,130.7L231.9,130.3L229.6,127.1L228.9,127.2L225.2,124.8L225.2,122.9L224.0,122.8L222.1,121.5L221.7,122.3L220.7,121.5L218.0,122.6L217.8,121.5L213.7,119.0L209.0,118.7L205.3,116.8L203.4,116.6L202.7,117.5L197.7,112.3L195.5,111.5L194.2,109.8L192.8,109.8L191.6,108.2L189.4,107.2L189.3,106.9L190.6,106.3L189.7,105.8L190.0,105.5L191.7,106.4L193.4,105.7L193.3,104.6L194.5,102.0L194.9,101.7L195.1,102.4L195.5,101.4L196.8,101.5L195.1,99.6L194.5,99.6L193.9,98.2L196.8,98.0L196.6,97.1L199.9,95.7L199.6,94.4L197.5,95.1L197.0,95.1L197.8,94.4L197.1,94.6L195.7,95.5L195.9,94.3L195.6,94.1L196.0,92.6L197.4,92.0L198.1,91.0L201.9,90.7L202.6,88.4L202.2,88.2L202.1,86.7L201.3,86.5L201.9,85.2L202.8,85.1L201.5,84.0L203.2,82.5L203.1,80.5L201.9,80.6L199.5,78.9L198.5,79.1L195.8,77.7L195.0,78.5L193.6,77.3L192.5,75.5L189.3,76.7L187.3,75.5L185.2,75.8L184.5,74.8L184.1,71.7L183.5,71.6L183.1,70.8L181.7,71.0L179.8,70.5L180.0,70.0L179.4,67.9L180.4,67.7L180.5,67.3L177.9,63.9L175.5,64.0L174.2,64.5L172.7,64.2L171.4,65.7L170.0,65.4L169.3,64.1L169.2,61.4L168.0,59.9L168.6,58.8L171.5,59.5L173.8,58.0L173.7,57.3L172.8,56.7L172.7,55.8L170.0,55.1L170.3,53.8L168.6,52.8L167.3,51.0L167.6,50.2L166.2,49.3L166.9,47.7L166.2,46.3L166.5,44.4L163.9,42.9L162.8,42.9L160.9,43.9L160.4,43.3L160.5,42.4L159.2,41.9L158.2,42.3L157.3,41.4L156.2,41.7L155.6,41.1L155.5,38.7L154.5,36.9L153.6,36.9L154.4,34.2L152.5,32.8L153.2,31.2L154.2,30.9L153.1,28.7L152.8,25.3L154.6,22.3L155.7,21.8L155.1,21.1L155.3,19.3L156.4,19.8L157.1,18.9L158.8,19.0L159.6,18.0L163.5,18.8L163.7,18.3L161.9,16.8L159.3,16.9L157.6,15.7L157.0,14.8L157.5,15.1L157.6,14.3L157.1,13.9L154.2,14.8L160.0,10.3L167.7,3.1L169.1,0.7L167.7,-1.2L163.0,-4.4L163.8,-4.8L165.1,-6.5L164.9,-7.4L163.4,-8.2L163.0,-9.1L163.4,-10.4L162.1,-10.8L161.4,-11.8L162.3,-12.9L161.4,-13.5L162.3,-15.4L161.9,-15.7L163.4,-16.1L163.4,-16.7L162.6,-18.5L159.3,-23.4L162.8,-27.3L163.0,-28.0L160.4,-30.4L157.8,-31.1L156.9,-32.9L158.1,-35.0L156.7,-35.4L159.5,-36.3L160.6,-37.8L163.0,-38.4L163.7,-39.0L163.6,-39.8L166.4,-39.2L166.5,-40.7L169.2,-40.2L170.1,-40.9L170.9,-40.9L170.9,-41.7L175.0,-40.3L174.6,-39.6L171.7,-40.0L171.3,-39.8L172.5,-38.9L174.9,-38.8L174.8,-38.2L176.7,-38.6L176.2,-36.9L175.5,-36.4L176.7,-36.8L177.7,-37.9L182.9,-37.3L184.0,-37.7L186.3,-37.2L193.7,-34.2L196.5,-32.1L198.1,-31.9L201.0,-30.4L202.1,-30.4L202.0,-30.9L204.3,-29.0L206.6,-28.3L207.3,-25.6L208.2,-25.3L207.5,-23.0L203.2,-19.8L197.4,-18.4L194.4,-18.6L190.8,-19.6L184.9,-20.4L182.2,-21.7L180.8,-21.3L180.7,-21.9L175.5,-23.1L174.3,-24.1L174.7,-24.5L170.5,-25.0L172.9,-24.0L172.8,-23.5L174.4,-22.3L175.6,-22.1L175.8,-21.2L177.5,-20.7L176.4,-20.0L179.4,-19.4L181.7,-17.7L182.0,-16.6L181.4,-15.1L180.5,-14.4L182.1,-11.9L182.2,-10.8L182.7,-10.5L182.4,-9.4L183.0,-8.6L184.6,-8.1L185.5,-8.3L187.4,-7.1L188.3,-6.0L192.3,-4.9L194.7,-5.7L195.1,-6.5L194.6,-7.9L193.8,-8.4L191.6,-8.5L189.2,-10.7L189.0,-11.6L190.0,-11.9L190.4,-13.0L191.4,-13.2L194.8,-11.3L201.8,-9.5L203.0,-10.6L204.5,-10.7L202.0,-14.1L202.0,-15.6L204.1,-16.5L205.5,-17.8L208.6,-18.7L211.6,-21.1L213.1,-20.5L215.6,-20.5L217.3,-19.5L216.8,-18.7L218.0,-18.9L219.1,-18.1L219.1,-19.4L220.6,-22.0L220.4,-23.6L219.8,-24.6L217.8,-25.5L219.6,-30.0L219.5,-31.5L216.3,-33.7L216.0,-34.0L216.3,-34.1L218.9,-33.3L223.0,-33.5L226.2,-32.9L229.3,-29.8L229.4,-29.1L224.7,-28.5L222.3,-26.5L224.9,-25.1L226.2,-23.3L228.6,-22.8L233.2,-23.9L234.2,-26.7L234.1,-27.5L237.9,-28.1L237.6,-29.4L239.2,-29.2L245.3,-31.9L250.4,-33.2L251.6,-32.8L251.2,-32.2L252.0,-32.1L253.3,-32.9L251.8,-33.6L257.6,-36.0L260.4,-36.0L257.6,-35.4L258.3,-35.1L257.5,-33.8L258.1,-32.6L255.8,-32.1L255.5,-31.6L258.3,-31.4L260.3,-31.8L261.8,-31.2L262.1,-32.2L264.1,-33.4L266.5,-33.9L270.9,-33.3L275.0,-35.3L275.3,-35.0L275.7,-35.5L278.5,-36.0L279.8,-34.4L278.7,-33.7L278.7,-32.7L281.2,-32.1L282.0,-32.8L281.9,-34.2L284.2,-34.4L286.0,-35.9L285.7,-36.9L284.9,-36.7L283.0,-39.5L285.9,-41.1L295.6,-40.1L298.9,-39.2L301.9,-38.0L301.7,-37.5L310.1,-35.2L313.0,-33.1L315.6,-31.9L316.1,-32.1L317.4,-33.4L318.6,-35.7L316.2,-35.8L314.5,-37.4L314.1,-38.9L312.6,-39.5L310.4,-40.2L309.7,-39.3L309.3,-40.4L309.8,-42.1L311.1,-42.6L310.7,-43.3L311.2,-46.4L310.7,-47.0L308.9,-46.9L308.8,-47.4L309.5,-48.4L308.7,-48.5L309.8,-49.7L312.3,-50.5L315.2,-52.1L318.2,-58.0L319.6,-59.7L320.5,-59.9L321.0,-59.3L328.0,-59.5L333.2,-58.1L332.3,-54.1L331.1,-52.2L329.5,-50.7L330.3,-49.8L332.3,-48.9L332.8,-47.8L332.8,-44.7L331.9,-43.6L332.4,-40.8L332.3,-35.8L336.1,-33.4L336.3,-32.9L334.5,-31.1L334.2,-28.6L332.3,-27.5L329.4,-24.0L328.7,-23.6L327.5,-23.8L328.2,-22.1L324.9,-21.1L323.6,-21.6L324.8,-22.5L323.2,-22.1L321.5,-23.1L318.9,-23.0L318.1,-22.7L318.8,-21.5L323.4,-20.1L327.4,-20.2L329.7,-19.5L331.3,-20.0L331.6,-21.4L337.1,-24.0L338.2,-26.5L341.0,-28.6L340.9,-30.4L339.5,-32.5L340.2,-34.5L346.3,-35.9L347.7,-35.9L350.8,-32.8L350.6,-28.7L352.9,-27.4L357.5,-27.5L352.2,-28.5L352.0,-30.0L352.5,-31.1L353.8,-31.6L352.5,-35.4L345.9,-37.4L343.6,-37.4L341.2,-36.5L337.8,-36.7L337.0,-37.2L337.5,-38.5L336.2,-40.2L336.3,-40.8L337.3,-43.1L339.3,-45.5L336.3,-49.3L334.3,-50.7L336.6,-53.1L341.9,-54.9L342.3,-55.6L342.2,-57.3L341.1,-58.9L342.5,-59.1L343.4,-58.8L344.3,-57.5L344.9,-55.8L343.0,-53.8L342.9,-52.9L343.9,-51.9L343.0,-50.6L343.2,-50.1L344.8,-49.6L348.8,-49.2L349.6,-48.8L352.2,-49.0L355.1,-47.6L357.9,-47.7L358.1,-48.0L355.8,-48.2L354.7,-49.6L351.8,-49.9L347.6,-51.3L346.0,-53.5L349.4,-54.2L352.1,-53.1L354.6,-53.4L353.9,-54.6L351.8,-54.4L351.6,-54.9L355.8,-56.4L359.5,-56.3L364.8,-54.5L365.2,-53.8L368.4,-52.3L374.1,-52.3L374.6,-52.0L373.6,-50.7L371.0,-49.6L370.7,-48.0L371.1,-46.8L370.4,-45.6L370.6,-44.4L372.1,-47.3L373.2,-47.7L373.8,-47.4L373.8,-45.5L372.5,-43.3L373.1,-42.6L374.0,-42.6L374.0,-43.7L375.7,-44.1L376.6,-45.3L374.3,-48.6L375.9,-51.3L375.8,-52.1L374.5,-53.2L372.3,-53.6L370.1,-55.6L365.1,-56.9L364.4,-58.3L365.1,-59.7L363.8,-60.5L363.5,-61.4L363.4,-62.1L364.2,-62.8L364.1,-63.4L380.6,-64.6L382.5,-64.3L384.1,-64.9L389.2,-65.3L389.7,-64.9L384.8,-62.6L384.9,-62.0L388.3,-60.6L385.5,-62.1L385.4,-62.7L387.1,-63.4L390.1,-63.7L391.9,-64.9L390.5,-65.3L387.9,-67.5L385.7,-67.9L387.2,-68.7L389.2,-68.0L390.5,-68.2L387.3,-69.5L384.8,-69.9L386.4,-70.9L388.2,-70.1L389.1,-70.3L391.3,-71.6L391.5,-72.1L389.4,-72.4L389.6,-73.0L392.3,-72.8L402.3,-75.5L417.7,-77.5L413.0,-77.5L413.4,-78.5L413.9,-78.2L414.5,-78.6L416.1,-78.3L419.7,-78.9L423.7,-78.8L425.7,-78.5L424.0,-77.4L427.4,-78.0L427.8,-77.9L427.4,-77.3L430.8,-78.2L431.4,-77.9L432.0,-78.5L436.0,-79.5L440.4,-78.2L439.1,-76.8L439.5,-76.8L440.7,-77.6L440.6,-78.8L436.8,-81.1L444.7,-81.2L447.7,-80.6L448.0,-80.9L445.0,-81.3L445.7,-82.2L445.0,-82.9L445.2,-83.9L451.7,-87.1L457.3,-88.4L464.0,-87.2L465.4,-86.3L458.0,-84.6L463.8,-84.6L464.5,-84.0L468.9,-84.2L470.8,-83.6L467.7,-81.4L466.7,-81.5L466.8,-81.1L472.0,-81.1L473.8,-82.4L485.5,-82.3L488.8,-81.3L489.4,-80.9L488.8,-80.3L490.2,-80.6L491.5,-80.3L492.2,-78.8L491.6,-78.3L493.4,-78.8L493.6,-79.0L492.9,-79.4L494.1,-79.5L495.2,-77.3L496.4,-77.5L495.2,-75.4L494.5,-76.1L490.9,-77.1L492.8,-75.4L494.0,-75.7L495.9,-74.7L495.4,-73.8L492.7,-72.1L480.4,-67.9L480.7,-67.6L480.3,-67.0L477.4,-66.2L473.9,-64.2L470.2,-63.7L467.9,-62.0L465.9,-61.8L463.9,-59.8L461.8,-58.7L464.0,-59.0L467.1,-60.8L472.1,-61.0L477.4,-62.3L478.4,-62.9L480.5,-62.8L484.1,-64.1L484.5,-64.4L483.9,-64.7L479.9,-64.5L479.7,-64.8L480.5,-65.6L482.1,-66.1L485.3,-65.6L485.6,-66.3L487.2,-66.2L485.9,-65.8L486.6,-65.0L489.6,-64.3L492.2,-64.5L492.7,-65.0L492.3,-65.8L493.1,-65.5L494.6,-63.9L493.6,-62.8L494.9,-62.1L494.9,-60.3L493.5,-59.0L494.2,-57.9L495.6,-57.8L493.8,-58.8L495.1,-60.3L495.2,-61.4L496.5,-62.1L495.0,-63.0L497.2,-63.5L502.3,-64.2L514.7,-63.5L516.6,-62.9L514.7,-62.8L514.6,-61.5L519.8,-59.9L527.8,-59.8L530.9,-59.3L531.8,-59.4L530.9,-60.1L533.4,-59.7L535.2,-61.2L534.0,-62.6L534.4,-63.8L538.9,-64.5L543.2,-63.1L543.1,-62.7L545.7,-63.3L546.0,-63.0L545.8,-62.4L546.9,-62.0L548.8,-63.3L551.6,-62.9L553.7,-62.0L553.7,-61.6L555.0,-61.6L556.2,-61.1L556.3,-60.7L557.0,-60.7L555.0,-59.4L556.7,-59.2L557.6,-58.2L554.3,-57.2L557.7,-56.6L558.2,-55.9L558.2,-55.0L557.7,-54.6L556.3,-54.5L551.5,-56.5L556.2,-52.5L557.1,-52.9L557.1,-53.7L557.4,-53.5L558.4,-52.4L556.0,-52.0L557.1,-51.6L559.6,-48.7L562.7,-47.4L563.6,-47.8L564.6,-46.5L566.8,-47.4L568.7,-49.5L568.5,-50.1L569.4,-51.9L571.1,-53.6L573.0,-51.6L575.2,-50.6L579.3,-50.3L582.7,-51.7L584.8,-51.7L588.9,-50.5L592.1,-48.8L591.8,-49.4L593.6,-50.0L592.1,-50.3L593.3,-51.6L594.5,-51.4L595.5,-51.8L597.2,-50.7L600.3,-50.9L599.1,-52.2L599.2,-53.3L597.8,-53.7L598.9,-54.0L599.7,-54.9L601.1,-55.1L598.8,-55.4L597.1,-55.0L596.9,-56.0L598.7,-57.0L602.1,-57.0L604.6,-57.5L602.9,-59.1L603.5,-59.3L608.5,-58.3L614.3,-58.2L625.2,-56.7L625.1,-56.1L619.3,-56.3L616.9,-55.6L618.1,-55.0L620.4,-55.6L627.5,-55.8L624.6,-53.7L624.2,-53.7L625.1,-54.8L623.2,-55.4L622.9,-54.4L623.2,-53.6L620.5,-53.6L620.2,-52.5L621.0,-52.2L624.5,-52.9L629.2,-56.0L633.7,-55.9L638.1,-55.0L639.9,-54.0L640.2,-53.4L636.3,-52.8L636.0,-52.1L638.1,-52.0L640.3,-51.1L642.5,-51.1L642.7,-50.7L640.5,-49.4L643.9,-50.3L646.4,-49.7L648.4,-48.1L647.1,-47.9L650.1,-47.0L655.2,-47.3L663.5,-48.6L669.7,-48.4L674.7,-47.6L677.3,-46.7L679.5,-45.0L679.9,-43.9L678.8,-41.2L679.2,-40.7L683.5,-39.6L684.0,-36.6L685.2,-35.4L684.3,-33.9L683.3,-33.2L684.2,-33.4L686.1,-35.4L686.0,-38.3L688.5,-39.7L692.6,-40.3L695.5,-40.4L697.8,-39.7L707.0,-39.0L710.2,-40.4L711.1,-40.4L712.3,-39.5L712.9,-37.6L716.9,-36.5L718.1,-34.7L721.7,-35.0L723.6,-36.3L723.6,-36.8L721.9,-39.5L720.2,-39.8L721.6,-41.1L721.5,-42.6L729.8,-41.8L732.6,-40.9L733.3,-41.7L738.6,-41.1L743.1,-41.4L747.1,-39.9L754.8,-38.3L759.4,-35.9L759.4,-12.4L757.2,-10.9L753.5,-9.6L750.4,-10.3L747.0,-12.5L744.8,-12.3L747.6,-12.0L748.3,-11.2L747.7,-10.7L743.7,-11.8L742.6,-11.1L737.7,-10.1L742.2,-10.7L743.7,-11.4L744.9,-10.2L744.0,-9.5L749.1,-10.6L749.2,-8.7L750.2,-7.8L751.6,-7.3L752.3,-8.2L752.9,-7.6L753.2,-6.1L754.0,-5.8L754.3,-4.0L753.2,-3.6L754.2,-3.1L754.1,-2.4L754.6,-3.2L755.1,-2.1L756.9,-0.9L756.4,-0.0L757.4,0.8L757.7,1.9L756.1,3.2L755.9,4.1L751.5,2.7L748.6,2.4L748.8,1.3L747.5,1.3L747.3,2.0L748.1,2.6L746.3,3.0L744.8,3.9L738.4,6.3L737.6,7.1L734.8,7.9L734.0,7.7L732.1,9.6L731.0,9.2L731.2,10.1L729.1,11.0L729.1,11.6L722.0,15.4L721.0,18.2L719.5,17.6L718.1,15.4L716.5,14.4L712.2,14.6L708.6,15.6L704.8,18.9L704.4,18.9L704.2,18.1L705.1,15.1L700.1,17.4L699.5,18.9L697.8,17.6L696.2,18.6L696.3,18.1L694.7,17.8L693.2,19.3L692.9,22.2L691.5,23.3L691.7,24.1L688.4,27.3L687.6,29.5L688.0,30.5L689.4,31.3L689.4,31.7L690.4,30.3L692.7,31.3L692.5,32.2L690.9,33.9L690.8,34.5L691.0,37.1L691.5,37.7L692.8,37.9L693.1,40.6L692.0,41.7L691.1,41.6L690.3,40.6L691.9,38.9L690.5,39.1L689.7,39.6L689.9,40.4L688.1,41.5L686.7,45.0L686.9,46.8L688.2,49.5L686.3,50.9L684.3,50.4L682.9,50.8L680.1,52.9L679.2,55.3L679.9,59.2L678.2,58.6L674.9,60.5L673.8,59.8L673.6,60.3L674.3,60.8L673.9,63.7L672.3,67.1L666.9,72.2L666.0,69.7L665.4,62.9L664.4,60.8L662.2,46.8L662.8,41.6L663.9,37.8L667.3,34.3L667.8,33.2L667.2,31.3L669.7,31.2L670.6,29.9L673.0,29.9L676.7,26.9L679.2,23.2L686.8,17.1L688.1,15.2L691.7,13.3L694.6,12.5L694.0,11.8L695.8,9.9L695.0,9.2L695.8,7.7L696.6,4.2L698.1,3.2L700.6,3.8L700.6,3.3L701.3,3.0L698.9,2.6L697.4,1.8L693.1,2.7L691.8,6.7L691.8,7.3L692.8,7.8L692.1,8.6L691.8,8.7L691.2,7.8L689.4,8.0L682.9,13.5L680.5,14.2L681.4,11.8L679.0,12.3L679.6,11.2L679.4,10.2L680.8,8.1L681.1,6.6L678.1,7.7L676.6,6.4L672.2,7.5L669.8,7.2L668.3,7.9L666.6,9.1L666.4,10.4L664.2,12.0L662.8,13.9L659.9,15.7L657.2,19.0L656.6,20.8L657.1,21.1L658.3,20.8L659.9,21.3L660.6,21.8L660.6,22.9L658.8,23.2L657.8,22.7L656.0,23.5L654.8,22.7L653.5,22.7L653.1,23.5L652.3,23.5L651.3,24.4L649.3,23.8L648.4,24.5L645.4,24.7L644.5,23.5L648.0,23.0L649.1,22.7L648.7,22.3L647.2,22.1L645.5,20.6L644.2,20.5L643.4,21.2L642.0,21.0L642.7,20.7L637.8,19.4L636.4,20.2L636.9,21.1L635.3,20.8L635.1,21.8L636.0,21.8L635.8,22.3L635.0,22.5L634.1,22.4L633.2,21.5L630.2,22.4L626.3,21.3L625.3,22.7L624.4,23.0L622.4,21.5L613.0,21.8L609.6,23.1L606.7,26.1L604.3,27.5L603.1,28.7L602.1,31.1L600.3,31.9L598.4,33.9L597.1,34.4L595.0,36.2L591.2,41.2L586.3,44.5L585.1,45.9L582.6,47.3L581.3,49.0L581.5,49.6L583.8,50.5L587.6,50.3L587.1,54.4L587.6,55.3L589.0,55.1L589.4,53.8L588.8,53.2L589.0,52.9L589.9,52.3L591.1,52.3L589.8,53.4L591.7,54.3L589.4,56.7L592.2,56.4L594.5,54.2L594.6,55.1L593.4,56.9L594.2,56.8L595.2,54.8L595.0,52.2L597.6,52.8L599.2,52.3L601.0,53.7L601.7,55.1L603.1,56.4L605.8,58.2L605.9,58.9L605.0,59.9L603.7,59.5L605.3,61.0L605.3,62.7L604.8,63.4L606.2,64.9L605.8,66.5L604.0,68.3L602.4,73.2L602.5,77.2L602.8,77.5L602.2,78.5L602.4,80.4L601.6,83.7L601.8,84.2L600.8,87.5L597.8,90.7L596.4,93.7L594.7,95.7L593.7,98.7L591.1,103.1L587.6,107.0L585.0,111.1L583.9,111.8L581.0,116.8L576.5,120.3L573.1,121.8L571.3,120.7L569.7,120.7L569.8,118.1L568.0,119.4L568.6,118.3L568.3,118.2L567.4,118.8L565.2,122.2L563.4,122.1L563.9,122.9ZM186.1,-13.1L186.2,-12.0L185.6,-12.3L185.0,-12.9ZM127.1,46.3L125.6,48.1L128.0,48.4L128.2,46.4L128.8,46.3L131.5,47.6L133.5,47.6L134.5,48.8L134.0,50.2L134.1,51.9L121.7,51.2L122.7,50.2L123.1,48.5L125.3,48.0ZM177.3,101.4L177.6,100.7L178.1,100.8L180.3,101.6L180.7,102.2L181.6,102.1L182.1,103.3L182.9,103.6L184.7,106.1L187.5,105.3L189.1,105.6L188.4,107.6L186.3,108.0L185.9,107.6L184.8,107.4L183.2,109.2L181.8,109.2L180.8,109.7L179.2,111.5L177.5,111.4L176.7,110.7L177.4,108.6L177.1,107.4L174.6,105.9L173.4,106.0L173.0,105.6L177.6,102.3ZM155.9,105.3L156.8,106.2L158.1,106.6L158.2,106.1L160.6,105.5L161.8,106.4L161.2,108.9L159.2,109.5L159.4,108.1L158.6,108.5L158.3,110.6L158.6,110.6L157.6,112.2L157.4,115.5L155.9,115.4L154.6,114.1L152.8,113.9L151.4,113.0L148.0,114.0L145.1,116.0L136.1,114.8L134.9,115.0L134.7,114.3L135.3,113.5L133.2,111.4L134.1,110.4L133.2,109.8L131.6,110.7L128.7,109.0L129.3,108.6L128.6,107.9L129.2,107.1L127.0,105.8L126.4,104.8L126.3,103.5L124.2,101.3L125.7,101.2L126.3,100.5L127.8,100.2L131.2,93.0L132.4,91.6L133.6,91.4L135.7,89.5L139.9,90.6L141.5,90.4L143.0,91.7L145.0,90.5L147.7,90.0L148.3,88.8L149.9,88.4L151.0,89.1L153.5,94.0L155.3,96.1L156.0,98.2L155.4,102.2L155.7,104.1L155.4,104.4ZM-24.6,180.8L-22.6,181.5L-22.9,181.7L-23.9,182.0L-24.8,181.4ZM8.8,126.4L10.9,125.2L11.4,125.9L11.0,126.6L11.3,127.1L12.2,126.7L14.3,127.0L15.3,126.1L17.4,126.3L17.7,128.0L19.0,128.6L16.2,131.9L16.7,135.9L15.8,137.0L16.3,137.9L16.0,139.2L15.4,139.9L13.8,140.0L15.2,143.2L15.9,143.7L15.0,145.4L14.5,147.3L15.5,148.9L16.1,148.9L14.1,151.6L14.3,154.9L12.6,156.0L9.6,155.3L8.0,155.8L8.7,153.4L8.4,147.3L9.3,147.5L8.8,146.9L7.1,147.3L7.0,146.1L7.9,145.5L8.2,144.0L8.8,143.5L8.1,143.9L7.4,145.5L6.5,145.8L6.0,145.2L6.5,142.0L7.4,140.7L8.6,137.3L9.2,133.5L8.9,127.8L8.4,127.4ZM137.6,68.9L137.8,70.1L139.5,72.8L139.1,73.3L139.5,74.8L139.0,75.5L138.0,75.7L134.0,80.4L134.0,83.0L134.4,83.9L131.3,82.7L130.8,81.9L129.8,81.5L127.5,81.5L126.7,82.1L124.7,81.7L123.5,82.9L122.3,82.8L122.3,81.8L121.0,80.4L119.9,81.6L119.1,81.6L117.5,78.7L115.4,77.8L114.6,78.1L113.8,77.3L114.1,76.2L113.0,76.5L110.8,75.4L111.3,76.6L109.9,77.4L108.2,75.5L109.0,74.5L108.5,74.1L107.4,74.3L104.9,73.2L103.9,72.0L103.3,71.9L103.3,72.7L102.6,72.8L103.4,70.5L103.0,69.2L102.3,68.9L101.8,67.0L102.4,65.5L101.6,63.8L101.9,62.8L99.9,60.7L101.0,58.8L100.4,55.6L101.7,56.2L101.6,55.1L100.2,54.5L108.1,52.3L109.6,50.7L114.7,49.1L116.6,49.0L118.3,49.9L117.0,49.5L118.0,51.4L119.2,51.9L121.7,51.2L134.5,51.6L136.6,52.8L138.8,60.6L138.8,61.8L136.8,62.9L135.9,64.3L137.8,65.8L137.3,67.7ZM125.7,-36.2L123.7,-36.1L124.6,-35.1L124.2,-34.0L123.1,-33.3L124.2,-32.9L123.1,-32.1L116.5,-33.3L115.9,-33.2L116.0,-31.2L115.0,-29.8L112.6,-30.6L110.5,-29.4L109.6,-27.7L107.9,-26.6L109.1,-24.9L108.9,-24.3L105.1,-20.9L105.3,-19.8L103.5,-19.0L101.6,-18.8L101.9,-16.8L101.3,-13.8L98.0,-9.5L99.7,-8.8L100.0,-7.6L99.6,-6.6L99.2,-6.1L96.2,-6.5L94.6,-6.0L92.1,-3.6L92.3,-3.0L91.4,-1.8L92.3,-0.0L91.9,0.5L91.9,2.4L92.6,4.3L92.1,7.7L94.9,9.9L94.2,11.6L92.6,12.0L93.8,15.3L93.4,17.4L91.2,18.8L90.2,20.4L90.6,22.3L90.0,24.4L89.3,24.5L88.9,23.4L86.8,22.9L86.1,21.7L85.9,19.4L85.8,20.5L85.1,20.9L85.2,22.3L84.2,23.9L82.9,24.2L81.7,23.3L82.1,24.2L80.7,24.9L81.1,25.2L80.8,25.5L76.2,29.1L73.4,29.9L71.6,29.9L71.1,29.1L70.5,29.6L69.9,29.4L70.2,28.4L67.8,27.7L66.4,26.9L65.7,25.6L66.0,23.9L68.0,24.8L69.0,24.0L68.0,24.3L67.1,23.4L67.4,22.2L69.2,20.6L65.1,23.0L64.1,22.6L64.8,20.1L65.5,19.7L66.7,20.0L68.4,19.1L66.9,19.2L66.5,18.8L67.9,17.5L68.1,16.6L69.6,15.6L69.7,17.1L70.4,15.5L71.5,14.9L68.2,15.9L67.1,17.6L64.2,20.2L64.4,17.5L66.3,17.3L64.7,16.8L64.2,15.3L66.2,13.9L64.6,14.6L64.1,14.2L63.6,11.8L70.7,11.1L71.7,12.3L71.7,11.5L74.0,10.7L73.2,10.7L72.9,10.2L73.3,9.4L72.3,11.0L70.2,10.8L70.0,10.3L69.1,11.2L65.4,11.4L64.0,10.9L63.6,9.4L65.0,9.1L63.3,7.7L63.3,6.7L65.5,6.6L67.7,7.3L70.5,6.8L64.7,6.4L64.0,5.8L64.2,5.0L65.0,5.1L65.7,4.1L67.2,3.5L67.9,3.9L69.9,3.6L70.3,3.2L68.1,3.6L69.0,2.3L73.8,2.7L74.3,2.5L73.7,2.3L73.7,2.0L75.9,1.6L70.5,1.7L71.3,0.4L73.8,-0.6L75.9,-0.5L78.0,0.9L76.2,-1.0L76.6,-1.7L78.1,-2.1L77.0,-3.0L77.8,-3.6L80.1,-3.6L80.1,-2.8L80.8,-3.4L82.3,-3.7L83.6,-2.3L86.5,-2.8L86.4,-3.8L88.9,-4.8L88.3,-5.3L89.3,-6.0L88.7,-6.3L87.8,-5.9L87.1,-5.5L87.7,-5.1L87.2,-4.6L83.7,-3.1L83.2,-3.1L82.6,-4.2L81.9,-4.1L82.0,-4.8L85.7,-8.5L89.5,-10.5L89.7,-10.9L88.6,-10.5L89.4,-11.9L92.1,-13.1L92.7,-12.5L93.5,-12.6L95.1,-14.0L93.1,-13.1L92.0,-13.7L91.9,-14.2L94.2,-17.4L95.5,-17.7L94.6,-18.6L98.1,-19.1L99.5,-19.8L95.9,-19.4L95.7,-20.6L96.3,-21.8L97.9,-22.8L99.2,-22.8L98.0,-23.4L100.7,-25.0L105.0,-25.2L101.1,-25.6L103.2,-27.4L105.0,-26.8L105.7,-26.1L106.1,-27.1L104.4,-27.6L104.6,-28.6L102.8,-28.0L102.6,-28.9L103.9,-29.8L105.8,-29.7L104.6,-30.4L107.4,-31.4L108.6,-29.3L108.4,-30.0L108.9,-30.5L108.4,-30.9L108.2,-31.9L108.9,-32.3L111.1,-32.1L113.5,-32.6L113.0,-32.9L109.7,-32.8L109.6,-33.6L111.8,-34.2L112.9,-34.8L114.1,-36.6L115.7,-36.9L115.6,-38.0L116.3,-38.8L117.9,-37.9L118.9,-38.0L117.7,-38.9L119.2,-39.4L120.1,-40.5L122.1,-40.7L121.8,-38.5L123.1,-40.9L124.5,-41.7L124.6,-39.7L123.5,-38.0L125.2,-39.3L126.2,-39.1L125.4,-40.2L125.7,-41.5L127.9,-41.3L128.2,-42.0L128.9,-42.1L131.1,-41.0L130.4,-42.4L128.6,-43.4L132.5,-43.6L133.9,-44.2L134.9,-43.8L135.4,-42.6L136.6,-41.9L136.3,-42.6L136.7,-43.5L139.3,-44.9L140.8,-46.2L140.2,-47.0L142.2,-48.1L144.2,-47.1L144.9,-47.5L146.2,-46.9L144.2,-45.3L143.1,-43.3L143.3,-42.7L144.8,-43.4L145.0,-44.0L149.1,-47.5L149.7,-47.6L150.0,-47.1L149.3,-46.0L149.7,-45.8L149.4,-44.5L151.0,-45.1L151.8,-46.5L153.3,-46.8L152.0,-47.7L153.5,-48.5L156.6,-47.9L156.4,-47.0L154.6,-46.1L156.1,-46.0L155.8,-43.5L157.5,-46.6L158.4,-47.2L159.4,-47.2L162.0,-45.9L163.3,-46.2L163.9,-45.7L163.9,-45.3L165.4,-45.1L166.7,-44.4L166.8,-43.6L164.1,-42.7L158.2,-42.9L161.4,-41.9L161.8,-40.5L163.4,-40.3L163.9,-41.2L164.7,-40.3L164.9,-40.8L166.5,-40.7L166.4,-39.2L163.7,-39.8L163.4,-38.6L160.6,-37.8L159.9,-36.6L158.9,-36.1L158.4,-37.1L160.4,-38.8L159.6,-40.0L156.7,-40.9L154.1,-42.4L151.6,-41.4L149.2,-41.5L147.4,-40.1L146.2,-37.7L146.1,-35.9L144.1,-34.9L142.9,-33.6L138.6,-34.8L136.5,-33.9L132.8,-34.3L129.6,-37.6L127.5,-37.3L127.5,-36.3ZM63.4,11.5L62.8,11.5L62.9,10.9L63.3,10.8ZM64.0,16.2L64.0,16.9L63.6,16.8L63.4,16.0L63.6,15.3ZM162.8,-40.8L162.1,-40.6L162.4,-41.4L163.2,-41.0ZM91.3,-15.8L90.6,-15.6L90.6,-16.1L91.3,-16.2ZM77.4,-4.0L76.7,-4.1L78.5,-4.8L78.7,-4.2ZM75.9,-2.0L74.8,-2.5L75.8,-2.8ZM136.9,-46.9L134.5,-45.2L131.9,-45.4L131.2,-45.9L135.0,-46.3ZM145.5,-48.9L147.7,-48.2L146.3,-47.8L144.4,-48.2ZM137.6,-45.3L137.7,-44.8L136.5,-43.9L135.6,-43.8L135.5,-44.3L134.8,-44.3L135.3,-44.9L137.3,-45.7ZM139.2,-45.4L138.0,-45.4L137.9,-46.3L139.5,-45.9ZM98.9,-31.6L99.9,-31.5L99.5,-31.1L97.1,-30.5L96.3,-30.0L96.6,-31.0ZM95.3,-29.2L94.7,-28.9L95.7,-30.4L95.8,-29.7ZM104.2,-35.7L104.9,-34.7L104.3,-33.7L101.5,-33.8L100.9,-34.3L101.6,-34.9L102.6,-34.7L102.9,-35.5L103.5,-35.4L103.5,-36.0ZM122.3,-43.3L123.6,-42.8L123.3,-42.5L122.4,-42.5L121.7,-43.6ZM126.3,-42.5L124.9,-42.7L125.9,-43.4L126.5,-43.2ZM120.3,-42.4L121.6,-41.8L120.6,-40.9L119.3,-40.6L118.4,-39.5L115.8,-39.3L115.5,-39.6L116.2,-40.1L116.9,-40.7L118.0,-40.7L118.0,-41.3L119.5,-42.2L119.8,-43.5ZM93.5,-17.4L93.2,-17.6L93.6,-18.0L94.5,-18.0ZM93.1,-18.3L92.7,-18.2L93.3,-19.1L93.9,-18.7ZM88.4,-11.2L86.4,-11.2L87.5,-11.9ZM113.3,-39.6L115.3,-39.0L115.6,-38.4L115.1,-38.0L115.1,-37.2L113.3,-37.2L111.6,-36.3L110.6,-36.4L111.2,-36.8L111.3,-38.2L112.8,-38.3L112.2,-38.9ZM106.4,-33.4L107.6,-34.1L107.9,-35.1L108.7,-35.3L109.3,-34.8L109.4,-33.8L107.2,-32.4L105.1,-31.9L104.5,-32.2L103.5,-31.7L100.8,-31.1L100.4,-31.5L101.7,-32.4L103.7,-32.6L105.0,-33.7L105.6,-35.2L105.1,-35.5L105.3,-36.3L106.9,-37.7L107.9,-37.6L106.6,-36.1L107.1,-34.4ZM8.1,-47.0L7.6,-47.1L10.6,-48.8L11.9,-49.1L11.9,-48.2ZM67.6,73.5L66.6,73.4L66.2,72.9L66.8,71.1L65.5,70.3L64.5,70.3L63.7,69.2L63.0,69.6L62.6,69.1L62.2,69.5L61.6,69.2L61.1,69.9L58.0,69.3L57.4,68.8L58.6,68.4L60.7,69.2L59.7,68.4L60.4,68.3L59.4,67.1L61.6,64.1L62.7,60.4L63.2,60.5L65.0,59.4L65.7,58.4L67.8,57.6L70.8,57.4L72.3,58.3L71.7,62.1L70.4,62.3L70.6,63.2L71.7,63.7L71.5,64.8L70.5,65.5L70.8,66.2L69.6,66.9L68.2,66.7L67.4,67.2L68.4,69.3L68.1,71.1L67.0,71.8L67.8,72.6ZM60.5,69.7L59.2,70.8L58.0,70.3L57.5,70.5L57.1,69.7L57.4,69.6ZM64.9,57.7L64.4,57.6L65.3,57.4L65.9,57.4ZM63.2,59.6L62.5,59.8L63.2,58.9ZM59.4,67.6L59.9,68.1L58.9,67.8L58.4,67.6ZM70.5,56.5L70.2,56.4L70.8,56.2ZM34.9,167.4L36.6,169.5L37.1,178.1L38.0,181.3L39.5,183.2L38.8,184.0L38.9,185.4L32.3,185.6L31.7,187.0L28.5,188.0L28.5,190.8L29.3,191.6L29.2,192.2L27.9,192.5L26.5,193.8L24.0,195.2L22.1,198.3L19.9,199.0L18.0,199.1L17.4,200.6L15.3,200.3L9.3,205.7L8.8,215.3L6.3,215.5L4.7,216.9L3.8,216.5L3.0,216.8L1.0,215.9L-1.6,216.7L-1.3,218.2L-2.9,221.4L-4.1,221.8L-4.3,222.5L-5.7,229.0L-7.9,231.2L-9.2,234.1L-11.5,235.9L-12.8,244.1L-14.4,246.8L-14.9,249.0L-15.8,249.4L-20.0,249.0L-23.9,249.5L-23.6,246.6L-21.3,242.4L-20.7,239.4L-19.0,235.2L-19.8,236.0L-19.5,234.9L-15.5,229.7L-15.1,225.6L-13.8,221.0L-10.2,217.6L-8.7,212.1L-7.7,210.5L-3.9,209.2L-2.2,208.1L2.0,203.6L3.2,201.7L5.3,197.3L5.4,195.3L4.5,193.7L4.7,189.5L6.6,185.5L7.0,182.6L9.9,178.5L16.3,174.2L18.5,169.3L20.2,163.3L22.7,162.6L22.8,164.3L25.3,166.8L26.5,167.0L29.0,166.3L30.2,166.7L31.9,165.6L32.4,167.2ZM8.7,212.1L9.2,212.1L9.2,222.0L-4.0,222.0L-4.1,237.2L-6.4,238.4L-8.6,241.1L-8.0,250.0L-23.7,250.0L-24.0,253.2L-23.9,249.5L-20.0,249.0L-15.3,249.3L-14.4,247.5L-14.4,246.8L-12.8,244.1L-11.5,235.9L-9.2,234.1L-7.9,231.2L-5.7,229.0L-4.2,222.1L-2.9,221.4L-1.3,218.2L-1.6,216.7L1.0,215.9L3.0,216.8L3.8,216.5L4.7,216.9L6.3,215.5L8.8,215.3ZM120.0,116.8L121.7,119.0L124.6,120.9L123.5,121.4L123.5,122.7L123.0,123.0L122.4,123.1L121.9,122.2L120.4,125.0L120.7,126.0L120.6,126.8L120.0,126.3L117.9,123.3L117.4,123.4L117.0,122.9L117.5,122.2L117.1,120.0L117.8,119.8L118.0,118.6L118.7,117.9L119.4,118.2L119.1,116.8ZM149.6,88.4L150.5,87.7L152.0,87.8L153.3,87.1L156.2,88.6L156.9,89.5L157.2,89.1L158.1,89.3L158.7,90.3L159.5,90.2L159.9,91.4L159.6,93.1L161.2,94.4L161.3,96.2L162.5,97.0L162.7,98.8L163.5,99.5L162.4,99.9L161.8,99.3L161.2,99.6L160.2,99.2L159.8,99.7L159.8,98.9L158.9,99.2L158.8,101.7L157.0,104.0L157.0,104.9L155.9,105.3L155.4,104.4L155.7,104.1L155.4,102.2L156.0,98.2L155.3,96.1L153.5,94.0L151.0,89.1ZM-5.1,289.1L-8.8,284.3L-9.6,281.6L-10.0,281.2L-11.4,281.1L-12.3,279.5L-14.0,278.1L-15.9,277.9L-19.0,279.1L-20.8,278.8L-22.0,283.0L-21.7,278.4L-20.0,270.7L-20.7,264.0L-21.9,261.8L-21.1,260.9L-21.6,261.2L-20.7,256.6L-21.6,254.1L-22.0,253.7L-22.4,254.2L-23.4,251.5L-23.8,251.8L-24.0,253.2L-24.1,252.6L-23.7,250.0L-8.0,250.0L-8.6,241.1L-6.4,238.4L-4.1,237.2L-4.0,230.1L-4.0,222.0L9.2,222.0L9.2,214.3L24.6,228.0L17.5,228.0L21.4,278.6L22.4,280.3L21.8,285.0L7.2,285.0L6.6,284.8L6.6,283.9L6.2,285.3L4.2,285.8L1.2,285.5L0.2,287.1L-2.0,284.2L-3.0,285.4L-3.7,288.7L-4.4,289.5ZM101.6,162.9L100.8,162.8L100.8,162.1ZM-1.5,303.6L-1.6,300.3L-2.5,297.8L-3.0,297.6L-3.3,298.1L-4.2,296.2L-3.8,294.7L-4.1,292.8L-4.9,291.2L-5.1,289.1L-4.4,289.5L-3.7,288.7L-3.0,285.4L-2.0,284.2L0.2,287.1L1.2,285.5L4.2,285.8L6.2,285.3L6.6,283.9L6.6,284.8L7.2,285.0L21.8,285.0L22.4,280.3L21.4,278.6L17.5,228.0L24.6,228.0L48.3,251.4L48.4,253.1L50.1,254.7L50.7,256.0L52.6,256.5L53.3,257.6L56.2,258.9L56.7,261.5L56.1,263.1L56.7,263.9L60.5,263.1L60.6,276.0L60.1,279.9L59.0,283.8L57.7,285.1L57.7,285.9L55.9,285.4L55.7,286.0L50.0,286.3L48.9,286.4L47.5,288.1L46.6,288.3L44.9,288.1L44.6,288.5L42.8,287.6L40.7,287.7L39.6,289.1L35.9,291.3L35.3,293.0L34.0,292.4L33.4,292.6L32.3,294.3L32.0,296.1L30.8,296.0L30.6,298.3L29.7,298.9L28.4,297.8L27.6,297.7L26.5,299.3L26.9,301.2L25.9,302.0L26.1,304.0L25.0,305.5L23.4,306.2L22.7,307.0L22.9,309.7L21.9,311.7L21.8,315.4L20.5,315.7L19.7,316.8L18.9,316.4L18.8,313.7L18.2,314.0L18.2,314.6L17.3,314.1L17.1,315.9L16.1,315.9L15.8,317.1L14.5,316.4L13.9,315.4L13.3,315.4L12.0,317.0L11.9,316.1L10.9,315.1L10.6,312.1L9.3,311.9L10.3,309.8L8.7,308.0L8.7,306.5L7.5,303.3L6.4,303.2L6.5,304.5L5.1,305.7L2.9,304.7L1.2,306.6L0.3,304.8L-1.2,305.9L-2.0,304.8ZM129.5,124.5L132.3,123.9L134.5,126.0L135.2,127.7L134.9,129.9L134.2,130.1L134.1,130.9L131.2,131.2L129.5,132.8L126.2,132.6L125.0,128.9L125.4,126.8L126.1,126.8L126.3,125.6L127.5,125.0L128.4,125.4L128.8,124.7ZM68.1,77.3L68.1,78.2L69.5,79.2L69.5,79.8L69.0,81.3L67.4,81.3L66.8,80.8L67.1,80.1L66.6,78.5L67.5,77.0ZM134.2,51.9L133.9,50.6L134.5,48.8L133.5,47.6L131.5,47.6L128.2,46.4L127.4,41.6L129.8,40.1L131.5,39.6L134.7,39.6L135.3,40.1L136.0,39.8L139.6,40.4L142.5,39.5L143.4,40.8L145.8,41.4L148.2,43.5L149.5,44.0L148.9,45.9L150.1,46.2L149.5,47.2L148.3,47.2L147.8,48.0L146.5,48.5L145.3,52.0L146.1,52.4L145.8,53.2L145.2,53.0L145.0,52.2L143.3,53.2L142.6,53.1L142.2,54.2L140.4,54.6L139.9,54.3L137.4,54.5L136.6,52.8L134.8,51.7ZM81.8,95.7L81.4,95.4L81.7,94.6ZM81.6,196.6L83.1,195.7L84.4,193.3L83.9,189.2L84.6,187.9L85.4,187.6L86.8,185.5L89.5,183.5L89.5,178.9L92.6,180.8L94.4,181.2L96.5,180.5L100.0,181.7L101.4,182.9L104.1,183.7L104.8,185.0L105.3,188.1L106.2,189.4L107.8,190.4L110.5,190.7L114.6,192.4L116.1,193.3L118.0,195.5L119.8,196.4L122.1,195.1L123.7,192.2L123.8,190.8L123.0,187.1L123.7,184.7L125.7,182.5L130.1,180.3L131.9,180.5L135.5,182.3L135.6,184.0L136.3,184.7L138.3,185.0L139.7,185.9L142.6,186.1L143.2,186.7L143.7,188.1L142.5,190.0L143.0,193.3L141.9,196.8L142.4,199.1L143.0,202.9L143.0,258.0L139.1,258.0L139.1,261.0L107.3,237.3L100.2,242.3L97.3,238.9L91.3,236.9L89.5,232.1L86.2,230.7L85.2,231.1L84.8,230.8L84.0,229.3L83.5,226.0L81.2,221.1L81.5,220.0L82.9,218.7L83.1,216.9L82.5,214.0L83.2,211.3L82.8,203.3L82.1,200.2L80.7,197.3ZM186.8,170.2L188.4,170.1L188.2,171.0L188.9,171.4L189.2,172.7L188.0,174.4L188.3,175.0L187.2,175.0L186.6,176.0L186.9,176.6L185.0,178.5L184.8,179.3L183.3,179.5L185.5,172.5ZM149.5,44.0L148.2,43.5L145.8,41.4L143.4,40.8L142.5,39.5L139.6,40.4L131.5,39.6L127.4,41.6L127.5,37.1L128.6,35.9L129.0,34.1L130.1,32.6L133.4,31.7L135.7,34.1L136.3,35.5L137.7,36.2L138.9,35.9L140.7,34.5L140.4,30.8L142.8,30.0L144.5,29.8L147.1,31.0L149.2,32.8L150.9,32.3L152.9,32.9L154.4,34.2L153.6,36.9L154.5,36.9L155.5,38.7L155.6,41.1L154.6,41.5L153.4,43.2L151.3,43.0ZM124.6,121.0L125.7,119.8L125.7,118.8L126.4,118.4L128.8,121.0L128.8,121.5L130.2,122.0L129.4,124.3L128.4,125.4L127.5,125.0L126.3,125.6L126.1,126.8L125.5,126.8L125.2,124.7L123.5,122.7L123.5,121.4ZM186.0,181.6L188.3,183.7L190.1,184.1L197.9,177.8L199.0,184.2L199.8,183.9L199.9,184.5L198.6,186.0L190.7,189.1L194.7,195.0L193.4,196.0L192.8,197.9L189.9,198.8L188.8,201.0L187.1,202.8L182.7,201.9L183.4,195.5L184.6,191.2L185.2,182.2ZM71.6,102.4L72.1,102.7L73.7,102.1L74.7,102.5L76.0,101.0L75.9,100.4L77.2,99.3L77.4,100.5L78.8,101.5L78.6,102.0L79.6,102.9L79.5,101.9L80.7,99.0L81.2,99.1L81.6,100.2L83.2,99.8L83.8,100.6L83.8,98.4L85.2,98.7L85.3,96.8L87.4,97.3L88.4,96.1L92.1,95.5L92.1,96.4L93.0,97.8L98.2,98.9L96.9,100.4L97.9,100.9L97.4,102.1L97.8,102.1L97.7,103.1L98.9,104.3L98.3,104.5L98.5,104.2L97.9,103.4L97.3,103.7L96.2,103.4L95.5,104.2L92.5,105.3L92.3,106.6L93.5,108.2L93.0,109.2L92.6,109.0L92.7,111.4L93.0,112.7L94.2,114.0L97.7,116.6L99.4,121.9L101.5,124.5L104.0,126.4L108.0,126.6L106.9,128.9L115.1,134.1L116.6,135.8L117.2,137.4L116.7,139.1L115.6,138.4L114.8,136.3L112.9,136.0L112.0,135.0L111.0,135.3L109.4,139.5L111.8,141.7L112.0,144.0L109.8,145.2L109.5,147.5L108.5,148.5L107.6,150.3L106.2,150.4L105.9,148.9L106.6,148.2L107.1,146.0L108.1,145.4L108.2,144.4L106.1,138.1L103.2,136.6L103.2,135.2L102.4,134.0L100.7,134.4L101.2,133.6L100.6,133.1L99.6,133.1L98.3,130.6L95.8,130.5L93.9,129.2L90.0,124.3L88.6,123.5L87.9,123.5L88.1,122.8L86.3,120.4L85.5,120.2L85.6,118.8L84.5,114.9L83.7,113.9L80.7,112.1L78.6,111.5L77.7,111.9L75.6,114.7L73.5,115.4L74.1,113.0L72.8,113.2L71.2,112.0L70.9,110.9L71.7,109.7L71.5,109.0L70.5,108.5L70.1,107.6L71.9,106.6L72.1,105.7L70.7,103.6ZM85.1,120.9L85.2,121.7L84.3,121.6L84.0,121.1ZM105.7,148.7L103.8,153.2L104.5,155.7L103.8,157.9L101.6,157.3L100.0,155.4L98.6,155.2L94.9,152.5L94.0,152.4L93.2,151.1L94.4,148.9L95.0,149.8L96.6,148.9L98.6,150.1L101.4,149.7L102.5,149.0L103.8,149.1L105.4,148.3L105.9,148.4ZM82.0,132.7L82.7,135.0L82.1,136.4L82.3,137.9L81.8,143.0L79.7,142.6L79.4,144.2L78.1,144.4L77.2,142.8L77.1,141.1L77.7,139.4L77.1,138.1L77.4,136.2L76.3,134.1L76.4,132.5L77.8,132.9L80.4,130.5L82.0,131.9ZM77.4,143.6L77.2,144.2L77.0,143.4ZM76.7,131.8L76.4,132.0L76.6,131.4L76.9,131.4ZM186.2,177.5L186.4,180.3L186.0,181.6L185.2,182.2L185.1,183.6L183.7,182.8L182.7,185.0L182.7,187.1L183.7,187.5L182.7,188.4L182.4,189.8L184.5,189.1L184.6,191.2L182.5,201.1L179.9,190.8L181.0,188.8L183.3,179.5L184.5,179.5L185.0,178.5ZM180.8,188.5L180.3,190.2L179.9,190.8L179.7,190.1ZM185.1,183.6L185.1,187.4L184.7,189.1L182.4,189.8L182.7,188.4L183.7,187.3L182.7,187.0L183.1,183.2L183.7,182.8ZM4.2,54.5L2.9,54.1L4.0,54.0ZM15.0,47.4L14.4,47.8L13.7,49.4L12.3,49.8L12.9,50.4L11.4,51.3L12.5,52.7L13.5,53.1L14.6,53.2L15.9,51.6L17.3,53.0L17.3,53.6L19.2,53.7L18.5,54.4L19.3,56.5L19.8,60.4L19.0,62.7L18.0,63.9L18.6,64.5L16.3,65.0L16.0,64.5L15.9,65.0L13.8,65.4L11.7,67.0L10.3,66.7L10.5,67.6L8.7,68.5L5.0,69.2L4.6,69.1L5.9,67.9L3.5,68.4L5.6,66.8L3.6,67.4L2.6,67.2L2.5,66.8L4.3,65.3L2.5,65.0L3.1,64.4L4.9,64.5L4.3,63.6L5.4,62.7L8.8,61.9L8.0,61.5L7.3,62.2L5.7,62.1L4.3,62.6L6.1,61.1L6.8,59.4L8.2,58.8L5.9,58.6L5.5,58.0L4.5,57.9L4.8,57.6L3.6,57.5L3.5,56.7L5.1,56.4L4.3,56.1L4.4,55.6L5.7,55.2L5.7,54.7L4.3,54.8L4.5,53.4L4.2,53.5L4.1,52.9L3.6,53.1L3.8,52.5L5.7,52.1L7.4,52.7L7.9,52.3L9.8,52.6L9.4,51.9L11.0,51.0L11.4,50.2L10.1,50.3L8.9,49.9L10.4,48.7L10.8,47.1L12.9,46.9L13.3,46.5L13.7,47.3L13.3,48.2L14.0,47.7L13.8,46.5L14.7,46.2L14.7,45.8L16.1,46.6ZM212.1,155.3L213.8,153.8L217.4,154.6L219.1,154.2L219.8,156.1L221.1,154.9L221.6,155.0L224.1,161.9L225.7,163.1L227.7,163.4L226.6,164.4L227.1,167.2L225.3,169.2L225.2,170.6L224.6,170.5L224.4,171.5L224.8,172.7L224.2,174.2L226.7,177.5L227.2,178.6L227.1,180.3L228.1,180.4L231.1,183.2L231.9,183.3L232.6,185.1L233.9,187.2L233.3,192.0L234.6,192.1L234.6,195.2L235.9,196.3L236.7,198.2L235.1,197.8L234.5,198.1L233.3,197.4L231.5,197.8L229.4,202.4L228.7,203.4L228.0,203.6L221.4,202.8L211.0,191.5L204.2,186.4L199.4,185.3L199.9,184.5L199.8,183.9L199.0,184.2L197.9,177.8L206.7,171.4L207.5,169.4L208.1,164.2L207.9,159.7L208.4,158.9L209.9,158.4ZM-18.1,-19.4L-14.3,-20.3L-15.6,-19.7L-16.4,-18.6L-14.7,-18.1L-15.2,-16.6L-13.5,-16.7L-13.2,-16.1L-13.8,-15.5L-12.6,-15.9L-10.4,-15.1L-11.2,-14.1L-10.5,-13.7L-11.0,-13.2L-10.2,-12.7L-10.3,-12.2L-11.3,-12.0L-11.3,-11.2L-12.1,-10.5L-13.5,-10.5L-13.6,-9.2L-14.4,-8.5L-19.2,-7.1L-22.4,-5.2L-27.1,-4.3L-27.6,-3.2L-28.8,-3.2L-29.0,-2.7L-30.4,-2.4L-36.6,-3.3L-37.7,-4.1L-37.4,-4.8L-38.4,-4.4L-40.4,-5.7L-41.5,-5.2L-46.3,-5.0L-46.5,-6.5L-45.8,-5.9L-44.5,-6.2L-42.4,-8.1L-41.6,-8.3L-43.9,-7.9L-43.3,-8.3L-43.7,-8.5L-43.5,-9.1L-42.1,-9.8L-44.2,-9.2L-45.0,-9.7L-44.7,-10.4L-45.6,-10.8L-49.1,-10.9L-51.0,-10.4L-51.8,-11.2L-46.9,-12.3L-43.3,-12.3L-42.9,-13.1L-43.9,-12.8L-45.3,-13.0L-45.6,-13.4L-43.1,-14.5L-43.8,-15.0L-47.3,-15.5L-51.3,-14.4L-53.6,-15.2L-52.7,-15.7L-51.1,-15.2L-52.1,-16.7L-50.2,-16.1L-48.8,-16.5L-51.0,-17.1L-49.8,-17.3L-50.8,-18.1L-50.6,-18.4L-49.4,-18.1L-50.1,-18.7L-49.5,-19.1L-48.0,-18.5L-47.8,-17.9L-46.4,-18.2L-46.2,-17.2L-45.5,-17.4L-45.5,-18.4L-47.5,-19.3L-45.7,-19.6L-48.2,-20.0L-47.3,-20.6L-45.4,-20.6L-41.4,-18.2L-41.8,-17.8L-41.0,-17.4L-41.2,-16.5L-42.4,-16.3L-41.2,-15.5L-41.5,-14.8L-40.7,-14.5L-40.3,-13.6L-39.0,-15.8L-37.6,-15.4L-37.2,-18.2L-36.6,-18.6L-33.8,-16.6L-33.3,-18.5L-31.2,-19.1L-28.4,-16.4L-28.2,-17.0L-29.0,-18.9L-27.5,-18.9L-26.0,-17.8L-24.5,-19.2L-23.2,-18.8L-21.8,-19.2L-22.0,-20.7L-20.9,-21.1L-19.8,-21.1ZM131.7,87.6L132.2,87.6L133.5,89.2L134.3,89.3L134.7,90.3L133.6,91.4L132.4,91.6L131.2,93.0L127.7,100.3L126.3,100.5L125.7,101.2L121.4,101.1L120.4,102.0L117.9,102.6L116.7,103.5L114.5,103.3L112.9,102.3L109.4,99.0L108.5,96.9L107.7,96.8L109.1,96.0L109.1,93.6L110.0,92.8L109.0,92.0L109.5,91.5L110.5,91.9L111.6,91.8L111.5,90.8L112.0,89.9L114.3,91.4L118.2,91.3L118.4,90.0L118.9,89.7L121.1,89.3L121.8,88.7L122.8,89.2L124.6,88.2L125.2,86.8L125.8,86.7L129.0,86.7L130.3,88.0ZM125.7,147.7L126.4,149.5L125.3,149.4L125.1,148.7L124.6,148.9L124.9,148.0L125.3,148.0L125.5,147.2ZM126.8,151.2L127.2,151.8L126.5,152.0L125.8,151.1L126.0,150.4ZM126.0,146.3L125.5,146.5L125.5,146.0L126.0,144.9ZM123.6,141.4L123.6,141.7L122.8,141.2L121.9,139.6L122.1,139.2L122.8,139.2L123.0,141.0ZM136.8,144.2L137.3,145.1L139.7,146.1L140.2,148.7L141.5,149.3L141.1,150.2L140.0,149.3L139.3,147.7L137.8,147.3L137.6,146.7L135.7,144.9L134.7,144.9L136.2,143.8ZM138.3,143.3L137.8,143.4L137.5,142.7ZM138.7,143.1L138.7,142.6L139.0,142.4ZM141.8,145.1L141.3,145.3L141.0,144.7L141.1,144.1ZM142.2,134.3L141.7,134.5L141.2,134.1L141.6,133.2L142.2,133.6ZM135.4,160.9L134.9,160.9L134.8,160.1L135.0,159.7ZM151.8,165.2L151.4,164.4L151.7,163.3ZM151.2,156.2L150.8,156.3L150.6,155.5L150.9,155.7ZM150.9,157.6L152.1,156.6L152.5,156.8ZM145.3,156.2L144.9,156.4L144.6,155.6L145.2,154.8ZM144.2,155.6L143.7,156.0L143.7,155.4L144.2,155.2ZM145.0,159.6L144.9,160.0L144.8,159.6L144.8,159.2ZM150.4,151.1L151.3,151.7L150.5,152.1L149.4,151.7ZM147.2,152.8L147.4,152.2L147.9,152.2L148.5,152.0L148.3,152.3ZM146.5,157.3L146.1,157.3L146.5,156.9L147.4,156.6ZM148.9,158.5L148.4,158.9L148.2,158.4ZM140.6,152.5L140.3,152.8L140.4,151.9ZM141.3,157.4L141.3,157.9L140.4,158.1L140.5,157.7ZM143.1,151.4L143.0,151.8L141.9,150.2L143.0,150.6ZM144.1,152.4L143.7,152.7L143.2,152.1ZM147.5,148.7L147.1,149.0L146.7,148.5L147.1,147.9L146.5,146.6L147.7,146.8ZM148.7,142.0L149.4,143.3L149.4,143.8L149.0,143.6L149.3,144.0L147.5,143.5L148.2,142.8L147.4,143.4L146.5,142.9L146.7,142.3L147.8,141.8ZM145.9,135.4L144.9,135.1L145.4,134.9ZM144.9,138.1L144.5,139.2L144.1,138.6L143.9,139.0L143.4,138.9L143.4,138.0L144.3,138.3L144.9,137.8ZM144.7,153.5L144.3,153.5L144.5,152.9L145.0,153.2ZM154.4,162.4L153.9,162.3L154.3,160.3L156.0,159.4L155.4,161.6ZM138.6,164.8L139.8,164.4L139.6,165.0L140.6,165.8L142.0,165.5L145.0,166.2L146.0,165.9L146.3,167.3L148.2,166.1L147.8,167.9L142.3,168.4L142.0,167.5L141.0,167.0L137.5,166.5L137.4,164.8L137.8,164.9L138.1,164.1ZM148.4,127.7L149.4,128.4L149.6,129.6L148.4,130.6L148.5,132.0L147.5,133.5L143.5,132.0L142.3,132.9L141.0,132.3L139.5,133.7L138.2,133.5L138.6,135.5L140.0,136.0L140.5,137.1L138.8,135.8L138.1,136.0L139.0,137.3L138.9,138.2L137.8,136.7L136.9,136.4L136.9,137.3L137.9,138.2L136.7,138.1L136.4,136.7L134.8,135.6L134.9,134.5L133.7,135.0L133.6,137.8L136.5,143.0L135.8,143.4L135.8,142.5L134.9,142.2L134.7,143.0L135.0,143.8L135.4,143.8L133.5,144.8L136.2,146.0L137.9,147.9L139.0,148.4L139.4,151.7L139.0,151.9L137.2,149.8L135.3,150.7L136.0,152.3L136.7,152.5L137.1,153.4L135.8,154.0L135.2,153.1L134.3,152.5L134.1,152.7L135.8,159.3L134.1,157.2L133.6,157.3L133.1,159.3L132.1,156.7L131.5,155.8L131.0,156.1L130.8,157.6L130.2,156.8L129.5,155.5L129.9,153.7L127.8,150.9L128.8,148.8L129.8,148.9L130.5,148.0L131.0,148.1L134.9,150.3L134.7,149.7L135.9,149.2L132.9,147.4L132.5,147.9L131.1,147.5L129.1,148.1L128.5,147.1L127.9,147.9L126.3,144.8L126.8,144.4L127.7,144.6L127.7,143.8L126.3,143.9L124.4,142.0L123.3,139.7L124.2,139.9L124.8,139.2L124.5,138.1L125.9,137.3L126.5,135.3L127.3,134.3L127.1,132.9L129.5,132.8L131.2,131.2L133.2,131.3L134.1,130.9L134.3,130.0L137.7,129.7L139.4,128.8L141.2,128.7L142.2,129.9L143.1,129.8L144.1,130.5L146.8,130.1L147.6,129.7L147.4,127.8ZM81.6,92.9L80.2,92.0L79.0,92.1L77.8,91.3L77.1,91.9L77.8,92.2L77.2,92.4L73.8,92.4L74.0,89.1L74.9,86.2L76.1,84.2L73.4,83.1L70.5,83.0L69.7,81.6L69.0,81.3L69.5,79.2L68.6,78.8L68.0,77.4L69.0,76.1L68.9,75.3L68.3,74.9L68.5,74.4L67.6,73.5L67.8,72.6L67.0,71.8L68.1,71.1L68.4,69.3L67.4,67.2L70.5,66.5L70.5,65.5L71.6,64.4L71.6,63.5L70.3,62.8L70.6,62.2L71.6,62.2L72.3,60.2L72.3,58.3L71.8,57.7L72.4,56.1L75.6,55.9L76.2,56.7L76.0,57.2L76.5,57.3L76.9,56.4L77.5,56.9L77.5,57.6L78.0,54.8L80.3,54.9L82.6,56.7L80.8,54.8L79.4,54.4L79.1,52.4L78.1,52.2L78.1,51.6L79.3,51.2L79.3,50.8L78.2,48.6L80.5,49.2L82.0,48.9L83.6,50.0L83.0,51.2L84.1,51.1L84.3,51.5L84.9,51.4L86.4,52.1L87.5,51.7L87.7,52.3L86.7,53.5L86.9,53.9L89.1,54.3L90.6,53.1L91.9,53.0L93.7,51.2L95.5,51.5L97.2,53.2L98.3,53.1L98.9,54.9L100.4,55.6L101.0,58.8L99.9,60.7L101.9,62.8L101.6,63.8L102.4,65.5L101.8,67.0L102.3,68.9L103.0,69.2L103.4,70.5L102.4,73.1L101.8,72.9L101.6,72.0L100.7,71.8L100.9,72.6L97.6,73.8L95.2,75.6L93.6,75.6L92.5,76.9L91.8,76.2L92.3,77.4L93.5,78.6L93.0,79.6L94.1,81.5L98.7,85.4L98.3,86.7L97.4,86.5L96.9,87.8L94.5,89.4L95.2,90.7L95.0,91.7L95.6,92.1L95.5,93.1L94.2,92.0L93.4,92.2L92.3,91.7L92.2,92.3L90.3,92.5L87.6,93.6L87.0,92.9L85.2,92.7L85.0,93.8L84.2,94.3L84.3,93.8L83.4,93.0L82.5,92.5ZM98.2,51.7L98.2,52.3L97.3,52.0L96.9,52.5L96.1,51.8L96.3,50.5L97.1,49.8L98.0,50.6L97.7,51.2ZM100.2,54.3L100.2,54.8L99.6,54.8L99.0,54.4L98.7,53.2ZM88.6,51.5L88.0,51.5L87.6,50.9L88.4,51.0ZM76.8,49.3L77.1,48.1L77.0,48.6L78.0,48.6ZM216.4,131.4L213.7,128.5L213.1,128.5L212.6,129.4L210.4,129.0L210.0,129.4L208.8,128.9L209.5,127.8L209.8,126.2L208.7,122.0L206.1,119.6L204.6,119.1L202.7,117.5L203.4,116.6L205.3,116.8L209.0,118.7L213.7,119.0L217.8,121.5L217.7,122.4L218.5,122.6L220.7,121.5L221.7,122.3L222.1,121.5L224.0,122.8L225.4,123.0L225.2,124.8L228.3,126.7L227.4,127.6L227.4,128.3L229.2,130.5L228.4,131.6L227.3,130.8L225.8,130.7L225.5,130.0L223.8,129.3L222.0,130.7ZM81.4,121.2L81.7,125.2L80.3,129.7L78.7,128.5L79.1,127.8L78.4,127.4L78.5,126.4L78.0,126.2L78.3,125.7L77.8,123.9L78.4,122.7L80.1,121.6L80.7,121.8L81.0,119.9ZM74.0,92.4L72.9,93.4L71.4,93.3L71.2,93.6L71.6,94.1L69.4,96.3L69.2,97.5L67.9,99.2L68.0,100.3L67.5,100.7L67.6,101.1L68.4,100.8L68.5,100.0L69.3,99.4L70.7,99.6L70.7,101.0L71.6,102.4L70.7,103.6L72.2,105.6L71.9,106.6L70.1,107.3L71.7,109.7L70.9,110.9L71.1,111.6L72.2,112.8L73.0,113.2L74.1,113.0L74.3,113.5L73.5,115.4L72.3,116.0L69.6,119.0L68.0,119.6L66.8,119.4L65.2,118.6L64.9,117.9L63.9,117.8L63.8,117.3L62.5,117.8L60.5,117.1L59.8,116.4L59.3,116.6L56.7,118.8L55.9,120.5L56.5,123.4L55.2,123.3L54.3,124.0L52.5,123.5L51.6,123.8L50.5,123.0L50.5,122.4L49.4,122.4L49.1,121.9L46.8,121.0L45.8,121.9L43.6,121.9L42.5,121.0L41.4,121.2L40.7,120.4L38.6,119.4L37.9,119.7L38.1,118.6L36.9,118.2L36.6,117.6L37.8,116.6L38.8,110.6L39.5,109.9L39.1,109.4L38.8,110.0L39.4,104.8L40.4,105.7L41.2,107.5L40.6,105.2L39.0,103.7L38.9,103.4L39.6,103.6L39.2,100.1L36.6,98.9L35.4,96.8L35.7,95.8L35.0,95.0L35.2,94.7L35.7,94.4L36.8,94.7L35.9,94.1L33.8,94.1L34.1,93.2L32.7,92.9L32.7,92.2L31.9,92.4L28.2,91.0L26.6,91.1L26.1,90.2L25.1,89.8L26.5,89.0L25.5,88.3L26.9,88.2L25.0,87.8L24.8,87.3L25.7,86.3L30.9,85.0L31.8,85.3L33.0,86.8L34.0,86.1L35.5,86.1L35.8,86.5L36.2,85.8L36.5,86.2L38.3,86.1L37.5,85.2L37.4,82.8L36.4,79.9L38.7,79.9L39.2,81.7L43.1,82.2L45.4,81.3L44.2,80.9L44.5,79.8L49.3,77.5L50.1,76.5L50.1,73.1L51.3,72.1L53.8,71.4L54.7,73.5L56.1,73.3L56.7,74.8L58.0,75.1L58.4,76.2L59.4,76.0L60.3,76.5L60.3,78.2L61.8,78.2L62.9,77.1L63.1,79.3L64.7,79.9L65.6,80.9L66.8,80.8L67.6,81.3L68.6,81.0L69.7,81.6L70.5,83.0L73.4,83.1L76.1,84.2L74.9,86.2L74.0,89.1L73.7,92.0ZM39.0,102.6L38.9,103.1L38.3,102.2L38.2,101.7ZM123.2,15.9L124.3,16.4L123.4,16.9L123.4,17.4L122.5,17.5L122.0,16.4L122.6,16.7L122.5,15.7ZM121.9,16.9L121.6,17.2L121.5,16.5ZM139.8,-16.8L138.8,-18.9L138.0,-19.5L138.0,-20.9L139.1,-22.9L137.7,-24.8L138.1,-26.5L137.0,-26.8L137.2,-29.3L137.7,-29.7L134.6,-32.2L131.2,-33.1L125.7,-36.2L127.5,-36.3L127.5,-37.3L129.6,-37.6L132.8,-34.3L136.5,-33.9L138.6,-34.8L142.9,-33.6L144.1,-34.9L146.1,-35.9L146.2,-37.7L147.4,-40.1L149.2,-41.5L151.6,-41.4L154.6,-42.4L156.7,-40.9L159.6,-40.0L160.4,-38.8L158.4,-37.1L158.9,-36.1L156.7,-35.4L158.1,-34.9L156.9,-32.9L157.8,-31.1L160.4,-30.4L163.0,-28.0L162.8,-27.3L159.3,-23.4L162.6,-18.5L163.4,-16.7L163.4,-16.1L161.9,-15.7L162.3,-15.4L161.4,-13.5L162.3,-12.9L161.4,-11.8L162.1,-10.8L163.4,-10.4L163.0,-9.1L163.4,-8.2L164.9,-7.4L165.1,-6.5L164.7,-5.7L163.0,-4.4L167.7,-1.2L169.1,0.7L167.7,3.1L160.0,10.3L153.7,15.0L152.9,15.2L151.9,14.7L149.2,15.5L149.4,14.3L148.6,15.5L146.9,15.2L147.2,16.0L146.1,16.4L145.7,16.0L140.9,17.9L137.0,18.1L135.0,19.0L136.0,17.9L134.6,16.7L134.4,17.5L133.0,17.8L133.5,15.7L130.6,15.0L130.4,14.4L129.7,14.8L129.0,14.4L128.7,12.2L129.5,9.1L129.2,8.7L129.6,8.5L128.2,6.1L128.6,4.3L127.6,2.3L129.1,-0.2L129.8,-0.2L129.4,-1.2L132.5,-1.9L132.2,-2.6L133.3,-3.9L137.6,-6.2L141.4,-10.8L142.9,-11.3L144.3,-11.2L144.5,-14.9L141.8,-16.0L141.6,-17.2L140.8,-16.7ZM131.2,16.0L130.5,15.7L130.5,15.3ZM128.1,-1.4L128.7,-1.6L128.7,-1.2L128.2,-0.9L127.6,-1.7ZM131.9,15.8L132.9,16.2L132.4,16.4L132.6,17.0L131.5,16.3ZM129.0,14.8L128.2,14.8L128.3,14.2ZM130.5,17.2L130.0,17.3L130.0,17.0L130.7,16.8ZM129.7,17.4L129.2,17.1L129.7,17.0ZM142.5,-11.9L141.5,-11.9L141.7,-12.4L143.0,-12.3ZM152.5,32.8L150.9,32.3L148.9,32.7L147.1,31.0L144.2,29.7L140.4,30.8L141.3,27.9L140.5,27.7L139.6,28.4L138.2,27.8L137.2,26.0L137.9,25.3L137.2,25.3L137.1,23.6L137.1,22.8L139.5,22.2L139.4,21.8L140.7,21.2L144.9,20.9L145.2,20.2L149.6,20.7L151.0,21.3L154.6,21.5L155.1,21.1L155.7,21.8L154.6,22.3L152.8,25.3L153.1,28.7L154.2,30.8L153.2,31.2ZM133.7,26.3L135.0,26.4L136.5,27.3L135.7,27.4L134.1,28.6L132.7,28.7L131.8,30.2L131.1,30.2L131.9,29.1L130.7,28.4L131.1,27.7L130.7,27.0L132.3,27.0ZM134.9,25.0L133.4,25.9L132.8,24.8L131.4,24.3L133.0,24.2L133.8,23.5L134.8,24.1L135.2,25.0ZM136.5,26.7L135.4,26.3L135.6,26.0L136.5,26.1ZM190.3,246.0L168.7,246.0L168.9,245.1L168.6,244.8L167.8,246.0L143.0,246.0L143.0,202.9L141.9,196.8L143.0,193.9L142.5,190.0L143.7,188.1L144.0,188.8L144.6,188.9L146.7,188.3L152.1,189.7L153.2,190.7L157.1,191.7L159.3,193.0L160.7,192.4L162.7,190.6L163.9,190.4L164.6,189.3L166.7,188.6L165.2,189.5L166.3,189.4L167.0,189.2L167.3,188.4L169.1,189.3L170.5,188.8L171.5,190.0L170.5,189.1L170.0,190.2L171.0,190.7L171.4,191.4L172.1,190.8L172.0,190.2L173.4,191.6L175.4,191.0L175.7,191.5L177.6,191.2L179.7,190.1L182.5,201.1L181.8,202.4L180.5,209.9L179.8,211.4L178.0,209.7L175.9,206.6L175.4,204.1L173.8,200.9L173.2,198.2L172.4,200.2L173.3,202.1L173.5,204.0L174.5,206.6L177.1,210.6L177.1,212.4L178.3,214.9L178.7,218.1L183.7,231.1L186.0,234.4L185.0,234.5L184.9,235.3L185.7,240.3L186.5,241.6L187.8,242.2ZM-75.4,-123.4L-58.8,-121.6L-83.5,-120.5L-83.6,-119.9L-75.4,-120.7L-63.6,-120.4L-56.2,-121.0L-53.6,-119.3L-42.5,-118.1L-41.8,-117.6L-42.2,-117.3L-48.2,-115.9L-73.9,-115.0L-75.1,-114.3L-74.8,-113.7L-73.7,-113.6L-66.9,-114.3L-56.3,-114.0L-54.0,-113.3L-52.8,-112.2L-49.7,-112.6L-48.1,-114.1L-41.1,-114.4L-40.3,-113.6L-40.7,-111.6L-42.6,-110.1L-48.0,-107.6L-48.5,-107.1L-48.2,-106.7L-47.0,-107.5L-39.3,-109.7L-34.3,-111.8L-32.7,-111.8L-32.4,-111.1L-25.7,-110.4L-20.4,-112.7L-12.9,-112.9L-5.7,-112.1L-1.7,-110.7L-8.5,-108.5L-13.7,-108.0L-12.8,-107.2L-13.9,-106.6L-22.9,-105.4L-19.6,-104.6L-21.8,-103.5L-28.1,-103.0L-33.5,-103.5L-36.4,-102.1L-36.5,-101.1L-36.1,-100.6L-33.2,-100.4L-32.9,-100.1L-33.5,-98.1L-32.4,-98.0L-31.8,-97.1L-34.7,-96.4L-36.0,-95.1L-38.2,-94.8L-40.3,-94.0L-39.6,-93.3L-42.7,-88.7L-42.7,-88.3L-42.1,-87.9L-41.3,-88.2L-39.2,-89.5L-33.8,-88.3L-33.0,-87.7L-33.7,-87.4L-36.4,-88.1L-38.5,-87.7L-37.6,-86.7L-33.0,-85.3L-29.6,-85.6L-29.0,-84.8L-29.2,-83.5L-30.2,-82.6L-36.0,-83.6L-39.5,-83.3L-42.2,-82.1L-44.5,-82.8L-46.2,-82.2L-43.2,-81.4L-42.8,-80.4L-41.7,-79.6L-39.3,-79.8L-36.2,-79.3L-35.2,-78.7L-35.6,-78.0L-33.8,-76.5L-33.3,-74.3L-33.9,-73.1L-35.0,-72.9L-36.6,-73.8L-37.7,-73.9L-42.3,-72.1L-44.7,-72.7L-42.5,-71.8L-39.7,-72.4L-38.9,-70.8L-39.9,-69.9L-39.2,-69.8L-38.2,-70.4L-37.4,-71.9L-35.7,-71.9L-33.9,-69.7L-32.9,-69.3L-32.8,-68.4L-33.3,-67.7L-36.8,-67.7L-36.7,-67.2L-38.4,-66.8L-40.3,-66.7L-43.6,-67.5L-42.8,-68.9L-43.5,-69.4L-43.6,-68.3L-45.0,-67.8L-44.5,-67.2L-45.1,-66.4L-44.3,-65.9L-37.2,-65.1L-37.8,-63.0L-41.9,-62.6L-45.1,-61.6L-48.6,-62.4L-50.7,-63.3L-52.3,-64.6L-54.4,-63.6L-57.7,-65.1L-54.8,-63.1L-59.9,-61.5L-64.7,-62.6L-61.8,-61.5L-62.5,-61.0L-65.8,-60.8L-65.0,-60.4L-57.2,-61.7L-55.9,-62.4L-52.2,-62.5L-43.9,-59.5L-44.0,-56.4L-44.8,-56.1L-44.9,-54.7L-52.0,-57.0L-53.1,-58.1L-54.2,-60.2L-62.3,-58.3L-61.2,-58.0L-54.9,-59.4L-54.3,-57.5L-54.5,-57.0L-56.5,-56.4L-56.1,-56.1L-54.0,-56.5L-45.7,-53.5L-45.2,-52.6L-43.6,-52.5L-45.7,-51.0L-45.6,-50.3L-45.4,-49.5L-44.9,-50.6L-42.7,-50.9L-41.8,-45.2L-43.5,-44.7L-45.3,-44.8L-45.5,-47.2L-46.5,-44.6L-49.0,-44.7L-51.6,-45.9L-52.7,-48.3L-53.9,-49.3L-59.2,-51.4L-63.7,-51.8L-64.3,-51.6L-64.0,-51.2L-59.0,-50.9L-58.4,-50.2L-58.6,-49.1L-62.5,-47.7L-69.2,-48.0L-67.6,-47.4L-67.9,-46.2L-71.8,-44.7L-69.7,-44.9L-67.6,-44.4L-62.1,-44.8L-61.7,-44.4L-61.9,-44.1L-65.8,-42.7L-66.1,-42.2L-65.1,-41.9L-63.7,-43.2L-57.8,-44.1L-50.4,-42.8L-44.9,-42.8L-44.6,-42.6L-44.9,-42.2L-47.8,-41.4L-47.9,-40.8L-51.2,-40.4L-50.6,-39.5L-52.9,-39.5L-52.9,-38.6L-56.4,-37.6L-56.0,-37.0L-57.8,-36.3L-58.4,-35.3L-61.6,-34.1L-72.6,-31.8L-75.0,-31.9L-76.3,-31.2L-78.4,-31.5L-78.0,-30.7L-79.4,-30.4L-81.2,-30.8L-84.8,-32.6L-84.2,-31.5L-84.9,-31.3L-84.1,-29.9L-87.9,-27.9L-89.5,-26.3L-91.8,-22.4L-93.1,-21.8L-94.0,-20.6L-96.2,-19.5L-98.9,-20.6L-97.9,-18.8L-100.9,-17.0L-100.9,-17.8L-101.5,-18.0L-102.0,-16.7L-103.1,-16.7L-103.6,-17.2L-104.6,-16.7L-105.0,-15.9L-106.4,-15.6L-107.3,-16.3L-106.5,-17.1L-106.5,-17.9L-104.5,-19.8L-108.0,-20.3L-106.4,-19.6L-107.9,-17.4L-109.4,-18.1L-108.2,-17.0L-108.2,-16.3L-109.9,-15.7L-116.0,-15.3L-113.6,-14.0L-113.9,-13.7L-116.3,-12.3L-117.9,-12.7L-119.6,-12.6L-119.6,-12.2L-119.1,-11.2L-117.9,-11.5L-116.0,-8.9L-118.1,-8.0L-118.4,-7.3L-121.6,-7.8L-119.4,-6.7L-117.8,-6.8L-117.5,-4.4L-118.4,-3.8L-118.4,-3.2L-119.5,-3.1L-119.7,-1.6L-120.8,-0.4L-122.6,-0.4L-123.9,-1.3L-121.8,0.2L-122.9,1.6L-127.0,1.7L-123.9,2.6L-124.5,5.1L-123.7,6.9L-125.6,7.7L-124.5,7.9L-124.6,8.3L-126.1,13.4L-127.4,14.9L-130.9,14.4L-128.4,15.3L-127.8,16.0L-127.7,17.6L-128.5,18.4L-131.0,17.8L-129.8,18.8L-130.8,19.1L-131.7,19.0L-131.5,18.5L-132.7,18.6L-133.0,17.9L-132.1,16.4L-133.6,17.9L-136.7,16.8L-136.6,15.8L-135.1,15.3L-134.2,14.1L-136.7,15.3L-139.3,14.3L-139.7,13.3L-138.6,10.7L-139.2,11.4L-142.6,13.1L-146.3,13.0L-146.0,13.6L-146.4,13.7L-148.1,13.2L-146.2,12.0L-148.6,12.0L-148.6,11.2L-149.1,10.7L-150.8,10.3L-151.3,8.9L-152.2,8.5L-151.8,7.9L-152.6,6.7L-150.4,5.5L-151.6,5.3L-153.6,6.0L-153.7,5.1L-153.3,4.6L-156.3,3.2L-156.2,1.7L-154.2,-0.3L-156.6,1.1L-161.2,-4.5L-160.8,-5.4L-161.2,-6.0L-156.1,-7.3L-157.0,-7.3L-156.8,-7.9L-161.4,-6.6L-161.8,-7.2L-160.6,-8.8L-159.9,-9.4L-158.4,-9.4L-158.4,-9.9L-157.0,-10.2L-155.1,-8.7L-155.5,-10.2L-157.1,-10.6L-158.9,-13.2L-157.9,-10.8L-158.2,-10.5L-159.9,-9.8L-159.6,-10.7L-160.0,-10.5L-162.3,-7.4L-163.3,-8.1L-164.0,-12.9L-165.1,-14.0L-161.5,-16.3L-159.4,-16.7L-161.9,-16.3L-164.4,-14.8L-165.2,-14.8L-166.0,-15.5L-167.8,-15.6L-167.9,-16.6L-167.4,-17.9L-168.4,-18.4L-163.2,-21.0L-159.9,-23.3L-167.1,-19.2L-169.4,-18.9L-169.5,-20.5L-168.6,-21.9L-167.1,-23.0L-164.5,-23.3L-169.7,-23.9L-170.5,-24.8L-170.2,-26.5L-165.0,-28.6L-157.5,-27.2L-159.7,-28.2L-158.6,-28.7L-158.9,-28.8L-162.1,-28.4L-164.4,-29.0L-169.9,-27.3L-169.3,-29.0L-167.6,-31.2L-161.4,-30.3L-159.9,-32.0L-159.9,-32.5L-160.8,-32.4L-161.5,-31.6L-163.8,-31.3L-166.1,-31.9L-168.5,-31.8L-167.1,-33.7L-165.4,-34.3L-161.5,-33.2L-159.6,-33.6L-158.2,-34.7L-160.0,-34.4L-159.4,-36.8L-156.2,-37.0L-157.2,-37.5L-159.3,-37.3L-158.2,-40.0L-156.4,-40.8L-157.0,-41.6L-156.3,-42.2L-159.4,-42.3L-161.0,-41.9L-164.0,-42.4L-167.1,-43.8L-171.0,-44.5L-173.1,-46.2L-171.6,-46.9L-166.2,-46.5L-161.1,-44.6L-157.8,-44.4L-160.3,-45.5L-160.0,-47.1L-162.1,-48.1L-159.1,-48.0L-160.5,-48.7L-167.0,-49.1L-167.4,-49.9L-166.6,-50.7L-162.1,-52.1L-165.6,-52.0L-167.6,-51.2L-168.7,-51.5L-168.9,-51.8L-167.6,-52.8L-168.3,-52.7L-168.7,-54.0L-169.7,-55.0L-170.2,-55.8L-169.6,-56.2L-170.7,-55.9L-168.8,-53.4L-170.1,-52.1L-171.0,-51.9L-170.8,-50.8L-173.7,-50.2L-176.3,-50.6L-177.3,-51.3L-177.6,-52.1L-176.2,-54.7L-174.3,-56.1L-177.2,-55.1L-177.5,-55.8L-176.1,-56.1L-177.3,-56.7L-174.6,-57.4L-173.9,-58.2L-173.9,-59.2L-175.2,-60.1L-176.1,-59.6L-177.6,-60.0L-177.7,-60.7L-176.4,-61.2L-176.1,-62.0L-176.7,-62.8L-177.9,-62.3L-179.3,-63.3L-178.8,-64.6L-178.3,-64.6L-179.8,-66.8L-180.9,-67.1L-183.8,-66.8L-181.7,-67.3L-181.8,-68.6L-179.9,-69.2L-189.1,-74.1L-187.9,-75.0L-188.9,-76.1L-199.5,-78.9L-207.9,-80.1L-210.1,-79.3L-211.9,-79.9L-216.2,-78.8L-218.2,-79.4L-220.5,-78.8L-222.6,-79.3L-222.9,-78.9L-221.3,-77.9L-221.9,-77.8L-227.9,-78.5L-232.5,-80.4L-227.1,-81.9L-233.3,-82.4L-234.1,-83.0L-233.4,-83.9L-237.0,-82.9L-239.2,-84.4L-237.0,-85.2L-230.5,-85.2L-229.0,-86.1L-227.2,-86.3L-222.4,-86.2L-220.2,-85.7L-220.5,-86.4L-219.9,-87.4L-221.9,-88.1L-225.4,-87.1L-229.1,-87.6L-232.0,-86.8L-236.7,-88.2L-235.0,-89.0L-238.5,-88.7L-243.1,-89.7L-245.7,-90.9L-244.8,-91.8L-245.4,-92.2L-244.1,-93.0L-241.1,-93.7L-230.6,-95.1L-230.3,-95.3L-230.7,-95.7L-228.1,-96.2L-218.5,-96.8L-215.8,-98.6L-213.9,-102.0L-211.4,-102.6L-212.5,-102.9L-217.9,-102.1L-222.0,-102.5L-223.4,-103.3L-222.6,-104.5L-212.8,-108.0L-209.6,-108.3L-206.9,-107.3L-207.7,-108.5L-206.7,-109.2L-200.5,-108.8L-199.2,-110.4L-199.6,-112.5L-196.5,-113.5L-192.0,-113.3L-181.4,-110.2L-191.9,-114.0L-173.1,-116.1L-169.6,-115.0L-169.2,-111.9L-167.1,-113.2L-166.7,-114.2L-167.4,-114.7L-167.1,-115.9L-158.6,-113.4L-153.2,-113.5L-156.6,-114.7L-158.8,-116.3L-159.0,-116.8L-155.2,-116.8L-150.5,-116.4L-134.1,-112.7L-133.3,-113.1L-133.7,-114.6L-133.4,-115.6L-132.1,-116.2L-132.5,-116.8L-137.4,-118.5L-122.8,-118.1L-120.7,-118.5L-134.2,-119.3L-139.7,-119.2L-141.1,-119.7L-139.8,-120.4L-136.8,-120.1L-127.3,-121.6L-120.5,-120.6L-116.7,-122.0L-111.0,-121.1L-108.0,-120.0L-107.1,-121.0L-109.5,-121.5L-110.3,-122.2L-106.2,-123.0L-102.6,-122.8L-101.8,-123.2L-90.8,-123.2L-87.4,-123.6ZM17.1,9.3L16.2,8.2L16.9,8.6ZM15.2,5.2L15.6,5.6L14.9,5.7L14.2,5.2ZM17.4,4.6L17.3,5.4L16.5,5.3L17.0,6.1L15.8,5.4L15.2,4.3L16.1,4.1ZM18.3,4.4L18.1,4.9L17.7,4.7L17.7,3.9ZM93.7,43.3L93.6,44.1L92.3,45.2L93.1,46.3L91.8,46.9L91.6,49.1L90.9,49.4L90.1,46.9L88.6,46.8L88.1,46.0L87.9,44.4L87.4,43.7L88.7,43.5L89.4,42.3L90.0,42.3L90.2,43.6L90.7,43.8L91.2,42.6L90.9,42.2L92.3,41.3L93.7,41.6ZM82.5,49.0L80.5,49.2L78.2,48.6L78.0,45.5L76.1,44.4L76.2,38.4L78.2,39.0L79.1,37.6L79.8,37.2L80.3,37.8L80.5,35.9L79.5,35.9L78.6,37.6L77.4,38.0L76.6,37.5L76.7,36.9L78.0,35.3L81.2,35.0L83.3,32.5L85.9,31.6L85.3,32.6L85.6,34.5L84.7,36.0L84.6,38.3L85.4,38.9L86.9,38.9L87.2,39.3L86.5,40.5L85.6,40.8L85.2,40.3L84.8,40.7L84.2,42.8L83.1,42.9L83.6,43.4L81.9,45.0L82.2,46.4L81.3,47.8L82.4,48.2ZM86.1,44.3L86.7,46.1L86.6,47.2L85.3,47.7L83.4,47.0L82.9,44.9ZM88.9,48.7L90.4,49.2L90.2,50.1L89.3,50.2L87.6,49.4L87.7,48.4ZM86.4,49.5L86.0,48.9L86.4,48.2L87.3,47.1ZM93.6,48.2L92.2,48.6L92.3,48.0L92.5,47.6ZM94.1,44.4L93.6,44.7L93.7,44.1ZM83.7,48.7L82.7,48.6L82.6,47.6ZM85.9,43.3L85.6,43.3L85.5,42.2L86.1,42.7ZM87.7,34.5L87.0,34.4L87.2,34.1L88.2,34.1ZM103.7,47.9L102.1,47.4L102.2,46.6L102.4,46.2L103.9,47.1ZM118.6,80.9L117.7,81.1L115.9,82.5L115.6,83.6L114.3,84.7L111.9,85.0L111.1,86.4L110.9,85.8L109.5,85.2L107.6,85.5L106.6,84.8L103.3,84.0L103.1,85.4L102.5,85.5L102.1,86.4L100.1,86.5L94.4,81.8L93.0,79.6L93.5,78.6L92.3,77.4L91.8,76.2L92.5,76.9L93.6,75.6L95.3,75.5L97.6,73.8L100.9,72.6L100.5,71.8L101.6,72.0L102.3,73.1L103.3,72.7L103.3,71.9L104.4,72.2L104.8,73.1L107.4,74.3L108.8,74.3L108.9,74.9L108.2,75.5L109.9,77.4L111.3,76.6L110.8,75.4L113.0,76.5L114.1,76.2L113.8,77.3L114.6,78.1L115.4,77.8L117.5,78.7ZM178.9,167.6L176.8,168.0L176.6,167.2L175.7,167.0L174.6,167.5L173.8,167.0L174.5,166.9L174.7,165.7L177.3,165.9L181.1,164.0L178.7,166.2ZM173.8,167.0L174.6,167.5L176.5,167.0L176.8,168.0L178.4,167.4L179.1,168.1L177.7,168.2L176.6,169.5L174.7,170.5L174.4,170.0L172.7,169.6L172.2,168.3L172.2,167.5ZM97.7,104.9L98.9,105.4L99.4,104.9L100.9,105.1L101.7,104.1L102.5,105.1L104.7,105.2L104.5,103.6L106.0,102.8L105.9,100.8L108.2,99.8L108.4,99.0L109.0,98.9L114.5,103.3L116.7,103.5L118.9,102.4L118.6,103.0L118.9,104.4L119.5,104.9L119.3,105.6L120.9,106.7L119.8,106.8L119.3,108.5L118.6,108.7L117.9,107.5L115.3,107.1L114.6,107.5L113.9,107.0L111.8,107.0L111.0,106.3L110.5,106.8L109.5,106.7L108.5,107.9L107.5,106.9L106.5,106.9L106.3,109.4L107.8,110.9L108.5,113.3L112.4,117.3L112.5,118.2L113.9,120.0L113.6,120.4L110.9,117.6L108.9,116.7L107.3,116.9L107.1,116.1L104.1,113.0L103.9,112.5L105.2,112.4L103.3,110.4L102.8,107.5L101.6,106.2L100.6,106.0L99.3,109.0L98.8,109.0L97.9,107.4ZM109.9,120.0L111.7,120.5L110.3,120.5ZM112.1,119.2L110.0,119.3L108.8,118.7ZM110.5,118.4L109.3,118.3L109.1,117.7L110.7,117.9ZM102.6,108.1L102.1,108.3L101.1,107.4L101.7,106.7ZM102.7,109.4L102.0,109.2L102.4,108.9ZM104.1,114.5L103.9,114.6L102.8,113.0ZM104.8,114.2L104.9,114.5L104.4,113.9ZM101.3,110.0L100.5,107.1L100.8,107.0L101.3,108.2ZM113.7,121.4L114.3,121.8L112.7,121.3ZM117.0,122.6L117.4,123.4L114.6,121.2L111.5,119.9L112.2,119.8L114.2,120.9L114.0,120.6L114.5,120.6ZM155.1,126.2L153.2,126.5L152.0,125.4L149.5,126.2L148.4,127.7L147.5,127.6L147.6,129.7L146.8,130.1L144.1,130.5L143.1,129.8L142.2,129.9L141.1,128.7L134.8,130.0L135.2,127.6L134.5,126.0L132.6,124.1L133.3,123.4L133.1,122.7L133.1,120.9L134.0,120.7L135.1,118.9L133.4,117.3L132.7,115.3L132.9,114.0L134.0,112.6L135.3,113.5L134.7,114.3L134.9,115.0L136.1,114.8L145.1,116.0L148.0,114.0L151.4,113.0L152.8,113.9L154.6,114.1L155.9,115.4L157.4,115.5L156.9,117.7L155.6,117.6L154.8,118.9L154.6,121.5L153.0,123.2L153.9,123.9ZM120.7,108.7L119.7,111.8L121.6,113.7L120.2,114.2L121.2,116.4L119.1,116.8L119.4,118.2L118.7,117.9L118.0,118.6L117.8,119.8L117.1,120.2L117.5,122.2L117.1,122.6L114.3,120.5L113.6,120.4L113.9,120.0L112.5,118.2L112.3,117.2L108.5,113.3L107.8,110.9L106.3,109.4L106.5,106.9L107.5,106.9L108.5,107.9L109.5,106.7L110.5,106.8L111.0,106.3L111.8,107.0L113.9,107.0L114.6,107.5L115.3,107.1L117.9,107.5L118.6,108.7ZM60.5,69.7L61.1,69.9L61.6,69.2L62.2,69.5L62.6,69.1L63.0,69.6L63.7,69.2L64.5,70.3L65.5,70.3L66.8,71.1L66.2,72.9L66.6,73.4L67.6,73.5L68.9,75.3L69.0,76.1L68.1,77.3L67.5,77.0L66.6,78.5L66.9,80.5L65.8,80.9L63.1,79.3L63.1,77.2L61.8,78.2L60.3,78.2L60.3,76.5L59.4,76.0L58.4,76.2L58.0,75.1L56.7,74.8L56.1,73.3L55.0,73.7L54.1,72.7L53.8,71.4L56.6,69.9L57.1,69.7L57.4,70.5L58.0,70.3L59.2,70.8ZM170.0,65.4L167.3,65.5L166.0,66.6L165.1,68.4L165.5,69.9L165.2,70.4L163.6,69.1L160.4,69.7L159.4,68.2L158.0,69.4L157.4,68.7L155.8,68.4L154.5,68.4L153.9,69.1L153.8,68.6L152.3,68.4L151.6,67.5L146.2,66.5L140.6,66.8L139.1,68.5L138.0,68.2L137.6,68.9L137.3,67.7L137.8,65.8L135.9,64.3L136.8,62.9L138.5,62.0L138.8,61.4L137.1,54.4L139.9,54.3L140.4,54.6L142.2,54.2L142.6,53.1L143.3,53.2L145.0,52.2L145.2,53.0L146.1,53.1L146.1,52.4L145.3,52.0L145.6,51.2L146.5,48.5L147.8,48.0L148.3,47.2L149.5,47.2L150.2,46.4L148.9,45.9L149.5,44.0L151.3,43.0L153.4,43.2L155.2,41.2L156.3,41.7L157.3,41.4L158.2,42.3L159.2,41.9L160.2,42.2L160.9,43.9L162.8,42.9L164.8,43.3L166.6,44.6L166.2,46.2L166.9,47.7L166.1,49.2L167.6,50.2L167.3,51.0L168.6,52.8L170.3,53.8L170.0,55.1L172.7,55.8L172.8,56.7L173.8,57.5L173.8,58.0L171.5,59.5L168.6,58.8L168.0,59.9L169.2,61.4L169.3,64.1ZM81.6,94.4L82.0,93.2L81.6,92.9L82.5,92.5L84.3,93.8L84.2,94.3L85.0,93.8L85.2,92.7L87.0,92.9L87.6,93.6L90.3,92.5L92.2,92.3L92.3,91.7L93.4,92.2L94.2,92.0L95.5,93.1L95.6,92.1L95.0,91.7L95.2,90.7L94.5,89.5L94.7,89.0L96.9,87.8L97.4,86.5L98.3,86.7L98.7,85.4L99.6,86.4L102.1,86.4L102.5,85.5L103.1,85.4L103.3,84.0L106.6,84.8L107.6,85.5L109.5,85.2L110.9,85.8L111.1,86.4L110.8,87.7L111.9,90.0L111.6,91.8L110.5,91.9L109.7,91.5L109.0,92.0L110.0,92.8L109.1,93.6L109.1,96.0L107.5,96.9L107.2,97.9L102.9,98.4L101.6,99.6L93.3,98.0L92.1,96.4L92.1,95.5L88.4,96.1L87.2,97.4L85.3,96.8L84.9,96.1L84.0,96.9L81.8,95.7ZM221.7,139.8L219.8,137.8L218.7,137.9L217.3,137.2L217.0,135.1L217.6,133.7L216.4,131.4L222.0,130.7L221.9,130.4L222.6,130.3L223.4,131.1L222.9,131.5L224.3,132.1L225.0,132.9L224.1,134.0L224.4,134.8L226.5,136.6L226.2,137.9L224.9,138.1L227.4,140.4L228.5,140.7L228.1,141.6L228.9,142.7L228.2,142.8L228.6,144.6L227.1,144.7L226.5,142.5L225.7,141.7L225.6,140.6L224.5,141.0L223.2,140.5L222.8,139.4ZM50.5,123.0L49.5,123.4L49.4,122.7L50.0,122.2L50.5,122.4ZM77.8,156.4L77.9,157.0L76.4,158.9L76.9,159.8L76.5,163.2L77.1,166.8L76.5,169.6L73.6,173.5L73.6,175.0L74.5,178.4L76.0,179.7L76.9,182.7L79.7,185.6L81.6,196.6L80.7,197.3L82.7,202.9L83.2,211.3L82.5,214.0L83.0,218.2L81.5,220.0L81.2,221.1L83.5,226.0L84.5,230.5L85.1,231.1L86.2,230.7L89.5,232.1L91.3,236.9L73.5,252.8L66.9,261.1L56.9,264.1L56.1,263.1L56.7,261.5L56.2,258.9L53.3,257.6L52.6,256.5L50.7,256.0L50.1,254.7L48.4,253.1L48.3,251.4L23.7,227.2L9.2,214.3L9.2,205.9L15.3,200.3L17.4,200.6L18.0,199.1L19.9,199.0L22.1,198.3L24.0,195.2L26.5,193.8L27.9,192.5L29.2,192.2L29.3,191.6L28.5,190.8L28.8,187.9L31.7,187.0L32.3,185.6L38.9,185.4L38.8,184.0L39.5,183.2L38.0,181.3L37.1,178.1L36.6,169.5L34.9,167.4L36.1,167.4L37.1,166.9L39.4,164.5L42.0,162.8L43.5,163.0L45.0,161.0L48.7,158.9L54.0,158.4L55.6,157.3L57.7,157.2L58.8,156.6L62.6,156.6L64.8,158.1L67.8,156.8L69.5,155.5L71.3,156.5L72.5,156.2L72.4,155.4L75.2,156.9ZM120.6,126.8L120.4,125.0L122.1,122.1L122.4,123.1L123.5,122.7L125.2,124.7L125.6,126.5L125.0,128.9L125.2,130.4L126.1,132.4L127.1,132.8L127.3,134.3L127.0,135.0L126.5,135.3L125.9,137.3L124.5,138.1L124.8,139.2L124.2,139.9L123.3,139.7L122.7,137.7L121.2,136.7L120.6,135.6L121.1,135.6L120.6,134.0L121.1,132.4L121.0,129.5L121.6,128.2L121.6,127.3Z", "hi": {"france": "M81.4,121.2L81.7,125.2L80.3,129.7L78.7,128.5L79.1,127.8L78.4,127.4L78.5,126.4L78.0,126.2L78.3,125.7L77.8,124.7L78.2,124.3L77.8,123.9L78.4,122.7L80.1,121.6L80.7,121.8L81.0,119.9L81.4,120.1ZM74.0,92.4L72.9,93.4L72.1,93.1L71.4,93.3L71.2,93.6L71.6,94.1L70.2,95.8L69.4,96.3L69.2,97.5L68.2,98.3L67.9,99.2L68.0,100.3L67.5,100.7L67.6,101.1L68.4,100.8L68.5,100.0L69.3,99.4L70.7,99.6L70.7,101.0L71.6,102.4L70.7,103.6L72.2,105.6L71.9,106.6L70.1,107.3L70.5,108.5L71.5,108.9L71.7,109.7L70.9,110.9L71.1,111.6L72.2,112.8L73.0,113.2L74.1,113.0L74.3,113.5L73.5,114.8L73.5,115.4L72.3,116.0L69.6,119.0L68.0,119.6L66.8,119.4L65.2,118.6L64.9,117.9L63.9,117.8L63.8,117.3L62.5,117.8L60.5,117.1L59.8,116.4L59.3,116.6L56.7,118.8L55.9,120.5L56.0,122.5L56.5,123.4L55.2,123.3L54.3,124.0L52.5,123.5L51.6,123.8L50.5,123.0L50.5,122.4L49.7,122.1L49.4,122.4L49.1,121.9L46.8,121.0L46.4,121.0L46.2,121.9L45.8,121.9L43.6,121.9L42.5,121.0L41.4,121.2L40.7,120.4L38.6,119.4L37.9,119.7L38.1,118.6L36.9,118.2L36.6,117.6L37.8,116.6L38.8,110.6L39.5,109.9L39.1,109.4L38.8,110.0L39.4,104.8L40.4,105.7L41.2,107.5L40.6,105.2L39.0,103.7L38.9,103.4L39.6,103.6L39.2,100.1L36.6,98.9L35.4,96.8L35.7,95.8L35.0,95.0L35.2,94.7L35.7,94.4L36.8,94.7L35.9,94.1L33.8,94.1L34.1,93.2L32.7,92.9L32.7,92.2L31.9,92.4L28.2,91.0L26.6,91.1L26.1,90.2L25.1,89.8L26.5,89.0L25.5,88.3L26.9,88.2L26.3,87.8L25.0,87.8L24.8,87.3L25.7,86.3L29.0,85.7L30.9,85.0L31.8,85.3L33.0,86.8L34.0,86.1L35.5,86.1L35.8,86.5L36.2,85.8L36.5,86.2L38.3,86.1L37.5,85.2L37.4,82.8L36.4,79.9L38.7,79.9L39.2,81.7L43.1,82.2L45.4,81.3L44.2,80.9L44.5,79.8L49.3,77.5L50.1,76.5L50.1,73.1L51.3,72.1L53.8,71.4L54.1,72.7L54.7,73.5L55.0,73.7L56.1,73.3L56.7,74.8L58.0,75.1L58.4,76.2L59.4,76.0L60.3,76.5L60.3,78.2L61.8,78.2L62.9,77.1L63.1,79.3L64.7,79.9L65.6,80.9L66.8,80.8L67.6,81.3L68.6,81.0L69.7,81.6L70.5,83.0L71.1,82.8L71.7,83.3L73.4,83.1L74.0,83.6L76.1,84.2L76.1,84.7L74.9,86.2L74.0,89.1L73.7,92.0ZM39.0,102.6L38.9,103.1L38.3,102.2L38.2,101.7Z", "italy": "M71.6,102.4L72.1,102.7L73.7,102.1L74.7,102.5L76.0,101.0L75.9,100.4L77.2,99.3L77.4,100.5L78.8,101.5L78.6,102.0L79.3,103.0L79.6,102.9L79.5,101.9L80.5,100.3L80.7,99.0L81.2,99.1L81.6,100.2L83.2,99.8L83.8,100.6L84.1,100.5L83.6,99.1L83.8,98.4L85.2,98.7L85.3,96.8L87.4,97.3L88.4,96.1L90.5,96.1L92.1,95.5L92.1,96.4L93.0,97.8L98.2,98.9L96.9,100.4L97.9,100.9L97.4,102.1L97.8,102.1L97.7,103.1L98.9,104.3L98.3,104.5L98.5,104.2L97.9,103.4L97.3,103.7L96.2,103.4L95.5,104.2L93.4,105.2L93.2,105.2L93.4,104.7L92.5,105.3L92.3,106.6L93.5,108.2L93.0,109.2L92.6,109.0L92.7,111.4L93.0,112.7L94.2,114.0L97.7,116.6L99.4,121.9L101.5,124.5L104.0,126.4L108.0,126.6L107.9,127.4L107.0,128.3L106.9,128.9L111.7,131.6L115.1,134.1L116.6,135.8L117.2,137.4L116.7,139.1L115.6,138.4L114.8,136.3L112.9,136.0L112.0,135.0L111.0,135.3L110.0,137.2L109.4,139.5L109.7,140.2L110.6,140.5L111.8,141.7L112.0,144.0L111.7,144.5L111.1,144.4L109.8,145.2L109.5,147.5L108.5,148.5L107.6,150.3L106.2,150.4L105.9,148.9L106.6,148.2L107.1,146.0L108.1,145.4L108.2,144.4L106.1,138.1L104.5,137.6L103.2,136.6L103.2,135.2L102.4,134.0L100.7,134.4L101.2,133.6L100.6,133.1L99.6,133.1L98.3,130.6L96.4,130.3L95.8,130.5L93.9,129.2L90.0,124.3L88.6,123.5L87.9,123.5L88.1,122.8L86.3,120.4L85.5,120.2L85.6,118.8L84.8,116.9L84.5,114.9L83.7,113.9L80.7,112.1L78.6,111.5L77.7,111.9L75.6,114.7L73.5,115.4L73.5,114.8L74.3,113.5L74.1,113.0L72.8,113.2L71.2,112.0L70.9,110.9L71.7,109.7L71.5,109.0L70.5,108.5L70.1,107.6L70.3,107.1L70.9,107.2L71.9,106.6L72.1,105.7L70.7,103.6ZM85.1,120.9L85.2,121.7L84.3,121.6L84.0,121.1ZM105.7,148.7L104.3,151.3L103.8,153.2L104.5,155.7L103.8,157.0L103.8,157.9L101.6,157.3L100.0,155.4L98.6,155.2L94.9,152.5L94.0,152.4L93.2,151.1L93.6,149.7L94.4,148.9L95.0,149.8L96.1,148.9L96.6,148.9L98.6,150.1L101.4,149.7L102.5,149.0L103.8,149.1L105.4,148.3L105.9,148.4ZM82.0,132.7L82.7,135.0L82.1,136.4L82.3,137.9L81.8,143.0L79.7,142.6L79.4,144.2L78.1,144.4L77.2,142.8L77.1,141.1L77.7,139.4L77.1,138.1L77.4,136.2L76.3,134.1L76.4,132.5L77.8,132.9L80.4,130.5L82.0,131.9L81.7,132.4ZM77.4,143.6L77.2,144.2L77.0,143.4ZM76.7,131.8L76.4,132.0L76.6,131.4L76.9,131.4Z", "spain": "M50.1,146.0L49.3,145.7L49.4,145.4ZM56.2,139.3L57.2,139.3L57.5,139.8L56.3,142.0L55.9,142.2L54.9,141.7L54.5,140.7L53.7,141.1L53.2,140.3L54.8,138.9L56.3,138.2ZM60.8,138.9L59.1,138.2L59.0,137.8L60.5,137.8ZM49.5,144.5L49.3,144.9L48.6,144.6L48.9,143.8L50.1,143.5ZM36.6,117.6L36.9,118.2L38.1,118.6L38.1,119.8L38.6,119.4L40.7,120.4L41.4,121.2L42.5,121.0L43.6,121.9L46.2,121.9L46.5,120.9L49.1,121.9L49.5,123.4L50.5,123.0L51.6,123.8L52.5,123.5L54.3,124.0L55.2,123.3L56.5,123.4L56.9,124.3L56.3,124.5L56.3,125.0L56.6,126.3L52.0,130.3L47.8,131.6L46.6,133.1L47.3,133.7L46.1,134.3L42.4,140.9L42.9,143.6L44.5,145.4L41.7,148.1L40.5,151.4L40.9,152.2L38.5,152.6L37.2,153.7L35.3,157.3L35.0,157.5L34.0,157.0L32.7,157.7L31.2,157.4L26.4,157.7L25.1,159.0L23.2,159.5L22.4,161.2L22.1,161.1L22.0,161.6L21.4,161.8L19.7,160.9L18.8,158.4L18.4,158.2L18.2,157.6L19.0,156.5L18.3,157.0L16.4,154.8L16.4,154.3L16.0,154.8L14.3,154.9L13.9,152.5L14.1,151.6L15.2,150.0L15.8,149.7L16.1,148.9L15.5,148.9L14.5,147.3L14.8,145.7L15.7,144.6L15.9,143.7L15.2,143.2L13.8,140.0L15.4,139.9L16.0,139.2L16.3,137.9L15.8,137.0L16.7,135.9L16.2,131.9L19.0,128.6L18.7,128.1L17.7,128.0L17.4,126.3L15.3,126.1L14.3,127.0L12.2,126.7L11.3,127.1L11.0,126.6L11.4,125.9L10.9,125.2L8.5,126.4L8.4,125.4L9.2,124.4L8.7,124.3L9.0,123.5L8.7,122.2L7.8,122.4L8.2,121.2L7.0,120.1L7.2,119.0L8.5,118.0L9.3,118.1L10.5,117.6L10.9,117.4L10.9,116.5L13.1,115.4L15.7,116.7L20.5,116.1L25.8,117.5L29.4,116.9L31.6,117.8L32.3,117.3L34.4,118.0ZM-21.2,207.7L-21.5,209.1L-22.5,210.0L-23.5,208.0L-20.4,206.5ZM-10.8,204.5L-11.1,204.9L-11.4,204.8L-11.2,203.9L-10.1,203.1L-9.8,202.6L-9.6,202.8L-9.9,204.0ZM-12.7,209.0L-13.2,209.7L-13.9,209.4L-12.8,208.7L-11.9,205.8L-11.5,205.5L-11.2,205.9L-11.4,207.5L-11.6,208.5ZM-17.5,209.1L-17.6,211.1L-18.1,211.5L-18.7,211.3L-19.1,210.0L-18.6,209.1ZM-24.6,209.9L-25.1,209.3L-24.9,208.8L-24.3,209.3ZM-27.4,211.1L-27.8,212.1L-28.4,211.6L-27.5,210.9ZM-27.2,207.0L-27.8,205.5L-27.5,204.9L-27.0,204.9L-26.7,205.7Z", "switzerland": "M81.6,92.9L82.0,93.2L81.5,95.6L82.9,96.0L84.0,96.9L84.9,96.1L85.3,96.6L85.2,98.7L83.8,98.4L84.0,100.6L83.2,99.8L81.6,100.2L81.2,99.1L80.7,99.0L80.5,100.3L79.5,101.9L79.7,102.7L79.3,103.0L78.6,102.0L78.8,101.5L77.4,100.5L77.0,99.3L75.9,100.4L76.0,101.0L75.0,102.3L73.7,102.1L72.1,102.7L70.7,101.0L70.6,99.5L69.3,99.4L68.5,100.0L68.4,100.8L67.5,101.1L68.0,100.3L67.8,99.4L68.2,98.3L69.2,97.5L69.4,96.3L71.4,94.4L71.4,93.3L72.1,93.1L72.9,93.4L74.0,92.4L77.3,92.4L77.8,92.1L77.1,91.9L77.8,91.3L79.0,92.1L80.2,92.0Z", "netherlands": "M67.6,73.5L66.6,73.4L66.2,72.9L66.8,71.1L65.5,70.3L64.5,70.3L63.7,69.2L63.0,69.6L62.6,69.1L62.2,69.5L61.6,69.2L61.1,69.9L58.0,69.3L57.4,68.8L58.6,68.4L60.2,69.3L60.7,69.2L59.7,68.4L60.4,68.3L59.4,67.1L61.6,64.1L62.7,60.4L63.2,60.5L65.0,59.4L65.7,58.4L67.8,57.6L70.8,57.4L71.4,58.0L72.3,58.3L72.3,60.0L71.7,62.1L70.4,62.3L70.6,63.2L71.7,63.7L71.5,64.8L70.5,65.5L70.8,66.2L69.6,66.9L68.2,66.7L67.4,67.2L68.4,69.3L67.9,70.7L68.1,71.1L67.0,71.8L67.8,72.6ZM60.5,69.7L59.2,70.8L58.0,70.3L57.5,70.5L57.1,69.7L57.4,69.6ZM64.9,57.7L64.4,57.6L65.3,57.4L65.9,57.4ZM63.2,59.6L62.8,60.0L62.5,59.8L63.2,58.9ZM59.4,67.6L59.9,68.1L59.4,68.2L58.9,67.8L58.4,67.6ZM70.5,56.5L70.2,56.4L70.8,56.2Z", "uk": "M33.1,68.3L30.6,69.7L29.6,69.5L28.3,68.5L26.9,68.6L27.5,68.0L26.3,67.6L25.4,67.6L24.2,68.2L23.4,67.8L22.8,66.7L27.2,64.0L27.9,62.7L27.5,62.4L27.4,60.5L25.1,61.2L26.8,59.1L28.8,58.2L30.5,57.9L31.4,58.4L31.1,57.6L31.5,57.4L32.1,58.2L32.8,58.1L32.2,57.9L31.5,56.9L32.1,55.6L31.6,54.9L32.2,54.2L32.3,52.9L31.1,53.2L29.5,50.6L30.0,49.4L30.7,48.6L31.7,48.3L29.6,48.3L28.0,49.3L26.8,48.9L25.8,49.4L24.6,48.9L24.2,49.9L23.3,48.9L23.2,48.1L23.6,48.1L25.1,45.0L24.3,43.8L24.5,42.4L25.5,42.4L24.5,41.7L24.6,41.0L23.0,42.7L23.0,41.6L23.9,40.6L22.3,41.9L22.3,43.4L21.6,45.7L21.3,46.0L20.8,45.8L21.1,44.3L21.8,43.2L21.4,43.1L21.7,40.5L23.1,37.5L21.3,38.8L19.3,37.8L20.9,36.9L20.4,36.6L21.5,35.4L21.6,34.6L20.6,33.4L21.5,32.7L20.9,32.1L21.1,31.3L21.4,30.7L23.2,30.7L22.2,29.6L22.5,28.6L23.8,28.4L23.5,27.7L23.8,26.6L24.6,26.6L25.0,26.9L27.1,26.7L30.8,26.1L31.6,26.3L31.0,28.1L27.9,30.2L27.7,30.9L28.4,31.1L27.3,32.5L30.2,31.8L35.5,31.8L36.7,33.0L33.4,38.6L30.6,39.8L32.3,39.6L33.2,40.1L33.1,40.5L30.4,41.8L28.7,41.4L29.4,41.9L31.6,42.3L33.4,41.8L35.2,42.6L37.2,44.6L38.8,49.8L41.1,51.0L43.4,53.3L42.9,53.9L44.2,56.3L42.7,55.6L41.1,55.7L42.6,55.8L44.8,58.0L45.1,59.0L43.9,60.6L44.8,61.1L46.0,60.2L48.8,60.5L50.3,61.5L50.7,62.5L50.1,65.3L49.4,66.0L48.6,66.2L48.8,66.9L46.7,67.6L47.3,67.9L47.3,68.6L45.4,69.2L47.3,69.8L49.4,69.8L49.3,70.9L47.9,71.7L47.6,72.4L46.8,72.4L44.9,73.3L42.9,73.1L40.6,73.4L38.1,72.6L38.4,73.1L37.7,73.5L35.7,73.6L35.9,74.2L35.6,74.4L34.1,74.4L31.8,73.7L30.2,74.2L29.1,76.6L27.1,75.6L24.9,76.3L23.4,77.8L22.1,77.4L21.4,77.7L21.2,77.2L24.3,74.8L25.5,73.3L25.8,72.1L26.7,71.8L27.1,70.9L31.3,70.8L34.1,67.6ZM27.0,58.1L27.6,58.2L27.5,58.4L26.3,59.2L25.6,58.4L25.6,57.7L26.6,57.5ZM33.6,22.6L33.1,22.6L33.7,22.2L34.2,22.2ZM39.6,14.9L39.1,14.4L39.4,13.7L39.8,13.9ZM38.5,14.8L39.1,15.5L39.5,15.3L39.5,15.7L38.6,18.7L38.3,18.5L38.6,17.1L38.1,16.9L37.1,16.3L38.3,16.0L38.0,15.2L37.5,15.0L38.3,14.3ZM40.7,13.1L40.5,13.9L40.0,13.5L40.1,13.1ZM31.2,25.2L30.7,25.3L30.4,24.5ZM32.1,25.6L31.7,25.1L32.2,25.0ZM31.6,23.8L32.5,24.1L32.6,24.6L30.9,24.3L30.4,24.1L30.6,23.2L31.6,23.4ZM32.9,22.9L32.5,23.0L31.6,22.1L31.9,21.9ZM17.5,38.5L17.6,38.0L18.0,38.0ZM23.4,45.3L22.5,45.1L22.5,43.9L23.2,44.0ZM20.8,39.9L18.6,40.2L19.3,39.1L18.7,38.4L19.5,38.1L20.8,39.1ZM19.4,42.4L19.5,44.1L18.7,44.4L18.6,43.4L17.9,43.8L18.1,43.0ZM20.0,43.1L19.6,42.6L20.2,42.2L20.1,41.7L21.0,41.3ZM19.1,27.8L18.6,28.9L17.7,29.4L18.3,29.5L18.2,29.9L16.1,31.5L15.6,31.1L16.5,30.5L15.7,29.9L15.8,28.7L17.0,28.9L16.8,28.2L18.9,27.0ZM18.8,36.2L18.2,35.9L18.6,35.7ZM19.3,33.0L19.3,34.1L21.2,34.6L20.1,35.7L19.7,34.8L18.8,34.9L16.9,33.3L18.5,32.0L18.9,32.1ZM15.1,31.9L15.5,32.2L15.2,32.8L13.9,32.2ZM14.9,35.3L14.4,35.2L14.2,34.6L14.3,33.7L14.8,33.8ZM14.2,36.2L13.8,36.2L13.8,36.0ZM19.0,53.5L17.3,53.6L17.3,53.0L15.9,51.6L14.5,53.3L12.5,52.7L11.4,51.3L12.9,50.4L12.3,49.8L13.7,49.4L14.4,47.8L15.0,47.4L15.5,47.7L16.1,46.9L19.4,46.7L21.0,49.1L20.4,50.2L21.5,50.0L22.0,51.0L21.9,51.4L21.2,50.7L21.2,51.7L21.6,51.8L21.4,52.4L20.6,52.6L19.8,53.7ZM39.5,73.9L38.8,74.5L37.7,74.0L38.5,73.4Z", "greece": "M125.7,147.7L126.4,149.5L125.3,149.4L125.1,148.7L124.6,148.9L124.9,148.0L125.3,148.0L125.5,147.2ZM126.8,151.2L127.2,151.8L126.9,151.6L126.5,152.0L125.8,151.1L126.0,150.4ZM126.0,146.3L125.5,146.5L125.5,146.0L126.0,144.9ZM123.6,141.4L123.6,141.7L122.8,141.2L121.9,139.6L122.1,139.2L122.8,139.2L123.0,141.0ZM136.8,144.2L137.3,145.1L139.7,146.1L140.2,148.7L141.5,149.3L141.1,150.2L140.0,149.3L139.3,147.7L137.8,147.3L137.6,146.7L135.7,144.9L134.7,144.9L136.2,143.8ZM138.3,143.3L137.8,143.4L137.5,142.7ZM138.7,143.1L138.7,142.6L139.0,142.4ZM141.8,145.1L141.3,145.3L141.0,144.7L141.1,144.1ZM142.2,134.3L141.7,134.5L141.2,134.1L141.6,133.2L142.2,133.6ZM137.4,150.4L136.9,150.4L137.1,150.1ZM135.4,160.9L134.9,160.9L134.8,160.1L135.0,159.7L135.6,160.5ZM151.8,165.2L151.6,165.5L151.5,165.3L151.4,164.4L151.7,163.3L152.0,163.1ZM151.2,156.2L150.8,156.3L150.6,155.5L150.9,155.7ZM150.9,157.6L152.1,156.6L152.5,156.8ZM145.3,156.2L144.9,156.4L144.6,155.6L145.2,154.8ZM144.2,155.6L143.7,156.0L143.7,155.4L144.2,155.2ZM145.0,159.6L144.9,160.0L144.8,159.6L144.8,159.2ZM144.6,158.0L144.2,157.4L144.7,157.7ZM150.4,151.1L151.2,151.4L151.3,151.7L150.5,152.1L149.4,151.7ZM147.2,152.8L147.4,152.2L147.9,152.2L148.5,152.0L148.3,152.3ZM146.5,157.3L146.1,157.3L146.5,156.9L147.1,156.4L147.4,156.6ZM148.9,158.5L148.4,158.9L148.2,158.4L148.6,158.2ZM140.6,152.5L140.3,152.8L140.4,151.9L140.7,152.1ZM140.9,153.9L140.7,154.1L140.7,153.3L141.1,153.6ZM141.3,157.4L141.3,157.9L140.4,158.1L140.5,157.7ZM143.1,151.4L143.0,151.8L141.9,150.2L142.3,150.1L143.0,150.6ZM144.1,152.4L143.7,152.7L143.2,152.1ZM147.5,148.7L147.1,149.0L146.7,148.5L147.1,147.9L146.5,146.6L147.2,146.4L147.7,146.8ZM148.7,142.0L149.4,143.3L149.4,143.8L149.0,143.6L149.3,144.0L148.7,144.2L147.5,143.5L148.2,142.8L147.4,143.4L146.5,142.9L146.7,142.3L147.8,141.8ZM145.9,135.4L145.4,135.6L144.9,135.1L145.4,134.9ZM144.9,138.1L144.5,139.2L144.1,138.6L143.9,139.0L143.4,138.9L143.4,138.0L144.3,138.3L144.9,137.8ZM144.7,153.5L144.3,153.5L144.5,152.9L145.0,153.2ZM141.2,155.2L140.8,155.2L140.9,154.9L141.3,154.8ZM154.4,162.4L153.9,162.3L153.9,161.0L154.3,160.3L156.0,159.4L155.4,161.6ZM138.6,164.8L139.8,164.4L139.6,165.0L140.6,165.8L142.0,165.5L145.0,166.2L146.0,165.9L146.3,167.3L147.8,166.7L148.2,166.1L148.1,167.7L147.8,167.9L142.3,168.4L142.0,167.5L141.0,167.0L137.5,166.5L137.4,164.8L137.8,164.9L138.1,164.1ZM148.4,127.7L149.4,128.4L149.6,129.6L148.4,130.6L148.5,132.0L147.5,133.5L143.5,132.0L142.3,132.9L141.0,132.3L139.5,133.7L138.2,133.5L138.6,135.5L140.0,136.0L140.5,137.1L138.8,135.8L138.1,136.0L139.0,137.3L138.9,138.2L137.8,136.7L136.9,136.4L136.9,137.3L137.9,138.2L136.7,138.1L136.4,136.7L134.8,135.6L134.9,134.5L133.7,135.0L133.6,137.8L136.5,143.0L135.8,143.4L135.8,142.5L134.9,142.2L134.5,142.4L134.7,143.0L135.0,143.8L135.4,143.8L133.5,144.8L136.2,146.0L137.9,147.9L139.0,148.4L139.4,151.7L139.0,151.9L137.2,149.8L135.3,150.7L136.0,152.3L136.7,152.5L137.1,153.4L135.8,154.0L135.2,153.1L134.3,152.5L134.1,152.7L135.8,159.3L134.1,157.2L133.6,157.3L133.1,159.3L132.7,158.9L132.7,157.8L132.1,156.7L131.5,155.8L131.0,156.1L130.8,157.6L130.2,156.8L129.5,155.5L129.9,153.7L127.8,150.9L128.8,148.8L129.8,148.9L130.5,148.0L131.0,148.1L134.9,150.3L134.7,149.7L135.9,149.2L132.9,147.4L132.5,147.9L131.1,147.5L129.1,148.1L128.5,147.1L128.4,147.8L127.9,147.9L126.3,144.8L126.8,144.4L127.7,144.6L127.7,143.8L126.3,143.9L124.4,142.0L123.3,139.7L124.2,139.9L124.8,139.2L124.5,138.1L125.9,137.3L126.5,135.3L127.3,134.3L127.1,132.9L128.8,132.6L129.5,132.8L131.2,131.2L133.2,131.3L134.1,130.9L134.3,130.0L137.7,129.7L139.2,129.2L139.4,128.8L141.2,128.7L142.2,129.9L143.1,129.8L144.1,130.5L146.8,130.1L147.6,129.7L147.4,127.8Z", "germany": "M81.6,92.9L80.2,92.0L79.0,92.1L77.8,91.3L77.1,91.9L77.8,92.2L77.2,92.4L73.8,92.4L74.0,89.1L74.9,86.2L76.1,84.7L76.1,84.2L74.0,83.6L73.4,83.1L71.7,83.3L71.1,82.8L70.5,83.0L69.7,81.6L69.0,81.3L69.5,79.2L68.6,78.8L68.0,77.4L68.3,76.6L69.0,76.1L68.9,75.3L68.3,74.9L68.5,74.4L67.6,73.5L67.8,72.6L67.0,71.8L68.1,71.1L67.9,70.7L68.4,69.3L67.4,67.2L68.2,66.7L69.0,67.1L70.5,66.5L70.8,66.1L70.5,65.5L71.6,64.4L71.6,63.5L70.3,62.8L70.6,62.2L71.6,62.2L72.3,60.2L72.3,58.3L71.8,57.7L72.4,56.1L75.6,55.9L76.2,56.7L76.0,57.2L76.5,57.3L76.9,56.4L77.5,56.9L77.5,57.6L77.6,55.3L78.0,54.8L80.3,54.9L81.8,56.4L82.6,56.7L80.8,54.8L79.4,54.4L79.1,52.4L78.1,52.2L78.1,51.6L79.3,51.2L79.3,50.8L78.3,49.2L78.2,48.6L80.5,49.2L82.0,48.9L83.6,50.0L83.6,50.5L83.0,51.2L84.1,51.1L84.3,51.5L84.9,51.4L86.4,52.1L87.5,51.7L87.7,52.3L86.7,53.5L86.9,53.9L89.1,54.3L90.6,53.1L91.9,53.0L93.7,51.2L95.5,51.5L97.2,53.2L98.3,53.1L98.9,54.9L100.4,55.6L101.0,58.8L99.9,60.7L101.9,62.8L101.6,63.8L102.4,65.5L101.8,67.0L102.3,68.9L103.0,69.2L103.4,70.5L102.4,73.1L101.8,72.9L101.6,72.0L100.7,71.8L100.4,72.0L100.9,72.6L97.6,73.8L95.2,75.6L93.6,75.6L92.5,76.9L91.8,76.2L92.3,77.4L93.5,78.6L93.0,79.6L94.1,81.5L98.7,85.4L98.3,86.7L97.4,86.5L96.9,87.8L94.5,89.4L95.2,90.7L95.0,91.7L95.6,92.1L95.5,93.1L94.2,92.0L93.4,92.2L92.3,91.7L92.2,92.3L90.3,92.5L87.6,93.6L87.0,92.9L85.2,92.7L85.0,93.8L84.2,94.3L84.3,93.8L83.4,93.0L82.5,92.5ZM98.2,51.7L98.2,52.3L97.3,52.0L96.9,52.5L96.1,51.8L96.3,50.5L97.1,49.8L98.0,50.6L97.7,51.2ZM100.2,54.3L100.2,54.8L99.6,54.8L99.0,54.4L98.7,53.2ZM88.6,51.5L88.0,51.5L87.5,51.2L87.6,50.9L88.4,51.0ZM76.8,49.3L77.1,48.1L77.0,48.6L78.0,48.6L76.9,48.9Z", "denmark": "M93.7,43.3L93.6,44.1L92.7,44.5L92.3,45.2L93.0,45.7L93.1,46.3L91.8,46.9L91.6,49.1L90.9,49.4L90.1,46.9L88.6,46.8L88.1,46.0L87.9,44.4L87.4,43.7L88.7,43.5L89.4,42.3L90.0,42.3L90.2,43.6L90.7,43.8L91.2,42.6L90.9,42.2L92.3,41.3L93.7,41.6ZM82.5,49.0L80.5,49.2L78.2,48.6L77.8,47.2L78.2,47.1L78.0,45.5L76.1,44.4L76.2,38.4L78.2,39.0L79.1,37.6L79.8,37.2L80.3,37.8L80.5,35.9L79.5,35.9L78.6,37.6L77.4,38.0L76.6,37.5L76.7,36.9L78.0,35.3L81.2,35.0L83.3,32.5L85.9,31.6L85.3,32.6L85.6,33.3L85.6,34.5L84.7,36.0L84.6,38.3L85.4,38.9L86.9,38.9L87.2,39.3L86.5,40.5L85.6,40.8L85.2,40.3L84.8,40.7L84.2,42.8L83.1,42.9L83.6,43.4L81.9,45.0L82.2,46.4L81.3,47.8L82.4,48.2ZM86.1,44.3L86.7,46.1L86.6,47.2L85.3,47.7L83.4,47.0L82.9,44.9L84.6,44.3L85.5,44.7ZM88.9,48.7L90.4,49.2L90.5,49.9L90.2,50.1L89.3,50.2L87.6,49.4L87.7,48.4L88.5,48.3ZM86.4,49.5L86.0,48.9L86.4,48.2L87.3,47.1ZM93.6,48.2L92.2,48.6L91.9,48.5L92.3,48.0L92.5,47.6ZM94.1,44.4L93.6,44.7L93.7,44.1L93.9,43.9ZM83.7,48.7L82.7,48.6L82.6,47.6L83.5,48.1ZM85.9,43.3L85.6,43.3L85.5,42.2L86.1,42.7ZM87.7,34.5L87.0,34.4L87.2,34.1L88.2,34.1ZM103.7,47.9L102.1,47.4L102.2,46.6L102.4,46.2L103.9,47.1Z", "norway": "M125.7,-36.2L123.7,-36.1L124.6,-35.1L124.2,-34.0L123.1,-33.3L124.2,-32.9L123.1,-32.1L116.5,-33.3L115.9,-33.2L116.0,-31.2L115.0,-29.8L112.6,-30.6L110.5,-29.4L109.6,-27.7L108.1,-27.0L107.9,-26.6L109.1,-24.9L108.9,-24.3L105.1,-20.9L105.3,-19.8L103.5,-19.0L101.6,-18.8L101.9,-16.8L101.3,-13.8L98.0,-9.5L99.7,-8.8L100.0,-7.6L99.6,-6.6L99.2,-6.1L96.2,-6.5L94.6,-6.0L92.1,-3.6L92.3,-3.0L91.4,-1.8L92.3,-0.0L91.9,0.5L91.9,2.4L92.6,4.3L92.1,7.7L94.9,9.9L94.2,11.6L92.6,12.0L93.8,15.3L93.4,17.4L92.1,18.5L91.2,18.8L90.2,20.4L90.6,22.3L90.0,24.4L89.3,24.5L88.9,23.4L86.8,22.9L86.1,21.7L85.9,19.4L85.8,20.5L85.1,20.9L85.2,22.3L84.2,23.9L82.9,24.2L81.7,23.3L82.1,24.2L80.7,24.9L81.1,25.2L80.8,25.5L76.2,29.1L73.4,29.9L71.6,29.9L71.1,29.1L70.5,29.6L69.9,29.4L70.2,28.4L69.1,28.4L67.8,27.7L66.4,26.9L65.7,25.6L66.0,23.9L68.0,24.8L69.0,24.0L68.0,24.3L67.1,23.4L67.4,22.2L69.2,20.6L65.9,22.3L65.1,23.0L64.3,23.0L64.1,22.6L64.8,20.1L65.5,19.7L66.7,20.0L68.4,19.1L66.9,19.2L66.5,18.8L67.9,17.5L68.1,16.6L69.6,15.6L69.7,17.1L70.4,15.5L71.5,14.9L68.2,15.9L67.1,17.6L64.2,20.2L64.4,17.5L66.3,17.3L64.7,16.8L64.2,15.3L66.2,13.9L64.6,14.6L64.1,14.2L63.6,11.8L70.7,11.1L71.7,12.3L71.7,11.5L74.0,10.7L73.2,10.7L72.9,10.2L73.3,9.4L72.9,9.8L72.7,10.9L72.3,11.0L70.2,10.8L70.0,10.3L69.1,11.2L67.9,11.0L65.4,11.4L64.0,10.9L63.6,9.4L65.0,9.1L63.3,7.7L63.3,6.7L65.5,6.6L67.7,7.3L70.5,6.8L68.1,6.9L64.7,6.4L64.0,5.8L64.2,5.0L65.0,5.1L65.7,4.1L67.2,3.5L67.9,3.9L69.9,3.6L70.3,3.2L68.1,3.6L69.0,2.3L71.4,2.2L73.8,2.7L74.3,2.5L73.7,2.3L73.7,2.0L75.9,1.6L70.5,1.7L71.3,0.4L73.8,-0.6L75.9,-0.5L78.0,0.9L76.2,-1.0L76.6,-1.7L78.1,-2.1L77.9,-2.6L77.0,-3.0L77.8,-3.6L78.9,-3.9L80.1,-3.6L79.8,-3.0L80.1,-2.8L80.8,-3.4L82.3,-3.7L83.6,-2.3L84.8,-2.8L86.5,-2.8L86.2,-3.3L86.4,-3.8L88.9,-4.8L88.3,-5.3L89.3,-6.0L88.7,-6.3L87.8,-5.9L87.1,-5.5L87.7,-5.1L87.2,-4.6L83.7,-3.1L83.2,-3.1L82.6,-4.2L81.9,-4.1L82.0,-4.8L85.7,-8.5L89.5,-10.5L90.0,-10.9L89.7,-10.9L88.6,-10.5L88.9,-11.4L89.4,-11.9L92.1,-13.1L92.7,-12.5L93.5,-12.6L95.1,-14.0L93.1,-13.1L92.0,-13.7L91.9,-14.2L94.2,-17.4L95.5,-17.7L94.6,-18.6L98.1,-19.1L99.5,-19.8L95.9,-19.4L95.7,-20.6L96.3,-21.8L97.9,-22.8L99.2,-22.8L98.0,-23.4L100.7,-25.0L105.0,-25.2L105.1,-25.5L104.6,-25.5L101.1,-25.6L103.2,-27.4L105.0,-26.8L105.7,-26.1L105.7,-26.7L106.1,-27.1L105.3,-27.1L104.4,-27.6L104.6,-28.6L102.8,-28.0L102.5,-28.0L102.6,-28.9L103.9,-29.8L105.8,-29.7L104.8,-30.0L104.6,-30.4L107.4,-31.4L108.6,-29.3L108.4,-30.0L108.9,-30.5L108.4,-30.9L108.2,-31.9L108.9,-32.3L111.1,-32.1L113.5,-32.6L113.0,-32.9L109.7,-32.8L109.4,-33.2L109.6,-33.6L111.8,-34.2L112.9,-34.8L114.1,-36.6L115.7,-36.9L115.6,-38.0L116.3,-38.8L117.9,-37.9L118.9,-38.0L117.7,-38.9L119.2,-39.4L120.1,-40.5L122.1,-40.7L121.8,-38.5L123.1,-40.9L124.5,-41.7L124.6,-39.7L123.5,-38.0L125.2,-39.3L126.2,-39.1L125.4,-40.2L125.7,-41.5L127.9,-41.3L128.2,-42.0L128.9,-42.1L131.1,-41.0L130.4,-42.4L128.6,-43.4L132.1,-43.9L132.5,-43.6L133.9,-44.2L134.9,-43.8L135.4,-42.6L136.6,-41.9L136.3,-42.6L136.7,-43.5L137.8,-44.4L139.3,-44.9L140.8,-46.2L140.2,-47.0L142.2,-48.1L144.2,-47.1L144.9,-47.5L146.2,-46.9L144.2,-45.3L143.1,-43.3L143.3,-42.7L144.8,-43.4L145.0,-44.0L149.1,-47.5L149.7,-47.6L150.0,-47.1L149.3,-46.0L149.7,-45.8L149.4,-44.5L151.0,-45.1L151.8,-46.5L153.3,-46.8L152.0,-47.7L153.5,-48.5L156.6,-47.9L156.4,-47.0L154.6,-46.1L156.1,-46.0L155.8,-43.5L157.5,-46.6L158.4,-47.2L159.4,-47.2L162.0,-45.9L163.3,-46.2L163.9,-45.7L163.9,-45.3L165.4,-45.1L166.7,-44.4L166.8,-43.6L164.1,-42.7L158.2,-42.9L158.3,-42.6L161.4,-41.9L161.8,-40.5L163.4,-40.3L163.9,-41.2L164.7,-40.3L164.9,-40.8L166.5,-40.7L166.4,-39.2L163.7,-39.8L163.4,-38.6L160.6,-37.8L159.9,-36.6L158.9,-36.1L158.4,-37.1L160.4,-38.8L159.6,-40.0L156.7,-40.9L154.6,-42.4L154.1,-42.4L151.6,-41.4L149.2,-41.5L147.4,-40.1L146.2,-37.7L146.1,-35.9L144.1,-34.9L142.9,-33.6L138.6,-34.8L138.0,-34.3L136.5,-33.9L132.8,-34.3L132.4,-35.1L129.6,-37.6L127.5,-37.3L127.5,-36.3ZM63.4,11.5L62.8,11.5L62.9,10.9L63.3,10.8ZM64.0,16.2L64.0,16.9L63.6,16.8L63.4,16.0L63.6,15.3ZM162.8,-40.8L162.1,-40.6L162.4,-41.4L163.2,-41.0ZM91.3,-15.8L90.6,-15.6L90.6,-16.1L91.3,-16.2ZM77.4,-4.0L76.7,-4.1L78.5,-4.8L78.7,-4.2ZM75.9,-2.0L74.8,-2.5L75.8,-2.8ZM136.9,-46.9L135.4,-45.6L134.5,-45.2L132.9,-45.1L131.9,-45.4L131.2,-45.9L135.0,-46.3L136.0,-46.9ZM145.5,-48.9L147.7,-48.2L146.3,-47.8L144.4,-48.2ZM137.6,-45.3L137.7,-44.8L136.5,-43.9L135.6,-43.8L135.5,-44.3L134.8,-44.3L135.3,-44.9L137.3,-45.7ZM139.2,-45.4L138.0,-45.4L137.9,-46.3L139.5,-45.9ZM98.9,-31.6L99.9,-31.5L99.5,-31.1L97.4,-30.3L97.1,-30.5L96.3,-30.0L96.2,-30.5L96.6,-31.0L97.6,-31.5ZM95.3,-29.2L94.7,-28.9L95.7,-30.4L95.8,-29.7ZM104.2,-35.7L104.9,-34.7L104.3,-33.7L102.9,-33.7L102.3,-34.1L101.5,-33.8L100.9,-34.3L101.6,-34.9L102.6,-34.7L102.9,-35.5L103.5,-35.4L103.5,-36.0ZM122.3,-43.3L123.6,-42.8L123.3,-42.5L122.4,-42.5L121.7,-43.6ZM126.3,-42.5L125.8,-42.3L124.9,-42.7L125.9,-43.4L126.5,-43.2ZM120.3,-42.4L120.6,-42.1L121.7,-42.1L121.6,-41.8L120.6,-40.9L119.3,-40.6L118.4,-39.5L115.8,-39.3L115.5,-39.6L116.2,-40.1L116.9,-40.7L118.0,-40.7L118.0,-41.3L119.5,-42.2L119.8,-43.5L120.1,-43.5ZM93.5,-17.4L93.2,-17.6L93.6,-18.0L94.5,-18.0ZM93.1,-18.3L92.7,-18.2L93.3,-19.1L93.9,-19.1L93.9,-18.7ZM88.4,-11.2L86.4,-11.2L87.5,-11.9L88.0,-11.9ZM113.3,-39.6L115.3,-39.0L115.6,-38.4L115.1,-38.0L115.1,-37.2L113.3,-37.2L112.0,-36.2L111.6,-36.3L110.6,-36.4L111.2,-36.8L111.3,-38.2L112.8,-38.3L112.8,-38.6L112.2,-38.9ZM106.4,-33.4L107.6,-34.1L107.9,-35.1L108.7,-35.3L109.3,-34.8L109.4,-33.8L107.2,-32.4L105.1,-31.9L104.5,-32.2L103.5,-31.7L100.8,-31.1L100.4,-31.5L101.7,-32.4L103.7,-32.6L105.0,-33.7L105.6,-35.2L105.1,-35.5L105.3,-36.3L106.9,-37.7L107.9,-37.6L106.6,-36.1L107.1,-34.4ZM8.1,-47.0L7.6,-47.1L10.6,-48.8L11.9,-49.1L11.9,-48.2Z", "cyprus": "M173.8,167.0L174.6,167.5L176.5,167.0L176.8,168.0L178.4,167.4L179.1,168.1L177.7,168.2L176.6,169.5L175.4,169.8L174.7,170.5L174.4,170.0L172.7,169.6L172.2,168.3L172.2,167.5L172.5,167.7Z"}}};
