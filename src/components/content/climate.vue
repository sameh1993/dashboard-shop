<script>
export default {
    mounted() {
        var icons = new Skycons({ "color": "#fff" }),
            list = [
                "clear-night", "partly-cloudy-day",
                "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                "fog"
            ],
            i;

        for (i = list.length; i--;)
            icons.set(list[i], list[i]);

        icons.play();
    }
}
</script>

<template>
    <div class="climate-grid1">
        <div class="climate-gd1-top">
            <div class="col-md-6 col-sm-12 climate-gd1top-left">
                <h4>Aprill 6-wed</h4>
                <h3>12:30<span class="timein-pms">PM</span></h3>
                <p>Humidity:</p>
                <p>Sunset:</p>
                <p>Sunrise:</p>
            </div>
            <div class="col-md-6 col-sm-12 climate-gd1top-right">
                <span class="clime-icon">
                    <figure class="icons">
                        <canvas id="partly-cloudy-day" width="64" height="64">
                        </canvas>
                    </figure>
                </span>
                <p>88%</p>
                <p>5:40PM</p>
                <p>6:30AM</p>
            </div>
            <div class="clearfix"> </div>
        </div>
        <div class="climate-gd1-bottom">
            <div class="col-md-4 cloudy1">
                <h4>Hongkong</h4>
                <figure class="icons">
                    <canvas id="sleet" width="58" height="58">
                    </canvas>
                </figure>
                <h3>10c</h3>
            </div>
            <div class="col-md-4 cloudy1">
                <h4>UK</h4>
                <figure class="icons">
                    <canvas id="cloudy" width="58" height="58"></canvas>
                </figure>
                <!-- <script>
                var icons = new Skycons({"color": "#fff"}),
								  list  = [
									"clear-night", "cloudy",
									"partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
									"fog"
								  ],
								  i;

							  for(i = list.length; i--; )
								icons.set(list[i], list[i]);

							  icons.play();
              </script> -->
                <h3>6c</h3>
            </div>
            <div class="col-md-4 cloudy1">
                <h4>USA</h4>
                <figure class="icons">
                    <canvas id="snow" width="58" height="58">
                    </canvas>
                </figure>
                <h3>10c</h3>
            </div>
            <div class="clearfix"> </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/GlobalRules/scss/mainrules.scss";

canvas {
    @include maxScreen(sm) {
        width: 60px !important;
        height: 78px !important;
    }
}
</style>