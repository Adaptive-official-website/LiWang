var _proContent = `<section class="mobilePages">
<div class="mobileTable">
<table class="table tableMobile">
  <thead>
    <tr>
      <th><div class="circleMo"></div><p>丽王牌号</p></th>
      <th><div class="circle"></div><p>LW-3002W-A</p></th> 
      <th><div class="circle"></div><p>LW-3002W-A</p></th>
      <th><div class="circle"></div><p>LW-3002W-A</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>中文名称</td>
      <td>永固红F2R<br>W-B</td>
      <td>永固红F2R<br>W-B</td>
      <td>永固红F2R<br>W-B</td>
    </tr>
     <tr>
      <td>索引号</td>
      <td>PR2</td>
      <td>PR2</td>
      <td>PR2</td>
    </tr>
     <tr>
      <td>结构索引号</td>
      <td>6041-97-7</td>
      <td>6041-97-7</td>
      <td>6041-97-7</td>
    </tr>
     <tr>
      <td>吸油量</td>
      <td>45-50</td>
      <td>45-50</td>
      <td>45-50</td>
    </tr>
     <tr>
      <td>PH</td>
      <td>6-7</td>
      <td>6-7</td>
      <td>6-7</td>
    </tr>
     <tr>
      <td>耐温</td>
      <td>180</td>
      <td>180</td>
      <td>180</td>
    </tr>
     <tr>
      <td>耐光</td>
      <td>6</td>
      <td>6</td>
      <td>6</td>
    </tr>
     <tr>
      <td>耐候</td>
      <td>3-4</td>
      <td>3-4</td>
      <td>3-4</td>
    </tr> <tr>
      <td>耐酸</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
    </tr> <tr>
      <td>耐碱</td>
      <td>5</td>
      <td>5</td>
      <td>5</td>
    </tr>
     <tr>
      <td>耐乙醇</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
     <tr>
      <td>耐迁移性</td>
      <td>3</td>
      <td>3</td>
      <td>3</td>
    </tr>
     <tr>
      <td>性能特点</td>
      <td>蓝相不掺色</td>
      <td>蓝相不掺色</td>
      <td>蓝相不掺色</td>
    </tr>  
  </tbody>
</table>
</div>

      <div id="pageGro">
        <div class="pageUp">< 上一页</div>
        <div class="pageList">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
        <div class="pageDown">下一页 ></div>
    </div>
</section>`;
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


$(function () {
    // 返回顶部
    $('.GoTop').click(function () {
        $('body,html').animate({scrollTop:0},500);
    })

//头部选中
//     $('.activePro').siblings('.logoIcon').addClass('unShow');
    var _value = sessionStorage.getItem("dataType");
    $('.talTop>div>a').click(function () {
        $(this).addClass('activePro').parent().siblings().find('a').removeClass('activePro');
        // $(this).siblings('.logoIcon').addClass('unShow')
        // $(this).parent().siblings().find('.logoIcon').removeClass('unShow')
    });
    //选中出现图标跟下边线
    $('.talTop>div>a').hover(function () {
        // $(this).addClass('activePro-1');
        $(this).siblings('.logoIcon').addClass('unShow-1')

    },function () {
        // $(this).removeClass('activePro-1');
        $(this).siblings('.logoIcon').removeClass('unShow-1')

    })
    $('.talTopNav').hover(function () {
        $(this).addClass('show')
    },function () {
        $(this).removeClass('show')
    })
});


