const NINJA_PASS_HOLDERS = new Set([
  "inj1002cy56y38hg8ph49e5e06kw562ev4dfuxncu2",
  "inj1035m0rkm40kwjvf7d6vph94qx2a9r4z294d3w6",
  "inj106ustgsz4nmphp8yy2al2ayxmnj4vv4pee0e9c",
  "inj10788jly22p6wx2cv2ypx8lvaskegsezqedkegq",
  "inj107up46tscrn7wat6thchsu5al6p3640spm3sep",
  "inj1082ujtyvuk728s8eeylwqzwcvta8azttn56jrv",
  "inj1085x5gk2m8kf0rk4sdca7qc8dddzhf2q9tvy80",
  "inj108m39cpatn0eyc7mpvtnrk34xzchwre6y32yte",
  "inj109kxqfh9tuep8u60d4jlhy0smex055jm3cmt8w",
  "inj10cvw57394trmkavh8r553g90p08jf4gwsxjfh2",
  "inj10gee0zxs5cgfmz97v20kfqfatvays4u59n6kmf",
  "inj10lmrqgvak6784ns3j3kuapr9lq20ps5nd2kwtd",
  "inj10ujpg3nrcxuqz3ejxxlfjs5hexptvfgjnfklsm",
  "inj10vsh2ed7hljnnyf5s6v4ws5rj40kdnhh2u2wh4",
  "inj10yg768hvjd83cdce6hrkpsqu7alk7w8c4x30j2",
  "inj10zjmq5z2e50az3udfd7vqtzr2vlx4lltvn9q9l",
  "inj122c6jktvt3w264rhfzmvw8kwasng9s4hq5h329",
  "inj126az36acrnfl2m2zxmrymlv4yxlkxd0hlvk00g",
  "inj128xgjtlwk35m0mdcu0lkuh8f9llglld9jpcqs3",
  "inj12axvjthzv5rkt3nvc4ldhu93f46s2r962px0ad",
  "inj12f4audlrs09g4a3jap7xma7mket3z5eh707xa7",
  "inj12mhuwj2kltzcfm2x956wsnkujlh0q0tfyykpzm",
  "inj12mtd3hk3ea8q80gzalzdtddtygfaku6md8e0mf",
  "inj12r6kvcdktc3dg6g6ey6qr47dyx6tvm4m7nj50l",
  "inj12sjnnn76jf9rwhqq8wn72szh9letfan54a96sk",
  "inj12v5j3fq94sgtxhn55mtd35ynfhd7fj249jw38c",
  "inj12zd60a9lytu43l6av7pw6zjrq44vuu6ujnkvnn",
  "inj12zpc4582q68r9xdxy80xs3d66c9c6zgxqdcdtk",
  "inj12zuvsdzdh0n0yu3yesq3vcuzrwautqjxjjhdys",
  "inj1308g9qmr4cl4uhttqhujnrxrfdufwhlvf38mev",
  "inj133xeq92ak7p87hntvamgq3047kj8jfqhry92a8",
  "inj134s9cecdt9undpknnplz9ulc2c3vktrat2z4fk",
  "inj136n7ka9w2kdkkprxx9ksh7luy4qtyf33ezmf7d",
  "inj139uve5j9fmtpzuthfkzpgsckk8f4fvgp0nnmn8",
  "inj13djw08g8kwkewvqaxhsv44pa28tchq0lduvaw0",
  "inj13h73rza2hvhx7l78ddzcrlr6wm4wpkestjn9g3",
  "inj13lmwxs5py4xzr2c47fqzxtse784vjtdsvm4hh4",
  "inj13m3lrgcsv4wk4a6ywxqwv580sr494xavhxdyph",
  "inj13pwaz9wj9wl5nl2cqhx7qfj5knrqmdpx08chlh",
  "inj13q84hke6gpjs78s6cy5zpm483hfn8tfjmn04sz",
  "inj13r238jr6dejsvchl838ky5n0tl5zw7fgje7zac",
  "inj13y3ggd259mfftzyzya4zsjfgamtlglj5623dc0",
  "inj13zszx0sj6lv02yatkcjnm8ywr3505a6tj0nwxu",
  "inj142aemh62w2fpqjws0yre5936ts9x9e93fj8322",
  "inj144jz88p5pgxrnhja4tsp6tjxds59prlzh5ds83",
  "inj1497c6jj77j82288pnvlqjmq483gnvwujaearlw",
  "inj14a576sua7t9vzxtjt57ewqxavsjlwnwemq2t3v",
  "inj14fu5qm6nqpmggf023hdjutpjjvpup0j6ucz5hp",
  "inj14gwve5ky8gpmqxx0aguevxw5zp9mwaxfp8fv0u",
  "inj14h3t25cgrx4dvmq68a8dzgvgtt06s5k6mgtcka",
  "inj14hq4ktc50pnwu7magag5k0nwwqn2zrw0kpq7en",
  "inj14maq7mxsx86wtglg33skqtt67xu7pyvaw5uetw",
  "inj14p326w6rpw6yrsrp46yktskl2e2ek0fweaeu7g",
  "inj14qgetdfg8m0vvuq9v0zxure5749ehk6t4r6x28",
  "inj14uzrpqfqqjar6c6uw98uwtpqny297cjzrrmvr7",
  "inj14xn2ewrenncmnau6p77fz6ss0t69rgyf8te4t4",
  "inj14zu7m2wraxfe30gva6d6lpdqge9nuquqf7payg",
  "inj152nhgl25zrdtl5x7772mqztuulcyderc4ekned",
  "inj156zqdswjfcttc8hrvwd5z3nv5n53l5xg9mqvht",
  "inj1579jgr5gkv2h6z6wfwsmff2xvpuf4seyzx0xtn",
  "inj1587kvahxusz0dhyxu2287fnrh4nj0snhgqhxcz",
  "inj159uf0dkm8cdas7c4nj4c5u426jzm3ky4yp896g",
  "inj15d7ansuezu2vmuvvkwganzly2f6zc5m2kcc3m0",
  "inj15enskmul4xuuw8nkfkzghkked6hse0g8y875yp",
  "inj15kvf3pu8erkqaxme4hr9hzx2g7qmelhzmh8mgq",
  "inj15pmkjaf9uxt2ecyclkr9u6h376nw5pmzah4h8h",
  "inj15snj2zlwa078xmff6u6ka2gp5qeq3c68jzlvwn",
  "inj15vm2tjj3x89w6kjf62lh2sc0608h6025h4hv5n",
  "inj15wn7dtshtqm43mz4pad4fmumk4l8zcwq7qkg7l",
  "inj169d2dz93mklm2c8cqpygh48tfy407w6rd7g58q",
  "inj16d3sflu27ylvgf04tk2s9t7a8jp6wqdmgaqld3",
  "inj16f6evpma539m7mnngxhuwrz470lf3xelp79dds",
  "inj16grrwuqzxakqzttcpcpdpq25ajwfyl6a8zhva0",
  "inj16h9xfqm4y7lgdmcwhslylphjw3rc5t2ljh8cm2",
  "inj16jreq267zd4cyfnqqpds7tgq393vx8ma5t2vza",
  "inj16llgcx08zghvcnemhksmdzvnyy272v4gpnlrhx",
  "inj16mlrtmvtpqcayvp3l9ka5gy6h3h3mh0cmvweg2",
  "inj16pzr84dxpt0kgyx9kjj5v43vrrnfezp8efn2f2",
  "inj16r2xknd2ewd9r8p29c7ks50glc9j55dpk2e0mg",
  "inj16rxn2scw9uq5ftd9gjexjjpsnrykxjfs3rdjmd",
  "inj16s3n7hvjfvw44wxkejpty3spvuy3427tdp7ag0",
  "inj16wnyypr8s45qk3djhll5nzlnvxcw6mk6dghgyf",
  "inj172mew2v34u4nnqluq0ehjl8nauy22d2ljwzumj",
  "inj17665jkq3ldxcreuv4xteatqe4elhw0d7dvazpg",
  "inj17a7anq4jhlweftch6mjnr92sjcczh0cn062czu",
  "inj17cm4feamvqj2hpsve6yy0cavhl0aarzjklwx6n",
  "inj17ej4urultj9h6ldrmehh3nlphqu5aq2gnupl35",
  "inj17jxxek3jswytlxy5jx4cdy6cze7jj8p62a9mf8",
  "inj17rjrx70n6xgefn6r6zmun76hrk5lnpmk7vms5s",
  "inj17tcelrx4pk7mn8cnym9nmdsrcua5r3wq90aqv6",
  "inj17te8efgf57h9hxvm7qj6zaeff4sr3ca9zqr39j",
  "inj187p0w2k0rgc2hc3ttek8xheuzdpdn92lzkmzus",
  "inj18assak80h4w59t2rg99ewd5cn3qefup9rcyxf5",
  "inj18f586mh4ksyhwe82nyez4gflp2gyf06hys2kj3",
  "inj18l0hp7vkhw2x92m7lhw65ugmm4lfr90nvr2949",
  "inj18pjp7dp7kxu269gddpelf23dmtjqj7ukcrxxa7",
  "inj18q7txamgdega4smmfh5dtgaafja05fepp2r4k8",
  "inj18q8jtdrdexn4r0l4nznwpxwu0d7fcm8s3lkfew",
  "inj18t6aau5r9v9v8f5htpumsheumnqz0g3dxmh7f0",
  "inj19048g76ynua06gfhje39ka5q84twv93uzy3kzs",
  "inj1946rlp5amcfg3r60lm3nc6l6d9kmnznncjq6dh",
  "inj195l0hketpha2x2zahckfhlchlkrwckxd74030v",
  "inj195va3gr0x7rmqngz3dzmag4wrdgvne4h8244lq",
  "inj1982a90fqhzpze0v9l5j9qk5j43x9dupzzt7cz4",
  "inj198v554kn6vjmdjd9j206w3dd2wyt9fajqs9yrt",
  "inj199gsw763euhcwjp42stmlxgut3x8f8xnezxhr8",
  "inj199ljly53eqaeawtq5c8w3pftgqvhmmauf65yns",
  "inj19al7lkddepvx9yh76u98fp326ewmct7jnvacdn",
  "inj19jcsnru3d096krjp89kcfygg9v5lu29xl0g6vs",
  "inj19jpaeeyqjsmczex6cfnjy8w6gl9h63ez86hzpx",
  "inj19k8gllhxvkurkp3ppg79qhvl9vycnxfgssg0m4",
  "inj19q3tplqwt2t7p0f3l3wuh5w2a428hz3r3rd7gg",
  "inj19w7rnv2usvrh8lpl855n9z44fkymnx6kjcahmw",
  "inj1a2qk8tsd4qv7rmtp8g8ktj7zfldj60hpp0arqp",
  "inj1a593s35q433audy9jw6px9q980dsrfhc7s9lpn",
  "inj1a6fwz2e35x8vf3rhfhcwppmsrk9rj7sgdn79q5",
  "inj1a76wg2ljgqlmtgpq2qxm6d6fr84mru30dk6me2",
  "inj1aeqavmpupxztx67wyqumru6hx4vxk85fs26eaf",
  "inj1ag9smlvjpwq5myamvtar7mzgfc9f7l0rr8v0g2",
  "inj1ahv2fkh4s9fvmfu2lsa0cfkztfjf8e5hgyeu0l",
  "inj1am0rzkxr0lst89wx06j33pz6xznh09as6d7llf",
  "inj1asjehxwcuvtssu6wd2q6f5m4h4h8cjfqjwlm2j",
  "inj1aw5fyuwqkkef4d7dzvvhd9mqwknltkut4dwqrx",
  "inj1ax5eq0dk6u6p7qafx0qy32hn6jdynna3nhgu3k",
  "inj1c40uszccp6nklksh6qmh48g4n6vynzspgntgj3",
  "inj1c5pkvphj26dq5zcz0rncj8n6yfe83etu236em3",
  "inj1c6gugwg3wtjqp3huext47lqlhy0ersnzs29nrh",
  "inj1c9y4fm82zlu925tcy0n4m45c6k9vhw759zjvxs",
  "inj1c9zwydw4pdn46tn0zn6w28tth8g42n0jlve3ph",
  "inj1cgudkcahm2kavrsv4wdn8au8vssc9z5epr3dx4",
  "inj1cltkuwjuy03s7cmxektxzafg96hvqy058sumpy",
  "inj1cteqsmsumge2nq3q95edshr0pl589vyf4pauku",
  "inj1cvu3uw9n06xrnu638gf77ymfajhtpsv7qvpjjk",
  "inj1cwjnjg8sy05a0r36n93hucm0t03u5mxqqlexxn",
  "inj1cxeh7u4smxfq74zrmx3q24fqmul3ymuh9v8x3t",
  "inj1cxjfyd04g44j038g36pdns2cwzw9rtgykhwteq",
  "inj1cyl2pge7c2d8y923nzzhl36ptdw0u7pus3caa7",
  "inj1d3mekmy8unn8spcky4hae3849zf3uj0n4pksd5",
  "inj1d4u4lcf7pn3sgpsehtev647vw080ekjsdj05ex",
  "inj1d868hd6ts4dd5s3r06pwvhxhy3myl2a2anllna",
  "inj1ddr526x2dl3h2htfa6pjr3ndm0z5sdzfha0pwa",
  "inj1ddvap6n3xkjqlj4rwjhvdrfevn8cfcsl73lzxn",
  "inj1djyh7cap5prc9vt047c8fw9jynhleg45pauy8w",
  "inj1dmurp2dy47svry9lrns63yl4p7f2f28x8zadra",
  "inj1dph2m7w7gzprdynds8hjklr78hwcz4cv89xkfj",
  "inj1dqlltwxpqrlxnkqhv30eh8dc6vruz8tax92kru",
  "inj1drvh6u2gqfs9uhwzhrtj4r8mfc6jythhqyjc9c",
  "inj1duz0sxlkh8p4rqzn8npfxltht4yvseejkygjex",
  "inj1dxhj4ghqp8rvg3ytt5qhenrpsl5lchxkl89r2y",
  "inj1dysn2grym3u388dd3ddha5kfst8qlk3pstt08q",
  "inj1e05hapxg7eqtrtcxh523kevewz0cd956vl9k05",
  "inj1e7tm966xaxkvce08e8t20hfhcklnjh89m87ct3",
  "inj1e9570z5a7a0nktyzujcf8c5wspt26xzyrfundl",
  "inj1e9lprl8l9c4rwrr27dm2hnd2qpz7xyu3krhnfx",
  "inj1ed2yv52kvepsajh53dcczcdtlusyr9mdpzga4f",
  "inj1eekv6uwrw0k6ej6pa8jw3lj88xt3l6xyvtueh6",
  "inj1es8v0z9y5ycjtq4jftyfn3fzlsmefm5d37ah4w",
  "inj1eyht8ajygsmhk0fdzqah353w9rnt3ky2uphqyy",
  "inj1ez50r8wjq04qtevyzyxpw3yj3lqxjshw0gahg3",
  "inj1f3yjkfmeaagljf3umy406ckvmx5yatd9x2pc96",
  "inj1f582jaeek2pq7mw4zwt4r9jpat04p70dn0sjhc",
  "inj1fal0cxxf3qteuv8w9kvelxk3sv4flfrmjvt976",
  "inj1faxpzfkmdw5nndqdxj5dm9a89wzy0h3xq8ah4p",
  "inj1fl5665607k06twldfmac0upj4al3l3q74ac3sk",
  "inj1fnht0jnawyg9eguqs7q5acy8kc3sgx5w7arm4z",
  "inj1fts78hzpzvw499vlk68gk2jqcq0mncpcnuzuzw",
  "inj1fu9ejf082tmz2k9ce4uv0adz7c7py0vyagv7g0",
  "inj1fw8wqfyw8ngg4z0c05g39jvej4a5yk6l0ghalh",
  "inj1fxx0ysr94lefrp4mg2kv6satk0n4cfrnmfe8yf",
  "inj1g2tewamfn8s37c7xf8anrlyf476p2gwy8kg0al",
  "inj1g4qnm893vxugpxgj8scuwg890unkhretrpf6w5",
  "inj1g65gpgkcnrr9jgs4n82wplehp2zje8tl8symg9",
  "inj1g72uyxpfmk3a00nrzptzarwamkuk00srs99j7g",
  "inj1gas5nkl3h3euqzuuvpg86pw2cwk8cj7f5kup90",
  "inj1gg88uwkj3unm6fpsg85lsg9gq2x8hvgqg6lp34",
  "inj1gh264nz5l2nsd4rqmv9r03jy7nrz5jmslt3wgr",
  "inj1gha0qswq70qwvvsfdr7km8vaejswp573uaytz5",
  "inj1ghp6dvwwmwpmjlna5mzzlfxwmszzuerfm7q5g3",
  "inj1gj88qkj6q7gflh5g6y6egzyuj7w5y0x6zrfc5t",
  "inj1gp2vds5gucy9p4e2h70fzzjpfn7h2nuq6fvhal",
  "inj1gs78aqwntshdchum8e8sd8s554vzfckx6psrw5",
  "inj1gshf7eh7ecfmhehcy3gwwv0k2n93d8x4yez2rm",
  "inj1gucfnr3jj0v3n965ce502ed534de2p0ggd6ecy",
  "inj1gwtgqxnehj86m23kh3c4a4gjpvaaga0tsdng2m",
  "inj1gxhvtqf68w6lwcg2gg6p58f0m4g2crj4muyg8a",
  "inj1gxqdj76ul07w4ujsl8403nhhzyvug2h66qk057",
  "inj1gze3g4t9m6ryulr5e83re5rpcl78tcdqe965lc",
  "inj1h0m5jrgcrc0xwrynudprzmt6mp2um6q24k6qmd",
  "inj1h3xr6579zp7f3ctm6jq70rs6fv5rxtrqwa7myu",
  "inj1h4dffzfyjuvzym7myygsaflmpph4juyqsgnjj0",
  "inj1h6zjvqzrha7u9meft0wku2rujecan9ltky308r",
  "inj1h8cswa47keeewsfht89h2qrj7n4g2lnq4rqnzq",
  "inj1h90la5zc77274fyn76lvmxw6mj3ykxqlaxg4gq",
  "inj1h9c09trxz6l2e5720fd3ct3vexgujj9fx8hu0p",
  "inj1ha8srxc9tv8gg5qd3daax7pxwg4czduu24us8u",
  "inj1hfzxg03lyu35scr8m7pwxj4jwz7t55wccfzh6k",
  "inj1hhkcmf7u2lme46wjlrzqvejhqg862vs05zfs4c",
  "inj1hnaxsuqd5yzc3698l08t7wk90gk32r6fgqehap",
  "inj1hnnyw79cnfw8azcghq8h62ltj2d4y2v7waz8qr",
  "inj1hp33z4hrjak20jxy0jsx5yg0mrtp3jmhlun29l",
  "inj1hp87derxjzl84udr537udvg26epa7yal80r89h",
  "inj1hrkkkwvj4yf2qyvkmk5c33v8apnfs4mhgvlh3j",
  "inj1hxhxdmfxgs0q95l00y84n7jvfyslx72n6ptm3q",
  "inj1hzefd5qa842e8ehc9znnkw88xf9tr9dzkkvuyf",
  "inj1j4qcyfayj64nyzl4lhlacuz62zak5uz5ngc576",
  "inj1j4w8catx2ffd9g53j93p7dtnzelueae04t85um",
  "inj1j5kz878sv7j70ct9lu8yyjgl28v8m0y4hj37as",
  "inj1j9h667sav76g8g90fs0xwd9jk6f4nlv8fxuupj",
  "inj1jdjdgprdjpn46l03yvfkef7c5ys53atyvjyw5q",
  "inj1jeug24sxc6g09k5ywzcrcxljnl9npf8k3as7eq",
  "inj1jg23daep2739uxe8hcenvu7phklymcnn6gnesn",
  "inj1jhe6ryxkaw4nrjaw5qc8p6q7ynkjr2rzmcled4",
  "inj1jhfvz66t898v68u528g0nnu3gus7xdw8uqzjue",
  "inj1jts3efwng9c57k2czd65pqejqm3ehklqljmcrv",
  "inj1juw7q4vt3j03a7nqpsk6wkz9sqcaeaqt5mpydj",
  "inj1jz342qj5f4k9tqzp9grum357jr922t5ry0lu9a",
  "inj1jzuu0l34qvcm988tq8m6dnhglxnme2vf8f55l6",
  "inj1k2sh7crxnsnv7upqsxjna0sq62mds9tpl5k9g8",
  "inj1k50jcl3w9frn396wkvvttghxrc4uc29csa28ts",
  "inj1k5vhdsndss97zztggsxl43rd88fpukgn4pj9y6",
  "inj1k6pxa7n24rpttzplc3ujdxz6lpf26kwj8gemhl",
  "inj1k7zdu5m7rwe06wdslcn3nvd543y0krq9dcqvha",
  "inj1kc7rf0vvuhud74a8ujylxwc3whxk2hs60u7lf3",
  "inj1kjz3zss2xscp27tc6e5d3amt98z09ndh4wuwpl",
  "inj1kmgj62fd97j95e7ehfcu38cqqdlpyk7pdj9txc",
  "inj1kscpq7lqluusxhmzv0z2eluaj9yf2njayudlcs",
  "inj1kxa40khek9qugxr8p2v84999rwz08jqmkmgl3s",
  "inj1l2ngnkvl8wllwu8yp96hthfcfyrj7upglpfpzp",
  "inj1l5s4mlz0zqjkgrkw8a6087e4ydqjpnrvjxnj5u",
  "inj1l873g53duywd6twc7njl728urwwly69hhqttxz",
  "inj1lanpt2q3wfxy4un4304dny3nc3wtewz4lh4cam",
  "inj1lfx4y4w5cxzp8p5wvly72teygmx04vs4xr03st",
  "inj1lh5ac4uc9tgw8h7msrr9ee3wmdlcydlc8a6k7c",
  "inj1lhzemj4qqaluz79u7yhe6emuhe64z822cn8zjp",
  "inj1ljvhr70neal69e0f2tlqg8yhtces7r6acsmuw8",
  "inj1lsafme4jy3rza2ekyutjwr9nmlannx80spp40p",
  "inj1lye3du2qf6m0zc8hg7vmkh3zph2xfe9qy32hmk",
  "inj1m45c9dr5zf89dn3kxl63tj9nnnxgg2urg45lpl",
  "inj1m4g2aua835n5za2zxzfmwqfpg9ta5wyh47dz3w",
  "inj1m5acnfl6d7psg7l5w6m7wfwxq496tduuyfg0kh",
  "inj1m97fppzsw7x7tuqzf8dgnexhctl0kjjtaj5xrk",
  "inj1m9af3kvrn6xre062ggn9f35uf079reuazzenwq",
  "inj1mc46qq9ugyvnk5cqtdft8fl2wk27s9r49h82t0",
  "inj1megces97jf7zhggnjsclxlwcnl3ufwrvpymwej",
  "inj1mf3p8llv0p22gsskp0k00f4wjwmeq9gfuqcp8v",
  "inj1mhc0adfp09xfauhe7cf2ld6sj3m8d4dfaywhpc",
  "inj1mhsggccxtj3ftayp62jvavdf3wfflyt854ywg7",
  "inj1mn5qz6ya5kx3f0fhca87hk5pt35y7nh6kj0jzr",
  "inj1msxdqahu0y980vtp6acj6s8x5vmm7texewgveq",
  "inj1mxlkzyr3qdwhazqe5rs5atj46l4whmapl7rpvw",
  "inj1mxzdum3hc4gztj8as2k4w8ztp2pte80xq7qewe",
  "inj1mzs2w8kch6mejahq3h95wtc2kn0alne3c0zfqf",
  "inj1n273tgcvgw4ry853j435jwcx4d8wdh5n3yftmk",
  "inj1n3kme3m5yp92m7udls7rjhj0vqedmcwus8xhy3",
  "inj1n7aph65yevaqu996l6hxcvtjjwtx0hw56e54ff",
  "inj1n8vy40fx0m6v9asn2lm47amufmytdw5zdx3q3e",
  "inj1ne284hkg3yltn7aq250lghkqqrywmk2sk9x2yu",
  "inj1nef5lhuw8kf5rpsmetu7ygdl07yf0tt9vynu3f",
  "inj1nfagdkt2zuaj2mdwpp3qgxlphdcynslhrdd4e0",
  "inj1nfh6u48xrv6h96pellhnhxxu4h0t9hzwpjvl5c",
  "inj1nkfmhs668xudx3mdvcwx3jx2mc2n45h2luccam",
  "inj1nklfjgfq0544u8kd48r60rec5nwx8kturu07z7",
  "inj1nllus3c6are7y5792d843x2td3dsqtxgfl6vgu",
  "inj1nm5plx2snt69saqctlp4xmded0n8ns2q7wpnnl",
  "inj1nplpdpmedq3zjxrhc6a3evw6unksn30z6226l0",
  "inj1npvrye90c9j7vfv8ldh9apt8t3a9mv9lsv52yd",
  "inj1nshdnp4sv7s74ufxv73zely4dql5rf6kgswuta",
  "inj1nt0awckej77nsgpg54umk69a6jwewjfuv0y5jx",
  "inj1nuql0ldeh9mm7fnfa2s3epe0cjj6ktmrxxq5ln",
  "inj1p42586erpskurxgydddz5y8r8j83z2le7w5kft",
  "inj1p4xw02g5fn3702f9f5hhy0mnenmfnf80rktall",
  "inj1p8ajkg52vldlnnzp22v0d97nejnf28j9ujw3dg",
  "inj1padd4083stw7ek8m69pd9pdpzsfrt9tq4d46de",
  "inj1peplwsuqcyu3m7853cgd32pqa7k3uff4qugvaa",
  "inj1pezuwqllmf9ffv7dy3v6uxfeh397re0c2f5y4u",
  "inj1pgxnppuxnqt2ec8ljh8dgd483v4vjfqun96eyg",
  "inj1ph7x4pg9dw8dlk9ttfzjnyj8v3cz89cgws7nll",
  "inj1pknan5pk8jtvqt9tp9cdkhjnyvaegfygz0jmyu",
  "inj1pugugung9eytc6vua9kq3jws84fmqhq652ucv9",
  "inj1puj4c29yv3uck4au78jgpdfuwvux0mv7nce88w",
  "inj1pvt70tt7epjudnurkqlxu62flfgy46j2ytj7j5",
  "inj1pwkzm5s549jtnzw0jfyv4tawmw73vgp27shfkp",
  "inj1q4rj9l9xljnlxwx488ep6unj432es5eec3fknt",
  "inj1q82fmsgee627wh2w2rthy6eqt2jst9wc3tytz4",
  "inj1qde6grevjzw9mp00j8h9pzrr7xs6wxcaecjws0",
  "inj1qeduwzm6aq6anmye9t59gssqarpp4lds8hd36n",
  "inj1qmc7w099c5dwrh072wnpwfev5gafmu6p296uhh",
  "inj1qpqkjgge9gstlv6lqafce4mcwqpx274mjsx4wj",
  "inj1r2qvl2z0qaqe60kw9jcnp3p2zxpq4pqt77p2wn",
  "inj1r5q5wup0gswv0zpzxhu9rdlxw458t5zn7xpwr8",
  "inj1rferu6ap3655dce02cpkewy7ug6cear0t3z8f4",
  "inj1rheszu82hlkqmc22z3vqgyalz4ac0gfjrg76sa",
  "inj1rmv2f2cf02et6mtph7w5sgfr3yt84tkgdz8358",
  "inj1rn23gl8d0zvv2ym0e9jk7rps9jzffx8uwlw7gg",
  "inj1rqyq6m9gvvwj7cnh8a3fx67wwhxj5at3d68al7",
  "inj1rtw3wk94jw2jum35u6jrdgp20x5am85aurxl2h",
  "inj1rxmgvaecuftdfhwry4u47krmw3rqtvculpfajp",
  "inj1rz2p4at2ylhy45jhgw3q7gdqt5m36g3kljwkff",
  "inj1s5sakgv7ruj6met8r9290882wshyqk0gajsdtg",
  "inj1s5yclxapwsg78w4tgs8tgkqzdgq3snr5c4zh2n",
  "inj1s7rh6e9n063frm4pjjuk9hc7wu8jhtlkw4wecy",
  "inj1sdpuph8l5kqyfhpvx8r2357ur47nx09knc7mjl",
  "inj1slheflxakpshtkxt84lfmjpnjg4vgezc7yw9vx",
  "inj1smljlxhhx0pcqxce7zs3geqtrpcj0kx5rq0csm",
  "inj1sqnjy0h6sfpexdfzxtu659cwzaduquem64t7ye",
  "inj1svw705lkn7e050r29vatpgnewf9uq2y70elmyv",
  "inj1svyklg7yt0swda7ya5khqpzaq3ld5adquamdv4",
  "inj1sxhkhyfvek34qj86hwmynheqdfj7pngz76mp9d",
  "inj1t708glv206dq6qhmq942g9m3v7637u2txgv2xz",
  "inj1t8wuan5zxp58uwtn6j50kx4tjv25argx6lucwy",
  "inj1t9fq7pcclfx6rge43a3j28kvxtrggcew6neeld",
  "inj1t9xm7c9fug562w2ql8uk29v0h4nst3plhfxjeh",
  "inj1tefd5dv9xk2juy3kcyy9qar0put0hup8ufznax",
  "inj1tfp4vzungc4k6mlufkct6v74pz0h0quns6prdz",
  "inj1tvvhu0hxwuz33ahjwdf8g530fz4adxrycc3gfl",
  "inj1tvwv46dnqpr30s7328gk3zw3hv39e09p4mfy3t",
  "inj1twatjkmcm6q9yv8kndqu2j8j8qtsr2u9u9ug4k",
  "inj1u0q9j92sar6ljlqraahhs5ydweuyhk36t9057s",
  "inj1u2edelcufcljv2cvqqkneqsmnekegt37jn92n0",
  "inj1u2p4p7nyy5rjmj43qccnwf4vxtslwjrts9qky6",
  "inj1u4g80gzxyn6u0n82687xt8mr5xa5s7cj8wp0sl",
  "inj1u63zq4n2m2xn88w25chdjrvnfndq943wkeufj6",
  "inj1u7usgmq63t7umytly220yxw4pu7t60xy73ynyz",
  "inj1ueh4v760hwvkycqkxumqk8ar4x76pcd9yx9n54",
  "inj1uj0np5w9qhr69d6cjj0zx8g08slwu2vzcmak3k",
  "inj1ujlu27uyld774z656ssgxnqf8njfsqqjtr4ld5",
  "inj1ukzhqwa35l9d0cavmdxls6a8x0h2sac7pqtlns",
  "inj1uqw45l33d49ggvu0rlxfzv9qzwfzpd2v74gdyf",
  "inj1urqcfuc2ya0rew945ahkqjywjuerk238p7d4z5",
  "inj1utgpcjplrkyc4y2dcae3qmf04w8fhgjqqrzkqu",
  "inj1utsmhtpt3s3duw33h2a36kmy59sgpqwzl0eqlh",
  "inj1uxvmqam9n4ey7xn3ra8wpaggfaeqs36z3ny9el",
  "inj1v02ray7lukdatzrvdgcgfctu5l0uxhc0ztuvff",
  "inj1v5308pz3yn248gefdvfyq4t7ul89s3qjnukcgk",
  "inj1v7re0rcx6mh7h30000ftly9j3mj6rn6fvsswwk",
  "inj1vf7yl80c4nls67q0qf66p7x2259vplen54mkc9",
  "inj1vg8tqk7ruukn85dysxzkw8404u82uqz8yq4k3x",
  "inj1vkwm0ul2rqqame2jt87vhv0gvz8ca0004z54zu",
  "inj1vuzxzrek8e7c47tqhlvk62p2hc9u62l85kkunk",
  "inj1w08p76pul6vpznm0jqrt36hc3eyjuneeewhlyy",
  "inj1w0hmla2pvukew5cysve8nyky9w9nn5x9wapfr0",
  "inj1w3alpe0dwk26azgqkwt930qme4x8j2g4s7xx7p",
  "inj1wdf3ysxjhkgxhv4qm6rkce4w6xphpuyva3dwuh",
  "inj1wg0hmk79xx38mvwhnf6rggxvxldyyhku57e2th",
  "inj1wljuuvjhm5gyveezp95katvnw0rjjkgmx9yh9a",
  "inj1wqveuaedel529ldglqh6jn68atz6w6hm0rxhmr",
  "inj1wu56tkuhlgagfhr8f3h4emzg533vjyqrgruv0l",
  "inj1wyzzaspc6z9cwlvdq0p74phmn7j7j9ykau2g3z",
  "inj1wz94unz7mnc5y6jyh93ze5232z2wf2xt9z2yge",
  "inj1wzhp2c6zu7ads7r2aw9c4wm52nakcg35mlh6sx",
  "inj1x6u08aa3plhk3utjk7wpyjkurtwnwp6dhudh0j",
  "inj1x7p2wme7su38snkpc7x3pmxxd5hng3v0hsf37h",
  "inj1xfr8s7xw3cs6v8ula4vm4e8msf29v2u7e8wtes",
  "inj1xgmk8qzltpx06ulj7v6866nn92ql9vs57q8s63",
  "inj1xjtuyhm8akze6jjswm8tdk66u4ufy9udfvx54m",
  "inj1xkdez0l86gymgcfn6nzzff0lwpjzjmta6hlznx",
  "inj1xks84shksm4c67parjfuuq5j2mt4wjj2fnumnu",
  "inj1xp35hx306jlx8dt3a54n4qzxkg5aen3fzj4vfj",
  "inj1xpc7l2k9l7mqyctdqjpt37wwfc7gqj7nt3vhy4",
  "inj1xt9e6rw4jyqcs4dv2g68tngafxqd9x0sxsjes2",
  "inj1xwe0rn3t0yhl3kmz2jldccchh6sa9z35dy6c4s",
  "inj1xyy48kyegrm74n95ytlm84f3ullsfngahnqtvy",
  "inj1y0j8kfgyx3k6ufkewk22p5uuxvqmc8wl6e6wvv",
  "inj1y36qrmcpqll7ad3mearj0fyzyy4z97jcrpeccg",
  "inj1y3du3wpgsz7erf9qxrss40harxzfdhv2kxkq4f",
  "inj1y7qyd8wpkfwx4jd2tx78ln5mwhmr9kql8mdmpr",
  "inj1yayy54geynymlrpzelnuk387lzke7s3fr39drp",
  "inj1yg88wrctpexcgfpke2qqtnpuh4k3zu2kuvll44",
  "inj1ygeap3ypldmjgl22al5rpqafemyw7dt6k45n8r",
  "inj1yl0t6kg8z5dcn6tnnmqt0kuwmrfgn7wx3qel4x",
  "inj1yrfk5x5af4la7cvrdqxpxfjxs6876q8emr3xvc",
  "inj1yrgvy5la0aznryrfxklew9jj2guh7jg3p7w4gu",
  "inj1ywnauvrgm30pfnprrm8grftslnwwjyzu6kgy93",
  "inj1yzgc7xn2h92w7anupuylxadkaqgyt75qse0y6y",
  "inj1z7l8m7lgs95yhrz3vrllrfxwyuyee3a5m54ldu",
  "inj1z8exupfl0mwqzmydzg0h409pdmhudpdq68hglz",
  "inj1zg2p8lxax507nwgk2yr9xud4nueykz7es26024",
  "inj1zjxanumxpypt7p29pu8lwn39es30rmsc5aheyf",
  "inj1zp3hfgrerucaahsqlukxr5vqq9n2dmlahksmdr",
  "inj1zpkga0nr77tlqzu59hcevhrlyed3sw9luhu0tz",
  "inj1zvag2sv8dzu0cxemwnscdmy3z34x5fpafzk4xx",
  "inj1zvs6q4hmjj2r9nguj0ym9zz4y7rjaxeau7p8n3",
  "inj1zxugdw0tl0rh52g5e6vefyev8mqd5lqy6zyeqc",
  "inj1zzq70vfx8w0kw7lmrl4h6tje3ygf43gndyfr7k",
]);

