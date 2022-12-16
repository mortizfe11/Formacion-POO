
CREATE TABLE `examen`.`NotasAlumnos` (
  `AlumnoId` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(50) NULL DEFAULT 'Alumno',
  `Apellido` VARCHAR(50) NULL DEFAULT 'Apellido',
  `Asignatura` VARCHAR(50) NULL,
  `Examen_1` DECIMAL(2,2) NULL DEFAULT 0.0,
  `Examen_2` DECIMAL(2,2) NULL DEFAULT 0.0,
  `TrabajoGrupo` DECIMAL(2,2) NULL DEFAULT 0.0,
  `NotaFinal` DECIMAL(3,2) NULL,
  PRIMARY KEY (`AlumnoId`));


-- 1.

    -- A) Productos con Price entre 19 y 22 incluyendo ambos extremos.
    SELECT * FROM examen.`Products` WHERE `Price` BETWEEN 19 AND 22;

    -- B) Productos con Price entre 19 y 22 excluyendo ambos extremos.
    SELECT * FROM examen.Products WHERE Price > 19 AND Price < 22;

    -- C) Producto con Price igual a 30 y a `SupplierId` 3
    SELECT * FROM examen.`Products` WHERE Price = 30 AND `SupplierId` = 3;
-- 2)
    -- A) Phone de Suppliers de New Orleans 
    SELECT Phone FROM examen.`Suppliers` WHERE `SupplierName` LIKE "%New Orleans%";

    -- B) ContactName con el PostalCode 70117 en Suppliers
    SELECT ContactName FROM examen.`Suppliers` WHERE `PostalCode` = 70117;

    -- C) Productos de SupplierId 2 con Price menor que 22
    SELECT `ProductName` AS 'Producto', `Unit` AS Unidad FROM examen.`Products` WHERE `SupplierId`= 2 AND `Price` < 22;

-- 3)
    -- A) Ordenar las entradas de Products por ContctName en orden alfabético
    SELECT * FROM examen.`Suppliers` ORDER BY ContactName;
    -- SELECT * FROM examen.`Products` AS prod INNER JOIN examen.`Suppliers` AS s ON prod.`SupplierId` = s.`SupplierId`;

    -- B) Suppliers con PostalCode entre 33000 y 70120 agrupados por país
    SELECT * FROM examen.`Suppliers` WHERE `PostalCode` BETWEEN 33000 AND 70120;
    
    -- C) Suppliers con PostalCode que NO es un número
    SELECT * FROM examen.`Suppliers` WHERE `PostalCode` REGEXP '[A-Za-z]';

-- 4) NotaFinal = 0.4 * Examen_1 + 0.4 * Examen_2 + 0.2 * TrabajoGrupo
    -- A) Insertar en la columna NotaFinal de cada alumno
    UPDATE examen.`NotasAlumnos`
    SET NotaFinal = 0.4 *`Examen_1` + 0.4 * `Examen_2` + 0.2 * `TrabajoGrupo`;

    SELECT * FROM examen.`NotasAlumnos`;
    -- B) Determinar los alumnos que aprobaron matematicas
    SELECT * FROM examen.`NotasAlumnos` WHERE `Asignatura` = 'Matemáticas' AND `NotaFinal` >= 5;

    -- C) determinar los alumnos que han aprobado inglés
    SELECT * FROM examen.`NotasAlumnos` WHERE `Asignatura` = 'Inglés' AND `NotaFinal` >= 5;

-- 5)  Teniendo en cuenta tabla 1 como products y tabla 2 como suppliers
    -- A) Selecciona ProductName del Inner JOIN de SupplierID entre Products y Suppliers con id = 2
    SELECT `ProductName` FROM `Products` AS prod
    INNER JOIN `Suppliers` AS sup
    ON prod.`SupplierId` = sup.`SupplierId`
    WHERE sup.`SupplierId` = 2 ; 
    -- B) selecciona ProductName del left join de supplierID entre Products y suppliers con id = 2 y price < 22
    SELECT `ProductName` FROM `Products` AS prod
    LEFT JOIN `Suppliers` AS sup
    ON prod.`SupplierId` = sup.`SupplierId`
    WHERE sup.`SupplierId` = 2 AND Price < 22; 
    
    -- C) selecciona el supplierName del Right join de supplierId entre Product y suppliers con id = 2 y price menor < 22
    SELECT `ProductName` FROM `Products` AS prod
    RIGHT JOIN `Suppliers` AS sup
    ON prod.`SupplierId` = sup.`SupplierId`
    WHERE sup.`SupplierId` = 2 AND Price < 22; 