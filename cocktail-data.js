// HIDEOUT CARTER カクテル図鑑データ
// 分量は一般的なレシピの目安です。度数（abv）はできあがりのおおよその目安です。
// ings：[材料, 分量, リンク]  リンクは COCKTAIL_LINKS のキー（図鑑の種類・タイプ・おすすめ銘柄）
const COCKTAIL_TOOLS = [
{
"id": "shaker",
"name": "シェーカー",
"en": "Shaker",
"desc": "材料と氷を入れて振り、一気に冷やしながら混ぜる道具。空気を含んでまろやかな口当たりになる。キャップ・ストレーナー・ボディの3つに分かれる「3ピース」と、2つの金属の缶を合わせる「ボストンシェーカー」がある。"
},
{
"id": "mixingglass",
"name": "ミキシンググラス",
"en": "Mixing Glass",
"desc": "氷と材料を入れ、バースプーンで静かに混ぜる（ステアする）ための大きなグラス。空気を含ませずに冷やすので、透明感のある、なめらかな仕上がりになる。"
},
{
"id": "barspoon",
"name": "バースプーン",
"en": "Bar Spoon",
"desc": "柄の長いスプーン。ステアするほか、ビルドのカクテルを軽く混ぜたり、小さじ1杯（約5ml）の計量にも使う。反対側がフォークになっているものも多い。"
},
{
"id": "strainer",
"name": "ストレーナー",
"en": "Strainer",
"desc": "ミキシンググラスやボストンシェーカーにかぶせて、氷を止めながら液体だけを注ぐための道具。"
},
{
"id": "jigger",
"name": "メジャーカップ（ジガー）",
"en": "Jigger",
"desc": "材料を量るための小さなカップ。日本では30mlと45mlの組み合わせが一般的。レシピの分量を守ることが、おいしさへの近道。"
},
{
"id": "muddler",
"name": "ペストル（マドラー）",
"en": "Muddler",
"desc": "ミントやライムをグラスの中でつぶして、香りや果汁を引き出すための棒。"
},
{
"id": "squeezer",
"name": "スクイーザー",
"en": "Squeezer",
"desc": "レモンやライムの果汁を搾る道具。カクテルの果汁は、できるだけ搾りたてを使いたい。"
},
{
"id": "blender",
"name": "ブレンダー",
"en": "Blender",
"desc": "氷と材料を細かく砕きながら混ぜ、シャーベット状の「フローズン」カクテルを作るためのミキサー。"
},
{
"id": "peeler",
"name": "ピーラー・ナイフ",
"en": "Peeler",
"desc": "レモンやオレンジの皮を薄くむき、グラスの上でひねって香りの油をふりかける（ピールする）ために使う。"
}
];
const COCKTAIL_GLASSES = [
{
"id": "cocktail",
"name": "カクテルグラス",
"en": "Cocktail Glass",
"desc": "逆三角形の脚付きグラス。氷を入れずに飲むショートカクテル用。脚を持つと手の温度が伝わりにくい。"
},
{
"id": "coupe",
"name": "クープグラス",
"en": "Coupe",
"desc": "口の広い浅いボウル形の脚付きグラス。こぼれにくく、近年はショートカクテルによく使われる。"
},
{
"id": "rocks",
"name": "ロックグラス",
"en": "Rocks Glass",
"desc": "背の低い、底の厚いタンブラー。大きな氷を入れるオン・ザ・ロックや、オールドファッションドに使う。"
},
{
"id": "highball",
"name": "タンブラー（ハイボールグラス）",
"en": "Highball Glass",
"desc": "300ml前後の筒形のグラス。ハイボールやジントニックなど、炭酸で割るロングカクテルの定番。"
},
{
"id": "collins",
"name": "コリンズグラス",
"en": "Collins Glass",
"desc": "タンブラーより背の高い細長いグラス。トム・コリンズなど、たっぷりのソーダで割るカクテルに。"
},
{
"id": "flute",
"name": "フルートグラス",
"en": "Flute",
"desc": "細長い脚付きグラス。泡が長持ちするので、シャンパンを使うカクテルに。"
},
{
"id": "wine",
"name": "ワイングラス",
"en": "Wine Glass",
"desc": "ふくらみのある脚付きグラス。スプリッツやサングリアなど、香りを楽しむカクテルにも使う。"
},
{
"id": "mug",
"name": "マグ・耐熱グラス",
"en": "Mug",
"desc": "ホットカクテル用の耐熱のグラス。銅のマグはモスコミュールの象徴。"
},
{
"id": "shot",
"name": "ショットグラス",
"en": "Shot Glass",
"desc": "30〜60mlの小さなグラス。ストレートで一気に飲むときや、ニコラシカに使う。"
},
{
"id": "hurricane",
"name": "ゴブレット・ティキマグ",
"en": "Goblet / Tiki",
"desc": "トロピカルカクテル用の大きなグラス。ピニャコラーダやマイタイを、フルーツで華やかに飾る。"
}
];
const COCKTAIL_LINKS = {"bourbon": {"k": "whisky", "t": ["バーボン"], "ids": ["makersmark", "buffalotrace", "wildturkey101", "woodford"]}, "rye": {"k": "whisky", "t": ["ライ"], "ids": ["rittenhouse", "sazerac-rye", "woodford-rye"]}, "scotch": {"k": "whisky", "t": ["ブレンデッド"], "r": ["scotland"], "ids": ["jwblack", "chivas12", "dewars12", "ballantines-finest"]}, "islay": {"k": "whisky", "r": ["islay"], "ids": ["laphroaig10", "ardbeg10", "lagavulin16"]}, "irish": {"k": "whisky", "r": ["ireland"], "ids": ["jameson", "bushmills-orig", "tullamore"]}, "jpwhisky": {"k": "whisky", "r": ["japan"], "ids": ["kakubin", "toki", "hakushu-nas", "chita"]}, "rum_w": {"k": "rum", "t": ["ホワイトラム"], "ids": ["r-bacardi-superior", "r-havana-3", "r-plantation-3stars"]}, "rum_d": {"k": "rum", "t": ["ダークラム（熟成ラム）"], "ids": ["r-myers-original", "r-zacapa-23", "r-diplomatico-re"]}, "rum_j": {"k": "rum", "t": ["ジャマイカン（ハイエステル）", "ゴールドラム"], "ids": ["r-appleton-signature", "r-appleton-12", "r-wray-overproof"]}, "agricole": {"k": "rum", "t": ["アグリコール"], "ids": ["r-jm-blanc", "r-clement-vsop"]}, "teq_b": {"k": "tequila", "t": ["ブランコ（シルバー）"], "ids": ["t-olmeca-altos", "t-patron-silver", "t-donjulio-blanco"]}, "teq_r": {"k": "tequila", "t": ["レポサド"], "ids": ["t-cuervo-especial", "t-herradura-reposado", "t-donjulio-reposado"]}, "mezcal": {"k": "tequila", "t": ["メスカル"], "ids": ["t-delmaguey-vida", "t-ilegal-joven"]}, "cognac": {"k": "brandy", "t": ["コニャック"], "ids": ["b-hennessy-vs", "b-ferrand-1840", "b-martell-vsop"]}, "calvados": {"k": "brandy", "t": ["カルヴァドス"], "ids": ["b-drouin-select", "b-boulard-vsop"]}, "pisco": {"k": "brandy", "t": ["ピスコ"], "ids": ["b-pisco-quebranta", "b-pisco-italia"]}, "brandy": {"k": "brandy", "t": ["コニャック", "ブランデー・デ・ヘレス", "そのほかのブランデー"], "ids": ["b-hennessy-vs", "b-carlosi-std", "b-suntory-vo"]}, "spark": {"k": "wine", "t": ["スパークリング"], "ids": ["w-freixenet-cn", "w-zonin-pro", "w-moet-imp"]}, "white": {"k": "wine", "t": ["白"], "ids": []}, "red": {"k": "wine", "t": ["赤"], "ids": []}, "sake": {"k": "sake", "t": ["純米", "特別純米", "本醸造"], "ids": ["s-kubota-senju", "s-urakasumi-honjikomi", "s-hakkaisan-tj"]}, "coffee": {"k": "coffee", "r": ["brazil", "colombia"], "ids": ["c-br-no2", "c-co-supremo"]}};
const COCKTAILS = [
{
"id": "k-gintonic",
"name": "ジントニック",
"en": "Gin & Tonic",
"base": "ジン",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"ほろ苦い",
"柑橘"
],
"time": "いつでも",
"color": "#E9F1EE",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"トニックウォーター",
"適量（約120ml）"
],
[
"ライム",
"1/6個"
]
],
"steps": [
"グラスに氷を入れ、ライムを搾って落とす。",
"ジンを注ぎ、冷えたトニックウォーターで満たす。",
"バースプーンで氷を持ち上げるように1回だけ混ぜる。"
],
"desc": "ジンの香りとトニックのほろ苦さ、ライムのさわやかさ。「バーテンダーの腕がわかる」といわれるほどシンプルで奥が深い。",
"tip": "炭酸が抜けないよう、混ぜすぎないこと。",
"garnish": "ライム",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-martini",
"name": "マティーニ",
"en": "Martini",
"base": "ジン",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 32,
"taste": [
"ドライ",
"ハーブ",
"キリッと"
],
"time": "食前",
"color": "#F1F0DF",
"ings": [
[
"ドライ・ジン",
"50ml"
],
[
"ドライ・ベルモット",
"10ml"
],
[
"オレンジ・ビターズ",
"1振り（お好みで）"
],
[
"オリーブ",
"1個"
]
],
"steps": [
"ミキシンググラスに氷とジン、ベルモットを入れ、ステアして冷やす。",
"ストレーナーをかぶせ、冷やしたカクテルグラスに注ぐ。",
"オリーブを飾り、レモンの皮をひねって香りを付ける。"
],
"desc": "「カクテルの王様」。ジンとベルモットだけのシンプルな組み合わせで、ベルモットを減らすほど辛口になる。",
"tip": "グラスもあらかじめ冷凍庫で冷やしておくと、最後まで引き締まった味に。",
"garnish": "オリーブ・レモンピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-gimlet",
"name": "ギムレット",
"en": "Gimlet",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 30,
"taste": [
"爽快",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#E8F0D2",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"ライムジュース（コーディアル）",
"15ml"
]
],
"steps": [
"シェーカーに氷と材料を入れ、強くシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "レイモンド・チャンドラーの小説『長いお別れ』の「ギムレットには早すぎる」という台詞で有名。",
"tip": "甘いライムコーディアルを使うのが本来のレシピ。生のライムを使う場合はシロップを少し加える。",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-negroni",
"name": "ネグローニ",
"en": "Negroni",
"base": "ジン",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 24,
"taste": [
"ほろ苦い",
"ハーブ",
"甘い"
],
"time": "食前",
"color": "#B5262A",
"ings": [
[
"ドライ・ジン",
"30ml"
],
[
"カンパリ",
"30ml"
],
[
"スイート・ベルモット",
"30ml"
],
[
"オレンジピール",
"1枚"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぐ。",
"バースプーンでよくステアする。",
"オレンジの皮をひねって香りを付け、そのまま入れる。"
],
"desc": "1919年ごろ、フィレンツェのネグローニ伯爵が「アメリカーノ」のソーダをジンに替えさせたのが始まりとされる。同量ずつで覚えやすい。",
"tip": "",
"garnish": "オレンジピール",
"tools": [
"barspoon",
"jigger",
"peeler"
]
},
{
"id": "k-tomcollins",
"name": "トム・コリンズ",
"en": "Tom Collins",
"base": "ジン",
"method": "ビルド",
"glass": "collins",
"strength": "弱め",
"abv": 10,
"taste": [
"爽快",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#F2F1E4",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"グラスにジン、レモンジュース、シロップを入れてよく混ぜる。",
"氷を入れ、冷えたソーダで満たして軽く混ぜる。",
"レモンスライスとチェリーを飾る。"
],
"desc": "「ジン入りのレモネード」のような、さっぱりしたロングカクテル。",
"tip": "",
"garnish": "レモンスライス・チェリー",
"tools": [
"barspoon",
"jigger",
"squeezer"
]
},
{
"id": "k-ginfizz",
"name": "ジンフィズ",
"en": "Gin Fizz",
"base": "ジン",
"method": "シェイク",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#F3F1E2",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"ソーダ以外の材料を氷とシェイクする。",
"氷を入れたタンブラーに注ぎ、冷えたソーダで満たす。"
],
"desc": "シェイクしてからソーダで割るのがトム・コリンズとの違い。「シュワッ」という炭酸の音がフィズの名の由来。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-whitelady",
"name": "ホワイトレディ",
"en": "White Lady",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 28,
"taste": [
"甘酸っぱい",
"柑橘",
"なめらか"
],
"time": "いつでも",
"color": "#F4F1E6",
"ings": [
[
"ドライ・ジン",
"30ml"
],
[
"ホワイトキュラソー（コアントロー）",
"15ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "ジン、オレンジのリキュール、レモンを2:1:1で合わせる、白く上品なショートカクテル。ベースをブランデーにするとサイドカーになる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-singapore",
"name": "シンガポール・スリング",
"en": "Singapore Sling",
"base": "ジン",
"method": "シェイク",
"glass": "collins",
"strength": "中くらい",
"abv": 14,
"taste": [
"フルーティ",
"甘酸っぱい",
"トロピカル"
],
"time": "いつでも",
"color": "#E6707B",
"ings": [
[
"ドライ・ジン",
"30ml"
],
[
"チェリーブランデー",
"15ml"
],
[
"パイナップルジュース",
"60ml"
],
[
"ライムジュース",
"15ml"
],
[
"グレナデンシロップ",
"10ml"
],
[
"ベネディクティン・コアントロー",
"各数滴"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
]
],
"steps": [
"材料を氷とシェイクする。",
"氷を入れたグラスに注ぐ。",
"パイナップルとチェリーを飾る。"
],
"desc": "シンガポールのラッフルズ・ホテルで20世紀初めに生まれたとされる、南国のロングカクテル。",
"tip": "",
"garnish": "パイナップル・チェリー",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-french75",
"name": "フレンチ75",
"en": "French 75",
"base": "ジン",
"method": "シェイク",
"glass": "flute",
"strength": "中くらい",
"abv": 17,
"taste": [
"爽快",
"柑橘",
"泡"
],
"time": "食前",
"color": "#F2EBC8",
"ings": [
[
"ドライ・ジン",
"30ml"
],
[
"レモンジュース",
"15ml"
],
[
"シュガーシロップ",
"10ml"
],
[
"シャンパン（スパークリングワイン）",
"適量",
"spark"
]
],
"steps": [
"ジン、レモン、シロップを氷とシェイクする。",
"フルートグラスに注ぎ、冷えたシャンパンで満たす。"
],
"desc": "第一次世界大戦のフランスの75mm砲にちなむ名前。泡と柑橘の、華やかで力強い一杯。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-aviation",
"name": "アビエイション",
"en": "Aviation",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 26,
"taste": [
"甘酸っぱい",
"柑橘",
"フルーティ"
],
"time": "食前",
"color": "#E4E2EE",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"マラスキーノ",
"10ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"シェーカーに氷と材料を入れ、シェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "「飛行」の名を持つ、20世紀初めのニューヨーク生まれのクラシック。マラスキーノのさくらんぼの種のような香りが、ジンとレモンに華やかさを添える。",
"tip": "元のレシピにはスミレのリキュール（クレーム・ド・ヴィオレット）を少量加え、空のような淡い紫色に仕上げるものもある。",
"garnish": "マラスキーノチェリー",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-lastword",
"name": "ラスト・ワード",
"en": "Last Word",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 30,
"taste": [
"ハーブ",
"甘酸っぱい",
"柑橘"
],
"time": "食前",
"color": "#C9D98A",
"ings": [
[
"ドライ・ジン",
"20ml"
],
[
"シャルトリューズ（ヴェール）",
"20ml"
],
[
"マラスキーノ",
"20ml"
],
[
"ライムジュース",
"20ml"
]
],
"steps": [
"シェーカーに氷と材料を入れ、しっかりシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "禁酒法時代のデトロイトで生まれたとされる、4つの材料を同量ずつ合わせるカクテル。シャルトリューズの濃い薬草の香りとライムの酸味が鮮やか。",
"tip": "同量なので覚えやすい。シャルトリューズの個性が強いので、ジンは素直なロンドン・ドライが合う。",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-moscowmule",
"name": "モスコミュール",
"en": "Moscow Mule",
"base": "ウォッカ",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"爽快",
"スパイシー",
"柑橘"
],
"time": "いつでも",
"color": "#EFE9D0",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"ライム",
"1/2個"
],
[
"ジンジャービア（ジンジャーエール）",
"適量"
]
],
"steps": [
"銅のマグ（またはタンブラー）にライムを搾り入れ、氷を入れる。",
"ウォッカを注ぎ、ジンジャービアで満たして軽く混ぜる。"
],
"desc": "「モスクワのラバ」。ラバに蹴られたように効く、という意味ともいわれる。しょうがのピリッとした辛みが爽快。",
"tip": "",
"garnish": "ライム",
"tools": [
"barspoon",
"jigger",
"squeezer"
]
},
{
"id": "k-screwdriver",
"name": "スクリュードライバー",
"en": "Screwdriver",
"base": "ウォッカ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"フルーティ",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#F4A93A",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"オレンジジュース",
"適量（約120ml）"
]
],
"steps": [
"氷を入れたグラスにウォッカを注ぐ。",
"オレンジジュースで満たして混ぜる。"
],
"desc": "油田で働く人がねじ回しで混ぜたという逸話が名前の由来。飲みやすいので、飲みすぎには注意。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-saltydog",
"name": "ソルティドッグ",
"en": "Salty Dog",
"base": "ウォッカ",
"method": "ビルド",
"glass": "rocks",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"ほろ苦い",
"塩味"
],
"time": "いつでも",
"color": "#F6DCC8",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"グレープフルーツジュース",
"適量"
],
[
"塩",
"少々"
]
],
"steps": [
"グラスの縁をレモンで湿らせ、塩をつける（スノースタイル）。",
"氷を入れ、ウォッカとグレープフルーツジュースを注いで混ぜる。"
],
"desc": "グラスの縁の塩が、グレープフルーツのほろ苦さと甘さを引き立てる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-bloodymary",
"name": "ブラッディ・メアリー",
"en": "Bloody Mary",
"base": "ウォッカ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"塩味",
"スパイシー",
"旨み"
],
"time": "いつでも",
"color": "#B3261E",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"トマトジュース",
"適量"
],
[
"レモンジュース",
"10ml"
],
[
"ウスターソース・タバスコ・塩こしょう",
"少々"
]
],
"steps": [
"氷を入れたグラスに材料を入れ、よく混ぜる。",
"セロリスティックとレモンを添える。"
],
"desc": "トマトとスパイスの、食事のようなカクテル。朝食やブランチにも飲まれる。",
"tip": "",
"garnish": "セロリ・レモン",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-cosmopolitan",
"name": "コスモポリタン",
"en": "Cosmopolitan",
"base": "ウォッカ",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 22,
"taste": [
"フルーティ",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#E36A84",
"ings": [
[
"ウォッカ（シトロン）",
"30ml"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"クランベリージュース",
"30ml"
],
[
"ライムジュース",
"10ml"
]
],
"steps": [
"材料を氷とシェイクする。",
"冷やしたカクテルグラスに注ぎ、オレンジの皮で香りを付ける。"
],
"desc": "ドラマ『セックス・アンド・ザ・シティ』で一躍有名になった、ピンク色のカクテル。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-espressomartini",
"name": "エスプレッソ・マティーニ",
"en": "Espresso Martini",
"base": "ウォッカ",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 18,
"taste": [
"ほろ苦い",
"甘い",
"コーヒー"
],
"time": "食後",
"color": "#2E1A10",
"ings": [
[
"ウォッカ",
"40ml"
],
[
"コーヒーリキュール",
"20ml"
],
[
"エスプレッソ（淹れたて）",
"30ml",
"coffee"
],
[
"シュガーシロップ",
"少々（お好みで）"
]
],
"steps": [
"淹れたてのエスプレッソを少し冷ます。",
"材料を氷と一緒に強くシェイクする。",
"グラスに注ぎ、泡の上にコーヒー豆を3粒飾る。"
],
"desc": "1980年代のロンドンで生まれた、コーヒーとウォッカのカクテル。強くシェイクすると、表面にきめ細かい泡の層ができる。",
"tip": "豆の個性が出るので、自家焙煎の深煎りの豆でぜひ。",
"garnish": "コーヒー豆3粒",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-blackrussian",
"name": "ブラック・ルシアン",
"en": "Black Russian",
"base": "ウォッカ",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ほろ苦い",
"コーヒー"
],
"time": "食後",
"color": "#2B1A12",
"ings": [
[
"ウォッカ",
"40ml"
],
[
"コーヒーリキュール",
"20ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、混ぜる。"
],
"desc": "コーヒーの甘い香りで飲みやすいが、度数は高め。生クリームを浮かべるとホワイト・ルシアンになる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-mojito",
"name": "モヒート",
"en": "Mojito",
"base": "ラム",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"爽快",
"ミント",
"柑橘"
],
"time": "いつでも",
"color": "#DDEFC9",
"ings": [
[
"ホワイトラム",
"45ml",
"rum_w"
],
[
"ミントの葉",
"10〜15枚"
],
[
"ライム",
"1/2個"
],
[
"砂糖",
"小さじ2"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"グラスにミントとライム、砂糖を入れ、ペストルで軽くつぶす。",
"クラッシュアイスを詰め、ラムを注ぐ。",
"ソーダを加え、底から持ち上げるように混ぜる。"
],
"desc": "キューバ生まれ。文豪ヘミングウェイが愛したことでも知られる、ミントとライムの爽快なカクテル。",
"tip": "ミントは強くつぶしすぎると苦みが出るので、軽く香りを立たせる程度に。",
"garnish": "ミント",
"tools": [
"barspoon",
"jigger",
"muddler",
"squeezer"
]
},
{
"id": "k-daiquiri",
"name": "ダイキリ",
"en": "Daiquiri",
"base": "ラム",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 22,
"taste": [
"甘酸っぱい",
"柑橘",
"爽快"
],
"time": "いつでも",
"color": "#F1F2DC",
"ings": [
[
"ホワイトラム",
"45ml",
"rum_w"
],
[
"ライムジュース",
"15ml"
],
[
"シュガーシロップ",
"10ml"
]
],
"steps": [
"材料を氷と一緒によくシェイクする。",
"冷やしたグラスに注ぐ。"
],
"desc": "キューバのダイキリ鉱山にちなむ名前。ラム、ライム、砂糖だけのシンプルな組み合わせで、ラムの個性がよくわかる。ブレンダーで作るとフローズン・ダイキリに。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-cubalibre",
"name": "キューバ・リブレ",
"en": "Cuba Libre",
"base": "ラム",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"爽快",
"柑橘"
],
"time": "いつでも",
"color": "#4A2A18",
"ings": [
[
"ラム",
"45ml",
"rum_w"
],
[
"コーラ",
"適量"
],
[
"ライム",
"1/6個"
]
],
"steps": [
"グラスにライムを搾り入れ、氷を入れる。",
"ラムを注ぎ、コーラで満たして軽く混ぜる。"
],
"desc": "「自由なキューバ万歳」という意味。ラムとコーラにライムを搾るだけの、気軽な一杯。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-pinacolada",
"name": "ピニャ・コラーダ",
"en": "Piña Colada",
"base": "ラム",
"method": "ブレンド",
"glass": "hurricane",
"strength": "弱め",
"abv": 8,
"taste": [
"甘い",
"トロピカル",
"クリーミー"
],
"time": "いつでも",
"color": "#F7EED2",
"ings": [
[
"ホワイトラム",
"30ml",
"rum_w"
],
[
"ココナッツミルク（ココナッツクリーム）",
"45ml"
],
[
"パイナップルジュース",
"80ml"
],
[
"クラッシュアイス",
"1カップ"
]
],
"steps": [
"材料をすべてブレンダーに入れ、なめらかになるまで回す。",
"大きなグラスに注ぎ、パイナップルとチェリーを飾る。"
],
"desc": "プエルトリコ生まれの、パイナップルとココナッツのトロピカルカクテル。",
"tip": "",
"garnish": "パイナップル・チェリー",
"tools": [
"blender",
"jigger"
]
},
{
"id": "k-maitai",
"name": "マイタイ",
"en": "Mai Tai",
"base": "ラム",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 20,
"taste": [
"フルーティ",
"甘酸っぱい",
"ナッツ"
],
"time": "いつでも",
"color": "#E09A3E",
"ings": [
[
"ジャマイカのラム（熟成）",
"30ml",
"rum_j"
],
[
"アグリコール（マルティニークのラム）",
"30ml",
"agricole"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"オルジャー（アーモンドシロップ）",
"10ml"
],
[
"ライムジュース",
"20ml"
]
],
"steps": [
"材料をクラッシュアイスとシェイクする。",
"氷ごとグラスに注ぎ、ミントとライムを飾る。"
],
"desc": "タヒチ語で「最高」。1944年、カリフォルニアの「トレーダー・ヴィックス」で生まれたティキ・カクテルの代表。",
"tip": "",
"garnish": "ミント・ライム",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-darkstormy",
"name": "ダーク・アンド・ストーミー",
"en": "Dark 'n' Stormy",
"base": "ラム",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"スパイシー",
"甘い",
"爽快"
],
"time": "いつでも",
"color": "#6A3B1E",
"ings": [
[
"ダークラム",
"45ml",
"rum_d"
],
[
"ジンジャービア",
"適量"
],
[
"ライム",
"1/6個"
]
],
"steps": [
"氷を入れたグラスにジンジャービアを注ぐ。",
"上からダークラムをそっと注ぎ、雲のように浮かべる。",
"ライムを添える。"
],
"desc": "「暗い嵐の空」のような見た目からの名前。バミューダ生まれ。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-margarita",
"name": "マルガリータ",
"en": "Margarita",
"base": "テキーラ",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 26,
"taste": [
"甘酸っぱい",
"塩味",
"柑橘"
],
"time": "いつでも",
"color": "#E9EFCB",
"ings": [
[
"テキーラ（ブランコ）",
"30ml",
"teq_b"
],
[
"ホワイトキュラソー（コアントロー）",
"15ml"
],
[
"ライムジュース",
"15ml"
],
[
"塩",
"少々"
]
],
"steps": [
"グラスの縁をライムで湿らせ、塩をつける。",
"材料を氷とシェイクし、グラスに注ぐ。"
],
"desc": "縁の塩とライムの酸味が、テキーラのアガベの甘さを引き立てる。1949年のアメリカのカクテルコンテストで入選したといわれる。",
"tip": "",
"garnish": "塩（スノースタイル）",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-sunrise",
"name": "テキーラ・サンライズ",
"en": "Tequila Sunrise",
"base": "テキーラ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"フルーティ",
"甘い",
"柑橘"
],
"time": "いつでも",
"color": "#F28B2E",
"ings": [
[
"テキーラ",
"45ml",
"teq_b"
],
[
"オレンジジュース",
"90ml"
],
[
"グレナデンシロップ",
"10ml"
]
],
"steps": [
"氷を入れたグラスにテキーラとオレンジジュースを注いで混ぜる。",
"グレナデンシロップを静かに沈め、朝焼けのようなグラデーションを作る。"
],
"desc": "ローリング・ストーンズが広めたともいわれる、朝焼けのような見た目のカクテル。",
"tip": "",
"garnish": "オレンジスライス",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-paloma",
"name": "パロマ",
"en": "Paloma",
"base": "テキーラ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"爽快",
"ほろ苦い",
"柑橘"
],
"time": "いつでも",
"color": "#F7D2C6",
"ings": [
[
"テキーラ（ブランコ）",
"45ml",
"teq_b"
],
[
"グレープフルーツソーダ",
"適量"
],
[
"ライムジュース",
"10ml"
],
[
"塩",
"少々"
]
],
"steps": [
"グラスの縁に塩をつけ、氷を入れる。",
"テキーラとライムを入れ、グレープフルーツソーダで満たす。"
],
"desc": "メキシコで最も愛されているといわれるテキーラのカクテル。「鳩」という意味。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-mezcalnegroni",
"name": "メスカル・ネグローニ",
"en": "Mezcal Negroni",
"base": "テキーラ",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 24,
"taste": [
"スモーキー",
"ほろ苦い",
"ハーブ"
],
"time": "食前",
"color": "#A3262A",
"ings": [
[
"メスカル",
"30ml",
"mezcal"
],
[
"カンパリ",
"30ml"
],
[
"スイート・ベルモット",
"30ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、よくステアする。",
"オレンジピールを飾る。"
],
"desc": "ネグローニのジンをメスカルに替えた現代のクラシック。スモーキーな香りが加わる。",
"tip": "",
"garnish": "オレンジピール",
"tools": [
"barspoon",
"jigger",
"peeler"
]
},
{
"id": "k-highball",
"name": "ハイボール",
"en": "Highball",
"base": "ウイスキー",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 8,
"taste": [
"爽快",
"ドライ",
"食中"
],
"time": "いつでも",
"color": "#EAD08A",
"ings": [
[
"ウイスキー",
"30〜45ml",
"jpwhisky"
],
[
"ソーダ（よく冷やしたもの）",
"90〜120ml"
],
[
"レモンピール",
"お好みで"
]
],
"steps": [
"グラスに氷をいっぱいに入れ、ステアしてグラスを冷やす。溶けた水は捨てる。",
"ウイスキーを注ぎ、ステアして冷やす。",
"氷に当てないよう、ソーダを静かに注ぎ、縦に1回だけ混ぜる。"
],
"desc": "ウイスキーをソーダで割るだけ。日本では食事と合わせる定番の飲み方。好みのウイスキーで味わいが大きく変わる。",
"tip": "ソーダもグラスもよく冷やしておくのが、炭酸を逃さないこつ。スモーキーなアイラモルトで作ると、また違った魅力に。",
"garnish": "レモンピール",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-oldfashioned",
"name": "オールドファッションド",
"en": "Old Fashioned",
"base": "ウイスキー",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 32,
"taste": [
"甘い",
"ほろ苦い",
"オレンジ"
],
"time": "食後",
"color": "#C27A2C",
"ings": [
[
"バーボンまたはライ",
"45ml",
"bourbon"
],
[
"角砂糖",
"1個"
],
[
"アンゴスチュラ・ビターズ",
"2振り"
],
[
"オレンジピール",
"1枚"
]
],
"steps": [
"ロックグラスに角砂糖を入れ、ビターズを染み込ませる。少量の水やソーダで溶かす。",
"大きな氷を入れ、ウイスキーを注いでステアする。",
"オレンジの皮をひねって香りを付け、飾る。"
],
"desc": "19世紀から続く、「昔ながらの」カクテル。ウイスキー、砂糖、ビターズという、カクテルの原形ともいえる組み合わせ。",
"tip": "",
"garnish": "オレンジピール・チェリー",
"tools": [
"barspoon",
"jigger",
"muddler",
"peeler"
]
},
{
"id": "k-manhattan",
"name": "マンハッタン",
"en": "Manhattan",
"base": "ウイスキー",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ほろ苦い",
"ハーブ"
],
"time": "食前",
"color": "#8E2E1C",
"ings": [
[
"ライまたはバーボン",
"45ml",
"rye"
],
[
"スイート・ベルモット",
"15ml"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
],
[
"マラスキーノチェリー",
"1個"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたカクテルグラスに注ぎ、チェリーを沈める。"
],
"desc": "「カクテルの女王」。ニューヨークのマンハッタン・クラブで生まれたとされる。本来はライ・ウイスキーで作る。",
"tip": "",
"garnish": "チェリー",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-whiskysour",
"name": "ウイスキーサワー",
"en": "Whisky Sour",
"base": "ウイスキー",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 18,
"taste": [
"甘酸っぱい",
"柑橘",
"なめらか"
],
"time": "いつでも",
"color": "#E8C46A",
"ings": [
[
"バーボン",
"45ml",
"bourbon"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"卵白",
"1/2個分（お好みで）"
]
],
"steps": [
"卵白を使う場合は、まず氷なしでよくシェイクして泡立てる（ドライシェイク）。",
"氷を加えて、もう一度しっかりシェイクする。",
"グラスに注ぎ、レモンとチェリーを飾る。"
],
"desc": "ウイスキーにレモンと甘みを加えた、甘酸っぱいカクテル。卵白を加えると、ふんわりとした泡の口当たりになる。",
"tip": "",
"garnish": "レモン・チェリー",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-mintjulep",
"name": "ミント・ジュレップ",
"en": "Mint Julep",
"base": "ウイスキー",
"method": "ビルド",
"glass": "highball",
"strength": "強め",
"abv": 25,
"taste": [
"ミント",
"甘い",
"爽快"
],
"time": "いつでも",
"color": "#CFE6B8",
"ings": [
[
"バーボン",
"60ml",
"bourbon"
],
[
"ミントの葉",
"10枚"
],
[
"シュガーシロップ",
"10ml"
]
],
"steps": [
"グラスにミントとシロップを入れ、ペストルで軽くつぶす。",
"クラッシュアイスを詰め、バーボンを注いでよく混ぜる。",
"ミントを飾る。"
],
"desc": "ケンタッキー・ダービーの公式カクテル。銀のカップで出されるのが伝統。",
"tip": "",
"garnish": "ミント",
"tools": [
"barspoon",
"jigger",
"muddler"
]
},
{
"id": "k-godfather",
"name": "ゴッドファーザー",
"en": "Godfather",
"base": "ウイスキー",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 34,
"taste": [
"甘い",
"ナッツ",
"なめらか"
],
"time": "食後",
"color": "#9A5523",
"ings": [
[
"スコッチ・ウイスキー",
"45ml",
"scotch"
],
[
"アマレット",
"15ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、ステアする。"
],
"desc": "映画『ゴッドファーザー』にちなむ名前。アーモンドのような香りのアマレットが、ウイスキーを甘くまろやかにする。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-rustynail",
"name": "ラスティ・ネイル",
"en": "Rusty Nail",
"base": "ウイスキー",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 36,
"taste": [
"甘い",
"ハーブ",
"はちみつ"
],
"time": "食後",
"color": "#B66A22",
"ings": [
[
"スコッチ・ウイスキー",
"45ml",
"scotch"
],
[
"ドランブイ",
"15ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、ステアする。"
],
"desc": "「錆びた釘」。スコッチと、スコッチをベースにした蜂蜜とハーブのリキュール、ドランブイの組み合わせ。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-irishcoffee",
"name": "アイリッシュ・コーヒー",
"en": "Irish Coffee",
"base": "ウイスキー",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"ほろ苦い",
"コーヒー",
"クリーミー"
],
"time": "食後",
"color": "#3A2214",
"ings": [
[
"アイリッシュ・ウイスキー",
"30ml",
"irish"
],
[
"熱いコーヒー",
"120ml",
"coffee"
],
[
"ブラウンシュガー",
"小さじ2"
],
[
"生クリーム（軽く泡立てる）",
"適量"
]
],
"steps": [
"温めた耐熱グラスに砂糖とウイスキーを入れ、熱いコーヒーを注いで混ぜる。",
"軽く泡立てた生クリームを、スプーンの背を伝わせて静かに浮かべる。"
],
"desc": "1940年代、アイルランドの空港で寒さにふるえる乗客のために考え出されたといわれるホットカクテル。",
"tip": "クリームは混ぜずに、その上から熱いコーヒーを飲むのが正しい楽しみ方。",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-penicillin",
"name": "ペニシリン",
"en": "Penicillin",
"base": "ウイスキー",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 22,
"taste": [
"スモーキー",
"はちみつ",
"スパイシー"
],
"time": "いつでも",
"color": "#E0B85E",
"ings": [
[
"ブレンデッド・スコッチ",
"50ml",
"scotch"
],
[
"レモンジュース",
"20ml"
],
[
"はちみつジンジャーシロップ",
"20ml"
],
[
"アイラ・モルト",
"7ml（仕上げに浮かべる）",
"islay"
]
],
"steps": [
"アイラ・モルト以外の材料を氷とシェイクする。",
"氷を入れたロックグラスに注ぐ。",
"アイラ・モルトを静かに浮かべ、スモーキーな香りをまとわせる。"
],
"desc": "2005年にニューヨークのバーテンダーが考案した、現代のクラシック。はちみつとしょうがに、アイラの煙が香る。",
"tip": "はちみつとすりおろした生姜を同量の湯で溶いて、シロップを作る。",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-sazerac",
"name": "サゼラック",
"en": "Sazerac",
"base": "ウイスキー",
"method": "ステア",
"glass": "rocks",
"strength": "強め",
"abv": 34,
"taste": [
"ハーブ",
"ほろ苦い",
"甘い"
],
"time": "食前",
"color": "#A0582A",
"ings": [
[
"ライ・ウイスキー",
"50ml",
"rye"
],
[
"角砂糖",
"1個"
],
[
"ペイショーズ・ビターズ",
"3振り"
],
[
"アブサン",
"少々（グラスをすすぐ）"
]
],
"steps": [
"冷やしたロックグラスにアブサンを少量入れて内側に回し、余分は捨てる。",
"ミキシンググラスで砂糖をビターズで溶かし、ライと氷を加えてステアする。",
"氷を入れずにグラスに注ぎ、レモンの皮で香りを付ける。"
],
"desc": "ニューオーリンズ生まれの、アメリカ最古ともいわれるカクテル。アブサンのアニスの香りが特徴。",
"tip": "",
"garnish": "レモンピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-boulevardier",
"name": "ブールヴァルディエ",
"en": "Boulevardier",
"base": "ウイスキー",
"method": "ステア",
"glass": "coupe",
"strength": "強め",
"abv": 26,
"taste": [
"ほろ苦い",
"甘い",
"オレンジ"
],
"time": "食前",
"color": "#9B2F22",
"ings": [
[
"バーボン",
"30ml",
"bourbon"
],
[
"カンパリ",
"30ml"
],
[
"スイート・ベルモット",
"30ml"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたグラスに注ぎ、オレンジピールを飾る。"
],
"desc": "ネグローニのジンをバーボンに替えた、より甘くまろやかな一杯。1920年代のパリで生まれた。",
"tip": "",
"garnish": "オレンジピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-sidecar",
"name": "サイドカー",
"en": "Sidecar",
"base": "ブランデー",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 26,
"taste": [
"甘酸っぱい",
"柑橘",
"なめらか"
],
"time": "いつでも",
"color": "#E0A94E",
"ings": [
[
"ブランデー（コニャック）",
"30ml",
"cognac"
],
[
"ホワイトキュラソー（コアントロー）",
"15ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"材料を氷とシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "第一次世界大戦のころ、サイドカーで乗りつける将校のために作られたといわれる、ブランデーカクテルの代表。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-alexander",
"name": "ブランデー・アレキサンダー",
"en": "Brandy Alexander",
"base": "ブランデー",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 22,
"taste": [
"甘い",
"クリーミー",
"チョコレート"
],
"time": "食後",
"color": "#D9B98E",
"ings": [
[
"ブランデー",
"30ml",
"brandy"
],
[
"クレーム・ド・カカオ（ブラウン）",
"15ml"
],
[
"生クリーム",
"15ml"
],
[
"ナツメグ",
"少々"
]
],
"steps": [
"材料を氷としっかりシェイクする。",
"冷やしたカクテルグラスに注ぎ、ナツメグをふる。"
],
"desc": "チョコレートとクリームの、デザートのようなカクテル。食後にぴったり。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-jackrose",
"name": "ジャック・ローズ",
"en": "Jack Rose",
"base": "ブランデー",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 22,
"taste": [
"フルーティ",
"甘酸っぱい",
"りんご"
],
"time": "いつでも",
"color": "#E07A82",
"ings": [
[
"カルヴァドス（アップルブランデー）",
"30ml",
"calvados"
],
[
"ライムジュース",
"15ml"
],
[
"グレナデンシロップ",
"15ml"
]
],
"steps": [
"材料を氷とシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "りんごのブランデーとざくろのシロップによる、バラ色のカクテル。ヘミングウェイの小説にも登場する。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-piscosour",
"name": "ピスコ・サワー",
"en": "Pisco Sour",
"base": "ブランデー",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 18,
"taste": [
"甘酸っぱい",
"柑橘",
"なめらか"
],
"time": "いつでも",
"color": "#F2EED6",
"ings": [
[
"ピスコ",
"45ml",
"pisco"
],
[
"ライムジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"卵白",
"1/2個分"
],
[
"アンゴスチュラ・ビターズ",
"数滴"
]
],
"steps": [
"氷なしでよくシェイクして卵白を泡立てる。",
"氷を加えて、もう一度シェイクする。",
"グラスに注ぎ、泡の上にビターズを数滴落とす。"
],
"desc": "ペルーとチリの国民的カクテル。ふわふわの泡と、マスカットのような華やかな香り。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-nikolaschka",
"name": "ニコラシカ",
"en": "Nikolaschka",
"base": "ブランデー",
"method": "ビルド",
"glass": "shot",
"strength": "強め",
"abv": 40,
"taste": [
"甘い",
"柑橘",
"力強い"
],
"time": "食後",
"color": "#C27A2C",
"ings": [
[
"ブランデー",
"30ml",
"brandy"
],
[
"レモンスライス",
"1枚"
],
[
"砂糖",
"小さじ1"
]
],
"steps": [
"ショットグラスにブランデーを注ぐ。",
"グラスの上にレモンスライスをのせ、その上に砂糖を盛る。",
"レモンで砂糖を包むように口に入れて噛み、ブランデーを一気に流し込む。"
],
"desc": "口の中で完成させる、ちょっと変わったカクテル。日本のバーでも人気がある。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-kir",
"name": "キール",
"en": "Kir",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "wine",
"strength": "弱め",
"abv": 10,
"taste": [
"フルーティ",
"甘酸っぱい"
],
"time": "食前",
"color": "#B0283E",
"ings": [
[
"辛口の白ワイン",
"120ml",
"white"
],
[
"クレーム・ド・カシス",
"10〜15ml"
]
],
"steps": [
"冷やしたグラスにカシスを入れ、冷えた白ワインを注ぐ。",
"軽く混ぜる。"
],
"desc": "フランス・ブルゴーニュのディジョン市長、キャノン・キールが地元の特産品を広めるために振る舞ったことが名前の由来。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-kirroyal",
"name": "キール・ロワイヤル",
"en": "Kir Royal",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "flute",
"strength": "弱め",
"abv": 12,
"taste": [
"フルーティ",
"泡",
"華やか"
],
"time": "食前",
"color": "#B5304A",
"ings": [
[
"シャンパン（スパークリングワイン）",
"120ml",
"spark"
],
[
"クレーム・ド・カシス",
"10ml"
]
],
"steps": [
"フルートグラスにカシスを入れ、冷えたシャンパンを静かに注ぐ。"
],
"desc": "キールの白ワインを、シャンパンに替えた華やかな一杯。乾杯に。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-mimosa",
"name": "ミモザ",
"en": "Mimosa",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "flute",
"strength": "弱め",
"abv": 7,
"taste": [
"フルーティ",
"泡",
"柑橘"
],
"time": "いつでも",
"color": "#F6C04A",
"ings": [
[
"シャンパン（スパークリングワイン）",
"60ml",
"spark"
],
[
"オレンジジュース",
"60ml"
]
],
"steps": [
"フルートグラスにオレンジジュースを注ぐ。",
"冷えたシャンパンを静かに注ぐ。"
],
"desc": "黄色いミモザの花のような色。ブランチの定番。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-bellini",
"name": "ベリーニ",
"en": "Bellini",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "flute",
"strength": "弱め",
"abv": 7,
"taste": [
"フルーティ",
"泡",
"白桃"
],
"time": "いつでも",
"color": "#F6C8A2",
"ings": [
[
"スパークリングワイン（プロセッコ）",
"90ml",
"spark"
],
[
"白桃のピュレ",
"30ml"
]
],
"steps": [
"グラスに桃のピュレを入れ、冷えたスパークリングワインを少しずつ注いで混ぜる。"
],
"desc": "ヴェネツィアの「ハリーズ・バー」で生まれた、白桃のカクテル。画家ベリーニの絵の色にちなむ。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-aperolspritz",
"name": "アペロール・スプリッツ",
"en": "Aperol Spritz",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "wine",
"strength": "弱め",
"abv": 9,
"taste": [
"ほろ苦い",
"泡",
"オレンジ"
],
"time": "食前",
"color": "#F07A2A",
"ings": [
[
"プロセッコ（スパークリングワイン）",
"90ml",
"spark"
],
[
"アペロール",
"60ml"
],
[
"ソーダ",
"30ml"
],
[
"オレンジスライス",
"1枚"
]
],
"steps": [
"氷をたっぷり入れたワイングラスにプロセッコ、アペロール、ソーダの順に注ぐ。",
"軽く混ぜ、オレンジを飾る。"
],
"desc": "北イタリアの夕方の食前酒の定番。3:2:1の割合で覚えやすい。",
"tip": "",
"garnish": "オレンジスライス",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-spritzer",
"name": "スプリッツァー",
"en": "Spritzer",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "wine",
"strength": "弱め",
"abv": 6,
"taste": [
"爽快",
"ドライ"
],
"time": "いつでも",
"color": "#F2EFD8",
"ings": [
[
"白ワイン",
"60ml",
"white"
],
[
"ソーダ",
"60ml"
]
],
"steps": [
"氷を入れたグラスに白ワインを注ぎ、ソーダで割る。"
],
"desc": "ワインをソーダで割るだけの軽いカクテル。「はじける」という意味のドイツ語から。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-sangria",
"name": "サングリア",
"en": "Sangria",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "wine",
"strength": "弱め",
"abv": 8,
"taste": [
"フルーティ",
"甘い",
"スパイシー"
],
"time": "いつでも",
"color": "#8E1E30",
"ings": [
[
"赤ワイン",
"750ml（1本）",
"red"
],
[
"オレンジ・りんご・レモン",
"各1個"
],
[
"ブランデー",
"30ml",
"brandy"
],
[
"砂糖",
"大さじ2"
],
[
"シナモンスティック",
"1本"
]
],
"steps": [
"果物を薄切りにし、ピッチャーに砂糖とシナモンと一緒に入れる。",
"ワインとブランデーを注ぎ、冷蔵庫で半日以上漬け込む。",
"氷を入れたグラスに注ぐ。"
],
"desc": "スペインの、果物を漬け込んだワインのパンチ。手頃な赤ワインで作れて、パーティーにも。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-kalimotxo",
"name": "カリモーチョ",
"en": "Kalimotxo",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 6,
"taste": [
"甘い",
"爽快"
],
"time": "いつでも",
"color": "#4A1A20",
"ings": [
[
"赤ワイン",
"60ml",
"red"
],
[
"コーラ",
"60ml"
]
],
"steps": [
"氷を入れたグラスに赤ワインとコーラを同量注ぎ、混ぜる。"
],
"desc": "スペイン・バスク地方の若者の定番。赤ワインとコーラを半々で割るだけ。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-samurairock",
"name": "サムライ・ロック",
"en": "Samurai Rock",
"base": "日本酒・焼酎",
"method": "ビルド",
"glass": "rocks",
"strength": "中くらい",
"abv": 13,
"taste": [
"柑橘",
"ドライ",
"米の旨み"
],
"time": "いつでも",
"color": "#F2F0E4",
"ings": [
[
"日本酒",
"45ml",
"sake"
],
[
"ライムジュース",
"15ml"
]
],
"steps": [
"氷を入れたロックグラスに日本酒とライムを注ぎ、ステアする。"
],
"desc": "日本酒にライムを合わせるだけで、すっきりとした食中酒になる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-saketini",
"name": "サケティーニ",
"en": "Saketini",
"base": "日本酒・焼酎",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 25,
"taste": [
"ドライ",
"米の旨み",
"キリッと"
],
"time": "食前",
"color": "#F4F2E8",
"ings": [
[
"ドライ・ジン",
"40ml"
],
[
"日本酒（辛口）",
"20ml",
"sake"
],
[
"きゅうりのスライス",
"1枚"
]
],
"steps": [
"ミキシンググラスで材料をステアする。",
"冷やしたカクテルグラスに注ぎ、きゅうりを飾る。"
],
"desc": "マティーニのベルモットを日本酒に替えた、和風のマティーニ。",
"tip": "",
"garnish": "",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-lemonsour",
"name": "レモンサワー",
"en": "Lemon Sour",
"base": "日本酒・焼酎",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 7,
"taste": [
"爽快",
"柑橘",
"食中"
],
"time": "いつでも",
"color": "#F2EFC8",
"ings": [
[
"焼酎（甲類）",
"45ml"
],
[
"レモン",
"1/2個"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"グラスに氷を入れ、レモンを搾り入れる。",
"焼酎を注ぎ、ソーダで満たして軽く混ぜる。"
],
"desc": "居酒屋の定番。焼酎（チューハイ）のほか、ウイスキーや好きなお酒で作っても。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-cassisorange",
"name": "カシスオレンジ",
"en": "Cassis Orange",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 5,
"taste": [
"甘い",
"フルーティ"
],
"time": "いつでも",
"color": "#E0622F",
"ings": [
[
"クレーム・ド・カシス",
"30ml"
],
[
"オレンジジュース",
"適量"
]
],
"steps": [
"氷を入れたグラスにカシスを注ぎ、オレンジジュースで満たして混ぜる。"
],
"desc": "日本の居酒屋で最も親しまれているカクテルのひとつ。甘くて飲みやすい。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-fuzzynavel",
"name": "ファジーネーブル",
"en": "Fuzzy Navel",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 5,
"taste": [
"甘い",
"フルーティ",
"白桃"
],
"time": "いつでも",
"color": "#F5A645",
"ings": [
[
"ピーチ・リキュール",
"30ml"
],
[
"オレンジジュース",
"適量"
]
],
"steps": [
"氷を入れたグラスにピーチ・リキュールを注ぎ、オレンジジュースで満たして混ぜる。"
],
"desc": "「ぼやけた（ファジー）」桃と、ネーブルオレンジ。甘い香りのカクテル。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-camparisoda",
"name": "カンパリソーダ",
"en": "Campari Soda",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 6,
"taste": [
"ほろ苦い",
"爽快",
"オレンジ"
],
"time": "食前",
"color": "#D0302F",
"ings": [
[
"カンパリ",
"30〜45ml"
],
[
"ソーダ",
"適量"
],
[
"オレンジスライス",
"1枚"
]
],
"steps": [
"氷を入れたグラスにカンパリを注ぎ、ソーダで満たして軽く混ぜる。",
"オレンジを飾る。"
],
"desc": "イタリアの苦味のあるリキュール、カンパリをソーダで割るだけ。食前酒の定番。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-spumoni",
"name": "スプモーニ",
"en": "Spumoni",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 5,
"taste": [
"ほろ苦い",
"爽快",
"柑橘"
],
"time": "いつでも",
"color": "#F09A8A",
"ings": [
[
"カンパリ",
"30ml"
],
[
"グレープフルーツジュース",
"45ml"
],
[
"トニックウォーター",
"適量"
]
],
"steps": [
"氷を入れたグラスにカンパリとグレープフルーツジュースを注ぐ。",
"トニックウォーターで満たして軽く混ぜる。"
],
"desc": "「泡立つ」という意味。ほろ苦さとさわやかさのバランスがよい。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-kahluamilk",
"name": "カルーアミルク",
"en": "Kahlúa Milk",
"base": "リキュール",
"method": "ビルド",
"glass": "rocks",
"strength": "弱め",
"abv": 5,
"taste": [
"甘い",
"クリーミー",
"コーヒー"
],
"time": "食後",
"color": "#C9A47E",
"ings": [
[
"コーヒーリキュール（カルーア）",
"30ml"
],
[
"牛乳",
"90ml"
]
],
"steps": [
"氷を入れたグラスにリキュールを注ぎ、牛乳を加えて混ぜる。"
],
"desc": "コーヒー牛乳のような甘さで、お酒が苦手な人にも人気。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-grasshopper",
"name": "グラスホッパー",
"en": "Grasshopper",
"base": "リキュール",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 14,
"taste": [
"甘い",
"ミント",
"クリーミー"
],
"time": "食後",
"color": "#9DD08C",
"ings": [
[
"クレーム・ド・ミント（グリーン）",
"20ml"
],
[
"クレーム・ド・カカオ（ホワイト）",
"20ml"
],
[
"生クリーム",
"20ml"
]
],
"steps": [
"材料を氷としっかりシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "「バッタ」の名のとおりの淡い緑色。チョコミントのような、デザート感覚のカクテル。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-shirleytemple",
"name": "シャーリー・テンプル",
"en": "Shirley Temple",
"base": "ノンアルコール",
"method": "ビルド",
"glass": "highball",
"strength": "ノンアルコール",
"abv": 0,
"taste": [
"甘い",
"爽快"
],
"time": "いつでも",
"color": "#F4A0A0",
"ings": [
[
"ジンジャーエール",
"適量"
],
[
"グレナデンシロップ",
"15ml"
],
[
"レモン",
"1/8個"
]
],
"steps": [
"氷を入れたグラスにグレナデンシロップを入れる。",
"ジンジャーエールで満たし、レモンを搾って軽く混ぜる。"
],
"desc": "子役スターのシャーリー・テンプルのために作られたといわれる、ノンアルコールの定番。",
"tip": "",
"garnish": "レモン・チェリー",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-saratoga",
"name": "サラトガ・クーラー",
"en": "Saratoga Cooler",
"base": "ノンアルコール",
"method": "ビルド",
"glass": "highball",
"strength": "ノンアルコール",
"abv": 0,
"taste": [
"爽快",
"スパイシー",
"柑橘"
],
"time": "いつでも",
"color": "#F1EBC8",
"ings": [
[
"ジンジャーエール",
"適量"
],
[
"ライムジュース",
"20ml"
],
[
"シュガーシロップ",
"5ml"
]
],
"steps": [
"氷を入れたグラスにライムとシロップを入れる。",
"ジンジャーエールで満たして軽く混ぜる。"
],
"desc": "モスコミュールからウォッカを抜いたような、さっぱりしたノンアルコールカクテル。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-virginmojito",
"name": "ノンアルコール・モヒート",
"en": "Virgin Mojito",
"base": "ノンアルコール",
"method": "ビルド",
"glass": "highball",
"strength": "ノンアルコール",
"abv": 0,
"taste": [
"爽快",
"ミント",
"柑橘"
],
"time": "いつでも",
"color": "#DDEFC9",
"ings": [
[
"ミントの葉",
"10〜15枚"
],
[
"ライム",
"1/2個"
],
[
"砂糖",
"小さじ2"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"グラスにミントとライム、砂糖を入れて軽くつぶす。",
"クラッシュアイスを詰め、ソーダで満たして混ぜる。"
],
"desc": "ラムを抜いても、ミントとライムの爽快さはそのまま。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger",
"muddler"
]
},
{
"id": "k-gibson",
"name": "ギブソン",
"en": "Gibson",
"base": "ジン",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 34,
"taste": [
"ドライ",
"キリッと"
],
"time": "食前",
"color": "#F2F1E2",
"ings": [
[
"ドライ・ジン",
"50ml"
],
[
"ドライ・ベルモット",
"10ml"
],
[
"パールオニオン",
"1個"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたカクテルグラスに注ぎ、パールオニオンを沈める。"
],
"desc": "マティーニのオリーブを、小さな玉ねぎのピクルス（パールオニオン）に替えたもの。マティーニよりドライに仕上げることが多い。",
"tip": "",
"garnish": "パールオニオン",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-ginbuck",
"name": "ジンバック",
"en": "Gin Buck",
"base": "ジン",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"スパイシー",
"柑橘"
],
"time": "いつでも",
"color": "#F0EBCF",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"レモンジュース",
"15ml"
],
[
"ジンジャーエール",
"適量"
]
],
"steps": [
"氷を入れたグラスにジンとレモンジュースを入れる。",
"冷えたジンジャーエールで満たし、軽く混ぜる。"
],
"desc": "「バック」は、蒸留酒をジンジャーエールで割るカクテルの総称。ジンの香りと生姜の爽やかさで、食事にも合わせやすい。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-ginrickey",
"name": "ジンリッキー",
"en": "Gin Rickey",
"base": "ジン",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"ドライ",
"柑橘"
],
"time": "いつでも",
"color": "#EEF2EC",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"ライム",
"1/2個"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"グラスにライムを搾り入れ、皮ごと落とす。",
"氷とジンを入れ、ソーダで満たす。",
"マドラーでライムをつぶしながら、自分好みの酸味にして飲む。"
],
"desc": "甘みを加えない、すっきりとした辛口のロングカクテル。19世紀末、ワシントンのバーで生まれたといわれる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger",
"squeezer"
]
},
{
"id": "k-orangeblossom",
"name": "オレンジブロッサム",
"en": "Orange Blossom",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 22,
"taste": [
"フルーティ",
"柑橘",
"甘酸っぱい"
],
"time": "食前",
"color": "#F6C25A",
"ings": [
[
"ドライ・ジン",
"40ml"
],
[
"オレンジジュース",
"20ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "「オレンジの花」の名のとおり、ジンとオレンジの爽やかな組み合わせ。結婚式の食前酒として人気があったといわれる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-paradise",
"name": "パラダイス",
"en": "Paradise",
"base": "ジン",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 25,
"taste": [
"フルーティ",
"甘い",
"柑橘"
],
"time": "いつでも",
"color": "#F4B84E",
"ings": [
[
"ドライ・ジン",
"30ml"
],
[
"アプリコット・ブランデー",
"15ml"
],
[
"オレンジジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "ジンにあんずのリキュールとオレンジを合わせた、名前のとおり楽園のように甘く香り高いカクテル。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-bramble",
"name": "ブランブル",
"en": "Bramble",
"base": "ジン",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 18,
"taste": [
"フルーティ",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#A3304F",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"10ml"
],
[
"クレーム・ド・ミュール（ブラックベリー・リキュール）",
"15ml"
]
],
"steps": [
"ジン、レモンジュース、シロップをシェイクし、クラッシュアイスを詰めたグラスに注ぐ。",
"上からブラックベリーのリキュールを回しかけ、ゆっくり沈ませる。"
],
"desc": "1984年、ロンドンのバーテンダー、ディック・ブラッドセルが考案した現代のクラシック。「ブランブル」はブラックベリーの茂みのこと。",
"tip": "",
"garnish": "ブラックベリー・レモン",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-cloverclub",
"name": "クローバークラブ",
"en": "Clover Club",
"base": "ジン",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 18,
"taste": [
"フルーティ",
"甘酸っぱい",
"クリーミー"
],
"time": "食前",
"color": "#E7909A",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"レモンジュース",
"15ml"
],
[
"ラズベリーシロップ（またはグレナデン）",
"15ml"
],
[
"卵白",
"1/2個分"
]
],
"steps": [
"材料を氷を入れずに強くシェイクして泡立てる（ドライシェイク）。",
"氷を加えてもう一度シェイクし、クープグラスに注ぐ。"
],
"desc": "20世紀初め、フィラデルフィアの紳士の社交クラブの名から。淡いピンク色と、きめ細かい泡の口当たり。",
"tip": "卵白は新鮮なものを使う。",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-southside",
"name": "サウスサイド",
"en": "Southside",
"base": "ジン",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 22,
"taste": [
"ミント",
"爽快",
"柑橘"
],
"time": "いつでも",
"color": "#DDEBC6",
"ings": [
[
"ドライ・ジン",
"50ml"
],
[
"ライムジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"ミントの葉",
"6〜8枚"
]
],
"steps": [
"シェーカーでミントの葉を軽くつぶす。",
"残りの材料と氷を入れてシェイクし、茶こしでこしながらグラスに注ぐ。"
],
"desc": "ジンで作るモヒートのようなショートカクテル。禁酒法時代のシカゴの南側（サウスサイド）のギャングに愛されたという言い伝えがある。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer",
"muddler"
]
},
{
"id": "k-beesknees",
"name": "ビーズニーズ",
"en": "Bee's Knees",
"base": "ジン",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 22,
"taste": [
"甘酸っぱい",
"柑橘",
"甘い"
],
"time": "いつでも",
"color": "#F1D98A",
"ings": [
[
"ドライ・ジン",
"50ml"
],
[
"レモンジュース",
"20ml"
],
[
"はちみつシロップ（はちみつ2：湯1）",
"20ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたクープグラスに注ぐ。"
],
"desc": "禁酒法時代のアメリカで生まれたとされる。「ハチのひざ」は当時のスラングで「最高のもの」の意味。はちみつのやさしい甘さが、密造ジンの荒さを包んだといわれる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-corpsereviver",
"name": "コープスリバイバー No.2",
"en": "Corpse Reviver No.2",
"base": "ジン",
"method": "シェイク",
"glass": "coupe",
"strength": "強め",
"abv": 26,
"taste": [
"柑橘",
"ハーブ",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#F2E9C0",
"ings": [
[
"ドライ・ジン",
"20ml"
],
[
"ホワイトキュラソー",
"20ml"
],
[
"リレ・ブラン（またはドライ・ベルモット）",
"20ml"
],
[
"レモンジュース",
"20ml"
],
[
"アブサン",
"1滴"
]
],
"steps": [
"グラスをアブサンでさっとすすぐ。",
"残りの材料を氷とシェイクし、グラスに注ぐ。"
],
"desc": "「死者を生き返らせる」という名の、二日酔いの迎え酒として生まれたカクテル。1930年の『サヴォイ・カクテルブック』に載っている。4つの材料を同量ずつ。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-martinez",
"name": "マルティネス",
"en": "Martinez",
"base": "ジン",
"method": "ステア",
"glass": "coupe",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ハーブ",
"ほろ苦い"
],
"time": "食前",
"color": "#B7612E",
"ings": [
[
"ジン（オールド・トム）",
"45ml"
],
[
"スイート・ベルモット",
"30ml"
],
[
"マラスキーノ",
"5ml"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたグラスに注ぎ、オレンジの皮で香りをつける。"
],
"desc": "マティーニの祖先ともいわれる19世紀のカクテル。スイート・ベルモットとマラスキーノで、甘く丸みのある味わい。",
"tip": "やや甘口のオールド・トム・ジンを使うのが本来のレシピ。",
"garnish": "オレンジピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-hankypanky",
"name": "ハンキーパンキー",
"en": "Hanky Panky",
"base": "ジン",
"method": "ステア",
"glass": "coupe",
"strength": "強め",
"abv": 28,
"taste": [
"ハーブ",
"ほろ苦い",
"甘い"
],
"time": "食前",
"color": "#8E3A24",
"ings": [
[
"ドライ・ジン",
"45ml"
],
[
"スイート・ベルモット",
"45ml"
],
[
"フェルネット・ブランカ",
"2振り"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"グラスに注ぎ、オレンジの皮で香りをつける。"
],
"desc": "ロンドンのサヴォイ・ホテルの女性バーテンダー、エイダ・コールマンが20世紀初めに考案した。薬草リキュールのフェルネットがほろ苦く引き締める。",
"tip": "",
"garnish": "オレンジピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-capecodder",
"name": "ケープコッダー",
"en": "Cape Codder",
"base": "ウォッカ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"フルーティ",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#C7344A",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"クランベリージュース",
"適量"
]
],
"steps": [
"氷を入れたグラスにウォッカを注ぐ。",
"クランベリージュースで満たして軽く混ぜる。"
],
"desc": "クランベリーの産地、アメリカのケープコッドにちなんだ名前。甘酸っぱく、すっきりと飲める。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-seabreeze",
"name": "シーブリーズ",
"en": "Sea Breeze",
"base": "ウォッカ",
"method": "シェイク",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"爽快",
"フルーティ",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#F1A6A8",
"ings": [
[
"ウォッカ",
"30ml"
],
[
"クランベリージュース",
"60ml"
],
[
"グレープフルーツジュース",
"60ml"
]
],
"steps": [
"材料を氷と一緒に軽くシェイクする。",
"氷を入れたグラスに注ぐ。"
],
"desc": "「海のそよ風」の名のとおり、爽やかでほろ苦い、淡いピンク色のカクテル。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-whiterussian",
"name": "ホワイトルシアン",
"en": "White Russian",
"base": "ウォッカ",
"method": "ビルド",
"glass": "rocks",
"strength": "中くらい",
"abv": 18,
"taste": [
"甘い",
"クリーミー",
"コーヒー"
],
"time": "食後",
"color": "#D9C3A8",
"ings": [
[
"ウォッカ",
"40ml"
],
[
"コーヒーリキュール",
"20ml"
],
[
"生クリーム",
"適量"
]
],
"steps": [
"氷を入れたグラスにウォッカとコーヒーリキュールを入れて混ぜる。",
"生クリームを静かに浮かべる。"
],
"desc": "ブラック・ルシアンに生クリームを浮かべた、デザートのようなカクテル。映画『ビッグ・リボウスキ』の主人公の好物としても知られる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-bluelagoon",
"name": "ブルーラグーン",
"en": "Blue Lagoon",
"base": "ウォッカ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"柑橘",
"爽快",
"甘い"
],
"time": "いつでも",
"color": "#3A9BD9",
"ings": [
[
"ウォッカ",
"30ml"
],
[
"ブルー・キュラソー",
"15ml"
],
[
"レモンジュース",
"15ml"
],
[
"ソーダ（またはレモネード）",
"適量"
]
],
"steps": [
"氷を入れたグラスにウォッカ、ブルー・キュラソー、レモンジュースを入れる。",
"ソーダで満たして軽く混ぜる。"
],
"desc": "「青い入り江」の名のとおり、南国の海のような鮮やかな青色。パリのハリーズ・ニューヨーク・バーで生まれたといわれる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-balalaika",
"name": "バラライカ",
"en": "Balalaika",
"base": "ウォッカ",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 28,
"taste": [
"柑橘",
"甘酸っぱい",
"ドライ"
],
"time": "いつでも",
"color": "#F2EFDF",
"ings": [
[
"ウォッカ",
"30ml"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "ロシアの弦楽器の名を持つ、サイドカーのウォッカ版。すっきりとした柑橘の香り。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-kamikaze",
"name": "カミカゼ",
"en": "Kamikaze",
"base": "ウォッカ",
"method": "シェイク",
"glass": "rocks",
"strength": "強め",
"abv": 25,
"taste": [
"柑橘",
"ドライ",
"爽快"
],
"time": "いつでも",
"color": "#E9F0D0",
"ings": [
[
"ウォッカ",
"30ml"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"ライムジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"氷を入れたロックグラスに注ぐ。"
],
"desc": "キレのある鋭い飲み口から名づけられたといわれる。バラライカのレモンをライムに替えた、より辛口な一杯。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-godmother",
"name": "ゴッドマザー",
"en": "Godmother",
"base": "ウォッカ",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ナッツ"
],
"time": "食後",
"color": "#F1E4C6",
"ings": [
[
"ウォッカ",
"45ml"
],
[
"アマレット",
"15ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、ステアする。"
],
"desc": "ゴッドファーザーのウイスキーをウォッカに替えた、杏仁のような甘い香りのカクテル。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-yukiguni",
"name": "雪国",
"en": "Yukiguni",
"base": "ウォッカ",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 25,
"taste": [
"甘酸っぱい",
"柑橘",
"爽快"
],
"time": "いつでも",
"color": "#EAF2D8",
"ings": [
[
"ウォッカ",
"40ml"
],
[
"ホワイトキュラソー",
"10ml"
],
[
"ライム・コーディアル",
"10ml"
],
[
"砂糖（グラスの縁に）",
"適量"
],
[
"ミントチェリー",
"1個"
]
],
"steps": [
"カクテルグラスの縁をレモンで湿らせ、砂糖をつけてスノースタイルにする。",
"材料を氷とシェイクしてグラスに注ぎ、緑のミントチェリーを沈める。"
],
"desc": "1958年、山形県酒田市のバーテンダー、井山計一さんが考案した日本生まれのカクテル。砂糖の縁は雪景色、沈んだ緑のチェリーは雪の下の新芽を表すといわれる。",
"tip": "",
"garnish": "ミントチェリー",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-lemondrop",
"name": "レモンドロップ",
"en": "Lemon Drop",
"base": "ウォッカ",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 22,
"taste": [
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#F7EBA0",
"ings": [
[
"ウォッカ（シトロン）",
"45ml"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"10ml"
],
[
"砂糖（グラスの縁に）",
"適量"
]
],
"steps": [
"グラスの縁に砂糖をつける。",
"材料を氷とシェイクしてグラスに注ぐ。"
],
"desc": "レモンキャンディのような甘酸っぱさ。1970年代のサンフランシスコで生まれたといわれる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-xyz",
"name": "XYZ",
"en": "X.Y.Z.",
"base": "ラム",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 26,
"taste": [
"柑橘",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#F2EAD0",
"ings": [
[
"ホワイトラム",
"30ml",
"rum_w"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "アルファベットの最後の3文字から「これ以上ない、究極のカクテル」の意味を持つといわれる。サイドカーのラム版。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-bacardi",
"name": "バカルディ・カクテル",
"en": "Bacardi Cocktail",
"base": "ラム",
"method": "シェイク",
"glass": "cocktail",
"strength": "中くらい",
"abv": 24,
"taste": [
"甘酸っぱい",
"柑橘",
"フルーティ"
],
"time": "いつでも",
"color": "#F0A3A7",
"ings": [
[
"ホワイトラム（バカルディ）",
"45ml",
"rum_w"
],
[
"ライムジュース",
"15ml"
],
[
"グレナデンシロップ",
"1tsp"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "1936年、ニューヨークの裁判所で「バカルディ社のラムを使わなければバカルディ・カクテルとは呼べない」という判決が出たことで知られる。淡いピンク色のダイキリ。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-elpresidente",
"name": "エル・プレシデンテ",
"en": "El Presidente",
"base": "ラム",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 28,
"taste": [
"甘い",
"フルーティ",
"柑橘"
],
"time": "食前",
"color": "#E39A6A",
"ings": [
[
"ホワイトラム",
"40ml",
"rum_w"
],
[
"ドライ・ベルモット（またはブラン・ベルモット）",
"20ml"
],
[
"ホワイトキュラソー",
"5ml"
],
[
"グレナデンシロップ",
"1tsp"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたグラスに注ぎ、オレンジの皮で香りをつける。"
],
"desc": "1920年代のキューバで生まれ、当時の大統領の名を冠したといわれる。禁酒法時代、アメリカ人がハバナで楽しんだクラシック。",
"tip": "",
"garnish": "オレンジピール",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger",
"peeler"
]
},
{
"id": "k-junglebird",
"name": "ジャングルバード",
"en": "Jungle Bird",
"base": "ラム",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 16,
"taste": [
"ほろ苦い",
"トロピカル",
"フルーティ"
],
"time": "いつでも",
"color": "#C25A3A",
"ings": [
[
"ダークラム",
"45ml",
"rum_d"
],
[
"カンパリ",
"20ml"
],
[
"パイナップルジュース",
"45ml"
],
[
"ライムジュース",
"15ml"
],
[
"シュガーシロップ",
"10ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"氷を入れたロックグラスに注ぎ、パイナップルを飾る。"
],
"desc": "1970年代、マレーシアのクアラルンプールのホテルで生まれたトロピカルカクテル。カンパリのほろ苦さが、南国の甘さを引き締める。",
"tip": "",
"garnish": "パイナップル",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-bluehawaii",
"name": "ブルーハワイ",
"en": "Blue Hawaii",
"base": "ラム",
"method": "シェイク",
"glass": "hurricane",
"strength": "弱め",
"abv": 12,
"taste": [
"トロピカル",
"甘い",
"フルーティ"
],
"time": "いつでも",
"color": "#3AA6D9",
"ings": [
[
"ホワイトラム",
"30ml",
"rum_w"
],
[
"ブルー・キュラソー",
"15ml"
],
[
"パイナップルジュース",
"30ml"
],
[
"レモンジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"クラッシュアイスを詰めたグラスに注ぎ、パイナップルやチェリーで飾る。"
],
"desc": "ハワイのホテルのバーテンダーが考案したといわれる、青い海を思わせるトロピカルカクテル。",
"tip": "",
"garnish": "パイナップル・チェリー",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-planterspunch",
"name": "プランターズ・パンチ",
"en": "Planter's Punch",
"base": "ラム",
"method": "シェイク",
"glass": "collins",
"strength": "弱め",
"abv": 14,
"taste": [
"トロピカル",
"フルーティ",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#D9772E",
"ings": [
[
"ジャマイカのラム",
"45ml",
"rum_j"
],
[
"ライムジュース",
"15ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"グレナデンシロップ",
"1tsp"
],
[
"ソーダ",
"適量"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
]
],
"steps": [
"ラム、ライム、シロップ類をシェイクし、氷を入れたグラスに注ぐ。",
"ソーダで満たし、ビターズを数滴落とす。"
],
"desc": "ジャマイカの農園主（プランター）が飲んでいたというラムのパンチ。「酸っぱいもの1、甘いもの2、強いもの3、弱いもの4」という覚え歌がある。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-caipirinha",
"name": "カイピリーニャ",
"en": "Caipirinha",
"base": "ラム",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 22,
"taste": [
"柑橘",
"甘酸っぱい",
"爽快"
],
"time": "いつでも",
"color": "#E1EEC4",
"ings": [
[
"カシャーサ（サトウキビの蒸留酒）",
"45ml"
],
[
"ライム",
"1/2個"
],
[
"砂糖",
"小さじ2"
]
],
"steps": [
"ライムを小さく切ってグラスに入れ、砂糖を加えてペストルでつぶす。",
"クラッシュアイスを詰め、カシャーサを注いでよく混ぜる。"
],
"desc": "ブラジルの国民的カクテル。サトウキビの絞り汁を直接発酵・蒸留したカシャーサで作る。ラムで作ると「カイピリシマ」、ウォッカなら「カイピロスカ」。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger",
"muddler"
]
},
{
"id": "k-hotbutteredrum",
"name": "ホット・バタード・ラム",
"en": "Hot Buttered Rum",
"base": "ラム",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"スパイシー",
"クリーミー"
],
"time": "食後",
"color": "#B87A3E",
"ings": [
[
"ダークラム",
"45ml",
"rum_d"
],
[
"角砂糖",
"1個"
],
[
"バター",
"小さじ1"
],
[
"お湯",
"適量"
],
[
"シナモンスティック",
"1本"
]
],
"steps": [
"温めたマグに角砂糖を入れ、少量のお湯で溶かす。",
"ラムを注いでお湯で満たし、バターを浮かべてシナモンスティックを添える。"
],
"desc": "寒い冬に体を温める、植民地時代のアメリカから伝わるホットカクテル。溶けたバターのコクと、ラムの甘い香り。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-tommys",
"name": "トミーズ・マルガリータ",
"en": "Tommy's Margarita",
"base": "テキーラ",
"method": "シェイク",
"glass": "rocks",
"strength": "強め",
"abv": 24,
"taste": [
"柑橘",
"甘酸っぱい",
"ドライ"
],
"time": "いつでも",
"color": "#E7EDC7",
"ings": [
[
"テキーラ（ブランコ・100%アガベ）",
"50ml",
"teq_b"
],
[
"ライムジュース",
"25ml"
],
[
"アガベシロップ",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"氷を入れたロックグラスに注ぐ。"
],
"desc": "1990年代、サンフランシスコのメキシコ料理店「トミーズ」で生まれた。オレンジのリキュールの代わりにアガベシロップを使い、テキーラの香りをまっすぐ味わう。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-frozenmargarita",
"name": "フローズン・マルガリータ",
"en": "Frozen Margarita",
"base": "テキーラ",
"method": "ブレンド",
"glass": "coupe",
"strength": "中くらい",
"abv": 12,
"taste": [
"柑橘",
"甘酸っぱい",
"爽快"
],
"time": "いつでも",
"color": "#E4F0C9",
"ings": [
[
"テキーラ",
"30ml",
"teq_b"
],
[
"ホワイトキュラソー",
"15ml"
],
[
"ライムジュース",
"15ml"
],
[
"シュガーシロップ",
"10ml"
],
[
"クラッシュアイス",
"1カップ"
]
],
"steps": [
"材料をすべてブレンダーに入れ、なめらかなシャーベット状になるまで回す。",
"縁に塩をつけたグラスに盛る。"
],
"desc": "マルガリータをシャーベット状にした、夏の定番。1971年、ダラスでフローズン・マルガリータ・マシンが発明され、大流行した。",
"tip": "",
"garnish": "",
"tools": [
"blender",
"jigger"
]
},
{
"id": "k-eldiablo",
"name": "エル・ディアブロ",
"en": "El Diablo",
"base": "テキーラ",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"フルーティ",
"スパイシー",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#9E2A4A",
"ings": [
[
"テキーラ（レポサド）",
"40ml",
"teq_r"
],
[
"ライムジュース",
"15ml"
],
[
"クレーム・ド・カシス",
"15ml"
],
[
"ジンジャービア",
"適量"
]
],
"steps": [
"氷を入れたグラスにテキーラ、ライム、ジンジャービアを注ぐ。",
"クレーム・ド・カシスを静かに沈める。"
],
"desc": "「悪魔」の名を持つ、赤紫色のロングカクテル。カシスの甘さと生姜のスパイシーさがテキーラに合う。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-matador",
"name": "マタドール",
"en": "Matador",
"base": "テキーラ",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 14,
"taste": [
"トロピカル",
"柑橘",
"フルーティ"
],
"time": "いつでも",
"color": "#F2D77A",
"ings": [
[
"テキーラ",
"30ml",
"teq_b"
],
[
"パイナップルジュース",
"45ml"
],
[
"ライムジュース",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"氷を入れたグラスに注ぐ。"
],
"desc": "「闘牛士」の名を持つ、パイナップルの甘酸っぱさが爽やかなテキーラのカクテル。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-bravebull",
"name": "ブレイブ・ブル",
"en": "Brave Bull",
"base": "テキーラ",
"method": "ビルド",
"glass": "rocks",
"strength": "強め",
"abv": 28,
"taste": [
"甘い",
"コーヒー"
],
"time": "食後",
"color": "#3A2016",
"ings": [
[
"テキーラ",
"40ml",
"teq_b"
],
[
"コーヒーリキュール",
"20ml"
]
],
"steps": [
"氷を入れたロックグラスに材料を注ぎ、ステアする。"
],
"desc": "「勇敢な雄牛」。ブラック・ルシアンのウォッカをテキーラに替えたもの。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-robroy",
"name": "ロブ・ロイ",
"en": "Rob Roy",
"base": "ウイスキー",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ハーブ",
"スモーキー"
],
"time": "食前",
"color": "#A04A26",
"ings": [
[
"スコッチ・ウイスキー",
"45ml",
"scotch"
],
[
"スイート・ベルモット",
"15ml"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたカクテルグラスに注ぎ、チェリーを飾る。"
],
"desc": "マンハッタンのウイスキーをスコッチに替えたもの。スコットランドの義賊ロブ・ロイの名から。",
"tip": "",
"garnish": "マラスキーノチェリー",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-bloodandsand",
"name": "ブラッド・アンド・サンド",
"en": "Blood and Sand",
"base": "ウイスキー",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 20,
"taste": [
"フルーティ",
"甘い",
"柑橘"
],
"time": "いつでも",
"color": "#C2512E",
"ings": [
[
"スコッチ・ウイスキー",
"25ml",
"scotch"
],
[
"チェリーブランデー",
"20ml"
],
[
"スイート・ベルモット",
"20ml"
],
[
"オレンジジュース",
"25ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたクープグラスに注ぐ。"
],
"desc": "1922年の闘牛映画『血と砂』にちなんで生まれた。スコッチを使った数少ないクラシックで、さくらんぼとオレンジの甘い香り。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-johncollins",
"name": "ジョン・コリンズ",
"en": "John Collins",
"base": "ウイスキー",
"method": "ビルド",
"glass": "collins",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"甘酸っぱい",
"柑橘"
],
"time": "いつでも",
"color": "#F0DFA8",
"ings": [
[
"バーボン",
"45ml",
"bourbon"
],
[
"レモンジュース",
"20ml"
],
[
"シュガーシロップ",
"15ml"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"氷を入れたグラスにバーボン、レモン、シロップを入れて混ぜる。",
"ソーダで満たして軽く混ぜる。"
],
"desc": "トム・コリンズのジンをウイスキーに替えたロングカクテル。バーボンの甘い香りとレモンの爽やかさ。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-hottoddy",
"name": "ホット・トディ",
"en": "Hot Toddy",
"base": "ウイスキー",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"スパイシー",
"柑橘"
],
"time": "食後",
"color": "#C98A3E",
"ings": [
[
"ウイスキー",
"45ml",
"scotch"
],
[
"はちみつ",
"小さじ2"
],
[
"レモンジュース",
"10ml"
],
[
"お湯",
"適量"
],
[
"クローブ・シナモン",
"お好みで"
]
],
"steps": [
"温めたマグにはちみつとレモンを入れる。",
"ウイスキーを注ぎ、お湯で満たして混ぜる。"
],
"desc": "スコットランドやアイルランドで、寒い夜や風邪気味のときに飲まれてきたホットカクテル。はちみつとレモンのやさしい味わい。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-oldpal",
"name": "オールド・パル",
"en": "Old Pal",
"base": "ウイスキー",
"method": "ステア",
"glass": "cocktail",
"strength": "強め",
"abv": 28,
"taste": [
"ほろ苦い",
"ドライ",
"ハーブ"
],
"time": "食前",
"color": "#B53A2A",
"ings": [
[
"ライ・ウイスキー",
"30ml",
"rye"
],
[
"ドライ・ベルモット",
"30ml"
],
[
"カンパリ",
"30ml"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "「古い仲間」。ブールヴァルディエの兄弟分で、ドライ・ベルモットを使うぶん、よりキリッと辛口。",
"tip": "",
"garnish": "",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-paperplane",
"name": "ペーパー・プレーン",
"en": "Paper Plane",
"base": "ウイスキー",
"method": "シェイク",
"glass": "coupe",
"strength": "中くらい",
"abv": 20,
"taste": [
"ほろ苦い",
"柑橘",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#E07E3A",
"ings": [
[
"バーボン",
"22.5ml",
"bourbon"
],
[
"アペロール",
"22.5ml"
],
[
"アマーロ（ノニーノ）",
"22.5ml"
],
[
"レモンジュース",
"22.5ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたクープグラスに注ぐ。"
],
"desc": "2007年、ニューヨークのバーテンダー、サム・ロスが考案した現代のクラシック。4つの材料を同量ずつ合わせる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-goldrush",
"name": "ゴールド・ラッシュ",
"en": "Gold Rush",
"base": "ウイスキー",
"method": "シェイク",
"glass": "rocks",
"strength": "中くらい",
"abv": 22,
"taste": [
"甘酸っぱい",
"柑橘",
"甘い"
],
"time": "いつでも",
"color": "#E8B44E",
"ings": [
[
"バーボン",
"50ml",
"bourbon"
],
[
"レモンジュース",
"20ml"
],
[
"はちみつシロップ（はちみつ2：湯1）",
"20ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"大きな氷を入れたロックグラスに注ぐ。"
],
"desc": "2000年代のニューヨークで生まれた、ウイスキーサワーのシロップをはちみつに替えたもの。ペニシリンの原型にもなった。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-mizuwari",
"name": "水割り",
"en": "Mizuwari",
"base": "ウイスキー",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 12,
"taste": [
"ドライ",
"食中"
],
"time": "いつでも",
"color": "#E9CF8A",
"ings": [
[
"ウイスキー",
"30〜45ml",
"jpwhisky"
],
[
"水（よく冷やしたもの）",
"ウイスキーの2〜2.5倍"
]
],
"steps": [
"グラスに氷を詰め、ステアしてグラスを冷やす。",
"ウイスキーを注いで13回半ステアし、氷を足して水を注ぎ、さらに3回半ステアする。"
],
"desc": "日本で広まった、食事と一緒に楽しむウイスキーの飲み方。ステアの回数にこだわるバーテンダーもいる、シンプルで奥の深い一杯。",
"tip": "水も氷もよく冷やしておくと、薄まりすぎずにおいしい。",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-whiskyfloat",
"name": "ウイスキー・フロート",
"en": "Whisky Float",
"base": "ウイスキー",
"method": "ビルド",
"glass": "highball",
"strength": "中くらい",
"abv": 15,
"taste": [
"ドライ",
"爽快"
],
"time": "いつでも",
"color": "#E6D49A",
"ings": [
[
"ウイスキー",
"45ml",
"jpwhisky"
],
[
"ミネラルウォーター",
"90ml"
]
],
"steps": [
"氷を入れたグラスに水を注ぐ。",
"バースプーンの背を伝わせて、ウイスキーを静かに浮かべる。"
],
"desc": "水の上にウイスキーが浮かんだ2層のカクテル。最初はストレートに近い強さで、飲み進めるうちに水割りへと味わいが変わる。",
"tip": "比重の違いで層になる。ゆっくり注ぐのがコツ。",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-betweenthesheets",
"name": "ビトウィーン・ザ・シーツ",
"en": "Between the Sheets",
"base": "ブランデー",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 28,
"taste": [
"柑橘",
"甘酸っぱい"
],
"time": "食後",
"color": "#E9C27A",
"ings": [
[
"ブランデー",
"20ml",
"brandy"
],
[
"ホワイトラム",
"20ml",
"rum_w"
],
[
"ホワイトキュラソー",
"20ml"
],
[
"レモンジュース",
"1tsp"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "サイドカーにラムを加えた、強めのカクテル。名前は「ベッドに入って」という意味で、寝酒向きといわれる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-stinger",
"name": "スティンガー",
"en": "Stinger",
"base": "ブランデー",
"method": "シェイク",
"glass": "cocktail",
"strength": "強め",
"abv": 30,
"taste": [
"ミント",
"甘い",
"爽快"
],
"time": "食後",
"color": "#D9E8C7",
"ings": [
[
"ブランデー",
"45ml",
"brandy"
],
[
"クレーム・ド・ミント（ホワイト）",
"15ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "「針」の名のとおり、ミントの刺すような清涼感。ブランデーの甘い香りと合わさった、食後の一杯。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-horsesneck",
"name": "ホーセズ・ネック",
"en": "Horse's Neck",
"base": "ブランデー",
"method": "ビルド",
"glass": "collins",
"strength": "弱め",
"abv": 12,
"taste": [
"爽快",
"スパイシー",
"柑橘"
],
"time": "いつでも",
"color": "#E8C27A",
"ings": [
[
"ブランデー",
"45ml",
"brandy"
],
[
"ジンジャーエール",
"適量"
],
[
"レモンの皮（らせん状）",
"1個分"
]
],
"steps": [
"レモンの皮をらせん状にむき、端をグラスの縁にかけて中に垂らす。",
"氷を入れてブランデーを注ぎ、ジンジャーエールで満たす。"
],
"desc": "長くむいたレモンの皮を馬の首に見立てた名前。見た目も楽しいロングカクテル。",
"tip": "",
"garnish": "レモンピール（らせん）",
"tools": [
"barspoon",
"jigger",
"peeler"
]
},
{
"id": "k-eggnog",
"name": "ブランデー・エッグノッグ",
"en": "Brandy Eggnog",
"base": "ブランデー",
"method": "シェイク",
"glass": "highball",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"クリーミー",
"スパイシー"
],
"time": "食後",
"color": "#F2E3B8",
"ings": [
[
"ブランデー",
"30ml",
"brandy"
],
[
"ダークラム",
"15ml",
"rum_d"
],
[
"卵",
"1個"
],
[
"シュガーシロップ",
"15ml"
],
[
"牛乳",
"適量"
],
[
"ナツメグ",
"少々"
]
],
"steps": [
"牛乳以外の材料を氷としっかりシェイクする。",
"グラスに注いで牛乳で満たし、ナツメグをふる。"
],
"desc": "アメリカやイギリスでクリスマスに飲まれる、卵と牛乳のやさしいカクテル。温めて飲むこともある。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-vieuxcarre",
"name": "ヴュー・カレ",
"en": "Vieux Carré",
"base": "ブランデー",
"method": "ステア",
"glass": "rocks",
"strength": "強め",
"abv": 30,
"taste": [
"甘い",
"ハーブ",
"スパイシー"
],
"time": "食後",
"color": "#9C4A26",
"ings": [
[
"ライ・ウイスキー",
"25ml",
"rye"
],
[
"ブランデー（コニャック）",
"25ml",
"cognac"
],
[
"スイート・ベルモット",
"25ml"
],
[
"ベネディクティン",
"1tsp"
],
[
"アンゴスチュラ・ビターズ",
"1振り"
],
[
"ペイショーズ・ビターズ",
"1振り"
]
],
"steps": [
"ミキシンググラスに氷と材料を入れてステアする。",
"氷を入れたロックグラスに注ぐ。"
],
"desc": "1930年代、ニューオーリンズのホテル・モンテレオーネで生まれた。名前はフランス語で「古い区画（フレンチ・クォーター）」の意味。複雑で深い味わい。",
"tip": "",
"garnish": "",
"tools": [
"mixingglass",
"barspoon",
"strainer",
"jigger"
]
},
{
"id": "k-rossini",
"name": "ロッシーニ",
"en": "Rossini",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "flute",
"strength": "弱め",
"abv": 9,
"taste": [
"フルーティ",
"泡",
"甘い"
],
"time": "食前",
"color": "#E8707A",
"ings": [
[
"スパークリングワイン（プロセッコ）",
"90ml",
"spark"
],
[
"いちごのピュレ",
"30ml"
]
],
"steps": [
"フルートグラスにいちごのピュレを入れる。",
"冷えたスパークリングワインを静かに注ぎ、軽く混ぜる。"
],
"desc": "ベリーニの桃をいちごに替えた、華やかなピンク色のカクテル。イタリアの作曲家ロッシーニの名から。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-kitty",
"name": "キティ",
"en": "Kitty",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "wine",
"strength": "弱め",
"abv": 6,
"taste": [
"フルーティ",
"爽快",
"甘い"
],
"time": "いつでも",
"color": "#B0404A",
"ings": [
[
"赤ワイン",
"60ml",
"red"
],
[
"ジンジャーエール",
"60ml"
]
],
"steps": [
"氷を入れたグラスに赤ワインを注ぐ。",
"ジンジャーエールで満たして軽く混ぜる。"
],
"desc": "「子猫」の名のとおり、やさしく飲みやすい赤ワインのカクテル。ワインが苦手な人にも。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-mulledwine",
"name": "ホットワイン（グリューワイン）",
"en": "Mulled Wine",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"甘い",
"スパイシー",
"フルーティ"
],
"time": "食後",
"color": "#7A2032",
"ings": [
[
"赤ワイン",
"750ml（1本）",
"red"
],
[
"オレンジ",
"1個"
],
[
"砂糖",
"大さじ3"
],
[
"シナモンスティック",
"1本"
],
[
"クローブ",
"3〜4粒"
],
[
"スターアニス（八角）",
"1個"
]
],
"steps": [
"鍋に材料を入れ、沸騰させないように弱火で10分ほど温める。",
"カップに注ぎ、オレンジのスライスを添える。"
],
"desc": "ドイツ語で「グリューヴァイン」。ヨーロッパのクリスマスマーケットの屋台でおなじみの、スパイスで温めた赤ワイン。",
"tip": "沸騰させるとアルコールと香りが飛ぶので、弱火で。",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-sbagliato",
"name": "ネグローニ・スバリアート",
"en": "Negroni Sbagliato",
"base": "ワイン・シャンパン",
"method": "ビルド",
"glass": "rocks",
"strength": "弱め",
"abv": 12,
"taste": [
"ほろ苦い",
"泡",
"ハーブ"
],
"time": "食前",
"color": "#C2302E",
"ings": [
[
"カンパリ",
"30ml"
],
[
"スイート・ベルモット",
"30ml"
],
[
"スパークリングワイン（プロセッコ）",
"30ml",
"spark"
]
],
"steps": [
"氷を入れたグラスにカンパリとベルモットを入れる。",
"スパークリングワインで満たし、軽く混ぜる。"
],
"desc": "「間違えたネグローニ」。ミラノのバーで、ジンの代わりにうっかりスパークリングワインを入れたのが始まりといわれる。軽やかで飲みやすい。",
"tip": "",
"garnish": "オレンジスライス",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-oolonghai",
"name": "ウーロンハイ",
"en": "Oolong-hai",
"base": "日本酒・焼酎",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 8,
"taste": [
"ドライ",
"食中",
"爽快"
],
"time": "いつでも",
"color": "#B98A4A",
"ings": [
[
"焼酎（甲類）",
"45ml"
],
[
"ウーロン茶",
"適量"
]
],
"steps": [
"氷を入れたグラスに焼酎を注ぐ。",
"冷えたウーロン茶で満たして軽く混ぜる。"
],
"desc": "日本の居酒屋の定番。ウーロン茶のすっきりとした渋みで、脂っこい料理にもよく合う。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-oyuwari",
"name": "焼酎のお湯割り",
"en": "Shochu Oyuwari",
"base": "日本酒・焼酎",
"method": "ビルド",
"glass": "mug",
"strength": "弱め",
"abv": 10,
"taste": [
"食中",
"スパイシー"
],
"time": "いつでも",
"color": "#F2EBDA",
"ings": [
[
"本格焼酎（芋・麦など）",
"60ml"
],
[
"お湯（70〜80℃）",
"40ml"
]
],
"steps": [
"器にお湯を先に注ぐ。",
"焼酎を後から静かに注ぐ（混ぜなくても対流で混ざる）。"
],
"desc": "焼酎6：お湯4の「ロクヨン」が定番の割合。お湯を先に入れると、焼酎の香りがふわりと立ち、まろやかになる。芋焼酎の香りがいちばん引き立つ飲み方。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-americano",
"name": "アメリカーノ",
"en": "Americano",
"base": "リキュール",
"method": "ビルド",
"glass": "rocks",
"strength": "弱め",
"abv": 10,
"taste": [
"ほろ苦い",
"爽快",
"ハーブ"
],
"time": "食前",
"color": "#C0362E",
"ings": [
[
"カンパリ",
"30ml"
],
[
"スイート・ベルモット",
"30ml"
],
[
"ソーダ",
"適量"
]
],
"steps": [
"氷を入れたグラスにカンパリとベルモットを入れる。",
"ソーダで満たして軽く混ぜ、オレンジのスライスを添える。"
],
"desc": "ネグローニの元になったカクテル。19世紀のミラノで生まれ、イタリアを訪れたアメリカ人に人気だったことから名づけられたといわれる。",
"tip": "",
"garnish": "オレンジスライス",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-campariorange",
"name": "カンパリオレンジ",
"en": "Campari Orange",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 8,
"taste": [
"ほろ苦い",
"フルーティ",
"柑橘"
],
"time": "いつでも",
"color": "#E8642E",
"ings": [
[
"カンパリ",
"45ml"
],
[
"オレンジジュース",
"適量"
]
],
"steps": [
"氷を入れたグラスにカンパリを注ぐ。",
"オレンジジュースで満たして軽く混ぜる。"
],
"desc": "カンパリのほろ苦さとオレンジの甘さ。鮮やかな夕焼け色で、カンパリ入門にもぴったり。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-reggaepunch",
"name": "レゲエパンチ（ピーチウーロン）",
"en": "Reggae Punch",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 6,
"taste": [
"甘い",
"フルーティ",
"食中"
],
"time": "いつでも",
"color": "#D49A5A",
"ings": [
[
"ピーチ・リキュール",
"30ml"
],
[
"ウーロン茶",
"適量"
]
],
"steps": [
"氷を入れたグラスにピーチ・リキュールを注ぐ。",
"ウーロン茶で満たして軽く混ぜる。"
],
"desc": "日本の居酒屋で生まれた、ピーチのリキュールをウーロン茶で割ったカクテル。甘いのにすっきり飲める。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-chinablue",
"name": "チャイナ・ブルー",
"en": "China Blue",
"base": "リキュール",
"method": "ビルド",
"glass": "highball",
"strength": "弱め",
"abv": 6,
"taste": [
"フルーティ",
"甘い",
"爽快"
],
"time": "いつでも",
"color": "#4AA8D6",
"ings": [
[
"ライチ・リキュール",
"30ml"
],
[
"ブルー・キュラソー",
"10ml"
],
[
"グレープフルーツジュース",
"適量"
]
],
"steps": [
"氷を入れたグラスにライチ・リキュールとグレープフルーツジュースを入れる。",
"ブルー・キュラソーを静かに沈め、グラデーションにする。"
],
"desc": "1980年代の日本で人気になった、ライチの甘い香りの青いカクテル。中国の青磁を思わせる色から名づけられたといわれる。",
"tip": "",
"garnish": "",
"tools": [
"barspoon",
"jigger"
]
},
{
"id": "k-amarettosour",
"name": "アマレット・サワー",
"en": "Amaretto Sour",
"base": "リキュール",
"method": "シェイク",
"glass": "rocks",
"strength": "弱め",
"abv": 12,
"taste": [
"甘酸っぱい",
"ナッツ",
"クリーミー"
],
"time": "いつでも",
"color": "#E6B45A",
"ings": [
[
"アマレット",
"45ml"
],
[
"レモンジュース",
"25ml"
],
[
"シュガーシロップ",
"5ml"
],
[
"卵白",
"1/2個分（お好みで）"
]
],
"steps": [
"材料を氷を入れずにシェイクして泡立て、氷を加えてもう一度シェイクする。",
"氷を入れたロックグラスに注ぐ。"
],
"desc": "杏仁のような甘い香りのアマレットを、レモンで甘酸っぱく仕上げたサワー。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-cinderella",
"name": "シンデレラ",
"en": "Cinderella",
"base": "ノンアルコール",
"method": "シェイク",
"glass": "cocktail",
"strength": "ノンアルコール",
"abv": 0,
"taste": [
"フルーティ",
"柑橘",
"甘酸っぱい"
],
"time": "いつでも",
"color": "#F4BE4E",
"ings": [
[
"オレンジジュース",
"30ml"
],
[
"パイナップルジュース",
"30ml"
],
[
"レモンジュース",
"30ml"
]
],
"steps": [
"材料を氷と一緒にシェイクする。",
"冷やしたカクテルグラスに注ぐ。"
],
"desc": "3つの果汁を同量ずつシェイクする、ノンアルコールカクテルの定番。お酒が飲めない人も、カクテルグラスで乾杯を楽しめる。",
"tip": "",
"garnish": "",
"tools": [
"shaker",
"jigger",
"squeezer"
]
},
{
"id": "k-virginmary",
"name": "ヴァージン・メアリー",
"en": "Virgin Mary",
"base": "ノンアルコール",
"method": "ビルド",
"glass": "highball",
"strength": "ノンアルコール",
"abv": 0,
"taste": [
"塩味",
"スパイシー",
"旨み"
],
"time": "いつでも",
"color": "#B3261E",
"ings": [
[
"トマトジュース",
"適量"
],
[
"レモンジュース",
"10ml"
],
[
"ウスターソース・タバスコ・塩こしょう",
"少々"
],
[
"セロリ",
"1本"
]
],
"steps": [
"氷を入れたグラスにトマトジュースとレモンを入れる。",
"ウスターソース、タバスコ、塩こしょうで味を整え、セロリを添える。"
],
"desc": "ブラッディ・メアリーからウォッカを抜いたもの。食事にも合う、塩気とスパイスの効いたトマトのカクテル。",
"tip": "",
"garnish": "セロリ",
"tools": [
"barspoon",
"jigger"
]
}
];
