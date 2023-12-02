<?php
function getWebPage($url) {
    $ch = curl_init();

    // Set cURL options
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    // Execute cURL session and get the response
    $output = curl_exec($ch);

    // Close cURL session
    curl_close($ch);

    return $output;
}

// Example usage
$page1 = 'index.html';
$page2 = 'about us.html';

// Get content of page 1
$contentPage1 = getWebPage($baseURL . $page1);
echo $contentPage1;

// Get content of page 2
$contentPage2 = getWebPage($baseURL . $page2);
echo $contentPage2;
?>
