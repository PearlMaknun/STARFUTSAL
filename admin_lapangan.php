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
  <button type="submit" class="btn btn-danger"><a href="insert.php">Tambah</a></button>
  <div class="table-responsive">
  <h3>LAPANGAN</h3>        
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>ID_Lapangan</th><th>Nama Lapangan</th><th>Jenis Lapangan</th><th>Action</th>
      </tr>
    </thead>
    <tbody>
    <?php
include "config.php";
$res = $mysqli->query("SELECT * FROM lapangan");
while ($row = $res->fetch_assoc()):
?>
     <tr>
          <td><?php echo $row['ID_LAPANGAN'] ?></td>
          <td><?php echo $row['NAMA'] ?></td>
          <td><?php echo $row['JENIS'] ?></td>
          <td><a href="update.php?id=<?php echo $row['ID_LAPANGAN'] ?>">Edit</a>
            <a href="delete.php?id=<?php echo $row['ID_LAPANGAN'] ?>">Delete</a></td>
          <!--<td><a href="delete.php?id=<?php //echo $row['id'] ?>">Delete</a></td>-->
          
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