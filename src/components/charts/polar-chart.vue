<script>

export default {
    data() {
        return {
             chartData :[
                {
                    value: Math.random(),
                    color: "#FC8213"
                },
                {
                    value: Math.random(),
                    color: "#68AE00"
                },
                {
                    value: Math.random(),
                    color: "#337AB7"
                },
                {
                    value: Math.random(),
                    color: "#FC8213"
                },
                {
                    value: Math.random(),
                    color: "#68AE00"
                },
                {
                    value: Math.random(),
                    color: "#337AB7"
                }
            ]





        }
    },
    mounted() {
        new Chart(document.getElementById("polarArea").getContext("2d")).PolarArea(this.chartData);
    }
}
</script>


<template>
    <div class="polar-chart">
        <h3> polar chart </h3>
        <canvas id="polarArea" height="270" width="400" style="width: 400px; height: 270px;"></canvas>
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