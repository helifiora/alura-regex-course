<?php

$regex = '/(\d\d)(\w)/';
$alvo = '11a22b33c';
$match = [];

preg_match_all($regex, $alvo, $match, PREG_OFFSET_CAPTURE);
print_r($match);