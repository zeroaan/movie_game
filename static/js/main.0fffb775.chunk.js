(this.webpackJsonpmovie_game=this.webpackJsonpmovie_game||[]).push([[0],{18:function(e,t,i){e.exports=i(32)},23:function(e,t,i){},24:function(e,t,i){},25:function(e,t,i){},26:function(e,t,i){},32:function(e,t,i){"use strict";i.r(t);var a=i(0),p=i.n(a),o=i(9),m=i(16),n=i.n(m),s=(i(23),i(1)),r=(i(24),i(7)),_=function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),a=[e[i],e[t]];e[t]=a[0],e[i]=a[1]}return e}(r),c=function(){return p.a.createElement("div",{className:"App"},p.a.createElement("div",{className:"movie__background--left",style:{background:"center/cover no-repeat url(".concat(_[0].poster,")"),opacity:"0.4"}}),p.a.createElement("div",{className:"movie__background--right",style:{background:"center/cover no-repeat url(".concat(_[0].poster,")"),opacity:"0.4"}}),p.a.createElement("div",{className:"home"},p.a.createElement("h1",null,"\uc601\ud654 \ud3ec\uc2a4\ud130\ub97c \ubcf4\uace0 \uac1c\ubd09 \ub144\ub3c4\ub97c \ub9de\ucdb0\ubcf4\uc790!"),p.a.createElement("h3",null,"* \uc22b\uc790\ub9cc \uc785\ub825\ud558\uc138\uc694!!! ex) 2019 *"),p.a.createElement("h2",null,"\uc2dc\uc791\ud558\ub824\uba74 \ub9e8 \uc704\uc5d0 ",p.a.createElement("b",null,"Start"),"\ub97c \ud074\ub9ad\ud558\uc138\uc694")))},l=i(10),v=(i(25),function(e){for(var t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),a=[e[i],e[t]];e[t]=a[0],e[i]=a[1]}return e});v(r);var h=v(r),g=0,E=0,d=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),i=t[0],o=t[1],m=Object(a.useState)(h[g]),n=Object(l.a)(m,2),s=n[0],_=n[1],c=Object(a.useState)(!1),d=Object(l.a)(c,2),f=d[0],y=d[1],u=null;return u=!1===f?p.a.createElement("div",null,p.a.createElement("h1",{className:"title"},s.title),p.a.createElement("div",{className:"movie__box"},p.a.createElement("img",{className:"movie__poster",src:s.poster,alt:s.title,title:s.title}),p.a.createElement("form",{className:"movie__form"},p.a.createElement("input",{className:"movie__year__input",type:"text",value:i,placeholder:"\uac1c\ubd09\ub144\ub3c4 \uc785\ub825 (\uc22b\uc790\ub9cc \uc785\ub825)",onChange:function(e){o(e.target.value)}}),p.a.createElement("input",{className:"movie__year__button",type:"submit",value:"\ud655\uc778",onClick:function(e){e.preventDefault(),Number(i)===s.year?(E<(g+=1)&&(E=g),_(h[g]),o("")):(h=v(r),_(h[g=0]),o(""),y(!0))}})),p.a.createElement("h2",{className:"correct_count"},"\ub9de\ucd98 \uac2f\uc218: ",p.a.createElement("b",null,g)))):p.a.createElement("div",{className:"movie__incorrect"},p.a.createElement("h1",{className:"movie__wrong"},"\uac1c\ubd09\ub144\ub3c4\uac00 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4"),p.a.createElement("h2",{className:"movie__wrongre"},"\ub2e4\uc2dc\ud558\ub824\uba74 \uc544\ub798 \ubc84\ud2bc\uc744 \ub204\ub974\uc138\uc694"),p.a.createElement("input",{type:"button",className:"movie__re",value:"\ub2e4\uc2dc\ud558\uae30",onClick:function(){y(!1)}})),p.a.createElement("div",{className:"App"},p.a.createElement("div",{className:"movie__background--left",style:{background:"center/cover no-repeat url(".concat(s.poster,")"),opacity:"0.4"}}),p.a.createElement("div",{className:"movie__background--right",style:{background:"center/cover no-repeat url(".concat(s.poster,")"),opacity:"0.4"}}),p.a.createElement("h4",{className:"movie__highscore"},"\ucd5c\uace0 \uc810\uc218: ",E),p.a.createElement("h4",{className:"movie__currentscore"},"\ud604\uc7ac \uc810\uc218: ",g),u)},f=(i(26),function(){return p.a.createElement("div",{className:"notfound"},p.a.createElement("h2",null,"Not found..."))}),y=function(){return p.a.createElement("div",{className:"App"},p.a.createElement("div",{className:"nav"},p.a.createElement(o.b,{to:"/",exact:!0},"Home"),p.a.createElement(o.b,{to:"/movies"},"Start")),p.a.createElement(s.c,null,p.a.createElement(s.a,{path:"/",exact:!0,component:c}),p.a.createElement(s.a,{path:"/movies",component:d}),p.a.createElement(s.a,{component:f})))};n.a.render(p.a.createElement(p.a.StrictMode,null,p.a.createElement(o.a,{basename:"/movie_game"},p.a.createElement(y,null))),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('[{"id":1,"title":"\uae30\uc0dd\ucda9","year":2019,"poster":"https://movie-phinf.pstatic.net/20190528_36/1559024198386YVTEw_JPEG/movie_image.jpg"},{"id":2,"title":"\uba85\ub7c9","year":2014,"poster":"https://movie-phinf.pstatic.net/20140721_186/1405911310756Tt2X1_JPEG/movie_image.jpg"},{"id":3,"title":"\ud14c\ub137","year":2020,"poster":"https://movie-phinf.pstatic.net/20200728_86/15959209130236RePy_JPEG/movie_image.jpg"},{"id":4,"title":"\uac15\ucca0\ube44","year":2017,"poster":"https://movie-phinf.pstatic.net/20171129_216/1511931096509Q0hpu_JPEG/movie_image.jpg"},{"id":5,"title":"\ubcc0\ud638\uc778","year":2013,"poster":"https://movie-phinf.pstatic.net/20131203_145/1386034788519v2Vwy_JPEG/movie_image.jpg"},{"id":6,"title":"\uad6d\uc81c\uc2dc\uc7a5","year":2014,"poster":"https://movie-phinf.pstatic.net/20141124_107/141679124450580TTS_JPEG/movie_image.jpg"},{"id":7,"title":"\ubca0\ud14c\ub791","year":2015,"poster":"https://movie-phinf.pstatic.net/20150622_131/14349365467550iQnC_JPEG/movie_image.jpg"},{"id":8,"title":"\ub3c4\ub451\ub4e4","year":2012,"poster":"https://movie-phinf.pstatic.net/20120718_209/1342589585791cltsr_JPEG/movie_image.jpg"},{"id":9,"title":"\uc804\uc6b0\uce58","year":2009,"poster":"https://movie-phinf.pstatic.net/20111223_249/1324598282916rToPJ_JPEG/movie_image.jpg"},{"id":10,"title":"\uac80\uc0ac\uc678\uc804","year":2016,"poster":"https://movie-phinf.pstatic.net/20160112_146/1452573577623EyUOh_JPEG/movie_image.jpg"},{"id":11,"title":"\ub7ed\ud0a4","year":2016,"poster":"https://movie-phinf.pstatic.net/20160920_197/1474334630845OPmlV_JPEG/movie_image.jpg"},{"id":12,"title":"\uc644\ubcbd\ud55c \ud0c0\uc778","year":2018,"poster":"https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg"},{"id":13,"title":"\uc5d1\uc2dc\ud2b8","year":2019,"poster":"https://movie-phinf.pstatic.net/20190724_161/1563931152464tk11A_JPEG/movie_image.jpg"},{"id":14,"title":"\uadf9\ud55c\uc9c1\uc5c5","year":2019,"poster":"https://movie-phinf.pstatic.net/20190116_206/1547615429111dINWj_JPEG/movie_image.jpg"},{"id":15,"title":"7\ubc88\ubc29\uc758 \uc120\ubb3c","year":2013,"poster":"https://movie-phinf.pstatic.net/20130118_115/1358472020816kP4vN_JPEG/movie_image.jpg"},{"id":16,"title":"\uc368\ub2c8","year":2011,"poster":"https://movie-phinf.pstatic.net/20111223_71/1324635483880NQEfk_JPEG/movie_image.jpg"},{"id":17,"title":"\uacfc\uc18d\uc2a4\uce94\ub4e4","year":2008,"poster":"https://movie-phinf.pstatic.net/20111223_14/1324584883775HhKfa_JPEG/movie_image.jpg"},{"id":18,"title":"\ubbf8\ub140\ub294 \uad34\ub85c\uc6cc","year":2006,"poster":"https://movie-phinf.pstatic.net/20111222_283/1324561166934KJyL7_JPEG/movie_image.jpg"},{"id":19,"title":"\uad6d\uac00\ub300\ud45c","year":2009,"poster":"https://movie-phinf.pstatic.net/20120103_32/1325584763019wyepw_JPEG/movie_image.jpg"},{"id":20,"title":"\uc6b0\ub9ac \uc0dd\uc560 \ucd5c\uace0\uc758 \uc21c\uac04","year":2008,"poster":"https://movie-phinf.pstatic.net/20111223_44/1324567143749EUxfp_JPEG/movie_image.jpg"},{"id":21,"title":"\uc5b4\ubca4\uc838\uc2a4: \uc5d4\ub4dc\uac8c\uc784","year":2019,"poster":"https://movie-phinf.pstatic.net/20190417_250/1555465284425i6WQE_JPEG/movie_image.jpg"},{"id":22,"title":"\uc544\uc774\uc5b8\ub9e8","year":2008,"poster":"https://movie-phinf.pstatic.net/20111222_37/1324501632182vbSoY_JPEG/movie_image.jpg"},{"id":23,"title":"\ud37c\uc2a4\ud2b8 \uc5b4\ubca4\uc838","year":2011,"poster":"https://movie-phinf.pstatic.net/20111223_44/1324635585945KDOJ5_JPEG/movie_image.jpg"},{"id":24,"title":"\ud1a0\ub974: \ub2e4\ud06c \uc6d4\ub4dc","year":2013,"poster":"https://movie-phinf.pstatic.net/20130930_95/1380517012698Dpvj5_JPEG/movie_image.jpg"},{"id":25,"title":"\uac00\ub514\uc5b8\uc988 \uc624\ube0c \uac24\ub7ed\uc2dc","year":2014,"poster":"https://movie-phinf.pstatic.net/20170811_107/1502432301446njv93_JPEG/movie_image.jpg"},{"id":26,"title":"\uc564\ud2b8\ub9e8","year":2015,"poster":"https://movie-phinf.pstatic.net/20150723_140/1437613988558Y8rfz_JPEG/movie_image.jpg"},{"id":27,"title":"\ub2e5\ud130 \uc2a4\ud2b8\ub808\uc778\uc9c0","year":2016,"poster":"https://movie-phinf.pstatic.net/20161014_50/147640824152266AVn_JPEG/movie_image.jpg"},{"id":28,"title":"\ube14\ub799 \ud32c\uc11c","year":2018,"poster":"https://movie-phinf.pstatic.net/20180103_128/1514946690065uYxwW_JPEG/movie_image.jpg"},{"id":29,"title":"\ucea1\ud2f4 \uc544\uba54\ub9ac\uce74: \uc2dc\ube4c \uc6cc","year":2016,"poster":"https://movie-phinf.pstatic.net/20160427_273/1461725031863moaJw_JPEG/movie_image.jpg"},{"id":30,"title":"\uc544\uc774\uc5b8\ub9e8 3","year":2013,"poster":"https://movie-phinf.pstatic.net/20130311_165/13629835475487aDfz_JPEG/movie_image.jpg"},{"id":31,"title":"\ucea1\ud2f4 \uc544\uba54\ub9ac\uce74: \uc708\ud130 \uc194\uc838","year":2014,"poster":"https://movie-phinf.pstatic.net/20140320_56/1395301906218FkBsV_JPEG/movie_image.jpg"},{"id":32,"title":"\ubbac\ub780","year":2020,"poster":"https://movie-phinf.pstatic.net/20200827_174/1598496595000hDi9H_JPEG/movie_image.jpg"},{"id":33,"title":"\uc778\ub791","year":2018,"poster":"https://movie-phinf.pstatic.net/20180530_139/1527644339969WkMqB_JPEG/movie_image.jpg"},{"id":34,"title":"\uc88b\uc740 \ub188, \ub098\uc05c \ub188, \uc774\uc0c1\ud55c \ub188","year":2008,"poster":"https://movie-phinf.pstatic.net/20111223_118/1324581729893NUDzH_JPEG/movie_image.jpg"},{"id":35,"title":"\ubc00\uc815","year":2016,"poster":"https://movie-phinf.pstatic.net/20160823_114/1471936485192cjjcD_JPEG/movie_image.jpg"},{"id":36,"title":"\uc778\ud06c\ub808\ub354\ube14 \ud5d0\ud06c","year":2008,"poster":"https://movie-phinf.pstatic.net/20111222_21/1324529563793t6TEo_JPEG/movie_image.jpg"},{"id":37,"title":"\uc544\uc774\uc5b8\ub9e8 2","year":2010,"poster":"https://movie-phinf.pstatic.net/20111223_163/1324610044306xOc34_JPEG/movie_image.jpg"},{"id":38,"title":"\ud1a0\ub974: \ucc9c\ub465\uc758 \uc2e0","year":2011,"poster":"https://movie-phinf.pstatic.net/20111223_276/1324635844036eo9sS_JPEG/movie_image.jpg"},{"id":39,"title":"\uc5b4\ubca4\uc838\uc2a4","year":2012,"poster":"https://movie-phinf.pstatic.net/20120426_172/1335428116411i030K_JPEG/movie_image.jpg"},{"id":40,"title":"\uc5b4\ubca4\uc838\uc2a4: \uc5d0\uc774\uc9c0 \uc624\ube0c \uc6b8\ud2b8\ub860","year":2015,"poster":"https://movie-phinf.pstatic.net/20150324_33/1427159150181p9uQM_JPEG/movie_image.jpg"},{"id":41,"title":"\uac00\ub514\uc5b8\uc988 \uc624\ube0c \uac24\ub7ed\uc2dc Vol.2","year":2017,"poster":"https://movie-phinf.pstatic.net/20170329_6/1490752948552vH5G8_JPEG/movie_image.jpg"},{"id":42,"title":"\uc2a4\ud30c\uc774\ub354\ub9e8: \ud648\ucee4\ubc0d","year":2017,"poster":"https://movie-phinf.pstatic.net/20170524_188/1495610958516Vt5jr_JPEG/movie_image.jpg"},{"id":43,"title":"\ud1a0\ub974: \ub77c\uadf8\ub098\ub85c\ud06c","year":2017,"poster":"https://movie-phinf.pstatic.net/20170928_85/1506564710105ua5fS_PNG/movie_image.jpg"},{"id":45,"title":"\uc5b4\ubca4\uc838\uc2a4: \uc778\ud53c\ub2c8\ud2f0 \uc6cc","year":2018,"poster":"https://movie-phinf.pstatic.net/20180322_242/15216962441485x5Om_JPEG/movie_image.jpg"},{"id":46,"title":"\uc564\ud2b8\ub9e8\uacfc \uc640\uc2a4\ud504","year":2018,"poster":"https://movie-phinf.pstatic.net/20180530_170/1527645793223uhWgz_JPEG/movie_image.jpg"},{"id":47,"title":"\ucea1\ud2f4 \ub9c8\ube14","year":2019,"poster":"https://movie-phinf.pstatic.net/20190225_72/1551069530582h2huX_JPEG/movie_image.jpg"},{"id":48,"title":"\uc2a4\ud30c\uc774\ub354\ub9e8 \ud30c \ud504\ub86c \ud648","year":2019,"poster":"https://movie-phinf.pstatic.net/20190527_181/1558933159657a210P_JPEG/movie_image.jpg"},{"id":49,"title":"\uc624\ud53c\uc2a4","year":2015,"poster":"https://movie-phinf.pstatic.net/20150818_179/1439862816889AJ2qM_JPEG/movie_image.jpg"},{"id":50,"title":"\uc57d\uc7a5\uc218","year":2015,"poster":"https://movie-phinf.pstatic.net/20150312_166/1426123741868Er1Ay_JPEG/movie_image.jpg"},{"id":51,"title":"\ubc31\ub450\uc0b0","year":2019,"poster":"https://movie-phinf.pstatic.net/20191219_263/15767415637757HPgg_JPEG/movie_image.jpg"},{"id":52,"title":"\uc2e0\uacfc\ud568\uaed8-\uc778\uacfc \uc5f0","year":2018,"poster":"https://movie-phinf.pstatic.net/20180703_65/15305852198817R6a1_JPEG/movie_image.jpg"},{"id":53,"title":"\uc554\uc0b4","year":2015,"poster":"https://movie-phinf.pstatic.net/20150713_74/14367488229802tA3J_JPEG/movie_image.jpg"},{"id":54,"title":"\uad00\uc0c1","year":2013,"poster":"https://movie-phinf.pstatic.net/20130819_110/1376895907326wlXma_JPEG/movie_image.jpg"},{"id":55,"title":"\uc655\uc758 \ub0a8\uc790","year":2005,"poster":"https://movie-phinf.pstatic.net/20111222_256/1324561473103r8SK5_JPEG/movie_image.jpg"},{"id":56,"title":"\uad11\ud574, \uc655\uc774 \ub41c \ub0a8\uc790","year":2012,"poster":"https://movie-phinf.pstatic.net/20121018_114/13505269047497LGt6_JPEG/movie_image.jpg"},{"id":57,"title":"\uc131\ub09c\ud669\uc18c","year":2018,"poster":"https://movie-phinf.pstatic.net/20181031_241/1540950975705Bac4v_JPEG/movie_image.jpg"},{"id":58,"title":"\uc6d0\ub354\ud480 \uace0\uc2a4\ud2b8","year":2018,"poster":"https://movie-phinf.pstatic.net/20181005_242/1538714564568GYBzR_JPEG/movie_image.jpg"},{"id":59,"title":"\ubd80\ub77c\ub354","year":2017,"poster":"https://movie-phinf.pstatic.net/20181129_255/1543452505700tFbVC_JPEG/movie_image.jpg"},{"id":60,"title":"\uc815\uc9c1\ud55c \ud6c4\ubcf4","year":2020,"poster":"https://movie-phinf.pstatic.net/20200121_186/1579570188386BXMMG_JPEG/movie_image.jpg"},{"id":61,"title":"\ub0b4\uc548\uc758 \uadf8\ub188","year":2019,"poster":"https://movie-phinf.pstatic.net/20181204_172/1543891228332kV3d1_JPEG/movie_image.jpg"},{"id":62,"title":"\uc218\uc0c1\ud55c \uadf8\ub140","year":2014,"poster":"https://movie-phinf.pstatic.net/20140106_63/1388973931178nTp2e_JPEG/movie_image.jpg"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.0fffb775.chunk.js.map