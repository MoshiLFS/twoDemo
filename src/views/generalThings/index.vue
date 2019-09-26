<template>
  <div class="noTabPageContent">
    <div class="topicDetail">
      <div class="header">
        <div class="left">
          <i class="iconfont icon-i-left"></i>
        </div>
        <div class="title">关爱他成长的每一个足迹</div>
        <div class="right"></div>
      </div>
      <div class="topicDetailImg">
        <img src="//yanxuan.nosdn.127.net/75c55a13fde5eb2bc2dd6813b4c565cc.jpg" />
        <img src="//yanxuan.nosdn.127.net/e27e1de2b271a28a21c10213b9df7e95.jpg" />
        <img src="//yanxuan.nosdn.127.net/9d413d1d28f753cb19096b533d53418d.jpg" />
        <img src="//yanxuan.nosdn.127.net/64b0f2f350969e9818a3b6c43c217325.jpg" />
        <img src="//yanxuan.nosdn.127.net/a668e6ae7f1fa45565c1eac221787570.jpg" />
        <img src="//yanxuan.nosdn.127.net/0d4004e19728f2707f08f4be79bbc774.jpg" />
        <img src="//yanxuan.nosdn.127.net/79ee021bbe97de7ecda691de6787241f.jpg" />
      </div>
      <div class="commentWrap">
        <div class="titleLine">
          <div class="titleName">精选留言</div>
          <div class="titleIcon">
            <i class="iconfont icon-pencil" aria-hidden="true"></i>
          </div>
        </div>
        <div class="commentList">
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2017-05-15 10:06:01</div>
            </div>
            <div class="userComment">是记忆棉 很满意</div>
            <div class="commentPicList"></div>
          </div>
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2017-05-15 23:56:28</div>
            </div>
            <div class="userComment">很好的东西</div>
            <div class="commentPicList"></div>
          </div>
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2017-04-16 11:12:46</div>
            </div>
            <div class="userComment">很舒服，有没有那么的软，不错！</div>
            <div class="commentPicList"></div>
          </div>
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2017-05-14 07:23:56</div>
            </div>
            <div class="userComment">确实舒服，不过夏天会不会热啊？</div>
            <div class="commentPicList"></div>
          </div>
          <div class="commentItem">
            <div class="userInfo">
              <div>匿名用户</div>
              <div>2016-12-01 17:58:54</div>
            </div>
            <div class="userComment">有点过软。等到夏季，上面直接铺凉席的话，不知道透气性会怎样？</div>
            <div class="commentPicList"></div>
          </div>
        </div>
        <a class="moreComment" href="#/comment/314?typeId=1">查看更多评论</a>
      </div>
    </div>
    <Buttom />
  </div>
</template>
<script>
import Buttom from "../../components/bottom.route.vue/index.vue";
export default {
  components: {
    Buttom
  }
};
</script>
<style lang="scss">
.noTabPageContent {
  padding-top: 30px;
  min-height: 100%;
}
.topicDetail {
  width: 100%;
  overflow-x: hidden;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: white;
  box-shadow: 0 0.04rem 0.08rem 0 rgba(0, 0, 0, 0.12),
    0 0 6px 0 rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.header .left,
.header .right {
  width: 30px;
}
.header > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .title {
  flex: 1 1;
  font-size: 15;
}
.header > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header .left,
.header .right {
  width: 30px;
}
.header > div {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.topicDetailImg img {
  width: 100%;
  height: auto;
  display: block;
}
.commentWrap {
    width: 100%;
    height: auto;
    background: white;
    margin-top: 15px;
}
.commentWrap .titleLine {
    width: 100%;
    height: 10px;
    position: relative;
    display: flex;
    padding: 15px;
}
.commentWrap .titleLine div.titleName {
    flex: 1 1;
    height: 100%;
    line-height:10px;
    font-size: 15;
}
.commentWrap .titleLine div.titleIcon {
    width: 100px;
    height: auto;
    line-height: 100px;
    text-align: right;
    font-size: 14px;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.commentWrap .titleLine:after {
    content: '';
    width: 200%;
    height: 1px;
    position: absolute;
    bottom: 0;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transform-origin: 0;
    transform-origin: 0;
    background-color: gray;
}
.commentList {
    background: white;
    padding: 10px;
}
.commentList .commentItem {
    width: 100%;
    height: auto;
    position: relative;
    background: white;
    color: gray;
    padding-bottom: 10px;
}
.commentList .commentItem .userInfo {
    height: 80px;
    line-height: 10px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>