<?php 

if (isset($_POST['submit'])) {
    $recaptcha = $_POST['g-recaptcha-response'];
    $secret_key = '6LdPOPQlAAAAAIBcOpZCokI3r0PdIbZYcMNonPuy';
    $url = 'https://www.google.com/recaptcha/api/siteverify?secret='.$secret_key. '&response='.$recaptcha;
    $response = file_get_contents($url);
    $response = json_decode($response);
    if ($response->success == true) {
        echo "<script>alert('Google reCAPTCHA verified')</script>";
    } else {
        echo "<script>alert('Error in Google reCAPTCHA')</script>";
    }  

}

?>
<script>location.href = 'signin.html';</script>