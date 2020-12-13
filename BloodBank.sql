CREATE TABLE hospital(
    hospital_id   INT PRIMARY KEY NOT NULL ,
    hospital_name VARCHAR(25) NOT NULL,
    hospital_address VARCHAR(50) NOT NULL,
    hospital_contact_no_1 VARCHAR(10) NOT NULL,
    hospital_contact_no_2 VARCHAR(10)
);
INSERT INTO hospital(hospital_id,hospital_name,hospital_address,hospital_contact_no_1,hospital_contact_no_2) VALUES 
('166','Remedy','Longing street','9521109137','9755412823'),
('797','Apollo','Stanley street','9808640013','9971709928'),
('777','Lotus','Bull street','9380032900','9173728400'),
('369','AIMS','Gundai Street','9698748781','9452840659'),
('370','AIMS','Caffe Parade','9574872513','9058171897'),
('101','Newlife','Jew street','9064132400','9536800000');
CREATE TABLE bloodbank (
    bloodbank_id NUMERIC(5) UNIQUE NOT NULL PRIMARY KEY,
    bloodbank_building_no INTEGER NOT NULL,
    blood_street_name VARCHAR(20) NOT NULL,
    bloodbank_contact_no VARCHAR(20) NOT NULL UNIQUE);
INSERT INTO bloodbank(bloodbank_id,bloodbank_building_no,blood_street_name,bloodbank_contact_no) VALUES
(1004,10,'Downing Street','9996745687'),
(1280,223,'Bakers Street','8765789654'),
(1281,123,'Newton Street','8765789653'),
(1009,15,'Yemen Road','7878656789');



 CREATE TABLE blood (
sample_no NUMERIC(5) UNIQUE NOT NULL PRIMARY KEY,
blood_grp VARCHAR(5) NOT NULL,
blood_type BOOLEAN ,
cost_per_unit INTEGER NOT NULL 
);
INSERT INTO blood(sample_no,blood_grp,blood_type,cost_per_unit) VALUES
(122,'HH',True,7000),
(124,'B+',False,3700),
(138,'B+',False,3700),
(126,'O-',True,5000),
(128,'O+',False,2300),
(130,'O+',False,2300),
(140,'O+',False,2300),
(142,'O+',False,2300),
(132,'AB+',False,3400),
(134,'A+',False,3000),
(136,'B-',True,4900),
(144,'AB-',True,4300);


CREATE TABLE donor (
    donor_id NUMERIC(5) PRIMARY KEY NOT NULL,
    donor_name VARCHAR(20) NOT NULL,
    dob DATE NOT NULL,
    date_of_donation DATE NOT NULL,
    contact_no VARCHAR(20) NOT NULL UNIQUE
);
INSERT INTO donor(donor_id,donor_name,DOB,date_of_donation,contact_no) VALUES 
(666,'Lucifer','1999-07-14','2017-12-27','666666666'),
(1133,'Amanadiel','1985-12-11','2010-02-27','9696898940'),
(1144,'Remi','1992-01-23','2018-05-18','9795957654'),
(1155,'Uriel','1980-11-07','2019-07-14','9795346275'),
(1166,'Michael','1994-08-14','2011-11-16','9657356412'),
(1177,'Johnson','1983-10-01','2019-01-11','8675483210 '),
(1188,'Charlotte','1989-09-09','2013-12-28','7689453209'),
(1199,'Daniel','1989-09-10','2018-10-20','8576408312'),
(1211,'Chloe','1992-01-13','2011-05-14','7684639035'),
(1233,'Trixie','1988-02-01','2012-10-03','8674906385'),
(1266,'Mazikeen','1982-02-18','2014-09-20','8756473830'),
(1288,'Eve','1989-10-10','2015-07-16','9765487365');

CREATE TABLE receptionist(
    receptionist_id NUMERIC(4) PRIMARY KEY NOT NULL,
    receptionist_name VARCHAR(10)
);

INSERT INTO receptionist(receptionist_id,receptionist_name) VALUES
(2020,'Charles'),
(2024,'Amy'),
(2099,'John'),
(2096,'Jake');

CREATE TABLE ordhos(
    order_id INT PRIMARY KEY,
    hospital_id INT,
    FOREIGN KEY (hospital_id)
        REFERENCES hospital(hospital_id)
    );

INSERT INTO ordhos(order_id,hospital_id) VALUES
(8777,166),
(8765,101),
(9808,797),
(7657,777),
(9585,369),
(6565,797),
(4567,369),
(5656,166),
(5886,166);

CREATE TABLE joinf (
    donor_id NUMERIC(5) PRIMARY KEY NOT NULL,
    sample_no NUMERIC(5) NOT NULL REFERENCES blood(sample_no),
    receptionist_id NUMERIC(5) NOT NULL REFERENCES receptionist(receptionist_id),
    bloodbank_id NUMERIC(5) NOT NULL REFERENCES bloodbank(bloodbank_id),
    order_id INT  REFERENCES ordhos(order_id),
    hospital_id INT  REFERENCES hospital(hospital_id)
);
INSERT INTO joinf(donor_id,sample_no,receptionist_id,bloodbank_id,order_id,hospital_id) VALUES
(666,122,2020,1004,8765,101),
(1133,124,2024,1280,8777,166),
(1144,126,2024,1280,9808,797),
(1155,128,2020,1004,7657,777),
(1166,130,2020,1004,9585,369),
(1177,132,2024,1280,4567,369),
(1188,134,2024,1280,6565,797),
(1199,136,2096,1009,5656,166),
(1211,138,2096,1009,5886,166),
(1233,140,2096,1009,null,null),
(1266,142,2024,1280,null,null),
(1288,144,2024,1280,null,null);

select blood_type,blood_grp from blood where (cost_per_unit>3600) group by blood_grp,blood_type;
select blood_type,blood_grp,cost_per_unit from blood where (cost_per_unit>3600) group by blood_grp,blood_type,cost_per_unit order by cost_per_unit;
select ordhos.order_id,hospital.hospital_name from ordhos inner join hospital on ordhos.hospital_id=hospital.hospital_id;
select * from donor where (DOB>'1992-01-01') and (date_of_donation>'2013-01-01');
select  blood_grp,cost_per_unit+100 as new_cost_per_unit from blood;
select donor_name,contact_no from donor where contact_no LIKE '9%';
select extract(month from date_of_donation) as month_of_donation from donor;
select sample_no,cost_per_unit from blood where blood_grp in('O+','A+');
select donor_name from donor where (DOB>'1992-01-01') union select donor_name from donor where (date_of_donation>'2013-01-01');
select * from ordhos where exists(select * from hospital where ordhos.hospital_id=hospital.hospital_id);


