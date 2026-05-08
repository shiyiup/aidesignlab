from PIL import Image

# 读取原图
img = Image.open('logo.png').convert('RGBA')

# 生成多尺寸 favicon
sizes = [16, 32, 48, 64, 128, 256]
favicons = []
for size in sizes:
    resized = img.resize((size, size), Image.LANCZOS)
    favicons.append(resized)

# 保存为 ICO
favicons[0].save('favicon.ico', format='ICO', sizes=[(s, s) for s in sizes], append_images=favicons[1:])
print('favicon.ico 生成完成')

# 生成 apple-touch-icon.png (180x180)
img.resize((180, 180), Image.LANCZOS).save('apple-touch-icon.png')
print('apple-touch-icon.png 生成完成')

# 生成 og-image.jpg (1200x630)
og_img = img.resize((1200, 630), Image.LANCZOS)
# 转为 RGB 添加背景
bg = Image.new('RGB', (1200, 630), (9, 9, 14))
og_rgb = og_img.convert('RGB')
bg.paste(og_rgb, (0, 0))
bg.save('og-image.jpg', 'JPEG', quality=95)
print('og-image.jpg 生成完成')
