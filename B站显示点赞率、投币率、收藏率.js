// ==UserScript==
// @name         B站显示点赞率、投币率、收藏率
// @namespace    http://tampermonkey.net/
// @version      1.1.6
// @description  显示b站 | bilibili | 哔哩哔哩 点赞率、投币率、收藏率
// @license      MIT
// @author       魂hp
// @website      https://www.bilibili.com/opus/880791333061525569
// @match        http*://www.bilibili.com/
// @match        http*://www.bilibili.com/?*
// @match        http*://www.bilibili.com/video/*
// @match        http*://www.bilibili.com/list/watchlater*
// @match        http*://www.bilibili.com/c/*
// @match        http*://search.bilibili.com/all?*
// @icon         data:image/jpeg;base64,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
// @grant        GM.addStyle
// @grant        unsafeWindow
// @run-at       document-start
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue


// @downloadURL https://update.greasyfork.org/scripts/483379/B%E7%AB%99%E6%98%BE%E7%A4%BA%E7%82%B9%E8%B5%9E%E7%8E%87%E3%80%81%E6%8A%95%E5%B8%81%E7%8E%87%E3%80%81%E6%94%B6%E8%97%8F%E7%8E%87.user.js
// @updateURL https://update.greasyfork.org/scripts/483379/B%E7%AB%99%E6%98%BE%E7%A4%BA%E7%82%B9%E8%B5%9E%E7%8E%87%E3%80%81%E6%8A%95%E5%B8%81%E7%8E%87%E3%80%81%E6%94%B6%E8%97%8F%E7%8E%87.meta.js
// ==/UserScript==

