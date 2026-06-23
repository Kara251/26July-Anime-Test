var TC2SC = '這这開开點点問问題题測测驗验動动畫画過过電电腦脑書书對对體体節节選选愛爱關关鍵键詞词類类該该經经極极轉转話话與与機机覺觉歡欢間间線线實实結结單单見见風风來来個个從从現现義义門门當当場场鄉乡飛飞國国園园熱热鬧闹隊队計计協协調调負负觀观樣样麼么發发屬属進进壓压龍龙劍剑闊阔滿满競竞夢梦灑洒揮挥淚泪複复華华壯壮無无雲云戀恋綿绵餘余暉晖紛纷陣阵腎肾飆飙據据準准領领雞鸡裡里後后號号報报穩稳歷历歲岁約约讓让療疗癒愈歎叹盡尽僅仅幣币優优歸归臉脸頭头輯辑斷断豐丰積积際际訊讯職职藝艺總总輕轻雜杂沒没帶带險险廳厅東东搖摇滾滚懸悬詩诗響响樂乐暫暂讀读謎谜傳传說说運运賽赛遊游戲戏聞闻聰聪祕秘異异靜静員员櫻樱鎮镇閃闪爍烁飄飘衝冲鋒锋擬拟筆笔棄弃堅坚強强萬万細细陰阴邏逻圍围騰腾燒烧觸触層层團团圓圆達达遺遗遠远邊边緊紧剝剥純纯戰战鬥斗鬆松寧宁僅仅顯显盤盘驅驱廢废歲岁獲获網网絡络醬酱繪绘織织續续練练時时為为備备佈布敘叙劇剧較较們们溫温氣气潤润劑剂賞赏變变膩腻嚮向係系議议設设穎颖討讨趨趋勢势內内規规尋寻標标復复寫写幾几會会彈弹麗丽術术絕绝';

function toSC(s) {
  for (var i = 0; i < TC2SC.length; i += 2)
    s = s.split(TC2SC[i]).join(TC2SC[i + 1]);
  return s;
}

var UI = {
  tc: {
    h1a: '夏季番', h1b: '你該追哪部？',
    sub: '以15道問題，找到屬於你的本季命定番',
    go: '開始測驗 ▶', rl: '你 的 命 定 番 是',
    altT: '你也可以看看', avT: '可能需要避雷',
    ret: '再測一次', sh: '保存分享',
    ftr: '2026 夏季番你該追哪部', tog: '简',
    more: '更多測驗 →', prev: '上一題'
  },
  sc: {
    h1a: '夏季番', h1b: '你该追哪部？',
    sub: '以15道问题，找到属于你的本季命定番',
    go: '开始测验 ▶', rl: '你 的 命 定 番 是',
    altT: '你也可以看看', avT: '可能需要避雷',
    ret: '再测一次', sh: '保存分享',
    ftr: '2026 夏季番你该追哪部', tog: '繁',
    more: '更多测验 →', prev: '上一题'
  }
};

