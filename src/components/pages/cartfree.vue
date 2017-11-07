<template>
  <div class="cartfreea">

    <cartpart01></cartpart01>
    <section>

      <cartppstu :list="cartList"></cartppstu>
      <cartelsepro></cartelsepro>

    </section>
    <cartfot></cartfot>

  </div>
</template>

<script>

  import cartpart01 from "../cartfree/cartpart01.vue";
  import cartppstu from "../cartfree/cartppstu.vue";
  import cartelsepro from "../cartfree/cartelsepro.vue";
  import cartfot from "../cartfree/cartfot.vue";
  //import  ShopCartService from "../../fetch/ShopCartService"
  export default {
    data(){
      return{
        cartList:[
          {"_id":"59f28bbd15badb1ac4fd5af7",
            "bens":"J.D.V  连帽大口袋羽绒服",
            "des":"J.D.V  连帽大口袋羽绒服",
            "pic":"https://img12.static.yhbimg.com/goodsimg/2017/10/20/13/026dba4bcc1b86e3009a99c5618ef3bde2.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80",
            "art":"1899",
            "meb":"1200",
            "lrc":"促销",
            "talk":"",
            "size":"S,M,L",
            "col":"红,黄,蓝,白"}
        ]
      }
    },
    components:{
      cartpart01,
      cartppstu,
      cartfot,
      cartelsepro
    },
    methods:{

      initData:function () {
        ShopCartService.getShopCartListByUser((data) => {
          this.cartList = data;
          console.log(data)
        })
      }
    },
    created: function () {
      this.initData();
    },
    mounted(){

    function $(id){
      return document.getElementById(id);
    }




    $("cart_edit").onclick=function(){
      $("cart_edit").style.display="none";
      $("cart_selend").style.display="block";
      $("cart_chaone").style.display="none";
      $("cart_chatwo").style.display="none";
      $("cart_ensh").style.display="block";
      $("cart_price").style.display="none";
      $("cart_dele").style.display="block";
      for(var i=0;i<document.getElementsByClassName("cart_xhsp").length;i++){
        document.getElementsByClassName("cart_xhsp")[i].style.display="none";
      }
      for(var i=0;i<document.getElementsByClassName("celsuan").length;i++){
        document.getElementsByClassName("celsuan")[i].style.display="flex";
      }
    }
    $("cart_selend").onclick=function(){
      $("cart_edit").style.display="block";
      $("cart_selend").style.display="none";
      $("cart_chaone").style.display="block";
      $("cart_chatwo").style.display="block";
      $("cart_ensh").style.display="none";
      $("cart_price").style.display="block";
      $("cart_dele").style.display="none";
      for(var i=0;i<document.getElementsByClassName("cart_xhsp").length;i++){
        document.getElementsByClassName("cart_xhsp")[i].style.display="block";
      }
      for(var i=0;i<document.getElementsByClassName("celsuan").length;i++){
        document.getElementsByClassName("celsuan")[i].style.display="none";
      }
    }


//-------------------全选切换-----------------------------------------
    $("cart_cheallimg01").onclick=function(){
      $("cart_cheallimg02").style.display="block";
      $("cart_cheallimg01").style.display="none";
      $("cart_chexim02").style.display="block";
      $("cart_chexim01").style.display="none";
      $("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
      $("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
    }
    $("cart_cheallimg02").onclick=function(){
      $("cart_cheallimg01").style.display="block";
      $("cart_cheallimg02").style.display="none";
      $("cart_chexim01").style.display="block";
      $("cart_chexim02").style.display="none";
      $("cart_monz").innerHTML=0;//-------------总价、单价、件数
      $("cart_mons").innerHTML=0;//-------------总价、单价、件数
    }


    if($("cart_cheallimg02").style.display="none"){
      $("cart_monz").innerHTML=0;//-------------总价、单价、件数
      $("cart_mons").innerHTML=0;//-------------总价、单价、件数
    }


//-------------------单选切换------------------------------------

    $("cart_chexim01").onclick=function(){
      $("cart_chexim02").style.display="block";
      $("cart_chexim01").style.display="none";
      $("cart_cheallimg02").style.display="block";
      $("cart_cheallimg01").style.display="none";
      $("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
      $("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
    }
    $("cart_chexim02").onclick=function(){
      $("cart_chexim01").style.display="block";
      $("cart_chexim02").style.display="none";
      $("cart_cheallimg01").style.display="block";
      $("cart_cheallimg02").style.display="none";
      $("cart_monz").innerHTML=0;//总价、单价、件数
      $("cart_mons").innerHTML=0;//总价、单价、件数
    }



//-----------商品加减及价格计算----------------------------------

    var n=Number($("celsuanjiage").innerHTML);
    $("celsuanjian").onclick=function(){
      if(Number($("celsuannei").innerHTML)-1>0){
        $("celsuannei").innerHTML=Number($("celsuannei").innerHTML)-1;//-------------减
        $("cart_sentprossw").innerHTML=Number($("celsuannei").innerHTML);//-------------计件
        //$("celsuanjiage").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------每个商品总价
        $("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
        $("cart_mons").innerHTML=$("celsuannei").innerHTML;//总价、单价、件数
      }
    }
    $("celsuanjia").onclick=function(){
      $("celsuannei").innerHTML=Number($("celsuannei").innerHTML)+1;//-------------加
      $("cart_sentprossw").innerHTML=Number($("celsuannei").innerHTML);//-------------计件
      //$("celsuanjiage").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------每个商品总价
      $("cart_monz").innerHTML=((n*Number($("celsuannei").innerHTML)/100)*100).toFixed(2);//-------------总价、单价、件数
      $("cart_mons").innerHTML=$("celsuannei").innerHTML;//-------------总价、单价、件数
    }


  }

}
</script>

<style scoped>

.cartfreea{
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  position: fixed;
  top:0;
  left:0;
  overflow-y: scroll;
}
section{
  width: 100%;
  margin: 2.5rem 0;
  font-size: 1.2rem;
  margin-top: 4.3rem;
  margin-bottom: 5.6rem;/*----------改------------------------------------*/
}


</style>
