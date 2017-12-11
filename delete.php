<?php
include "config.php";
if(isset($_GET['id'])):
     $stmt = $mysqli->prepare("DELETE FROM lapangan WHERE ID_LAPANGAN=?");
     $stmt->bind_param('s', $id);
 
     $id = $_GET['id'];
 
     if($stmt->execute()):
          echo "<script>location.href='admin_lapangan.php'</script>";
     else:
          echo "<script>alert('".$stmt->error."')</script>";
     endif;
endif;
?>