var QUIZ_DATA = {
  questions: [
    {
      text: "放假第一天，你最想做什麼？",
      options: [
        { text: "約朋友出門，去沒去過的地方探險", scores: { action: 2, fantasy: 1 } },
        { text: "找間咖啡廳，帶本書待一整個下午", scores: { healing: 2, romance: 1 } },
        { text: "打開電腦，考據最近沉迷的東西", scores: { mystery: 2, scifi: 1 } },
        { text: "睡到自然醒，然後什麼都不做", scores: { dark: 1, healing: 1 } }
      ]
    },
    {
      text: "如果你的人生是一部動畫，\n片頭曲會是什麼風格？",
      options: [
        { text: "節奏快到炸裂的搖滾", scores: { action: 2, sports: 1 } },
        { text: "溫柔的木吉他彈唱", scores: { healing: 2, romance: 1 } },
        { text: "充滿懸念感的電子樂", scores: { mystery: 2, dark: 1 } },
        { text: "史詩感十足的管弦樂", scores: { fantasy: 2, scifi: 1 } }
      ]
    },
    {
      text: "在動漫世界裡，\n你最希望擁有哪種能力？",
      options: [
        { text: "時間靜止——掌控節奏，一個人撐住整個局面", scores: { scifi: 2, dark: 1 } },
        { text: "讀心術——感知每個人未說出口的情緒", scores: { mystery: 2, romance: 1 } },
        { text: "空間跳躍——想去哪就去哪，不受任何束縛", scores: { fantasy: 2, action: 1 } },
        { text: "治癒之力——讓身邊的人從傷痛中恢復", scores: { healing: 2, sports: 1 } }
      ]
    },
    {
      text: "熬夜刷手機，你更可能在幹嘛？",
      options: [
        { text: "查未解懸案、都市傳說、靈異事件", scores: { mystery: 2, dark: 1 } },
        { text: "刷鬼畜迷因、無腦搞笑、讓大腦放空", scores: { healing: 2 } },
        { text: "看競技賽事剪輯或電競實況", scores: { sports: 2, action: 1 } },
        { text: "追科技資訊、AI動態、未來趨勢分析", scores: { scifi: 2 } }
      ]
    },
    {
      text: "在你的朋友圈裡，\n大家對你的固有印象是？",
      options: [
        { text: "「熱血」或「有中二病」", scores: { action: 2, sports: 1 } },
        { text: "「溫柔」或「你是氛圍組的」", scores: { healing: 2, romance: 1 } },
        { text: "「資訊量好大」或「讓人看不透」", scores: { mystery: 2, scifi: 1 } },
        { text: "「共情能力太強」或「感性過頭」", scores: { romance: 2, dark: 1 } }
      ]
    },
    {
      text: "如果被困在異世界，\n你第一件事會做什麼？",
      options: [
        { text: "立刻展開冒險，探索這個世界", scores: { fantasy: 2, action: 1 } },
        { text: "尋找當地居民，先搞清楚規則與禁忌", scores: { mystery: 2, fantasy: 1 } },
        { text: "找個安全的地方先穩定下來", scores: { healing: 2 } },
        { text: "冷靜分析情況，尋找返回現實的方法", scores: { scifi: 2, mystery: 1 } }
      ]
    },
    {
      text: "挑一個你最想住的動畫場景？",
      options: [
        { text: "櫻花紛飛的日本鄉間小鎮", scores: { healing: 2, romance: 1 } },
        { text: "霓虹閃爍的賽博龐克未來都市", scores: { scifi: 2, dark: 1 } },
        { text: "飄浮在天空中的奇幻王國", scores: { fantasy: 2, action: 1 } },
        { text: "熱鬧又溫馨的校園與部活室", scores: { sports: 2, romance: 1 } }
      ]
    },
    {
      text: "如果你們是攻略副本的隊伍，\n你是哪個位置？",
      options: [
        { text: "衝在最前線的輸出手，先打了再說", scores: { action: 2, sports: 1 } },
        { text: "後排制定策略的軍師，全程部署一切", scores: { mystery: 2, scifi: 1 } },
        { text: "負責讓隊伍不散夥的氣氛擔當", scores: { healing: 2, romance: 1 } },
        { text: "站在隊伍邊緣、默默觀察所有人的那個", scores: { dark: 2, mystery: 1 } }
      ]
    },
    {
      text: "看動畫時，\n最讓你起雞皮疙瘩的瞬間是？",
      options: [
        { text: "主角在絕境中覺醒的那一刻", scores: { action: 3 } },
        { text: "伏筆全部回收、真相大白的瞬間", scores: { mystery: 3 } },
        { text: "角色之間真情流露的那句台詞", scores: { romance: 2, healing: 1 } },
        { text: "配樂響起、全力奔跑的那個畫面", scores: { sports: 2, action: 1 } }
      ]
    },
    {
      text: "你最欣賞哪種類型的主角？",
      options: [
        { text: "永不放棄的熱血笨蛋", scores: { action: 2, sports: 1 } },
        { text: "聰明冷靜、永遠比對手快一步的天才", scores: { mystery: 2, scifi: 1 } },
        { text: "溫柔堅強、讓人想依靠的普通人", scores: { healing: 2, romance: 1 } },
        { text: "背負過去、行走在灰色地帶的暗黑英雄", scores: { dark: 2, fantasy: 1 } }
      ]
    },
    {
      text: "最想在哪種天氣裡追番？",
      options: [
        { text: "大晴天，陽光充足，精神百倍地看", scores: { sports: 2, action: 1 } },
        { text: "連綿陰雨，關門封窗，泡在黑暗裡看", scores: { dark: 2, mystery: 1 } },
        { text: "黃昏橙光，帶一點傷感，慢慢看到天黑", scores: { romance: 2, healing: 1 } },
        { text: "大雪天，暖氣開到最大，躲在棉被裡看", scores: { fantasy: 2, scifi: 1 } }
      ]
    },
    {
      text: "你最受不了一部動畫的哪個缺點？",
      options: [
        { text: "節奏太慢，拖拖拉拉沒有重點", scores: { action: 2, sports: 1 } },
        { text: "邏輯漏洞太多，經不起推敲", scores: { mystery: 2, scifi: 1 } },
        { text: "角色太扁平，缺乏記憶點", scores: { dark: 2, romance: 1 } },
        { text: "氛圍太壓抑，看了讓人不舒服", scores: { healing: 2, fantasy: 1 } }
      ]
    },
    {
      text: "如果只能選一個，\n你希望動畫帶給你什麼？",
      options: [
        { text: "那種握緊拳頭、大喊太燃了的激動感", scores: { action: 2, sports: 1 } },
        { text: "看完嘴角上揚、心頭暖暖的安心感", scores: { healing: 3 } },
        { text: "燒腦推理的快感，或被反轉的驚喜", scores: { mystery: 2, scifi: 1 } },
        { text: "看完沉默良久、久久無法開口的那種感動", scores: { romance: 2, dark: 1 } }
      ]
    },
    {
      text: "你理想中的故事結局是？",
      options: [
        { text: "大團圓，所有人都幸福", scores: { healing: 2, romance: 1 } },
        { text: "開放式結局，留下足夠的想像空間", scores: { mystery: 2, dark: 1 } },
        { text: "主角達成目標，華麗收場", scores: { action: 2, fantasy: 1 } },
        { text: "帶點遺憾，但意義深遠令人深思", scores: { dark: 2, romance: 1 } }
      ]
    },
    {
      text: "用一句話形容你追番的態度？",
      options: [
        { text: "不追完不睡覺，根本停不下來", scores: { action: 2, mystery: 1 } },
        { text: "慢慢看，享受每一集的氛圍感", scores: { healing: 2, romance: 1 } },
        { text: "邊看邊分析，考據黨本人", scores: { mystery: 2, scifi: 1 } },
        { text: "看完久久不能自已，需要很長時間消化", scores: { dark: 2, fantasy: 1 } }
      ]
    }
  ],

  results: {
    action: {
      image: "images/04_bleach_thousand_year_blood_war_kashin1.webp",
      animeName: "BLEACH 千年血戰篇 -禍進談-",
      animeRomaji: "BLEACH: THOUSAND-YEAR BLOOD WAR — THE CONFLICT",
      typeName: "熱血戰鬥型",
      description: "你追求的不只是打鬥場面，而是有份量的宿命感——每一個角色背負命運時的重量，每一次覺醒都讓你心跳加速。王道終章的集大成，老粉的盛宴，也是第一次入坑的教科書。",
      keywords: ["#王道終章", "#燃系必看", "#角色厨", "#覺醒瞬間"],
      alt: [
        { name: "BLACK TORCH", why: "同樣快節奏的少年戰鬥番，妖怪與忍者的酷感加分" },
        { name: "大小姐才不會玩格鬥遊戲", why: "反差萌入場，競技魂全程線上" }
      ],
      avoid: [
        { name: "在超市後門抽煙的二人", why: "慢熱日常系，零戰鬥，節奏截然相反" }
      ]
    },
    healing: {
      image: "images/01_supermarket_smoking1.webp",
      animeName: "在超市後門抽煙的二人",
      animeRomaji: "SUPA NO URA DE YANI SUU FUTARI",
      typeName: "低壓日常型",
      description: "下班後繞到後門、點上一根——在那個沒人看見的夾縫裡，才能說真心話。你不需要高潮迭起，你需要的是那種「懂」的感覺。這個夏天最適合你的番，像一杯溫熱的飲料。",
      keywords: ["#社畜共鳴", "#慢熱暧昧", "#夜色治愈", "#成年人溫柔"],
      alt: [
        { name: "不欺負人的繼母與姐姐", why: "同樣溫馨治愈，家庭向反套路，零壓力" },
        { name: "正相反的你與我 第二季", why: "低壓校園戀愛，細膩而不刺激" }
      ],
      avoid: [
        { name: "魔法少女小圓〈魔女之夜的回天〉", why: "高情緒強度，看完久久無法釋懷" }
      ]
    },
    mystery: {
      image: "images/03_youjo_senki_ii1.webp",
      animeName: "幼女戰記 II",
      animeRomaji: "YOUJO SENKI II",
      typeName: "策略燒腦型",
      description: "你享受的不只是謎題，而是在資訊不對稱的戰場上，用腦子碾壓對手的快感。幼女的外表、老兵的靈魂、反英雄的邏輯——給習慣比劇情快一步的你。",
      keywords: ["#策略智鬥", "#反英雄", "#高密度敘事", "#黑色幽默"],
      alt: [
        { name: "攻殼機動隊 THE GHOST IN THE SHELL", why: "同樣信息密度極高，哲學感更強" },
        { name: "天幕的賈杜加爾", why: "知識型女主，歷史智鬥視角" }
      ],
      avoid: [
        { name: "碧藍之海 第三季", why: "純喜劇歡樂向，不提供任何燒腦" }
      ]
    },
    romance: {
      image: "images/09_polar_opposites_s21.webp",
      animeName: "正相反的你與我 第二季",
      animeRomaji: "KIMI TO BOKU NI NARU HI SEASON 2",
      typeName: "戀愛物語型",
      description: "你不需要狗血，你只需要那一個眼神。一句沒說完的話，一個剛好對上的沉默。性格截然相反的兩個人，偏偏就這樣在一起了——清爽、溫柔、讓人反覆回味。",
      keywords: ["#性格互補", "#校園純愛", "#觀察人際", "#甜而不膩"],
      alt: [
        { name: "偷偷愛著你 第二季", why: "同樣清爽的校園戀愛，經典少女漫改編" },
        { name: "天是紅河岸", why: "命運感更強烈的宿命大戀愛" }
      ],
      avoid: [
        { name: "幼女戰記 II", why: "幾乎沒有感情線，高壓戰爭系" }
      ]
    },
    fantasy: {
      image: "images/02_mushoku_tensei_iii1.webp",
      animeName: "無職轉生 III",
      animeRomaji: "MUSHOKU TENSEI III",
      typeName: "奇幻冒險型",
      description: "你沉迷的是另一個世界的重量感——每一步都有代價的沉浸感。比起爽文的無敵，你更在意的是「這個世界是否真的存在」的說服力。從零開始的第三程，還遠沒到結束。",
      keywords: ["#異世界沉浸", "#長線成長", "#世界觀扎實", "#人生重開"],
      alt: [
        { name: "擅長逃跑的殿下 第二期", why: "同樣奇幻歷史背景，智謀與成長並重" },
        { name: "骸骨騎士大人異世界冒險中 第二季", why: "輕快的異世界冒險，壓力更低" }
      ],
      avoid: [
        { name: "攻殼機動隊 THE GHOST IN THE SHELL", why: "純賽博朋克設定，與奇幻元素截然相反" }
      ]
    },
    scifi: {
      image: "images/05_ghost_in_the_shell1.webp",
      animeName: "攻殼機動隊 THE GHOST IN THE SHELL",
      animeRomaji: "GHOST IN THE SHELL",
      typeName: "科幻未來型",
      description: "你問的不只是「AI能思考嗎」，你問的是「我怎麼知道我真的在思考」。冷峻的賽博朋克美學，身份認同的哲學困境——這個夏天，這部作品值得看完再看兩遍。",
      keywords: ["#賽博朋克", "#高概念", "#身份認同", "#哲學向"],
      alt: [
        { name: "幼女戰記 II", why: "同樣信息密度極高，戰略與反英雄視角" },
        { name: "二十世紀電氣目錄", why: "對科技與文明有浪漫想像的近代奇想" }
      ],
      avoid: [
        { name: "無職轉生 III", why: "純奇幻設定，與科技主題截然相反" }
      ]
    },
    sports: {
      image: "images/10_young_ladies_fighting_games1.webp",
      animeName: "大小姐才不會玩格鬥遊戲",
      animeRomaji: "OJOUSAMA WA FIGHTING GAME GA SHITAKUNAI",
      typeName: "競技熱血型",
      description: "外表優雅的大小姐，格鬥遊戲的瘋狂愛好者——反差萌是入場券，留住你的是那股認真到底的競技魂。你喜歡的故事，是有人拼命想贏的故事。",
      keywords: ["#反差萌", "#電競競技", "#全力以赴", "#女子校園"],
      alt: [
        { name: "碧藍之海 第三季", why: "競技加群體吐槽，爆笑能量同樣充沛" },
        { name: "世界最強後衛", why: "同樣熱血的競技系，青春感滿分" }
      ],
      avoid: [
        { name: "魔法少女小圓〈魔女之夜的回天〉", why: "氛圍沉重，看完需要很長時間消化" }
      ]
    },
    dark: {
      image: "images/53_madoka_walpurgisnacht_rising1.webp",
      animeName: "魔法少女小圓〈魔女之夜的回天〉",
      animeRomaji: "MAHOU SHOUJO MADOKA MAGICA: WALPURGISNACHT RISING",
      typeName: "暗黑深度型",
      description: "你早就知道世界沒那麼善良。你偏好灰色地帶，偏好代價巨大的選擇，偏好讓你陷入沉默的結局。小圓宇宙的終章回歸，是寫給所有「不滿足於簡單答案」的人。",
      keywords: ["#黑暗魔法少女", "#宿命閉環", "#高情緒強度", "#老粉向"],
      alt: [
        { name: "幼女戰記 II", why: "同樣壓迫感強烈，反英雄道德困境" },
        { name: "攻殼機動隊 THE GHOST IN THE SHELL", why: "哲學性更強，孤獨感同樣厚重" }
      ],
      avoid: [
        { name: "碧藍之海 第三季", why: "輕鬆歡樂向，完全不在同一個頻道" }
      ]
    }
  }
};
