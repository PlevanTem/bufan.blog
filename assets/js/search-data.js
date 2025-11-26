var store = [{
        "title": "Edge Case: Nested and Mixed Lists",
        "excerpt":"Nested and mixed lists are an interesting beast. It’s a corner case to make sure that lists within lists do not break the ordered list numbering order and list styles go deep enough. Ordered – Unordered – Ordered ordered item ordered item unordered unordered ordered item ordered item ordered item...","categories": ["docs","Edge Case"],
        "tags": ["content","css","edge case","lists","markup"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-nested-and-mixed-lists/"
      },{
        "title": "Edge Case: Many Tags",
        "excerpt":"This post has many tags. ","categories": ["docs","Edge Case"],
        "tags": ["8BIT","alignment","Articles","captions","categories","chat","comments","content","css","dowork","edge case","embeds","excerpt","Fail","featured image","FTW","Fun","gallery","html","image","Jekyll","layout","link","Love","markup","Mothership","Must Read","Nailed It","Pictures","Post Formats","quote","standard","Success","Swagger","Tags","template","title","twitter","Unseen","video","YouTube"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-many-tags/"
      },{
        "title": "Edge Case: Many Categories",
        "excerpt":"This post has many categories. ","categories": ["docs","aciform","antiquarianism","arrangement","asmodeus","broder","buying","championship","chastening","disinclination","disinfection"],
        "tags": ["categories","edge case"],
        "url": "http://localhost:4000/docs/aciform/antiquarianism/arrangement/asmodeus/broder/buying/championship/chastening/disinclination/disinfection/edge-case-many-categories/"
      },{
        "title": "Edge Case: No Body Content",
        "excerpt":"","categories": ["docs","Edge Case"],
        "tags": ["content","edge case","layout"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-no-body-content/"
      },{
        "title": "Edge Case No Yaml Title",
        "excerpt":"This post has no title specified in the YAML Front Matter. Jekyll should auto-generate a title from the filename. For example 2009-09-05-edge-case-no-yaml-title.md becomes Edge Case No Yaml Title. ","categories": ["docs","Edge Case"],
        "tags": ["edge case","layout","title"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-no-yaml-title/"
      },{
        "title": "Antidisestablishmentarianism",
        "excerpt":"This post title has a long word that could potentially overflow the content area. A few things to check for: Non-breaking text in the title should have no adverse effects on layout or functionality. Check the browser window / tab title.The following CSS property will help you support non-breaking text....","categories": ["docs","Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-title-should-not-overflow-the-content-area/"
      },{
        "title": "Suspicio? Bene ... tunc ibimus? Quis uh ... CONEXUS locus his diebus? Quisque semper aliquid videtur, in volutpat mauris. Nolo enim dicere. Vobis neque ab aliis. Ego feci memetipsum explicans. Gus mortuus est. Lorem opus habeo. Jackson Isai? Tu quoque ... A te quidem a ante. Vos scitis quod blinking res Ive 'been vocans super vos? Et conteram illud, et conteram hoc. Maledicant druggie excors. Iam hoc tu facere conatus sum ad te in omni tempore? Ludum mutavit. Verbum est ex. Et ... sunt occid",
        "excerpt":"Check for long titles and how they might break layouts. ","categories": ["docs","Edge Case"],
        "tags": ["content","css","edge case","html","layout","title"],
        "url": "http://localhost:4000/docs/edge%20case/edge-case-very-long-title/"
      },{
        "title": "Post: Modified Date",
        "excerpt":"This post has been updated and should show a modified date if last_modified_at is used in the layout. Plugins like jekyll-sitemap use this field to add a &lt;lastmod&gt; tag your sitemap.xml. ","categories": ["docs","Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "http://localhost:4000/docs/post%20formats/post-modified/"
      },{
        "title": "Post: Standard",
        "excerpt":"All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she...","categories": ["docs","Post Formats"],
        "tags": ["Post Formats","readability","standard"],
        "url": "http://localhost:4000/docs/post%20formats/post-standard/"
      },{
        "title": "Post: Quote",
        "excerpt":"  Only one thing is impossible for God: To find any sense in any copyright law on the planet.   Mark Twain ","categories": ["docs","Post Formats"],
        "tags": ["Post Formats","quote"],
        "url": "http://localhost:4000/docs/post%20formats/post-quote/"
      },{
        "title": "Post: Link",
        "excerpt":"This theme supports link posts, made famous by John Gruber. To use, just add link: http://url-you-want-linked to the post’s YAML front matter and you’re done.   And this is how a quote looks. Some link can also be shown. ","categories": ["docs","Post Formats"],
        "tags": ["link","Post Formats"],
        "url": "http://localhost:4000/docs/post%20formats/post-link/"
      },{
        "title": "Post: Video (YouTube)",
        "excerpt":"This post tests YouTube video embeds. Simply use the responsive-embed helper include like so: {% include responsive-embed url=\"https://www.youtube.com/watch?v=-PVofD2A9t8\" ratio=\"16:9\" %}Or wrap embeds with a &lt;div&gt; element and the appropriate classes: &lt;!-- 21:9 aspect ratio --&gt;&lt;div class=\"responsive-embed responsive-embed-21by9\"&gt; &lt;iframe class=\"responsive-embed-item\" src=\"...\"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;!-- 16:9 aspect ratio --&gt;&lt;div class=\"responsive-embed responsive-embed-16by9\"&gt; &lt;iframe class=\"responsive-embed-item\" src=\"...\"&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;!-- 4:3...","categories": ["docs","Post Formats"],
        "tags": ["Post Formats"],
        "url": "http://localhost:4000/docs/post%20formats/post-video-youtube/"
      },{
        "title": "Post: Twitter Embed",
        "excerpt":"Oh I dunno. It&#39;s probably been over 15 years since I smudged out a face with a pencil and kneaded eraser. #WIP #Sktchy pic.twitter.com/PwqbMddyVK &mdash; Michael Rose (@mmistakes) February 1, 2017This post tests Twitter Embeds. ","categories": ["docs","Media"],
        "tags": ["content","embeds","media","twitter"],
        "url": "http://localhost:4000/docs/media/post-twitter-embeds/"
      },{
        "title": "Layout: Post with Table Of Contents",
        "excerpt":"Enable table of contents on post or page by adding {% include toc %} where you’d like it to appear. Table of Contents HTML Elements Body text Blockquotes List Types Ordered Lists Unordered Lists Tables Code Snippets Buttons NoticesHTML Elements Below is are some HTML elements. Check the source code...","categories": ["docs","Layout"],
        "tags": ["table of contents"],
        "url": "http://localhost:4000/docs/layout/layout-table-of-contents/"
      },{
        "title": "Layout: Author Override",
        "excerpt":"Sites that may have content authored from various individuals can be accommodated by using data files. To attribute an author to a post or page that is different from the site author specified in _config.yml: Step 1. Create _data/authors.yml and add authors using the following format. Anything variables found under...","categories": ["docs"],
        "tags": [],
        "url": "http://localhost:4000/docs/layout-author-override/"
      },{
        "title": "Layout: Excerpt (Defined)",
        "excerpt":"This is the start of the post content. This paragraph should be absent from an index page where post.excerpt is shown. ","categories": ["docs","Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/docs/layout/uncategorized/layout-excerpt-defined/"
      },{
        "title": "Layout: Excerpt (Generated with Separator Tag)",
        "excerpt":"This is the post content. Archive-index pages should display an auto-generated excerpt of all the content preceding the excerpt_separator, as defined in the YAML Front Matter or globally in _config.yml. Be sure to test the formatting of the auto-generated excerpt, to ensure that it doesn’t create any layout problems. Lorem...","categories": ["docs","Layout","Uncategorized"],
        "tags": ["content","excerpt","layout"],
        "url": "http://localhost:4000/docs/layout/uncategorized/layout-excerpt-generated/"
      },{
        "title": "Layout: Hero Image",
        "excerpt":"This post should display a large hero image at the top of a page. This post tests a horizontal image using the following YAML Front Matter: image: path: /images/eder-oliveira-180877.jpgHero images can also be assigned more succinctly when thumbnail or caption are not used. image: /images/eder-oliveira-180877.jpgTall images will push content down...","categories": ["docs","Layout"],
        "tags": ["content","image","layout"],
        "url": "http://localhost:4000/docs/layout/layout-hero-image/"
      },{
        "title": "Markup: Text Readability Test",
        "excerpt":"Portland in shoreditch Vice, labore typewriter pariatur hoodie fap sartorial Austin. Pinterest literally occupy Schlitz forage. Odio ad blue bottle vinyl, 90’s narwhal commodo bitters pour-over nostrud. Ugh est hashtag in, fingerstache adipisicing laboris esse Pinterest shabby chic Portland. Shoreditch bicycle rights anim, flexitarian laboris put a bird on it...","categories": ["docs"],
        "tags": ["sample post","readability","test"],
        "url": "http://localhost:4000/docs/markup-text-readability/"
      },{
        "title": "Markup: Title *with* **Markdown**",
        "excerpt":"Using Markdown in the title should have no adverse effect on the layout or functionality. page.title example: title: \"Markup: Title *with* **Markdown**\"\"","categories": ["docs","Markdown"],
        "tags": ["css","html","title"],
        "url": "http://localhost:4000/docs/markdown/markup-title-with-markdown/"
      },{
        "title": "Markup: Title with Special&nbsp;---&nbsp;Characters",
        "excerpt":"Putting special characters in the title should have no adverse effect on the layout or functionality. The title above has none-breaking spaces before and after the m-dash. &amp;nbsp;---&amp;nbsp;Latin Character Tests This is a test to see if the fonts used in this theme support basic Latin characters. ! &#8220; #...","categories": ["docs","Markup"],
        "tags": ["html","markup","post","title"],
        "url": "http://localhost:4000/docs/markup/markup-title-with-special-characters/"
      },{
        "title": "Markup: Text Alignment and Transformations",
        "excerpt":"Sample text to demonstrate alignment and transformation classes. Easily realign text with alignment classes via HTML: &lt;p class=\"text-left\"&gt;Left aligned text.&lt;/p&gt;&lt;p class=\"text-center\"&gt;Center aligned text.&lt;/p&gt;&lt;p class=\"text-right\"&gt;Right aligned text.&lt;/p&gt;&lt;p class=\"text-justify\"&gt;Justified text.&lt;/p&gt;&lt;p class=\"text-nowrap\"&gt;No wrap text.&lt;/p&gt;Or with Kramdown and inline attribute lists: Left aligned text.{: .text-left}Center aligned text.{: .text-center}Right aligned text.{: .text-right}Justified text.{: .text-justify}No wrap...","categories": ["docs","Markup"],
        "tags": ["alignment","content","css","markup"],
        "url": "http://localhost:4000/docs/markup/markup-text-alignment/"
      },{
        "title": "Markup: Image Alignment",
        "excerpt":"The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started. Assign classes with HTML: &lt;img src=\"image.jpg\" class=\"align-left\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-center\" alt=\"\"&gt;&lt;img src=\"image.jpg\" class=\"align-right\" alt=\"\"&gt;Or use Kramdown and inline...","categories": ["docs","Markup"],
        "tags": ["alignment","captions","content","css","image","markup"],
        "url": "http://localhost:4000/docs/markup/markup-image-alignment/"
      },{
        "title": "Markup: HTML Elements and Formatting",
        "excerpt":"A variety of common HTML elements to demonstrate the theme’s stylesheet and verify they have been styled appropriately. Header one Header two Header three Header four Header five Header six Blockquotes Single line blockquote: Stay hungry. Stay foolish. Multi line blockquote with a cite reference: People think focus means saying...","categories": ["docs","Markup"],
        "tags": [],
        "url": "http://localhost:4000/docs/markup/markup-html-elements-and-formatting/"
      },{
        "title": "Markup: Syntax Highlighting",
        "excerpt":"Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect...","categories": ["docs"],
        "tags": ["code","syntax highlighting"],
        "url": "http://localhost:4000/docs/markup-syntax-highlighting/"
      },{
        "title": "MathJax Example",
        "excerpt":"MathJax is a simple, yet powerful, way ofincluding Tex/LaTex/MathML based mathematics in HTML webpages. Usage To enable MathJax support configure your _config.xml to: Set kramdown as the Markdown parser. Enable MathJax.The version of MathJax enabled is v3. An example setting for _config.xml is shown below: markdown: kramdownmathjax: enable: true combo:...","categories": ["docs"],
        "tags": [],
        "url": "http://localhost:4000/docs/mathjax-example/"
      },{
        "title": "Hidden Post",
        "excerpt":"This post has YAML Front Matter of hidden: true and should not appear in paginator.posts. ","categories": ["docs"],
        "tags": [],
        "url": "http://localhost:4000/docs/hidden-post/"
      },{
        "title": "Prompt For Summary",
        "excerpt":"This article is a collection of my most often used original prompt for reading and summarizing. Guided Reading with PQ3R method（读前准备） 场景：根据书本的章节和内容，提出思考问题再寻找答案 Imagine you're a reader, use **PQ3R Method**, to guide me to read and understand the book {{}}.- **Preview**: Look over the chapter or section to get an overview.-...","categories": ["AI"],
        "tags": ["ChatGPT","Prompt"],
        "url": "http://localhost:4000/ai/prompt-for-summary/"
      },{
        "title": "入职半年，总结一些AI产品的坑",
        "excerpt":"菊厂新人AI设计工具PM、交互设计师，持续分享一些大厂AI产品的经验。 刚入职半年，攒了一肚子槽点，第一篇文章开喷！ 遇到的坑 1. 提着锤子找钉子🔨 别把锤子当饭吃，有时候，我们需要的只是一把螺丝刀。 35Kr报道讲到，“一个明显的趋势是，随着应用落地的加速，不少中小模型厂商开始“瞄准钉子挥锤子”，先找到能落地的细分场景，再针对性地训练模型。” 实际上领导往往低估了人力、买卡、模型部署、硬件以及端侧部署的成本。最后发现干的那点事回报远低于投入，然后迎接裁员。而AI不是万能药，想当然地认为通过AI就能轻松让业务起飞的假设太过天真，实际上是hype期非常naive的想法，成功的AI实现需要对业务价值、复杂性和成本进行深思熟虑，能轻而易举就落地，大概率说明你的业务机械、简单、价值不高。比起提着锤子找钉子，熟悉业务、培养对行业的认知，能够执行良好的产品决策才是PM的核心竞争力，用AI从业务环节中寻找机会点进行提效当然是很好的，但AI作为一种技术，并不决定你的产品在市场上的成败，我们不能仅仅把某种技术作为竞争力的衡量标准。 2. 饼大，缺人，难自证价值 设计师们需要的是效率，而不是“魔法”，我们却在忙着给工具界面里塞满了“魔法棒”和“魔法键”。 我们部门主要在做一款面向内部设计平台（类似figma）的AI插件，内置了“魔法框、魔法棒、魔法键”三种交互方式，简单来说就是根据框选、选中对象，判断设计师意图，触发AI能力面板，提供组件推荐、生成、复杂组件编辑等一系列功能，帮助设计师实现快速原型。我们的最终目标是生成整个UI页面，能力构建围绕“感知-推理-生成”，基于规则、知识图谱、大模型做了看起来非常丰满的计划，铺开了一张宏大的人机结合、AI辅助设计的愿景蓝图。然而，我们团队加上所有角色加起来不到四十人，还有部分异地办公、一大堆外包；并且我司不能用openai的api，得自己训练开源模型；除此以外我们部门产品线还不止一条，领导有指标压力，整个版本节奏又要“敏捷”，不断紧逼去提需求、画原型、show能力、上版本，实在是低估了设计场景的复杂度和功能实现的难度，硬碰瓷AI、画大饼，最后产品形态、交互框架、规则逻辑混杂到一起… 对于设计师来说，包装AI能力与否并不关心，但是工作面板内被硬揉了一堆fancy、实际没啥用的功能反而会影响设计体验，因为炒作概念诞生的产品，最后发现很难证明价值，还折磨产品、设计和开发。 3. 外行指导内行 Model As Product，模型即服务，模型能力成为影响用户体验的主要因素 有些领导对AI、大模型能力边界就是凭借刷刷微信，看下第三方报告建立的，理想很丰满、现实很骨感，对实际AI应用能解决到什么程度把握蛮不靠谱，而且盲目追求智能感，会瞎提、主推一些实际无关紧要的“前沿”方案，技术路线不清晰、实现效果也没保证，导致陷入“拍脑袋提需求 → 赶工设计 → 开发加班加点 → 实际没啥价值（不好用、没人用） → 数据不好看 → 领导焦虑 → 拍脑袋需求”的死循环，结果就是层层push，折腾人。 拿我们部门做过的文生图平台举例，主要微调了“扁平人物插画、3D插图和2.5D图标”几个Lora。稍微有点扩散模型知识的人都知道生图干不好高可控性、精准度、位置等细节要求高的生成。按领导的想法训练难度肯定是2.5D＜3D，但实际上更为抽象的2.5D图标由于有一些图形的特殊布局、不同元素主体大小、颜色的规律差异，对于大型模型来说往往难以理解，生成好的难度极大，3D isometric的反而因为底模训练得多，风格固定更容易生成好。然而，领导不信、偏偏要重点做最难的一个，尽管尝试了各种方法优化，非要测评看到惨淡的可用率才能迷途知返。 4. 指标导向，而不是体验导向 大模型的商业化落地模式不清晰，用户为中心越离越远 以增长为首要目标是现在绝大多数公司的战略导向，但是当用户数、使用量、付费率等作为业务驱动的首要指标时，产品决策的出发点往往会变味。很难保证产品的迭代是出于用户的真正需求和体验，往往只是被迫应付上面给的阶段目标所寻求的妥协。大模型怎么融入产品带来价值，很难能真正说得清楚。作为产品设计师，既有绩效指标压力，又有“以模型为中心”造成的设计约束，导致与以用户为中心的出发点渐行渐远，难以取得平衡，最后买个教训。 一些工作方法 1. 判断某个功能特性是否适合AI来做 业务价值：首要考虑使用者对完成业务KPI的影响；其次是效率、质量的提升。 技术价值：评估可用数据集、开发复杂性以及可接受的误差范围。 Conor Woods，Figma 的产品经理提出了三个问题来确定某个功能是否受益于人工智能。 是否拥有可以利用的大数据集去解决问题？像 GPT-4 这样的大型语言模型 (LLM) 非常适合组织已有的信息（例如生成摘要），但很难让它们提出全新的体验，这本质上是一个提示词工程的挑战。...","categories": ["AI"],
        "tags": ["PM"],
        "url": "http://localhost:4000/ai/AI%E4%BA%A7%E5%93%81%E7%9A%84%E5%9D%91/"
      },{
        "title": "如何在设计中把握AI能力的边界",
        "excerpt":"今天转正答辩，我在心得体会中写到“model as product，模型能力决定使用体验”，于是在被问到了这个问题。 所以作为AI产品的设计师，我们如何学会并且在实战中把握AI能力的边界？如何提高对模型的认知，让AI能力恰到好处地落到产品中？  1. 多用、多体验 实践是检验真理的唯一标准。对于AI产品的设计而言，亲自使用和体验产品是理解AI能力边界的第一步。   亲身体验：多体验市面上流行的AI产品，直观地去感受和拆解整个使用流程的体验，特别是引导、解释性反馈的设计；  竞品分析：对比市场上的其他AI产品，了解它们的优势和不足，从而对自身产品进行定位。  用户反馈：收集并分析用户的评价，了解AI在实际使用中的局限性和不足之处。2. 明确输入输出，通过评测方案摸底 模型能力边界直接体现在不同输入输出范围的表现，设计师需要对这些方面有清晰的认识，才能保证产品需求和功能特性是可以正确、合理评估的，从而能够设计评测方案和测试用例，系统地检验AI模型的性能，建立benchmark。   定义清晰的输入：确保AI模型的输入数据是准确和有意义的。这包括数据的类型、格式和质量。      设计合理的输出：AI模型的输出应该直接关联到用户的需求和产品的使用场景。设计师需要考虑输出的可读性、准确性和及时性。     性能指标：确定衡量AI模型性能的关键指标，如准确率、召回率、响应时间等。  测试用例设计：设计覆盖各种使用场景的测试用例，包括正常情况和边缘情况。  持续迭代：根据测试结果不断调整和优化AI模型，以提高其性能和适应性。ps: 对于生成式模型，可能没有一个明确、绝对的输出，我们可以对核心表现建立打分维度来衡量。 3. 保持学习，提高跨学科认知   阿里云设计中心总监王路平也作出了他的回答：“一定要拥抱AI，AI时代下，设计师的技能点将被重新定义，美学教育需要与科技、工程等交叉学科相结合，建立跨界思维和创新能力。虽然AI时代对设计师提出了新的要求，但传统的设计审美和基础教育依然不可忽视。优秀的设计师应该在掌握现代技术的同时，仍然保持对传统艺术和设计理论的深刻理解。”   跨学科学习：结合机器学习、大模型、心理学、人机交互等多学科知识，全面理解AI模型的影响。  用户中心设计：始终将用户需求放在首位，确保AI模型的设计和优化都以提升用户体验为目标。","categories": ["AI"],
        "tags": ["PM","Design"],
        "url": "http://localhost:4000/ai/%E5%A6%82%E4%BD%95%E5%9C%A8%E8%AE%BE%E8%AE%A1%E4%B8%AD%E6%8A%8A%E6%8F%A1AI%E8%83%BD%E5%8A%9B%E7%9A%84%E8%BE%B9%E7%95%8C/"
      },{
        "title": "学界大厂优秀作品集博客网站Portfolio（持续更新）",
        "excerpt":"👉点击下载书签（支持导入浏览器） 学界 教授/PhD sune lehmann – DTU social network Alex Rogozhnikov | PhD mathematics and physics from Moscow Uni Bruno Magalhaes - ML researcher - PhD from EPFL HCI &amp; Game Researcher – Xin Tong: Post-doc Researcher, HCI Researcher, and Passionate Educator RAY LC 港城大 Professor of Creative Media Zhicong...","categories": ["Inspiration"],
        "tags": ["Design"],
        "url": "http://localhost:4000/inspiration/%E4%BC%98%E7%A7%80%E4%BD%9C%E5%93%81%E9%9B%86%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99Portfolio-%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0/"
      },{
        "title": "基于脚本和LLM快速导出关注的微信公众号列表",
        "excerpt":"WHY THIS ARTICLE? 随着微信内容生态的丰富和日常使用时长的增加，公众号已经成为重要、优质的信息来源之一。当我们关注的公众号越来越多时，可能会希望能够提取、整合、分享自己关注的公众号列表，形成清晰结构化的知识源。那有没有办法能够获取到关注公众号的名单呢？ 于是有了以下的尝试，可以在PC端用“脚本读取+大模型”的方法 1. 如何导出关注的微信公众号名单？ 方法1：数量不多，截图就能搞定的情况，可以直接用微信自带的OCR（快捷键Alt+A）识图-提取文本。 方法2： 使用UIA自动化测试工具提取文本 使用工具：accviewer+GetWindowText 参考链接：   如何导出关注的微信公众号名单？  有没有更效率的工具：可以更快（一次性）获取程序界面窗体或对话框中原本不可复制的文本，非OCR模式 当我们拿到文本后，可能会发现带有一堆不想要的”编号和列表项目”，可以直接让ChatGPT帮我们提取公众号名称。 帮我按条件提取对象文本，格式：列表项目 提取对象，输出：提取对象[1] 列表项目 199IT互联网数据中心[2] 列表项目 36氪[3] 列表项目 36氪Auto[4] 列表项目 阿坝旅游网[5] 列表项目 adidas[6] 列表项目 AI绘画师日记[7] 列表项目 AI Interface[8] 列表项目 AlibabaDesign[9] 列表项目 廣告狂人...这样就能轻松将关注的公众号进行快速分类去分享啦~ ","categories": ["没事折腾"],
        "tags": ["知识整理","Workflow","Prompt"],
        "url": "http://localhost:4000/%E6%B2%A1%E4%BA%8B%E6%8A%98%E8%85%BE/%E6%89%B9%E9%87%8F%E6%8F%90%E5%8F%96%E5%B9%B6%E5%88%86%E7%B1%BB%E5%85%B3%E6%B3%A8%E7%9A%84%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/"
      }]
