<template>
  <div class="container">
    <div style="width: 600px;">
        <h2>应用在父容器元素上的CSS属性</h2>
        <div id="flex">
            <h3>display: flex | inline-flex; 设置flex容器</h3>
            <div class="contain">
                <h4>display:flex</h4>
                <p>定义一个块级flex容器</p>
                <div class="parentBox flex">
                    <ul class="box">
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <ul class="box">
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>display:inline-flex</h4>
                <p>定义一个行内flex容器</p>
                <div class="parentBox">
                    <ul style="display: inline-flex;">
                        <li>1</li>
                        <li>2</li>
                    </ul>
                    <ul style="display: inline-flex;">
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-direction">
            <h3>flex-direction 设置伸缩盒对象的子元素在父容器中位置</h3>
            <div class="contain">
                <h4>flex-direction: row;</h4>
                <p>设置伸缩盒对象的子元素在父容器中的水平分布并靠在父容器的左侧</p>
                <div class="parentBox">
                    <ul class="box" style="flex-direction: row;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>flex-direction: row-reverse;</h4>
                <p>设置伸缩盒对象的子元素在父容器中的位置水平逆序分布并靠在父容器的右侧</p>
                <div class="parentBox">
                    <ul class="box" style="flex-direction: row-reverse;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>flex-direction: column;</h4>
                <p>设置伸缩盒对象的子元素在父容器中的位置垂直分布并靠在父容器上面</p>
                <div class="parentBox">
                    <ul class="box" style="flex-direction: column;  min-height: 200px;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>flex-direction: column-reverse;</h4>
                <p>设置伸缩盒对象的子元素在父容器中的位置垂直逆序分布并靠在父容器底部</p>
                <div class="parentBox">
                    <ul class="box" style="flex-direction: column-reverse;  min-height: 200px;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-wrap">
            <h3>flex-wrap 设置伸缩盒对象的子元素超出父容器时是否换行</h3>
            <div class="contain">
                <h4>flex-wrap: nowrap;</h4>
                <p>设置伸缩盒对象的子元素超出父容器时是不换行，如果没有设置min-width,这样会压缩子元素的width</p>
                <div class="parentBox">
                    <ul class="box" style="flex-wrap: nowrap;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>flex-wrap: wrap;</h4>
                <p>设置伸缩盒对象的子元素超出父容器时是换行</p>
                <div class="parentBox">
                    <ul class="box" style="flex-wrap: wrap;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>flex-wrap: wrap-reverse;</h4>
                <p>设置伸缩盒对象的子元素超出父容器时是自下而上换行</p>
                <div class="parentBox">
                    <ul class="box" style="flex-wrap: wrap-reverse;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-flow">
            <h3>flex-flow 复合属性，设置伸缩盒对象子元素的排列方式</h3>
            <div class="contain">
                <h4 style="text-align: left;">
                    flex-flow: &lt;‘flex-direction’&gt; || &lt;‘flex-wrap’&gt; 
                </h4>
                <p>设置伸缩盒对象的子元素垂直排布超出父容器时是自下而上换行</p>
                <div class="parentBox">
                    <ul class="box" style="flex-flow: column wrap-reverse; max-height: 200px;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="justify-content">
            <h3>justify-content 设置或检索弹性盒子元素在水平方向上的对齐方式。</h3>
            <div class="contain">
                <h4>justify-content:flex-start;</h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上左对齐</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content:flex-start;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>justify-content:flex-end;</h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上右对齐</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content:flex-end;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>justify-content:center;</h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上居中对齐</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content:center;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>justify-content:space-around;</h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上平均分布</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content:space-around;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>justify-content:space-between;</h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上平均分布</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content:space-between;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="align-items">
            <h3>align-items 设置弹性盒子元素在垂直方向上的对齐方式。</h3>
            <div class="contain">
                <h4>align-items:flex-start;</h4>
                <p>设置伸缩盒对象的子元素在父容器中紧靠顶部</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; align-items:flex-start;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-items:flex-end;</h4>
                <p>设置伸缩盒对象的子元素在父容器中紧靠底部</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; align-items:flex-end;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-items:center;</h4>
                <p>设置伸缩盒对象的子元素在父容器中垂直居中</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; align-items:center;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-items:baseline;</h4>
                <p>设置伸缩盒对象的子元素在父容器中基线对齐.如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; align-items:baseline;">
                        <li style="height: 30px;">1</li>
                        <li style="height: 40px;">2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-items:stretch;</h4>
                <p>如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; align-items:baseline;">
                        <li style="height: 30px;">1</li>
                        <li style="height: 40px;">2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="align-content">
            <h3>align-content 设置弹性盒堆叠伸缩行的对齐方式。</h3>
            <div class="contain">
                <h4>align-content: flex-start;</h4>
                <p>设置弹性盒堆叠伸缩行的顶部对齐</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; flex-wrap: wrap; align-content: flex-start;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-content: flex-end;</h4>
                <p>设置弹性盒堆叠伸缩行的底部对齐</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; flex-wrap: wrap; align-content: flex-end;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-content: center;</h4>
                <p>设置弹性盒堆叠伸缩行的垂直居中</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; flex-wrap: wrap; align-content: center;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-content: space-between;</h4>
                <p>设置弹性盒堆叠伸缩行的平均分布，第一行和最后一行会紧靠边框</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; flex-wrap: wrap; align-content: space-between;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-content: space-around;</h4>
                <p>设置弹性盒堆叠伸缩行的平均分布，第一行和最后一行不会紧靠边框</p>
                <div class="parentBox">
                    <ul class="box" style="min-height: 200px; flex-wrap: wrap; align-content: space-around;">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>10</li>
                        <li>11</li>
                        <li>12</li>
                        <li>13</li>
                    </ul>
                </div>
            </div>
            <div class="contain">
                <h4>align-content:stretch;</h4>
                <p>各行将会伸展以占用剩余的空间</p>
                <div class="parentBox">
                    <ul class="box1" style="display: flex; min-height: 200px; flex-wrap: wrap; align-content: stretch;">
                        <li style="width: 50px;">1</li>
                        <li style="width: 50px;">2</li>
                        <li style="width: 50px;">3</li>
                        <li style="width: 50px;">4</li>
                        <li style="width: 50px;">5</li>
                        <li style="width: 50px;">6</li>
                        <li style="width: 50px;">7</li>
                        <li style="width: 50px;">8</li>
                        <li style="width: 50px;">9</li>
                        <li style="width: 50px;">10</li>
                        <li style="width: 50px;">11</li>
                        <li style="width: 50px;">12</li>
                        <li style="width: 50px;">13</li>
                    </ul>
                </div>
            </div>
        </div>
        <h2>应用在子元素上的CSS属性</h2>
        <div id="order">
            <h3>order 用整数值来定义排列顺序，数值小的排在前面。可以为负值</h3>
            <div class="contain">
                <h4>
                   order：&lt;number&gt;
                </h4>
                <p>设置伸缩盒对象的子元素在父容器中水平方向上逆序显示</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content: space-around;">
                        <li style="order: 3;">1</li>
                        <li style="order: 2;">2</li>
                        <li style="order: 1;">3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-grow">
            <h3>flex-grow 设置弹性盒的扩展比率。根据弹性盒子元素所设置的扩展因子作为比率来分配剩余空间。</h3>
            <div class="contain">
                <h4 style=" text-align: left;">
                    flex-grow：&lt;number&gt; (default 0) <br>
                            &lt;li&gt;1&lt;/li&gt;<br>
                            &lt;li style="flex-grow:1;"&gt;2&lt;/li&gt;<br>
                            &lt;li style="flex-grow:3;"&gt;3&lt;/li&gt;<br>                
                </h4>
                <p>
                    不设置“1” 的扩展比例；所以“1”的宽度为默认宽度；“2”和“3”的扩展比例为1：3；也就是说
                    把父容器content宽度减去“1”的宽度，然后再把剩余的宽度分成1+3=4份，“2”占一份，“3” 占据三份
                </p>
                <div class="parentBox">
                    <ul class="box" style="justify-content: space-around;">
                        <li>1</li>
                        <li style="flex-grow:1;">2</li>
                        <li style="flex-grow:3;">3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-shrink">
            <h3>flex-shrink 设置弹性盒的收缩比率。根据弹性盒子元素所设置的扩展因子作为比率来分配收缩空间。</h3>
            <div class="contain">
                <h4 style=" text-align: left;">
                    flex-grow：&lt;number&gt; (default 1)<br>
                            &lt;li style="width: 400px;"&gt;1&lt;/li&gt;<br>
                            &lt;li style="width: 400px;"&gt;2&lt;/li&gt;<br>
                            &lt;li style="width: 400px; flex-shrink:3;"&gt;3&lt;/li&gt;<br>
                </h4>
                <p>
                    不设置“1” “2“收缩比例；“3”的收缩比例为3；
                    收缩比例跟扩展比例相反，当子元素可宽度加起来超过父容器的content的宽度，则子元素需要
                    按收缩比例来分摊超出的宽度。也就是说减去分担的宽度。这里每个子元素的默认宽度为400px,
                    而父容器的宽度为600px,则超出了200px.这时就需要每个子元素按比例减去各自的宽度。分别为
                    40px:40px:120px
                </p>
                <div class="parentBox">
                    <ul class="box" style="justify-content: space-around;">
                        <li style="width: 400px;">1</li>
                        <li style="width: 400px;">2</li>
                        <li style="width: 400px; flex-shrink:3;">3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="flex-basis">
            <h3>flex-basis 设置弹性盒伸缩基准值</h3>
            <div class="contain">
                <h4>
                    flex-basis：&lt;length&gt; | auto (default auto)<br>
                            &lt;li style="width: 400px;"&gt;1&lt;/li&gt;<br>
                            &lt;li style="width: 400px;"&gt;2&lt;/li&gt;<br>
                            &lt;li style="width: 400px; flex-shrink:3;"&gt;3&lt;/li&gt;<br>
                </h4>
                <p>
                    设置3的伸缩基数为600px
                </p>
                <div class="parentBox">
                    <ul class="box" style="justify-content: space-around;">
                        <li style="width: 400px;">1</li>
                        <li style="width: 400px;flex-basis:600px">2</li>
                        <li style="width: 400px; flex-shrink:3;">3</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="align-self">
            <h3>align-self 设置或检索弹性盒子元素自身在垂直方向上的对齐方式</h3>
            <div class="contain">
                <h4>
                    align-self: auto | flex-start | flex-end | center | baseline | stretch
                </h4>
                <p>auto：如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。</p>
                <p>flex-start：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</p>
                <p>flex-end：弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</p>
                <p>center：弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</p>
                <p>baseline：如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。</p>
                <p>stretch：如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</p>
                <div class="parentBox">
                    <ul class="box" style="justify-content: space-around; height: 100px;">
                        <li style="align-self: auto;">auto</li>
                        <li style="align-self: flex-start;">flex-start</li>
                        <li style="align-self: flex-end;">flex-end</li>
                        <li style="align-self: center;">center</li>
                        <li style="align-self: baseline;">baseline</li>
                        <li style="align-self: stretch;">stretch</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="content">
        <ul>
            <li title="设定一个flex容器"><a href="#flex">flex | inline-flex</a></li>
            <li title="设置伸缩盒对象的子元素在父容器中位置"><a href="#flex-direction">flex-direction</a></li>
            <li title="设置伸缩盒对象的子元素超出父容器时是否换行"><a href="#flex-wrap ">flex-wrap </a></li>
            <li title="复合属性，设置伸缩盒对象子元素的排列方式"><a href="#flex-flow">flex-flow</a></li>
            <li title="设置或检索弹性盒子元素在水平方向上的对齐方式。"><a href="#justify-content">justify-content</a></li>
            <li title="设置弹性盒子元素在垂直方向上的对齐方式。"><a href="#align-items">align-items</a></li>
            <li title="设置弹性盒堆叠伸缩行的对齐方式。"><a href="#align-content"> align-content</a></li>
            <li title="用整数值来定义排列顺序，数值小的排在前面"><a href="#order">order</a></li>
            <li title="设置弹性盒的扩展比率"><a href="#flex-grow">flex-grow</a></li>
            <li title="设置弹性盒伸缩基准值"><a href="#flex-basis">flex-basis</a></li>
            <li title="设置或检索弹性盒子元素自身在垂直方向上的对齐方式"><a href="#align-self">align-self</a></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "css3弹性和模型",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body {
      margin: 0;
      padding: 0;
  }

  ul {
      padding: 10px 30px;
  }

  li {
      list-style: none;
      border: 1px solid black;
  }

  .parentBox {
      border: solid 1px;
  }

  .contain {
      padding: 10px 20px;
      background-color: cornflowerblue;
  }

  .box {
      display: flex;
  }

  .box li {
      display: block;
      min-width: 50px;
      min-height: 50px;
  }

  .content {
      position: fixed;
      top: 100px;
      left: 650px;
  }

  .content ul {
      padding: 10px;
      border-radius: 10px;
      background-color: cadetblue;
  }

  .content ul li {
      width: 150px;
      padding: 5px 5px 5px 15px;
      cursor: pointer;
  }

  a {
      color: #ffffff;
      text-decoration: none;
  }
</style>
