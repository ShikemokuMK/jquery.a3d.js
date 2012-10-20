A3D.js  CSS3 Keyframe Animation from JavaScript
======================

CSS3キーフレームアニメーションをJavaScriptから動的に使用するためのプラグインです。また、CSS3アニメーションを強力に機能拡張することができます。


機能
-------

* JavaScriptのプログラムから、CSS3のキーフレームアニメーションを動的に生成できます

* キーフレームにおける任意のタイミングでJavaScriptのコードを発火することができます。

* キーフレーム情報、エフェクト情報、アニメーション情報を分離して管理することで、複雑なアニメーション制御をシンプルに記述できます。

* 複数のキーフレームアニメーションを連鎖させる事ができます

* 絶対位置指定、相対位置指定をサポートします。（エレメントの現在地点から前へ１０PXといった指定が可能）


使い方
------

### 基本的なアニメーション ###
アニメーションの実行はa3dメソッドを使用します。


### サンプルコード ###

      //キーブレームアニメーションの定義
      var a3d_define = {
          frames:{
              "0%":
                  {
                      trans:{"rotate":"0deg"}
                   },
              "50%":
                   {
                       trans:{"rotateY":"180deg","y":"-100px","x":"-100px"}
                    },
              "100%":
                    {
                      trans:{"rotate":"360deg","y":"-200px","x":"-200px","scale":"0.3"}
                     }
          }             
          ,
          config:{
              duration:"4s",
              state:"running",
              easing:"ease"
          }
     };

    //アニメーションの実行
    $(".target_image").a3d(a3d_define);    
    
   
パラメータ詳細
----------------
◆アニメーションの情報を定義
 
    {
        frames:{…},
        config:{…},
        complete:function(){…},
        start:function(){…},
        iteration:function(){…},
 
    }
 
+   `frames` :
    _frames_ はキーフレームの状態を定義します。durationで指定した時間に対してパーセンテージを指定してください。例えば５秒かかるアニメーションに対して20%の位置という指定になります。0〜100%の間で指定してください。指定数の上限はありません。また、0%を省略することで前回のアニメーション状態を継承して新しいアニメーションを開始できます。
 
+   `config` :
    _config_ はアニメーションの動作を定義することができます。アニメーションにかかる時間や、エフェクト、繰り返しなどです。詳細は後述のconfig詳細をご確認ください。

+   `complete` :
    _complete_ はこのキーフレームアニメーションが完了した時点で呼び出される関数を渡すことができます。
 
+   `complete` :
    _start_ はこのキーフレームアニメーションが開始した時点で呼び出される関数を渡すことができます。

+   `iteration` :
    _iteration_ はconfigでcountを１より大きい値を指定している場合、繰り返しのたびに呼び出される関数を指定できます。

◆フレーム情報詳細

    {
    …
    "50%":
        frames:{
            "trans":{…},
            "styles":{…},
            "ext":{finction(){…}}           
        },
    …
    }
 
+   `trans` :
    _trans_ はトランスフォーム関数で指定できる要素を指定できます。

・座標移動(translate, translate3d, translateX, translateY, translateZ)

・拡大縮小(scale, scale3d, scaleX, scaleY, scaleZ)

・回転(rotate, rotate3d, rotateX, rotateY, rotateZ)

・スキュー(skew, skewX, skewY)

・マトリクス処理(matrix, matrix3d)

・透視投影(perspective)

また、座標移動に関して、次のような簡易的な記述を推奨します。

    {x:"400px",y:"300px",z:"100px"}

さらに、指定方法を絶対位置、相対位置、初期位置が選択できます。

　数値の前に=(イコール)を記述することで、エレメントの現在位置を基準とした座標移動を指定できます。

（例）エレメントの現在位置を基準としてX軸方向へ400px　Y軸方向へ-300px移動します

    {x:"=+400px",y:"=-300px"}


　数値の前に*(アスタリスク)を記述することで絶対位置指定になります。

（例）画面左端から X軸方向へ400px　Y軸方向へ300pxの位置

    {x:"*400px",y:"*300px"}


数値だけの指定の場合は、エレメントの初期位置（DOM追加）が基準となります。←CSS3キーフレーム標準。使いにくい


+   `styles` :
    _styles_ はCSSの状態指定することができます。

          styles:{"opacity:0",width:"400px",height:"400px"}

+   `ext` :
    _ext_はこのフレームが完了した際に呼び出される関数を指定することができます。さらに、thisでエレメントを参照することができます。


◆コンフィグ情報詳細

    {
    …
    "config":
        {
            duration:"4s",
            state:"running",
            easing:"ease",
            count:"1",
            delay:"0",
            direction:"",
            mode:"forwards",
            maintain:"true"    
        }
    …
    }
 
+   `duration` :
    アニメーション時間を指定できます。ここで指定した時間をかけて１００％まで状態が変化していきます。初期値”4s” 

    5s(５秒) 500ms(500ミリ秒)

+   `state` :
アニメーションの状態を指定します。初期値"running" 停止は"pause"でa3dState メソッドを使うことで任意のタイミングでアニメーションを開始できます
+   `easing` :
変化パターン指定。以下の値を適応できます。


・ease(開始時点と終了時点を滑らかに再生する)

・linear(一定の間隔で再生する)

・ease-in(開始時点をゆっくり再生する)

・ease-out(終了時点をゆっくり再生する)

・ease-in-out(開始時点と終了時点をゆっくり再生する)

この他に、cubic-bezier関数を使って、イージングを独自に設定することも可能です。

+   `count` :
再生回数を指定できます。初期値は１。"infinite"を指定することで無限にアニメーションさせることもできます。

+   `delay` :
開始までの時間を指定できます。初期値は遅延なし(0)です。

+   `direction` :
偶数回のアニメーションを逆再生するか指定できます。
初期値は"normal" 偶数回逆再生させる場合は、"alternate"を指定します。

+   `mode` :
再生前後の状態を指定できます。初期値は"forwards"で再生後の状態を維持します。
"none"を指定すると、再生後の状態を維持しません

+   `maintain` :
アニメーションの状態を継承するかをしていできます。


デモ
--------
デモのコードを見ていただくのが手っ取り早いかも、、、

<iframe>

</iframe>

 
ライセンス
----------
* Copyright 2012, ShikemokuMK  
 
 *Free to use and abuse under the MIT license.
 *https://twitter.com/shikemokumk
 