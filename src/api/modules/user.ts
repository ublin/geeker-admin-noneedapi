import { ResPage, User } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

/**
 * @name 用户管理模块
 */
// 获取用户列表
export const getUserList = (params: User.ReqUserParams) => {
  // return
  http.post<ResPage<User.ResUserList>>(PORT1 + `/user/list`, params);
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "msg": "成功",
      "data": {
        "list": [
          {
            "id": "451054287877646906",
            "username": "曾洋",
            "gender": 2,
            "user": {
              "detail": {
                "age": 23
              }
            },
            "idCard": "451054287877646906",
            "email": "m.xukihip@vhjuk.gov",
            "address": "湖南省 娄底市",
            "createTime": "1986-05-21 08:42:14",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
          },
          {
            "id": "826364685105357283",
            "username": "易霞",
            "gender": 1,
            "user": {
              "detail": {
                "age": 12
              }
            },
            "idCard": "826364685105357283",
            "email": "j.ymxvj@ulgts.pa",
            "address": "香港特别行政区 香港岛",
            "createTime": "2004-03-12 18:34:09",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          },
          {
            "id": "848746218376486856",
            "username": "谢秀兰",
            "gender": 1,
            "user": {
              "detail": {
                "age": 10
              }
            },
            "idCard": "848746218376486856",
            "email": "f.etic@nlaet.nc",
            "address": "天津 天津市",
            "createTime": "1986-04-25 01:25:08",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
          },
          {
            "id": "718745828724764262",
            "username": "杜艳",
            "gender": 1,
            "user": {
              "detail": {
                "age": 14
              }
            },
            "idCard": "718745828724764262",
            "email": "q.zwgf@pgyakhnbs.vc",
            "address": "西藏自治区 日喀则地区",
            "createTime": "1987-10-08 22:40:00",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          },
          {
            "id": "271484802542762154",
            "username": "魏秀兰",
            "gender": 2,
            "user": {
              "detail": {
                "age": 15
              }
            },
            "idCard": "271484802542762154",
            "email": "v.tictqxov@iavqpjgh.uk",
            "address": "内蒙古自治区 鄂尔多斯市",
            "createTime": "1978-09-20 21:50:30",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          },
          {
            "id": "816547334826788508",
            "username": "马洋",
            "gender": 2,
            "user": {
              "detail": {
                "age": 23
              }
            },
            "idCard": "816547334826788508",
            "email": "v.jnbpo@jbel.np",
            "address": "重庆 重庆市",
            "createTime": "2013-10-10 14:04:54",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
          },
          {
            "id": "636897846475441128",
            "username": "孟伟",
            "gender": 2,
            "user": {
              "detail": {
                "age": 10
              }
            },
            "idCard": "636897846475441128",
            "email": "p.gvjf@piux.dk",
            "address": "新疆维吾尔自治区 吐鲁番地区",
            "createTime": "2000-09-15 13:26:09",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
          },
          {
            "id": "142585484201866451",
            "username": "郝洋",
            "gender": 1,
            "user": {
              "detail": {
                "age": 26
              }
            },
            "idCard": "142585484201866451",
            "email": "m.dsjtbebj@htxjqy.li",
            "address": "新疆维吾尔自治区 克拉玛依市",
            "createTime": "2001-07-07 19:42:53",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
          },
          {
            "id": "725756822531378443",
            "username": "罗强",
            "gender": 1,
            "user": {
              "detail": {
                "age": 25
              }
            },
            "idCard": "725756822531378443",
            "email": "h.wumkilt@nhwfx.yu",
            "address": "湖南省 娄底市",
            "createTime": "1982-10-15 03:46:50",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
          },
          {
            "id": "516335156208626673",
            "username": "姜超",
            "gender": 2,
            "user": {
              "detail": {
                "age": 11
              }
            },
            "idCard": "516335156208626673",
            "email": "k.jpvvt@bodnjwbo.vn",
            "address": "青海省 海北藏族自治州",
            "createTime": "1982-01-24 03:27:28",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
          }
        ],
        "pageNum": 1,
        "pageSize": 10,
        "total": 2000
      }
    }
    resolve(data)

  })
};

