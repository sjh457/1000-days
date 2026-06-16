# 💕 我们的第1000天

送给洋洋的1000天纪念网页。

## 如何添加照片

1. 把照片文件放到 `photos/` 文件夹里
2. 打开 `js/script.js` 文件
3. 找到 `timelineData` 数组，在对应条目的 `photo` 字段写上照片路径
   例如：`photo: 'photos/1.jpg'`

## 如何修改时间轴内容

打开 `js/script.js`，找到 `timelineData` 数组，按照格式修改：
- `date`：日期
- `title`：标题（可以加 emoji）
- `desc`：描述文字
- `photo`：照片路径（留空则显示占位）

## 如何修改情书内容

打开 `index.html`，搜索 `letterBody`，修改里面的文字即可。

## 部署到 GitHub Pages

### 第一次部署

```bash
# 1. 在 GitHub 上新建一个仓库，叫 1000-days

# 2. 在你的电脑上（在项目文件夹里）执行：
git init
git add .
git commit -m "🎀 我们的第1000天"

# 3. 关联远程仓库并推送
git remote add origin https://github.com/SJH457/1000-days.git
git branch -M main
git push -u origin main

# 4. 在 GitHub 网页上：
#    Settings → Pages → Source 选 "Deploy from a branch"
#    Branch 选 main，文件夹选 / (root)
#    点 Save

# 5. 等 2 分钟，访问：
#    https://SJH457.github.io/1000-days
```

### 更新内容

每次修改完文件后，执行：
```bash
git add .
git commit -m "更新内容"
git push
```

等 1-2 分钟刷新页面就能看到更新了。

## 发朋友圈

把 `https://SJH457.github.io/1000-days` 这个链接复制到朋友圈即可，
任何人都能打开看。
