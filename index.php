<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
    /* Remove the navbar's default margin-bottom and rounded borders */ 
    .navbar {
      margin-bottom: 0;
      border-radius: 0;
    }
    
    /* Add a gray background color and some padding to the footer */
    footer {
      background-color: #f2f2f2;
      padding: 25px;
    }
    
  .carousel-inner img {
      width: 100%; /* Set width to 100% */
      margin: auto;
      min-height:200px;
  }
footer{
   bottom:0;
   width:100%;
   height:60px;   /* Contoh tinggi footer 60px */
}

  /* Hide the carousel text when the screen is less than 600 pixels wide */
  @media (max-width: 600px) {
    .carousel-caption {
      display: none; 
    }
  }
  </style>
</head>
<body>

<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">BHO Futsal</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Beranda</a></li>
        <li><a href="#">Fasilitas</a></li>
        <li><a href="#">Sewa</a></li>
        <li><a href="#">Kontak</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>

<div id="myCarousel" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <!-- Wrapper for slides -->
      <div class="item active">
        <img src="images/futsal-HD-crop.JPG" alt="Image">
        <div class="carousel-caption">
          <h3>Play with The Best Option!</h3>
        </div>      
      </div>
    </div>
</div>
<div class="container text-center">
<div class="container-fluid">
  <h1>Star Futsal</h1>
</div>
</div>
<div class="container-fluid">
<div class="row">
  <div class="col-sm-4">
    <img src="images/futsal.jpg" alt="gambar-futsal" style="width: 100%"/>
  </div>
    <div class="col-sm-8">
      <p>BHO Futsal is Indonesia’s largest indoor soccer centers chain – operating at fourteen locations, spread across ten cities along the country’s archipelago. The company’s philosophy is to combine sports venues with entertainment in providing an alternative and healthier lifestyle to Indonesia’s metropolitan executives and young adults.</p><br>


    <p>Born out of the dreams of a few entrepreneurs, and inspired by Indonesians’ love for soccer, Planet Futsal opened its first branch in 2004 to kick off the Euro competition. It was the first indoor sport center of its kind, dedicated to Futsal or five-a-side soccer that boasted the country’s first artificial turf pitches. Although commonplace in Europe, artificial turf was an unknown sporting surface in Indonesia. The business idea was simple, but so revolutionary that it propelled the growth of a new industry. As the sport’s popularity grew, Futsal-related businesses, from magazines to events management, mushroomed.
    </p><br>
    <button type="button" class="btn btn-info">Read More</button>
    </div>
</div>
</div>
</div>

<div class="container text-center">
<div class="container-fluid">
  <h1>Fasilitas</h1>
</div>
</div>  
<div class="container text-center">
  <div class="row">
    <div class="col-sm-4">
      <img src="images/fasilitas-resepsionis.JPG" class="img-responsive" style="width:100%" alt="Image">
      <p>Resepsionis</p>
    </div>
    <div class="col-sm-4"> 
      <img src="images/fasilitas-ruanggantiloker.JPG" class="img-responsive" style="width:100%" alt="Image">
      <p>Ruang Ganti & Loker</p>    
    </div>
    <div class="col-sm-4">
      <img src="images/fasilitas-cafe.JPG" class="img-responsive" style="width:100%" alt="Image">
      <p>Star Futsal Cafe</p>
    </div>
  </div>
</div><br>

<div class="container text-center">
<div class="container-fluid">
  <h1>Lokasi</h1>
</div>
</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6808969189665!2d107.71359871433786!3d-6.928692694993901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2d5fa0b334d%3A0x421fe5167049e346!2sLapang+Futsal+BHO!5e0!3m2!1sid!2sid!4v1512392203809" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
<footer class="container-fluid text-center">
  &copy; Lu'lu' Al-Maknun
  </footer>
</body>

</html>
