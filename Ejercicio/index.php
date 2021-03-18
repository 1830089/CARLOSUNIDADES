<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tablas de multiplicar</title>
</head>
<body>
    <?php 
        $tabla=$_GET["tabla"];
        $resultados=$_GET["resultados"];

        echo 'tabla: '.$tabla.' resultados: '.$resultados;
    ?>
        <br>
        <center>
    <h1>=Tablas de multiplicar=</h1>
    <table border="1">
        <tr>
            <th>Tabla</th>
            <th>Operador</th>
            <th>Multiplicador</th>
            <th>Resultado</th>
        </tr>
        <tbody>
        <?php
            for($i=1;$i<=$resultados;$i++){
                $resultado=$tabla*$i;
        ?>
            <tr>
                <td><?php
                    echo "$tabla";
                ?></td>
                <td>×</td>
                <td><?php
                    echo "$i";
                ?></td>
                <td><?php
                    echo "$resultado";
                ?></td>
            </tr>
        </tbody>
        <?php
            }
        ?>
    </table>
    </center>
    <?php
        
        echo '<br> Recuerde usar la URL para modificar los parámetros, por ejemplo: index.php/?tabla=10&resultados=10'
    ?>

</body>
</html>