<template>
  <div class="geo-chart">
    <section id="charts1" class="charts">
      <div class="wrapper-flex">

        <table id="myTable" class="geoChart tableChart data-table col-table" style="display:none;">
          <caption>Student Nationalities Table</caption>
          <tbody>
            <tr>
              <th scope="col" data-type="string">Country</th>
              <th scope="col" data-type="number">Number of Students</th>
              <th scope="col" data-role="annotation">Annotation</th>
            </tr>
            <tr>
              <td>China</td>
              <td align="right">20</td>
              <td align="right">20</td>
            </tr>
            <tr>
              <td>Colombia</td>
              <td align="right">5</td>
              <td align="right">5</td>
            </tr>
            <tr>
              <td>France</td>
              <td align="right">3</td>
              <td align="right">3</td>
            </tr>
            <tr>
              <td>Italy</td>
              <td align="right">1</td>
              <td align="right">1</td>
            </tr>
            <tr>
              <td>Japan</td>
              <td align="right">18</td>
              <td align="right">18</td>
            </tr>
            <tr>
              <td>Kazakhstan</td>
              <td align="right">1</td>
              <td align="right">1</td>
            </tr>
            <tr>
              <td>Mexico</td>
              <td align="right">1</td>
              <td align="right">1</td>
            </tr>
            <tr>
              <td>Poland</td>
              <td align="right">1</td>
              <td align="right">1</td>
            </tr>
            <tr>
              <td>Russia</td>
              <td align="right">11</td>
              <td align="right">11</td>
            </tr>
            <tr>
              <td>Spain</td>
              <td align="right">2</td>
              <td align="right">2</td>
            </tr>
            <tr>
              <td>Tanzania</td>
              <td align="right">1</td>
              <td align="right">1</td>
            </tr>
            <tr>
              <td>Turkey</td>
              <td align="right">2</td>
              <td align="right">2</td>
            </tr>

          </tbody>
        </table>

        <div class="col geo_main">
          <h3 id="geoChartTitle">World Market</h3>
          <div id="geoChart" class="chart"> </div>
        </div>


      </div><!-- .wrapper-flex -->
    </section>
  </div>
</template>