(function () {
    'use strict';

    // ===================== 设置 =====================

    // representation 表示比率的表示形式：fractions 为分数，percentage 为百分比
    let representation = GM_getValue('representation');
    if (representation == null) {
        representation = 'percentage';
        GM_setValue('representation', representation);
    }
    const isFractions = representation === 'fractions';

    // 注册脚本菜单以实现两种表示方式的相互转换
    GM_registerMenuCommand('切换比率的表示方式（百分比和分数）', function () {
        GM_setValue('representation', isFractions ? 'percentage' : 'fractions');
        location.reload();
    });

    // ===================== 工具函数 =====================

    // 点赞图标（首页卡片和分区卡片样式略有不同，用参数区分）
    const LIKE_ICON_PATH = 'M594.176 151.168a34.048 34.048 0 0 0-29.184 10.816c-11.264 13.184-15.872 24.064-21.504 40.064l-1.92 5.632c-5.632 16.128-12.8 36.864-27.648 63.232-25.408 44.928-50.304 74.432-86.208 97.024-23.04 14.528-43.648 26.368-65.024 32.576v419.648a4569.408 4569.408 0 0 0 339.072-4.672c38.72-2.048 72-21.12 88.96-52.032 21.504-39.36 47.168-95.744 63.552-163.008a782.72 782.72 0 0 0 22.528-163.008c0.448-16.832-13.44-32.256-35.328-32.256h-197.312a32 32 0 0 1-28.608-46.336l0.192-0.32 0.64-1.344 2.56-5.504c2.112-4.8 5.12-11.776 8.32-20.16 6.592-17.088 13.568-39.04 16.768-60.416 4.992-33.344 3.776-60.16-9.344-84.992-14.08-26.688-30.016-33.728-40.512-34.944zM691.84 341.12h149.568c52.736 0 100.864 40.192 99.328 98.048a845.888 845.888 0 0 1-24.32 176.384 742.336 742.336 0 0 1-69.632 178.56c-29.184 53.44-84.48 82.304-141.76 85.248-55.68 2.88-138.304 5.952-235.712 5.952-96 0-183.552-3.008-244.672-5.76-66.432-3.136-123.392-51.392-131.008-119.872a1380.672 1380.672 0 0 1-0.768-296.704c7.68-72.768 70.4-121.792 140.032-121.792h97.728c13.76 0 28.16-5.504 62.976-27.456 24.064-15.104 42.432-35.2 64.512-74.24 11.904-21.184 17.408-36.928 22.912-52.8l2.048-5.888c6.656-18.88 14.4-38.4 33.28-60.416a97.984 97.984 0 0 1 85.12-32.768c35.264 4.096 67.776 26.88 89.792 68.608 22.208 42.176 21.888 84.864 16 124.352a342.464 342.464 0 0 1-15.424 60.544z m-393.216 477.248V405.184H232.96c-40.448 0-72.448 27.712-76.352 64.512a1318.912 1318.912 0 0 0 0.64 282.88c3.904 34.752 32.96 61.248 70.4 62.976 20.8 0.96 44.8 1.92 71.04 2.816z';

    function likeIcon(className) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="18" height="18" fill="#ffffff"
                    ${className ? `class="${className}"` : ''} style="margin-right:2px;">
                    <path d="${LIKE_ICON_PATH}" fill="currentColor"></path>
                </svg>`;
    }

    // 卡片上比率的 class（原来用 id="data"，同一页会有多个重名 id，改用 class）
    const RATE_ITEM_CLASS = 'bili-rate-item';
    const RATE_VALUE_CLASS = 'bili-rate-value';

    const BVID_RE = /BV[0-9A-Za-z]{10}/;

    // 从任意字符串里取出 BV 号，作为视频的唯一标识
    function getBvid(text) {
        const match = BVID_RE.exec(text || '');
        return match ? match[0] : null;
    }

    // 根据播放量和点赞数算出比率，并给出对应的颜色
    function getRateAndColor(view, like) {
        const res = { rate: 0, color: 'inherit' };
        if (!view || !like) {
            return res;
        }
        const num = view / like;
        // 比率大于十分之一为橘色，大于二十五分之一为紫色，其他为黑色
        // （如需调整颜色或区间，改这里即可）
        if (num <= 10) {
            res.rate = isFractions ? num.toFixed(2) : (like * 100 / view).toFixed(2);
            res.color = 'DarkOrange';
        } else if (num <= 25) {
            res.rate = isFractions ? num.toFixed(1) : (like * 100 / view).toFixed(2);
            res.color = 'violet';
        } else {
            res.rate = isFractions ? num.toFixed(0) : (like * 100 / view).toFixed(2);
        }
        return res;
    }

    // ===================== 卡片上的比率 =====================

    // bvid -> { view, like }
    // 页面上的接口数据都先收集到这里，再统一渲染到卡片上。
    // 这样即使卡片比数据先出现（服务端渲染的页面就是这样），数据到达后也能补上。
    const statMap = new Map();

    // 从卡片里找出对应的 BV 号
    function bvidOfCard(statsEl) {
        const card = statsEl.closest('.feed-card, .bili-video-card');
        const link = card && card.querySelector('a[href*="/video/"]');
        return link ? getBvid(link.href) : null;
    }

    // 分区页（/c/xxx）的首屏卡片是服务端渲染的，页面接口里只有播放量、没有点赞数，
    // 所以对这些拿不到数据的卡片单独查一次视频详情。其它页面接口数据是全的，不需要。
    const needStatFallback = location.pathname.startsWith('/c/');
    const statRequested = new Set();

    function fetchStatByBvid(bvid) {
        if (statRequested.has(bvid)) {
            return;
        }
        statRequested.add(bvid);
        fetch('https://api.bilibili.com/x/web-interface/view?bvid=' + bvid)
            .then(function (res) { return res.json(); })
            .then(function (json) {
                const stat = json && json.data && json.data.stat;
                if (stat) {
                    statMap.set(bvid, { view: stat.view, like: stat.like });
                    render();
                }
            })
            .catch(function () {});
    }

    // 给一个卡片的统计区域挂上比率，style 为 'inline'（首页/搜索页）或 'cover'（分区页）
    function applyRate(statsEl, style) {
        const bvid = bvidOfCard(statsEl);
        const stat = bvid ? statMap.get(bvid) : null;
        if (!stat) {
            if (needStatFallback && bvid) {
                fetchStatByBvid(bvid);
            }
            return;
        }
        // 已经挂过同一个视频的比率了。
        // 注意不能只看 dataset：服务端渲染的卡片在水合时会被 Vue 重渲染，
        // 我们插进去的节点会被冲掉，但 dataset 还留着，只看 dataset 就再也补不上了。
        const old = statsEl.querySelector('.' + RATE_ITEM_CLASS);
        if (old && statsEl.dataset.rateBvid === bvid) {
            return;
        }
        // 卡片可能被复用成了另一个视频，或者插的节点被页面重渲染冲掉了，先清掉上一次挂的
        if (old) {
            old.remove();
        }

        const template = statsEl.firstElementChild;
        if (!template) {
            return;
        }

        const rateAndColor = getRateAndColor(stat.view, stat.like);
        const value = `<span class="${RATE_VALUE_CLASS}"></span>`;
        const item = template.cloneNode(false);
        item.classList.add(RATE_ITEM_CLASS);
        if (style === 'inline') {
            item.innerHTML = likeIcon('bili-video-card__stats--icon')
                + `<span class="bili-video-card__stats--text">${isFractions ? '1/' + value : value + '%'}</span>`;
            statsEl.appendChild(item);
        } else {
            item.innerHTML = likeIcon('')
                + `<span>${isFractions ? '1/' + value : value + '%'}</span>`;
            statsEl.insertBefore(item, statsEl.lastElementChild);
        }
        const valueEl = item.querySelector('.' + RATE_VALUE_CLASS);
        valueEl.style.color = rateAndColor.color;
        valueEl.textContent = rateAndColor.rate;
        statsEl.dataset.rateBvid = bvid;
    }

    // 把已有的数据渲染到页面上所有还没挂比率的卡片上
    function render() {
        // 没有数据时什么都不用做；分区页除外，它要靠 applyRate 触发补数据
        if (statMap.size === 0 && !needStatFallback) {
            return;
        }
        document.querySelectorAll('.bili-video-card__stats--left').forEach(function (el) {
            applyRate(el, 'inline');
        });
        document.querySelectorAll('.bili-cover-card__stats').forEach(function (el) {
            applyRate(el, 'cover');
        });
    }

    // 页面结构变化很频繁，合并成一次渲染
    let renderScheduled = false;
    function scheduleRender() {
        if (renderScheduled) {
            return;
        }
        renderScheduled = true;
        setTimeout(function () {
            renderScheduled = false;
            render();
        }, 200);
    }

    // Vue 的 ref 取值要加 ._value，从 store 里读数据时用得上
    function unwrap(value) {
        return value && value.__v_isRef ? value._value : value;
    }

    // 收一条数据进 statMap。各接口的字段名不一样，这里统一识别：
    //   bvid / uri        视频标识
    //   stat.view / play  播放量
    //   stat.like / like  点赞数
    function collectEntry(entry) {
        if (!entry) {
            return;
        }
        // 搜索页的 result[] 是按类型分组的，真正的视频列表在 entry.data[] 里
        const list = unwrap(entry.data);
        if (Array.isArray(list)) {
            list.forEach(collectEntry);
            return;
        }
        const bvid = entry.bvid || getBvid(entry.uri);
        const view = entry.stat ? entry.stat.view : entry.play;
        const like = entry.stat ? entry.stat.like : entry.like;
        if (bvid && view != null && like != null) {
            statMap.set(bvid, { view: view, like: like });
        }
    }

    // 从接口返回的数据里收集视频的播放量和点赞数。
    // 首页、搜索页、分区页的返回结构不一样，这里统一处理：
    //   - data.item[]     首页推荐（uri + stat）
    //   - data.archives[] 分区推荐（bvid + stat）
    //   - data.result[]   搜索页（bvid + play + like）
    function collect(data) {
        if (!data || typeof data !== 'object') {
            return;
        }
        ['item', 'archives', 'result'].forEach(function (field) {
            const list = unwrap(data[field]);
            if (Array.isArray(list)) {
                list.forEach(collectEntry);
            }
        });
        render();
    }

    // 劫持 fetch，把返回视频列表的接口数据交给 collect
    const VIDEO_LIST_URL_RE = /rcmd|search\/(type|all)/;
    const originFetch = unsafeWindow.fetch;
    unsafeWindow.fetch = function (input, init) {
        const promise = originFetch.apply(this, arguments);
        const url = typeof input === 'string' ? input : (input && input.url) || '';
        if (VIDEO_LIST_URL_RE.test(url)) {
            promise.then(function (response) {
                response.clone().json().then(function (json) {
                    collect(json && json.data);
                }).catch(function () {});
            }).catch(function () {});
        }
        return promise;
    };

    // 首屏的卡片是服务端渲染的，这批数据不会走接口，只存在于 Vue 的 store 里，
    // 所以要单独从 store 里补一次。首页和搜索页的 store 结构不同，分别取：
    //   首页   __pinia.feed.data.recommend.item[]            （uri + stat）
    //   搜索页 __pinia.searchResponse.searchAllResponse.result[]（bvid + play + like）
    // store 里的值外面可能包了一层 Vue 的 ref，统一用 unwrap 取值。
    function collectFromStore() {
        const pinia = unsafeWindow.__pinia;
        if (!pinia) {
            return false;
        }
        let collected = false;

        const feed = unwrap(pinia.feed);
        const feedData = feed ? unwrap(feed.data) : null;
        const feedItems = feedData && feedData.recommend ? feedData.recommend.item : null;
        if (Array.isArray(feedItems) && feedItems.length) {
            collect({ item: feedItems });
            collected = true;
        }

        const searchResponse = unwrap(pinia.searchResponse);
        const searchAll = searchResponse ? unwrap(searchResponse.searchAllResponse) : null;
        const searchResult = searchAll ? unwrap(searchAll.result) : null;
        if (Array.isArray(searchResult) && searchResult.length) {
            collect({ result: searchResult });
            collected = true;
        }

        return collected;
    }

    // 新卡片插入（翻页、无限滚动、站内跳转）时补渲染
    new MutationObserver(scheduleRender).observe(document, {
        childList: true,
        subtree: true
    });

    // ===================== 视频详情页 =====================

    const isVideoPage = /^\/video\//.test(location.pathname)
        || /^\/list\/watchlater/.test(location.pathname);

    if (isVideoPage) {
        document.addEventListener('DOMContentLoaded', function () {
            if (!(unsafeWindow?.__INITIAL_STATE__?.videoData?.stat?.view)) {
                return;
            }
            // 修改样式
            GM.addStyle(`
                .video-toolbar-left-item{
                    width:auto !important;
                }
                .toolbar-left-item-wrap{
                    display:flex !important;
                    margin-right: 12px !important;
                }
                .video-share-info{
                    width:auto !important;
                    max-width:90px;
                }
                .video-share-info-text{
                    position: relative !important;
                }
            `);
            // 百分比形式会占用更大的空间，需要额外添加样式
            if (!isFractions) {
                GM.addStyle(`
                    .video-toolbar-item-icon {
                        margin-right:6px !important;
                    }
                    .toolbar-right-note{
                        margin-right:5px !important;
                    }
                    .toolbar-right-ai{
                        margin-right:12px !important;
                    }
                `);
            }

            class videoData {
                videoStat = {
                    view: 0,
                    like: 0,
                    coin: 0,
                    favorite: 0,
                    share: 0
                };
                constructor() {
                    this.initVideoStat();
                }
                initVideoStat() {
                    for (let key in this.videoStat) {
                        this.videoStat[key] = unsafeWindow.__INITIAL_STATE__.videoData.stat[key];
                    }
                }
                // 计算点赞率、投币率、收藏率、转发率，并获取对应的颜色
                getRateAndColorByNameStr(nameStr) {
                    return getRateAndColor(this.videoStat.view, this.videoStat[nameStr]);
                }
            }

            const vData = new videoData();
            //添加元素
            const div = {
                like: {},
                coin: {},
                favorite: {},
                share: {}
            };
            for (let e in div) {
                div[e] = document.createElement('div');
                div[e].style.setProperty('display', 'flex')
                div[e].style.setProperty('align-items', 'center')
                div[e].style.setProperty('color', 'var(--text2)')
                if (isFractions) {
                    div[e].innerHTML = `
                        <span style="margin-left: 5px;margin-right: 3px;font-size:medium;">≈</span>
                        <math xmlns="http://www.w3.org/1998/Math/MathML" style="font-size: 23px;">
                            <mfrac>
                                <mrow>
                                    <mn>1</mn>
                                    </mrow><mrow>
                                    <mi id="data"></mi>
                                </mrow>
                            </mfrac>
                        </math>
			        `;
                } else {
                    div[e].innerHTML = `
                        <span style="margin-left: 5px;margin-right: 3px;font-size:medium;">≈</span>
                        <span id="data" style="font-family: math;font-size: initial;"></span><span style="font-family: math;margin-left: 2px;"> %</span>
			        `;
                }
            }
            // 更新数据
            function updateRate() {
                for (let e in div) {
                    let data = div[e].querySelector('#data');
                    let rateAndColor = vData.getRateAndColorByNameStr(e);
                    data.style.setProperty('color', rateAndColor.color);
                    data.textContent = rateAndColor.rate;
                }
            }
            updateRate();

            let addElementObserver = new MutationObserver(function (mutationsList) {
                for (let mutation of mutationsList) {
                    if (mutation.target.classList != null && mutation.target.classList.contains('video-toolbar-right')) {
                        addElementObserver.disconnect();
                        document
                            .querySelector('.video-like')
                            .parentNode.appendChild(div.like);
                        document
                            .querySelector('.video-coin')
                            .parentNode.appendChild(div.coin);
                        document
                            .querySelector('.video-fav')
                            .parentNode.appendChild(div.favorite);
                        document
                            .querySelector('.video-share-wrap')
                            .parentNode.appendChild(div.share);
                        break;
                    }
                }
            });
            addElementObserver.observe(document.querySelector('div.video-toolbar-right'), {
                childList: true,
                subtree: true,
                attributes: true
            });

            // 当 bvid 发生改变时更新数据
            let currentBvid = unsafeWindow.__INITIAL_STATE__.videoData.bvid;
            new MutationObserver(function () {
                const newBvid = unsafeWindow.__INITIAL_STATE__.videoData.bvid;
                if (newBvid !== currentBvid) {
                    vData.initVideoStat();
                    updateRate();
                    currentBvid = newBvid;
                }
            }).observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    } else {
        if (location.hostname === 'search.bilibili.com') {
            // 搜索页卡片底部空间比较小，需要换行
            GM.addStyle(`
                .bili-video-card__stats--left{
                    flex-wrap: wrap;
                    align-self: flex-end;
                }
            `);
        }

        // store 要等 Vue 挂载完才出现，所以轮询等它，拿到数据就停（最多约 10 秒）
        let storeTries = 0;
        const storeTimer = setInterval(function () {
            let collected = false;
            try {
                collected = collectFromStore();
            } catch (e) {
                // 页面结构万一变了，也不能影响脚本其它部分
            }
            if (collected || ++storeTries > 50) {
                clearInterval(storeTimer);
            }
        }, 200);
    }
})();
