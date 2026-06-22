var TC2SC = '這这開开點点問问題题測测驗验動动畫画過过電电腦脑書书對对體体節节選选愛爱關关鍵键詞词類类該该經经極极轉转話话與与機机覺觉歡欢間间線线實实結结單单見见風风來来個个從从現现義义門门當当場场鄉乡飛飞國国園园熱热鬧闹隊队計计協协調调負负觀观樣样麼么發发屬属進进壓压龍龙劍剑闊阔滿满競竞夢梦灑洒揮挥淚泪複复華华壯壮無无雲云戀恋綿绵餘余暉晖紛纷陣阵腎肾飆飙據据準准領领雞鸡裡里後后號号報报穩稳歷历歲岁約约讓让療疗癒愈歎叹盡尽僅仅幣币優优歸归臉脸頭头輯辑斷断豐丰積积際际訊讯職职藝艺總总輕轻雜杂沒没帶带險险廳厅東东搖摇滾滚懸悬詩诗響响樂乐暫暂讀读謎谜傳传說说運运賽赛遊游戲戏聞闻聰聪祕秘異异靜静員员櫻樱鎮镇閃闪爍烁飄飘衝冲鋒锋擬拟筆笔棄弃堅坚強强萬万細细陰阴邏逻圍围騰腾燒烧觸触層层團团圓圆達达遺遗遠远邊边緊紧剝剥純纯戰战鬥斗鬆松寧宁僅仅顯显盤盘驅驱廢废歲岁獲获網网絡络醬酱繪绘織织續续練练時时為为備备佈布敘叙劇剧較较們们溫温氣气潤润劑剂賞赏變变膩腻嚮向係系議议設设穎颖討讨趨趋勢势內内規规尋寻標标復复寫写幾几會会彈弹麗丽術术';

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
    ftr: '2026 夏季番你該追哪部', tog: '简'
  },
  sc: {
    h1a: '夏季番', h1b: '你该追哪部？',
    sub: '以15道问题，找到属于你的本季命定番',
    go: '开始测验 ▶', rl: '你 的 命 定 番 是',
    altT: '你也可以看看', avT: '可能需要避雷',
    ret: '再测一次', sh: '保存分享',
    ftr: '2026 夏季番你该追哪部', tog: '繁'
  }
};

