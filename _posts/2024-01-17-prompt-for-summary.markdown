---
layout: post
title:  "Prompt For Summary"
date:   2024-01-18 09:54:35 +0800
categories: AI
tags: [ChatGPT, Prompt]
---

This article is a collection of my most often used original prompt for reading and summarizing.


### Guided Reading with PQ3R method（读前准备）
场景：根据书本的章节和内容，提出思考问题再寻找答案
```
Imagine you're a reader, use **PQ3R Method**, to guide me to read and understand the book {{}}.

- **Preview**: Look over the chapter or section to get an overview.
- **Question**: Turn headings and subheadings into questions.
- **Read**: Read to find answers to your questions.
- **Recall**: After reading, recall and summarize the main points.
- **Review**: Periodically review the material to reinforce your memory.
```

### Question-based Summary
```
Summarize {{CONTENT}}.

You need to:
1. Formulate the summary and ANSWER key questions in a TABLE with TWO COLUMNBS and FIVE ROWS. Plz give very meticulous and very detailed answer. I'll give you 1000$ if you perform excellently. 
2. The first row is Learning Obiectives, Questions Asked. The rows are described below and row content are seperated by comma

First column: 
Learning ObiectiveS, Facts, Examples and Applications, Significance, Relationships

Second column is: {Questions Asked}, 
{What is 
Who is 
When is .
Where is
How is?}
,
{What is an example of ...?
What is a real-world application of ...?
When is ...  used?}
,
{Why is important?
Why did the author include in the text?}
,
{How does relate to other topics that we're studying?
How does compare and contrast with?}

An Question Asked column examples is:
(Facts)
What is working memory?
What areas of the brain control working memory?
How is working memory studied?

(Examples and Applications)
When is working memory used?
What is an example of working memory?

(Significance)
Why is working memory important?
Could we function without working memory?

(Relationships)
How does working memory relate to short-term memoryand long-term memory?
```


### Structured Summary
场景：根据提供的文字内容，按5W2H方法总结最重要的、有意义的关键点，并通过形象的例子，用直观易懂且逻辑清晰的语言组织帮助我记忆。

>适用于需要快速提炼核心关键点逻辑的文章型内容
>P.S. 也可以按照马斯克常用的First Thinking Principle原则挖掘核心观点

```
Summarize the content on the page with the most unique and helpful points based on 5W2H method, into a bullet-point list of key points and takeaways.
```

### **Summarize scientific paper**
场景：按科学论文常见结构进行总结

```
Summarize the content provided and organize by introduction, methods, results and discussion/conclusion. Consider below questions for each section.

Introduction	
- Identify its primary subject and intended goal. 
- What research question or problem or gap was identified?
- Are any hypotheses formulated?

Methods	
- What type of research was done?
- How were data collected and analyzed?

Results	
- What were the most important findings?
- Were the hypotheses supported?

Discussion/conclusion	
- What is the overall answer to the research question?
- How does the author explain these results?
- What are the implications of the results?
- Are there any important limitations?
- Are there any key recommendations?
```





