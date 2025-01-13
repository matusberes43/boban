<?php
session_start();
$conn = new mysqli("localhost", "root", "", "moja_databaza");

if ($conn->connect_error) {
    die("Pripojenie zlyhalo: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM uzivatelia WHERE username='$username' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $_SESSION['username'] = $username;
    echo "Prihlásenie úspešné. Vitaj, $username!";
} else {
    echo "Zlé meno alebo heslo!";
}

$conn->close();
?>