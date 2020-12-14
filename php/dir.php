var files = <?php $out = array();
foreach (glob('img/*.html') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['img'];
}
echo json_encode($out); ?>;