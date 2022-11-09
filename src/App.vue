<!--
 * @Author: kasuie
 * @Date: 2022-08-25 23:37:29
 * @LastEditors: kasuie
 * @LastEditTime: 2022-11-09 16:23:24
 * @Description: 
-->
<template>
  <router-view/>
</template>

<style lang="less">
body,html{
    margin: 0;
    padding: 0;
    background-attachment:fixed;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: url("/cursor.ico"), auto;

    &::-webkit-scrollbar {/*滚动条整体样式*/
        width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
        transition: all ease-in-out 1s;
    }
    &::-webkit-scrollbar-thumb{/*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow: inset 0 0 5px rgba( 0, 0, 0, .1);
        background: #64d1e2;
    }
    &::-webkit-scrollbar-track{/*滚动条里面轨道*/
        box-shadow: inset 0 0 5px rgba( 0, 0, 0, .1);
        border-radius: 10px;
        background: rgb(224,228 ,230);
    }
    &::-webkit-scrollbar:hover {/*滚动条整体样式*/
        width: 10px;
        height: 1px;
    }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