var _printersInk = [
    {id:1,number:'LW-4012D-A',name:'联苯胺黄 D-A',indexs:'PY12',structure:'6358-85-6	', blotter:'40-50'	,PH:'6-7',heatproof:'190',	 light:'5-6'	, climate:'3-4',	acidproof:'5',	resisting:'5',alcohol:'-',removal:'-',	trait:'绿相，半透明，流动性好',	color:'#f4c51c'},
    {id:2,number:'LW-3571D-A',name:'立索尔宝红 D-A',indexs:'PR57：1',structure:' 5281-4-9', blotter:'	35-50',	PH:'7-8',heatproof:'200',	 light:'6-7',	 climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'黄相，半透明，流动性好',color:'#b52c3e'},
    {id:3,number:'LW-3571D-B',name:'立索尔宝红 D-B',indexs:'PR57：1',	structure:' 5281-4-9', blotter:'	35-50',	PH:'7-8',heatproof:'200',	 light:'6-7',	 climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'蓝相，透明，流动性好	',color:'#9e1f24'},
    {id:4,number:'LW-3571D-D',name:'立索尔宝红 D-D',indexs:'PR57：1',	structure:' 5281-4-9', blotter:'	35-50',	PH:'7-8',heatproof:'200',	 light:'6-7',	 climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'黄相，半透明，流动性好',color:'#a91f24'	},
    {id:5,number:'LW-3571D-E',name:'立索尔宝红 D-E',indexs:'PR57：1',	structure:' 5281-4-9', blotter:'	35-50',	PH:'7-8',heatproof:'200',	 light:'6-7',	 climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'黄相，半透明，流动性好',color:'#9d1f24'	},
    {id:6,number:'LW-7153D-A',name:'酞菁蓝BGS D-A' ,indexs:'PB15：3',	structure:' 147-14-8', blotter:'	35-50',	PH:'7-8',heatproof:'260',	 light:'7-8',	 climate:'4-5',acidproof:'5',	resisting:'5',alcohol:'-',removal:'-',trait:'红相，透明，流动性好	',color:'#003793'},
    {id:7,color:'#b81c22',number:'LW-3482S-A',name:'耐晒大红 S-A',indexs:'PB48：2',structure:'7023-61-2',blotter:'35-45',PH:'7-8',heatproof:'200',light:'7',climate:'4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'黄相，半透明'},
    {id:8,color:'#b01e23',number:'LW-3482S-B',name:'耐晒大红 S-B',indexs:'PB48：2',structure:'7023-61-2',blotter:'35-45',PH:'7-8',heatproof:'200',light:'7',climate:'4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'蓝相，透明'},
    {id:9,color:'#aa1f24',number:'LW-3571S-A',name:'立索尔宝红 S-A',indexs:'PR57：1',structure:'5281-4-9',blotter:'35-50',PH:'7-8',heatproof:'180',light:'6-7',climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'黄相，半透明'},
    {id:10,color:'#a91f24',number:'LW-3571S-B',name:'立索尔宝红 S-B',indexs:'PR57：1',structure:'5281-4-9',blotter:'35-50',PH:'7-8',heatproof:'180',light:'6-7',climate:'3-4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'蓝相，透明'},
    {id:11,color:'#a41f24',number:'LW-3146S-A',name:'永固桃红 S-A',indexs:'PR146',structure:'5280-68-2',blotter:'65-70',PH:'7-8',heatproof:'190',light:'7',climate:'4',acidproof:'4',resisting:'4',alcohol:'-',removal:'-',trait:'蓝相，耐蒸煮'},
    {id:12,color:'#a21f24',number:'LW-3146S-A',name:'永固红F6B S-A',indexs:'PR184',structure:'99402-80-9',blotter:'40-50',PH:'6-8',heatproof:'190',light:'7',climate:'4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'蓝相，耐蒸煮'},
    {id:13,color:'#f5c927',number:'LW-4012W-2A',name:'联苯胺黄 W-2A',indexs:'PY12',structure:'6358-85-6',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6',climate:'3',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'绿相，半透'},
    {id:14,color:'#f5c01d',number:'LW-4012S-A',name:'联苯胺黄 S-A',indexs:'PY12',structure:'6358-85-6',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6',climate:'3',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'红相，半透'},
    {id:15,color:'#f5b919',number:'LW-4013S-A',name:'永固黄GR S-A',indexs:'PY13',structure:'5102-83-0',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6-7',climate:'3-4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'红相，高透明'},
    {id:16,color:'#f5b417',number:'LW-4013S-B',name:'永固黄2GS S-A',indexs:'PY14',structure:'5468-75-7',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6-7',climate:'3-4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'红相，高透明'},
    {id:17,color:'#e6d420',number:'LW-4014S-A',name:'永固黄2GS S-A',indexs:'PY14',structure:'5468-75-7',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6-7',climate:'3-4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'红相，高透明'},
    {id:18,color:'#f0d21f',number:'LW-4014S-B',name:'永固黄2GS S-A',indexs:'PY14',structure:'5468-75-7',blotter:'40-50',PH:'6-7',heatproof:'190',light:'6-7',climate:'3-4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'绿相，半透明'},
    {id:19,color:'#f29417',number:'LW-4083S-A',name:'永固黄HR S-A',indexs:'PY83',structure:'5468-15-7',blotter:'39-50',PH:'6-7',heatproof:'240',light:'7',climate:'4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'红相，高透明，贮存稳定性好'},
    {id:20,color:'#f29417',number:'LW-4083S-B',name:'永固黄HR S-A',indexs:'PY83',structure:'5468-15-7',blotter:'39-50',PH:'6-7',heatproof:'240',light:'7',climate:'4',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'绿相，高透明，贮存稳定性好'},
    {id:21,color:'#116639',number:'LW-6007S-A',name:'酞菁绿G S-A ',indexs:'PG7',structure:'1328-53-6',blotter:'40-50',PH:'7-8',heatproof:'280',light:'7-8',climate:'4-5',acidproof:'5',resisting:'5',alcohol:'-',removal:'-',trait:'黄相，高透明，低黏度，贮存稳定性好'},
    {id:22,color:'#1b2b78',number:'LW-7154S-A',name:'酞菁蓝BNCF S-A ',indexs:'PB15：4',structure:'147-14-8',blotter:'54-60',PH:'7-8',heatproof:'260',light:'7-8',climate:'4-5',acidproof:'5',resisting:'4',alcohol:'-',removal:'-',trait:'红相，高透明'},
    {id:23,color:'#1c2c6f',number:'LW-7154S-B',name:'酞菁蓝BNCF S-B ',indexs:'PB15：4',structure:'147-14-8',blotter:'54-60',PH:'7-8',heatproof:'260',light:'7-8',climate:'4-5',acidproof:'5',resisting:'4',alcohol:'-',removal:'-',trait:'绿相，半透明，低黏度'},
    {id:24,number:'LW-3002W-A',name:'永固红F2R W-B',indexs:'PR2',structure:'6041-94-7',blotter:'45-50',PH:'6-7',heatproof:'180',light:'6',climate:'3-4',acidproof:'5',resisting:'5',alcohol:'3',removal:'3'	,trait:'蓝相，不渗色',color:'#c01920'},
    {id:25,number:'LW-3022W-A',name:'永固红FGR W-A',indexs:'PR22',structure:'6448-95-9',blotter:'35-52',PH:'6-7',heatproof:'160',light:'6',climate:'3-4',acidproof:'4',resisting:'4',alcohol:'3',removal:'3'	,trait:'黄相，不渗色',color:'#c7171e'},
    {id:26,number:'	LW-3481W-A'	,name:'	耐晒大红BBN W-A'	,indexs:'	PR48：1'	,structure:'	7585-41-3'	,blotter:'	40-50'	,PH:'7-8	',heatproof:'	240'	,light:'	6'	,climate:'	3	',acidproof:'4'	,resisting:'	4'	,alcohol:'	3'	,removal:'	5'	,trait:'	黄相，通用型',color:'#bf1a20'},
{id:	27	,number:'LW-3482W-A',name:'耐晒艳红BBC W-A	',indexs:'	PR48：2'	,structure:'	5281-4-9'	,blotter:'	40-50'	,PH:'	7-8	',heatproof:'	230'	,light:'	7'	,climate:'	6-7	',acidproof:'	5	',resisting:'	5'	,alcohol:'	 4-5'	,removal:'	5'	,trait:'	蓝相，高色力，高光泽'	,color:'#ba1b21'	},
{id:	28	,number:'LW-3483W-A',name:'耐晒红大BBS W-A	',indexs:'	PR48：3	',structure:'	15782-05-5'	,blotter:'	43-50	',PH:'	7-8'	,heatproof:'	230	',light:'	7	',climate:'	6-7	',acidproof:'	4	',resisting:'	5'	,alcohol:'4-5'	,removal:'	5'	,trait:'	高色力，低粘度'	,color:'	#cf161b	'},
{id:	29	,number:'LW-3491W-A',name:'立索尔大红 W-A'	,indexs:'	PR49：1'	,structure:'	1103-38-4'	,blotter:'	40-55'	,PH:'	7-8'	,heatproof:'	160'	,light:'	6'	,climate:'	 3-4'	,acidproof:'	4'	,resisting:'	4'	,alcohol:'	3	',removal:'	4'	,trait:'	黄相，低黏度，贮存稳定性好'	,color:'#c01922'	},
{id:	30	,number:'LW-3571W-A',name:'立索尔宝红 W-A	',indexs:'	PR57：1'	,structure:'	5281-4-9'	,blotter:'	35-50'	,PH:'	7-8	',heatproof:'	190'	,light:'	 5-6 '	,climate:'	 3-4'	,acidproof:'	4'	,resisting:'	4'	,alcohol:'	4'	,removal:'	4'	,trait:'	蓝相，透明，贮存稳定性好'	,color:'#a91f24'	},
{id:	31	,number:'LW-3146W-A',name:'永固桃红 W-A'	,indexs:'	PR146'	,structure:'	5280-68-2'	,blotter:'	65-70'	,PH:'	7-8'	,heatproof:'	200'	,light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'	4'	,removal:'	3-4	',trait:'	黄相',color:'#ba1c22'},
{id:	32	,number:'LW-3146S-A'	,name:'永固桃红 S-A	',indexs:'	PR146'	,structure:'	5280-68-2'	,blotter:'	65-70'	,PH:'	7-8	',heatproof:'	200	',light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'	5'	,removal:'	5'	,trait:'	蓝相，不迁移，耐蒸煮',color:'#b21e23'},
{id:	33	,number:'LW-3266-A'	,name:'	永固红F7RK -A'	,indexs:'	PR170 F7RK'	,structure:'	2786-76-7'	,blotter:'	45-55'	,PH:'	6-7'	,heatproof:'	180'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5	',alcohol:'	4'	,removal:'	4',trait:'蓝相，不迁移，透明'	,color:'#a71f24	'},
{id:	34	,number:'LW-4074W-A',name:'	汉沙黄5GX W-A'	,indexs:'	PY74'	,structure:'	6358-31-2'	,blotter:'	35-45'	,PH:'	 6-8'	,heatproof:'	200'	,light:'	7-8'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'	5'	,removal:'	4'	,trait:'	红相，透明	',color:'#e5e639'	},
{id:	35	,number:'LW-4012W-A'	,name:'	联苯胺黄 W-A'	,indexs:'	PY12'	,structure:'	6358-85-6'	,blotter:'	40-50'	,PH:'	6-7'	,heatproof:'	190	',light:'	6'	,climate:'	3'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'	4'	,removal:'	3-4'	,trait:'	绿相，半透明，通用性强'	,color:'#f4c51c'	},
{id:	36	,number:'LW-4012W-B	',name:'	联苯胺黄 W-B'	,indexs:'	PY12'	,structure:'	6358-85-6'	,blotter:'	40-50'	,PH:'	6-7	',heatproof:'	190	',light:'	6'	,climate:'	3'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'	4'	,removal:'	3-4	',trait:'	红相，透明，通用性强'	,color:'#f5c51e'	},
{id:	37	,number:'LW-4013W-D'	,name:'	永固黄GR W-D'	,indexs:'	PY13'	,structure:'	5102-83-0'	,blotter:'	40-50'	,PH:'	6-7	',heatproof:'	200	',light:'	6-7	',climate:'	3-4	',acidproof:'	5	',resisting:'	5'	,alcohol:'	5'	,removal:'	4'	,trait:'	绿相，半透明'	,color:'#f5b919'	},
{id:	38	,number:'LW-4014W-A'	,name:'	永固黄2GS W-A'	,indexs:'	PY14'	,structure:'	5468-75-7'	,blotter:'	40-50'	,PH:'	6-7'	,heatproof:'	200	',light:'	6-7'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'5'	,removal:'	4'	,trait:'	绿相，半透明，通用性强'	,color:'#e6d420'	},
{id:	39	,number:'LW-4083W-A'	,name:'	永固黄HR W-A'	,indexs:'	PY83'	,structure:'	5567-15-7' 	,blotter:'	39-50'	,PH:'	6-7'	,heatproof:'	250	',light:'	7-8	',climate:'	4'	,acidproof:'	5	',resisting:'	5'	,alcohol:'5'	,removal:'	5'	,trait:'	红相，透明，不迁移'	,color:'#f6b24f'	},
{id:	40	,number:'LW-5005W-B	',name:'	永固橙 W-B'	,indexs:'	PO5	',structure:'	3468-63-1'	,blotter:'	35-50	',PH:'	5-7'	,heatproof:'	200'	,light:'	7'	,climate:'	3-4'	,acidproof:'	4'	,resisting:'	4	',alcohol:'5'	,removal:'	3'	,trait:'	红相，通用型强'	,color:'#e76616'	},
{id:	41	,number:'LW-5013W-A'	,name:'	永固桔黄 W-A'	,indexs:'	PO13'	,structure:'	3520-72-7'	,blotter:'	35-50'	,PH:'	6-7'	,heatproof:'	200'	,light:'	5-6'	,climate:'	3-4'	,acidproof:'	4'	,resisting:'	4'	,alcohol:'4'	,removal:'	3'	,trait:'	黄相，半透明'	,color:'#e17014'},
{id:	42	,number:'LW-5034W-A'	,name:'	永固橙RL W-A'	,indexs:'	PO34'	,structure:'	15793-73-4'	,blotter:'	40-50'	,PH:'	6-7'	,heatproof:'	200'	,light:'	7'	,climate:'	3-4	',acidproof:'	5'	,resisting:'	5	',alcohol:'5'	,removal:'	4'	,trait:'	红相，低粘度，贮存稳定性好'	,color:'#ed721b	'},
{id:	43	,number:'LW-6007W-F'	,name:'	酞菁绿G W-F	',indexs:'	PG7'	,structure:'	1328-53-6'	,blotter:'	40-50'	,PH:'	7-8'	,heatproof:'	280'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5	',resisting:'	5	',alcohol:'5'	,removal:'	5'	,trait:'黄相，低粘度，贮存稳定性好'	,color:'#0c6334	'},
{id:	44	,number:'LW-7150-B',name:'	酞菁蓝B -B'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,heatproof:'	190'	,light:'	6'	,climate:'	3-4	',acidproof:'	5	',resisting:'	5	',alcohol:'5'	,removal:'	5'	,trait:'红相，低粘度，贮存稳定性好'	,color:'#1d3591'},
{id:	45	,number:'LW-7150-D'	,name:'	酞菁蓝B -D'	,indexs:'	PB15：0	',structure:'	147-14-8'	,blotter:'	45-55	',PH:'	7-8'	,heatproof:'	190'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'5'	,removal:'	5	',trait:'绿相，低粘度，贮存稳定性好',color:'#1d3591	'},
{id:	46	,number:'LW-7153W-D'	,name:'	酞菁蓝BGS W-D'	,indexs:'	PB15：3'	,structure:'	147-14-8'	,blotter:'	35-50'	,PH:'	7-8'	,heatproof:'	260'	,light:'	7-8'	,climate:'	4-5	',acidproof:'	5'	,resisting:'	5'	,alcohol:'5'	,removal:'	5'	,trait:'	绿相，低粘度，贮存稳定性好'	,color:'#003692'	},
];
var _toLiao = [
    {id:	1	,number:'LW-3170-A'	,name:'	永固红F5RK -A'	,indexs:'	PR170'	,structure:'	2786-76-7 '	,blotter:'	45-55'	,PH:'	 6-7'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	 4-5'	,trait:'	蓝相，不含APEO'	,color:'	#bf1a20	'},
    {id:	2	,number:'LW-3170L-A'	,name:'	永固红F3RK -A'	,indexs:'	PR170'	,structure:'	2786-76-7 '	,blotter:'	45-55'	,PH:'	 6-7'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	 4-5'	,trait:'	黄相高遮盖，不含APEO'	,color:'	#bf1a20	'},
    {id:	3	,number:'LW-4074L-A	',name:'	汉沙黄2GX-70 L-A'	,indexs:'	PY74'	,structure:'	6358-31-2'	,blotter:'	35-45'	,PH:'	 6-8'	,heatproof:'	200'	,light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	 4-5'	,trait:'	绿相，高遮盖，耐性好'	,color:'	#f5e528'	},
{id:	4	,number:'LW-4083L-A'	,name:'	永固黄HR70 L-A'	,indexs:'	PY83'	,structure:'	5567-15-7' 	,blotter:'	40-52'	,PH:'	 6-7'	,heatproof:'	250'	,light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	红相，高遮盖，耐性好'	,color:'	#f39618	'},
{id:	5	,number:'LW-5005W-B'	,name:'	永固橙 W-B'	,indexs:'	PO5'	,structure:'	3468-63-1'	,blotter:'	35-50'	,PH:'	5-7'	,heatproof:'	180'	,light:'	 7-8'	,climate:'	 3-4'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	 4-5'	,trait:'	红相，通用型强'	,color:'	#e76616	'},
{id:	6	,number:'LW-5036L-A'	,name:'	永固橙HL L-A'	,indexs:'	PO36'	,structure:'	12236-62-3'	,blotter:'	40-60'	,PH:'	 6-7'	,heatproof:'	260'	,light:'	7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	遮盖，耐性好'	,color:'	#e97c42'	},
{id:	7	,number:'LW-6007W-F	',name:'	酞菁绿G -F'	,indexs:'	PG7'	,structure:'	1328-53-6'	,blotter:'	40-50'	,PH:'	7-8'	,heatproof:'	280'	,light:'	7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	黄相，鲜艳，遮盖'	,color:'	#0c6334	'},
{id:	8	,number:'LW-7151-B'	,name:'	酞菁蓝BS -B'	,indexs:'	PB15:1'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,heatproof:'	190'	,light:'	6'	,climate:'	 3-4'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	红相，高色力'	,color:'	#043994'	},
{id:	9	,number:'LW-7151-D'	,name:'	酞菁蓝BS -D'	,indexs:'	PB15:1'	,structure:'	12239-87-1'	,blotter:'	40-50'	,PH:'	7-8'	,heatproof:'	260'	,light:'	7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	绿相，分散好'	,color:'	#043994	'},
{id:	10	,number:'LW-7152-C',name:'	酞菁蓝BNCF -C'	,indexs:'	PB15:2'	,structure:'	12239-89-1'	,blotter:'	45-55'	,PH:'	7-8'	,heatproof:'	260'	,light:'	7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	红相，分散好'	,color:'	#1c2c73	'},
{id:	11	,number:'LW-7153W-D'	,name:'	酞菁蓝BGS W-D'	,indexs:'	PB15:3'	,structure:'	147-14-8'	,blotter:'	35-50'	,PH:'	7-8'	,heatproof:'	260'	,light:'	7'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,crocking:'-'	,removal:'	5'	,trait:'	绿相，半透明'	,color:'	#003692'},
{id:	12	,number:'LW-7154S-B'	,name:'	酞菁蓝BGNCF S-B'	,indexs:'	PB15:4'	,structure:'	147-14-8'	,blotter:'	54-60'	,PH:'	7-8'	,heatproof:'	260'	,light:'	7'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	4'	,crocking:'	-'	,removal:'	4'	,trait:'	绿相，半透明'	,color:'	#1c2b77'},
    {id:	13	,number:'LW-3002W-B'	,name:'	永固红F2R W-B'	,indexs:'	PR2 '	,structure:'	6041-94-7'	,blotter:'	45-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	180'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3'	,trait:'	蓝相，不渗色，PCB<25PPM'	,color:'	#bf1a20'},
    {id:	14	,number:'LW-3008W-A'	,name:'	永固红F4R W-A'	,indexs:'	PR8'	,structure:'	6410-30-6'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	160'	,light:'	6'	,climate:'	 3-4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	蓝相，不渗色'	,color:'	#b41e23'},
    {id:	15	,number:'LW-3022W-A'	,name:'	耐晒亮红 W-A'	,indexs:'	PR22'	,structure:'	6448-95-9 '	,blotter:'	35-52'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	160'	,light:'	6'	,climate:'	3'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	黄相，不渗色'	,color:'	#c7171e'},
    {id:	16	,number:'LW-3023W-A'	,name:'	坚固玫红 W-A'	,indexs:'	PR23'	,structure:'	6471-49-4'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	160'	,light:'	6'	,climate:'	4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	黄相，耐水性好'	,color:'	#c21920'},
    {id:	17	,number:'LW-3023W-B'	,name:'	坚固玫红 W-B'	,indexs:'	PR23'	,structure:'	6471-49-4'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	160'	,light:'	6'	,climate:'	4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	蓝相，耐水性好'	,color:'	#b21e23'},
    {id:	18	,number:'LW-3023W-C'	,name:'	坚固玫红 W-C'	,indexs:'	PR23'	,structure:'	6471-49-4'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	180'	,light:'	6'	,climate:'	4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	最蓝相，耐水性好'	,color:'	#b41e23'},
    {id:	19	,number:'LW-3031W-A'	,name:'	红青莲 W-A'	,indexs:'	PR31'	,structure:'	6448-95-9' 	,blotter:'	35-52'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	180'	,light:'	6-7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	4'	,trait:'	蓝相，鲜艳，不渗色'	,color:'	#891c34'},
    {id:	20	,number:'LW-3112W-A'	,name:'	永固红FGR W-A'	,indexs:'	PR112'	,structure:'	6535-46-2'	,blotter:'	35-40'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	190'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3'	,trait:'	黄相，遮盖'	,color:'	#da3937'},
    {id:	21	,number:'LW-3112W-B'	,name:'	永固红FGR W-A'	,indexs:'	PR112'	,structure:'	6535-46-2'	,blotter:'	35-40'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	190'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3'	,trait:'	蓝相，透明'	,color:'	#d4161a'	},
    {id:	22	,number:'LW-3146W-A'	,name:'	永固桃红 W-A'	,indexs:'	PR146'	,structure:'	5280-68-2'	,blotter:'	65-70'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	200'	,light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3-4'	,trait:'	黄相'	,color:'	#ba1c22'	},
    {id:	23	,number:'LW-3146S-A'	,name:'	永固桃红 S-A'	,indexs:'	PR146'	,structure:'	5280-68-2'	,blotter:'	65-70'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	200'	,light:'	 7-8'	,climate:'	 4-5'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	蓝相，不迁移，耐蒸煮'	,color:'	#b21e23'	},
    {id:	24	,number:'LW-3170-A'	,name:'	永固红F5RK -A'	,indexs:'	PR170'	,structure:'	2786-76-7 '	,blotter:'	45-55'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	4'	,trait:'	蓝相，不含APEO'	,color:'	#bf1a20'	},
    {id:	25	,number:'LW-3170-D'	,name:'	永固红F5RK -D'	,indexs:'	PR170'	,structure:'	2786-76-7 '	,blotter:'	45-55'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	黄相，不迁移，不含APEO'	,color:'	#bc303c'	},
    {id:	26	,number:'LW-4012W-A'	,name:'	联苯胺黄 W-A'	,indexs:'	PY12'	,structure:'	6358-85-6'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	190'	,light:'	6'	,climate:'	3'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3-4'	,trait:'	绿相，半透明，通用性强'	,color:'	#f4c51c'	},
    {id:	27	,number:'LW-4012W-B'	,name:'	联苯胺黄 W-B'	,indexs:'	PY12'	,structure:'	6358-85-6'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	190'	,light:'	6'	,climate:'	3'	,acidproof:'	5'	,resisting:'	5'	,removal:'	3-4'	,trait:'	红相，透明，通用性强'	,color:'	#f4c51c'	},
    {id:	28	,number:'LW-4013W-D'	,name:'	永固黄GR W-D'	,indexs:'	PY13'	,structure:'	5102-83-0'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	200'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	4'	,trait:'	绿相，半透明'	,color:'	#f5b919'	},
    {id:	29	,number:'LW-4014W-A'	,name:'	永固黄2GS W-A'	,indexs:'	PY14'	,structure:'	5468-75-7'	,blotter:'	40-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	200'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	4'	,trait:'	绿相，半透明，通用性强'	,color:'	#e6d524'	},
    {id:	30	,number:'LW-4074W-A'	,name:'	汉沙黄5GX W-A'	,indexs:'	PY74'	,structure:'	6358-31-2'	,blotter:'	35-45'	,PH:'	 6-8'	,crocking:'	5'	,heatproof:'	200'	,light:'	7-8'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	4'	,trait:'	红相，透明'	,color:'	#e5e639'	},
    {id:	31	,number:'LW-4083W-A'	,name:'	永固黄HR W-A'	,indexs:'	PY83'	,structure:'	5567-15-7 '	,blotter:'	39-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	250'	,light:'	7-8'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	红相，透明，不迁移'	,color:'	#f5a42f'	},
    {id:	32	,number:'LW-4212W-A'	,name:'	212嫩黄 W-A'	,indexs:'	212嫩黄'	,structure:'	-'	,blotter:'	35-42'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	180'	,light:'	 4-5'	,climate:'	3'	,acidproof:'	3-4'	,resisting:'	3-4'	,removal:'	4'	,trait:'	绿相，鲜艳'	,color:'	#d4df35'	},
    {id:	33	,number:'LW-5005W-B'	,name:'	永固橙 W-B'	,indexs:'	PO5'	,structure:'	3468-63-1'	,blotter:'	35-50'	,PH:'	5-7'	,crocking:'	5'	,heatproof:'	200'	,light:'	7'	,climate:'	2017/3/4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	红相，通用型强'	,color:'	#e76a19'	},
    {id:	34	,number:'LW-5013W-A'	,name:'	永固桔黄 W-A'	,indexs:'	PO13'	,structure:'	3520-72-7'	,blotter:'	35-50'	,PH:'	6-7'	,crocking:'	5'	,heatproof:'	200'	,light:'	5-6'	,climate:'	3-4'	,acidproof:'	4'	,resisting:'	4'	,removal:'	3'	,trait:'	黄相，半透明'	,color:'	#e17217'	},
    {id:	35	,number:'LW-5016-A'	,name:'	联大茴香胺橙 -A'	,indexs:'	PO16'	,structure:'	6505-28-8'	,blotter:'	35-50'	,PH:'	6-8'	,crocking:'	5'	,heatproof:'	200'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	红相，高色力，分散好'	,color:'	#eb5b1a'	},
    {id:	36	,number:'LW-6007W-F'	,name:'	酞菁绿G W-F'	,indexs:'	PG7'	,structure:'	1328-53-6'	,blotter:'	40-50'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	280'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	黄相，鲜艳，遮盖'	,color:'	#0c6334'	},
{id:	37	,number:'LW-7150-B'	,name:'	酞菁蓝B -B'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	190'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	红相，低粘度，贮存稳定性好'	,color:'	#1d3591'	},
{id:	38	,number:'LW-7150-D'	,name:'	酞菁蓝B -D'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	190'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	绿相，低粘度，贮存稳定性好'	,color:'	#1f3591'	},
{id:	39	,number:'LW-7151-B'	,name:'	酞菁蓝BS -B'	,indexs:'	PB15：1'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	190'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	红相，高色力'	,color:'	#043994'	},
{id:	40	,number:'LW-7151-D'	,name:'	酞菁蓝BS -D'	,indexs:'	PB15：1'	,structure:'	12239-87-1'	,blotter:'	45-55'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	260'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	绿相，分散好'	,color:'	#043994'	},
    {id:	41	,number:'LW-7153W-D'	,name:'	酞菁蓝BGS W-D'	,indexs:'	PB15：3'	,structure:'	147-14-8'	,blotter:'	35-50'	,PH:'	7-8'	,crocking:'	5'	,heatproof:'	260'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5'	,removal:'	5'	,trait:'	绿相，低粘度，贮存稳定性好'	,color:'#003692'	},

];

var _palstic = [
    {id:	1	,number:'LW-3481P-C'	,name:'	耐晒大红BBN P-C'	,indexs:'	PR48:1'	,structure:'	7585-41-3'	,blotter:'	40-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	6-7'	,climate:'	4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，不迁移'	,color:'	#c01920'	},
    {id:	2	,number:'LW-3482P-C'	,name:'	耐晒大红2BP P-C'	,indexs:'	PR48:2'	,structure:'	5281-4-9'	,blotter:'	40-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7'	,climate:'	4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，不迁移'	,color:'	#b81c22'	},
    {id:	3	,number:'LW-3483P-A'	,name:'	耐晒大红 2BS P-A'	,indexs:'	PR48:3'	,structure:'	15782-05-5'	,blotter:'	43-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7'	,climate:'	4'	,acidproof:'	4',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，不迁移'	,color:'	#cf161b'	},
    {id:	4	,number:'LW-3571P-A'	,name:'	立索尔宝红4BP P-A'	,indexs:'	PR57:1'	,structure:'	5281-4-9'	,blotter:'	35-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	200'	,light:'	6'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	蓝相，不迁移'	,color:'	#a91f24'	},
    {id:	5	,number:'LW-3170-A'	,name:'	永固红F5RK -A'	,indexs:'	PR170'	,structure:'	2786-76-7 '	,blotter:'	45-55'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5',alcohol:'-'	,trait:'	蓝相，不迁移，不含APEO'	,color:'	#bf1a20'	},
    {id:	6	,number:'LW-3170-D'	,name:'	永固红F5RK -D'	,indexs:'	PR170'	,structure:'	2786-76-7' 	,blotter:'	45-55'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	230'	,light:'	7'	,climate:'	4'	,acidproof:'	5'	,resisting:'	5',alcohol:'-'	,trait:'	黄相，不迁移，不含APEO'	,color:'	#bb2b39'	},
    {id:	7	,number:'LW-4012K-A'	,name:'	联苯胺黄 K-A'	,indexs:'	PY12'	,structure:'	6358-85-6'	,blotter:'	40-50'	,PH:'	6-7'	,removal:'	3'	,heatproof:'	190'	,light:'	6'	,climate:'	3'	,acidproof:'	5'	,resisting:'	5',alcohol:'-'	,trait:'	红相，分散好'	,color:'	#f4c51c'	},
    {id:	8	,number:'LW-4013P-A'	,name:'	永固黄GR P-A'	,indexs:'	PY13'	,structure:'	5102-83-0'	,blotter:'	40-50'	,PH:'	6-7'	,removal:'	4-5'	,heatproof:'	200'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，分散好'	,color:'	#f5b919'	},
    {id:	9	,number:'LW-4014K-A'	,name:'	永固黄2GS K-A'	,indexs:'	PY14'	,structure:'	5468-75-7'	,blotter:'	40-50'	,PH:'	6-7'	,removal:'	4-5'	,heatproof:'	200'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，鲜艳，分散好'	,color:'	#e6d422'	},
    {id:	10	,number:'LW-4017P-A'	,name:'	永固黄GG P-A'	,indexs:'	PY17'	,structure:'	4531-49-1'	,blotter:'	45-55'	,PH:'	6-8'	,removal:'	4-5'	,heatproof:'	200'	,light:'	6'	,climate:'	4'	,acidproof:'	5'	,alcohol:'-',resisting:'	5'	,trait:'	绿相，高色力'	,color:'	#e2dd23'	},
    {id:	11	,number:'LW-4083P-A'	,name:'	永固黄HR02 P-A'	,indexs:'	PY83'	,structure:'	5567-15-7' 	,blotter:'	40-52'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	250'	,light:'	7-8'	,climate:'	4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，半透明'	,color:'	##f29417'	},
    {id:	12	,number:'LW-4083P-Z'	,name:'	永固黄HR P-Z'	,indexs:'	PY83'	,structure:'	5567-15-7 '	,blotter:'	40-52'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	250'	,light:'	7-8'	,climate:'	4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	红相，透明'	,color:'	#f18b1a'	},
    {id:	13	,number:'LW-4191P-A'	,name:'	颜料艳黄HGR P-A'	,indexs:'	-'	,structure:'	129423-54-7'	,blotter:'	45-53'	,PH:'	6-7'	,removal:'	4'	,heatproof:'	250'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,alcohol:'-',resisting:'	5'	,trait:'	红相，高色力'	,color:'	#f5b118	'},
    {id:	14	,number:'LW-4191P-C'	,name:'	颜料艳黄HGR P-C'	,indexs:'	-'	,structure:'	129423-54-7'	,blotter:'	45-53'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	250'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，不迁移'	,color:'	#f5b118'	},
    {id:	15	,number:'LW-4183P-A'	,name:'	颜料黄183 P-A'	,indexs:'	PY183'	,structure:'	5567-15-7' 	,blotter:'	40-52'	,PH:'	6-7'	,removal:'	5'	,heatproof:'	280'	,light:'	7-8'	,climate:'	5'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	红相，耐性好，不迁移'	,color:'	#f5bb19'	},
    {id:	16	,number:'LW-5013W-A'	,name:'	永固桔黄 W-A'	,indexs:'	PO13'	,structure:'	3520-72-7'	,blotter:'	35-50'	,PH:'	6-7'	,removal:'	4'	,heatproof:'	180'	,light:'	7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，半透明'	,color:'	#e1741a'	},
    {id:	17	,number:'LW-5016-A'	,name:'	联大茴香胺橙 -A'	,indexs:'	PO16'	,structure:'	6505-28-8'	,blotter:'	35-50'	,PH:'	6-8'	,removal:'	5'	,heatproof:'	200'	,light:'	7'	,climate:'	4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	红相，高色力，分散好'	,color:'	#eb5b1a'	},
    {id:	18	,number:'LW-6007-F'	,name:'	酞菁绿G -F'	,indexs:'	PG7'	,structure:'	1328-53-6'	,blotter:'	40-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	280'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，分散好'	,color:'	#0c6334'	},
    {id:	19	,number:'LW-6007P-F'	,name:'	酞菁绿G P-F'	,indexs:'	PG7'	,structure:'	1328-53-6'	,blotter:'	40-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	280'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	黄相，高色力，分散好'	,color:'	#0b6434'	},
    {id:	20	,number:'LW-7150K-D'	,name:'	酞菁蓝B K-D'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	190'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，分散好'	,color:'	#1d3591'	},
    {id:	21	,number:'LW-7150P-D'	,name:'	酞菁蓝B P-D'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	190'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	绿相，高色力，分散好'	,color:'	#1d3591'	},
    {id:	22	,number:'LW-7150P-G'	,name:'	酞菁蓝B P-D'	,indexs:'	PB15：0'	,structure:'	147-14-8'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	190'	,light:'	6-7'	,climate:'	3-4'	,acidproof:'	5',alcohol:'-'	,resisting:'	5'	,trait:'	红相，高色力，分散好'	,color:'	#343390'	},
    {id:	23	,number:'LW-7151K-D'	,name:'	酞菁蓝BS K-D'	,indexs:'	PB15：1'	,structure:'	12239-87-1'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7'	,climate:'	5'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'-',trait:'	绿相，分散好'	,color:'	#043994'	},
    {id:	24	,number:'LW-7151P-D'	,name:'	酞菁蓝BS P-D'	,indexs:'	PB15：1'	,structure:'	12239-87-1'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7'	,climate:'	5'	,acidproof:'	5'	,resisting:'	5'	,alcohol:'-',trait:'	绿相，高色力，分散好'	,color:'	#0b3a95'	},
    {id:	25	,number:'LW-7152P-A'	,name:'	酞菁蓝BNCF P-A'	,indexs:'	PB15：2'	,structure:'	12239-89-1'	,blotter:'	45-55'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	300'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5',alcohol:'-'	,trait:'	绿相，高色力，分散好'	,color:'	#1c2c6f'	},
    {id:	26	,number:'LW-7153K-D'	,name:'	酞菁蓝BGS K-D'	,indexs:'	PB15：3'	,structure:'	147-14-8'	,blotter:'	35-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5',alcohol:'-'	,trait:'	绿相，分散好'	,color:'	#0d3a94'	},
    {id:	27	,number:'LW-7153P-D'	,name:'	酞菁蓝BGS P-D'	,indexs:'	PB15：3'	,structure:'	147-14-8'	,blotter:'	35-50'	,PH:'	7-8'	,removal:'	5'	,heatproof:'	260'	,light:'	7-8'	,climate:'	4-5'	,acidproof:'	5'	,resisting:'	5	',alcohol:'-',trait:'	绿相，高色力，分散好'	,color:'#003692'	},

]
var _TL = {
    createHtml:function () {
        var _html
        _toLiao.map((v,i) => {
            // var i =1
            _html +=``
            _html += ` <tr id="TL${v.id}">
                        <td><div class="circle" style="background-color: ${v.color};"></div></td>
                                        <td>${v.number}</td>
                                        <td>${v.name}</td>
                                        <td>${v.indexs}</td>
                                        <td>${v.structure}</td>
                                        <td>${v.blotter}</td>
                                        <td>${v.PH}</td>
                                        <td>${v.heatproof}</td>
                                        <td>${v.light}</td>
                                        <td>${v.climate}</td>
                                        <td>${v.acidproof}</td>
                                        <td>${v.resisting}</td>
                                        <td>${v.crocking}</td>
                                        <td>${v.removal}</td>
                                        <td>${v.trait}</td>
                      </tr>`;
            if(v.id==10){_html +=`<tr><td colspan="15">水性色浆</td></td></tr>`}
        });
        $('.TL').append(_html)
    }
};
var _SL = {
    createHtml:function () {
        var _html
        _palstic.map((v,i) => {
            var i =1
            _html += ` <tr id="SL${v.id}">
                        <td><div class="circle" style="background-color: ${v.color};"></div></td>
                                        <td>${v.number}</td>
                                        <td>${v.name}</td>
                                        <td>${v.indexs}</td>
                                        <td>${v.structure}</td>
                                        <td>${v.blotter}</td>
                                        <td>${v.PH}</td>
                                        <td>${v.heatproof}</td>
                                        <td>${v.light}</td>
                                        <td>${v.climate}</td>
                                        <td>${v.acidproof}</td>
                                        <td>${v.resisting}</td>
                                        <td>${v.alcohol}</td>
                                        <td>${v.removal}</td>
                                        <td>${v.trait}</td>
                      </tr>`;
        });
        $('.SL').append(_html)
    }
}
//添加数据
$(function () {
    var _num = GetQueryString('about');
    switch (parseInt(_num)){
        case 0:
            $('.talTop>.talTopContent:nth-child(1)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
        $('.talTop>.talTopContent:nth-child(1)').find('.logoIcon').addClass('unShow').siblings().find('.logoIcon').removeClass('unShow');
        break;
        case 1:
            // console.log($('.talTop>.talTopContent:nth-child(3)').find('.firstNav').addClass('activePro'))
            $('.talTop>.talTopContent:nth-child(3)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
            $('.talTop>.talTopContent:nth-child(3)').find('.logoIcon').addClass('unShow').parent().siblings('.talTopContent').find('.logoIcon').removeClass('unShow');
        break;
        case 2:
            $('.talTop>.talTopContent:nth-child(5)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
            $('.talTop>.talTopContent:nth-child(5)').find('.logoIcon').addClass('unShow').parent().siblings('.talTopContent').find('.logoIcon').removeClass('unShow');
        default:

    }
    if(_num){
        $(".con").hide();
        $(".con").eq(_num).show().siblings().find('.con').hide();
    }else{
        $(".con").eq(0).show();
    }
    $(".talTopContent").click(function(){
        var num =$(this).attr('data-hide');
        $(".con").hide();
        $(".con").eq(num).show().siblings().find('.con').hide();
    });
        var _html
        _printersInk.map((v,i) => {
            _html += ` <tr id=${v.id}>
                        <td><div class="circle" style="background-color: ${v.color};"></div></td>
                                        <td>${v.number}</td>
                                        <td>${v.name}</td>
                                        <td>${v.indexs}</td>
                                        <td>${v.structure}</td>
                                        <td>${v.blotter}</td>
                                        <td>${v.PH}</td>
                                        <td>${v.heatproof}</td>
                                        <td>${v.light}</td>
                                        <td>${v.climate}</td>
                                        <td>${v.acidproof}</td>
                                        <td>${v.resisting}</td>
                                        <td>${v.alcohol}</td>
                                        <td>${v.removal}</td>
                                        <td style="width: 85px">${v.trait}</td>
                      </tr>`;
            if(v.id==8){_html +=`<tr><td colspan="15">溶剂墨用有机颜料</td></tr>`}
            if(v.id==25){_html +=`<tr><td colspan="15">胶印墨用有机颜料</td></tr>`}
        });
        $('.youmo').append(_html);
        _TL.createHtml();
        _SL.createHtml();

});

//手机端产品信息
var _mobilePro = {
    updatePanel:function (typeArr,start,pages) {
        var _me = this,_arr = []
        for(let i=start;i<pages;i++){
            _arr.push(typeArr[i])
        }
        _me.createHtml(_arr)
    },
    createHtml:function (v) {
    var _ty = v[1].crocking
        var _html
            _html  = `
<table class="table tableMobile">
  <thead>
    <tr>`
      _html += `<th><div class="circleMo"></div><p>丽王牌号</p></th>`;
        v.map((v,i) => {
            _html += `<th><div class="circle" style="background-color: ${v?v.color:''}"></div><p>${v?v.number:''}</p></th> `;
        });
    _html += `</tr>
  </thead>
  <tbody>
    <tr>
      <td>中文名称</td>`
        v.map((v,i) => {
            _html += `<td>${v?v.name:''}</td>`;
        })
   _html +=` </tr>
     <tr>
      <td>索引号</td>`
     v.map((v,i) => {
    _html +=` <td>${v?v.indexs:''}</td>`
     })
    _html += `</tr>
     <tr>
      <td>结构索引号</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.structure:''}</td>`
        })
    _html += `</tr>
     <tr>
      <td>吸油量</td>`
       v.map((v,i) => {
            _html +=` <td>${v?v.blotter:''}</td>`
        })
    _html += `</tr>
     <tr>
      <td>PH</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.PH:''}</td>`
        })
    _html += `</tr>
     <tr>
      <td>耐温</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.heatproof:''}</td>`
        })
    _html += `</tr>
     <tr>
      <td>耐光</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.light:''}</td>`
        })
    _html += `</tr>
     <tr>
      <td>耐候</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.climate:''}</td>`
        })
    _html += `</tr> <tr>
      <td>耐酸</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.acidproof:''}</td>`
        })
        _html += `</tr> <tr>
      <td>耐碱</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.resisting:''}</td>`
        })

        if(_ty){
            _html += `</tr>
     <tr>
      <td>耐渗色</td>`
            v.map((v,i) => {
                _html +=` <td>${v?v.crocking:''}</td>`
            });
        }else{
            _html += `</tr>
     <tr>
      <td>耐乙醇</td>`
            v.map((v,i) => {
                _html +=` <td>${v?v.alcohol:''}</td>`
            });
        }
        _html += ` </tr>
     <tr>
      <td>耐迁移性</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.removal:''}</td>`
        });
        _html += `</tr>
     <tr>
      <td>性能特点</td>`
        v.map((v,i) => {
            _html +=` <td>${v?v.trait:''}</td>`
        });
        _html += `</tr>  
  </tbody>
</table>
`;
        if (_aboutHt <= 768) {
            $('.mobileTable').html(_html);
        }
    },
};

//手机端页面加载之后加载
$(function () {
    if (_aboutHt <= 768) {
        // 初始进入页面;
        $('.proContent').html(_proContent);
        $('.proContent').css({marginTop:0})
        var _about = GetQueryString('about')
        if( parseInt(_about) == 0){
            _mobilePro.updatePanel(_printersInk,0,3);
            pageCount =Math.ceil(_printersInk.length/3)
            icon_load(pageCount);
            //点击分页按钮触发
            $(document).on("click","#pageGro li",function(){
                var pageNum = parseInt($(this).html());//获取当前页数
                var selector = $(this);
                num_click(pageCount,pageNum,selector);
                $('body,html').animate({scrollTop:0},0);
                _mobilePro.updatePanel(_printersInk,pageNum*3-3,pageNum*3)
            });
            //点击上一页触发
            $(document).on("click","#pageGro .pageUp",function(){
                var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
                var index = $("#pageGro ul li.on").index();//获取index
                _mobilePro.updatePanel(_printersInk,(pageNum-1)*3-3,(pageNum-1)*3)
                $('body,html').animate({scrollTop:0},0);
                pageUp_click(pageCount,pageNum,index);
            });
            $(document).on("click","#pageGro .pageDown",function(){
                var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
                var index = $("#pageGro ul li.on").index();//获取index
                pageDown_click(pageCount,pageNum,index);
                $('body,html').animate({scrollTop:0},0);
                _mobilePro.updatePanel(_printersInk,(pageNum+1)*3-3,(pageNum+1)*3)
            });
        }}
        if(parseInt(_about) == 1 ){
        _mobilePro.updatePanel(_toLiao,0,3);
        pageCount =Math.ceil(_toLiao.length/3)
        icon_load(pageCount);
        //点击分页按钮触发
        $(document).on("click","#pageGro li",function(){
            var pageNum = parseInt($(this).html());//获取当前页数
            var selector = $(this);
            num_click(pageCount,pageNum,selector);
            _mobilePro.updatePanel(_toLiao,pageNum*3-3,pageNum*3)
        });
        //点击上一页触发
        $(document).on("click","#pageGro .pageUp",function(){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            var index = $("#pageGro ul li.on").index();//获取index
            _mobilePro.updatePanel(_toLiao,(pageNum-1)*3-3,(pageNum-1)*3)
            pageUp_click(pageCount,pageNum,index);
        });
        $(document).on("click","#pageGro .pageDown",function(){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            var index = $("#pageGro ul li.on").index();//获取index
            pageDown_click(pageCount,pageNum,index);
            _mobilePro.updatePanel(_toLiao,(pageNum+1)*3-3,(pageNum+1)*3)
        });
    }
    if(parseInt(_about) == 2){
        _mobilePro.updatePanel(_palstic,0,3);
        pageCount =Math.ceil(_palstic.length/3)
        icon_load(pageCount);
        //点击分页按钮触发
        $(document).on("click","#pageGro li",function(){
            var pageNum = parseInt($(this).html());//获取当前页数
            var selector = $(this);
            num_click(pageCount,pageNum,selector);
            _mobilePro.updatePanel(_palstic,pageNum*3-3,pageNum*3)
        });
        //点击上一页触发
        $(document).on("click","#pageGro .pageUp",function(){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            var index = $("#pageGro ul li.on").index();//获取index
            _mobilePro.updatePanel(_palstic,(pageNum-1)*3-3,(pageNum-1)*3)
            pageUp_click(pageCount,pageNum,index);
        });
        $(document).on("click","#pageGro .pageDown",function(){
            var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
            var index = $("#pageGro ul li.on").index();//获取index
            pageDown_click(pageCount,pageNum,index);
            _mobilePro.updatePanel(_palstic,(pageNum+1)*3-3,(pageNum+1)*3)
        });
    }

});

//PC搜索
$(function () {
    var _val = GetQueryString('val');
    if(_val){
        let toObj1 = _printersInk.find(item=>item.number == _val)
        let toObj2 = _toLiao.find(item=>item.number == _val)
        let toObj3 = _palstic.find(item=>item.number == _val)
        if(toObj1){
            $(".con").eq(0).show().siblings().find('.con').hide();
            $(".con").eq(2).hide();
            $(".con").eq(1).hide();
            $('.talTop>.talTopContent>a:nth-child(1)').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `${toObj1.id - 4}`
        }else if(toObj2){
            $(".con").eq(1).show().siblings().find('.con').hide();
            $(".con").eq(0).hide();
            $(".con").eq(2).hide();
            $('.talTop>.talTopContent>a:nth-child(2)').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `TL${toObj2.id - 4}`
        }else if(toObj3){
            $(".con").eq(2).show().siblings().find('.con').hide();
            $(".con").eq(0).hide();
            $(".con").eq(1).hide();
            $('.talTop>.talTopContent>a:nth-child(3)').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `SL${toObj3.id - 4}`
        }
    }else{
        $('.search img').click(function () {
            var _val = $('.search input').val();
            let toObj1 = _printersInk.find(item=>item.number == _val);
            let toObj2 = _toLiao.find(item=>item.number == _val);
            let toObj3 = _palstic.find(item=>item.number == _val);
            if(toObj1){
                $(".con").eq(0).show().siblings().find('.con').hide();
                $(".con").eq(2).hide();
                $(".con").eq(1).hide();
                window.location.hash = `${toObj1.id - 4}`
            }else if(toObj2){
                $(".con").eq(1).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(2).hide();

                window.location.hash = `TL${toObj2.id - 4}`
            }else if(toObj3){
                $(".con").eq(2).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(1).hide();
                window.location.hash = `SL${toObj3.id - 4}`
            }
        })
    }

});
function pagesObj(typeArr,obj){
    pageCount =Math.ceil(typeArr.length/3)
    icon_load(pageCount,Math.ceil(obj.id/3));
    //点击分页按钮触发
    $(document).on("click","#pageGro li",function(){
        var pageNum = parseInt($(this).html());//获取当前页数
        var selector = $(this);
        num_click(pageCount,pageNum,selector);
        _mobilePro.updatePanel(typeArr,pageNum*3-3,pageNum*3)
    });
    //点击上一页触发
    $(document).on("click","#pageGro .pageUp",function(){
        var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
        var index = $("#pageGro ul li.on").index();//获取index
        _mobilePro.updatePanel(typeArr,(pageNum-1)*3-3,(pageNum-1)*3)
        pageUp_click(pageCount,pageNum,index);
    });
    $(document).on("click","#pageGro .pageDown",function(){
        var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
        var index = $("#pageGro ul li.on").index();//获取index
        pageDown_click(pageCount,pageNum,index);
        _mobilePro.updatePanel(typeArr,(pageNum+1)*3-3,(pageNum+1)*3)
    });
}
//手机端的产品搜索
$(function () {
    if (_aboutHt <= 768) {
        var _val = GetQueryString('MobileVal');
        if (_val) {
            let toObj1 = _printersInk.find(item => item.number == _val);
            let toObj2 = _toLiao.find(item => item.number == _val);
            let toObj3 = _palstic.find(item => item.number == _val);
            if (toObj1) {
                _mobilePro.updatePanel(_printersInk,Math.ceil(toObj1.id/3)*3-3,Math.ceil(toObj1.id/3)*3)
                pagesObj(_printersInk,toObj1)
            }else if(toObj2){
                _mobilePro.updatePanel(_toLiao,Math.ceil(toObj1.id/3)*3-3,Math.ceil(toObj1.id/3)*3)
                pagesObj(_toLiao,toObj2)
            }else if(toObj3){
                _mobilePro.updatePanel(_palstic,Math.ceil(toObj1.id/3)*3-3,Math.ceil(toObj1.id/3)*3)
                pagesObj(_palstic,toObj3)
            }
        }
    }
});


