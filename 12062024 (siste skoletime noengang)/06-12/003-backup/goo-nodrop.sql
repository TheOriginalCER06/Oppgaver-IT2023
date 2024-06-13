-- --------------------------------------------------------
-- Host:                         C:\Users\ivalad\OneDrive - Møre og Romsdal Fylkeskommune\Dokumenter\2024-06\IT1\IvarIT1\06-12\001-prosjekt\goosa
-- Server version:               3.45.3
-- Server OS:                    
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for goosa
CREATE DATABASE IF NOT EXISTS "goosa";
;

-- Dumping structure for table goosa.goosoner
CREATE TABLE IF NOT EXISTS goosoner (
  ID INTEGER PRIMARY KEY,
  FN TEXT NOT NULL,
  LN TEXT NOT NULL,
  age INTEGER NOT NULL  
);

-- Dumping data for table goosa.goosoner: 3 rows
DELETE FROM "goosoner";
/*!40000 ALTER TABLE "goosoner" DISABLE KEYS */;
INSERT INTO "goosoner" ("ID", "FN", "LN", "age") VALUES
	(1, 'Billy', 'The Kid', 14),
	(2, 'Didric', 'NoFly', 22),
	(3, 'Messy', 'Leonora', 19);
/*!40000 ALTER TABLE "goosoner" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
