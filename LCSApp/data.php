<?php   
    mysqli_connect('localhost', 'root', '','db_lcs');
    $link = mysqli_connect('localhost', 'root', '','db_lcs');

    $return = array();
    $sql = mysqli_query($link,"SELECT * FROM tbl_players");

    while ($row = mysqli_fetch_array($sql, MYSQL_ASSOC)) {
        $row_array['id'] = $row['players_id'];
        $row_array['name'] = $row['players_name'];
        $row_array['team'] = $row['players_team'];
        $row_array['image'] = $row['players_image'];
        $row_array['bio'] = $row['players_bio'];
        $row_array['kda'] = $row['players_kda'];
        $row_array['cs'] = $row['players_avgcs'];
       
        array_push($return,$row_array);
	}

print json_encode($return);