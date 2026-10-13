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
