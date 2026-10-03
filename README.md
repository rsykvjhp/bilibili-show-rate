# B站显示点赞率、投币率、收藏率

在 bilibili 的视频卡片上显示 **点赞率 / 投币率 / 收藏率 / 转发率 / 弹幕密度**。

比率支持百分比和分数两种形式；显示哪些指标、用什么颜色、保留几位小数都可以自己配。

支持页面：**首页**、**分区页**、**搜索页**、**UP主主页**（投稿 / 合集和系列 / 主页）、**视频页**、**稍后再看**。

## 安装

- **推荐**：[从 Greasy Fork 安装](https://greasyfork.org/zh-CN/scripts/483379)
- 手动安装：新建一个用户脚本，把 `B站显示点赞率、投币率、收藏率.js` 的内容整个粘进去

需要先装 [Tampermonkey](https://www.tampermonkey.net/)（Violentmonkey、ScriptCat 等也可以）这类用户脚本管理器。

## 效果展示

首页、搜索、分区、UP主主页默认只展示点赞率，投币率 / 收藏率 / 转发率 / 弹幕密度需要在设置面板里开启。

### 视频页

视频下方那一排会多出四个比率：

![视频页效果](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/video-page.png)

### 首页

![首页效果](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/home.png)

### 搜索页

![搜索页效果](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/search.png)

### 分区页

![分区页效果](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/section.png)

### UP主主页

![UP主主页效果](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/uploader.png)

## 设置面板

点油猴图标 →「打开设置面板」。

![打开设置面板](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/open-setting-panel.png)

设置面板会根据页面颜色自动切换浅色和深色：

![设置面板](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/setting-panel-light-and-dark.png)

面板可以拖动，位置会记住。里面分三块：

### 显示格式

`百分比`（3.25%）和 `分数`（1/31）二选一，点一下立即生效。

<!-- TODO 待补充截图 -->

### 比率配色

每种「指标 × 表示方式」各有一套「数值 → 颜色」规则：

- 上面一排按钮切换正在编辑哪个指标（点赞率 / 投币率 / 收藏率 / 转发率 / 弹幕密度）。
- **百分比和分数是两套独立的规则**；切换「显示格式」时，这里编辑的也是对应的那一套。
- 每条规则 = **阈值 + 颜色 + 小数位**。点色块可以直接选颜色，也可以在旁边的输入框里写颜色名
  （`red`、`green`、`chocolate`，参考 [CSS 颜色名称](https://www.runoob.com/cssref/css-colornames.html)）
  或者 `#ff8fb1` 这样的十六进制值 —— 两种写法会互相同步，写错了会自动退回上一个能用的值。
- 最后一条是「其余」，它是兜底规则，没有阈值也不能删。
- 规则**从上往下判断，第一条匹配的生效**。
- 「+ 添加规则」新增一条，新规则会按数值大小自动插到合适的位置；「恢复本指标默认」只把当前指标、
  当前表示方式的规则恢复成默认值。

**阈值填的是卡片上显示的那个数**，所以两种模式的含义不一样：

| 表示方式 | 阈值填什么 | 命中条件 |
| --- | --- | --- |
| 分数 | 分母的上限 | 分母 ≤ 阈值（分母越小说明比率越高） |
| 百分比 | 百分比的下限 | 百分比 ≥ 阈值（百分比越大说明比率越高） |

默认规则：

| 表示方式 | 规则 |
| --- | --- |
| 分数 | 分母 ≤ 10 → `DarkOrange`（2 位小数）<br/>分母 ≤ 25 → `violet`（1 位小数）<br/>其余 → 卡片原本的文字色（0 位小数，也就是整数） |
| 百分比 | ≥ 10% → `DarkOrange`（2 位小数）<br/>≥ 4% → `violet`（2 位小数）<br/>其余 → 卡片原本的文字色（2 位小数） |

### 每个页面显示哪些指标

主页 / 分区 / 搜索 / UP主主页 四个页面分别勾选要显示哪些指标，**默认只开点赞率**。

**珊瑚色的指标表示本页接口里拿不到**，勾上之后脚本会按视频逐个查一次 B 站接口来补数据，
鼠标移上去有说明。

- 分区页和 UP主主页本来就要逐个查接口，所以在它们上面勾投币率 / 收藏率 / 转发率**不会多出任何请求**。
- 首页和搜索页的接口里只有播放量、点赞数、弹幕数（搜索页还多一个收藏数），
  要在它们上面显示投币率 / 转发率就得新增请求。
- 同一个视频只会查一次，**勾一项和勾多项的请求数是一样的** —— 一次拿回来的本来就是完整数据。

## 数据来源

比率都是脚本自己算的：**比率 = 该指标数量 ÷ 播放量**，弹幕密度 = 弹幕数 ÷ 播放量。
数据全部来自 B 站自己的接口和页面数据，不经过任何第三方服务器。

## FAQ

### Q：能显示成百分比吗？分数看不习惯

A：打开设置面板 →「显示格式」→ 点「百分比」。

<!-- TODO 待补充截图 -->

### Q：部分视频封面颜色较浅，比率看不清楚

A：可以使用 `stylus` 这款插件（[chrome](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne?hl=zh-CN)|[firefox](https://addons.mozilla.org/firefox/addon/styl-us/)|[github](https://github.com/openstyles/stylus)）给 `bilibili.com` 添加如下的css：
```css
.bili-video-card__stats--left,.bili-stats-group {
    text-shadow: #000 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
}
```
这段代码会给文本添加一个黑色描边，对比如下：

![使用stylus添加描边](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/stylus.png)

### Q：为什么我的转发按钮不见了？

![转发按钮消失](https://raw.githubusercontent.com/rsykvjhp/bilibili-show-rate/master/pic/share-button-hidden.png)

A：多半是 Adblock Plus 的 **Fanboy's Social Blocking List** 过滤列表把转发按钮屏蔽掉了。
可以右键 Adblock Plus 图标 → 管理扩展 → 高级 → 过滤列表 → 关闭这一项。

### Q：勾上投币率之后消耗的流量会不会暴涨？

A：不会。每个视频只查一次接口，一次就拿回完整数据，所以「勾一项」和「勾多项」的请求数是一样的。
UP主主页一屏可能有上百张卡片，脚本限制了同时最多 6 个请求，剩下的排队慢慢补。

## 已知问题

- 首页的推广视频（标题前有粉色小火箭的那种）不会显示比率。要支持的话性能消耗明显更大，
  而且会引出别的问题，所以不打算支持。
- UP主主页和分区页的比率需要逐个视频查接口，卡片多的时候是边滚边补的，会有短暂的空白。

## 更新日志

见 [Greasy Fork 的版本历史](https://greasyfork.org/zh-CN/scripts/483379/versions)

## 许可证

[GPL-3.0-or-later](https://github.com/rsykvjhp/bilibili-show-rate/blob/master/LICENSE) © 魂hp

源码仓库：[github.com/rsykvjhp/bilibili-show-rate](https://github.com/rsykvjhp/bilibili-show-rate)
