<template>
    <div></div>
</template>


<script>
import axios from "axios";
export default {
    props:['id'], 
    created() {
        console.log('props',this.id);
        const seed = this.$route.params.id;
        axios.get(`https://randomuser.me/api/?seed=${seed}`).then((res) => {
            console.log(res);
        });
    },
};
</script>