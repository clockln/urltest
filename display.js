////Datalist + displayDatas

window.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  for(let i=9;i>=-1;i--){
    const newDiv = document.createElement('div')
    const addId = 'imgcontainer' + String(i)
    newDiv.setAttribute('id',addId)
    const add_Div_temp = document.getElementById('maincontainer')
    add_Div_temp.appendChild(newDiv);
  }

  let imglist = {'18.-2': '','18.-1': '','18.0': '','18.1': '','18.2': '','18.3': '','18.4': '','18.5': '','18.6': '','18.7': '','18.8': '','18.9': ''};
  const folderName = 'jackets';
  data.forEach(element => {
    const imageleng = element[3].length;
    let Difficulty = 'other'
    if(element[3][imageleng-1] === 'e'){
      Difficulty = 'EXH'
    }else if(element[3][imageleng-1] === 'i'){
      Difficulty = 'INF'
    }else if(element[3][imageleng-1] === 'g'){
      Difficulty = 'GRV'
    }else if(element[3][imageleng-1] === 'h'){
      Difficulty = 'HVN'
    }else if(element[3][imageleng-1] === 'v'){
      Difficulty = 'VVD'
    }else if(element[3][imageleng-1] === 'm'){
      Difficulty = 'MXM'
    }
    const add_data = "<img src=\"" + folderName + "/" + element[3] + '.jpg\" class=\"' + Difficulty + '\" alt=\"' + element[1] + "/" + element[0] + '\"></img>'
    imglist[element[2]] += add_data;
  });

  for(let i=-1;i<=9;i++){
    const selectDiv = document.getElementById('imgcontainer' + String(i))
    const listKey = '18.' + String(i)
    console.log(selectDiv)
    console.log(listKey)
    selectDiv.innerHTML = '<p>' + imglist[listKey] + '</p>'
  }

  const param = location.search;
  if(param.length == 1){
    return true;
  }else{
    const displaytest = document.getElementById('display_area')
    displaytest.value = param.split('?')[1];
    console.log(param.split('?'));
  }

});