const apiKey = process.env.GROQ_API_KEY;

exports.handler = async function (event) {
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "GROQ_API_KEY is missing from environment",
      }),
    };
  }

  try {
    const { walletData, address } = JSON.parse(event.body);

    const isNinjaPass =
      NINJA_PASS_HOLDERS.has(address.toLowerCase()) ||
      NINJA_PASS_HOLDERS.has(address);

    const transactions = walletData?.transactions?.data || [];
    const msgTypes = transactions.flatMap((tx) =>
      (tx.messages || []).map((m) => m.type || ""),
    );

    const hasVotedInGovernance = msgTypes.some(
      (t) => t.includes("MsgVote") || t.includes("gov"),
    );

    const usedDapps = [];
    const txStrings = JSON.stringify(transactions).toLowerCase();
    if (txStrings.includes("helix") || txStrings.includes("exchange"))
      usedDapps.push("Helix");
    if (txStrings.includes("mito")) usedDapps.push("Mito");
    if (txStrings.includes("neptune") || txStrings.includes("nept"))
      usedDapps.push("Neptune");
    if (txStrings.includes("hydro")) usedDapps.push("Hydro");
    if (txStrings.includes("silo")) usedDapps.push("Silo");

    const prompt = `
You are Zelos, an AI guide for the Injective blockchain ecosystem.

Wallet Address: ${address}
Ninja Pass Holder: ${isNinjaPass ? "YES — this wallet holds a Ninja Pass and has PRIORITY eligibility for the Community BuyBack whitelist" : "NO — not on the current Ninja Pass holder list"}
Has Voted in Governance: ${hasVotedInGovernance ? "YES" : "NO"}
DApps Already Using: ${usedDapps.length > 0 ? usedDapps.join(", ") : "None detected"}

Wallet Data:
${JSON.stringify(walletData, null, 2)}

Respond in this exact structure:

## 👋 Wallet Summary
Brief plain English summary of holdings and activity level.

## ✅ What You're Doing Right
What the user is already doing well. Be specific.

## ⚠️ Opportunities You're Missing
IMPORTANT: Do NOT recommend dApps listed under "DApps Already Using" above.
Only recommend from this verified list where relevant:

TRADING & DEX:
1. Helix — spot, perps, RWAs, 0% gas for makers. Link: https://helixapp.com
2. Choice Exchange — DEX aggregator, best execution routing. Link: https://app.choice.exchange
3. Pumex — MetaDEX with smart routing. Link: https://pumex.fi
4. Borderless — pre-market and cross-chain trading. Link: https://bswap.in

STAKING & LIQUID STAKING:
5. INJ Staking — earn passive APR. Link: https://injhub.com/stake
6. Hydro Protocol — liquid stake INJ, mint hINJ. Link: https://hydroprotocol.finance
7. Accumulated Finance — mint stINJ, auto-compounding. Link: https://accumulated.finance/stake/inj

LENDING & BORROWING:
8. Neptune Finance — lending for USDT, USDC, WETH, INJ. Link: https://app.nept.finance
9. Silo Finance — risk-isolated lending, yINJ/INJ market. Link: https://app.silo.finance

YIELD:
10. Mito Vaults — automated yield vaults. Link: https://mito.finance
11. RFY Finance — institutional yield vaults. Link: https://rfy.finance
12. Bondi Finance — real corporate bonds onchain. Link: https://bondifinance.io

ECOSYSTEM:
13. Community BuyBack — monthly program, ~23.9% avg earnings, INJ permanently burned. Link: https://injhub.com/buyback
14. Governance Voting — improves BuyBack eligibility. Link: https://injhub.com/governance
15. Native USDC — migrate from bridged stablecoins. Link: https://injective.com/usdc
16. Bridge Assets — from Ethereum, Solana, Cosmos. Link: https://bridge.injective.network

## 🎯 Community BuyBack Eligibility
${
  isNinjaPass
    ? "This wallet holds a Ninja Pass — confirmed PRIORITY eligibility for the BuyBack whitelist. State this clearly. Then explain what else they can do to maximize their commitment size and earnings."
    : "Estimate eligibility 0-100% based on staking activity, governance voting, and dApp usage. Be accurate — do not inflate the score. Give 2-3 specific actions to improve it before the next round."
}
Governance voting status: ${hasVotedInGovernance ? "Has voted ✅" : "Has NOT voted ❌ — this hurts eligibility"}

## 🎯 Your Top 3 Actions Right Now
Exactly 3 prioritized actions with direct links relevant to this wallet.

## 🐦 Tweet
One punchy tweet max 220 chars, first person, crypto twitter tone. Reference their actual situation and BuyBack eligibility. Start with "Just used @ZelosOnINJ on @injective —" end with "#INJ #DeFi". Natural, not spammy.

Sharp, direct, Injective-native language. No fluff.
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1500,
          messages: [{ role: "user", content: prompt }],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Groq error: " + JSON.stringify(data.error),
        }),
      };
    }

    const text = data.choices[0].message.content;
    return {
      statusCode: 200,
      body: JSON.stringify({ result: text }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
