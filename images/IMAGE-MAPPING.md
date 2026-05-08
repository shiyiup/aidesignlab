# 图片映射文档

> 来源: D:\我的知识库\10_公众号草稿\images\
> 目标: D:\myClaw\aidesignlab\images\

---

## 文章与图片对应关系

### 32 - GPT Image 2 UI生成系列 → gpt-image-2-ui-generation.html

| 文章引用 | 图片文件名 | 用途 |
|---------|-----------|------|
| ![[Image 46.png]] | Image 46.png | 案例01: 音乐APP播放页面 |
| ![[Pasted image 20260503104122.png]] | Pasted image 20260503104122.png | 原型图 |
| ![[ChatGPT Image 2026年5月1日 22_15_47.png]] | ChatGPT Image 2026年5月1日 22_15_47.png | 案例02: 电商APP商品详情页 |
| ![[ChatGPT Image 2026年5月2日 12_57_39.png]] | ChatGPT Image 2026年5月2日 12_57_39.png | 案例03: 企业IM聊天页面 |
| ![[ChatGPT Image 2026年5月2日 13_01_38.png]] | ChatGPT Image 2026年5月2日 13_01_38.png | 案例04: UI组件库 |
| ![[ChatGPT Image 2026年5月2日 13_07_46.png]] | ChatGPT Image 2026年5月2日 13_07_46.png | 案例06: iOS版天气APP |
| ![[ChatGPT Image 2026年5月2日 13_08_56.png]] | ChatGPT Image 2026年5月2日 13_08_56.png | 案例06: Android版天气APP |
| ![[Image 48.png]] | Image 48.png | 案例07: 笔记APP编辑页面 |
| ![[ChatGPT Image 2026年5月3日 09_23_22.png]] | ChatGPT Image 2026年5月3日 09_23_22.png | 案例08: 记账APP页面流 |

---

## 批量复制命令 (PowerShell)

```powershell
# UI生成系列图片
$source = "D:\我的知识库\10_公众号草稿\images\"
$target = "D:\myClaw\aidesignlab\images\2026-04\ui-generation\"

# 需要复制的图片列表
$images = @(
    "Image 46.png",
    "Pasted image 20260503104122.png",
    "ChatGPT Image 2026年5月1日 22_15_47.png",
    "ChatGPT Image 2026年5月2日 12_57_39.png",
    "ChatGPT Image 2026年5月2日 13_01_38.png",
    "ChatGPT Image 2026年5月2日 13_07_46.png",
    "ChatGPT Image 2026年5月2日 13_08_56.png",
    "Image 48.png",
    "ChatGPT Image 2026年5月3日 09_23_22.png"
)

foreach ($img in $images) {
    Copy-Item "$source$img" "$target$img" -Force
}
```

---

## 待完成

- [ ] 复制图片到网站目录
- [ ] 更新 gpt-image-2-ui-generation.html 添加图片
- [ ] 检查其他系列文章的图片引用
- [ ] 复制其他系列图片并更新网页

