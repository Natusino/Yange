<template>
    <div class="social-icons">
        <nav>   
            <v-list>
                <v-list-item v-for="link in icons" :key="link.text" router :to="link.route" active-class="border">
                    <v-list-item-action>
                        <v-icon>{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <!-- <v-list-item-content>
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item-content> -->
                </v-list-item>
            </v-list>
        </nav>
    </div>
</template>
<script>
export default {
    data(){
        return{
            drawer: true,
            icons: [
                {icon: 'fas fa-home', route: '/'},
            ]
            
        }
    }
}
</script>
<style scoped>
    .social-icons{
      width: 200px;
      height: 300px;
      left: -70px;
      top: 150px;
      position: absolute;
      border-top-right-radius:275px 309px;
      border-bottom-right-radius:328px 627px;
      border-bottom-left-radius:108px 345px;
      background-image:linear-gradient(#0F658C,#d7e6fa);
    }  
    /* .social-icons v-list{
      display: block;
      color:#fff;
      margin-top: 100px;
      margin-left: 100px;
    }
    .social-icons v-list v-list-item-action{
      list-style: none;
      margin-top: 30px;
    }
    .social-icons v-list v-list-item-action v-icon{
      font-size:22px ;
      cursor: pointer;
      z-index: 1;
    } */
</style>