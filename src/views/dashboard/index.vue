<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text" v-if="isAdminUser">Hello I am admin user</div> -->
    <div class="dashboard-label">Hi, {{name}}</div>
    <div class="dashboard-label">Roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
    <br>
    <br>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in helpTextArray" :key="item.id">
        <div align="center">
        <b> {{ item.id }}) {{ item.text}} </b>
      </div>   
      </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DashboardConst } from './classes'
export default {
  name: 'dashboard',
  data: function() {
    return {
      helpTextArray: []
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ]),
    isAdminUser: function() {
      var isAdminUser = false
      console.log('this.roles')
      console.log(this.roles)
      if (this.roles === 'admin') {
        isAdminUser = true
      }
      console.log('isAdminUser')
      console.log(isAdminUser)
      return isAdminUser
    }
  },
  created() {
    // this.fetchData()
    this.populateHelpText()
  },
  methods: {
    populateHelpText() {
      var i
      for (i = 0; i < DashboardConst.CarouselHelpText.length; i++) {
        this.helpTextArray.push(DashboardConst.CarouselHelpText[i])
      }
    }
  }

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped> 
 .dashboard-label{
    font-size: 15px;
    font-weight: bold;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;
    text-align: right;       
    background-color: lightblue;color: navy;
 }
 .el-carousel__item h3 {
    color: #475669;
    font-size: 15px;
    opacity: 0.75;
    line-height: 20px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: lightblue;color: navy;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: navy;color: lightblue;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