// 获取树形用户列表
export const getUserTreeList = (params: User.ReqUserParams) => {
  // return
  http.post<ResPage<User.ResUserList>>(PORT1 + `/user/tree/list`, params);
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "msg": "成功",
      "data": {
        "list": [
          {
            "id": "595436395586248117",
            "username": "白军",
            "gender": 1,
            "user": {
              "detail": {
                "age": 15
              }
            },
            "idCard": "595436395586248117",
            "email": "y.klpgqd@jvyj.rw",
            "address": "北京 北京市",
            "createTime": "1985-07-03 14:35:49",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg",
            "children": [
              {
                "id": "642613272914161493",
                "username": "武超",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 21
                  }
                },
                "idCard": "642613272914161493",
                "email": "s.hrfsurh@xiteoeqnp.es",
                "address": "湖南省 郴州市",
                "createTime": "1978-09-11 01:00:22",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "431585833036670807",
                "username": "丁敏",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 17
                  }
                },
                "idCard": "431585833036670807",
                "email": "u.eakf@prkieeqil.lr",
                "address": "广东省 汕头市",
                "createTime": "2002-05-25 22:14:46",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "067792055867646987",
                "username": "周秀兰",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 28
                  }
                },
                "idCard": "067792055867646987",
                "email": "c.tvpl@wnblyoiq.my",
                "address": "宁夏回族自治区 石嘴山市",
                "createTime": "1975-10-02 03:35:31",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
              }
            ]
          },
          {
            "id": "785289258332935334",
            "username": "贺霞",
            "gender": 2,
            "user": {
              "detail": {
                "age": 24
              }
            },
            "idCard": "785289258332935334",
            "email": "d.ffjrh@wgwuu.cr",
            "address": "江西省 萍乡市",
            "createTime": "2013-06-19 19:33:16",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg",
            "children": [
              {
                "id": "443282688088122561",
                "username": "秦明",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 15
                  }
                },
                "idCard": "443282688088122561",
                "email": "q.hrkme@pqpfmksrp.jp",
                "address": "福建省 龙岩市",
                "createTime": "1983-07-07 11:52:24",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "323385227662219874",
                "username": "侯超",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 24
                  }
                },
                "idCard": "323385227662219874",
                "email": "f.rosvgjum@fcdfogejg.no",
                "address": "甘肃省 甘南藏族自治州",
                "createTime": "1991-11-12 04:53:17",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "518354305827712527",
                "username": "张明",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 30
                  }
                },
                "idCard": "518354305827712527",
                "email": "l.omnbdc@uvpcxh.mq",
                "address": "海南省 三亚市",
                "createTime": "1998-03-30 03:19:47",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
              }
            ]
          },
          {
            "id": "862293371612702687",
            "username": "郝刚",
            "gender": 1,
            "user": {
              "detail": {
                "age": 19
              }
            },
            "idCard": "862293371612702687",
            "email": "v.wqbopjbv@jtodpylw.zm",
            "address": "陕西省 汉中市",
            "createTime": "2009-08-06 20:12:42",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
            "children": [
              {
                "id": "370276423018448652",
                "username": "阎桂英",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 26
                  }
                },
                "idCard": "370276423018448652",
                "email": "c.dvly@sasdvgs.ky",
                "address": "香港特别行政区 香港岛",
                "createTime": "1978-07-07 01:21:25",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "545259469653872247",
                "username": "姚静",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 15
                  }
                },
                "idCard": "545259469653872247",
                "email": "g.blyvimq@kfgx.np",
                "address": "贵州省 黔东南苗族侗族自治州",
                "createTime": "2014-06-10 00:36:08",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "236777626164885655",
                "username": "于军",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 21
                  }
                },
                "idCard": "236777626164885655",
                "email": "v.ild@tzmqvoen.ml",
                "address": "香港特别行政区 香港岛",
                "createTime": "2016-04-19 04:19:04",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              }
            ]
          },
          {
            "id": "317145425155288181",
            "username": "黎静",
            "gender": 1,
            "user": {
              "detail": {
                "age": 21
              }
            },
            "idCard": "317145425155288181",
            "email": "q.vmmiot@dklxzu.be",
            "address": "浙江省 台州市",
            "createTime": "2022-06-17 03:21:25",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg",
            "children": [
              {
                "id": "864791475702319388",
                "username": "傅秀英",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 21
                  }
                },
                "idCard": "864791475702319388",
                "email": "b.lsby@wbn.tz",
                "address": "北京 北京市",
                "createTime": "1983-08-07 13:35:57",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "447624876178483719",
                "username": "邹杰",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 16
                  }
                },
                "idCard": "447624876178483719",
                "email": "w.kbbbyqy@tkhle.sg",
                "address": "甘肃省 金昌市",
                "createTime": "2001-07-27 10:23:59",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
              },
              {
                "id": "382782443442809519",
                "username": "罗秀兰",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 29
                  }
                },
                "idCard": "382782443442809519",
                "email": "u.eyogylyd@lqosdz.so",
                "address": "湖南省 张家界市",
                "createTime": "1993-01-16 04:49:05",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              }
            ]
          },
          {
            "id": "002369825054386659",
            "username": "邵磊",
            "gender": 1,
            "user": {
              "detail": {
                "age": 14
              }
            },
            "idCard": "002369825054386659",
            "email": "j.aknyrp@xphnjy.bh",
            "address": "重庆 重庆市",
            "createTime": "1984-05-27 08:58:08",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
            "children": [
              {
                "id": "674545143373640034",
                "username": "韩强",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 14
                  }
                },
                "idCard": "674545143373640034",
                "email": "r.mpcsx@ndla.ch",
                "address": "北京 北京市",
                "createTime": "2011-01-22 01:10:01",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
              },
              {
                "id": "236065899421885506",
                "username": "郝洋",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 10
                  }
                },
                "idCard": "236065899421885506",
                "email": "y.ugkjc@uxf.an",
                "address": "山东省 潍坊市",
                "createTime": "1979-03-31 21:48:10",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
              },
              {
                "id": "324097146163162542",
                "username": "程刚",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 22
                  }
                },
                "idCard": "324097146163162542",
                "email": "h.etmhssshtt@wwke.ws",
                "address": "黑龙江省 齐齐哈尔市",
                "createTime": "1977-02-19 23:37:55",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              }
            ]
          },
          {
            "id": "559762336183216386",
            "username": "孔杰",
            "gender": 1,
            "user": {
              "detail": {
                "age": 17
              }
            },
            "idCard": "559762336183216386",
            "email": "n.jvjose@izpnlfhg.hk",
            "address": "福建省 莆田市",
            "createTime": "1979-03-20 01:06:24",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg",
            "children": [
              {
                "id": "744627598327689869",
                "username": "蔡敏",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 18
                  }
                },
                "idCard": "744627598327689869",
                "email": "l.wlu@isqhsul.cn",
                "address": "青海省 海东市",
                "createTime": "1976-10-03 11:08:50",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "424293217649286384",
                "username": "孟娟",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 29
                  }
                },
                "idCard": "424293217649286384",
                "email": "q.nfmmjwlmx@wmqd.pk",
                "address": "澳门特别行政区 澳门半岛",
                "createTime": "2022-12-01 00:46:04",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "039664044424088324",
                "username": "史明",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 18
                  }
                },
                "idCard": "039664044424088324",
                "email": "k.hfwndkon@jffchcv.mg",
                "address": "贵州省 毕节市",
                "createTime": "1976-03-13 09:12:20",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              }
            ]
          },
          {
            "id": "792058548382731982",
            "username": "顾娜",
            "gender": 2,
            "user": {
              "detail": {
                "age": 22
              }
            },
            "idCard": "792058548382731982",
            "email": "l.clrw@dcfquwvny.kw",
            "address": "山西省 忻州市",
            "createTime": "2023-10-21 22:23:26",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
            "children": [
              {
                "id": "389452141926137133",
                "username": "邓平",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 26
                  }
                },
                "idCard": "389452141926137133",
                "email": "u.lkrwhg@muwkrgtdy.qa",
                "address": "香港特别行政区 香港岛",
                "createTime": "1975-04-30 11:11:22",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "726964801211983724",
                "username": "江丽",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 18
                  }
                },
                "idCard": "726964801211983724",
                "email": "e.jwexsrd@dnumpoynd.ga",
                "address": "辽宁省 葫芦岛市",
                "createTime": "2004-06-06 11:21:18",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "634464943301482728",
                "username": "王芳",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 27
                  }
                },
                "idCard": "634464943301482728",
                "email": "t.iiwfw@urgkfcjm.ga",
                "address": "北京 北京市",
                "createTime": "2010-10-06 04:13:47",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              }
            ]
          },
          {
            "id": "225341101091781368",
            "username": "汤磊",
            "gender": 2,
            "user": {
              "detail": {
                "age": 18
              }
            },
            "idCard": "225341101091781368",
            "email": "d.fljyyojji@gglmmdv.cf",
            "address": "辽宁省 辽阳市",
            "createTime": "1993-03-27 03:09:07",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg",
            "children": [
              {
                "id": "174686447736269172",
                "username": "侯芳",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 20
                  }
                },
                "idCard": "174686447736269172",
                "email": "m.sieucqt@omtahyb.am",
                "address": "香港特别行政区 香港岛",
                "createTime": "1979-08-06 16:39:28",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "022693462763811471",
                "username": "万洋",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 25
                  }
                },
                "idCard": "022693462763811471",
                "email": "d.vgiugpw@onc.aero",
                "address": "重庆 重庆市",
                "createTime": "1995-03-08 09:35:09",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "582302532166464688",
                "username": "贺丽",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 27
                  }
                },
                "idCard": "582302532166464688",
                "email": "b.qjfvffwmh@thyhlxjvti.ua",
                "address": "重庆 重庆市",
                "createTime": "1997-05-20 06:36:04",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRBHS.jpg"
              }
            ]
          },
          {
            "id": "289766523597641162",
            "username": "白静",
            "gender": 1,
            "user": {
              "detail": {
                "age": 21
              }
            },
            "idCard": "289766523597641162",
            "email": "j.hfb@tbjlz.rw",
            "address": "宁夏回族自治区 吴忠市",
            "createTime": "2014-08-22 11:43:16",
            "status": 1,
            "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg",
            "children": [
              {
                "id": "885306207370272708",
                "username": "杨洋",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 12
                  }
                },
                "idCard": "885306207370272708",
                "email": "b.efwcrbz@ytklc.中国互联.公司",
                "address": "甘肃省 天水市",
                "createTime": "2020-11-20 04:46:04",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "083161549913347327",
                "username": "龙超",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 17
                  }
                },
                "idCard": "083161549913347327",
                "email": "n.wmdtl@obxg.an",
                "address": "台湾 宜兰县",
                "createTime": "2010-04-20 10:31:04",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "854733133574979728",
                "username": "蒋刚",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 17
                  }
                },
                "idCard": "854733133574979728",
                "email": "n.elle@dfxyojddij.is",
                "address": "海南省 三亚市",
                "createTime": "1973-06-11 14:17:42",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              }
            ]
          },
          {
            "id": "215516152727300933",
            "username": "尹超",
            "gender": 1,
            "user": {
              "detail": {
                "age": 24
              }
            },
            "idCard": "215516152727300933",
            "email": "w.pxk@okhmwmdt.pw",
            "address": "宁夏回族自治区 石嘴山市",
            "createTime": "1994-05-08 10:01:49",
            "status": 0,
            "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg",
            "children": [
              {
                "id": "492836551714318121",
                "username": "魏强",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 14
                  }
                },
                "idCard": "492836551714318121",
                "email": "l.nitpko@mujhxj.ky",
                "address": "海南省 三沙市",
                "createTime": "1975-08-20 15:12:40",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QR57a.jpg"
              },
              {
                "id": "968505343757089857",
                "username": "韩刚",
                "gender": 2,
                "user": {
                  "detail": {
                    "age": 20
                  }
                },
                "idCard": "968505343757089857",
                "email": "q.iwikgkhvt@piur.hn",
                "address": "内蒙古自治区 兴安盟",
                "createTime": "2023-10-02 18:00:43",
                "status": 1,
                "avatar": "https://i.imgtg.com/2023/01/16/QRqMK.jpg"
              },
              {
                "id": "038254335747426579",
                "username": "孔敏",
                "gender": 1,
                "user": {
                  "detail": {
                    "age": 12
                  }
                },
                "idCard": "038254335747426579",
                "email": "m.mysfxha@hdwlimt.st",
                "address": "吉林省 吉林市",
                "createTime": "1994-12-29 13:00:07",
                "status": 0,
                "avatar": "https://i.imgtg.com/2023/01/16/QRa0s.jpg"
              }
            ]
          }
        ],
        "pageNum": 1,
        "pageSize": 10,
        "total": 2000
      }
    }
    resolve(data)

  })
};

