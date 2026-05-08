# SEO修复指南 - 应用到其他页面

> **更新日期**: 2026年5月8日
> **已修复页面**: gpt-image-2-ui-generation.html, gpt-image-2-logo-icon.html, ai-image-generator-comparison.html

---

## 修复清单

### 1. 标题标签优化
**目标**: 控制在50-60字符之间

修复前:
```html
<title>GPT Image 2 UI Generation: Can It Actually Replace Your Designer? — AI Design Lab</title>
```
修复后:
```html
<title>GPT Image 2 UI Generation: Can AI Replace Designers? | AI Design Lab</title>
```

**原则**: 包含主关键词 + 品牌名，用 `|` 分隔

---

### 2. 添加Breadcrumb Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://aidesignlab.cc"},
    {"@type": "ListItem", "position": 2, "name": "Articles", "item": "https://aidesignlab.cc#articles"},
    {"@type": "ListItem", "position": 3, "name": "页面主题名"}
  ]
}
</script>
```

---

### 3. 增强Article Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "页面标题",
  "description": "页面描述（155字符以内）",
  "image": "https://aidesignlab.cc/og-image.jpg",
  "author": {
    "@type": "Person",
    "name": "Long Yu (龙御)",
    "url": "https://longyu2037.com",
    "jobTitle": "UI Designer"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI Design Lab",
    "url": "https://aidesignlab.cc",
    "logo": {"@type": "ImageObject", "url": "https://aidesignlab.cc/og-image.jpg"}
  },
  "datePublished": "2026-05-07",
  "dateModified": "2026-05-08",
  "mainEntityOfPage": {"@type": "WebPage", "@id": "https://aidesignlab.cc/页面URL.html"},
  "articleSection": "文章分类",
  "keywords": ["关键词1", "关键词2", "关键词3"],
  "wordCount": 字数,
  "timeRequired": "PT10M",
  "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["article h1", "article .lead", "article h2"]}
}
</script>
```

---

### 4. 添加FAQ Schema
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "问题1",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "答案1（简洁，40-50词）"
      }
    },
    {
      "@type": "Question",
      "name": "问题2",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "答案2"
      }
    }
    // 可添加4-5个FAQ问题
  ]
}
</script>
```

---

### 5. 添加FAQ HTML组件
在文章底部 `</article>` 前添加：
```html
<div class="faq-section" style="margin-top:3rem;padding:2rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);">
  <h3 style="font-size:1.5rem;margin-bottom:1.5rem;color:var(--accent-2);">Frequently Asked Questions</h3>
  
  <div class="faq-item" style="margin-bottom:1.5rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border);">
    <div class="faq-question" style="font-weight:600;font-size:1.05rem;color:var(--text);margin-bottom:0.75rem;display:flex;align-items:flex-start;gap:0.5rem;">
      <span style="background:var(--accent);color:#fff;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700;flex-shrink:0;">Q</span>
      问题1
    </div>
    <div class="faq-answer" style="color:var(--text-2);line-height:1.7;padding-left:2rem;">
      答案1
    </div>
  </div>
  <!-- 重复更多FAQ项 -->
</div>
```

---

### 6. 添加相关推荐文章
```html
<div class="related-articles" style="margin-top:3rem;padding:2rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);">
  <h3 style="font-size:1.25rem;margin-bottom:1.5rem;color:var(--accent-2);">Continue Reading</h3>
  <ul style="list-style:none;padding:0;display:grid;gap:1rem;">
    <li>
      <a href="相关文章URL.html" style="display:flex;align-items:center;gap:1rem;color:var(--text);padding:1rem;background:var(--bg-2);border-radius:var(--radius-sm);transition:background 0.2s;text-decoration:none;">
        <span style="font-size:1.5rem;">🔷</span>
        <div>
          <strong>文章标题</strong>
          <p style="margin:0;font-size:0.85rem;color:var(--text-3);">简短描述</p>
        </div>
      </a>
    </li>
    <!-- 更多推荐文章 -->
  </ul>
</div>
```

---

## 待修复页面列表

| 页面文件 | 标题长度 | 状态 | 备注 |
|---------|---------|------|------|
| gpt-image-2-ui-generation.html | ✅ 已修复 | ✅ | 58字符 |
| gpt-image-2-logo-icon.html | ✅ 已修复 | ✅ | 56字符 |
| ai-image-generator-comparison.html | ✅ 已修复 | ✅ | 63字符 |
| gpt-image-2-blog-graphics.html | ❌ 待修复 | - | 检查标题长度 |
| gpt-image-2-ecommerce.html | ❌ 待修复 | - | 检查标题长度 |
| gpt-image-2-infographic.html | ❌ 待修复 | - | 检查标题长度 |
| gpt-image-2-portrait.html | ❌ 待修复 | - | 检查标题长度 |
| gpt-image-2-mockup.html | ❌ 待修复 | - | 检查标题长度 |
| gpt-image-2-meme.html | ❌ 待修复 | - | 检查标题长度 |
| best-ai-tools-designers-2026.html | ❌ 待修复 | - | 检查标题长度 |
| ai-design-system-building.html | ❌ 待修复 | - | 检查标题长度 |
| prompt-to-production-workflow.html | ❌ 待修复 | - | 检查标题长度 |

---

## 修复优先级

### 高优先级 (高搜索量关键词页面)
1. best-ai-tools-designers-2026.html
2. prompt-to-production-workflow.html
3. ai-design-system-building.html

### 中优先级
4. gpt-image-2-blog-graphics.html
5. gpt-image-2-ecommerce.html
6. gpt-image-2-mockup.html

### 低优先级
7. gpt-image-2-infographic.html
8. gpt-image-2-portrait.html
9. gpt-image-2-meme.html

---

## 验证修复效果

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema Markup Validator**: https://validator.schema.org/
3. **页面标题检查**: 确保显示在SERP中不截断

---

*修复指南完成*
