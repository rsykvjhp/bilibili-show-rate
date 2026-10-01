// ==UserScript==
// @name         B站显示点赞率、投币率、收藏率
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description  显示b站 | bilibili | 哔哩哔哩 卡片的点赞率、投币率、收藏率、转发率、弹幕密度，支持逐页面配置
// @license      MIT
// @author       魂hp
// @website      https://www.bilibili.com/opus/880791333061525569
// @match        http*://www.bilibili.com/
// @match        http*://www.bilibili.com/?*
// @match        http*://www.bilibili.com/video/*
// @match        http*://www.bilibili.com/list/watchlater*
// @match        http*://www.bilibili.com/c/*
// @match        http*://search.bilibili.com/all?*
// @match        http*://space.bilibili.com/*
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEAAQAMBEQACEQEDEQH/xAAaAAABBQEAAAAAAAAAAAAAAAADAAEEBQYC/8QAMRAAAgEDBAADBQcFAAAAAAAAAQIDAAQRBRIhMRNRYQYUIkFTI3GBkaGxwTJCUqLC/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAIBAwQGBQf/xAAwEQACAQIEAgcIAwAAAAAAAAABAgADEQQhMUESUQUTYXGh0fAUIzKBkbHB4TM0Qv/aAAwDAQACEQMRAD8ABDvmlSKFS8kjBUUdsT0K7diFBY6TjxTJNhLuxgtEhkilWOWV1YoxIVZR1mN24UKcknBzjjPNYKtSoWBBsPt3gc9uV85tpUaYUgi5z9AnS2/ORLOxW8u5PAZjZpIQsjcFlzx+lV43pD2emF/2R9Js6L6H9sqFm/jB15+uc0kKJDGEQYUdAVyzuWJLZkzvUppTUIgsBO91LGtHIIQMejRIyvaNuok2i3UQtMxokVtHZS30rNMse0ytbtkpG3wsrIcEEE53D7wTjFdjiajlwgyvpfmNLH8HuM+d0aSqpY+hvl65xJNca1K6u4MG4LLdBSGugp+EnPXABwPnz3WTE4hMEoVPi2Gy31/V/tPSwHR745uJ/g3O7W28/OaG3W3WFIolEe0YAHVc4zF2LMczOwSn1ShVGQjvuj7HHnSywEGPF8beg7okNlGkm3tx/SOqIKtpxvojWi380QtML7N6Jda7dhYV+zGdzZxkfMV2PSGPXDjgXN/t2+U4rB4EVPe1TZB49gm6aBbKQ2cUMY8IYwB5VyLszMWbMmddQCdUpTIbRfafSSllmXOdF5l+Hw1HpRIspzvD3Frd2sSNLDGofOF3fvUkESqnXp1SQp0kb7T6SVEuy5xBjkh4lAwcECiHcZG8TmoltoX2XZLbVbWKJQqcoAPLBq3jZ34mNyZkxtJRhCqiwFobVW26xdj76RtY2G/rpAafbtJbveLIB4DbtpHeMHv8/wAqAN49eqFcUiPillrlk1xqV7KkihY4w5GDyNhP/JpmFzMeDrinRRSNTbxtH1pxcaVpcpcKWj7PngZ/Y0NoJGCHV16q8j+ZSwQvLcpATtLZwe88E/xS2npPUCIXtpNE1uW0xbNZATHdCIPjjkd4/GntlPIFUCuattVv9JnLuM2twYWYMQAcj1AP80hFp7FKoKi8Q7fAyPpk/h6naP8A4zIf9hQNZOITiouOwzUavpVu2pl5NShgmugRHHIMbsYzjnmnK3M8bC4x1ogBCQupEi2ehmB7u31G3glJt2a2lIDbSO8Z5B5BoAtlLquODhHpEjMXHn9JJktre/Mk08KyFtMSSJjztODyP0o1lK1Ho2VTazkHwnKWUd/7MwG5uRbx2pdmkK5AUE/xzRa4jNXahjG4VuWtIMmjSxW6XUVxb39gpDybSCCgOT6EYqOE6zSuNV2NMqUc6d8trm2toFvbOKCNLdJIGESDauCcHgdUx3mGnUd+CoTmQwvvM37RQw2eszwW8axxrtIRehlQaRhnPWwDtUw6sxuZSJMUdXHakGom8rcETW3vtXaTzRsdLdpYstH7xIqqM/PjPlTlhPDpdF1UU+8yOtr/AKlY2v6g+oe+tcWpdVKJEc7FU98Zzn1zUcRvNYwFEUuqAPfvB2ur3dvH4ZuLeVPd/d1DHGxPw7NF49TC03N7EZ8Xz/Em6X7QW9jpbWFzBJch92WSRAuD8sk5/SpBymfE4F6tcVka1rc9vlAX+uS3Nn7laLbWNmRgpG+WYep4x6+fnUE7SyhglSp1tQlmgpdavJ7hgZogGhVHEa8MFyRnOeeexReWLg6SLodT4yBqWpSalevdzRpG7gZVCSBgY+f3VBN5poYdaFMU1NwJVl6JotJQvEd18WJCOifKiV9WRoYSWSGNCSkRP9oFEVQxMD71H9COiPwHnF71H9COiHAecLFLFKpxHErA9HyoisGG85kuo43YRImMY3CiSEJGZkXfzRLLQGamPFuohGzRCPuohFuohGzRCPuohFmiE//Z
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

    // ===================== 指标与页面 =====================

    // 卡片上的五个指标图标。点赞/投币/收藏/转发都用「空心」版本，
    // 和卡片自带的播放/弹幕图标风格一致；弹幕图标本身就是空心的。
    const ICON_VIEW_BOX = {
        like: '0 0 18 18',
        coin: '0 0 28 28',
        favorite: '0 0 24 24',
        share: '0 0 18 18',
        danmaku: '0 0 24 24'
    };

    // 每个图标的 svg 内容。点赞/收藏/转发是填充路径，投币是描边图形
    const ICON_INNER = {
        like: '<path d="M10.4511 2.2220125C10.218425 2.194885 10.002175 2.2953725 9.884175 2.433395C9.4264 2.9688525 9.321875 3.7501399999999996 8.978575 4.3581725C8.533574999999999 5.146395 8.1198 5.6213375 7.609775000000001 6.068507499999999C7.1751375 6.449565 6.738407499999999 6.697442499999999 6.3125 6.8050575L6.3125 14.854575C6.9198900000000005 14.868174999999999 7.572900000000001 14.876875 8.25 14.876875C9.936425 14.876875 11.367025 14.823325 12.33115 14.773699999999998C13.03235 14.737575 13.646025000000002 14.390075 13.966750000000001 13.81945C14.401900000000001 13.04535 14.9387 11.909650000000001 15.264174999999998 10.571200000000001C15.56665 9.327275 15.704699999999999 8.304325 15.766675 7.582224999999999C15.7988 7.208262500000001 15.50165 6.875019999999999 15.059999999999999 6.875019999999999L11.323274999999999 6.875019999999999C11.156575 6.875019999999999 11.000800000000002 6.791952499999999 10.907975 6.653499999999999C10.783725 6.468192500000001 10.82855 6.2670175 10.9037 6.07485C11.059 5.675084999999999 11.29355 4.9974475 11.382425000000001 4.4018275C11.470875000000001 3.80917 11.450999999999999 3.32219 11.212050000000001 2.86913C10.9571 2.3857825 10.66065 2.2464475 10.4511 2.2220125zM12.034300000000002 5.87502L15.059999999999999 5.87502C16.02035 5.87502 16.850875 6.64489 16.763 7.667825C16.697100000000002 8.435525 16.55155 9.5092 16.235825000000002 10.807500000000001C15.882625 12.259950000000002 15.3035 13.482225 14.838450000000002 14.309474999999999C14.32695 15.2194 13.377475 15.721150000000002 12.38255 15.772375C11.405125 15.822725 9.956949999999999 15.876875000000002 8.25 15.876875000000002C6.5961925 15.876875000000002 5.0846825 15.826025000000001 4.0136674999999995 15.77715C2.8370825 15.723474999999999 1.8519999999999999 14.850000000000001 1.725645 13.654824999999999C1.6404649999999998 12.849274999999999 1.5625 11.80725 1.5625 10.689375C1.5625 9.665175000000001 1.6279400000000002 8.736175 1.7045524999999997 7.998975C1.8351224999999998 6.7427075 2.9137075 5.87502 4.130655 5.87502L5.8125 5.87502C6.072015 5.87502 6.457235 5.7490675 6.9505175 5.316582499999999C7.377705000000001 4.942045 7.7193000000000005 4.5546075 8.107775 3.8665374999999997C8.492075 3.18585 8.605825 2.389785 9.124075 1.783595C9.452975 1.3988800000000001 9.99475 1.162025 10.5669 1.228745C11.16225 1.29816 11.717425 1.683875 12.09655 2.4025825000000003C12.478275 3.1262375000000002 12.474075 3.8618225 12.371500000000001 4.54938C12.302149999999997 5.0139949999999995 12.155425000000001 5.510059999999999 12.034300000000002 5.87502zM5.3125 14.82705L5.3125 6.875019999999999L4.130655 6.875019999999999C3.3792199999999997 6.875019999999999 2.77211 7.400795 2.6991975000000004 8.10235C2.6253525 8.812875 2.5625 9.70665 2.5625 10.689375C2.5625 11.762875 2.6374975 12.768475 2.7200975 13.549700000000001C2.7919925 14.229675 3.3521950000000005 14.74595 4.05924 14.778224999999999C4.4278775 14.795 4.849985 14.812050000000001 5.3125 14.82705z" fill="currentColor"></path>',
        coin: '<circle cx="14.045" cy="14.045" r="10.595"></circle><path d="M10.568 7.722h6.954"></path><path d="M14.045 7.722v12.835"></path><path d="M13.138 11.196C11 12 9.2 13.2 8.609 15.992V17.2"></path><path d="M14.952 11.196C17.09 12 18.89 13.2 19.481 15.992V17.2"></path>',
        favorite: '<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1617 3.28288C10.9137 1.75922 13.0863 1.75922 13.8383 3.28288L15.5564 6.76404C15.6656 6.9854 15.8768 7.13882 16.1211 7.17432L19.9628 7.73255C21.6442 7.97688 22.3156 10.0432 21.0989 11.2292L18.319 13.9389C18.1423 14.1112 18.0616 14.3595 18.1033 14.6028L18.7596 18.4289C19.0468 20.1036 17.2891 21.3807 15.7851 20.59L12.349 18.7835C12.1305 18.6687 11.8695 18.6687 11.651 18.7835L8.21488 20.59C6.71094 21.3807 4.95321 20.1036 5.24043 18.4289L5.89667 14.6028C5.9384 14.3595 5.85774 14.1112 5.68097 13.9389L2.9011 11.2292C1.68439 10.0432 2.35579 7.97688 4.03724 7.73255L7.87893 7.17432C8.12321 7.13882 8.33439 6.9854 8.44363 6.76404L10.1617 3.28288ZM12.4932 3.94673C12.2915 3.53794 11.7085 3.53794 11.5068 3.94673L9.78874 7.42789C9.461 8.09196 8.82747 8.55224 8.09463 8.65873L4.25294 9.21696C3.80182 9.28251 3.62168 9.8369 3.94812 10.1551L6.72799 12.8648C7.25829 13.3817 7.50027 14.1265 7.37508 14.8563L6.71884 18.6825C6.64178 19.1318 7.11337 19.4744 7.51687 19.2623L10.953 17.4558C11.6085 17.1112 12.3915 17.1112 13.047 17.4558L16.4831 19.2623C16.8866 19.4744 17.3582 19.1318 17.2811 18.6825L16.6249 14.8563C16.4997 14.1265 16.7417 13.3817 17.272 12.8648L20.0519 10.1551C20.3783 9.8369 20.1982 9.28251 19.7471 9.21696L15.9054 8.65873C15.1725 8.55224 14.539 8.09196 14.2113 7.42789L12.4932 3.94673Z" fill="currentColor"></path>',
        share: '<path d="M9.789075 2.2956175C8.97235 1.6308450000000003 7.74999 2.212005 7.74999 3.26506L7.74999 5.3915500000000005C6.642015000000001 5.5780325 5.3073725 6.040405 4.141735000000001 7.11143C2.809155 8.335825 1.751515 10.3041 1.45716 13.404099999999998C1.409905 13.9018 1.7595399999999999 14.22505 2.105415 14.317499999999999C2.442215 14.40755 2.8807175 14.314625 3.127745 13.92915C3.9664525 12.620249999999999 4.89282 11.894575 5.765827499999999 11.50585C6.4628049999999995 11.19545 7.14528 11.093125 7.74999 11.0959L7.74999 13.235025C7.74999 14.2881 8.97235 14.869250000000001 9.789075 14.2045L15.556199999999999 9.510425000000001C16.355075 8.860149999999999 16.355075 7.640124999999999 15.556199999999999 6.989840000000001L9.789075 2.2956175zM9.165099999999999 3.0768275000000003L14.895025 7.739050000000001C15.227975 7.980475 15.235775 8.468875 14.943874999999998 8.7142L9.17615 13.416800000000002C8.979474999999999 13.562024999999998 8.75 13.4269 8.75 13.227375000000002L8.75 10.638175C8.75 10.326975000000001 8.542125 10.134725 8.2544 10.1118C7.186765 10.02955 6.1563175 10.2037 5.150895 10.69295C4.14982 11.186925 3.2102250000000003 12.096525 2.573625 13.00995C2.54981 13.046975 2.52013 13.046025 2.5211725 12.986C2.8971525 10.0573 3.9373475 8.652125 4.807025 7.85305C5.87747 6.8694775 7.213197500000001 6.444867500000001 8.2272 6.33056C8.606525 6.287802500000001 8.74805 6.0849325 8.74805 5.7032275L8.74805 3.2615475C8.74805 3.0764875000000007 8.993175 2.9321925 9.165099999999999 3.0768275000000003z" fill="currentColor"></path>',
        danmaku: '<path fill-rule="evenodd" clip-rule="evenodd" d="M11.989 4.828c-.47 0-.975.004-1.515.012l-1.71-2.566a1.008 1.008 0 0 0-1.678 1.118l.999 1.5c-.681.018-1.403.04-2.164.068a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363l.906.046c1.205.063 1.808.095 3.607.095a.988.988 0 0 0 0-1.975c-1.758 0-2.339-.03-3.501-.092l-.915-.047a2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.01.342.017.65.025.88a.987.987 0 1 0 1.974-.068c-.008-.226-.016-.523-.025-.856v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.9-.032-1.743-.058-2.531-.078l1.05-1.46a1.008 1.008 0 0 0-1.638-1.177l-1.862 2.59c-.38-.004-.744-.007-1.088-.007h-.13Zm.521 4.775h-1.32v4.631h2.222v.847h-2.618v1.078h2.618l.003.678c.36.026.714.163 1.01.407h.11v-1.085h2.694v-1.078h-2.695v-.847H16.8v-4.63h-1.276a8.59 8.59 0 0 0 .748-1.42L15.183 7.8a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.294h-3.2v.98H9.33v1.43H7.472l-.308 3.453h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.005c.285.02.551.04.818.04 1.001-.067 1.562-.419 1.694-1.057.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858h1.254Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902h1.254v.902h-1.254Z" fill="currentColor"></path>'
    };

    // 生成一个指标图标。className 只有首页/搜索页的卡片需要传。
    // 投币是描边图形（fill:none + stroke），其余是填充路径。
    // fill-rule / clip-rule 不能省：收藏和弹幕是靠 evenodd 把中间掏空的，
    // 用默认的 nonzero 会填实，缩到 16px 就成了一块白斑。
    // 投币的 stroke-width 按 viewBox 缩放算过：它 viewBox 是 28，缩到 18px 后
    // 1.81 只剩 1.16px，比其它几个图标的线细一圈，所以加到 2.3（约 1.5px）对齐。
    const COIN_STROKE = 2.3;

    function metricIcon(key, className, size) {
        const paint = key === 'coin'
            ? ` fill="none" stroke="currentColor" stroke-width="${COIN_STROKE}" stroke-linecap="round" stroke-linejoin="round"`
            : ' fill="#ffffff"';
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ICON_VIEW_BOX[key]}" width="${size}" height="${size}"${paint}`
            + `${className ? ` class="${className}"` : ''} style="margin-right:2px;">${ICON_INNER[key]}</svg>`;
    }

    // 可以显示在卡片上的指标。key 同时也是 statMap 里的字段名，
    // note 是设置面板里跟在名字后面的小字说明
    const METRICS = [
        { key: 'like', label: '点赞率' },
        { key: 'coin', label: '投币率' },
        { key: 'favorite', label: '收藏率' },
        { key: 'share', label: '转发率' },
        { key: 'danmaku', label: '弹幕密度', note: '（弹幕数量÷播放量）' }
    ];

    // 卡片出现的四种页面
    const PAGES = [
        { key: 'home', label: '主页' },
        { key: 'section', label: '分区' },
        { key: 'search', label: '搜索' },
        { key: 'space', label: 'UP主主页' }
    ];

    // 每个页面「页面自己发的接口里就有」的字段，其余的指标只能按 bvid 额外请求
    // web-interface/view 接口，配置面板里会给这些项加提示。
    //   主页   rcmd 接口的 stat 里只有 view / like / danmaku
    //   分区   region/feed/rcmd 的 stat 里同样只有 view / like / danmaku
    //   搜索   SSR store 里有 play / like / danmaku / favorites
    //   UP主页 三个列表接口都不带点赞数，全部靠 view 接口
    const FREE_FIELDS = {
        home: ['view', 'like', 'danmaku'],
        section: ['view', 'like', 'danmaku'],
        search: ['view', 'like', 'danmaku', 'favorite'],
        space: []
    };

    // 当前页面属于哪一种
    function currentPageKey() {
        if (location.hostname === 'space.bilibili.com') {
            return 'space';
        }
        if (location.hostname === 'search.bilibili.com') {
            return 'search';
        }
        if (location.pathname.startsWith('/c/')) {
            return 'section';
        }
        if (location.pathname === '/') {
            return 'home';
        }
        return null;
    }

    const pageKey = currentPageKey();

    // ===================== 设置 =====================

    // representation 表示比率的表示形式：fractions 为分数，percentage 为百分比
    let representation = GM_getValue('representation');
    if (representation == null) {
        representation = 'percentage';
        GM_setValue('representation', representation);
    }
    let isFractions = representation === 'fractions';

    // 每个页面显示哪些指标。只存用户改过的项，读的时候补默认值（默认只开点赞率）。
    const CONFIG_KEY = 'showMetrics';
    const DEFAULT_METRIC = 'like';

    function defaultFor(page, metric) {
        return metric === DEFAULT_METRIC;
    }

    function loadConfig() {
        const saved = GM_getValue(CONFIG_KEY) || {};
        const cfg = {};
        PAGES.forEach(function (p) {
            cfg[p.key] = {};
            const savedPage = saved[p.key] || {};
            METRICS.forEach(function (m) {
                cfg[p.key][m.key] = savedPage[m.key] == null
                    ? defaultFor(p.key, m.key)
                    : !!savedPage[m.key];
            });
        });
        return cfg;
    }

    let config = loadConfig();

    function saveConfig() {
        GM_setValue(CONFIG_KEY, config);
    }

    // 当前页启用的指标，以及渲染它们需要的字段
    let enabledMetrics = [];
    let enabledKeys = [];
    let requiredFields = ['view'];

    // 有些页面的卡片从接口里拿不到点赞数，只能按 bvid 单独查一次视频详情：
    //   - 分区页（/c/xxx）：首屏卡片是服务端渲染的，接口数据里只有播放量
    //   - UP 主页：投稿、合集和系列、主页三栏的接口都只返回播放量，没有点赞数
    const needStatFallback = location.pathname.startsWith('/c/') || pageKey === 'space';

    // 用户勾了「当前页面拿不到」的指标时，才为这些指标额外请求接口。
    // 这样默认配置（只开点赞率）不会比旧版本多发任何请求。
    let allowFallback = needStatFallback;

    function refreshEnabled() {
        const page = pageKey ? config[pageKey] : null;
        enabledMetrics = page ? METRICS.filter(function (m) { return page[m.key]; }) : [];
        enabledKeys = enabledMetrics.map(function (m) { return m.key; });
        requiredFields = ['view'].concat(enabledKeys);
        const free = (pageKey && FREE_FIELDS[pageKey]) || [];
        const needsExtra = enabledKeys.some(function (k) { return free.indexOf(k) < 0; });
        allowFallback = needStatFallback || needsExtra;
    }
    refreshEnabled();

    // ===================== 工具函数 =====================

    const BVID_RE = /BV[0-9A-Za-z]{10}/;

    // 从任意字符串里取出 BV 号，作为视频的唯一标识
    function getBvid(text) {
        const match = BVID_RE.exec(text || '');
        return match ? match[0] : null;
    }

    // 根据播放量和某个统计量算出比率，并给出对应的颜色
    function getRateAndColor(view, num) {
        const res = { rate: 0, color: 'inherit' };
        if (!view || !num) {
            return res;
        }
        const ratio = view / num;
        // 比率大于十分之一为橘色，大于二十五分之一为紫色，其他为黑色
        // （如需调整颜色或区间，改这里即可）
        if (ratio <= 10) {
            res.rate = isFractions ? ratio.toFixed(2) : (num * 100 / view).toFixed(2);
            res.color = 'DarkOrange';
        } else if (ratio <= 25) {
            res.rate = isFractions ? ratio.toFixed(1) : (num * 100 / view).toFixed(2);
            res.color = 'violet';
        } else {
            res.rate = isFractions ? ratio.toFixed(0) : (num * 100 / view).toFixed(2);
        }
        return res;
    }

    // ===================== 卡片上的比率 =====================

    // bvid -> { view, like, coin, favorite, share, danmaku }
    // 页面上的接口数据都先收集到这里，再统一渲染到卡片上。
    // 这样即使卡片比数据先出现（服务端渲染的页面就是这样），数据到达后也能补上。
    const statMap = new Map();

    // 各接口返回的字段名不一样，这里把一条数据并进 statMap。
    // 只覆盖有值的字段，避免后来的接口把前面已经拿到的字段冲成 undefined。
    function mergeStat(bvid, fields) {
        const merged = Object.assign({}, statMap.get(bvid));
        let changed = false;
        for (const key in fields) {
            const value = fields[key];
            if (value != null && merged[key] !== value) {
                merged[key] = value;
                changed = true;
            }
        }
        if (changed || !statMap.has(bvid)) {
            statMap.set(bvid, merged);
        }
        return changed;
    }

    // 从卡片里找出对应的 BV 号
    function bvidOfCard(statsEl) {
        const card = statsEl.closest('.feed-card, .bili-video-card');
        const link = card && card.querySelector('a[href*="/video/"]');
        return link ? getBvid(link.href) : null;
    }

    // 卡片自带图标的尺寸：首页、分区页是 18px，UP 主页的卡片小一号，是 16px。
    // 我们的图标跟着它走，免得同一行里大小不一。
    function siblingIconSize(statsEl) {
        const icon = statsEl.querySelector('i, svg');
        const size = icon && Math.round(icon.getBoundingClientRect().width);
        return size >= 12 && size <= 24 ? size : 18;
    }

    // 卡片上比率的 class（原来用 id="data"，同一页会有多个重名 id，改用 class）
    const RATE_ITEM_CLASS = 'bili-rate-item';
    const RATE_VALUE_CLASS = 'bili-rate-value';
    // 分区页/UP 主页卡片上我们自己加的分组容器，见 groupStats()
    const STATS_GROUP_CLASS = 'bili-stats-group';

    // 分区页和 UP 主页的卡片结构和首页/搜索页不一样，所以这里要自己造一个分组：
    //   首页/搜索页：统计行里是「左侧一组（播放/弹幕/比率）」+「时长」两个兄弟节点，
    //               换行只发生在左侧那一组内部，时长始终待在右边
    //   分区/UP主页：统计行里是几个并列的 div，时长也在里面，会跟着一起换行
    // 于是把时长以外的项收进一个容器（时长留在外面），就能得到和首页/搜索页一样的效果。
    function groupStats(statsEl) {
        const duration = statsEl.lastElementChild;
        if (!duration) {
            return null;
        }
        let group = statsEl.firstElementChild;
        if (!group.classList.contains(STATS_GROUP_CLASS)) {
            if (statsEl.children.length < 2) {
                return null;
            }
            group = document.createElement('div');
            group.className = STATS_GROUP_CLASS;
            statsEl.insertBefore(group, statsEl.firstElementChild);
        }
        // 把「时长」以外、且 B 站没有隐藏的统计项收进容器（页面重渲染后可能有几项又跑到外面来了）。
        // B 站自己会按下标隐藏统计项——分区页的第 2 项（弹幕数）就是 display:none。
        // 这种隐藏项必须留在原地：一旦把它也挪进容器，时长就顶到了第 2 位，
        // 被同一条规则一起隐藏，卡片右下角的时长会凭空消失。
        Array.prototype.slice.call(statsEl.children).forEach(function (child) {
            if (child === group || child === duration) {
                return;
            }
            if (getComputedStyle(child).display === 'none') {
                return;
            }
            group.appendChild(child);
        });
        return group;
    }

    // 这个视频的数据够不够渲染当前启用的指标
    function statReady(stat) {
        if (!stat) {
            return false;
        }
        for (let i = 0; i < requiredFields.length; i++) {
            if (stat[requiredFields[i]] == null) {
                return false;
            }
        }
        return true;
    }

    function removeRateItems(statsEl) {
        statsEl.querySelectorAll('.' + RATE_ITEM_CLASS).forEach(function (el) {
            el.remove();
        });
    }

    // groupStats() 的反操作。用户把当前页面的指标全取消勾选后，
    // 得把收进容器的统计项还回去，否则统计条里会剩一个空壳容器、布局走样。
    function ungroupStats(statsEl) {
        const group = statsEl.querySelector(':scope > .' + STATS_GROUP_CLASS);
        if (!group) {
            return;
        }
        while (group.firstChild) {
            statsEl.insertBefore(group.firstChild, group);
        }
        group.remove();
    }

    // 造一个指标项。item 的标签结构从卡片自带的统计项上克隆，保证样式一致
    function buildRateItem(template, style, metric, stat, size, templateDisplay) {
        const rateAndColor = getRateAndColor(stat.view, stat[metric.key]);
        const item = template.cloneNode(false);
        item.classList.add(RATE_ITEM_CLASS);
        item.dataset.metric = metric.key;
        // 克隆会把 B 站的 class 一起带过来，而 B 站是按位置隐藏统计项的
        // （.bili-cover-card__stat:nth-child(2) { display: none !important }，分区页靠它藏起弹幕数）。
        // 我们的比率项一旦排到那个位置就会被一起隐藏——偏偏第 2 个正是点赞率。
        // 对方带 !important，所以这里只能用「行内 + !important」压过去（行内 !important 优先级最高）。
        if (templateDisplay) {
            item.style.setProperty('display', templateDisplay, 'important');
        }
        const value = `<span class="${RATE_VALUE_CLASS}"></span>`;
        if (style === 'inline') {
            item.innerHTML = metricIcon(metric.key, 'bili-video-card__stats--icon', size)
                + `<span class="bili-video-card__stats--text">${isFractions ? '1/' + value : value + '%'}</span>`;
        } else {
            item.innerHTML = metricIcon(metric.key, '', size)
                + `<span>${isFractions ? '1/' + value : value + '%'}</span>`;
        }
        const valueEl = item.querySelector('.' + RATE_VALUE_CLASS);
        valueEl.style.color = rateAndColor.color;
        valueEl.textContent = rateAndColor.rate;
        return item;
    }

    // 给一个卡片的统计区域挂上比率。
    // style 为 'inline'（首页/搜索页，横向排列）或 'cover'（分区页/UP 主页，压在封面底部）
    function applyRate(statsEl, style) {
        // 当前页面一个指标都没勾，把之前挂过的清掉、顺便把分组还原
        if (!enabledKeys.length) {
            removeRateItems(statsEl);
            ungroupStats(statsEl);
            return;
        }

        const bvid = bvidOfCard(statsEl);
        const stat = bvid ? statMap.get(bvid) : null;
        if (!statReady(stat)) {
            if (bvid && allowFallback) {
                fetchStatByBvid(bvid);
            }
            return;
        }

        // 已经挂过同样的指标了。
        // 注意不能只看标记：服务端渲染的卡片在水合时会被 Vue 重渲染，
        // 我们插进去的节点会被冲掉，但 dataset 还留着，只看 dataset 就再也补不上了。
        const signature = bvid + '|' + enabledKeys.join(',');
        if (statsEl.dataset.rateKey === signature && statsEl.querySelector('.' + RATE_ITEM_CLASS)) {
            return;
        }
        // 卡片可能被复用成了另一个视频，或者插的节点被页面重渲染冲掉了，先清掉上一次挂的
        removeRateItems(statsEl);

        // 分区页/UP 主页先把时长以外的项收进一个容器，时长留在外面
        // （这样换行只会挤到左边这一组，时长始终贴右）
        const group = style === 'cover' ? groupStats(statsEl) : null;
        const parent = group || statsEl;
        const template = parent.firstElementChild;
        if (!template) {
            return;
        }

        const size = siblingIconSize(statsEl);
        // 模板自身的 display（正常情况下是 flex），拿来给比率项做行内兜底
        const templateDisplay = getComputedStyle(template).display;
        enabledMetrics.forEach(function (metric) {
            const item = buildRateItem(template, style, metric, stat, size, templateDisplay);
            if (group) {
                group.appendChild(item);
            } else if (style === 'inline') {
                statsEl.appendChild(item);
            } else {
                statsEl.insertBefore(item, statsEl.lastElementChild);
            }
        });
        statsEl.dataset.rateKey = signature;
    }

    // 把已有的数据渲染到页面上所有还没挂比率的卡片上
    function render() {
        // 没有数据、又不需要补数据时什么都不用做
        if (statMap.size === 0 && !allowFallback) {
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

    // 按 bvid 补一次视频详情。接口里 stat 字段是全的（view/like/coin/favorite/share/danmaku），
    // 所以一次请求就能补齐当前页面缺的所有指标。
    const statRequested = new Set();

    // UP 主页一屏可能有上百张卡片，一次全甩出去太猛，排个队慢慢查
    const MAX_STAT_REQUESTS = 6;
    const statQueue = [];
    let statRunning = 0;

    function fetchStatByBvid(bvid) {
        if (statRequested.has(bvid)) {
            return;
        }
        statRequested.add(bvid);
        statQueue.push(bvid);
        runStatQueue();
    }

    function runStatQueue() {
        while (statRunning < MAX_STAT_REQUESTS && statQueue.length) {
            statRunning++;
            const bvid = statQueue.shift();
            fetch('https://api.bilibili.com/x/web-interface/view?bvid=' + bvid)
                .then(function (res) { return res.json(); })
                .then(function (json) {
                    const stat = json && json.data && json.data.stat;
                    if (stat) {
                        mergeStat(bvid, {
                            view: stat.view,
                            like: stat.like,
                            coin: stat.coin,
                            favorite: stat.favorite,
                            share: stat.share,
                            danmaku: stat.danmaku
                        });
                    }
                })
                .catch(function () {})
                .then(function () {
                    statRunning--;
                    scheduleRender();
                    runStatQueue();
                });
        }
    }

    // ===================== 数据收集 =====================

    // Vue 的 ref 取值要加 ._value，从 store 里读数据时用得上
    function unwrap(value) {
        return value && value.__v_isRef ? value._value : value;
    }

    // 收一条数据进 statMap。各接口的字段名不一样，这里统一识别：
    //   bvid / uri                 视频标识
    //   stat.view / play           播放量
    //   stat.like / like           点赞数
    //   stat.coin / coin           投币数
    //   stat.favorite / favorites  收藏数
    //   stat.share / share         转发数
    //   stat.danmaku / video_review 弹幕数
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
        if (!bvid) {
            return;
        }
        const stat = entry.stat || entry;
        mergeStat(bvid, {
            view: stat.view != null ? stat.view : stat.play,
            like: stat.like,
            coin: stat.coin,
            favorite: stat.favorite != null ? stat.favorite : stat.favorites,
            share: stat.share,
            danmaku: stat.danmaku != null ? stat.danmaku : stat.video_review
        });
    }

    // 从接口返回的数据里收集视频的统计信息。
    // 首页、搜索页、分区页的返回结构不一样，这里统一处理：
    //   - data.item[]     首页推荐（uri + stat）
    //   - data.archives[] 分区推荐（bvid + stat）
    //   - data.result[]   搜索页（bvid + play + like + favorites + danmaku）
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
    } else if (pageKey) {
        // ===================== 卡片页样式 =====================
        //
        // 首页/搜索页的统计行是「左侧一组 + 时长」两个兄弟节点，换行只发生在左侧那组里；
        // 分区页/UP 主页是几个并列的 div，时长也在里面，要靠 groupStats() 自己造分组。
        // 三种页面的统计条都是 absolute 贴底、B 站写死的高度，勾的指标一多就会换行、
        // 顶到渐变背景外面看不清，所以这里统一改成自适应高度，让渐变跟着长高。
        GM.addStyle(`
            /* 必须带 !important：B 站的样式是运行时注入的，顺序上排在我们后面，
               同优先级时它会赢，搜索页的统计条就还是写死的 38px、把换行的行挤出去。 */
            .bili-video-card__stats:has(.${RATE_ITEM_CLASS}),
            .bili-cover-card__stats:has(.${RATE_ITEM_CLASS}) {
                height: auto !important;
            }
            /* 首页/搜索页：左侧一组允许换行 */
            .bili-video-card__stats:has(.${RATE_ITEM_CLASS}) > .bili-video-card__stats--left {
                flex-wrap: wrap;
            }
            /* 时长：始终贴右，并且和最后一行齐平（搜索页原本就是靠 align-self 做到的） */
            .bili-video-card__stats:has(.${RATE_ITEM_CLASS}) > .bili-video-card__stats__duration {
                align-self: flex-end;
            }
            /* 分区页/UP 主页：只有我们造的这个分组会换行 */
            .${STATS_GROUP_CLASS} {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
            }
            /* B 站给 :last-child（也就是时长）加了 flex:1 1 0%，会把时长拉长、
               也会把我们插在组内最后的比率压扁，这里盖回来 */
            .bili-cover-card__stats:has(.${RATE_ITEM_CLASS}) > .bili-cover-card__stat:last-child {
                flex: 0 0 auto;
                align-self: flex-end;
            }
            .bili-cover-card__stats:has(.${RATE_ITEM_CLASS}) > .${STATS_GROUP_CLASS} > .${RATE_ITEM_CLASS} {
                flex: 0 0 auto;
            }
        `);

        if (pageKey === 'space') {
            // UP 主页的卡片比首页窄，一行要塞下四项，按默认 12px 的间距放不下，
            // 多出来的部分会全压到时长上，把时长挤成几个点。这里收紧到 4px。
            GM.addStyle(`
                .bili-cover-card__stats:has(.${RATE_ITEM_CLASS}) > .${STATS_GROUP_CLASS} > .bili-cover-card__stat {
                    margin-right: 4px;
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

    // ===================== 设置面板 =====================

    const PANEL_ID = 'bili-rate-panel';
    const PANEL_POS_KEY = 'panelPos';

    const CLOSE_ICON = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" width="22" height="22"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path></svg>';

    // 勾选「要额外请求接口」的指标时，鼠标悬停给出的提示
    const COST_TIP = '勾选后需要按视频逐个查询 B 站接口，访问更频繁、更耗流量。'
        + '同一分组里勾一项和勾多项的流量是一样的——每个视频只查一次，拿到的就是完整数据。';

    // 面板所在页面的深浅色。B 站夜间模式会把 html 背景刷成深色
    function isDarkPage() {
        const bg = getComputedStyle(document.documentElement).backgroundColor || '';
        const match = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(bg);
        if (match) {
            return (0.299 * +match[1] + 0.587 * +match[2] + 0.114 * +match[3]) < 128;
        }
        return matchMedia('(prefers-color-scheme: dark)').matches;
    }

    function panelSectionHtml(page) {
        const free = FREE_FIELDS[page.key];
        const rows = METRICS.map(function (m) {
            // 本页接口里拿不到的指标才要额外请求，文字标成强调色并挂上悬停提示
            const needsRequest = free.indexOf(m.key) < 0;
            const note = m.note ? `<span class="brp-sub">${m.note}</span>` : '';
            return `<label class="brp-row${needsRequest ? ' brp-cost' : ''}">`
                + `<input type="checkbox" data-page="${page.key}" data-metric="${m.key}"${config[page.key][m.key] ? ' checked' : ''}>`
                + `<span class="brp-name">${m.label}${note}</span>`
                + '</label>';
        }).join('');
        return `<div class="brp-sec">
                    <div class="brp-sec-title">${page.label}</div>
                    <div class="brp-panel">${rows}</div>
                </div>`;
    }

    function panelStyle() {
        return `
            .brp {
                position: fixed;
                top: 80px;
                right: 24px;
                /* 提示框（.brp-tip）要盖在面板上面，所以面板比它低一级：
                   两个都是 fixed，z-index 相同时按 DOM 顺序来，而提示框是挂在 body 上的，
                   面板反而排在它后面。 */
                z-index: 2147483646;
                display: flex;
                flex-direction: column;
                width: 380px;
                max-height: 82vh;
                border-radius: 12px;
                background: #fffafc;
                box-shadow: 0 6px 32px rgba(214, 51, 108, .26);
                color: #4a2b38;
                font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
                font-size: 13px;
                line-height: 1.6;
                user-select: none;
                overflow: hidden;
                /* 面板自己的配色不跟着页面的 color-scheme 走 */
                color-scheme: light;
                /* 滚轮滚到边界时不要把滚动传给下面的页面 */
                overscroll-behavior: contain;
            }
            .brp-head {
                position: relative;
                flex: 0 0 auto;
                padding: 6px 0;
                background: #ff8fb4;
                color: #fff;
                text-align: center;
                cursor: move;
            }
            .brp-title {
                font-size: 17px;
                font-weight: 700;
                letter-spacing: .5px;
                text-shadow: 0 1px 2px rgba(180, 40, 90, .25);
            }
            .brp-close {
                position: absolute;
                top: 0;
                right: 0;
                margin: 3px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 28px;
                height: 28px;
                border-radius: 50%;
                cursor: pointer;
            }
            .brp-close:hover {
                background: rgba(255, 255, 255, .4);
            }
            .brp-body {
                flex: 1 1 auto;
                padding: 8px;
                overflow-y: auto;
                overscroll-behavior: contain;
                /* 能滚，但不显示滚动条 */
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .brp-body::-webkit-scrollbar {
                width: 0;
                height: 0;
            }
            .brp-sec {
                margin-bottom: 6px;
                padding: 6px 8px 8px;
                border-radius: 8px;
                background: #fff;
                box-shadow: 0 1px 3px rgba(214, 51, 108, .08);
            }
            .brp-sec-title {
                margin-bottom: 2px;
                font-weight: 700;
                color: #c2185b;
            }
            /* 指标横向排成一行，放不下就换行 */
            .brp-panel {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0 12px;
            }
            .brp-row {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 2px 6px;
                border-radius: 6px;
                white-space: nowrap;
                cursor: pointer;
            }
            .brp-row:hover {
                background: #ffeef5;
            }
            .brp-row input {
                flex: 0 0 auto;
                width: 14px;
                height: 14px;
                margin: 0;
                accent-color: #ff7ba9;
                cursor: pointer;
            }
            .brp-name {
                color: #4a2b38;
            }
            /* 要额外请求接口的指标：文字用强调色，鼠标移上去给提示。
               复选框和文字都在 label 里，移上去都算悬停。 */
            .brp-row.brp-cost {
                cursor: help;
            }
            .brp-row.brp-cost input {
                cursor: help;
            }
            .brp-row.brp-cost .brp-name {
                color: #ff7f50;
                font-weight: 500;
            }
            .brp-sub {
                font-size: 11px;
                color: #bb8fa2;
            }
            .brp-note {
                margin-top: 4px;
                font-size: 12px;
                color: #a98b96;
            }
            .brp-seg {
                display: flex;
                overflow: hidden;
                border: 1px solid #ffc9da;
                border-radius: 8px;
            }
            .brp-seg button {
                flex: 1;
                padding: 5px;
                border: 0;
                background: #fff;
                color: #4a2b38;
                font: inherit;
                cursor: pointer;
            }
            .brp-seg button + button {
                border-left: 1px solid #ffc9da;
            }
            .brp-seg button.brp-on {
                background: #ff7ba9;
                color: #fff;
            }
            .brp-foot {
                flex: 0 0 auto;
                padding: 0 8px 8px;
            }
            .brp-btn {
                width: 100%;
                padding: 6px;
                border: 1px solid #ffc9da;
                border-radius: 8px;
                background: #fff;
                color: #4a2b38;
                font: inherit;
                cursor: pointer;
            }
            .brp-btn:hover {
                background: #ffeef5;
            }
            /* 悬停提示。挂在 body 上、position:fixed，免得被 .brp-body 的滚动容器裁掉 */
            .brp-tip {
                position: fixed;
                z-index: 2147483647;
                display: none;
                max-width: 300px;
                padding: 8px 10px;
                border-radius: 8px;
                background: #6d2a44;
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
                font-size: 12px;
                line-height: 1.5;
                box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
                pointer-events: none;
            }
            /* 夜间模式 */
            .brp.brp-dark {
                background: #221a1e;
                color: #f0dfe5;
                box-shadow: 0 6px 32px rgba(0, 0, 0, .5);
                /* 让原生复选框也按深色渲染，否则未勾选的那个是个白方块 */
                color-scheme: dark;
            }
            .brp.brp-dark .brp-head {
                background: #a8395f;
            }
            .brp.brp-dark .brp-sec {
                background: #2b2026;
                box-shadow: none;
            }
            .brp.brp-dark .brp-sec-title {
                color: #ff9ec0;
            }
            .brp.brp-dark .brp-row:hover {
                background: #3a2b32;
            }
            .brp.brp-dark .brp-name {
                color: #f0dfe5;
            }
            .brp.brp-dark .brp-row.brp-cost .brp-name {
                color: #ff8f6b;
            }
            .brp.brp-dark .brp-sub {
                color: #a98b96;
            }
            .brp.brp-dark .brp-note {
                color: #a98b96;
            }
            .brp.brp-dark .brp-seg {
                border-color: #4a3038;
            }
            .brp.brp-dark .brp-seg button {
                background: #2b2026;
                color: #f0dfe5;
            }
            .brp.brp-dark .brp-seg button + button {
                border-left-color: #4a3038;
            }
            .brp.brp-dark .brp-seg button.brp-on {
                background: #d4527c;
                color: #fff;
            }
            .brp.brp-dark .brp-btn {
                border-color: #4a3038;
                background: #2b2026;
                color: #f0dfe5;
            }
            .brp.brp-dark .brp-btn:hover {
                background: #3a2b32;
            }
        `;
    }

    // 配置变了以后重新渲染卡片。已挂的节点全部清掉，让 render() 按新配置重挂。
    function rerenderCards() {
        refreshEnabled();
        document.querySelectorAll('.' + RATE_ITEM_CLASS).forEach(function (el) {
            el.remove();
        });
        document.querySelectorAll('.bili-video-card__stats--left, .bili-cover-card__stats').forEach(function (el) {
            delete el.dataset.rateKey;
        });
        render();
    }

    function setRepresentation(next) {
        if (representation === next) {
            return;
        }
        representation = next;
        isFractions = representation === 'fractions';
        GM_setValue('representation', representation);
        // 视频详情页的那几个比率是建好就不再更新的，改表示方式只能刷新
        if (isVideoPage) {
            location.reload();
            return;
        }
        rerenderCards();
        syncPanel();
    }

    let panel = null;

    function syncPanel() {
        if (!panel) {
            return;
        }
        panel.querySelectorAll('[data-rep]').forEach(function (btn) {
            btn.classList.toggle('brp-on', btn.dataset.rep === representation);
        });
        panel.querySelectorAll('input[data-metric]').forEach(function (input) {
            input.checked = !!config[input.dataset.page][input.dataset.metric];
        });
    }

    function savePanelPos() {
        if (!panel || panel.style.display === 'none') {
            return;
        }
        GM_setValue(PANEL_POS_KEY, { left: panel.style.left, top: panel.style.top });
    }

    function buildPanel() {
        GM.addStyle(panelStyle());

        panel = document.createElement('div');
        panel.id = PANEL_ID;
        panel.className = 'brp' + (isDarkPage() ? ' brp-dark' : '');
        panel.innerHTML = `
            <div class="brp-head">
                <span class="brp-title">卡片显示设置</span>
                <span class="brp-close" title="关闭">${CLOSE_ICON}</span>
            </div>
            <div class="brp-body">
                <div class="brp-sec">
                    <div class="brp-sec-title">显示格式</div>
                    <div class="brp-seg">
                        <button type="button" data-rep="percentage">百分比</button>
                        <button type="button" data-rep="fractions">分数</button>
                    </div>
                    <div class="brp-note">百分比如 3.25%，分数如 1/31。修改后立即生效。</div>
                </div>
                ${PAGES.map(panelSectionHtml).join('')}
            </div>
            <div class="brp-foot">
                <button class="brp-btn brp-reset" type="button">恢复默认（只显示点赞率）</button>
            </div>
        `;

        // 悬停提示。提示框挂在 body 上（position:fixed），免得被 .brp-body 的滚动容器裁掉
        const tip = document.createElement('div');
        tip.className = 'brp-tip';
        tip.textContent = COST_TIP;
        document.body.appendChild(tip);

        let tipRow = null;

        function hideTip() {
            tipRow = null;
            tip.style.display = 'none';
        }

        function moveTip(event) {
            if (!tipRow) {
                return;
            }
            const rect = tip.getBoundingClientRect();
            const x = Math.max(8, Math.min(event.clientX + 14, innerWidth - rect.width - 8));
            const y = Math.max(8, Math.min(event.clientY + 18, innerHeight - rect.height - 8));
            tip.style.left = x + 'px';
            tip.style.top = y + 'px';
        }

        // 复选框和文字都在 label 里，所以移到复选框上和移到文字上都算悬停
        panel.addEventListener('mouseover', function (event) {
            const row = event.target.closest('.brp-row.brp-cost');
            if (row === tipRow) {
                return;
            }
            tipRow = row;
            if (row) {
                tip.style.display = 'block';
                moveTip(event);
            } else {
                tip.style.display = 'none';
            }
        });
        panel.addEventListener('mousemove', moveTip);
        panel.addEventListener('mouseleave', hideTip);

        // 滚轮落在面板上时别把滚动带给下面的页面。
        // 正文自己能滚就交给浏览器（原生滚动更顺滑），只在「正文没超出」和
        // 「已经滚到上下边界」这两种情况下把事件吞掉。
        panel.addEventListener('wheel', function (event) {
            const body = panel.querySelector('.brp-body');
            const scrollable = body.scrollHeight > body.clientHeight;
            if (scrollable && body.contains(event.target)) {
                const atTop = body.scrollTop <= 0;
                const atBottom = body.scrollTop + body.clientHeight >= body.scrollHeight - 1;
                if (!(event.deltaY < 0 && atTop) && !(event.deltaY > 0 && atBottom)) {
                    return;
                }
            }
            event.preventDefault();
        }, { passive: false });

        // 关闭 / 切换表示方式 / 恢复默认
        panel.addEventListener('click', function (event) {
            if (event.target.closest('.brp-close')) {
                hideTip();
                panel.style.display = 'none';
                return;
            }
            const rep = event.target.closest('[data-rep]');
            if (rep) {
                setRepresentation(rep.dataset.rep);
                return;
            }
            if (event.target.closest('.brp-reset')) {
                PAGES.forEach(function (p) {
                    METRICS.forEach(function (m) {
                        config[p.key][m.key] = defaultFor(p.key, m.key);
                    });
                });
                saveConfig();
                syncPanel();
                rerenderCards();
            }
        });

        // 勾选框：存下来并立刻重渲染
        panel.addEventListener('change', function (event) {
            const input = event.target;
            if (input.tagName !== 'INPUT') {
                return;
            }
            config[input.dataset.page][input.dataset.metric] = input.checked;
            saveConfig();
            rerenderCards();
        });

        // 拖拽
        let dragging = null;
        panel.querySelector('.brp-head').addEventListener('mousedown', function (event) {
            if (event.target.closest('.brp-close')) {
                return;
            }
            hideTip();
            const rect = panel.getBoundingClientRect();
            dragging = { dx: event.clientX - rect.left, dy: event.clientY - rect.top };
            event.preventDefault();
        });
        document.addEventListener('mousemove', function (event) {
            if (!dragging) {
                return;
            }
            const left = Math.min(Math.max(event.clientX - dragging.dx, 0), innerWidth - panel.offsetWidth);
            const top = Math.min(Math.max(event.clientY - dragging.dy, 0), innerHeight - panel.offsetHeight);
            panel.style.left = left + 'px';
            panel.style.top = top + 'px';
            panel.style.right = 'auto';
        });
        document.addEventListener('mouseup', function () {
            if (dragging) {
                dragging = null;
                savePanelPos();
            }
        });

        const savedPos = GM_getValue(PANEL_POS_KEY);
        if (savedPos && savedPos.left) {
            panel.style.left = savedPos.left;
            panel.style.top = savedPos.top;
            panel.style.right = 'auto';
        }

        syncPanel();
        return panel;
    }

    function openPanel() {
        if (!document.body) {
            document.addEventListener('DOMContentLoaded', openPanel, { once: true });
            return;
        }
        if (!panel) {
            buildPanel();
            document.body.appendChild(panel);
        }
        panel.style.display = '';
        syncPanel();
    }

    // 注册脚本菜单：打开设置面板（表示方式、各页显示哪些指标都在面板里改）
    GM_registerMenuCommand('打开设置面板', openPanel);
})();