// 新增用户
export const addUser = (params: { id: string }) => {
  return http.post(PORT1 + `/user/add`, params);
};

// 批量添加用户
export const BatchAddUser = (params: FormData) => {
  return http.post(PORT1 + `/user/import`, params);
};

// 编辑用户
export const editUser = (params: { id: string }) => {
  return http.post(PORT1 + `/user/edit`, params);
};

// 删除用户
export const deleteUser = (params: { id: string[] }) => {
  return http.post(PORT1 + `/user/delete`, params);
};

// 切换用户状态
export const changeUserStatus = (params: { id: string; status: number }) => {
  return http.post(PORT1 + `/user/change`, params);
};

// 重置用户密码
export const resetUserPassWord = (params: { id: string }) => {
  return http.post(PORT1 + `/user/rest_password`, params);
};

// 导出用户数据
export const exportUserInfo = (params: User.ReqUserParams) => {
  return http.download(PORT1 + `/user/export`, params);
};

// 获取用户状态字典
export const getUserStatus = () => {
  // return 
  http.get<User.ResStatus[]>(PORT1 + `/user/status`);
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "data": [
        {
          "userLabel": "启用",
          "userStatus": 1,
          "tagType": "success"
        },
        {
          "userLabel": "禁用",
          "userStatus": 0,
          "tagType": "danger"
        }
      ],
      "msg": "成功"
    }
    resolve(data)

  })
};