const data = [
    ["","","18.-1","00000-"],
    ["","","18.0","000000"],
    ["","","18.1","000001"],
    ["","","18.2","000002"],
    ["","","18.3","000003"],
    ["","","18.4","000004"],
    ["","","18.5","000005"],
    ["","","18.6","000006"],
    ["","","18.7","000007"],
    ["","","18.8","000008"],
    ["","","18.9","000009"],
  // name           ini diff  waku imglink
  //  18.9
    ["World's end","","18.9","03065e"],
    ["Wish upon Twin Stars","???","18.9","02293g"],
    ["HAELE III ~Angel Worlds~","","18.9","03189g"],
    ["Quaint Echo","???","18.9","03404e"],
    ["Legendary Road","","18.9","04128m"],
    ["??????????????????","???","18.9","04235m"],
    ["Divine's:Bugscript","","18.9","04278m"],
    ["Venomous Firefly","???","18.9","04357m"],
    ["Joyeuse","???","18.9","02076v"],
    ["???","???","18.9","05053m"],
    ["Aerial Fortress","???","18.9","05116m"],
  //  18.8
    ["Last Concerto","","18.8","02172g"],
    ["?????????????????????","???","18.8","04039m"],
    ["?????????????????????????????????????????????!!! ????????????????????????????????????","???","18.8","04068m"],
    ["GERBERA","???","18.8","04186m"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Empress Side","???","18.8","04205e"],
    ["Lowermost revolt","","18.8","04206m"],
    ["Concertino in Blue","???","18.8","04142m"],
    ["Xroni??r","???","18.8","04325e"],
    ["Idola","???","18.8","02257h"],
    ["??????????????? ?????????????????????","???","18.8","05075m"],
    ["???????????????????????????","","18.8","05122m"],
    ["* Erm, could it be a Spatiotemporal ShockWAVE Syndrome...?","???","18.8","05153e"],
    ["??e:son D'??tre","","18.8","05247m"],
  //  18.7
    ["HAVOX","","18.7","03093e"],
    ["INF-B???L-aste-R???","???","18.7","03128e"],
    ["Blastix Riotz","","18.7","03149e"],
    ["XHAOS JUDGE","???","18.7","03229e"],
    ["Demise Quartet","","18.7","03262e"],
    ["MG277","???","18.7","03266e"],
    ["Hellfire","","18.7","02171g"],
    ["The world of sound","???","18.7","01156h"],
    ["??VERSOUL","???","18.7","04066m"],
    ["???????????????????????????","","18.7","02035h"],
    ["V.I.P.","","18.7","01107h"],
    ["????????????","???","18.7","04136m"],
    ["FIN4LE ???????????????????????????","","18.7","04141e"],
    ["Doppelganger","","18.7","04161m"],
    ["????????????????????????????????????????????????????????????","???","18.7","02170h"],
    ["??????","???","18.7","04176m"],
    ["#SpeedyCats","???","18.7","04192m"],
    ["????????????","???","18.7","04211m"],
    ["Re:End of a Dream","","18.7","04263m"],
    ["PROVOES*PROPOSE <<??l fine>>","","18.7","04351g"],
    ["*Feels Seasickness...*","","18.7","04401e"],
    ["pique","","18.7","05158m"],
    ["Turn the story","???","18.7","05162m"],
  //  18.6
    ["For UltraPlayers","","18.6","02168e"],
    ["Black Emperor","","18.6","02215e"],
    ["croiX","???","18.6","01122i"],
    ["Absurd Gaff","???","18.6","01115g"],
    ["LegenD.","","18.6","03064e"],
    ["gigadelic(????????????'s ''The TERA'' RMX)","???","18.6","03117e"],
    ["??????Beach Side Bunny","???","18.6","03139e"],
    ["UnivEarth","","18.6","03145e"],
    ["veRtrageS","???","18.6","03152e"],
    ["??????","???","18.6","03156e"],
    ["Firestorm","","18.6","03167e"],
    ["??????????????????2000","???","18.6","03179e"],
    ["???????????????","","18.6","03188e"],
    ["??????????????????????????????????????????????????????","???","18.6","01128g"],
    ["REVOLVER","","18.6","03268e"],
    ["Celestial stinger","???","18.6","03353g"],
    ["CODE -CRiMSON-","???","18.6","02294g"],
    ["?????????-vajra-","","18.6","03253e"],
    ["??????","???","18.6","03394e"],
    ["Solar Storm","???","18.6","03405e"],
    ["Broken 8cmix","","18.6","01009h"],
    ["Dreadnought","","18.6","04016m"],
    ["Gamerz FestivaL","???","18.6","04067m"],
    ["ULTiMATE INFLATiON","???","18.6","04133m"],
    ["????????","","18.6","04214m"],
    ["Nexta","","18.6","04289g"],
    ["Levier'n N??bYss","","18.6","04311m"],
    ["???????????????????????????","???","18.6","04317m"],
    ["ouroboros -twin stroke of the end-","???","18.6","04370m"],
    ["Xevel","???","18.6","04372m"],
    ["THE HEAVEN","???","18.6","04405m"],
    ["??????????????????????????????????????????","???","18.6","04406m"],
    ["ULTRAVELOCITY","???","18.6","04407m"],
    ["GALAXY BURST","???","18.6","05017m"],
    ["??????(Hommarju Remix)","???","18.6","05010m"],
    ["SociuS","???","18.6","05057m"],
    ["Aurolla","???","18.6","05060m"],
    ["LECTORIA","","18.6","05114m"],
    ["??VERFLOW","???","18.6","05121m"],
    ["Nhelv","","18.6","05144m"],
    ["Elemental Creation (kamome sano Remix)","???","18.6","05185m"],
    ["ZE??ITH","???","18.6","05191m"],
    ["Nebulas","","18.6","05209m"],
    ["?????????????????????????????????????????????","???","18.6","05276m"],
    ["Macuilxochitl (Latin Jazz Mix)","","18.6","06054m"],
    ["Verflucht","","18.6","06059m"], 
  //  18.5
    ["??? Rockin' SWING REMIX","???","18.5","01034i"],
    ["Max Burning!!","???","18.5","01124i"],
    ["????????????????????????????????????!!","???","18.5","03077e"],
    ["Sayonara Planet Wars","???","18.5","03079e"],
    ["End to end","???","18.5","03246e"],
    ["EMPIRE OF FLAME","???","18.5","03247e"],
    ["Lachryma???Re:Queen'M???","","18.5","03242e"],
    ["Endless GRAVITY","???","18.5","03308e"],
    ["Completeness Under Incompleteness","???","18.5","03352g"],
    ["Triple Counter","","18.5","03367g"],
    ["GEOMETRIA","???","18.5","03380e"],
    ["Onigo","???","18.5","01061h"],
    ["Rebellio","","18.5","04065m"],
    ["JUNKIE FLAVOR","???","18.5","04127m"],
    ["PUPA","","18.5","04129m"],
    ["Mirrorwall","","18.5","04138m"],
    ["Spirit of the Beast","???","18.5","04147m"],
    ["Ghost Trigger","???","18.5","04158m"],
    ["Scarlet Lance","???","18.5","04175m"],
    ["BEAST BASS BOMB","","18.5","04187m"],
    ["Hug!! Vs. Hug!!","","18.5","04191m"],
    ["I","???","18.5","04238e"],
    ["Sacrifice and Faith","???","18.5","04234m"],
    ["??e's NoV??","","18.5","04246m"],
    ["????????????","???","18.5","04253g"],
    ["Last??megA","","18.5","04282m"],
    ["ECHIDNA","???","18.5","04291m"],
    ["Gate of Atlantis","???","18.5","04297m"],
    ["MeteorGlow Aftermath","","18.5","04298m"],
    ["Reb???t","","18.5","04302g"],
    ["?????????????????????","???","18.5","04321m"],
    ["Prey","","18.5","04340m"],
    ["Nostalgic Blood of the Strife","","18.5","04358m"],
    ["????????????????????????","","18.5","04378m"],
    ["MODEL FT4","","18.5","04387m"],
    ["Destiny","","18.5","04404m"],
    ["ARROW RAIN","???","18.5","05022m"],
    ["Atropa bella-donna","???","18.5","05072m"],
    ["Barbatos","","18.5","05073m"],
    ["Pulsar","","18.5","05156m"],
    ["Call of the World","???","18.5","05163m"],
    ["??bertreffen","","18.5","05168m"],
    ["????????????????????????????????????????????????","???","18.5","02158v"],
    ["Over The Top","???","18.5","05212v"],
    ["Leviathan","","18.5","05251m"],
    ["With It This Heaven?","???","18.5","05277m"],
    ["SuperMiracleEnsemble","???","18.5","06042m"],
  //  18.4
    ["BLACK or WHITE?","","18.4","02173e"],
    ["Bangin' Burst","","18.4","02169e"],
    ["FLOWER REDALiCE Remix","???","18.4","01038i"],
    ["werewolf howls.","???","18.4","02302e"],
    ["VILE CAT","???","18.4","02308e"],
    ["tricky trick","","18.4","03073e"],
    ["KAC 2012 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX-","???","18.4","03074g"],
    ["Ops:Code-Rapture-","???","18.4","03146e"],
    ["Angels And Demons","???","18.4","03212e"],
    ["Pon-Pon-Pompoko Dai-Sen-Saw!","","18.4","03115e"],
    ["NEO GRAVITY","","18.4","03245e"],
    ["KAC 2013 ULTIMATE MEDLEY -HISTORIA SOUND VOLTEX- Emperor Side","???","18.4","03263e"],
    ["Fox4-Raize-","","18.4","03267e"],
    ["XROSS THE XOUL","???","18.4","03273g"],
    ["NEO TREASON","","18.4","03358g"],
    ["Crack Traxxxx","???","18.4","02122g"],
    ["FL??geL?????rp:??ggy?????","","18.4","03368e"],
    ["Noisy Minority","","18.4","04038m"],
    ["????????????","???","18.4","04041m"],
    ["Make Magic","","18.4","04054m"],
    ["Cepheus","???","18.4","04082m"],
    ["Gorgetech","???","18.4","04110m"],
    ["Juggler's Maddness","???","18.4","04139m"],
    ["WHITEOUT","","18.4","04140e"],
    ["Glitter Flatter Scatter","???","18.4","04151m"],
    ["POLICY BREAK Medley from SOUND VOLTEX??jubeat","","18.4","04077m"],
    ["HP:1","???","18.4","04179m"],
    ["Khionos TiARA","???","18.4","04198m"],
    ["Be a Hero!","","18.4","04204m"],
    ["???????????????????????????????????????????????????","","18.4","04216m"],
    ["BlueMoon Princess","","18.4","04245m"],
    ["Wings of Glory","???","18.4","04247m"],
    ["SAtAN","???","18.4","04277m"],
    ["????????????","???","18.4","04320m"],
    ["???????????????????????????","","18.4","04319m"],
    ["Qubism","???","18.4","02044h"],
    ["STULTI","???","18.4","04367m"],
    ["Taiko Drum Monster","???","18.4","04371m"],
    ["???????????????????????????????????????????????????","","18.4","04373m"],
    ["Yum Yum Sweetie","","18.4","04386m"],
    ["??mbry??","???","18.4","04400e"],
    ["Evans VolteX Pf arrange","???","18.4","01015h"],
    ["Jack-the-Ripper???","???","18.4","05016m"],
    ["??????????????????????????????????????????","???","18.4","02047v"],
    ["GaLaXyEggPlanT","???","18.4","05031m"],
    ["????????????","","18.4","05054m"],
    ["Glorious Journey","???","18.4","05062m"],
    ["To:BrandNewDeadline","","18.4","05092m"],
    ["J??PIT??R ??? G????VIT??","???","18.4","05097m"],
    ["Liar rain","","18.4","05103g"],
    ["Dogeza Stairs","","18.4","05115m"],
    ["?????????????????????","???","18.4","05152g"],
    ["??????","","18.4","05167m"],
    ["Valanga(polysha Remix)","???","18.4","05176m"],
    ["SAMURAI TIGER","???","18.4","05192m"],
    ["666","???","18.4","05186e"],
    ["Katharsis","???","18.4","05190m"],
    ["She is my wife ???????????????????????????????????????Remix?????????","???","18.4","02017v"],
    ["MeteorA","","18.4","05200m"],
    ["????????","???","18.4","05208m"],
    ["memento mori -intro-","","18.4","05248m"],
    ["???????????????????????????????????? -VOLTEX Mix-","???","18.4","05284m"],
    ["Destr0yer","","18.4","06015m"],
    ["POSSESSION (Aoi Q.E.D. RMX)","","18.4","06006m"],
    ["Elemental Creation -xiRemix-","???","18.4","06051m"],
    ["Hurt me plenty","","18.4","06081v"],
  //  18.3
    ["VALLIS-NERIA","???","18.3","02045e"],
    ["INSECTICIDE","???","18.3","02277e"],
    ["Invitation from Mr.C","???","18.3","03062e"],
    ["????","???","18.3","03148e"],
    ["XyHATTE","???","18.3","03151e"],
    ["Preserved Valkyria","","18.3","03150e"],
    ["????????????????????????????????????S","???","18.3","02127g"],
    ["????????????????????????","","18.3","03180e"],
    ["????????????","???","18.3","03198e"],
    ["???????????????????????????","","18.3","03225e"],
    ["Renegade Fruits","","18.3","03277g"],
    ["Ultimate Ascension","???","18.3","03323e"],
    ["Ok!! Hug Me","???","18.3","03341g"],
    ["Angelic Jelly","???","18.3","03364g"],
    ["?????????","???","18.3","03381e"],
    ["IKAROS DYNAMITE!!!!","???","18.3","03382e"],
    ["Prayer","","18.3","03383e"],
    ["????????????","???","18.3","03384e"],
    ["???Rave*it!! ???Rave*it!!","???","18.3","04060m"],
    ["Garakuta Doll Play","???","18.3","03178h"],
    ["TRICKL4SH 220","","18.3","04020m"],
    ["We Go Down","???","18.3","04085m"],
    ["Harpuia","","18.3","02214h"],
    ["Sweet Requiem","???","18.3","04118m"],
    ["SACRIFICE feat.ayame","???","18.3","04119m"],
    ["Grand-Guignol","???","18.3","04146m"],
    ["OPEN MY GATE","???","18.3","04190m"],
    ["???????????????","???","18.3","01165h"],
    ["Cloud 9","???","18.3","04233m"],
    ["crossing blue","???","18.3","04244m"],
    ["CHERNOBOG","???","18.3","04261m"],
    ["Midnight City Warfare","","18.3","04374m"],
    ["Sky High","???","18.3","04260m"],
    ["RHYZING BEAT","","18.3","04269m"],
    ["????????????????????????","","18.3","04310m"],
    ["???????????????????????????????????????","","18.3","04326g"],
    ["Lunatic Sprinter","","18.3","04343m"],
    ["Beyond the BLUE","","18.3","04350m"],
    ["GAIA","???","18.3","04366m"],
    ["Catch Our Fire!","???","18.3","04376m"],
    ["Divine's or Deal","","18.3","04377m"],
    ["ALTONA","???","18.3","04391g"],
    ["V","","18.3","04399m"],
    ["????????????????????????????????????????????????","???","18.3","05013m"],
    ["Sakura Reflection (P*Light Slayer Remix)","???","18.3","02016v"],
    ["FIRST???DREAMS","","18.3","05096m"],
    ["eighth-slave","???","18.3","05111m"],
    ["Enchant??","???","18.3","05066m"],
    ["??g??","???","18.3","05117e"],
    ["petits fours","","18.3","05123m"],
    ["Black Lotus","","18.3","05124m"],
    ["Teufel","","18.3","05159m"],
    ["Jacob???s Elevator","","18.3","05165m"],
    ["Vividly Impromptu","","18.3","05172m"],
    ["#Fairy_dancing_in_lake","","18.3","02091v"],
    ["L9","???","18.3","05203m"],
    ["????????????","","18.3","05210v"],
    ["Re???Elemental Creation","","18.3","05225m"],
    ["Ichi-Go! DX Pancake!","???","18.3","05230v"],
    ["VVelcome!!","???","18.3","05240e"], 
    ["GEMINI LA2ER","???","18.3","05246m"],
    ["Electric Injury","???","18.3","05233v"],
    ["m1dy Deluxe","","18.3","05254m"],
    ["Ring!Run!Nyan!!","","18.3","05269v"],
    ["??nd:you","","18.3","05271m"],
    ["??????????????????????????? (nayuta 2017 ver)","","18.3","06022m"],
    ["Vanishing Eidos","???","18.3","06040m"],
    ["#Namescapes","","18.3","06056m"],
    ["????????????!!!!","","18.3","06074m"],
    ["PSYCHO+HEROES","???","18.3","06079v"],
    ["Cappuccino Hearts","???","18.3","06086m"],
    ["G4ME OVE??","???","18.3","06091m"],
  //  18.2
    ["Growth Memories","???","18.2","02295e"],
    ["Warriors Aboot","???","18.2","03170e"],
    ["FLOWER","","18.2","03176e"],
    ["???Annihilate!!","???","18.2","03307e"],
    ["?????????????????????","","18.2","03224e"],
    ["???????????????????????????????????? -Phantasm-","???","18.2","03390e"],
    ["??????????????? ULTIMATE MEDLEY","","18.2","03386e"],
    ["??????????????????????????????????????????????????????","???","18.2","04033m"],
    ["???????????????????????????????????????","","18.2","04040m"],
    ["Boss Rush","","18.2","04062m"],
    ["FIRE IN MY HEART","","18.2","04107m"],
    ["?????????????????????","","18.2","04150m"],
    ["?????????????????? ?????????","???","18.2","04177m"],
    ["Redshift","","18.2","04288m"],
    ["Goddess Bless you","???","18.2","04196m"],
    ["FLOOR INFECTION Medley from SOUND VOLTEX??jubeat","","18.2","04078m"],
    ["Evans","???","18.2","04270m"],
    ["SUPER SUMMER SALE","???","18.2","04338m"],
    ["Puberty Dysthymia","","18.2","04339m"],
    ["DropZ-Line-","","18.2","04202m"],
    ["lEyl","","18.2","05040m"],
    ["???????????????","???","18.2","05083m"],
    ["Cloud Crasher","???","18.2","05095g"],
    ["V Sen5eS","","18.2","05108m"],
    ["Cynical Joker","???","18.2","05109m"],
    ["??????????????????????????????","???","18.2","05169m"],
    ["?????? ????????????????????????????????????","???","18.2","02174v"],
    ["Mynarco(Nagomu 2Step Remix)","","18.2","05202m"],
    ["World of Iris","","18.2","05214v"],
    ["????????????????????????????????????????????????????????????","???","18.2","05232v"],
    ["?????????????????????????????????","???","18.2","05244m"],
    ["????????????","???","18.2","05235v"],
    ["New Decade","","18.2","05253m"],
    ["Innocent","???","18.2","05263m"],
    ["Lazurite","","18.2","05261m"],
    ["SLEEPWALKER","???","18.2","05264v"],
    ["Valkyrja ~Aldrlag~","???","18.2","05274m"],
    ["MAYHEM","","18.2","05283e"], 
    ["Blessing Bouquet","","18.2","05270m"],
    ["Defining Future","","18.2","05289m"],
    ["eternite","???","18.2","05292m"],
    ["Thank you for your playing music","???","18.2","05288m"],
    ["Air","???","18.2","06012m"],
    ["??????????????????????????????","","18.2","06018m"],
    ["Souhait bleu","???","18.2","06034m"],
    ["?????????????????????!!","","18.2","06039m"],
    ["?????????????????????","","18.2","06049m"],
    ["FEEL THE FORCE","","18.2","06063m"],
    ["EGOISM 440 (Ange;art remix)","???","18.2","06072m"],
    ["???omet popcorn","???","18.2","06077v"],
    ["Your SOUL Is Mine","","18.2","06082v"],
    ["????????????","","18.2","06085m"],
  //  18.1
    ["PANIC HOLIC","???","18.1","01120g"],
    ["Xepher Light and Darkness Dragon REMIX","???","18.1","01030g"],
    ["?????????????????????????????????????????????????????????","","18.1","03078e"],
    ["Opium and Purple haze","???","18.1","03134g"],
    ["Seraphim","???","18.1","03200e"],
    ["JEHANNEDARC","???","18.1","03257e"],
    ["#Endroll","???","18.1","03401e"],
    ["??????????????????","???","18.1","01146h"],
    ["The Formula","???","18.1","04084m"],
    ["The Golden Era","???","18.1","04100m"],
    ["????????????????????????","???","18.1","01089h"],
    ["Theme of Ricerca","","18.1","04131m"],
    ["?????????????????????????????????????????????","???","18.1","04063m"],
    ["C18H27NO3","???","18.1","02062h"],
    ["?????????????????????????????????????????????","???","18.1","04281m"],
    ["Touch My Body","???","18.1","04287m"],
    ["BLAZING_LAZER","","18.1","04300m"],
    ["Black night","","18.1","04330m"],
    ["MONOLITH","","18.1","04224m"],
    ["??????????????????????????????????????????????????????????????????????????????????????????","???","18.1","04365m"],
    ["On take SUN","???","18.1","05042m"],
    ["???????????????","???","18.1","05063m"],
    ["Unicorn tail Dustboxxxx RMX","","18.1","02096v"],
    ["Xicholauncher","???","18.1","05071m"],
    ["mqlo","","18.1","05113m"],
    ["Sudden Visitor","???","18.1","05120m"],
    ["????????????(=??????=)?????????????????????","","18.1","05131g"],
    ["Typhoon Craaash!!","???","18.1","05132g"],
    ["?????????????????????","???","18.1","05135m"],
    ["?????????????????????WAR","???","18.1","05141m"],
    ["PARTY TIME!","","18.1","05146m"],
    ["Butterfly Twist","","18.1","05157m"],
    ["?????????????????? Chinese Tea Orchid Remix","???","18.1","02175v"],
    ["Bol??rrot","","18.1","05199m"],
    ["????????????","","18.1","05245m"],
    ["????????????","???","18.1","05255m"],
    ["apo:llioth","???","18.1","05278m"],
    ["Ethereal Lotus","???","18.1","05262m"],
    ["Symphonic Tear","???","18.1","05285m"],
    ["#EmoCloche","???","18.1","06004m"],
    ["Scars of FAUNA(?????? Remix)","???","18.1","06007m"],
    ["WARNING??WARNING??WARNING","","18.1","06019m"],
    ["Metagame Matador","","18.1","06044m"],
    ["????????????????????????????????????","","18.1","06070m"],
    ["Vallasotiena","???","18.1","06090m"],
    ["Restless Waitress","","18.1","06096m"],
  //  18.0
    ["Fin.ArcDeaR","","18.0","04056e"],
    ["?????????????????????????????????","???","18.0","01102h"],
    ["???????????????????????????","","18.0","04109m"],
    ["???????????????","","18.0","04219m"],
    ["??????????????????????????????????????????","","18.0","04240m"],
    ["New Leaf","","18.0","04268m"],
    ["KIMIDORI Streak!!","???","18.0","04293m"],
    ["Victim of Nights","???","18.0","04306m"],
    ["???????????????//???????????????","???","18.0","04318m"],
    ["????????????","???","18.0","04316m"],
    ["Breakin' Asia","","18.0","04341m"],
    ["Night Rockin' Bird","","18.0","04355m"],
    ["????????????","???","18.0","05058m"],
    ["Akzeriyyuth","???","18.0","04349m"],
    ["REDO the NIGHT","","18.0","04389g"],
    ["She Turns Me On","???","18.0","04388g"],
    ["???????????????","","18.0","04390g"],
    ["Barbless Ego","","18.0","05094g"],
    ["rE:Voltagers","","18.0","05102g"],
    ["Believe In Yourself","","18.0","05160g"],
    ["OZONE","???","18.0","05161g"],
    ["Our Love","???","18.0","05206m"],
    ["METATRON","","18.0","05250m"],
    ["Innocent Azure","???","18.0","06032m"],
    ["EMERALDAS (Yuta Imai Remix)","???","18.0","06003m"],
    ["?????????????????????????????????????????????????????????","","18.0","06048m"],
    ["nostos -ark remix-","","18.0","06052m"],

  //  hoka
    ["Pure Ruby","","18.-1","06098m"],
    ["??????????????????????????????????????????","???","18.-1","06104m"],
    ["End of Guilty","","18.-1","000000m"],
    ["Puni Puni Parade","","18.-1","000001m"],
    ["????????????","","18.-1","000002m"],
  ]

