<script setup>
import sidebar from "@/components/sidebar.vue";
import bodyComp from "@/components/content/body.vue";
import navbarComp from "@/components/content/navbar.vue"
import marketUpdates from "@/components/content/market-updates.vue"
import recentFollowers from "@/components/content/recent-followers.vue"
import geoChart from "@/components/content/geo-chart.vue"
import $ from "jquery";
import { onMounted } from "vue";

onMounted(function () {
  $(document).ready(function () {
    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "cloudy",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "partly-cloudy-day",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var navoffeset = $(".header-main").offset().top;
    $(window).scroll(function () {
      var scrollpos = $(window).scrollTop();
      if (scrollpos >= navoffeset) {
        $(".header-main").addClass("fixed");
      } else {
        $(".header-main").removeClass("fixed");
      }
    });

    var icons = new Skycons({ color: "#fff" }),
      list = [
        "clear-night",
        "clear-day",
        "partly-cloudy-night",
        "cloudy",
        "rain",
        "sleet",
        "snow",
        "wind",
        "fog",
      ],
      i;

    for (i = list.length; i--; ) icons.set(list[i], list[i]);

    icons.play();

    var barChartData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul"],
      datasets: [
        {
          fillColor: "#FC8213",
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          fillColor: "#337AB7",
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };
    new Chart(document.getElementById("bar").getContext("2d")).Bar(
      barChartData
    );
  });

  var toggle = true;

  $(".sidebar-icon").click(function () {
    if (toggle) {
      $(".page-container")
        .addClass("sidebar-collapsed")
        .removeClass("sidebar-collapsed-back");
      $("#menu span").css({ position: "absolute" });
    } else {
      $(".page-container")
        .removeClass("sidebar-collapsed")
        .addClass("sidebar-collapsed-back");
      setTimeout(function () {
        $("#menu span").css({ position: "relative" });
      }, 400);
    }
    toggle = !toggle;
  });

  var radarChartData = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        fillColor: "rgba(104, 174, 0, 0.83)",
        strokeColor: "#68ae00",
        pointColor: "#68ae00",
        pointStrokeColor: "#fff",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        fillColor: "rgba(236, 133, 38, 0.82)",
        strokeColor: "#ec8526",
        pointColor: "#ec8526",
        pointStrokeColor: "#fff",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
  new Chart(document.getElementById("radar").getContext("2d")).Radar(
    radarChartData
  );
});
</script>

<template>
  <div class="root">
    <div class="page-container">
      <div class="left-content">
        <div class="mother-grid-inner">

          <!-- script-for sticky-nav -->
          <navbar-comp />
          <!-- /script-for sticky-nav -->
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
                  <div class="glocy-chart">
                    <div class="span-2c">
                      <h3 class="tlt">Sales Analytics</h3>
                      <canvas
                        id="bar"
                        height="300"
                        width="400"
                        style="width: 400px; height: 300px"
                      ></canvas>
                    </div>
                  </div>
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
                <div class="prograc-blocks">
                  <!--Progress bars-->
                  <div class="home-progres-main">
                    <h3>Total Sales</h3>
                  </div>
                  <div class="bar_group">
                    <div
                      class="bar_group__bar thin"
                      label="Rating"
                      show_values="true"
                      tooltip="true"
                      value="343"
                    ></div>
                    <div
                      class="bar_group__bar thin"
                      label="Quality"
                      show_values="true"
                      tooltip="true"
                      value="235"
                    ></div>
                    <div
                      class="bar_group__bar thin"
                      label="Amount"
                      show_values="true"
                      tooltip="true"
                      value="550"
                    ></div>
                    <div
                      class="bar_group__bar thin"
                      label="Farming"
                      show_values="true"
                      tooltip="true"
                      value="456"
                    ></div>
                  </div>

                  <!--//Progress bars-->
                </div>
              </div>
              <div class="col-md-6 chart-layer2-left">
                <div class="content-main revenue">
                  <h3>Total Revenue</h3>
                  <canvas
                    id="radar"
                    height="300"
                    width="300"
                    style="width: 300px; height: 300px"
                  ></canvas>
                </div>
              </div>
            </div>

            <!--climate start here-->
            <div class="climate row">
              <div class="col-md-4 climate-grids">
                <div class="climate-grid1">
                  <div class="climate-gd1-top row ml-0 mr-0">
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
          <!--copy rights start here-->
          <div class="copyrights">
            <p>
              © 2016 Shoppy. All Rights Reserved | Design by
              <a href="http://w3layouts.com/" target="_blank">W3layouts</a>
            </p>
          </div>
          <!--COPY rights end here-->
        </div>
      </div>
      <!--slider menu-->
      <div class="sidebar-menu">
        <div class="logo">
          <a href="#" class="sidebar-icon">
            <span class="fa fa-bars"></span>
          </a>
          <a href="#">
            <span id="logo"></span>
            <!--<img id="logo" src="" alt="Logo"/>-->
          </a>
        </div>
        <div class="menu">
          <ul id="menu">
            <li id="menu-home">
              <a href="index.html"
                ><i class="fa fa-tachometer"></i><span>Dashboard</span></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-cogs"></i><span>Components</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul>
                <li><a href="grids.html">Grids</a></li>
                <li><a href="portlet.html">Portlets</a></li>
              </ul>
            </li>
            <li id="menu-comunicacao">
              <a href="#"
                ><i class="fa fa-book nav_icon"></i><span>Element</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul id="menu-comunicacao-sub">
                <li id="menu-mensagens" style="width: 120px">
                  <a href="buttons.html">Buttons</a>
                </li>
                <li id="menu-arquivos">
                  <a href="typography.html">Typography</a>
                </li>
                <li id="menu-arquivos"><a href="icons.html">Icons</a></li>
              </ul>
            </li>
            <li>
              <a href="maps.html"
                ><i class="fa fa-map-marker"></i><span>Maps</span></a
              >
            </li>
            <li id="menu-academico">
              <a href="#"
                ><i class="fa fa-file-text"></i><span>Pages</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul id="menu-academico-sub">
                <li id="menu-academico-boletim">
                  <a href="login.html">Login</a>
                </li>
                <li id="menu-academico-avaliacoes">
                  <a href="signup.html">Sign Up</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="charts.html"
                ><i class="fa fa-bar-chart"></i><span>Charts</span></a
              >
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-envelope"></i><span>Mailbox</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul id="menu-academico-sub">
                <li id="menu-academico-avaliacoes">
                  <a href="inbox.html">Inbox</a>
                </li>
                <li id="menu-academico-boletim">
                  <a href="inbox-details.html">Compose email</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-cog"></i><span>System</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul id="menu-academico-sub">
                <li id="menu-academico-avaliacoes">
                  <a href="404.html">404</a>
                </li>
                <li id="menu-academico-boletim">
                  <a href="blank.html">Blank</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#"
                ><i class="fa fa-shopping-cart"></i><span>E-Commerce</span
                ><span class="fa fa-angle-right" style="float: right"></span
              ></a>
              <ul id="menu-academico-sub">
                <li id="menu-academico-avaliacoes">
                  <a href="product.html">Product</a>
                </li>
                <li id="menu-academico-boletim">
                  <a href="price.html">Price</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .root {
//   display: flex;
//   align-content: stretch;
// }
</style>
