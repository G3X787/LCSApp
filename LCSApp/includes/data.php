<?php
     $con = mysqli_connect("localhost","dk787","Z3t5w3y","db_lcs");
     $res= mysqli_query($con,"SELECT * FROM tbl_players");
     $result = array();
     while($row=mysqli_fetch_assoc($res)){
         $result[] = $row;
     }  
     echo json_encode($result);
?>