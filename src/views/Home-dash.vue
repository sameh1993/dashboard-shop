<script setup>
import marketUpdates from "@/components/content/market-updates.vue";
import TotalRevenue from "@/components/content/total-revenue.vue";
import recentFollowers from "@/components/content/recent-followers.vue";
import navbarComp from "@/components/footer.vue";
import GlocyChart from "@/components/content/glocy-chart.vue";
import geoChart from "@/components/content/geo-chart.vue";
import footerComp from "@/components/footer.vue";
import totalSales from "@/components/content/total-sales.vue";
</script>

<template>
  <!--inner block start here-->
  <div class="inner-block">
    <!--market updates updates-->
    <market-updates />
    <!--mark et updates end here-->
    <!--mainpage chit-chating-->
    <div class="chit-chat-layer1 row">
      <div class="col-md-6 chit-chat-layer1-left">
        <!-- start recent followers -->
        <recent-followers />
        <!-- end recent followers -->
      </div>
      <div class="col-md-6 chit-chat-layer1-rit">
        <geo-chart />
      </div>
    </div>
    <!--main page chit chating end here-->
    <!--main page chart start here-->
    <div class="main-page-charts">
      <div class="main-page-chart-layer1 row">
        <div class="col-md-6 chart-layer1-left">
          <GlocyChart />
        </div>
        <div class="col-md-6 chart-layer1-right">
          <div class="user-marorm">
            <div class="malorum-top"></div>
            <div class="malorm-bottom">
              <span class="malorum-pro"> </span>
              <h4>unde omnis iste</h4>
              <h2>Melorum</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising.
              </p>
              <ul class="malorum-icons">
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook"> </i>
                    <div class="tooltip"><span>Facebook</span></div>
                  </a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-twitter"> </i>
                    <div class="tooltip"><span>Twitter</span></div>
                  </a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-google-plus"> </i>
                    <div class="tooltip"><span>Google</span></div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--main page chart layer2-->
    <div class="chart-layer-2 row">
      <div class="col-md-6 chart-layer2-right">
        <total-sales />
      </div>
      <div class="col-md-6 chart-layer2-left">
        <TotalRevenue />
      </div>
    </div>

    <!--climate start here-->
    <div class="climate row">
      <div class="col-md-4 climate-grids">
        <div class="climate-grid1">
          <div class="climate-gd1-top row ml-0 mr-0 text-center">
            <div class="col-md-6 climate-gd1top-left">
              <h4>Aprill 6-wed</h4>
              <h3>12:30<span class="timein-pms">PM</span></h3>
              <p>Humidity:</p>
              <p>Sunset:</p>
              <p>Sunrise:</p>
            </div>
            <div class="col-md-6 climate-gd1top-right">
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
            <div class="clearfix"></div>
          </div>
          <div class="climate-gd1-bottom row">
            <div class="col-md-4 cloudy1">
              <h4>Hongkong</h4>
              <figure class="icons">
                <canvas id="sleet" width="58" height="58"> </canvas>
              </figure>
              <h3>10c</h3>
            </div>
            <div class="col-md-4 cloudy1">
              <h4>UK</h4>
              <figure class="icons">
                <canvas id="cloudy" width="58" height="58"></canvas>
              </figure>

              <h3>6c</h3>
            </div>
            <div class="col-md-4 cloudy1">
              <h4>USA</h4>
              <figure class="icons">
                <canvas id="snow" width="58" height="58"> </canvas>
              </figure>
              <h3>10c</h3>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="col-md-4 climate-grids">
        <div class="climate-grid2">
          <span class="shoppy-rate">
            <h4>$180</h4>
          </span>
          <ul>
            <li><i class="fa fa-credit-card"> </i></li>
            <li><i class="fa fa-usd"> </i></li>
          </ul>
        </div>
        <div class="shoppy">
          <h3>Those Who Hate Shopping?</h3>
        </div>
      </div>
      <div class="col-md-4 climate-grids">
        <div class="climate-grid3">
          <div class="popular-brand row">
            <div class="col-md-6 popular-bran-left">
              <h3>Popular</h3>
              <h4>Brand of this month</h4>
              <p>Duis aute irure in reprehenderit.</p>
            </div>
            <div class="col-md-6 popular-bran-right">
              <h3>Polo</h3>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="popular-follow row">
            <div class="col-md-6 popular-follo-left">
              <p>Lorem ipsum dolor sit amet, adipiscing elit.</p>
            </div>
            <div class="col-md-6 popular-follo-right">
              <h4>Follower</h4>
              <h5>2892</h5>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--climate end here-->
  </div>
  <!--inner block end here-->
  <footer-comp />
  <!--COPY rights end here-->
</template>
