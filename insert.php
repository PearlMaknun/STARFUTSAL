<?php
include "config.php";
if(isset($_POST['bts'])):
     $stmt = $mysqli->prepare("INSERT INTO lapangan(NAMA, JENIS) VALUES (?,?)");
     $stmt->bind_param('ss', $nama, $jenis);
 
     $nama = $_POST['nama'];
     $jenis = $_POST['jenis'];
 
     if($stmt->execute()):
          echo "<script>location.href='admin_lapangan.php'</script>";
     else:
          echo "<script>alert('".$stmt->error."')</script>";
     endif;
endif;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>ADMIN</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="bootstrap.min.css">
  <script src="jquery.min.js"></script>
  <script src="bootstrap.min.js"></script>
</head>
<style type="text/css" media="screen">
  .header{

    height: 200px;
    background-image: url("images/futsal-HD-crop.JPG");
    opacity: 0.5;
  }
  .btn{
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>
<body>

<div class="container">
  <div class="header">
    <h3 style="padding-top: 20px;color: white;margin-left: 20px;">Selamat Datang, ADMIN!</h3>

  </div>
  
  <ul class="nav nav-tabs">
    <li class="active"><a href="#">Lapangan</a></li>
    <li><a href="admin_tarif.php">Tarif</a></li>
    <li><a href="#">Persewaan</a></li>
    <li><a href="#">Pembayaran</a></li>
  </ul>
  <br>
  <h2>LAPANGAN</h2>
  <p>Isi data di bawah dengan baik dan benar.</p>
  <form method="post">
    <div class="form-group">
     <input type="hidden" name="id"/>
      <label for="nama">Nama:</label>
      <input type="text" class="form-control" name="nama">
    </div>
    <div class="form-group">
      <label for="jenis">Jenis:</label>
      <input type="text" class="form-control" name="jenis">
    </div>
    <input type="submit" class="btn btn-primary" name="bts" value="Tambah"/>
  </form>

</div>
</body>
</html>