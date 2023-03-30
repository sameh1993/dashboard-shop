<template>
  <div class="grid inner-block">
    <div class>
      <div class="cols-grids panel-widget">
        <h2>Grids</h2>
        <div class="chute chute-center text-center">
          <div class="row">
            <div class="col-md-12">
              <div class="demo-grid">
                <code>.col-md-12</code>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="demo-grid">
                <code>.col-md-6</code>
              </div>
            </div>
            <div class="col-md-6">
              <div class="demo-grid">
                <code>.col-md-6</code>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
          </div>
          <div class="row mb40">
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
          </div>
          <div class="row mb40">
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
          </div>

          <div class="row mb40">
            <div class="col-md-8">
              <div class="demo-grid">
                <code>.col-md-8</code>
              </div>
            </div>
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
          </div>
          <div class="row mb40">
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
            <div class="col-md-3">
              <div class="demo-grid">
                <code>.col-md-3</code>
              </div>
            </div>
            <div class="col-md-6">
              <div class="demo-grid">
                <code>.col-md-6</code>
              </div>
            </div>
          </div>
          <div class="row mb40">
            <div class="col-md-8">
              <div class="demo-grid">
                <code>.col-md-8</code>
              </div>
            </div>
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
          </div>
          <div class="row mb40">
            <div class="col-md-4">
              <div class="demo-grid">
                <code>.col-md-4</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>
            <div class="col-md-2">
              <div class="demo-grid">
                <code>.col-md-2</code>
              </div>
            </div>

            <div class="demo-grid">
              <code>.col-md-4</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/GlobalRules/scss/mainRules.scss";
@import "@/main.scss";

.grid {
  padding-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
  .row {
    margin-bottom: 35px;
    & > div {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
}

.cols-grids {
  padding-right: 0;
  padding-left: 10px;

  h2 {
    margin-left: 0px;
    margin-bottom: 0.75em;
  }
}

.demo-grid {
  padding: 10px 0;
}
</style>