var QUIZ_DATA = {
  questions: [
    {
      text: "放假第一天，你最想做什麼？",
      options: [
        { text: "約朋友出門，去沒去過的地方探險", scores: { action: 2, fantasy: 1 } },
        { text: "找間咖啡廳，帶本書待一整個下午", scores: { healing: 2, romance: 1 } },
        { text: "打開電腦，研究最近沉迷的東西", scores: { mystery: 2, scifi: 1 } },
        { text: "睡到自然醒，然後什麼都不做", scores: { dark: 1, healing: 1 } }
      ]
    },
    {
      text: "如果你的人生是一部動畫，\n片頭曲會是什麼風格？",
      options: [
        { text: "節奏快到炸裂的搖滾", scores: { action: 2, sports: 1 } },
        { text: "溫柔的木吉他彈唱", scores: { healing: 2, romance: 1 } },
        { text: "充滿懸念的電子樂", scores: { mystery: 2, dark: 1 } },
        { text: "史詩感十足的交響樂", scores: { fantasy: 2, scifi: 1 } }
      ]
    },
    {
      text: "你覺得最理想的超能力是？",
      options: [
        { text: "時間暫停——掌控一切的感覺", scores: { scifi: 2, dark: 1 } },
        { text: "讀心術——想知道每個人在想什麼", scores: { mystery: 2, romance: 1 } },
        { text: "瞬間移動——自由去任何地方", scores: { fantasy: 2, action: 1 } },
        { text: "治癒之力——幫助身邊的人", scores: { healing: 2, sports: 1 } }
      ]
    },
    {
      text: "深夜刷手機，你最常看的內容？",
      options: [
        { text: "未解之謎、都市傳說", scores: { mystery: 2, dark: 1 } },
        { text: "搞笑短影片、迷因", scores: { healing: 2 } },
        { text: "運動賽事精華或遊戲實況", scores: { sports: 2, action: 1 } },
        { text: "科技新聞或未來趨勢分析", scores: { scifi: 2 } }
      ]
    },
    {
      text: "朋友最常用來形容你的詞是？",
      options: [
        { text: "「有正義感」或「熱血」", scores: { action: 2, sports: 1 } },
        { text: "「溫柔」或「療癒」", scores: { healing: 2, romance: 1 } },
        { text: "「聰明」或「神祕」", scores: { mystery: 2, scifi: 1 } },
        { text: "「浪漫」或「感性」", scores: { romance: 2, dark: 1 } }
      ]
    },
    {
      text: "如果被困在異世界，\n你第一件事會做什麼？",
      options: [
        { text: "立刻展開冒險，探索這個世界", scores: { fantasy: 2, action: 1 } },
        { text: "尋找當地居民，了解規則", scores: { mystery: 2, fantasy: 1 } },
        { text: "找個安全的地方先穩定下來", scores: { healing: 2 } },
        { text: "冷靜分析情況，尋找回去的方法", scores: { scifi: 2, mystery: 1 } }
      ]
    },
    {
      text: "挑一個你最想住的動畫場景？",
      options: [
        { text: "櫻花紛飛的日本鄉間小鎮", scores: { healing: 2, romance: 1 } },
        { text: "霓虹閃爍的未來都市", scores: { scifi: 2, dark: 1 } },
        { text: "飄浮在天空中的奇幻王國", scores: { fantasy: 2, action: 1 } },
        { text: "熱鬧又溫馨的校園", scores: { sports: 2, romance: 1 } }
      ]
    },
    {
      text: "團隊合作時，\n你通常扮演什麼角色？",
      options: [
        { text: "衝鋒在前的行動派", scores: { action: 2, sports: 1 } },
        { text: "擬定計畫的策略家", scores: { mystery: 2, scifi: 1 } },
        { text: "負責協調氣氛的潤滑劑", scores: { healing: 2, romance: 1 } },
        { text: "默默觀察的分析者", scores: { dark: 2, mystery: 1 } }
      ]
    },
    {
      text: "看動畫時，\n最讓你起雞皮疙瘩的瞬間是？",
      options: [
        { text: "主角在絕境中覺醒的那一刻", scores: { action: 3 } },
        { text: "伏筆回收、真相大白的瞬間", scores: { mystery: 3 } },
        { text: "角色之間真情流露的對話", scores: { romance: 2, healing: 1 } },
        { text: "配樂響起、全力奔跑的畫面", scores: { sports: 2, action: 1 } }
      ]
    },
    {
      text: "你最欣賞哪種類型的主角？",
      options: [
        { text: "永不放棄的熱血笨蛋", scores: { action: 2, sports: 1 } },
        { text: "聰明冷靜的天才型", scores: { mystery: 2, scifi: 1 } },
        { text: "溫柔堅強的普通人", scores: { healing: 2, romance: 1 } },
        { text: "背負過去的暗黑英雄", scores: { dark: 2, fantasy: 1 } }
      ]
    },
    {
      text: "選一種最喜歡的天氣？",
      options: [
        { text: "萬里無雲的大晴天", scores: { sports: 2, action: 1 } },
        { text: "細雨綿綿的陰天", scores: { dark: 2, mystery: 1 } },
        { text: "落日餘暉的傍晚", scores: { romance: 2, healing: 1 } },
        { text: "白雪紛飛的冬日", scores: { fantasy: 2, scifi: 1 } }
      ]
    },
    {
      text: "你最受不了一部動畫的哪個缺點？",
      options: [
        { text: "節奏太慢，拖拖拉拉", scores: { action: 2, sports: 1 } },
        { text: "邏輯漏洞太多，經不起推敲", scores: { mystery: 2, scifi: 1 } },
        { text: "角色太扁平，缺乏深度", scores: { dark: 2, romance: 1 } },
        { text: "氛圍太壓抑，看了不舒服", scores: { healing: 2, fantasy: 1 } }
      ]
    },
    {
      text: "如果只能選一個，\n你希望動畫帶給你什麼？",
      options: [
        { text: "熱血沸騰的激動", scores: { action: 2, sports: 1 } },
        { text: "溫暖治癒的安心感", scores: { healing: 3 } },
        { text: "燒腦推理的快感", scores: { mystery: 2, scifi: 1 } },
        { text: "觸動內心的深層感動", scores: { romance: 2, dark: 1 } }
      ]
    },
    {
      text: "你理想中的故事結局是？",
      options: [
        { text: "大團圓，所有人都幸福", scores: { healing: 2, romance: 1 } },
        { text: "開放式結局，留下想像空間", scores: { mystery: 2, dark: 1 } },
        { text: "主角達成目標，華麗收場", scores: { action: 2, fantasy: 1 } },
        { text: "帶點遺憾，但意義深遠", scores: { dark: 2, romance: 1 } }
      ]
    },
    {
      text: "用一句話形容你追番的態度？",
      options: [
        { text: "不追完不睡覺，根本停不下來", scores: { action: 2, mystery: 1 } },
        { text: "慢慢看，享受每一集的氛圍", scores: { healing: 2, romance: 1 } },
        { text: "邊看邊分析，考據黨本人", scores: { mystery: 2, scifi: 1 } },
        { text: "看完久久不能自已，需要消化", scores: { dark: 2, fantasy: 1 } }
      ]
    }
  ],

  results: {
    action: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "熱血戰鬥型",
      description: "你追求的是腎上腺素飆升的刺激感。喜歡看主角突破極限、在絕境中逆轉的熱血展開，每一話都讓你心跳加速。這個夏天，你需要一部讓你握緊拳頭、大喊「太燃了」的作品。",
      keywords: ["#熱血", "#戰鬥", "#逆轉", "#激燃"],
      alt: [
        { name: "「待填入備選1」", why: "同樣充滿熱血與激燃場面" },
        { name: "「待填入備選2」", why: "節奏明快的動作佳作" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "節奏偏慢，以日常對話為主" }
      ]
    },
    healing: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "治癒日常型",
      description: "你看番是為了獲得心靈的療癒與溫暖。比起跌宕起伏的劇情，你更享受角色們日常生活中的點點滴滴。這個夏天，你需要一部讓你看完嘴角上揚、心頭暖暖的作品。",
      keywords: ["#治癒", "#日常", "#溫暖", "#舒心"],
      alt: [
        { name: "「待填入備選1」", why: "溫馨的人際互動故事" },
        { name: "「待填入備選2」", why: "令人安心的氛圍系作品" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "高強度戰鬥場面較多" }
      ]
    },
    mystery: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "懸疑燒腦型",
      description: "你享受推理和解謎的過程，喜歡在觀看時不斷猜測下一步的發展。比起直白的敘事，你更愛層層剝開的真相。這個夏天，你需要一部讓你看完立刻想二刷找線索的作品。",
      keywords: ["#懸疑", "#推理", "#伏筆", "#燒腦"],
      alt: [
        { name: "「待填入備選1」", why: "同樣佈局精巧的智鬥故事" },
        { name: "「待填入備選2」", why: "暗藏伏筆值得反復品味" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "劇情較為直白，缺少反轉" }
      ]
    },
    romance: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "戀愛物語型",
      description: "你被角色之間微妙的情感變化深深吸引。一個眼神、一句台詞就能讓你心跳加速。這個夏天，你需要一部讓你少女心爆發的作品。",
      keywords: ["#戀愛", "#心動", "#甜蜜", "#悸動"],
      alt: [
        { name: "「待填入備選1」", why: "甜度爆表的純愛故事" },
        { name: "「待填入備選2」", why: "細膩描寫情感的佳作" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "幾乎沒有感情線的純戰鬥番" }
      ]
    },
    fantasy: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "奇幻冒險型",
      description: "你嚮往未知的世界和壯闊的旅程。龍與魔法、劍與盾牌，宏大的世界觀讓你沉浸其中無法自拔。這個夏天，你需要一部帶你踏上奇幻大陸的作品。",
      keywords: ["#奇幻", "#冒險", "#異世界", "#史詩"],
      alt: [
        { name: "「待填入備選1」", why: "同樣擁有宏大世界觀" },
        { name: "「待填入備選2」", why: "冒險感十足的異世界物語" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "現代都市背景，無奇幻元素" }
      ]
    },
    scifi: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "科幻未來型",
      description: "你對未來充滿想像，沉迷於科技與人類的關係。這個夏天，你需要一部讓你重新思考現實邊界的作品。",
      keywords: ["#科幻", "#未來", "#思考", "#前衛"],
      alt: [
        { name: "「待填入備選1」", why: "同樣探討科技與人性的議題" },
        { name: "「待填入備選2」", why: "設定新穎的未來世界作品" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "純奇幻設定，無科技元素" }
      ]
    },
    sports: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "運動競技型",
      description: "你熱愛那種全力以赴、揮灑汗水的感覺。看到角色為了夢想拼盡全力，你也會忍不住握緊拳頭加油。這個夏天，你需要一部讓你熱淚盈眶的競技作品。",
      keywords: ["#運動", "#青春", "#汗水", "#夢想"],
      alt: [
        { name: "「待填入備選1」", why: "同樣熱血的競技題材" },
        { name: "「待填入備選2」", why: "青春感滿溢的成長故事" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "氣氛偏沉重的心理劇" }
      ]
    },
    dark: {
      image: "",
      animeName: "「待填入作品名」",
      animeRomaji: "PLACEHOLDER TITLE",
      typeName: "暗黑深度型",
      description: "你偏好有深度和複雜性的作品。比起非黑即白的正邪對立，你更喜歡灰色地帶的道德困境。這個夏天，你需要一部讓你陷入沉思的作品。",
      keywords: ["#暗黑", "#深度", "#人性", "#沉思"],
      alt: [
        { name: "「待填入備選1」", why: "同樣充滿道德灰色地帶" },
        { name: "「待填入備選2」", why: "劇情沉重但引人深思" }
      ],
      avoid: [
        { name: "「待填入避雷」", why: "輕鬆歡樂向，缺乏深度探討" }
      ]
    }
  }
};
