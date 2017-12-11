<!DOCTYPE html>
<html lang="en">
<head>
  <title>BHO FUTSAL - BERANDA</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style type="text/css">
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

  /* Hide the carousel text when the screen is less than 600 pixels wide */
  @media (max-width: 600px) {
    .carousel-caption {
      display: none;
    }
  }
  .col-sm-4 > img{
  	width: 100%;
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
      <a class="navbar-brand" href="index.php">BHO Futsal</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Beranda</a></li>
        <li><a href="#">Fasilitas</a></li>
        <li><a href="#">Sewa</a></li>
        <li><a href="#">Jadwal</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Masuk</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
  <h2>GUEST FORM SEWA</h2>
  <p>Isi data di bawah dengan baik dan benar.</p>
  <form>
    <div class="form-group">
      <label for="nama">Nama:</label>
      <input type="text" class="form-control" id="nama">
    </div>
    <div class="form-group">
      <label for="kontak">Kontak:</label>
      <input type="text" class="form-control" id="kontak">
    </div>
    <div class="form-group">
      <label for="alamat">Alamat:</label>
      <input type="text" class="form-control" id="alamat">
    </div>
    <div class="form-group">
      <label for="lpg">Lapangan:</label>
      <input type="text" class="form-control" id="lpg">
    </div>
    <div class="form-group">
      <label for="lpg">Jam Mulai:</label>
      <input type="text" class="form-control" id="lpg">
    </div>
    <div class="form-group">
      <label for="lpg">Jam Selesai:</label>
      <input type="text" class="form-control" id="lpg">
    </div>
    <div class="form-group">
      <label for="lpg">Tarif:</label>
      <input type="text" class="form-control" id="lpg">
    </div>
    <div class="form-group">
      <label for="lpg">Biaya:</label>
      <input type="text" class="form-control" id="lpg">
    </div>
    <button type="submit" class="btn .btn-primary">Submit</button>
  </form>
</div>

<?php include("footer.php"); ?>

</body>
</html>