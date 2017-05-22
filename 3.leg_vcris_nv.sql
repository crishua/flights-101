DROP TABLE scanner.leg_vcris_nv;

CREATE TABLE IF NOT EXISTS  scanner.leg_vcris_nv
(
Id VARCHAR(100),
Origin VARCHAR(100),
Destination VARCHAR(100),
Stops VARCHAR(100),
Departure_time VARCHAR(100),
Arrival_time VARCHAR(100),
Duration INT(11),
Directionality VARCHAR(100),
Operating_Carrier1 VARCHAR(100),
Carrier1 VARCHAR(100),
PRIMARY KEY (Id));

INSERT INTO scanner.leg_vcris_nv
(Id,Origin,Destination,Stops,Departure_time,Arrival_time,Duration,Directionality,Operating_Carrier1,Carrier1)

SELECT
		DISTINCT(a.Id),
        j.Code AS Origin,
        k.Code AS Destination,
        l.Code AS Stops,
        a.Departure_time,
        a.Arrival_time,
        a.Duration,
        a.Directionality,
        a.Operating_Carrier1,
        a.Carrier1


FROM 
(	SELECT 
		Id,
        OriginStation,
        DestinationStation,
        SUBSTRING(Departure,12,8) AS Departure_time,
        SUBSTRING(Arrival,12,8) AS Arrival_time,
        Duration,
        Stops,
        Directionality,
        SUBSTRING_INDEX(OperatingCarriers,',',1) AS Operating_Carrier1,
        SUBSTRING_INDEX(Carriers,',',1) AS Carrier1,
        OperatingCarriers,
        Carriers

	FROM scanner.leg ) a INNER JOIN scanner.place j ON a.OriginStation=j.Id
                         INNER JOIN (SELECT Id,Code FROM scanner.place) k ON a.DestinationStation=k.Id
                         INNER JOIN (SELECT Id,Code FROM scanner.place) l ON a.Stops=l.Id
                         
    