// 获取用户性别字典
export const getUserGender = () => {
  // return 
  http.get<User.ResGender[]>(PORT1 + `/user/gender`);
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "data": [
        {
          "genderLabel": "男",
          "genderValue": 1
        },
        {
          "genderLabel": "女",
          "genderValue": 2
        }
      ],
      "msg": "成功"
    }
    resolve(data)

  })
};

// 获取用户部门列表
export const getUserDepartment: any = () => {
  // return
  http.get<User.ResDepartment[]>(PORT1 + `/user/department`, {}, { cancel: false });
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "data": [
        {
          "id": "1",
          "name": "华东分部",
          "children": [
            {
              "id": "11",
              "name": "研发部"
            },
            {
              "id": "12",
              "name": "市场部"
            },
            {
              "id": "13",
              "name": "商务部"
            },
            {
              "id": "14",
              "name": "财务部"
            }
          ]
        },
        {
          "id": "2",
          "name": "华南分部",
          "children": [
            {
              "id": "21",
              "name": "研发部"
            },
            {
              "id": "22",
              "name": "市场部"
            },
            {
              "id": "23",
              "name": "商务部"
            },
            {
              "id": "24",
              "name": "财务部"
            }
          ]
        },
        {
          "id": "3",
          "name": "西北分部",
          "children": [
            {
              "id": "31",
              "name": "研发部"
            },
            {
              "id": "32",
              "name": "市场部"
            },
            {
              "id": "33",
              "name": "商务部"
            },
            {
              "id": "34",
              "name": "财务部"
            }
          ]
        }
      ],
      "msg": "成功"
    }
    resolve(data)

  })
};

// 获取用户角色字典
export const getUserRole: any = () => {
  // return
  http.get<User.ResRole[]>(PORT1 + `/user/role`);
  return new Promise((resolve) => {
    let data = {
      "code": 200,
      "data": [
        {
          "label": "全部",
          "value": ""
        },
        {
          "label": "超级管理员",
          "value": "1"
        },
        {
          "label": "公司CEO",
          "value": "2"
        },
        {
          "label": "部门主管",
          "value": "3"
        },
        {
          "label": "人事经理",
          "value": "4"
        }
      ],
      "msg": "成功"
    }
    resolve(data)

  })
};
