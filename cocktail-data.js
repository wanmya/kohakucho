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
}
];
