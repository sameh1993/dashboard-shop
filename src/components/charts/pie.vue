<script>

export default {
    data() {
        return {
            
									pieData :[
										{
											value: 30,
											color:"#337AB7"
										},
										{
											value : 50,
											color : "#FC8213"
										},
										{
											value : 100,
											color : "#8BC34A"
										}
									
									]
									
								





        }
    },
    mounted() {
        new Chart(document.getElementById("pie").getContext("2d")).Pie(this.pieData);
    }
}
</script>


<template>
    <div class="polar-chart">
        <h3> polar chart </h3>
        <canvas id="pie" height="270" width="470" style="width: 470px; height: 270px;"></canvas>
    </div>
</template>

<style lang="scss" scoped>
.polar-chart {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    padding: 25px;

    h3 {
        margin-bottom: 25px;
        font-weight: 300;
        font-size: 25px;
        text-transform: capitalize;
    }
}
</style>