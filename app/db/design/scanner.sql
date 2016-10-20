-- MySQL Script generated by MySQL Workbench
-- Thu Oct 20 22:54:45 2016
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema scanner
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `scanner` ;

-- -----------------------------------------------------
-- Schema scanner
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `scanner` DEFAULT CHARACTER SET utf8 ;
USE `scanner` ;

-- -----------------------------------------------------
-- Table `scanner`.`Place`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Place` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Place` (
  `Id` INT NOT NULL,
  `ParentId` INT NULL DEFAULT NULL,
  `Code` VARCHAR(45) NULL DEFAULT NULL,
  `Type` VARCHAR(45) NULL DEFAULT NULL,
  `Name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scanner`.`Carrier`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Carrier` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Carrier` (
  `Id` INT NOT NULL,
  `Code` VARCHAR(45) NULL DEFAULT NULL,
  `Name` VARCHAR(100) NULL DEFAULT NULL,
  `DisplayCode` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scanner`.`Segment`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Segment` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Segment` (
  `Id` INT NOT NULL,
  `OriginStation` INT NULL DEFAULT NULL,
  `DestinationStation` INT NULL DEFAULT NULL,
  `DepartureDateTime` VARCHAR(100) NULL DEFAULT NULL,
  `ArrivalDateTime` VARCHAR(100) NULL DEFAULT NULL,
  `OperatingCarrier` INT NULL DEFAULT NULL,
  `Duration` INT NULL DEFAULT NULL,
  `FlightNumber` VARCHAR(45) NULL DEFAULT NULL,
  `Directionality` VARCHAR(100) NULL DEFAULT NULL,
  `Carrier` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_Segment_Carrier1`
    FOREIGN KEY (`Carrier`)
    REFERENCES `scanner`.`Carrier` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Segment_Carrier1_idx` ON `scanner`.`Segment` (`Carrier` ASC);


-- -----------------------------------------------------
-- Table `scanner`.`Leg`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Leg` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Leg` (
  `Id` VARCHAR(200) NOT NULL,
  `OriginStation` INT NULL DEFAULT NULL,
  `DestinationStation` INT NULL DEFAULT NULL,
  `Departure` VARCHAR(45) NULL DEFAULT NULL,
  `Arrival` VARCHAR(45) NULL DEFAULT NULL,
  `Duration` INT NULL DEFAULT NULL,
  `Stops` VARCHAR(100) NULL DEFAULT NULL,
  `Directionality` VARCHAR(100) NULL DEFAULT NULL,
  `Carriers` VARCHAR(100) NOT NULL,
  `OperatingCarriers` VARCHAR(100) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scanner`.`Itinerary`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Itinerary` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Itinerary` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `OutboundLegId` VARCHAR(200) NULL DEFAULT NULL,
  `InboundLegId` VARCHAR(200) NULL DEFAULT NULL,
  `FileName` VARCHAR(200) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scanner`.`Agent`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`Agent` ;

CREATE TABLE IF NOT EXISTS `scanner`.`Agent` (
  `Id` INT NOT NULL,
  `Name` VARCHAR(100) NULL DEFAULT NULL,
  `ImageUrl` VARCHAR(100) NULL DEFAULT NULL,
  `Status` VARCHAR(100) NULL DEFAULT NULL,
  `OptimisedForMobile` TINYINT(1) NULL DEFAULT 0,
  `Type` VARCHAR(45) NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `scanner`.`SegmentLeg`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`SegmentLeg` ;

CREATE TABLE IF NOT EXISTS `scanner`.`SegmentLeg` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `SegmentId` INT NOT NULL,
  `LegId` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_SegmentLeg_Segment1`
    FOREIGN KEY (`SegmentId`)
    REFERENCES `scanner`.`Segment` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SegmentLeg_Leg1`
    FOREIGN KEY (`LegId`)
    REFERENCES `scanner`.`Leg` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_Segments_has_Legs_Segments1_idx` ON `scanner`.`SegmentLeg` (`Id` ASC);

CREATE INDEX `fk_SegmentLeg_Segment1_idx` ON `scanner`.`SegmentLeg` (`SegmentId` ASC);

CREATE INDEX `fk_SegmentLeg_Leg1_idx` ON `scanner`.`SegmentLeg` (`LegId` ASC);


-- -----------------------------------------------------
-- Table `scanner`.`PricingOption`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`PricingOption` ;

CREATE TABLE IF NOT EXISTS `scanner`.`PricingOption` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `AgentId` INT NOT NULL,
  `QuoteAgeInMinutes` INT NULL,
  `Price` FLOAT NULL,
  `ItineraryId` INT NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_PricingOption_AgentId`
    FOREIGN KEY (`AgentId`)
    REFERENCES `scanner`.`Agent` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_PricingOption_Itinerary1`
    FOREIGN KEY (`ItineraryId`)
    REFERENCES `scanner`.`Itinerary` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_PricingOption_Agent1_idx` ON `scanner`.`PricingOption` (`AgentId` ASC);

CREATE INDEX `fk_PricingOption_Itinerary1_idx` ON `scanner`.`PricingOption` (`ItineraryId` ASC);


-- -----------------------------------------------------
-- Table `scanner`.`FlightNumber`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `scanner`.`FlightNumber` ;

CREATE TABLE IF NOT EXISTS `scanner`.`FlightNumber` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `FlightNumber` INT NULL,
  `CarrierId` INT NOT NULL,
  `LegId` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_FlightNumber_Carrier1`
    FOREIGN KEY (`CarrierId`)
    REFERENCES `scanner`.`Carrier` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_FlightNumber_Leg1`
    FOREIGN KEY (`LegId`)
    REFERENCES `scanner`.`Leg` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_FlightNumber_Carrier1_idx` ON `scanner`.`FlightNumber` (`CarrierId` ASC);

CREATE INDEX `fk_FlightNumber_Leg1_idx` ON `scanner`.`FlightNumber` (`LegId` ASC);


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
