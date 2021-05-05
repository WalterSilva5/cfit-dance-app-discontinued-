setTimeout(() => {
  var index = new Vue({
    el: "#index",
    data: {
      show: true,
    },
    created() {},
  });
}, 1000);
for (x = 1; x <= 6; x++) {
  $("#certificates").append(`
    <div class="col-md-4" id="certificate">
    <div id="certificate-image">
      <img class="img-fluid" src="img/certificados/${x}.png" alt="">
    </div>
    <!--<h6 class="text-center">WINDOWS</h6>-->
  </div>
    `);
}

for (x = 0; x <= 2; x++) {
  let projectNames = ['RIDE CONTROL', 'SALES SIMPLE', 'YOUTUBE MUSIC DOWNLOAD']
  $("#projects").append(`
    <div class="col-md-4  col-12" id="project">
      <div id="project-image">
        <img class="img-fluid" src="img/projects/project-${x}.jpg" alt="project-image">
        <h6 class="text-center">${projectNames[x]}</h6>
      </div>
    </div>
    `);
}
