<template>
    <h1>PRODUCTS</h1>
    <ol>
        <li v-for="comment in comments" :key="comment.id">
            <p><img :src="comment.image" class=imgFile>{{comment.productId}} {{comment.productName}} {{comment.price}} Won</p>
            <button @click="buy(comment.productId)">BUY</button> 
            

        </li>
    </ol>
    <h3>{{comments.productName}}</h3>
  
    
</template>

<script>
import axios from 'axios'
//var router = this.$router;
export default {
    
    name:'ShopProduct',
    data(){
        return{
           comments:[]
        }
    },
    methods:{
        buy(productId){
            this.$router.push("/products/" + productId)
        }
    },
    
    mounted(){
        axios.get('/api/products')
        .then(response=>{
            this.comments = response.data
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>
.imgFile{
    width: 30px;
    height: 30px;
}
</style>

