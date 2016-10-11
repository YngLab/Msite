<?php
require('set_db.php');
$dot = mysqli_query($link, "SELECT * FROM `dot` ORDER BY `id` DESC");
$line = mysqli_query($link, "SELECT * FROM `line` ORDER BY `id` DESC");
?>

<style type="text/css">
html{
  width: 100%;
}
body{
  margin: 0 auto;
  width:1000px;
}
.logoapp_sample {
  background-color: #000;
  height: 250px;
  width: 250px;
}
.logoapp_sample:hover{
  opacity: .5;
}
</style>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>

<h1>一覧表示</h1>
<a href="#dot">dot</a> / <a href="#line">line</a>

<p id="dot">dot</p>

<?
  $data = mysqli_fetch_array($dot);
  while($data != null){
    echo "<img src=\"upload/dot/" .$data['ID'] .".gif\" class=\"logoapp_sample\" id= \"$data[ID]\">";
    $data = mysqli_fetch_array($dot);
  }
?>

<p id="line">line</p>

<?
  $data = mysqli_fetch_array($line);
  while($data != null){
    echo "<img src=\"upload/line/" .$data['ID'] .".gif\" class=\"logoapp_sample\" id= \"$data[ID]\">";
    $data = mysqli_fetch_array($line);
  }
?>

<script charset="utf-8">
  $(function(){
    $(".logoapp_sample").on('click',function(){
      console.log($(this).attr("id"));
    });
  });
</script>
