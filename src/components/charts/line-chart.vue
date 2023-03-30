<script>

export default {
    data() {
        return {

            lineChartData: {
                labels: ["", "", "", "", "", "", ""],
                datasets: [
                    {
                        fillColor: "rgba(252, 130, 19, 0.74)",
                        strokeColor: "#FC8213",
                        pointColor: "#FC8213",
                        pointStrokeColor: "#fff",
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        fillColor: "rgba(51, 122, 183, 0.71)",
                        strokeColor: "#337AB7",
                        pointColor: "#337AB7",
                        pointStrokeColor: "#fff",
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]

            }



        }
    },
    mounted() {
        new Chart(document.getElementById("line").getContext("2d")).Line(this.lineChartData);
    }
}
</script>


<template>
    <div class="line-chart">
        <h3> line chart </h3>
        <canvas id="line" height="300" width="460" style="width: 460px; height: 300px;"> </canvas>
    </div>
</template>

<style lang="scss" scoped>
.line-chart {
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