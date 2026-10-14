// HIDEOUT CARTER 日本酒図鑑データ
// 味わい p は [華やかさ, 甘み, キレ, 酸味, 旨み, コク, フレッシュさ, 熟成感] の 0〜5（一般的に語られる傾向の目安）
// price は国内のおおよその店頭価格（720ml）。精米歩合や酒米は確かなものだけ入れています
const SAKE_BREWERIES = [
{
"id": "s-kunimare",
"name": "国稀酒造",
"en": "Kunimare",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.86,
"lon": 141.53,
"type": "純米",
"desc": "日本最北の酒蔵として知られる、増毛町の蔵。",
"ex": [
{
"id": "s-kunimare-tj",
"label": "国稀 特別純米",
"name": "国稀 特別純米",
"en": "Kunimare Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1400,
"p": [
2,
2,
4,
2,
3,
3,
2,
1
],
"tags": [
"炊きたてご飯",
"柑橘",
"ミネラル"
],
"desc": "すっきりとした口当たりで、北の海の幸に合う辛口寄りの味わい。"
}
]
},
{
"id": "s-otokoyama",
"name": "男山",
"en": "Otokoyama",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.79,
"lon": 142.39,
"type": "純米",
"desc": "北海道旭川市の蔵。江戸時代の銘酒「男山」の名を受け継ぐ。",
"ex": [
{
"id": "s-otokoyama-kimoto",
"label": "男山 生酛純米",
"name": "男山 生酛純米",
"en": "Otokoyama Kimoto Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
1,
2,
4,
3,
4,
4,
1,
1
],
"tags": [
"ナッツ",
"米粉",
"ヨーグルト"
],
"desc": "生酛らしい骨太な旨みと、キレのよい後味。"
}
]
},
{
"id": "s-kamikawataisetsu",
"name": "上川大雪酒造",
"en": "Kamikawa Taisetsu",
"region": "hokkaido",
"pref": "北海道",
"lat": 43.85,
"lon": 142.77,
"type": "純米",
"desc": "北海道上川町に2017年に生まれた新しい蔵。",
"ex": [
{
"id": "s-kamikawataisetsu-tj",
"label": "上川大雪 特別純米",
"name": "上川大雪 特別純米",
"en": "Kamikawa Taisetsu Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
2,
4,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"柑橘",
"ミネラル"
],
"desc": "北海道の酒米を使った、すっきりと透明感のある純米酒。"
}
]
},
{
"id": "s-denshu",
"name": "西田酒造店",
"en": "Nishida Shuzo",
"region": "tohoku",
"pref": "青森",
"lat": 40.82,
"lon": 140.74,
"type": "純米",
"desc": "「田酒」で知られる青森の蔵。米の旨みを生かした純米酒にこだわる。",
"ex": [
{
"id": "s-denshu-tj",
"label": "田酒 特別純米",
"name": "田酒 特別純米",
"en": "Denshu Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
2,
3,
3,
2,
5,
4,
2,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"ナッツ"
],
"desc": "米の旨みがふくらむ、食中酒の代表格。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-aramasa",
"name": "新政酒造",
"en": "Aramasa",
"region": "tohoku",
"pref": "秋田",
"lat": 39.72,
"lon": 140.1,
"type": "純米",
"desc": "秋田市の蔵。「6号酵母」発祥の蔵で、生酛・木桶など伝統的な造りを現代的に磨き上げる。",
"ex": [
{
"id": "s-aramasa-no6",
"label": "No.6",
"name": "新政 No.6",
"en": "Aramasa No.6",
"type": "純米",
"age": "",
"abv": "",
"cask": "秋田県産米",
"grapes": [],
"color": "clear",
"price": 2500,
"p": [
4,
3,
3,
4,
3,
2,
5,
0
],
"tags": [
"白桃",
"りんご",
"柑橘",
"ガス感"
],
"desc": "みずみずしい果実と爽やかな酸。ワインのように楽しめる人気シリーズ。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
},
{
"id": "s-aramasa-amaneko",
"label": "亜麻猫",
"name": "新政 亜麻猫",
"en": "Aramasa Amaneko",
"type": "純米",
"age": "",
"abv": "",
"cask": "秋田県産米",
"grapes": [],
"color": "clear",
"price": 2000,
"p": [
3,
3,
2,
5,
3,
2,
4,
0
],
"tags": [
"柑橘",
"ヨーグルト",
"白い花"
],
"desc": "白麹を使った、レモンのような酸味が特徴的な一本。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-yukinobosha",
"name": "齋彌酒造店",
"en": "Saiya Shuzoten",
"region": "tohoku",
"pref": "秋田",
"lat": 39.39,
"lon": 140.05,
"type": "純米",
"desc": "「雪の茅舎」の蔵。櫂入れをしない、搾ったあとろ過をしない、加水しないなど独自の造りで知られる。",
"ex": [
{
"id": "s-yukinobosha-jg",
"label": "雪の茅舎 純米吟醸",
"name": "雪の茅舎 純米吟醸",
"en": "Yukinobosha Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"りんご",
"白い花"
],
"desc": "穏やかな果実の香りとやわらかな口当たり。"
},
{
"id": "s-yukinobosha-yamahai",
"label": "雪の茅舎 山廃純米",
"name": "雪の茅舎 山廃純米",
"en": "Yukinobosha Yamahai Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "秋田酒こまちなど",
"grapes": [
"akitasakekomachi"
],
"color": "clear",
"price": 1600,
"p": [
3,
2,
3,
3,
4,
3,
2,
0
],
"tags": [
"りんご",
"ヨーグルト",
"米粉"
],
"desc": "櫂入れをしないなど、独自の手法で知られる秋田の蔵。山廃ながら軽やかで、果実の香りとやわらかな酸。"
}
]
},
{
"id": "s-nanbubijin",
"name": "南部美人",
"en": "Nanbu Bijin",
"region": "tohoku",
"pref": "岩手",
"lat": 40.27,
"lon": 141.3,
"type": "純米",
"desc": "岩手県二戸市の蔵。海外への発信にも力を入れている。",
"ex": [
{
"id": "s-nanbubijin-tj",
"label": "南部美人 特別純米",
"name": "南部美人 特別純米",
"en": "Nanbu Bijin Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
3,
3,
2,
3,
3,
2,
1
],
"tags": [
"メロン",
"炊きたてご飯",
"白い花"
],
"desc": "穏やかな香りと米の旨み。冷やしても燗でも。"
}
]
},
{
"id": "s-juyondai",
"name": "高木酒造",
"en": "Takagi Shuzo",
"region": "tohoku",
"pref": "山形",
"lat": 38.46,
"lon": 140.3,
"type": "純米",
"desc": "「十四代」の蔵。華やかで甘みのある味わいで日本酒ブームを起こした、幻の酒の代名詞。",
"ex": [
{
"id": "s-juyondai-honmaru",
"label": "十四代 本丸",
"name": "十四代 本丸 秘伝玉返し",
"en": "Juyondai Honmaru",
"type": "特別本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 2000,
"p": [
4,
4,
3,
2,
3,
3,
3,
0
],
"tags": [
"メロン",
"白桃",
"蜂蜜"
],
"desc": "果実のような香りと上品な甘み。入手困難な人気銘柄。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-dewazakura",
"name": "出羽桜酒造",
"en": "Dewazakura",
"region": "tohoku",
"pref": "山形",
"lat": 38.36,
"lon": 140.38,
"type": "純米",
"desc": "山形県天童市の蔵。吟醸酒を広く世に知らしめた「桜花吟醸」で名高い。",
"ex": [
{
"id": "s-dewazakura-oka",
"label": "桜花吟醸",
"name": "出羽桜 桜花吟醸酒",
"en": "Dewazakura Oka Ginjo",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
5,
3,
3,
2,
2,
2,
3,
0
],
"tags": [
"りんご",
"メロン",
"白い花"
],
"desc": "華やかな吟醸香の先駆け。冷やして香りを楽しみたい。"
},
{
"id": "s-dewazakura-dewasansan",
"label": "出羽燦々誕生記念",
"name": "出羽桜 純米吟醸 出羽燦々誕生記念",
"en": "Dewazakura Dewasansan",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "出羽燦々",
"grapes": [
"dewasansan"
],
"color": "clear",
"price": 1800,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"りんご",
"柑橘"
],
"desc": "山形の酒米・出羽燦々を使った純米吟醸。"
},
{
"id": "s-dewazakura-izumi",
"label": "出羽桜 純米 出羽の里",
"name": "出羽桜 純米 出羽の里",
"en": "Dewazakura Dewa no Sato",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1400,
"p": [
3,
2,
3,
2,
4,
3,
2,
0
],
"tags": [
"米粉",
"洋梨",
"炊きたてご飯"
],
"desc": "山形の米「出羽の里」の、やわらかな旨み。"
}
]
},
{
"id": "s-urakasumi",
"name": "佐浦",
"en": "Saura",
"region": "tohoku",
"pref": "宮城",
"lat": 38.31,
"lon": 141.02,
"type": "純米",
"desc": "塩竈神社の御神酒を造ってきた、宮城県塩竈市の蔵。",
"ex": [
{
"id": "s-urakasumi-zen",
"label": "浦霞 禅",
"name": "浦霞 禅 純米吟醸",
"en": "Urakasumi Zen",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
2,
4,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"白い花",
"柑橘"
],
"desc": "穏やかな香りとなめらかな口当たり。魚介と好相性。"
},
{
"id": "s-urakasumi-honjikomi",
"label": "浦霞 本仕込",
"name": "浦霞 本仕込 本醸造",
"en": "Urakasumi Honjikomi",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1100,
"p": [
1,
2,
4,
2,
3,
3,
1,
1
],
"tags": [
"米粉",
"ミネラル"
],
"desc": "すっきりとした日常の一杯。燗にもよく合う。"
},
{
"id": "s-urakasumi-junmai",
"label": "浦霞 特別純米酒 生一本",
"name": "浦霞 特別純米酒 生一本",
"en": "Urakasumi Kippon",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
2,
4,
3,
2,
1
],
"tags": [
"米粉",
"洋梨",
"炊きたてご飯"
],
"desc": "米の旨みと、やわらかな口当たり。"
},
{
"id": "s-urakasumi-jg",
"label": "浦霞 純米吟醸",
"name": "浦霞 純米吟醸",
"en": "Urakasumi Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "ササニシキなど",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
2,
3,
2,
3,
3,
2,
0
],
"tags": [
"りんご",
"米粉",
"白い花"
],
"desc": "宮城・塩竈の蔵。穏やかな吟醸香と、米の旨みのやわらかさ。三陸の魚介と合わせたい。"
}
]
},
{
"id": "s-hakurakusei",
"name": "新澤醸造店",
"en": "Niizawa Brewery",
"region": "tohoku",
"pref": "宮城",
"lat": 38.55,
"lon": 140.97,
"type": "純米",
"desc": "「伯楽星」の蔵。食事に寄り添う「究極の食中酒」を掲げる。",
"ex": [
{
"id": "s-hakurakusei-jg",
"label": "伯楽星 純米吟醸",
"name": "伯楽星 純米吟醸",
"en": "Hakurakusei Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
2,
2,
5,
2,
3,
2,
3,
0
],
"tags": [
"りんご",
"柑橘",
"ミネラル"
],
"desc": "すっきりとしたキレのよさ。料理の味を引き立てる。"
}
]
},
{
"id": "s-hiroki",
"name": "廣木酒造本店",
"en": "Hiroki Shuzo",
"region": "tohoku",
"pref": "福島",
"lat": 37.55,
"lon": 139.87,
"type": "純米",
"desc": "会津坂下町の蔵。「飛露喜」で全国的な人気を集めた。",
"ex": [
{
"id": "s-hiroki-tj",
"label": "飛露喜 特別純米",
"name": "飛露喜 特別純米",
"en": "Hiroki Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
3,
3,
2,
4,
3,
3,
0
],
"tags": [
"白桃",
"炊きたてご飯",
"メロン"
],
"desc": "やわらかな甘みと米の旨みのバランス。入手困難な人気銘柄。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
},
{
"id": "s-hiroki-jg",
"label": "飛露喜 純米吟醸",
"name": "飛露喜 純米吟醸",
"en": "Hiroki Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "山田錦・五百万石",
"grapes": [
"yamadanishiki",
"gohyakumangoku"
],
"color": "clear",
"price": 2200,
"p": [
3,
3,
3,
2,
3,
3,
3,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "透明感のある甘みと旨み、きれいな後味。入手が難しいことで知られる人気銘柄。"
}
]
},
{
"id": "s-sharaku",
"name": "宮泉銘醸",
"en": "Miyaizumi Meijo",
"region": "tohoku",
"pref": "福島",
"lat": 37.5,
"lon": 139.93,
"type": "純米",
"desc": "会津若松市の蔵。「写楽」で人気を集めている。",
"ex": [
{
"id": "s-sharaku-jg",
"label": "写楽 純米吟醸",
"name": "写楽 純米吟醸",
"en": "Sharaku Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
4,
3,
3,
3,
3,
2,
4,
0
],
"tags": [
"白桃",
"洋梨",
"柑橘"
],
"desc": "果実のような香りと、きれいな甘み。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
},
{
"id": "s-sharaku-junmai",
"label": "写楽 純米",
"name": "写楽 純米",
"en": "Sharaku Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "夢の香など",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
3,
3,
3,
3,
3,
3,
0
],
"tags": [
"りんご",
"米粉",
"ガス感"
],
"desc": "会津の蔵の定番。果実のような香りと、透明感のある米の甘み。"
}
]
},
{
"id": "s-daishichi",
"name": "大七酒造",
"en": "Daishichi",
"region": "tohoku",
"pref": "福島",
"lat": 37.59,
"lon": 140.43,
"type": "純米",
"desc": "福島県二本松市の蔵。伝統の生酛造りを守り続ける。",
"ex": [
{
"id": "s-daishichi-kimoto",
"label": "大七 純米生酛",
"name": "大七 純米生酛",
"en": "Daishichi Junmai Kimoto",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1600,
"p": [
2,
2,
3,
3,
5,
5,
1,
2
],
"tags": [
"炊きたてご飯",
"ナッツ",
"ヨーグルト"
],
"desc": "生酛らしい厚みのある旨みと酸。燗でふくらむ。"
},
{
"id": "s-daishichi-minowamon",
"label": "大七 純米吟醸 皆伝",
"name": "大七 純米吟醸 皆伝",
"en": "Daishichi Junmai Ginjo Kaiden",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "paleyellow",
"price": 2000,
"p": [
2,
2,
3,
3,
4,
4,
1,
2
],
"tags": [
"米粉",
"ナッツ",
"ヨーグルト"
],
"desc": "生酛造りを守り続ける福島の蔵の純米吟醸。穏やかな香りと、生酛らしい厚みのある旨み。"
}
]
},
{
"id": "s-ichinokura",
"name": "一ノ蔵",
"en": "Ichinokura",
"region": "tohoku",
"pref": "宮城",
"lat": 38.58,
"lon": 140.95,
"type": "純米",
"desc": "宮城県大崎市の蔵。4つの蔵が合同して生まれた。",
"ex": [
{
"id": "s-ichinokura-karakuchi",
"label": "一ノ蔵 無鑑査本醸造 辛口",
"name": "一ノ蔵 無鑑査本醸造 辛口",
"en": "Ichinokura Mukansa Karakuchi",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1100,
"p": [
1,
1,
5,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"ミネラル"
],
"desc": "すっきりとした辛口の定番。"
},
{
"id": "s-ichinokura-suzune",
"label": "すず音",
"name": "一ノ蔵 発泡清酒 すず音",
"en": "Ichinokura Suzune",
"type": "スパークリング",
"age": "",
"abv": "5",
"cask": "",
"grapes": [],
"color": "clear",
"price": 700,
"p": [
4,
5,
1,
4,
1,
1,
5,
0
],
"tags": [
"りんご",
"ヨーグルト",
"ガス感"
],
"desc": "瓶内で発酵させた、甘酸っぱい泡の日本酒。",
"priceNote": "300mlのおおよその店頭価格です"
},
{
"id": "s-ichinokura-tj-karakuchi",
"label": "一ノ蔵 特別純米酒 辛口",
"name": "一ノ蔵 特別純米酒 辛口",
"en": "Ichinokura Tokubetsu Junmai Karakuchi",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "ササニシキなど",
"grapes": [],
"color": "clear",
"price": 1400,
"p": [
2,
2,
5,
3,
3,
3,
1,
0
],
"tags": [
"米粉",
"ミネラル"
],
"desc": "宮城の蔵の、旨みとキレを両立した辛口の特別純米。燗でも冷やでも。"
}
]
},
{
"id": "s-hidakami",
"name": "平孝酒造",
"en": "Hirako Shuzo",
"region": "tohoku",
"pref": "宮城",
"lat": 38.43,
"lon": 141.3,
"type": "純米",
"desc": "宮城県石巻市の蔵。「日高見」は魚に合う酒として知られる。",
"ex": [
{
"id": "s-hidakami-karakuchi",
"label": "日高見 超辛口純米",
"name": "日高見 超辛口純米",
"en": "Hidakami Chokarakuchi Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
1,
1,
5,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"ミネラル",
"柑橘"
],
"desc": "すっきりとした超辛口。寿司や刺身に合わせたい。"
}
]
},
{
"id": "s-tatenokawa",
"name": "楯の川酒造",
"en": "Tatenokawa",
"region": "tohoku",
"pref": "山形",
"lat": 38.91,
"lon": 139.85,
"type": "純米",
"desc": "山形県酒田市の蔵。造る酒をすべて純米大吟醸にした。",
"ex": [
{
"id": "s-tatenokawa-seiryu",
"label": "楯野川 純米大吟醸 清流",
"name": "楯野川 純米大吟醸 清流",
"en": "Tatenokawa Seiryu",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "出羽燦々",
"grapes": [
"dewasansan"
],
"color": "clear",
"price": 1800,
"p": [
4,
2,
4,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"白い花",
"柑橘"
],
"desc": "すっきりと軽やかな純米大吟醸。食事にも合わせやすい。"
}
]
},
{
"id": "s-kudokijozu",
"name": "亀の井酒造",
"en": "Kamenoi Shuzo",
"region": "tohoku",
"pref": "山形",
"lat": 38.79,
"lon": 139.88,
"type": "純米",
"desc": "山形県鶴岡市の蔵。華やかな吟醸酒「くどき上手」で人気。",
"ex": [
{
"id": "s-kudokijozu-jg",
"label": "くどき上手 純米吟醸",
"name": "くどき上手 純米吟醸",
"en": "Kudoki Jozu Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
5,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"メロン",
"りんご",
"バナナ"
],
"desc": "華やかな吟醸香とやさしい甘み。"
}
]
},
{
"id": "s-kariho",
"name": "刈穂酒造",
"en": "Kariho",
"region": "tohoku",
"pref": "秋田",
"lat": 39.46,
"lon": 140.48,
"type": "純米",
"desc": "秋田県大仙市の蔵。山廃仕込みの辛口で知られる。",
"ex": [
{
"id": "s-kariho-yamahai",
"label": "刈穂 山廃純米 超辛口",
"name": "刈穂 山廃純米 超辛口",
"en": "Kariho Yamahai Chokarakuchi",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
1,
1,
5,
4,
4,
4,
1,
2
],
"tags": [
"ナッツ",
"ヨーグルト",
"米粉"
],
"desc": "山廃らしい酸とキレのある超辛口。燗でも冷やでも。"
}
]
},
{
"id": "s-mansaku",
"name": "日の丸醸造",
"en": "Hinomaru Jozo",
"region": "tohoku",
"pref": "秋田",
"lat": 39.3,
"lon": 140.56,
"type": "純米",
"desc": "秋田県横手市の蔵。「まんさくの花」で知られる。",
"ex": [
{
"id": "s-mansaku-jg",
"label": "まんさくの花 純米吟醸",
"name": "まんさくの花 純米吟醸",
"en": "Mansaku no Hana Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"りんご",
"洋梨",
"白い花"
],
"desc": "穏やかな香りと、やさしくふくらむ旨み。"
}
]
},
{
"id": "s-hassen",
"name": "八戸酒造",
"en": "Hachinohe Shuzo",
"region": "tohoku",
"pref": "青森",
"lat": 40.53,
"lon": 141.53,
"type": "純米",
"desc": "青森県八戸市の蔵。「陸奥八仙」で人気を集める。",
"ex": [
{
"id": "s-hassen-tj",
"label": "陸奥八仙 特別純米",
"name": "陸奥八仙 特別純米",
"en": "Mutsu Hassen Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
3,
3,
3,
3,
3,
2,
3,
0
],
"tags": [
"りんご",
"柑橘",
"米粉"
],
"desc": "果実のような香りと、酸のきいたすっきりした味わい。"
}
]
},
{
"id": "s-houhai",
"name": "三浦酒造",
"en": "Miura Shuzo",
"region": "tohoku",
"pref": "青森",
"lat": 40.6,
"lon": 140.46,
"type": "純米",
"desc": "青森県弘前市の小さな蔵。「豊盃」で知られる。",
"ex": [
{
"id": "s-houhai-tj",
"label": "豊盃 特別純米",
"name": "豊盃 特別純米",
"en": "Houhai Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "豊盃米",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
3,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"りんご",
"白桃",
"米粉"
],
"desc": "青森の酒米「豊盃米」を使った、やわらかく香り高い純米酒。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-naraman",
"name": "夢心酒造",
"en": "Yumegokoro Shuzo",
"region": "tohoku",
"pref": "福島",
"lat": 37.65,
"lon": 139.87,
"type": "純米",
"desc": "福島県喜多方市の蔵。「奈良萬」で知られる。",
"ex": [
{
"id": "s-naraman-junmai",
"label": "奈良萬 純米",
"name": "奈良萬 純米",
"en": "Naraman Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
2,
3,
2,
4,
3,
2,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"洋梨"
],
"desc": "ふくよかな旨みと、きれいな後味の純米酒。"
}
]
},
{
"id": "s-aizumusume",
"name": "高橋庄作酒造店",
"en": "Takahashi Shosaku Shuzoten",
"region": "tohoku",
"pref": "福島",
"lat": 37.47,
"lon": 139.95,
"type": "純米",
"desc": "会津若松市の蔵。自社の田んぼで米を育てる。",
"ex": [
{
"id": "s-aizumusume-junmai",
"label": "会津娘 純米",
"name": "会津娘 純米",
"en": "Aizu Musume Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"ナッツ"
],
"desc": "米の旨みがしっかりとした、穏やかな純米酒。"
}
]
},
{
"id": "s-suehiro",
"name": "末廣酒造",
"en": "Suehiro",
"region": "tohoku",
"pref": "福島",
"lat": 37.49,
"lon": 139.93,
"type": "純米",
"desc": "会津若松市の老舗。山廃仕込みの酒で知られる。",
"ex": [
{
"id": "s-suehiro-yamahai",
"label": "末廣 山廃純米",
"name": "末廣 山廃純米",
"en": "Suehiro Yamahai Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1500,
"p": [
1,
2,
3,
4,
5,
5,
1,
3
],
"tags": [
"ナッツ",
"ヨーグルト",
"炊きたてご飯"
],
"desc": "山廃らしいコクと酸。燗にするとふくらむ。"
}
]
},
{
"id": "s-akabu",
"name": "赤武酒造",
"en": "Akabu",
"region": "tohoku",
"pref": "岩手",
"lat": 39.7,
"lon": 141.15,
"type": "純米",
"desc": "盛岡市の蔵。若い杜氏が造る「AKABU」で人気を集める。",
"ex": [
{
"id": "s-akabu-junmai",
"label": "AKABU 純米",
"name": "AKABU 純米",
"en": "AKABU Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
3,
3,
2,
3,
2,
4,
0
],
"tags": [
"りんご",
"白桃",
"米粉"
],
"desc": "みずみずしい香りと、きれいな甘み。"
},
{
"id": "s-akabu-jg",
"label": "AKABU 純米吟醸",
"name": "AKABU 純米吟醸",
"en": "Akabu Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "吟ぎんがなど",
"grapes": [],
"color": "clear",
"price": 2000,
"p": [
4,
3,
3,
3,
3,
3,
4,
0
],
"tags": [
"マスカット",
"白桃",
"ガス感"
],
"desc": "岩手の若手杜氏が造る人気の銘柄。フレッシュな果実の香りとみずみずしい甘み。"
}
]
},
{
"id": "s-sawanoi",
"name": "小澤酒造",
"en": "Ozawa Shuzo",
"region": "kanto",
"pref": "東京",
"lat": 35.8,
"lon": 139.2,
"type": "純米",
"desc": "東京・青梅の多摩川沿いにある蔵。「澤乃井」の名で親しまれる。",
"ex": [
{
"id": "s-sawanoi-honkara",
"label": "澤乃井 本醸造 大辛口",
"name": "澤乃井 本醸造 大辛口",
"en": "Sawanoi Daikarakuchi",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1100,
"p": [
1,
1,
5,
2,
2,
2,
2,
1
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "すっきりとした辛口。燗にしてもおいしい。"
},
{
"id": "s-sawanoi-junmai-ok",
"label": "澤乃井 純米 大辛口",
"name": "澤乃井 純米 大辛口",
"en": "Sawanoi Junmai Ohkarakuchi",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1300,
"p": [
1,
2,
5,
3,
3,
3,
1,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "東京・青梅の蔵の、キレのある辛口純米。冷やでも燗でもすっきりしていて、食事を引き立てる。"
}
]
},
{
"id": "s-senkin",
"name": "せんきん",
"en": "Senkin",
"region": "kanto",
"pref": "栃木",
"lat": 36.66,
"lon": 139.93,
"type": "純米",
"desc": "栃木県さくら市の蔵。甘酸っぱい味わいの「仙禽」で新しい日本酒像を示した。",
"ex": [
{
"id": "s-senkin-modern",
"label": "モダン仙禽 無垢",
"name": "モダン仙禽 無垢",
"en": "Modern Senkin Muku",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
4,
2,
5,
3,
2,
4,
0
],
"tags": [
"りんご",
"ヨーグルト",
"白桃"
],
"desc": "甘酸っぱい果実のような味わい。白ワイン好きにも。"
}
]
},
{
"id": "s-hououbiden",
"name": "小林酒造",
"en": "Kobayashi Shuzo",
"region": "kanto",
"pref": "栃木",
"lat": 36.31,
"lon": 139.8,
"type": "純米",
"desc": "栃木県小山市の蔵。「鳳凰美田」で知られる。",
"ex": [
{
"id": "s-hououbiden-tsurugi",
"label": "鳳凰美田 剱",
"name": "鳳凰美田 剱 純米吟醸",
"en": "Hououbiden Tsurugi",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
4,
3,
4,
2,
3,
2,
3,
0
],
"tags": [
"マスカット",
"洋梨",
"柑橘"
],
"desc": "華やかな香りと、引き締まったキレ。"
}
]
},
{
"id": "s-hanaabi",
"name": "南陽醸造",
"en": "Nanyo Jozo",
"region": "kanto",
"pref": "埼玉",
"lat": 36.19,
"lon": 139.52,
"type": "純米",
"desc": "埼玉県羽生市の蔵。「花陽浴（はなあび）」で人気を集めた。",
"ex": [
{
"id": "s-hanaabi-jg",
"label": "花陽浴 純米吟醸",
"name": "花陽浴 純米吟醸",
"en": "Hanaabi Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
5,
4,
2,
3,
3,
2,
4,
0
],
"tags": [
"パイナップル",
"メロン",
"白桃"
],
"desc": "トロピカルな香りと濃密な甘み。入手困難な人気銘柄。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-shinkame",
"name": "神亀酒造",
"en": "Shinkame Shuzo",
"region": "kanto",
"pref": "埼玉",
"lat": 35.98,
"lon": 139.65,
"type": "純米",
"desc": "埼玉県蓮田市の蔵。全量を純米酒にした先駆けとして知られる。",
"ex": [
{
"id": "s-shinkame-junmai",
"label": "神亀 純米",
"name": "神亀 純米 辛口",
"en": "Shinkame Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "yellow",
"price": 1800,
"p": [
1,
2,
4,
3,
5,
5,
1,
3
],
"tags": [
"ナッツ",
"カラメル",
"炊きたてご飯"
],
"desc": "熟成させた純米酒の、深い旨み。燗がおすすめ。"
},
{
"id": "s-shinkame-hikomago",
"label": "神亀 ひこ孫",
"name": "神亀 ひこ孫",
"en": "Shinkame Hikomago",
"type": "純米",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "yellow",
"price": 2800,
"p": [
1,
2,
4,
3,
5,
5,
0,
4
],
"tags": [
"カラメル",
"ナッツ",
"米粉"
],
"desc": "3年以上熟成させた純米酒。熟成による深い旨みと香ばしさがあり、燗酒にすると料理を選ばない。"
}
]
},
{
"id": "s-teradahonke",
"name": "寺田本家",
"en": "Terada Honke",
"region": "kanto",
"pref": "千葉",
"lat": 35.85,
"lon": 140.5,
"type": "純米",
"desc": "千葉県神崎町の蔵。自然の力を生かした酒造りで知られる。",
"ex": [
{
"id": "s-teradahonke-gonin",
"label": "五人娘 純米",
"name": "五人娘 純米 自然酒",
"en": "Gonin Musume Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 2000,
"p": [
1,
2,
3,
5,
4,
4,
1,
2
],
"tags": [
"ヨーグルト",
"ナッツ",
"穀物"
],
"desc": "酸がしっかりとした、力強い味わいの自然酒。"
}
]
},
{
"id": "s-kubota",
"name": "朝日酒造",
"en": "Asahi Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.42,
"lon": 138.83,
"type": "純米",
"desc": "新潟県長岡市の蔵。「久保田」で淡麗辛口ブームをけん引した。",
"ex": [
{
"id": "s-kubota-senju",
"label": "久保田 千寿",
"name": "久保田 千寿",
"en": "Kubota Senju",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1200,
"p": [
2,
2,
5,
2,
2,
2,
2,
0
],
"tags": [
"ミネラル",
"米粉",
"柑橘"
],
"desc": "すっきりとした淡麗辛口の定番。食事を選ばない。"
},
{
"id": "s-kubota-jd",
"label": "久保田 純米大吟醸",
"name": "久保田 純米大吟醸",
"en": "Kubota Junmai Daiginjo",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 2500,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"メロン",
"白い花"
],
"desc": "華やかな香りとふくらみのある味わい。"
},
{
"id": "s-kubota-manju",
"label": "久保田 萬寿",
"name": "久保田 萬寿",
"en": "Kubota Manju",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 4500,
"p": [
4,
3,
3,
2,
4,
3,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "ふくらみのある香りと、なめらかで深い味わい。贈り物の定番。"
},
{
"id": "s-kubota-hyakuju",
"label": "久保田 百寿",
"name": "久保田 百寿",
"en": "Kubota Hyakuju",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1000,
"p": [
1,
2,
4,
2,
2,
2,
2,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "久保田のなかでもっとも気軽な一本。すっきりとした淡麗辛口で、晩酌や燗酒にも向く。"
},
{
"id": "s-kubota-koju",
"label": "久保田 紅寿",
"name": "久保田 紅寿",
"en": "Kubota Koju",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1800,
"p": [
2,
3,
3,
2,
3,
3,
2,
0
],
"tags": [
"米粉",
"りんご",
"炊きたてご飯"
],
"desc": "久保田のすっきりした味わいに、純米ならではのふくらみを加えた純米吟醸。冷やでもぬる燗でも。"
},
{
"id": "s-kubota-hekiju",
"label": "久保田 碧寿",
"name": "久保田 碧寿",
"en": "Kubota Hekiju",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 2800,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"米粉",
"ナッツ",
"ヨーグルト"
],
"desc": "山廃仕込みの純米大吟醸。山廃らしい酸と旨みの厚みがあり、ぬる燗にすると味わいがふくらむ。"
}
]
},
{
"id": "s-hakkaisan",
"name": "八海醸造",
"en": "Hakkai Brewery",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.08,
"lon": 138.88,
"type": "純米",
"desc": "新潟県南魚沼市の蔵。霊峰八海山の伏流水を使う。",
"ex": [
{
"id": "s-hakkaisan-seishu",
"label": "八海山 清酒",
"name": "八海山 清酒",
"en": "Hakkaisan Seishu",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1100,
"p": [
1,
2,
4,
1,
2,
2,
2,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "すっきり軽快で飲み飽きない、毎日の晩酌に。"
},
{
"id": "s-hakkaisan-tj",
"label": "八海山 特別本醸造",
"name": "八海山 特別本醸造",
"en": "Hakkaisan Tokubetsu Honjozo",
"type": "特別本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1300,
"p": [
2,
2,
5,
1,
2,
2,
2,
0
],
"tags": [
"ミネラル",
"柑橘"
],
"desc": "淡麗でキレのよい、八海山らしい一本。"
},
{
"id": "s-hakkaisan-jg",
"label": "八海山 純米吟醸",
"name": "八海山 純米吟醸",
"en": "Hakkaisan Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
3,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"米粉",
"ミネラル"
],
"desc": "穏やかな香りと、すっきりとした八海山らしい味わい。"
},
{
"id": "s-hakkaisan-daiginjo",
"label": "八海山 大吟醸",
"name": "八海山 大吟醸",
"en": "Hakkaisan Daiginjo",
"type": "大吟醸",
"age": "",
"abv": "",
"cask": "山田錦・五百万石など",
"grapes": [
"yamadanishiki",
"gohyakumangoku"
],
"color": "clear",
"price": 2800,
"p": [
3,
2,
4,
2,
2,
2,
2,
0
],
"tags": [
"メロン",
"洋梨",
"ミネラル"
],
"desc": "精米歩合45%まで磨いた大吟醸。穏やかで上品な香りと、八海山らしいすっきりとした後味。"
},
{
"id": "s-hakkaisan-yukimuro",
"label": "八海山 雪室貯蔵三年",
"name": "八海山 雪室貯蔵三年",
"en": "Hakkaisan Yukimuro 3 Years",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦・五百万石など",
"grapes": [
"yamadanishiki",
"gohyakumangoku"
],
"color": "paleyellow",
"price": 3500,
"p": [
2,
3,
3,
2,
3,
3,
1,
3
],
"tags": [
"ナッツ",
"蜂蜜",
"米粉"
],
"desc": "雪の力で低温に保たれた貯蔵庫「雪室」で3年間ゆっくり熟成させた純米大吟醸。角がとれた、まろやかで落ち着いた味わい。"
}
]
},
{
"id": "s-shimeharitsuru",
"name": "宮尾酒造",
"en": "Miyao Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 38.22,
"lon": 139.48,
"type": "純米",
"desc": "新潟県村上市の蔵。「〆張鶴」で知られる。",
"ex": [
{
"id": "s-shimeharitsuru-jun",
"label": "〆張鶴 純",
"name": "〆張鶴 純 純米吟醸",
"en": "Shimeharitsuru Jun",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "穏やかな香りと、やわらかく上品な味わい。"
},
{
"id": "s-shimeharitsuru-tsuki",
"label": "〆張鶴 月",
"name": "〆張鶴 月",
"en": "Shimeharitsuru Tsuki",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1200,
"p": [
1,
2,
4,
2,
2,
2,
1,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "新潟・村上の蔵の本醸造。やわらかく穏やかな淡麗辛口で、燗にしてもきれい。"
}
]
},
{
"id": "s-koshinokanbai",
"name": "石本酒造",
"en": "Ishimoto Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.82,
"lon": 139.1,
"type": "純米",
"desc": "新潟市の蔵。「越乃寒梅」で地酒ブームの火付け役となった。",
"ex": [
{
"id": "s-koshinokanbai-white",
"label": "越乃寒梅 白ラベル",
"name": "越乃寒梅 白ラベル",
"en": "Koshinokanbai White Label",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1100,
"p": [
1,
1,
5,
1,
2,
2,
2,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "淡麗辛口の代名詞。すっきりとしたキレ。"
},
{
"id": "s-koshinokanbai-bessen",
"label": "越乃寒梅 別撰",
"name": "越乃寒梅 別撰",
"en": "Koshinokanbai Bessen",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1900,
"p": [
2,
2,
5,
2,
2,
2,
1,
0
],
"tags": [
"ミネラル",
"米粉"
],
"desc": "淡麗辛口ブームを牽引した新潟の銘柄の、吟醸酒。すっきりとした飲み口とキレ。"
},
{
"id": "s-koshinokanbai-sai",
"label": "越乃寒梅 灑",
"name": "越乃寒梅 灑",
"en": "Koshinokanbai Sai",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "五百万石など",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1600,
"p": [
3,
3,
4,
2,
3,
2,
2,
0
],
"tags": [
"りんご",
"米粉",
"ミネラル"
],
"desc": "越乃寒梅初の純米吟醸として生まれた。淡麗さのなかに、純米らしい米のふくらみ。"
}
]
},
{
"id": "s-jozen",
"name": "白瀧酒造",
"en": "Shirataki Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 36.93,
"lon": 138.81,
"type": "純米",
"desc": "新潟県湯沢町の蔵。「上善如水」で、軽やかな日本酒を広めた。",
"ex": [
{
"id": "s-jozen-jg",
"label": "上善如水 純米吟醸",
"name": "上善如水 純米吟醸",
"en": "Jozen Mizunogotoshi Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1300,
"p": [
3,
2,
4,
2,
2,
1,
4,
0
],
"tags": [
"りんご",
"柑橘",
"ミネラル"
],
"desc": "その名のとおり水のように軽やかで、すいすい飲める。"
}
]
},
{
"id": "s-masuizumi",
"name": "桝田酒造店",
"en": "Masuda Shuzoten",
"region": "hokuriku",
"pref": "富山",
"lat": 36.76,
"lon": 137.23,
"type": "純米",
"desc": "富山市岩瀬の蔵。「満寿泉」で知られる。",
"ex": [
{
"id": "s-masuizumi-jg",
"label": "満寿泉 純米吟醸",
"name": "満寿泉 純米吟醸",
"en": "Masuizumi Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
2,
3,
3,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "穏やかな香りと、ふくよかな旨み。富山湾の魚に合う。"
}
]
},
{
"id": "s-tedorigawa",
"name": "吉田酒造店",
"en": "Yoshida Shuzoten",
"region": "hokuriku",
"pref": "石川",
"lat": 36.42,
"lon": 136.62,
"type": "純米",
"desc": "石川県白山市の蔵。「手取川」で知られる。",
"ex": [
{
"id": "s-tedorigawa-yk",
"label": "手取川 山廃仕込純米 酒魂",
"name": "手取川 山廃仕込純米 酒魂",
"en": "Tedorigawa Yamahai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
3,
4,
4,
1,
2
],
"tags": [
"炊きたてご飯",
"ヨーグルト",
"ナッツ"
],
"desc": "山廃らしい酸と旨み。燗にするとふくらむ。"
}
]
},
{
"id": "s-tengumai",
"name": "車多酒造",
"en": "Shata Shuzo",
"region": "hokuriku",
"pref": "石川",
"lat": 36.49,
"lon": 136.52,
"type": "純米",
"desc": "石川県白山市の蔵。山廃仕込みの「天狗舞」で名高い。",
"ex": [
{
"id": "s-tengumai-yamahai",
"label": "天狗舞 山廃仕込純米酒",
"name": "天狗舞 山廃仕込純米酒",
"en": "Tengumai Yamahai Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "yellow",
"price": 1700,
"p": [
2,
2,
3,
3,
5,
5,
1,
3
],
"tags": [
"ナッツ",
"カラメル",
"炊きたてご飯"
],
"desc": "山吹色で、濃厚な旨みと酸。ぬる燗がおすすめ。"
},
{
"id": "s-tengumai-jg",
"label": "天狗舞 吟醸 吟こうぶり",
"name": "天狗舞 吟醸 吟こうぶり",
"en": "Tengumai Gin Kouburi",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
4,
2,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"メロン",
"米粉"
],
"desc": "華やかな香りと、ふくよかな味わい。"
},
{
"id": "s-tengumai-yamahai-jdg",
"label": "天狗舞 山廃仕込 純米大吟醸",
"name": "天狗舞 山廃仕込 純米大吟醸",
"en": "Tengumai Yamahai Junmai Daiginjo",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "paleyellow",
"price": 4000,
"p": [
3,
3,
3,
3,
4,
4,
1,
2
],
"tags": [
"ナッツ",
"蜂蜜",
"米粉"
],
"desc": "山廃仕込みの名手として知られる蔵の純米大吟醸。上品な香りのなかに、山廃らしい力強い旨みと酸。"
}
]
},
{
"id": "s-kokuryu",
"name": "黒龍酒造",
"en": "Kokuryu Sake Brewery",
"region": "hokuriku",
"pref": "福井",
"lat": 36.08,
"lon": 136.3,
"type": "純米",
"desc": "福井県永平寺町の蔵。大吟醸の熟成などで先駆的な取り組みを続ける。",
"ex": [
{
"id": "s-kokuryu-icchorai",
"label": "黒龍 いっちょらい",
"name": "黒龍 吟醸 いっちょらい",
"en": "Kokuryu Icchorai",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "五百万石",
"grapes": [
"gohyakumangoku"
],
"color": "clear",
"price": 1400,
"p": [
3,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"白い花",
"ミネラル"
],
"desc": "穏やかな香りとすっきりした味わいの、黒龍の定番。"
},
{
"id": "s-kokuryu-jg",
"label": "黒龍 純米吟醸",
"name": "黒龍 純米吟醸",
"en": "Kokuryu Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
3,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "穏やかな香りと、なめらかでキレのよい味わい。"
},
{
"id": "s-kokuryu-ryu",
"label": "黒龍 大吟醸 龍",
"name": "黒龍 大吟醸 龍",
"en": "Kokuryu Daiginjo Ryu",
"type": "大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 4500,
"p": [
4,
2,
4,
2,
2,
2,
2,
1
],
"tags": [
"洋梨",
"メロン",
"ミネラル"
],
"desc": "1975年に誕生した、日本酒の熟成という考え方を広めた大吟醸。低温でじっくり寝かせ、上品な香りとなめらかさ。"
}
]
},
{
"id": "s-kikusui",
"name": "菊水酒造",
"en": "Kikusui Sake",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.95,
"lon": 139.33,
"type": "純米",
"desc": "新潟県新発田市の蔵。日本初の缶入り生原酒「ふなぐち」で知られる。",
"ex": [
{
"id": "s-kikusui-funaguchi",
"label": "ふなぐち菊水一番しぼり",
"name": "ふなぐち菊水一番しぼり",
"en": "Funaguchi Kikusui Ichiban Shibori",
"type": "本醸造",
"age": "",
"abv": "19",
"cask": "",
"grapes": [],
"color": "clear",
"price": 300,
"p": [
3,
4,
2,
2,
4,
4,
4,
0
],
"tags": [
"メロン",
"米粉",
"蜂蜜"
],
"desc": "しぼりたての生原酒を缶に詰めた、濃厚でフレッシュな味わい。",
"priceNote": "200ml缶1本のおおよその店頭価格です"
}
]
},
{
"id": "s-born",
"name": "加藤吟醸本店",
"en": "Katoukichibee Shouten",
"region": "hokuriku",
"pref": "福井",
"lat": 35.96,
"lon": 136.18,
"type": "純米",
"desc": "福井県鯖江市の蔵。「梵（ぼん）」は熟成させた純米大吟醸で知られる。",
"ex": [
{
"id": "s-born-gold",
"label": "梵 ゴールド",
"name": "梵 ゴールド 無濾過純米大吟醸",
"en": "Born Gold",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 2800,
"p": [
4,
3,
3,
2,
3,
3,
2,
2
],
"tags": [
"洋梨",
"蜂蜜",
"白い花"
],
"desc": "低温で熟成させた、なめらかで上品な純米大吟醸。"
},
{
"id": "s-born-tokishirazu",
"label": "梵 ときしらず",
"name": "梵 ときしらず",
"en": "Born Tokishirazu",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "paleyellow",
"price": 1900,
"p": [
3,
3,
3,
2,
3,
3,
1,
3
],
"tags": [
"洋梨",
"蜂蜜",
"ナッツ"
],
"desc": "低温で長く熟成させた純米吟醸。名は「時を知らず」熟成を続けることから。まろやかで香り穏やか。"
}
]
},
{
"id": "s-kikuhime",
"name": "菊姫",
"en": "Kikuhime",
"region": "hokuriku",
"pref": "石川",
"lat": 36.45,
"lon": 136.63,
"type": "純米",
"desc": "石川県白山市鶴来の蔵。山廃仕込みと熟成による、濃醇な酒で知られる。",
"ex": [
{
"id": "s-kikuhime-yamahai",
"label": "菊姫 山廃純米",
"name": "菊姫 山廃純米",
"en": "Kikuhime Yamahai Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "yellow",
"price": 2200,
"p": [
1,
2,
3,
4,
5,
5,
1,
4
],
"tags": [
"カラメル",
"ナッツ",
"炊きたてご飯",
"ドライフルーツ"
],
"desc": "熟成による山吹色と、力強い旨みと酸。燗で真価を発揮する。"
},
{
"id": "s-kikuhime-ginjo",
"label": "菊姫 吟",
"name": "菊姫 吟",
"en": "Kikuhime Gin",
"type": "吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "paleyellow",
"price": 3000,
"p": [
3,
2,
3,
3,
4,
4,
1,
2
],
"tags": [
"洋梨",
"ナッツ",
"蜂蜜"
],
"desc": "熟成させた吟醸酒。香りは穏やかで、味わいに厚みがある。"
},
{
"id": "s-kikuhime-tsurunosato",
"label": "菊姫 鶴乃里",
"name": "菊姫 鶴乃里",
"en": "Kikuhime Tsurunosato",
"type": "純米",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "yellow",
"price": 2800,
"p": [
2,
3,
3,
3,
5,
5,
1,
3
],
"tags": [
"米粉",
"ナッツ",
"カラメル"
],
"desc": "特A地区の山田錦を使い、山廃仕込みで熟成させた純米酒。濃厚な旨みと酸で、燗にすると本領を発揮する。"
}
]
},
{
"id": "s-kakurei",
"name": "青木酒造",
"en": "Aoki Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.0,
"lon": 138.86,
"type": "純米",
"desc": "新潟県南魚沼市塩沢の蔵。「鶴齢」で知られる。",
"ex": [
{
"id": "s-kakurei-tj",
"label": "鶴齢 特別純米",
"name": "鶴齢 特別純米",
"en": "Kakurei Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
2,
4,
3,
2,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"洋梨"
],
"desc": "米の旨みがふくらむ、やわらかな味わいの純米酒。"
}
]
},
{
"id": "s-kagetora",
"name": "諸橋酒造",
"en": "Morohashi Shuzo",
"region": "hokuriku",
"pref": "新潟",
"lat": 37.4,
"lon": 138.95,
"type": "純米",
"desc": "新潟県長岡市栃尾の蔵。「越乃景虎」で知られる。",
"ex": [
{
"id": "s-kagetora-meisui",
"label": "越乃景虎 名水仕込 特別純米",
"name": "越乃景虎 名水仕込 特別純米",
"en": "Koshino Kagetora Meisui",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"ミネラル",
"柑橘"
],
"desc": "超軟水の名水で仕込んだ、なめらかで淡麗な純米酒。"
}
]
},
{
"id": "s-haneya",
"name": "富美菊酒造",
"en": "Fumigiku Shuzo",
"region": "hokuriku",
"pref": "富山",
"lat": 36.69,
"lon": 137.22,
"type": "純米",
"desc": "富山市の蔵。「羽根屋」で注目を集める。",
"ex": [
{
"id": "s-haneya-jg",
"label": "羽根屋 純米吟醸",
"name": "羽根屋 純米吟醸 煌火",
"en": "Haneya Junmai Ginjo Kirabi",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"メロン",
"白桃",
"白い花"
],
"desc": "華やかな香りと、透明感のある味わい。"
}
]
},
{
"id": "s-masumi",
"name": "宮坂醸造",
"en": "Miyasaka Brewing",
"region": "koshin",
"pref": "長野",
"lat": 36.04,
"lon": 138.12,
"type": "純米",
"desc": "長野県諏訪市の蔵。「真澄」の蔵で、7号酵母が発見された蔵として知られる。",
"ex": [
{
"id": "s-masumi-karakuchi",
"label": "真澄 辛口生一本",
"name": "真澄 純米吟醸 辛口生一本",
"en": "Masumi Karakuchi Kiippon",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "美山錦など",
"grapes": [
"miyamanishiki"
],
"color": "clear",
"price": 1500,
"p": [
2,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"柑橘",
"ミネラル"
],
"desc": "穏やかな香りとすっきりとした辛口。"
},
{
"id": "s-masumi-sanka",
"label": "真澄 純米大吟醸 山花",
"name": "真澄 純米大吟醸 山花",
"en": "Masumi Sanka",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 3500,
"p": [
3,
3,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "7号酵母らしい落ち着いた香りと、上品な旨み。"
},
{
"id": "s-masumi-kuro",
"label": "真澄 純米吟醸 漆黒 KURO",
"name": "真澄 純米吟醸 漆黒 KURO",
"en": "Masumi Kuro",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "美山錦など",
"grapes": [
"miyamanishiki"
],
"color": "clear",
"price": 1800,
"p": [
2,
2,
4,
3,
4,
4,
1,
0
],
"tags": [
"米粉",
"ナッツ",
"穀物"
],
"desc": "真澄のなかでも旨みとキレのあるタイプ。しっかりした味わいで、肉料理や燗にも向く。"
}
]
},
{
"id": "s-isojiman",
"name": "磯自慢酒造",
"en": "Isojiman",
"region": "koshin",
"pref": "静岡",
"lat": 34.88,
"lon": 138.32,
"type": "純米",
"desc": "静岡県焼津市の蔵。透明感のある吟醸酒で知られる。",
"ex": [
{
"id": "s-isojiman-honjozo",
"label": "磯自慢 特別本醸造",
"name": "磯自慢 特別本醸造",
"en": "Isojiman Tokubetsu Honjozo",
"type": "特別本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
2,
4,
2,
2,
2,
3,
0
],
"tags": [
"メロン",
"柑橘",
"ミネラル"
],
"desc": "透明感のある香りと、きれいな味わい。"
}
]
},
{
"id": "s-kuheiji",
"name": "萬乗醸造",
"en": "Banjo Jozo",
"region": "koshin",
"pref": "愛知",
"lat": 35.1,
"lon": 136.97,
"type": "純米",
"desc": "名古屋市の蔵。「醸し人九平次」はフランスのレストランでも採用されてきた。",
"ex": [
{
"id": "s-kuheiji-eau",
"label": "醸し人九平次 純米大吟醸 EAU DU DESIR",
"name": "醸し人九平次 純米大吟醸 EAU DU DESIR",
"en": "Kamoshibito Kuheiji Eau du Desir",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 2500,
"p": [
4,
3,
3,
4,
3,
2,
4,
0
],
"tags": [
"白桃",
"マスカット",
"柑橘"
],
"desc": "果実のような香りと、きれいな酸。ワイングラスで楽しみたい。"
}
]
},
{
"id": "s-jikon",
"name": "木屋正酒造",
"en": "Kiyasho Shuzo",
"region": "koshin",
"pref": "三重",
"lat": 34.62,
"lon": 136.1,
"type": "純米",
"desc": "三重県名張市の蔵。「而今」で全国的な人気を集めた。",
"ex": [
{
"id": "s-jikon-tj",
"label": "而今 特別純米",
"name": "而今 特別純米",
"en": "Jikon Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
4,
4,
3,
3,
3,
2,
4,
0
],
"tags": [
"白桃",
"パイナップル",
"メロン"
],
"desc": "果実のようなジューシーな甘みと酸。入手困難な人気銘柄。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
}
]
},
{
"id": "s-zaku",
"name": "清水清三郎商店",
"en": "Shimizu Seizaburo Shoten",
"region": "koshin",
"pref": "三重",
"lat": 34.88,
"lon": 136.58,
"type": "純米",
"desc": "三重県鈴鹿市の蔵。「作（ざく）」は伊勢志摩サミットの乾杯酒にも選ばれた。",
"ex": [
{
"id": "s-zaku-honochi",
"label": "作 穂乃智",
"name": "作 穂乃智 純米",
"en": "Zaku Honochi",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "穏やかな香りとやわらかな旨みの、作の定番。"
}
]
},
{
"id": "s-shichiken",
"name": "山梨銘醸",
"en": "Yamanashi Meijo",
"region": "koshin",
"pref": "山梨",
"lat": 35.82,
"lon": 138.32,
"type": "純米",
"desc": "山梨県北杜市白州の蔵。「七賢」で知られる。",
"ex": [
{
"id": "s-shichiken-furin",
"label": "七賢 風凛美山",
"name": "七賢 純米 風凛美山",
"en": "Shichiken Furin Bizan",
"type": "純米",
"age": "",
"abv": "",
"cask": "美山錦",
"grapes": [
"miyamanishiki"
],
"color": "clear",
"price": 1500,
"p": [
3,
2,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"柑橘",
"米粉"
],
"desc": "南アルプスの水で仕込んだ、軽やかでやさしい純米酒。"
}
]
},
{
"id": "s-kaiun",
"name": "土井酒造場",
"en": "Doi Shuzojo",
"region": "koshin",
"pref": "静岡",
"lat": 34.71,
"lon": 138.03,
"type": "純米",
"desc": "静岡県掛川市の蔵。「開運」で知られる。",
"ex": [
{
"id": "s-kaiun-tj",
"label": "開運 特別純米",
"name": "開運 特別純米",
"en": "Kaiun Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
2,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"メロン",
"米粉"
],
"desc": "静岡酵母らしい穏やかな香りと、きれいな味わい。"
}
]
},
{
"id": "s-kikuyoi",
"name": "青島酒造",
"en": "Aoshima Shuzo",
"region": "koshin",
"pref": "静岡",
"lat": 34.86,
"lon": 138.26,
"type": "純米",
"desc": "静岡県藤枝市の蔵。「喜久醉」で知られる。",
"ex": [
{
"id": "s-kikuyoi-tj",
"label": "喜久醉 特別純米",
"name": "喜久醉 特別純米",
"en": "Kikuyoi Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
4,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"洋梨",
"ミネラル"
],
"desc": "穏やかな香りと、すっきりとした上品な味わい。"
}
]
},
{
"id": "s-daishinshu",
"name": "大信州酒造",
"en": "Daishinshu",
"region": "koshin",
"pref": "長野",
"lat": 36.25,
"lon": 137.97,
"type": "純米",
"desc": "長野県松本市の蔵。長野の米と水にこだわる。",
"ex": [
{
"id": "s-daishinshu-karakuchi",
"label": "大信州 超辛口純米吟醸",
"name": "大信州 超辛口純米吟醸",
"en": "Daishinshu Chokarakuchi",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
1,
5,
2,
3,
2,
3,
0
],
"tags": [
"りんご",
"柑橘",
"ミネラル"
],
"desc": "香りがありながら、キレのよい辛口。"
}
]
},
{
"id": "s-yoakemae",
"name": "小野酒造店",
"en": "Ono Shuzoten",
"region": "koshin",
"pref": "長野",
"lat": 35.98,
"lon": 137.98,
"type": "純米",
"desc": "長野県辰野町の蔵。島崎藤村の小説から名を取った「夜明け前」で知られる。",
"ex": [
{
"id": "s-yoakemae-jg",
"label": "夜明け前 純米吟醸 生一本",
"name": "夜明け前 純米吟醸 生一本",
"en": "Yoakemae Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"メロン",
"白い花"
],
"desc": "華やかで上品な香りと、やわらかな味わい。"
}
]
},
{
"id": "s-gekkeikan",
"name": "月桂冠",
"en": "Gekkeikan",
"region": "kinki",
"pref": "京都",
"lat": 34.93,
"lon": 135.76,
"type": "純米",
"desc": "京都・伏見の大手酒造。1637年創業。",
"ex": [
{
"id": "s-gekkeikan-josen",
"label": "月桂冠 上撰",
"name": "月桂冠 上撰",
"en": "Gekkeikan Jousen",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1000,
"p": [
1,
3,
3,
2,
3,
3,
1,
1
],
"tags": [
"米粉",
"炊きたてご飯"
],
"desc": "まろやかで飲みやすい、燗にも向く定番の日本酒。"
},
{
"id": "s-gekkeikan-horin",
"label": "月桂冠 鳳麟 純米大吟醸",
"name": "月桂冠 鳳麟 純米大吟醸",
"en": "Gekkeikan Horin Junmai Daiginjo",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦など",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 2000,
"p": [
4,
3,
3,
2,
2,
2,
2,
0
],
"tags": [
"メロン",
"りんご",
"白い花"
],
"desc": "京都・伏見の大手蔵の純米大吟醸。手頃な価格で、華やかな香りとなめらかな口当たり。"
}
]
},
{
"id": "s-tamanohikari",
"name": "玉乃光酒造",
"en": "Tamanohikari",
"region": "kinki",
"pref": "京都",
"lat": 34.94,
"lon": 135.76,
"type": "純米",
"desc": "京都・伏見の蔵。純米酒にいち早く取り組んだ。",
"ex": [
{
"id": "s-tamanohikari-omachi",
"label": "玉乃光 純米吟醸 備前雄町100%",
"name": "玉乃光 純米吟醸 備前雄町100%",
"en": "Tamanohikari Bizen Omachi",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "雄町",
"grapes": [
"omachi"
],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
3,
4,
3,
2,
0
],
"tags": [
"洋梨",
"ナッツ",
"米粉"
],
"desc": "雄町らしいふくよかな旨みと、すっきりした後味。"
}
]
},
{
"id": "s-hakutsuru",
"name": "白鶴酒造",
"en": "Hakutsuru",
"region": "kinki",
"pref": "兵庫",
"lat": 34.71,
"lon": 135.27,
"type": "純米",
"desc": "神戸・灘の大手酒造。日本有数の生産量を誇る。",
"ex": [
{
"id": "s-hakutsuru-josen",
"label": "白鶴 上撰",
"name": "白鶴 上撰",
"en": "Hakutsuru Jousen",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 800,
"p": [
1,
2,
3,
2,
3,
3,
1,
1
],
"tags": [
"米粉",
"炊きたてご飯"
],
"desc": "すっきりとした飲み口で、冷やでも燗でも。"
},
{
"id": "s-hakutsuru-maru",
"label": "白鶴 まる",
"name": "白鶴 まる",
"en": "Hakutsuru Maru",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1100,
"p": [
1,
2,
3,
2,
3,
3,
1,
1
],
"tags": [
"米粉"
],
"desc": "丸いパックでおなじみの、毎日の晩酌の定番。",
"priceNote": "2Lパックのおおよその店頭価格です"
}
]
},
{
"id": "s-kikumasamune",
"name": "菊正宗酒造",
"en": "Kiku-Masamune",
"region": "kinki",
"pref": "兵庫",
"lat": 34.71,
"lon": 135.28,
"type": "純米",
"desc": "神戸・灘の蔵。生酛造りによる辛口の酒で知られる。",
"ex": [
{
"id": "s-kikumasamune-josen",
"label": "菊正宗 上撰 本醸造",
"name": "菊正宗 上撰 本醸造",
"en": "Kiku-Masamune Jousen",
"type": "本醸造",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1000,
"p": [
1,
1,
5,
3,
3,
3,
1,
1
],
"tags": [
"米粉",
"ミネラル"
],
"desc": "生酛造りのキレのある辛口。燗で引き立つ。"
},
{
"id": "s-kikumasamune-kahogura",
"label": "嘉宝蔵 生酛純米",
"name": "菊正宗 嘉宝蔵 生酛純米",
"en": "Kiku-Masamune Kahogura Kimoto Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1500,
"p": [
2,
2,
4,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"ナッツ",
"ヨーグルト"
],
"desc": "生酛ならではのしっかりした旨みと酸。"
}
]
},
{
"id": "s-kenbishi",
"name": "剣菱酒造",
"en": "Kenbishi",
"region": "kinki",
"pref": "兵庫",
"lat": 34.72,
"lon": 135.28,
"type": "純米",
"desc": "神戸・灘の蔵。室町時代の創業と伝わる、伝統の味を守る蔵。",
"ex": [
{
"id": "s-kenbishi-kuro",
"label": "黒松剣菱",
"name": "黒松剣菱",
"en": "Kuromatsu Kenbishi",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "yellow",
"price": 1400,
"p": [
1,
2,
3,
3,
4,
5,
1,
3
],
"tags": [
"カラメル",
"ナッツ",
"米粉"
],
"desc": "熟成させた酒を合わせた、山吹色の濃い旨み。燗がおすすめ。"
},
{
"id": "s-kenbishi-mizuho",
"label": "瑞穂黒松剣菱",
"name": "瑞穂黒松剣菱",
"en": "Mizuho Kuromatsu Kenbishi",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "山田錦・愛山など",
"grapes": [
"yamadanishiki",
"aiyama"
],
"color": "yellow",
"price": 2000,
"p": [
1,
3,
3,
3,
5,
5,
0,
4
],
"tags": [
"カラメル",
"ナッツ",
"米粉"
],
"desc": "黒松剣菱の原酒をさらに長く熟成させた上位品。山吹色で、濃い旨みとカラメルのような熟成香。燗酒で。"
}
]
},
{
"id": "s-ozeki",
"name": "大関",
"en": "Ozeki",
"region": "kinki",
"pref": "兵庫",
"lat": 34.73,
"lon": 135.34,
"type": "純米",
"desc": "兵庫県西宮市の大手酒造。「ワンカップ大関」を生んだ。",
"ex": [
{
"id": "s-ozeki-onecup",
"label": "ワンカップ大関",
"name": "ワンカップ大関 上撰",
"en": "One Cup Ozeki",
"type": "普通酒",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 250,
"p": [
1,
3,
3,
2,
3,
3,
1,
1
],
"tags": [
"米粉",
"炊きたてご飯"
],
"desc": "1964年に生まれた、カップ酒の元祖。",
"priceNote": "180mlカップ1本のおおよその店頭価格です"
}
]
},
{
"id": "s-shochikubai",
"name": "宝酒造（松竹梅）",
"en": "Takara Shuzo",
"region": "kinki",
"pref": "京都",
"lat": 34.93,
"lon": 135.74,
"type": "純米",
"desc": "京都の大手酒造。「松竹梅」のブランドで知られる。",
"ex": [
{
"id": "s-shochikubai-mio",
"label": "松竹梅白壁蔵 澪",
"name": "松竹梅白壁蔵 澪 スパークリング清酒",
"en": "Shochikubai Shirakabegura Mio",
"type": "スパークリング",
"age": "",
"abv": "5",
"cask": "",
"grapes": [],
"color": "clear",
"price": 600,
"p": [
4,
5,
1,
3,
1,
1,
5,
0
],
"tags": [
"マスカット",
"りんご",
"ガス感"
],
"desc": "甘くて爽やかな、低アルコールの泡の日本酒。",
"priceNote": "300mlのおおよその店頭価格です"
}
]
},
{
"id": "s-kazenomori",
"name": "油長酒造",
"en": "Yucho Shuzo",
"region": "kinki",
"pref": "奈良",
"lat": 34.46,
"lon": 135.74,
"type": "純米",
"desc": "奈良県御所市の蔵。「風の森」は、しぼったままの無ろ過・無加水の生酒が中心。",
"ex": [
{
"id": "s-kazenomori-akitsuho",
"label": "風の森 秋津穂",
"name": "風の森 秋津穂 純米",
"en": "Kazenomori Akitsuho",
"type": "純米",
"age": "",
"abv": "",
"cask": "秋津穂",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
4,
3,
3,
4,
3,
2,
5,
0
],
"tags": [
"マスカット",
"柑橘",
"ガス感"
],
"desc": "ピチピチとしたガス感とフレッシュな酸。"
}
]
},
{
"id": "s-sawaya",
"name": "松本酒造",
"en": "Matsumoto Shuzo",
"region": "kinki",
"pref": "京都",
"lat": 34.92,
"lon": 135.77,
"type": "純米",
"desc": "京都・伏見の蔵。「澤屋まつもと」で注目を集める。",
"ex": [
{
"id": "s-sawaya-shutosha",
"label": "澤屋まつもと 守破離",
"name": "澤屋まつもと 守破離",
"en": "Sawaya Matsumoto Shuhari",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
2,
4,
4,
3,
2,
3,
0
],
"tags": [
"柑橘",
"りんご",
"ミネラル"
],
"desc": "爽やかな酸とキレのよさ。食事を引き立てる。"
}
]
},
{
"id": "s-shichihonyari",
"name": "冨田酒造",
"en": "Tomita Shuzo",
"region": "kinki",
"pref": "滋賀",
"lat": 35.5,
"lon": 136.21,
"type": "純米",
"desc": "滋賀県長浜市木之本の蔵。「七本鎗」で知られる。",
"ex": [
{
"id": "s-shichihonyari-junmai",
"label": "七本鎗 純米",
"name": "七本鎗 純米",
"en": "Shichihonyari Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"ナッツ"
],
"desc": "米の旨みがしっかりとした、燗に向く純米酒。"
}
]
},
{
"id": "s-matsunotsukasa",
"name": "松瀬酒造",
"en": "Matsuse Shuzo",
"region": "kinki",
"pref": "滋賀",
"lat": 35.07,
"lon": 136.1,
"type": "純米",
"desc": "滋賀県竜王町の蔵。「松の司」で知られる。",
"ex": [
{
"id": "s-matsunotsukasa-raku",
"label": "松の司 純米吟醸 楽",
"name": "松の司 純米吟醸 楽",
"en": "Matsunotsukasa Raku",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
2,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "穏やかな香りと、透明感のある旨み。"
}
]
},
{
"id": "s-furosen",
"name": "上原酒造",
"en": "Uehara Shuzo",
"region": "kinki",
"pref": "滋賀",
"lat": 35.3,
"lon": 136.06,
"type": "純米",
"desc": "滋賀県高島市の蔵。木桶と山廃仕込みを守る。",
"ex": [
{
"id": "s-furosen-yamahai",
"label": "不老泉 山廃仕込純米",
"name": "不老泉 山廃仕込純米",
"en": "Furosen Yamahai Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "yellow",
"price": 1800,
"p": [
1,
2,
3,
4,
5,
5,
1,
3
],
"tags": [
"ナッツ",
"カラメル",
"ヨーグルト"
],
"desc": "自然の乳酸菌を生かした山廃の、複雑な旨みと酸。"
}
]
},
{
"id": "s-eikun",
"name": "齊藤酒造",
"en": "Saito Shuzo",
"region": "kinki",
"pref": "京都",
"lat": 34.93,
"lon": 135.76,
"type": "純米",
"desc": "京都・伏見の蔵。「英勲」で知られる。",
"ex": [
{
"id": "s-eikun-jg",
"label": "英勲 純米吟醸 古都千年",
"name": "英勲 純米吟醸 古都千年",
"en": "Eikun Kotosennen",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "祝",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
3,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "京都の酒米「祝」を使った、やさしく上品な味わい。"
}
]
},
{
"id": "s-akishika",
"name": "秋鹿酒造",
"en": "Akishika",
"region": "kinki",
"pref": "大阪",
"lat": 34.97,
"lon": 135.42,
"type": "純米",
"desc": "大阪府能勢町の蔵。自ら米を育て、純米酒だけを造る。",
"ex": [
{
"id": "s-akishika-junmai",
"label": "秋鹿 純米",
"name": "秋鹿 純米",
"en": "Akishika Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
1,
2,
4,
4,
5,
4,
1,
2
],
"tags": [
"ナッツ",
"炊きたてご飯",
"ヨーグルト"
],
"desc": "しっかりした酸と旨みの、燗映えする純米酒。"
}
]
},
{
"id": "s-chikusen",
"name": "田治米",
"en": "Tajime",
"region": "kinki",
"pref": "兵庫",
"lat": 35.25,
"lon": 134.85,
"type": "純米",
"desc": "兵庫県朝来市の蔵。「竹泉」は燗で旨くなる純米酒にこだわる。",
"ex": [
{
"id": "s-chikusen-junmai",
"label": "竹泉 純米",
"name": "竹泉 純米",
"en": "Chikusen Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"ナッツ",
"米粉"
],
"desc": "米の旨みと酸がしっかりとした、燗向きの純米酒。"
}
]
},
{
"id": "s-tatsuriki",
"name": "本田商店",
"en": "Honda Shoten",
"region": "kinki",
"pref": "兵庫",
"lat": 34.78,
"lon": 134.66,
"type": "純米",
"desc": "兵庫県姫路市の蔵。「龍力」は山田錦にこだわる。",
"ex": [
{
"id": "s-tatsuriki-tj",
"label": "龍力 特別純米 播州山田錦",
"name": "龍力 特別純米 播州山田錦",
"en": "Tatsuriki Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 1500,
"p": [
3,
2,
3,
2,
4,
3,
2,
1
],
"tags": [
"洋梨",
"米粉",
"ナッツ"
],
"desc": "山田錦らしいふくよかな旨み。"
}
]
},
{
"id": "s-okuharima",
"name": "下村酒造店",
"en": "Shimomura Shuzoten",
"region": "kinki",
"pref": "兵庫",
"lat": 35.01,
"lon": 134.63,
"type": "純米",
"desc": "兵庫県姫路市安富町の小さな蔵。「奥播磨」は純米酒だけを造る。",
"ex": [
{
"id": "s-okuharima-junmai",
"label": "奥播磨 純米",
"name": "奥播磨 純米",
"en": "Okuharima Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"ナッツ",
"米粉"
],
"desc": "穏やかな香りと、ふくらみのある旨み。"
}
]
},
{
"id": "s-hanatomoe",
"name": "美吉野醸造",
"en": "Miyoshino Jozo",
"region": "kinki",
"pref": "奈良",
"lat": 34.39,
"lon": 135.85,
"type": "純米",
"desc": "奈良県吉野町の蔵。「花巴」は、奈良に伝わる「水酛」など酸の効いた酒で知られる。",
"ex": [
{
"id": "s-hanatomoe-mizumoto",
"label": "花巴 水酛 純米",
"name": "花巴 水酛 純米",
"en": "Hanatomoe Mizumoto Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "paleyellow",
"price": 1800,
"p": [
1,
3,
2,
5,
4,
4,
1,
2
],
"tags": [
"ヨーグルト",
"柑橘",
"ナッツ"
],
"desc": "強い酸と甘み、旨みが重なる個性的な味わい。"
}
]
},
{
"id": "s-kuroushi",
"name": "名手酒造店",
"en": "Nate Shuzoten",
"region": "kinki",
"pref": "和歌山",
"lat": 34.1,
"lon": 135.19,
"type": "純米",
"desc": "和歌山県海南市の蔵。「黒牛」で知られる。",
"ex": [
{
"id": "s-kuroushi-junmai",
"label": "黒牛 純米",
"name": "黒牛 純米",
"en": "Kuroushi Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"ナッツ"
],
"desc": "ふくらみのある旨みと、やわらかな口当たり。"
}
]
},
{
"id": "s-kid",
"name": "平和酒造",
"en": "Heiwa Shuzo",
"region": "kinki",
"pref": "和歌山",
"lat": 34.18,
"lon": 135.3,
"type": "純米",
"desc": "和歌山県海南市の蔵。「紀土（KID）」で人気を集める。",
"ex": [
{
"id": "s-kid-jg",
"label": "紀土 純米吟醸",
"name": "紀土 純米吟醸",
"en": "KID Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"メロン",
"白い花"
],
"desc": "華やかな香りと、さらりとした味わい。手頃な価格も魅力。"
}
]
},
{
"id": "s-dassai",
"name": "獺祭",
"en": "Dassai",
"region": "chugoku",
"pref": "山口",
"lat": 34.11,
"lon": 132.01,
"type": "純米",
"desc": "山口県岩国市の山あいの蔵。純米大吟醸だけを造り、世界に日本酒を広めた。",
"ex": [
{
"id": "s-dassai-45",
"label": "獺祭 純米大吟醸45",
"name": "獺祭 純米大吟醸45",
"en": "Dassai 45",
"type": "純米大吟醸",
"age": "45",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 1800,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"メロン",
"洋梨",
"白い花"
],
"desc": "華やかな香りとやわらかな甘み。純米大吟醸の入門に。"
},
{
"id": "s-dassai-39",
"label": "獺祭 純米大吟醸 磨き三割九分",
"name": "獺祭 純米大吟醸 磨き三割九分",
"en": "Dassai 39",
"type": "純米大吟醸",
"age": "39",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 3000,
"p": [
5,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"メロン",
"洋梨",
"白い花"
],
"desc": "45と二割三分の間に位置する、華やかでなめらかな一本。"
},
{
"id": "s-dassai-23",
"label": "獺祭 純米大吟醸 磨き二割三分",
"name": "獺祭 純米大吟醸 磨き二割三分",
"en": "Dassai 23",
"type": "純米大吟醸",
"age": "23",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 5500,
"p": [
5,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"メロン",
"白桃",
"白い花"
],
"desc": "米を23%まで磨いた、繊細で上品な香り。"
},
{
"id": "s-dassai-sparkling",
"label": "獺祭 スパークリング45",
"name": "獺祭 スパークリング45",
"en": "Dassai Sparkling 45",
"type": "スパークリング",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "cloudy",
"price": 2000,
"p": [
4,
4,
2,
3,
2,
2,
5,
0
],
"tags": [
"白桃",
"りんご",
"ガス感"
],
"desc": "瓶の中で二次発酵させた、うすにごりのスパークリング。白桃のような甘い香りと、きめ細かい泡。乾杯や前菜に。"
},
{
"id": "s-dassai-beyond",
"label": "獺祭 磨き その先へ",
"name": "獺祭 磨き その先へ",
"en": "Dassai Beyond",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 35000,
"p": [
5,
3,
3,
2,
3,
3,
2,
0
],
"tags": [
"白桃",
"メロン",
"白い花"
],
"desc": "精米歩合の数字を明かさず、「磨き二割三分」を超える酒を目指した獺祭の最上位。華やかで奥行きのある香りが長く続く。"
}
]
},
{
"id": "s-toyobijin",
"name": "澄川酒造場",
"en": "Sumikawa Shuzojo",
"region": "chugoku",
"pref": "山口",
"lat": 34.43,
"lon": 131.75,
"type": "純米",
"desc": "山口県萩市の蔵。「東洋美人」で知られる。",
"ex": [
{
"id": "s-toyobijin-ippo",
"label": "東洋美人 一歩",
"name": "東洋美人 一歩 純米吟醸",
"en": "Toyobijin Ippo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1900,
"p": [
4,
3,
3,
3,
3,
2,
3,
0
],
"tags": [
"白桃",
"洋梨",
"柑橘"
],
"desc": "華やかな香りと、ジューシーな味わい。"
}
]
},
{
"id": "s-kamotsuru",
"name": "賀茂鶴酒造",
"en": "Kamotsuru",
"region": "chugoku",
"pref": "広島",
"lat": 34.43,
"lon": 132.74,
"type": "純米",
"desc": "酒都・西条の蔵。大吟醸の先駆けとして知られる。",
"ex": [
{
"id": "s-kamotsuru-gold",
"label": "賀茂鶴 特製ゴールド",
"name": "賀茂鶴 特製ゴールド 大吟醸",
"en": "Kamotsuru Gold",
"type": "大吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 2500,
"p": [
4,
3,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "金箔入りの華やかな大吟醸。祝いの席に。"
},
{
"id": "s-kamotsuru-ittekinyukon",
"label": "賀茂鶴 純米吟醸 一滴入魂",
"name": "賀茂鶴 純米吟醸 一滴入魂",
"en": "Kamotsuru Junmai Ginjo Itteki Nyukon",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "広島八反など",
"grapes": [
"hattannishiki"
],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
2,
3,
3,
2,
0
],
"tags": [
"りんご",
"米粉",
"白い花"
],
"desc": "酒どころ・広島の西条の蔵。米の旨みとやさしい香りが調和した、食中酒向きの純米吟醸。"
}
]
},
{
"id": "s-taketsuru",
"name": "竹鶴酒造",
"en": "Taketsuru Shuzo",
"region": "chugoku",
"pref": "広島",
"lat": 34.34,
"lon": 132.91,
"type": "純米",
"desc": "広島県竹原市の蔵。ニッカウヰスキー創業者・竹鶴政孝の生家として知られる。",
"ex": [
{
"id": "s-taketsuru-junmai",
"label": "竹鶴 純米",
"name": "竹鶴 純米",
"en": "Taketsuru Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "yellow",
"price": 1800,
"p": [
1,
2,
3,
4,
5,
5,
1,
3
],
"tags": [
"炊きたてご飯",
"ナッツ",
"カラメル"
],
"desc": "力強い酸と旨み。燗にすると真価を発揮する。"
}
]
},
{
"id": "s-gangi",
"name": "八百新酒造",
"en": "Yaoshin Shuzo",
"region": "chugoku",
"pref": "山口",
"lat": 34.17,
"lon": 132.22,
"type": "純米",
"desc": "山口県岩国市の蔵。「雁木」は無ろ過の純米酒にこだわる。",
"ex": [
{
"id": "s-gangi-hitotsubi",
"label": "雁木 純米 無濾過生原酒 ひとつび",
"name": "雁木 純米 無濾過生原酒 ひとつび",
"en": "Gangi Hitotsubi",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
3,
4,
3,
4,
0
],
"tags": [
"メロン",
"米粉",
"柑橘"
],
"desc": "しぼったままの力強い旨みとフレッシュさ。"
}
]
},
{
"id": "s-toshimori",
"name": "利守酒造",
"en": "Toshimori Shuzo",
"region": "chugoku",
"pref": "岡山",
"lat": 34.75,
"lon": 134.02,
"type": "純米",
"desc": "岡山県赤磐市の蔵。幻となっていた酒米「赤磐雄町」を復活させた。",
"ex": [
{
"id": "s-toshimori-sakehitosuji",
"label": "酒一筋 純米吟醸 赤磐雄町",
"name": "酒一筋 純米吟醸 赤磐雄町",
"en": "Sake Hitosuji Akaiwa Omachi",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "雄町",
"grapes": [
"omachi"
],
"color": "clear",
"price": 2200,
"p": [
3,
3,
3,
2,
5,
4,
2,
1
],
"tags": [
"ナッツ",
"洋梨",
"炊きたてご飯"
],
"desc": "雄町らしい、ふくよかで奥行きのある旨み。"
}
]
},
{
"id": "s-gozenshu",
"name": "辻本店",
"en": "Tsuji Honten",
"region": "chugoku",
"pref": "岡山",
"lat": 35.07,
"lon": 133.75,
"type": "純米",
"desc": "岡山県真庭市勝山の蔵。「御前酒」は、古い仕込み方「菩提酛」を復活させた。",
"ex": [
{
"id": "s-gozenshu-bodaimoto",
"label": "御前酒 菩提酛 純米",
"name": "御前酒 菩提酛 純米",
"en": "Gozenshu Bodaimoto Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
2,
3,
4,
4,
4,
1,
1
],
"tags": [
"ヨーグルト",
"柑橘",
"米粉"
],
"desc": "菩提酛ならではの爽やかな酸と旨み。"
}
]
},
{
"id": "s-rihaku",
"name": "李白酒造",
"en": "Rihaku",
"region": "chugoku",
"pref": "島根",
"lat": 35.47,
"lon": 133.06,
"type": "純米",
"desc": "松江市の蔵。中国の詩人の名を冠した「李白」で知られる。",
"ex": [
{
"id": "s-rihaku-tj",
"label": "李白 特別純米",
"name": "李白 特別純米 やまたのおろち",
"en": "Rihaku Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
2,
4,
2,
3,
3,
2,
1
],
"tags": [
"米粉",
"柑橘",
"ナッツ"
],
"desc": "すっきりとした辛口で、食事を引き立てる。"
}
]
},
{
"id": "s-hiokizakura",
"name": "山根酒造場",
"en": "Yamane Shuzojo",
"region": "chugoku",
"pref": "鳥取",
"lat": 35.48,
"lon": 134.12,
"type": "純米",
"desc": "鳥取市の蔵。「日置桜」は、燗にして旨い純米酒を追い求める。",
"ex": [
{
"id": "s-hiokizakura-junmai",
"label": "日置桜 純米",
"name": "日置桜 純米",
"en": "Hiokizakura Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
1,
1,
4,
4,
5,
4,
1,
2
],
"tags": [
"ナッツ",
"炊きたてご飯"
],
"desc": "力強い旨みとキレ。熱燗にしても崩れない。"
}
]
},
{
"id": "s-ugonotsuki",
"name": "相原酒造",
"en": "Aihara Shuzo",
"region": "chugoku",
"pref": "広島",
"lat": 34.25,
"lon": 132.66,
"type": "純米",
"desc": "広島県呉市の蔵。「雨後の月」で知られる。",
"ex": [
{
"id": "s-ugonotsuki-jg",
"label": "雨後の月 純米吟醸",
"name": "雨後の月 純米吟醸",
"en": "Ugo no Tsuki Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
4,
2,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"白い花",
"柑橘"
],
"desc": "透明感のある香りと、なめらかな味わい。"
}
]
},
{
"id": "s-houken",
"name": "宝剣酒造",
"en": "Houken Shuzo",
"region": "chugoku",
"pref": "広島",
"lat": 34.23,
"lon": 132.61,
"type": "純米",
"desc": "広島県呉市の蔵。「宝剣」は、蔵の湧き水で仕込む。",
"ex": [
{
"id": "s-houken-junmai",
"label": "宝剣 純米 超辛口",
"name": "宝剣 純米 超辛口",
"en": "Houken Junmai Chokarakuchi",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
1,
5,
2,
3,
2,
2,
0
],
"tags": [
"米粉",
"柑橘",
"ミネラル"
],
"desc": "キレのよい辛口ながら、米の旨みも感じられる。"
}
]
},
{
"id": "s-gokyo",
"name": "酒井酒造",
"en": "Sakai Shuzo",
"region": "chugoku",
"pref": "山口",
"lat": 34.17,
"lon": 132.22,
"type": "純米",
"desc": "山口県岩国市の蔵。「五橋」の名は錦帯橋の5つのアーチに由来する。",
"ex": [
{
"id": "s-gokyo-junmai",
"label": "五橋 純米",
"name": "五橋 純米",
"en": "Gokyo Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1400,
"p": [
2,
2,
3,
3,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"洋梨"
],
"desc": "やわらかくふくらむ、穏やかな純米酒。"
}
]
},
{
"id": "s-suigei",
"name": "酔鯨酒造",
"en": "Suigei",
"region": "shikoku",
"pref": "高知",
"lat": 33.55,
"lon": 133.55,
"type": "純米",
"desc": "高知市の蔵。食事に合わせやすい辛口の酒で知られる。",
"ex": [
{
"id": "s-suigei-tj",
"label": "酔鯨 特別純米",
"name": "酔鯨 特別純米",
"en": "Suigei Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
1,
5,
3,
3,
2,
2,
0
],
"tags": [
"柑橘",
"ミネラル",
"米粉"
],
"desc": "酸の効いたキレのよい辛口。カツオのたたきに。"
},
{
"id": "s-suigei-ginrei",
"label": "酔鯨 純米吟醸 吟麗",
"name": "酔鯨 純米吟醸 吟麗",
"en": "Suigei Junmai Ginjo Ginrei",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "松山三井など",
"grapes": [],
"color": "clear",
"price": 1800,
"p": [
3,
2,
4,
3,
2,
2,
2,
0
],
"tags": [
"柑橘",
"ミネラル",
"米粉"
],
"desc": "土佐の辛口らしいキレと、穏やかな香りの純米吟醸。カツオのたたきなど高知の料理と好相性。"
}
]
},
{
"id": "s-tsukasabotan",
"name": "司牡丹酒造",
"en": "Tsukasabotan",
"region": "shikoku",
"pref": "高知",
"lat": 33.52,
"lon": 133.24,
"type": "純米",
"desc": "高知県佐川町の蔵。坂本龍馬ゆかりの地の老舗。",
"ex": [
{
"id": "s-tsukasabotan-funanaka",
"label": "船中八策",
"name": "司牡丹 純米 超辛口 船中八策",
"en": "Tsukasabotan Senchu Hassaku",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
2,
1,
5,
2,
3,
3,
1,
1
],
"tags": [
"米粉",
"ミネラル",
"ナッツ"
],
"desc": "すっきりとした超辛口。坂本龍馬の「船中八策」にちなむ。"
}
]
},
{
"id": "s-minami",
"name": "南酒造場",
"en": "Minami Shuzojo",
"region": "shikoku",
"pref": "高知",
"lat": 33.44,
"lon": 133.98,
"type": "純米",
"desc": "高知県安田町の蔵。「南」は、すっきりとした味わいで人気。",
"ex": [
{
"id": "s-minami-tj",
"label": "南 特別純米",
"name": "南 特別純米",
"en": "Minami Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1600,
"p": [
3,
2,
4,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"りんご",
"ミネラル"
],
"desc": "爽やかな香りとキレのよさ。"
}
]
},
{
"id": "s-bijofu",
"name": "濵川商店",
"en": "Hamakawa Shoten",
"region": "shikoku",
"pref": "高知",
"lat": 33.43,
"lon": 134.02,
"type": "純米",
"desc": "高知県田野町の蔵。「美丈夫」で知られる。",
"ex": [
{
"id": "s-bijofu-jg",
"label": "美丈夫 純米吟醸",
"name": "美丈夫 純米吟醸",
"en": "Bijofu Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
4,
2,
4,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"柑橘",
"白い花"
],
"desc": "華やかな香りと、すっきりとした後味。"
}
]
},
{
"id": "s-ishizuchi",
"name": "石鎚酒造",
"en": "Ishizuchi Shuzo",
"region": "shikoku",
"pref": "愛媛",
"lat": 33.91,
"lon": 133.18,
"type": "純米",
"desc": "愛媛県西条市の蔵。家族で丁寧に造る「石鎚」で知られる。",
"ex": [
{
"id": "s-ishizuchi-green",
"label": "石鎚 純米吟醸 緑ラベル",
"name": "石鎚 純米吟醸 緑ラベル",
"en": "Ishizuchi Junmai Ginjo Green",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
2,
3,
2,
3,
2,
2,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "穏やかな香りの、料理に寄り添う純米吟醸。"
}
]
},
{
"id": "s-nabeshima",
"name": "富久千代酒造",
"en": "Fukuchiyo Shuzo",
"region": "kyushu",
"pref": "佐賀",
"lat": 33.08,
"lon": 130.1,
"type": "純米",
"desc": "佐賀県鹿島市の蔵。「鍋島」は国際的な品評会で最高賞を受けた。",
"ex": [
{
"id": "s-nabeshima-tj",
"label": "鍋島 特別純米",
"name": "鍋島 特別純米",
"en": "Nabeshima Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
4,
3,
3,
3,
3,
2,
4,
0
],
"tags": [
"りんご",
"白桃",
"メロン"
],
"desc": "フレッシュな果実の香りと、きれいな甘み。",
"priceNote": "定価のおおよその目安です。品薄で、店頭では手に入りにくく、販売価格が大きく上下することがあります"
},
{
"id": "s-nabeshima-jgy",
"label": "鍋島 純米吟醸 山田錦",
"name": "鍋島 純米吟醸 山田錦",
"en": "Nabeshima Junmai Ginjo Yamadanishiki",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 2400,
"p": [
4,
4,
3,
3,
3,
3,
4,
0
],
"tags": [
"メロン",
"マスカット",
"ガス感"
],
"desc": "国際的な品評会で最高賞を受けて名が広がった佐賀の蔵。フレッシュな果実の香りと甘み、軽いガス感。"
},
{
"id": "s-nabeshima-jdg",
"label": "鍋島 純米大吟醸",
"name": "鍋島 純米大吟醸",
"en": "Nabeshima Junmai Daiginjo",
"type": "純米大吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 3800,
"p": [
5,
4,
3,
3,
3,
3,
3,
0
],
"tags": [
"白桃",
"メロン",
"白い花"
],
"desc": "鍋島の華やかさを極めた純米大吟醸。白桃やメロンの香りと、上品な甘み。"
}
]
},
{
"id": "s-azumaichi",
"name": "五町田酒造",
"en": "Gochoda Shuzo",
"region": "kyushu",
"pref": "佐賀",
"lat": 33.12,
"lon": 130.03,
"type": "純米",
"desc": "佐賀県嬉野市の蔵。自ら山田錦を育てることにこだわる。",
"ex": [
{
"id": "s-azumaichi-jg",
"label": "東一 純米吟醸",
"name": "東一 純米吟醸",
"en": "Azumaichi Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"白い花",
"米粉"
],
"desc": "穏やかな香りと、上品でやさしい味わい。"
}
]
},
{
"id": "s-koro",
"name": "熊本県酒造研究所",
"en": "Kumamoto Prefecture Sake Research Institute",
"region": "kyushu",
"pref": "熊本",
"lat": 32.8,
"lon": 130.7,
"type": "純米",
"desc": "熊本市の蔵。吟醸酒造りに欠かせない「9号酵母（熊本酵母）」の発祥の蔵。",
"ex": [
{
"id": "s-koro-tj",
"label": "香露 特別純米",
"name": "香露 特別純米",
"en": "Koro Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
3,
3,
3,
2,
3,
3,
2,
1
],
"tags": [
"りんご",
"米粉",
"白い花"
],
"desc": "吟醸香の元祖ともいえる、穏やかでやさしい香り。"
}
]
},
{
"id": "s-tenzan",
"name": "天山酒造",
"en": "Tenzan",
"region": "kyushu",
"pref": "佐賀",
"lat": 33.27,
"lon": 130.2,
"type": "純米",
"desc": "佐賀県小城市の蔵。「天山」で知られる。",
"ex": [
{
"id": "s-tenzan-jg",
"label": "天山 純米吟醸",
"name": "天山 純米吟醸",
"en": "Tenzan Junmai Ginjo",
"type": "純米吟醸",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1700,
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"メロン",
"米粉"
],
"desc": "ふくよかな香りと、やわらかな旨み。"
}
]
},
{
"id": "s-niwanouguisu",
"name": "山口酒造場",
"en": "Yamaguchi Shuzojo",
"region": "kyushu",
"pref": "福岡",
"lat": 33.3,
"lon": 130.6,
"type": "純米",
"desc": "福岡県久留米市の蔵。「庭のうぐいす」で知られる。",
"ex": [
{
"id": "s-niwanouguisu-tj",
"label": "庭のうぐいす 特別純米",
"name": "庭のうぐいす 特別純米",
"en": "Niwa no Uguisu Tokubetsu Junmai",
"type": "特別純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
3,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"米粉",
"白い花"
],
"desc": "やさしい香りとまろやかな味わい。"
}
]
},
{
"id": "s-tanaka65",
"name": "白糸酒造",
"en": "Shiraito Shuzo",
"region": "kyushu",
"pref": "福岡",
"lat": 33.55,
"lon": 130.2,
"type": "純米",
"desc": "福岡県糸島市の蔵。昔ながらの「ハネ木搾り」を守る。",
"ex": [
{
"id": "s-tanaka65-junmai",
"label": "田中六五 純米",
"name": "田中六五 純米",
"en": "Tanaka 65 Junmai",
"type": "純米",
"age": "65",
"abv": "",
"cask": "山田錦",
"grapes": [
"yamadanishiki"
],
"color": "clear",
"price": 1700,
"p": [
3,
2,
3,
2,
4,
3,
2,
0
],
"tags": [
"炊きたてご飯",
"洋梨",
"米粉"
],
"desc": "糸島産の山田錦を65%まで磨いた、旨みのある純米酒。"
}
]
},
{
"id": "s-nishinoseki",
"name": "萱島酒造",
"en": "Kayashima Shuzo",
"region": "kyushu",
"pref": "大分",
"lat": 33.56,
"lon": 131.73,
"type": "純米",
"desc": "大分県国東市の蔵。「西の関」で知られる。",
"ex": [
{
"id": "s-nishinoseki-junmai",
"label": "西の関 手造り純米",
"name": "西の関 手造り純米",
"en": "Nishinoseki Tezukuri Junmai",
"type": "純米",
"age": "",
"abv": "",
"cask": "",
"grapes": [],
"color": "clear",
"price": 1500,
"p": [
2,
3,
3,
2,
4,
4,
1,
1
],
"tags": [
"炊きたてご飯",
"米粉",
"蜂蜜"
],
"desc": "ふくよかな旨みとやわらかな甘み。"
}
]
}
];
const SAKE_ENTRIES = SAKE_BREWERIES.flatMap(d => d.ex.map(x => ({
  ...x, distilleryId:d.id, distillery:d.name, region:d.region, pref:d.pref, lat:d.lat ?? null, lon:d.lon ?? null, type: x.type || d.type
})));
const SAKE_STORY = {
"s-kunimare": {
"founded": "1882年",
"owner": "国稀酒造",
"story": [
"明治時代に、ニシン漁でにぎわった北海道増毛町で創業した。",
"暑寒別岳の伏流水を仕込み水に使い、すっきりとした酒を造る。",
"日本最北の酒蔵として、観光客にも人気がある。"
]
},
"s-denshu": {
"founded": "1878年",
"owner": "西田酒造店",
"story": [
"1878年に青森市で創業した。",
"醸造アルコールを加えない純米酒にこだわり、「田んぼの酒」を意味する「田酒」を生み出した。",
"東北を代表する人気銘柄で、品薄が続いている。"
]
},
"s-aramasa": {
"founded": "1852年",
"owner": "新政酒造",
"story": [
"1852年、秋田市で創業した。昭和の初めに、現在も使われる「6号酵母」がこの蔵で見つかった。",
"秋田県産米だけを使い、生酛造りや木桶仕込みなど、伝統的な手法を現代の感覚で磨いている。",
"若い世代のファンを中心に絶大な人気を集め、日本酒の新しい潮流をつくった。"
]
},
"s-yukinobosha": {
"founded": "1902年",
"owner": "齋彌酒造店",
"story": [
"1902年、秋田県由利本荘市で創業した。",
"醪（もろみ）をかき混ぜない、ろ過しない、加水しないという「三ない造り」を掲げる。",
"山廃仕込みの純米酒でも評価が高い、秋田の名門。"
]
},
"s-nanbubijin": {
"founded": "1902年",
"owner": "南部美人",
"story": [
"1902年、岩手県二戸市で創業した。",
"南部杜氏の技を受け継ぎ、地元の米と水で造る。",
"早くから海外への輸出に取り組み、日本酒の国際化をけん引してきた。"
]
},
"s-juyondai": {
"founded": "1615年",
"owner": "高木酒造",
"story": [
"江戸時代初期の1615年に創業したと伝わる、山形県村山市の蔵。",
"15代目の高木顕統が1990年代に「十四代」を世に出し、香り高く甘みのある「芳醇旨口」で一大ブームを起こした。",
"入手困難な「幻の酒」の代名詞として知られる。"
]
},
"s-dewazakura": {
"founded": "1892年",
"owner": "出羽桜酒造",
"story": [
"1892年、山形県天童市で創業した。",
"1980年代、当時は品評会用だった吟醸酒を一般向けに販売した「桜花吟醸」は、吟醸酒ブームの火付け役となった。",
"国内外の品評会で数多くの賞を受けている。"
]
},
"s-urakasumi": {
"founded": "1724年",
"owner": "佐浦",
"story": [
"1724年、宮城県塩竈市で創業し、塩竈神社の御神酒を造ってきた。",
"宮城酵母と地元の米を生かした、穏やかで品のよい酒が持ち味。",
"「浦霞 禅」は吟醸酒を広めた銘柄のひとつとして知られる。"
]
},
"s-hakurakusei": {
"founded": "1873年",
"owner": "新澤醸造店",
"story": [
"1873年、宮城県で創業した。",
"食事の味を引き立てる「究極の食中酒」を目指し、すっきりとした酒を造る。",
"国内線・国際線の機内で採用されたこともある。"
]
},
"s-hiroki": {
"founded": "江戸時代後期",
"owner": "廣木酒造本店",
"story": [
"江戸時代後期に創業した、会津坂下町の蔵。",
"1999年に生まれた「飛露喜」の無ろ過生原酒が評判を呼び、全国区の人気銘柄となった。",
"福島の日本酒の評価を高めた立役者のひとつ。"
]
},
"s-sharaku": {
"founded": "1955年",
"owner": "宮泉銘醸",
"story": [
"1955年に会津若松市で創業した。",
"若い蔵元が「写楽」を立ち上げ、果実のような香りと透明感のある酒を造る。",
"全国新酒鑑評会でも高い評価を受け、人気銘柄に成長した。"
]
},
"s-sawanoi": {
"founded": "1702年",
"owner": "小澤酒造",
"story": [
"1702年、東京・青梅で創業した。",
"秩父古生層をくぐった岩清水を仕込みに使う。",
"都心から近い酒蔵として、見学や川沿いの庭園も人気。"
]
},
"s-senkin": {
"founded": "1806年",
"owner": "せんきん",
"story": [
"1806年、栃木県さくら市で創業した。",
"蔵の周りの田んぼで米を育て、土地の水で仕込む「ドメーヌ」の考え方を取り入れている。",
"甘酸っぱく果実のような味わいで、日本酒の新しいスタイルを示した。"
]
},
"s-hououbiden": {
"founded": "1872年",
"owner": "小林酒造",
"story": [
"1872年、栃木県小山市で創業した。",
"華やかな香りの吟醸酒を得意とし、果実酒やリキュールも手がける。",
"「鳳凰美田」は全国的な人気銘柄となっている。"
]
},
"s-kubota": {
"founded": "1830年",
"owner": "朝日酒造",
"story": [
"1830年、新潟県長岡市で「久保田屋」として創業した。",
"1985年に「久保田」を発売し、すっきりした淡麗辛口の味わいで人気を集めた。",
"新潟の淡麗辛口ブームを代表する銘柄。"
]
},
"s-hakkaisan": {
"founded": "1922年",
"owner": "八海醸造",
"story": [
"1922年、新潟県南魚沼市で創業した。",
"霊峰八海山の伏流水「雷電様の清水」を仕込み水に使い、普通酒まで手間をかけて造る。",
"新潟を代表する銘柄として全国で親しまれている。"
]
},
"s-shimeharitsuru": {
"founded": "1819年",
"owner": "宮尾酒造",
"story": [
"1819年、新潟県村上市で創業した。",
"朝日連峰の伏流水を使い、穏やかで上品な酒を造る。",
"新潟を代表する蔵のひとつとして、長く愛されている。"
]
},
"s-koshinokanbai": {
"founded": "1907年",
"owner": "石本酒造",
"story": [
"1907年、新潟市の亀田で創業した。",
"すっきりとした淡麗辛口の酒を、手間をかけて丁寧に造る。",
"1970年代、「幻の酒」として地酒ブームの火付け役となった。"
]
},
"s-jozen": {
"founded": "1855年",
"owner": "白瀧酒造",
"story": [
"1855年、新潟県湯沢町で創業した。",
"谷川連峰の雪どけ水を仕込み水に使う。",
"「上善如水」は、日本酒を飲み慣れない人にも親しみやすい軽やかな酒として広まった。"
]
},
"s-masuizumi": {
"founded": "明治時代",
"owner": "桝田酒造店",
"story": [
"明治時代に富山市の港町・岩瀬で創業した。",
"能登杜氏の技を受け継ぎ、ワイン樽での熟成など新しい挑戦も続ける。",
"富山湾の海の幸に合う酒として親しまれている。"
]
},
"s-tedorigawa": {
"founded": "1870年",
"owner": "吉田酒造店",
"story": [
"1870年、石川県白山市で創業した。",
"霊峰白山の伏流水と地元の米で、山廃仕込みの酒も造る。",
"若い世代が蔵を継ぎ、伝統を守りながら新しい酒にも挑戦している。"
]
},
"s-tengumai": {
"founded": "1823年",
"owner": "車多酒造",
"story": [
"1823年、石川県白山市で創業した。",
"手間のかかる山廃仕込みを守り、濃厚な旨みと酸の酒を造る。",
"「天狗舞」は山廃仕込みの代名詞として知られる。"
]
},
"s-kokuryu": {
"founded": "1804年",
"owner": "黒龍酒造",
"story": [
"1804年、福井県永平寺町で創業した。",
"1975年に大吟醸「龍」を発売し、大吟醸を市販品として広めた先駆け。氷温での長期熟成にも取り組む。",
"高級酒「石田屋」などで、日本酒の価値を高めてきた。"
]
},
"s-masumi": {
"founded": "1662年",
"owner": "宮坂醸造",
"story": [
"1662年、長野県諏訪市で創業した。",
"1946年、この蔵から「7号酵母」が見つかった。いまでは全国の多くの蔵で使われている。",
"「真澄」は信州を代表する銘柄。"
]
},
"s-isojiman": {
"founded": "1830年",
"owner": "磯自慢酒造",
"story": [
"1830年、静岡県焼津市で創業した。",
"南アルプスの伏流水と兵庫県産の山田錦などを使い、透明感のある吟醸酒を造る。",
"国際的な首脳会議の乾杯酒に選ばれたこともある。"
]
},
"s-kuheiji": {
"founded": "1647年",
"owner": "萬乗醸造",
"story": [
"江戸時代前期の1647年に、名古屋で創業したと伝わる。",
"フランスのブルゴーニュに畑を持ってワインも造るなど、日本酒とワインの両方に向き合う。",
"「醸し人九平次」はフランスの三つ星レストランでも採用され、海外での評価が高い。"
]
},
"s-jikon": {
"founded": "1818年",
"owner": "木屋正酒造",
"story": [
"1818年、三重県名張市で創業した。",
"6代目の大西唯克が2005年に「而今」を立ち上げた。",
"果実のような味わいで、全国的な人気銘柄となった。"
]
},
"s-zaku": {
"founded": "1869年",
"owner": "清水清三郎商店",
"story": [
"1869年、三重県鈴鹿市で創業した。",
"地元の米と鈴鹿山系の伏流水を生かし、穏やかで品のよい酒を造る。",
"2016年の伊勢志摩サミットで乾杯酒に選ばれた。"
]
},
"s-gekkeikan": {
"founded": "1637年",
"owner": "月桂冠",
"story": [
"1637年、京都・伏見で創業した。",
"明治時代に研究所を設け、科学的な酒造りや、腐敗しにくい瓶詰めの技術を広めた。",
"日本を代表する大手酒造で、海外にも工場を持つ。"
]
},
"s-tamanohikari": {
"founded": "1673年",
"owner": "玉乃光酒造",
"story": [
"1673年、和歌山で創業し、のちに京都・伏見に移った。",
"1964年に純米酒を復活させ、醸造アルコールを加えない酒造りの先駆けとなった。",
"雄町など酒米ごとの純米吟醸を手がける。"
]
},
"s-hakutsuru": {
"founded": "1743年",
"owner": "白鶴酒造",
"story": [
"1743年、神戸・灘の御影で創業した。",
"酒造りの資料館も公開し、灘の酒造りの伝統を伝えている。",
"日本有数の生産量を誇る大手酒造。"
]
},
"s-kikumasamune": {
"founded": "1659年",
"owner": "菊正宗酒造",
"story": [
"1659年、神戸・灘の御影で創業した。",
"手間のかかる「生酛造り」を守り、キレのある辛口の酒を造る。",
"「料理を引き立てる辛口」として長く親しまれている。"
]
},
"s-kenbishi": {
"founded": "室町時代",
"owner": "剣菱酒造",
"story": [
"室町時代の1505年に伊丹で創業したと伝わる。",
"熟成させた酒を合わせて、毎年同じ味わいを守ることを大切にしている。",
"江戸時代から愛されてきた、日本でもっとも古い銘柄のひとつ。"
]
},
"s-ozeki": {
"founded": "1711年",
"owner": "大関",
"story": [
"1711年、兵庫県西宮市で創業した。",
"1964年に発売した「ワンカップ大関」は、手軽に飲めるカップ酒の元祖となった。",
"灘を代表する大手酒造のひとつ。"
]
},
"s-shochikubai": {
"founded": "1842年",
"owner": "宝酒造",
"story": [
"1842年、京都・伏見で創業した。",
"清酒「松竹梅」のほか、みりんや焼酎なども手がける総合酒類メーカー。",
"「澪」はスパークリング清酒を身近なものにした。"
]
},
"s-kazenomori": {
"founded": "1719年",
"owner": "油長酒造",
"story": [
"1719年、奈良県御所市で創業した。",
"しぼったままの無ろ過・無加水の生酒を中心に、ガス感のあるフレッシュな酒を造る。",
"奈良は「日本酒発祥の地」のひとつとされ、その伝統を現代に生かしている。"
]
},
"s-dassai": {
"founded": "1948年",
"owner": "獺祭",
"story": [
"山口県岩国市の山あいの蔵。2023年に社名を「旭酒造」から「獺祭」に改めた。",
"杜氏に頼らず、データにもとづく管理で、一年中純米大吟醸だけを造る。",
"海外でも広く飲まれ、日本酒を世界に広めた立役者。ニューヨーク州にも酒蔵を開いた。"
]
},
"s-toyobijin": {
"founded": "1921年",
"owner": "澄川酒造場",
"story": [
"1921年、山口県萩市で創業した。",
"2013年の豪雨で蔵が被災したが、全国の支援を受けて復活した。",
"「東洋美人」は国際的な行事でも振る舞われている。"
]
},
"s-kamotsuru": {
"founded": "1873年",
"owner": "賀茂鶴酒造",
"story": [
"1873年、酒都・広島県西条で創業した。",
"広島の軟水に合わせた醸造法で、なめらかな酒を造る。",
"大吟醸の先駆けとして知られ、海外の首脳をもてなす席でも出された。"
]
},
"s-taketsuru": {
"founded": "1733年",
"owner": "竹鶴酒造",
"story": [
"1733年に広島県竹原市で創業した。",
"米の旨みと酸をしっかり引き出す、力強い純米酒が持ち味。",
"ニッカウヰスキーの創業者・竹鶴政孝の生家として知られる。"
]
},
"s-suigei": {
"founded": "1872年",
"owner": "酔鯨酒造",
"story": [
"1872年に高知市で創業した。",
"酒どころ土佐らしい、食事に合うキレのよい辛口の酒を造る。",
"名前は、土佐藩主・山内容堂の号「鯨海酔侯」に由来する。"
]
},
"s-tsukasabotan": {
"founded": "1603年",
"owner": "司牡丹酒造",
"story": [
"関ヶ原の戦いのころの1603年に創業したと伝わる、高知県佐川町の蔵。",
"仁淀川水系の水で、すっきりとした辛口の酒を造る。",
"坂本龍馬ゆかりの地として、龍馬にちなんだ銘柄も多い。"
]
},
"s-nabeshima": {
"founded": "1923年",
"owner": "富久千代酒造",
"story": [
"1923年、佐賀県鹿島市で創業した。",
"1998年に「鍋島」を立ち上げ、地元の米と水で香り高い酒を造る。",
"2011年、国際的なワインのコンテストの日本酒部門で最高賞を受賞し、世界に知られた。"
]
},
"s-azumaichi": {
"founded": "1922年",
"owner": "五町田酒造",
"story": [
"1922年、佐賀県嬉野市で創業した。",
"酒米の山田錦を蔵の人たちが自ら育て、米づくりから酒を造る。",
"穏やかで上品な味わいで、九州を代表する銘柄のひとつ。"
]
},
"s-koro": {
"founded": "1909年",
"owner": "熊本県酒造研究所",
"story": [
"1909年、熊本の酒の品質を高めるために設立された。",
"この蔵から分離された「9号酵母（熊本酵母）」は、華やかな吟醸香を生み、全国の吟醸酒造りを支えてきた。",
"「香露」は吟醸酒の源流ともいえる銘柄。"
]
},
"s-kikusui": {
"founded": "1881年",
"owner": "菊水酒造",
"story": [
"1881年、新潟県新発田市で創業した。",
"1972年、しぼりたての生原酒を缶に詰めた「ふなぐち菊水一番しぼり」を発売した。",
"新潟を代表する蔵のひとつで、日本酒の文化を伝える施設も運営する。"
]
},
"s-daishichi": {
"founded": "1752年",
"owner": "大七酒造",
"story": [
"1752年、福島県二本松市で創業した。",
"手間のかかる「生酛造り」を守り続け、生酛の第一人者として知られる。",
"国内外の重要な晩餐会でも出されてきた。"
]
},
"s-ichinokura": {
"founded": "1973年",
"owner": "一ノ蔵",
"story": [
"1973年、宮城県の4つの蔵が合同して創業した。",
"手造りの技を大切にしつつ、発泡清酒「すず音」など新しい酒にも挑戦してきた。",
"宮城を代表する蔵として、幅広い酒を手がける。"
]
},
"s-hanaabi": {
"founded": "明治時代",
"owner": "南陽醸造",
"story": [
"明治時代に創業した、埼玉県羽生市の小さな蔵。",
"少量を丁寧に仕込み、華やかで濃密な味わいの酒を造る。",
"「花陽浴」は全国から注目される人気銘柄となった。"
]
},
"s-sawaya": {
"founded": "1791年",
"owner": "松本酒造",
"story": [
"1791年に創業し、のちに京都・伏見に移った蔵。",
"伏見の水を生かし、米の個性と酸を引き出す酒造りに取り組む。",
"「澤屋まつもと」は、若い造り手による新しい京都の酒として人気を集める。"
]
},
"s-shichihonyari": {
"founded": "室町時代",
"owner": "冨田酒造",
"story": [
"室町時代末期に創業したと伝わる、滋賀県長浜市の蔵。",
"地元の米と水にこだわり、燗にして旨みが開く酒を造る。",
"銘柄名は、賤ヶ岳の戦いで活躍した「七本槍」に由来する。"
]
},
"s-gangi": {
"founded": "1877年",
"owner": "八百新酒造",
"story": [
"1877年、山口県岩国市で創業した。",
"錦川の伏流水で仕込み、ろ過をしない純米酒を中心に造る。",
"「雁木」の名は、蔵の前の川岸にあった船着き場の階段に由来する。"
]
},
"s-born": {
"founded": "1860年",
"owner": "加藤吟醸本店",
"story": [
"1860年、福井県鯖江市で創業した。",
"純米大吟醸を低温でじっくり熟成させる造りを得意とする。",
"「梵」は国際的な行事や晩餐会でも振る舞われてきた。"
]
},
"s-kikuhime": {
"founded": "安土桃山時代",
"owner": "菊姫",
"story": [
"安土桃山時代の天正年間に創業したと伝わる、白山市鶴来の老舗。",
"兵庫県産の山田錦を使い、手間のかかる山廃仕込みと、蔵での長期熟成を大切にする。",
"「加賀の菊酒」の伝統を受け継ぐ、濃醇な酒の代表格として知られる。"
]
},
"s-kakurei": {
"founded": "1717年",
"owner": "青木酒造",
"story": [
"1717年、新潟県塩沢で創業した。",
"銘柄名は、この地の文人・鈴木牧之が命名したと伝わる。",
"雪国の米と水で、旨みのあるやわらかな酒を造る。"
]
},
"s-kagetora": {
"founded": "江戸時代後期",
"owner": "諸橋酒造",
"story": [
"江戸時代後期に創業した、長岡市栃尾の蔵。",
"超軟水の湧き水「杜々の森名水」を仕込みに使う。",
"銘柄名は、栃尾にゆかりの深い上杉謙信（長尾景虎）にちなむ。"
]
},
"s-haneya": {
"founded": "大正時代",
"owner": "富美菊酒造",
"story": [
"大正時代に富山市で創業した。",
"少量を丁寧に仕込み、香り高く透明感のある酒を造る。",
"「羽根屋」は全国から注目される銘柄に育った。"
]
},
"s-hidakami": {
"founded": "江戸時代末期",
"owner": "平孝酒造",
"story": [
"江戸時代末期に宮城県石巻市で創業した。",
"港町の蔵として、寿司や魚料理に合う酒を目指している。",
"東日本大震災で被災したが、酒造りを続けてきた。"
]
},
"s-tatenokawa": {
"founded": "1832年",
"owner": "楯の川酒造",
"story": [
"1832年、山形県酒田市で創業した。",
"2010年に、造る酒をすべて純米大吟醸に切り替えた。",
"海外への輸出にも積極的に取り組んでいる。"
]
},
"s-kudokijozu": {
"founded": "明治時代",
"owner": "亀の井酒造",
"story": [
"明治時代に山形県鶴岡市で創業した。",
"華やかな香りの吟醸酒を得意とし、さまざまな酒米で造り分ける。",
"「くどき上手」は吟醸酒ファンに人気の銘柄。"
]
},
"s-kariho": {
"founded": "大正時代",
"owner": "刈穂酒造",
"story": [
"大正時代に秋田県大仙市で創業した。",
"手間のかかる山廃仕込みと、昔ながらの槽搾りを守る。",
"山廃仕込みの辛口酒の代表的な銘柄として知られる。"
]
},
"s-mansaku": {
"founded": "1689年",
"owner": "日の丸醸造",
"story": [
"1689年、秋田県横手市で創業した。",
"雪国の冷涼な気候を生かし、穏やかな香りの吟醸酒を造る。",
"銘柄名は、横手を舞台にしたテレビドラマにちなむ。"
]
},
"s-hassen": {
"founded": "1775年",
"owner": "八戸酒造",
"story": [
"1775年、青森県八戸市で創業した。",
"地元の米と水、酵母にこだわった酒造りを続ける。",
"「陸奥八仙」は、若い世代が手がける人気銘柄。"
]
},
"s-houhai": {
"founded": "昭和初期",
"owner": "三浦酒造",
"story": [
"昭和初期に青森県弘前市で創業した、家族で営む小さな蔵。",
"銘柄と同じ名の酒米「豊盃米」を使い、香り高い酒を造る。",
"少量生産のため、品薄が続く人気銘柄。"
]
},
"s-naraman": {
"founded": "明治時代",
"owner": "夢心酒造",
"story": [
"明治時代に福島県喜多方市で創業した。",
"福島の米と、飯豊山の伏流水で仕込む。",
"「奈良萬」は、会津の名酒のひとつとして人気を集める。"
]
},
"s-aizumusume": {
"founded": "明治時代",
"owner": "高橋庄作酒造店",
"story": [
"明治時代に会津若松市で創業した。",
"蔵のまわりの田んぼで米を育てる「土産土法」を掲げる。",
"地元の米と水、人で造る、会津の酒らしい純米酒が持ち味。"
]
},
"s-suehiro": {
"founded": "1850年",
"owner": "末廣酒造",
"story": [
"1850年、会津若松市で創業した。",
"明治時代から山廃仕込みに取り組み、その伝統を受け継ぐ。",
"会津を代表する老舗として、蔵の見学も人気。"
]
},
"s-shinkame": {
"founded": "江戸時代後期",
"owner": "神亀酒造",
"story": [
"江戸時代後期に創業した、埼玉県蓮田市の蔵。",
"1987年、戦後初めて造る酒をすべて純米酒にした。熟成させた純米酒の燗のおいしさを広めた。",
"「純米酒の神亀」として、日本酒好きに広く知られる。"
]
},
"s-teradahonke": {
"founded": "江戸時代",
"owner": "寺田本家",
"story": [
"江戸時代に千葉県神崎町で創業した。",
"蔵に住みつく微生物の力を生かし、生酛造りや無農薬の米による「自然酒」を造る。",
"発酵の文化を伝える蔵として、全国にファンを持つ。"
]
},
"s-akabu": {
"founded": "明治時代",
"owner": "赤武酒造",
"story": [
"明治時代に岩手県大槌町で創業した。",
"東日本大震災で蔵を失い、盛岡市に移って酒造りを再開した。",
"若い杜氏が造る「AKABU」は、全国的な人気銘柄となった。"
]
},
"s-shichiken": {
"founded": "1750年",
"owner": "山梨銘醸",
"story": [
"1750年、甲州街道の宿場町・台ヶ原（現在の北杜市白州）で創業した。",
"南アルプスの名水で仕込む。",
"明治天皇が宿泊した際に贈られた「竹林の七賢人」の欄間が、銘柄名の由来。"
]
},
"s-kaiun": {
"founded": "1872年",
"owner": "土井酒造場",
"story": [
"1872年、静岡県掛川市で創業した。",
"能登杜氏の名人・波瀬正吉のもとで、静岡吟醸の評価を高めた。",
"静岡酵母を使った、穏やかな香りの酒が持ち味。"
]
},
"s-kikuyoi": {
"founded": "",
"owner": "青島酒造",
"story": [
"静岡県藤枝市の蔵。",
"蔵元自らが米づくりから関わり、丁寧に酒を造る。",
"静岡らしい穏やかで上品な酒として知られる。"
]
},
"s-daishinshu": {
"founded": "明治時代",
"owner": "大信州酒造",
"story": [
"明治時代に長野県で創業した。",
"長野県産の米と、北アルプスの伏流水で仕込む。",
"すっきりとした香り高い酒で、長野を代表する銘柄のひとつ。"
]
},
"s-yoakemae": {
"founded": "江戸時代末期",
"owner": "小野酒造店",
"story": [
"江戸時代末期に長野県辰野町で創業した。",
"中山道の宿場町の蔵として、地元の米と水で酒を造る。",
"銘柄名は、島崎藤村の小説「夜明け前」から許しを得て名づけられた。"
]
},
"s-matsunotsukasa": {
"founded": "1860年",
"owner": "松瀬酒造",
"story": [
"1860年、滋賀県竜王町で創業した。",
"地元の契約農家と米づくりから取り組む。",
"透明感のある酒で、滋賀を代表する銘柄のひとつ。"
]
},
"s-furosen": {
"founded": "江戸時代末期",
"owner": "上原酒造",
"story": [
"江戸時代末期に滋賀県高島市で創業した。",
"木桶での仕込みと、山廃仕込みを守り続ける。",
"蔵に住みつく乳酸菌を生かした、個性的な酒で知られる。"
]
},
"s-eikun": {
"founded": "1895年",
"owner": "齊藤酒造",
"story": [
"1895年、京都・伏見で創業した。",
"京都の酒米「祝」を使った酒に力を入れている。",
"伏見の水で造る、やさしい味わいの酒が持ち味。"
]
},
"s-akishika": {
"founded": "明治時代",
"owner": "秋鹿酒造",
"story": [
"明治時代に大阪府能勢町で創業した。",
"自ら田んぼで米を育て、純米酒だけを造る。",
"熟成させた純米酒の燗は、日本酒好きに高く評価されている。"
]
},
"s-chikusen": {
"founded": "1702年",
"owner": "田治米",
"story": [
"1702年、兵庫県朝来市で創業した。",
"地元の米を使い、燗にしておいしい純米酒を追い求める。",
"生野銀山に近い山あいの蔵として知られる。"
]
},
"s-tatsuriki": {
"founded": "大正時代",
"owner": "本田商店",
"story": [
"大正時代に兵庫県姫路市で創業した。",
"酒米の王・山田錦の産地、播州の蔵として、山田錦にこだわる。",
"「龍力」は兵庫を代表する銘柄のひとつ。"
]
},
"s-okuharima": {
"founded": "明治時代",
"owner": "下村酒造店",
"story": [
"明治時代に兵庫県姫路市の山あいで創業した。",
"純米酒だけを、少量で丁寧に仕込む。",
"穏やかで飲み飽きない純米酒として、根強いファンを持つ。"
]
},
"s-hanatomoe": {
"founded": "",
"owner": "美吉野醸造",
"story": [
"奈良県吉野町の蔵。",
"奈良に伝わる「水酛（菩提酛）」など、古い造り方を生かす。",
"酸の効いた個性的な酒で、日本酒好きの注目を集めている。"
]
},
"s-kuroushi": {
"founded": "江戸時代末期",
"owner": "名手酒造店",
"story": [
"江戸時代末期に和歌山県海南市で創業した。",
"銘柄名は、近くの海岸にある、黒い牛の形の岩にちなむ。",
"和歌山を代表する銘柄として親しまれている。"
]
},
"s-kid": {
"founded": "昭和初期",
"owner": "平和酒造",
"story": [
"昭和初期に和歌山県海南市で創業した。",
"若い造り手たちが、香り高く飲みやすい酒を手頃な価格で届けている。",
"「紀土」は全国的な人気銘柄となった。"
]
},
"s-toshimori": {
"founded": "明治時代",
"owner": "利守酒造",
"story": [
"明治時代に岡山県赤磐市で創業した。",
"一度は途絶えかけた地元の酒米「赤磐雄町」の栽培を、農家とともに復活させた。",
"雄町の魅力を伝える蔵として知られる。"
]
},
"s-gozenshu": {
"founded": "1804年",
"owner": "辻本店",
"story": [
"1804年、岡山県真庭市勝山で創業した。",
"室町時代に奈良の寺で生まれたとされる「菩提酛」の造り方を復活させた。",
"雄町を使った酒にも力を入れている。"
]
},
"s-rihaku": {
"founded": "明治時代",
"owner": "李白酒造",
"story": [
"明治時代に松江市で創業した。",
"銘柄名は酒好きで知られる唐の詩人・李白から。元首相の若槻礼次郎が名付けたと伝わる。",
"食事に合う辛口の酒で知られる。"
]
},
"s-hiokizakura": {
"founded": "明治時代",
"owner": "山根酒造場",
"story": [
"明治時代に鳥取市で創業した。",
"熟成させた純米酒を、燗にしておいしく飲むことを大切にする。",
"燗酒の名手として、日本酒好きに知られる蔵。"
]
},
"s-ugonotsuki": {
"founded": "明治時代",
"owner": "相原酒造",
"story": [
"明治時代に広島県呉市で創業した。",
"銘柄名は、徳冨蘆花の随筆の一節にちなむ。",
"透明感のある吟醸酒で知られる、広島の名蔵。"
]
},
"s-houken": {
"founded": "明治時代",
"owner": "宝剣酒造",
"story": [
"明治時代に広島県呉市で創業した。",
"蔵の敷地に湧く水で仕込む。",
"若い蔵元のもとで、キレのよい純米酒が評価を高めた。"
]
},
"s-gokyo": {
"founded": "明治時代",
"owner": "酒井酒造",
"story": [
"明治時代に山口県岩国市で創業した。",
"錦川の伏流水で仕込む。",
"銘柄名は、名勝・錦帯橋の5つのアーチにちなむ。"
]
},
"s-minami": {
"founded": "明治時代",
"owner": "南酒造場",
"story": [
"明治時代に高知県安田町で創業した。",
"高知らしいキレのよさと、香りのよさを両立させた酒を造る。",
"「南」は全国的な人気を集める銘柄となった。"
]
},
"s-bijofu": {
"founded": "明治時代",
"owner": "濵川商店",
"story": [
"明治時代に高知県田野町で創業した。",
"地元の水と、高知の酵母を生かした酒を造る。",
"「美丈夫」は土佐の名酒として親しまれている。"
]
},
"s-ishizuchi": {
"founded": "大正時代",
"owner": "石鎚酒造",
"story": [
"大正時代に愛媛県西条市で創業した。",
"西日本最高峰・石鎚山の伏流水で、家族で丁寧に酒を造る。",
"食事に寄り添う穏やかな酒として評価が高い。"
]
},
"s-tenzan": {
"founded": "明治時代",
"owner": "天山酒造",
"story": [
"明治時代に佐賀県小城市で創業した。",
"もとは水車を使った製粉業を営んでいた。",
"佐賀の米と天山山系の水で、ふくよかな酒を造る。"
]
},
"s-niwanouguisu": {
"founded": "江戸時代",
"owner": "山口酒造場",
"story": [
"江戸時代に福岡県久留米市で創業した。",
"銘柄名は、蔵の庭の井戸に鶯が水を飲みに来たことに由来すると伝わる。",
"やさしい味わいの酒で知られる。"
]
},
"s-tanaka65": {
"founded": "江戸時代末期",
"owner": "白糸酒造",
"story": [
"江戸時代末期に福岡県糸島市で創業した。",
"重い石で酒袋を押す、昔ながらの「ハネ木搾り」を守る。",
"地元糸島の山田錦を使った「田中六五」で人気を集めた。"
]
},
"s-nishinoseki": {
"founded": "明治時代",
"owner": "萱島酒造",
"story": [
"明治時代に大分県国東市で創業した。",
"九州では珍しい、甘口でふくよかな酒の伝統を守る。",
"「西の関」は大分を代表する銘柄。"
]
},
"s-otokoyama": {
"founded": "江戸時代（伊丹で創業）",
"owner": "男山",
"story": [
"江戸時代の伊丹で名声を得た銘酒「男山」の流れをくむ。",
"大雪山の伏流水と北の寒さを生かし、生酛造りの酒も手がける。",
"北海道を代表する蔵として、海外でも評価されている。"
]
},
"s-kamikawataisetsu": {
"founded": "2017年",
"owner": "上川大雪酒造",
"story": [
"2017年、北海道上川町に生まれた新しい蔵。",
"北海道の酒米を使い、大雪山の伏流水で仕込む。",
"北海道の各地に蔵を開き、地域とともに酒造りを広げている。"
]
}
};
const SAKE_REGIONS = {
"hokkaido": {
"jp": "北海道",
"en": "HOKKAIDO",
"label": [
142.6,
43.5
],
"picks": [
"北海道"
],
"desc": "冷涼な気候と雪どけ水に恵まれる。酒米「吟風」などを使った、すっきりとした酒が多い。",
"pick": "北海道"
},
"tohoku": {
"jp": "東北",
"en": "TOHOKU",
"label": [
140.7,
39.4
],
"picks": [
"青森",
"岩手",
"宮城",
"秋田",
"山形",
"福島"
],
"desc": "全国新酒鑑評会でも常に上位を占める銘醸地。冷涼な気候を生かした、香り高くきれいな酒から旨みの濃い酒まで多彩。",
"pick": "青森"
},
"kanto": {
"jp": "関東",
"en": "KANTO",
"label": [
139.6,
36.1
],
"picks": [
"茨城",
"栃木",
"群馬",
"埼玉",
"千葉",
"東京",
"神奈川"
],
"desc": "大消費地を抱え、伝統の蔵から新しいスタイルの蔵まで個性豊か。栃木などで若い造り手が活躍している。",
"pick": "茨城"
},
"hokuriku": {
"jp": "北陸",
"en": "HOKURIKU",
"label": [
138.2,
37.35
],
"picks": [
"新潟",
"富山",
"石川",
"福井"
],
"desc": "新潟の淡麗辛口に代表される酒どころ。豊富な雪どけ水と、酒米「五百万石」が生む、すっきりとした酒が多い。",
"pick": "新潟"
},
"koshin": {
"jp": "甲信・東海",
"en": "KOSHIN / TOKAI",
"label": [
137.6,
35.4
],
"short": "甲信・東海",
"picks": [
"山梨",
"長野",
"岐阜",
"静岡",
"愛知",
"三重"
],
"desc": "長野の冷涼な高地から、静岡の吟醸酒、三重の人気銘柄まで。7号酵母を生んだ信州も含む。",
"pick": "山梨"
},
"kinki": {
"jp": "近畿",
"en": "KINKI",
"label": [
135.6,
34.75
],
"picks": [
"滋賀",
"京都",
"大阪",
"兵庫",
"奈良",
"和歌山"
],
"desc": "灘（兵庫）と伏見（京都）という二大酒どころを擁する。酒米「山田錦」の産地でもあり、日本酒造りの中心地。",
"pick": "滋賀"
},
"chugoku": {
"jp": "中国",
"en": "CHUGOKU",
"label": [
132.6,
34.85
],
"picks": [
"鳥取",
"島根",
"岡山",
"広島",
"山口"
],
"desc": "広島の西条は酒都として知られる。岡山は酒米「雄町」のふるさと。山口からは世界的な銘柄も生まれた。",
"pick": "鳥取"
},
"shikoku": {
"jp": "四国",
"en": "SHIKOKU",
"label": [
133.3,
33.75
],
"picks": [
"徳島",
"香川",
"愛媛",
"高知"
],
"desc": "高知の酒は、カツオなど土佐の料理に合うキレのよい辛口が特徴。",
"pick": "徳島"
},
"kyushu": {
"jp": "九州・沖縄",
"en": "KYUSHU",
"label": [
130.9,
32.75
],
"short": "九州",
"picks": [
"福岡",
"佐賀",
"長崎",
"熊本",
"大分",
"宮崎",
"鹿児島",
"沖縄"
],
"desc": "焼酎のイメージが強いが、福岡・佐賀・熊本などは日本酒どころ。熊本は吟醸酒を支える9号酵母の発祥地。",
"pick": "福岡"
}
};
const SAKE_COUNTRIES = { japan: { jp:'日本', style:'日本酒', en:'JAPAN', map:'japan', regions:["hokkaido", "tohoku", "kanto", "hokuriku", "koshin", "kinki", "chugoku", "shikoku", "kyushu"], desc:'日本全国に約1,400の酒蔵があるといわれる。地図の地方をタップすると、その土地の酒蔵が表示される。' } };
const SAKE_RICE = [
{
"id": "yamadanishiki",
"name": "山田錦",
"en": "Yamada Nishiki",
"kind": "酒米",
"p": [
4,
3,
3,
2,
4,
3,
2,
0
],
"tags": [
"白桃",
"メロン",
"米粉"
],
"home": "兵庫県（全国で栽培）",
"desc": "「酒米の王」と呼ばれる、もっとも有名な酒造好適米。米の中心のデンプン質（心白）が大きく、磨いても割れにくい。香り高く、ふくよかで上品な酒になる。"
},
{
"id": "omachi",
"name": "雄町",
"en": "Omachi",
"kind": "酒米",
"p": [
3,
3,
3,
3,
5,
4,
2,
1
],
"tags": [
"ナッツ",
"炊きたてご飯",
"洋梨"
],
"home": "岡山県",
"desc": "現存する酒米のなかでもっとも古い品種のひとつで、山田錦の祖先にあたる。育てるのが難しいが、複雑で濃厚な旨みを生み、熱烈なファン（オマチスト）がいる。"
},
{
"id": "gohyakumangoku",
"name": "五百万石",
"en": "Gohyakumangoku",
"kind": "酒米",
"p": [
2,
2,
5,
2,
3,
2,
3,
0
],
"tags": [
"米粉",
"ミネラル",
"柑橘"
],
"home": "新潟県・北陸",
"desc": "新潟で生まれた酒米で、山田錦と並ぶ生産量を誇る。すっきりとした淡麗な酒に向き、新潟の淡麗辛口を支えている。"
},
{
"id": "miyamanishiki",
"name": "美山錦",
"en": "Miyama Nishiki",
"kind": "酒米",
"p": [
2,
2,
4,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"ミネラル",
"米粉"
],
"home": "長野県・東北",
"desc": "長野で生まれた、寒さに強い酒米。すっきりとして、キレのよい酒になりやすい。"
},
{
"id": "aiyama",
"name": "愛山",
"en": "Aiyama",
"kind": "酒米",
"p": [
4,
4,
2,
2,
4,
3,
3,
0
],
"tags": [
"白桃",
"蜂蜜",
"メロン"
],
"home": "兵庫県",
"desc": "栽培量が少なく「幻の酒米」と呼ばれる。甘みと旨みが豊かで、華やかな酒になる。"
},
{
"id": "hattannishiki",
"name": "八反錦",
"en": "Hattan Nishiki",
"kind": "酒米",
"p": [
3,
2,
4,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"ミネラル",
"柑橘"
],
"home": "広島県",
"desc": "広島で生まれた酒米。すっきりとした軽快な酒になりやすい。"
},
{
"id": "dewasansan",
"name": "出羽燦々",
"en": "Dewa Sansan",
"kind": "酒米",
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"洋梨",
"りんご",
"白い花"
],
"home": "山形県",
"desc": "山形で開発された酒米。やわらかく穏やかな香りの、きれいな酒になる。"
},
{
"id": "akitasakekomachi",
"name": "秋田酒こまち",
"en": "Akita Sake Komachi",
"kind": "酒米",
"p": [
4,
3,
3,
2,
3,
2,
3,
0
],
"tags": [
"りんご",
"白い花",
"米粉"
],
"home": "秋田県",
"desc": "秋田で開発された酒米。華やかで、きれいな吟醸酒に向く。"
},
{
"id": "ginpu",
"name": "吟風",
"en": "Ginpu",
"kind": "酒米",
"p": [
3,
3,
3,
2,
3,
3,
2,
0
],
"tags": [
"米粉",
"炊きたてご飯",
"白い花"
],
"home": "北海道",
"desc": "北海道で開発された酒米。寒冷地でも育ち、ふくらみのある味わいになる。"
},
{
"id": "hanafubuki",
"name": "華吹雪",
"en": "Hanafubuki",
"kind": "酒米",
"p": [
2,
3,
3,
2,
4,
3,
2,
0
],
"tags": [
"炊きたてご飯",
"米粉"
],
"home": "青森県",
"desc": "青森で開発された酒米。米の旨みを生かした、ふくよかな酒になる。"
},
{
"id": "kamenoo",
"name": "亀の尾",
"en": "Kame no O",
"kind": "酒米",
"p": [
3,
2,
4,
3,
4,
3,
2,
1
],
"tags": [
"柑橘",
"ナッツ",
"米粉"
],
"home": "山形県・新潟県",
"desc": "明治時代に山形で生まれた米で、コシヒカリなどの祖先にあたる。一度は途絶えかけたが、酒米として復活した。すっきりとした酸と旨み。"
}
];
