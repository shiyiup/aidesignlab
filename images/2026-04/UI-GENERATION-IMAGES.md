# 图片复制指南 - UI生成系列

## 步骤1: 创建目录
```powershell
mkdir "D:\myClaw\aidesignlab\images\2026-04\ui-generation"
```

## 步骤2: 复制并重命名图片

### 方案A: PowerShell脚本 (推荐)
```powershell
$source = "D:\我的知识库\10_公众号草稿\images\"
$target = "D:\myClaw\aidesignlab\images\2026-04\ui-generation\"

# 创建目录
New-Item -ItemType Directory -Force -Path $target

# 复制并重命名
$RenameMap = @{
    "Image 46.png" = "case-01-fitness-app.png"
    "Image 48.png" = "case-02-dashboard.png"
    "Image 54.png" = "case-03-onboarding.png"
    "Image 67.png" = "case-04-settings.png"
    "Image 75.png" = "case-05-ecommerce.png"
    "Image 76.png" = "case-06-login.png"
    "Image 77.png" = "case-07-empty-state.png"
    "Image 79.png" = "case-08-navigation.png"
    "Image 80.png" = "case-09-component-library.png"
    "Image 81.png" = "case-10-cyberpunk.png"
    "Image 82.png" = "case-11-cross-platform.png"
    "Pasted image 20260503104122.png" = "prototype-wireframe.png"
}

foreach ($item in $RenameMap.GetEnumerator()) {
    $src = $source + $item.Key
    $dst = $target + $item.Value
    if (Test-Path $src) {
        Copy-Item $src $dst -Force
        Write-Host "✓ Copied: $($item.Key) -> $($item.Value)"
    } else {
        Write-Host "✗ Not found: $($item.Key)"
    }
}
```

### 方案B: 手动操作
1. 打开文件夹: `D:\我的知识库\10_公众号草稿\images\`
2. 选中以下图片，右键复制:
   - `Image 46.png` → 重命名为 `case-01-fitness-app.png`
   - `Image 48.png` → 重命名为 `case-02-dashboard.png`
   - `Image 54.png` → 重命名为 `case-03-onboarding.png`
   - `Image 67.png` → 重命名为 `case-04-settings.png`
   - `Image 75.png` → 重命名为 `case-05-ecommerce.png`
   - `Image 76.png` → 重命名为 `case-06-login.png`
   - `Image 77.png` → 重命名为 `case-07-empty-state.png`
   - `Image 79.png` → 重命名为 `case-08-navigation.png`
3. 粘贴到: `D:\myClaw\aidesignlab\images\2026-04\ui-generation\`

## 步骤3: 验证
检查目录是否包含8张图片:
```powershell
Get-ChildItem "D:\myClaw\aidesignlab\images\2026-04\ui-generation\"
```

## 图片命名规范
| 案例 | 文件名 | 描述 |
|-----|--------|------|
| 01 | case-01-fitness-app.png | 健身追踪App |
| 02 | case-02-dashboard.png | 数据分析仪表盘 |
| 03 | case-03-onboarding.png | 应用引导页 |
| 04 | case-04-settings.png | 设置页面 |
| 05 | case-05-ecommerce.png | 电商产品列表 |
| 06 | case-06-login.png | 登录注册页 |
| 07 | case-07-empty-state.png | 空状态插画 |
| 08 | case-08-navigation.png | 导航菜单 |

