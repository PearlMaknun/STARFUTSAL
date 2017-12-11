<!DOCTYPE html>
<html lang="en">
<head>
  <title>JADWAL - STAR FUTSAL</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap.min.css">
  <script src="jquery.min.js"></script>
  <script src="bootstrap.min.js"></script>
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

<nav class="navbar navbar-inverse navbar-fixed-top">
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
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Masuk</a></li>
      </ul>
    </div>
  </div>
</nav>

<div class="container">
  <h2 style="text-align:center;margin-top: 100px;">Jadwal Mingguan STAR FUTSAL</h2>                                                                                      
  <div class="table-responsive">          
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Jam</th><th>Minggu</th><th>Senin</th><th>Selasa</th><th>Rabu</th><th>Kamis</th><th>Jumat</th><th>Sabtu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>10:00 - 11:00</th>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
      </tr>
      <tr>
        <th>11:00 - 12:00</th>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "Booking"; 
        ?></td>
        <td><?php
        $d = date("D");
        if ($d == "Fri")
          echo "Booked"; 
        else
          echo "<a href='#'>Booking</a>";
        ?></td>
      </tr>
      <tr>
        <th>12:00 - 13:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>13:00 - 14:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>15:00 - 16:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>16:00 - 17:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>17:00 - 18:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>19:00 - 20:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>20:00 - 21:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th>21:00 - 22:00</th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

</body>
</html>