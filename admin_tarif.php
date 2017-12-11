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
    <h3 style="padding-top: 20px;color: white;margin-left: 20px;">Selamat Datang, ADMIN</h3>

  </div>
  
  <ul class="nav nav-tabs">
    <li><a href="admin_lapangan.php">Lapangan</a></li>
    <li class="active"><a href="#">Tarif</a></li>
    <li><a href="">Persewaan</a></li>
    <li><a href="#">Pembayaran</a></li>
  </ul>
  <br>
  <button type="submit" class="btn btn-primary">Tambah</button>
  <div class="table-responsive">          
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID_Tarif</th><th>Rupiah/Jam</th><th>Action</th>
      </tr>
    </thead>
    <tbody>
    <?php
include "config.php";
$res = $mysqli->query("SELECT * FROM tarif");
while ($row = $res->fetch_assoc()):
?>
     <tr>
          <td><?php echo $row['KODE_TARIF'] ?></td>
          <td><?php echo $row['PERJAM'] ?></td>
          <td>
          <!--<a href="update.php?id=<?php //echo $row['id'] ?>">Edit</a>
          <a href="delete.php?id=<?php //echo $row['id'] ?>">Delete</a>-->
          </td>
     </tr>
<?php
endwhile;
?>
    </tbody>
  </table>
</div>
  <?php include "footer.php"; ?>

</body>
</html>