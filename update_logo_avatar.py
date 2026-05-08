import os
import re

files = [
    'ai-design-system-building.html',
    'ai-image-generator-comparison.html',
    'best-ai-tools-designers-2026.html',
    'gpt-image-2-blog-graphics.html',
    'gpt-image-2-ecommerce.html',
    'gpt-image-2-infographic.html',
    'gpt-image-2-logo-icon.html',
    'gpt-image-2-meme.html',
    'gpt-image-2-mockup.html',
    'gpt-image-2-portrait.html',
    'gpt-image-2-ui-generation.html',
    'prompt-to-production-workflow.html',
]

for filename in files:
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 1. Update .nav-logo CSS
    old_css = '.nav-logo { font-family: \'Syne\', sans-serif; font-weight: 800; font-size: 1.25rem; background: linear-gradient(135deg, var(--accent-2), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }'
    new_css = '.nav-logo { display: flex; align-items: center; gap: 0.5rem; }\n    .nav-logo img { height: 32px; width: auto; }\n    .nav-logo-text { font-family: \'Syne\', sans-serif; font-weight: 800; font-size: 1rem; background: linear-gradient(135deg, var(--accent-2), var(--cyan)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }'
    content = content.replace(old_css, new_css)
    
    # 2. Update nav-logo HTML
    old_nav = '<div class="nav-logo">aidesignlab.cc</div>'
    new_nav = '<a href="index.html" class="nav-logo"><img src="logo.png" alt="AI Design Lab"><span class="nav-logo-text">aidesignlab.cc</span></a>'
    content = content.replace(old_nav, new_nav)
    
    # 3. Update .author-avatar CSS (if exists)
    old_avatar_css = '.author-avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--cyan)); display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; }'
    new_avatar_css = '.author-avatar { width: 48px; height: 48px; border-radius: 50%; overflow: hidden; }\n    .author-avatar img { width: 100%; height: 100%; object-fit: cover; }'
    content = content.replace(old_avatar_css, new_avatar_css)
    
    # 4. Update author-avatar HTML (if exists)
    old_avatar = '<div class="author-avatar">龙</div>'
    new_avatar = '<div class="author-avatar"><img src="avatar.png" alt="龙御"></div>'
    content = content.replace(old_avatar, new_avatar)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f'✓ Updated: {filename}')

print('\nAll files updated!')
