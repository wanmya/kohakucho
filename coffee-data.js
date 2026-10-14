// HIDEOUT CARTER コーヒー図鑑データ（産地 → 豆）
// 味わいは一般的に語られる傾向をもとにした目安です。焙煎度や淹れ方で大きく変わります。
// price：生豆1kgあたりのおおよその目安（円）。ショップや時期、ロットによって変わります。
// p：[酸味, 甘み, 苦み, コク, フルーティ, フローラル, ナッツ（チョコ）, スパイス（土）]（0〜5）
const COFFEE_ORIGINS = [
{
"id": "c-yirgacheffe",
"name": "イルガチェフェ",
"en": "Yirgacheffe",
"region": "ethiopia",
"lat": 6.16,
"lon": 38.21,
"desc": "エチオピア南部、ゲデオ地区の標高の高い産地。ジャスミンのような花の香りと柑橘の酸で、スペシャルティコーヒーの代名詞的な存在。",
"ex": [
{
"id": "c-eth-yirga-g1w",
"label": "G1 ウォッシュト",
"name": "エチオピア イルガチェフェ G1 ウォッシュト",
"en": "Ethiopia Yirgacheffe G1 Washed",
"type": "ウォッシュト",
"age": "1900〜2200",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"cinnamon",
"medium",
"high"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "medium",
"price": 4000,
"p": [
5,
3,
1,
2,
4,
5,
1,
0
],
"tags": [
"ジャスミン",
"レモン",
"ベルガモット",
"紅茶",
"蜂蜜"
],
"desc": "等級G1は欠点豆がもっとも少ない最上級。ジャスミンや柑橘、紅茶を思わせる香りで、浅めの焙煎で個性がはっきりと表れる。"
},
{
"id": "c-eth-yirga-g1n",
"label": "G1 ナチュラル",
"name": "エチオピア イルガチェフェ G1 ナチュラル",
"en": "Ethiopia Yirgacheffe G1 Natural",
"type": "ナチュラル",
"age": "1900〜2200",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"水出し（コールドブリュー）"
],
"color": "high",
"price": 4000,
"p": [
4,
4,
1,
3,
5,
4,
1,
0
],
"tags": [
"ブルーベリー",
"ストロベリー",
"ワイン",
"ジャスミン",
"チョコレート"
],
"desc": "果実ごと天日で乾かすナチュラル精製。ブルーベリーやいちごのような甘い香りがあふれ、ワインのような余韻。"
},
{
"id": "c-eth-yirga-g2w",
"label": "G2 ウォッシュト",
"name": "エチオピア イルガチェフェ G2 ウォッシュト",
"en": "Ethiopia Yirgacheffe G2 Washed",
"type": "ウォッシュト",
"age": "1800〜2100",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 3000,
"p": [
4,
3,
2,
3,
3,
4,
2,
0
],
"tags": [
"レモン",
"紅茶",
"花",
"ブラウンシュガー"
],
"desc": "G1に次ぐ等級で、手頃な価格でイルガチェフェらしい華やかさを楽しめる。"
}
]
},
{
"id": "c-sidamo",
"name": "シダモ",
"en": "Sidamo",
"region": "ethiopia",
"lat": 6.7,
"lon": 38.45,
"desc": "イルガチェフェの北に広がる大きな産地。柑橘や花の香りと、まろやかな甘さのバランスがよい。",
"ex": [
{
"id": "c-eth-sidamo-g2w",
"label": "G2 ウォッシュト",
"name": "エチオピア シダモ G2 ウォッシュト",
"en": "Ethiopia Sidamo G2 Washed",
"type": "ウォッシュト",
"age": "1700〜2100",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 2800,
"p": [
4,
3,
2,
3,
3,
3,
2,
0
],
"tags": [
"柑橘",
"紅茶",
"花",
"ブラウンシュガー"
],
"desc": "エチオピアらしい華やかさを、穏やかでバランスよく楽しめる定番。"
},
{
"id": "c-eth-sidamo-g4n",
"label": "G4 ナチュラル",
"name": "エチオピア シダモ G4 ナチュラル",
"en": "Ethiopia Sidamo G4 Natural",
"type": "ナチュラル",
"age": "1700〜2000",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2200,
"p": [
3,
4,
2,
3,
4,
2,
2,
1
],
"tags": [
"ベリー",
"ワイン",
"チョコレート"
],
"desc": "手頃な等級のナチュラル。ベリーの甘さとワインのような風味で、昔ながらの「モカ」らしい味わい。深めに焼いてもよい。"
}
]
},
{
"id": "c-guji",
"name": "グジ",
"en": "Guji",
"region": "ethiopia",
"lat": 5.55,
"lon": 38.85,
"desc": "シダモの南、近年独立した産地として注目されるエリア。標高が高く、熟した果実のような甘さと透明感で高く評価される。",
"ex": [
{
"id": "c-eth-guji-g1n",
"label": "G1 ナチュラル",
"name": "エチオピア グジ G1 ナチュラル",
"en": "Ethiopia Guji G1 Natural",
"type": "ナチュラル",
"age": "1900〜2300",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"cinnamon",
"medium",
"high"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "medium",
"price": 4500,
"p": [
4,
5,
1,
2,
5,
4,
1,
0
],
"tags": [
"白桃",
"ブルーベリー",
"ジャスミン",
"蜂蜜"
],
"desc": "桃やブルーベリーを思わせる甘い果実味と、ジャスミンの香り。ナチュラルらしい華やかさのなかにも透明感がある。"
},
{
"id": "c-eth-guji-hambela",
"label": "ハンベラ G1 ウォッシュト",
"name": "エチオピア グジ ハンベラ G1 ウォッシュト",
"en": "Ethiopia Guji Hambela G1 Washed",
"type": "ウォッシュト",
"age": "2000〜2300",
"abv": "",
"cask": "エチオピア在来種",
"grapes": [
"heirloom"
],
"roast": [
"cinnamon",
"medium"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "cinnamon",
"price": 4800,
"p": [
5,
4,
1,
2,
4,
5,
0,
0
],
"tags": [
"ジャスミン",
"ベルガモット",
"アプリコット",
"紅茶"
],
"desc": "グジでも標高の高いハンベラ地区のウォッシュト。ベルガモットやアプリコットの繊細な香りで、紅茶のように軽やか。"
}
]
},
{
"id": "c-harrar",
"name": "ハラー",
"en": "Harrar",
"region": "ethiopia",
"lat": 9.31,
"lon": 42.12,
"desc": "エチオピア東部の高原。古くからナチュラル精製の産地で、乾いた気候が野性的でスパイシーな香りを生む。",
"ex": [
{
"id": "c-eth-harrar-g4",
"label": "G4 ナチュラル",
"name": "エチオピア ハラー G4 ナチュラル",
"en": "Ethiopia Harrar G4 Natural",
"type": "ナチュラル",
"age": "1500〜2100",
"abv": "",
"cask": "エチオピア在来種（ロングベリー）",
"grapes": [
"heirloom"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 3000,
"p": [
3,
3,
3,
4,
4,
1,
3,
3
],
"tags": [
"ブルーベリー",
"ワイン",
"スパイス",
"ダークチョコ"
],
"desc": "細長いロングベリーと呼ばれる豆。熟したベリーやワインの香りに、スパイスやダークチョコレートのような力強さがある。"
}
]
},
{
"id": "c-mocha",
"name": "イエメン（モカ）",
"en": "Yemen Mocha",
"region": "yemen",
"lat": 15.35,
"lon": 43.9,
"desc": "首都サナア周辺の山岳地帯。標高2000mを超える段々畑で、昔ながらの方法で育てられ、天日で乾かされる。",
"ex": [
{
"id": "c-yem-matari",
"label": "モカ・マタリ No.9",
"name": "イエメン モカ・マタリ No.9",
"en": "Yemen Mocha Mattari No.9",
"type": "ナチュラル",
"age": "1800〜2400",
"abv": "",
"cask": "イエメン在来種",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ネルドリップ",
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 7500,
"p": [
3,
3,
3,
4,
4,
2,
3,
3
],
"tags": [
"ドライフルーツ",
"ワイン",
"スパイス",
"ダークチョコ",
"土"
],
"desc": "バニー・マタル地区の豆で、「モカ」の名の由来となった伝説的な銘柄。ドライフルーツやワイン、スパイスの複雑な香りが重なり、野性的。小粒で欠点豆も混じるため、焙煎前のハンドピックが欠かせない。"
},
{
"id": "c-yem-haraz",
"label": "ハラズ",
"name": "イエメン ハラズ",
"en": "Yemen Haraz",
"type": "ナチュラル",
"age": "2000〜2400",
"abv": "",
"cask": "イエメン在来種",
"grapes": [
"typica"
],
"roast": [
"high",
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 8500,
"p": [
3,
4,
2,
3,
5,
3,
2,
2
],
"tags": [
"レーズン",
"チョコレート",
"スパイス",
"ワイン"
],
"desc": "ハラズ山脈の高地の豆。レーズンやチョコレートの甘い香りに、スパイスが重なる。"
}
]
},
{
"id": "c-nyeri",
"name": "ニエリ",
"en": "Nyeri",
"region": "kenya",
"lat": -0.42,
"lon": 36.95,
"desc": "ケニア山の西側の高地。ケニアでも特に評価の高い産地で、多くの農家が集まる水洗場（ファクトリー）単位で取引される。",
"ex": [
{
"id": "c-ken-nyeri-aa",
"label": "AA",
"name": "ケニア ニエリ AA",
"en": "Kenya Nyeri AA",
"type": "ウォッシュト",
"age": "1700〜1900",
"abv": "",
"cask": "SL28・SL34",
"grapes": [
"sl28"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エアロプレス"
],
"color": "high",
"price": 5000,
"p": [
5,
4,
2,
4,
5,
2,
1,
0
],
"tags": [
"カシス",
"グレープフルーツ",
"ベリー",
"ブラウンシュガー"
],
"desc": "AAは豆の大きさによる最上位の等級。カシスやグレープフルーツの鮮烈な酸と、黒糖のような甘さ、しっかりしたコク。"
},
{
"id": "c-ken-nyeri-ab",
"label": "AB",
"name": "ケニア ニエリ AB",
"en": "Kenya Nyeri AB",
"type": "ウォッシュト",
"age": "1700〜1900",
"abv": "",
"cask": "SL28・SL34",
"grapes": [
"sl28"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 3800,
"p": [
4,
4,
2,
4,
4,
2,
2,
0
],
"tags": [
"カシス",
"柑橘",
"トマト",
"ブラウンシュガー"
],
"desc": "AAより少し小ぶりの等級。ケニアらしいジューシーな酸を、手頃な価格で楽しめる。"
}
]
},
{
"id": "c-kirinyaga",
"name": "キリニャガ",
"en": "Kirinyaga",
"region": "kenya",
"lat": -0.5,
"lon": 37.3,
"desc": "ケニア山の南側の斜面。火山性の赤土で、果実味の強いジューシーな豆が育つ。",
"ex": [
{
"id": "c-ken-kirinyaga-aa",
"label": "AA",
"name": "ケニア キリニャガ AA",
"en": "Kenya Kirinyaga AA",
"type": "ウォッシュト",
"age": "1600〜1900",
"abv": "",
"cask": "SL28・SL34",
"grapes": [
"sl28"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 5200,
"p": [
5,
4,
2,
4,
5,
2,
1,
0
],
"tags": [
"ブラックベリー",
"カシス",
"グレープフルーツ",
"蜂蜜"
],
"desc": "黒い果実のような濃い果実味と、蜂蜜の甘さ。深めに焼いても酸の輪郭が残る。"
},
{
"id": "c-ken-pb",
"label": "ピーベリー",
"name": "ケニア キリニャガ ピーベリー",
"en": "Kenya Kirinyaga Peaberry",
"type": "ウォッシュト",
"age": "1600〜1900",
"abv": "",
"cask": "SL28・SL34",
"grapes": [
"sl28"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 4600,
"p": [
5,
4,
2,
3,
4,
2,
1,
0
],
"tags": [
"カシス",
"柑橘",
"ブラウンシュガー"
],
"desc": "通常は2粒向かい合う種が、1粒だけ丸く育ったピーベリー。丸い形で火が均一に入りやすく、凝縮した酸と甘さ。"
}
]
},
{
"id": "c-kilimanjaro",
"name": "キリマンジャロ",
"en": "Kilimanjaro",
"region": "tanzania",
"lat": -3.25,
"lon": 37.35,
"desc": "キリマンジャロ山やメルー山の斜面。日本では「キリマン」の名で古くから愛されてきた。",
"ex": [
{
"id": "c-tz-kili-aa",
"label": "AA",
"name": "タンザニア キリマンジャロ AA",
"en": "Tanzania Kilimanjaro AA",
"type": "ウォッシュト",
"age": "1500〜2000",
"abv": "",
"cask": "ブルボン・ケント",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"サイフォン"
],
"color": "city",
"price": 3500,
"p": [
4,
3,
3,
3,
3,
2,
2,
1
],
"tags": [
"柑橘",
"紅茶",
"ブラウンシュガー",
"ハーブ"
],
"desc": "キリッとした酸と、しっかりしたコク。シティローストで「酸と苦みのバランスがよいキリマン」らしさが出る。"
},
{
"id": "c-tz-kili-pb",
"label": "ピーベリー",
"name": "タンザニア キリマンジャロ ピーベリー",
"en": "Tanzania Kilimanjaro Peaberry",
"type": "ウォッシュト",
"age": "1500〜2000",
"abv": "",
"cask": "ブルボン・ケント",
"grapes": [
"bourbon"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"サイフォン"
],
"color": "high",
"price": 4000,
"p": [
4,
4,
2,
3,
4,
2,
2,
0
],
"tags": [
"柑橘",
"ベリー",
"紅茶",
"蜂蜜"
],
"desc": "丸いピーベリーだけを選り分けたもの。華やかな酸と甘さが凝縮している。"
}
]
},
{
"id": "c-mbeya",
"name": "ムベヤ",
"en": "Mbeya",
"region": "tanzania",
"lat": -9.0,
"lon": 33.45,
"desc": "タンザニア南西部の高地。キリマンジャロより穏やかで、甘さのある豆が育つ。",
"ex": [
{
"id": "c-tz-mbeya-aa",
"label": "AA",
"name": "タンザニア ムベヤ AA",
"en": "Tanzania Mbeya AA",
"type": "ウォッシュト",
"age": "1600〜1900",
"abv": "",
"cask": "ブルボンなど",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 3200,
"p": [
3,
4,
3,
3,
3,
1,
3,
1
],
"tags": [
"オレンジ",
"キャラメル",
"チョコレート"
],
"desc": "オレンジのような穏やかな酸と、キャラメルの甘さ。日常的に飲みやすいタンザニア。"
}
]
},
{
"id": "c-rwanda-west",
"name": "キブ湖周辺",
"en": "Lake Kivu",
"region": "rwanda",
"lat": -2.25,
"lon": 29.25,
"desc": "ルワンダ西部、キブ湖を見下ろす丘の産地。湖からの湿った空気と高地の寒暖差が、繊細な甘さを育てる。",
"ex": [
{
"id": "c-rw-bourbon",
"label": "ブルボン ウォッシュト",
"name": "ルワンダ ブルボン ウォッシュト",
"en": "Rwanda Bourbon Washed",
"type": "ウォッシュト",
"age": "1600〜2000",
"abv": "",
"cask": "ブルボン",
"grapes": [
"bourbon"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3800,
"p": [
4,
4,
2,
3,
4,
3,
2,
0
],
"tags": [
"オレンジ",
"りんご",
"紅茶",
"蜂蜜"
],
"desc": "ブルボン種らしい甘さと、紅茶のような上品さ。オレンジや赤いりんごのような甘酸っぱさ。"
}
]
},
{
"id": "c-kayanza",
"name": "カヤンザ",
"en": "Kayanza",
"region": "burundi",
"lat": -2.92,
"lon": 29.63,
"desc": "ブルンジ北部、ルワンダ国境に近い高地。小さな農家の豆を水洗場で丁寧に仕上げる。",
"ex": [
{
"id": "c-bi-kayanza",
"label": "ウォッシュト",
"name": "ブルンジ カヤンザ ウォッシュト",
"en": "Burundi Kayanza Washed",
"type": "ウォッシュト",
"age": "1700〜2000",
"abv": "",
"cask": "ブルボン",
"grapes": [
"bourbon"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 3600,
"p": [
4,
4,
2,
3,
4,
2,
2,
0
],
"tags": [
"赤い果実",
"蜂蜜",
"オレンジ",
"紅茶"
],
"desc": "熟した赤い果実と蜂蜜の甘さ、明るい酸。ブルボン種の甘さが素直に出る。"
}
]
},
{
"id": "c-elgon",
"name": "エルゴン山（ブギス）",
"en": "Mt. Elgon (Bugisu)",
"region": "uganda",
"lat": 1.15,
"lon": 34.45,
"desc": "ケニアとの国境にそびえるエルゴン山の斜面。ウガンダでは数少ないアラビカ種の産地。",
"ex": [
{
"id": "c-ug-bugisu-aa",
"label": "ブギス AA",
"name": "ウガンダ ブギス AA",
"en": "Uganda Bugisu AA",
"type": "ウォッシュト",
"age": "1600〜2000",
"abv": "",
"cask": "SL14・ブルボンなど",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2800,
"p": [
3,
3,
3,
4,
2,
1,
4,
1
],
"tags": [
"チョコレート",
"ナッツ",
"ブラウンシュガー",
"柑橘"
],
"desc": "チョコレートのような甘さとしっかりしたコク、穏やかな酸。アフリカの豆のなかでは落ち着いた味わい。"
}
]
},
{
"id": "c-misuku",
"name": "ミスク",
"en": "Misuku Hills",
"region": "malawi",
"lat": -9.65,
"lon": 33.55,
"desc": "マラウイ北部の丘陵地帯。小さな協同組合が質の高い豆を育てている。",
"ex": [
{
"id": "c-mw-misuku",
"label": "AA",
"name": "マラウイ ミスク AA",
"en": "Malawi Misuku AA",
"type": "ウォッシュト",
"age": "1700〜2000",
"abv": "",
"cask": "ゲイシャ・カティモールなど",
"grapes": [
"geisha"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ"
],
"color": "high",
"price": 3800,
"p": [
4,
3,
2,
3,
3,
3,
2,
0
],
"tags": [
"柑橘",
"紅茶",
"花",
"ナッツ"
],
"desc": "穏やかな柑橘の酸と、紅茶のような軽やかさ。ゲイシャ種も混じる、マラウイらしい個性。"
}
]
},
{
"id": "c-chiapas",
"name": "チアパス",
"en": "Chiapas",
"region": "mexico",
"lat": 15.6,
"lon": -92.5,
"desc": "メキシコ南部、グアテマラと接する州。メキシコ最大の産地で、有機栽培の小農家が多い。",
"ex": [
{
"id": "c-mx-chiapas",
"label": "SHG",
"name": "メキシコ チアパス SHG",
"en": "Mexico Chiapas SHG",
"type": "ウォッシュト",
"age": "1300〜1700",
"abv": "",
"cask": "ティピカ・ブルボンなど",
"grapes": [
"typica",
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2800,
"p": [
3,
3,
3,
3,
2,
1,
4,
0
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "SHGは標高の高い産地の豆を示す等級。ナッツのような香ばしさと穏やかな酸で、軽やかで飲みやすい。"
}
]
},
{
"id": "c-oaxaca",
"name": "オアハカ",
"en": "Oaxaca",
"region": "mexico",
"lat": 16.1,
"lon": -96.8,
"desc": "メキシコ南部の山岳地帯。「プルマ」と呼ばれる高地の豆が知られる。",
"ex": [
{
"id": "c-mx-pluma",
"label": "プルマ",
"name": "メキシコ オアハカ プルマ",
"en": "Mexico Oaxaca Pluma",
"type": "ウォッシュト",
"age": "1300〜1800",
"abv": "",
"cask": "ティピカ・プルマイダルゴ",
"grapes": [
"typica"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ"
],
"color": "high",
"price": 3200,
"p": [
3,
4,
2,
3,
2,
2,
3,
0
],
"tags": [
"ナッツ",
"花",
"蜂蜜",
"柑橘"
],
"desc": "羽毛（プルマ）のように軽いといわれる繊細な味わい。蜂蜜の甘さと、ほのかな花の香り。"
}
]
},
{
"id": "c-gt-general",
"name": "グアテマラ（産地ブレンド）",
"en": "Guatemala",
"region": "guatemala",
"lat": 14.64,
"lon": -90.51,
"desc": "複数の産地の豆を合わせ、等級ごとに出荷される定番のグアテマラ。",
"ex": [
{
"id": "c-gt-shb",
"label": "SHB",
"name": "グアテマラ SHB",
"en": "Guatemala SHB",
"type": "ウォッシュト",
"age": "1400〜1800",
"abv": "",
"cask": "ブルボン・カトゥーラなど",
"grapes": [
"bourbon",
"caturra"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 2600,
"p": [
3,
4,
3,
4,
2,
1,
4,
1
],
"tags": [
"チョコレート",
"ナッツ",
"オレンジ",
"キャラメル"
],
"desc": "SHBは標高1400m以上で育った硬い豆を示す最上位の等級。チョコレートのような甘さとコクで、ブレンドの軸にもなる定番。"
}
]
},
{
"id": "c-antigua",
"name": "アンティグア",
"en": "Antigua",
"region": "guatemala",
"lat": 14.56,
"lon": -90.73,
"desc": "3つの火山に囲まれた盆地。火山灰の土壌と昼夜の寒暖差が、甘さとかすかなスモーキーさを生む名産地。",
"ex": [
{
"id": "c-gt-antigua",
"label": "SHB",
"name": "グアテマラ アンティグア SHB",
"en": "Guatemala Antigua SHB",
"type": "ウォッシュト",
"age": "1500〜1700",
"abv": "",
"cask": "ブルボン",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 3500,
"p": [
3,
4,
3,
4,
2,
2,
4,
2
],
"tags": [
"チョコレート",
"オレンジ",
"スモーク",
"ナッツ"
],
"desc": "チョコレートの甘さとオレンジのような酸に、火山の産地らしいかすかなスモーキーさ。深めに焼いても甘さが残る。"
},
{
"id": "c-gt-antigua-pb",
"label": "ピーベリー",
"name": "グアテマラ アンティグア ピーベリー",
"en": "Guatemala Antigua Peaberry",
"type": "ウォッシュト",
"age": "1500〜1700",
"abv": "",
"cask": "ブルボン",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"サイフォン"
],
"color": "city",
"price": 4000,
"p": [
3,
4,
3,
4,
3,
2,
4,
1
],
"tags": [
"チョコレート",
"柑橘",
"キャラメル"
],
"desc": "丸いピーベリーだけを選り分けた豆。火の通りが均一で、甘さとコクが凝縮している。"
},
{
"id": "c-gt-antigua-geisha",
"label": "ゲイシャ",
"name": "グアテマラ アンティグア ゲイシャ",
"en": "Guatemala Antigua Geisha",
"type": "ウォッシュト",
"age": "1500〜1800",
"abv": "",
"cask": "ゲイシャ",
"grapes": [
"geisha"
],
"roast": [
"cinnamon",
"medium",
"high"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "medium",
"price": 10000,
"p": [
4,
4,
1,
3,
4,
5,
2,
0
],
"tags": [
"ジャスミン",
"柑橘",
"白桃",
"チョコレート"
],
"desc": "アンティグアで育てられたゲイシャ種。ジャスミンや柑橘の華やかな香りに、この産地らしいチョコレートの甘さが重なる。"
}
]
},
{
"id": "c-huehue",
"name": "ウエウエテナンゴ",
"en": "Huehuetenango",
"region": "guatemala",
"lat": 15.32,
"lon": -91.47,
"desc": "メキシコ国境に近い、グアテマラでもっとも標高の高い産地のひとつ。乾いた温かい風のおかげで霜が降りず、高地で栽培できる。",
"ex": [
{
"id": "c-gt-huehue",
"label": "SHB",
"name": "グアテマラ ウエウエテナンゴ SHB",
"en": "Guatemala Huehuetenango SHB",
"type": "ウォッシュト",
"age": "1600〜2000",
"abv": "",
"cask": "ブルボン・カトゥーラ",
"grapes": [
"bourbon",
"caturra"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3700,
"p": [
4,
4,
2,
3,
4,
2,
2,
0
],
"tags": [
"ぶどう",
"ベリー",
"柑橘",
"キャラメル"
],
"desc": "ぶどうやベリーのような果実味と明るい酸。グアテマラのなかでもフルーティな産地。"
}
]
},
{
"id": "c-atitlan",
"name": "アティトラン",
"en": "Atitlán",
"region": "guatemala",
"lat": 14.69,
"lon": -91.2,
"desc": "アティトラン湖を囲む火山の斜面。湖からの涼しい風が、豆をゆっくり熟させる。",
"ex": [
{
"id": "c-gt-atitlan",
"label": "SHB",
"name": "グアテマラ アティトラン SHB",
"en": "Guatemala Atitlán SHB",
"type": "ウォッシュト",
"age": "1500〜1800",
"abv": "",
"cask": "ブルボン・カトゥーラ",
"grapes": [
"bourbon",
"caturra"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 3400,
"p": [
4,
4,
3,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"チョコレート",
"花",
"キャラメル"
],
"desc": "柑橘の明るい酸と、チョコレートのような甘さ。華やかさとコクのバランスがよい。"
}
]
},
{
"id": "c-santaana",
"name": "サンタアナ火山",
"en": "Santa Ana",
"region": "elsalvador",
"lat": 13.85,
"lon": -89.63,
"desc": "エルサルバドル西部、サンタアナ火山の斜面。古いブルボン種が多く残る産地。",
"ex": [
{
"id": "c-sv-bourbon",
"label": "ブルボン SHG",
"name": "エルサルバドル サンタアナ ブルボン SHG",
"en": "El Salvador Santa Ana Bourbon SHG",
"type": "ウォッシュト",
"age": "1300〜1700",
"abv": "",
"cask": "ブルボン",
"grapes": [
"bourbon"
],
"roast": [
"high",
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 3200,
"p": [
3,
5,
2,
3,
3,
2,
3,
0
],
"tags": [
"キャラメル",
"蜂蜜",
"オレンジ",
"ナッツ"
],
"desc": "ブルボン種らしいキャラメルのような甘さと、なめらかな口当たり。"
},
{
"id": "c-sv-pacamara",
"label": "パカマラ",
"name": "エルサルバドル パカマラ",
"en": "El Salvador Pacamara",
"type": "ウォッシュト",
"age": "1400〜1800",
"abv": "",
"cask": "パカマラ",
"grapes": [
"pacamara"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 5000,
"p": [
4,
4,
2,
3,
4,
3,
2,
1
],
"tags": [
"トロピカル",
"ハーブ",
"チョコレート",
"柑橘"
],
"desc": "エルサルバドル生まれの大粒の品種。トロピカルフルーツやハーブのような個性的な香りで、品評会でもよく上位に入る。豆が大きいので、じっくり火を通したい。"
}
]
},
{
"id": "c-marcala",
"name": "マルカラ",
"en": "Marcala",
"region": "honduras",
"lat": 14.15,
"lon": -88.03,
"desc": "ホンジュラス西部の高地。原産地呼称が認められた、ホンジュラスを代表する産地。",
"ex": [
{
"id": "c-hn-marcala",
"label": "SHG",
"name": "ホンジュラス マルカラ SHG",
"en": "Honduras Marcala SHG",
"type": "ウォッシュト",
"age": "1300〜1700",
"abv": "",
"cask": "カトゥーラ・カトゥアイなど",
"grapes": [
"caturra",
"catuai"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2900,
"p": [
3,
4,
3,
3,
3,
1,
3,
0
],
"tags": [
"キャラメル",
"りんご",
"チョコレート"
],
"desc": "キャラメルの甘さと、りんごのようなやさしい酸。穏やかで毎日飲みやすい。"
}
]
},
{
"id": "c-santabarbara",
"name": "サンタバルバラ",
"en": "Santa Bárbara",
"region": "honduras",
"lat": 14.92,
"lon": -88.24,
"desc": "ホンジュラス北西部の山岳地帯。品評会で上位に入る農園が多い、注目の産地。",
"ex": [
{
"id": "c-hn-sb",
"label": "パカス ウォッシュト",
"name": "ホンジュラス サンタバルバラ パカス",
"en": "Honduras Santa Bárbara Pacas",
"type": "ウォッシュト",
"age": "1500〜1800",
"abv": "",
"cask": "パカス",
"grapes": [
"bourbon"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 4200,
"p": [
4,
4,
2,
3,
4,
3,
2,
0
],
"tags": [
"トロピカル",
"ベリー",
"蜂蜜",
"柑橘"
],
"desc": "ブルボンの変異種パカス。トロピカルフルーツやベリーのジューシーな果実味が持ち味。"
}
]
},
{
"id": "c-jinotega",
"name": "ヒノテガ",
"en": "Jinotega",
"region": "nicaragua",
"lat": 13.09,
"lon": -86.0,
"desc": "ニカラグア北部の山岳地帯。国内最大の産地で、熱帯雨林の木陰で栽培される豆も多い。",
"ex": [
{
"id": "c-ni-shg",
"label": "SHG",
"name": "ニカラグア ヒノテガ SHG",
"en": "Nicaragua Jinotega SHG",
"type": "ウォッシュト",
"age": "1100〜1500",
"abv": "",
"cask": "カトゥーラ・ブルボンなど",
"grapes": [
"caturra",
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2700,
"p": [
3,
4,
2,
3,
2,
1,
3,
0
],
"tags": [
"ナッツ",
"キャラメル",
"柑橘"
],
"desc": "やわらかな酸とナッツのような甘さ。クセが少なく、ブレンドのベースにも向く。"
},
{
"id": "c-ni-maragogype",
"label": "マラゴジッペ",
"name": "ニカラグア マラゴジッペ",
"en": "Nicaragua Maragogype",
"type": "ウォッシュト",
"age": "1100〜1500",
"abv": "",
"cask": "マラゴジッペ",
"grapes": [
"maragogype"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"サイフォン"
],
"color": "high",
"price": 3800,
"p": [
3,
3,
2,
2,
2,
2,
3,
0
],
"tags": [
"ナッツ",
"花",
"クリーン"
],
"desc": "「象の豆」とも呼ばれる大粒の品種。やわらかく穏やかな味わいで、見た目の大きさも楽しい。"
}
]
},
{
"id": "c-tarrazu",
"name": "タラス",
"en": "Tarrazú",
"region": "costarica",
"lat": 9.65,
"lon": -84.02,
"desc": "首都サンホセの南の山岳地帯。コスタリカでもっとも有名な産地で、硬く締まった高地の豆が育つ。",
"ex": [
{
"id": "c-cr-tarrazu",
"label": "SHB",
"name": "コスタリカ タラス SHB",
"en": "Costa Rica Tarrazú SHB",
"type": "ウォッシュト",
"age": "1500〜1900",
"abv": "",
"cask": "カトゥーラ・カトゥアイ",
"grapes": [
"caturra",
"catuai"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "high",
"price": 3500,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"キャラメル",
"チョコレート",
"りんご"
],
"desc": "明るい柑橘の酸と、キャラメルのような甘さ。クリーンで、バランスのよいコスタリカの定番。"
}
]
},
{
"id": "c-westvalley",
"name": "ウエストバレー",
"en": "West Valley",
"region": "costarica",
"lat": 10.1,
"lon": -84.35,
"desc": "中央盆地の西側。小さな精製所（マイクロミル）が多く、ハニープロセスなど多彩な精製方法で知られる。",
"ex": [
{
"id": "c-cr-honey",
"label": "ハニープロセス",
"name": "コスタリカ ウエストバレー ハニー",
"en": "Costa Rica West Valley Honey",
"type": "パルプドナチュラル（ハニー）",
"age": "1300〜1700",
"abv": "",
"cask": "カトゥーラ・ビジャサルチ",
"grapes": [
"caturra"
],
"roast": [
"medium",
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス",
"エスプレッソ"
],
"color": "high",
"price": 4500,
"p": [
3,
5,
1,
3,
4,
2,
2,
0
],
"tags": [
"蜂蜜",
"アプリコット",
"キャラメル",
"オレンジ"
],
"desc": "果肉を除いたあと、蜂蜜のようなぬめりを残して乾かすハニープロセス。名前どおり蜂蜜のような甘さと、アプリコットの果実味。"
}
]
},
{
"id": "c-boquete",
"name": "ボケテ",
"en": "Boquete",
"region": "panama",
"lat": 8.78,
"lon": -82.43,
"desc": "バル火山のふもとの高地。霧と涼しい風、火山性の土壌に恵まれ、ゲイシャ種の名声を世界に広めた産地。",
"ex": [
{
"id": "c-pa-boquete",
"label": "SHB",
"name": "パナマ ボケテ SHB",
"en": "Panama Boquete SHB",
"type": "ウォッシュト",
"age": "1400〜1700",
"abv": "",
"cask": "カトゥーラ・カトゥアイ",
"grapes": [
"caturra",
"catuai"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 4000,
"p": [
4,
4,
2,
3,
3,
3,
2,
0
],
"tags": [
"柑橘",
"花",
"蜂蜜",
"チョコレート"
],
"desc": "ゲイシャ以外の品種のボケテの豆。柑橘と花の香り、蜂蜜の甘さで、上品で明るい。"
},
{
"id": "c-pa-geisha-w",
"label": "ゲイシャ ウォッシュト",
"name": "パナマ ボケテ ゲイシャ ウォッシュト",
"en": "Panama Boquete Geisha Washed",
"type": "ウォッシュト",
"age": "1600〜2000",
"abv": "",
"cask": "ゲイシャ",
"grapes": [
"geisha"
],
"roast": [
"light",
"cinnamon",
"medium"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "cinnamon",
"price": 20000,
"p": [
5,
4,
1,
2,
5,
5,
1,
0
],
"tags": [
"ジャスミン",
"ベルガモット",
"白桃",
"蜂蜜",
"柑橘"
],
"desc": "2004年の品評会「ベスト・オブ・パナマ」で、エスメラルダ農園のゲイシャが衝撃的な評価を受け、世界的に知られるようになった。ジャスミンとベルガモットの香り、紅茶のような透明感。浅煎りで香りを生かしたい。"
},
{
"id": "c-pa-geisha-n",
"label": "ゲイシャ ナチュラル",
"name": "パナマ ボケテ ゲイシャ ナチュラル",
"en": "Panama Boquete Geisha Natural",
"type": "ナチュラル",
"age": "1600〜2000",
"abv": "",
"cask": "ゲイシャ",
"grapes": [
"geisha"
],
"roast": [
"cinnamon",
"medium"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "cinnamon",
"price": 24000,
"p": [
4,
5,
1,
3,
5,
5,
1,
0
],
"tags": [
"トロピカル",
"白桃",
"ジャスミン",
"ワイン"
],
"desc": "ゲイシャをナチュラル精製で仕上げたもの。花の香りに、トロピカルフルーツや桃の甘くとろりとした果実味が加わる。"
}
]
},
{
"id": "c-bluemountain",
"name": "ブルーマウンテン",
"en": "Blue Mountains",
"region": "jamaica",
"lat": 18.05,
"lon": -76.6,
"desc": "ジャマイカ東部、ブルーマウンテン山脈の決められた地域。霧が多く冷涼な気候で、ゆっくりと実が熟す。",
"ex": [
{
"id": "c-jm-bm1",
"label": "ブルーマウンテン No.1",
"name": "ジャマイカ ブルーマウンテン No.1",
"en": "Jamaica Blue Mountain No.1",
"type": "ウォッシュト",
"age": "800〜1500",
"abv": "",
"cask": "ティピカ",
"grapes": [
"typica"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"サイフォン",
"ネルドリップ"
],
"color": "high",
"price": 18000,
"p": [
3,
4,
2,
3,
2,
2,
3,
0
],
"tags": [
"クリーン",
"ナッツ",
"蜂蜜",
"花"
],
"desc": "厳しい基準で選ばれた最上位等級。香り・酸・苦み・コクのすべてが穏やかに調和し、雑味がない。日本は最大の輸入国で、木の樽に詰めて輸出されることでも知られる。"
},
{
"id": "c-jm-hm",
"label": "ハイマウンテン",
"name": "ジャマイカ ハイマウンテン",
"en": "Jamaica High Mountain",
"type": "ウォッシュト",
"age": "500〜900",
"abv": "",
"cask": "ティピカ",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 6500,
"p": [
3,
4,
2,
3,
2,
1,
3,
0
],
"tags": [
"ナッツ",
"キャラメル",
"クリーン"
],
"desc": "ブルーマウンテン地域の外側、やや標高の低い産地の豆。ジャマイカらしいなめらかさを手頃に楽しめる。"
}
]
},
{
"id": "c-escambray",
"name": "エスカンブライ山脈",
"en": "Escambray",
"region": "cuba",
"lat": 21.95,
"lon": -80.1,
"desc": "キューバ中部の山岳地帯。かつてヨーロッパで高く評価された、カリブの伝統的な産地。",
"ex": [
{
"id": "c-cu-crystal",
"label": "クリスタルマウンテン",
"name": "キューバ クリスタルマウンテン",
"en": "Cuba Crystal Mountain",
"type": "ウォッシュト",
"age": "900〜1200",
"abv": "",
"cask": "ティピカなど",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"ネルドリップ"
],
"color": "city",
"price": 5500,
"p": [
3,
4,
2,
3,
2,
1,
3,
0
],
"tags": [
"ナッツ",
"キャラメル",
"クリーン"
],
"desc": "山で水晶がとれたことにちなむ名前。穏やかな酸となめらかな口当たりで、ブルーマウンテンに似たやさしい味わい。"
}
]
},
{
"id": "c-barahona",
"name": "バラオナ",
"en": "Barahona",
"region": "dominican",
"lat": 18.1,
"lon": -71.25,
"desc": "ドミニカ共和国南西部の山岳地帯。国内でもっとも評価の高い産地。",
"ex": [
{
"id": "c-do-barahona",
"label": "バラオナ",
"name": "ドミニカ共和国 バラオナ",
"en": "Dominican Republic Barahona",
"type": "ウォッシュト",
"age": "1000〜1400",
"abv": "",
"cask": "ティピカ・カトゥーラ",
"grapes": [
"typica",
"caturra"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 3800,
"p": [
3,
4,
3,
4,
2,
1,
3,
1
],
"tags": [
"チョコレート",
"ナッツ",
"柑橘"
],
"desc": "しっかりしたコクとチョコレートのような甘さ、穏やかな酸。"
}
]
},
{
"id": "c-co-general",
"name": "コロンビア（産地ブレンド）",
"en": "Colombia",
"region": "colombia",
"lat": 4.6,
"lon": -74.1,
"desc": "各地の豆を集め、豆の大きさによる等級（スプレモ、エクセルソ）で出荷される定番のコロンビア。",
"ex": [
{
"id": "c-co-supremo",
"label": "スプレモ",
"name": "コロンビア スプレモ",
"en": "Colombia Supremo",
"type": "ウォッシュト",
"age": "1200〜1800",
"abv": "",
"cask": "カトゥーラ・カスティージョ",
"grapes": [
"caturra",
"castillo"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2600,
"p": [
3,
4,
3,
4,
2,
1,
4,
0
],
"tags": [
"キャラメル",
"ナッツ",
"チョコレート",
"オレンジ"
],
"desc": "スプレモは大粒の豆を集めた最上位の等級。キャラメルのような甘さとまろやかなコクで、何にでも合わせやすい。"
},
{
"id": "c-co-excelso",
"label": "エクセルソ",
"name": "コロンビア エクセルソ",
"en": "Colombia Excelso",
"type": "ウォッシュト",
"age": "1200〜1800",
"abv": "",
"cask": "カトゥーラ・カスティージョ",
"grapes": [
"caturra",
"castillo"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2300,
"p": [
3,
3,
3,
3,
2,
1,
3,
0
],
"tags": [
"キャラメル",
"ナッツ",
"柑橘"
],
"desc": "スプレモに次ぐ大きさの等級。手頃な価格で、コロンビアらしいバランスのよさを楽しめる。"
},
{
"id": "c-co-decaf",
"label": "カフェインレス",
"name": "コロンビア カフェインレス",
"en": "Colombia Decaf",
"type": "その他",
"age": "1200〜1800",
"abv": "",
"cask": "カトゥーラ・カスティージョ",
"grapes": [
"caturra",
"castillo"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 3500,
"p": [
2,
3,
3,
3,
2,
1,
4,
0
],
"tags": [
"チョコレート",
"ナッツ",
"キャラメル"
],
"desc": "水や二酸化炭素などを使って、生豆の段階でカフェインを取り除いたもの。夜や妊娠中でも楽しめる。生豆の色が濃いので、焙煎の進み具合は色より香りと音で見極めたい。"
}
]
},
{
"id": "c-huila",
"name": "ウィラ",
"en": "Huila",
"region": "colombia",
"lat": 2.0,
"lon": -75.9,
"desc": "コロンビア南部、アンデス山脈の谷あい。品評会の常連で、果実味と明るい酸を持つ豆が多い。",
"ex": [
{
"id": "c-co-huila",
"label": "スプレモ",
"name": "コロンビア ウィラ スプレモ",
"en": "Colombia Huila Supremo",
"type": "ウォッシュト",
"age": "1500〜1900",
"abv": "",
"cask": "カトゥーラ・カスティージョ",
"grapes": [
"caturra",
"castillo"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3200,
"p": [
4,
4,
2,
3,
4,
2,
3,
0
],
"tags": [
"りんご",
"キャラメル",
"オレンジ",
"チョコレート"
],
"desc": "赤いりんごやオレンジのような甘酸っぱさと、キャラメルの甘さ。"
},
{
"id": "c-co-pinkbourbon",
"label": "ピンクブルボン",
"name": "コロンビア ウィラ ピンクブルボン",
"en": "Colombia Huila Pink Bourbon",
"type": "ウォッシュト",
"age": "1700〜2000",
"abv": "",
"cask": "ピンクブルボン",
"grapes": [
"bourbon"
],
"roast": [
"cinnamon",
"medium",
"high"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "medium",
"price": 7000,
"p": [
5,
4,
1,
2,
5,
5,
1,
0
],
"tags": [
"ジャスミン",
"ピーチ",
"柑橘",
"紅茶"
],
"desc": "熟すとピンク色になる珍しい品種。ゲイシャを思わせる花の香りと、桃や柑橘の華やかな果実味で、近年注目を集める。"
}
]
},
{
"id": "c-narino",
"name": "ナリーニョ",
"en": "Nariño",
"region": "colombia",
"lat": 1.25,
"lon": -77.3,
"desc": "エクアドル国境に近いアンデスの高地。赤道に近く高い標高で、鮮やかな酸の豆が育つ。",
"ex": [
{
"id": "c-co-narino",
"label": "スプレモ",
"name": "コロンビア ナリーニョ スプレモ",
"en": "Colombia Nariño Supremo",
"type": "ウォッシュト",
"age": "1800〜2200",
"abv": "",
"cask": "カトゥーラ・カスティージョ",
"grapes": [
"caturra",
"castillo"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3500,
"p": [
5,
4,
2,
3,
4,
3,
2,
0
],
"tags": [
"オレンジ",
"ベリー",
"花",
"蜂蜜"
],
"desc": "コロンビアのなかでも明るくジューシーな酸。オレンジやベリーの果実味と花の香り。"
}
]
},
{
"id": "c-santos",
"name": "サントス・南ミナス",
"en": "Sul de Minas",
"region": "brazil",
"lat": -21.5,
"lon": -45.4,
"desc": "ミナスジェライス州南部。ブラジルでもっとも生産量の多い地域で、積み出し港の名から「サントス」とも呼ばれてきた。",
"ex": [
{
"id": "c-br-no2",
"label": "サントス No.2 S17/18",
"name": "ブラジル サントス No.2 S17/18",
"en": "Brazil Santos No.2 S17/18",
"type": "ナチュラル",
"age": "900〜1300",
"abv": "",
"cask": "ムンドノーボ・カトゥアイ",
"grapes": [
"mundonovo",
"catuai"
],
"roast": [
"city",
"fullcity",
"french"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ",
"カフェオレ・ラテ"
],
"color": "fullcity",
"price": 2000,
"p": [
2,
4,
4,
4,
1,
0,
5,
1
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "No.2は欠点の少なさ、S17/18は豆の大きさを示す等級。ナッツやチョコレートのような香ばしさと低めの酸で、ブレンドの土台やエスプレッソにも欠かせない定番。"
},
{
"id": "c-br-yellowbourbon",
"label": "イエローブルボン",
"name": "ブラジル 南ミナス イエローブルボン",
"en": "Brazil Sul de Minas Yellow Bourbon",
"type": "パルプドナチュラル（ハニー）",
"age": "1000〜1300",
"abv": "",
"cask": "イエローブルボン",
"grapes": [
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"エスプレッソ",
"フレンチプレス"
],
"color": "city",
"price": 2900,
"p": [
2,
5,
3,
4,
2,
1,
4,
0
],
"tags": [
"蜂蜜",
"ナッツ",
"キャラメル",
"チョコレート"
],
"desc": "熟すと黄色くなるブルボンの変異種。蜂蜜のような甘さとまろやかなコクで、パルプドナチュラル精製がその甘さをさらに引き出す。"
}
]
},
{
"id": "c-cerrado",
"name": "セラード",
"en": "Cerrado Mineiro",
"region": "brazil",
"lat": -18.95,
"lon": -46.95,
"desc": "ミナスジェライス州西部の高原。乾季がはっきりしていて大規模な農園が多く、原産地呼称も認められている。",
"ex": [
{
"id": "c-br-cerrado",
"label": "ナチュラル",
"name": "ブラジル セラード ナチュラル",
"en": "Brazil Cerrado Natural",
"type": "ナチュラル",
"age": "900〜1200",
"abv": "",
"cask": "カトゥアイ・ムンドノーボ",
"grapes": [
"catuai",
"mundonovo"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"エスプレッソ",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2500,
"p": [
2,
4,
3,
4,
2,
0,
5,
1
],
"tags": [
"チョコレート",
"ナッツ",
"キャラメル",
"ドライフルーツ"
],
"desc": "チョコレートのような甘さとナッツの香ばしさ、低めの酸。エスプレッソにもよく合う。"
},
{
"id": "c-br-dryontree",
"label": "ドライ・オン・ツリー",
"name": "ブラジル セラード ドライ・オン・ツリー",
"en": "Brazil Cerrado Dry on Tree",
"type": "ナチュラル",
"age": "1000〜1200",
"abv": "",
"cask": "カトゥアイなど",
"grapes": [
"catuai"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 3200,
"p": [
2,
5,
3,
4,
3,
0,
4,
1
],
"tags": [
"ドライフルーツ",
"チョコレート",
"蜂蜜",
"ナッツ"
],
"desc": "実を木に付けたまま乾燥させてから収穫する方法。果実の糖分が豆に移り、ドライフルーツのような濃い甘さが出る。日系農家の農園による豆もよく知られる。"
}
]
},
{
"id": "c-mogiana",
"name": "モジアナ",
"en": "Mogiana",
"region": "brazil",
"lat": -21.0,
"lon": -47.3,
"desc": "サンパウロ州とミナス州の境の高原。古くからの産地で、甘くまろやかな豆が育つ。",
"ex": [
{
"id": "c-br-mogiana",
"label": "ナチュラル",
"name": "ブラジル モジアナ ナチュラル",
"en": "Brazil Mogiana Natural",
"type": "ナチュラル",
"age": "1000〜1200",
"abv": "",
"cask": "ムンドノーボ・カトゥアイ",
"grapes": [
"mundonovo",
"catuai"
],
"roast": [
"city",
"fullcity",
"french"
],
"brew": [
"ハンドドリップ",
"エスプレッソ",
"カフェオレ・ラテ"
],
"color": "fullcity",
"price": 2400,
"p": [
2,
4,
3,
4,
1,
0,
5,
1
],
"tags": [
"ナッツ",
"チョコレート",
"ブラウンシュガー"
],
"desc": "ナッツと黒糖のような甘さで、深煎りにしても苦みがやわらかい。"
}
]
},
{
"id": "c-chanchamayo",
"name": "チャンチャマイヨ",
"en": "Chanchamayo",
"region": "peru",
"lat": -11.05,
"lon": -75.33,
"desc": "ペルー中部、アンデスの東側の斜面。昔からの産地で、有機栽培の小農家が多い。",
"ex": [
{
"id": "c-pe-chanchamayo",
"label": "有機 ウォッシュト",
"name": "ペルー チャンチャマイヨ 有機",
"en": "Peru Chanchamayo Organic",
"type": "ウォッシュト",
"age": "1200〜1800",
"abv": "",
"cask": "ティピカ・カトゥーラなど",
"grapes": [
"typica",
"caturra"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2800,
"p": [
3,
4,
2,
3,
2,
1,
4,
0
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "有機栽培の認証を受けた豆も多い。穏やかな酸と、ナッツやチョコレートのやさしい甘さ。"
}
]
},
{
"id": "c-cajamarca",
"name": "カハマルカ",
"en": "Cajamarca",
"region": "peru",
"lat": -5.7,
"lon": -78.8,
"desc": "ペルー北部の高地。近年スペシャルティコーヒーの産地として評価が高まっている。",
"ex": [
{
"id": "c-pe-cajamarca",
"label": "ウォッシュト",
"name": "ペルー カハマルカ",
"en": "Peru Cajamarca",
"type": "ウォッシュト",
"age": "1600〜2000",
"abv": "",
"cask": "ティピカ・カトゥーラ・ブルボン",
"grapes": [
"typica",
"caturra",
"bourbon"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ"
],
"color": "high",
"price": 3300,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"キャラメル",
"花",
"ナッツ"
],
"desc": "標高の高さから明るい酸と甘さを持つ。チャンチャマイヨより華やか。"
}
]
},
{
"id": "c-caranavi",
"name": "カラナビ",
"en": "Caranavi",
"region": "bolivia",
"lat": -15.83,
"lon": -67.57,
"desc": "首都ラパスの北、アンデスの東斜面のユンガス地方。ボリビアのコーヒーの大部分を生む。",
"ex": [
{
"id": "c-bo-caranavi",
"label": "ウォッシュト",
"name": "ボリビア カラナビ",
"en": "Bolivia Caranavi",
"type": "ウォッシュト",
"age": "1400〜1900",
"abv": "",
"cask": "ティピカ・カトゥーラ",
"grapes": [
"typica",
"caturra"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3800,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"蜂蜜",
"花",
"ナッツ"
],
"desc": "高地の豆らしい明るい酸と、蜂蜜のような甘さ。生産量が少なく、出会えたら試したい豆。"
}
]
},
{
"id": "c-loja",
"name": "ロハ",
"en": "Loja",
"region": "ecuador",
"lat": -4.0,
"lon": -79.2,
"desc": "エクアドル南部、ペルー国境近くの高地。エクアドルでもっとも質の高い豆を生む産地。",
"ex": [
{
"id": "c-ec-loja",
"label": "ウォッシュト",
"name": "エクアドル ロハ",
"en": "Ecuador Loja",
"type": "ウォッシュト",
"age": "1500〜2000",
"abv": "",
"cask": "ティピカ・ブルボン",
"grapes": [
"typica",
"bourbon"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3800,
"p": [
4,
4,
2,
3,
3,
3,
2,
0
],
"tags": [
"柑橘",
"花",
"蜂蜜",
"キャラメル"
],
"desc": "赤道直下の高地で、ゆっくり熟した豆。柑橘と花の香り、上品な甘さ。"
}
]
},
{
"id": "c-lintong",
"name": "リントン（北スマトラ）",
"en": "Lintong",
"region": "indonesia",
"lat": 2.28,
"lon": 98.9,
"desc": "スマトラ島北部、トバ湖の南の高原。「マンデリン」の名で知られる豆の中心的な産地。",
"ex": [
{
"id": "c-id-mandheling-g1",
"label": "マンデリン G1",
"name": "インドネシア マンデリン G1",
"en": "Indonesia Mandheling G1",
"type": "スマトラ式",
"age": "1300〜1500",
"abv": "",
"cask": "ティピカ系・カティモールなど",
"grapes": [
"catimor",
"typica"
],
"roast": [
"fullcity",
"french"
],
"brew": [
"ネルドリップ",
"フレンチプレス",
"ハンドドリップ",
"カフェオレ・ラテ"
],
"color": "fullcity",
"price": 3200,
"p": [
1,
3,
5,
5,
1,
0,
3,
5
],
"tags": [
"ハーブ",
"土",
"ダークチョコ",
"スパイス"
],
"desc": "スマトラ式で精製された、重厚なコクと深い苦み。ハーブや土を思わせる独特の香りで、深煎りでこそ真価を発揮する。日本の喫茶店の定番。"
},
{
"id": "c-id-lintong",
"label": "リントン マンデリン",
"name": "インドネシア リントン マンデリン",
"en": "Indonesia Lintong Mandheling",
"type": "スマトラ式",
"age": "1400〜1600",
"abv": "",
"cask": "ティピカ系",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity",
"french"
],
"brew": [
"ネルドリップ",
"フレンチプレス",
"ハンドドリップ"
],
"color": "fullcity",
"price": 4000,
"p": [
2,
4,
4,
5,
2,
1,
3,
4
],
"tags": [
"ハーブ",
"トロピカル",
"ダークチョコ",
"杉"
],
"desc": "リントン地区の豆を選んだもの。マンデリンらしい重厚さに、ハーブやトロピカルフルーツのような明るさも感じられる。"
}
]
},
{
"id": "c-gayo",
"name": "アチェ（ガヨ高原）",
"en": "Aceh Gayo",
"region": "indonesia",
"lat": 4.6,
"lon": 96.85,
"desc": "スマトラ島最北部、ガヨ高原の産地。有機栽培の豆も多い。",
"ex": [
{
"id": "c-id-gayo",
"label": "ガヨマウンテン",
"name": "インドネシア アチェ ガヨマウンテン",
"en": "Indonesia Aceh Gayo Mountain",
"type": "スマトラ式",
"age": "1300〜1600",
"abv": "",
"cask": "ティピカ系・カティモール",
"grapes": [
"typica",
"catimor"
],
"roast": [
"city",
"fullcity",
"french"
],
"brew": [
"フレンチプレス",
"ハンドドリップ",
"エスプレッソ"
],
"color": "fullcity",
"price": 3500,
"p": [
2,
3,
4,
5,
1,
0,
4,
4
],
"tags": [
"ダークチョコ",
"ハーブ",
"スパイス",
"ナッツ"
],
"desc": "マンデリンと同じスマトラの豆だが、よりすっきりとしてクリーン。重厚なコクのなかに、穏やかな甘さ。"
}
]
},
{
"id": "c-toraja",
"name": "トラジャ（スラウェシ）",
"en": "Toraja",
"region": "indonesia",
"lat": -3.05,
"lon": 119.85,
"desc": "スラウェシ島中部の山岳地帯。独特の舟形の家で知られるトラジャ族の土地。",
"ex": [
{
"id": "c-id-toraja",
"label": "トラジャ",
"name": "インドネシア スラウェシ トラジャ",
"en": "Indonesia Sulawesi Toraja",
"type": "スマトラ式",
"age": "1400〜1800",
"abv": "",
"cask": "ティピカ系",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"ネルドリップ",
"フレンチプレス"
],
"color": "city",
"price": 4000,
"p": [
3,
3,
3,
4,
2,
1,
3,
4
],
"tags": [
"ハーブ",
"スパイス",
"ダークチョコ",
"土"
],
"desc": "マンデリンより穏やかで、ほどよい酸もある。ハーブやスパイスの香りとまろやかなコク。日本の商社が復興に関わった産地としても知られる。"
},
{
"id": "c-id-sulawesi",
"label": "スラウェシ アラビカ",
"name": "インドネシア スラウェシ アラビカ",
"en": "Indonesia Sulawesi Arabica",
"type": "スマトラ式",
"age": "1200〜1600",
"abv": "",
"cask": "ティピカ系など",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2800,
"p": [
2,
3,
3,
4,
1,
0,
3,
4
],
"tags": [
"ハーブ",
"ダークチョコ",
"土"
],
"desc": "スラウェシ島の各地の豆を集めた手頃な定番。インドネシアらしいコクと苦み。"
}
]
},
{
"id": "c-java",
"name": "ジャワ（イジェン高原）",
"en": "Java Ijen",
"region": "indonesia",
"lat": -7.95,
"lon": 114.1,
"desc": "ジャワ島東部、イジェン火山の高原。オランダ時代から続く農園の産地。",
"ex": [
{
"id": "c-id-java",
"label": "ジャワ アラビカ",
"name": "インドネシア ジャワ アラビカ",
"en": "Indonesia Java Arabica",
"type": "ウォッシュト",
"age": "1400〜1600",
"abv": "",
"cask": "ティピカ系など",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 3200,
"p": [
3,
3,
3,
4,
2,
1,
3,
2
],
"tags": [
"ハーブ",
"ナッツ",
"ダークチョコ",
"スパイス"
],
"desc": "水洗式で仕上げた、インドネシアのなかではクリーンな豆。しっかりしたコクに、やわらかなハーブの香り。"
}
]
},
{
"id": "c-kintamani",
"name": "バリ（キンタマーニ高原）",
"en": "Bali Kintamani",
"region": "indonesia",
"lat": -8.25,
"lon": 115.35,
"desc": "バリ島北部、バトゥール火山のふもとの高原。伝統的な水利組合の仕組みで栽培される。",
"ex": [
{
"id": "c-id-bali",
"label": "キンタマーニ",
"name": "インドネシア バリ キンタマーニ",
"en": "Indonesia Bali Kintamani",
"type": "ウォッシュト",
"age": "1200〜1500",
"abv": "",
"cask": "ティピカ系など",
"grapes": [
"typica"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"エアロプレス"
],
"color": "high",
"price": 3200,
"p": [
4,
3,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"ナッツ",
"花",
"ブラウンシュガー"
],
"desc": "柑橘畑と一緒に栽培されることも多く、明るい柑橘の酸が特徴。インドネシアらしからぬ軽やかさ。"
}
]
},
{
"id": "c-highlands-png",
"name": "西部高地州",
"en": "Western Highlands",
"region": "png",
"lat": -5.85,
"lon": 144.25,
"desc": "ニューギニア島の高地。ジャマイカ由来ともいわれるティピカ種が育つ。",
"ex": [
{
"id": "c-pg-sigri",
"label": "シグリ農園 AA",
"name": "パプアニューギニア シグリ農園 AA",
"en": "Papua New Guinea Sigri Estate AA",
"type": "ウォッシュト",
"age": "1500〜1600",
"abv": "",
"cask": "ティピカなど",
"grapes": [
"typica"
],
"roast": [
"high",
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 4200,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"蜂蜜",
"ナッツ",
"花"
],
"desc": "ワギ渓谷にある歴史ある農園の豆。柑橘の明るい酸と、蜂蜜のような甘さでクリーン。"
}
]
},
{
"id": "c-ermera",
"name": "エルメラ",
"en": "Ermera",
"region": "timor",
"lat": -8.75,
"lon": 125.4,
"desc": "東ティモール西部の山岳地帯。小さな農家による手作業の栽培が中心。",
"ex": [
{
"id": "c-tl-ermera",
"label": "ウォッシュト",
"name": "東ティモール エルメラ",
"en": "Timor-Leste Ermera",
"type": "ウォッシュト",
"age": "1200〜1600",
"abv": "",
"cask": "ティピカ・ティモールハイブリッド",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2900,
"p": [
2,
4,
3,
4,
2,
1,
4,
1
],
"tags": [
"ナッツ",
"チョコレート",
"ハーブ"
],
"desc": "穏やかな酸と、ナッツやチョコレートのやさしい甘さ。フェアトレードで取引される豆も多い。"
}
]
},
{
"id": "c-chikmagalur",
"name": "チクマガルール",
"en": "Chikmagalur",
"region": "india",
"lat": 13.32,
"lon": 75.77,
"desc": "インド南部カルナータカ州の山地。インドで最初にコーヒーが植えられたと伝えられる土地。",
"ex": [
{
"id": "c-in-aa",
"label": "AA プランテーション",
"name": "インド チクマガルール AA",
"en": "India Chikmagalur AA Plantation",
"type": "ウォッシュト",
"age": "1000〜1500",
"abv": "",
"cask": "セレクション795・ケントなど",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 2900,
"p": [
2,
3,
3,
4,
1,
0,
3,
4
],
"tags": [
"スパイス",
"ナッツ",
"ダークチョコ"
],
"desc": "木陰で、こしょうやカルダモンなどのスパイスと一緒に育てられることが多い。スパイシーな香りとしっかりしたコク。"
}
]
},
{
"id": "c-malabar",
"name": "マラバール海岸",
"en": "Malabar Coast",
"region": "india",
"lat": 12.9,
"lon": 74.85,
"desc": "インド南西部の海岸。生豆を季節風（モンスーン）にさらして熟成させる、独特の加工が行われる。",
"ex": [
{
"id": "c-in-monsooned",
"label": "モンスーン・マラバール",
"name": "インド モンスーン・マラバール AA",
"en": "India Monsooned Malabar AA",
"type": "その他",
"age": "1000〜1500",
"abv": "",
"cask": "ケントなど",
"grapes": [
"typica"
],
"roast": [
"city",
"fullcity",
"french"
],
"brew": [
"エスプレッソ",
"フレンチプレス",
"ネルドリップ"
],
"color": "fullcity",
"price": 2900,
"p": [
1,
3,
4,
5,
0,
0,
3,
5
],
"tags": [
"土",
"スパイス",
"ダークチョコ",
"ナッツ"
],
"desc": "帆船で何か月もかけて運ばれた昔の豆の風味を再現するため、湿った季節風に生豆をさらして熟成させる。酸がほとんどなく、重く土っぽい独特の味わい。生豆が淡い黄色にふくらんでいる。"
}
]
},
{
"id": "c-yunnan",
"name": "雲南（プーアル）",
"en": "Yunnan Pu'er",
"region": "china",
"lat": 22.8,
"lon": 101.0,
"desc": "中国南西部、プーアル茶の産地として知られる地域。近年アラビカ種の栽培が盛ん。",
"ex": [
{
"id": "c-cn-yunnan",
"label": "雲南 アラビカ",
"name": "中国 雲南 アラビカ",
"en": "China Yunnan Arabica",
"type": "ウォッシュト",
"age": "1200〜1600",
"abv": "",
"cask": "カティモールなど",
"grapes": [
"catimor"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2800,
"p": [
3,
3,
3,
3,
2,
1,
3,
2
],
"tags": [
"ナッツ",
"ハーブ",
"ブラウンシュガー"
],
"desc": "穏やかな酸と黒糖のような甘さ、かすかなハーブの香り。"
}
]
},
{
"id": "c-shan",
"name": "シャン州（ユアンガン）",
"en": "Shan State",
"region": "myanmar",
"lat": 21.15,
"lon": 96.6,
"desc": "ミャンマー東部の高原。国際協力のもとで品質向上が進み、近年評価を高めている。",
"ex": [
{
"id": "c-mm-shan",
"label": "ナチュラル",
"name": "ミャンマー シャン州 ナチュラル",
"en": "Myanmar Shan State Natural",
"type": "ナチュラル",
"age": "1200〜1400",
"abv": "",
"cask": "カトゥーラ・SL34など",
"grapes": [
"caturra"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "high",
"price": 3300,
"p": [
3,
4,
2,
3,
4,
1,
3,
1
],
"tags": [
"ベリー",
"チョコレート",
"ブラウンシュガー"
],
"desc": "ナチュラル精製で、ベリーのような果実味とチョコレートの甘さ。"
}
]
},
{
"id": "c-doichang",
"name": "ドイチャン",
"en": "Doi Chaang",
"region": "thailand",
"lat": 19.8,
"lon": 99.6,
"desc": "タイ北部、チェンライ県の山岳地帯。山岳民族の村が栽培を担い、ブランドとしても知られる。",
"ex": [
{
"id": "c-th-doichang",
"label": "ウォッシュト",
"name": "タイ ドイチャン",
"en": "Thailand Doi Chaang",
"type": "ウォッシュト",
"age": "1200〜1400",
"abv": "",
"cask": "カティモール・カトゥーラ",
"grapes": [
"catimor",
"caturra"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"エスプレッソ"
],
"color": "city",
"price": 3300,
"p": [
3,
3,
3,
3,
2,
1,
3,
1
],
"tags": [
"ナッツ",
"キャラメル",
"ハーブ"
],
"desc": "まろやかなコクと、ナッツやキャラメルの甘さ。クセが少なく飲みやすい。"
}
]
},
{
"id": "c-bolaven",
"name": "ボロベン高原",
"en": "Bolaven Plateau",
"region": "laos",
"lat": 15.1,
"lon": 106.4,
"desc": "ラオス南部の火山性の高原。フランス統治時代に栽培が始まった。",
"ex": [
{
"id": "c-la-bolaven",
"label": "アラビカ",
"name": "ラオス ボロベン高原 アラビカ",
"en": "Laos Bolaven Arabica",
"type": "ウォッシュト",
"age": "1000〜1300",
"abv": "",
"cask": "ティピカ・カティモール",
"grapes": [
"typica",
"catimor"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス"
],
"color": "city",
"price": 2900,
"p": [
2,
4,
3,
3,
2,
1,
4,
1
],
"tags": [
"ナッツ",
"チョコレート",
"ブラウンシュガー"
],
"desc": "火山性の土で育った、穏やかで甘い豆。ナッツや黒糖のようなやさしい味わい。"
}
]
},
{
"id": "c-dalat",
"name": "ダラット（ラムドン）",
"en": "Da Lat",
"region": "vietnam",
"lat": 11.94,
"lon": 108.44,
"desc": "ベトナム中部の高原の避暑地。ベトナムでは数少ないアラビカ種の産地。",
"ex": [
{
"id": "c-vn-arabica",
"label": "アラビカ",
"name": "ベトナム ダラット アラビカ",
"en": "Vietnam Da Lat Arabica",
"type": "ウォッシュト",
"age": "1400〜1600",
"abv": "",
"cask": "カティモール・ブルボンなど",
"grapes": [
"catimor",
"bourbon"
],
"roast": [
"city",
"fullcity"
],
"brew": [
"ハンドドリップ",
"フレンチプレス",
"カフェオレ・ラテ"
],
"color": "city",
"price": 2400,
"p": [
2,
3,
3,
3,
2,
1,
4,
1
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "穏やかな酸と香ばしさ。手頃な価格のアジアのアラビカ。"
}
]
},
{
"id": "c-daklak",
"name": "ダクラク（中部高原）",
"en": "Dak Lak",
"region": "vietnam",
"lat": 12.68,
"lon": 108.04,
"desc": "ベトナム中部高原の中心地バンメトート周辺。世界有数のロブスタ種の産地。",
"ex": [
{
"id": "c-vn-robusta",
"label": "ロブスタ G1",
"name": "ベトナム ロブスタ G1",
"en": "Vietnam Robusta G1",
"type": "ナチュラル",
"age": "500〜800",
"abv": "",
"cask": "ロブスタ",
"grapes": [
"robusta"
],
"roast": [
"fullcity",
"french",
"italian"
],
"brew": [
"エスプレッソ",
"カフェオレ・ラテ",
"ネルドリップ"
],
"color": "french",
"price": 1600,
"p": [
1,
2,
5,
5,
0,
0,
3,
4
],
"tags": [
"ダークチョコ",
"麦茶",
"土",
"ナッツ"
],
"desc": "アラビカ種とは別のカネフォラ種。強い苦みと麦茶のような香ばしさで、カフェインはアラビカの約2倍。深煎りにして練乳を入れるベトナム式や、エスプレッソのブレンドに少し加えるとクレマが厚くなる。"
}
]
},
{
"id": "c-kona",
"name": "コナ",
"en": "Kona",
"region": "hawaii",
"lat": 19.5,
"lon": -155.9,
"desc": "ハワイ島西部、フアラライ山とマウナ・ロア山の斜面。午後に雲がかかり、強い日差しをやわらげる。",
"ex": [
{
"id": "c-hi-kona-xf",
"label": "エクストラファンシー",
"name": "ハワイ コナ エクストラファンシー",
"en": "Hawaii Kona Extra Fancy",
"type": "ウォッシュト",
"age": "300〜900",
"abv": "",
"cask": "ティピカ（グアテマラ・ティピカ）",
"grapes": [
"typica"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ",
"サイフォン"
],
"color": "high",
"price": 14000,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"蜂蜜",
"ナッツ",
"花"
],
"desc": "エクストラファンシーは、豆の大きさと欠点の少なさによるコナの最上位等級。明るくやわらかな酸と、蜂蜜のような甘さ。"
},
{
"id": "c-hi-kona-f",
"label": "ファンシー",
"name": "ハワイ コナ ファンシー",
"en": "Hawaii Kona Fancy",
"type": "ウォッシュト",
"age": "300〜900",
"abv": "",
"cask": "ティピカ",
"grapes": [
"typica"
],
"roast": [
"high",
"city"
],
"brew": [
"ハンドドリップ"
],
"color": "high",
"price": 11000,
"p": [
4,
4,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"ナッツ",
"蜂蜜"
],
"desc": "エクストラファンシーに次ぐ等級。コナらしい穏やかな酸と甘さ。"
}
]
}
];
const COFFEE_ENTRIES = COFFEE_ORIGINS.flatMap(d => d.ex.map(x => ({ ...x, distilleryId:d.id, distillery:d.name, region:d.region, lat:d.lat, lon:d.lon })));
const COFFEE_REGIONS = {"ethiopia": {"jp": "エチオピア", "en": "ETHIOPIA", "label": [39.0, 8.6], "desc": "コーヒー発祥の地とされる国。森に自生する在来種が数えきれないほどあり、ジャスミンのような花の香りや、ベリーや柑橘の果実味で世界のスペシャルティコーヒーをリードする。日本では「モカ」の名でも親しまれてきた。", "pick": "エチオピア"}, "yemen": {"jp": "イエメン", "en": "YEMEN", "label": [44.2, 15.4], "desc": "アラビア半島の南端。かつて積み出し港モカからヨーロッパへ運ばれ、「モカ」の名を世界に広めた。乾いた山岳の段々畑で育つ豆は、ドライフルーツやスパイスを思わせる野性的な香り。", "pick": "イエメン"}, "kenya": {"jp": "ケニア", "en": "KENYA", "label": [37.3, 0.0], "desc": "赤道直下の高地。SL28・SL34という品種と、丁寧な水洗処理で、カシスやグレープフルーツのような鮮烈な酸と、厚みのあるコクを兼ね備える。", "pick": "ケニア"}, "tanzania": {"jp": "タンザニア", "en": "TANZANIA", "label": [36.0, -5.2], "desc": "キリマンジャロ山の斜面などで栽培され、日本では「キリマンジャロ」の名で古くから愛されてきた。キレのある酸と、しっかりしたコク。", "pick": "タンザニア"}, "rwanda": {"jp": "ルワンダ", "en": "RWANDA", "label": [29.9, -1.9], "desc": "「千の丘の国」と呼ばれる高地の国。ブルボン種が中心で、紅茶のような上品さと、オレンジや赤い果実の甘酸っぱさがある。", "pick": "ルワンダ"}, "burundi": {"jp": "ブルンジ", "en": "BURUNDI", "label": [29.9, -3.4], "desc": "ルワンダの南隣。小さな農家が集まる水洗場で丁寧に処理され、果実の甘さと明るい酸を持つ豆が多い。", "pick": "ブルンジ"}, "uganda": {"jp": "ウガンダ", "en": "UGANDA", "label": [32.6, 1.6], "desc": "ロブスタ種の大産地だが、ケニア国境のエルゴン山の斜面ではアラビカ種も育ち、チョコレートのような甘さと穏やかな酸を持つ。", "pick": "ウガンダ"}, "malawi": {"jp": "マラウイ", "en": "MALAWI", "label": [34.0, -11.6], "desc": "アフリカ南東部の小さな産地。北部の丘陵で、ゲイシャなど個性的な品種も栽培されている。", "pick": "マラウイ"}, "mexico": {"jp": "メキシコ", "en": "MEXICO", "label": [-93.0, 16.6], "desc": "南部のチアパス州やオアハカ州が主な産地。穏やかな酸とナッツのような香ばしさで、軽やかで飲みやすい。有機栽培の豆も多い。", "pick": "メキシコ"}, "guatemala": {"jp": "グアテマラ", "en": "GUATEMALA", "label": [-90.6, 15.2], "desc": "火山の多い国で、産地ごとに個性がはっきりしている。チョコレートのような甘さと、華やかな酸のバランスがよい。", "pick": "グアテマラ"}, "elsalvador": {"jp": "エルサルバドル", "en": "EL SALVADOR", "label": [-89.2, 13.8], "desc": "中米でもっとも小さな国。ブルボン種が多く残り、この国で生まれた大粒の品種パカマラでも知られる。", "pick": "エルサルバドル"}, "honduras": {"jp": "ホンジュラス", "en": "HONDURAS", "label": [-87.2, 14.6], "desc": "中米有数の生産国。標高の高い産地では、果実の甘さと明るい酸を持つ豆が育つ。", "pick": "ホンジュラス"}, "nicaragua": {"jp": "ニカラグア", "en": "NICARAGUA", "label": [-85.8, 13.0], "desc": "北部の山岳地帯が主な産地。やわらかな酸と甘さで、クセが少なく飲みやすい。大粒のマラゴジッペ種でも知られる。", "pick": "ニカラグア"}, "costarica": {"jp": "コスタリカ", "en": "COSTA RICA", "label": [-84.1, 9.9], "desc": "アラビカ種だけの栽培が法律で定められてきた国。小さな精製所（マイクロミル）が多く、ハニープロセスなど精製方法の工夫でも知られる。", "pick": "コスタリカ"}, "panama": {"jp": "パナマ", "en": "PANAMA", "label": [-82.4, 8.8], "desc": "バル火山のふもとのボケテ地区が中心。2004年に花の香りの強いゲイシャ種が世界的に注目され、オークションで記録的な価格がつくようになった。", "pick": "パナマ"}, "jamaica": {"jp": "ジャマイカ", "en": "JAMAICA", "label": [-77.2, 18.1], "desc": "東部のブルーマウンテン山脈の、決められた地域で育った豆だけが「ブルーマウンテン」を名乗れる。香り・酸・苦み・コクの調和が持ち味。", "pick": "ジャマイカ"}, "cuba": {"jp": "キューバ", "en": "CUBA", "label": [-79.0, 21.8], "desc": "中部のエスカンブライ山脈などで栽培される。「クリスタルマウンテン」の名で知られ、なめらかで穏やかな味わい。", "pick": "キューバ"}, "dominican": {"jp": "ドミニカ共和国", "en": "DOMINICAN REPUBLIC", "label": [-70.4, 18.9], "short": "ドミニカ", "desc": "カリブ海のイスパニョーラ島。南西部のバラオナなどの山岳地帯で、やわらかな酸とコクのある豆が育つ。", "pick": "ドミニカ共和国"}, "colombia": {"jp": "コロンビア", "en": "COLOMBIA", "label": [-75.0, 4.0], "desc": "アンデス山脈が国を縦に走り、産地によって収穫期が異なるため一年中収穫がある。すべて水洗式で、甘さとほどよい酸、まろやかなコクのバランスがよい。", "pick": "コロンビア"}, "ecuador": {"jp": "エクアドル", "en": "ECUADOR", "label": [-78.6, -1.6], "desc": "赤道直下のアンデスの高地。生産量は少ないが、南部のロハなどで質の高い豆が育つ。", "pick": "エクアドル"}, "peru": {"jp": "ペルー", "en": "PERU", "label": [-75.5, -9.0], "desc": "アンデスの東側の斜面が産地。有機栽培の豆が多く、穏やかでやさしい味わい。", "pick": "ペルー"}, "bolivia": {"jp": "ボリビア", "en": "BOLIVIA", "label": [-67.6, -16.0], "desc": "アンデスの高地、カラナビ周辺が中心。生産量は少ないが、標高の高さから明るい酸と甘さを持つ豆が育つ。", "pick": "ボリビア"}, "brazil": {"jp": "ブラジル", "en": "BRAZIL", "label": [-46.5, -19.5], "desc": "世界最大のコーヒー生産国。なだらかな高原の大農園が多く、ナッツやチョコレートのような甘さと低めの酸で、ブレンドの土台やエスプレッソにも欠かせない。", "pick": "ブラジル"}, "india": {"jp": "インド", "en": "INDIA", "label": [76.0, 12.6], "desc": "南部の西ガーツ山脈が産地。木陰で育てるのが特徴で、スパイスのような香りを持つ。季節風にさらして熟成させる「モンスーン」コーヒーも有名。", "pick": "インド"}, "myanmar": {"jp": "ミャンマー", "en": "MYANMAR", "label": [96.6, 21.2], "desc": "東部のシャン州の高原で、近年質の高いアラビカ種が育てられている。", "pick": "ミャンマー"}, "thailand": {"jp": "タイ", "en": "THAILAND", "label": [99.6, 19.6], "desc": "北部の山岳地帯で、ケシ栽培からの転換としてコーヒー栽培が広がった。ドイチャンなどの産地が知られる。", "pick": "タイ"}, "laos": {"jp": "ラオス", "en": "LAOS", "label": [106.4, 15.2], "desc": "南部のボロベン高原が産地。火山性の土壌で、穏やかで甘い豆が育つ。", "pick": "ラオス"}, "vietnam": {"jp": "ベトナム", "en": "VIETNAM", "label": [108.2, 12.2], "desc": "ブラジルに次ぐ世界第2位の生産国で、ロブスタ種が中心。中部高原のダラットではアラビカ種も育つ。練乳を入れて飲むベトナムコーヒーでも知られる。", "pick": "ベトナム"}, "china": {"jp": "中国（雲南）", "en": "YUNNAN", "label": [101.0, 23.0], "short": "雲南", "desc": "プーアル茶で知られる雲南省の南部で、アラビカ種の栽培が増えている。", "pick": "中国"}, "indonesia": {"jp": "インドネシア", "en": "INDONESIA", "label": [110.0, -3.0], "desc": "スマトラ、スラウェシ、ジャワ、バリなどの島々が産地。スマトラ式と呼ばれる独特の精製で、重厚なコクとハーブや土を思わせる香りが生まれる。", "pick": "インドネシア"}, "png": {"jp": "パプアニューギニア", "en": "PAPUA NEW GUINEA", "label": [145.0, -6.0], "short": "パプアニューギニア", "desc": "ニューギニア島東部の高地。ジャマイカのブルーマウンテン由来ともいわれるティピカ種が育ち、穏やかな酸と甘さを持つ。", "pick": "パプアニューギニア"}, "timor": {"jp": "東ティモール", "en": "TIMOR-LESTE", "label": [125.8, -8.8], "desc": "ティモール島東部。小さな農家による手作業の栽培が中心で、フェアトレードの豆としても知られる。", "pick": "東ティモール"}, "hawaii": {"jp": "ハワイ", "en": "HAWAII", "desc": "ハワイ島西部のコナ地区が中心。火山の斜面で、午後に雲がかかる独特の気候のもと、穏やかな酸と甘さを持つ豆が育つ。", "pick": "ハワイ"}};
const COFFEE_COUNTRIES = {"africa": {"jp": "アフリカ・アラビア", "style": "アフリカ", "en": "AFRICA & ARABIA", "mark": [38.0, 5.0], "map": "africa", "regions": ["ethiopia", "yemen", "kenya", "uganda", "rwanda", "burundi", "tanzania", "malawi"], "desc": "コーヒー発祥の地とされるエチオピアと、その周辺の国々。花や果実を思わせる華やかな香りと、明るい酸を持つ豆が多い。地図の国をタップすると、その国の産地が表示される。"}, "central": {"jp": "中米・カリブ", "style": "中米・カリブ", "en": "CENTRAL AMERICA", "mark": [-86.0, 14.0], "map": "central", "callout": true, "regions": ["mexico", "guatemala", "elsalvador", "honduras", "nicaragua", "costarica", "panama", "jamaica", "cuba", "dominican"], "desc": "火山の多い山岳地帯で、標高の高さが味わいを決める。酸と甘さのバランスがよく、パナマのゲイシャやジャマイカのブルーマウンテンなど名高い豆も多い。"}, "south": {"jp": "南米", "style": "南米", "en": "SOUTH AMERICA", "mark": [-58.0, -12.0], "map": "south", "regions": ["colombia", "ecuador", "peru", "bolivia", "brazil"], "desc": "世界最大の生産国ブラジルと、まろやかでバランスのよいコロンビアを中心とした産地。毎日飲みたくなる、ナッツやチョコレートのような甘さの豆が多い。"}, "asia": {"jp": "アジア・太平洋", "style": "アジア・太平洋", "en": "ASIA & PACIFIC", "mark": [110.0, 5.0], "map": "asia", "regions": ["india", "china", "myanmar", "thailand", "laos", "vietnam", "indonesia", "timor", "png"], "desc": "インドネシアのマンデリンに代表される、重厚なコクと苦みの豆が多い地域。ベトナムのロブスタ種や、近年注目されるタイやミャンマーの豆も。"}, "hawaii": {"jp": "ハワイ", "style": "ハワイ", "en": "HAWAII", "regions": ["hawaii"], "minor": true}};
const COFFEE_MAIN = ["africa","central","south","asia"];
const COFFEE_VARIETIES = [
{
"id": "heirloom",
"name": "エチオピア在来種",
"en": "Ethiopian Heirloom",
"kind": "アラビカ",
"home": "エチオピア",
"p": [
4,
3,
1,
2,
5,
5,
1,
0
],
"tags": [
"ジャスミン",
"ベリー",
"柑橘",
"紅茶"
],
"desc": "エチオピアの森や庭先に自生してきた、数千ともいわれる在来の品種群の総称。花や果実を思わせる華やかな香りが特徴で、コーヒーの遺伝的な多様性の宝庫。"
},
{
"id": "typica",
"name": "ティピカ",
"en": "Typica",
"kind": "アラビカ",
"home": "ジャマイカ、ハワイ、パプアニューギニア、中米",
"p": [
3,
4,
2,
3,
2,
2,
3,
0
],
"tags": [
"クリーン",
"蜂蜜",
"ナッツ",
"花"
],
"desc": "イエメンからアジアを経て中南米へ広がった、もっとも古い系統のひとつ。上品な甘さとクリーンな味わいだが、収量が少なく病気に弱い。"
},
{
"id": "bourbon",
"name": "ブルボン",
"en": "Bourbon",
"kind": "アラビカ",
"home": "ルワンダ、ブルンジ、エルサルバドル、ブラジル",
"p": [
3,
5,
2,
3,
3,
2,
3,
0
],
"tags": [
"キャラメル",
"赤い果実",
"蜂蜜",
"チョコレート"
],
"desc": "インド洋のブルボン島（現レユニオン島）で生まれた、ティピカと並ぶ古い系統。強い甘さとコクが持ち味で、黄色やピンク色の実をつける変種もある。"
},
{
"id": "geisha",
"name": "ゲイシャ",
"en": "Geisha / Gesha",
"kind": "アラビカ",
"home": "パナマ、コロンビア、エチオピア、マラウイ",
"p": [
5,
4,
1,
2,
5,
5,
1,
0
],
"tags": [
"ジャスミン",
"ベルガモット",
"白桃",
"柑橘"
],
"desc": "エチオピアのゲシャ村周辺が原産とされ、パナマで花開いた品種。ジャスミンやベルガモットの香りと透明感のある味わいで、世界でもっとも高値で取引される品種のひとつ。"
},
{
"id": "caturra",
"name": "カトゥーラ",
"en": "Caturra",
"kind": "アラビカ",
"home": "コロンビア、中米",
"p": [
4,
3,
2,
3,
3,
2,
3,
0
],
"tags": [
"柑橘",
"キャラメル",
"ナッツ"
],
"desc": "ブラジルで見つかったブルボンの突然変異種。木が低く、たくさん植えられるため中南米で広まった。明るい酸と軽やかなコク。"
},
{
"id": "catuai",
"name": "カトゥアイ",
"en": "Catuai",
"kind": "アラビカ",
"home": "ブラジル、中米",
"p": [
3,
3,
3,
3,
2,
1,
4,
0
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "ムンドノーボとカトゥーラをかけ合わせて生まれた品種。風に強く収量も多いため、ブラジルや中米で広く栽培されている。"
},
{
"id": "mundonovo",
"name": "ムンドノーボ",
"en": "Mundo Novo",
"kind": "アラビカ",
"home": "ブラジル",
"p": [
2,
4,
3,
4,
1,
0,
5,
1
],
"tags": [
"ナッツ",
"チョコレート",
"キャラメル"
],
"desc": "ブラジルで生まれたティピカとブルボンの自然交配種。病気に強く収量が多く、ブラジルを代表する品種となった。ナッツのような甘さと穏やかな酸。"
},
{
"id": "pacamara",
"name": "パカマラ",
"en": "Pacamara",
"kind": "アラビカ",
"home": "エルサルバドル、グアテマラ",
"p": [
4,
4,
2,
3,
4,
3,
2,
1
],
"tags": [
"トロピカル",
"ハーブ",
"チョコレート",
"柑橘"
],
"desc": "エルサルバドルで、パカス種と大粒のマラゴジッペ種をかけ合わせて生まれた。とても大きな豆で、ハーブやトロピカルフルーツのような個性的な香り。"
},
{
"id": "maragogype",
"name": "マラゴジッペ",
"en": "Maragogype",
"kind": "アラビカ",
"home": "ニカラグア、メキシコ、ブラジル",
"p": [
3,
3,
2,
2,
2,
2,
3,
0
],
"tags": [
"ナッツ",
"花",
"クリーン"
],
"desc": "ブラジルで見つかったティピカの突然変異種。「象の豆」とも呼ばれるほど粒が大きく、やわらかで穏やかな味わい。"
},
{
"id": "sl28",
"name": "SL28・SL34",
"en": "SL28 / SL34",
"kind": "アラビカ",
"home": "ケニア",
"p": [
5,
4,
2,
4,
5,
2,
1,
0
],
"tags": [
"カシス",
"グレープフルーツ",
"トマト",
"ブラウンシュガー"
],
"desc": "1930年代にケニアの研究所（スコット・ラボラトリーズ）で選ばれた品種。カシスやグレープフルーツを思わせる、鮮烈で複雑な酸が持ち味。"
},
{
"id": "castillo",
"name": "カスティージョ",
"en": "Castillo",
"kind": "アラビカ",
"home": "コロンビア",
"p": [
3,
3,
3,
3,
2,
1,
3,
0
],
"tags": [
"キャラメル",
"柑橘",
"ナッツ"
],
"desc": "コロンビアで開発された、さび病に強い品種。現在のコロンビアの主力品種のひとつ。"
},
{
"id": "catimor",
"name": "カティモール",
"en": "Catimor",
"kind": "アラビカ",
"home": "アジア、中南米",
"p": [
2,
2,
4,
4,
1,
0,
3,
3
],
"tags": [
"ハーブ",
"土",
"ダークチョコ"
],
"desc": "カトゥーラと、ロブスタの血を引くハイブリッドをかけ合わせた病気に強い品種。アジアなどで広く栽培され、苦みとコクが出やすい。"
},
{
"id": "robusta",
"name": "ロブスタ",
"en": "Robusta (Canephora)",
"kind": "カネフォラ",
"home": "ベトナム、インドネシア、ウガンダ、ブラジル",
"p": [
1,
2,
5,
5,
0,
0,
3,
4
],
"tags": [
"ダークチョコ",
"土",
"麦茶",
"ナッツ"
],
"desc": "アラビカ種とは別の種、カネフォラ種の代表的な品種。低地でも育ち病気に強い。カフェインが多く、強い苦みと麦茶のような香ばしさで、インスタントやエスプレッソのブレンドに使われる。"
}
];
const COFFEE_MAPS = {"world": {"w": 218.1, "h": 59.0, "proj": {"lon0": -120, "lat1": 36, "c": 0.95, "k": 0.82}, "base": "M232.2,43.9L232.7,44.0L232.1,44.5L231.6,44.1ZM119.9,30.3L124.0,33.4L124.0,36.5L124.9,38.0L121.9,39.1L120.4,39.0L119.9,37.5L117.4,36.4L116.3,33.2L117.4,32.3L117.2,30.5ZM86.7,6.8L86.7,8.3L84.2,8.3L84.2,10.4L83.5,10.4L83.4,12.0L80.2,12.0L82.0,11.9L84.6,7.5ZM-2.2,-10.7L-5.8,-12.2L-6.1,-13.4L-8.2,-15.0L-7.8,-16.3L-12.1,-19.5L-13.6,-18.8L-16.4,-19.9L-16.3,-27.6L-12.9,-27.0L-7.6,-28.0L-7.1,-27.7L-6.3,-28.3L-4.5,-27.5L-3.4,-28.0L-3.3,-27.4L-1.1,-27.7L3.7,-27.0L4.8,-26.6L3.7,-26.2L5.1,-26.0L7.8,-26.2L8.7,-25.7L9.5,-26.1L8.7,-26.5L9.2,-26.8L10.8,-26.9L14.4,-26.0L16.8,-26.1L16.7,-26.6L17.4,-26.7L18.6,-26.4L18.6,-25.7L20.1,-27.1L18.3,-28.0L18.4,-28.9L19.3,-29.5L21.1,-29.0L22.2,-28.0L21.5,-27.6L22.9,-27.5L22.9,-26.6L24.0,-27.3L24.9,-26.7L24.7,-26.1L25.4,-25.6L26.8,-26.9L26.9,-27.8L29.1,-27.6L30.2,-27.2L29.6,-26.3L30.1,-25.5L26.7,-25.1L25.5,-23.6L22.8,-22.6L20.1,-20.4L19.7,-18.8L20.9,-18.7L21.6,-17.3L29.4,-15.7L29.5,-14.2L31.2,-12.5L32.2,-13.6L31.3,-15.3L33.4,-16.3L33.8,-17.4L32.3,-18.7L33.2,-19.6L32.6,-21.6L36.0,-21.7L39.3,-20.6L39.5,-18.8L40.8,-18.2L43.2,-20.0L45.7,-17.2L45.3,-16.7L48.8,-15.3L50.0,-14.2L50.1,-13.2L46.7,-11.7L41.8,-11.7L38.1,-8.9L42.8,-10.9L43.5,-10.4L42.8,-9.9L43.3,-8.4L45.6,-8.1L46.3,-9.0L46.9,-8.1L42.6,-6.2L42.0,-6.2L41.9,-6.9L43.3,-7.6L41.2,-7.5L40.3,-9.3L39.5,-9.4L37.8,-7.4L35.2,-7.4L33.6,-6.3L32.2,-6.3L32.0,-5.6L29.1,-4.7L29.2,-7.7L24.6,-10.1L22.1,-10.0L19.6,-11.0ZM31.3,-30.2L30.5,-30.6L30.9,-31.0L34.0,-30.4ZM30.9,-21.4L31.7,-21.5L31.4,-21.0ZM20.6,-32.0L18.1,-31.9L19.6,-32.5ZM24.8,-31.5L21.5,-31.8L20.3,-33.1L17.8,-33.4L22.1,-33.4L22.6,-32.9L31.1,-32.3L29.6,-31.5ZM50.2,-12.6L49.2,-11.3L51.8,-10.9L51.6,-10.3L52.1,-10.4L52.5,-9.5L51.8,-8.7L51.3,-8.9L51.4,-9.5L50.3,-8.9L49.7,-9.5L47.2,-9.8L49.3,-12.5ZM28.1,-23.9L31.1,-22.7L28.7,-23.0L28.0,-22.6L26.9,-22.2L25.5,-22.6L26.6,-24.4ZM32.1,-29.8L32.9,-30.1L39.9,-28.3L41.3,-27.2L39.9,-26.8L45.3,-25.3L43.7,-23.8L41.5,-24.9L40.5,-24.8L40.4,-24.3L43.1,-22.5L42.8,-21.9L39.9,-22.8L41.9,-21.3L38.2,-22.1L35.2,-23.5L32.3,-23.4L32.8,-24.0L35.9,-24.2L36.9,-25.7L36.4,-26.3L32.0,-28.0L27.3,-27.9L24.4,-28.2L23.7,-28.5L24.6,-28.9L23.5,-28.9L23.2,-29.7L23.8,-30.4L26.6,-31.0L26.0,-30.5L26.7,-30.0L29.4,-31.0L30.7,-30.1L30.6,-29.6ZM19.9,-31.3L23.0,-31.0L20.0,-29.5L18.7,-30.3ZM-2.2,-32.9L0.7,-34.0L3.0,-34.1L2.3,-33.2ZM-9.9,-14.8L-9.2,-14.9L-9.4,-13.9L-8.7,-13.3L-9.5,-13.6L-10.3,-14.6ZM-2.7,-10.3L-4.4,-10.5L-6.6,-11.9L-4.5,-11.7ZM-1.2,-31.5L3.5,-30.7L0.6,-29.9L-0.4,-29.0L-2.4,-28.6L-4.6,-29.4L-3.1,-30.9L-3.8,-31.4ZM9.5,-32.7L11.0,-32.8L10.7,-32.0L6.1,-31.5L4.8,-31.8L6.4,-32.1L2.9,-32.0L1.8,-32.2L3.6,-33.2L8.5,-32.4L7.4,-33.2L8.1,-33.5ZM10.5,-30.4L11.4,-30.1L12.1,-28.7L14.8,-27.9L13.5,-27.5L13.7,-26.9L10.9,-27.2L5.2,-26.7L2.1,-27.8L4.9,-28.0L1.6,-28.3L1.2,-28.6L3.0,-29.0L0.5,-29.2L1.7,-30.1L3.7,-30.6L4.5,-30.4L4.2,-30.1L7.9,-30.3L9.2,-29.2L9.6,-29.6L9.0,-30.4ZM15.2,-30.1L14.4,-30.6L15.3,-31.0L17.6,-31.0L17.1,-30.3L18.3,-30.0L18.1,-29.2L16.9,-28.9L13.6,-29.9ZM10.4,-30.8L12.1,-30.7L11.4,-30.1ZM16.7,-33.4L17.3,-33.0L17.0,-32.0L14.9,-32.0L14.9,-32.5L13.6,-32.4L13.6,-33.1ZM34.9,-25.8L33.5,-25.5L33.6,-26.4L35.0,-26.2ZM18.5,-27.5L19.0,-27.1L18.5,-26.9L15.7,-27.4L17.0,-28.0ZM43.6,-9.0L45.2,-8.6L44.8,-8.2L43.5,-8.5ZM-2.2,-10.7L19.6,-11.0L22.1,-10.0L24.6,-10.1L29.2,-7.7L29.1,-4.7L32.0,-5.6L32.2,-6.3L33.6,-6.3L35.2,-7.4L37.8,-7.4L39.5,-9.4L40.3,-9.3L41.3,-7.2L38.9,-6.3L38.3,-5.2L39.0,-4.6L36.1,-4.0L37.4,-4.0L35.9,-3.9L35.1,-2.4L34.6,-2.9L35.0,-2.0L34.3,-1.0L34.0,-2.6L34.0,-1.7L33.5,-1.8L34.3,-0.7L34.0,1.0L30.1,3.7L31.1,7.5L30.9,8.9L29.8,8.3L28.3,5.0L27.2,5.2L26.2,4.6L23.7,4.8L23.8,5.6L19.7,5.3L17.8,6.7L17.5,8.3L16.3,7.9L14.8,5.4L12.5,5.5L10.5,3.5L7.0,3.8L4.1,2.7L2.2,2.8L1.2,1.6L-0.5,1.1L-3.4,-3.5L-3.0,-7.8L-3.7,-10.0L-2.4,-9.9L-2.0,-9.1ZM-27.6,13.1L-27.1,13.6L-28.0,13.9ZM-25.9,-18.0L-25.0,-17.7L-26.5,-17.0L-27.0,-17.6ZM-16.3,-27.6L-16.4,-19.9L-13.6,-18.8L-12.1,-19.5L-7.8,-16.3L-8.2,-15.4L-11.0,-18.1L-13.0,-18.2L-15.5,-19.3L-21.1,-20.4L-22.0,-20.2L-21.8,-19.7L-24.7,-19.0L-23.9,-20.7L-26.5,-19.1L-25.9,-18.7L-26.7,-18.2L-29.9,-16.4L-34.9,-15.1L-30.1,-17.2L-29.3,-18.3L-28.9,-18.8L-32.7,-18.6L-33.1,-19.7L-35.3,-20.1L-35.9,-20.9L-35.6,-21.4L-34.7,-22.3L-31.8,-22.8L-32.3,-23.3L-31.8,-23.6L-35.0,-23.3L-37.5,-24.3L-34.6,-25.1L-32.5,-24.7L-36.4,-26.5L-36.0,-27.0L-28.5,-29.0ZM161.5,-10.8L160.3,-10.2L159.8,-9.0L158.3,-9.3L157.7,-7.8L155.8,-7.3L156.5,-5.9L156.0,-5.2L151.3,-6.0L150.7,-5.3L148.9,-5.5L146.9,-3.8L145.5,-4.2L145.0,-5.7L144.0,-6.3L141.8,-6.2L139.1,-7.9L137.0,-7.4L137.1,-4.4L135.6,-5.2L134.4,-4.7L134.4,-5.6L132.7,-7.1L134.1,-7.7L134.8,-7.6L134.8,-8.9L131.7,-8.5L129.7,-10.2L130.5,-11.9L131.3,-11.4L133.0,-12.9L136.9,-12.0L141.3,-12.1L141.5,-12.5L140.2,-13.1L141.5,-13.9L141.0,-14.5L141.3,-14.8L147.3,-15.9L148.7,-15.7L148.9,-14.9L150.7,-14.8L150.7,-14.3L153.4,-15.2L155.8,-12.2L156.2,-12.6L158.4,-12.4ZM137.1,-4.4L137.0,-7.4L139.1,-7.9L141.8,-6.2L144.0,-6.3L145.0,-5.7L145.5,-4.2L146.7,-3.8L149.0,-5.1L148.3,-4.5L150.4,-4.0L148.5,-3.5L148.5,-4.1L147.5,-3.9L146.9,-2.9L146.2,-2.9L146.8,-1.8L146.3,-0.9L145.3,-1.1L145.3,-1.6L139.2,-5.5L138.0,-4.4ZM203.3,31.7L206.1,32.7L208.5,34.5L208.1,35.6L211.0,38.0L208.7,37.8L206.2,35.8L204.6,37.2L203.3,37.0ZM212.4,32.5L212.5,33.4L211.9,32.4L211.1,31.6ZM211.3,34.3L210.1,34.7L209.0,34.2L210.4,33.6L211.0,34.0L212.0,32.9ZM214.0,33.9L215.0,34.9L214.7,35.2ZM203.3,31.7L203.3,37.0L202.7,36.3L200.7,36.4L201.5,35.5L200.9,33.9L197.6,32.4L197.1,32.9L196.3,31.8L197.6,31.3L196.5,31.3L195.2,30.3L196.6,29.8L197.9,30.2L198.2,31.8L199.0,32.3L200.5,30.9ZM185.3,26.1L184.9,26.9L186.2,28.8L185.3,28.9L184.0,32.8L179.3,31.9L178.4,29.2L178.9,27.9L179.6,28.9L182.1,28.5L182.8,28.3L183.7,26.0ZM194.3,31.8L195.4,32.7L194.1,32.3L193.1,32.3ZM192.3,32.6L191.6,32.1L192.4,32.1ZM193.1,27.7L193.7,28.6L193.2,29.7L192.7,28.7ZM189.2,28.8L190.9,28.2L190.4,29.2L187.1,29.3L187.0,29.9L187.7,30.7L189.6,30.0L188.1,31.1L189.4,33.4L189.4,33.9L188.7,33.9L189.1,33.2L188.3,33.5L187.7,31.7L187.2,31.9L187.3,34.1L186.5,33.9L186.6,32.4L186.0,31.8L187.0,29.1L187.7,28.4ZM187.2,37.9L186.2,37.4L187.3,37.4ZM188.0,36.5L189.2,36.2L187.9,36.8L186.9,36.4ZM185.6,36.4L186.3,36.7L184.8,36.9L184.7,36.5ZM178.0,34.8L181.2,35.2L183.6,36.4L180.4,36.3L175.6,35.1L176.1,34.4ZM174.8,30.4L176.1,32.0L175.9,34.3L175.0,34.3L173.4,33.0L169.6,27.5L167.7,25.0L169.4,25.2L171.9,27.8L173.3,28.4L174.4,29.4L174.1,30.1ZM40.0,72.7L40.7,73.7L42.8,74.4L42.5,74.8L40.0,74.5ZM48.6,54.3L47.9,57.8L48.9,58.5L49.2,59.8L47.3,61.3L44.9,61.4L45.1,62.9L44.6,63.2L42.8,63.2L42.9,64.0L44.0,64.4L42.7,65.2L42.4,66.5L41.1,66.9L40.8,67.5L42.3,68.3L39.6,71.1L40.4,72.4L37.5,72.2L37.2,71.1L36.4,70.8L37.7,66.9L37.3,64.2L38.3,61.1L38.1,59.6L39.1,57.6L38.5,55.2L39.2,52.9L40.3,51.6L40.2,49.6L41.0,49.2L41.2,48.2L41.9,47.4L43.3,48.2L43.6,47.6L44.5,47.6L46.1,49.1L48.5,50.2L47.8,51.8L48.6,52.0L50.1,52.0L51.3,50.5L51.7,51.6ZM40.0,72.7L40.0,74.5L41.1,74.9L38.2,74.7L35.3,72.8L38.1,73.9L38.7,72.9ZM39.3,43.9L40.2,45.4L40.6,48.3L41.3,48.4L40.2,49.6L40.3,51.6L39.2,52.9L38.5,55.2L39.1,57.6L38.1,59.6L38.3,61.1L37.3,64.2L38.0,66.2L36.3,70.0L36.4,70.8L37.2,71.1L37.5,72.2L40.1,72.4L38.3,72.9L38.2,73.7L37.0,73.4L35.1,72.4L34.6,69.4L35.7,68.0L34.6,67.8L35.6,65.7L36.4,66.0L36.8,64.3L36.3,64.1L36.1,65.1L35.6,65.0L36.4,61.7L36.2,60.0L37.8,56.1L38.7,44.6ZM116.3,33.2L117.4,36.4L115.9,36.5L115.6,39.2L116.6,39.5L116.6,40.4L114.6,39.0L110.7,38.6L110.4,35.5L109.1,35.2L108.3,36.1L107.1,36.1L106.2,34.3L103.1,34.5L103.3,33.6L104.8,33.6L105.9,32.4L108.2,25.7L110.9,26.2L113.5,25.2L114.8,25.2L115.6,26.0L116.6,25.7L117.5,26.6L117.8,27.7L116.9,28.6L116.2,31.4ZM125.9,30.9L125.4,27.2L126.3,26.0L128.5,25.4L131.6,21.8L131.6,20.2L132.6,19.9L133.3,19.7L133.2,20.8L131.3,25.1ZM124.0,33.4L119.9,30.3L120.8,28.0L120.0,26.0L121.0,25.0L123.2,26.6L126.1,26.3L125.4,27.2L125.9,30.9ZM112.6,22.8L111.8,22.2L111.8,21.2L110.6,19.2L111.4,16.7L112.1,16.7L112.1,13.1L113.0,13.1L113.0,11.5L122.2,11.5L122.7,14.3L123.4,14.8L122.2,15.6L121.7,18.4L120.2,20.8L119.9,22.4L119.0,19.5L117.9,21.5L116.8,21.1L116.0,21.8L114.3,21.8L113.0,21.1L112.1,22.5ZM112.0,13.5L112.1,16.7L111.4,16.7L110.6,19.2L111.3,20.4L107.5,23.0L105.4,23.4L104.4,21.7L105.5,21.3L104.9,18.6L104.0,17.7L105.4,15.9L105.9,12.8L105.0,10.8L105.8,10.3ZM37.6,13.4L37.6,14.7L35.5,14.5L37.1,14.2L36.5,13.2ZM37.6,14.7L37.7,13.2L39.5,13.9L40.3,14.3L40.0,14.6ZM232.7,-28.8L233.7,-29.1L233.7,-28.6ZM131.7,-8.5L129.8,-7.1L131.3,-4.8L130.7,-4.2L128.9,-5.3L124.6,-6.1L122.1,-7.6L123.3,-8.4L122.8,-8.7L124.0,-9.1L123.3,-9.5L124.4,-9.8L124.7,-11.2L121.0,-12.0L119.8,-13.4L118.2,-13.2L117.9,-14.0L118.9,-14.2L117.4,-15.4L117.5,-16.0L115.4,-16.5L114.7,-17.6L114.8,-18.6L116.2,-19.7L115.3,-20.1L118.0,-22.0L116.9,-22.6L117.2,-23.1L116.5,-23.7L117.0,-24.4L116.1,-25.4L116.8,-26.0L115.6,-26.5L115.8,-27.1L118.5,-27.8L125.5,-25.8L125.5,-25.2L123.4,-24.6L119.3,-25.1L120.6,-24.5L120.7,-23.3L122.3,-22.8L121.9,-23.6L122.4,-23.9L124.3,-23.4L125.0,-23.6L124.5,-24.2L126.3,-25.0L127.7,-24.7L128.2,-25.2L127.3,-26.7L129.5,-26.4L130.0,-26.0L129.0,-25.4L129.6,-25.1L135.3,-26.9L135.9,-26.9L135.1,-26.4L139.3,-27.0L140.2,-26.5L141.1,-27.0L140.2,-27.5L140.6,-27.8L146.9,-26.3L147.4,-26.7L145.6,-27.4L145.4,-28.7L148.0,-30.4L150.2,-29.7L149.4,-29.0L150.2,-28.2L150.0,-27.1L150.9,-26.6L149.0,-24.9L149.9,-24.7L151.9,-26.0L151.5,-26.5L151.9,-27.1L150.8,-27.6L151.4,-28.4L150.4,-29.1L151.8,-29.6L151.6,-30.2L152.4,-29.8L152.1,-29.0L153.0,-28.8L152.6,-29.4L153.9,-29.7L157.0,-29.3L156.2,-30.9L161.1,-31.1L160.5,-31.5L161.4,-32.1L172.0,-33.2L174.8,-34.2L177.0,-33.2L180.0,-33.4L182.4,-32.7L178.7,-31.3L181.5,-31.1L181.9,-30.6L183.5,-31.0L189.5,-30.3L189.5,-30.9L193.7,-30.4L194.0,-29.8L193.6,-29.5L195.8,-28.5L196.5,-29.4L202.4,-29.1L201.9,-29.9L202.9,-30.2L209.9,-29.7L212.6,-28.6L217.3,-28.6L217.9,-27.7L218.9,-27.4L224.2,-27.5L225.6,-26.8L226.5,-27.1L225.9,-27.6L226.3,-28.0L233.7,-27.0L233.7,-23.8L231.7,-23.5L233.2,-22.1L233.1,-21.6L228.8,-21.0L226.2,-19.6L225.1,-20.2L220.9,-19.6L219.7,-18.2L220.6,-17.7L220.5,-16.5L219.4,-15.8L219.8,-15.5L218.4,-15.0L218.1,-14.1L217.0,-13.9L215.6,-12.3L214.6,-15.9L214.9,-17.0L221.0,-20.6L221.6,-21.8L218.2,-20.1L217.6,-21.1L215.6,-20.9L213.6,-19.5L214.3,-19.0L211.3,-18.7L211.4,-19.3L210.2,-19.4L204.3,-18.9L198.7,-15.4L201.1,-14.6L202.5,-14.9L203.6,-13.3L202.6,-10.2L197.5,-5.6L196.5,-6.0L195.4,-5.1L195.5,-7.4L197.2,-7.5L198.7,-10.2L195.5,-9.7L194.3,-11.0L192.9,-11.3L191.6,-13.8L189.7,-14.3L187.1,-13.7L187.5,-13.1L185.3,-11.1L182.6,-11.7L179.7,-10.8L178.0,-10.9L176.7,-11.7L174.2,-11.6L170.5,-13.2L169.2,-11.3L165.3,-12.1L161.5,-10.8L158.4,-12.4L156.2,-12.6L155.8,-12.2L153.4,-15.2L150.7,-14.3L150.7,-14.8L148.9,-14.9L148.7,-15.7L147.3,-15.9L141.3,-14.8L141.0,-14.5L141.5,-13.9L140.2,-13.1L141.5,-12.5L141.3,-12.1L136.9,-12.0L133.0,-12.9L131.3,-11.4L130.5,-11.9L129.7,-10.2ZM201.6,-32.9L206.5,-32.4L205.9,-31.8L203.0,-31.9L200.2,-32.2ZM208.9,-32.3L210.9,-32.0L208.8,-31.8L207.3,-32.1ZM111.2,-15.0L108.8,-15.1L110.0,-15.7ZM135.2,-31.0L137.0,-31.7L136.8,-32.0L141.1,-33.0L147.1,-33.2L139.0,-31.4L136.7,-29.8L137.8,-28.4L133.7,-29.1L134.3,-30.2L135.9,-30.9ZM204.8,-14.5L206.2,-10.6L205.0,-10.9L204.5,-9.7L205.3,-8.3L204.7,-8.8L204.2,-8.2L203.9,-14.2L204.6,-14.6L204.3,-14.9ZM119.5,-8.2L121.9,-7.8L119.9,-6.9L118.8,-7.6ZM32.9,7.3L33.5,7.7L33.2,8.2ZM45.8,72.0L47.9,71.4L48.5,71.8L47.2,72.3ZM117.7,-27.5L115.8,-27.1L116.1,-27.7L115.1,-28.0L112.7,-26.8L110.0,-27.4L109.0,-26.6L107.5,-26.7L104.0,-23.6L104.1,-23.0L103.3,-23.0L102.8,-21.2L103.3,-20.7L103.1,-19.8L102.1,-18.7L101.5,-19.2L99.0,-18.1L97.9,-18.5L97.4,-21.3L108.4,-27.7L115.4,-28.9L117.9,-28.3L116.9,-28.0ZM57.1,-38.2L63.4,-39.0L72.4,-39.0L77.2,-38.3L69.0,-37.7L75.6,-37.8L76.3,-37.5L75.4,-37.0L81.2,-37.6L84.0,-37.1L77.9,-36.2L79.7,-36.2L78.1,-35.1L78.2,-34.1L79.1,-33.6L76.6,-33.3L78.0,-32.9L78.2,-32.2L77.4,-32.1L78.4,-31.4L76.7,-31.3L77.3,-30.7L75.1,-30.6L76.1,-29.7L74.2,-29.8L76.2,-29.1L76.5,-28.4L75.1,-28.3L73.6,-29.1L73.8,-28.5L72.9,-28.1L76.1,-28.0L71.9,-26.6L68.7,-26.3L66.8,-25.2L62.5,-24.2L61.4,-22.5L60.1,-21.9L60.4,-21.2L59.7,-19.8L55.9,-20.4L51.7,-24.7L52.0,-25.3L51.4,-25.6L53.9,-27.8L50.9,-27.6L51.1,-28.6L53.4,-28.3L50.0,-29.2L50.9,-30.0L48.8,-31.7L45.8,-32.9L40.1,-32.9L37.9,-33.6L41.5,-33.9L36.4,-34.5L42.3,-35.6L40.5,-36.2L45.0,-37.2L44.7,-37.5L54.2,-38.1L58.8,-37.4ZM147.2,69.4L148.4,69.8L148.2,70.3L147.0,70.3ZM190.8,36.8L192.7,36.4L190.9,37.2ZM106.2,53.0L106.6,52.5L107.9,53.3L109.0,52.9L109.0,49.8L109.8,51.5L110.3,51.4L111.6,50.2L113.5,50.4L116.4,47.6L117.8,47.8L118.4,49.5L118.3,50.7L117.4,51.2L117.8,51.9L119.1,51.4L118.6,53.1L115.5,56.4L113.6,57.4L108.2,57.8L107.7,55.5ZM116.1,53.3L115.4,54.6L114.5,54.0ZM2.2,2.8L4.1,2.7L7.0,3.8L10.5,3.5L12.5,5.5L14.8,5.4L16.3,7.9L17.8,8.3L17.4,11.6L18.8,14.1L19.9,14.6L22.8,13.7L23.2,12.3L25.7,11.9L25.1,14.5L22.6,14.9L22.2,15.4L23.0,16.3L22.0,16.3L21.6,17.6L19.7,16.2L18.7,16.6L11.7,13.7L10.9,10.8L8.4,8.5L4.8,3.6L4.1,3.4L4.1,4.8L8.3,10.4L7.8,10.8L6.1,9.2L6.0,8.2L3.9,6.8L4.5,6.1ZM48.6,54.3L52.0,56.4L51.6,57.7L50.7,58.2L48.0,57.3ZM51.9,57.2L51.6,55.8L48.6,54.3L51.7,51.6L51.7,50.9L50.9,50.6L51.2,49.2L50.3,49.2L50.0,47.9L48.3,47.6L48.7,44.4L48.1,42.9L46.6,42.9L46.3,40.8L42.5,39.0L42.6,37.5L40.3,38.6L38.5,38.5L38.6,37.3L37.2,37.8L36.4,37.3L35.8,35.7L36.7,33.8L39.0,33.0L39.4,30.4L38.9,29.1L39.6,28.7L39.1,28.1L40.9,27.8L41.8,28.9L44.1,27.7L43.4,27.5L43.0,26.2L44.3,26.4L46.2,25.3L46.8,25.4L46.8,27.3L47.5,28.4L49.9,28.0L49.9,27.5L52.2,27.8L53.5,26.1L54.6,28.1L54.0,29.3L55.6,29.7L55.6,30.5L56.2,30.0L58.5,30.8L58.8,31.7L62.3,31.9L66.0,34.0L66.1,36.9L63.4,40.2L62.9,44.2L61.6,47.5L60.8,48.4L58.7,48.7L56.4,49.9L55.4,53.0ZM39.3,38.5L42.6,37.5L42.5,39.0L46.3,40.8L46.6,42.9L48.1,42.9L48.7,44.4L48.4,45.9L47.4,45.4L45.3,45.6L44.6,47.8L43.6,47.6L43.3,48.2L41.9,47.4L40.6,48.3L40.2,45.4L39.3,43.9L40.0,39.8ZM39.0,33.0L36.7,33.8L35.8,35.7L36.4,37.3L37.2,37.8L38.6,37.3L38.5,38.5L39.3,38.5L40.0,39.8L39.8,43.1L39.1,44.4L34.9,42.0L33.9,40.9L31.3,35.4L30.2,34.6L30.3,32.8L30.9,32.3L30.8,33.1L31.8,33.6L32.8,32.0L34.6,30.8L35.0,29.6L36.6,31.4L38.9,31.8L38.4,32.6ZM41.4,28.5L40.9,27.8L39.1,28.1L39.6,28.7L38.9,29.1L39.4,30.4L39.0,33.0L38.4,32.6L38.9,31.8L36.6,31.4L35.0,29.6L32.1,28.4L33.4,26.4L32.9,23.2L35.1,20.4L37.9,19.4L36.4,22.0L37.4,23.8L41.0,24.5L40.7,27.2ZM33.2,22.4L32.8,23.6L31.8,22.1L30.9,22.7L30.8,23.6L29.5,22.8L28.8,22.8L29.2,21.7L30.0,22.3L31.9,21.7ZM29.2,21.7L28.8,22.8L27.3,21.5L26.6,21.2L26.8,20.3L28.3,20.6ZM28.3,20.6L26.7,20.4L25.2,18.9L26.9,18.0L28.7,17.2ZM28.7,17.2L27.3,17.4L25.7,18.8L24.5,18.2L24.0,17.3L25.0,16.5L27.3,16.4ZM23.9,17.7L25.1,18.2L25.0,18.7L23.3,18.3ZM21.6,17.6L22.0,16.3L23.0,16.3L22.2,15.4L22.6,14.9L24.0,14.9L24.2,16.5L24.8,16.6L23.3,18.3ZM24.0,14.9L24.7,14.4L24.7,15.1L24.0,16.5ZM46.2,25.3L44.3,26.4L43.0,26.2L43.4,27.5L44.1,27.7L41.8,28.9L40.7,27.2L41.0,24.5L37.4,23.8L36.4,22.0L37.9,19.9L37.3,21.4L38.0,22.0L37.9,20.5L39.0,19.5L40.4,20.9L42.9,21.3L45.3,20.7L44.6,21.0L44.9,21.4L46.9,22.7L45.6,24.6ZM49.4,28.0L47.9,28.5L47.0,28.1L47.1,26.3L45.9,24.4L46.3,23.1L47.4,23.0L49.0,24.6L48.3,26.2ZM51.0,27.6L49.4,28.0L48.4,25.8L49.0,24.6L51.4,24.8ZM53.2,26.1L52.2,27.8L51.3,27.8L51.2,27.3L51.4,24.8ZM98.3,-11.0L99.8,-10.7L98.2,-8.8L99.3,-6.3L95.9,-5.8L95.8,-5.3L94.0,-5.6L92.0,-6.1L92.6,-8.2L90.0,-9.8L89.9,-10.4L92.2,-10.4L92.0,-11.3L92.7,-10.9L95.4,-12.4ZM100.3,-5.4L100.8,-5.7L100.7,-4.4ZM34.8,29.6L34.6,30.8L32.8,32.0L31.8,33.6L30.8,33.1L31.3,31.7L30.9,31.7L30.4,30.4L31.1,28.9L32.1,28.4ZM41.8,14.3L42.4,14.6L41.6,14.8L41.1,14.5ZM33.1,14.4L34.1,14.9L33.3,15.0L32.5,14.6ZM29.4,10.5L32.4,11.1L35.7,12.9L32.9,13.2L33.1,12.6L29.8,11.0L27.3,11.6ZM117.8,47.8L115.3,47.1L113.2,44.1L114.5,44.2L115.7,43.0L117.1,42.2L119.1,43.2L118.9,46.2ZM116.4,47.6L113.0,50.6L111.6,50.2L109.8,51.5L109.2,50.0L109.0,47.4L109.7,47.4L109.8,44.5L113.2,44.1L115.3,47.1ZM109.0,49.8L109.0,52.9L107.9,53.3L106.6,52.5L106.2,53.0L105.3,51.7L104.6,47.7L102.6,43.7L113.0,43.9L109.8,44.5L109.7,47.4L109.0,47.4ZM80.5,18.4L79.8,17.4L80.9,16.0L82.1,15.9L84.0,17.5L84.5,19.1L83.9,19.4L80.5,19.4L80.4,18.7L82.7,18.4ZM84.5,19.3L84.0,17.5L84.4,16.9L89.2,16.8L88.5,9.1L89.6,9.0L95.9,13.4L95.9,13.9L96.8,13.8L96.3,16.8L91.8,17.8L90.1,18.7L88.8,21.2L87.2,21.2L86.4,19.4L85.6,19.8ZM80.2,12.3L83.4,12.0L83.5,10.4L84.2,10.4L84.2,8.3L86.7,8.3L86.7,7.1L89.6,9.0L88.5,9.1L89.2,16.8L84.6,16.9L84.0,17.5L82.1,15.9L80.7,16.3L80.8,13.0ZM95.6,24.4L94.9,24.5L94.8,22.0L94.1,20.9L95.2,19.7L95.7,19.5L96.4,20.7ZM105.0,10.8L105.9,12.8L105.4,15.9L104.0,17.7L104.8,19.0L104.4,19.3L103.7,18.4L103.1,18.8L98.8,18.8L96.9,18.2L96.3,20.0L95.2,19.7L93.8,17.3L96.3,16.8L96.8,13.8L102.8,10.3L104.5,11.1ZM95.6,24.4L96.9,18.2L100.5,19.0L103.7,18.4L104.4,19.3L104.7,20.0L102.6,23.8L100.7,24.2L100.1,25.6L98.1,26.0L96.8,24.4ZM104.8,19.0L105.5,21.3L104.4,21.7L105.5,23.2L104.8,25.6L105.9,28.1L103.1,27.7L101.0,27.6L100.1,25.6L100.7,24.2L102.6,23.8ZM94.2,20.5L94.9,24.5L94.1,24.4L93.4,20.7ZM93.5,20.5L94.3,24.7L91.9,25.7L91.3,25.4L91.0,24.4L91.5,22.8L91.2,20.5ZM87.2,21.2L88.6,20.9L91.3,21.6L91.3,25.4L90.4,25.3L87.5,25.9L87.6,24.8L86.8,24.2ZM82.8,19.2L85.6,19.8L86.4,19.4L87.2,21.2L86.9,23.2L86.3,23.5L85.9,22.5L85.3,22.7L84.8,21.3L83.2,22.2L81.7,20.5ZM80.5,19.4L82.8,19.2L82.5,19.9L81.7,20.5ZM86.9,23.2L87.5,25.9L85.1,24.5L84.6,24.0L85.5,22.6L86.3,23.5ZM83.2,22.2L84.8,21.3L85.3,22.4L84.6,24.0ZM89.3,21.0L90.1,18.7L92.6,17.2L93.8,17.3L94.3,19.0L95.2,19.2L94.4,20.4L91.2,20.5L91.3,21.6ZM114.8,25.2L112.5,25.3L110.9,26.2L108.6,25.4L107.9,26.6L106.8,26.5L106.0,27.7L104.7,25.0L105.4,23.4L107.5,23.0L111.3,20.4L111.8,22.2ZM107.9,26.6L107.1,30.1L105.8,32.7L104.8,33.6L103.3,33.2L102.8,33.7L102.1,32.8L103.3,31.1L104.6,31.2L104.6,28.5L103.8,28.4L103.7,27.7L105.9,28.1L106.8,26.5ZM102.3,27.7L103.6,27.6L103.8,28.4L104.6,28.5L104.6,31.2L103.3,31.1L102.1,32.8L100.3,30.4L100.9,28.7L102.3,28.7ZM101.0,27.6L102.3,27.7L102.3,28.7L101.1,28.6ZM117.4,36.4L119.4,37.5L118.9,40.8L119.4,41.0L117.0,41.7L117.1,42.2L114.5,44.2L111.6,43.9L110.5,42.7L110.6,40.1L112.2,40.1L112.1,38.5L114.6,39.0L116.6,40.4L116.6,39.5L115.6,39.2L115.6,37.0L116.1,36.4ZM119.0,37.1L120.2,37.9L120.4,40.7L121.3,41.5L120.8,43.3L120.3,42.8L120.3,41.5L118.9,40.8L119.6,38.2ZM120.4,39.0L122.7,39.0L124.9,38.0L125.2,41.6L124.2,43.2L120.6,45.7L121.2,49.0L118.9,50.6L119.1,51.0L118.5,51.4L117.8,47.8L118.9,46.2L119.1,43.2L117.1,42.5L117.0,41.7L119.4,41.0L120.3,41.5L120.8,43.3L121.3,41.5L120.4,40.7ZM118.5,51.4L117.8,51.9L117.6,50.9L118.3,50.7ZM103.6,33.4L103.0,34.3L102.8,33.7ZM103.1,34.5L106.2,34.3L107.1,36.1L108.3,36.1L109.1,35.2L110.4,35.5L110.7,38.6L112.1,38.5L112.1,39.8L110.6,40.1L110.5,42.7L111.6,43.9L102.6,43.7L104.2,38.8ZM117.2,31.5L117.4,32.3L116.7,33.2L116.1,31.8ZM121.3,2.7L120.7,3.4L120.7,5.3L120.2,3.9L120.8,2.4L121.4,2.2ZM121.4,2.2L120.8,2.4L121.5,1.1L122.0,1.5ZM132.1,39.7L132.8,42.0L132.6,42.6L132.2,42.4L130.2,50.0L128.9,50.5L127.8,50.0L127.2,48.2L128.0,46.0L128.1,42.8L129.6,42.5L131.8,39.4ZM121.1,3.7L120.7,3.4L121.2,3.0ZM100.9,4.7L99.3,1.6L100.0,-0.8L102.1,-0.9L101.7,-0.3L101.9,1.0L101.4,1.4L102.4,3.0ZM86.7,7.1L86.7,5.9L92.5,3.1L91.8,0.7L92.5,0.2L99.2,-0.9L100.0,-0.8L100.0,0.4L99.3,1.6L101.1,5.4L100.7,8.1L101.5,9.5L102.8,10.3L97.9,13.4L95.9,13.9L95.9,13.4ZM121.2,3.0L123.7,2.1L124.0,3.1L122.3,3.7L123.1,4.5L122.7,4.9L120.7,5.4ZM133.7,9.6L135.6,9.7L137.2,8.2L137.4,9.1L136.3,11.1L134.0,10.7ZM133.1,9.2L133.2,8.2L133.7,8.4L133.5,9.3ZM130.9,4.9L131.2,6.1L130.6,6.1L129.8,5.7ZM124.0,3.1L123.7,2.1L125.4,1.3L125.6,-0.3L126.5,-1.0L128.4,-1.0L129.4,0.3L129.0,1.0L128.9,1.7L130.4,2.9L131.3,5.0L130.3,4.9L129.8,5.7L128.3,5.6ZM136.5,10.9L137.0,9.1L139.2,10.2L140.1,11.2L138.7,12.7L138.4,14.0L134.9,15.9L134.0,13.9L136.3,13.1ZM223.4,42.4L223.3,41.5L223.7,41.8ZM173.4,19.5L173.7,17.9L176.1,18.1L176.4,17.6L177.3,18.4L177.2,19.4L175.9,20.0L176.2,20.5L174.1,20.8ZM175.4,17.8L173.7,17.9L173.4,19.5L171.5,18.5L170.8,21.9L173.0,24.4L172.8,24.8L171.4,24.2L170.2,22.6L170.1,23.1L170.3,21.4L171.1,19.8L170.0,17.1L170.5,16.3L169.3,14.4L170.0,13.4L171.8,13.0L172.4,13.6L172.2,15.2L174.5,14.6L175.7,16.8ZM177.1,17.9L175.4,17.8L175.7,16.8L174.5,14.6L172.2,15.2L172.4,13.6L171.5,12.8L172.3,11.9L172.8,12.2L173.1,11.1L173.9,12.5L174.8,12.5L175.1,13.2L174.4,13.7L177.1,16.5ZM171.5,12.8L170.0,13.4L169.3,14.4L170.5,16.3L170.0,17.1L171.1,19.8L170.3,21.4L170.2,18.8L169.2,15.6L167.8,16.6L166.9,16.4L167.0,14.6L166.0,13.2L165.4,11.9L166.2,9.8L166.8,10.0L167.6,7.7L169.1,7.3L169.8,6.3L170.3,8.3L169.5,9.9L170.3,9.8L171.0,10.7L170.8,11.4L172.3,11.6ZM174.8,20.9L176.2,20.5L175.9,20.0L177.2,19.4L177.3,18.4L177.1,16.5L174.4,13.7L175.1,13.2L174.8,12.5L173.9,12.5L173.1,11.1L174.9,10.8L175.5,10.4L177.7,11.8L175.8,13.9L178.3,17.0L178.7,18.5L178.5,20.0L175.4,22.5ZM195.2,-5.2L194.5,-4.0L192.8,-3.1L193.4,-1.9L191.8,-1.4L190.6,-1.7L191.2,-2.8L190.3,-3.2L192.3,-4.8L193.4,-4.5L193.2,-4.9L194.7,-5.7ZM191.8,-1.4L193.5,-2.1L194.3,0.3L192.0,1.3L191.7,-0.6L192.3,-0.7ZM161.8,-10.9L165.3,-12.1L169.2,-11.3L170.5,-13.2L174.2,-11.6L176.7,-11.7L178.0,-10.9L179.7,-10.8L182.6,-11.7L184.4,-11.4L183.6,-9.6L185.5,-9.9L186.8,-9.1L181.9,-7.2L180.6,-7.5L180.6,-6.3L179.5,-5.6L175.2,-4.6L172.0,-5.5L168.5,-5.5L167.7,-6.8L164.3,-7.6L164.3,-8.9ZM169.3,6.3L169.1,7.3L167.6,7.7L165.7,11.4L165.3,10.1L164.9,10.7L164.5,10.2L165.4,9.0L163.5,8.8L162.5,7.8L162.2,8.4L162.8,8.8L162.1,9.4L162.6,9.6L162.7,11.7L161.2,11.9L160.9,13.0L157.5,15.9L156.1,16.5L155.7,21.0L153.9,23.0L150.8,16.4L150.1,12.0L148.4,12.4L146.6,10.1L147.1,9.5L148.8,9.5L147.6,7.4L148.5,6.6L149.4,6.6L152.1,3.1L151.2,2.1L151.3,1.0L153.4,1.1L154.1,0.4L155.0,1.4L154.8,3.7L156.7,4.8L155.9,5.9L159.9,7.6L162.1,7.9L162.6,6.5L163.4,7.6L165.2,7.5L164.9,6.7L167.1,5.5L168.4,5.4L168.5,6.2ZM165.7,11.4L165.4,12.6L164.7,10.9L164.0,10.8L163.8,11.6L162.8,11.4L162.6,9.6L162.1,9.4L162.8,8.8L162.2,8.4L162.5,7.8L163.5,8.8L165.4,9.0L164.5,10.2L164.9,10.7L165.3,10.1ZM164.9,6.7L165.2,7.5L162.7,7.3L163.6,6.3ZM162.1,6.7L162.1,7.9L161.4,7.9L155.9,5.9L157.0,4.6L160.3,6.4ZM154.1,0.4L153.4,1.1L150.9,1.4L152.1,3.1L149.4,6.6L148.5,6.6L147.6,7.4L148.8,9.5L147.1,9.5L146.6,10.1L145.2,8.7L141.4,9.0L141.7,8.0L142.8,7.6L141.6,6.0L140.9,5.1L144.2,5.4L145.2,5.0L145.6,3.8L147.5,3.4L149.4,-0.4L152.0,-0.9L152.8,0.1ZM145.3,-1.1L147.4,-0.9L148.6,-2.0L149.4,-0.6L151.9,-1.2L149.0,-0.1L149.3,0.7L147.8,2.4L147.5,3.4L145.6,3.8L145.2,5.0L142.2,5.5L140.9,5.1L141.6,4.3L140.6,2.5L141.2,0.3L142.5,0.5L143.9,-0.9ZM146.3,-0.9L146.8,-1.8L146.0,-2.6L147.5,-3.9L148.5,-4.1L148.8,-3.5L147.6,-2.9L150.9,-2.8L151.1,-2.1L151.8,-2.0L151.9,-1.2L149.4,-0.6L148.6,-2.0L147.4,-0.9ZM148.8,-5.1L149.4,-5.6L150.7,-5.3L151.3,-6.0L155.1,-5.6L155.9,-5.0L152.3,-3.7L150.9,-2.8L147.6,-2.9L147.7,-3.4L150.4,-4.0L148.3,-4.5ZM134.4,-4.7L135.6,-5.2L136.7,-4.3L138.0,-4.4L139.2,-5.5L140.2,-5.1L140.3,-4.4L141.4,-4.3L142.1,-3.3L145.3,-1.6L143.3,-0.0L142.0,0.6L141.1,-0.4L137.6,-1.7L135.5,-1.0L135.5,-2.4L134.5,-3.3L134.7,-4.0L136.1,-4.1L135.3,-5.0L134.6,-4.2ZM131.3,5.0L130.4,2.9L128.9,1.7L129.4,0.3L127.9,-1.6L127.8,-2.8L129.4,-2.2L130.9,-2.9L131.8,-1.3L134.2,-0.6L137.6,-1.7L141.1,-0.4L140.6,2.5L141.6,4.3L140.9,5.1L142.8,7.6L141.7,8.0L141.4,9.0L138.2,8.4L137.9,7.4L135.2,7.5L133.6,6.7L132.5,4.8ZM121.3,2.7L122.0,1.5L121.5,0.5L122.4,-0.5L126.5,-1.0L125.6,-0.3L125.4,1.3L122.2,3.0ZM129.7,-2.3L127.6,-3.9L128.5,-4.3ZM102.1,-18.7L103.3,-20.7L102.8,-22.2L103.3,-23.0L104.1,-23.0L106.5,-26.3L109.6,-27.1L111.8,-26.2L112.1,-24.6L110.8,-24.4L110.1,-23.3L107.4,-21.9L106.8,-20.8L108.1,-19.7L106.6,-18.6L105.9,-16.5L103.6,-15.9ZM115.4,-16.5L117.5,-16.0L117.4,-15.4L118.9,-14.2L117.9,-14.0L118.2,-13.2L117.3,-12.6L116.3,-12.6L111.8,-12.8L111.6,-13.5L112.0,-13.7L111.8,-14.7L113.4,-15.0L114.1,-16.1ZM118.2,-13.2L119.8,-13.4L121.0,-12.0L124.7,-11.2L124.4,-9.8L120.7,-8.4L120.8,-8.0L118.2,-8.8L115.8,-7.6L116.1,-8.6L116.9,-8.5L116.2,-9.7L114.9,-10.2L112.9,-9.6L110.7,-10.2L112.1,-11.8L111.8,-12.8L117.3,-12.6ZM111.8,-14.7L112.0,-13.7L111.6,-13.5L112.2,-12.1L111.2,-10.7L108.2,-11.0L107.2,-11.8L105.2,-12.4L104.5,-14.6L107.2,-15.5ZM106.7,-9.9L106.0,-8.8L104.9,-8.6L101.2,-9.0L101.2,-9.5L103.6,-9.4L104.1,-10.6L105.4,-10.7ZM110.7,-10.2L111.2,-9.7L109.9,-8.5L107.9,-8.0L106.1,-8.9L106.7,-9.9ZM114.2,-10.0L116.2,-9.7L116.9,-8.5L116.2,-8.5L115.5,-7.8L115.4,-8.9ZM115.5,-7.8L116.5,-7.6L115.7,-6.3L111.4,-6.4L110.2,-7.5L109.2,-8.3L111.5,-9.9L114.5,-9.9ZM114.1,-16.1L112.5,-14.7L111.2,-15.5L110.0,-15.7L109.9,-16.4L110.8,-16.7ZM114.7,-17.6L115.4,-16.5L114.1,-16.1L110.8,-16.7L109.9,-16.4L109.9,-17.0L111.0,-17.8L111.6,-17.2L113.1,-18.0ZM115.3,-19.2L114.7,-17.6L112.4,-17.9L111.7,-19.0ZM104.5,-14.6L105.2,-12.4L103.0,-11.7L104.1,-10.6L103.6,-9.4L100.1,-9.7L99.3,-9.5L99.8,-10.7L98.3,-11.0L98.1,-13.0L98.8,-13.3L99.0,-14.5L99.8,-14.4L100.3,-14.8L100.1,-15.5L101.2,-15.6L102.0,-14.8L103.2,-15.1ZM111.1,-6.8L115.7,-6.3L115.3,-4.9L113.8,-4.8L113.8,-4.4L111.4,-4.4ZM114.0,0.6L112.7,0.9L111.9,0.2ZM111.4,-4.4L114.2,-4.6L113.8,-4.0L112.0,-3.8L112.5,-3.4L111.1,-3.5L112.2,-1.8L111.0,-0.3L109.2,-2.7L109.9,-4.0ZM128.4,-1.0L122.1,-0.7L121.6,0.1L121.6,-0.5L120.5,-0.7L118.8,-0.1L115.0,-0.5L113.9,-2.8L116.3,-4.3L119.6,-4.9L123.4,-4.1L126.7,-4.6L128.4,-3.0L127.8,-2.8ZM113.8,-4.8L115.3,-4.9L116.1,-4.3L115.0,-4.1L114.0,-3.4ZM109.9,-4.0L109.0,-3.0L108.6,-4.8L109.1,-5.4ZM106.4,-8.6L108.6,-7.6L105.7,-7.2L107.9,-5.3L106.0,-6.2L105.1,-7.4L104.1,-7.5ZM101.0,-9.5L101.6,-8.6L99.5,-8.1L98.2,-8.4L98.7,-9.5ZM98.3,-12.1L97.9,-11.1L95.6,-12.1L97.4,-12.7ZM98.9,-14.3L98.3,-12.1L97.4,-12.7L96.1,-12.6L97.1,-14.0ZM86.4,-4.8L87.0,-5.1L88.5,-4.4L87.6,-3.0L87.9,-1.5L87.4,-0.7L86.5,-0.7L86.1,-2.2ZM87.7,-0.9L87.6,-3.0L88.5,-4.4L87.0,-5.1L86.4,-4.8L86.2,-5.8L87.3,-6.4L90.7,-6.1L95.8,-5.3L95.8,-4.8L94.1,-4.1L93.3,-2.7L93.6,-2.2L91.8,-0.6L90.1,-0.6L89.3,0.0ZM88.7,-14.7L88.2,-13.3L86.8,-12.8L85.7,-13.0L86.3,-13.8L85.9,-14.7L87.6,-15.7L87.6,-14.8ZM222.6,46.8L223.4,47.9L221.9,46.9L221.3,46.0ZM219.8,38.1L219.4,38.4L219.1,37.9ZM231.3,62.4L230.6,63.4L229.5,63.4L230.0,62.7L228.9,61.9L229.6,60.2L228.0,57.8L229.3,58.4L230.6,60.3L232.5,60.4ZM225.7,65.2L228.1,62.7L229.2,63.8L228.0,65.1L228.3,65.5L227.0,65.8L225.4,67.8L223.2,67.1ZM208.5,63.0L209.0,63.0L208.7,65.0L207.3,65.2L206.2,62.9ZM191.7,55.9L189.8,57.3L186.9,57.4L185.4,58.3L183.1,57.6L183.6,55.4L181.8,50.9L182.1,51.3L181.9,50.5L182.5,51.1L181.8,49.5L182.4,47.4L182.5,48.0L184.4,46.5L187.6,45.7L189.3,43.0L190.0,43.5L189.7,43.1L191.4,41.2L192.5,40.9L194.5,41.8L195.2,39.8L196.8,39.5L196.2,38.8L196.6,38.6L198.9,39.6L199.8,39.2L200.2,39.6L199.0,41.6L200.3,42.5L202.0,43.8L203.2,43.8L204.5,38.3L205.6,41.4L206.1,41.1L206.7,41.8L207.5,45.1L209.4,46.2L210.1,47.8L210.9,47.9L212.6,50.2L213.1,52.6L212.7,54.9L210.3,60.2L207.5,61.5L206.5,60.6L205.4,61.3L203.0,60.7L202.2,59.2L201.1,58.7L201.1,57.7L200.1,58.4L200.8,56.5L199.4,58.1L198.1,56.3L195.8,55.3ZM157.2,23.4L156.7,24.4L156.1,24.6L155.7,24.0L155.9,21.5ZM178.8,14.6L178.1,13.6L179.3,13.0L180.0,13.4ZM156.0,-5.2L156.5,-5.9L155.8,-7.3L157.7,-7.8L158.3,-9.3L159.8,-9.0L160.3,-10.2L161.8,-10.9L164.3,-8.9L164.3,-7.6L167.7,-6.8L168.5,-5.5L172.0,-5.5L175.2,-4.6L178.6,-5.3L180.6,-6.3L180.6,-7.5L181.9,-7.2L185.0,-8.8L186.7,-8.8L185.5,-9.9L183.4,-10.0L184.4,-11.4L185.3,-11.1L186.4,-11.6L187.5,-13.1L187.1,-13.7L189.7,-14.3L191.6,-13.8L192.9,-11.3L194.3,-11.0L195.5,-9.7L198.7,-10.2L197.2,-7.5L195.5,-7.4L195.2,-5.2L194.7,-5.7L193.2,-4.9L193.4,-4.5L192.3,-4.8L190.3,-3.2L187.8,-2.4L188.6,-3.6L188.2,-4.1L185.4,-2.6L185.0,-2.2L185.4,-1.7L186.7,-0.9L187.6,-1.5L188.8,-1.2L188.9,-0.8L186.3,0.9L188.4,3.5L187.9,4.4L188.6,5.1L188.3,6.4L185.9,9.4L183.8,10.8L179.8,12.0L179.5,12.8L179.1,12.9L179.1,12.0L176.9,11.6L176.6,10.8L175.5,10.4L172.7,11.2L172.8,12.2L172.4,12.1L172.3,11.6L170.8,11.4L171.0,10.7L170.3,9.8L169.5,9.9L170.4,7.0L169.8,6.3L168.5,6.2L168.4,5.4L165.5,6.6L163.6,6.3L162.7,7.1L162.6,6.5L160.3,6.4L154.8,3.7L155.0,1.4L152.8,0.1L150.9,-2.8ZM188.3,9.5L187.5,11.5L187.0,10.2L188.1,8.8ZM101.6,-8.9L104.2,-8.6L104.3,-7.9L103.1,-7.7L103.3,-6.6L107.8,-3.6L107.7,-3.1L106.6,-3.6L106.8,-2.4L105.7,-1.8L106.0,-2.4L105.5,-3.3L102.2,-5.2L101.4,-6.5L100.4,-6.9L99.3,-6.3L98.9,-6.8L98.8,-8.2ZM105.0,-1.8L105.6,-1.8L105.4,-0.9L104.6,-0.8L103.2,-1.3L103.3,-1.7ZM100.3,-4.0L101.1,-3.7L100.7,-2.7L100.0,-2.6L99.8,-4.1ZM101.2,-15.6L99.8,-16.0L99.9,-17.1L101.1,-17.6L101.7,-17.8L101.5,-17.1L102.0,-16.8ZM103.1,-16.5L102.9,-15.4L102.0,-16.2ZM88.7,-14.7L87.6,-14.8L87.7,-15.2L87.6,-15.7L88.2,-15.7L89.1,-15.2ZM91.1,-14.3L89.5,-16.2L89.1,-15.8L88.7,-17.0L89.6,-18.6L91.1,-18.6L90.3,-17.7L92.0,-17.8L91.1,-16.4L91.9,-16.3L92.6,-15.3L93.8,-13.9L94.8,-13.7L94.6,-12.5L89.0,-11.6L90.8,-12.6L89.4,-13.1L90.2,-13.4L89.9,-14.3ZM82.2,-25.0L82.0,-24.4L82.9,-23.9L78.9,-22.5L75.7,-22.9L76.5,-23.3L74.8,-23.7L76.2,-23.8L74.5,-24.3L75.1,-24.8L77.5,-24.4ZM129.6,-4.8L130.7,-4.2L131.3,-4.8L132.7,-3.5L132.1,-3.4L131.6,-1.9L130.9,-2.3L131.1,-2.7L129.7,-2.3L129.0,-3.2L128.5,-4.3L129.7,-4.2ZM124.6,-6.1L128.9,-5.3L129.8,-4.2L125.9,-4.5L125.8,-5.4ZM187.6,19.1L187.2,18.5L187.9,18.5L187.9,19.5ZM189.0,21.3L190.1,20.3L189.3,22.1ZM191.9,22.6L192.1,23.6L191.8,24.4L191.5,23.5L191.1,24.0L191.2,24.9L190.2,24.5L189.8,23.1L189.2,23.4L188.6,23.9L188.8,22.9L191.2,22.2L191.2,21.5ZM185.8,21.9L184.8,22.7L186.2,21.0L186.6,20.2L186.7,20.9ZM188.8,14.6L188.3,17.8L190.0,18.2L190.2,18.9L188.5,18.2L187.4,18.2L187.7,17.6L187.0,17.2L186.9,16.1L187.5,14.3ZM188.5,20.2L189.4,20.4L188.5,21.0ZM191.2,19.5L191.5,20.5L190.9,20.2L190.7,21.2L190.7,20.6L190.3,19.2ZM171.4,24.2L173.7,25.0L174.1,27.2L174.7,28.2L174.1,28.5L172.5,27.3ZM185.3,26.1L183.7,26.0L182.8,28.3L182.1,28.5L179.6,28.9L179.0,28.4L178.9,27.9L180.1,28.0L180.2,27.3L181.5,27.0L182.4,25.8L183.3,26.0L184.4,23.8L186.3,25.1ZM183.4,25.1L183.0,26.0L182.4,25.8ZM104.2,-8.6L106.2,-8.9L105.7,-8.1L104.2,-7.8ZM115.8,-27.1L115.6,-26.5L116.8,-26.0L116.1,-25.4L117.0,-24.4L116.5,-23.7L117.2,-23.1L116.9,-22.6L118.0,-22.0L117.7,-21.6L115.3,-20.1L111.3,-19.6L110.1,-20.3L110.3,-21.1L110.3,-22.3L113.3,-23.9L111.8,-24.9L111.8,-26.2L109.6,-27.1L112.7,-26.8L115.1,-28.0L116.1,-27.7ZM111.1,-10.7L110.5,-10.1L107.4,-9.6L106.7,-10.3L108.5,-11.1ZM105.2,-12.4L108.2,-11.1L106.8,-10.5L104.7,-10.3L103.2,-11.1L103.0,-11.7ZM121.9,17.7L122.2,15.6L123.4,14.8L124.1,16.5L126.7,18.9L127.0,19.1L126.5,19.2L123.9,17.4ZM204.0,-2.6L202.7,0.7L200.4,1.1L199.3,2.1L198.7,1.2L195.5,1.7L196.3,2.3L195.3,4.1L195.1,3.0L194.3,2.2L196.8,0.5L199.2,0.4L200.0,-1.1L200.5,-0.7L202.1,-1.8L202.8,-4.3L203.6,-4.4ZM206.1,-6.5L206.7,-6.9L206.9,-6.0L205.0,-4.9L203.8,-5.5L203.4,-4.6L202.5,-4.6L202.4,-5.4L203.6,-6.1L204.1,-7.8ZM196.6,2.1L197.8,1.3L198.5,1.8L197.1,2.7ZM48.2,46.1L48.3,47.6L50.0,47.9L50.3,49.2L51.2,49.2L50.8,51.3L50.1,52.0L47.8,51.8L48.5,50.2L44.6,47.8L45.3,45.6L47.4,45.4ZM134.0,13.9L134.9,15.9L134.1,16.7L128.5,19.1L127.2,18.7L126.7,17.0L127.3,15.1L130.1,15.6L131.7,14.3ZM120.7,5.4L122.7,4.9L123.1,4.5L122.3,3.7L124.0,3.1L128.3,5.6L131.2,6.1L134.0,10.7L136.5,10.9L136.8,11.5L136.3,13.1L131.7,14.3L130.1,15.6L127.3,15.1L126.8,16.1L124.0,12.1L123.5,10.1L120.5,6.5ZM119.0,0.7L120.4,0.3L119.9,0.7ZM119.0,0.7L119.7,0.8L119.2,1.2ZM91.8,0.7L92.5,3.1L86.7,5.9L86.6,7.3L84.6,7.5L82.0,11.9L80.2,12.0L82.2,8.0L86.0,5.0L85.8,4.0L86.7,2.3L88.1,1.5L88.9,0.2ZM122.2,11.5L113.0,11.5L113.1,3.6L119.8,4.1L120.2,3.9L120.7,5.3L120.1,6.7L118.7,5.1L121.2,10.6ZM113.0,11.5L113.0,13.1L112.0,13.5L105.8,10.3L104.5,11.1L101.5,9.5L100.7,8.1L100.9,4.7L102.0,3.2L102.4,2.3L104.3,2.7L108.3,4.7L109.7,2.7L112.9,3.4ZM130.7,23.0L128.5,25.4L123.2,26.6L121.6,25.9L119.2,23.1L120.5,20.6L121.9,17.7L123.9,17.4L126.5,19.2L126.0,20.5L126.8,20.6L127.5,22.0ZM126.5,19.2L127.2,19.4L126.8,20.6L126.0,20.5ZM131.6,20.2L131.6,21.8L130.7,23.0L127.5,22.0L126.6,20.9L127.1,20.1L127.8,21.0ZM119.9,30.3L116.5,30.6L117.5,27.6L117.8,26.4L120.0,26.0L120.8,28.0ZM117.2,30.5L117.4,31.4L116.6,31.9L116.1,31.8L116.3,30.8ZM107.9,-5.5L105.7,-7.2L107.4,-7.4L108.6,-7.3L108.6,-6.2ZM110.9,-5.2L111.4,-4.4L109.5,-4.2L109.7,-5.0ZM108.1,-8.1L109.2,-8.3L111.2,-7.0L111.4,-5.9L110.4,-5.3L108.5,-6.2ZM109.1,-5.4L108.6,-4.8L107.9,-5.5L108.5,-6.2ZM109.5,-4.8L109.1,-5.4L110.1,-5.7L110.3,-5.1ZM45.4,20.7L46.0,20.6L46.0,21.2L45.2,21.2ZM117.5,26.6L116.6,25.7L115.3,25.9L112.1,22.5L113.0,21.1L116.0,21.8L116.8,21.1L117.9,21.5L118.7,20.4L118.5,19.7L119.3,19.5L119.9,22.4L119.2,23.1L121.0,25.0L119.5,26.4Z", "hi": {"africa": "M119.9,30.3L122.8,32.1L124.0,33.4L123.7,34.4L124.2,35.1L124.0,36.5L124.9,38.0L121.9,39.1L120.4,39.0L119.9,37.5L117.4,36.4L116.6,34.9L116.3,33.2L117.4,32.3L117.2,30.5ZM124.0,33.4L122.8,32.1L119.9,30.3L119.9,29.4L120.8,28.0L120.0,26.0L121.0,25.0L121.6,25.9L123.2,26.6L124.3,26.7L125.2,26.0L126.1,26.3L125.4,27.2L125.4,30.2L125.9,30.9L124.8,31.6ZM119.0,37.1L120.2,37.9L120.4,40.7L121.3,41.5L121.3,42.6L120.8,43.3L120.3,42.8L120.3,41.5L118.9,40.8L119.6,38.2ZM117.2,31.5L117.4,32.3L116.7,33.2L116.3,33.2L116.1,31.8ZM134.0,13.9L134.9,15.9L134.1,16.7L128.5,19.1L127.4,19.2L127.2,18.7L126.7,17.0L127.3,15.1L130.1,15.6L131.7,14.3ZM130.7,23.0L128.5,25.4L127.5,25.5L126.1,26.3L125.2,26.0L124.3,26.7L123.2,26.6L121.6,25.9L120.5,24.1L119.2,23.1L119.8,22.6L120.5,20.6L121.9,17.7L123.9,17.4L125.3,17.9L126.5,19.2L126.0,20.5L126.8,20.6L127.5,22.0ZM119.9,30.3L116.5,30.6L116.8,29.0L117.8,27.7L117.5,27.6L117.8,26.4L120.0,26.0L120.8,28.0L119.9,29.4ZM117.2,30.5L117.4,31.4L116.6,31.9L116.1,31.8L116.3,30.8Z", "central": "M37.6,14.7L37.7,13.2L39.5,13.9L40.3,14.3L40.0,14.6L38.4,14.4L37.9,15.1ZM2.2,2.8L4.1,2.7L7.0,3.8L10.5,3.5L12.5,5.5L13.2,5.8L13.6,5.1L14.8,5.4L16.3,7.9L17.8,8.3L17.4,11.6L18.8,14.1L19.9,14.6L22.8,13.7L23.2,12.3L25.7,11.9L25.1,14.5L22.6,14.9L22.2,15.4L23.0,16.3L22.0,16.3L21.6,17.6L19.7,16.2L18.7,16.6L15.8,15.8L11.7,13.7L11.1,12.8L11.5,12.0L10.9,10.8L8.4,8.5L8.3,7.8L6.1,5.8L5.3,4.0L4.8,3.6L4.1,3.4L4.1,4.8L6.5,7.7L7.3,9.6L8.3,10.4L7.8,10.8L6.1,9.2L6.0,8.2L3.9,6.8L4.5,6.1L3.5,5.3ZM33.2,22.4L32.8,23.6L32.6,22.7L31.8,22.1L30.9,22.7L31.2,23.3L30.8,23.6L29.5,22.8L28.8,22.8L29.2,21.7L30.0,22.3L31.9,21.7ZM29.2,21.7L28.8,22.8L27.3,21.5L26.6,21.2L26.8,20.3L28.3,20.6ZM28.3,20.6L26.7,20.4L25.2,18.9L26.9,18.0L27.3,17.4L28.7,17.2ZM28.7,17.2L27.3,17.4L26.6,18.2L25.9,18.2L25.7,18.8L24.5,18.2L24.0,17.3L25.0,16.5L27.3,16.4ZM23.9,17.7L25.1,18.2L25.0,18.7L23.3,18.3ZM21.6,17.6L22.0,16.3L23.0,16.3L22.2,15.4L22.6,14.9L24.0,14.9L24.2,16.5L24.8,16.6L23.3,18.3ZM33.1,14.4L34.1,14.9L33.3,15.0L32.5,14.6ZM29.4,10.5L32.4,11.1L35.7,12.9L32.9,13.2L33.4,12.8L33.1,12.6L32.2,11.8L29.7,11.3L29.8,11.0L27.3,11.6Z", "south": "M51.9,57.2L52.0,56.4L51.6,55.8L49.1,54.2L48.6,54.3L51.7,51.6L51.7,50.9L50.9,50.6L51.2,49.2L50.3,49.2L50.0,47.9L48.3,47.6L48.2,46.1L48.7,44.4L48.1,43.7L48.1,42.9L46.6,42.9L46.3,40.8L43.4,39.7L42.5,39.0L42.6,37.5L40.3,38.6L38.5,38.5L38.6,37.3L37.2,37.8L36.4,37.3L35.8,35.7L36.5,35.0L36.7,33.8L39.0,33.0L39.4,30.4L38.9,29.1L39.6,28.7L39.1,28.6L39.1,28.1L40.9,27.8L41.8,28.9L44.1,27.7L43.4,27.5L43.0,26.2L44.3,26.4L46.0,25.8L46.2,25.3L46.8,25.4L47.1,26.3L46.8,27.3L47.5,28.4L49.9,28.0L49.9,27.5L52.2,27.8L53.5,26.1L54.1,28.0L54.6,28.1L54.0,29.3L55.6,29.7L55.6,30.5L56.2,30.0L58.5,30.8L58.8,31.7L62.3,31.9L64.5,33.5L66.0,34.0L66.4,35.5L66.1,36.9L63.4,40.2L62.9,44.2L61.6,47.5L60.8,48.4L58.7,48.7L56.4,49.9L55.7,50.7L55.4,53.0ZM39.3,38.5L40.3,38.6L42.6,37.5L42.5,39.0L43.4,39.7L46.3,40.8L46.6,42.9L48.1,42.9L48.1,43.7L48.7,44.4L48.4,45.9L47.4,45.4L45.3,45.6L44.6,47.8L43.6,47.6L43.3,48.2L42.9,47.6L41.9,47.4L40.6,48.3L39.9,46.2L40.2,45.4L39.3,43.9L39.8,43.1L39.5,41.8L40.0,39.8ZM39.0,33.0L36.7,33.8L36.5,35.0L35.8,35.7L36.4,37.3L37.2,37.8L38.6,37.3L38.5,38.5L39.3,38.5L40.0,39.8L39.5,41.8L39.8,43.1L39.1,44.4L38.7,44.6L34.9,42.0L33.9,40.9L31.3,35.4L30.2,34.6L30.3,32.8L30.9,32.3L30.8,33.1L31.8,33.6L32.8,32.0L34.6,30.8L35.0,29.6L36.6,31.4L38.9,31.8L38.4,32.6ZM41.4,28.5L40.9,27.8L39.1,28.1L39.1,28.6L39.6,28.7L38.9,29.1L39.4,30.4L39.0,33.0L38.4,32.6L38.9,31.8L36.6,31.4L35.0,29.6L33.2,29.2L32.1,28.4L33.4,26.4L32.9,23.2L33.3,23.0L33.2,22.4L34.5,21.8L35.1,20.4L36.3,20.3L37.9,19.4L36.4,22.0L36.8,22.1L37.4,23.8L38.9,23.8L39.4,24.5L41.0,24.5L40.6,25.8L41.1,26.8L40.7,27.2ZM34.8,29.6L34.6,30.8L32.8,32.0L31.8,33.6L30.8,33.1L31.3,31.7L31.2,31.3L30.9,31.7L30.4,31.4L30.4,30.4L31.1,28.9L32.1,28.4Z", "asia": "M203.3,31.7L206.1,32.7L207.2,34.0L208.5,34.5L208.7,34.9L208.0,35.0L208.1,35.6L211.0,38.0L210.4,38.3L208.7,37.8L207.3,36.1L206.2,35.8L205.1,36.3L205.2,36.9L204.6,37.2L203.3,37.0ZM212.4,32.5L212.5,33.4L211.9,32.4L211.1,31.6ZM211.3,34.3L210.1,34.7L209.0,34.2L210.4,33.6L210.5,34.1L211.0,34.0L211.6,33.4L211.5,32.9L212.0,32.9L212.1,33.5ZM214.0,33.9L215.0,34.9L214.7,35.2ZM203.3,31.7L203.3,37.0L202.7,36.3L200.7,36.4L201.5,35.5L200.9,33.9L197.6,32.4L197.1,32.9L196.3,31.8L197.6,31.3L196.5,31.3L195.2,30.3L196.6,29.8L197.9,30.2L198.2,31.8L199.0,32.3L200.5,30.9ZM190.8,36.8L190.4,37.8L189.7,38.0L190.1,37.1ZM185.3,26.1L184.9,26.9L186.2,28.8L185.3,28.9L185.0,30.2L184.3,30.7L184.0,32.8L179.3,31.9L178.4,29.2L178.9,27.9L179.6,28.9L181.4,28.3L182.1,28.5L182.8,28.3L183.7,26.0ZM194.3,31.8L195.1,32.1L195.4,32.7L194.1,32.3L193.1,32.3L193.3,31.9ZM192.3,32.6L191.6,32.1L192.4,32.1ZM193.1,27.7L193.7,28.6L193.2,29.7L192.7,28.7ZM189.2,28.8L190.9,28.2L190.4,29.2L187.1,29.3L187.0,29.9L187.7,30.7L189.6,30.0L188.1,31.1L189.4,33.4L189.4,33.9L188.7,33.9L189.1,33.2L188.3,33.5L187.7,32.5L187.7,31.7L187.2,31.9L187.3,34.1L186.5,33.9L186.6,32.4L186.0,31.8L187.0,29.1L187.7,28.4ZM187.2,37.9L186.2,37.4L187.3,37.4L187.6,37.7ZM188.0,36.5L189.2,36.2L189.1,36.6L187.9,36.8L186.9,36.4ZM185.6,36.4L186.3,36.7L184.8,36.9L184.4,36.9L184.7,36.5ZM178.0,34.8L181.2,35.2L181.5,35.7L183.6,36.4L182.7,36.7L180.4,36.3L175.6,35.1L176.1,34.4ZM174.8,30.4L175.2,31.4L176.1,32.0L175.9,34.3L175.0,34.3L173.4,33.0L169.6,27.5L167.7,25.0L169.4,25.2L171.9,27.8L173.3,28.4L174.4,29.4L174.1,30.1ZM190.8,36.8L192.7,36.4L190.9,37.2ZM175.4,17.8L173.7,17.9L173.2,18.5L173.4,19.5L172.0,19.2L172.1,18.5L171.5,18.5L170.8,21.9L171.3,22.0L171.7,23.4L173.0,24.4L172.8,24.8L171.4,24.2L170.2,22.6L170.1,23.1L170.3,21.4L171.1,19.8L170.0,17.1L170.5,16.3L169.3,14.4L170.0,13.4L171.5,12.8L171.8,13.0L171.9,13.5L172.4,13.6L172.2,15.2L174.5,14.6L175.7,16.8ZM177.1,17.9L175.4,17.8L175.7,16.8L174.5,14.6L172.2,15.2L172.4,13.6L171.9,13.5L171.5,12.8L172.3,11.9L172.8,12.2L172.7,11.2L173.1,11.1L173.9,12.5L174.8,12.5L175.1,13.2L174.4,13.7L175.3,14.2L177.1,16.5ZM171.5,12.8L170.0,13.4L169.3,14.4L170.5,16.3L170.0,17.1L171.1,19.8L170.3,21.4L170.2,18.8L169.2,15.6L167.8,16.6L166.9,16.4L167.0,14.6L166.4,13.3L166.0,13.2L165.4,11.9L166.1,11.3L166.2,9.8L166.8,10.0L167.6,7.7L169.1,7.3L169.3,6.3L169.8,6.3L170.4,7.0L170.3,8.3L169.6,9.0L169.5,9.9L170.3,9.8L170.5,10.5L171.0,10.7L170.8,11.4L171.7,11.8L172.3,11.6ZM174.8,20.9L176.2,20.5L175.9,20.0L177.2,19.4L177.3,18.4L177.1,16.5L175.3,14.2L174.4,13.7L175.1,13.2L174.8,12.5L173.9,12.5L173.1,11.1L174.9,10.8L175.5,10.4L177.7,11.8L175.8,13.9L178.3,17.0L178.7,18.5L178.5,20.0L175.4,22.5L175.3,21.4ZM169.3,6.3L169.1,7.3L167.6,7.7L166.8,10.0L166.2,9.8L166.1,11.3L165.7,11.4L165.3,10.1L164.9,10.7L164.5,10.2L165.4,9.0L163.5,8.8L163.5,8.2L162.5,7.8L162.2,8.4L162.8,8.8L162.1,9.4L162.6,9.6L162.7,11.7L161.2,11.9L160.9,13.0L159.7,13.5L157.5,15.9L156.1,16.5L155.7,21.0L153.9,23.0L153.1,22.2L150.8,16.4L150.1,12.0L148.4,12.4L146.6,10.1L147.1,9.5L148.8,9.5L147.6,7.4L148.5,6.6L149.4,6.6L152.1,3.1L151.2,2.1L150.9,1.4L151.3,1.0L153.4,1.1L154.1,0.4L155.0,1.4L154.8,3.7L156.7,4.8L155.9,5.9L159.9,7.6L162.1,7.9L162.1,6.7L162.6,6.5L162.7,7.3L163.4,7.6L165.2,7.5L164.9,6.7L167.1,5.5L168.4,5.4L168.7,5.9L168.5,6.2ZM169.9,6.4L170.7,5.6L170.8,6.3L171.1,5.9L172.8,8.2L173.7,7.9L173.6,7.1L174.4,6.1L174.8,6.0L174.9,6.6L175.5,6.6L175.4,7.1L174.2,7.3L175.0,7.9L175.0,9.5L176.2,9.9L174.7,10.9L172.7,11.1L172.7,12.2L170.8,11.4L171.0,10.7L170.5,10.5L170.5,9.7L169.5,9.9L169.7,8.8L170.3,8.3L170.3,6.9Z"}}, "africa": {"w": 243.0, "h": 315, "proj": {"lon0": 26, "lat1": 18, "c": 0.999962, "k": 9}, "base": "M47.6,363.6L44.2,362.6L37.7,362.6L33.0,361.3L30.3,361.7L29.1,360.7L27.4,360.2L27.2,358.2L18.4,356.2L15.0,351.6L15.1,346.5L11.5,346.3L11.3,344.1L10.6,342.9L6.1,341.0L1.5,337.8L-0.4,333.7L-0.5,332.4L-6.8,323.7L-6.7,322.1L-3.2,322.4L-1.2,323.6L3.0,323.4L7.0,324.4L9.2,323.6L17.4,314.1L24.8,310.8L25.5,309.8L26.2,305.9L29.6,304.0L33.6,302.8L39.6,302.8L39.9,306.0L47.1,306.2L49.4,307.6L51.2,307.9L53.5,309.9L56.2,310.0L60.7,312.1L62.5,312.4L61.9,314.0L62.7,317.3L62.9,327.2L62.0,330.6L60.5,331.5L60.3,332.5L61.6,333.9L61.0,336.5L63.1,340.9L62.9,341.9L60.1,346.6L58.4,347.9L58.3,350.6L57.2,352.2L57.9,353.7ZM39.6,302.8L31.4,303.3L26.2,305.9L25.5,309.8L24.8,310.8L17.4,314.1L9.2,323.6L7.0,324.4L3.0,323.4L-1.2,323.6L-3.2,322.4L-6.7,322.1L-9.0,320.1L-11.4,319.7L-15.5,319.3L-23.6,320.8L-34.6,311.4L-35.6,308.4L-36.2,305.6L-36.2,279.0L-18.3,278.9L-19.1,277.2L-18.1,273.8L-18.3,266.7L-17.6,264.6L-18.3,259.8L-17.3,260.0L-16.8,261.2L-14.7,262.2L-14.4,263.3L-15.0,264.3L-14.6,264.8L-13.3,264.9L-12.0,264.2L-6.4,262.9L-5.9,266.6L-4.4,267.8L0.2,269.0L7.4,269.7L8.5,269.1L9.4,266.5L10.4,266.2L13.8,271.8L21.7,274.7L23.0,277.5L24.1,277.8L26.5,281.8L28.0,282.6L32.0,281.2L32.7,281.7L32.9,282.7L34.0,282.9L34.2,271.4L33.2,271.8L31.6,272.1L31.4,273.8L27.6,273.1L22.3,268.3L21.2,265.3L23.8,257.0L23.4,249.1L21.6,245.0L25.8,241.1L26.4,239.3L26.1,238.4L42.8,235.7L44.0,238.3L45.3,239.4L49.0,239.9L51.1,242.2L53.0,242.3L53.5,243.5L57.9,244.4L62.3,246.7L63.0,248.6L64.8,248.6L66.2,250.8L65.8,252.3L67.8,254.1L69.0,257.0L67.2,259.0L65.3,260.0L66.4,262.4L65.1,264.8L65.7,267.2L65.3,271.0L66.1,272.8L67.6,273.1L66.6,274.4L63.2,275.7L62.5,277.2L63.0,278.1L62.7,281.0L61.7,283.1L60.0,284.3L61.2,285.2L60.9,285.8L61.8,286.4L62.9,288.2L64.3,287.5L64.8,288.1L38.1,296.9ZM404.5,-218.2L405.3,-218.6L407.0,-217.5L403.7,-216.3L403.2,-215.3L401.7,-214.9L397.6,-212.1L397.8,-211.6L400.2,-210.7L402.2,-211.0L403.0,-209.4L403.7,-209.0L408.5,-208.1L408.8,-210.1L410.3,-210.0L410.4,-211.5L411.0,-211.9L412.7,-209.8L412.9,-208.8L415.5,-208.6L415.7,-207.2L417.3,-207.4L419.9,-205.8L424.2,-205.3L419.4,-202.7L417.6,-203.2L417.2,-201.6L415.2,-201.9L413.6,-200.3L411.2,-199.4L410.7,-200.0L407.7,-200.6L401.9,-199.8L399.3,-201.7L402.7,-204.7L401.7,-205.0L401.9,-205.6L399.6,-207.3L398.6,-206.0L393.4,-203.9L390.7,-205.2L390.2,-204.9L389.8,-203.7L388.8,-203.1L389.7,-200.9L389.0,-200.6L389.5,-199.8L386.6,-200.0L383.7,-199.5L386.7,-198.8L385.2,-198.5L385.8,-197.2L383.7,-196.5L383.3,-194.7L382.2,-193.8L375.5,-194.6L373.9,-194.0L372.8,-193.2L372.2,-191.0L374.8,-190.2L375.2,-189.0L378.9,-188.7L379.3,-188.0L378.4,-186.0L378.8,-184.3L381.2,-181.5L380.1,-179.6L376.8,-176.1L375.8,-172.5L373.6,-173.4L370.7,-173.1L369.6,-174.0L367.4,-174.3L364.7,-174.1L364.7,-178.1L365.6,-179.4L365.2,-180.1L359.7,-182.2L356.5,-182.1L344.8,-188.8L343.5,-188.6L339.9,-190.4L328.0,-198.3L327.4,-201.0L324.8,-204.1L323.1,-207.8L319.5,-209.5L317.2,-208.7L313.8,-209.2L310.1,-209.0L306.8,-210.6L307.2,-212.3L306.7,-213.8L307.8,-214.2L305.5,-215.8L305.9,-217.9L304.7,-218.7L300.2,-218.9L298.4,-220.6L295.9,-221.1L293.3,-223.0L292.3,-222.0L290.3,-222.2L289.4,-221.7L292.3,-218.7L291.6,-218.6L290.5,-219.9L288.2,-220.4L286.3,-217.7L281.6,-217.1L278.7,-214.7L279.2,-211.1L280.1,-210.2L279.2,-209.4L269.8,-209.9L269.8,-243.0L293.0,-248.0L315.1,-237.5L316.4,-235.5L323.9,-229.4L334.9,-230.7L346.0,-230.0L350.1,-231.4L353.4,-228.8L355.5,-227.8L358.2,-223.9L360.9,-224.9L360.1,-216.0L364.5,-216.0L366.4,-208.6L377.4,-208.8L379.0,-207.3L378.4,-205.3L381.7,-203.6L383.1,-203.6L383.2,-205.9L386.9,-208.8L388.4,-210.8L396.8,-214.4L399.7,-216.7L401.2,-216.3L402.4,-217.5ZM418.4,228.4L417.8,228.9L417.1,227.4L418.2,228.3L418.0,227.0ZM272.7,-68.9L273.3,-68.1L273.5,-62.8L270.6,-60.6L269.7,-61.7L270.0,-62.6L269.2,-62.7L268.2,-61.8L267.8,-56.2L269.3,-55.9L269.9,-54.6L265.2,-53.5L265.8,-52.4L265.6,-51.5L262.8,-45.3L262.7,-42.3L262.1,-41.6L240.7,-44.2L239.0,-44.4L230.3,-54.7L230.4,-57.0L231.0,-56.3L231.9,-56.3L232.1,-54.7L233.1,-53.9L236.2,-54.0L239.8,-55.4L251.0,-54.7L255.6,-56.5L258.7,-61.3L261.9,-63.4L265.7,-67.5L269.5,-70.1L270.7,-72.6L271.5,-72.4L271.3,-69.2ZM246.0,-56.3L244.7,-56.6L246.3,-57.3L246.7,-57.7L247.0,-57.3ZM239.5,-56.6L239.2,-57.2L239.9,-57.0ZM251.3,-55.6L249.4,-55.3L248.7,-55.5L250.5,-56.3ZM256.2,-58.0L255.0,-58.2L255.6,-58.6ZM269.8,-209.9L279.2,-209.4L280.1,-210.2L279.2,-211.1L278.7,-214.7L281.6,-217.1L286.3,-217.7L288.2,-220.4L290.5,-219.9L291.6,-218.6L292.3,-218.7L289.4,-221.7L290.3,-222.2L292.3,-222.0L293.3,-223.0L295.9,-221.1L298.4,-220.6L300.2,-218.9L304.7,-218.7L305.9,-217.9L305.5,-215.8L307.8,-214.2L306.7,-213.8L307.2,-212.3L306.8,-210.6L310.1,-209.0L313.8,-209.2L317.2,-208.7L319.5,-209.5L323.1,-207.8L324.8,-204.1L327.4,-201.0L328.3,-197.8L337.5,-192.4L339.9,-190.4L343.5,-188.6L344.8,-188.8L356.5,-182.1L359.7,-182.2L365.4,-179.9L365.6,-179.4L364.7,-178.1L364.7,-174.1L361.0,-174.7L357.9,-176.1L356.8,-175.2L356.0,-173.3L351.8,-173.1L349.3,-172.2L346.6,-165.1L342.8,-163.0L342.1,-162.1L334.2,-160.6L334.5,-159.1L333.5,-157.0L330.2,-155.3L328.2,-155.3L326.8,-154.5L323.8,-157.0L319.9,-157.1L318.1,-158.7L317.3,-158.6L317.1,-159.4L317.3,-160.8L316.4,-161.8L316.9,-163.7L316.1,-167.8L309.1,-167.7L306.6,-170.7L301.1,-173.3L299.7,-175.6L295.3,-177.2L290.3,-177.0L287.8,-178.5L282.2,-179.8L281.8,-181.2L280.7,-181.9L274.0,-182.2L272.9,-181.7L272.4,-180.7L266.2,-180.9L264.4,-180.5L260.1,-178.0L258.3,-175.2L253.7,-174.0L251.2,-174.1L250.4,-179.4L250.8,-188.5L249.5,-189.9L249.3,-190.9L246.0,-192.1L244.4,-191.4L244.1,-192.9L245.1,-194.5L246.5,-193.8L248.4,-193.9L247.2,-195.0L247.4,-197.2L242.9,-197.9L242.6,-197.1L243.3,-196.0L241.2,-198.5L240.6,-201.6L242.5,-207.3L244.3,-205.4L246.0,-205.0L248.5,-205.4L249.9,-204.0L250.8,-203.8L253.7,-204.5L255.4,-204.2L254.9,-205.5L258.2,-205.9L258.3,-207.6L252.8,-211.7L250.2,-217.1L244.5,-216.8L242.7,-215.8L241.3,-213.4L241.9,-212.9L241.6,-208.8L238.4,-214.0L243.5,-217.3L253.1,-219.0L259.7,-215.7L264.9,-209.7ZM139.6,-211.7L142.4,-210.9L143.3,-211.5L148.2,-211.0L149.5,-212.2L151.1,-212.1L154.5,-209.6L154.8,-208.8L156.9,-208.4L157.1,-207.6L158.7,-206.4L159.5,-204.5L158.1,-202.3L159.4,-199.5L159.0,-199.1L161.5,-198.2L165.6,-198.0L169.3,-194.9L167.3,-195.9L166.1,-195.0L165.5,-192.8L162.2,-192.4L162.7,-191.0L163.6,-190.3L163.5,-188.4L164.4,-187.5L164.7,-183.5L166.0,-183.0L163.9,-179.2L167.3,-177.4L166.9,-176.9L167.2,-174.9L169.1,-173.6L168.9,-172.3L167.4,-172.6L164.5,-170.8L163.8,-171.5L163.7,-173.2L163.0,-173.7L159.1,-173.0L153.8,-174.3L152.4,-173.9L151.0,-174.3L147.2,-172.0L146.8,-173.1L145.8,-173.7L144.5,-172.9L139.6,-171.8L132.3,-171.9L126.1,-169.4L120.2,-168.1L114.9,-168.2L112.0,-169.8L109.7,-170.1L102.9,-167.8L99.6,-167.9L98.5,-168.8L95.9,-169.2L94.8,-166.1L95.7,-164.1L93.4,-163.5L93.1,-162.0L91.1,-160.5L89.0,-161.2L89.6,-162.0L88.3,-164.8L91.7,-167.9L91.6,-169.3L90.4,-170.2L86.9,-168.5L85.8,-167.4L84.5,-167.2L78.3,-169.4L74.7,-167.4L71.6,-164.7L69.2,-163.6L61.2,-162.3L57.4,-163.7L54.2,-166.8L48.2,-169.2L41.8,-169.8L40.0,-164.4L38.1,-164.8L33.2,-163.4L29.0,-164.9L28.3,-165.6L27.3,-168.2L26.7,-168.4L25.4,-168.1L20.7,-169.3L19.8,-168.2L18.2,-167.7L18.8,-168.8L14.9,-168.1L13.1,-168.4L18.0,-169.5L20.2,-171.3L11.4,-170.8L11.7,-172.1L13.8,-172.5L13.7,-173.2L11.0,-174.5L10.3,-176.4L9.6,-176.9L11.0,-177.5L11.1,-179.8L7.9,-180.5L6.1,-181.8L5.2,-181.3L2.6,-182.5L3.1,-183.3L3.7,-183.3L3.4,-185.6L4.0,-185.8L5.3,-185.0L5.4,-183.8L6.1,-183.0L6.5,-183.8L7.8,-183.4L10.3,-184.1L8.2,-184.3L6.9,-186.4L9.1,-188.0L7.3,-188.6L7.7,-190.0L6.1,-191.6L8.1,-193.9L1.0,-193.2L0.9,-193.7L1.6,-197.9L2.8,-198.2L6.6,-201.6L11.6,-202.1L13.3,-200.9L15.6,-201.0L16.6,-201.4L15.6,-202.3L16.9,-202.6L17.9,-202.4L17.7,-201.3L27.1,-201.5L27.5,-201.8L25.1,-202.8L26.6,-203.7L34.6,-204.8L30.3,-205.3L28.0,-206.4L27.4,-207.1L28.3,-209.0L35.3,-208.4L39.1,-208.8L43.3,-207.8L47.3,-208.0L49.1,-209.9L56.8,-213.6L66.4,-216.2L78.8,-215.6L81.1,-216.6L82.4,-216.2L82.1,-215.0L83.7,-213.6L86.0,-212.7L89.3,-213.4L90.5,-213.1L91.6,-210.8L93.6,-209.5L97.0,-210.3L99.6,-208.7L111.4,-206.3L120.8,-208.0L124.3,-206.8L128.4,-206.7L135.7,-209.4ZM-130.5,-136.6L-130.9,-131.8L-130.2,-130.7L-130.5,-129.7L-136.6,-126.7L-138.5,-125.4L-139.7,-123.6L-141.5,-123.2L-143.0,-121.2L-141.7,-116.5L-142.0,-115.0L-144.9,-111.5L-148.3,-110.1L-152.6,-126.7L-159.0,-130.9L-160.1,-134.3L-161.0,-135.5L-164.4,-137.4L-166.5,-142.5L-166.4,-144.7L-164.3,-146.3L-163.4,-147.7L-160.9,-149.1L-159.8,-150.6L-159.5,-152.8L-158.4,-154.8L-159.8,-160.2L-159.2,-163.7L-159.0,-165.8L-160.1,-166.7L-158.0,-168.8L-156.6,-169.5L-156.8,-170.4L-154.6,-171.0L-151.7,-172.8L-146.8,-174.1L-145.4,-173.8L-145.9,-172.9L-145.5,-172.2L-144.9,-172.6L-145.1,-173.3L-143.2,-173.3L-142.2,-172.9L-142.3,-171.3L-141.0,-169.8L-141.4,-169.0L-140.3,-168.6L-138.9,-169.9L-134.5,-171.7L-133.9,-169.9L-136.8,-166.4L-139.3,-164.9L-139.7,-163.6L-138.7,-161.0L-135.0,-158.7L-134.6,-156.0L-133.9,-155.2L-137.8,-150.1L-142.9,-146.5L-143.6,-144.5L-142.6,-142.7L-141.2,-141.6L-139.9,-141.0L-137.6,-141.2L-137.5,-139.6L-135.9,-139.8L-135.4,-140.6L-134.2,-140.1L-133.6,-138.3L-132.7,-137.8L-133.2,-137.2ZM-132.5,-150.8L-133.9,-150.1L-133.6,-150.7L-132.7,-151.4ZM-135.4,-141.5L-137.2,-141.5L-137.4,-142.7L-135.7,-143.0L-134.7,-142.2ZM375.8,-172.5L376.3,-175.4L380.6,-180.3L381.1,-181.9L378.8,-184.3L378.4,-186.0L379.2,-188.3L378.4,-188.9L375.2,-189.0L374.8,-190.2L372.2,-191.0L372.8,-193.2L375.5,-194.6L381.6,-193.8L382.5,-194.1L383.3,-194.7L383.7,-196.5L385.8,-197.2L385.2,-198.5L386.7,-198.8L383.7,-199.5L386.6,-200.0L389.5,-199.8L389.0,-200.6L389.7,-200.9L388.8,-203.1L389.8,-203.7L390.2,-204.9L390.7,-205.2L393.4,-203.9L398.6,-206.0L399.3,-207.2L400.0,-207.2L402.7,-204.5L399.4,-202.1L399.3,-201.5L400.8,-200.9L401.4,-199.9L404.6,-200.0L401.8,-198.8L401.6,-198.0L400.6,-197.5L400.0,-198.4L395.7,-199.8L391.8,-198.9L391.3,-197.3L389.8,-197.7L389.5,-197.3L389.0,-195.8L389.7,-193.7L400.5,-194.3L403.2,-192.6L405.0,-192.7L405.6,-193.4L408.6,-194.4L409.5,-194.2L409.5,-193.3L411.6,-192.8L411.5,-191.8L412.0,-191.5L414.4,-192.2L416.1,-190.9L417.2,-192.0L419.1,-192.4L424.0,-192.3L428.7,-193.0L428.4,-191.1L430.2,-188.7L429.2,-187.7L430.2,-185.5L432.2,-184.9L433.2,-186.0L434.5,-185.9L439.3,-184.1L439.0,-181.7L440.4,-178.0L440.0,-176.4L442.1,-174.5L441.1,-173.6L440.0,-173.1L437.9,-174.6L434.3,-174.7L433.5,-174.0L428.9,-173.2L429.5,-174.8L426.4,-175.2L422.0,-173.4L419.9,-171.3L417.2,-170.8L412.2,-168.2L411.0,-168.3L409.8,-169.6L408.9,-172.1L410.2,-179.2L407.5,-179.3L408.0,-181.5L407.3,-182.8L403.9,-184.1L401.5,-183.0L399.7,-180.7L397.9,-179.3L398.2,-177.0L397.7,-176.2L396.4,-175.9L394.4,-176.5L391.4,-176.0L390.6,-174.6L390.7,-172.9L389.7,-172.1L386.2,-174.0L378.6,-170.5L377.6,-170.7ZM89.0,-161.2L91.4,-160.5L91.8,-161.4L93.1,-162.0L93.4,-163.5L95.7,-164.1L94.8,-166.1L95.9,-169.2L98.5,-168.8L99.6,-167.9L102.9,-167.8L109.7,-170.1L112.0,-169.8L114.9,-168.2L120.2,-168.1L126.1,-169.4L132.3,-171.9L139.6,-171.8L146.4,-173.5L147.1,-171.5L142.1,-167.4L138.7,-166.6L137.7,-165.5L137.2,-162.7L138.2,-160.3L138.2,-158.8L136.9,-155.6L136.7,-150.9L134.4,-147.5L129.8,-145.8L97.4,-128.9L93.3,-129.5L88.1,-132.6L89.0,-134.5L88.1,-138.0L90.3,-140.3L89.5,-141.0L89.7,-141.6L90.8,-142.5L93.3,-142.6L92.5,-143.3L95.3,-146.0L94.5,-147.9L93.0,-148.5L93.9,-149.5L93.5,-149.9L89.8,-149.7L89.0,-152.5L89.5,-155.0L89.1,-156.8L87.9,-158.1ZM53.5,395.6L54.5,396.2L55.0,403.6L54.0,403.4L53.6,407.8L47.5,407.1L45.6,406.0L43.9,403.1L43.1,402.9L43.2,399.7L45.8,395.8L48.0,393.8L48.7,393.7L52.8,395.8ZM71.8,124.0L67.4,128.2L64.4,128.0L63.0,127.1L57.0,128.6L55.2,130.3L53.5,129.5L52.2,127.8L49.9,128.9L46.4,127.9L44.4,129.3L43.5,130.6L42.8,129.4L41.3,129.4L40.6,127.5L37.8,126.2L33.1,120.7L32.0,120.3L29.0,122.5L24.5,121.5L21.3,123.1L19.7,122.8L16.1,120.2L11.3,114.4L11.1,111.9L10.3,110.5L6.5,108.0L4.6,107.4L2.8,103.9L3.3,102.3L-1.0,98.4L-6.5,95.2L-7.4,94.0L-6.8,92.5L-7.2,91.7L-10.3,88.8L-15.4,87.4L-16.1,86.7L-16.0,84.5L-16.7,84.0L-16.1,83.1L-13.2,82.0L-11.9,77.5L-11.0,76.3L-10.9,74.0L-9.3,72.1L-8.8,69.9L-8.1,69.2L-1.3,68.3L-0.7,70.5L5.0,76.3L5.9,76.6L9.7,75.5L16.9,75.6L18.4,78.0L25.6,78.1L25.6,76.9L26.8,75.7L31.3,74.1L32.4,72.7L32.4,71.4L36.0,69.5L42.8,74.4L47.0,73.8L52.1,68.6L53.4,66.0L57.8,62.2L57.0,60.2L57.0,56.6L54.6,53.9L60.6,53.9L60.5,52.0L64.8,52.0L63.7,57.5L64.5,64.3L64.2,65.3L66.3,66.1L71.2,70.4L71.7,73.2L70.8,76.4L72.7,76.8L72.9,83.9L72.7,85.1L71.6,86.0L65.5,86.1L63.0,90.9L65.0,92.2L69.0,93.0L71.1,94.4L72.6,97.0L78.4,102.1L80.8,109.3L83.4,112.6ZM72.7,76.8L70.8,76.4L71.7,73.2L71.2,70.4L66.3,66.1L64.2,65.3L64.5,64.3L63.7,57.5L64.8,52.0L60.5,52.0L60.6,53.9L54.6,53.9L57.0,56.6L57.0,60.2L57.8,62.2L53.4,66.0L50.9,70.0L46.4,74.1L42.8,74.4L36.0,69.5L32.4,71.4L32.4,72.7L31.3,74.1L26.8,75.7L25.6,76.9L25.6,78.1L18.4,78.0L16.9,75.6L9.7,75.5L5.9,76.6L5.0,76.3L-0.7,70.5L-1.3,68.3L-1.8,68.2L-8.4,69.4L-9.0,71.5L-10.9,74.0L-11.0,76.3L-11.9,77.5L-13.2,82.0L-16.1,83.1L-16.7,84.0L-21.8,83.1L-22.0,81.5L-22.8,80.6L-21.4,77.9L-21.2,73.6L-24.2,68.5L-28.3,63.7L-27.7,59.9L-30.7,57.8L-30.8,54.1L-31.7,53.4L-32.8,48.1L-33.9,47.6L-36.6,47.9L-37.6,46.9L-36.1,44.0L-33.9,42.0L-35.0,38.4L-34.8,37.3L-31.4,34.9L-31.2,34.2L-32.0,33.4L-32.6,31.0L-30.0,29.5L-29.1,27.0L-27.6,25.5L-27.6,22.2L-26.9,21.4L-26.1,20.7L-18.3,20.5L-18.2,-18.0L-9.2,-18.0L-9.2,-36.0L46.9,-36.0L48.6,-37.8L49.4,-37.3L48.9,-36.0L97.8,-36.0L98.3,-32.3L101.3,-28.0L101.3,-27.4L100.4,-27.9L100.3,-26.8L101.0,-23.0L100.7,-19.1L101.2,-14.2L103.2,-7.4L105.6,-6.2L109.8,-2.2L110.5,-2.6L113.5,-0.0L110.3,3.7L106.0,4.9L103.9,6.1L102.7,8.4L99.1,8.5L98.8,10.8L98.0,12.4L98.2,15.3L94.7,24.7L93.8,25.8L94.7,33.7L93.5,39.4L91.4,44.2L91.1,47.2L87.0,48.4L82.0,55.7L80.6,60.5L80.4,64.2L78.9,65.3L77.1,64.1L75.1,66.1L74.5,67.2L74.8,70.3L73.4,73.3ZM30.3,361.7L33.0,361.3L37.7,362.6L44.2,362.6L47.6,363.6L49.9,373.3L52.2,377.0L53.7,381.4L53.5,395.6L52.8,395.8L48.7,393.7L46.9,394.6L43.2,399.7L43.3,403.1L43.9,403.1L45.6,406.0L47.5,407.1L51.7,407.8L53.6,407.8L54.0,403.4L62.0,403.6L58.8,415.8L57.4,418.5L54.2,421.6L52.0,422.4L48.0,426.4L40.2,438.4L35.7,443.9L31.3,447.1L25.7,452.6L16.7,459.5L9.7,463.7L5.5,465.4L3.9,465.8L-1.7,465.6L-3.1,466.6L-3.3,468.1L-9.0,467.8L-10.6,469.5L-12.6,469.6L-20.7,467.9L-24.6,468.7L-31.0,468.1L-33.8,468.6L-37.9,471.4L-45.1,471.3L-49.2,472.2L-53.8,475.1L-57.3,474.8L-59.5,473.5L-60.3,473.5L-60.0,472.4L-62.1,471.2L-64.5,471.3L-64.7,469.0L-65.2,468.7L-67.2,468.8L-67.8,469.5L-67.8,471.1L-68.3,470.7L-69.0,468.7L-68.8,467.5L-67.8,467.0L-68.1,465.5L-73.1,458.7L-72.9,456.8L-72.3,456.4L-71.7,457.0L-69.7,455.9L-69.1,454.5L-69.2,451.1L-70.1,447.7L-74.9,441.2L-77.9,436.0L-81.4,426.6L-86.0,419.6L-83.2,418.1L-82.1,415.2L-80.5,414.3L-79.2,415.8L-77.8,416.4L-77.9,418.5L-77.0,420.3L-71.1,421.8L-64.4,421.8L-61.5,422.4L-60.8,422.1L-60.2,420.6L-58.1,419.2L-54.2,418.1L-54.2,385.0L-50.1,388.3L-46.9,395.2L-46.7,397.5L-48.4,400.0L-47.8,403.4L-38.7,403.6L-37.9,402.4L-35.2,401.2L-34.0,399.5L-30.6,397.2L-28.1,391.1L-26.5,389.8L-23.5,389.6L-19.0,392.4L-16.3,392.7L-15.0,393.7L-11.3,394.4L-5.0,393.4L-3.7,392.5L-0.8,384.7L3.6,383.5L7.5,380.2L8.9,375.3L9.8,374.2L15.8,370.8L19.9,366.2L21.4,365.3L25.6,364.3L28.2,361.9ZM139.8,177.3L139.7,176.2L134.8,169.8L134.8,136.4L138.1,133.2L144.2,124.8L151.1,123.4L154.1,120.2L158.2,118.3L161.9,117.4L170.5,117.8L183.8,103.5L197.8,90.0L206.4,76.9L206.4,60.7L217.0,58.2L220.2,56.5L220.7,55.6L221.7,54.5L223.1,54.1L227.3,55.5L225.7,60.0L226.3,66.1L225.3,68.0L226.7,67.7L226.7,67.0L228.3,67.7L228.5,68.5L226.9,68.1L224.4,69.0L223.4,77.1L219.9,82.4L216.9,88.2L214.7,90.3L213.0,94.8L209.1,101.0L207.4,106.4L203.8,112.6L200.1,117.4L197.8,121.5L187.9,132.4L180.5,139.7L170.3,145.7L159.5,154.3L143.8,170.8ZM206.4,60.7L206.4,76.9L197.8,90.0L188.8,90.0L162.2,81.1L158.6,78.0L157.3,77.6L154.6,73.1L153.6,72.7L151.6,70.2L149.9,66.4L155.2,58.5L157.0,59.9L160.7,64.9L165.5,68.1L170.5,68.1L178.3,64.5L185.1,65.3L192.6,61.4L195.4,62.0L198.2,61.7L203.1,60.1ZM265.9,204.2L265.9,205.1L265.3,204.3L264.4,203.5L265.1,203.0ZM98.1,-66.4L94.5,-68.8L94.8,-69.2L96.7,-68.0L98.6,-66.7ZM143.9,11.6L144.6,11.6L144.5,10.8L145.5,11.6L145.4,12.9L144.6,12.0L143.7,12.1L142.0,10.4L142.7,10.0L142.7,9.0L143.3,9.1ZM233.8,-9.0L207.4,-5.2L199.5,-1.4L194.2,5.0L193.0,8.0L190.3,9.5L188.8,9.4L186.5,6.6L182.8,6.9L175.8,6.3L172.3,5.2L163.4,5.4L161.2,6.1L156.8,4.4L154.7,5.8L155.1,6.6L154.4,7.2L154.0,9.5L154.7,10.7L154.5,11.8L151.2,14.7L150.3,11.4L147.4,7.9L146.6,5.1L141.7,1.0L138.9,-4.1L137.1,-6.1L136.0,-9.7L132.8,-15.8L126.7,-20.4L125.0,-20.6L123.6,-21.5L119.5,-26.8L117.8,-29.8L118.3,-31.7L116.9,-34.9L117.9,-39.5L117.6,-41.3L112.2,-51.4L107.3,-55.7L103.9,-56.6L100.6,-61.4L101.4,-62.6L100.3,-65.6L98.3,-68.8L96.9,-69.8L96.1,-72.3L94.7,-72.9L92.2,-77.4L82.6,-90.3L78.5,-91.2L77.6,-90.6L79.0,-94.6L80.6,-102.2L90.6,-100.8L94.3,-103.5L96.3,-106.5L103.2,-108.0L104.8,-111.0L107.8,-112.5L104.9,-115.5L98.6,-121.4L116.7,-126.0L118.3,-127.1L129.3,-125.5L144.7,-117.7L168.2,-100.8L192.9,-98.9L195.0,-94.8L202.0,-94.9L203.6,-91.2L205.3,-89.1L205.2,-87.5L209.1,-85.4L208.6,-84.9L210.6,-82.6L211.8,-82.4L213.4,-80.6L215.9,-79.5L217.3,-78.0L216.1,-78.1L216.2,-76.7L217.7,-75.6L217.9,-74.8L217.4,-72.9L216.3,-73.0L216.7,-71.7L218.1,-68.6L220.1,-66.8L221.0,-63.8L223.7,-60.1L224.7,-59.2L228.7,-59.1L227.8,-57.1L230.1,-56.6L230.3,-54.7L239.0,-44.4L261.9,-41.6L262.7,-42.3L266.8,-36.0L260.8,-18.0ZM95.4,-69.4L94.9,-70.3L95.2,-70.7ZM-167.2,147.9L-167.9,147.9L-167.5,146.9L-166.9,147.0ZM-174.1,160.9L-175.3,161.4L-175.7,159.5L-173.8,158.4L-173.2,159.8ZM227.4,-59.5L224.7,-59.2L223.2,-61.1L223.6,-62.0L222.8,-66.6L225.0,-71.8L227.4,-73.4L229.9,-71.1L230.1,-70.0L229.4,-67.7L230.4,-64.3L230.3,-62.7L228.8,-60.0ZM456.9,-159.0L459.4,-154.0L459.0,-152.9L455.3,-150.6L450.4,-150.0L447.4,-148.5L434.7,-150.9L431.6,-149.9L430.1,-147.4L431.7,-146.1L431.1,-144.7L431.5,-144.2L434.2,-143.9L434.2,-143.5L431.8,-141.5L433.3,-139.6L432.0,-136.7L434.7,-134.9L435.2,-132.9L438.0,-132.8L438.2,-130.4L440.9,-130.2L444.0,-128.5L443.3,-127.3L438.6,-125.5L437.0,-124.4L436.6,-123.4L437.3,-121.2L436.6,-118.7L437.7,-117.3L435.0,-116.0L431.1,-111.9L431.4,-110.0L430.3,-108.8L426.4,-107.4L425.1,-104.0L422.1,-99.3L417.1,-96.8L415.1,-93.1L413.5,-91.6L412.8,-89.7L403.2,-87.4L402.2,-87.9L401.6,-89.4L399.6,-90.2L397.3,-88.6L395.1,-85.3L391.8,-82.1L391.2,-79.2L391.5,-78.7L397.3,-76.6L396.9,-71.2L398.4,-69.4L401.8,-69.0L401.9,-66.8L405.4,-60.2L404.7,-59.1L405.4,-57.6L402.4,-56.1L401.2,-56.5L400.9,-57.8L400.4,-57.7L396.9,-56.6L396.2,-55.7L394.2,-55.5L392.0,-56.5L385.4,-56.4L385.0,-56.8L384.5,-56.4L384.5,-53.7L380.5,-53.4L379.0,-51.8L378.3,-52.6L377.5,-52.5L376.7,-53.1L376.4,-52.5L375.0,-52.3L374.8,-53.3L374.1,-52.9L373.5,-53.5L371.8,-55.6L370.5,-60.8L366.3,-61.7L366.3,-65.0L363.8,-68.2L362.0,-68.3L361.2,-67.4L363.2,-67.6L364.2,-67.0L349.0,-65.8L347.9,-64.7L347.3,-64.9L342.5,-66.6L341.4,-66.1L338.0,-66.2L337.4,-64.9L330.0,-65.4L326.8,-64.2L325.8,-65.0L323.2,-64.2L320.1,-64.7L320.9,-69.8L321.8,-70.6L322.6,-74.0L325.1,-75.3L326.1,-75.2L326.8,-76.4L327.9,-77.0L331.1,-77.8L334.4,-77.8L335.7,-82.4L334.5,-83.3L330.9,-83.3L331.3,-85.5L330.8,-92.2L329.1,-92.1L327.2,-93.7L323.0,-94.9L320.6,-97.1L317.9,-102.4L313.6,-106.7L328.3,-102.7L338.1,-103.5L342.9,-102.5L345.5,-103.9L351.8,-104.0L362.1,-106.8L362.8,-107.7L362.1,-109.0L363.1,-115.2L363.6,-116.2L365.3,-117.2L367.4,-119.4L368.3,-119.8L373.1,-119.1L375.6,-120.1L374.2,-121.6L378.1,-123.1L379.4,-124.2L382.0,-123.8L383.4,-124.2L385.8,-122.7L387.7,-123.6L389.5,-125.4L389.2,-129.9L390.6,-132.1L391.5,-135.2L395.3,-136.0L398.3,-137.6L398.5,-138.3L397.2,-140.6L394.8,-143.1L395.0,-144.1L395.9,-144.5L398.9,-143.7L401.9,-143.6L405.4,-144.4L405.8,-147.3L404.7,-148.8L410.6,-154.6L409.9,-155.6L410.4,-156.7L410.1,-157.9L408.8,-160.5L406.7,-162.4L410.6,-165.9L411.9,-165.9L415.4,-168.3L419.6,-169.5L424.0,-169.8L429.9,-170.0L432.3,-169.4L437.4,-171.3L440.0,-170.6L442.3,-170.8L444.1,-170.2L444.8,-168.6L447.0,-168.7L448.9,-167.4L449.8,-165.4L449.2,-162.4L450.6,-161.8L451.3,-160.5L454.9,-161.0L455.1,-160.0ZM294.5,-20.0L293.8,-19.9L293.8,-21.0L295.1,-22.5L295.9,-24.1L296.5,-22.6ZM243.8,12.2L241.2,6.6L240.6,6.3L233.8,-9.0L260.8,-18.0L266.8,-36.0L262.7,-42.3L262.8,-45.3L265.6,-51.5L265.8,-52.4L265.2,-53.5L269.9,-54.6L269.3,-55.9L267.8,-56.2L268.2,-61.8L269.2,-62.7L270.0,-62.6L269.7,-61.7L270.6,-60.6L273.5,-62.8L275.8,-58.2L278.2,-55.4L281.0,-53.3L290.9,-50.6L293.2,-50.8L294.9,-49.7L300.9,-41.9L304.4,-40.6L304.2,-38.0L300.3,-31.5L296.1,-28.0L292.3,-21.7L289.9,-21.8L290.2,-23.4L289.5,-23.3L286.7,-20.2L285.4,-15.1L286.3,-9.2L280.6,-8.1L277.4,-6.8L275.9,-5.3L274.9,-1.5L273.4,0.1L265.3,1.4L263.3,3.7L263.5,6.1L261.6,8.6L258.9,9.3L257.1,8.7L252.6,9.0L248.5,11.2ZM272.7,-68.9L271.3,-69.2L271.5,-72.4L270.7,-72.6L271.8,-74.1L272.7,-74.1L273.4,-75.2L273.9,-74.9L273.4,-70.2ZM272.5,-65.1L271.9,-64.9L271.9,-65.4L272.5,-65.7ZM-168.3,122.2L-169.7,122.4L-168.9,121.3L-168.0,121.6ZM-111.5,38.7L-107.4,44.3L-106.2,50.5L-103.3,51.3L-102.4,52.6L-102.8,58.2L-106.2,60.6L-108.2,61.1L-110.7,64.1L-112.2,66.6L-113.3,70.5L-114.6,71.7L-115.2,75.9L-117.6,77.2L-119.4,83.3L-120.8,84.4L-122.4,84.6L-123.9,87.5L-125.9,93.7L-128.1,96.5L-127.2,98.0L-129.8,100.0L-130.7,102.6L-133.6,104.1L-134.9,101.3L-138.5,98.4L-140.3,100.1L-142.1,100.0L-142.7,99.0L-146.0,101.2L-147.1,103.2L-152.5,107.9L-153.6,110.0L-154.8,115.2L-157.0,119.2L-158.1,119.3L-159.9,117.8L-159.0,120.1L-159.4,121.0L-165.2,121.3L-166.2,120.1L-166.9,121.0L-168.4,121.1L-170.3,119.6L-169.5,120.5L-169.6,121.4L-171.7,122.5L-173.1,119.5L-172.9,121.8L-172.3,122.6L-174.3,122.9L-174.8,121.7L-175.0,122.9L-177.6,123.2L-177.6,122.1L-178.1,123.4L-179.3,123.4L-183.7,120.2L-185.5,115.8L-184.7,115.6L-185.5,115.4L-185.7,114.0L-184.5,113.6L-184.0,112.7L-185.5,113.4L-187.2,112.2L-184.9,111.5L-185.8,111.4L-186.0,110.6L-187.4,111.6L-188.0,111.2L-188.2,110.1L-190.2,107.8L-194.1,104.9L-196.9,104.3L-202.6,104.3L-200.5,102.6L-203.1,103.3L-204.0,104.4L-209.6,104.7L-209.0,101.6L-209.5,99.2L-208.9,94.7L-209.8,91.1L-209.0,80.6L-206.6,80.2L-205.7,78.1L-205.8,76.9L-204.0,75.0L-204.1,74.0L-202.0,72.8L-201.6,72.0L-201.2,70.6L-201.8,69.6L-201.6,68.8L-199.9,68.1L-199.5,66.1L-200.2,65.1L-200.5,62.3L-202.6,59.4L-202.6,58.5L-201.0,56.1L-201.5,55.0L-201.2,49.2L-198.5,47.0L-197.6,45.6L-196.7,40.9L-193.0,38.7L-186.8,38.2L-184.6,37.1L-177.3,39.1L-171.6,44.9L-167.8,44.0L-163.5,41.9L-161.1,42.4L-155.2,45.8L-147.5,46.7L-143.6,43.1L-139.7,42.0L-131.3,41.8L-126.1,43.3L-124.9,44.2L-121.8,44.2L-120.1,42.1L-118.2,41.0L-114.1,39.0ZM-111.5,38.7L-114.1,39.0L-118.2,41.0L-120.1,42.1L-121.8,44.2L-124.9,44.2L-126.1,43.3L-131.3,41.8L-139.7,42.0L-143.6,43.1L-147.5,46.7L-155.2,45.8L-161.1,42.4L-163.5,41.9L-167.8,44.0L-171.6,44.9L-177.3,39.1L-184.6,37.1L-186.8,38.2L-192.0,38.4L-196.7,40.9L-197.6,45.6L-198.5,47.0L-201.2,49.2L-201.5,55.0L-201.0,56.1L-201.6,56.7L-208.7,50.5L-212.7,52.0L-212.5,54.9L-215.3,51.2L-215.4,50.6L-214.0,49.8L-215.1,47.7L-216.4,47.6L-217.9,48.5L-220.5,47.9L-225.1,44.6L-225.1,41.7L-223.2,41.8L-224.8,40.8L-225.9,39.5L-228.4,38.7L-230.6,35.3L-230.5,33.8L-232.5,31.5L-231.9,27.3L-225.5,27.2L-222.3,24.5L-207.0,23.9L-206.5,23.2L-202.5,23.8L-202.3,22.7L-199.6,20.9L-196.9,14.8L-195.9,9.0L-195.9,-10.3L-181.5,-13.3L-166.7,-25.9L-126.3,-49.7L-112.7,-46.6L-106.1,-41.6L-99.2,-45.0L-97.4,-35.3L-97.4,-31.7L-93.5,-26.6L-94.1,-25.9L-93.7,-24.6L-90.3,-21.1L-92.4,-17.1L-94.7,9.8L-104.7,20.2L-113.0,32.6ZM-23.6,320.8L-15.5,319.3L-11.4,319.7L-9.0,320.1L-6.7,322.1L-9.8,322.4L-13.2,324.5L-14.8,323.8L-15.8,324.2L-21.2,328.0L-21.8,328.1L-24.3,324.2L-25.0,324.0L-45.2,326.9L-45.3,360.0L-54.2,360.0L-54.2,418.1L-58.1,419.2L-60.2,420.6L-60.8,422.1L-61.5,422.4L-64.4,421.8L-71.1,421.8L-77.0,420.3L-77.9,418.5L-77.8,416.4L-79.2,415.8L-80.5,414.3L-82.1,415.2L-83.2,418.1L-85.6,419.2L-86.0,419.6L-91.0,415.4L-96.4,407.5L-97.8,403.1L-97.7,400.6L-99.3,398.9L-100.4,393.5L-100.5,387.3L-103.5,379.8L-103.7,371.5L-104.4,368.7L-104.0,367.9L-103.5,368.3L-103.3,367.2L-103.8,364.0L-112.9,350.3L-115.5,343.7L-121.9,332.3L-125.6,328.2L-128.0,324.0L-128.3,317.2L-125.9,316.5L-121.1,316.9L-116.1,314.7L-112.7,315.4L-107.8,318.7L-68.4,318.6L-65.5,321.3L-63.4,322.2L-50.5,323.0L-47.3,324.2L-44.0,323.6L-41.2,324.0ZM47.6,363.6L57.9,353.7L57.2,352.2L58.3,350.6L58.4,347.9L60.1,346.6L62.9,341.9L63.1,340.9L61.0,336.5L61.6,333.9L60.3,332.5L60.5,331.5L62.0,330.6L62.9,327.2L62.7,317.3L61.9,314.0L62.5,312.4L60.7,312.1L56.2,310.0L53.5,309.9L51.2,307.9L49.4,307.6L47.1,306.2L39.7,305.8L39.4,301.6L38.1,296.9L64.8,288.1L68.7,293.1L75.4,291.8L76.5,293.4L77.0,298.3L76.9,299.7L74.2,305.0L75.6,306.7L75.7,308.2L80.4,312.8L81.7,313.5L81.6,315.7L83.4,316.1L83.5,313.3L82.5,311.0L84.2,307.4L87.8,306.5L88.4,303.1L88.2,299.4L89.0,296.0L88.6,294.0L83.2,287.1L80.2,284.0L78.0,283.4L77.1,282.2L75.2,271.5L77.6,266.6L79.4,266.2L86.1,266.4L88.1,265.1L89.2,265.1L92.7,267.4L96.1,267.2L98.8,266.1L102.4,267.4L105.5,266.2L107.3,263.7L109.6,263.5L112.4,264.7L115.1,263.1L119.9,262.1L120.9,261.3L125.9,259.4L130.2,256.2L131.5,258.0L130.4,258.9L131.4,259.5L130.6,260.4L130.9,261.6L129.6,264.0L130.2,265.0L129.9,266.9L130.8,270.0L130.4,274.4L131.2,275.7L131.0,277.4L129.9,278.8L131.1,278.9L131.4,289.1L132.4,289.9L131.8,292.8L132.5,291.8L133.4,292.2L133.5,295.1L131.6,298.0L131.9,299.3L131.0,301.3L127.0,305.8L125.8,308.0L124.1,308.7L124.6,309.9L119.2,313.1L117.8,314.8L114.0,315.5L109.3,317.2L103.6,320.1L98.5,323.9L98.1,325.2L94.9,328.7L93.6,330.9L92.9,331.1L92.4,330.5L92.1,331.8L91.1,331.6L88.7,332.9L84.3,337.4L80.5,340.3L79.7,340.4L77.8,339.3L78.8,340.4L78.3,346.3L80.8,349.3L82.1,354.6L83.4,356.9L83.8,363.6L84.4,364.1L85.1,361.0L85.9,362.7L85.4,365.9L86.2,368.7L84.3,376.2L85.9,376.4L85.4,378.6L83.3,381.9L80.9,383.9L66.1,389.3L62.6,391.4L61.1,392.8L59.3,396.0L61.6,398.4L62.6,396.8L62.0,403.6L55.0,403.6L54.5,396.2L53.5,395.6L53.3,394.0L53.9,392.7L53.9,382.1L52.2,377.0L49.9,373.3ZM284.9,346.4L282.4,346.5L281.9,346.1L282.5,344.1L283.4,343.3L284.2,342.0L284.9,341.9L285.6,342.9L286.0,344.9ZM-102.9,-160.7L-104.1,-160.4L-104.8,-160.9L-104.8,-161.8ZM211.8,273.9L215.4,279.7L217.6,288.4L218.1,294.6L220.0,298.3L220.3,300.5L217.9,305.6L216.2,304.2L215.0,301.1L213.7,301.0L213.0,301.7L213.4,306.7L214.5,308.3L214.5,310.4L213.6,312.3L213.9,313.3L212.3,314.4L211.0,317.2L211.3,323.1L210.3,327.0L206.3,337.8L201.1,354.1L197.2,364.2L194.0,376.9L190.6,385.1L189.3,386.8L186.5,388.3L181.4,389.1L175.6,392.1L172.0,391.9L169.3,390.0L165.1,389.0L162.3,387.0L161.2,383.8L159.0,380.7L158.8,375.7L159.5,373.8L158.1,369.7L156.2,367.1L155.3,362.5L155.6,359.4L156.9,356.8L157.5,354.2L160.2,352.6L161.2,349.8L165.1,343.3L166.1,338.0L166.0,336.9L164.1,333.7L164.1,330.7L162.4,326.6L162.1,322.2L161.5,320.2L161.8,318.5L165.8,312.3L166.0,308.2L170.2,307.6L173.0,305.6L174.1,306.3L176.4,305.9L177.3,304.3L181.4,303.6L183.6,305.3L184.0,305.1L183.1,304.3L183.0,303.4L184.3,301.6L188.5,299.0L188.9,299.2L189.2,301.1L189.9,300.9L190.2,299.7L189.8,298.4L191.5,296.5L192.2,294.9L193.2,294.4L193.5,295.4L192.9,297.0L193.3,297.1L196.0,293.7L197.7,294.1L196.3,292.9L196.0,291.3L198.0,287.6L196.9,286.3L197.5,285.0L198.4,284.4L200.3,285.5L201.6,283.8L205.2,281.4L206.3,277.6L205.2,274.0L206.4,274.0L208.9,270.7L209.8,271.1ZM201.1,282.3L199.9,282.5L199.7,281.3L200.3,281.3L200.8,280.8ZM215.4,314.1L214.4,315.8L214.7,314.4L216.2,312.3ZM-148.3,-110.1L-144.9,-111.5L-142.0,-115.0L-141.7,-116.5L-143.0,-121.2L-141.5,-123.2L-139.7,-123.6L-138.5,-125.4L-136.6,-126.7L-130.5,-129.7L-130.2,-130.7L-130.9,-131.8L-130.5,-136.6L-123.5,-133.7L-119.2,-133.2L-114.4,-134.2L-106.6,-132.4L-103.4,-130.6L-97.4,-129.5L-95.8,-127.4L-95.7,-125.7L-94.5,-122.9L-92.6,-120.8L-88.9,-119.4L-83.0,-118.9L-73.5,-116.3L-70.3,-115.0L-66.0,-111.7L-61.9,-110.4L-56.6,-112.4L-53.0,-116.7L-52.7,-118.8L-54.3,-122.0L-54.7,-124.4L-52.9,-128.0L-48.4,-131.2L-44.4,-133.0L-41.2,-133.2L-38.5,-134.5L-34.3,-134.3L-26.2,-131.6L-26.0,-129.0L-24.4,-127.9L-19.8,-127.4L-16.8,-126.1L-10.1,-125.9L-8.8,-125.0L-7.6,-122.9L-10.3,-120.0L-9.2,-115.0L-10.1,-112.1L-11.7,-109.8L-10.7,-106.3L-9.2,-100.6L-9.2,-18.0L-18.2,-18.0L-18.2,-13.5L-90.1,-49.0L-106.1,-41.6L-112.7,-46.6L-126.3,-49.7L-130.4,-56.8L-137.8,-59.0L-140.0,-58.3L-141.1,-58.8L-142.9,-61.1L-144.0,-66.0L-149.2,-73.3L-148.6,-75.0L-145.3,-77.0L-144.9,-79.6L-146.3,-84.0L-144.8,-88.1L-145.7,-95.0L-145.6,-100.0L-147.2,-104.7L-150.2,-109.0ZM24.6,432.9L21.5,433.3L18.5,437.7L15.8,437.4L12.5,434.8L12.2,433.4L9.5,429.0L11.7,427.7L12.8,426.2L15.6,422.5L23.6,419.2L26.6,421.9L29.7,423.8L30.5,425.4L29.6,428.1L28.3,429.3L27.9,431.3ZM89.8,-149.7L93.5,-149.9L93.9,-149.5L93.0,-148.5L94.5,-147.9L95.3,-146.0L92.5,-143.3L93.3,-142.6L90.8,-142.5L89.5,-141.0L90.2,-140.1L86.4,-137.2L85.8,-137.3L85.4,-136.1L82.0,-135.8L86.5,-144.3L86.8,-146.2L89.8,-148.9ZM200.5,-104.6L199.6,-104.5L199.3,-105.0L198.7,-106.2L199.1,-107.0L199.7,-107.8L201.1,-106.0ZM202.0,-94.9L195.0,-94.8L192.9,-98.9L184.8,-99.9L188.1,-103.8L190.3,-108.0L192.0,-108.7L195.0,-108.9L197.8,-107.8L199.3,-104.2L197.7,-104.6L195.5,-102.5L198.5,-102.2L199.6,-98.8ZM88.1,-132.6L93.3,-129.5L97.4,-128.9L115.0,-138.3L117.5,-130.4L116.8,-130.3L117.4,-128.8L119.2,-129.2L119.6,-128.2L116.7,-126.0L98.6,-121.4L107.8,-112.5L104.8,-111.0L103.4,-108.1L96.8,-106.8L94.3,-103.5L90.6,-100.8L80.6,-102.2L82.3,-109.3L82.3,-111.8L85.0,-118.2L84.6,-119.1L86.0,-123.9L86.2,-131.8ZM-170.8,-251.3L-169.8,-250.9L-166.1,-251.8L-163.9,-251.3L-162.1,-252.1L-160.9,-253.4L-161.1,-254.4L-158.2,-256.0L-157.9,-254.2L-156.2,-253.0L-154.6,-252.7L-155.0,-252.0L-153.4,-250.5L-152.8,-250.6L-153.0,-252.1L-150.7,-254.6L-150.3,-256.5L-149.1,-256.3L-148.2,-254.8L-144.5,-255.3L-143.3,-254.1L-142.7,-254.3L-143.7,-256.3L-143.2,-257.4L-140.1,-257.0L-140.4,-258.0L-139.9,-259.8L-135.1,-259.0L-132.8,-260.8L-128.0,-260.9L-124.5,-261.7L-124.6,-260.4L-122.5,-258.3L-110.7,-256.7L-113.6,-254.4L-111.3,-253.6L-112.6,-251.9L-111.6,-251.8L-111.7,-250.3L-109.1,-248.5L-110.5,-248.3L-109.9,-248.6L-111.3,-249.9L-112.8,-249.4L-115.1,-249.9L-116.7,-248.7L-121.5,-247.2L-122.1,-247.2L-121.6,-247.9L-123.5,-247.0L-124.0,-245.2L-121.3,-242.7L-122.5,-241.2L-123.5,-241.5L-123.3,-237.9L-122.4,-236.0L-119.8,-234.0L-111.9,-230.1L-107.9,-222.2L-103.1,-218.2L-97.5,-215.4L-88.5,-215.1L-88.6,-213.8L-90.8,-212.6L-90.9,-211.6L-80.1,-207.6L-76.7,-205.6L-72.4,-203.9L-69.0,-201.3L-67.6,-198.9L-68.9,-196.4L-71.3,-197.4L-73.2,-200.5L-77.4,-201.1L-79.4,-202.5L-81.6,-202.1L-84.0,-199.2L-85.3,-195.7L-84.6,-194.8L-82.6,-194.2L-80.0,-192.4L-79.4,-189.0L-80.1,-188.3L-81.4,-188.5L-84.4,-187.2L-85.0,-186.4L-85.1,-183.7L-87.5,-182.2L-89.5,-179.5L-92.5,-179.5L-93.2,-180.3L-93.2,-181.6L-91.6,-182.7L-90.7,-186.0L-88.2,-186.8L-88.1,-188.5L-89.0,-189.2L-89.8,-192.2L-92.8,-197.9L-93.7,-198.5L-96.3,-198.6L-99.4,-200.2L-99.5,-202.2L-101.1,-204.0L-104.9,-203.4L-103.9,-204.6L-105.2,-205.3L-107.6,-205.3L-109.3,-208.2L-110.4,-209.1L-114.8,-209.6L-116.2,-209.2L-118.4,-210.7L-120.3,-211.2L-125.3,-215.5L-127.7,-216.7L-129.3,-218.6L-132.3,-219.8L-134.1,-219.7L-133.3,-220.1L-133.5,-220.8L-137.6,-224.4L-139.4,-224.7L-139.3,-226.8L-141.1,-229.6L-141.8,-232.7L-143.6,-234.2L-146.4,-234.9L-150.4,-236.9L-155.1,-237.8L-157.0,-237.1L-161.9,-232.9L-166.6,-231.9L-166.7,-232.8L-164.9,-234.7L-165.3,-235.5L-168.1,-235.2L-171.9,-237.0L-172.4,-238.6L-170.7,-240.5L-171.1,-241.4L-173.3,-242.3L-174.3,-243.6L-173.8,-244.3L-172.4,-244.2L-170.3,-245.2L-169.7,-246.4L-172.9,-249.7L-172.8,-250.3ZM-125.5,-168.8L-126.6,-169.5L-125.8,-169.4ZM-93.8,-182.0L-96.9,-178.1L-98.1,-175.1L-97.9,-174.0L-96.9,-173.2L-97.4,-172.9L-96.3,-171.5L-98.0,-169.6L-98.0,-168.2L-103.0,-169.0L-106.7,-171.9L-109.8,-172.2L-115.5,-175.3L-118.2,-176.2L-120.2,-176.3L-122.1,-178.4L-121.1,-180.5L-119.4,-181.6L-117.9,-180.3L-115.6,-181.7L-114.4,-181.7L-109.9,-179.8L-103.4,-180.4L-100.9,-181.5L-97.9,-181.4L-94.5,-182.6L-93.3,-182.4ZM88.6,-138.7L88.1,-137.6L89.0,-134.5L88.1,-132.6L86.2,-131.8L86.0,-129.6L82.7,-130.8L81.6,-130.1L80.6,-127.4L80.6,-124.4L82.1,-124.4L82.8,-123.8L80.6,-122.4L79.9,-120.3L81.9,-120.3L84.7,-121.3L85.1,-121.3L84.6,-119.1L85.0,-118.2L82.3,-111.8L82.3,-109.3L80.8,-104.0L80.1,-103.3L74.2,-118.9L76.7,-121.7L76.3,-122.3L78.1,-125.1L82.0,-135.8L84.7,-135.7L85.4,-136.1L85.8,-137.3L86.4,-137.2ZM76.3,-122.3L76.7,-121.7L75.1,-120.3L75.1,-119.6L74.2,-118.9L73.8,-119.9ZM86.0,-129.6L86.0,-123.9L85.1,-121.3L81.9,-120.3L79.9,-120.3L80.6,-122.4L82.8,-124.0L80.6,-124.6L80.6,-127.4L81.6,-130.1L82.7,-130.8ZM147.2,-172.0L151.0,-174.3L152.4,-173.9L153.8,-174.3L159.1,-173.0L163.0,-173.7L163.7,-173.2L163.8,-171.5L164.5,-170.8L167.4,-172.6L168.6,-172.5L169.9,-169.2L171.2,-168.3L171.5,-166.2L173.2,-165.2L174.2,-162.1L176.0,-161.8L178.0,-160.4L182.5,-160.0L179.9,-158.5L179.8,-157.3L181.0,-155.9L181.2,-154.1L179.3,-153.3L177.1,-151.2L176.7,-149.2L175.5,-149.2L174.9,-147.7L175.9,-145.9L174.6,-143.7L177.6,-140.4L178.9,-140.5L178.9,-139.4L180.2,-138.7L181.3,-137.1L180.7,-135.8L181.0,-134.6L183.4,-134.4L190.1,-130.2L192.0,-130.1L193.6,-127.4L196.5,-124.1L195.1,-120.6L195.1,-117.0L198.1,-116.9L198.1,-112.2L201.0,-110.6L201.9,-108.3L202.9,-107.7L201.2,-107.6L199.3,-108.4L197.8,-107.8L195.0,-108.9L191.0,-108.4L190.0,-107.7L188.1,-103.8L186.2,-101.3L184.8,-99.9L183.2,-99.6L168.2,-100.8L144.7,-117.7L129.3,-125.5L118.3,-127.1L119.6,-128.2L119.2,-129.2L117.4,-128.8L116.8,-130.3L117.5,-130.4L115.0,-138.3L132.2,-147.0L134.9,-147.9L136.7,-150.9L136.9,-155.6L138.2,-158.8L138.2,-160.3L137.2,-162.7L137.7,-165.5L138.7,-166.6L142.1,-167.4ZM271.7,-80.3L269.6,-78.3L268.6,-78.6L264.8,-77.2L263.6,-77.8L267.9,-79.3L267.8,-80.5L269.2,-80.2L271.9,-81.0L272.5,-80.6ZM251.2,-174.1L253.7,-174.0L258.3,-175.2L260.1,-178.0L264.4,-180.5L266.2,-180.9L272.4,-180.7L272.9,-181.7L274.0,-182.2L280.7,-181.9L281.8,-181.2L282.2,-179.8L287.8,-178.5L290.3,-177.0L295.3,-177.2L299.7,-175.6L301.1,-173.3L306.6,-170.7L309.1,-167.7L316.1,-167.8L316.9,-163.7L316.4,-161.8L317.3,-160.8L317.5,-157.6L316.7,-155.8L315.9,-155.5L316.3,-153.8L315.7,-151.7L314.5,-149.9L312.5,-148.7L314.0,-146.9L311.8,-146.8L310.4,-144.9L310.6,-140.8L314.2,-139.5L311.0,-136.2L311.0,-135.5L313.5,-128.2L313.4,-121.5L320.9,-120.4L321.8,-119.6L322.3,-116.2L313.6,-106.7L317.9,-102.4L320.6,-97.1L323.0,-94.9L327.2,-93.7L329.1,-92.1L330.8,-92.2L331.3,-85.5L330.8,-83.4L332.2,-83.0L334.5,-83.3L335.7,-82.4L334.5,-78.0L327.9,-77.0L326.8,-76.4L326.1,-75.2L325.1,-75.3L322.6,-74.0L321.8,-70.6L320.9,-69.8L320.3,-64.8L318.7,-63.9L312.0,-65.5L310.6,-66.9L309.6,-65.8L302.5,-66.6L301.1,-67.3L297.4,-66.8L295.2,-68.0L289.8,-68.3L287.4,-69.2L286.2,-68.9L285.6,-69.5L282.0,-70.1L279.9,-75.3L279.3,-79.2L277.3,-81.8L272.5,-82.7L266.8,-80.8L264.8,-78.9L263.6,-79.1L258.8,-76.5L254.2,-78.3L249.3,-78.5L247.1,-80.5L240.2,-83.9L238.3,-86.5L234.3,-88.4L231.0,-88.6L229.7,-89.2L227.5,-91.2L225.8,-94.6L225.5,-96.5L223.8,-97.8L223.9,-99.6L222.1,-100.3L221.8,-102.8L217.5,-107.3L216.6,-109.8L212.0,-108.3L207.2,-111.0L207.4,-111.6L209.2,-111.7L209.0,-112.3L207.0,-112.6L207.3,-112.1L206.0,-110.9L206.3,-109.1L205.8,-108.6L202.9,-107.7L201.9,-108.3L201.0,-110.6L198.1,-112.2L198.1,-116.9L195.1,-117.0L195.1,-120.6L196.5,-124.1L193.6,-127.4L192.3,-129.8L190.1,-130.2L183.4,-134.4L181.0,-134.6L180.7,-135.8L181.3,-137.1L180.2,-138.7L178.9,-139.4L178.9,-140.5L177.6,-140.4L174.6,-143.7L175.9,-145.9L174.9,-147.7L175.5,-149.2L176.7,-149.2L177.1,-151.2L179.3,-153.3L181.2,-154.1L181.0,-155.9L179.8,-157.3L179.9,-158.5L182.5,-160.0L178.0,-160.4L176.0,-161.8L174.2,-162.1L173.2,-165.2L171.5,-166.2L171.2,-168.3L169.9,-169.2L168.9,-172.2L169.1,-173.6L167.2,-174.9L166.9,-176.9L167.3,-177.4L163.9,-179.2L166.0,-183.0L164.7,-183.5L164.4,-187.5L163.5,-188.4L163.6,-190.3L162.7,-191.0L162.2,-192.4L165.5,-192.8L166.1,-195.0L167.3,-195.9L169.3,-194.9L172.3,-191.3L175.3,-189.1L181.5,-187.8L185.0,-188.1L187.7,-190.3L188.9,-190.6L192.0,-192.8L195.9,-194.8L198.0,-195.2L200.9,-192.6L199.2,-191.8L198.9,-191.2L200.6,-189.2L198.4,-188.4L198.0,-187.7L203.3,-183.7L205.8,-183.9L206.3,-180.1L207.7,-177.0L210.3,-175.7L217.2,-174.7L219.0,-172.3L220.8,-171.1L226.1,-168.7L231.8,-167.5L235.7,-167.6L249.9,-170.4L251.2,-170.4L249.1,-169.7L251.7,-169.4L252.2,-170.1ZM379.5,-52.7L381.4,-53.6L384.5,-53.7L384.5,-56.4L385.0,-56.8L385.4,-56.4L392.0,-56.5L394.2,-55.5L396.2,-55.7L396.9,-56.6L400.4,-57.7L400.9,-57.8L401.2,-56.5L402.4,-56.1L405.4,-57.6L404.7,-59.1L405.4,-60.2L401.9,-66.8L401.8,-69.0L398.4,-69.4L396.9,-71.2L397.3,-76.6L391.5,-78.7L391.2,-79.2L391.8,-82.1L395.1,-85.3L397.3,-88.6L399.6,-90.2L401.6,-89.4L402.2,-87.9L403.2,-87.4L412.8,-89.7L413.5,-91.6L415.1,-93.1L417.1,-96.8L422.1,-99.3L425.1,-104.0L426.4,-107.4L430.3,-108.8L431.4,-110.0L431.1,-111.9L435.0,-116.0L437.7,-117.3L436.6,-118.7L437.3,-121.2L436.6,-123.4L437.0,-124.4L443.9,-127.9L444.0,-128.5L443.1,-129.3L438.2,-130.4L438.0,-132.8L435.2,-132.9L434.7,-134.9L432.0,-136.7L433.3,-139.6L431.8,-141.5L434.2,-143.5L434.2,-143.9L431.5,-144.2L431.1,-144.7L431.7,-146.1L430.1,-147.4L431.6,-149.9L434.7,-150.9L447.4,-148.5L450.4,-150.0L455.3,-150.6L459.0,-152.9L459.4,-154.0L466.2,-157.5L467.0,-157.0L468.4,-157.3L468.1,-155.3L470.9,-149.5L474.0,-148.7L476.7,-146.7L476.7,-146.1L474.5,-144.1L475.2,-139.5L478.2,-136.5L477.9,-135.5L478.8,-134.5L479.0,-130.5L476.3,-129.2L474.3,-131.4L471.5,-130.7L472.4,-127.9L474.6,-125.6L474.2,-123.7L475.2,-122.6L474.5,-121.2L474.7,-119.9L476.7,-120.0L477.1,-120.7L477.9,-120.6L481.4,-116.9L484.1,-116.7L487.3,-115.1L487.7,-113.1L491.5,-112.0L494.9,-110.1L495.1,-109.5L493.6,-109.3L489.6,-105.6L488.3,-102.8L488.1,-100.8L487.2,-99.9L486.4,-97.8L489.7,-95.5L491.3,-95.8L496.5,-93.0L497.8,-91.6L502.7,-88.8L504.3,-89.1L508.0,-87.0L510.1,-87.1L510.6,-85.7L515.6,-84.3L517.0,-85.2L520.4,-84.4L522.8,-85.4L527.5,-83.7L528.1,-81.4L532.1,-79.7L532.7,-78.9L533.6,-78.7L536.8,-79.5L538.1,-77.4L540.0,-77.8L546.3,-75.9L549.1,-77.0L549.8,-75.9L551.6,-75.2L552.7,-75.8L556.6,-75.9L557.9,-75.4L559.4,-78.5L557.8,-82.2L559.3,-87.7L558.9,-89.1L559.2,-89.5L563.2,-90.8L565.2,-90.1L565.6,-88.8L564.7,-85.7L564.9,-84.9L566.0,-83.8L564.6,-82.6L565.7,-80.7L568.3,-79.3L570.0,-79.6L573.9,-78.3L577.1,-78.8L579.1,-80.0L582.6,-78.9L587.6,-79.1L588.8,-79.8L591.0,-79.2L594.0,-79.7L594.6,-80.2L593.9,-81.9L594.7,-83.6L593.9,-85.1L591.7,-85.0L590.3,-86.0L590.7,-87.8L593.8,-87.6L594.9,-88.3L598.9,-88.9L600.2,-89.9L599.8,-90.6L600.3,-91.3L603.3,-92.9L605.2,-95.7L609.8,-96.6L611.7,-97.7L612.1,-98.6L617.6,-101.8L618.9,-100.6L624.5,-99.3L625.6,-100.9L630.3,-103.0L632.1,-101.2L633.2,-101.2L631.1,-99.7L631.2,-98.3L633.9,-99.5L635.2,-96.9L633.5,-95.5L632.5,-93.7L633.5,-93.3L635.4,-94.1L637.0,-93.3L639.7,-93.3L641.9,-92.0L642.1,-89.8L637.9,-86.3L638.1,-85.0L639.9,-82.0L638.6,-82.2L637.2,-83.7L636.0,-84.1L630.5,-83.0L629.1,-81.4L622.1,-77.4L621.4,-75.1L622.2,-72.4L621.1,-71.2L620.5,-69.3L617.2,-65.9L617.0,-64.9L618.3,-63.4L614.6,-56.9L613.1,-52.9L609.1,-54.1L607.4,-53.8L605.9,-54.6L606.7,-51.1L606.3,-46.2L605.7,-45.3L604.5,-45.3L603.7,-42.5L604.3,-38.1L603.4,-37.7L602.2,-35.9L600.5,-37.2L599.2,-35.8L598.4,-42.2L597.2,-44.4L596.2,-51.2L593.3,-51.2L593.4,-49.5L591.8,-47.6L591.7,-45.5L590.6,-44.8L589.6,-45.3L588.9,-46.8L588.3,-46.8L588.3,-45.7L587.8,-45.9L586.5,-50.2L587.1,-53.3L588.3,-54.8L589.7,-54.8L591.5,-55.8L592.9,-55.8L593.5,-57.2L594.9,-57.7L596.0,-61.9L598.0,-61.6L598.2,-62.5L594.4,-64.5L579.9,-64.4L574.5,-65.6L574.4,-71.5L573.0,-73.9L572.2,-73.7L571.9,-72.0L570.3,-72.1L568.7,-73.0L567.1,-75.7L566.3,-75.4L566.7,-74.3L565.4,-74.3L564.1,-74.6L563.6,-75.9L561.3,-77.1L561.1,-76.3L561.9,-75.9L561.9,-75.3L559.3,-72.8L558.7,-71.0L562.5,-67.8L564.9,-67.4L566.5,-65.3L565.3,-64.6L562.1,-64.7L560.8,-61.9L559.3,-62.2L558.2,-59.7L559.3,-58.4L560.6,-58.3L564.5,-56.5L564.3,-54.0L563.1,-51.1L564.6,-48.9L564.5,-47.3L566.3,-46.7L565.6,-45.4L567.4,-38.5L567.2,-35.4L566.5,-35.4L567.4,-32.9L566.1,-32.9L565.7,-33.7L564.7,-32.3L564.2,-33.6L564.6,-36.0L563.8,-37.1L563.2,-32.9L562.0,-32.5L560.6,-33.8L560.3,-32.6L559.1,-32.7L558.5,-33.2L559.7,-37.3L557.9,-38.4L557.5,-39.4L557.6,-38.3L559.4,-37.1L557.5,-34.4L555.1,-32.9L549.9,-31.5L547.7,-29.1L547.6,-28.0L548.8,-24.3L546.8,-21.8L546.7,-20.8L544.5,-19.5L543.4,-18.1L542.2,-18.5L542.8,-17.9L541.9,-17.1L536.2,-15.2L535.5,-15.3L536.0,-15.8L536.0,-16.8L535.5,-17.0L533.2,-15.8L532.6,-14.4L534.3,-15.1L535.0,-14.6L528.9,-10.1L522.9,-2.6L518.9,-0.6L514.8,3.5L507.2,8.1L506.5,9.6L507.2,11.0L506.3,13.0L501.8,15.0L497.6,15.0L496.2,18.3L494.8,20.2L493.4,20.1L493.0,19.2L491.8,18.9L488.6,20.6L486.9,24.1L486.5,26.3L487.6,31.7L487.0,34.1L488.7,40.6L487.4,38.6L486.5,39.5L489.1,41.7L488.0,47.8L484.7,54.1L483.8,57.8L484.1,59.0L483.2,60.2L484.2,60.0L484.6,61.2L484.5,69.1L481.8,69.0L479.8,69.7L479.3,71.7L476.4,75.9L476.3,76.9L477.2,78.0L479.5,78.4L480.7,79.3L476.8,78.6L471.8,80.1L469.7,82.0L468.5,86.5L463.6,89.3L461.7,88.7L459.6,87.2L455.0,81.9L452.9,76.9L452.2,72.7L453.1,73.6L453.4,76.1L454.1,76.2L453.1,72.7L451.7,71.2L451.8,70.2L447.5,59.7L445.7,56.7L442.8,53.5L440.5,48.9L438.9,44.3L438.0,39.0L435.4,31.5L431.5,26.3L430.2,23.4L431.4,23.4L429.9,21.8L430.5,21.1L429.1,20.6L427.3,17.5L426.0,13.9L424.4,3.4L421.9,-5.8L423.0,-9.2L422.7,-10.4L421.5,-8.8L421.2,-9.7L421.3,-11.7L422.9,-11.5L421.1,-12.3L421.2,-13.7L420.5,-14.2L420.0,-16.5L422.0,-24.1L421.3,-28.1L420.2,-28.6L419.6,-30.3L420.6,-31.2L419.5,-31.2L424.0,-33.8L418.9,-33.3L419.3,-34.9L420.3,-35.7L418.7,-35.8L419.0,-37.4L421.3,-38.1L415.6,-38.4L416.7,-37.7L416.5,-36.8L414.3,-34.4L415.9,-33.6L416.3,-31.8L414.1,-28.4L405.2,-24.6L402.5,-24.7L400.4,-25.6L396.3,-28.6L388.7,-35.9L386.7,-38.6L387.5,-39.9L389.5,-38.6L397.6,-41.2L400.6,-45.0L400.4,-45.8L399.0,-44.5L397.0,-44.5L393.0,-42.8L389.1,-43.6L383.8,-46.7L381.7,-50.1L385.0,-52.7L380.1,-50.4ZM16.7,-167.0L16.1,-167.3L16.5,-167.7ZM-46.0,-178.2L-45.1,-177.4L-45.8,-177.6L-46.6,-177.0L-48.3,-178.4L-47.8,-179.4ZM-23.3,-188.6L-22.3,-187.3L-16.9,-185.8L-15.5,-182.0L-12.7,-181.1L-12.8,-180.2L-13.5,-179.7L-16.1,-181.1L-17.6,-183.5L-21.1,-184.0L-21.4,-185.0L-25.7,-187.6L-28.1,-187.6L-24.7,-189.3ZM-22.0,-179.3L-23.0,-179.5L-22.6,-179.9ZM-26.5,-163.7L-26.6,-163.3L-27.5,-163.6L-27.8,-164.9L-27.4,-165.5L-26.1,-164.2ZM10.6,-157.2L10.2,-156.7L9.9,-157.1L9.6,-158.4L10.4,-160.1L11.0,-160.4L10.4,-158.7L11.1,-157.3ZM9.2,-170.6L8.3,-170.5L8.0,-171.8L8.7,-171.5ZM8.5,-168.5L9.5,-169.6L11.4,-170.1L12.2,-169.8ZM-4.1,-170.7L-4.9,-170.4L-5.7,-171.6L-4.3,-172.8L-3.7,-172.4ZM-6.5,-171.6L-7.8,-171.0L-7.7,-172.0L-6.5,-172.2ZM-4.7,-165.5L-5.1,-165.1L-5.7,-165.2L-5.3,-165.6L-5.3,-166.3ZM-5.6,-168.1L-6.7,-168.8L-6.3,-169.1L-5.3,-168.5ZM7.4,-178.3L9.4,-177.9L9.5,-177.4L7.6,-176.8L5.2,-177.5ZM0.3,-175.8L-0.0,-176.1L0.8,-176.7L1.9,-176.7L3.2,-177.1L2.7,-176.6ZM-1.3,-169.1L-2.3,-169.1L-1.3,-169.6L0.0,-170.4L0.6,-170.1ZM4.1,-167.3L3.0,-166.6L2.4,-167.4L3.0,-167.2L3.3,-167.7ZM-14.8,-176.2L-15.4,-175.8L-15.1,-177.1L-14.4,-176.8ZM-14.1,-174.1L-14.6,-173.8L-14.4,-175.1L-13.7,-174.7ZM-13.2,-168.9L-13.2,-168.2L-15.1,-167.9L-14.9,-168.5ZM-9.5,-175.4L-9.6,-174.5L-9.9,-174.7L-9.8,-175.6ZM-9.1,-177.8L-9.3,-177.2L-11.7,-179.7L-10.9,-179.9L-9.4,-179.1ZM-6.7,-176.4L-7.6,-175.9L-8.9,-176.8ZM-11.5,-170.3L-12.0,-171.0L-11.6,-171.2L-11.1,-170.5ZM-5.4,-174.8L-6.2,-174.7L-5.9,-175.6L-4.8,-175.2ZM-13.3,-172.1L-14.2,-172.2L-14.0,-172.7L-13.2,-172.7ZM16.6,-161.4L15.4,-161.6L15.8,-162.6L15.4,-163.5L16.3,-164.5L20.1,-165.9L18.6,-163.2L18.8,-162.6L17.7,-162.4ZM-19.3,-157.8L-16.5,-158.4L-16.2,-157.8L-17.0,-157.5L-15.7,-157.2L-15.5,-156.5L-14.8,-156.2L-11.5,-156.8L-4.7,-155.8L-2.4,-156.1L-2.3,-154.3L-1.9,-154.1L1.5,-154.9L2.6,-155.8L2.2,-153.4L1.5,-153.2L-10.8,-152.4L-11.6,-153.8L-13.8,-154.4L-21.7,-155.3L-21.9,-157.8L-20.9,-157.6L-20.4,-158.9ZM2.9,-213.4L5.2,-212.4L5.6,-210.6L3.0,-209.1L3.2,-207.0L1.0,-204.7L-8.1,-207.0L-10.9,-205.7L-13.7,-206.5L-17.3,-204.5L-20.1,-204.7L-20.3,-204.1L-19.1,-202.9L-19.5,-202.3L-19.2,-201.8L-16.1,-201.0L-14.9,-199.3L-18.8,-201.2L-20.4,-201.0L-18.3,-199.0L-18.0,-198.2L-18.5,-197.7L-21.0,-200.0L-23.2,-200.4L-23.5,-200.0L-23.1,-199.0L-20.9,-197.6L-21.4,-197.3L-23.4,-197.9L-24.2,-199.9L-27.9,-201.6L-28.3,-202.4L-27.7,-203.3L-30.3,-202.5L-30.7,-198.3L-28.5,-196.2L-27.2,-194.1L-24.9,-192.2L-24.0,-190.6L-25.6,-189.9L-25.5,-191.3L-27.7,-191.8L-28.4,-191.3L-28.0,-190.5L-27.3,-189.3L-26.4,-189.3L-28.8,-188.1L-30.9,-187.8L-24.7,-186.0L-23.7,-184.7L-21.9,-184.4L-20.8,-183.2L-18.3,-182.5L-17.5,-177.4L-18.3,-177.1L-22.5,-180.3L-26.7,-178.9L-25.7,-178.2L-25.2,-176.6L-23.4,-176.2L-22.6,-175.0L-25.5,-174.0L-26.9,-175.3L-29.0,-176.3L-29.5,-175.9L-26.5,-169.7L-26.6,-167.8L-25.6,-166.0L-27.2,-166.8L-29.5,-169.1L-30.5,-169.0L-31.6,-167.1L-31.6,-166.0L-32.6,-166.6L-32.6,-168.3L-33.9,-169.9L-35.3,-171.3L-36.4,-170.9L-37.0,-168.6L-38.4,-169.8L-39.8,-171.7L-39.8,-172.8L-38.8,-173.8L-38.9,-174.5L-39.9,-175.9L-43.8,-178.7L-41.4,-181.8L-39.1,-181.6L-37.6,-183.0L-36.4,-182.9L-27.7,-179.6L-28.0,-180.5L-25.9,-180.7L-25.3,-181.2L-32.2,-183.9L-33.1,-183.2L-36.3,-183.7L-40.7,-182.9L-42.0,-184.4L-42.3,-183.4L-43.4,-183.1L-45.1,-185.9L-47.0,-187.3L-47.1,-187.9L-47.0,-188.4L-46.0,-188.5L-44.0,-188.1L-43.6,-188.3L-43.9,-189.3L-47.0,-189.1L-51.3,-191.9L-52.3,-193.9L-54.0,-195.4L-51.8,-195.1L-51.2,-196.2L-50.6,-196.2L-51.2,-197.8L-48.1,-199.1L-46.7,-202.0L-45.4,-202.4L-44.7,-203.6L-45.3,-205.6L-41.4,-206.2L-39.8,-205.8L-38.0,-206.6L-36.1,-208.2L-31.6,-208.1L-29.5,-208.6L-28.9,-210.0L-21.3,-210.5L-17.9,-211.1L-17.5,-211.7L-13.3,-212.0L-12.6,-211.0L-11.0,-210.2L-9.1,-210.3L-6.7,-209.2L-0.7,-209.8L1.2,-210.5L0.8,-213.3ZM-114.4,142.5L-115.4,145.9L-114.8,149.7L-115.0,150.8L-109.3,149.2L-106.4,149.7L-104.1,153.9L-105.1,156.4L-107.2,157.2L-108.4,158.8L-109.3,163.8L-107.4,164.4L-106.1,165.8L-104.7,166.2L-103.7,167.2L-104.5,179.0L-105.7,180.0L-106.5,182.0L-106.2,183.2L-108.1,184.4L-109.0,184.2L-109.1,183.0L-110.4,181.2L-112.8,183.6L-117.1,182.8L-118.9,179.4L-120.7,178.4L-122.1,179.4L-121.7,181.0L-122.0,183.0L-125.4,183.7L-126.4,183.1L-128.5,183.6L-129.5,183.1L-130.2,187.5L-129.2,187.7L-128.2,188.8L-128.6,190.6L-126.6,191.9L-127.5,193.8L-127.1,195.0L-128.8,195.1L-130.5,193.7L-132.4,194.8L-133.8,197.2L-140.9,189.1L-146.2,184.7L-146.5,184.2L-144.0,185.3L-143.4,184.9L-147.4,183.3L-148.2,181.5L-150.3,179.1L-148.6,179.7L-148.6,179.1L-150.6,178.4L-152.7,173.8L-150.1,176.7L-148.3,176.4L-148.5,176.0L-150.3,175.6L-149.9,173.9L-151.2,174.4L-152.4,173.7L-155.7,167.3L-154.6,168.4L-153.5,168.2L-151.8,167.2L-150.3,165.2L-149.9,162.5L-150.3,159.4L-149.8,158.9L-148.8,160.6L-145.8,161.6L-145.7,160.9L-144.0,160.2L-146.0,160.3L-148.1,159.3L-150.1,157.0L-150.0,156.5L-148.5,156.0L-147.4,156.8L-147.7,152.7L-146.1,152.3L-144.8,153.4L-143.7,153.0L-132.0,153.0L-131.9,141.3L-115.0,141.7ZM172.6,278.8L172.1,278.9L171.6,278.1L171.4,276.3L171.8,275.9L173.0,276.8ZM268.2,354.1L266.0,354.2L264.3,353.5L263.1,351.5L263.8,350.1L265.0,349.8L266.9,350.2L268.5,352.2ZM94.7,33.7L93.8,25.8L94.7,24.7L98.2,15.3L98.0,12.4L98.8,10.8L99.1,8.5L102.7,8.4L103.9,6.1L106.0,4.9L110.3,3.7L113.5,-0.0L117.3,8.2L119.7,18.7L120.8,19.9L121.6,22.2L122.7,22.9L124.1,25.9L124.8,22.8L126.4,24.0L126.8,25.6L127.8,26.9L130.9,27.6L133.2,29.3L136.6,30.4L140.9,36.2L146.2,39.7L147.6,43.1L148.7,43.0L150.6,44.8L151.2,46.2L152.7,46.7L153.0,45.9L153.7,46.6L154.0,47.6L151.8,48.4L150.9,50.2L150.0,50.6L148.3,49.4L147.4,49.8L145.2,47.1L143.6,46.1L141.9,43.3L138.3,40.5L133.4,35.0L127.3,31.9L125.1,32.0L121.8,31.2L118.8,31.7L117.2,30.3L115.3,31.7L111.9,32.1L110.0,30.2L107.0,28.3L104.1,34.7L103.6,34.6L101.3,31.9L100.2,32.3L99.2,33.6L97.3,33.2ZM126.7,17.3L127.0,18.1L126.0,17.6ZM127.3,20.7L127.6,21.2L128.2,20.7L129.7,21.3L129.6,21.8L125.8,21.5L125.5,20.7L126.2,21.1L126.6,20.9L125.5,20.3L126.0,19.5L125.6,19.0L126.9,19.5ZM-155.4,128.2L-153.8,128.2L-153.5,129.4L-155.7,133.0L-157.7,132.6L-157.8,130.9L-156.8,130.7L-155.9,128.4ZM-132.0,142.5L-132.0,153.0L-143.7,153.0L-144.8,153.4L-146.1,152.3L-147.7,152.7L-149.5,151.7L-148.5,149.1L-147.3,147.9L-145.7,144.7L-145.8,141.3L-144.2,142.5ZM97.8,-36.0L48.9,-36.0L49.4,-37.3L48.6,-37.8L46.9,-36.0L-9.2,-36.0L-9.2,-100.6L-11.7,-109.8L-9.3,-114.1L-10.3,-120.0L-7.6,-122.9L-7.0,-121.8L-5.6,-121.6L-1.0,-122.6L11.2,-120.4L13.9,-118.9L16.5,-118.8L17.7,-117.9L22.6,-117.5L27.6,-115.5L30.9,-116.3L35.4,-119.0L38.0,-119.3L39.6,-121.1L44.3,-122.1L41.1,-120.8L43.6,-121.0L45.0,-121.2L45.7,-122.4L49.7,-121.1L53.0,-121.9L55.2,-120.1L53.0,-121.3L51.9,-119.6L54.1,-119.0L54.9,-117.8L56.5,-118.8L56.3,-119.7L59.4,-117.6L64.2,-118.5L64.7,-117.8L69.0,-118.2L73.8,-119.9L80.1,-103.3L78.6,-101.4L77.6,-96.8L76.0,-93.2L75.6,-90.1L74.0,-87.9L69.8,-90.4L65.2,-95.1L64.2,-98.8L60.5,-103.7L59.1,-107.8L58.3,-107.3L58.4,-106.7L57.2,-104.7L59.4,-101.9L59.7,-98.9L62.1,-95.1L67.9,-89.1L67.9,-86.5L70.6,-82.7L71.6,-77.8L77.1,-69.2L82.7,-58.3L85.3,-55.4L88.1,-53.4L85.9,-53.3L85.5,-52.0L85.7,-49.0L87.3,-44.5L89.2,-42.7L92.1,-41.7L93.7,-39.5L97.5,-36.9ZM155.2,58.5L152.3,63.0L149.0,62.3L143.6,63.5L142.2,63.2L142.1,56.8L148.0,49.3L150.3,50.6L151.8,48.4L154.0,47.6L156.2,50.7L156.4,53.2L153.4,55.5L151.2,56.3L149.8,58.0L148.7,57.9L149.2,58.5L153.4,57.7ZM72.0,-153.6L70.8,-153.8L67.3,-153.0L66.8,-154.3L64.7,-154.6L62.3,-153.8L60.4,-154.5L61.9,-154.6L62.5,-156.5L68.5,-156.2L77.0,-159.0L71.5,-155.6L71.2,-154.8ZM60.4,-154.5L62.3,-153.8L64.7,-154.6L66.5,-154.5L67.3,-153.0L70.8,-153.8L72.0,-153.6L72.4,-152.9L69.3,-152.7L66.7,-150.8L64.0,-150.3L63.1,-149.1L62.5,-149.2L61.8,-150.0L60.2,-149.8L58.0,-150.6L56.9,-152.6L56.7,-153.7L57.5,-153.4L59.0,-154.4ZM42.8,235.7L26.1,238.4L26.4,239.3L25.8,241.1L21.6,245.0L23.7,250.5L23.7,258.0L22.9,259.2L21.2,265.3L22.3,268.3L27.6,273.1L31.4,273.8L31.6,272.1L34.2,271.4L34.0,282.9L32.9,282.7L32.7,281.7L32.0,281.2L28.0,282.6L26.5,281.8L24.1,277.8L23.0,277.5L21.7,274.7L13.8,271.8L10.4,266.2L9.4,266.5L8.5,269.1L7.4,269.7L0.2,269.0L-4.4,267.8L-5.9,266.6L-6.4,262.9L-12.0,264.2L-13.3,264.9L-14.6,264.8L-15.0,264.3L-14.4,263.3L-14.7,262.2L-16.8,261.2L-17.3,260.0L-18.3,259.8L-19.5,261.1L-22.8,260.7L-26.3,261.8L-30.9,261.5L-33.5,262.7L-34.4,260.0L-33.2,258.2L-33.5,254.3L-34.2,252.4L-37.7,247.2L-36.9,240.2L-36.9,237.1L-37.8,235.0L-37.4,228.8L-38.0,227.8L-48.5,227.5L-49.2,226.6L-48.7,224.3L-55.1,224.9L-57.1,225.3L-58.2,226.3L-58.7,229.2L-59.7,230.9L-59.9,233.7L-63.5,234.0L-66.9,233.4L-71.9,235.0L-75.8,234.9L-81.1,227.3L-81.7,224.4L-83.3,221.6L-83.7,217.5L-86.1,215.1L-114.3,214.9L-117.0,214.5L-121.4,216.0L-122.3,215.9L-124.1,213.8L-121.5,213.3L-121.3,208.3L-121.9,207.6L-118.5,204.6L-116.2,203.4L-113.6,205.5L-111.1,204.5L-110.5,202.1L-108.5,202.4L-104.8,200.7L-103.9,202.0L-104.7,203.3L-104.3,205.5L-101.6,205.9L-96.6,200.8L-93.6,198.3L-91.1,197.4L-90.1,195.9L-88.7,193.2L-88.0,189.3L-88.1,181.6L-85.1,178.6L-82.1,173.0L-78.5,171.0L-74.2,166.9L-74.5,164.5L-73.0,159.9L-72.9,151.9L-71.5,148.2L-71.3,143.9L-66.4,132.3L-66.3,126.4L-66.9,123.7L-66.7,122.9L-64.5,121.3L-62.4,118.0L-60.1,116.4L-56.8,115.9L-52.0,118.5L-49.0,121.8L-40.2,123.8L-38.8,123.5L-32.2,124.8L-29.6,120.7L-28.2,119.5L-26.0,119.4L-23.2,120.0L-15.1,117.1L-11.1,117.6L-8.4,117.3L-6.8,116.8L-5.4,114.7L-4.3,114.2L7.4,116.4L10.0,115.2L12.6,116.0L16.1,120.2L19.7,122.8L21.8,123.1L24.5,121.5L29.0,122.5L31.2,120.5L33.1,120.7L37.8,126.2L40.6,127.5L41.3,129.4L42.8,129.4L44.1,130.8L42.8,134.6L43.7,136.0L42.6,139.9L44.7,140.4L47.5,142.7L47.3,143.6L44.5,146.9L40.3,150.9L38.9,151.3L37.6,153.2L35.5,154.6L35.4,157.5L33.5,161.1L32.1,170.8L32.2,174.5L30.2,175.7L28.8,177.5L28.2,178.7L28.2,181.8L25.7,184.0L26.3,186.1L27.1,186.5L27.1,187.2L29.0,189.5L28.9,196.5L30.6,202.0L29.9,206.1L32.5,213.5L31.3,216.2L31.9,218.8L33.4,221.6L37.9,225.3ZM-133.8,197.2L-132.9,195.2L-130.5,193.7L-128.8,195.1L-127.1,195.0L-127.5,193.8L-126.6,191.9L-128.6,190.6L-128.2,188.8L-129.2,187.7L-130.2,187.5L-129.5,183.1L-128.5,183.6L-126.4,183.1L-125.4,183.7L-122.0,183.0L-121.7,181.0L-122.1,179.4L-120.7,178.4L-118.9,179.4L-117.1,182.8L-112.8,183.6L-110.4,181.2L-109.1,183.0L-109.0,184.2L-108.1,184.4L-106.2,183.2L-106.5,182.0L-105.7,180.0L-104.5,179.0L-103.7,167.2L-104.7,166.2L-106.1,165.8L-107.4,164.4L-109.3,163.8L-108.4,158.8L-107.2,157.2L-105.1,156.4L-104.1,153.9L-106.4,149.7L-109.3,149.2L-115.0,150.8L-114.8,149.7L-115.4,145.9L-114.4,142.5L-103.6,142.6L-102.8,142.2L-101.1,143.3L-100.1,143.3L-99.9,143.9L-97.6,143.7L-95.9,144.5L-92.3,144.8L-89.5,146.9L-88.8,146.5L-89.3,143.0L-85.8,136.5L-85.7,133.5L-84.5,130.5L-79.0,129.6L-77.1,128.8L-70.5,130.5L-67.7,129.4L-66.5,130.7L-66.4,132.3L-71.3,143.9L-71.5,148.2L-72.9,151.9L-73.0,159.9L-74.5,164.5L-74.2,166.9L-78.5,171.0L-82.1,173.0L-85.1,178.6L-88.1,181.6L-88.0,189.3L-88.7,193.2L-91.1,197.4L-94.3,198.8L-101.6,205.9L-104.3,205.5L-104.7,203.3L-103.9,202.0L-104.8,200.7L-108.5,202.4L-110.5,202.1L-111.1,204.5L-113.3,205.5L-115.8,203.4L-116.3,203.7L-118.8,201.9L-122.5,203.6L-123.2,204.9L-124.2,205.0L-125.8,207.0L-127.6,204.8L-128.0,203.1ZM166.3,270.7L166.5,273.2L164.0,271.5L165.4,271.5ZM160.1,272.8L160.7,273.3L159.0,273.1L158.7,272.6L159.3,272.3ZM157.2,269.1L155.0,267.8L155.5,264.5L156.5,264.7L156.4,266.5ZM-18.2,-13.5L-18.3,20.5L-26.1,20.7L-27.6,22.2L-27.6,25.5L-29.1,27.0L-30.0,29.5L-32.6,31.0L-31.2,34.5L-34.4,36.8L-35.0,37.8L-33.9,42.0L-36.1,44.0L-37.6,46.9L-36.6,47.9L-33.9,47.6L-32.8,48.1L-31.7,53.4L-30.8,54.1L-30.7,57.8L-27.7,59.9L-28.3,63.7L-31.6,63.0L-35.6,64.6L-38.1,66.2L-38.6,66.8L-38.9,69.4L-40.2,70.1L-41.4,72.0L-42.6,72.2L-47.0,77.3L-50.9,79.9L-53.3,79.8L-57.0,80.8L-61.7,80.9L-63.4,81.6L-64.0,82.5L-62.0,84.1L-66.0,88.2L-66.9,89.6L-75.2,90.1L-82.6,94.0L-84.0,93.1L-85.1,91.2L-86.4,92.0L-86.6,92.8L-90.4,94.4L-94.7,94.3L-94.0,91.9L-95.0,91.3L-98.0,85.0L-105.0,79.2L-108.2,74.8L-105.8,72.2L-100.5,72.5L-93.1,71.9L-96.5,68.8L-97.8,66.2L-98.7,62.0L-97.9,58.1L-98.3,55.4L-100.1,51.6L-100.4,49.5L-101.1,48.1L-103.1,46.6L-103.8,44.8L-107.4,44.3L-111.5,38.7L-113.0,32.6L-104.7,20.2L-94.7,9.8L-92.4,-17.1L-90.3,-21.1L-93.7,-24.6L-94.1,-25.9L-93.5,-26.6L-97.4,-31.7L-97.4,-35.3L-99.2,-45.0L-90.1,-49.0ZM-16.7,84.0L-16.0,84.5L-16.1,86.7L-15.4,87.4L-10.3,88.8L-7.2,91.7L-6.8,92.5L-7.4,94.0L-6.5,95.2L-1.0,98.4L3.3,102.3L2.8,103.9L4.6,107.4L6.5,108.0L10.3,110.5L11.1,111.9L11.3,114.4L12.6,116.0L9.6,115.2L7.4,116.4L-4.3,114.2L-5.4,114.7L-6.8,116.8L-8.4,117.3L-11.1,117.6L-15.1,117.1L-23.2,120.0L-26.0,119.4L-28.2,119.5L-29.6,120.7L-32.2,124.8L-38.8,123.5L-40.2,123.8L-49.0,121.8L-52.0,118.5L-55.7,116.2L-58.5,115.9L-62.4,118.0L-64.5,121.3L-66.7,122.9L-66.5,130.7L-67.7,129.4L-70.5,130.5L-76.6,128.8L-84.5,130.5L-85.7,133.5L-85.8,136.5L-88.3,141.6L-89.4,135.8L-93.8,132.0L-98.4,126.5L-98.7,125.9L-97.8,125.4L-98.8,122.8L-101.4,120.6L-102.2,115.4L-102.9,114.5L-102.4,109.2L-103.5,108.7L-104.1,107.7L-103.4,106.5L-101.3,105.5L-97.1,97.1L-94.7,94.3L-90.4,94.4L-86.6,92.8L-86.4,92.0L-85.1,91.2L-84.7,92.3L-82.9,94.0L-75.2,90.1L-66.9,89.6L-62.0,84.1L-64.0,82.0L-61.7,80.9L-57.0,80.8L-53.3,79.8L-50.9,79.9L-47.0,77.3L-42.6,72.2L-41.4,72.0L-40.2,70.1L-38.9,69.4L-38.4,66.5L-35.6,64.6L-31.6,63.0L-28.3,63.7L-24.2,68.5L-21.2,73.6L-21.4,77.9L-22.8,80.0L-22.0,81.5L-22.2,82.7L-20.9,83.4ZM-157.0,119.2L-154.8,115.2L-153.0,108.7L-149.6,105.1L-147.1,103.2L-146.0,101.2L-142.7,99.0L-142.1,100.0L-139.7,100.0L-138.5,98.4L-134.9,101.3L-134.0,103.9L-132.9,103.9L-130.7,102.6L-129.8,100.0L-127.2,98.0L-128.1,96.5L-125.9,93.7L-123.9,87.5L-122.4,84.6L-120.8,84.4L-119.0,82.6L-117.6,77.2L-115.2,75.9L-114.6,71.7L-113.3,70.5L-112.2,66.6L-110.7,64.1L-108.2,61.1L-106.2,60.6L-102.8,58.2L-102.4,52.6L-103.3,51.3L-106.2,50.5L-107.4,44.3L-103.8,44.8L-103.1,46.6L-101.1,48.1L-100.4,49.5L-100.1,51.6L-98.3,55.4L-97.9,58.1L-98.7,62.0L-97.8,66.2L-96.5,68.8L-93.1,71.9L-100.5,72.5L-105.8,72.2L-108.2,74.8L-105.0,79.2L-98.0,85.0L-95.0,91.3L-94.0,91.9L-94.2,93.6L-97.1,97.1L-98.2,99.8L-101.3,105.5L-104.0,107.2L-103.5,108.7L-102.4,109.2L-102.9,114.5L-102.2,115.4L-101.4,120.6L-98.4,123.4L-97.8,125.7L-98.7,125.9L-97.8,127.6L-92.0,133.9L-90.9,134.1L-89.4,135.8L-88.3,141.6L-89.3,143.0L-88.8,146.5L-89.5,146.9L-92.3,144.8L-95.9,144.5L-97.6,143.7L-99.9,143.9L-100.1,143.3L-101.1,143.3L-102.8,142.2L-103.6,142.6L-114.4,142.5L-115.0,141.7L-130.0,141.3L-131.9,141.3L-132.0,142.5L-144.2,142.5L-145.8,141.3L-144.5,134.3L-144.8,132.8L-146.9,130.2L-146.1,129.4L-147.2,129.5L-148.0,127.8L-147.3,127.2L-146.3,127.3L-147.2,126.3L-146.8,125.5L-148.6,125.4L-148.5,126.0L-149.2,126.7L-153.0,125.2L-153.7,121.0L-155.1,120.8L-156.1,120.0L-155.8,121.0L-156.8,121.3ZM-6.7,322.1L-6.8,323.7L-0.5,332.4L-0.4,333.7L1.5,337.8L6.1,341.0L10.6,342.9L11.3,344.1L11.5,346.3L15.3,346.8L15.0,351.6L18.1,356.0L27.2,358.2L27.4,360.2L29.1,360.7L30.3,361.7L28.2,361.9L25.6,364.3L21.4,365.3L19.9,366.2L15.8,370.8L9.8,374.2L8.9,375.3L7.5,380.2L3.6,383.5L-0.8,384.7L-3.1,390.9L-4.3,393.0L-10.2,394.3L-13.0,394.0L-15.0,393.7L-16.3,392.7L-19.0,392.4L-23.5,389.6L-26.5,389.8L-28.1,391.1L-30.6,397.2L-34.0,399.5L-35.2,401.2L-37.9,402.4L-38.7,403.6L-47.8,403.4L-48.4,400.0L-46.7,397.5L-46.9,395.2L-50.1,388.3L-54.2,385.0L-54.2,360.0L-45.3,360.0L-45.2,326.9L-25.0,324.0L-24.3,324.2L-21.6,328.1L-15.8,324.2L-14.8,323.8L-13.2,324.5L-9.8,322.4ZM221.5,-70.9L221.2,-70.3L220.2,-71.7L220.2,-74.1L221.3,-74.2ZM-116.3,203.7L-118.5,204.6L-121.9,207.6L-121.3,208.3L-121.6,213.5L-124.1,213.8L-124.4,211.8L-124.4,209.9L-125.8,207.0L-124.2,205.0L-123.2,204.9L-122.5,203.6L-118.8,201.9ZM-18.3,259.8L-17.6,264.6L-18.3,266.7L-18.1,273.8L-19.1,277.2L-18.3,278.9L-36.2,279.0L-36.2,305.6L-35.6,308.4L-34.6,311.4L-23.6,320.8L-41.2,324.0L-44.0,323.6L-47.3,324.2L-50.5,323.0L-63.4,322.2L-65.5,321.3L-68.4,318.6L-107.8,318.7L-112.7,315.4L-116.1,314.7L-121.1,316.9L-125.9,316.5L-128.3,317.2L-127.6,312.3L-128.2,304.5L-126.9,303.5L-125.9,301.6L-121.0,282.9L-117.9,279.2L-117.1,277.0L-113.2,274.7L-111.6,272.6L-109.9,268.3L-109.5,260.4L-114.4,250.4L-117.0,242.9L-116.2,242.1L-116.5,243.1L-113.8,240.2L-113.6,237.3L-118.2,227.1L-118.6,224.6L-121.3,221.3L-123.3,216.8L-118.9,216.0L-115.3,214.7L-87.2,214.8L-85.2,215.7L-83.7,217.5L-83.3,221.6L-81.7,224.4L-81.1,227.3L-75.8,234.9L-71.9,235.0L-66.9,233.4L-63.5,234.0L-59.9,233.7L-59.7,230.9L-58.7,229.2L-58.2,226.3L-57.1,225.3L-55.1,224.9L-48.7,224.3L-49.2,226.6L-48.5,227.5L-37.7,228.0L-37.5,230.4L-38.0,232.8L-36.9,237.1L-36.9,240.2L-37.7,247.2L-34.2,252.4L-33.5,254.3L-33.2,258.2L-34.4,260.0L-34.0,262.1L-33.2,262.8L-30.9,261.5L-26.3,261.8L-22.8,260.7L-19.5,261.1ZM-156.8,-170.4L-156.6,-169.5L-158.0,-168.8L-160.1,-166.7L-158.9,-165.3L-159.8,-160.2L-158.4,-154.8L-159.5,-152.8L-159.8,-150.6L-160.9,-149.1L-163.4,-147.7L-164.3,-146.3L-166.4,-144.7L-166.5,-142.5L-164.4,-137.4L-161.0,-135.5L-160.1,-134.3L-159.0,-130.9L-152.6,-126.7L-148.3,-110.1L-150.2,-109.0L-147.2,-104.7L-145.7,-100.6L-144.8,-88.1L-146.3,-84.0L-144.9,-79.6L-145.0,-77.7L-145.3,-77.0L-148.6,-75.0L-149.2,-73.3L-144.0,-66.0L-143.7,-63.5L-141.7,-59.3L-140.4,-58.4L-137.8,-59.0L-130.4,-56.8L-126.3,-49.7L-166.7,-25.9L-181.5,-13.3L-204.1,-8.9L-206.0,-10.4L-204.7,-12.7L-205.2,-16.1L-205.8,-16.7L-212.3,-18.6L-214.0,-20.2L-218.2,-21.0L-219.5,-23.0L-223.5,-25.4L-223.7,-27.9L-279.4,-64.2L-312.1,-83.6L-312.1,-96.2L-303.2,-102.1L-301.4,-102.5L-298.4,-104.5L-293.7,-104.1L-292.7,-104.9L-292.3,-106.4L-288.0,-106.5L-283.0,-107.6L-280.6,-109.5L-278.7,-112.2L-272.9,-114.3L-269.9,-116.2L-267.0,-116.7L-266.6,-117.6L-268.5,-118.8L-268.1,-120.3L-268.6,-122.6L-267.9,-123.2L-264.9,-123.3L-261.1,-124.5L-260.4,-126.4L-259.8,-126.7L-256.0,-127.2L-245.0,-127.0L-245.2,-129.0L-243.6,-130.2L-247.0,-133.1L-249.1,-137.9L-248.7,-140.1L-249.4,-142.0L-249.4,-145.6L-250.1,-147.3L-249.6,-148.2L-250.6,-149.5L-250.2,-150.8L-253.2,-152.7L-254.0,-153.9L-251.2,-153.8L-249.1,-154.6L-246.0,-156.3L-243.8,-158.2L-237.8,-160.8L-234.4,-160.5L-231.2,-163.5L-222.7,-166.7L-210.7,-167.4L-207.2,-169.1L-202.3,-169.2L-200.0,-170.1L-191.2,-170.1L-186.3,-167.8L-179.4,-169.8L-175.6,-171.8L-174.8,-171.0L-171.6,-170.3L-168.8,-170.7L-169.2,-171.8L-167.1,-171.5L-162.8,-169.7ZM364.7,-174.1L369.6,-174.0L371.9,-172.9L373.6,-173.4L375.3,-173.0L376.5,-171.6L378.6,-170.5L386.2,-174.0L389.7,-172.1L390.7,-172.9L390.6,-174.6L391.4,-176.0L394.4,-176.5L396.4,-175.9L397.7,-176.2L398.2,-177.0L397.9,-179.3L399.7,-180.7L401.5,-183.0L403.9,-184.1L407.3,-182.8L408.0,-181.5L407.5,-179.3L410.2,-179.2L408.9,-172.1L409.8,-169.6L411.0,-168.3L412.2,-168.2L417.2,-170.8L419.9,-171.3L422.0,-173.4L426.4,-175.2L429.5,-174.8L428.9,-173.2L433.5,-174.0L435.1,-174.8L437.9,-174.6L440.0,-173.1L438.5,-173.6L435.3,-172.4L436.9,-171.2L432.3,-169.4L429.9,-170.0L419.6,-169.5L415.4,-168.3L411.9,-165.9L410.6,-165.9L409.9,-165.4L406.7,-162.4L408.8,-160.5L410.1,-157.9L410.4,-156.7L409.9,-155.6L410.6,-154.6L404.7,-148.8L405.8,-147.3L405.4,-144.4L401.9,-143.6L398.9,-143.7L395.9,-144.5L395.0,-144.1L394.8,-143.1L397.2,-140.6L398.5,-138.3L398.3,-137.6L395.3,-136.0L392.1,-135.6L391.5,-135.2L391.1,-133.5L389.2,-129.9L389.5,-125.4L386.7,-123.0L385.0,-122.8L383.4,-124.2L382.0,-123.8L379.4,-124.2L378.1,-123.1L374.2,-121.6L375.6,-120.1L371.6,-119.0L368.3,-119.8L363.6,-116.2L362.6,-113.5L362.7,-110.9L362.1,-109.0L362.8,-107.7L361.6,-106.5L351.8,-104.0L345.5,-103.9L342.9,-102.5L338.1,-103.5L328.3,-102.7L313.6,-106.7L322.3,-116.2L321.8,-119.6L320.9,-120.4L313.4,-121.5L313.5,-128.2L311.0,-135.5L311.0,-136.2L314.2,-139.5L310.6,-140.8L310.4,-144.9L311.8,-146.8L314.0,-146.9L312.5,-148.7L314.5,-149.9L315.7,-151.7L316.3,-153.8L315.9,-155.5L316.7,-155.8L317.5,-157.6L317.3,-158.6L318.1,-158.7L320.6,-156.9L323.8,-157.0L326.8,-154.5L328.2,-155.3L330.2,-155.3L333.5,-157.0L334.5,-159.1L334.2,-160.6L342.1,-162.1L342.8,-163.0L346.6,-165.1L349.3,-172.2L351.8,-173.1L356.0,-173.3L356.8,-175.2L357.9,-176.1L361.0,-174.7Z", "land": "M243.8,12.2L239.2,13.8L236.9,15.4L235.6,18.4L235.9,21.1L230.4,24.0L220.7,26.7L217.5,28.3L215.1,28.5L210.1,30.3L207.4,31.9L206.4,33.6L204.0,35.5L200.5,36.0L197.9,35.6L194.7,37.3L192.7,39.0L187.1,40.8L176.9,42.0L174.5,44.4L172.5,45.0L171.3,46.7L168.8,47.1L167.6,46.6L165.2,48.0L162.0,48.5L158.7,47.3L157.4,47.7L157.3,46.4L155.1,42.6L155.5,38.8L155.1,37.3L153.8,35.9L153.8,34.2L152.3,28.6L152.4,27.6L151.7,25.8L149.9,24.9L150.3,24.1L151.1,24.6L151.2,24.1L150.4,21.1L151.6,17.7L151.2,14.7L153.3,13.0L154.7,11.1L154.0,9.5L154.4,7.2L155.1,6.6L154.7,5.8L156.8,4.4L161.2,6.1L163.4,5.4L172.3,5.2L175.8,6.3L182.8,6.9L186.5,6.6L188.8,9.4L190.3,9.5L193.0,8.0L194.2,5.0L199.5,-1.4L207.4,-5.2L233.8,-9.0L240.6,6.3L241.2,6.6ZM149.3,24.3L148.9,24.1L149.1,23.3L149.4,23.1L149.6,23.7ZM150.8,38.7L150.2,38.9L150.6,38.2L151.1,38.1ZM151.1,36.3L150.2,35.9L150.9,35.4ZM249.9,48.3L253.7,48.0L256.6,49.0L253.2,50.8L249.5,51.1L248.4,50.9L245.8,49.2L247.8,47.6ZM71.1,171.0L43.3,171.0L41.4,171.6L39.2,171.7L36.9,174.3L35.4,175.2L34.4,174.0L32.2,174.5L32.1,170.8L33.5,161.1L35.4,157.5L35.5,154.6L37.6,153.2L38.9,151.3L40.3,150.8L47.3,143.6L47.5,142.7L46.6,141.6L44.7,140.4L42.6,139.9L43.7,136.0L42.8,134.6L44.2,131.3L43.5,130.6L44.4,129.3L46.4,127.9L49.9,128.9L52.2,127.8L53.5,129.5L55.2,130.3L57.0,128.6L61.5,127.8L63.0,127.1L64.4,128.0L67.4,128.2L71.8,124.0L73.2,127.0L73.7,127.2L73.5,127.7L75.9,129.1L75.6,131.3L76.0,133.5L76.7,133.9L77.3,135.7L78.7,136.6L80.1,139.7L80.8,146.5L79.0,149.6L79.2,150.8L76.3,152.6L75.7,154.2L73.4,156.6L71.5,160.4ZM121.5,217.6L122.2,219.5L121.6,220.1L120.8,219.1L119.2,218.5L118.6,217.6L118.7,215.4L119.8,213.5L120.9,217.0ZM124.8,206.2L124.7,209.3L123.7,211.0L122.8,210.3L123.3,208.0L123.1,206.3ZM62.3,246.7L57.9,244.4L53.5,243.5L53.3,242.5L51.1,242.2L50.0,241.2L49.8,240.4L48.2,239.5L45.7,239.5L44.7,239.0L43.5,237.5L37.9,225.3L33.4,221.6L31.9,218.8L31.3,216.2L32.5,213.5L29.9,206.1L30.6,202.0L33.5,202.1L35.5,200.8L37.3,198.8L39.8,194.3L41.7,192.8L41.6,192.1L43.1,191.5L43.3,190.8L43.0,188.9L40.1,188.0L39.8,187.4L40.3,186.2L39.8,185.8L40.8,183.8L43.5,183.0L43.9,181.3L43.4,179.7L43.3,176.1L40.6,172.9L40.3,171.7L43.3,171.0L71.8,171.0L104.8,189.4L105.2,191.2L104.6,193.6L119.0,204.2L116.8,211.7L115.4,214.9L115.2,216.6L115.9,219.0L118.1,221.0L119.6,223.3L121.2,223.9L121.9,225.2L119.6,229.7L119.6,232.1L120.0,231.7L120.9,232.3L121.0,234.1L119.7,238.0L120.4,240.5L121.4,241.8L121.1,242.5L122.8,244.7L122.6,246.7L124.0,251.2L123.5,252.0L124.8,252.2L125.8,253.4L126.7,253.4L129.5,255.2L130.2,256.2L125.9,259.4L119.9,262.1L115.1,263.1L112.4,264.7L109.6,263.5L107.3,263.7L105.5,266.2L102.4,267.4L98.8,266.1L96.1,267.2L92.7,267.4L89.2,265.1L88.1,265.1L86.1,266.4L80.6,266.2L80.0,264.5L79.0,264.1L77.5,261.7L78.0,259.1L77.2,256.7L77.1,254.2L76.7,252.3L74.9,249.6L72.0,247.5L71.6,248.9L71.0,249.0L69.3,248.4L66.8,248.5L66.0,247.7ZM123.4,233.8L122.4,233.4L124.6,231.6L125.2,230.8L125.1,231.6L124.4,233.1ZM32.2,174.5L34.4,174.0L35.4,175.2L36.9,174.3L39.2,171.7L40.6,171.6L40.2,172.2L40.6,172.9L43.3,176.1L43.7,182.4L43.2,183.3L41.3,183.6L39.7,182.8L38.1,183.1L37.1,183.7L35.4,183.1L34.8,186.4L33.3,187.2L30.5,187.3L29.7,186.1L27.9,185.4L27.1,186.5L26.3,186.1L25.7,184.0L28.2,181.8L28.3,178.3L30.2,175.7ZM78.5,271.0L78.0,270.9L78.4,270.0L78.8,270.3ZM77.8,270.1L77.6,270.6L76.9,270.2L77.3,269.7ZM64.8,288.1L64.3,287.5L62.9,288.2L61.8,286.4L60.9,285.8L61.2,285.2L60.0,284.3L61.7,283.1L62.7,281.0L63.0,278.1L62.5,277.2L63.2,275.7L66.6,274.4L67.6,273.1L66.1,272.8L65.3,271.0L65.7,267.2L65.0,265.8L65.1,264.8L66.4,262.4L65.3,260.0L67.2,259.0L69.0,257.0L68.0,255.5L67.8,254.1L65.8,252.3L66.2,250.8L64.8,248.6L63.0,248.6L62.3,246.7L66.0,247.7L66.8,248.5L69.3,248.4L71.0,249.0L71.6,248.9L72.0,247.5L72.8,247.8L74.9,249.6L76.7,252.3L77.3,256.5L78.0,259.1L77.5,261.7L79.0,264.1L80.0,264.5L80.6,266.2L77.6,266.6L75.2,271.5L76.3,276.0L77.1,282.2L78.0,283.4L79.7,283.6L81.1,284.8L88.6,294.0L89.0,296.0L88.2,299.4L88.4,303.1L87.8,306.5L83.9,307.7L82.5,311.0L83.5,313.3L83.6,315.9L81.8,316.0L81.4,315.2L82.0,314.1L81.7,313.5L80.4,312.8L75.7,308.2L75.6,306.7L74.2,305.0L76.9,299.7L76.5,293.4L75.0,291.7L68.7,293.1ZM134.9,181.4L134.6,181.5L134.8,181.0L136.2,180.5ZM71.1,171.0L71.5,160.4L73.4,156.6L75.7,154.2L76.3,152.6L79.2,150.8L79.0,149.6L80.7,147.2L80.8,146.0L80.1,139.7L78.7,136.6L77.3,135.7L76.7,133.9L76.0,133.5L75.6,131.3L75.9,129.1L73.5,127.7L73.7,127.2L73.2,127.0L71.8,124.0L83.4,112.6L83.4,113.3L83.9,113.7L85.2,113.2L87.7,113.9L88.2,115.6L87.9,118.7L90.2,121.8L98.1,122.3L108.8,129.2L121.4,130.9L122.9,129.8L124.6,127.3L132.9,123.5L135.8,126.1L137.0,126.5L143.0,126.2L138.1,133.2L134.7,136.7L134.8,169.8L139.7,176.2L139.8,177.3L137.4,179.5L135.0,179.6L134.6,180.5L134.0,180.2L134.1,182.4L131.8,184.9L129.6,185.0L128.0,186.2L127.0,191.3L125.9,192.2L124.7,194.2L123.6,197.9L120.4,203.6L119.6,203.5L118.7,204.1L106.2,195.1L105.4,193.9L104.5,193.5L105.2,191.2L104.8,189.4L72.5,171.4ZM83.4,112.6L81.7,110.9L80.8,109.3L80.6,107.6L78.4,102.1L72.6,97.0L71.1,94.4L69.0,93.0L65.0,92.2L63.0,90.9L65.5,86.1L71.6,86.0L72.8,84.8L72.7,76.4L74.8,70.3L74.5,67.2L75.9,64.9L77.1,64.1L78.9,65.3L80.4,64.2L80.6,60.5L82.0,55.7L83.3,54.4L87.0,48.4L91.0,47.5L91.4,44.2L93.5,39.4L94.7,33.7L97.3,33.2L99.2,33.6L100.2,32.3L101.3,31.9L103.6,34.6L104.1,34.7L107.0,28.3L108.0,29.4L110.0,30.2L111.9,32.1L115.3,31.7L117.2,30.3L118.2,30.8L118.8,31.7L121.8,31.2L125.1,32.0L127.3,31.9L133.4,35.0L138.3,40.5L141.9,43.3L143.6,46.1L145.2,47.1L147.4,49.8L142.1,56.8L142.2,63.2L143.6,63.5L149.0,62.3L152.3,63.0L149.9,66.6L151.6,70.2L153.6,72.7L154.6,73.1L155.7,75.5L157.3,77.6L158.6,78.0L162.2,81.1L188.8,90.0L197.8,90.0L183.8,103.5L170.5,117.8L161.9,117.4L158.2,118.3L154.1,120.2L151.7,123.1L144.2,124.8L143.0,126.2L136.3,126.3L132.9,123.5L124.6,127.3L122.9,129.8L121.4,130.9L108.8,129.2L98.1,122.3L90.2,121.8L87.9,118.7L88.2,115.6L87.7,113.9L85.2,113.2L83.9,113.7L83.4,113.3ZM41.0,183.6L39.8,185.8L40.3,186.2L39.9,187.9L43.0,188.9L43.1,191.5L41.6,192.1L41.7,192.8L39.8,194.3L37.3,198.8L35.5,200.8L33.5,202.1L30.6,202.0L30.0,198.9L28.9,196.5L29.0,189.5L27.1,187.2L27.6,185.4L29.7,186.1L30.5,187.3L33.3,187.2L34.8,186.4L35.4,183.1L37.1,183.7L39.7,182.8Z"}, "central": {"w": 289.8, "h": 135.0, "proj": {"lon0": -106, "lat1": 24, "c": 0.965926, "k": 7.5}, "base": "M327.3,111.5L326.4,111.7L327.3,110.9L327.9,111.0ZM305.4,96.5L305.6,97.5L304.9,98.3L301.6,97.8L301.7,97.1L302.7,96.9L304.1,97.5L305.0,96.2ZM295.5,98.2L294.0,98.0L294.8,97.7ZM326.0,113.5L325.6,113.6L325.5,112.9L326.6,112.0L327.0,112.9ZM333.1,115.9L334.3,118.1L333.0,119.6L329.5,121.4L328.0,123.5L328.9,125.1L328.7,125.9L330.7,126.4L330.7,127.5L328.0,129.2L324.9,129.8L324.5,130.6L325.1,133.4L323.2,135.5L328.4,141.3L328.7,143.3L326.0,146.0L324.0,146.1L322.0,147.8L317.6,149.3L315.8,148.8L313.6,149.9L313.2,152.5L312.5,153.0L311.7,153.0L309.1,150.4L304.1,150.5L302.9,149.0L300.1,149.0L298.6,147.9L299.4,149.9L302.7,153.1L302.7,156.0L304.2,160.0L303.9,161.2L308.7,161.9L308.7,163.3L308.2,164.0L304.2,165.5L302.8,168.5L300.7,169.1L299.0,170.6L296.3,171.7L293.6,174.8L293.0,174.8L293.2,173.7L292.1,172.6L289.3,174.1L287.6,174.4L286.7,173.8L283.4,170.8L281.0,162.1L278.1,159.0L276.3,159.0L280.3,154.4L277.7,151.0L276.3,146.2L276.6,140.5L279.1,135.5L279.0,133.6L276.3,132.8L271.9,133.8L268.5,133.5L266.1,134.3L264.9,134.1L260.1,128.0L256.1,126.9L252.6,127.6L246.3,127.3L244.8,124.7L243.5,124.4L242.9,123.6L243.1,120.3L243.7,119.3L243.5,117.8L241.5,115.3L240.5,111.7L239.4,111.5L238.6,110.6L236.4,111.0L239.0,106.6L240.0,101.3L241.3,98.7L243.1,96.6L244.5,96.0L246.6,92.5L251.2,91.0L250.0,92.1L246.6,93.2L247.5,96.1L248.9,97.4L248.3,97.5L249.2,100.1L248.7,101.7L245.5,106.4L248.0,110.0L248.6,112.0L249.7,112.1L251.8,111.3L252.9,109.9L253.2,107.2L250.0,101.0L249.6,99.2L250.2,98.7L250.2,97.8L259.1,94.7L260.1,93.6L262.2,93.9L262.1,92.5L259.4,92.8L258.7,90.9L259.3,89.3L260.8,88.7L261.8,89.6L262.5,92.4L263.5,93.9L266.4,93.6L269.3,94.3L272.4,96.3L273.3,98.4L273.1,99.8L274.3,101.3L288.0,100.3L289.0,100.7L289.1,101.5L290.9,103.1L296.1,104.5L298.1,104.3L302.9,101.6L306.2,101.2L302.5,100.9L302.1,100.2L319.6,99.4L316.0,100.9L312.1,101.0L313.8,102.8L313.4,104.6L314.8,103.5L316.4,106.6L317.2,105.9L317.6,106.3L317.6,105.2L318.2,105.2L320.7,107.8L320.5,106.4L321.5,106.4L321.7,105.8L323.8,107.8L325.9,108.3L327.5,109.8L325.8,111.3L324.2,115.5L321.5,115.5L323.8,116.9L327.4,115.6L329.8,115.9L330.8,115.3ZM298.7,46.5L300.1,46.9L299.3,47.2L297.8,47.2L297.9,46.7ZM288.8,41.7L292.5,42.1L292.5,43.2L291.0,44.6L288.8,45.4L284.2,45.1L281.1,45.0L281.3,43.3L280.6,42.3L281.4,41.3ZM293.9,44.2L293.0,44.2L293.6,43.8L294.8,43.9ZM276.2,44.6L275.7,44.2L276.3,44.1ZM226.7,-157.5L249.8,-157.6L251.2,-159.7L252.6,-159.5L253.6,-160.0L254.5,-159.5L255.0,-160.5L255.8,-160.7L255.7,-161.6L258.7,-164.3L259.0,-166.9L260.3,-168.3L260.7,-170.3L266.3,-176.0L267.7,-175.7L267.7,-174.6L268.5,-174.1L273.6,-175.1L276.7,-173.1L276.7,-163.0L279.4,-162.0L279.1,-159.6L280.2,-158.7L281.6,-158.8L281.8,-156.6L282.6,-156.2L281.1,-155.1L279.9,-155.2L277.8,-154.2L276.5,-154.3L274.9,-152.9L274.2,-153.8L272.6,-153.3L272.0,-153.8L271.4,-151.9L269.4,-152.5L270.1,-153.3L269.5,-153.4L269.8,-154.3L268.3,-153.3L267.1,-150.3L264.3,-149.2L264.0,-149.9L263.5,-149.1L263.3,-150.0L262.8,-148.9L262.3,-149.3L262.2,-148.3L260.3,-148.8L258.8,-147.5L259.3,-147.2L257.0,-145.1L254.8,-141.2L255.5,-140.0L256.4,-139.7L254.8,-139.1L253.2,-137.5L255.5,-136.7L256.3,-135.3L256.0,-134.9L257.7,-133.2L258.7,-133.0L260.8,-133.7L260.0,-135.2L259.1,-135.5L260.0,-135.6L261.0,-134.7L261.2,-132.6L256.0,-131.5L255.7,-132.9L252.3,-131.2L252.5,-133.1L251.6,-132.6L250.7,-133.5L250.9,-132.8L249.8,-130.3L239.6,-129.6L234.8,-127.7L231.9,-125.6L232.7,-127.9L232.0,-129.4L232.3,-126.9L229.9,-124.0L230.1,-123.4L232.0,-123.0L231.2,-118.4L231.1,-119.8L230.0,-117.1L228.9,-116.6L228.7,-115.4L227.5,-114.7L226.1,-112.5L224.9,-112.1L225.3,-113.6L223.6,-114.1L220.8,-116.2L221.5,-118.4L223.5,-119.0L224.0,-119.9L221.7,-118.7L220.3,-117.3L221.7,-113.2L223.9,-110.8L223.2,-109.4L224.0,-109.3L224.3,-108.2L222.0,-105.5L220.3,-101.7L218.7,-100.7L217.8,-98.6L217.5,-100.5L219.8,-104.7L218.4,-104.8L218.8,-105.7L217.9,-106.3L218.4,-107.7L217.0,-107.1L215.4,-108.3L215.4,-109.5L217.2,-109.7L215.8,-110.7L214.9,-110.3L215.2,-111.1L216.1,-111.4L215.6,-112.1L214.9,-111.8L215.1,-112.6L216.0,-112.4L216.4,-113.1L215.8,-113.0L215.6,-113.9L216.8,-115.3L218.2,-115.3L217.3,-115.6L218.3,-116.3L217.5,-116.3L217.6,-116.9L216.9,-116.7L216.6,-115.7L215.8,-115.3L215.5,-115.8L215.3,-114.9L214.9,-115.5L214.3,-114.2L213.2,-114.5L214.2,-113.4L213.9,-112.7L213.3,-113.0L213.8,-112.1L213.7,-109.0L214.5,-107.8L213.2,-108.3L212.4,-109.6L212.5,-109.0L214.4,-107.0L214.9,-105.7L211.8,-107.0L211.0,-107.9L210.9,-107.2L210.1,-108.3L208.4,-108.1L208.5,-109.1L210.0,-110.8L209.9,-111.7L209.8,-110.8L208.2,-109.5L208.1,-107.6L209.7,-107.7L210.8,-106.5L213.4,-105.7L215.4,-104.2L214.8,-102.6L213.8,-102.6L210.5,-105.7L209.3,-106.2L213.4,-102.5L215.1,-101.8L214.7,-101.5L215.5,-100.7L215.4,-100.2L214.4,-100.4L214.0,-99.6L211.8,-101.3L212.9,-99.9L215.0,-98.6L215.3,-97.9L214.4,-97.4L212.8,-99.2L208.3,-100.0L212.5,-98.8L213.8,-96.7L215.6,-97.1L217.3,-96.8L220.7,-88.6L219.3,-90.8L217.7,-94.9L217.4,-93.6L218.6,-90.8L216.3,-92.1L216.2,-91.1L215.4,-91.4L215.7,-90.9L214.6,-91.0L213.3,-90.1L212.4,-90.6L212.0,-91.7L212.1,-89.7L216.8,-89.8L216.7,-87.7L217.3,-87.9L217.5,-89.2L218.4,-89.7L219.1,-88.8L219.0,-87.4L216.1,-85.2L213.8,-85.5L213.2,-86.5L212.0,-85.7L209.8,-86.5L213.6,-84.5L212.8,-83.1L211.7,-82.4L209.6,-83.7L210.3,-82.7L211.9,-82.1L214.0,-82.4L214.7,-82.0L214.1,-81.3L212.0,-80.3L209.1,-80.3L207.9,-79.5L207.1,-80.5L207.3,-78.9L204.7,-77.1L203.4,-74.5L203.2,-76.3L202.7,-74.3L199.9,-74.4L196.7,-72.9L194.6,-70.5L194.2,-69.3L194.0,-70.5L193.6,-68.5L191.3,-67.5L189.8,-65.9L188.8,-66.1L188.8,-65.0L185.7,-63.8L183.8,-63.8L184.9,-63.2L184.2,-62.2L183.7,-63.0L183.2,-62.5L182.5,-63.4L183.3,-61.6L182.2,-60.9L181.7,-59.6L180.3,-59.1L180.6,-58.4L179.7,-57.8L179.9,-57.1L179.2,-56.5L179.8,-56.5L178.4,-55.1L179.0,-54.5L178.5,-53.8L177.9,-54.0L177.3,-51.6L179.3,-43.5L181.8,-37.9L184.6,-33.6L184.1,-32.0L185.0,-29.3L183.9,-31.3L184.0,-33.9L183.3,-32.6L183.4,-34.3L182.3,-35.7L182.9,-32.9L187.7,-22.5L188.1,-19.3L187.4,-13.8L187.2,-14.1L186.2,-12.1L185.7,-10.0L183.0,-8.7L180.3,-8.5L180.1,-9.8L181.5,-9.5L180.3,-10.3L178.5,-13.7L175.9,-14.9L174.8,-18.3L174.2,-18.7L175.1,-20.2L173.6,-19.1L173.4,-21.7L173.8,-22.2L172.6,-22.0L172.6,-21.3L171.8,-21.5L168.7,-26.2L171.0,-28.8L169.3,-29.9L169.5,-29.0L169.1,-27.9L168.5,-27.8L167.8,-28.8L169.1,-33.6L169.1,-36.7L164.5,-40.9L161.6,-44.4L159.1,-45.8L157.1,-45.5L156.6,-44.3L149.8,-42.6L149.1,-43.3L149.1,-43.8L149.9,-43.2L149.6,-44.1L147.2,-45.9L147.6,-45.9L147.8,-47.2L146.4,-46.3L141.6,-48.0L144.0,-48.0L143.0,-48.7L136.2,-47.5L137.7,-48.2L137.7,-49.3L137.1,-48.8L136.4,-49.0L135.6,-47.5L134.2,-47.2L134.4,-48.0L133.1,-47.0L130.4,-46.7L131.9,-47.2L130.3,-50.2L129.4,-47.7L123.8,-48.1L120.8,-47.6L118.9,-46.2L114.3,-47.8L112.9,-46.1L113.8,-45.5L116.0,-45.4L117.8,-46.3L118.3,-45.9L117.2,-45.1L118.6,-44.3L119.6,-45.4L120.3,-45.3L120.6,-43.7L117.9,-42.1L119.4,-40.7L121.8,-40.0L123.0,-39.0L122.0,-37.6L121.4,-38.1L120.4,-37.4L120.6,-38.0L119.9,-39.0L117.4,-40.0L116.8,-40.9L114.8,-41.5L115.5,-40.0L115.2,-38.9L114.4,-38.3L113.2,-39.7L111.7,-39.5L110.5,-38.5L106.6,-39.7L107.6,-39.9L106.9,-41.7L106.3,-41.4L104.9,-41.7L103.8,-43.1L102.7,-43.1L102.2,-43.8L100.4,-42.7L100.8,-41.9L99.5,-41.7L96.6,-42.0L92.9,-43.3L88.2,-42.9L87.8,-43.6L88.6,-44.6L88.1,-44.8L87.3,-43.6L87.7,-42.7L86.2,-42.5L81.4,-40.4L83.1,-41.6L81.3,-41.6L81.6,-43.1L80.5,-42.6L79.5,-42.8L80.5,-40.3L77.7,-37.2L70.7,-33.7L72.4,-34.7L69.7,-34.9L69.2,-34.5L67.8,-35.3L68.6,-33.7L69.4,-33.4L67.5,-32.6L66.8,-33.2L66.4,-31.5L64.1,-31.1L64.2,-30.5L65.0,-30.7L64.7,-29.9L64.0,-29.1L62.1,-28.8L63.1,-27.5L62.0,-25.0L59.6,-25.9L60.2,-24.7L61.7,-24.3L61.2,-22.3L62.0,-18.6L64.2,-15.2L64.1,-14.7L62.5,-14.0L59.4,-15.3L56.0,-15.8L49.9,-18.4L49.0,-20.7L47.4,-22.9L47.1,-26.6L41.3,-32.5L41.1,-33.8L38.0,-38.9L33.5,-43.1L26.5,-44.0L23.7,-42.3L22.5,-39.1L21.1,-37.8L19.9,-37.5L11.6,-41.8L10.0,-43.9L9.6,-46.0L7.8,-49.4L-1.1,-55.9L-3.2,-58.3L-16.0,-58.3L-16.0,-55.0L-36.5,-54.9L-64.0,-63.8L-63.2,-65.4L-80.6,-64.0L-80.7,-64.9L-81.5,-65.0L-82.0,-68.3L-83.1,-69.7L-87.5,-72.9L-89.9,-73.1L-89.8,-73.9L-90.6,-75.1L-95.2,-75.8L-96.1,-76.9L-98.6,-78.1L-104.9,-78.5L-106.1,-79.3L-106.2,-83.4L-107.6,-84.1L-107.9,-85.7L-110.7,-87.6L-115.0,-92.5L-115.3,-94.3L-114.4,-95.5L-114.5,-96.4L-115.0,-97.0L-117.1,-97.4L-118.8,-99.1L-119.5,-101.6L-119.6,-103.3L-119.1,-103.5L-118.1,-101.9L-116.4,-101.1L-118.7,-104.7L-118.2,-105.1L-112.5,-105.4L-116.1,-105.9L-117.0,-105.5L-118.8,-106.1L-119.4,-105.8L-119.3,-103.8L-119.7,-103.7L-122.7,-105.4L-123.1,-104.9L-123.0,-106.7L-122.3,-105.9L-122.5,-106.5L-128.2,-111.8L-129.1,-115.3L-129.2,-118.3L-132.7,-121.9L-133.0,-122.8L-133.1,-123.7L-131.4,-127.3L-130.9,-130.9L-132.2,-133.4L-131.9,-134.9L-133.0,-135.9L-133.3,-139.4L-134.3,-141.1L-132.9,-145.1L-131.8,-145.7L-132.5,-145.6L-131.5,-147.7L-129.9,-161.8L-130.3,-166.6L-124.8,-166.2L-126.5,-167.0L-130.9,-167.1L-130.7,-169.5L-130.0,-168.2L-129.6,-170.0L-130.9,-170.6L-131.2,-171.5L-129.3,-172.2L-131.2,-172.8L-131.4,-172.2L-133.1,-177.4L-135.2,-179.8L-135.5,-182.9L-130.2,-181.3L-124.3,-181.2L-123.0,-180.5L-121.6,-181.0L-120.7,-179.1L-121.6,-178.0L-121.9,-178.4L-124.2,-175.4L-122.6,-175.6L-123.6,-175.5L-123.5,-176.1L-119.8,-179.4L-119.7,-178.3L-120.8,-177.1L-119.9,-176.0L-120.1,-174.7L-121.0,-174.9L-121.5,-174.1L-121.9,-175.0L-123.4,-173.5L-121.0,-173.3L-118.5,-175.3L-118.8,-178.4L-117.7,-180.1L-118.9,-181.4L-118.8,-180.6L-119.7,-181.2L-118.9,-182.2L-120.8,-183.5L-119.5,-183.8L-119.6,-185.0L-120.0,-185.8L-120.9,-186.0L-121.6,-187.4L78.5,-187.4L78.6,-190.3L80.7,-189.8L81.1,-187.5L82.4,-185.6L86.5,-184.9L89.1,-183.9L91.4,-184.6L94.2,-184.6L97.8,-183.3L98.4,-182.1L100.2,-182.5L101.4,-182.3L104.9,-180.4L109.3,-181.6L110.5,-180.8L115.2,-180.9L116.6,-180.0L119.9,-180.0L127.7,-182.3L153.0,-171.7L153.7,-169.8L155.3,-168.4L158.3,-169.1L158.7,-166.7L159.5,-165.6L162.2,-165.9L163.2,-165.0L162.3,-163.6L169.9,-160.1L172.9,-146.8L170.9,-143.0L169.9,-139.7L166.1,-137.3L165.5,-136.1L165.6,-134.8L166.4,-133.7L168.9,-132.6L170.7,-132.6L179.1,-136.6L186.6,-137.7L195.3,-141.0L196.2,-141.8L195.4,-142.6L195.2,-144.6L194.4,-146.0L196.7,-146.9L211.4,-147.2L214.0,-150.4L216.2,-152.3L218.2,-153.1L223.3,-156.7ZM242.6,-127.4L242.1,-126.9L242.6,-126.9L244.2,-127.7L247.0,-128.0L241.4,-125.9L237.7,-124.9L232.5,-124.3L233.1,-124.9L232.3,-124.5L231.7,-124.4L231.6,-124.8L232.1,-125.4L234.9,-126.9L241.8,-127.4L244.3,-128.6ZM230.5,-123.9L230.5,-124.6L231.3,-124.9ZM257.1,-130.3L255.3,-130.3L256.3,-130.9ZM251.8,-131.2L251.0,-131.0L251.3,-131.7L251.9,-132.4ZM261.0,-129.5L259.1,-129.6L260.3,-130.0L260.5,-130.5ZM220.6,-84.3L219.6,-84.2L220.7,-84.6L220.9,-88.0L221.2,-85.9ZM173.6,-18.4L172.5,-18.6L172.4,-19.1ZM173.3,-19.1L173.2,-18.7L172.9,-19.4L172.6,-20.3L173.0,-20.0ZM185.6,-8.6L184.1,-7.2L185.4,-8.8L186.5,-10.1ZM102.9,-41.3L101.4,-41.8L102.3,-42.3L103.2,-41.8ZM65.1,-29.3L65.9,-30.9L66.4,-30.7ZM62.6,-24.8L63.1,-26.4L64.8,-28.7ZM64.0,-16.2L62.3,-21.2L62.3,-23.3ZM-89.5,-66.2L-90.4,-66.3L-91.2,-67.6ZM-101.7,-74.4L-102.6,-74.4L-103.2,-75.1L-101.9,-75.2L-101.3,-74.8ZM-100.6,-75.6L-98.3,-75.0L-100.0,-74.8L-100.6,-75.0ZM-89.5,-70.4L-89.1,-69.8L-90.2,-69.9L-90.6,-70.7ZM180.8,-5.4L180.5,-5.5L181.6,-5.7ZM178.1,-52.3L177.8,-50.5L177.6,-51.1ZM177.0,-4.5L176.5,-4.4L177.0,-5.2ZM187.0,-24.6L185.6,-27.3L185.5,-28.5ZM121.5,-45.6L120.9,-45.6L121.8,-46.3ZM152.8,-42.3L152.1,-42.2L154.0,-43.0ZM311.5,43.3L310.4,43.5L311.3,43.0ZM178.4,34.9L180.2,34.9L180.3,35.2L179.5,35.2L178.2,35.4L178.1,34.7ZM189.6,32.2L189.0,32.2L189.8,31.8L190.2,31.9ZM299.0,-62.2L298.0,-62.1L299.2,-62.9ZM301.4,41.5L301.1,41.4L301.9,41.1ZM300.0,42.0L299.2,41.9L299.6,41.7L300.3,41.7ZM248.8,16.8L247.4,16.2L248.7,16.2ZM247.2,16.2L246.4,15.8L246.2,15.4L246.8,15.4ZM243.9,16.1L245.0,16.6L243.9,16.8ZM317.7,54.4L317.6,54.9L317.1,54.4L317.5,53.9ZM327.8,96.2L327.4,95.9L328.1,95.4L329.4,95.1L329.3,95.5ZM325.9,104.0L319.4,104.5L322.4,103.0L322.5,100.5L321.3,99.6L326.6,98.7L325.8,100.0L326.2,102.6ZM375.6,139.8L373.4,142.4L373.5,146.4L374.2,149.6L376.8,153.1L375.2,156.5L375.3,158.9L373.8,161.5L371.9,162.5L371.5,161.7L370.4,161.6L369.6,160.5L366.7,161.7L364.2,162.0L362.4,161.1L361.2,163.1L362.8,164.7L362.7,165.8L362.1,166.2L357.1,164.7L355.4,161.6L353.5,158.4L352.8,154.7L350.3,154.5L350.3,153.6L348.9,152.4L347.3,149.2L348.8,145.0L348.3,143.8L349.8,142.6L352.8,142.1L353.5,140.9L352.7,140.0L353.7,138.5L354.6,135.5L355.2,135.1L358.8,135.5L362.7,136.5L363.0,137.3L362.9,135.8L363.5,135.3L370.7,135.1L374.1,135.7L376.3,136.4L376.4,137.9ZM324.7,81.3L324.0,80.9L324.4,80.0L325.0,79.8ZM326.8,76.3L326.4,77.1L325.6,76.6L325.5,75.6L326.7,74.3ZM314.9,51.6L314.2,51.5L314.3,51.0ZM314.2,50.7L312.7,49.8L313.0,49.5ZM261.0,211.8L260.4,212.5L259.1,212.3L257.9,211.1L255.0,211.3L253.7,212.6L247.4,213.8L241.2,218.0L239.9,218.4L239.2,222.3L237.4,225.7L238.1,228.5L233.6,231.8L233.2,233.1L233.8,234.8L232.1,235.3L231.8,236.7L233.8,238.4L233.4,239.5L234.4,240.5L235.1,242.6L236.5,243.6L236.9,244.9L239.3,247.4L239.3,248.4L237.5,250.6L240.4,250.6L243.6,251.3L245.1,253.8L245.0,255.0L251.8,254.7L256.9,250.8L256.2,253.7L256.1,262.6L256.9,262.1L258.7,263.0L261.1,262.0L263.9,262.1L270.3,273.8L269.8,275.2L268.2,276.6L268.2,281.2L267.5,282.6L269.0,286.3L265.4,291.0L265.3,292.2L266.8,294.3L265.0,297.3L266.5,301.1L269.2,302.5L267.8,303.6L267.9,304.8L263.5,309.0L264.3,311.3L261.9,312.8L262.2,314.9L261.3,316.5L257.8,317.6L251.1,312.6L250.4,310.2L245.5,307.5L242.9,305.3L233.8,301.5L223.8,295.6L220.7,291.7L217.8,289.8L215.2,286.0L215.2,284.6L214.6,284.0L215.5,283.5L216.0,281.4L215.7,280.3L211.3,272.6L210.1,271.6L209.0,270.5L208.5,267.5L207.8,266.5L205.5,264.7L204.8,261.3L201.5,255.7L197.3,244.6L195.5,241.6L192.9,238.8L190.1,233.0L187.6,229.9L180.1,225.4L179.9,224.1L180.4,223.6L181.6,223.8L182.0,222.3L179.9,218.8L180.3,217.7L178.7,215.0L179.1,212.4L182.6,208.0L186.0,205.4L187.1,209.1L186.2,210.0L184.8,210.1L184.8,211.2L185.8,211.6L184.9,213.2L185.6,213.5L187.3,212.2L189.8,213.6L191.0,213.4L191.9,214.0L193.2,217.0L195.4,217.3L196.2,216.4L196.3,215.4L197.9,214.2L197.9,212.4L199.8,208.3L200.3,205.5L201.7,206.0L201.5,205.1L203.9,202.4L212.4,199.2L216.7,196.0L220.4,191.5L221.6,186.9L222.8,187.1L222.7,184.4L220.0,180.9L222.1,181.1L223.2,180.3L226.0,181.5L228.5,183.9L230.0,187.3L234.3,189.4L235.3,190.9L235.5,192.7L237.6,193.7L237.9,197.1L239.5,198.0L244.7,198.0L248.1,196.1L250.7,197.5L253.8,196.6L260.1,199.9L260.3,200.6L255.5,208.4L257.0,209.0L258.3,208.6ZM273.8,88.9L273.4,89.8L273.1,88.4L272.6,87.7L273.7,88.3ZM261.5,86.6L260.3,85.9L260.5,85.4ZM269.8,89.6L268.1,88.9L266.9,87.1ZM247.9,32.1L248.4,33.9L248.1,35.4L248.9,36.3L247.7,37.6L248.2,39.5L247.3,40.4L246.3,40.5L248.0,42.4L248.0,44.7L245.9,43.3L240.0,43.9L235.3,43.2L233.7,43.6L232.7,44.7L231.2,43.4L228.5,42.1L229.0,40.3L229.8,40.1L240.6,41.7L243.8,40.3L240.4,37.0L240.9,36.5L241.2,34.2L238.7,32.9L236.2,32.6L236.2,31.4L240.0,30.5L244.7,31.9ZM240.5,39.2L240.4,39.7L238.5,39.1L237.0,38.3L237.1,37.8L238.6,38.0ZM241.5,29.7L241.7,30.1L239.9,29.8L239.4,29.5L240.1,29.3ZM327.9,141.0L323.2,135.5L325.1,133.4L324.5,130.6L324.9,129.8L328.0,129.2L330.7,127.5L330.7,126.4L328.7,125.9L328.9,125.1L328.0,123.5L329.5,121.4L333.0,119.6L334.3,118.1L333.1,115.9L334.4,117.2L337.0,118.1L341.9,122.0L344.3,125.1L344.3,127.2L342.9,132.1L344.7,128.6L345.6,128.4L347.9,129.1L351.1,132.5L352.5,133.0L353.6,134.3L353.6,138.4L352.7,140.0L353.5,141.0L352.6,142.3L349.8,142.6L348.6,143.4L348.8,145.0L347.3,148.7L347.5,150.0L350.3,153.6L350.3,154.5L352.8,154.7L353.5,157.8L356.7,164.1L358.7,165.4L356.2,165.9L354.1,164.9L352.7,165.3L351.0,167.1L347.9,167.6L347.5,168.6L345.3,168.1L344.1,169.2L344.0,170.4L341.8,171.0L338.8,169.7L336.6,167.2L335.7,166.9L335.0,165.7L335.0,162.9L334.0,162.3L333.3,159.8L333.4,157.6L334.5,154.9L334.3,153.1L335.6,152.3L336.5,150.5L335.1,148.3L335.4,147.1L334.5,146.4L332.2,146.0L333.0,144.4L333.3,141.9L332.2,140.7ZM320.8,89.9L320.3,89.9L320.8,88.6L321.6,88.3L321.5,89.6ZM327.3,71.3L327.0,71.8L325.5,71.5L325.9,70.5L325.0,70.1L324.4,69.0L325.1,68.4L326.5,69.3ZM323.6,58.3L322.2,58.3L322.3,56.4L323.1,56.5L324.7,58.1ZM321.7,59.9L321.1,60.3L320.5,59.5L320.6,57.3L322.0,58.0ZM324.3,60.8L323.7,60.8L324.0,60.0ZM372.2,162.5L373.8,161.5L375.3,158.9L375.2,156.5L376.8,153.1L374.2,149.6L373.3,143.1L374.3,141.1L376.1,139.4L377.3,136.7L384.7,139.3L389.1,142.9L388.8,144.2L389.6,143.5L390.8,144.6L391.5,146.1L391.2,147.4L392.4,145.2L393.7,149.5L391.3,152.2L388.8,156.1L386.1,162.3L383.9,163.6L382.3,163.5L381.5,162.5L380.3,163.1L378.4,162.3L375.8,164.1ZM311.4,44.5L310.6,44.5L311.1,44.1ZM222.5,180.8L220.0,180.9L222.7,184.4L222.8,187.1L221.6,186.9L220.4,191.5L216.7,196.0L212.4,199.2L203.9,202.4L201.5,205.1L201.7,206.0L200.3,205.5L199.8,208.3L197.9,212.4L197.9,214.2L196.3,215.4L196.2,216.4L195.4,217.3L193.2,217.0L191.9,214.0L191.0,213.4L189.8,213.6L187.3,212.2L185.6,213.5L184.9,213.2L185.8,211.6L184.8,211.2L184.8,210.1L186.2,210.0L186.9,209.3L186.7,208.0L186.0,205.4L188.6,203.7L190.3,199.3L189.5,195.5L188.9,199.1L188.1,199.2L188.3,197.7L186.3,200.3L182.3,197.6L181.4,196.4L182.8,195.6L182.8,194.5L182.3,192.2L182.5,190.4L181.8,188.1L182.3,187.3L184.3,186.4L185.1,184.4L186.3,184.7L185.6,184.4L184.9,182.8L188.0,178.8L187.7,174.1L188.1,173.7L196.3,171.0L196.9,170.3L196.6,169.1L201.5,172.7L205.0,173.7L205.4,174.6L206.7,175.2L207.2,177.0L213.7,178.2L214.5,177.0L215.4,176.7L219.0,179.3ZM187.4,202.3L186.4,202.5L186.5,201.1L187.3,200.2L189.0,200.4L187.7,201.3ZM196.3,170.6L195.7,170.3L196.3,169.8ZM113.5,185.8L112.0,185.1L112.1,184.4L114.0,183.6L114.6,184.1L114.5,184.9ZM120.1,186.8L119.3,187.1L118.7,186.7L120.1,185.4L121.3,185.5ZM105.6,183.5L104.2,183.3L103.9,182.3L105.3,181.9L105.8,182.4ZM112.8,190.0L112.1,189.7L112.5,189.2L113.2,189.7ZM106.7,179.8L107.4,181.7L108.8,183.1L109.0,184.5L110.1,185.6L109.4,187.1L107.7,187.6L105.6,187.5L105.2,186.9L105.3,186.0L107.8,184.2L106.0,182.2L105.6,180.2L104.3,180.0L106.0,179.1ZM111.8,182.5L110.1,182.5L109.6,182.0L110.0,181.4L111.1,181.4ZM324.0,65.6L323.3,65.8L322.6,63.0L324.0,63.5ZM251.2,91.0L246.6,92.5L244.5,96.0L243.1,96.6L241.3,98.7L240.0,101.3L239.0,106.6L236.4,111.0L238.6,110.6L239.4,111.5L240.5,111.7L241.5,115.3L243.5,117.8L243.7,119.3L243.1,120.3L242.9,123.6L243.5,124.4L244.8,124.7L246.3,127.3L252.6,127.6L255.5,126.8L259.9,127.8L264.9,134.1L266.1,134.3L268.5,133.5L271.9,133.8L276.3,132.8L279.0,133.6L279.1,135.5L276.6,140.5L276.3,146.2L277.7,151.0L280.3,154.4L276.3,159.0L278.1,159.0L281.0,162.1L283.4,170.8L281.9,171.1L281.7,167.2L279.6,164.1L278.5,164.5L275.8,166.9L273.9,165.1L273.4,166.2L274.0,167.1L264.1,166.7L261.9,167.2L261.9,172.1L265.8,172.1L266.9,173.5L266.9,175.1L266.0,175.3L264.6,174.5L260.4,175.7L260.3,181.0L263.5,183.8L263.6,185.7L265.1,189.0L261.0,211.8L258.3,208.6L257.0,209.0L255.5,208.4L260.3,200.3L254.2,196.6L252.7,196.8L250.7,197.5L248.1,196.1L244.7,198.0L239.5,198.0L237.9,197.1L237.6,193.7L235.5,192.7L235.3,190.9L234.3,189.4L230.0,187.3L228.8,184.4L226.0,181.5L225.0,181.4L223.6,180.4L222.5,180.8L219.0,179.3L215.4,176.7L214.5,177.0L213.7,178.2L207.2,177.0L206.7,175.2L205.4,174.6L205.0,173.7L204.1,173.8L200.6,172.2L197.9,170.4L195.4,167.8L197.1,166.1L198.7,166.7L198.6,162.3L199.8,161.4L202.4,161.2L204.2,159.6L205.2,158.4L205.1,157.2L206.0,156.9L207.5,154.9L209.5,150.7L208.2,150.8L208.1,149.6L207.5,150.4L207.0,149.5L207.1,148.1L206.3,148.4L207.5,147.0L208.0,144.6L207.4,140.1L206.2,138.5L208.3,136.6L206.7,133.7L207.4,130.7L206.9,129.8L206.3,129.8L203.6,125.8L204.7,123.5L204.6,122.3L206.2,123.3L207.5,122.2L207.6,121.2L208.7,120.2L206.6,116.3L207.2,115.2L211.2,119.3L210.8,120.5L211.6,120.5L211.7,117.7L210.7,115.7L215.3,112.6L217.1,109.8L219.9,109.1L219.7,107.0L220.7,103.5L219.4,103.9L221.3,100.4L225.7,96.7L229.4,97.5L228.1,98.5L228.9,99.3L230.8,95.1L236.8,95.3L241.1,92.2L244.3,90.8L245.3,88.6L248.4,86.9L250.0,86.8L251.7,87.5L252.6,89.7ZM202.0,160.9L201.3,160.4L201.8,160.2ZM-174.0,-239.2L-174.6,-240.8L-176.9,-240.9L-177.3,-241.7L-179.2,-242.6L-185.3,-244.5L-187.1,-244.4L-187.4,-245.9L-189.1,-246.4L-188.6,-247.7L-190.8,-248.1L-190.0,-249.0L-198.7,-257.5L-198.5,-258.1L-201.5,-260.3L-205.0,-261.7L-206.0,-263.1L-209.7,-264.7L-210.6,-265.8L-210.5,-266.8L-213.5,-268.4L-219.7,-267.0L-219.1,-266.5L-220.7,-265.9L-220.7,-264.6L-221.5,-263.6L-223.2,-263.6L-227.8,-261.8L-228.4,-261.9L-228.1,-262.4L-228.9,-264.2L-236.4,-268.3L-236.9,-269.3L-240.4,-270.6L-239.6,-272.6L-244.0,-272.5L-246.1,-271.4L-249.6,-272.2L-250.1,-271.6L-253.6,-272.3L-253.6,-342.4L-246.1,-342.2L-240.4,-341.4L-230.9,-338.2L-222.5,-336.7L-218.2,-336.6L-212.0,-335.1L-213.2,-336.3L-216.6,-337.0L-216.8,-337.4L-214.3,-337.7L-216.7,-338.3L-215.1,-339.8L-212.2,-339.8L-211.1,-341.0L-206.2,-341.1L-206.4,-341.8L-205.8,-342.6L-202.0,-341.3L-204.1,-339.4L-196.8,-340.8L-195.0,-342.2L-191.3,-342.4L-192.5,-342.7L-191.9,-343.0L-189.5,-342.8L-184.3,-344.4L-182.1,-344.3L-178.7,-346.0L-173.5,-345.7L-171.5,-346.4L-170.5,-345.8L-171.3,-345.0L-179.9,-342.4L-187.9,-341.5L-190.8,-339.8L-193.3,-339.4L-198.3,-336.7L-198.3,-335.9L-197.0,-335.5L-197.8,-336.4L-192.5,-336.4L-192.3,-336.7L-193.7,-336.9L-193.6,-338.1L-187.8,-339.7L-186.8,-340.7L-183.6,-340.8L-183.5,-340.2L-181.6,-340.9L-180.9,-339.1L-177.6,-341.8L-174.7,-342.9L-165.9,-344.7L-166.2,-344.1L-167.8,-343.5L-167.0,-342.8L-165.6,-343.1L-162.2,-344.7L-161.4,-345.8L-157.1,-347.0L-159.2,-347.2L-159.7,-347.5L-159.3,-347.7L-160.6,-348.1L-160.3,-348.9L-159.3,-349.3L-153.8,-347.2L-149.9,-343.3L-146.7,-341.6L-141.4,-340.1L-138.9,-340.7L-140.2,-342.2L-139.1,-343.7L-138.2,-343.6L-136.0,-344.9L-137.6,-345.2L-134.4,-346.1L-133.6,-345.8L-133.3,-343.3L-131.3,-342.7L-133.9,-340.7L-132.8,-340.2L-127.0,-340.4L-124.7,-341.6L-123.3,-343.6L-116.4,-343.6L-108.4,-342.5L-102.4,-340.4L-93.2,-339.4L-87.6,-337.8L-81.3,-336.9L-72.9,-336.3L-74.2,-337.3L-71.0,-337.4L-65.2,-336.4L-61.0,-334.9L-57.7,-333.0L-58.7,-332.0L-63.5,-332.0L-66.1,-331.0L-66.4,-330.1L-68.3,-329.3L-66.2,-328.6L-57.2,-327.8L-47.1,-327.6L-36.2,-328.4L-29.5,-329.9L-26.3,-328.0L-22.0,-327.7L-20.7,-325.7L-19.7,-326.9L-18.9,-327.0L-14.4,-324.4L-13.8,-323.7L-14.4,-323.2L-18.1,-323.2L-9.1,-318.0L-12.4,-320.6L-12.6,-322.2L-11.8,-322.5L-8.4,-321.6L-9.8,-322.9L-9.3,-323.3L-11.4,-324.5L-12.0,-326.3L-14.2,-327.8L-14.2,-328.6L-12.8,-329.3L-13.0,-330.3L-3.1,-331.5L-2.9,-332.4L0.5,-333.3L1.8,-334.4L0.5,-334.8L-3.3,-333.9L-4.4,-332.7L-11.7,-332.5L-12.6,-332.1L-12.2,-331.5L-12.6,-331.3L-16.4,-331.1L-19.7,-332.2L-16.8,-334.6L-10.4,-335.2L-1.2,-336.9L2.3,-336.2L3.3,-335.4L4.5,-333.1L9.8,-331.7L9.7,-331.1L11.0,-330.5L15.2,-330.3L18.3,-330.9L22.9,-328.9L26.7,-328.0L32.2,-327.7L40.2,-328.8L51.3,-327.9L55.0,-328.6L52.9,-329.7L52.7,-330.3L53.4,-330.5L58.5,-327.8L61.9,-327.1L64.1,-327.9L63.7,-328.9L59.8,-329.8L56.6,-329.4L54.3,-330.9L55.2,-331.0L53.2,-332.7L56.4,-332.4L59.4,-332.9L58.5,-333.9L62.2,-333.7L65.4,-331.9L69.3,-332.3L67.2,-330.3L72.7,-331.9L71.0,-327.9L69.8,-326.3L71.4,-324.5L74.5,-324.9L74.1,-323.9L75.7,-324.1L76.7,-323.7L76.7,-322.6L74.1,-322.3L69.4,-322.9L73.3,-320.6L74.0,-319.6L74.3,-320.2L72.2,-322.0L76.8,-322.1L77.8,-324.5L76.3,-327.1L75.0,-328.0L76.4,-330.2L81.5,-330.5L87.5,-333.6L90.9,-334.6L89.5,-334.7L89.2,-336.7L88.0,-337.5L86.5,-335.9L83.5,-335.6L82.6,-336.0L82.9,-336.8L86.3,-338.4L85.1,-338.6L85.1,-339.9L89.7,-340.6L88.2,-339.4L88.8,-339.2L91.1,-340.3L90.3,-340.4L90.3,-341.1L85.0,-340.9L82.3,-342.4L81.0,-341.8L72.7,-343.5L68.5,-346.6L68.5,-347.5L70.3,-348.8L73.3,-349.1L72.5,-349.6L73.3,-350.2L70.6,-349.8L68.5,-351.1L69.0,-353.0L68.6,-353.5L69.4,-353.8L69.2,-354.3L72.0,-355.6L75.6,-355.0L76.7,-356.2L73.4,-356.8L78.2,-359.3L81.6,-359.9L82.9,-359.8L83.5,-358.9L84.7,-358.2L88.8,-358.1L88.7,-357.3L92.3,-356.0L94.5,-354.5L95.0,-353.0L94.3,-351.4L98.8,-349.8L101.1,-347.9L101.1,-347.3L103.2,-347.4L104.6,-346.3L102.4,-346.0L99.1,-346.8L97.7,-345.8L101.6,-345.3L95.0,-342.5L99.2,-342.5L102.1,-341.5L107.2,-342.3L105.5,-341.4L112.9,-340.9L111.0,-340.7L109.4,-339.5L106.9,-339.6L110.5,-338.3L112.4,-336.6L111.8,-333.6L114.1,-332.0L116.7,-333.7L118.3,-337.6L121.1,-339.4L122.7,-339.5L130.1,-336.1L131.6,-333.4L131.6,-332.2L130.5,-331.8L128.7,-332.5L127.9,-332.2L128.1,-329.6L129.0,-328.2L134.0,-325.2L135.0,-323.8L140.8,-326.1L142.0,-328.5L145.2,-330.5L146.8,-333.3L147.1,-335.0L148.6,-335.8L153.1,-335.8L151.4,-336.3L153.1,-338.1L149.3,-339.2L148.5,-343.8L157.1,-343.8L161.8,-342.7L169.4,-342.7L171.0,-342.0L168.4,-341.2L171.6,-340.6L172.2,-339.4L175.8,-339.4L178.8,-338.5L174.2,-336.6L178.4,-336.4L179.2,-335.9L179.1,-334.9L174.5,-333.4L172.3,-333.8L169.9,-333.3L172.3,-331.1L173.8,-331.5L173.1,-330.1L173.4,-329.5L179.0,-326.2L178.3,-323.9L177.7,-323.0L174.4,-322.3L172.4,-320.7L169.2,-319.4L162.8,-317.8L159.4,-320.5L157.9,-320.5L155.5,-322.3L153.3,-322.7L151.3,-321.7L154.8,-321.8L157.8,-320.1L160.8,-316.8L157.0,-317.2L155.9,-316.3L151.4,-317.4L147.8,-319.3L139.8,-318.9L139.5,-318.1L139.9,-317.7L144.1,-316.7L145.2,-315.9L137.1,-310.8L134.4,-310.0L130.6,-310.1L125.0,-312.6L117.7,-314.5L116.3,-314.5L116.7,-314.0L105.6,-314.6L108.4,-313.7L108.2,-314.2L108.8,-314.4L116.5,-313.4L123.3,-310.1L137.4,-309.0L137.4,-308.0L135.6,-306.2L129.6,-301.4L124.5,-299.9L121.7,-300.9L122.2,-299.8L118.7,-300.2L117.3,-301.4L115.6,-301.1L117.0,-299.7L114.7,-299.8L115.8,-298.5L114.8,-297.7L110.0,-296.9L102.0,-298.2L101.6,-298.7L99.0,-298.4L89.1,-301.1L89.9,-300.3L89.4,-299.6L90.1,-299.0L92.2,-298.8L91.4,-299.6L100.3,-297.7L98.1,-296.7L102.6,-297.7L108.9,-295.8L110.8,-294.8L110.9,-293.0L110.3,-292.3L105.4,-291.0L101.2,-291.5L98.8,-291.1L99.2,-290.3L101.9,-289.4L97.4,-289.1L95.9,-287.8L97.6,-286.3L92.7,-287.7L94.9,-286.6L93.7,-286.1L94.1,-285.7L93.6,-285.5L91.6,-285.2L92.2,-284.7L91.8,-284.5L90.0,-284.6L91.9,-283.3L87.6,-281.1L87.7,-280.1L86.3,-279.8L86.4,-278.5L83.2,-274.5L81.4,-273.7L82.2,-273.1L81.2,-269.6L81.2,-264.5L80.6,-263.2L80.0,-263.0L84.9,-260.4L84.5,-257.2L86.0,-260.5L92.9,-260.4L98.3,-249.9L97.0,-247.8L95.6,-246.9L98.1,-247.8L99.2,-247.8L98.8,-247.3L107.9,-249.3L111.6,-249.2L117.4,-247.4L124.4,-246.1L129.9,-243.5L134.1,-240.2L147.2,-237.0L150.6,-235.1L149.5,-233.1L151.7,-234.6L160.0,-234.9L166.7,-234.2L171.0,-233.0L172.3,-231.1L170.8,-226.8L172.8,-223.6L172.7,-219.5L171.8,-217.7L176.8,-213.2L176.7,-212.4L175.1,-211.7L177.7,-211.5L183.6,-208.2L185.1,-205.4L182.2,-203.4L184.9,-204.8L187.6,-204.6L189.5,-203.8L193.1,-200.7L190.4,-203.4L190.6,-205.1L192.0,-206.8L193.4,-207.2L195.3,-206.0L196.3,-204.0L196.6,-205.4L197.5,-206.2L195.7,-208.3L199.6,-212.0L199.0,-212.3L198.8,-213.7L197.5,-214.9L197.6,-216.4L196.3,-217.8L194.9,-222.4L195.3,-223.6L196.0,-223.7L195.1,-224.5L195.6,-225.0L193.8,-225.7L194.5,-226.3L193.0,-227.0L190.4,-230.0L199.4,-232.6L204.5,-234.7L211.8,-240.0L213.0,-241.5L213.5,-243.7L213.2,-248.9L210.9,-253.2L209.0,-255.1L206.1,-256.8L199.2,-259.9L199.7,-261.8L204.6,-265.4L203.9,-266.1L204.8,-267.6L207.6,-266.8L206.6,-267.6L207.7,-268.5L207.4,-269.4L208.0,-270.2L205.8,-270.7L206.8,-271.1L205.2,-273.2L206.4,-274.1L204.4,-274.8L205.7,-276.2L201.5,-276.1L204.5,-278.7L204.8,-280.8L206.4,-281.7L202.7,-283.7L201.9,-287.1L203.6,-288.2L207.4,-289.3L218.7,-287.4L219.7,-286.9L218.9,-286.3L222.1,-287.3L227.2,-285.9L227.1,-286.6L234.0,-288.5L239.9,-285.9L241.3,-285.9L241.7,-285.2L240.7,-283.8L242.6,-284.4L244.7,-283.7L246.0,-282.6L244.7,-281.9L247.3,-282.7L248.9,-282.1L247.4,-280.8L248.9,-280.6L248.2,-280.0L250.5,-278.7L255.6,-277.9L258.8,-278.0L260.9,-276.4L262.9,-276.9L263.5,-277.9L264.6,-277.6L265.1,-276.4L263.4,-275.2L262.6,-273.7L262.7,-272.5L263.5,-271.5L263.2,-270.6L256.1,-270.2L262.7,-269.4L263.8,-267.6L263.0,-266.2L263.1,-265.1L265.6,-264.8L264.8,-263.9L265.0,-263.2L264.2,-261.5L263.3,-261.2L262.4,-262.2L261.8,-261.4L259.7,-260.7L262.3,-260.2L266.1,-261.6L270.2,-261.8L272.5,-260.6L273.6,-258.6L272.7,-256.2L267.7,-254.3L272.3,-255.4L274.0,-258.0L275.1,-258.6L276.1,-257.2L274.8,-256.0L277.1,-258.0L277.6,-254.9L278.4,-256.6L284.5,-258.7L287.2,-260.9L289.1,-259.9L289.8,-258.2L290.3,-259.3L289.5,-261.2L290.8,-261.3L290.4,-261.9L291.9,-262.3L291.8,-262.7L294.2,-263.0L292.6,-263.3L292.0,-264.1L292.6,-264.1L293.3,-265.1L294.0,-264.9L293.6,-266.0L296.7,-265.4L294.1,-266.5L293.5,-267.4L293.9,-268.3L296.8,-268.3L295.9,-268.7L295.8,-269.3L298.3,-272.5L300.6,-272.0L301.2,-271.3L298.7,-270.1L302.2,-270.5L302.9,-269.8L302.6,-268.1L303.9,-268.7L306.1,-266.3L304.7,-265.4L305.9,-265.1L305.9,-264.6L307.6,-265.0L308.5,-264.0L306.8,-263.1L304.5,-262.9L309.7,-263.0L309.3,-262.7L309.9,-262.0L309.5,-261.5L311.1,-261.6L312.4,-260.0L307.6,-257.5L310.0,-258.5L310.6,-258.1L314.5,-258.6L312.9,-256.5L309.6,-255.1L315.2,-256.2L316.5,-254.8L319.1,-254.3L319.5,-254.0L318.8,-253.3L319.0,-252.1L315.2,-251.2L319.3,-250.7L319.8,-250.3L318.9,-249.4L321.4,-248.9L323.6,-247.6L323.3,-245.1L318.3,-245.2L316.1,-245.8L316.6,-246.2L315.2,-246.0L320.7,-243.9L318.7,-243.4L319.2,-243.2L322.9,-242.7L320.9,-242.2L320.8,-241.7L323.4,-241.6L323.8,-240.4L322.7,-240.0L324.6,-239.7L325.4,-239.0L327.9,-239.6L329.2,-238.0L329.8,-238.5L330.8,-238.4L330.3,-237.4L331.9,-236.1L328.8,-233.0L331.7,-234.3L335.0,-234.8L335.5,-234.0L337.3,-233.8L334.4,-231.1L338.6,-234.0L340.5,-233.6L342.1,-231.3L344.8,-230.8L348.0,-231.6L349.0,-230.4L352.0,-229.4L349.9,-227.9L346.6,-227.6L344.6,-226.7L343.1,-225.4L341.1,-225.2L336.9,-223.8L334.5,-223.8L332.8,-223.0L332.2,-222.0L330.4,-222.4L332.5,-221.2L331.1,-220.4L331.4,-220.1L330.9,-219.5L343.0,-224.8L348.2,-225.7L345.4,-225.9L345.2,-226.3L346.3,-226.7L352.0,-226.2L354.0,-223.4L351.2,-222.1L352.6,-221.0L356.1,-223.0L358.9,-223.2L359.7,-222.2L361.4,-221.9L363.2,-220.1L363.7,-219.1L363.0,-217.5L363.5,-216.6L363.1,-215.5L363.7,-214.8L359.9,-214.1L364.1,-213.6L364.4,-213.2L363.8,-212.7L362.1,-213.0L364.5,-211.8L364.4,-211.0L355.2,-205.9L351.6,-206.0L347.1,-204.8L344.0,-204.7L334.1,-197.4L323.9,-196.5L320.7,-195.8L319.3,-196.7L313.6,-197.3L309.8,-196.8L305.3,-197.4L295.1,-197.4L286.2,-196.6L283.0,-195.0L279.8,-190.1L273.2,-189.0L273.7,-188.6L271.3,-187.9L268.6,-186.2L265.3,-182.9L263.2,-181.5L253.4,-183.4L261.0,-181.5L262.4,-180.7L260.8,-178.0L257.6,-175.7L255.7,-173.5L251.6,-171.0L244.8,-169.2L241.4,-167.2L239.2,-166.6L235.6,-163.0L233.9,-162.8L231.5,-161.3L229.5,-161.5L231.8,-160.8L232.0,-160.1L221.7,-155.8L214.0,-150.4L211.4,-147.2L196.7,-146.9L194.4,-146.0L195.2,-144.6L195.4,-142.6L196.2,-141.8L195.3,-141.0L186.6,-137.7L179.1,-136.6L170.7,-132.6L168.9,-132.6L166.4,-133.7L165.6,-134.8L165.5,-136.1L166.1,-137.3L169.9,-139.7L170.9,-143.0L172.9,-146.8L169.9,-160.1L162.3,-163.6L163.2,-165.0L162.2,-165.9L159.5,-165.6L158.7,-166.7L158.3,-169.1L155.3,-168.4L153.7,-169.8L153.0,-171.7L127.7,-182.3L119.9,-180.0L116.6,-180.0L115.2,-180.9L110.5,-180.8L109.3,-181.6L104.9,-180.4L101.4,-182.3L100.2,-182.5L98.4,-182.1L97.8,-183.3L94.2,-184.6L91.4,-184.6L89.1,-183.9L86.5,-184.9L82.4,-185.6L81.1,-187.5L80.7,-189.8L78.6,-190.3L78.5,-187.4L-121.6,-187.4L-122.6,-188.1L-123.7,-187.4L-123.7,-188.5L-124.5,-188.5L-124.8,-189.5L-122.8,-189.7L-122.3,-190.5L-123.3,-189.9L-125.2,-190.1L-124.5,-192.6L-125.5,-191.8L-125.6,-190.9L-127.0,-190.5L-129.6,-191.2L-130.6,-192.0L-130.3,-193.0L-129.1,-191.9L-127.4,-192.6L-128.7,-192.4L-129.5,-193.0L-129.7,-194.9L-128.8,-195.7L-129.1,-196.1L-130.0,-196.4L-129.4,-195.5L-130.3,-194.1L-132.4,-193.3L-133.9,-193.6L-136.1,-195.2L-138.1,-198.1L-136.6,-199.8L-136.6,-201.5L-138.1,-198.9L-141.1,-198.7L-141.6,-199.9L-142.3,-198.5L-145.6,-198.7L-148.1,-199.4L-144.2,-200.3L-148.6,-200.1L-147.6,-201.3L-148.7,-201.5L-148.6,-202.9L-149.5,-201.9L-152.6,-201.5L-154.7,-202.1L-157.3,-203.6L-157.1,-205.1L-155.2,-207.1L-149.9,-207.8L-154.6,-207.8L-157.3,-206.2L-158.4,-208.3L-157.4,-209.9L-158.4,-209.9L-157.9,-211.4L-153.9,-213.0L-150.1,-210.5L-151.7,-212.3L-153.5,-213.4L-153.5,-214.0L-151.8,-215.4L-152.3,-216.3L-152.6,-214.9L-155.9,-212.7L-158.2,-211.9L-160.1,-208.4L-162.0,-211.2L-159.6,-212.4L-159.8,-213.4L-158.9,-214.1L-161.3,-212.7L-159.8,-216.8L-162.0,-216.2L-162.7,-216.6L-163.2,-218.6L-164.1,-219.3L-167.2,-220.3L-167.9,-221.5L-166.8,-222.7L-165.6,-222.8L-165.9,-221.7L-163.3,-220.7L-160.3,-220.6L-158.9,-219.6L-160.9,-221.1L-163.1,-221.1L-164.3,-221.7L-164.9,-223.1L-163.2,-223.9L-164.5,-224.4L-166.3,-223.8L-168.1,-222.3L-168.5,-220.6L-170.7,-219.4L-173.2,-221.6L-176.3,-222.9L-174.5,-224.8L-174.2,-226.0L-171.2,-226.7L-174.5,-226.4L-177.0,-228.2L-176.4,-229.9L-170.7,-236.0L-171.7,-235.8L-172.4,-236.7L-172.7,-234.9L-174.2,-232.9L-174.5,-233.3L-173.8,-235.2L-174.6,-237.7ZM281.6,-158.8L279.9,-158.8L279.1,-159.6L279.4,-162.0L276.7,-163.0L276.7,-173.1L273.6,-175.1L268.5,-174.1L267.7,-174.6L267.7,-175.7L266.3,-176.0L260.7,-170.3L260.3,-168.3L259.0,-166.9L258.7,-164.3L255.7,-161.6L255.8,-160.7L255.0,-160.5L254.5,-159.5L253.6,-160.0L252.6,-159.5L251.2,-159.7L249.8,-157.6L226.7,-157.5L235.0,-160.7L237.9,-165.1L245.5,-169.1L251.7,-170.7L257.0,-172.7L264.6,-179.8L269.4,-182.7L273.6,-184.7L285.4,-188.4L294.2,-189.5L298.2,-188.9L302.4,-186.9L302.8,-186.0L300.5,-186.3L302.5,-185.2L301.7,-183.2L299.7,-182.7L298.3,-181.5L295.1,-180.2L290.3,-181.4L289.2,-180.8L286.5,-180.9L284.7,-180.2L287.2,-180.5L290.9,-179.3L292.6,-177.5L297.0,-178.9L296.7,-178.4L299.2,-177.9L298.7,-177.6L297.7,-175.3L294.7,-173.3L298.2,-173.0L297.7,-171.7L298.4,-170.2L299.0,-170.0L299.6,-167.7L300.3,-166.8L304.9,-166.2L305.5,-165.8L303.9,-165.2L306.4,-163.9L307.8,-164.1L309.4,-163.1L313.7,-163.1L313.3,-162.4L315.3,-162.2L319.1,-164.0L320.4,-162.4L322.4,-162.7L323.5,-161.8L324.0,-160.8L322.7,-160.3L325.2,-160.1L325.8,-159.7L325.5,-159.4L309.3,-154.8L307.1,-155.1L307.6,-154.1L307.1,-153.6L305.6,-153.8L304.3,-154.8L303.5,-153.7L303.1,-154.4L302.2,-154.1L301.8,-153.3L302.3,-152.5L298.0,-149.0L296.4,-148.0L295.3,-148.0L294.6,-147.5L294.5,-146.6L293.5,-146.4L291.7,-146.7L290.6,-148.5L289.9,-148.6L289.5,-148.1L288.9,-148.6L288.4,-151.1L289.1,-152.8L290.7,-154.3L288.7,-153.3L289.1,-153.8L292.6,-155.1L293.4,-155.7L291.7,-155.2L292.3,-155.7L297.7,-158.4L301.0,-159.4L301.0,-160.0L301.9,-159.8L301.7,-158.5L303.3,-157.7L302.9,-158.6L303.6,-159.1L308.8,-160.2L299.9,-160.6L298.9,-159.9L297.9,-160.2L298.3,-161.1L302.0,-163.8L300.8,-163.5L299.7,-164.6L300.0,-163.6L298.6,-162.3L290.6,-159.2L289.0,-159.9L289.6,-160.6L288.5,-160.0L288.7,-159.2L286.6,-158.2L286.1,-158.6L283.5,-158.0L283.1,-158.6ZM334.8,-149.5L332.4,-149.7L335.2,-150.0ZM283.4,170.8L287.3,174.2L289.3,174.1L292.1,172.6L293.2,173.7L293.0,174.8L293.6,174.8L296.3,171.7L299.0,170.6L300.7,169.1L302.8,168.5L304.2,165.5L308.4,163.8L308.7,161.9L303.9,161.2L304.2,160.0L302.7,156.0L302.7,153.1L299.4,149.9L298.6,147.9L300.1,149.0L302.9,149.0L304.1,150.5L309.1,150.4L311.7,153.0L312.5,153.0L313.2,152.5L313.6,149.9L315.8,148.8L317.6,149.3L320.1,148.5L322.0,147.8L324.0,146.1L326.0,146.0L328.7,143.3L328.6,141.9L327.9,141.0L328.5,140.8L332.2,140.7L333.3,141.9L333.0,144.4L332.2,146.0L334.5,146.4L335.4,147.1L335.1,148.3L336.5,150.5L335.6,152.3L334.3,153.1L334.5,154.9L333.4,157.6L333.3,159.8L334.0,162.3L335.0,162.9L335.0,165.7L335.7,166.9L336.6,167.2L338.8,169.7L341.5,171.0L344.0,170.4L344.1,169.2L345.3,168.1L347.5,168.6L347.9,167.6L350.7,167.2L352.3,165.4L354.1,164.9L356.2,165.9L358.7,165.4L362.5,166.1L362.8,164.7L361.2,163.1L362.5,161.1L364.2,162.0L366.7,161.7L369.6,160.5L370.4,161.6L371.5,161.7L371.9,162.5L375.8,164.1L378.4,162.3L380.3,163.1L381.5,162.5L382.3,163.5L384.2,163.6L386.5,161.8L388.8,156.1L391.3,152.2L393.7,149.5L394.5,147.7L395.1,147.6L396.9,149.3L397.9,152.5L398.5,156.9L400.8,163.4L400.5,164.0L401.3,164.2L402.4,166.3L406.0,167.6L406.4,171.3L403.6,173.7L400.2,178.3L396.4,180.6L395.5,182.9L393.4,185.7L393.2,187.6L391.8,188.9L391.3,190.3L389.5,190.2L386.4,191.6L389.0,191.7L389.8,192.3L391.6,191.9L399.2,187.0L399.6,187.8L399.0,188.4L400.8,192.3L400.7,193.2L402.8,195.1L405.7,193.7L407.7,194.4L410.7,193.0L408.3,199.9L409.6,198.8L411.4,194.4L413.0,193.7L415.0,191.2L415.8,191.2L416.8,192.1L416.9,191.4L417.6,191.1L416.8,190.5L416.9,188.6L419.3,185.5L419.9,185.3L420.5,185.8L421.6,185.0L422.4,185.4L423.4,185.0L424.4,185.7L424.2,184.9L425.5,184.8L426.5,185.6L428.8,185.8L430.2,187.3L433.1,187.7L433.1,188.2L434.3,188.3L437.2,190.1L438.6,190.2L439.5,192.9L441.4,191.0L443.9,193.0L443.5,193.5L444.4,193.1L445.3,195.4L443.7,197.0L444.4,197.8L445.0,196.7L446.0,196.3L446.4,197.7L445.4,198.0L444.9,199.3L443.9,204.0L446.0,202.1L447.5,198.5L448.4,198.7L447.8,201.1L449.6,199.4L453.1,198.8L453.6,197.8L456.9,198.5L461.8,200.9L464.5,200.6L467.4,201.9L474.7,201.0L478.4,201.5L485.3,205.4L487.7,207.4L489.2,207.9L492.3,211.6L495.3,214.4L497.7,215.3L498.6,216.8L502.8,218.2L507.3,217.9L510.4,218.5L511.5,219.4L512.6,221.8L515.6,232.7L515.6,239.8L514.6,243.1L513.2,247.0L510.0,251.6L508.8,252.8L507.9,252.7L507.9,253.9L504.2,258.6L500.3,261.2L499.2,262.9L498.5,263.0L498.6,263.9L497.6,265.3L497.3,264.4L494.9,270.8L490.9,276.3L489.7,277.2L489.0,277.2L488.8,275.7L487.6,274.7L487.2,275.6L486.5,275.9L487.1,276.8L484.7,281.9L485.5,282.1L485.0,285.3L485.3,285.8L485.8,285.2L484.9,289.9L486.2,299.0L483.9,308.8L484.3,312.8L481.9,314.9L480.7,316.9L480.0,319.8L480.3,324.6L479.7,326.8L478.1,328.1L475.3,334.3L472.4,336.8L471.2,339.3L470.5,341.3L470.9,345.0L465.8,347.3L463.8,349.4L464.1,350.9L463.3,352.1L456.7,352.3L455.8,351.8L455.9,350.8L455.3,350.4L454.6,351.0L454.8,352.4L449.9,353.3L449.3,352.9L451.5,352.6L450.1,351.8L444.5,352.9L444.3,354.0L445.0,354.6L442.3,355.4L439.6,357.0L438.5,358.5L434.9,358.5L428.4,361.8L426.4,363.7L420.3,367.8L420.8,368.0L420.7,368.8L418.7,370.6L418.8,369.8L417.3,369.5L416.7,370.8L414.9,370.3L415.2,371.2L417.3,372.0L416.2,373.6L415.4,373.8L416.0,374.5L415.7,376.3L414.8,377.0L415.5,378.0L415.3,380.3L416.2,384.0L415.5,386.7L415.7,390.6L414.4,394.3L411.0,396.5L407.5,400.2L405.4,403.5L403.5,408.2L400.3,413.0L397.3,416.1L390.9,420.9L390.7,418.7L392.0,419.0L393.5,418.3L396.5,416.1L397.2,415.0L397.3,413.4L398.6,413.2L398.9,411.8L400.7,410.3L400.5,408.2L401.5,408.3L401.6,406.9L398.3,407.8L398.2,407.0L397.1,406.6L396.3,405.3L396.4,406.8L397.3,407.7L396.4,409.4L396.4,410.6L395.8,410.1L394.8,413.3L391.4,415.4L389.8,419.1L390.3,421.3L388.7,423.3L386.5,428.5L381.3,433.1L380.2,432.6L380.2,428.3L383.0,425.5L379.6,423.0L378.4,420.4L375.1,418.9L372.5,416.1L368.2,414.6L365.1,411.4L363.6,412.8L362.2,413.1L361.9,410.8L356.2,405.8L354.1,406.1L353.4,407.1L351.0,407.0L350.6,406.4L353.4,403.4L355.4,402.0L363.0,392.8L364.5,392.9L364.2,391.5L368.7,389.0L370.7,386.6L374.3,385.7L375.6,384.4L377.9,383.4L378.8,381.6L379.1,376.7L377.5,372.5L376.6,371.8L375.6,371.4L373.5,372.2L372.2,371.8L373.6,368.4L374.7,362.3L374.4,361.0L375.0,360.4L372.2,358.6L368.1,360.1L366.5,359.6L364.8,351.6L365.0,350.0L363.7,347.7L360.4,347.0L359.0,345.6L357.6,346.8L355.4,347.0L350.9,346.4L349.8,345.7L348.6,346.0L347.8,345.3L349.0,337.5L346.6,331.2L348.7,329.8L346.8,328.1L349.2,323.1L349.8,322.8L349.3,321.9L351.4,316.6L348.9,311.3L347.8,311.3L344.9,309.3L344.3,305.3L345.2,303.7L345.2,302.1L332.0,302.0L331.5,296.1L329.0,293.2L331.3,293.2L331.1,289.6L329.8,286.4L330.3,285.1L329.6,283.4L325.4,281.2L320.3,281.4L317.9,278.7L313.2,277.5L311.4,276.0L311.0,275.0L309.0,275.1L306.5,273.6L304.7,274.0L301.2,273.3L300.5,271.9L297.1,269.8L296.4,268.1L295.7,268.1L295.8,267.4L294.2,264.3L294.7,262.7L293.8,258.8L294.9,256.1L294.8,254.0L294.2,252.8L293.0,253.5L290.3,253.4L285.6,254.2L281.7,257.0L279.5,257.9L277.3,260.1L274.8,260.3L273.0,262.3L270.8,263.3L266.4,262.2L261.1,262.0L258.3,263.0L256.9,262.1L256.1,262.6L256.2,253.7L256.9,250.8L251.8,254.7L245.3,255.0L243.6,251.3L240.4,250.6L237.5,250.6L239.3,248.4L239.3,247.4L236.9,244.9L236.5,243.6L235.1,242.6L234.4,240.5L233.4,239.5L233.8,238.4L231.8,236.7L232.1,235.3L233.8,234.8L233.2,233.1L233.6,231.8L238.1,228.5L237.4,225.7L239.2,222.3L239.9,218.4L241.2,218.0L247.4,213.8L253.7,212.6L255.0,211.3L257.9,211.1L259.1,212.3L261.0,212.3L265.1,189.0L263.6,185.7L263.5,183.8L260.3,181.0L260.4,175.7L264.6,174.5L266.0,175.3L266.9,175.1L266.9,173.5L265.8,172.1L261.9,172.1L261.9,167.2L264.1,166.7L274.0,167.1L273.4,166.2L273.9,165.1L275.8,166.9L278.5,164.5L279.6,164.1L281.7,167.2L281.9,171.1ZM408.4,181.7L412.1,181.2L416.4,181.9L417.4,182.6L416.6,185.0L416.1,185.1L416.0,186.7L414.1,189.2L414.1,190.4L412.7,191.4L411.7,190.6L411.2,192.0L410.0,191.7L409.3,191.3L408.7,192.8L407.1,193.4L405.2,192.8L402.0,193.4L401.3,192.7L400.2,189.3L400.4,188.5L401.5,188.5L401.4,188.0L400.0,187.6L399.9,186.8L401.0,182.0L403.9,180.9ZM407.6,178.0L407.9,178.4L406.9,179.9L403.6,179.8L403.2,179.0L403.7,178.3ZM403.5,165.5L402.4,165.7L402.1,164.0L403.2,163.9ZM401.0,181.0L399.0,182.5L398.3,181.3L400.1,180.3L400.9,180.4ZM409.7,180.8L406.9,180.7L408.6,179.5L410.0,179.6ZM402.6,179.0L402.5,180.1L401.2,179.6L401.3,178.5L402.6,176.8L402.6,175.8L403.1,175.6L403.3,178.1ZM404.6,177.1L403.8,177.3L403.6,176.1L404.9,175.5L405.3,175.2L405.4,176.1ZM392.4,190.8L391.6,190.9L393.5,188.1L393.5,186.4L395.4,184.2L396.6,184.1L397.3,185.0L396.4,187.7ZM264.3,311.3L263.5,309.0L267.9,304.8L267.8,303.6L269.2,302.5L266.5,301.1L265.0,297.3L266.8,294.3L265.3,292.2L265.4,291.0L269.0,286.3L267.5,282.6L268.2,281.2L268.2,276.6L269.8,275.2L270.3,273.8L263.9,262.1L269.1,262.6L270.0,263.4L270.8,263.3L273.0,262.3L274.8,260.3L277.3,260.1L279.5,257.9L281.7,257.0L285.6,254.2L290.3,253.4L293.0,253.5L294.2,252.8L294.8,254.0L294.9,256.1L293.8,258.8L294.6,261.7L294.2,263.9L294.7,265.8L297.1,269.8L300.5,271.9L301.2,273.3L304.7,274.0L306.5,273.6L309.0,275.1L310.7,274.9L313.2,277.5L317.9,278.7L320.3,281.4L325.4,281.2L329.6,283.4L330.3,285.1L329.8,286.4L331.1,289.6L331.3,293.2L329.0,293.2L329.4,293.6L331.5,296.1L332.0,302.0L345.2,302.1L345.2,303.7L344.3,305.3L344.9,309.3L347.8,311.3L348.9,311.3L351.4,316.6L349.3,321.9L349.8,322.8L349.2,323.1L346.8,328.1L348.7,329.8L346.6,331.2L346.4,328.6L339.8,324.6L333.2,324.7L320.5,327.3L319.4,330.4L316.8,334.2L316.8,338.0L314.0,346.8L312.6,345.0L304.8,345.2L302.3,349.5L301.9,351.2L299.9,346.7L297.1,345.8L291.4,345.7L288.2,343.5L287.1,345.9L284.6,346.6L284.0,348.1L282.3,349.1L281.1,351.2L278.3,351.7L276.2,351.2L276.1,348.7L273.9,342.1L273.9,339.8L272.1,337.1L271.2,336.8L271.2,335.4L271.8,334.7L269.8,333.1L270.3,332.3L269.8,330.7L271.2,329.8L270.2,327.9L271.9,325.7L268.3,322.3L267.0,316.1L267.4,315.4L265.8,314.6ZM122.0,46.4L122.2,45.2L122.8,45.0L123.9,45.6L124.6,45.3L126.6,41.7L128.3,41.5L127.9,42.3L129.5,42.4L129.8,43.3L128.4,47.9L128.9,48.6L128.3,50.2L128.1,55.3L127.5,56.3L126.3,57.8L125.4,58.1L124.0,59.9L123.9,60.8L121.5,60.8ZM130.8,45.6L130.7,45.0L131.1,43.8L131.5,43.9ZM131.5,49.3L130.9,50.4L131.4,49.0L131.9,48.6ZM336.9,81.9L336.1,81.7L335.8,80.2L337.4,81.4ZM205.3,-1.9L204.6,-1.2L205.1,-0.9L205.6,-1.6L206.0,-1.0L206.3,1.0L205.9,2.0L204.5,1.9L203.9,-0.3L202.8,-1.6ZM208.5,-14.3L207.2,-15.2L208.3,-16.2L208.4,-19.2L206.4,-21.3L203.3,-21.8L203.8,-22.1L206.2,-21.8L209.6,-19.0L209.8,-17.5L208.9,-16.8ZM238.9,21.1L237.9,22.7L236.2,22.9L234.3,23.0L234.1,21.7L235.3,21.1L237.4,21.3L238.6,20.1ZM204.7,-5.3L204.7,-3.5L202.5,-2.2L201.8,-3.7L200.2,-4.1L199.7,-4.7L200.4,-4.8L200.5,-4.4L201.1,-4.9L200.7,-5.7L201.5,-6.9L201.7,-9.0L203.0,-8.1ZM199.3,-20.5L203.3,-20.6L203.4,-20.0L198.0,-18.8L195.7,-20.2L197.1,-19.4L198.3,-19.9L198.5,-21.0ZM207.6,-7.6L206.8,-7.4L206.3,-7.9L207.7,-8.1L208.1,-7.8ZM231.4,9.6L231.1,10.0L229.6,9.3L229.6,8.7ZM228.7,-0.5L227.8,0.2L228.0,-0.8ZM230.3,13.4L229.8,13.6L229.9,13.2L232.3,11.4L232.4,10.7L232.2,9.6L232.9,9.5L233.0,11.0ZM212.6,-11.2L216.4,-8.6L216.1,-4.9L215.0,-6.1L215.8,-6.2L216.2,-8.4L214.7,-9.8L212.8,-10.7L211.7,-10.7L212.2,-11.7ZM219.8,4.1L217.1,3.0L217.3,2.5L217.7,2.6ZM225.7,8.3L224.8,7.0L223.0,6.3L223.6,5.5L222.8,3.9L222.3,2.5L223.0,3.4L224.1,6.4L225.7,7.5ZM222.3,-1.5L222.4,-1.1L220.9,-1.0L221.6,-2.0L220.3,-3.7L219.2,-4.9L219.8,-5.1ZM238.8,11.8L240.3,12.1L240.9,12.5L240.6,12.8L237.9,12.1L238.1,11.6ZM239.7,18.7L238.7,19.1L238.6,18.6L239.1,18.3ZM320.8,52.2L319.8,52.4L319.6,51.8L320.1,51.2L321.0,51.8ZM320.6,48.2L319.9,48.0L319.7,47.2L320.6,47.5ZM310.6,44.5L311.4,44.5L311.3,44.9Z", "land": "M207.4,115.1L206.6,116.3L208.7,120.2L207.6,121.2L207.5,122.2L206.2,123.3L205.8,123.4L204.6,122.3L204.7,123.5L203.6,125.8L201.6,123.4L199.8,119.5L200.8,119.3L200.8,118.1L201.8,117.1L204.6,119.0L202.8,117.6L202.1,116.3L201.2,117.0L200.0,116.2L199.9,117.3L199.1,115.3L195.0,112.5L191.9,112.7L190.6,113.6L189.7,115.2L190.2,115.5L185.0,118.4L185.0,119.4L188.1,123.0L188.3,123.7L187.9,124.1L186.3,124.3L185.2,125.4L182.2,125.8L180.6,120.8L180.0,121.1L179.7,122.5L179.2,122.8L177.5,122.1L175.8,119.0L174.1,118.4L172.7,118.5L172.2,117.7L168.2,117.7L167.6,118.2L167.5,119.5L166.4,117.5L167.6,116.6L167.2,114.4L168.6,113.1L167.1,112.0L167.1,109.1L168.1,108.1L169.2,108.7L169.8,108.2L171.2,109.3L171.4,110.9L172.5,111.1L172.1,112.3L173.3,113.0L175.5,112.8L174.6,111.4L177.2,113.8L178.5,114.1L182.3,113.3L184.4,111.9L187.4,110.9L191.4,108.0L194.8,108.5L196.1,109.3L199.2,109.5L202.2,110.7ZM196.3,117.9L196.2,118.3L195.9,117.6L196.2,116.6L196.6,116.6L196.8,117.4ZM176.7,125.0L174.9,124.1L175.2,123.1L175.8,122.8L176.1,124.3ZM172.2,109.6L172.1,110.0L171.5,109.4ZM195.1,118.1L194.8,118.4L194.7,118.1L194.9,117.8ZM165.5,67.6L164.6,68.9L164.1,68.2L163.6,68.8L164.5,69.4L165.3,72.4L163.6,75.0L162.5,80.1L162.9,86.9L162.3,87.0L162.1,86.6L162.3,84.7L161.2,86.2L161.9,87.8L161.7,89.8L161.1,89.6L160.6,91.0L161.5,91.3L161.9,92.7L160.3,95.2L161.1,97.4L162.0,98.1L161.8,98.7L160.0,99.5L158.2,99.1L156.9,97.7L154.3,97.1L152.8,97.9L147.9,96.1L146.7,97.0L146.1,96.0L141.5,92.0L139.4,88.8L132.8,83.2L132.8,82.8L133.4,82.2L134.6,83.1L137.6,82.4L138.2,80.8L139.7,80.1L139.4,76.9L142.5,76.7L144.6,74.6L146.8,76.1L147.2,75.1L150.6,72.7L151.0,71.1L151.9,70.4L152.2,69.4L153.1,68.9L155.5,70.2L160.3,69.0L162.7,67.7ZM-80.6,-64.0L-63.2,-65.4L-64.0,-63.8L-36.5,-54.9L-16.0,-55.0L-16.0,-58.3L-3.3,-58.3L-1.1,-55.9L7.8,-49.4L9.6,-46.0L10.0,-43.9L11.6,-41.8L19.9,-37.5L21.1,-37.8L22.5,-39.1L23.7,-42.3L26.5,-44.0L29.0,-43.5L32.3,-43.6L33.5,-43.1L38.0,-38.9L41.1,-33.8L41.3,-32.5L45.2,-28.0L47.1,-26.6L47.4,-22.9L49.0,-20.7L49.9,-18.4L56.0,-15.8L59.4,-15.3L62.5,-14.0L64.1,-14.7L63.6,-11.9L61.5,-7.6L59.8,1.8L59.8,7.9L59.1,11.2L59.7,14.2L61.0,16.4L62.9,18.3L62.2,20.5L62.4,18.2L59.7,14.8L60.6,18.0L61.5,18.9L64.3,25.4L69.1,31.0L70.3,34.9L74.1,39.0L73.0,38.9L75.1,39.8L74.6,39.2L78.4,39.7L79.6,40.7L81.2,41.1L83.0,43.7L85.6,43.5L90.2,41.8L95.0,41.5L96.3,40.4L98.2,39.9L101.6,39.6L102.3,40.2L102.0,41.0L104.8,41.6L106.7,40.3L106.0,39.0L106.2,38.2L105.4,38.8L105.5,38.3L109.0,36.4L110.6,34.9L110.9,32.0L112.3,30.4L112.4,25.8L113.4,22.4L117.2,20.4L124.0,19.4L127.0,18.2L130.4,18.0L135.8,19.1L136.3,18.4L135.0,18.2L137.4,18.1L138.9,19.3L139.3,21.4L138.2,24.1L134.6,28.3L134.4,31.0L132.7,32.7L133.0,33.3L134.6,33.1L134.1,34.2L132.9,34.9L132.9,35.6L134.0,35.3L131.5,43.0L130.0,41.1L130.3,39.5L129.9,38.7L129.0,39.6L128.3,41.5L126.6,41.7L124.6,45.3L123.9,45.6L122.8,45.0L122.2,45.2L122.0,46.4L108.7,46.4L108.7,50.6L105.7,50.6L110.8,54.7L111.3,56.2L112.9,57.1L112.7,59.5L103.3,59.5L99.9,65.4L100.9,66.9L100.3,67.8L100.3,69.8L99.7,70.9L95.6,66.5L87.5,59.6L84.2,57.9L83.8,58.3L86.9,59.9L82.1,58.5L82.7,57.6L82.2,57.4L81.2,57.8L81.2,57.3L80.4,56.9L79.5,57.9L81.1,58.4L78.7,58.7L76.3,60.2L70.9,62.3L68.7,62.6L63.9,60.7L59.7,60.2L56.9,58.5L54.2,57.7L52.4,56.0L45.7,54.6L43.3,53.1L37.3,51.0L31.9,47.6L29.6,45.3L23.9,44.5L18.5,42.6L15.1,38.8L7.7,35.2L3.8,30.2L2.4,27.1L3.3,26.3L5.4,25.7L4.9,24.4L3.5,23.9L5.5,21.6L5.7,18.8L4.1,17.9L2.5,15.1L2.6,12.5L1.5,10.3L-2.9,6.0L-6.8,0.9L-12.8,-3.5L-11.1,-2.7L-11.0,-3.7L-14.1,-4.6L-14.6,-5.9L-16.5,-8.1L-15.5,-7.6L-14.9,-8.0L-19.5,-10.4L-20.2,-11.5L-21.9,-11.1L-22.2,-11.6L-20.9,-13.0L-22.3,-12.1L-23.9,-12.2L-24.5,-13.0L-24.8,-15.2L-23.2,-17.3L-22.6,-16.9L-23.7,-19.0L-25.2,-20.3L-27.2,-20.3L-28.6,-23.1L-31.0,-23.7L-32.4,-24.9L-33.4,-27.4L-32.8,-29.0L-35.6,-29.2L-37.1,-29.8L-39.6,-32.9L-41.1,-33.5L-44.6,-37.6L-45.1,-39.5L-46.2,-40.1L-46.5,-41.5L-48.8,-44.9L-49.4,-47.3L-51.5,-50.9L-51.6,-52.9L-51.0,-53.2L-51.0,-53.8L-55.2,-55.1L-55.3,-56.0L-56.2,-56.7L-57.6,-57.2L-58.0,-56.4L-59.0,-56.3L-64.7,-59.3L-63.7,-57.4L-64.3,-53.7L-62.5,-48.8L-62.5,-46.2L-60.7,-43.7L-56.2,-40.3L-54.7,-38.3L-54.3,-37.0L-53.5,-37.1L-53.0,-36.1L-52.2,-36.0L-51.4,-33.8L-49.8,-33.2L-48.8,-28.7L-45.9,-26.4L-44.9,-23.9L-43.5,-23.1L-42.5,-20.1L-41.3,-19.4L-42.1,-20.7L-42.0,-21.6L-40.3,-20.3L-38.6,-15.9L-38.3,-13.4L-37.3,-11.8L-36.5,-11.5L-35.5,-8.6L-34.0,-6.5L-34.3,-4.4L-33.8,-2.6L-31.6,-0.8L-30.9,-2.6L-27.6,0.5L-26.6,2.5L-25.4,3.0L-24.8,3.9L-25.3,6.3L-27.7,8.1L-29.0,8.3L-30.3,4.9L-31.6,3.0L-33.5,2.0L-41.2,-4.2L-42.0,-4.1L-42.4,-5.0L-44.0,-6.3L-44.4,-7.8L-44.0,-11.8L-44.7,-14.3L-46.2,-16.6L-48.2,-17.4L-50.9,-19.4L-51.6,-20.4L-51.8,-22.1L-52.7,-20.9L-55.0,-20.4L-56.8,-22.2L-61.2,-24.1L-61.9,-25.7L-65.2,-28.0L-65.5,-28.8L-62.1,-28.4L-60.1,-29.0L-60.1,-28.3L-58.5,-27.6L-59.2,-28.7L-59.1,-29.4L-59.9,-29.5L-58.3,-33.2L-59.0,-34.5L-64.7,-40.1L-66.4,-40.7L-70.1,-43.2L-71.1,-44.7L-71.1,-47.3L-72.4,-48.1L-72.9,-51.0L-74.6,-52.3L-74.9,-54.0L-77.2,-56.7L-77.7,-58.0L-77.0,-58.2L-76.9,-58.9L-78.6,-60.0ZM138.1,27.7L137.7,28.0L137.5,27.1L138.2,25.9L139.4,25.9ZM-3.6,17.9L-3.8,18.5L-4.4,18.3L-4.6,17.3ZM-35.6,39.4L-36.7,39.1L-36.5,38.8L-36.1,38.5ZM-33.1,-7.5L-32.9,-6.7L-34.1,-7.8L-34.0,-8.2ZM-51.8,-37.9L-54.3,-39.8L-54.9,-40.6L-55.0,-41.8L-53.7,-41.1L-53.4,-40.0L-52.2,-39.8ZM-66.4,-30.5L-67.8,-30.8L-67.1,-31.7L-67.2,-32.6L-66.6,-32.5ZM-44.9,-37.5L-45.5,-35.8L-47.2,-36.4L-46.9,-38.8L-45.5,-39.3ZM-88.7,-37.1L-89.0,-36.8L-89.8,-38.3L-89.6,-38.9L-89.2,-38.9ZM139.7,20.7L139.8,21.1L139.6,20.8L139.4,20.4ZM103.7,39.9L102.8,39.9L104.4,39.2L104.8,39.3ZM-36.9,-15.2L-37.7,-13.9L-37.5,-15.3L-36.9,-15.6ZM-41.3,-3.0L-41.4,-2.6L-43.6,-4.0L-42.4,-4.0ZM-43.9,-4.1L-44.7,-5.5L-45.6,-5.9L-44.6,-9.6L-44.9,-6.3ZM208.2,41.6L210.8,42.1L214.8,43.9L215.8,45.6L213.5,46.0L211.6,45.2L210.5,46.1L209.2,45.9L208.6,47.1L207.5,46.2L204.5,45.9L202.5,43.7L200.7,43.4L200.4,42.8L201.3,41.6L203.8,41.1ZM165.5,67.6L162.7,67.7L162.0,68.4L156.1,70.2L154.7,70.0L153.1,68.9L152.2,69.4L151.9,70.4L151.0,71.1L150.8,72.4L147.2,75.1L146.8,76.1L144.6,74.6L142.5,76.7L139.4,76.9L139.7,80.1L138.6,80.5L137.9,82.1L137.2,82.6L135.2,82.7L135.2,81.9L134.7,81.5L134.1,79.9L131.7,79.5L132.3,79.1L132.0,78.6L132.3,76.2L130.5,75.9L129.3,75.1L126.9,76.1L126.7,75.2L125.3,74.8L122.3,72.2L120.5,71.9L121.9,70.4L121.5,68.5L122.1,67.0L128.7,62.0L129.5,62.2L131.3,60.9L133.2,60.7L134.1,61.6L135.6,61.2L138.3,61.8L142.3,61.6L145.4,60.3L145.0,59.8L148.6,60.8L152.3,60.1L155.3,61.5L156.3,61.3L155.6,61.0L157.5,61.3L161.0,64.2L158.8,63.7L158.7,64.5L159.9,64.5L161.1,65.8L162.4,65.5L163.0,65.8L161.9,64.7L163.9,65.7L164.5,66.9ZM141.8,57.2L140.7,57.7L140.3,57.7L140.9,57.3L142.4,56.7L143.0,56.8ZM145.8,56.5L145.3,57.0L145.4,56.4L146.1,56.2ZM99.7,70.9L100.3,69.8L100.3,67.8L100.9,66.9L99.9,65.4L103.3,59.5L112.7,59.5L112.9,57.1L111.3,56.2L110.8,54.7L105.7,50.6L108.7,50.6L108.7,46.4L122.0,46.4L121.4,60.8L123.9,60.8L126.0,61.8L126.5,61.1L126.1,60.4L128.7,62.0L122.1,67.0L121.5,68.5L121.9,70.4L120.5,71.9L119.0,72.1L119.2,73.2L115.6,75.7L115.2,77.0L111.5,75.5L107.6,75.6L105.9,75.1ZM120.5,71.9L122.3,72.2L125.3,74.8L126.7,75.2L126.9,76.1L129.3,75.1L130.5,75.9L132.3,76.2L132.0,78.6L132.3,78.9L131.6,79.6L131.7,80.4L130.9,81.1L129.1,81.3L125.4,80.4L126.7,81.1L121.1,78.9L117.3,78.3L115.2,77.0L115.6,75.7L119.2,73.2L119.0,72.1ZM248.0,44.7L248.0,42.4L246.3,40.5L247.3,40.4L248.2,39.5L247.7,37.6L248.9,36.3L248.1,35.4L248.4,33.9L247.9,32.1L249.1,30.9L251.8,31.1L253.9,30.6L256.2,31.7L257.6,31.7L259.4,32.7L261.1,32.5L262.7,35.3L265.7,35.0L266.4,35.5L265.7,36.0L263.7,36.0L263.5,36.6L270.3,38.2L272.5,40.0L272.7,41.0L270.5,43.3L268.5,41.9L266.1,41.7L262.5,41.7L259.5,43.1L257.3,43.4L255.3,42.4L253.0,43.1L252.8,44.5L250.4,47.7L249.0,46.7L248.7,45.3ZM175.0,6.3L176.9,6.6L179.2,6.3L180.1,7.1L183.6,6.7L185.7,7.9L189.7,8.3L189.4,8.8L193.6,11.9L197.9,12.2L205.5,16.5L206.5,16.6L205.9,15.8L206.5,16.0L209.0,17.7L207.4,17.9L208.3,18.9L209.4,18.1L211.3,19.5L211.0,20.0L212.1,19.8L212.6,20.4L215.5,20.8L216.8,21.5L219.3,21.7L220.3,22.5L219.8,23.3L220.3,23.7L219.2,23.9L219.3,24.6L224.9,25.0L228.1,27.1L230.6,27.8L230.7,28.7L230.0,29.4L227.2,29.6L223.7,30.7L223.5,29.9L222.5,30.8L216.2,30.1L211.7,30.4L204.9,31.1L206.1,29.4L209.0,27.4L209.3,26.3L208.4,25.2L202.0,24.3L199.3,22.1L198.7,19.4L197.6,18.1L193.0,18.1L186.7,16.0L184.8,14.1L184.7,14.5L180.9,14.4L179.8,13.0L179.1,14.2L177.9,13.6L175.2,13.5L173.3,12.1L176.0,11.3L176.0,10.6L175.0,10.0L168.5,9.8L163.9,13.3L160.1,13.7L159.2,15.4L155.7,16.7L155.7,15.5L153.0,16.1L157.0,14.4L156.8,12.2L159.1,10.0L164.8,7.7L173.1,6.1ZM205.2,15.4L204.9,15.6L203.6,14.7L203.4,14.3L205.5,14.6ZM202.6,12.9L200.9,12.0L201.8,11.8ZM198.3,10.9L200.3,11.0L200.8,11.6L200.4,11.7L198.3,11.3L197.8,11.0ZM203.7,14.0L202.5,13.5L202.9,12.8ZM169.8,18.2L166.9,19.2L165.3,18.0L166.6,18.3L166.0,16.6L166.7,15.4L168.7,15.8ZM169.8,108.2L169.2,108.7L168.1,108.1L167.1,109.1L167.1,112.0L168.6,113.1L167.2,114.4L167.6,116.6L166.4,117.5L167.5,119.5L165.7,117.4L165.4,115.6L163.2,114.7L164.5,116.2L164.5,117.0L162.7,116.7L161.3,115.4L162.2,114.0L162.0,112.2L161.3,111.4L157.8,109.0L155.2,108.2L154.2,105.8L150.4,103.2L150.4,104.2L153.0,106.3L151.3,108.1L149.9,106.4L147.6,105.7L146.4,104.0L146.1,102.0L147.3,100.2L147.3,99.4L145.6,98.3L146.7,97.6L147.6,96.1L152.8,97.9L154.3,97.1L156.9,97.7L158.2,99.1L160.0,99.5L161.5,99.1L162.0,98.1L164.1,102.6L168.2,107.5Z"}, "south": {"w": 310.0, "h": 253.5, "proj": {"lon0": -82, "lat1": 13, "c": 0.993572, "k": 6.5}, "base": "M136.8,25.1L136.0,25.3L136.8,24.7L137.3,24.7ZM117.2,12.1L117.4,13.0L116.8,13.7L113.9,13.3L114.0,12.7L116.1,13.0ZM135.6,26.9L135.2,26.3L136.2,25.5L136.5,26.3ZM142.0,28.9L143.1,30.9L141.9,32.2L138.8,33.7L137.4,35.5L138.0,37.6L139.9,38.0L139.8,39.0L137.4,40.5L134.7,41.0L134.8,44.1L133.1,45.9L137.7,50.9L138.0,52.7L135.6,55.0L133.8,55.1L132.0,56.6L128.2,57.9L126.5,57.5L124.6,58.4L123.6,61.1L122.9,61.1L120.5,58.9L116.1,59.0L115.0,57.7L112.5,57.6L111.2,56.7L111.9,58.4L114.8,61.2L114.8,63.7L116.2,67.1L115.9,68.2L120.2,68.8L120.2,70.1L116.2,71.9L114.9,74.6L109.1,77.3L106.7,80.0L106.2,80.0L106.4,79.0L105.4,78.1L102.9,79.4L100.6,79.2L97.7,76.6L95.5,69.0L92.9,66.3L91.3,66.3L94.9,62.3L92.6,59.4L91.3,55.2L91.5,50.2L93.8,46.0L93.8,44.3L91.3,43.6L87.4,44.5L81.2,44.7L76.9,39.4L73.3,38.5L70.2,39.1L64.5,38.8L63.2,36.6L61.5,35.6L62.1,30.6L60.3,28.4L59.4,25.3L57.7,24.3L55.8,24.7L58.1,20.9L59.0,16.3L60.1,14.1L63.0,11.7L64.9,8.7L69.0,7.4L64.9,9.3L65.6,11.8L66.9,12.9L66.3,13.0L67.2,15.2L63.9,20.7L66.1,23.8L66.6,25.5L69.5,25.0L70.5,23.7L70.7,21.4L67.8,16.0L67.5,14.4L68.0,13.2L76.0,10.6L76.9,9.6L78.8,9.9L78.7,8.6L76.3,8.9L75.6,7.2L76.2,5.9L77.5,5.3L78.4,6.1L79.9,9.9L82.5,9.6L85.1,10.2L87.8,12.0L88.7,13.8L88.5,15.0L89.5,16.3L101.7,15.4L104.3,17.8L109.0,19.0L110.8,18.9L115.0,16.5L118.0,16.2L114.6,16.0L114.3,15.4L129.9,14.7L126.7,15.9L123.3,16.0L124.7,17.6L124.4,19.1L125.6,18.2L127.1,20.9L127.7,20.3L128.2,20.7L128.2,19.6L128.7,19.7L130.9,21.9L130.7,20.7L131.8,20.2L137.0,23.7L135.5,25.0L134.0,28.6L131.6,28.6L133.7,29.8L136.9,28.7L139.0,28.9L139.9,28.4ZM184.9,303.8L182.2,308.0L179.7,309.9L175.0,311.6L170.0,310.5L166.3,311.4L162.4,309.9L160.4,308.4L155.8,308.4L152.4,304.9L152.2,303.7L152.6,300.2L154.4,298.8L153.7,295.6L154.2,294.1L153.8,292.0L155.1,290.0L154.6,289.2L156.2,285.1L155.8,283.3L157.3,281.0L160.1,281.3L160.7,280.4L162.5,280.2L167.6,284.6L167.9,286.5L170.5,285.0L173.3,287.8L177.0,289.2L179.4,291.6L182.4,292.9L183.4,295.1L186.5,297.3L183.9,300.1L183.9,303.3ZM111.3,-31.2L112.5,-30.9L111.8,-30.6L110.5,-30.6ZM102.5,-35.4L105.7,-35.0L105.8,-34.1L104.4,-32.9L102.5,-32.2L98.3,-32.4L95.6,-32.5L95.8,-34.0L95.2,-34.9L95.8,-35.7ZM107.0,-33.2L106.2,-33.2L106.7,-33.6L107.8,-33.4ZM47.1,-208.0L67.7,-208.0L68.9,-209.9L71.9,-209.8L73.0,-210.8L73.0,-211.6L75.6,-213.9L75.9,-216.1L77.1,-217.4L77.4,-219.1L82.4,-224.0L83.6,-223.8L83.6,-222.8L84.4,-222.4L88.9,-223.2L91.7,-221.5L91.7,-212.7L94.1,-211.9L93.8,-209.8L94.8,-209.0L96.1,-209.1L96.2,-207.3L97.0,-206.9L95.6,-205.9L91.5,-205.2L90.0,-204.0L89.4,-204.8L87.5,-204.8L87.0,-203.2L85.2,-203.7L85.8,-204.4L85.3,-204.5L85.5,-205.2L84.2,-204.3L83.1,-201.7L80.6,-200.8L80.4,-201.4L79.9,-200.7L79.7,-201.5L79.2,-200.5L78.8,-200.9L78.7,-200.0L77.1,-200.4L75.8,-199.4L76.2,-199.1L74.1,-197.3L72.1,-193.9L73.5,-192.6L72.1,-192.1L70.7,-190.7L72.7,-190.0L73.3,-188.4L74.7,-186.9L77.5,-187.4L76.8,-188.7L76.0,-189.0L76.8,-189.0L77.6,-188.2L77.8,-186.4L73.3,-185.5L73.0,-186.6L70.0,-185.2L70.1,-186.8L69.3,-186.4L68.5,-187.2L67.7,-184.5L58.6,-183.9L51.7,-180.4L52.5,-182.4L51.9,-183.6L52.1,-181.4L50.0,-178.9L51.8,-178.1L51.1,-174.1L51.0,-175.3L50.0,-173.0L49.0,-172.6L48.9,-171.5L46.5,-169.0L45.5,-168.7L45.9,-169.9L41.8,-172.2L42.5,-174.1L44.7,-175.4L41.4,-173.2L42.7,-169.6L44.6,-167.6L44.0,-166.3L44.7,-166.3L45.0,-165.3L39.2,-157.0L38.9,-158.6L40.9,-162.2L39.7,-162.3L40.1,-163.1L39.2,-163.6L39.7,-164.9L38.4,-164.3L37.0,-165.3L37.0,-166.4L38.6,-166.6L37.4,-167.4L36.5,-167.1L37.7,-168.0L37.2,-168.6L36.6,-168.4L36.7,-169.1L37.6,-168.9L37.9,-169.5L37.3,-169.4L37.2,-170.2L38.3,-171.4L39.6,-171.4L38.7,-171.7L39.6,-172.3L38.3,-172.6L38.1,-171.8L37.1,-171.9L37.0,-171.1L36.6,-171.6L36.0,-170.5L35.1,-170.8L36.0,-169.8L35.7,-169.2L35.1,-169.4L35.5,-166.0L36.2,-164.9L34.4,-166.0L36.5,-163.1L33.1,-165.0L33.0,-164.4L32.3,-165.4L30.8,-165.2L32.1,-168.3L30.6,-166.4L30.5,-164.8L32.0,-164.8L32.9,-163.8L37.0,-161.8L36.5,-160.4L35.6,-160.4L31.6,-163.6L35.2,-160.3L36.8,-159.7L36.4,-159.4L37.1,-158.8L35.8,-157.8L33.9,-159.3L36.6,-157.0L36.9,-156.3L36.2,-155.9L34.7,-157.4L30.7,-158.1L34.4,-157.1L35.6,-155.3L38.8,-155.4L41.8,-148.3L39.1,-153.8L38.8,-152.6L39.9,-150.2L37.8,-151.3L37.8,-150.4L37.0,-150.7L37.3,-150.3L36.3,-150.4L35.1,-149.6L34.0,-151.0L34.1,-149.2L38.3,-149.3L38.2,-147.5L39.7,-149.2L40.3,-148.5L40.2,-147.2L37.6,-145.3L35.6,-145.6L35.0,-146.5L34.0,-145.8L32.0,-146.4L35.4,-144.8L33.7,-142.9L31.8,-144.0L32.5,-143.2L33.9,-142.6L35.8,-142.9L36.4,-142.6L35.9,-142.0L30.4,-140.4L29.6,-141.3L29.8,-139.9L27.4,-138.4L26.3,-136.1L26.1,-137.6L25.7,-135.9L23.2,-136.0L20.4,-134.7L18.1,-131.6L17.9,-132.6L17.6,-130.9L14.2,-128.6L13.3,-128.8L13.3,-127.8L10.6,-126.8L8.8,-126.8L9.9,-126.2L9.2,-125.4L7.7,-126.4L8.4,-124.9L7.0,-123.1L5.7,-122.7L6.0,-122.1L5.2,-121.6L4.8,-120.5L5.3,-120.5L4.0,-119.3L4.6,-118.7L3.6,-118.3L3.1,-116.2L4.8,-109.2L9.5,-100.7L9.1,-99.3L10.0,-96.9L9.0,-98.7L9.0,-100.9L8.4,-99.7L8.5,-101.3L7.5,-102.4L8.1,-100.0L12.3,-91.0L12.1,-83.4L11.0,-82.0L10.5,-80.2L8.2,-79.0L5.7,-78.9L5.6,-80.0L6.8,-79.7L5.7,-80.4L4.1,-83.4L1.8,-84.4L0.3,-87.7L1.1,-89.0L-0.3,-88.1L-0.1,-90.8L-1.2,-90.6L-1.2,-90.0L-1.9,-90.2L-4.6,-94.2L-2.6,-96.4L-4.1,-97.4L-4.3,-95.7L-5.4,-96.5L-4.3,-100.7L-4.2,-103.3L-10.9,-110.0L-13.2,-111.2L-14.9,-110.9L-15.4,-109.9L-21.4,-108.4L-22.0,-109.0L-22.0,-109.5L-21.4,-108.9L-21.7,-109.7L-23.7,-111.3L-23.3,-112.4L-24.5,-111.6L-28.8,-113.1L-26.6,-113.1L-27.5,-113.7L-33.6,-112.7L-32.2,-113.3L-32.3,-114.2L-33.4,-114.0L-34.1,-112.7L-35.4,-112.4L-35.2,-113.1L-36.3,-112.2L-38.8,-112.0L-37.4,-112.4L-38.8,-115.0L-39.6,-112.9L-44.6,-113.2L-47.3,-112.7L-49.0,-111.6L-53.1,-113.0L-54.3,-111.4L-53.5,-110.9L-50.0,-111.6L-49.5,-111.3L-50.5,-110.5L-49.3,-109.9L-47.8,-110.8L-47.5,-109.3L-49.9,-108.0L-48.5,-106.7L-45.3,-105.3L-46.2,-104.1L-46.7,-104.5L-47.6,-103.9L-48.1,-105.3L-52.7,-107.5L-52.0,-106.2L-53.0,-104.7L-54.1,-105.9L-55.5,-105.8L-56.5,-104.9L-60.0,-105.9L-59.1,-106.1L-59.7,-107.7L-61.4,-107.6L-63.9,-109.4L-65.5,-108.5L-65.1,-107.9L-66.3,-107.6L-72.2,-109.1L-76.4,-108.7L-76.7,-109.3L-76.0,-110.2L-76.5,-110.4L-77.2,-109.3L-76.8,-108.5L-82.4,-106.5L-80.9,-107.6L-82.5,-107.6L-82.3,-108.9L-84.1,-108.6L-83.2,-106.4L-85.7,-103.8L-91.9,-100.7L-90.5,-101.6L-93.3,-101.4L-94.5,-102.1L-93.1,-100.5L-94.8,-99.7L-95.4,-100.2L-95.8,-98.8L-97.9,-98.4L-97.8,-97.9L-97.1,-98.1L-97.3,-97.4L-99.7,-96.4L-98.7,-95.4L-99.7,-93.1L-101.8,-94.0L-101.3,-92.9L-100.0,-92.5L-100.5,-90.8L-99.7,-87.7L-97.8,-84.7L-99.3,-83.7L-110.5,-87.4L-112.7,-91.4L-113.1,-94.6L-118.2,-99.6L-121.1,-105.2L-125.2,-108.8L-131.4,-109.6L-133.9,-108.2L-134.9,-105.4L-137.3,-104.0L-144.7,-107.7L-146.1,-109.6L-148.0,-114.3L-156.0,-119.9L-157.9,-122.0L-169.3,-122.1L-169.3,-119.1L-187.6,-119.1L-212.1,-126.8L-211.3,-128.1L-226.9,-127.0L-229.1,-131.9L-233.0,-134.7L-235.1,-134.8L-235.8,-136.6L-239.9,-137.2L-242.9,-139.2L-248.5,-139.6L-249.6,-140.3L-249.7,-143.8L-250.9,-144.4L-251.2,-145.8L-253.7,-147.4L-257.5,-151.7L-257.8,-153.2L-257.1,-155.0L-259.4,-155.9L-260.9,-157.3L-261.6,-159.5L-261.2,-161.2L-258.8,-159.1L-260.8,-162.2L-260.4,-162.5L-255.3,-162.9L-260.9,-163.4L-261.5,-163.2L-261.7,-161.4L-264.3,-162.9L-264.8,-162.4L-264.6,-164.0L-264.2,-163.8L-269.3,-168.4L-270.2,-174.0L-273.5,-177.9L-272.1,-181.8L-271.7,-185.0L-274.7,-193.8L-273.5,-197.2L-272.5,-197.8L-273.1,-197.7L-272.2,-199.5L-270.8,-211.8L-271.2,-215.9L-266.2,-215.5L-267.8,-216.3L-271.7,-216.3L-271.5,-218.4L-270.9,-217.3L-270.5,-218.8L-272.0,-220.1L-270.2,-220.8L-272.0,-221.2L-272.1,-220.7L-273.7,-225.3L-275.5,-227.3L-275.8,-230.0L-271.1,-228.6L-265.8,-228.5L-264.6,-228.0L-263.4,-228.4L-262.6,-226.7L-265.7,-223.5L-264.3,-223.6L-265.2,-223.6L-265.1,-224.1L-261.8,-227.0L-261.7,-226.0L-262.7,-225.0L-261.9,-224.0L-262.1,-222.9L-262.9,-223.1L-263.3,-222.4L-263.7,-223.2L-265.0,-221.9L-262.9,-221.7L-260.6,-223.4L-260.9,-226.1L-259.9,-227.6L-261.0,-228.7L-260.9,-228.0L-261.7,-228.5L-261.0,-229.4L-262.6,-230.5L-261.5,-230.8L-261.6,-231.9L-263.4,-234.0L-85.0,-233.9L-85.0,-236.4L-83.0,-236.0L-82.7,-234.0L-81.5,-232.3L-75.6,-230.9L-71.0,-231.5L-67.8,-230.3L-67.3,-229.3L-64.6,-229.5L-61.5,-227.9L-57.6,-228.9L-56.5,-228.2L-52.3,-228.3L-51.0,-227.5L-48.2,-227.5L-41.2,-229.5L-18.6,-220.3L-17.9,-218.6L-16.5,-217.5L-13.9,-218.0L-12.8,-215.1L-10.4,-215.3L-9.5,-214.5L-10.3,-213.3L-3.6,-210.3L-0.9,-198.7L-3.5,-192.6L-6.9,-190.5L-7.4,-189.4L-6.7,-187.4L-4.5,-186.4L-2.8,-186.4L4.7,-189.9L11.3,-190.9L19.1,-193.7L19.9,-194.4L18.3,-198.0L20.4,-198.8L33.5,-199.1L37.8,-203.5L44.0,-207.3ZM-0.2,-87.4L-1.2,-87.6L-1.3,-88.1ZM-0.5,-88.1L-0.9,-88.3L-0.8,-88.8ZM10.5,-78.9L9.2,-77.7L10.3,-79.2L11.3,-80.3ZM-63.2,-107.3L-64.6,-107.7L-63.8,-108.2L-63.0,-107.7ZM-97.0,-96.9L-96.2,-98.3L-95.8,-98.1ZM-99.2,-93.0L-98.8,-94.4L-97.3,-96.3ZM-98.0,-85.5L-99.5,-89.8L-99.5,-91.7ZM6.2,-76.2L5.9,-76.3L6.9,-76.4ZM2.8,-75.4L2.4,-75.3L2.8,-76.0ZM-46.7,-111.0L-47.2,-111.0L-46.4,-111.6ZM4.1,-41.3L5.6,-41.3L5.0,-41.0L3.8,-40.8ZM14.1,-43.6L13.5,-43.6L14.2,-43.9ZM111.5,-125.4L110.7,-125.3L111.8,-126.0ZM113.7,-35.5L113.4,-35.6L114.2,-35.9ZM65.4,-57.5L64.7,-57.8L65.0,-58.2ZM62.4,-57.5L63.4,-57.1L62.4,-56.9ZM137.2,11.8L137.5,11.2L138.7,10.9L138.6,11.3ZM135.5,18.6L129.8,19.1L132.4,17.8L132.5,15.6L131.4,14.8L136.2,14.0L135.4,15.1ZM179.8,49.7L177.9,51.9L177.9,55.3L178.6,58.1L180.9,61.2L179.5,64.1L179.6,66.2L178.2,68.5L176.6,69.4L174.5,67.6L169.7,68.9L168.1,68.1L167.0,69.8L168.5,71.2L167.8,72.5L163.4,71.3L161.8,68.5L160.1,65.8L159.5,62.5L157.3,62.4L154.6,57.8L156.0,54.2L155.5,53.2L156.9,52.1L159.5,51.7L160.1,50.6L159.4,49.8L161.1,45.9L164.9,45.9L168.3,46.8L168.6,47.5L169.0,45.7L175.4,45.6L178.5,46.1L180.5,46.7ZM424.1,-100.0L423.5,-98.5L422.0,-97.5L420.4,-99.7L425.4,-101.2ZM437.9,-98.6L437.0,-97.9L436.0,-98.2L437.7,-98.9L439.1,-102.1L440.3,-102.0L440.0,-100.2L439.6,-99.1ZM430.1,-98.5L429.9,-96.3L428.1,-96.1L427.5,-97.5L428.3,-98.5ZM418.6,-97.6L417.7,-98.3L418.1,-98.8L419.1,-98.2ZM414.0,-96.3L413.4,-95.2L412.4,-95.7ZM414.4,-100.7L413.3,-102.4L414.6,-103.0L415.1,-102.2ZM450.3,-11.8L450.9,-10.7L450.6,-9.5L452.0,-7.8L452.3,-5.7L451.7,-4.1L453.2,-2.1L454.4,-2.4L456.0,0.4L456.0,3.9L450.2,4.4L446.1,3.0L445.2,3.3L445.1,2.4L431.4,2.1L429.0,3.3L421.6,4.2L421.3,3.1L423.4,2.5L422.4,1.9L421.3,2.4L421.7,-0.8L427.3,-1.0L427.4,-2.1L430.9,-2.6L431.7,-3.6L433.0,-3.1L437.6,-1.5L440.1,-2.2L440.1,-3.1L436.5,-3.3L432.0,-5.3L429.9,-4.7L429.4,-3.8L422.6,-3.8L421.3,-5.9L422.3,-6.8L421.1,-6.5L418.7,-10.7L417.6,-11.2L416.9,-10.7L416.3,-11.4L418.8,-12.5L420.8,-14.9L424.7,-23.0L427.7,-22.7L433.0,-23.9L437.2,-23.3L440.0,-20.5L443.0,-19.9L444.3,-17.0ZM134.5,-1.0L133.8,-1.4L134.2,-2.1L134.7,-2.3ZM136.3,-5.3L135.9,-4.7L135.2,-5.1L135.2,-6.0L136.2,-7.1ZM418.6,-129.1L421.8,-128.4L421.3,-128.1L419.7,-127.8L418.3,-128.5ZM154.0,215.6L156.1,221.0L155.3,228.2L161.9,229.3L163.8,229.0L165.0,228.0L166.3,229.2L168.9,229.5L170.4,231.9L170.2,233.3L171.7,240.2L173.1,240.6L176.8,239.3L179.3,240.8L178.0,247.8L176.9,249.8L176.5,255.5L175.5,257.7L173.5,259.3L171.6,260.1L169.8,262.7L166.9,262.1L165.1,263.6L153.9,261.8L151.1,262.0L151.0,260.9L153.8,257.6L154.3,254.7L157.8,250.5L157.3,249.1L155.3,247.3L152.6,246.7L147.3,244.2L142.8,241.1L135.4,238.9L130.5,235.2L126.8,230.4L125.1,229.4L127.4,221.4L127.4,218.2L129.7,214.9L130.7,212.2L142.0,209.9L148.0,209.9L153.8,213.3ZM29.9,28.2L29.2,29.3L31.0,32.7L28.8,35.3L27.4,34.5L27.5,35.5L26.5,37.5L23.1,32.1L24.0,31.9L24.0,30.9L24.9,30.0L27.4,31.6L25.2,29.3L24.4,29.9L23.3,29.2L23.2,30.2L22.5,28.4L18.8,26.0L16.1,26.2L14.9,27.0L14.1,28.3L14.5,28.6L10.0,31.1L10.0,32.0L12.7,35.1L12.5,36.1L11.1,36.2L10.1,37.2L7.5,37.6L6.0,33.2L4.7,34.9L3.2,34.3L1.8,31.6L-1.0,31.2L-1.5,30.5L-5.0,30.5L-5.7,32.0L-6.6,30.3L-5.6,29.6L-5.9,27.7L-4.7,26.5L-6.1,25.6L-6.1,23.1L-5.2,22.2L-4.2,22.7L-3.6,22.3L-2.4,23.2L-2.2,24.6L-1.2,24.8L-1.6,25.8L-0.5,26.4L1.4,26.3L0.7,25.1L2.9,27.1L4.2,27.4L7.5,26.7L12.1,24.6L15.6,22.1L18.6,22.5L25.3,24.5ZM20.0,30.7L19.9,29.5L20.4,30.2ZM2.6,36.8L1.0,36.1L1.2,35.1L1.8,35.0ZM-7.5,-13.0L-8.3,-11.8L-8.7,-12.4L-9.1,-11.9L-8.4,-11.4L-7.7,-8.7L-9.1,-6.5L-10.1,-2.1L-9.8,3.8L-10.5,3.5L-10.3,1.9L-11.3,3.2L-10.7,4.6L-10.9,6.3L-11.4,6.1L-11.8,7.4L-11.0,7.6L-10.7,8.8L-12.1,11.0L-10.7,14.1L-12.4,14.7L-14.0,14.4L-15.2,13.1L-17.4,12.7L-18.8,13.4L-23.1,11.8L-24.2,12.6L-24.7,11.7L-36.6,0.2L-36.1,-0.3L-35.0,0.5L-32.4,-0.1L-31.8,-1.5L-30.4,-2.0L-30.7,-4.8L-28.0,-5.0L-26.1,-6.8L-24.1,-5.6L-20.7,-8.5L-20.4,-9.9L-18.5,-11.8L-16.4,-10.6L-12.1,-11.7L-9.9,-12.9ZM89.1,5.6L88.8,6.3L88.4,5.2L88.0,4.5L89.0,5.0ZM78.2,3.6L77.1,2.9L77.3,2.5ZM85.6,6.1L84.0,5.6L82.9,4.0ZM515.2,-143.7L518.0,-141.4L517.6,-140.4L518.4,-139.5L518.0,-138.9L519.0,-133.7L518.7,-132.1L520.2,-128.6L522.7,-126.5L521.6,-125.7L521.7,-124.2L511.1,-124.0L510.1,-122.4L504.9,-121.3L504.8,-118.3L506.2,-117.4L505.9,-116.8L503.8,-116.4L497.5,-113.5L494.4,-110.2L487.7,-109.3L486.7,-107.7L483.3,-108.0L473.6,-102.2L473.5,-95.3L472.6,-95.3L472.8,-91.8L468.8,-91.6L466.2,-90.0L463.4,-90.1L460.1,-91.1L456.0,-90.2L456.4,-88.6L453.9,-85.2L451.9,-84.7L451.6,-84.0L449.3,-76.9L445.7,-74.6L443.6,-71.4L439.9,-69.5L438.5,-65.7L437.7,-60.5L435.1,-57.6L434.3,-55.3L419.8,-54.7L420.2,-57.8L423.9,-62.4L424.9,-65.6L427.6,-70.2L426.4,-69.4L426.9,-70.5L433.3,-76.2L434.0,-80.6L436.1,-85.6L441.9,-89.3L444.5,-95.3L445.9,-96.9L455.0,-99.5L461.8,-104.4L463.7,-106.5L467.1,-111.2L467.2,-113.4L465.8,-115.2L466.2,-119.8L469.2,-124.1L469.9,-127.2L474.6,-131.6L485.0,-136.3L488.5,-141.5L491.3,-148.1L495.5,-148.9L495.1,-147.8L495.7,-147.0L499.7,-144.3L501.6,-144.0L505.7,-144.8L507.6,-144.4L510.4,-145.6L511.2,-143.8ZM472.6,-95.3L473.5,-95.3L473.5,-84.5L452.0,-84.5L451.9,-68.0L448.1,-66.8L444.6,-63.8L445.5,-54.2L420.0,-54.1L419.5,-50.7L419.8,-54.7L426.0,-55.3L433.7,-54.9L435.2,-56.9L435.1,-57.6L437.7,-60.5L438.5,-65.7L439.9,-69.5L443.6,-71.4L445.7,-74.6L449.3,-76.9L451.7,-84.4L453.9,-85.2L456.4,-88.6L456.0,-90.2L460.1,-91.1L463.4,-90.1L466.2,-90.0L468.8,-91.6L472.8,-91.8ZM-226.9,-127.0L-211.3,-128.1L-212.1,-126.8L-187.6,-119.1L-169.3,-119.1L-169.3,-122.1L-157.9,-122.0L-156.0,-119.9L-148.0,-114.3L-146.1,-109.6L-144.7,-107.7L-137.3,-104.0L-134.9,-105.4L-133.9,-108.2L-131.4,-109.6L-125.2,-108.8L-121.1,-105.2L-118.2,-99.6L-113.1,-94.6L-112.7,-91.4L-110.5,-87.4L-99.3,-83.7L-97.8,-84.2L-100.1,-78.1L-101.7,-69.9L-101.7,-64.6L-102.3,-61.8L-101.8,-59.2L-98.9,-55.7L-99.5,-53.8L-99.3,-55.7L-101.7,-58.7L-101.0,-55.9L-97.7,-49.5L-93.4,-44.7L-92.3,-41.2L-89.0,-37.7L-89.9,-37.8L-88.0,-37.0L-88.5,-37.5L-85.1,-37.1L-82.7,-35.8L-81.0,-33.6L-78.7,-33.8L-74.6,-35.3L-70.3,-35.5L-67.4,-36.9L-64.4,-37.2L-63.8,-36.6L-64.0,-35.9L-61.6,-35.5L-59.9,-36.6L-60.3,-38.4L-60.9,-38.3L-56.4,-41.3L-56.1,-43.7L-54.8,-45.2L-54.8,-49.1L-53.9,-52.1L-50.5,-53.8L-44.4,-54.7L-41.8,-55.7L-38.8,-55.9L-33.9,-54.9L-33.5,-55.6L-34.7,-55.7L-32.5,-55.8L-31.2,-54.7L-30.8,-53.0L-31.8,-50.6L-35.0,-47.0L-35.1,-44.6L-36.7,-43.1L-36.5,-42.6L-35.0,-42.8L-36.5,-41.3L-36.5,-40.7L-35.5,-40.9L-37.8,-34.2L-39.1,-35.9L-39.2,-37.9L-40.7,-35.6L-42.1,-35.4L-44.0,-32.3L-46.1,-32.3L-46.3,-31.3L-58.1,-31.3L-58.1,-27.6L-60.8,-27.7L-54.4,-22.0L-54.6,-20.0L-62.9,-20.0L-65.9,-14.8L-65.1,-13.5L-66.1,-10.0L-77.0,-19.8L-79.9,-21.4L-80.3,-21.0L-77.5,-19.6L-81.8,-20.8L-81.3,-21.6L-81.7,-21.8L-82.6,-21.4L-83.3,-22.2L-84.1,-21.3L-82.7,-20.9L-84.8,-20.7L-87.0,-19.3L-93.7,-17.2L-98.1,-18.9L-101.7,-19.3L-104.2,-20.8L-106.7,-21.5L-108.3,-23.0L-114.3,-24.2L-121.7,-27.3L-126.6,-30.2L-128.6,-32.2L-133.7,-32.9L-138.5,-34.6L-141.5,-37.9L-148.1,-41.0L-151.7,-45.3L-152.9,-48.0L-150.2,-49.3L-150.7,-50.4L-151.8,-50.8L-150.1,-52.8L-149.9,-55.2L-151.3,-56.0L-152.7,-58.4L-152.7,-60.6L-153.7,-62.6L-157.6,-66.3L-161.0,-70.7L-166.4,-74.6L-164.9,-73.8L-164.8,-74.7L-167.6,-75.5L-169.7,-78.5L-168.2,-78.4L-172.4,-80.5L-173.0,-81.5L-174.6,-81.1L-174.8,-81.6L-173.6,-82.8L-174.9,-82.0L-176.3,-82.1L-177.1,-84.7L-175.7,-86.5L-175.1,-86.1L-176.2,-88.0L-177.5,-89.1L-179.2,-89.1L-180.5,-91.5L-182.6,-92.1L-183.9,-93.1L-184.8,-95.3L-184.3,-96.6L-188.1,-97.3L-190.3,-100.0L-191.7,-100.6L-194.8,-104.1L-195.2,-105.8L-196.2,-106.3L-198.5,-110.4L-200.9,-115.7L-200.5,-118.2L-204.2,-119.2L-205.1,-120.6L-206.3,-121.1L-207.6,-120.3L-212.7,-122.9L-211.8,-121.2L-212.4,-118.0L-210.8,-113.8L-210.7,-111.5L-209.1,-109.4L-205.1,-106.4L-203.4,-103.5L-202.7,-103.7L-202.3,-102.8L-201.5,-102.7L-200.8,-100.8L-199.4,-100.3L-198.5,-96.4L-195.9,-94.4L-195.0,-92.2L-193.8,-91.5L-192.9,-88.9L-191.8,-88.3L-192.4,-90.2L-191.0,-89.1L-189.2,-83.1L-187.5,-81.4L-185.3,-77.1L-185.6,-75.3L-185.1,-73.7L-183.2,-72.2L-182.5,-73.7L-177.1,-68.1L-177.6,-66.0L-180.9,-64.3L-183.2,-68.9L-191.7,-75.1L-192.5,-75.0L-194.2,-77.0L-194.2,-81.7L-196.2,-85.9L-200.3,-88.3L-201.2,-90.7L-202.0,-89.6L-204.1,-89.2L-205.6,-90.8L-209.5,-92.4L-210.1,-93.8L-213.1,-95.8L-213.4,-96.5L-210.3,-96.1L-208.6,-96.7L-208.6,-96.0L-207.1,-95.4L-207.7,-97.0L-208.4,-97.1L-207.0,-100.3L-212.7,-106.3L-217.5,-108.9L-218.3,-110.2L-218.4,-112.5L-219.6,-113.2L-220.0,-115.7L-221.5,-116.8L-221.7,-118.3L-223.9,-120.7L-224.2,-121.8L-223.6,-122.5L-225.1,-123.5ZM-31.9,-47.5L-32.4,-48.0L-31.8,-49.1L-30.7,-49.1ZM-62.5,-36.9L-63.4,-36.9L-61.9,-37.6ZM423.8,-43.6L423.4,-43.0L423.2,-43.6L424.0,-44.6ZM450.3,-11.8L444.3,-17.0L443.0,-19.9L440.0,-20.5L438.6,-22.2L435.7,-23.8L432.8,-23.9L427.7,-22.7L424.7,-23.0L422.8,-18.4L423.2,-23.4L425.7,-29.5L426.0,-31.8L424.9,-39.0L422.9,-41.4L424.3,-42.3L423.4,-42.1L424.9,-47.0L423.5,-49.7L422.8,-50.1L422.2,-49.6L420.6,-52.6L419.8,-52.3L419.5,-50.7L419.4,-51.3L420.0,-54.1L445.5,-54.2L444.6,-63.8L448.1,-66.8L451.9,-68.0L452.0,-75.7L452.0,-84.5L473.5,-84.5L473.5,-92.9L498.4,-78.0L487.0,-78.0L493.2,-23.2L495.0,-21.3L494.0,-16.2L470.3,-16.2L469.3,-16.4L469.2,-17.4L468.6,-16.0L465.4,-15.4L460.5,-15.7L458.9,-14.0L455.3,-17.1L453.6,-15.8L452.5,-12.3L451.4,-11.3ZM30.6,-35.5L36.5,-33.5L37.4,-31.9L35.4,-31.6L33.6,-32.3L32.7,-31.5L31.5,-31.7L31.0,-30.6L30.0,-31.4L27.3,-31.7L25.5,-33.6L23.6,-34.4L24.4,-35.4L26.7,-35.9ZM-7.5,-13.0L-9.9,-12.9L-15.8,-10.7L-18.5,-11.8L-19.3,-11.4L-20.5,-8.7L-24.1,-5.6L-26.1,-6.8L-28.0,-5.0L-30.7,-4.8L-30.4,-2.0L-31.5,-1.7L-32.7,0.1L-34.5,0.1L-35.4,-2.3L-37.5,-2.6L-37.1,-2.9L-37.0,-5.5L-39.7,-6.4L-41.9,-5.6L-42.1,-6.4L-46.0,-8.9L-47.5,-9.2L-46.3,-10.4L-46.6,-12.1L-46.1,-13.5L-40.2,-17.7L-39.6,-17.6L-37.9,-18.7L-36.3,-18.9L-35.4,-18.1L-28.1,-18.1L-25.4,-19.2L-25.7,-19.7L-22.5,-18.8L-19.2,-19.4L-16.5,-18.2L-15.7,-18.4L-16.3,-18.7L-14.6,-18.3L-11.5,-15.8L-13.5,-16.3L-13.5,-15.6L-12.4,-15.6L-11.4,-14.4L-9.7,-14.4L-10.6,-15.4L-8.8,-14.6ZM66.0,-43.7L66.2,-40.9L66.9,-40.1L65.8,-38.9L66.2,-37.3L64.6,-36.4L66.1,-34.7L66.1,-32.8L64.2,-34.0L58.9,-33.5L54.8,-34.1L53.3,-33.7L52.4,-32.8L51.1,-33.9L48.7,-35.1L49.2,-36.6L49.8,-36.8L59.5,-35.3L62.3,-36.6L59.3,-39.5L60.0,-41.9L55.6,-43.3L55.5,-44.2L58.9,-45.0ZM59.4,-37.6L59.3,-37.1L57.6,-37.6L56.3,-38.7ZM60.3,-45.7L58.9,-45.7L58.4,-45.9L59.1,-46.1ZM137.3,50.7L133.1,45.9L134.8,44.1L134.3,41.7L134.7,41.0L137.4,40.5L139.8,39.0L139.9,38.0L138.0,37.6L137.4,35.5L138.8,33.7L141.9,32.2L143.1,30.9L142.0,28.9L143.1,30.1L145.5,30.8L149.8,34.2L151.9,36.9L150.7,43.0L152.3,40.0L153.1,39.8L155.1,40.4L160.2,44.9L160.2,48.4L159.4,49.8L160.1,50.7L159.3,51.9L156.9,52.1L155.8,52.8L156.0,54.2L154.6,57.4L157.3,62.4L159.5,62.5L160.1,65.2L163.0,70.8L164.8,71.9L162.5,72.3L160.7,71.4L159.4,71.7L157.9,73.3L155.1,73.8L154.8,74.6L152.8,74.2L151.7,75.1L151.7,76.1L149.7,76.7L147.0,75.6L144.2,73.1L143.7,72.1L143.7,69.7L142.8,69.1L142.1,67.0L143.0,61.2L145.0,58.9L143.8,57.0L144.0,56.0L141.1,55.0L142.1,51.5L141.2,50.4ZM421.6,4.2L429.0,3.3L431.4,2.1L440.9,2.1L441.0,4.5L439.5,5.3L440.9,6.4L440.9,8.2L434.7,9.7L432.4,13.4L432.3,12.1L431.5,12.8L431.3,12.0L430.2,11.6L430.4,10.4L429.6,10.3L432.2,9.1L431.2,8.5L430.0,9.0L429.5,7.9L432.2,6.7L426.6,7.9L426.8,6.9L425.3,7.0L424.1,6.2L424.7,5.0L423.4,5.2ZM425.5,12.6L424.7,12.3L425.3,11.9L425.8,11.7ZM426.9,12.5L426.5,12.4L426.6,11.7ZM426.9,10.0L426.1,9.9L426.5,9.1ZM426.3,7.3L426.0,8.1L425.3,7.5ZM463.2,29.3L461.4,30.4L460.4,30.3L461.8,28.0L461.0,25.6L460.2,25.4L460.5,24.0L457.2,19.6L449.3,20.2L445.4,25.3L443.7,25.7L443.9,24.9L442.8,23.3L441.2,22.5L441.2,20.0L440.3,20.2L438.9,18.6L436.4,17.9L435.2,15.9L435.3,14.5L434.8,15.0L434.1,13.4L433.4,13.2L432.9,14.3L432.4,14.1L434.7,9.7L440.9,8.2L440.9,6.4L439.5,5.3L441.0,4.5L440.9,2.1L445.1,2.4L445.2,3.3L446.1,3.0L449.5,4.3L456.0,3.9L455.3,5.2L456.6,6.4L459.0,5.2L460.4,7.2L461.2,6.6L463.2,5.1L466.6,6.3L469.1,4.8L468.9,3.5L471.2,3.9L472.6,7.0L472.6,8.6L475.3,10.6L473.6,12.9L475.7,13.1L476.2,16.3L478.0,17.7L476.9,19.7L477.0,22.8L478.6,23.3L478.4,24.8L479.3,25.5L478.3,26.1L478.2,27.4L479.9,28.8L479.9,30.1L479.0,29.5L476.4,29.5L476.3,30.9L477.8,32.0L476.4,35.4L474.8,35.4L473.6,34.5L472.2,37.3L470.7,37.6L469.7,36.5L468.5,36.3L469.1,34.4L468.1,30.3L466.4,29.0L464.6,29.7L464.0,29.1ZM-66.1,-10.0L-65.1,-13.5L-65.9,-14.8L-62.9,-20.0L-54.6,-20.0L-54.4,-22.0L-60.8,-27.7L-58.1,-27.6L-58.1,-31.3L-46.3,-31.3L-46.7,-18.8L-44.5,-18.8L-42.6,-18.0L-42.2,-18.5L-42.6,-19.2L-40.2,-17.7L-46.1,-13.5L-46.6,-12.1L-46.3,-10.4L-47.5,-9.2L-48.9,-9.0L-48.7,-8.1L-52.0,-5.9L-52.3,-4.8L-55.6,-6.0L-60.6,-6.4ZM131.0,6.4L130.6,6.4L131.0,5.3L131.7,5.0ZM422.6,-3.8L429.4,-3.8L429.9,-4.7L432.5,-5.2L436.5,-3.3L439.3,-3.5L440.1,-3.1L440.1,-2.2L437.6,-1.5L431.7,-3.6L430.9,-2.6L427.4,-2.1L427.3,-1.0L422.1,-1.0L421.3,-0.4L420.9,-2.2L421.9,-3.1L422.6,-2.0L423.6,-1.8L425.0,-1.8L425.2,-2.5L429.9,-3.0L425.4,-2.9L424.0,-2.2ZM136.7,-9.7L136.5,-9.3L135.2,-9.5L135.5,-10.4L134.2,-11.7L134.8,-12.2L136.1,-11.4ZM133.5,-21.0L132.3,-21.0L132.3,-22.6L134.5,-21.2ZM131.8,-19.5L131.3,-19.3L130.7,-19.9L130.8,-21.8L132.1,-21.3ZM134.1,-18.8L133.6,-18.8L133.8,-19.5ZM176.9,69.4L178.2,68.5L179.6,66.2L179.5,64.1L180.9,61.2L178.6,58.1L177.8,52.6L181.3,47.0L187.9,49.2L191.9,52.4L191.7,53.5L192.3,52.9L193.4,53.8L194.0,55.2L193.7,56.2L194.9,54.4L196.0,58.1L191.6,63.8L189.2,69.1L187.2,70.3L185.8,70.2L185.1,69.3L184.0,69.9L182.3,69.2L180.0,70.7ZM122.6,-32.9L121.9,-32.9L122.3,-33.2ZM-47.5,-9.2L-46.0,-8.9L-42.1,-6.4L-41.9,-5.6L-39.7,-6.4L-37.0,-5.5L-37.6,-1.9L-38.3,-1.2L-39.9,-1.1L-43.2,-1.8L-42.1,-1.2L-47.0,-3.1L-50.4,-3.6L-52.3,-4.8L-52.0,-5.9L-48.7,-8.1L-48.9,-9.0ZM66.1,-32.8L66.1,-34.7L64.6,-36.4L66.2,-37.3L65.8,-38.9L66.9,-40.1L66.2,-40.9L66.0,-43.7L67.1,-44.7L71.3,-44.9L76.2,-43.1L77.8,-43.4L79.2,-40.9L82.5,-40.8L80.0,-40.3L79.9,-39.8L86.0,-38.4L88.0,-36.9L88.1,-36.0L86.2,-33.9L84.4,-35.2L82.2,-35.4L79.0,-35.4L74.4,-33.9L72.6,-34.7L70.6,-34.1L70.4,-33.0L68.2,-30.1L67.0,-31.0ZM133.8,-14.6L133.2,-14.5L132.6,-16.9L133.8,-16.4ZM1.0,-66.1L4.8,-66.0L5.5,-65.4L8.7,-65.7L10.6,-64.6L14.1,-64.3L13.9,-63.9L17.6,-61.1L21.4,-60.9L28.2,-57.2L29.1,-57.1L28.5,-57.8L29.1,-57.7L31.4,-56.2L29.9,-56.0L30.7,-55.1L31.7,-55.8L33.3,-54.6L33.1,-54.1L40.5,-52.7L41.4,-52.0L40.9,-51.3L41.4,-50.9L40.4,-50.8L40.5,-50.1L45.5,-49.9L48.4,-48.0L50.6,-47.4L50.0,-46.0L44.5,-44.9L44.2,-45.6L43.3,-44.8L37.7,-45.4L33.7,-45.1L27.7,-44.6L28.7,-46.0L31.3,-47.8L31.6,-48.7L30.8,-49.7L25.1,-50.5L22.7,-52.3L22.1,-54.7L21.1,-55.9L17.1,-55.8L11.4,-57.7L9.8,-59.3L6.2,-59.0L5.3,-60.2L4.6,-59.2L1.2,-59.8L-0.5,-61.0L1.9,-61.7L1.9,-62.3L1.0,-62.9L-4.8,-63.0L-8.9,-59.9L-12.3,-59.6L-13.1,-58.1L-16.2,-57.0L-16.2,-58.0L-18.6,-57.6L-15.0,-59.0L-15.2,-61.0L-13.2,-62.8L-8.1,-64.8L-0.7,-66.2ZM28.0,-58.2L26.5,-58.7L28.2,-58.9ZM25.7,-60.4L24.1,-61.1L24.9,-61.3ZM21.8,-62.1L23.6,-62.0L23.6,-61.4ZM26.6,-59.3L25.6,-59.8L25.8,-60.4ZM-3.6,-55.7L-6.2,-54.9L-7.6,-55.9L-6.5,-55.7L-7.0,-57.1L-6.4,-58.1L-4.6,-57.8ZM-3.6,22.3L-4.2,22.7L-5.2,22.2L-6.1,23.1L-6.1,25.6L-4.7,26.5L-5.9,27.7L-5.6,29.6L-6.6,30.3L-5.7,32.0L-7.3,30.2L-7.5,28.7L-9.5,27.9L-8.3,29.9L-10.0,29.6L-11.2,28.5L-10.4,27.3L-11.2,25.0L-14.4,23.0L-16.7,22.3L-17.5,20.2L-20.9,17.9L-20.9,18.8L-18.6,20.7L-20.1,22.2L-21.4,20.7L-23.4,20.1L-24.5,18.6L-24.7,16.9L-23.7,14.7L-25.2,13.7L-23.4,11.8L-18.8,13.4L-17.4,12.7L-15.2,13.1L-14.0,14.4L-12.4,14.7L-11.1,14.4L-10.6,13.5L-8.7,17.5L-5.0,21.6ZM20.6,303.2L19.5,303.3L20.2,302.7ZM74.8,203.7L78.0,202.8L78.8,201.4L78.5,199.6L80.7,198.3L81.9,201.1L83.4,201.8L83.0,202.4L84.2,207.8L87.4,210.8L85.9,212.7L86.8,214.3L85.5,215.1L86.0,216.5L85.5,217.2L87.3,218.6L86.8,220.4L89.1,223.0L89.2,225.0L91.2,230.7L91.2,232.8L93.1,233.3L95.6,232.8L96.8,234.0L94.6,240.7L88.8,243.0L86.8,245.4L87.9,247.6L86.6,249.7L87.7,254.5L86.6,256.6L88.4,259.8L86.6,260.9L84.9,261.0L82.8,266.0L79.7,269.2L78.6,273.7L77.3,275.1L77.8,280.0L78.5,280.6L77.8,281.8L76.5,281.8L75.3,285.4L75.5,286.1L74.1,287.0L73.7,289.7L74.6,291.5L75.9,292.2L75.1,293.0L77.4,298.2L77.0,300.3L78.7,300.8L78.5,307.0L77.2,307.5L75.0,313.0L73.9,313.6L74.8,315.4L74.9,318.9L72.7,321.1L70.7,321.9L69.8,324.0L70.3,325.7L69.7,327.0L70.0,330.0L71.2,334.4L72.0,335.0L71.4,336.3L68.4,337.6L67.6,341.9L66.4,342.1L66.8,344.6L65.8,345.6L66.5,346.7L65.0,349.6L65.4,350.3L65.2,355.2L66.2,357.8L63.9,359.1L64.2,360.6L63.7,361.3L63.9,364.4L66.2,365.5L65.2,366.3L66.6,370.0L65.8,371.2L65.7,373.0L69.7,373.4L70.0,374.1L69.4,375.5L64.2,375.5L64.3,376.4L67.2,376.9L68.8,378.5L67.8,380.3L66.2,380.8L66.2,382.5L67.0,383.2L65.4,384.5L66.5,387.7L65.0,388.9L65.2,391.3L62.3,393.2L61.2,395.7L62.7,398.0L60.7,399.9L60.6,401.7L57.9,403.1L57.3,405.0L55.1,405.0L54.4,406.8L55.1,408.2L54.9,410.3L57.1,414.3L61.3,413.4L62.4,413.9L62.6,417.9L61.9,419.5L64.9,421.7L64.8,422.3L77.8,422.6L87.6,424.8L82.4,423.8L81.1,424.3L80.0,425.5L72.4,427.5L71.1,431.4L71.1,434.1L69.1,434.7L63.5,433.1L61.9,431.3L62.6,430.6L65.0,430.5L65.7,431.6L65.3,432.4L65.9,432.1L66.3,430.5L69.2,429.2L70.0,428.3L69.6,427.8L68.5,427.5L62.8,429.9L61.4,430.9L61.0,432.0L57.8,430.6L58.7,429.8L59.2,427.8L60.2,427.4L61.7,427.8L64.7,426.7L67.5,426.7L65.8,426.0L63.1,425.9L61.8,426.6L60.0,426.0L57.3,429.5L55.9,429.4L54.0,427.9L56.6,427.1L57.7,426.0L57.3,425.7L56.5,426.6L54.3,427.0L51.6,426.7L51.4,425.1L50.7,425.0L50.0,423.2L52.7,424.0L53.6,423.8L53.7,423.0L56.4,423.5L59.4,422.2L60.9,423.8L60.0,424.8L61.2,424.2L60.5,422.5L61.4,421.5L61.1,420.6L57.0,419.0L60.4,420.5L60.7,421.2L55.6,423.0L54.8,422.8L53.3,421.2L50.4,420.4L51.2,419.8L52.1,420.0L52.1,417.7L46.4,416.4L44.6,413.9L47.2,413.8L46.7,412.6L47.5,411.8L49.3,412.7L50.8,414.8L52.9,415.6L53.3,414.0L54.1,413.7L53.9,412.7L51.8,414.9L50.4,413.5L50.5,412.7L52.0,412.8L47.6,410.8L49.5,409.3L51.9,409.5L49.6,408.1L49.8,406.9L52.7,407.0L51.1,405.8L52.1,403.1L51.5,403.2L50.2,406.3L49.3,405.6L49.5,400.4L51.6,399.6L48.6,399.5L47.9,396.5L52.6,396.8L54.7,397.8L55.6,397.4L54.2,396.5L53.5,394.3L52.0,396.0L50.2,396.3L47.4,394.6L48.2,393.7L50.1,394.4L50.8,393.8L48.5,392.8L50.6,391.2L50.7,389.8L49.6,388.6L48.7,388.5L48.4,389.3L45.2,388.3L45.3,386.8L41.7,388.0L42.7,389.1L42.4,389.6L41.1,389.1L40.6,388.1L45.7,384.5L44.7,383.5L44.8,382.7L50.6,382.0L51.1,381.4L50.9,380.2L51.9,379.6L52.8,379.9L51.3,383.2L51.5,383.9L49.1,384.9L51.9,384.5L52.4,382.5L53.4,382.3L53.6,384.0L52.0,387.0L52.7,387.2L53.8,385.4L54.3,382.8L54.3,382.0L53.2,381.6L53.4,380.1L56.4,379.3L58.6,379.9L56.7,378.7L55.3,378.5L55.5,377.7L55.8,376.9L59.8,375.3L60.2,374.4L60.3,373.3L56.4,371.6L56.7,369.8L57.7,369.6L58.1,368.1L57.6,366.1L58.9,364.3L59.7,364.3L59.1,361.8L59.6,360.8L60.5,360.8L59.6,359.2L60.5,358.8L61.9,360.0L61.4,357.4L59.8,357.5L59.3,356.9L60.3,355.8L62.3,355.2L62.5,354.2L61.1,355.5L58.4,354.3L56.6,356.1L53.4,355.8L54.1,354.8L52.6,353.9L51.8,350.8L53.8,344.3L55.5,343.1L56.7,339.5L54.8,334.8L55.1,331.8L53.8,329.5L53.8,327.2L54.2,326.2L56.7,326.1L57.4,323.0L58.1,322.7L59.6,318.4L60.8,316.9L60.6,315.8L63.1,312.6L64.6,306.6L66.7,303.2L66.2,299.6L68.1,296.8L68.3,295.0L66.5,283.6L66.7,281.6L68.5,280.4L69.0,277.2L67.7,272.5L69.8,269.0L73.3,255.6L72.9,252.1L74.6,248.6L73.8,244.7L75.0,237.7L73.7,235.7L73.9,234.4L75.4,233.0L76.9,224.2L76.2,219.2L76.5,212.6ZM53.1,366.2L50.9,366.3L49.2,365.5L50.3,363.2L51.3,356.3L53.4,356.7L54.7,356.8L55.4,358.8L54.7,359.5L55.1,360.5L53.0,361.3L55.3,363.6L53.3,365.0ZM53.4,373.1L51.8,373.7L51.7,374.3L52.8,376.0L53.3,378.7L51.6,379.2L51.0,379.1L51.1,378.3L47.7,374.7L48.6,374.3L48.4,373.6L51.0,373.0L51.1,371.7L51.7,371.4L53.6,372.3ZM58.2,375.6L55.9,375.9L55.2,374.7L56.4,373.4L56.8,372.7L59.6,373.8ZM47.3,368.0L46.4,368.1L46.4,367.6ZM54.0,375.8L52.8,374.5L53.7,374.1ZM52.9,369.4L52.0,370.0L50.9,369.8L50.8,369.3ZM49.6,381.5L47.3,381.8L48.4,378.9L49.7,378.1L50.2,381.0ZM367.0,-25.7L366.1,-25.6L365.9,-26.6L367.9,-27.1L368.2,-26.6ZM378.2,-13.1L377.8,-12.5L376.5,-12.7L376.2,-14.6L376.5,-15.1ZM368.8,-24.8L367.7,-25.2L368.5,-25.5ZM381.6,-21.0L382.7,-20.9L383.1,-20.2L381.8,-19.5L381.3,-19.8ZM372.6,-12.1L371.7,-11.9L371.2,-12.6L372.4,-13.1ZM374.0,-23.5L374.4,-23.2L372.8,-23.2L372.5,-22.7L372.1,-23.9ZM381.8,-23.8L381.1,-24.8L381.7,-25.0ZM379.9,-13.9L379.4,-14.7L380.1,-15.1ZM-46.3,-31.3L-46.1,-32.3L-44.0,-32.3L-42.1,-35.4L-40.7,-35.6L-41.0,-34.8L-39.6,-34.8L-39.3,-34.0L-40.5,-30.0L-40.1,-29.4L-41.4,-22.7L-43.2,-21.1L-44.5,-18.8L-46.7,-18.8ZM-38.4,-32.0L-38.4,-32.5L-37.8,-33.4ZM-37.8,-28.7L-38.3,-27.8L-37.8,-29.0L-37.4,-29.4ZM145.4,-0.5L144.6,-0.7L144.4,-2.0L145.8,-1.0ZM28.0,-73.1L27.4,-72.6L27.9,-72.3L28.3,-72.9L28.7,-72.4L28.6,-69.8L27.3,-69.9L25.8,-72.9ZM30.8,-83.9L29.7,-84.7L30.7,-85.5L30.8,-88.1L29.0,-90.0L26.7,-90.6L28.8,-90.4L31.9,-87.9L32.0,-86.7L31.2,-86.1ZM58.0,-53.3L57.1,-51.9L55.5,-51.6L53.9,-51.6L53.7,-52.7L54.7,-53.2L56.6,-53.0L57.7,-54.0ZM27.5,-76.1L27.5,-74.5L25.5,-73.4L24.9,-74.7L23.5,-75.0L23.0,-75.6L23.6,-75.7L24.3,-75.7L23.9,-76.4L24.6,-77.5L24.8,-79.3L26.0,-78.6ZM22.6,-89.2L26.2,-89.3L26.3,-88.8L21.5,-87.8L19.5,-89.0L20.7,-88.3L21.7,-88.8L22.0,-89.7ZM30.0,-78.1L28.9,-78.4L30.2,-78.5L30.6,-78.3ZM51.3,-63.2L51.0,-62.8L49.7,-63.5L49.7,-64.0ZM48.9,-71.9L48.1,-71.3L48.3,-72.2ZM50.3,-59.9L52.2,-62.2L52.0,-63.2L52.6,-63.3L52.7,-62.0ZM34.6,-81.2L37.9,-78.9L37.7,-75.7L36.7,-76.8L37.4,-76.8L37.7,-78.8L36.4,-80.0L33.7,-80.8L34.2,-81.7ZM40.9,-67.9L38.5,-68.9L39.1,-69.2ZM46.2,-64.3L45.4,-65.4L43.8,-66.1L44.4,-66.7L43.6,-68.1ZM43.2,-72.8L42.0,-72.4L42.6,-73.2L41.4,-74.7L40.4,-75.8L41.0,-75.9ZM57.9,-61.3L59.5,-60.4L57.1,-61.0ZM157.5,280.7L155.8,283.3L156.2,285.1L154.6,289.2L155.1,290.0L153.8,292.0L154.2,294.1L153.6,296.2L153.9,298.7L152.3,299.7L151.5,303.3L152.5,306.8L151.6,307.4L153.2,309.9L157.9,312.1L160.4,314.4L160.4,315.3L159.2,316.7L159.3,318.7L161.0,320.4L163.1,320.8L163.6,324.0L158.9,329.8L157.9,332.1L153.8,334.3L143.2,336.9L134.9,338.0L130.1,337.8L127.0,336.7L127.3,339.6L128.8,340.4L128.0,340.5L128.7,341.0L128.3,343.4L127.3,343.8L126.6,345.8L126.6,347.5L127.6,348.9L126.6,350.3L123.0,351.7L118.7,352.0L110.7,349.8L110.6,349.3L108.9,350.2L109.9,358.2L112.8,359.2L112.6,360.2L113.5,360.3L115.6,360.1L115.9,359.2L114.8,358.9L117.6,358.2L118.6,359.3L118.7,362.0L118.2,362.7L116.0,363.2L113.1,360.8L110.0,361.8L109.6,362.4L114.2,363.8L110.8,365.2L108.2,367.7L108.1,372.3L107.5,373.6L105.6,374.8L105.7,377.1L102.1,376.8L97.3,378.7L93.0,383.8L93.6,386.4L98.3,390.0L104.3,391.0L105.0,392.2L104.8,393.7L101.9,395.4L103.8,395.4L104.6,396.1L93.9,402.7L92.5,404.6L91.8,408.6L91.0,409.4L88.8,410.2L86.1,407.9L86.1,409.1L84.1,409.5L86.6,409.6L87.7,410.5L84.3,412.0L83.0,415.1L81.6,416.2L82.7,416.0L83.6,419.6L81.0,419.8L84.2,420.4L87.9,424.5L87.6,424.8L77.8,422.6L65.1,422.4L61.9,419.5L62.6,417.9L62.4,413.9L61.3,413.4L57.1,414.3L54.9,410.3L54.5,406.0L55.1,405.0L57.3,405.0L57.9,403.1L60.6,401.7L60.7,399.9L62.7,398.0L61.2,395.7L62.3,393.2L65.2,391.3L65.0,388.9L66.5,387.7L65.4,384.5L67.0,383.2L66.2,382.5L66.2,380.8L67.8,380.3L68.8,378.5L67.2,376.9L64.3,376.4L64.2,375.5L69.4,375.5L70.0,374.1L69.7,373.4L65.7,373.0L65.8,371.2L66.6,370.0L65.2,366.3L66.2,365.5L63.6,363.9L63.7,361.3L64.2,360.6L63.9,359.1L66.2,357.8L65.2,355.2L65.4,350.3L65.0,349.6L66.5,346.7L65.9,345.3L66.8,344.6L66.4,342.1L67.6,341.9L68.4,337.6L71.4,336.3L72.0,335.0L71.2,334.4L70.0,330.0L69.7,327.0L70.3,325.7L69.8,324.0L70.7,321.9L72.7,321.1L74.9,318.9L74.8,315.4L73.9,313.6L75.0,313.0L77.2,307.5L78.5,307.0L78.7,300.8L77.0,300.3L77.4,298.2L75.1,293.0L75.9,292.2L74.6,291.5L73.7,289.7L74.1,287.0L75.5,286.1L75.3,285.4L76.4,282.0L77.8,281.8L78.5,280.6L77.8,280.0L77.3,275.1L78.6,273.7L79.7,269.2L82.8,266.0L84.9,261.0L86.6,260.9L88.4,259.8L86.6,256.6L87.7,254.5L86.5,250.2L86.9,248.5L87.9,247.6L86.8,245.9L87.1,244.6L88.8,243.0L94.6,240.7L96.8,234.0L95.6,232.8L98.7,228.9L101.0,228.2L101.9,226.2L104.8,228.1L109.8,228.2L112.3,229.0L114.1,232.9L116.8,227.7L123.8,227.5L127.8,231.5L129.6,234.4L135.4,238.9L142.8,241.1L147.3,244.2L156.1,247.9L157.8,250.5L154.3,254.7L153.8,257.6L151.0,260.9L151.1,262.0L153.9,261.8L165.1,263.6L166.9,262.1L169.8,262.7L171.6,260.1L173.5,259.6L175.5,257.7L176.5,255.5L176.9,250.7L178.0,251.1L179.8,250.4L181.5,251.3L183.0,255.4L182.7,259.2L181.9,260.8L178.7,262.8L175.5,263.6L173.7,265.6L169.7,267.8L169.9,269.0L168.6,268.9L161.9,276.9ZM130.0,339.1L129.7,339.5L128.6,338.7ZM131.0,-26.2L130.1,-26.1L130.3,-27.1Z", "land": "M77.7,112.0L77.2,112.7L76.0,112.5L74.9,111.5L72.3,111.6L71.2,112.8L65.6,113.8L58.9,117.8L58.3,121.1L56.6,124.1L57.2,126.5L53.2,129.4L52.9,130.5L53.5,132.0L51.9,132.5L51.7,133.6L53.5,135.1L53.1,136.1L54.6,138.7L58.3,143.0L58.3,143.8L56.8,145.7L62.1,146.3L63.5,148.5L63.4,149.5L69.5,149.3L74.0,145.8L73.4,148.4L73.4,156.1L74.1,155.7L75.6,156.4L77.8,155.5L80.2,155.7L86.0,165.8L84.1,168.2L84.1,172.2L83.5,173.4L84.8,176.6L81.6,180.7L81.5,181.8L82.8,183.5L81.2,186.2L82.6,189.5L85.0,190.7L83.7,191.6L83.8,192.7L79.9,196.3L80.7,198.3L78.5,199.6L78.8,201.4L78.0,202.8L74.8,203.7L68.9,199.4L68.2,197.4L63.9,195.0L61.6,193.1L53.4,189.8L44.5,184.7L41.8,181.3L39.2,179.6L36.9,176.4L36.3,174.6L37.1,174.2L37.3,171.4L33.4,164.8L32.3,163.9L31.3,162.9L30.3,159.5L28.2,157.9L27.5,154.9L24.6,150.1L20.9,140.5L16.9,135.4L14.5,130.4L12.2,127.7L5.5,123.9L5.4,122.7L6.9,122.5L7.2,121.1L5.4,118.1L5.8,117.2L4.3,114.9L4.6,112.6L7.8,108.8L10.8,106.5L11.8,109.7L11.0,110.5L9.8,110.6L9.8,111.6L10.6,111.9L9.8,113.3L10.4,113.5L12.0,112.4L14.2,113.6L15.3,113.5L16.0,114.0L17.2,116.5L19.2,116.8L20.0,115.1L21.4,114.2L21.4,112.6L23.1,109.0L23.6,106.6L24.8,107.0L24.6,106.3L26.7,103.9L34.4,101.2L38.2,98.4L41.5,94.5L42.6,90.5L43.6,90.7L43.5,88.3L41.2,85.3L43.0,85.4L44.0,84.8L46.5,85.8L48.7,87.9L50.1,90.8L53.8,92.6L54.8,93.9L54.9,95.5L56.9,96.4L57.1,99.3L58.5,100.1L63.2,100.1L66.2,98.5L68.5,99.7L71.2,98.8L76.9,101.8L77.0,102.4L72.8,109.1L74.1,109.6L75.3,109.3ZM43.4,85.2L41.2,85.3L43.5,88.3L43.6,90.7L42.6,90.5L41.5,94.5L38.2,98.4L34.4,101.2L26.7,103.9L24.6,106.3L24.8,107.0L23.6,106.6L23.1,109.0L21.4,112.6L21.4,114.2L20.0,115.1L19.2,116.8L17.2,116.5L16.0,114.0L15.3,113.5L14.2,113.6L12.0,112.4L10.4,113.5L9.8,113.3L10.6,111.9L9.8,111.6L9.8,110.6L11.0,110.5L11.7,109.9L11.4,108.8L10.8,106.5L13.2,105.0L14.7,101.3L13.9,97.9L13.4,101.1L12.7,101.1L12.9,99.8L11.1,102.1L6.7,98.7L7.9,98.0L8.0,97.1L7.1,91.5L9.3,90.0L10.0,88.3L11.1,88.5L10.4,88.3L9.8,86.9L12.6,83.5L12.7,79.1L20.0,76.7L20.5,76.1L20.3,75.0L24.7,78.2L27.8,79.1L29.3,80.4L29.7,81.9L35.6,83.0L37.0,81.6L40.2,83.9ZM12.1,103.8L11.2,104.0L12.0,102.0L13.5,102.2L12.3,103.0ZM20.0,76.4L19.4,76.1L20.0,75.7ZM-53.8,89.5L-55.2,88.9L-55.1,88.3L-53.4,87.7L-52.9,88.8ZM-47.9,90.4L-49.1,90.3L-47.9,89.2L-46.9,89.2ZM-60.9,87.5L-62.1,87.4L-62.3,86.5L-61.1,86.2ZM-54.4,93.2L-55.0,92.9L-54.7,92.4L-54.1,92.9ZM-59.9,84.3L-56.8,89.4L-57.5,90.6L-59.0,91.1L-60.8,91.0L-61.1,89.7L-58.9,88.1L-60.5,86.4L-60.9,84.7L-62.0,84.5L-60.5,83.7ZM-55.4,86.7L-56.9,86.6L-57.0,85.7L-56.0,85.7ZM69.0,7.4L64.9,8.7L63.0,11.7L61.7,12.3L60.1,14.1L59.0,16.3L58.1,20.9L55.8,24.7L57.7,24.3L58.4,25.1L59.4,25.3L60.3,28.4L62.1,30.6L61.5,35.6L63.2,36.6L64.5,38.8L70.2,39.1L72.7,38.4L76.7,39.3L81.2,44.7L84.4,44.2L87.4,44.5L91.3,43.6L93.8,44.3L93.8,46.0L91.5,50.2L91.3,55.2L92.6,59.4L94.9,62.3L91.3,66.3L92.9,66.3L95.5,69.0L97.7,76.6L96.3,76.8L96.1,73.4L94.3,70.7L90.8,73.1L89.2,71.6L88.8,72.5L89.3,73.3L80.5,73.0L78.5,73.4L78.5,77.6L81.9,77.7L82.9,78.9L83.0,80.2L82.1,80.4L80.9,79.8L77.2,80.7L77.0,85.4L79.9,87.8L80.0,89.5L81.4,92.3L77.7,112.0L75.3,109.3L74.1,109.6L72.8,109.1L77.1,102.1L71.6,98.9L70.3,99.1L68.5,99.7L66.2,98.5L63.2,100.1L58.5,100.1L57.1,99.3L56.9,96.4L54.9,95.5L54.8,93.9L53.8,92.6L50.1,90.8L49.0,88.3L46.5,85.8L40.2,83.9L37.0,81.6L35.6,83.0L29.7,81.9L29.3,80.4L27.8,79.1L23.8,77.7L19.2,73.9L20.7,72.5L22.1,73.0L22.0,69.2L23.1,68.4L25.4,68.2L27.0,66.8L28.0,65.8L27.8,64.7L28.7,64.5L30.0,62.7L31.8,59.1L30.6,59.2L30.5,58.1L30.0,58.9L29.7,56.9L28.9,57.1L30.0,55.9L30.4,53.8L29.9,49.9L28.8,48.5L30.7,46.9L29.3,44.4L29.9,41.8L26.5,37.5L27.5,35.5L27.4,34.5L28.8,35.3L31.0,32.7L29.2,29.3L29.8,28.3L33.2,31.9L33.0,32.9L33.7,32.9L33.8,30.5L32.8,28.8L37.0,26.1L38.6,23.6L41.1,23.1L40.8,21.3L41.7,18.2L40.6,18.6L42.3,15.5L46.2,12.3L49.5,13.0L48.3,13.9L49.1,14.5L50.7,10.9L56.1,11.1L59.9,8.4L62.8,7.2L63.7,5.3L66.4,3.8L69.3,4.3L70.2,6.2ZM25.1,68.0L24.5,67.5L24.9,67.4ZM97.7,76.6L101.1,79.5L102.9,79.4L105.4,78.1L106.4,79.0L106.2,80.0L106.7,80.0L109.1,77.3L114.9,74.6L116.2,71.9L119.9,70.5L120.2,68.8L115.9,68.2L116.2,67.1L114.8,63.7L114.8,61.2L111.9,58.4L111.2,56.7L112.5,57.6L115.0,57.7L116.1,59.0L120.5,58.9L122.9,61.1L123.6,61.1L124.2,60.6L124.6,58.4L126.5,57.5L128.2,57.9L130.3,57.2L132.0,56.6L133.8,55.1L135.6,55.0L138.0,52.7L138.0,51.5L137.3,50.7L137.9,50.6L141.2,50.4L142.1,51.5L141.1,55.0L144.0,56.0L143.8,57.0L145.0,58.9L144.2,60.5L143.0,61.2L143.2,62.7L142.1,67.0L142.8,69.1L143.7,69.7L143.7,72.1L144.2,73.1L147.0,75.6L149.4,76.7L151.7,76.1L151.7,75.1L152.8,74.2L154.8,74.6L155.1,73.8L157.6,73.4L159.1,71.9L160.7,71.4L162.5,72.3L164.8,71.9L168.2,72.4L168.5,71.2L167.0,69.8L168.2,68.1L169.7,68.9L174.5,67.6L176.6,69.4L180.0,70.7L182.3,69.2L184.0,69.9L185.1,69.3L185.8,70.2L187.5,70.3L189.5,68.7L191.6,63.8L196.7,56.5L197.2,56.5L198.8,57.9L202.0,70.6L202.7,70.8L203.7,72.6L206.9,73.7L207.3,76.9L204.8,79.1L201.8,83.1L198.4,85.1L197.6,87.1L195.7,89.5L195.6,91.1L194.3,92.2L193.9,93.4L192.3,93.4L189.5,94.6L191.7,94.6L192.5,95.2L194.1,94.8L200.9,90.6L201.2,91.3L200.7,91.7L202.2,96.0L204.1,97.6L206.7,96.4L208.5,97.0L211.1,95.8L209.0,101.8L210.2,100.8L211.8,97.0L213.2,96.4L215.0,94.2L216.6,95.0L217.3,94.1L216.6,93.6L216.7,91.9L218.8,89.3L222.4,88.9L223.3,89.5L223.2,88.7L224.3,88.7L225.2,89.3L227.3,89.6L228.5,90.8L231.1,91.2L231.1,91.6L232.2,91.7L234.8,93.3L236.0,93.3L236.8,95.7L238.5,94.0L240.8,95.8L240.4,96.2L241.2,95.8L241.9,97.8L240.5,99.2L241.1,99.9L242.6,98.6L242.9,99.9L242.1,100.1L241.6,101.2L240.7,105.3L242.6,103.6L243.9,100.6L244.7,100.7L244.2,102.8L245.8,101.3L248.9,100.8L249.4,99.9L252.3,100.5L256.7,102.6L259.1,102.4L261.7,103.5L268.2,102.7L271.5,103.1L281.1,108.7L283.8,111.9L286.6,114.3L288.7,115.1L289.5,116.4L293.3,117.6L297.2,117.4L300.0,117.8L301.0,118.6L304.6,130.2L304.6,136.3L303.8,139.1L302.5,142.5L299.7,146.5L298.6,147.6L297.8,147.5L297.8,148.5L294.5,152.6L291.0,154.8L289.4,156.4L288.6,158.4L288.3,157.6L286.2,163.2L282.6,168.0L280.9,168.7L280.8,167.5L279.7,166.6L278.7,167.6L279.2,168.4L277.1,172.8L277.8,173.0L277.4,175.8L277.6,176.2L278.1,175.7L277.3,179.8L278.5,187.6L276.4,196.2L276.7,199.6L273.5,203.1L272.6,211.7L271.2,212.8L268.7,218.2L266.1,220.4L265.1,222.5L264.5,224.3L264.8,227.5L260.2,229.5L258.5,231.3L258.7,232.6L258.1,233.7L252.1,233.8L250.9,232.2L250.3,232.7L250.4,233.9L246.1,234.7L245.6,234.4L247.5,234.1L246.3,233.4L241.3,234.4L241.1,235.3L241.7,235.8L236.9,237.9L236.0,239.2L232.7,239.2L226.9,242.0L219.6,247.2L220.2,247.4L220.0,248.1L218.3,249.7L218.4,249.0L217.0,248.8L216.5,249.9L214.9,249.4L215.1,250.2L217.0,250.9L216.1,252.3L215.3,252.5L215.9,253.1L215.6,254.7L214.7,255.2L215.4,256.1L215.2,258.1L216.0,261.3L215.4,263.6L215.6,267.0L214.4,270.2L211.4,272.2L208.3,275.4L204.7,282.3L201.8,286.4L199.2,289.1L193.5,293.2L193.3,291.4L194.4,291.6L195.8,291.0L198.4,289.1L199.2,286.8L200.3,286.6L200.6,285.4L202.2,284.1L202.0,282.3L202.9,282.4L203.0,281.1L200.0,281.9L199.9,281.2L198.3,279.7L198.4,281.1L199.2,281.9L198.4,284.4L197.9,283.9L196.9,286.7L193.9,288.5L192.5,291.8L192.9,293.6L191.5,295.4L189.5,299.9L184.9,303.8L183.9,303.4L184.0,299.7L186.5,297.3L183.4,295.1L182.4,292.9L179.4,291.6L177.0,289.2L173.3,287.8L170.5,285.0L169.2,286.2L167.9,286.5L167.6,284.6L162.5,280.2L160.7,280.4L160.1,281.3L157.9,281.2L157.5,280.7L161.9,276.9L168.6,268.9L169.9,269.0L169.7,267.8L173.7,265.6L175.5,263.6L178.7,262.8L181.9,260.8L182.7,259.2L183.0,255.0L181.5,251.3L180.8,250.8L176.9,250.7L178.0,247.8L179.0,242.5L178.8,241.3L179.3,240.8L176.8,239.3L173.1,240.6L171.7,240.2L170.2,233.3L170.4,231.9L169.2,229.8L166.3,229.2L165.0,228.0L163.8,229.0L161.9,229.3L156.8,228.1L155.8,228.4L155.1,227.8L156.1,221.0L154.0,215.6L155.9,214.4L154.1,212.8L156.8,208.3L156.4,207.4L158.3,202.9L156.1,198.3L155.1,198.3L152.4,196.5L151.9,193.1L152.7,191.7L152.8,190.3L140.9,190.3L140.5,185.1L138.3,182.6L140.3,182.6L140.2,179.5L139.0,176.7L139.5,175.6L138.8,174.1L135.1,172.2L130.5,172.4L128.4,170.0L124.2,169.0L122.3,166.8L120.5,166.9L118.3,165.6L116.6,165.9L113.5,165.4L112.9,164.1L109.8,162.3L109.2,160.8L108.6,160.9L107.3,157.6L107.7,156.2L106.9,152.8L107.9,150.5L107.2,147.6L106.2,148.2L99.6,148.8L94.2,152.0L92.2,153.9L90.0,154.1L88.4,155.8L86.4,156.7L82.5,155.7L77.8,155.5L75.3,156.4L74.1,155.7L73.4,156.1L73.4,148.4L74.0,145.8L69.5,149.3L63.7,149.5L62.1,146.3L56.8,145.7L58.3,143.8L58.3,143.0L54.6,138.7L53.1,136.1L53.5,135.1L51.7,133.6L51.9,132.5L53.5,132.0L52.9,130.5L53.2,129.4L57.2,126.5L56.6,124.1L58.3,121.1L58.9,117.8L65.6,113.8L71.2,112.8L72.3,111.6L74.9,111.5L76.0,112.5L77.7,112.5L81.4,92.3L80.0,89.5L79.9,87.8L77.0,85.4L77.2,80.7L80.9,79.8L82.1,80.4L83.0,80.2L82.9,78.9L81.9,77.7L78.5,77.6L78.5,73.4L80.5,73.0L89.3,73.3L88.8,72.5L89.2,71.6L90.8,73.1L94.3,70.7L96.1,73.4L96.3,76.8ZM209.1,86.0L212.4,85.6L216.3,86.1L217.1,86.8L215.9,88.9L215.9,90.3L214.2,92.5L214.2,93.5L212.9,94.3L212.0,93.7L211.6,94.9L210.5,94.6L209.8,94.3L209.3,95.6L207.9,96.1L206.2,95.6L203.4,96.1L201.8,92.6L202.0,91.8L202.9,91.9L201.6,91.1L201.5,90.4L202.5,86.3L205.1,85.3ZM244.6,234.9L243.1,235.1L243.8,234.5ZM215.8,256.1L215.3,255.4L216.1,254.6ZM237.3,239.8L236.0,239.8L237.0,238.7ZM242.2,103.6L241.6,104.2L241.7,102.6L242.3,102.2ZM279.4,169.6L279.8,168.2L280.3,169.0ZM278.3,172.1L277.8,172.4L277.6,171.9L278.3,171.6ZM239.7,93.1L238.9,93.2L239.1,92.7ZM208.4,82.8L208.6,83.1L207.7,84.5L204.8,84.3L204.4,83.6L204.9,83.0ZM204.7,71.9L203.7,72.1L203.5,70.7L204.5,70.6ZM202.4,85.4L200.7,86.6L200.0,85.6L201.7,84.8ZM210.3,85.2L207.8,85.1L209.2,84.1L210.5,84.1ZM203.9,83.6L203.8,84.5L202.6,84.1L202.7,83.2L203.9,81.7L203.9,80.9L204.4,80.7L204.5,82.8ZM205.7,81.9L205.0,82.2L204.8,81.1L205.9,80.6L206.3,80.4L206.4,81.1ZM194.8,93.8L194.1,93.9L195.8,91.6L195.8,90.1L197.5,88.2L198.6,88.0L199.2,88.8L198.4,91.1ZM216.4,265.0L216.0,265.3L216.1,263.7L216.6,262.8L217.1,262.9ZM80.7,198.3L79.9,196.3L83.8,192.7L83.7,191.6L85.0,190.7L82.6,189.5L81.2,186.2L82.8,183.5L81.5,181.8L81.6,180.7L84.8,176.6L83.5,173.4L84.1,172.2L84.1,168.2L86.0,165.8L80.2,155.7L84.9,156.1L86.4,156.7L88.4,155.8L90.0,154.1L92.2,153.9L94.2,152.0L99.6,148.8L106.2,148.2L107.2,147.6L107.9,150.5L106.9,152.8L107.6,155.3L107.2,157.2L107.7,158.9L109.8,162.3L112.9,164.1L113.5,165.4L116.6,165.9L118.3,165.6L120.5,166.9L122.0,166.7L124.2,169.0L128.4,170.0L130.5,172.4L135.1,172.2L138.8,174.1L139.5,175.6L139.0,176.7L140.2,179.5L140.3,182.6L138.7,182.9L140.5,185.1L140.9,190.3L152.8,190.3L152.7,191.7L151.9,193.1L152.4,196.5L155.1,198.3L156.1,198.3L158.3,202.9L156.4,207.4L156.8,208.3L154.1,212.8L155.9,214.4L154.0,215.6L153.8,213.3L148.0,209.9L142.0,209.9L130.7,212.2L129.7,214.9L127.4,218.2L127.4,221.4L125.0,229.0L123.7,227.5L116.8,227.7L114.1,232.9L112.3,229.0L109.8,228.2L104.8,228.1L101.9,226.2L101.0,228.2L98.7,228.9L95.6,232.8L93.1,233.3L91.2,232.8L91.2,230.7L89.2,225.0L89.1,223.0L87.6,220.7L86.8,220.4L87.3,218.6L85.5,217.2L86.0,216.5L85.5,215.1L86.8,214.3L85.9,212.7L87.4,210.8L84.2,207.8L83.0,202.4L83.4,201.8L81.9,201.1Z"}, "asia": {"w": 307.8, "h": 159.6, "proj": {"lon0": 70, "lat1": 30, "c": 0.987688, "k": 3.8}, "base": "M-63.5,50.7L-66.3,52.1L-66.9,53.4L-66.7,54.5L-69.0,55.7L-77.5,58.4L-80.1,60.6L-82.6,60.6L-84.8,62.1L-87.1,62.8L-91.4,63.3L-93.7,65.3L-97.6,66.1L-99.5,65.7L-100.5,63.6L-100.3,62.0L-101.0,60.8L-101.6,57.2L-102.6,56.1L-102.1,55.8L-102.1,51.8L-100.6,50.3L-100.6,48.0L-99.8,47.4L-97.9,48.2L-93.3,47.8L-87.3,48.4L-86.4,49.6L-85.8,49.6L-84.7,49.0L-81.9,45.0L-78.7,43.4L-67.6,41.8ZM-60.9,66.0L-58.1,66.3L-61.1,67.2L-62.6,66.4L-61.8,65.7ZM363.1,170.3L363.3,171.6L364.3,170.8L364.8,172.8L363.2,173.4L362.3,170.4L362.6,169.6ZM365.6,175.2L367.2,176.5L365.7,176.9L365.4,175.4L364.6,175.1L365.0,174.3ZM369.5,177.8L368.5,177.9L368.3,177.4L368.6,177.1ZM368.9,176.1L367.9,176.0L367.5,175.7L368.1,175.5L368.4,175.1ZM369.5,180.7L369.8,181.6L368.7,181.3L368.8,180.7ZM367.5,172.7L366.6,172.7L367.8,172.1ZM373.4,188.3L373.2,188.7L372.4,188.0L372.8,187.5ZM372.8,186.0L371.5,185.7L371.6,184.8L372.1,184.8ZM3.6,-46.5L4.6,-46.2L0.8,-43.8L5.2,-42.3L5.3,-43.1L6.0,-43.1L6.2,-43.9L7.1,-42.5L8.1,-42.5L8.2,-41.9L11.8,-41.1L9.8,-40.0L9.0,-40.2L8.8,-39.5L8.0,-39.7L6.4,-38.6L4.9,-39.1L2.5,-38.8L1.4,-39.6L2.8,-40.8L1.5,-41.9L-1.1,-40.5L-2.4,-40.9L-3.0,-40.2L-2.7,-38.8L-5.1,-38.6L-3.9,-38.3L-4.5,-38.2L-4.2,-37.6L-5.1,-37.4L-5.8,-36.2L-9.2,-36.3L-9.9,-35.0L-8.7,-34.2L-7.1,-34.1L-7.2,-32.2L-6.2,-31.0L-8.0,-28.8L-8.4,-27.3L-13.1,-27.9L-12.9,-30.4L-16.5,-31.3L-23.4,-34.8L-28.4,-38.1L-30.4,-42.2L-31.9,-42.8L-35.8,-42.6L-37.2,-43.3L-37.2,-44.7L-36.8,-44.9L-37.8,-45.5L-37.6,-46.4L-40.0,-46.8L-42.8,-48.6L-44.5,-48.0L-43.3,-46.7L-44.9,-47.5L-45.7,-46.3L-47.7,-46.1L-48.9,-45.1L-48.3,-43.1L-48.7,-42.8L-52.6,-43.0L-52.6,-57.0L-43.0,-59.1L-33.7,-54.7L-30.1,-51.3L-25.5,-51.8L-20.9,-51.5L-19.1,-52.1L-16.9,-50.6L-15.8,-48.9L-14.6,-49.4L-15.0,-45.6L-13.1,-45.6L-12.3,-42.5L-7.7,-42.5L-7.1,-41.9L-7.3,-41.1L-5.9,-40.4L-5.4,-40.4L-5.3,-41.3L-3.2,-43.4ZM4.5,-37.6L3.8,-37.6L3.6,-38.3L4.6,-38.2ZM331.5,88.1L330.8,87.6L331.4,87.6ZM280.5,63.6L280.2,63.0L280.7,62.6L281.3,62.4ZM9.4,142.0L9.3,142.0L9.2,141.4ZM-51.4,16.5L-51.1,19.1L-52.3,20.0L-52.5,19.2L-53.3,19.5L-53.4,21.9L-52.6,22.6L-54.5,23.0L-54.4,23.8L-55.8,28.0L-64.8,26.9L-65.5,26.9L-69.1,22.5L-69.0,21.5L-67.9,22.9L-65.1,22.2L-60.5,22.5L-58.6,21.7L-57.2,19.7L-52.8,16.0L-52.2,15.0L-52.0,16.4ZM-62.6,21.8L-63.1,21.7L-62.4,21.4ZM-60.3,22.1L-61.1,22.2L-60.7,21.8ZM-52.6,-43.0L-48.7,-42.8L-48.3,-43.1L-48.9,-45.1L-47.7,-46.1L-45.7,-46.3L-44.9,-47.5L-43.3,-46.7L-44.5,-48.0L-42.8,-48.6L-40.0,-46.8L-37.6,-46.4L-37.8,-45.5L-36.8,-44.9L-37.2,-44.7L-37.2,-43.3L-35.8,-42.6L-31.9,-42.8L-30.4,-42.2L-28.2,-37.9L-23.4,-34.8L-16.5,-31.3L-15.1,-31.3L-12.7,-30.3L-13.1,-27.9L-15.9,-28.8L-16.7,-27.6L-19.5,-27.1L-20.6,-24.1L-22.5,-22.8L-25.8,-22.2L-26.1,-20.7L-27.4,-20.0L-28.9,-19.6L-30.1,-20.7L-31.7,-20.7L-32.9,-21.7L-33.3,-25.2L-36.3,-25.2L-37.3,-26.5L-39.6,-27.6L-40.2,-28.5L-42.0,-29.2L-44.1,-29.1L-47.5,-30.3L-48.1,-31.2L-50.9,-31.3L-51.5,-30.7L-54.9,-30.6L-56.7,-29.6L-57.4,-28.4L-60.4,-27.9L-60.5,-34.0L-61.2,-35.0L-62.5,-35.5L-63.2,-35.2L-62.9,-36.5L-61.5,-36.3L-62.0,-37.7L-63.9,-38.0L-63.7,-37.1L-64.8,-39.5L-64.0,-41.9L-63.3,-41.1L-61.5,-41.1L-60.5,-40.5L-58.6,-40.6L-58.9,-41.2L-57.5,-41.3L-57.4,-42.1L-59.7,-43.8L-60.8,-46.0L-63.9,-45.5L-64.5,-44.5L-64.4,-42.6L-65.7,-44.8L-63.6,-46.2L-59.6,-46.9L-56.8,-45.5L-54.7,-42.9ZM-8.4,-27.3L-8.2,-28.5L-6.2,-31.2L-7.2,-32.2L-7.0,-33.9L-9.9,-35.0L-9.7,-36.0L-8.6,-36.6L-5.6,-36.3L-5.1,-37.4L-4.2,-37.6L-4.5,-38.2L-3.9,-38.3L-5.1,-38.6L-2.7,-38.8L-3.0,-40.2L-2.4,-40.9L-1.1,-40.5L1.7,-41.9L2.8,-40.7L1.4,-39.5L2.3,-38.8L3.6,-38.8L1.9,-37.8L-0.1,-38.8L-1.8,-38.4L-2.0,-37.7L-2.7,-37.7L-2.6,-36.2L1.9,-36.4L3.0,-35.7L5.6,-36.4L6.7,-35.3L7.7,-35.5L8.4,-35.0L9.6,-35.6L13.6,-35.9L14.3,-32.7L16.1,-32.9L18.1,-32.1L18.4,-28.9L19.2,-28.1L18.8,-27.7L16.0,-28.2L13.7,-27.5L14.0,-28.2L12.7,-28.4L10.0,-26.7L6.3,-25.4L5.4,-27.1L5.9,-30.1L4.8,-30.1L4.7,-31.6L3.3,-32.1L0.8,-30.1L0.7,-28.8L-1.9,-28.7L-2.6,-27.0L-4.1,-27.9L-7.3,-26.4ZM191.4,28.0L190.8,30.7L190.4,30.6L187.9,26.0L188.3,23.9L190.8,20.1L191.6,18.9L193.4,17.9L194.9,19.1L192.9,25.9ZM37.5,76.7L38.5,76.8L40.2,78.4L42.7,82.0L44.6,86.3L44.0,89.3L41.2,90.9L38.5,91.2L37.0,88.0L36.5,82.9L36.6,82.5L36.8,83.4L37.9,77.6L39.1,78.0L37.7,77.3ZM212.6,-29.6L214.3,-31.5L217.8,-31.6L219.1,-32.8L223.0,-26.8L223.0,-23.0L223.5,-22.6L222.2,-19.7L219.6,-19.4L219.4,-18.5L217.8,-19.1L216.6,-18.8L216.6,-17.9L215.5,-18.3L215.7,-17.6L215.2,-17.0L214.6,-17.3L214.9,-18.1L212.4,-16.4L211.2,-17.8L212.4,-18.3L211.8,-18.3L211.3,-19.6L212.5,-21.2L212.0,-21.5L213.0,-22.3L212.2,-23.4L212.0,-25.4L210.8,-25.7L212.0,-26.6L213.5,-25.9L213.8,-26.4L213.0,-27.3ZM220.5,-18.2L219.5,-18.5L220.4,-19.1ZM217.9,-18.3L217.2,-18.0L217.4,-18.7ZM211.1,-16.6L210.6,-16.7L211.0,-17.2L211.6,-17.1ZM212.1,-29.4L212.1,-28.9L211.7,-29.1L211.7,-29.7ZM211.7,-24.7L211.4,-24.6L211.4,-25.1ZM211.4,-12.2L210.9,-12.8L212.8,-13.5L213.6,-13.4L213.5,-12.7ZM-106.8,120.4L-108.9,117.3L-108.9,103.2L-105.0,98.3L-102.1,97.7L-100.9,96.4L-99.1,95.6L-94.1,95.3L-82.7,83.6L-79.0,78.1L-79.0,71.2L-74.7,70.2L-73.1,69.1L-72.1,68.5L-70.4,69.0L-71.2,74.3L-70.6,73.9L-69.9,74.5L-71.6,74.7L-72.0,78.2L-75.6,83.7L-80.1,93.1L-82.7,96.9L-86.8,101.5L-89.9,104.6L-94.1,107.1L-98.6,110.7L-105.2,117.7ZM360.8,154.9L359.9,155.2L359.5,154.9L360.4,154.5ZM343.6,150.6L343.6,151.1L343.1,150.8L342.9,149.5ZM334.7,148.7L334.3,148.3L334.9,148.3ZM338.4,148.2L339.3,148.7L338.9,148.8L338.2,148.5ZM329.4,145.3L329.9,146.3L329.6,146.7L328.6,145.4L327.8,145.4L327.4,145.2L328.4,144.3ZM330.7,147.0L330.0,147.2L330.2,146.5L330.8,146.5ZM328.0,147.1L327.3,146.5L327.8,146.0ZM325.4,144.1L324.7,143.0L325.8,143.3ZM327.2,144.8L326.4,144.5L326.6,143.9L327.2,144.2ZM336.9,149.2L340.1,150.4L340.9,151.5L340.2,151.7L337.0,151.1L336.3,150.0ZM337.3,146.4L333.8,144.6L332.4,143.1L332.0,142.7L333.0,142.9L335.7,144.5L337.2,145.6ZM328.4,141.9L328.2,142.2L326.9,141.8L324.5,139.5L325.0,139.2L326.6,140.2ZM340.6,145.6L341.5,146.7L341.3,147.4L342.1,148.1L342.9,150.5L340.7,148.1L340.0,145.8ZM344.2,153.5L345.7,153.7L346.7,155.1L344.9,154.9L342.6,153.2L343.0,152.8ZM127.5,108.9L126.3,109.0L126.9,108.5ZM-54.3,131.8L-54.3,132.2L-54.5,131.8L-54.6,131.3ZM-67.6,41.8L-78.7,43.4L-81.9,45.0L-84.7,49.0L-85.8,49.6L-86.4,49.6L-87.3,48.4L-93.3,47.8L-97.9,48.2L-99.8,47.4L-100.6,48.0L-100.7,50.6L-102.1,51.8L-104.0,47.7L-106.0,46.0L-108.0,43.0L-109.7,38.9L-113.6,36.5L-115.3,34.3L-116.4,30.8L-116.1,28.1L-118.4,23.9L-120.4,22.1L-121.8,21.7L-123.2,19.7L-122.9,19.2L-123.3,17.9L-130.7,7.5L-132.8,7.4L-131.5,2.5L-127.4,3.0L-125.0,0.6L-122.1,0.0L-121.4,-1.3L-120.2,-1.9L-121.4,-3.2L-124.0,-5.7L-115.8,-8.1L-111.2,-7.4L-104.8,-4.1L-95.0,3.0L-84.7,3.8L-83.8,5.6L-80.9,5.5L-79.6,8.6L-74.5,12.7L-75.0,12.6L-74.3,14.0L-74.5,14.8L-74.9,14.8L-74.8,15.3L-71.9,20.2L-69.8,20.6L-70.1,21.5L-69.2,21.7L-69.1,22.5L-65.5,26.9L-55.6,27.7L-53.9,30.4L-56.4,38.0ZM227.8,-46.7L226.8,-48.4L229.2,-49.0L229.9,-50.8L229.9,-53.5L228.9,-56.4L230.6,-56.9L232.1,-58.2L236.2,-57.1L236.9,-57.5L237.2,-58.9L238.1,-59.3L239.7,-61.7L240.8,-65.7L243.0,-67.3L242.3,-68.5L242.7,-69.4L241.3,-69.8L237.0,-68.8L234.5,-67.3L228.8,-67.3L227.9,-68.5L228.2,-69.7L227.3,-70.7L227.3,-71.7L225.9,-71.8L223.3,-73.7L221.7,-73.6L220.3,-74.5L217.7,-74.4L216.0,-75.2L216.1,-76.8L215.2,-77.3L215.1,-78.7L213.7,-80.2L210.4,-86.4L208.9,-87.6L206.7,-88.2L205.7,-87.9L201.2,-89.5L191.4,-88.5L188.0,-86.6L187.9,-86.0L190.1,-85.8L190.2,-83.5L187.9,-82.1L184.5,-77.5L185.2,-77.1L184.9,-76.3L181.8,-75.4L179.7,-74.2L173.5,-76.0L170.5,-75.6L167.9,-76.9L166.3,-77.0L160.7,-74.2L155.1,-73.6L152.8,-72.7L144.9,-73.4L142.5,-74.7L142.3,-75.8L139.7,-76.0L137.8,-77.2L132.8,-77.8L127.9,-76.6L125.0,-76.8L121.2,-78.2L120.5,-81.1L112.3,-82.7L108.4,-84.0L107.5,-82.8L105.2,-81.5L104.5,-80.0L105.2,-78.4L106.1,-78.0L106.0,-77.1L105.1,-76.1L102.7,-75.0L97.8,-76.0L95.8,-75.7L92.4,-76.1L91.4,-76.8L91.0,-78.1L86.7,-78.3L86.1,-79.0L84.9,-78.6L83.9,-79.3L83.3,-78.7L81.8,-78.6L75.3,-76.4L73.7,-75.6L73.8,-74.9L71.7,-74.1L68.3,-73.9L67.5,-72.9L65.4,-72.5L62.4,-74.3L62.6,-75.2L60.7,-74.1L57.2,-74.5L56.3,-76.2L53.8,-76.9L52.3,-78.9L50.1,-79.8L46.9,-78.8L43.0,-78.8L42.7,-79.6L41.6,-79.7L41.8,-80.5L40.3,-80.9L39.2,-80.5L39.1,-79.6L37.5,-78.9L29.5,-88.4L24.3,-91.3L24.1,-91.8L25.0,-91.8L25.7,-92.9L20.4,-91.5L16.3,-89.3L14.5,-89.8L12.8,-89.1L12.4,-90.1L13.8,-90.9L13.8,-91.4L12.1,-91.0L9.8,-91.7L9.2,-91.0L8.2,-92.4L7.5,-92.0L4.1,-92.0L4.4,-93.5L2.8,-96.2L0.7,-95.6L-3.8,-96.5L-6.7,-95.6L-6.9,-94.9L-17.0,-93.6L-18.4,-92.5L-20.8,-92.7L-30.3,-91.0L-32.9,-91.3L-33.9,-89.8L-31.8,-89.4L-32.9,-89.1L-33.0,-88.5L-29.7,-87.4L-33.6,-87.3L-34.6,-86.2L-33.8,-84.9L-37.4,-83.3L-35.8,-82.3L-31.7,-81.0L-32.3,-79.3L-34.0,-78.6L-35.9,-78.6L-37.3,-79.2L-39.3,-77.9L-39.6,-78.4L-41.7,-78.6L-43.7,-80.0L-45.6,-80.1L-47.1,-79.4L-48.7,-80.0L-50.7,-79.9L-53.7,-78.2L-57.6,-79.8L-58.0,-78.0L-59.5,-80.0L-62.5,-81.6L-65.4,-81.6L-66.7,-82.5L-70.0,-81.6L-72.1,-82.6L-73.9,-81.0L-76.9,-80.1L-77.6,-79.2L-80.2,-78.3L-79.4,-76.0L-79.7,-75.7L-81.3,-75.5L-83.7,-77.4L-84.7,-77.4L-86.7,-74.8L-87.1,-73.6L-86.2,-72.8L-87.4,-71.5L-87.6,-70.0L-86.1,-69.3L-86.0,-68.2L-85.2,-67.4L-81.9,-67.3L-79.0,-63.7L-80.5,-63.7L-80.5,-63.1L-77.9,-61.9L-80.0,-61.1L-79.8,-60.4L-80.7,-60.6L-83.9,-59.2L-84.6,-59.6L-84.4,-58.9L-86.0,-56.3L-86.3,-56.5L-87.4,-55.3L-85.2,-53.6L-84.6,-51.5L-83.9,-52.8L-84.6,-49.5L-80.4,-45.0L-83.1,-42.6L-85.1,-42.9L-87.3,-44.9L-91.4,-46.4L-91.4,-47.6L-94.3,-48.5L-94.7,-47.9L-95.7,-48.4L-98.2,-47.8L-98.4,-48.4L-102.2,-50.0L-106.7,-50.2L-110.2,-51.4L-112.0,-51.6L-112.7,-51.0L-117.4,-54.3L-125.2,-57.5L-124.1,-58.1L-124.6,-58.6L-123.1,-58.0L-121.4,-58.4L-121.6,-59.1L-120.4,-60.8L-118.3,-61.1L-120.4,-62.3L-121.0,-63.2L-118.2,-63.3L-118.5,-63.9L-115.3,-64.8L-115.6,-65.6L-119.3,-64.9L-119.3,-65.8L-119.0,-66.7L-117.0,-67.8L-113.4,-68.0L-112.8,-69.4L-113.2,-70.5L-113.9,-70.6L-113.4,-71.5L-112.6,-71.5L-113.8,-72.2L-112.2,-73.2L-112.3,-74.4L-119.1,-76.2L-119.9,-75.7L-122.3,-77.6L-125.3,-76.8L-127.2,-77.6L-129.1,-77.4L-129.8,-78.1L-130.2,-80.0L-131.1,-80.6L-134.3,-80.8L-134.7,-82.4L-133.6,-82.8L-136.1,-84.9L-141.0,-84.8L-142.2,-83.8L-143.5,-84.0L-144.2,-84.8L-144.3,-86.5L-145.4,-87.5L-144.8,-88.1L-142.1,-87.7L-140.0,-88.7L-140.0,-89.1L-140.9,-90.0L-143.5,-90.5L-143.3,-91.3L-144.9,-91.9L-146.1,-93.1L-145.8,-93.6L-147.1,-94.2L-146.5,-95.2L-147.1,-96.1L-146.8,-97.3L-149.3,-98.2L-152.1,-97.6L-152.5,-98.6L-157.1,-99.3L-157.2,-100.9L-158.2,-102.0L-159.0,-102.0L-158.3,-103.7L-160.1,-104.6L-159.4,-105.6L-158.5,-105.9L-159.5,-107.2L-159.8,-109.4L-157.1,-111.6L-157.6,-112.0L-157.4,-113.2L-156.4,-112.8L-153.3,-114.0L-149.5,-113.8L-151.2,-114.7L-153.6,-114.7L-155.2,-115.4L-155.8,-116.1L-155.3,-115.9L-155.2,-116.3L-155.7,-116.6L-158.4,-116.0L-145.7,-123.4L-144.4,-125.0L-145.7,-126.2L-150.2,-128.2L-148.2,-129.5L-148.3,-130.1L-150.2,-131.2L-149.7,-132.0L-151.6,-132.9L-150.8,-133.6L-151.6,-133.9L-150.8,-135.2L-151.2,-135.4L-149.8,-135.6L-149.8,-136.0L-153.6,-140.2L-150.2,-143.1L-152.6,-144.6L-155.1,-145.1L-155.9,-146.3L-154.7,-147.6L-156.1,-147.8L-150.2,-149.7L-149.5,-150.6L-146.9,-150.2L-146.9,-151.2L-144.3,-150.8L-142.6,-151.3L-142.7,-151.8L-138.8,-150.9L-139.2,-150.5L-142.0,-150.8L-141.2,-150.0L-137.2,-149.8L-138.3,-148.5L-136.3,-149.4L-128.1,-148.9L-121.1,-147.0L-118.5,-145.8L-114.2,-144.7L-113.3,-145.0L-111.2,-143.8L-109.0,-143.3L-108.3,-141.6L-107.5,-141.4L-108.1,-139.9L-112.2,-137.9L-117.6,-137.1L-129.4,-138.3L-132.0,-139.1L-133.3,-138.9L-138.3,-140.0L-139.4,-140.7L-139.1,-140.9L-143.0,-141.2L-136.4,-138.5L-137.5,-138.1L-134.7,-137.7L-132.5,-136.6L-132.2,-135.9L-133.6,-134.5L-132.1,-132.9L-131.5,-132.1L-131.9,-131.3L-131.2,-130.9L-128.9,-130.6L-126.2,-129.2L-122.5,-128.5L-120.2,-129.0L-119.9,-129.5L-120.3,-130.4L-123.2,-130.8L-125.4,-132.2L-125.6,-132.8L-124.7,-133.0L-124.3,-133.7L-113.5,-131.4L-112.4,-132.1L-110.9,-132.2L-113.4,-134.3L-113.3,-135.3L-107.1,-137.3L-104.3,-138.8L-100.5,-138.4L-98.9,-137.8L-99.3,-137.3L-97.2,-136.8L-97.2,-137.7L-95.7,-139.4L-96.0,-140.4L-98.4,-141.6L-96.7,-144.4L-96.8,-145.4L-99.8,-147.0L-90.5,-146.2L-87.5,-143.8L-91.8,-143.5L-94.2,-142.2L-91.7,-141.3L-90.5,-140.2L-88.2,-139.8L-83.9,-140.5L-83.0,-142.8L-79.4,-143.2L-79.7,-144.0L-78.2,-143.9L-67.6,-146.4L-66.1,-145.7L-64.8,-146.2L-66.3,-146.7L-60.8,-148.2L-58.2,-148.2L-60.8,-147.8L-60.2,-147.6L-61.0,-146.8L-60.3,-146.1L-62.8,-145.4L-56.8,-145.2L-56.6,-145.8L-54.7,-146.6L-48.3,-146.5L-41.1,-148.2L-39.9,-147.2L-40.9,-146.7L-40.9,-146.1L-38.6,-145.7L-37.8,-146.2L-37.9,-147.1L-35.7,-147.2L-34.0,-148.1L-36.9,-150.4L-34.1,-151.4L-21.8,-150.2L-19.2,-149.1L-11.3,-147.7L-8.5,-146.4L-5.6,-145.7L-3.2,-148.0L-5.5,-148.1L-7.1,-149.1L-7.5,-150.0L-8.9,-150.4L-11.0,-150.8L-11.6,-150.3L-12.0,-151.0L-11.5,-152.1L-10.4,-152.4L-10.7,-152.8L-10.2,-154.8L-12.4,-155.1L-11.8,-156.0L-12.6,-156.1L-11.6,-156.9L-6.5,-158.4L-3.6,-162.1L-1.5,-163.3L-1.0,-163.0L5.6,-163.1L10.6,-162.2L9.7,-159.6L7.0,-157.5L9.7,-156.4L10.2,-155.7L10.1,-153.7L9.3,-153.0L9.7,-148.1L13.5,-146.2L11.8,-145.1L11.5,-143.5L9.7,-142.8L6.9,-140.6L5.1,-140.5L5.8,-139.4L2.7,-138.8L1.4,-139.1L2.6,-139.6L-2.9,-139.9L-3.7,-139.8L-3.0,-139.0L1.3,-138.1L8.7,-138.1L9.1,-138.9L14.2,-140.6L15.3,-142.2L17.9,-143.5L17.8,-144.7L16.5,-146.0L17.2,-147.3L22.9,-148.1L24.2,-148.1L27.2,-146.2L26.9,-143.6L29.2,-142.8L33.5,-142.8L28.5,-143.5L28.3,-144.4L28.8,-145.1L30.0,-145.4L28.7,-147.8L22.5,-149.1L18.1,-148.5L14.2,-149.0L14.6,-149.8L13.4,-151.3L16.3,-154.2L11.6,-157.5L13.8,-159.0L18.7,-160.2L19.0,-161.7L18.0,-162.7L20.2,-162.6L21.0,-161.8L21.5,-160.7L19.8,-159.4L19.7,-158.9L20.7,-158.3L19.8,-157.4L21.5,-156.8L33.8,-155.6L31.9,-155.9L30.8,-156.8L24.1,-157.9L22.6,-159.3L25.8,-159.7L28.3,-159.0L30.7,-159.2L30.1,-159.9L27.9,-160.2L31.8,-161.1L35.4,-161.0L40.4,-159.9L43.8,-158.5L49.2,-158.5L49.7,-158.3L48.7,-157.5L46.3,-156.8L46.3,-155.1L45.7,-154.3L45.9,-153.5L47.3,-155.4L48.8,-155.4L48.9,-154.2L47.6,-152.8L49.1,-152.4L49.1,-153.1L50.7,-153.3L51.6,-154.1L49.4,-156.2L50.8,-158.4L49.5,-159.1L47.5,-159.3L45.4,-160.6L40.6,-161.5L40.0,-162.3L40.7,-163.2L39.1,-164.3L39.7,-165.6L63.4,-166.8L63.9,-166.5L59.3,-165.1L59.4,-164.6L62.6,-163.8L59.8,-165.1L64.3,-165.7L65.9,-166.5L62.2,-168.1L60.1,-168.4L61.5,-168.9L64.7,-168.6L59.3,-169.7L60.8,-170.3L63.3,-169.9L65.4,-170.8L63.6,-171.3L63.8,-171.6L66.3,-171.5L75.8,-173.2L90.4,-174.5L85.9,-174.5L86.2,-175.1L87.3,-175.2L96.0,-175.3L97.9,-175.1L96.3,-174.4L99.5,-174.8L99.4,-174.4L107.6,-175.7L111.7,-174.9L110.9,-174.0L112.0,-174.5L111.9,-175.3L108.4,-176.7L118.6,-176.5L116.1,-176.9L116.7,-177.5L116.1,-177.9L116.3,-178.6L122.4,-180.5L127.7,-181.4L135.3,-180.1L128.4,-179.0L140.5,-178.3L136.7,-176.7L141.6,-176.8L143.3,-177.6L154.3,-177.5L157.4,-176.9L158.0,-176.6L157.4,-176.2L160.0,-176.3L160.6,-175.3L160.1,-175.0L162.4,-175.8L163.5,-174.4L164.6,-174.5L163.5,-173.2L159.4,-174.2L161.2,-173.2L164.1,-172.7L161.1,-171.1L149.5,-168.4L149.4,-167.8L143.4,-166.0L139.9,-165.8L137.7,-164.7L135.8,-164.6L131.9,-162.6L136.9,-163.9L141.7,-164.1L153.0,-166.0L149.0,-166.2L149.6,-166.9L151.1,-167.3L155.9,-167.3L154.7,-167.1L155.4,-166.5L158.2,-166.1L160.6,-166.2L161.2,-166.6L160.8,-167.1L161.5,-166.9L163.0,-165.9L162.0,-165.1L163.2,-164.7L163.2,-163.6L161.9,-162.8L162.6,-162.1L163.9,-162.0L162.2,-162.7L163.4,-163.6L163.5,-164.3L164.7,-164.7L163.3,-165.3L165.4,-165.6L170.2,-166.1L181.8,-165.6L183.7,-165.2L181.9,-165.2L181.8,-164.3L186.7,-163.3L197.2,-162.9L198.0,-163.0L197.1,-163.5L199.5,-163.2L201.3,-164.1L200.1,-165.0L200.5,-165.8L204.7,-166.3L208.7,-165.1L211.1,-165.5L211.3,-164.9L212.3,-164.7L214.1,-165.5L216.7,-165.2L221.8,-163.8L219.9,-163.0L221.5,-162.9L222.4,-162.3L219.3,-161.6L222.5,-161.3L223.0,-160.8L222.5,-159.9L216.7,-161.2L221.1,-158.7L222.2,-159.3L223.2,-158.6L220.9,-158.3L224.3,-156.3L227.2,-155.4L228.0,-155.7L229.0,-154.8L231.1,-155.4L235.2,-159.3L239.0,-157.5L242.8,-157.3L248.1,-158.2L255.0,-156.3L254.6,-156.7L256.4,-157.0L254.9,-157.3L256.1,-158.1L258.1,-158.2L259.8,-157.5L262.7,-157.7L261.6,-158.5L261.7,-159.2L260.3,-159.4L263.4,-160.3L259.6,-160.2L259.5,-160.9L261.2,-161.5L266.8,-161.8L265.2,-162.8L265.8,-163.0L286.2,-161.3L280.7,-161.1L278.4,-160.6L279.5,-160.3L288.4,-160.7L285.7,-159.4L286.1,-160.1L284.3,-160.5L284.0,-159.9L284.3,-159.4L281.7,-159.3L281.5,-158.7L282.2,-158.4L285.5,-158.9L290.0,-160.8L298.4,-160.2L300.3,-159.2L296.4,-158.4L302.5,-157.8L300.6,-156.7L303.9,-157.2L306.2,-156.9L308.1,-155.9L306.9,-155.7L309.7,-155.2L322.4,-156.2L332.9,-155.6L337.5,-153.9L337.8,-153.2L336.8,-151.5L337.2,-151.2L341.2,-150.5L341.7,-148.6L342.8,-147.8L341.0,-146.4L341.9,-146.5L343.7,-147.8L343.6,-149.6L345.9,-150.5L349.8,-150.9L363.4,-150.1L367.3,-151.0L368.4,-150.4L369.0,-149.2L372.7,-148.5L373.9,-147.4L377.3,-147.5L379.1,-148.7L377.5,-150.4L375.9,-150.6L377.2,-151.5L377.1,-152.4L387.6,-151.3L388.2,-151.8L397.5,-151.6L408.5,-149.7L412.9,-148.1L412.9,-133.3L407.3,-131.5L404.4,-131.9L401.1,-133.3L399.1,-133.2L401.7,-133.0L402.4,-132.5L401.9,-132.2L398.1,-132.9L392.4,-131.8L398.1,-132.6L399.2,-131.9L398.4,-131.4L403.2,-132.1L403.2,-130.9L404.2,-130.4L405.5,-130.0L406.2,-130.6L406.8,-130.2L408.1,-127.9L407.0,-127.7L408.0,-127.4L407.9,-126.9L408.3,-127.5L410.6,-126.0L410.1,-125.4L411.2,-124.2L409.6,-122.8L402.7,-123.9L402.9,-124.6L401.7,-124.6L401.5,-124.1L402.2,-123.7L392.3,-120.9L388.9,-120.5L387.1,-119.3L386.0,-119.6L386.2,-119.0L384.3,-118.4L384.3,-118.0L377.6,-115.7L376.6,-113.9L372.4,-116.3L364.9,-115.5L361.3,-113.5L360.8,-113.9L361.6,-115.8L356.9,-114.4L356.4,-113.4L354.8,-114.2L353.2,-113.6L351.8,-114.1L350.4,-113.2L350.1,-111.3L345.8,-108.1L345.1,-106.7L346.8,-105.3L347.8,-106.2L349.9,-105.6L348.2,-103.5L348.3,-101.9L350.0,-101.4L350.3,-99.7L348.4,-99.0L347.7,-99.7L349.2,-100.8L347.8,-100.7L347.1,-100.3L347.3,-99.8L345.6,-99.1L344.3,-96.9L345.7,-94.1L343.9,-93.2L340.7,-93.3L338.1,-91.9L337.2,-90.4L337.9,-87.9L336.2,-88.3L333.1,-87.1L332.1,-87.5L332.6,-86.9L332.1,-85.1L330.7,-82.9L325.6,-79.7L324.7,-81.2L324.1,-85.5L323.2,-86.9L321.1,-95.8L322.7,-101.4L326.0,-103.7L326.4,-104.4L325.9,-105.6L328.2,-105.6L329.0,-106.5L331.3,-106.4L334.8,-108.4L337.2,-110.7L344.4,-114.6L345.6,-115.8L351.7,-117.5L351.1,-117.9L352.8,-119.1L352.1,-119.6L353.6,-122.7L355.0,-123.4L357.3,-123.0L358.0,-123.5L354.4,-124.3L350.3,-123.7L349.1,-121.2L350.0,-120.5L349.4,-120.0L348.5,-120.5L346.8,-120.3L340.7,-116.9L338.4,-116.4L339.2,-117.9L337.0,-117.6L339.0,-121.2L336.1,-120.5L334.7,-121.3L326.8,-120.4L316.4,-113.4L315.8,-112.2L318.9,-111.9L319.6,-111.6L319.6,-110.9L317.0,-111.0L315.3,-110.5L312.9,-111.0L310.8,-109.9L309.0,-110.3L305.2,-109.7L304.5,-110.5L308.4,-111.3L305.3,-112.3L302.1,-112.1L302.8,-112.3L298.1,-113.1L296.7,-112.6L297.3,-112.1L295.7,-112.2L295.5,-111.6L296.4,-111.6L295.5,-111.2L293.7,-111.8L290.9,-111.2L287.3,-111.9L285.4,-110.8L283.6,-111.8L274.7,-111.6L271.5,-110.8L266.4,-108.0L264.4,-105.7L259.7,-103.6L254.1,-99.3L244.8,-94.4L247.2,-93.4L250.7,-93.6L250.3,-90.9L250.7,-90.4L252.0,-90.5L252.4,-91.3L252.0,-91.9L254.0,-92.3L252.7,-91.6L254.6,-91.0L252.4,-89.5L255.0,-89.7L257.2,-91.0L257.4,-90.5L256.2,-89.4L256.9,-89.4L257.8,-90.7L257.7,-92.3L261.6,-92.3L267.9,-88.5L267.2,-87.5L265.9,-87.7L267.4,-86.8L267.0,-85.3L268.3,-84.3L267.9,-83.3L266.2,-82.2L264.7,-79.0L265.1,-76.3L264.5,-75.7L264.1,-72.1L263.2,-70.0L260.4,-68.0L257.4,-64.8L256.5,-62.9L254.0,-60.1L247.2,-54.6L244.5,-51.4L240.2,-49.2L237.1,-48.2L233.8,-49.0L233.9,-50.6L232.2,-49.8L232.5,-50.5L229.5,-48.0L227.9,-48.1L228.3,-47.6ZM273.1,-92.7L273.9,-91.7L273.7,-90.4L275.2,-87.3L274.6,-83.9L275.1,-82.2L278.8,-73.4L280.4,-71.5L280.4,-70.8L278.2,-73.0L277.1,-73.4L274.9,-73.2L274.1,-72.6L272.3,-67.4L274.8,-63.8L275.8,-63.7L276.2,-62.2L275.6,-60.9L275.0,-62.9L272.4,-63.5L270.5,-60.5L269.6,-62.5L270.4,-65.1L270.1,-66.8L270.9,-68.5L269.7,-71.3L270.8,-74.4L270.5,-78.4L271.0,-80.6L269.2,-82.6L269.0,-84.6L269.7,-86.6L269.6,-88.7L270.8,-89.3L272.2,-89.1L272.9,-90.8L271.5,-92.3ZM318.3,-73.4L317.6,-73.6L318.4,-74.7ZM315.6,-71.4L315.6,-71.6L316.1,-71.8ZM307.8,-64.2L307.3,-64.1L308.6,-65.1ZM299.1,-59.4L298.2,-59.3L299.0,-60.2L301.6,-61.6L302.3,-61.6ZM295.0,-58.2L291.5,-56.9L288.6,-54.7L290.6,-56.8L292.5,-58.5L294.0,-58.1L295.7,-59.0L295.9,-58.4ZM287.9,-52.2L287.6,-52.5L288.6,-52.6ZM286.0,-55.1L287.2,-54.6L283.7,-52.6L283.6,-51.9L283.2,-52.7ZM-70.3,20.5L-71.4,20.6L-72.0,19.8L-72.2,17.5L-71.3,15.3L-70.3,14.6L-69.2,16.0L-69.1,19.1ZM191.8,43.3L194.6,44.5L196.2,43.9L195.7,46.9L197.1,48.9L195.7,52.5L193.6,53.5L193.7,54.5L192.9,55.8L194.0,58.0L194.3,60.2L196.0,61.1L195.9,60.2L197.5,59.6L198.7,60.1L199.3,61.7L200.0,61.4L200.1,60.6L202.0,61.4L201.0,62.1L202.0,63.6L201.9,64.2L203.2,64.5L202.9,66.2L202.2,65.8L202.5,64.9L201.9,65.0L200.1,64.4L199.5,62.9L197.2,61.1L197.4,63.9L194.3,61.0L192.7,62.1L190.8,61.2L190.1,61.5L190.0,60.1L191.2,58.3L189.9,57.5L189.9,59.0L189.3,59.1L188.0,57.6L186.8,52.2L188.3,53.0L189.0,52.8L189.0,47.0L189.9,43.7ZM177.6,81.9L177.7,80.9L184.7,74.2L185.8,70.9L185.9,71.8L186.5,74.1L184.6,75.8L183.1,76.3L181.8,78.8ZM197.0,69.9L198.3,69.9L198.5,70.5L199.5,70.2L199.4,71.1L198.1,72.9L195.6,73.8L194.9,74.1L195.5,69.6L194.8,69.2L195.3,68.8ZM199.4,79.6L198.9,79.6L196.7,77.2L196.9,76.1L198.4,75.7L198.2,74.1L198.8,72.8L199.9,72.2L201.1,73.0L199.5,76.5L200.1,78.8ZM204.8,70.9L206.2,70.8L206.5,71.4L206.5,73.0L207.4,74.8L207.0,75.3L206.4,74.6L206.4,75.3L206.5,75.9L205.6,75.4L205.4,72.7L204.3,72.5L203.8,70.4ZM207.3,66.4L208.4,67.7L208.3,69.9L209.2,71.9L208.0,71.8L206.6,70.9L206.1,70.1L206.4,69.3L204.3,67.8L203.8,66.2ZM190.3,62.8L192.2,63.0L193.4,64.3L192.9,67.3L192.0,67.5L190.2,64.1L188.9,63.0ZM210.2,78.6L210.9,78.7L211.3,80.0L210.7,81.3L211.6,81.8L211.9,82.8L212.4,86.5L210.9,88.0L210.9,90.0L209.5,86.1L209.0,86.4L207.9,88.6L208.9,90.3L208.1,92.5L207.5,92.6L207.3,90.9L206.3,91.7L203.5,90.3L202.6,87.7L203.4,85.9L201.4,84.3L200.7,84.5L200.4,85.9L199.3,84.7L198.3,85.4L198.1,84.7L197.5,84.5L195.3,87.7L194.9,86.6L196.4,83.5L198.6,83.0L200.6,80.9L202.1,82.0L201.7,83.4L203.3,82.8L204.2,81.3L205.4,81.5L205.9,79.9L207.0,80.3L207.2,79.7L208.3,79.7L208.2,76.9ZM200.3,78.1L200.4,76.1L202.8,71.2L202.7,74.5L201.5,75.5ZM194.9,42.2L194.5,42.4L194.6,42.0L195.0,41.8ZM192.0,90.9L193.0,91.3L192.2,91.4L190.9,91.4ZM176.7,84.0L176.3,83.5L176.7,83.3ZM187.3,74.2L186.9,74.3L187.1,73.6L187.7,73.8ZM188.0,67.8L188.5,67.6L188.8,68.4L187.5,68.1L187.3,67.2ZM197.6,74.2L197.1,74.1L197.5,73.4L197.9,73.5ZM204.9,76.8L204.0,77.4L202.4,77.4L202.0,76.7L202.3,76.3L203.9,75.4L204.8,75.9ZM188.6,94.0L187.2,94.8L188.3,93.7ZM195.5,89.6L195.0,89.6L194.5,88.7L196.2,88.8ZM210.4,76.9L210.2,76.3L210.5,75.8L210.7,76.2ZM209.0,76.3L208.3,75.5L208.6,74.6L209.0,74.5ZM194.8,62.5L195.6,62.8L195.4,63.6L194.5,63.4ZM195.5,67.1L195.2,68.0L194.9,66.9L195.7,65.9ZM197.6,67.2L196.8,66.7L197.4,66.5ZM200.0,65.2L198.8,64.5L199.1,64.2ZM201.6,67.3L202.8,68.5L202.8,69.3L200.7,67.6L199.5,68.7L199.8,66.2ZM204.0,62.2L202.9,62.3L203.1,60.9L203.5,60.5L204.2,61.3ZM195.3,57.0L194.8,58.3L194.6,56.9ZM209.4,87.5L209.0,87.1L209.4,86.9ZM205.0,70.3L204.3,70.2L204.3,69.6ZM201.5,78.9L201.2,79.4L200.8,79.1ZM25.4,-21.5L26.5,-19.4L24.8,-18.0L21.4,-17.1L16.1,-18.1L14.9,-17.7L14.2,-16.6L14.9,-16.1L14.7,-15.5L16.0,-15.0L14.9,-14.1L15.6,-13.3L15.0,-12.1L16.2,-11.4L16.3,-10.5L17.5,-10.5L17.6,-9.5L20.0,-8.7L17.1,-6.9L17.0,-4.5L17.4,-3.9L14.6,-1.7L14.3,-0.4L12.7,0.2L10.9,3.7L8.8,4.7L7.0,7.7L3.0,8.7L1.5,7.5L-1.7,10.9L-1.9,12.4L0.6,13.3L0.4,15.5L1.0,16.3L2.4,16.5L3.9,21.3L2.7,21.9L1.8,21.2L-0.7,22.2L-4.6,21.6L-4.8,22.9L-6.4,23.1L-7.1,23.7L-9.4,23.0L-10.6,19.9L-12.4,19.5L-12.4,18.1L-13.4,16.8L-14.5,17.1L-13.3,17.3L-20.3,18.2L-22.3,17.5L-24.2,17.7L-24.4,18.2L-31.7,18.3L-30.6,14.3L-28.4,13.1L-25.7,12.7L-25.1,10.8L-27.2,10.4L-27.2,6.7L-30.4,5.5L-34.4,0.5L-28.2,2.2L-24.1,1.9L-22.1,2.3L-14.1,0.5L-13.7,-3.1L-11.9,-4.8L-9.6,-4.7L-8.5,-5.1L-9.1,-5.7L-6.9,-6.9L-5.3,-6.9L-4.2,-6.2L-2.7,-7.4L-2.8,-9.2L-1.9,-11.5L1.0,-12.5L-0.4,-15.2L3.9,-15.4L4.1,-16.6L3.6,-17.2L6.1,-19.7L5.4,-22.2L4.4,-23.0L8.1,-25.5L11.7,-26.1L15.2,-25.9L17.3,-26.7L19.3,-26.5L22.1,-25.1L22.2,-23.0L23.1,-22.2L24.6,-22.4ZM-42.3,37.2L-42.6,36.7L-42.1,36.1L-41.7,35.4L-41.5,36.0ZM-63.5,50.7L-67.6,41.8L-56.4,38.0L-53.9,30.4L-55.6,27.7L-55.5,26.5L-54.4,23.8L-54.5,23.0L-52.6,22.6L-53.4,21.9L-53.3,19.5L-52.9,19.1L-52.3,20.0L-51.1,19.1L-50.1,21.0L-48.0,23.1L-42.1,24.6L-39.7,27.9L-38.2,28.5L-38.3,29.6L-43.3,36.5L-44.3,36.4L-44.4,35.8L-45.6,37.1L-46.1,39.2L-45.7,41.7L-49.4,42.7L-51.1,45.6L-54.5,46.2L-56.1,49.3L-59.8,49.4ZM-51.4,16.5L-52.0,16.4L-52.2,15.0L-51.8,14.3L-50.9,14.0ZM219.1,-32.8L217.8,-31.6L214.3,-31.5L212.6,-29.6L211.6,-29.9L210.6,-29.4L209.3,-30.3L207.8,-29.4L206.4,-30.1L207.2,-30.7L205.3,-30.9L206.7,-32.5L208.5,-33.0L207.1,-33.5L208.0,-35.3L207.8,-36.2L205.6,-37.1L205.1,-36.5L204.0,-37.6L204.1,-38.4L206.0,-39.7L210.1,-41.4L212.9,-44.5L214.2,-44.4L214.6,-43.8L218.2,-43.3L218.8,-44.1L217.9,-45.6L221.2,-45.7L222.6,-47.2L224.1,-47.3L224.8,-49.4L226.1,-49.0L227.8,-46.7L226.1,-46.3L224.3,-44.5L224.1,-41.3L219.6,-38.5L216.1,-37.2L215.4,-35.0L216.9,-34.5ZM68.0,8.1L67.5,10.9L68.1,12.1L67.8,13.6L64.9,13.8L63.9,13.1L62.7,13.5L59.3,12.9L58.7,12.0L57.0,12.3L55.1,11.2L54.8,10.3L52.9,9.5L49.9,10.0L47.8,9.4L47.6,8.8L44.5,8.1L39.7,5.1L38.8,5.1L37.7,4.3L39.0,1.0L40.9,-0.7L42.0,-0.2L42.9,-1.3L43.7,-1.5L45.2,-1.2L45.9,-0.2L49.4,1.5L51.0,3.1L52.9,3.0L53.4,4.1L55.5,5.5L56.9,5.3L56.8,6.4L58.8,6.5L60.0,7.9L60.6,7.2L61.6,7.9L62.4,7.2L64.3,8.2ZM66.9,-72.8L68.0,-73.2L68.3,-73.9L71.7,-74.1L73.8,-74.9L73.7,-75.6L75.3,-76.4L81.8,-78.6L83.3,-78.7L83.9,-79.3L84.9,-78.6L86.1,-79.0L86.7,-78.3L91.0,-78.1L91.4,-76.8L92.4,-76.1L95.8,-75.7L97.8,-76.0L102.7,-75.0L105.1,-76.1L106.0,-77.1L106.1,-78.0L105.2,-78.4L104.5,-80.0L105.2,-81.5L107.5,-82.8L108.4,-84.0L112.3,-82.7L120.5,-81.1L121.2,-78.2L125.0,-76.8L127.9,-76.6L132.8,-77.8L137.8,-77.2L139.7,-76.0L142.3,-75.8L142.5,-74.7L144.9,-73.4L152.8,-72.7L155.1,-73.6L160.7,-74.2L166.3,-77.0L167.9,-76.9L170.5,-75.6L174.0,-75.9L175.2,-75.3L172.0,-70.6L171.8,-69.3L170.9,-68.9L171.2,-67.9L172.3,-67.2L174.1,-67.8L176.0,-67.8L177.7,-67.1L179.3,-68.4L182.0,-68.3L186.6,-65.2L187.2,-63.4L185.2,-63.1L183.3,-63.7L179.2,-62.8L178.0,-63.0L177.7,-62.2L174.8,-61.9L173.4,-59.8L171.5,-58.7L167.2,-58.5L163.6,-56.0L157.3,-57.2L155.4,-54.6L157.4,-52.1L153.9,-50.7L151.6,-48.5L147.7,-47.3L138.0,-46.7L131.3,-44.1L129.5,-44.3L129.5,-45.1L126.5,-44.7L120.7,-46.2L118.2,-47.6L102.1,-48.6L99.0,-48.3L97.1,-50.4L95.8,-53.0L95.1,-53.3L95.1,-54.3L92.7,-54.5L88.3,-56.8L78.4,-57.7L77.5,-59.0L78.8,-60.9L78.5,-61.8L78.9,-63.0L76.3,-67.1L73.1,-68.5L71.5,-68.4L69.7,-69.2L69.5,-69.9L67.5,-70.5L67.8,-71.1L66.6,-71.8L67.1,-72.2ZM-46.3,191.8L-47.6,191.7L-47.0,190.5L-46.6,190.0L-46.0,190.4ZM113.0,89.5L113.6,88.6L116.6,90.3L116.3,92.1L116.8,92.6L118.4,91.6L118.9,92.0L119.6,91.9L120.5,90.3L121.4,90.5L124.2,93.4L125.4,95.6L125.5,101.2L125.7,103.2L126.9,104.2L128.4,107.5L128.7,108.4L128.3,108.8L127.5,107.8L127.6,108.5L125.7,108.9L125.2,108.1L117.5,103.0L117.5,101.6L115.3,98.9L113.9,91.3ZM178.6,98.2L176.8,97.5L172.0,97.5L171.0,99.0L170.6,102.5L169.2,103.2L169.6,104.4L168.1,105.4L168.3,106.5L167.2,108.4L164.8,108.5L163.7,109.3L161.2,108.0L159.4,108.1L156.8,110.2L154.3,110.0L152.0,110.7L151.3,110.2L148.8,107.9L148.4,106.8L148.7,106.3L149.6,107.3L154.7,108.7L154.0,108.1L154.9,105.9L154.7,105.0L155.5,105.0L155.5,104.0L156.2,103.3L161.3,102.0L164.9,97.9L165.3,96.5L167.6,98.7L168.3,97.3L167.9,96.1L169.0,95.4L169.3,97.3L170.1,97.4L169.4,95.4L171.0,94.6L170.5,93.4L171.2,92.7L172.2,92.7L175.6,87.4L175.6,88.9L176.9,87.5L177.5,88.6L178.8,89.4L178.8,91.2L178.3,91.6L180.2,91.0L180.6,91.7L180.1,92.3L181.5,91.9L184.9,93.6L184.4,94.6L181.1,95.0L180.9,95.7L182.2,97.4L180.2,97.8L179.0,97.5ZM128.4,103.6L128.1,103.5L128.3,103.1ZM113.7,93.9L113.4,93.3L113.9,93.4ZM112.0,89.4L112.3,89.8L111.6,90.2L111.3,89.6ZM176.9,86.8L177.0,86.1L177.5,86.3ZM-76.8,161.2L-75.3,163.7L-73.3,172.5L-74.3,174.6L-75.5,172.7L-76.3,173.0L-75.7,176.6L-77.1,179.5L-77.5,183.7L-85.7,208.2L-87.3,209.6L-89.5,209.9L-91.9,211.1L-93.4,211.1L-97.5,209.0L-98.8,206.3L-98.6,203.4L-100.4,198.7L-99.5,195.2L-98.3,194.5L-97.9,193.3L-96.3,190.6L-95.9,188.3L-97.8,180.8L-96.0,177.5L-95.9,175.7L-89.5,173.8L-88.6,174.5L-88.8,173.7L-88.3,173.0L-86.5,171.8L-86.0,172.6L-86.0,171.6L-85.0,170.1L-84.6,169.9L-84.5,171.0L-83.4,169.6L-82.7,169.8L-83.4,168.6L-82.6,167.0L-82.8,165.9L-81.6,166.1L-79.6,164.4L-79.1,162.8L-79.6,161.3L-78.0,159.9ZM-75.3,178.2L-75.7,178.9L-75.6,178.3L-75.0,177.4ZM3.6,-38.9L6.4,-38.6L8.0,-39.7L8.8,-39.5L9.0,-40.2L9.8,-40.0L11.8,-41.1L8.2,-41.9L8.1,-42.5L7.1,-42.5L6.2,-43.9L6.0,-43.1L5.3,-43.1L5.2,-42.3L0.8,-43.8L4.6,-46.2L3.4,-46.9L4.7,-48.4L8.5,-48.5L13.1,-47.2L13.3,-49.4L15.8,-50.3L20.1,-48.8L26.2,-49.3L34.0,-48.5L35.6,-47.3L37.2,-47.2L38.4,-45.8L32.8,-43.9L30.5,-42.1L25.9,-41.9L23.7,-39.3L21.3,-39.2L20.9,-40.4L18.1,-39.8L18.1,-39.2L15.0,-38.2L14.3,-36.1L9.6,-35.6L8.4,-35.0L7.7,-35.5L6.7,-35.3L5.5,-36.5L3.0,-35.7L1.9,-36.4L-2.6,-36.2L-2.7,-37.7L-2.0,-37.7L-1.8,-38.4L-0.1,-38.8L1.9,-37.8ZM-74.4,-56.4L-75.1,-56.8L-74.8,-57.3ZM3.6,-46.5L-3.2,-43.4L-5.3,-41.3L-5.4,-40.4L-5.9,-40.4L-7.3,-41.1L-7.1,-41.9L-7.7,-42.5L-12.3,-42.5L-13.1,-45.6L-15.0,-45.6L-14.6,-49.4L-15.8,-48.9L-16.9,-50.6L-19.1,-52.1L-20.9,-51.5L-25.5,-51.8L-30.1,-51.3L-33.7,-54.7L-43.0,-59.1L-52.6,-57.0L-52.6,-43.0L-54.7,-42.9L-56.8,-45.5L-59.6,-46.9L-63.6,-46.2L-65.7,-44.8L-65.3,-48.5L-67.9,-48.9L-69.0,-50.0L-70.2,-50.1L-70.2,-51.2L-71.9,-53.9L-74.1,-55.0L-73.5,-55.6L-69.3,-55.2L-71.3,-56.7L-69.8,-58.4L-63.1,-58.3L-64.7,-59.2L-63.3,-61.5L-63.5,-64.1L-65.7,-64.6L-67.0,-63.9L-70.6,-65.0L-75.5,-63.1L-77.5,-62.8L-77.9,-62.1L-80.4,-63.0L-80.5,-63.7L-79.0,-63.7L-81.9,-67.3L-85.2,-67.4L-86.0,-68.2L-86.1,-69.3L-87.6,-70.0L-87.4,-71.5L-86.2,-72.8L-87.1,-73.6L-86.4,-75.4L-84.1,-77.6L-81.3,-75.5L-79.7,-75.7L-79.4,-76.0L-80.2,-78.3L-77.6,-79.2L-76.9,-80.1L-73.9,-81.0L-72.1,-82.6L-70.0,-81.6L-66.7,-82.5L-65.4,-81.6L-62.5,-81.6L-59.5,-80.0L-58.0,-78.0L-57.6,-79.8L-53.7,-78.2L-50.7,-79.9L-48.7,-80.0L-47.1,-79.4L-45.6,-80.1L-43.7,-80.0L-41.7,-78.6L-39.6,-78.4L-39.3,-77.9L-37.3,-79.2L-35.9,-78.6L-34.0,-78.6L-32.3,-79.3L-31.7,-81.0L-35.8,-82.3L-37.4,-83.3L-34.0,-84.7L-34.4,-85.8L-34.5,-86.4L-33.6,-87.3L-29.7,-87.4L-33.2,-88.7L-31.8,-89.4L-33.9,-89.8L-32.5,-91.4L-30.3,-91.0L-20.8,-92.7L-18.4,-92.5L-17.0,-93.6L-6.9,-94.9L-6.7,-95.6L-3.8,-96.5L0.7,-95.6L2.8,-96.2L4.4,-93.5L4.1,-92.0L7.5,-92.0L8.2,-92.4L9.2,-91.0L9.8,-91.7L12.1,-91.0L13.8,-91.4L13.8,-90.9L12.4,-90.1L12.8,-89.1L14.5,-89.8L16.3,-89.3L20.4,-91.5L25.7,-92.9L25.0,-91.8L24.1,-91.8L24.3,-91.3L29.5,-88.4L37.5,-78.9L39.1,-79.6L39.2,-80.5L40.3,-80.9L41.8,-80.5L41.6,-79.7L42.7,-79.6L43.0,-78.8L46.9,-78.8L50.1,-79.8L52.3,-78.9L53.8,-76.9L56.3,-76.2L57.2,-74.5L60.7,-74.1L62.8,-75.0L62.4,-74.3L65.0,-72.5L63.1,-72.4L62.1,-70.4L59.1,-69.9L58.3,-68.1L58.8,-65.6L58.1,-64.8L55.5,-64.0L55.0,-64.5L48.9,-65.3L46.2,-59.3L47.3,-58.6L47.0,-57.5L44.8,-57.6L43.9,-58.3L37.1,-56.6L39.3,-55.9L38.9,-53.6L40.5,-50.0L39.0,-49.6L39.6,-48.9L38.3,-48.4L38.3,-46.3L37.2,-47.2L35.4,-47.4L34.3,-48.5L26.2,-49.3L20.1,-48.8L15.8,-50.3L13.3,-49.4L13.1,-47.2L6.6,-48.7L4.7,-48.4L3.4,-46.9ZM237.8,-23.6L237.2,-23.7L237.6,-24.1ZM256.5,-29.7L256.1,-29.8L256.2,-30.7L257.1,-31.6L256.9,-30.7L257.4,-30.6ZM243.7,-16.3L242.9,-16.0L243.0,-16.6L244.0,-17.3ZM227.5,-1.0L226.6,-1.5L227.6,-1.5ZM228.8,-1.5L228.5,-1.7L229.0,-3.0ZM225.5,-8.5L225.1,-8.9L225.2,-9.6L225.8,-9.7ZM222.5,-15.7L222.2,-16.4L222.7,-16.3ZM222.9,-16.5L222.4,-16.6L222.7,-17.5L223.2,-17.7ZM220.2,-10.6L221.0,-10.1L220.3,-9.9ZM226.6,-9.2L226.1,-9.4L226.9,-9.6ZM267.6,-57.5L267.0,-57.6L267.2,-57.9ZM260.8,-45.9L260.6,-46.4L261.1,-46.5ZM223.3,-12.2L222.8,-12.1L223.0,-12.4L223.6,-12.8ZM233.7,-15.0L234.4,-14.9L234.1,-14.6ZM277.1,-53.6L280.4,-52.9L282.9,-54.4L282.0,-51.9L282.8,-50.5L284.6,-50.9L281.2,-49.4L277.6,-48.9L275.6,-47.2L274.9,-45.6L269.7,-47.8L266.4,-46.9L264.5,-47.7L264.0,-46.7L267.0,-44.9L265.2,-44.9L264.2,-43.8L263.0,-43.4L262.7,-44.0L263.1,-45.3L262.1,-47.3L262.3,-48.1L264.3,-49.2L264.2,-50.6L267.0,-50.1L267.9,-50.5L269.3,-55.0L268.7,-57.6L269.0,-58.5L270.0,-58.9L273.6,-55.7ZM229.6,-13.7L231.6,-13.7L231.0,-12.4L232.3,-12.4L232.7,-11.1L231.4,-9.4L230.2,-5.3L229.2,-5.5L229.3,-4.8L227.8,-3.9L228.2,-6.4L227.7,-6.5L227.3,-5.9L227.4,-4.5L226.1,-4.8L225.7,-5.4L226.3,-5.7L226.0,-7.0L225.9,-7.9L227.6,-10.0L227.1,-10.1L227.2,-10.8L226.1,-12.1L225.7,-11.8L225.8,-10.8L226.4,-10.8L226.5,-10.3L225.4,-10.5L224.3,-9.8L224.0,-11.6L225.2,-10.8L223.7,-12.7L224.6,-12.6L224.5,-13.1L227.9,-14.9ZM241.5,-16.2L242.6,-16.1L243.0,-14.5L241.6,-13.7L240.9,-12.3L238.8,-13.3L237.5,-12.8L235.7,-10.5L234.6,-11.1L234.6,-12.2L234.2,-13.0L232.8,-12.7L235.1,-14.0L236.2,-15.6L237.2,-14.9L238.6,-15.3L238.7,-16.1L240.0,-16.5ZM267.3,-43.2L268.2,-43.3L268.1,-40.7L269.5,-39.1L270.1,-35.8L268.2,-31.9L266.9,-31.7L266.3,-31.0L266.5,-27.0L264.9,-23.7L266.0,-21.8L264.4,-20.9L264.1,-19.7L262.1,-18.7L262.1,-20.1L263.1,-21.2L262.1,-21.5L261.4,-20.6L261.5,-19.6L259.9,-20.1L259.3,-18.4L258.4,-17.6L258.6,-19.1L257.9,-19.5L255.9,-17.5L251.7,-17.4L252.5,-18.1L251.3,-18.4L251.0,-18.0L250.7,-19.2L249.7,-17.8L251.0,-16.8L250.9,-16.4L249.0,-15.9L247.4,-13.5L246.6,-13.3L245.7,-13.5L244.4,-15.2L244.3,-16.3L245.4,-17.1L245.3,-17.7L242.4,-18.1L240.1,-17.2L235.6,-16.2L233.9,-16.4L233.2,-14.6L231.7,-15.4L228.6,-15.1L228.8,-16.5L230.3,-16.8L236.2,-20.9L240.1,-20.9L244.6,-21.8L245.2,-21.0L246.9,-21.1L248.1,-21.9L248.0,-23.2L250.3,-25.6L250.9,-28.1L252.7,-28.6L251.1,-27.0L251.5,-26.0L252.4,-25.7L256.4,-27.4L258.5,-29.8L260.3,-30.8L262.0,-33.8L263.0,-36.6L262.7,-37.4L261.8,-37.7L262.8,-39.0L262.6,-40.6L263.8,-41.2L264.2,-42.7L265.1,-42.5L265.5,-41.2L266.9,-41.4L267.4,-42.6L265.7,-42.3L265.7,-42.8L266.2,-43.7ZM203.8,20.8L203.4,21.5L203.1,21.0ZM202.3,21.7L201.7,21.5L202.4,21.4ZM208.1,20.0L207.4,20.0L207.5,19.5ZM218.7,12.7L217.2,13.5L216.7,14.8L216.7,14.0L217.3,12.6L218.1,12.7L218.6,11.8ZM223.1,6.8L222.8,7.1L222.1,6.7L223.5,6.0L224.1,6.0ZM-51.8,11.7L-52.7,12.5L-55.2,12.8L-53.4,12.1L-53.5,11.6ZM-60.4,-27.9L-57.4,-28.4L-56.7,-29.6L-54.9,-30.6L-51.5,-30.7L-50.9,-31.3L-48.1,-31.2L-47.5,-30.3L-44.1,-29.1L-42.0,-29.2L-40.2,-28.5L-39.6,-27.6L-37.3,-26.5L-36.3,-25.2L-33.3,-25.2L-32.7,-21.0L-33.4,-20.0L-33.5,-18.5L-34.8,-17.2L-34.2,-16.4L-35.1,-16.4L-35.7,-15.6L-35.6,-13.8L-34.1,-13.3L-35.4,-11.6L-34.4,-8.5L-34.5,-5.7L-31.3,-5.3L-30.7,-3.5L-34.4,0.5L-30.4,5.5L-27.2,6.7L-27.2,10.4L-25.1,10.8L-25.6,12.7L-28.4,13.1L-30.6,14.3L-31.6,18.2L-32.2,18.6L-35.6,17.3L-36.0,17.8L-39.6,17.2L-41.1,17.4L-45.8,16.5L-47.5,16.0L-48.7,12.2L-49.5,11.1L-51.5,10.7L-57.2,13.3L-61.2,12.4L-65.0,10.2L-65.8,9.1L-69.4,7.9L-70.3,7.1L-71.8,3.6L-72.5,3.2L-72.6,2.2L-74.8,-0.8L-76.7,-0.1L-78.7,-1.3L-78.0,-1.8L-78.8,-1.9L-79.3,-0.2L-80.9,-0.1L-81.3,-1.1L-82.5,-1.8L-82.5,-3.8L-83.8,-3.8L-83.2,-6.8L-84.9,-9.2L-89.7,-11.2L-90.0,-13.0L-92.3,-15.1L-91.8,-16.0L-92.0,-17.4L-91.4,-17.4L-91.3,-18.2L-89.6,-19.5L-90.1,-21.3L-89.1,-21.9L-92.5,-22.9L-93.6,-24.6L-94.6,-27.7L-95.4,-28.3L-95.4,-29.3L-96.8,-30.1L-95.9,-31.7L-96.5,-31.9L-96.6,-33.6L-97.5,-35.6L-96.1,-35.8L-95.4,-37.1L-92.0,-34.2L-89.4,-33.7L-88.0,-33.8L-82.6,-36.8L-81.4,-35.7L-82.2,-35.1L-81.5,-34.3L-82.6,-33.6L-80.3,-32.0L-79.3,-32.1L-78.5,-29.1L-74.6,-28.1L-73.1,-26.7L-70.9,-25.6L-66.8,-25.2L-60.9,-26.3L-60.4,-26.3L-61.3,-26.0L-60.2,-25.9ZM-53.3,195.1L-54.9,194.8L-55.4,194.0L-55.1,193.4L-53.8,193.4L-53.1,194.3ZM353.6,190.9L357.3,192.9L359.0,194.8L363.8,197.9L363.7,198.9L362.3,198.5L356.3,194.9L353.4,191.8L353.0,190.7ZM367.9,195.4L368.3,195.5L368.3,196.1L367.3,196.0L367.1,195.3ZM365.6,194.4L364.3,193.8L364.8,193.1L364.2,192.9L365.2,192.8ZM165.2,28.5L166.4,28.7L166.1,29.3L164.9,29.0ZM165.1,29.6L164.5,29.5L165.3,29.1ZM140.8,58.1L140.1,60.3L141.1,62.9L140.7,64.5L140.9,66.8L140.3,67.4L139.7,67.2L138.6,68.1L136.7,68.6L136.6,69.6L135.1,69.3L134.6,69.8L134.6,71.1L135.7,72.1L135.7,73.0L134.2,72.2L132.5,72.8L131.5,72.5L131.5,73.3L130.8,74.0L129.2,74.4L127.1,73.5L126.3,74.1L125.9,73.7L126.6,72.6L126.3,72.0L125.9,71.6L125.4,72.3L124.4,72.5L124.3,70.4L122.9,68.1L122.9,66.8L122.0,65.9L121.3,63.5L121.3,62.5L122.2,62.4L124.0,59.8L125.9,59.2L130.5,59.2L131.5,59.9L132.1,59.5L132.7,60.4L135.4,61.1L135.0,59.5L136.0,59.0L137.0,58.6L138.6,59.6ZM169.4,95.4L170.0,97.5L169.3,97.3L169.1,96.6L169.0,95.4ZM169.0,95.4L167.9,96.1L168.3,97.3L167.9,98.4L167.4,98.7L166.8,98.0L165.4,96.5L168.9,94.9ZM81.2,8.5L81.0,9.3L82.5,9.7L82.9,10.3L82.8,11.9L77.8,12.3L76.4,11.8L74.2,12.5L72.8,12.1L70.8,11.5L70.3,10.7L73.1,7.4L74.7,6.5L78.9,7.7L79.8,7.3L81.2,7.9ZM71.5,30.0L70.8,26.4L71.0,25.9L70.3,25.6L69.7,24.0L70.3,21.8L67.6,20.4L69.3,18.3L71.1,18.0L67.9,15.6L69.2,13.8L68.9,13.1L70.7,14.2L71.4,13.6L72.7,15.2L73.4,15.2L73.8,14.4L74.4,15.4L74.4,17.9L76.7,18.4L82.8,18.4L84.3,19.2L83.4,19.5L83.0,21.2L82.1,22.1L80.2,22.4L79.7,23.1L79.4,24.4L80.0,26.2L80.5,25.8L80.9,26.6L81.6,26.4L82.3,24.0L83.5,24.0L84.9,33.0L83.8,32.5L83.4,32.8L83.8,35.0L82.8,33.5L82.1,29.1L80.6,27.0L78.6,28.1L77.5,26.5L77.3,24.4L77.1,25.0L76.1,24.9L77.3,25.6L76.7,27.5L77.4,29.0L75.9,31.0L75.3,30.8L75.9,29.8L74.9,30.3L74.8,30.0L75.0,28.6L74.4,30.5L73.4,31.3L73.1,29.4L73.2,30.7L72.6,31.5L71.7,30.9ZM79.4,29.7L79.0,30.0L79.1,28.4ZM78.0,30.1L77.0,30.2L77.6,29.2L77.0,27.2L77.6,27.3L78.3,28.6ZM-72.8,15.6L-73.3,15.3L-73.3,14.3L-72.9,14.3ZM-79.3,-32.1L-80.3,-32.0L-82.6,-33.6L-81.5,-34.3L-82.2,-35.1L-81.4,-35.7L-82.6,-36.8L-88.2,-33.8L-88.6,-34.9L-87.9,-35.0L-88.7,-35.7L-88.3,-36.3L-91.7,-37.9L-90.5,-38.1L-90.2,-38.9L-92.1,-40.0L-92.4,-40.6L-91.6,-41.2L-93.6,-42.1L-93.1,-42.4L-93.8,-42.9L-92.8,-43.5L-88.1,-42.1L-87.6,-42.9L-89.4,-44.3L-88.5,-45.2L-87.3,-44.9L-85.1,-42.9L-83.4,-42.6L-80.4,-45.0L-80.1,-44.8L-77.1,-41.0L-74.4,-39.9L-73.7,-39.1L-76.7,-38.7L-77.6,-36.5L-77.5,-35.5L-78.2,-34.3L-78.8,-34.7L-79.4,-33.6ZM274.7,159.4L274.4,160.8L275.5,162.0L276.8,168.5L277.6,169.0L279.5,168.1L282.6,170.8L283.1,176.3L284.9,178.3L285.7,181.0L285.4,183.4L286.5,184.5L286.7,186.1L289.5,187.7L290.6,187.6L291.8,189.1L295.6,191.1L296.1,191.8L295.3,192.2L298.2,196.0L299.1,199.3L300.2,199.7L300.3,198.2L302.3,199.7L302.6,199.0L303.1,199.8L303.4,203.1L304.6,204.4L307.1,205.7L311.2,210.6L311.2,211.6L312.1,212.7L312.0,217.3L313.7,221.3L313.8,223.0L311.6,230.1L311.3,233.5L309.5,237.3L307.1,239.0L305.1,241.6L305.1,242.9L303.5,245.1L303.3,247.0L301.0,250.2L300.0,256.6L298.3,257.5L292.3,258.1L288.5,260.9L286.1,261.2L286.5,261.8L287.0,261.6L286.7,262.8L285.8,261.7L285.0,261.8L284.5,260.9L283.0,260.4L283.5,259.9L283.3,259.3L281.3,260.3L280.4,259.7L281.2,259.7L281.9,258.7L281.1,258.0L279.2,258.9L280.2,259.2L276.0,261.5L271.9,259.9L269.2,259.4L268.1,259.8L264.2,258.0L261.9,255.5L262.2,253.3L261.7,252.2L258.9,249.2L260.1,249.3L260.0,248.4L257.2,249.4L255.9,249.3L257.1,247.1L257.1,246.1L255.6,243.8L254.1,247.5L251.0,247.9L251.5,246.7L252.9,246.7L253.3,243.8L255.0,241.6L254.7,240.2L255.2,239.8L254.4,237.8L254.4,238.7L252.4,241.8L249.3,243.3L247.3,245.7L247.6,246.9L246.9,246.5L246.4,246.8L244.4,245.4L244.8,245.1L245.6,245.4L244.8,243.0L242.9,240.4L241.3,240.0L240.6,238.4L241.1,238.4L241.1,237.7L238.9,236.4L237.2,236.3L235.5,235.4L233.5,235.6L229.5,233.7L221.2,234.5L215.1,236.6L209.9,236.7L203.6,239.5L201.4,242.6L199.7,243.2L198.8,242.8L195.7,243.2L195.4,242.7L192.9,242.5L187.1,243.1L185.6,244.6L183.5,245.0L180.7,246.9L178.6,247.4L174.6,247.0L168.9,244.2L168.9,241.4L170.2,241.8L171.5,240.1L171.5,234.4L169.2,230.1L168.4,224.7L165.8,220.7L165.2,217.9L162.3,213.5L162.8,213.2L163.6,214.9L164.5,214.7L164.6,214.1L162.9,211.7L163.1,211.3L164.1,212.2L164.1,213.3L164.6,212.9L165.1,214.0L166.0,213.9L165.9,212.2L163.0,206.9L163.2,204.7L164.2,203.0L164.0,200.0L165.0,197.4L165.6,196.9L165.7,199.4L167.8,196.9L175.3,192.5L177.9,192.7L183.0,191.0L184.3,190.0L186.1,190.1L191.4,188.5L192.7,187.4L194.5,184.2L196.5,182.8L195.7,180.7L196.1,179.1L198.8,176.5L201.0,180.6L201.1,178.7L202.0,179.1L202.2,178.3L200.8,176.7L201.3,176.4L201.2,175.7L202.1,176.3L202.8,175.8L205.6,176.3L204.2,175.9L205.1,174.3L204.6,174.7L204.1,173.9L204.3,172.9L205.3,172.0L206.7,172.7L205.8,171.6L206.6,171.0L207.8,171.5L207.1,169.9L208.6,169.0L208.8,168.2L208.9,169.2L209.5,169.0L209.8,169.5L210.3,169.1L210.4,167.1L211.2,167.8L211.7,167.3L212.3,167.8L213.6,166.2L215.7,167.3L218.4,170.1L217.9,172.3L218.6,172.1L218.3,171.2L219.8,170.1L221.7,170.6L222.2,171.6L222.4,170.5L223.8,171.5L223.8,170.4L224.6,170.3L223.7,169.7L224.1,169.3L222.9,168.7L224.6,165.6L226.2,164.5L225.8,163.2L227.5,162.1L227.5,161.2L228.4,161.7L228.5,161.0L230.0,159.9L230.6,160.7L233.6,160.3L234.2,160.7L235.4,160.1L235.2,158.3L234.5,157.7L233.0,157.6L232.0,156.9L232.6,156.5L233.3,157.0L234.0,156.6L235.3,157.7L236.3,157.3L237.1,158.5L241.8,159.8L242.9,159.5L244.1,160.3L244.8,160.4L247.4,158.9L246.6,160.4L247.7,160.3L248.0,161.2L248.7,161.2L248.7,160.1L249.7,159.4L251.3,160.9L249.7,162.6L249.9,163.4L249.4,164.3L248.8,163.9L247.4,164.6L247.5,167.0L245.5,170.1L245.7,170.7L248.8,173.2L250.4,173.6L250.7,174.4L254.1,175.7L256.1,177.5L259.0,178.2L259.9,179.8L263.5,181.3L265.8,180.2L268.0,175.1L268.8,171.2L268.3,166.4L268.8,163.2L269.9,162.7L269.1,160.9L269.7,159.5L270.1,159.8L270.9,155.6L271.9,154.7L272.5,154.8L273.5,158.9ZM311.8,211.9L311.4,211.1L312.2,208.4L312.6,208.0L312.8,209.2ZM260.9,177.0L259.6,177.6L259.6,177.2L261.2,176.3L261.6,176.8ZM250.4,166.5L251.1,166.4L250.5,167.5L251.2,168.1L249.0,168.0L249.3,166.7L250.2,166.0ZM226.9,158.4L227.5,158.7L227.1,159.0L225.5,158.9L225.5,158.4L225.9,158.3L225.8,157.6L226.3,157.1ZM227.5,157.2L230.0,156.5L231.0,157.5L230.7,158.0L228.8,159.3L227.1,158.1L226.6,156.6ZM162.1,213.0L161.3,212.0L161.3,211.0ZM304.6,203.3L305.1,204.1L304.1,203.4ZM313.5,218.3L313.0,219.1L313.2,218.1ZM286.3,183.3L286.5,184.1L286.0,183.8L285.6,183.4ZM248.6,166.5L248.2,166.3L248.5,165.9ZM170.6,193.0L170.1,193.1L170.5,192.5ZM-13.1,-27.9L-8.6,-27.5L-7.3,-26.4L-4.1,-27.9L-2.6,-27.0L-1.9,-28.7L0.7,-28.8L0.8,-30.1L3.3,-32.1L4.7,-31.6L4.8,-30.1L5.9,-30.1L5.4,-27.1L6.3,-25.4L10.0,-26.7L12.7,-28.4L14.0,-28.2L13.7,-27.5L16.3,-28.2L18.4,-27.5L16.4,-27.2L17.0,-26.7L15.2,-25.9L9.8,-26.0L5.8,-24.2L4.4,-23.0L5.4,-22.2L6.1,-19.7L3.6,-17.2L4.1,-16.6L3.9,-15.4L-0.4,-15.2L1.0,-12.5L-1.6,-11.6L-2.1,-10.8L-2.8,-9.2L-2.7,-7.4L-3.9,-6.3L-6.9,-6.9L-9.1,-5.7L-8.5,-5.1L-10.2,-4.6L-11.5,-5.0L-13.5,-3.5L-13.8,0.1L-14.3,0.6L-22.1,2.3L-24.1,1.9L-28.2,2.2L-34.4,0.5L-30.7,-3.5L-31.3,-5.3L-34.5,-5.7L-34.4,-8.5L-35.4,-11.6L-34.1,-13.3L-35.6,-13.8L-35.7,-15.6L-35.1,-16.4L-34.2,-16.4L-34.8,-17.2L-33.5,-18.5L-32.8,-21.4L-31.4,-20.6L-30.1,-20.7L-28.9,-19.6L-27.4,-20.0L-26.1,-20.7L-25.8,-22.2L-22.5,-22.8L-20.6,-24.1L-19.5,-27.1L-16.7,-27.6L-15.9,-28.8ZM26.5,-19.4L25.4,-21.5L27.9,-20.8L29.3,-20.9ZM99.0,-48.4L102.1,-48.6L104.5,-44.2L103.8,-43.5L104.0,-43.1L106.3,-41.3L106.0,-40.1L107.5,-40.2L109.4,-41.2L112.9,-41.3L113.1,-40.0L110.5,-37.5L115.6,-35.7L115.9,-34.6L117.0,-34.3L117.5,-33.3L119.5,-33.0L120.2,-33.8L119.4,-34.4L121.6,-35.1L123.7,-34.7L127.7,-35.9L128.5,-34.5L126.8,-32.6L125.6,-32.1L125.5,-29.8L128.6,-28.1L130.2,-28.2L129.9,-27.5L132.0,-26.5L133.0,-23.8L132.6,-22.5L134.5,-20.9L136.5,-20.0L136.7,-21.7L138.5,-22.0L138.7,-23.1L137.0,-23.8L136.8,-24.8L137.6,-26.0L137.5,-27.3L139.6,-27.0L140.0,-26.2L145.3,-24.2L145.2,-22.8L144.5,-22.3L144.9,-20.5L144.5,-20.0L141.7,-20.2L142.0,-18.9L141.5,-18.8L137.0,-19.1L137.2,-18.5L136.3,-17.4L137.6,-16.7L136.7,-15.0L137.2,-13.7L134.5,-13.3L134.1,-12.9L134.8,-12.3L134.7,-11.3L133.0,-11.1L132.4,-10.0L130.0,-10.1L128.7,-10.8L129.1,-11.6L128.2,-13.8L124.9,-14.3L123.6,-16.3L120.7,-15.0L121.9,-13.2L119.6,-11.9L119.7,-13.5L118.7,-13.3L118.2,-14.1L117.0,-13.9L115.6,-15.8L116.1,-16.7L119.3,-15.5L120.1,-15.9L120.9,-16.5L120.7,-17.1L119.2,-17.9L121.1,-19.2L121.5,-19.8L121.2,-20.5L122.7,-21.0L122.7,-22.2L123.8,-22.2L124.0,-23.6L122.4,-25.3L122.6,-25.8L121.8,-26.4L122.2,-27.2L120.2,-28.4L119.9,-29.4L119.2,-28.6L113.1,-32.2L113.2,-31.6L111.8,-31.8L108.0,-34.5L107.4,-34.0L106.3,-34.3L105.3,-33.4L101.4,-34.9L101.1,-31.8L100.8,-31.8L95.0,-34.9L90.5,-35.4L86.1,-34.8L85.5,-37.3L86.0,-39.6L88.5,-40.2L92.3,-44.0L94.0,-44.8L97.1,-45.0L97.7,-45.6L97.9,-47.8ZM119.3,-13.4L118.8,-11.9L118.0,-12.3L117.0,-11.9L117.0,-10.2L115.2,-10.2L114.6,-9.1L114.1,-10.5L113.4,-10.0L112.8,-11.2L111.7,-11.1L111.5,-10.4L109.9,-11.0L108.3,-12.1L106.8,-14.6L105.2,-15.0L104.1,-14.7L103.9,-15.2L102.8,-14.7L102.8,-13.7L104.1,-12.9L102.7,-11.0L104.0,-9.7L102.7,-9.5L102.3,-7.9L100.4,-7.5L100.4,-6.4L98.3,-7.1L98.2,-5.9L97.9,-6.5L95.7,-6.6L95.3,-8.2L94.1,-8.6L92.3,-10.2L90.5,-9.4L88.2,-9.6L86.3,-10.4L83.4,-10.4L83.3,-10.9L80.9,-11.7L80.2,-12.7L78.1,-11.9L76.3,-12.5L73.7,-15.6L74.5,-16.7L74.0,-18.0L74.4,-18.4L73.5,-18.8L73.0,-19.8L74.1,-20.7L74.3,-22.1L72.9,-22.8L75.0,-23.2L75.1,-23.8L78.2,-22.8L79.3,-23.3L78.8,-24.7L77.6,-25.5L78.1,-26.3L80.0,-27.1L79.1,-28.5L76.7,-29.6L75.6,-32.0L77.5,-33.0L88.2,-35.2L91.9,-35.4L95.0,-34.9L97.8,-33.0L101.1,-31.8L101.4,-34.9L105.3,-33.4L106.3,-34.3L107.4,-34.0L108.0,-34.5L111.8,-31.8L113.2,-31.6L113.1,-32.2L119.2,-28.6L119.9,-29.4L120.2,-28.4L122.2,-27.2L121.8,-26.4L122.6,-25.8L122.4,-25.3L124.0,-23.6L123.8,-22.2L122.7,-22.2L122.7,-21.0L121.2,-20.5L121.5,-19.8L121.1,-19.2L119.2,-17.9L120.9,-16.5L119.3,-15.5L116.1,-16.7L115.7,-16.3L117.0,-13.9L118.2,-14.1L118.7,-13.3ZM133.3,26.0L134.5,24.6L135.6,24.5L135.7,22.9L133.6,22.3L132.3,22.5L131.6,21.2L130.4,21.0L130.1,21.5L129.5,20.1L130.3,20.4L132.1,19.0L135.1,20.3L135.8,19.8L135.7,19.2L138.9,18.0L138.8,17.3L139.8,16.9L140.7,18.2L142.1,18.4L143.7,17.0L144.8,17.4L145.2,16.7L146.5,16.7L146.2,16.1L147.5,16.2L148.1,15.1L149.3,15.5L149.8,14.5L151.1,15.3L152.3,13.9L153.4,14.2L153.6,13.7L154.8,14.1L154.6,15.5L155.4,16.0L153.7,18.9L154.2,19.2L154.9,18.4L155.5,18.6L155.5,20.2L156.4,19.8L157.6,20.0L157.8,21.4L157.1,21.9L156.9,23.4L155.6,24.3L155.2,26.9L153.0,28.2L153.0,29.3L151.4,29.7L151.5,30.8L150.0,30.9L149.2,32.2L148.3,31.6L148.4,32.2L146.7,32.5L146.8,32.0L145.5,31.8L144.9,30.8L144.4,30.8L144.5,31.8L143.8,31.6L143.5,32.1L140.2,31.9L138.8,30.7L137.6,30.5L137.2,28.5L138.0,27.4L135.7,26.7L134.5,26.9ZM136.6,5.4L137.0,5.5L137.2,4.7L137.2,5.7L137.9,5.7L139.0,4.2L140.5,4.3L140.7,2.9L142.2,3.9L143.7,3.5L143.9,5.0L144.8,5.3L144.8,6.2L145.6,6.0L145.4,6.7L146.7,6.8L147.3,5.7L147.7,6.6L147.9,9.3L145.6,11.1L148.2,11.2L148.3,12.1L147.5,12.4L148.1,15.1L147.5,16.2L146.2,16.1L146.5,16.7L145.2,16.7L144.8,17.4L143.7,17.0L142.1,18.4L140.7,18.2L140.4,17.5L139.8,16.9L139.0,17.1L138.9,18.0L135.7,19.2L135.8,19.8L135.1,20.3L132.1,19.0L130.3,20.4L129.6,20.0L130.3,18.2L128.8,16.5L130.0,13.3L129.2,12.5L127.0,13.1L126.8,11.6L126.1,11.1L127.3,9.9L128.3,10.4L128.9,9.7L130.9,10.2L132.1,9.9L132.7,8.5L136.0,8.5L136.4,8.2L135.9,7.1L134.8,7.0L133.7,5.8L135.1,4.7L136.4,5.8ZM147.3,5.7L146.7,6.8L145.4,6.7L145.6,6.0L144.8,6.2L144.8,5.3L143.9,5.0L143.7,3.5L142.2,3.9L140.7,2.9L140.5,4.3L139.0,4.2L137.9,5.7L137.2,5.7L137.2,4.7L137.0,5.5L136.6,5.4L136.1,4.3L134.3,4.0L134.0,2.9L132.5,2.0L132.5,1.6L134.0,0.5L134.1,-0.1L133.5,-0.6L134.3,-1.6L136.0,-0.8L137.1,-1.3L137.8,-0.2L139.0,-0.2L140.8,-3.1L142.4,-3.3L142.7,-4.6L144.6,-6.5L143.6,-7.5L144.1,-8.3L147.6,-6.5L148.8,-6.5L150.5,-5.3L150.4,-3.1L149.6,-3.4L147.9,-2.2L145.1,-2.2L144.1,-1.5L144.6,-1.2L144.3,1.0L144.9,0.5L147.4,3.6ZM175.6,-36.5L174.1,-35.9L170.6,-36.6L170.5,-37.9L172.4,-39.1L171.6,-40.1L174.4,-41.0L175.1,-41.9L176.6,-40.6L178.0,-40.5L177.1,-39.9L177.6,-38.4L175.4,-37.8L176.1,-37.1ZM189.3,10.6L187.5,13.0L187.0,12.0L186.1,12.2L187.2,13.9L185.6,15.0L184.4,14.7L185.2,15.4L186.2,15.2L186.2,17.5L184.6,17.3L185.0,18.1L183.8,18.2L183.6,19.3L182.5,19.6L182.6,20.4L180.5,20.4L179.6,21.0L180.4,21.9L178.9,23.0L178.2,23.4L178.0,24.2L177.5,23.9L177.1,24.3L175.4,20.3L174.6,20.5L174.0,19.6L172.2,19.3L172.1,18.3L173.2,15.7L174.9,13.7L174.7,11.9L176.6,11.0L177.5,8.1L178.4,7.7L179.2,8.3L181.5,7.2L181.8,6.5L182.9,6.4L183.0,7.7L183.9,9.6L184.9,9.8L186.2,8.9L186.8,10.2L188.6,9.8ZM173.2,0.8L171.8,-2.6L172.8,-3.8L171.0,-4.5L170.3,-5.4L170.9,-6.6L172.3,-6.8L172.2,-9.1L169.6,-9.8L169.6,-10.9L168.5,-11.7L169.8,-11.9L170.2,-13.1L171.3,-13.6L171.3,-15.4L172.5,-15.2L173.3,-14.1L175.1,-15.0L174.7,-16.3L173.2,-16.9L173.2,-17.4L174.1,-17.6L176.2,-16.7L176.5,-15.8L178.8,-15.1L179.2,-14.2L180.6,-14.3L179.9,-12.3L180.5,-12.0L181.0,-12.1L181.7,-10.4L182.9,-10.4L183.4,-11.3L184.6,-10.3L184.2,-9.3L183.5,-9.9L182.2,-9.8L182.7,-8.9L181.5,-7.4L183.4,-6.2L183.2,-4.7L184.5,-4.9L186.3,-4.3L185.6,-2.4L184.8,-2.1L185.3,-1.5L183.5,-1.2L183.5,0.1L182.9,1.0L180.8,2.3L180.1,1.6L178.4,1.4L177.2,0.4L175.5,1.7L175.2,1.1L176.0,0.3L175.1,-0.2ZM152.1,33.9L152.0,34.3L151.4,34.2ZM149.2,32.1L150.0,30.9L151.5,30.8L151.4,29.7L153.0,29.3L153.0,28.2L155.2,26.9L155.4,25.0L157.3,22.8L157.1,21.9L157.8,21.4L157.4,20.1L158.2,19.8L158.4,18.2L161.3,19.1L161.1,17.8L162.2,17.1L163.6,17.8L165.2,17.3L165.2,18.0L167.3,17.5L167.9,18.5L165.9,20.2L166.7,20.9L170.5,19.8L171.5,20.7L172.2,19.3L174.0,19.6L174.6,20.5L175.4,20.3L177.1,24.3L176.1,24.1L174.4,26.8L171.3,27.2L170.8,27.7L169.2,27.4L168.3,28.1L167.6,27.5L167.2,28.4L165.2,28.5L163.7,27.1L163.7,26.1L163.3,26.2L162.6,26.9L163.5,28.1L163.4,29.6L161.9,30.1L161.7,29.6L161.2,30.8L159.8,31.2L159.0,30.5L158.8,31.4L157.4,31.0L156.1,32.1L153.9,32.3L152.3,33.4L151.7,32.9L150.7,34.4L151.5,34.8L151.3,35.4L152.0,36.0L151.4,36.9L149.7,36.6L150.0,36.3L148.9,34.5L149.9,32.4ZM33.6,-16.5L36.8,-16.8L37.4,-17.8L37.1,-18.7L38.7,-20.9L44.0,-19.9L46.6,-21.6L48.0,-21.6L49.2,-20.6L53.0,-20.4L56.9,-21.8L59.8,-21.9L60.8,-23.2L65.1,-24.2L69.3,-24.5L72.2,-23.8L73.9,-23.1L72.9,-22.8L73.1,-22.3L74.3,-22.1L74.1,-20.7L73.0,-19.8L73.5,-18.8L74.4,-18.4L74.0,-18.0L74.5,-16.7L73.7,-15.6L76.3,-12.5L78.1,-11.9L80.2,-12.7L80.9,-11.7L83.3,-10.9L83.4,-10.4L86.3,-10.4L88.2,-9.6L90.5,-9.4L92.3,-10.2L94.1,-8.6L95.3,-8.2L95.7,-6.6L97.9,-6.5L98.2,-5.9L98.3,-7.1L100.4,-6.4L100.4,-7.5L102.3,-7.9L102.7,-9.5L104.0,-9.7L105.9,-9.0L106.8,-6.9L108.4,-5.1L107.4,-4.8L108.7,-2.8L109.1,0.3L109.3,2.9L108.8,3.0L108.6,4.4L107.6,3.9L107.3,6.4L106.2,6.3L105.5,7.1L103.6,5.6L102.5,6.8L99.8,5.9L98.8,6.1L99.8,4.7L99.2,3.6L98.1,4.1L98.0,3.5L98.9,2.9L97.7,2.1L95.3,3.7L93.7,3.3L92.4,2.6L89.2,4.8L87.3,5.2L85.0,7.2L85.1,7.8L82.5,8.6L81.2,8.5L81.2,7.9L79.8,7.3L78.9,7.7L76.4,7.3L76.4,6.7L75.0,6.4L73.1,7.4L70.9,10.2L70.4,9.4L70.6,7.6L69.9,7.3L66.1,8.3L64.3,8.2L62.4,7.2L61.6,7.9L60.6,7.2L60.0,7.9L58.8,6.5L56.8,6.4L56.9,5.3L55.5,5.5L53.4,4.1L52.9,3.0L51.0,3.1L49.4,1.5L45.9,-0.2L45.2,-1.2L42.9,-1.3L41.7,-0.1L40.1,-1.6L38.2,-2.2L38.1,-3.0L35.2,-4.0L34.2,-5.3L32.9,-4.9L32.8,-7.4L31.5,-9.7L32.7,-9.9L33.8,-9.0L35.7,-10.4L35.1,-12.0L33.0,-13.3L32.8,-15.4ZM33.6,-16.5L31.1,-17.7L30.2,-20.8L26.6,-21.1L24.6,-22.4L23.2,-22.1L22.2,-23.0L22.4,-24.3L21.9,-25.3L20.4,-25.6L20.1,-26.3L16.4,-27.1L19.2,-28.1L18.4,-28.9L18.2,-31.9L16.1,-32.9L14.3,-32.7L13.6,-35.9L14.7,-36.4L14.4,-37.2L15.0,-38.2L18.1,-39.2L18.1,-39.8L20.9,-40.4L21.3,-39.2L23.7,-39.3L25.9,-41.9L30.5,-42.1L32.8,-43.9L38.4,-45.8L38.2,-48.1L39.6,-48.9L39.0,-49.6L40.5,-50.0L38.9,-53.6L39.3,-55.9L37.1,-56.6L43.9,-58.3L44.8,-57.6L47.0,-57.5L47.3,-58.6L46.2,-59.3L48.9,-65.3L55.8,-64.0L58.8,-65.6L58.3,-68.1L59.1,-69.9L62.1,-70.4L63.4,-72.5L66.9,-72.8L67.1,-72.2L66.6,-71.8L67.8,-71.1L67.5,-70.5L69.5,-69.9L69.7,-69.2L71.5,-68.4L73.1,-68.5L76.3,-67.1L78.9,-63.0L78.5,-61.8L78.8,-60.9L77.5,-59.0L78.4,-57.7L88.3,-56.8L92.7,-54.5L95.1,-54.3L95.1,-53.3L95.8,-53.0L97.1,-50.4L98.9,-48.8L99.0,-48.4L97.7,-47.5L97.7,-45.6L92.3,-44.0L88.5,-40.2L86.0,-39.6L85.5,-37.3L86.1,-34.8L77.5,-33.0L75.6,-32.0L76.7,-29.6L79.1,-28.5L80.0,-27.1L78.1,-26.3L77.6,-25.5L78.8,-24.7L79.2,-23.1L78.2,-22.8L75.1,-23.8L75.0,-23.2L73.9,-23.1L70.7,-24.2L67.6,-24.4L61.8,-23.6L59.8,-21.9L56.9,-21.8L53.0,-20.4L49.2,-20.6L48.0,-21.6L46.6,-21.6L44.0,-19.9L38.7,-20.9L37.1,-18.7L37.4,-17.8L36.8,-16.8ZM153.8,38.4L153.9,39.3L152.5,40.7L151.8,42.8L148.9,44.7L145.3,43.6L145.0,42.3L145.1,40.6L147.4,38.9L147.0,38.9L147.4,38.4L150.8,37.8L152.3,38.1L152.6,37.5ZM141.3,-29.8L140.1,-28.8L139.9,-26.9L137.5,-27.3L137.6,-26.0L136.8,-24.8L137.0,-23.8L138.7,-23.1L138.5,-22.0L136.7,-21.7L136.5,-20.0L133.0,-21.9L132.6,-22.5L132.8,-24.3L132.0,-26.5L129.9,-27.5L130.2,-28.2L129.0,-28.1L134.3,-29.7L134.5,-32.6L136.2,-35.2L138.1,-35.6L138.8,-34.3L136.9,-31.5L139.5,-30.9ZM139.9,-26.9L140.1,-28.8L140.8,-29.5L141.3,-29.8L142.8,-29.0L145.5,-29.2L145.6,-30.2L146.4,-30.4L146.3,-31.7L148.9,-34.2L150.8,-35.3L150.5,-35.8L152.7,-35.2L154.4,-36.3L154.0,-35.8L154.7,-35.4L153.5,-32.5L152.0,-31.2L152.1,-30.2L153.1,-28.7L151.6,-26.7L152.5,-21.3L151.0,-18.2L151.8,-16.2L152.4,-15.8L152.4,-14.7L153.8,-13.7L153.9,-12.8L152.8,-11.8L152.2,-12.3L148.3,-12.3L149.2,-11.7L149.2,-11.1L150.7,-10.4L150.1,-9.7L148.6,-9.7L148.2,-8.9L148.9,-7.8L148.6,-6.6L147.6,-6.5L144.4,-8.6L142.5,-8.2L140.6,-9.6L139.6,-9.3L139.1,-10.3L136.0,-9.8L135.3,-10.3L135.4,-10.9L133.5,-10.4L133.2,-11.0L134.8,-11.5L134.8,-12.3L134.1,-12.9L134.5,-13.3L137.2,-13.7L136.7,-15.0L137.6,-16.7L136.3,-17.4L137.2,-18.5L137.0,-19.1L141.5,-18.8L142.0,-18.9L141.7,-20.2L142.5,-19.8L144.9,-20.5L144.5,-22.3L145.2,-22.8L145.3,-24.2L140.0,-26.2ZM151.4,-17.5L151.1,-18.8L152.5,-21.3L151.6,-26.7L153.1,-28.7L152.1,-30.2L152.0,-31.2L153.5,-32.5L154.7,-35.4L154.3,-35.7L155.7,-36.7L157.3,-36.8L159.1,-39.1L160.4,-38.7L161.7,-39.5L163.3,-39.3L165.3,-39.9L165.7,-40.8L166.2,-39.4L166.8,-39.4L164.9,-38.1L166.6,-37.5L167.2,-36.2L166.6,-34.8L164.6,-34.5L164.5,-33.5L163.4,-32.4L163.5,-31.3L164.4,-31.0L165.5,-29.3L164.2,-27.0L164.3,-26.2L163.1,-25.6L164.1,-24.2L163.7,-21.5L161.0,-19.9L157.9,-19.9L157.9,-19.4L156.0,-18.5ZM164.8,3.5L163.8,3.3L163.6,2.7L164.1,2.1L163.3,0.6L161.9,2.0L161.1,1.9L161.0,0.8L159.0,1.6L156.8,0.3L152.9,-0.4L151.9,-0.1L152.3,0.9L151.5,1.3L150.5,0.8L148.1,1.6L147.2,3.4L144.9,0.5L144.3,1.0L144.7,-0.0L144.2,-1.9L147.9,-2.2L150.6,-3.4L150.7,-5.1L148.6,-6.6L148.9,-7.8L148.2,-8.9L148.8,-9.8L150.4,-9.9L150.8,-10.0L150.5,-10.8L149.2,-11.1L149.2,-11.7L148.3,-12.3L152.2,-12.3L152.8,-11.8L153.8,-12.4L155.9,-9.9L158.7,-8.9L162.1,-9.2L163.0,-8.7L164.1,-9.2L165.0,-6.6L165.7,-7.0L167.0,-6.7L167.2,-6.0L168.0,-5.7L169.4,-6.1L171.0,-4.5L172.8,-3.8L171.8,-2.6L173.2,0.8L170.7,0.5L169.9,1.5L168.2,2.3L166.3,2.5ZM147.2,3.4L148.1,1.6L150.5,0.8L151.5,1.3L152.3,0.9L151.9,-0.1L152.9,-0.4L156.8,0.3L159.0,1.6L161.0,0.8L161.1,1.9L161.9,2.0L163.3,0.6L164.1,2.1L163.6,2.7L163.8,3.3L164.8,3.5L165.7,4.6L165.4,5.5L166.0,6.0L164.2,7.7L163.5,9.2L163.6,10.0L164.6,10.1L164.2,10.9L164.6,12.7L165.5,13.0L164.9,14.4L165.9,14.6L165.3,14.9L164.5,17.6L162.2,17.1L161.1,17.8L161.3,19.1L160.7,19.2L160.1,18.6L158.4,18.2L158.2,19.8L156.4,19.8L155.8,20.4L155.5,18.6L154.9,18.4L153.9,19.2L153.9,18.4L155.4,16.0L154.6,15.5L154.8,14.1L152.3,13.9L151.1,15.3L149.8,14.5L148.9,15.6L148.6,15.0L148.1,15.1L147.5,12.4L148.3,12.1L148.2,11.2L145.6,11.1L148.1,8.9ZM133.2,-11.0L133.7,-10.3L135.4,-10.9L135.3,-10.3L136.0,-9.8L139.1,-10.3L139.1,-9.6L140.6,-9.6L142.5,-8.2L144.6,-8.4L143.6,-7.5L144.6,-6.5L142.7,-4.6L142.4,-3.3L140.8,-3.1L139.0,-0.2L137.8,-0.2L137.1,-1.3L136.0,-0.8L134.3,-1.6L133.5,-0.6L134.1,-0.1L134.0,0.5L132.5,1.6L132.5,2.0L134.0,2.9L134.3,4.0L136.1,4.3L136.6,5.4L136.4,5.8L135.1,4.7L133.9,5.4L133.9,6.4L135.9,7.1L136.4,8.2L132.5,8.7L132.4,7.6L131.6,7.3L129.9,8.2L128.9,7.4L129.3,7.2L128.5,5.6L129.2,5.2L127.0,5.3L127.2,6.4L125.6,7.1L125.8,8.1L123.4,10.3L123.9,13.7L122.8,14.3L122.2,13.8L119.5,15.1L118.6,14.4L118.8,13.9L117.9,13.0L118.2,12.3L116.3,10.1L115.1,8.1L113.9,8.6L112.8,7.3L113.1,6.3L111.5,4.4L110.3,5.5L110.3,6.9L109.5,5.9L108.7,-2.8L107.4,-4.8L108.4,-5.1L106.8,-6.9L105.9,-9.0L103.0,-10.3L102.7,-11.0L104.1,-12.9L102.8,-13.7L102.8,-14.7L103.9,-15.2L104.1,-14.7L105.2,-15.0L106.8,-14.6L108.3,-12.1L111.5,-10.4L111.7,-11.1L112.8,-11.2L113.0,-10.1L114.5,-10.1L114.6,-9.1L115.2,-10.2L117.0,-10.2L117.0,-11.9L118.0,-12.3L118.8,-11.9L119.3,-13.4L119.8,-12.9L119.6,-11.9L121.9,-13.2L120.7,-15.0L123.6,-16.3L124.9,-14.3L128.2,-13.8L129.1,-11.6L128.7,-10.8L129.7,-10.2L131.9,-9.9ZM175.9,-36.8L175.4,-37.8L176.4,-38.1L177.3,-38.4L177.2,-37.1L177.0,-36.5ZM178.5,-32.8L179.5,-31.4L179.3,-31.0L178.0,-29.8L175.4,-29.6L172.6,-27.8L169.9,-24.6L170.6,-23.7L170.2,-23.1L169.3,-23.5L168.6,-23.0L164.1,-24.2L163.1,-25.2L164.3,-26.2L164.2,-27.0L165.5,-29.3L164.4,-31.0L163.5,-31.3L163.4,-32.4L164.5,-33.5L164.6,-34.5L166.6,-34.8L167.2,-36.2L166.6,-37.5L164.9,-38.1L166.8,-39.1L164.8,-41.9L164.9,-43.4L167.4,-46.1L168.2,-46.3L168.5,-44.1L170.2,-44.2L172.1,-45.3L172.8,-44.8L174.1,-45.6L174.9,-45.3L175.9,-45.7L176.0,-47.1L179.4,-47.8L180.2,-47.1L180.7,-45.7L181.2,-45.9L181.4,-45.1L180.8,-44.5L181.5,-43.0L184.8,-42.8L183.4,-41.1L185.0,-40.0L186.0,-40.1L187.1,-38.0L185.4,-37.1L183.8,-34.9L181.3,-34.5L180.2,-35.0L179.8,-36.3L178.8,-36.4L178.4,-37.1L178.3,-38.0L179.3,-37.9L179.2,-38.2L177.1,-39.9L178.0,-40.5L176.6,-40.6L175.1,-41.9L174.4,-41.0L171.6,-40.1L172.4,-39.1L170.5,-37.9L170.6,-36.6L174.1,-35.9L175.6,-36.5L176.0,-34.6L175.3,-34.2L175.3,-33.5L177.4,-32.5ZM170.3,-5.4L169.4,-6.1L168.0,-5.7L167.2,-6.0L167.2,-6.6L165.7,-7.0L165.0,-6.6L164.1,-9.2L163.0,-8.7L162.1,-9.2L158.7,-8.9L155.9,-9.9L153.9,-12.2L153.8,-13.7L152.4,-14.7L152.4,-15.8L151.4,-17.0L151.4,-17.5L156.0,-18.5L157.9,-19.4L157.9,-19.9L161.0,-19.9L163.2,-21.0L164.1,-24.2L166.4,-23.7L168.6,-23.0L169.3,-23.5L170.6,-23.4L170.1,-22.0L172.9,-23.2L169.2,-20.4L168.3,-19.1L169.5,-18.8L170.9,-17.4L173.2,-17.4L174.2,-16.2L174.7,-16.3L175.1,-15.0L173.3,-14.1L172.5,-15.2L171.3,-15.4L171.3,-13.6L170.2,-13.1L169.8,-11.9L168.5,-11.7L169.6,-10.9L169.6,-9.8L172.2,-9.1L172.3,-6.8L170.9,-6.6ZM209.1,-41.2L206.0,-39.7L203.1,-37.4L201.4,-37.6L199.0,-36.8L194.0,-34.2L193.9,-33.7L192.0,-33.2L191.8,-33.9L194.0,-34.6L193.8,-35.0L194.5,-35.7L192.4,-35.7L192.4,-36.3L193.4,-36.6L193.4,-37.4L194.4,-37.8L196.2,-40.1L194.5,-41.7L194.2,-41.2L192.1,-41.4L189.5,-38.9L187.1,-38.0L186.0,-40.1L185.0,-40.0L183.4,-41.1L185.3,-43.2L185.2,-46.7L186.0,-47.0L187.0,-46.4L188.1,-44.5L189.6,-46.2L191.5,-46.6L192.8,-47.5L194.1,-47.3L195.3,-48.3L196.7,-48.1L197.0,-48.8L197.9,-48.4L199.4,-48.7L201.2,-49.7L201.7,-51.2L203.7,-50.3L204.6,-48.9L206.0,-49.7L205.9,-49.0L207.1,-46.9L208.2,-46.2L207.5,-45.4L207.6,-44.4L208.1,-44.4L209.2,-42.7L208.6,-41.5ZM179.5,-31.4L183.7,-30.6L184.2,-29.3L183.7,-27.9L185.0,-27.1L186.8,-27.2L188.6,-29.2L190.5,-29.8L193.8,-28.3L197.7,-28.1L196.8,-26.9L197.1,-26.4L196.4,-26.0L194.9,-26.4L190.7,-25.2L191.0,-24.5L190.3,-24.4L190.2,-23.4L189.1,-23.0L188.9,-23.7L188.3,-23.6L188.0,-23.3L188.7,-22.7L186.9,-21.3L185.0,-19.3L183.4,-19.1L183.0,-18.0L180.8,-16.7L179.8,-17.8L179.3,-17.2L178.2,-17.0L177.7,-17.4L177.1,-16.9L175.8,-18.8L174.4,-18.6L173.6,-17.4L171.3,-17.4L169.5,-18.8L168.3,-19.1L169.2,-20.4L172.8,-22.7L172.9,-23.2L170.1,-22.0L170.6,-23.4L169.9,-24.6L172.6,-27.8L175.4,-29.6L178.0,-29.8ZM180.2,-35.0L179.3,-34.7L178.5,-32.8L176.8,-32.7L175.2,-33.9L176.0,-34.6L175.6,-36.5L177.0,-36.5L177.0,-37.8L177.7,-39.0L179.2,-38.2L179.3,-37.9L178.3,-38.0L178.4,-37.1L178.8,-36.4L179.8,-36.3ZM164.9,17.3L164.8,16.2L165.9,14.6L164.9,14.4L165.5,13.0L164.6,12.7L164.2,10.9L164.6,10.1L163.6,10.0L163.5,9.2L164.2,7.7L166.0,6.0L164.8,3.5L166.3,2.5L168.2,2.3L169.9,1.5L170.7,0.5L173.5,0.8L175.1,-0.2L176.0,0.3L175.2,1.1L175.5,1.7L177.2,0.4L178.4,1.4L180.6,1.8L180.3,2.8L180.2,3.3L181.8,5.0L181.5,7.2L179.2,8.3L178.4,7.7L177.5,8.1L176.6,11.0L174.7,11.9L174.9,13.7L172.8,16.6L171.9,20.6L170.5,19.8L166.7,20.9L165.9,20.2L167.9,18.5L167.8,17.9L167.3,17.5L165.2,18.0ZM185.0,-19.3L184.7,-18.0L188.7,-16.2L190.9,-11.5L190.9,-10.1L192.9,-9.0L194.7,-6.5L191.3,-7.1L189.6,-8.0L187.8,-7.4L190.3,-7.5L192.7,-5.6L189.5,-2.9L187.4,-4.4L183.2,-4.7L183.4,-6.2L181.5,-7.4L182.7,-8.9L182.2,-9.8L183.5,-9.9L184.2,-9.3L184.7,-9.9L184.3,-10.8L183.4,-11.3L182.9,-10.4L181.3,-10.6L181.0,-12.1L179.9,-12.3L180.6,-14.3L179.2,-14.2L178.8,-15.1L176.5,-15.8L176.2,-16.7L174.1,-17.6L174.4,-18.6L175.8,-18.8L177.1,-16.9L177.7,-17.4L178.2,-17.0L179.3,-17.2L179.8,-17.8L180.8,-16.7L183.0,-18.0L183.4,-19.1ZM192.7,-5.6L193.9,-5.0L194.7,-3.5L192.4,-2.8L191.3,-3.2L191.0,-4.3ZM193.6,-6.2L194.3,-5.6L192.7,-6.2L192.2,-6.9ZM192.2,6.8L192.4,7.3L191.9,7.4ZM192.5,-2.6L190.7,-1.3L189.3,-1.5L188.4,-0.9L189.5,-1.2L190.0,-0.5L192.4,-1.2L195.5,0.5L193.3,2.0L194.9,1.5L194.9,3.3L194.1,2.8L193.2,3.1L194.0,4.0L193.4,4.1L193.9,4.4L193.2,5.2L193.7,6.5L192.4,6.8L192.0,6.4L191.3,7.5L190.5,7.6L190.8,8.0L189.4,10.4L188.6,9.8L186.8,10.2L186.2,8.9L184.9,9.8L183.9,9.6L183.0,7.7L182.9,6.4L181.8,6.5L181.5,4.6L180.2,3.3L180.8,2.3L182.9,1.0L183.5,0.1L183.5,-1.2L185.3,-1.5L184.8,-2.1L185.6,-2.4L186.3,-4.3L187.4,-4.4L189.5,-2.9L190.3,-3.7L191.3,-3.8L191.3,-3.2ZM196.2,-0.3L196.2,0.2L195.8,-0.0L195.1,-0.5ZM229.9,-51.2L229.2,-49.0L226.9,-48.5L227.2,-47.6L226.1,-49.0L224.8,-49.4L224.1,-47.3L222.6,-47.2L221.2,-45.7L217.9,-45.6L218.8,-44.1L218.2,-43.3L214.6,-43.8L213.6,-44.8L212.4,-44.2L212.0,-43.2L210.1,-41.4L208.6,-41.5L209.3,-42.3L208.1,-44.4L207.6,-44.4L207.5,-45.4L208.2,-46.2L207.5,-46.5L205.9,-49.0L206.0,-49.7L204.6,-48.9L203.7,-50.3L201.7,-51.2L201.5,-50.7L200.3,-51.1L200.9,-52.0L199.4,-55.1L196.1,-54.1L195.2,-57.4L196.0,-58.1L194.9,-59.6L193.9,-59.7L194.3,-60.8L196.1,-60.1L196.7,-60.6L197.6,-59.8L198.2,-61.1L199.9,-61.8L202.4,-61.8L202.7,-60.0L204.2,-58.7L209.0,-58.9L209.6,-57.9L210.7,-57.5L212.3,-57.9L213.8,-57.5L214.1,-55.5L216.0,-55.4L215.8,-54.8L216.7,-53.5L217.9,-53.7L217.8,-54.5L219.0,-55.1L221.0,-51.5L222.3,-51.7L222.4,-52.4L224.9,-53.3L225.3,-52.7L226.2,-53.1L226.7,-51.9L228.6,-51.1ZM102.1,-48.6L118.2,-47.6L120.7,-46.2L126.5,-44.7L129.5,-45.1L129.5,-44.3L131.3,-44.1L138.0,-46.7L147.7,-47.3L151.6,-48.5L153.9,-50.7L157.4,-52.1L155.4,-54.6L157.3,-57.2L163.6,-56.0L167.2,-58.5L171.5,-58.7L173.4,-59.8L174.8,-61.9L177.7,-62.2L178.0,-63.0L179.2,-62.8L183.3,-63.7L185.2,-63.1L187.2,-63.4L186.6,-65.2L182.0,-68.3L179.3,-68.4L177.7,-67.1L175.5,-67.9L173.5,-67.9L172.3,-67.2L171.2,-67.9L170.9,-68.9L171.8,-69.3L172.0,-70.6L175.2,-75.3L179.7,-74.2L181.8,-75.4L184.9,-76.3L185.2,-77.1L184.5,-77.5L187.9,-82.1L190.5,-84.0L190.1,-85.8L187.8,-86.3L191.4,-88.5L192.9,-88.6L194.4,-87.5L192.1,-85.9L194.5,-84.6L195.8,-85.4L197.9,-84.5L197.8,-82.5L199.3,-81.0L201.1,-80.6L205.8,-81.2L206.9,-82.1L208.3,-81.7L210.4,-79.7L207.5,-76.1L206.9,-74.6L207.3,-73.0L205.9,-72.9L204.7,-70.6L204.6,-68.9L203.6,-70.4L196.7,-65.9L198.9,-64.0L199.6,-63.7L200.3,-64.2L201.2,-63.7L200.4,-63.1L199.0,-63.1L198.9,-62.3L199.5,-61.6L199.2,-61.2L198.2,-61.1L197.6,-59.8L196.7,-60.6L196.1,-60.1L194.3,-60.8L193.9,-59.7L194.9,-59.6L196.0,-58.1L195.2,-57.4L196.1,-54.1L199.4,-55.1L200.9,-52.0L200.3,-51.1L201.5,-50.7L201.2,-49.7L198.5,-48.4L197.0,-48.8L196.7,-48.1L195.3,-48.3L194.1,-47.3L192.8,-47.5L191.5,-46.6L189.6,-46.2L188.1,-44.5L187.0,-46.4L186.0,-47.0L185.2,-46.7L184.8,-46.3L185.3,-46.0L185.4,-43.6L184.8,-42.8L181.5,-43.0L180.8,-44.5L181.4,-45.1L181.2,-45.9L180.7,-45.7L180.2,-47.1L179.2,-47.8L176.0,-47.1L175.9,-45.7L174.1,-45.6L172.8,-44.8L172.1,-45.3L169.7,-44.0L168.5,-44.1L168.2,-46.3L167.4,-46.1L164.9,-43.4L164.7,-42.2L165.7,-40.8L165.3,-39.9L162.6,-39.2L161.7,-39.5L160.4,-38.7L159.1,-39.1L157.3,-36.8L155.7,-36.7L154.3,-35.7L154.4,-36.3L153.9,-36.3L152.7,-35.2L150.5,-35.8L150.8,-35.3L148.9,-34.2L146.3,-31.7L146.4,-30.4L145.6,-30.2L145.5,-29.2L142.8,-29.0L139.5,-30.9L136.9,-31.5L138.8,-34.3L138.1,-35.6L137.4,-35.6L136.2,-35.2L134.7,-33.2L134.3,-29.7L128.6,-28.1L125.5,-29.8L125.3,-30.4L125.8,-30.9L125.6,-32.1L128.3,-34.0L127.7,-35.9L123.7,-34.7L121.6,-35.1L119.4,-34.4L120.2,-33.8L119.5,-33.0L117.5,-33.3L117.0,-34.3L115.9,-34.6L115.6,-35.7L110.5,-37.5L113.4,-40.3L112.6,-41.4L109.4,-41.2L107.5,-40.2L106.0,-40.1L106.3,-41.3L104.0,-43.1L103.8,-43.5L104.5,-44.2ZM192.9,-88.6L201.2,-89.5L205.7,-87.9L206.7,-88.2L208.9,-87.6L211.5,-85.0L213.7,-80.2L215.1,-78.7L215.2,-77.3L216.1,-76.8L216.0,-75.2L217.7,-74.4L220.3,-74.5L221.7,-73.6L223.3,-73.7L225.9,-71.8L227.3,-71.7L227.3,-70.7L228.2,-69.7L227.9,-68.5L229.0,-67.2L234.5,-67.3L237.0,-68.8L242.3,-69.6L243.0,-67.3L240.8,-65.7L239.7,-61.7L238.2,-59.5L237.2,-58.9L236.9,-57.5L236.2,-57.1L234.9,-58.1L232.1,-58.2L230.6,-56.9L228.9,-56.4L229.9,-53.5L229.9,-51.2L228.6,-51.1L226.7,-51.9L226.2,-53.1L225.3,-52.7L224.9,-53.3L222.4,-52.4L222.3,-51.7L221.5,-51.5L219.4,-53.8L219.0,-55.1L217.8,-54.5L217.9,-53.7L216.7,-53.5L215.8,-54.8L216.0,-55.4L214.1,-55.5L213.8,-57.5L212.3,-57.9L210.7,-57.5L209.6,-57.9L209.0,-58.9L204.2,-58.7L202.7,-60.0L202.4,-61.8L199.5,-61.6L198.9,-62.3L199.0,-63.1L200.4,-63.1L201.2,-63.7L200.3,-64.2L199.6,-63.7L198.9,-64.0L196.7,-65.9L203.6,-70.4L204.6,-68.9L204.7,-70.6L205.9,-72.9L207.3,-73.0L206.9,-74.6L207.4,-76.4L209.5,-78.1L210.4,-79.7L208.3,-81.7L206.9,-82.1L205.8,-81.2L204.0,-80.9L201.1,-80.6L199.3,-81.0L197.8,-82.5L197.9,-84.5L195.8,-85.4L194.5,-84.6L192.1,-85.9L194.4,-87.5Z", "land": "M127.8,74.5L127.8,75.8L127.4,75.1L127.0,74.6ZM142.5,32.3L140.4,33.1L140.2,34.0L139.5,34.4L137.7,34.2L137.9,35.2L137.1,36.9L135.1,38.2L133.7,41.9L134.7,43.7L137.0,45.8L136.9,46.7L136.5,46.6L142.0,52.0L142.7,51.9L145.7,55.6L147.5,61.3L147.4,63.5L148.0,64.8L148.0,66.1L147.6,65.5L147.2,65.9L147.5,66.9L147.2,66.8L147.1,69.4L146.3,70.9L143.0,72.6L142.6,73.3L139.9,74.5L138.9,73.5L138.7,74.5L137.8,74.0L137.4,74.2L137.9,74.3L138.0,74.9L136.9,74.9L138.1,75.6L137.4,76.5L135.6,75.2L137.2,77.1L136.9,77.7L134.5,76.0L135.7,77.5L135.7,78.3L133.2,79.4L131.8,81.2L130.5,81.3L131.0,80.8L130.8,77.5L131.7,76.0L129.2,74.4L130.8,74.0L131.5,73.3L131.5,72.5L132.5,72.8L134.2,72.2L135.7,73.0L135.7,72.1L134.6,71.1L134.6,69.8L135.1,69.3L136.6,69.6L136.7,68.6L140.8,67.0L140.7,64.5L141.1,62.9L140.1,60.3L140.9,58.3L140.7,57.1L141.3,56.0L139.5,54.0L140.4,53.0L138.3,51.2L137.6,51.3L137.0,49.6L131.8,44.1L131.9,43.1L127.2,40.6L127.8,40.0L127.7,39.2L129.8,39.4L131.1,37.9L130.8,37.2L129.0,36.3L129.8,35.5L128.0,34.4L126.2,35.4L124.2,34.6L123.3,33.2L123.7,31.6L123.2,31.1L122.6,31.6L120.6,29.0L121.9,27.5L123.8,28.7L125.1,27.5L125.7,28.2L126.2,27.4L127.4,28.3L128.1,27.4L129.0,27.7L130.2,27.3L130.9,26.1L132.4,25.3L134.5,26.9L135.7,26.7L138.0,27.4L137.2,28.5L137.6,30.5L138.8,30.7L140.2,31.9L141.7,31.7ZM141.1,33.4L140.4,33.8L140.6,33.3ZM139.0,35.2L138.5,34.9L139.0,34.8ZM206.7,150.1L206.3,149.0L207.0,148.4L206.2,148.4L206.1,148.0L207.1,146.9L212.5,146.1L213.8,145.6L214.7,145.8L215.0,146.0L214.4,146.6ZM202.8,149.5L204.3,148.9L203.9,149.8ZM121.7,68.4L121.2,68.5L121.1,67.9ZM106.6,84.0L106.2,84.5L106.1,83.9L106.3,83.0ZM113.1,36.8L113.8,36.5L114.5,37.3L114.1,38.9L114.5,39.7L117.1,39.7L117.4,41.9L116.5,43.9L116.9,45.1L116.2,47.3L117.0,47.5L120.5,44.8L122.6,46.3L124.0,45.5L124.9,44.0L127.4,44.4L130.7,48.3L130.7,51.4L133.8,54.5L133.2,56.0L133.1,58.8L131.6,59.9L130.5,59.2L124.6,59.5L123.5,60.3L122.2,62.4L121.3,62.5L122.0,65.9L122.9,66.8L122.9,68.1L123.6,69.5L122.3,67.6L122.1,68.0L119.5,66.0L116.0,65.9L116.2,63.0L114.9,62.4L112.7,63.3L112.6,67.8L109.5,74.8L109.4,77.0L109.8,78.8L112.0,78.7L112.6,81.4L113.2,81.9L114.6,86.5L113.6,84.5L113.2,85.1L114.2,86.7L116.4,87.9L118.2,87.9L120.5,90.3L119.6,91.9L118.9,92.0L118.4,91.6L116.8,92.6L116.3,92.1L116.6,90.3L115.9,90.3L115.4,89.5L113.9,89.1L113.6,88.6L113.0,89.5L111.5,87.9L111.1,86.0L110.2,86.0L107.7,82.6L107.3,82.3L106.4,82.9L106.0,82.0L107.9,73.5L111.2,69.2L110.4,66.3L109.3,64.5L109.4,61.9L105.8,57.1L105.8,56.2L107.2,55.6L107.3,53.0L108.4,51.9L107.6,51.9L106.7,49.5L104.0,46.4L103.7,44.5L102.7,43.6L104.1,43.4L104.4,40.1L105.1,39.0L108.5,38.9L109.1,37.6L110.7,37.4L110.6,36.6L112.2,36.4ZM112.9,77.6L112.8,78.0L112.3,78.0ZM111.3,89.2L111.1,88.9L111.3,88.5ZM311.4,132.1L311.1,132.4L310.5,131.6L310.3,129.7L308.8,127.6L303.4,124.6L303.1,124.4L303.4,123.8L307.9,126.4L311.6,129.6L312.0,130.5ZM307.4,130.3L308.2,130.0L309.3,130.5L309.1,132.3L307.7,133.3L308.3,134.4L308.1,134.7L305.9,135.1L304.9,136.5L302.0,137.8L299.0,137.9L297.9,137.1L297.0,137.3L294.3,135.9L294.4,134.8L299.6,135.0L300.6,133.0L300.9,135.0L303.6,134.7L305.2,132.8L306.5,132.6L306.2,130.0ZM266.4,148.7L266.4,140.2L266.0,139.6L266.4,138.1L266.4,123.9L266.9,123.9L272.3,126.2L275.9,127.0L278.0,128.5L279.5,128.5L284.4,132.3L284.3,134.5L291.1,137.0L292.0,138.0L292.2,139.3L288.8,140.0L289.7,142.0L293.2,144.8L293.7,146.5L294.4,147.0L294.9,148.4L297.2,148.3L297.5,150.1L300.2,150.7L299.4,151.5L301.6,152.7L303.4,152.9L301.9,153.2L302.7,154.0L301.5,154.5L299.3,153.3L291.9,152.3L289.1,149.7L288.9,148.4L287.6,148.0L285.4,144.7L279.7,142.8L278.3,143.5L276.4,142.3L277.5,144.2L275.9,144.4L276.3,145.2L272.2,145.6L271.0,145.1L272.0,145.8L274.4,146.2L275.4,147.3L275.4,148.1L272.7,149.4L271.1,148.8L267.0,149.0ZM292.8,136.1L291.9,135.0L293.0,135.3ZM285.3,132.0L284.9,132.0L284.9,131.5L285.4,131.4ZM310.3,125.9L310.2,126.2L309.8,125.8ZM299.4,119.9L298.6,119.6L298.9,119.2ZM304.3,152.1L305.1,151.8L304.9,152.7L303.8,152.0L303.2,150.9ZM301.6,150.1L300.7,149.6L300.8,149.2L301.5,149.2ZM304.4,147.2L304.0,146.4L304.5,146.0ZM289.7,134.6L289.1,134.0L289.8,134.0ZM289.3,121.4L290.6,121.8L288.7,122.3L287.3,122.4L287.5,121.7ZM301.9,124.1L300.9,124.1L300.1,123.4L301.1,123.1L301.9,123.4ZM302.2,149.5L303.6,150.1L303.3,150.7L301.9,150.6ZM310.1,148.0L310.8,148.1L311.4,148.8L310.5,148.8L309.7,148.2ZM313.5,157.6L314.4,158.0L313.6,158.2L312.9,157.7L312.3,157.0ZM322.6,139.4L321.7,140.1L320.6,139.8L319.8,138.8L319.8,138.0L318.0,136.1L318.0,134.7L319.0,135.1L320.8,137.4L322.1,138.2ZM317.7,134.6L317.5,133.1L318.0,133.8ZM120.6,29.0L122.6,31.6L123.2,31.1L123.7,31.6L123.3,33.2L124.2,34.6L126.2,35.4L128.0,34.4L129.8,35.5L129.0,36.3L130.8,37.2L131.1,37.9L129.8,39.4L127.7,39.2L127.8,40.0L127.2,40.6L131.9,43.1L131.8,44.1L137.0,49.6L137.6,51.3L138.3,51.2L140.4,53.0L139.5,54.0L141.3,56.0L140.4,58.7L138.2,59.6L137.0,58.6L136.0,59.0L135.0,59.5L135.4,61.1L133.4,60.2L132.7,60.4L132.3,59.4L133.2,58.6L133.2,56.0L133.8,54.5L130.7,51.4L130.7,48.3L127.4,44.4L124.9,44.0L124.0,45.5L122.6,46.3L120.5,44.8L117.0,47.5L116.0,47.2L116.9,45.1L116.5,43.9L117.4,41.9L117.1,39.7L114.9,39.9L114.2,39.4L114.6,37.5L113.8,36.5L113.0,37.0L113.3,35.8L113.8,35.0L114.9,34.7L114.6,34.2L115.2,33.2L116.9,32.0L117.3,33.5L119.4,33.4L119.1,31.1L118.3,29.4L119.1,28.5ZM103.1,108.4L104.8,110.3L104.4,111.9L103.9,111.7L103.6,110.8L101.6,108.6L102.7,108.1ZM109.5,120.8L108.4,120.3L107.3,118.6L107.6,117.7L108.6,117.6L109.8,120.2ZM175.1,146.7L174.8,147.8L174.1,147.9L172.3,147.3L172.9,147.2L172.9,146.1L174.2,145.2L175.3,145.7ZM170.6,145.0L171.5,145.9L169.4,147.6L169.1,146.6L167.3,145.7L166.9,144.9ZM135.3,120.3L136.5,123.4L138.2,123.8L137.4,125.0L137.6,125.7L135.1,124.7L134.4,122.8L134.0,122.1L132.5,122.0L131.9,121.5L133.6,119.8L134.0,120.6L134.4,119.7ZM199.6,131.3L199.7,132.3L199.1,132.0L198.8,133.5L199.6,134.3L198.6,134.8L198.2,135.6L197.6,135.5L197.4,134.9L198.7,130.9L199.2,130.7ZM197.6,134.0L197.3,134.5L196.3,134.4L196.7,133.3L196.6,132.1L197.8,131.6L198.0,132.7ZM143.8,100.0L143.0,99.9L143.5,99.5L142.8,99.2L142.6,98.6L143.6,98.0L144.1,98.9ZM143.4,125.4L142.8,126.3L142.1,125.7L141.3,126.2L141.3,125.9L141.0,125.1L141.4,123.8L143.4,124.2ZM245.4,116.5L247.3,116.8L249.1,118.2L248.1,118.6L247.1,118.3L246.8,117.1L246.4,117.4ZM245.7,120.0L250.8,120.7L250.0,121.1L248.6,121.2ZM228.2,114.0L230.0,114.6L230.2,115.1L229.0,115.4L227.8,114.3L228.2,115.1L228.6,115.6L228.0,115.7L227.8,115.1L227.3,115.4L226.1,114.8L226.6,114.3ZM219.4,106.2L218.8,106.3L218.5,105.3L219.5,104.2L220.3,104.6ZM218.3,120.3L216.0,120.6L215.4,120.0L216.4,119.1ZM210.4,123.3L209.7,121.7L210.2,121.6ZM210.3,120.8L211.3,121.1L208.1,121.4L208.1,120.9ZM206.3,120.5L207.6,120.9L206.9,121.2L204.2,121.6L203.9,121.1L204.2,120.3ZM230.2,144.4L229.4,144.4L229.3,143.9L230.8,141.6L231.6,141.1L231.5,142.3ZM213.2,143.1L212.0,144.2L210.0,144.1L209.4,144.3L210.1,143.1L212.5,142.8ZM204.8,144.9L206.9,145.2L206.8,145.7L204.3,146.1L204.2,145.4ZM229.0,119.0L228.1,118.8L227.7,117.7L229.1,117.5ZM99.4,94.1L103.4,94.2L106.0,97.2L106.2,98.4L111.6,101.9L114.6,105.7L115.9,106.6L115.7,105.5L116.5,105.4L118.1,107.6L120.2,108.5L121.6,110.8L123.7,111.5L123.9,112.4L122.2,113.2L125.7,112.2L126.8,113.8L125.5,114.7L125.5,116.2L126.6,117.4L129.0,117.9L129.5,120.9L130.8,122.0L130.1,123.9L131.5,123.0L133.5,123.5L135.3,126.0L134.5,127.7L134.9,128.6L134.4,135.6L133.9,136.1L132.7,135.1L131.7,135.8L130.0,135.0L130.2,136.4L129.4,136.1L127.0,133.3L122.1,129.8L120.6,127.7L118.5,126.0L115.9,122.5L115.8,121.3L113.8,117.1L111.4,113.8L109.4,112.7L107.3,106.9L104.0,105.0L103.6,103.2L101.2,100.4L99.3,99.5L95.7,95.9L94.6,93.9L94.9,92.7L96.6,92.8L98.1,93.9ZM198.1,146.7L193.9,147.8L193.0,147.5L191.5,148.0L188.1,147.4L187.3,147.7L186.9,147.1L187.2,146.0L189.7,145.4L193.1,146.6L195.0,146.1L196.4,146.8L198.4,145.6L198.6,145.2L198.0,145.1L198.3,144.8L198.9,145.7ZM187.7,149.6L190.8,152.1L189.3,153.1L187.9,152.5L186.2,151.1L184.2,150.9L183.8,150.2L185.0,149.6ZM181.1,145.6L182.5,145.5L182.8,146.0L183.6,145.5L184.3,147.1L181.8,147.7L181.6,147.0L180.9,147.6L178.3,148.2L176.6,148.6L175.6,148.2L175.8,146.4L177.0,145.8L178.5,146.0L179.4,147.1L180.0,147.2L181.0,146.6L179.5,145.7L179.2,145.0L180.6,144.9ZM206.0,110.2L204.3,112.2L201.7,112.8L199.9,112.8L198.9,112.1L189.8,112.0L188.8,112.4L188.0,113.8L187.8,115.6L190.2,119.2L192.0,119.1L193.6,117.1L195.1,117.5L196.2,116.9L198.5,116.9L198.3,116.5L199.6,116.2L200.6,117.0L200.3,117.8L198.6,117.4L196.1,119.9L193.9,121.2L192.7,121.1L196.3,125.0L196.7,126.2L196.1,127.8L197.8,129.5L198.3,129.4L198.4,130.7L195.6,131.3L195.3,132.4L193.8,132.2L193.2,131.4L193.7,129.6L191.1,127.5L191.7,125.4L191.4,124.1L190.1,124.1L188.6,125.2L189.3,128.1L188.7,133.6L189.3,135.2L186.6,135.6L185.3,134.2L186.2,130.8L185.8,127.5L185.3,127.1L183.9,127.4L183.2,126.0L183.1,124.3L184.3,123.4L185.1,121.3L185.1,119.4L185.8,117.4L186.6,116.6L187.1,117.3L186.6,114.3L188.7,110.3L189.9,110.8L190.9,109.2L191.7,109.0L193.6,109.9L196.8,110.1L198.3,110.8L199.2,110.4L202.4,110.8L206.4,107.5L207.3,108.3ZM140.3,136.8L141.4,137.6L143.9,137.9L145.2,139.8L151.7,140.4L153.3,138.4L154.6,139.4L155.9,139.3L158.0,140.2L159.7,140.3L160.6,141.8L160.6,142.7L161.4,143.1L165.4,143.0L166.7,143.6L166.6,145.9L167.4,147.2L166.4,146.9L162.3,145.5L160.2,146.0L155.8,145.6L152.4,145.0L147.4,143.3L143.4,143.6L139.9,142.4L136.8,142.0L137.1,140.8L134.9,140.1L132.3,140.0L132.4,139.6L132.8,139.3L133.2,139.8L135.4,136.5L138.2,137.2L139.0,136.4ZM148.7,106.3L148.4,106.8L148.8,107.9L152.0,110.7L154.3,110.0L156.9,110.2L157.9,109.7L158.3,108.5L159.4,108.1L161.2,108.0L161.4,108.6L163.7,109.3L164.8,108.5L167.1,108.5L168.3,106.5L168.1,105.4L169.6,104.4L169.3,103.0L170.6,102.5L171.4,98.1L172.1,97.5L176.8,97.5L178.6,98.2L178.1,98.5L179.3,100.0L176.6,100.2L177.7,101.0L177.7,101.9L178.7,102.4L178.5,102.9L180.4,105.2L179.4,106.3L183.9,110.3L182.2,110.9L180.9,110.7L179.8,109.8L180.0,110.6L179.2,111.2L178.4,113.1L178.5,116.9L176.1,118.6L175.4,118.0L175.5,119.0L173.7,120.8L174.2,120.8L173.8,122.1L174.6,122.4L174.7,123.2L173.8,123.7L173.9,125.0L173.2,125.3L173.6,125.9L172.5,127.7L167.7,129.8L167.1,126.8L166.4,127.1L166.4,126.3L166.0,126.8L165.5,126.5L164.0,127.1L163.7,126.1L162.7,126.3L161.5,125.1L161.3,126.1L160.5,126.6L158.7,126.6L157.1,127.5L157.0,125.6L156.5,125.0L153.6,125.7L153.2,125.4L153.5,125.1L152.8,125.5L152.3,125.0L151.1,125.3L150.5,121.6L150.0,121.1L150.1,118.8L149.3,117.8L147.3,117.1L147.8,116.4L146.8,115.5L147.3,113.9L146.2,112.6L146.1,110.5L146.9,109.2L146.4,109.3L146.7,108.3L147.8,106.7ZM216.7,110.8L217.2,110.8L218.5,108.7L220.3,108.0L220.3,109.8L218.8,110.7L218.7,111.2L221.1,113.2L217.6,112.2L217.3,112.9L217.6,114.9L219.3,117.4L217.9,116.7L216.5,114.9L216.6,112.9L215.9,111.7L216.2,110.8L215.5,109.7L216.3,107.0L217.8,105.6L217.3,107.0L217.7,107.5L217.7,108.9L216.4,110.1ZM224.3,124.9L227.3,125.9L228.4,127.6L228.2,128.7L224.6,126.6L223.4,126.6L223.2,127.1L221.2,126.3L220.5,126.5L219.4,127.1L218.2,126.0L217.3,127.3L217.2,126.2L218.4,124.9ZM213.4,125.7L214.8,126.9L214.8,127.8L212.8,128.5L210.8,127.6L210.3,126.0ZM206.1,148.0L206.2,148.4L207.0,148.4L206.3,149.0L206.7,150.1L206.3,150.7L204.3,152.6L201.3,153.2L201.6,152.3L201.1,151.9L201.6,150.5L202.8,149.5L203.9,149.8L204.3,148.9ZM243.0,135.7L243.0,137.4L242.6,138.2L240.8,137.0L241.5,136.2L241.0,135.7L241.5,135.7L242.1,134.7ZM242.2,138.5L241.0,140.3L240.4,139.7L240.8,138.6L240.8,137.5ZM257.2,145.4L256.3,145.9L253.9,145.9L255.9,142.5L258.1,142.1L258.8,142.8L258.2,144.6ZM266.4,123.9L266.4,138.1L266.0,139.6L266.4,140.2L266.4,148.7L262.7,145.1L263.2,144.1L262.5,144.8L260.4,145.1L259.9,144.3L258.6,145.3L259.3,142.8L258.0,141.6L259.6,141.3L258.4,141.1L257.5,140.4L258.5,140.1L256.9,138.1L256.3,136.6L256.6,136.2L256.0,136.1L256.5,135.6L255.5,135.7L255.4,134.8L252.5,132.8L247.6,131.2L244.7,130.9L242.8,129.5L242.9,129.0L243.5,129.0L241.2,129.0L240.8,128.4L240.1,128.5L239.0,127.2L239.6,125.6L238.4,127.0L238.0,128.6L237.4,129.4L236.1,129.4L235.5,126.5L232.6,124.6L233.6,124.2L235.4,124.6L237.2,123.3L239.1,124.0L239.8,123.1L239.4,122.7L239.9,122.0L236.3,122.6L233.9,122.5L232.8,121.6L232.4,119.9L228.9,119.4L229.9,117.3L234.2,115.4L240.6,117.2L241.2,119.2L240.6,120.5L240.9,122.8L241.9,124.8L242.0,123.8L242.6,123.6L242.8,125.1L243.4,125.1L243.5,126.2L244.3,126.7L245.8,126.7L248.6,123.8L249.2,122.6L251.7,122.0L251.9,121.0L254.5,119.6L261.9,122.9L265.1,123.3L265.5,123.9ZM258.6,145.9L257.4,145.8L257.5,145.4L258.2,145.1ZM119.0,106.1L119.0,107.2L118.2,107.4L117.9,106.3ZM121.7,110.2L121.2,109.9L121.1,108.7L121.8,109.3ZM121.9,108.5L122.0,108.9L120.4,108.3L120.3,107.8ZM124.0,111.2L122.1,110.8L121.9,110.4L122.2,109.7ZM124.5,110.7L123.1,110.1L122.7,110.0L123.1,109.6ZM124.9,111.9L124.4,111.6L124.8,111.3ZM127.7,109.5L128.1,109.8L127.5,110.1ZM129.8,109.4L130.1,110.3L129.8,110.8L129.4,110.5L128.5,109.8ZM130.5,114.7L131.4,115.1L131.0,115.2L130.2,114.8L129.3,114.7L129.6,113.9ZM129.4,115.3L129.8,115.8L129.0,116.5L128.6,115.8ZM126.6,115.3L125.6,115.4L125.9,114.9ZM149.0,118.5L148.1,118.9L148.2,117.7L149.2,117.9ZM164.6,141.0L161.5,141.4L160.4,140.9L160.9,140.2L165.0,140.1L165.5,140.6ZM214.9,115.9L214.4,116.0L214.4,115.1L215.0,115.1ZM216.1,115.2L216.5,115.8L216.2,116.3L217.2,117.1L215.8,117.0L215.0,115.7L215.2,115.3ZM236.2,136.4L236.9,134.2L236.9,135.2ZM235.7,136.2L235.3,136.5L235.3,135.8L235.3,135.3ZM218.7,128.0L217.4,128.2L218.7,127.3ZM213.2,98.7L212.8,98.7L213.2,97.8L212.9,97.5L213.0,96.7L213.4,97.0ZM208.9,100.9L208.3,100.8L208.2,100.2ZM224.6,144.2L224.1,144.6L223.7,143.8L224.5,143.7ZM217.0,144.8L218.1,145.0L217.8,145.4ZM226.5,120.4L226.8,121.5L226.1,121.8L224.2,121.1ZM121.5,134.8L120.7,134.1L121.5,134.4ZM114.2,126.1L114.3,126.6L113.9,126.3L113.3,124.7L114.3,125.4ZM113.4,124.4L112.7,124.7L112.5,123.9L112.6,123.5ZM112.0,122.9L111.1,122.6L111.0,121.8ZM106.8,116.0L106.3,116.0L106.7,114.9L106.5,114.0L107.1,115.0ZM99.3,105.0L96.9,103.9L96.7,103.2L97.2,103.0ZM195.3,134.7L194.6,134.3L194.7,133.5L195.3,133.6ZM199.7,118.5L199.8,119.3L200.6,118.7L201.0,119.1L200.6,119.7L200.0,119.5L199.7,120.1L199.4,119.9L199.5,119.0L198.5,120.0L198.2,119.4L198.6,118.5ZM194.7,115.5L194.7,115.9L194.1,115.9ZM189.6,137.9L189.5,138.6L189.4,137.2L189.5,135.9L189.7,136.4ZM170.3,140.5L169.7,140.4L170.2,140.0L170.9,140.4ZM173.8,128.7L173.0,129.4L172.7,128.1L173.5,126.4ZM198.7,155.5L198.3,155.4L198.3,154.9L200.2,153.8L200.5,154.5ZM203.7,145.7L202.9,146.5L202.4,146.1L202.7,145.6L203.7,145.2ZM202.4,145.4L201.0,146.6L199.8,146.4L200.7,145.6L200.4,145.5L201.8,145.1ZM200.1,145.7L199.0,145.9L199.3,145.4L200.2,145.4ZM130.2,113.8L129.9,113.6L129.7,113.2ZM134.2,103.1L134.0,102.4L134.5,102.7ZM160.3,136.1L159.8,136.1L160.2,135.8ZM132.3,139.2L131.8,139.1L132.1,138.9ZM201.2,120.5L200.7,120.4L200.9,119.7ZM199.8,129.6L199.2,130.1L198.8,129.4L199.7,129.2ZM185.6,147.2L185.3,146.6L185.7,146.1L186.0,146.4ZM178.8,98.2L179.8,98.5L179.2,98.8ZM178.9,101.5L178.4,101.1L179.0,101.1ZM178.5,145.8L178.2,145.3L178.9,145.0ZM174.2,127.2L174.1,127.8L173.9,127.4ZM227.5,116.0L226.9,115.8L227.3,115.7ZM215.6,114.0L215.4,113.9L215.6,113.5ZM215.1,117.0L214.5,116.9L214.9,116.4ZM220.4,127.5L220.0,127.6L219.9,127.3ZM219.8,127.6L219.2,127.8L219.3,127.5ZM200.5,153.2L200.1,153.0L200.6,152.5ZM194.7,154.2L194.1,154.1L194.4,153.9L195.2,153.7ZM198.8,146.5L199.0,146.1L199.5,146.2ZM-6.9,23.3L-4.8,22.9L-4.6,21.6L-0.7,22.2L1.8,21.2L2.7,21.9L3.9,21.3L3.9,20.2L2.4,17.4L2.4,16.5L1.0,16.3L0.4,15.5L0.6,13.3L-1.9,12.4L-1.7,10.9L1.5,7.5L3.0,8.7L7.0,7.7L8.8,4.7L10.9,3.7L12.7,0.2L14.3,-0.4L14.8,-0.8L14.6,-1.7L17.4,-3.9L17.0,-4.5L17.1,-6.9L20.0,-8.4L19.6,-9.0L17.6,-9.5L17.5,-10.5L16.3,-10.5L16.2,-11.4L15.0,-12.1L15.6,-13.3L14.9,-14.1L16.0,-15.0L14.7,-15.5L14.9,-16.1L14.2,-16.6L14.9,-17.7L16.1,-18.1L21.4,-17.1L24.8,-18.0L29.3,-20.9L30.2,-20.8L30.1,-20.0L31.3,-17.5L33.7,-16.4L32.8,-15.3L33.0,-13.3L34.3,-12.1L34.6,-9.5L33.5,-9.0L32.7,-9.9L31.5,-9.6L32.8,-7.4L32.8,-5.0L34.2,-5.3L35.6,-3.8L38.1,-3.0L38.2,-2.2L41.2,-0.9L39.0,1.0L37.7,4.3L44.5,8.1L45.2,8.0L49.9,10.0L52.9,9.5L54.8,10.3L55.1,11.2L57.0,12.3L58.7,12.0L59.3,12.9L60.1,12.7L62.7,13.5L63.9,13.1L64.9,13.8L67.5,13.7L68.2,12.4L67.5,10.9L68.1,7.8L69.7,7.2L70.6,7.6L70.4,9.4L70.9,10.2L70.3,10.7L71.9,12.1L74.2,12.5L76.4,11.8L77.8,12.3L82.6,12.0L82.9,10.3L82.5,9.7L81.0,9.3L81.2,8.5L84.6,8.1L87.3,5.2L89.2,4.8L92.4,2.6L95.3,3.7L97.7,2.1L98.9,2.9L98.0,3.5L98.1,4.1L99.2,3.6L99.8,4.7L98.6,6.0L101.6,6.2L102.5,6.8L102.6,7.7L100.9,9.2L101.7,11.0L100.1,10.1L97.8,10.6L97.2,11.2L94.3,12.9L94.3,15.0L92.3,17.8L92.7,18.8L90.6,23.3L87.5,22.6L87.7,26.1L86.9,26.5L86.9,29.5L86.0,30.4L85.3,29.9L84.7,30.5L83.5,24.0L82.3,24.0L81.6,26.4L81.1,26.7L80.5,25.8L80.0,26.2L79.4,24.4L80.2,22.4L82.1,22.1L83.0,21.2L83.4,19.5L84.2,19.6L84.3,19.2L82.8,18.4L76.7,18.4L74.4,17.9L74.4,15.4L73.8,14.4L73.4,15.2L72.7,15.2L71.4,13.6L71.2,14.2L70.7,14.2L68.9,13.1L69.2,13.8L67.9,15.6L71.1,18.0L69.3,18.3L67.6,20.4L70.3,21.8L69.7,24.0L70.3,25.6L71.0,25.9L70.8,26.4L71.5,29.4L71.1,30.6L71.5,31.7L70.8,31.4L70.4,32.0L70.0,29.9L69.8,31.7L69.2,31.9L68.6,31.3L68.5,31.8L68.0,31.8L68.3,29.9L67.3,29.0L68.2,29.9L67.4,31.1L64.2,32.3L63.3,33.3L63.7,35.3L62.9,36.8L61.5,38.0L61.0,37.8L60.9,38.4L58.5,39.2L58.2,38.4L57.2,38.9L57.0,39.5L58.0,39.4L55.4,41.3L52.9,44.5L46.4,49.0L46.0,51.1L44.1,51.9L42.4,51.9L41.2,54.1L40.0,53.6L38.6,54.3L37.7,56.7L38.7,62.8L38.1,61.9L37.8,62.3L38.8,63.2L38.4,65.8L37.0,68.4L36.4,71.0L36.8,70.9L37.0,71.5L36.9,74.8L35.0,75.0L33.6,77.7L33.9,78.5L35.3,79.1L33.7,78.8L31.6,79.4L30.7,80.2L30.3,82.1L28.2,83.3L26.5,82.4L24.6,80.2L23.7,78.1L23.4,76.3L24.2,77.8L23.8,76.3L21.5,70.8L18.6,66.3L16.4,58.9L14.8,56.7L14.4,54.5L13.8,54.3L12.5,51.5L10.8,43.2L11.3,41.7L11.2,41.2L10.6,41.9L10.5,41.5L10.6,40.7L11.2,40.7L10.5,40.4L10.0,38.6L10.9,35.4L10.6,33.8L9.8,32.8L10.3,32.4L9.8,32.4L11.7,31.3L9.5,31.6L10.1,30.5L9.5,30.5L9.6,29.8L10.5,29.5L8.2,29.4L8.5,30.1L7.6,31.1L8.5,32.2L7.6,33.6L3.8,35.2L1.8,34.8L-3.9,29.3L-3.6,28.7L-2.7,29.3L0.7,28.2L1.8,26.3L1.3,26.8L-1.3,27.5L-2.9,27.2L-5.1,25.9L-5.9,24.4L-4.6,23.4L-6.6,24.3ZM89.7,88.0L89.4,88.4L88.8,86.9L89.5,86.6ZM88.3,83.4L88.1,83.2L88.3,82.8ZM84.5,73.9L84.0,73.9L84.0,73.0L84.5,72.6ZM85.3,70.2L84.6,68.9L85.5,67.5L85.3,65.4L86.0,62.8L86.6,62.5L86.6,63.6L85.9,64.8L86.3,66.4L85.8,66.7ZM86.4,68.3L86.6,68.8L86.3,68.6ZM113.1,36.8L112.2,36.4L110.6,36.6L110.7,37.4L109.1,37.6L108.5,38.9L105.1,39.0L104.4,40.1L104.1,43.4L102.7,43.6L103.7,44.5L104.0,46.4L106.7,49.5L107.6,51.9L108.4,51.9L107.3,53.0L107.2,55.6L105.8,56.2L105.8,57.1L109.4,61.9L109.3,64.5L110.4,66.3L111.2,69.2L107.9,73.5L107.7,75.3L107.2,75.9L106.8,73.4L108.4,69.5L107.5,69.4L107.3,64.0L105.8,60.9L105.5,61.9L104.8,58.3L105.2,58.3L104.4,57.5L104.0,53.7L103.5,53.1L104.1,51.0L102.7,51.2L102.1,49.0L100.8,47.9L101.0,49.3L100.5,50.5L99.2,51.3L98.3,50.3L98.8,51.5L96.7,52.6L95.3,54.3L95.1,52.8L94.5,53.9L93.6,53.9L93.4,52.5L92.6,53.6L92.7,51.3L91.7,52.8L90.9,53.1L92.3,47.2L91.0,42.8L90.3,42.2L90.2,40.7L89.8,42.2L88.2,40.4L89.4,40.9L89.9,40.5L90.1,40.1L88.6,38.9L89.0,38.3L87.3,37.7L86.8,38.5L86.3,37.7L86.6,36.6L85.9,37.4L85.5,37.2L85.8,36.4L85.2,35.9L85.3,36.9L84.0,35.3L83.2,33.1L83.8,32.5L84.8,33.2L84.7,30.5L85.2,29.9L86.2,30.4L86.9,29.5L86.6,27.7L87.8,25.3L87.5,22.6L90.6,23.3L92.7,18.8L92.3,17.8L94.3,15.0L94.3,12.9L98.3,10.4L100.3,10.1L101.7,11.0L100.9,9.2L102.6,7.8L102.5,6.8L103.6,5.6L105.5,7.1L106.2,9.3L106.8,8.9L107.5,9.2L107.9,12.5L107.7,14.5L107.2,14.9L107.6,15.7L104.4,18.0L104.1,19.5L103.5,19.9L103.3,20.9L104.0,21.9L103.5,23.1L105.9,22.4L108.2,22.3L107.6,23.2L108.3,25.9L110.7,26.8L109.6,29.9L112.3,30.3L112.4,31.3L113.4,32.4L114.9,32.4L116.8,31.4L116.7,32.4L115.4,33.0L114.6,34.2L114.9,34.7L113.5,35.2ZM105.9,72.4L105.9,72.8L105.4,72.6ZM107.0,68.8L106.8,68.1L107.4,68.6ZM107.2,69.4L107.1,70.2L106.6,69.6L106.5,69.2ZM106.6,66.1L106.3,67.1L106.3,65.8ZM91.9,53.4L91.6,53.8L91.5,53.2L92.1,52.6ZM103.5,52.2L103.1,52.0L103.4,51.3ZM88.9,43.0L88.2,42.3L88.6,42.2L89.1,42.3ZM88.2,38.4L88.3,38.9L88.0,38.7L87.9,38.2ZM89.0,39.7L89.9,40.2L89.7,40.5L89.2,40.6ZM107.1,72.3L107.0,72.3L107.1,71.9ZM105.3,66.9L105.1,67.3L104.9,67.1ZM106.3,64.2L106.3,64.8L106.0,63.9ZM105.5,7.1L106.2,6.3L106.6,6.6L107.3,6.4L107.6,3.9L108.6,4.4L108.8,3.0L109.3,2.9L109.9,6.5L110.3,6.9L110.3,5.5L111.5,4.4L113.1,6.3L112.8,7.3L113.9,8.6L115.1,8.1L116.4,10.6L117.0,10.7L116.9,11.2L118.2,12.3L117.9,13.0L118.8,13.9L118.6,14.4L119.5,15.1L122.2,13.8L122.8,14.3L123.9,13.7L123.4,10.3L125.8,8.1L125.6,7.1L127.2,6.4L127.0,5.3L129.2,5.2L128.5,5.6L129.3,7.2L128.9,7.4L129.4,8.0L131.0,8.0L131.6,7.3L132.4,7.6L132.1,9.9L129.8,10.2L128.9,9.7L128.3,10.4L127.3,9.9L126.1,11.1L126.8,11.6L127.0,13.1L129.2,12.5L130.1,13.8L128.8,16.5L130.3,18.2L129.5,20.1L129.9,21.3L131.6,21.2L132.3,22.5L135.0,22.5L135.8,23.3L135.6,24.5L134.5,24.6L133.3,26.0L132.4,25.3L130.9,26.1L130.2,27.3L128.7,27.7L128.1,27.4L127.3,28.4L126.2,27.4L125.7,28.2L125.1,27.5L123.8,28.7L121.9,27.5L120.6,29.0L119.0,28.6L118.3,29.4L119.1,31.1L119.4,33.3L119.0,33.6L117.3,33.5L116.8,31.4L114.9,32.4L113.4,32.4L112.4,31.3L112.3,30.3L109.6,29.9L110.7,26.8L108.3,25.9L107.6,23.2L108.2,22.3L105.9,22.4L103.5,23.1L104.0,21.9L103.3,20.4L104.1,19.5L104.4,18.0L107.6,15.7L107.2,14.9L107.7,14.5L107.9,12.5L107.5,9.2L106.8,8.9L106.2,9.3Z"}};
